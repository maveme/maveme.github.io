---
layout: page
country: Eindhoven, The Netherlands
title: Engineering Language-Parametric End-User Programming Environments for DSLs
year: 2022
# doi: 978-90-386-5466-9
acro: phd'22
venue: Eindhoven University of Technology
authors:  Mauricio Verano Merino
abstract: Human-computer communication can be achieved through different interfaces such as Graphical User Interfaces (GUIs), Tangible User Interfaces (TUIs), command-line interfaces, and programming languages. In this thesis, we used some of these inter- faces; however, we focused on programming languages which are artificial languages consisting of instructions written by humans and executed by computers. In order to create these programs, humans use specialized tools called programming environments that offer a set of utilities that ease human-computer communication. When creating programs, users must learn the language’s syntax and get acquainted with the pro- gramming environment. Unfortunately, programming languages usually offer a single user interface or syntax, which is not ideal considering different types of users with varied backgrounds and expertise will use it. Given the increasing number of people performing any kind of programming activity, it is important to offer different inter- faces depending on the programming task and the background of the users. However, from the language engineering point of view, offering multiple user interfaces for the same language is expensive, and if we specifically consider Domain-Specific Languages (DSLs), it is even more expensive given their audience and development teams’ size. Therefore, we study how to engineer different user interfaces for DSLs in a practical way. This thesis presents different mechanisms to engineer different language-parametric programming environments for end-users. These mechanisms rely heavily on reusing existing language components for existing languages or helping language engineers define these interfaces for new languages. We mainly studied four technological spaces, namely, Grammarware, Computational Notebooks, Block-based environments, and Projec- tional editors. We present three different language-parametric interfaces for interacting with DSLs, namely computational notebooks, projectional editors, and block-based editors. These interfaces offer different user experiences and rely upon different technological spaces. Different notations are associated with different technological spaces; for in- stance, grammarware is associated with text files, while block-based environments are associated with Blockly and JavaScript files. Therefore, to provide different notations for their languages, we have to "space travel" so that language engineers can select the most appropriate technological space and interface for their target audience. To support this, we defined grammarware as a common starting point to allow traveling to different technological spaces (e.g., computational notebooks space, projectional editors space, or block-based space). Based on this idea, we developed three tools that allowed language engineers to generate different interfaces for their DSLs based on a grammar definition of the language. Our results show that it is possible to generate these different user interfaces and decrease the effort required to create these. However, additional research is required to improve the usability of the generated interfaces and make the generation of these interfaces more flexible so that users’ data can be used as part of the generated interfaces.
preprint: /assets/pdfs/Mauricio_Verano_Merino.pdf

---

---

**[Authors](#):** {{page.authors}}

**[Venue](#):** {{page.venue}}


<!-- **[DOI]({{page.doi}})** |  -->
**[Preprint]({{page.preprint}}){:target="_blank"}** 

## Abstract

{{page.abstract}}
