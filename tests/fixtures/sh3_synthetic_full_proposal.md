> **SYNTHETIC TEST FIXTURE — NOT A REAL ERC PROPOSAL.** Authored 2026-05-27 by Claude Opus 4.7 for the `erc-ai-feedback` test suite. Used to exercise the prompt's structural score caps and evidence-discipline rules in a different failure profile than the PE6 fixture. Any resemblance to real research is coincidental; the named methods, results, and references are invented.

---

# Part B1

## Cover page

**Project title:** Algorithmic Mediation and Democratic Discourse: Empirical Foundations for Platform Governance

**Acronym:** ALGOMED

**Principal Investigator:** Dr. Mateusz Wójcik
**Host institution:** Jagiellonian University, Institute of Sociology, Kraków, Poland
**Domain panel (primary):** SH3 — The Social World and Its Interactions
**Secondary panel:** SH4 — The Human Mind and Its Complexity
**Duration:** 60 months
**Requested budget:** €1,498,400

### Abstract

Algorithmic curation now mediates the bulk of the political information citizens encounter, yet our empirical and theoretical understanding of how this mediation reshapes democratic discourse remains fragmented across disciplines. Computational scientists document algorithmic behaviour without grounding it in the lived practices of users; survey-based political communication research describes attitudes without capturing platform mechanics; ethnographic studies illuminate meaning-making but rarely scale. ALGOMED bridges these traditions through a five-year programme combining (i) a panel survey of 12,000 respondents across six EU countries (PL, DE, FR, IT, ES, NL); (ii) donated browser-trace data from a 3,000-person subsample paired with platform API extracts where available; (iii) 240 in-depth interviews with politically engaged users in three contrasting national contexts; and (iv) an agent-based simulation of opinion dynamics calibrated against the empirical traces. The programme integrates a sociological theory of *mediated publicity* (developed in the PI's prior work) with cognitive accounts of selective exposure, and is therefore co-located with SH4. ALGOMED will produce the first cross-national, multi-method dataset linking individual exposure histories to attitudinal trajectories over a full electoral cycle, and will offer a generative model of opinion change that can be interrogated counter-factually. Beyond its empirical yield, the project develops the conceptual vocabulary needed to talk about algorithmic mediation as a properly *social* phenomenon rather than as an engineering artefact. **The societal relevance of the project is considerable**: results will speak directly to ongoing platform-governance debates in the EU and to the design of the Digital Services Act implementing regulations.

### Cross-panel justification (SH3 primary, SH4 secondary)

ALGOMED is anchored in SH3 because its core object is a *social* one — the structure of public communication and the institutional fabric of democratic discourse — and its primary contributions are to the sociology of media, political sociology, and the methodology of computational social science. However, two of the four work packages depend crucially on theoretical and methodological resources from SH4 (the human mind and its complexity), specifically from cognitive and political psychology.

WP2 (selective exposure under algorithmic curation) operationalises constructs from the dual-process tradition — in particular the contemporary debate between Pennycook & Rand's "lazy" account of misinformation susceptibility and the motivated-reasoning account associated with Kahan and colleagues. Resolving how *algorithmic* exposure interacts with these individual-level mechanisms requires the panel's expertise: a sociologist who only consumed the popular summaries of this debate would mis-specify the moderators in our exposure models. WP3 (opinion change at the dyadic level) builds on Bayesian models of belief updating under source-credibility cues (Hahn, Harris, Corner) and would not be legible to readers operating purely within the agenda-setting or framing traditions of mass communication research.

Concretely, three sets of SH4 readers will find the proposal directly relevant and would, we believe, change their priors about a contested question after engaging with our results: (i) scholars working on partisan motivated reasoning, who will read in WP2 a clean test of whether algorithmic personalisation amplifies or substitutes for motivated selection; (ii) researchers studying source-credibility heuristics, who will find in WP3 dyadic-level evidence on how platform-mediated source cues are integrated; and (iii) cognitive ecologists studying information environments (Hertwig, Pachur), who will see our calibrated agent-based model as a stylised but tractable representation of the *real* informational ecology in which contemporary belief revision occurs. We are therefore not asking SH4 readers merely to vouch for the cognitive vocabulary; we are asking them to adjudicate substantive contributions in their own debates.

We have considered, and rejected, two alternative cross-listings. SH2 (institutions, values, beliefs and behaviour) was an option given the political-behaviour angle, but the project's centre of gravity is communicative practice and platform mediation rather than electoral behaviour or institutional change. SH5 (cultures and cultural production) would foreground textual and cultural-studies dimensions that the project deliberately brackets in favour of patterned exposure and aggregate dynamics.

---

## Part I — Extended Synopsis (5 pages)

### 1. State of the art

The question of how mediated communication shapes democratic discourse is not new; it stretches from Lippmann (1922) and the Columbia school through Habermas (1962/1989), Katz, Iyengar's framing tradition, and the deliberative-systems literature of the past two decades (Mansbridge et al. 2012). What is new — and what motivates ALGOMED — is that the *infrastructure* of mediation has changed in ways the field has only partially digested. Three bodies of work define the current frontier.

First, the *computational/audit* literature has shown that platform recommendation systems produce systematic, measurable patterns of differential exposure (Bakshy, Messing & Adamic 2015; Bandy & Diakopoulos 2021; Huszár et al. 2022). These studies tend to treat the platform as the unit of analysis and to abstract from the user, with the consequence that we know a great deal about what platforms *do* and very little about how that doing is taken up in everyday political life. The recent generation of audit studies has begun to address this (e.g., González-Bailón et al. 2023's analysis of cross-cutting exposure on Facebook around the 2020 US election), but the audits remain US-centric, platform-centric, and largely cross-sectional.

Second, the *survey-based political communication* tradition continues to interrogate selective exposure and its political consequences (Stroud 2011; Prior 2013; Guess et al. 2019). This literature has the great virtue of representativeness and the great limitation that self-reported media exposure is now known to be a poor proxy for actual exposure (Parry et al. 2021; Scharkow 2016). Where digital trace data have been introduced, they have typically been collected from convenience samples and have suffered from selection bias.

Third, *qualitative and ethnographic* work has documented the lived texture of algorithmically mediated information life — how people make sense of feeds, how they perform political identities in semi-public spaces, how trust in sources is reconstructed when institutional cues are absent (Bucher 2018; Schrock 2018; Wójcik 2022). This work has been crucial for theory but does not, on its own, scale.

The fragmentation matters. Each tradition has matured to the point where its internal questions are well-posed, but the central question — how algorithmic mediation reshapes the actual practice of democratic discourse — falls between the three. No existing study links individual-level platform exposure (measured, not self-reported) to repeated attitudinal measurements over time, in multiple national contexts, with a theoretical apparatus capable of explaining the patterns it documents.

A second gap is theoretical. The dominant conceptual vocabulary — "filter bubbles," "echo chambers," "polarisation" — has been productively criticised (Bruns 2019; Dubois & Blank 2018) but not adequately replaced. We continue to lack a sociological account of *mediated publicity* under conditions of algorithmic curation: an account that takes seriously both the agentic practices of users and the structuring effects of the recommender, without collapsing into either methodological individualism or platform determinism.

A third gap is methodological. Computational social science has demonstrated the value of large-N digital trace data but has been less successful at integrating such data with qualitative depth and with formal models that can be interrogated counter-factually. The few attempts at genuine mixed-methods designs (e.g., Christin 2020 on news algorithms; Mejova & Kalimeri 2020) point the way but operate at smaller scales than the question requires.

A fourth gap concerns the *European* specificity of the evidence base. The dominant audit and trace studies of the past decade are overwhelmingly US-centred, both in the platforms studied (with their US-anchored content moderation and US-tuned recommenders) and in the political-communicative environments interpreted (a two-party system, a distinctive partisan-press ecology, a particular history of public-broadcasting decline). The European context — characterised by multi-party systems, persistent public-service broadcasters, plural language communities, and the supranational regulatory layer of the DSA — is theoretically distinct in ways that should affect both the empirical patterns and their normative interpretation. The handful of European cross-national studies (Goyanes et al. 2023; van Erkel & Van Aelst 2021) have used self-reported exposure measures and have not been able to link individual trace data to attitudinal change. ALGOMED's six-country design is structured to interrogate this specificity directly: PL, DE, FR, IT, ES, NL span the major institutional clusters of European media systems (Hallin & Mancini's polarised pluralist, democratic corporatist, and liberal types, with their post-2010 hybridisations).

A fifth, often-overlooked gap concerns the *temporal grain* of existing evidence. Most audit and trace studies sample exposure over days or at most weeks; most surveys take a single cross-sectional measure of attitudes. Yet the theoretical claims at stake — about whether algorithmic mediation reshapes deliberation, polarisation, or political participation — are claims about change over months and years, mediated by repeated exposures and by users' adaptive responses to perceived algorithmic behaviour. ALGOMED's three-wave panel design, with continuous WP2 trace collection across an electoral cycle, addresses the temporal-grain gap directly.

### 2. Research questions and hypotheses

ALGOMED is organised around the following overarching research question: **how does algorithmic mediation reshape the conditions and practices of democratic discourse in contemporary European publics?** We approach this through four interlocking sub-questions:

**RQ1.** How do patterns of platform-mediated exposure to political information vary across European publics, and what individual- and contextual-level factors structure that variation?

**RQ2.** How does algorithmically structured exposure relate to changes in political attitudes, beliefs, and participatory dispositions over an electoral cycle?

**RQ3.** How do users themselves understand and act within algorithmically mediated information environments, and how do these meaning-making practices feed back into exposure patterns?

**RQ4.** Can we build a generative model of opinion dynamics that reproduces, and renders intelligible, the empirical patterns identified in RQ1–RQ3?

The ambition of the programme is to **transform our understanding** of how democratic discourse is constituted under conditions of algorithmic mediation, and to provide a foundation on which future platform-governance research can build. We expect ALGOMED to **revolutionise** the way scholars approach the empirical study of mediated publicity — by demonstrating that the fragmentation between computational, survey, and qualitative traditions is a contingent rather than a necessary feature of the field.

We will *explore* how social media changes democratic deliberation across diverse European contexts, and *investigate* the mechanisms by which algorithmic curation interacts with users' political practices. Our broad expectation is that algorithmic mediation produces effects on democratic discourse that are real, patterned, and theoretically tractable, but that these effects are heterogeneous across national contexts and user types in ways that current scholarship has not adequately mapped.

### 3. Approach and methodology overview

ALGOMED is organised around four work packages corresponding to RQ1–RQ4, with a fifth integrative package.

**WP1 — Cross-national panel survey (months 6–48).** A three-wave panel survey of 12,000 respondents (2,000 per country: PL, DE, FR, IT, ES, NL), fielded around a major electoral event in each country (national or European Parliament elections). The instrument covers political attitudes, participation, media diet (self-reported and validated against the WP2 traces for a subsample), trust, and standard sociodemographic and political-psychology batteries. Fieldwork is contracted to Kantar Public via competitive tender; quotas on age, gender, region, and education, with post-stratification weights.

**WP2 — Digital trace collection (months 9–48).** A 3,000-person subsample of WP1 respondents (500 per country) donates browser-trace data via a custom-built extension (developed in collaboration with the WebTraces consortium, of which the PI is a founding member). Where platform APIs are accessible under the DSA's Article 40 research-access provisions, we will supplement with platform-side data. Trace processing follows the protocols developed in Wójcik et al. (2023, *Sociological Methods & Research*), with privacy-by-design review by an external ethics board.

**WP3 — Qualitative fieldwork (months 12–42).** 240 semi-structured interviews (80 per country in three contrasting cases: PL, DE, ES), with politically engaged users sampled from WP1, oversampling those whose WP2 traces show distinctive exposure profiles. Interviews probe sense-making, trust, and platform practice. Coding follows a hybrid abductive-grounded approach; inter-coder reliability monitored throughout.

**WP4 — Agent-based modelling (months 18–54).** A bounded-confidence opinion-dynamics model with algorithmic recommendation, calibrated against the WP2 traces. The model serves both as a synthesis device (does a parsimonious model reproduce the observed heterogeneity?) and as a counter-factual laboratory (what if recommendations were re-weighted? what if cross-cutting exposure were boosted?).

**WP5 — Theoretical integration (months 36–60).** A sustained theoretical effort to articulate the concept of *mediated publicity under algorithmic curation*, drawing on the empirical findings from WP1–WP4 and engaging with the deliberative-systems and public-sphere literatures.

The design's distinctive feature is the *layered linkage* between WPs. WP2 is not a parallel data stream alongside WP1 but an oversample drawn from it; WP3 is not a separate qualitative arm but a strategic sub-sample of WP1+WP2 selected on observed trace profiles; WP4 is not a free-standing modelling exercise but an instrument whose calibration target is the WP2 trace data and whose source-credibility weights are anchored in the WP3 coding. The integration is therefore not "mixed methods" in the additive sense (do qual *and* quant), but in the constitutive sense (each WP's analytic targets are partly defined by the others). This is a substantive methodological commitment and one of the project's principal contributions to computational social science as a field.

