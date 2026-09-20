/* erc-ai-feedback: the web page.
   Loads each prompt from its markdown file in the repository and copies the text
   between the marker lines, unchanged. Nothing is sent anywhere. */
(function () {
  "use strict";

  var REPO = "https://github.com/tjhavranek/erc-ai-feedback/blob/main/";
  var BEGIN = /^=== PROMPT BEGIN ===[ \t]*$/gm;
  var END = /^=== PROMPT END ===[ \t]*$/gm;
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  function count(n) { return n.toLocaleString("en-US"); }

  // The markers are also quoted in the prose above some prompts, so only a marker
  // standing alone on its line counts, and there must be exactly one of each.
  function extract(text) {
    text = text.replace(/\r\n?/g, "\n");
    var begins = text.match(BEGIN) || [];
    var ends = text.match(END) || [];
    if (begins.length !== 1 || ends.length !== 1) { return null; }
    BEGIN.lastIndex = 0; END.lastIndex = 0;
    var b = BEGIN.exec(text), e = END.exec(text);
    BEGIN.lastIndex = 0; END.lastIndex = 0;
    if (!b || !e || e.index <= b.index) { return null; }
    var body = text.slice(b.index + b[0].length, e.index).trim();
    return body || null;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function setupCopy(box) {
    var src = box.getAttribute("data-src");
    var button = box.querySelector("button");
    var status = box.querySelector(".status");
    var details = box.querySelector("details");
    var area = box.querySelector("textarea");
    var source = box.querySelector(".source");
    var prompt = null;

    // The path under the button links to the file the button fetches.
    if (source) {
      var srcLink = document.createElement("a");
      srcLink.href = REPO + src;
      srcLink.textContent = src;
      source.textContent = "";
      source.appendChild(srcLink);
    }

    function fail() {
      button.disabled = true;
      status.className = "status err";
      status.textContent = "";
      status.appendChild(document.createTextNode("The prompt could not be loaded. Open "));
      var a = document.createElement("a");
      a.href = REPO + src;
      a.textContent = src;
      status.appendChild(a);
      status.appendChild(document.createTextNode(" and copy the text between the marker lines by hand."));
      if (details) { details.hidden = true; }
    }

    fetch(src, { cache: "no-cache" })
      .then(function (res) { if (!res.ok) { throw new Error(String(res.status)); } return res.text(); })
      .then(function (text) {
        prompt = extract(text);
        if (!prompt) { throw new Error("markers"); }
        area.value = prompt;
        button.disabled = false;
      })
      .catch(fail);

    button.addEventListener("click", function () {
      if (!prompt) { return; }
      status.className = "status";
      status.textContent = "";
      copyText(prompt).then(function (ok) {
        if (ok) {
          status.textContent = "Copied, " + count(prompt.length) + " characters.";
        } else {
          details.open = true;
          area.focus();
          area.select();
          area.setSelectionRange(0, area.value.length);
          status.className = "status err";
          status.textContent = "Your browser did not allow copying. The prompt is selected below: press Ctrl+C, or ⌘C on a Mac.";
        }
      });
    });
  }

  function setupRubric() {
    var line = document.getElementById("rubric-line");
    var stale = document.getElementById("stale");
    fetch("shared/rubric_locked.md", { cache: "no-cache" })
      .then(function (res) { if (!res.ok) { throw new Error(String(res.status)); } return res.text(); })
      .then(function (text) {
        var d = /^\*\*Verified on:\*\*\s*(\d{4})-(\d{2})-(\d{2})/m.exec(text);
        if (!d) { return; }
        var y = +d[1], m = +d[2], day = +d[3];
        if (m < 1 || m > 12) { return; }
        var when = day + " " + MONTHS[m - 1] + " " + y;
        line.textContent = "The rubric behind the prompt was last verified on " + when + " and lists its sources";
        var ageDays = (Date.now() - Date.UTC(y, m - 1, day)) / 864e5;
        // Work Programmes are adopted in July, so warn before a year has passed.
        if (ageDays > 300) {
          stale.textContent = "The rubric behind this page was last verified on " + when +
            ". The ERC adopts a new Work Programme each July, so check the repository for a newer version before relying on this one.";
          stale.hidden = false;
        }
      })
      .catch(function () { /* keep the static sentence */ });
  }

  // A link such as .../#resubmission opens that section.
  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) { return; }
    var el = document.getElementById(id);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      el.scrollIntoView();
      var s = el.querySelector("summary");
      if (s) { s.focus({ preventScroll: true }); }
    }
  }

  document.querySelectorAll(".copy[data-src]").forEach(setupCopy);
  setupRubric();
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