We are confident the programme will succeed. **If data access fails we will use alternative sources.** If platform cooperation proves insufficient we will rely on browser-trace data alone, which is the modal scenario in any case. If recruitment to WP2 underperforms we will extend the fieldwork window.

### 4. Expected outcomes and impact

ALGOMED will deliver: (i) the first cross-national multi-method dataset linking measured platform exposure to repeated attitudinal measurements across six European publics; (ii) a calibrated generative model of opinion dynamics under algorithmic curation, publicly released; (iii) a theoretical reconstruction of mediated publicity adequate to the algorithmic condition; (iv) approximately twelve peer-reviewed journal articles and a synthesising monograph; (v) a structured data-release programme for the wider research community, subject to ethical and legal constraints.

The scientific contributions cluster into three families. *Empirical*: a dataset of unprecedented design integration, permitting analyses that no existing dataset supports — including the linkage of dyadic interview-elicited source-credibility judgements to the same individuals' platform exposure traces and to their attitudinal trajectories over an electoral cycle. *Methodological*: a worked demonstration of constitutive mixed-methods integration in computational social science, with publicly released instruments and pipelines. *Theoretical*: a sociological vocabulary for mediated publicity that does not reduce to either platform determinism or methodological individualism, and that is calibrated against empirical patterns rather than asserted on principle.

**The policy relevance of ALGOMED is substantial.** Results will be communicated to the European Commission's DSA implementation working groups (with whom the PI maintains a standing dialogue), to national media regulators in the six study countries, and to civil-society organisations engaged in platform-governance advocacy. **The applied implications for platform design** — particularly around the parameters of recommender systems and the architecture of cross-cutting exposure interventions — will be developed in dedicated policy briefs and stakeholder workshops in years 4 and 5. **The broader societal impact**, in terms of contributions to the quality of European democratic discourse, is precisely the kind of contribution the ERC has supported in its previous SH3 grants.

### References (Part I)

Bakshy, E., Messing, S., & Adamic, L. (2015). Exposure to ideologically diverse news and opinion on Facebook. *Science*, 348(6239), 1130–1132.

Bandy, J., & Diakopoulos, N. (2021). More accounts, fewer links: How algorithmic curation impacts media exposure in Twitter timelines. *Proc. ACM HCI*, 5, 1–28.

Bruns, A. (2019). *Are Filter Bubbles Real?* Polity.

Bucher, T. (2018). *If… Then: Algorithmic Power and Politics*. Oxford UP.

Christin, A. (2020). *Metrics at Work*. Princeton UP.

Dubois, E., & Blank, G. (2018). The echo chamber is overstated. *Information, Communication & Society*, 21(5), 729–745.

González-Bailón, S. et al. (2023). Asymmetric ideological segregation in exposure to political news on Facebook. *Science*, 381(6656), 392–398.

Guess, A. et al. (2019). Less than you think: Prevalence and predictors of fake news dissemination on Facebook. *Science Advances*, 5(1), eaau4586.

Habermas, J. (1989 [1962]). *The Structural Transformation of the Public Sphere*. MIT Press.

Hahn, U., Harris, A. J. L., & Corner, A. (2016). Public reception of climate science: Coherence, reliability, and independence. *Topics in Cognitive Science*, 8(1), 180–195.

Huszár, F. et al. (2022). Algorithmic amplification of politics on Twitter. *PNAS*, 119(1), e2025334119.

Kahan, D. (2017). Misconceptions, misinformation, and the logic of identity-protective cognition. *Cultural Cognition Working Paper* 164.

Mansbridge, J. et al. (2012). A systemic approach to deliberative democracy. In *Deliberative Systems*, Cambridge UP.

Mejova, Y., & Kalimeri, K. (2020). Effect of values and technology use on exercise: Implications for personalised behaviour change. *CHI 2020*.

Parry, D. A. et al. (2021). A systematic review and meta-analysis of discrepancies between logged and self-reported digital media use. *Nature Human Behaviour*, 5, 1535–1547.

Pennycook, G., & Rand, D. G. (2019). Lazy, not biased: Susceptibility to partisan fake news is better explained by lack of reasoning than by motivated reasoning. *Cognition*, 188, 39–50.

Prior, M. (2013). Media and political polarization. *Annual Review of Political Science*, 16, 101–127.

Scharkow, M. (2016). The accuracy of self-reported internet use. *Communication Methods and Measures*, 10(1), 13–27.

Schrock, A. R. (2018). *Civic Tech*. University of Minnesota Press.

Stroud, N. J. (2011). *Niche News*. Oxford UP.

Wójcik, M. (2022). Reading the feed: Sense-making practices in algorithmically curated political information. *European Journal of Sociology*, 63(2), 211–240.

Wójcik, M., Nowak, A., & Lévy-Bencheton, R. (2023). Trace ethics: A protocol for privacy-preserving donation of browser histories in political-communication research. *Sociological Methods & Research*, 52(4), 1601–1638.

---

## CV and Track Record (4 pages)

### Personal details

**Name:** Mateusz Wójcik
**Date of birth:** 1988
**Nationality:** Polish
**Current position:** Associate Professor (Profesor uczelni), Institute of Sociology, Jagiellonian University, since October 2022
**Previous positions:** Assistant Professor, Jagiellonian University (2020–2022); Postdoctoral Fellow, Oxford Internet Institute (2019–2020)
**PhD:** Sociology, London School of Economics, December 2019. Dissertation: *Algorithmic intermediaries and the reconfiguration of political talk*. Supervisors: Prof. Sonia Livingstone (LSE), Prof. Robin Mansell (LSE, second).
**MA:** Sociology, Jagiellonian University, 2014 (summa cum laude).

### Statement of methodological independence and PI-attributable contribution

Since completing the PhD I have established and led an independent research line on *trace methodologies for political communication*. The defining feature of this line is the integration of donated digital-trace data, panel surveys, and qualitative fieldwork into a single design — an integration that was uncommon in 2019 and that I have since helped to normalise through methodological papers, software releases, and the WebTraces consortium I co-founded in 2021 (now eleven research groups across nine countries; I currently chair its scientific board).

Three signals support the independence claim. (i) Of my fifteen post-PhD peer-reviewed publications, eleven do not include my doctoral supervisors as co-authors; the substantive line was initiated by me and grown by my own team. (ii) The methodological contribution embodied in Wójcik, Nowak & Lévy-Bencheton (2023) — the "trace-ethics" protocol — is now used by groups I am not affiliated with (cited 87 times as of April 2026, including adoptions by the EU's DSA-research network and by the OII's REPHRAIN team). (iii) I have built and funded my own group of three postdocs and four PhD students at Jagiellonian, supported by an NCN OPUS grant (PI, 2021–2025) and a Polish NAWA Polish Returns grant (PI, 2020–2024) — independent funding awarded on my own proposals before the present application.

### Why this PI for this project

The match between PI and project is direct. The proposed programme combines a cross-national panel survey (a design I have used previously at smaller scale), browser-trace donation (a method I co-developed and whose ethical protocol I authored), in-depth qualitative interviewing (the principal method of my doctoral and early postdoctoral work), and agent-based modelling of opinion dynamics (a tradition I entered through my 2023 collaboration with the Warsaw computational-sociology group, leading to two co-authored papers). No element of ALGOMED requires me to acquire a fundamentally new method; every WP rests on a method I have already published in.

### Ten representative publications (2019–2025)

(All peer-reviewed unless otherwise noted; co-authors listed; PI's contribution stated where ambiguous.)

1. **Wójcik, M.** (2022). Reading the feed: Sense-making practices in algorithmically curated political information. *European Journal of Sociology*, 63(2), 211–240. [Sole-authored; methodological and theoretical core paper.]

2. **Wójcik, M.**, Nowak, A., & Lévy-Bencheton, R. (2023). Trace ethics: A protocol for privacy-preserving donation of browser histories in political-communication research. *Sociological Methods & Research*, 52(4), 1601–1638. [PI conceived the protocol, led drafting; cited 87× by April 2026.]

3. **Wójcik, M.** & Kowalski, T. (2024). Heterogeneous exposure: A six-country analysis of news repertoires under algorithmic curation. *Information, Communication & Society*, 27(3), 410–434. [PI led design and analysis.]

4. **Wójcik, M.** (2021). Public-sphere theory in the platform age: A reconstruction. *European Journal of Social Theory*, 24(4), 565–586. [Sole-authored.]

5. **Wójcik, M.**, Schmidt, L., & Karlsson, E. (2023). Modelling bounded-confidence dynamics on empirical recommender graphs. *Journal of Mathematical Sociology*, 47(4), 245–271. [PI led empirical calibration; co-authors led formal proofs.]

6. **Wójcik, M.** & Andersson, H. (2022). The disappearance of the median news consumer. *Political Communication*, 39(6), 711–732.

7. **Wójcik, M.** (2020). What ethnography of platforms can and cannot show. *Qualitative Sociology*, 43(3), 351–369.

8. Nowak, A. & **Wójcik, M.** (2021). Donation as method: Trace data and the consent problem. *New Media & Society*, 23(8), 2289–2308. [Second author but co-equal; first authorship rotated within the WebTraces consortium.]

9. **Wójcik, M.**, Mejova, Y., & Lévy-Bencheton, R. (2025). Algorithmic exposure and offline talk: A multi-method study of the 2024 European Parliament elections. *American Journal of Sociology* (forthcoming).

10. **Wójcik, M.** (2024). *Mediated Publicity: A Sociological Theory* (monograph, Polity Press).

### Peer recognition and standing

- **European Sociological Association Early-Career Award**, 2023 (awarded annually to one scholar under 40).
- **Polish Academy of Sciences Annual Prize for Outstanding Young Scientist** (Sociology), 2022.
- **Invited keynote**, International Communication Association Annual Conference (Methods division), 2024.
- **Invited keynote**, RC33 Logic and Methodology in Sociology Conference, 2024.
- **Invited lectures** (selected, 2021–2025): University of Oxford, Sciences Po, Berlin Social Science Center, University of Amsterdam, Stanford, MIT Media Lab, Hebrew University, EUI Florence, ETH Zürich.
- **Editorial board member**, *Sociological Methods & Research* (2023–); *European Journal of Sociology* (2024–); *Communication Methods and Measures* (associate editor, 2022–).
- **Member**, EU DSA Article 40 Research Access Advisory Group (2024–).
- **Scientific board chair**, WebTraces Consortium (2022–).

### Independent funding awarded as PI

- **NCN OPUS-22** (Poland's National Science Centre), "Trace-based political communication research in Central Europe," PLN 1,840,000, 2021–2025, PI.
- **NAWA Polish Returns**, PLN 2,200,000, 2020–2024, PI.
- **Volkswagen Foundation, Original — Isn't It?** seed grant, €120,000, 2023–2024, co-PI with Y. Mejova.

### Teaching and supervision

I currently supervise four doctoral students at Jagiellonian (three primary, one co-supervised with LSE). Two have completed Master's theses under my supervision and progressed to PhDs at ETH and Amsterdam respectively. I designed and teach the Institute's MA-level course on "Computational and Mixed Methods for the Social Sciences" (2021–).

### Other relevant activities

- Co-organiser, *Algorithmic Politics* summer school, Kraków, 2022, 2023, 2024 (≈40 participants per year, competitive admission).
- Referee for *American Sociological Review*, *American Journal of Sociology*, *European Sociological Review*, *Political Communication*, *Science*, *Nature Human Behaviour* (selected).
- Public-facing writing in *Gazeta Wyborcza*, *Le Monde*, *Süddeutsche Zeitung*, the *LSE Impact Blog*.

---

# Part B2 — Scientific proposal (7 pages)

## Section 1 — Detailed methodology

### 1.1 Overall design

ALGOMED is a five-year, four-work-package programme integrating a three-wave cross-national panel survey (WP1), donated browser-trace data with optional platform-side supplementation (WP2), in-depth qualitative interviewing in three contrasting national cases (WP3), and a calibrated agent-based simulation (WP4). A fifth WP (WP5) integrates findings theoretically. The design is mixed-methods by construction rather than by addition: WP2 oversamples from WP1, WP3 oversamples from WP1+WP2, and WP4 is calibrated against WP2.

### 1.2 WP1 — Panel survey

**Sample.** 12,000 respondents across six countries (PL, DE, FR, IT, ES, NL), 2,000 per country, recruited and managed by Kantar Public under contract. Sampling is probability-based where infrastructure permits (DE, NL via address-based) and quota-controlled probability-equivalent elsewhere, with post-stratification weights to national targets on age × gender × region × education × political interest.

**Waves.** Three waves: T1 six months before the focal electoral event in each country (year 1–2), T2 within four weeks of the election (year 2–3), T3 nine months post-election (year 3–4). The staggered country fieldwork accommodates the actual electoral calendar (PL 2027 parliamentary, DE 2027 federal, FR 2027 presidential, IT 2027 if early or 2028 regular, ES 2027 if early or 2028 regular, NL 2028 provincial; we will adapt to the actual calendar). Attrition target: ≤30% across waves, with refresh oversample as needed.

**Instrument.** Core blocks: political attitudes (12-item module derived from ESS); participation (eight items); media diet (self-report, validated against WP2); platform use (frequency, modality, settings); political-psychology batteries (need-for-cognition short form, cognitive-reflection three-item, political-knowledge five-item); trust (institutional, interpersonal, media-specific); standard sociodemographics. Total instrument ≤ 22 minutes. Translation by professional services with cognitive testing of n=15 per country.

**Analysis.** Pre-registered hypotheses on (a) over-time stability of attitudes by exposure regime, (b) cross-national differences in the structure of media repertoires, (c) the relation between platform-mediated exposure and participation. Models: latent-class trajectory analysis (WP1), multilevel cross-classified models for cross-national variation, mediation analysis where WP2 traces are available. Measurement invariance across countries assessed via standard configural-metric-scalar testing before substantive cross-national claims; partial-invariance approaches per Davidov et al. used where full scalar invariance fails. Power analysis (Monte Carlo simulation, conducted Q4 2025) indicates that detecting a small-to-moderate cross-level interaction (β = 0.10 between exposure repertoire and attitude change, ICC ≈ 0.05) requires approximately n = 1,800 per country at the panel level, comfortably within the 2,000-per-country target after expected attrition. Pre-registration on OSF prior to T2 analysis; all analytical code released with publications.

### 1.3 WP2 — Digital trace collection

**Subsample.** 3,000 WP1 respondents (500 per country) consent at T1 to install the *TraceDonor* browser extension, developed by the WebTraces consortium and audited by an independent privacy review (Open Source Privacy Foundation, 2024).

**Data captured.** URLs visited on a defined whitelist of news and social-media domains; on-page dwell time; click-stream sequence; on social platforms, the structural metadata of items in the feed (presence/absence in feed, position, source identity), captured client-side without scraping platform-side identifiers. We do not capture content beyond domain and item-level metadata; we do not capture private messages.

**Platform-side supplementation.** Where DSA Article 40 access is granted (we have a preliminary positive indication for Meta and TikTok; X is uncertain), we will supplement with platform-side exposure metadata. The design does not depend on Article 40 access (see risk section).

**Ethics and privacy.** Trace ethics protocol per Wójcik et al. (2023). Local ethics approval at Jagiellonian (already secured for pilot, will be re-secured for full study). GDPR DPIA conducted with University DPO. Subjects can pause and withdraw at any point; data on withdrawal is permanently deleted; raw traces are pseudonymised on the device before transmission; analyst access is only to derived features, not raw URLs, after the first 90 days.

**Analysis.** Construction of exposure repertoires per respondent-wave; measures of source diversity, ideological range, cross-cutting exposure. Linkage to WP1 attitudinal trajectories via mediation models (lavaan / Mplus). Pre-registration via OSF before data analysis (data collection design pre-registered at proposal stage).

**Validation against self-report.** A subsidiary but important contribution: by collecting both self-reported media diet (in WP1) and measured exposure (in WP2) for the same 3,000 individuals, we will produce European-context validation data on the size and structure of the self-report/trace gap. Parry et al. (2021) document the gap in aggregate; the WP1+WP2 design lets us examine its individual-level structure and its dependence on platform, political-interest level, and country. This validation analysis is itself an expected output (one paper).

### 1.4 WP3 — Qualitative fieldwork

**Sample.** 240 interviews across PL, DE, ES (80 per country), with politically engaged users (defined as scoring ≥5 on a six-item political-engagement scale in WP1). Half the interviewees are sampled from the WP2 subsample with distinctive trace profiles (high cross-cutting, low cross-cutting, mixed); half from the broader WP1 sample. Interviews conducted in-person where feasible, otherwise by video.

**Instrument.** Semi-structured guide developed iteratively in the first six months; probes on sense-making, trust in sources, platform practice, political talk in everyday settings. Trace-elicitation: where available, the interviewer presents a printout of the participant's own (anonymised) recent exposure pattern as a stimulus.

**Analysis.** Hybrid abductive-grounded coding in MAXQDA. Two coders per country; inter-coder reliability calculated on 20% double-coded subsample (target κ ≥ 0.70); discrepancy resolution by triadic discussion. Cross-national comparison via a structured comparative coding matrix developed in months 24–30.

**Interfaces with WP2 and WP4.** WP3's distinctive analytic contribution is its position at the interfaces. Findings on source-credibility heuristics feed directly into the parameterisation of WP4's source-weighting function; findings on users' adaptive responses to perceived algorithmic behaviour (so-called "folk theories" of the feed; see Eslami et al. 2016; DeVito 2021) inform the WP1 instrument for T2 and T3 and provide qualitative depth for interpreting the WP2 trace patterns. The qualitative work is designed to be analytically productive across the programme, not parallel to it.

### 1.5 WP4 — Agent-based modelling

**Model.** A bounded-confidence opinion-dynamics model with explicit algorithmic-recommendation layer, building on Schmidt, Wójcik & Karlsson (2023). Agents hold opinions on a multidimensional issue space; interactions are mediated by a recommender that scores candidate interaction partners on (a) opinion similarity, (b) past engagement, and (c) an exogenous diversity parameter. Opinions update under bounded-confidence rules with source-credibility weighting (calibrated against the WP3 source-credibility findings).

**Calibration.** Parameters are calibrated against the WP2 traces using approximate Bayesian computation, with summary statistics drawn from the empirical exposure repertoires and their evolution across waves. Sensitivity analysis varies each parameter ±50% from the calibrated point.

**Counter-factual experiments.** Three pre-registered experiments: (i) what if the recommender's diversity parameter were doubled? (ii) What if engagement weight were zero? (iii) What if cross-cutting items received a fixed positional bonus? Each experiment is run on the calibrated model and on twenty alternative calibrations to assess robustness.

**Software release.** The model and calibration pipeline will be released as open-source Python (ALGOMED-ABM) under an Apache 2.0 licence at month 48.

### 1.6 WP5 — Theoretical integration

A sustained programme of writing and workshops in years 4–5 articulating a sociological theory of *mediated publicity under algorithmic curation*. Two workshops (Kraków months 42 and 54, with invited interlocutors from SH3 and SH4). Output: monograph and three theoretically integrative papers.

The theoretical work builds outward from three points of leverage. First, the empirical demonstration (from WP1+WP2) that exposure repertoires differ structurally across the six countries provides material against which to test universalising claims in the platform-effects literature. Second, the WP3 evidence on sense-making practices provides a check against treating users as passive recipients of algorithmic curation. Third, the WP4 modelling provides a formal language in which to specify the relations between recommender parameters, individual updating, and aggregate publicity outcomes — a language the qualitative-empirical literature has lacked. The theoretical synthesis is therefore not freestanding philosophical work but a sustained reading of the empirical findings through the public-sphere and deliberative-systems traditions.

### 1.7 Originality and feasibility

The originality of ALGOMED is in its design integration. Each component is achievable in isolation; the integration — and specifically the use of WP2 as the bridge between WP1 attitudes and WP3 meaning-making, and as calibration target for WP4 — is the contribution. **We have published in top-tier venues** including *Science*-adjacent fora and the flagship sociology journals, demonstrating that the research line is taken seriously by the field's gatekeepers, and we are confident the integrative design will be similarly received.

## Section 2 — Work plan

(See timeline figure, attached as Annex 1.)

- **Year 1 (M1–12):** Team recruitment (postdocs M1–4, PhD students M3–6); WP1 instrument development and cognitive testing (M3–9); WP2 extension audit and pilot (M3–9); WP1 T1 fieldwork begins (M10).
- **Year 2 (M13–24):** WP1 T1 completes; WP2 trace collection begins (M13); WP3 instrument development and pilot (M15–20); WP3 fieldwork begins (M21).
- **Year 3 (M25–36):** WP1 T2 around focal elections (rolling); WP2 ongoing; WP3 fieldwork ongoing; WP4 development begins (M25).
- **Year 4 (M37–48):** WP1 T3; WP2 ends (M48); WP3 fieldwork ends (M42); WP4 calibration (M37–48); WP5 first workshop (M42); first integrative outputs.
- **Year 5 (M49–60):** WP4 counter-factual experiments and software release (M48); WP5 second workshop and monograph drafting; final dataset preparation and release; closing conference.

Annex 1 (Gantt) details the per-WP deliverables and milestones.

## Section 3 — Resources and budget

Total requested: **€1,498,400** over 60 months.

| Category | Amount (€) | Justification |
|---|---|---|
| PI salary (50%) | 280,000 | Buy-out of 50% teaching at JU |
| Senior postdocs (3 × 36 months FTE-equivalent) | 410,000 | One quant lead, one qual lead, one ABM lead |
| PhD students (4 × 48 months) | 240,000 | One per major WP |
| Fieldwork (WP1 Kantar contracts) | 290,000 | 6 countries × 3 waves; competitively tendered |
| Fieldwork (WP3 interviews) | 60,000 | Travel, transcription, incentives |
| WP2 infrastructure | 45,000 | TraceDonor maintenance share; secure storage |
| WP4 computing | 18,000 | Calibration cluster time |
| Equipment (laptops, secure devices) | 22,000 | Replacement-level |
| Travel and conferences | 48,000 | Five-year programme |
| Open access and data release | 22,000 | Articles, datasets, monograph |
| Workshops and dissemination | 28,000 | Two integrative workshops; closing conference |
| Audit, ethics, DPO support | 12,000 | Independent privacy review |
| Indirect costs (25%) | (charged on direct) | Per H2020/HE rules |
| **Total direct** | **1,475,000** | |
| **Buffer / contingency** | **23,400** | |

The 50% PI buy-out is essential: the integrative leadership role across four methodological WPs cannot be performed on residual time. The three postdocs cover the three methodological axes (survey, traces, modelling); the four PhDs supply the next-generation skill-building the consortium requires and provide WP-level continuity. Kantar's pricing is consistent with comparable cross-national survey work (cf. ESS round-9 cost per case ≈ €25; we have negotiated €24/case on a 36,000-completed-interview total).

## Section 4 — Risks and mitigation

ALGOMED carries methodological and operational risks that are real but, in each case, addressable through concrete contingencies that we have planned in advance.

**R1 — DSA Article 40 platform access fails or is delayed.** Likelihood: medium-high (the Article 40 ecosystem is still maturing). Impact if unmitigated: loss of platform-side supplementation for WP2. *Mitigation:* the design's primary data source is donated browser traces, not platform-side data. We have already piloted the donation pathway with n=120 (Kraków pilot, 2024) and have a known recruitment yield (12.3% of WP1 respondents in the pilot). Even with zero platform-side access, WP2's exposure-repertoire measures are computable. Should Article 40 access be granted late, we will integrate platform-side data in a supplementary analysis at month 36 rather than redesign.

**R2 — WP2 recruitment under-yields.** Likelihood: medium. Impact: reduced power for WP1–WP2 linkage. *Mitigation:* we have built the budget on a 12% donation yield (giving 3,000 from 25,000 invitations distributed across the 12,000 panel and refresh waves); the pilot yielded 14%. If yield falls below 10%, we will (a) extend the invitation window by six months, (b) increase the incentive from €30 to €45, and (c) re-target the qualitative subsample to the achieved trace sample. We will not chase the 3,000 target by relaxing data-quality criteria.

**R3 — Country-specific electoral calendar shifts.** Likelihood: high in at least one country. Impact: misalignment of T2 wave with focal election. *Mitigation:* the design uses staggered fieldwork; if a country's election shifts, we adjust that country's fieldwork window independently. WP1 budget includes a 12% buffer for revised fieldwork dates.

**R4 — Ethics or legal challenge to trace donation.** Likelihood: low (the protocol has been used previously without incident) but non-trivial. *Mitigation:* the trace-ethics protocol has been pre-cleared by Jagiellonian's ethics committee and reviewed by independent counsel in 2024. We have a formal opt-out and data-deletion path. We have established standing legal advice with a Warsaw firm specialising in data-protection law (engagement letter on file). In the event of a regulatory challenge in any one country we will pause fieldwork in that country pending resolution and complete the remaining countries on schedule.

**R5 — Key personnel turnover.** Likelihood: medium over five years. *Mitigation:* the consortium structure (WebTraces) provides a pre-vetted talent pool; postdoc continuity is built into the workplan (overlapping appointments at WP transitions); the PI's institutional anchoring at Jagiellonian provides stability.

**R6 — Agent-based model fails to calibrate within bounds.** Likelihood: medium. *Mitigation:* WP4's primary value is the synthesis exercise rather than a successful single-parameter calibration. If approximate Bayesian computation yields multi-modal posteriors or fails to recover identifiable parameters, we report this as a finding (the empirical signature is not reducible to a parsimonious recommender-plus-bounded-confidence model) and shift WP4's emphasis toward sensitivity analysis and qualitative pattern-matching. We have set a hard go/no-go review at month 42 on the modelling track.

**R7 — Privacy incident in WP2 raw-data handling.** Likelihood: low. *Mitigation:* on-device pseudonymisation; raw URLs purged after 90 days; analyst access only to derived features; encrypted-at-rest storage; annual third-party security review (Open Source Privacy Foundation contracted for years 1, 3, 5).

### Closing note

ALGOMED is ambitious in scope but built on methodological foundations the PI has already demonstrated. The five-year horizon and €1.5M budget are commensurate with the design's integrative ambition, and the risk plan above gives concrete fallbacks for each substantial risk we have identified.
