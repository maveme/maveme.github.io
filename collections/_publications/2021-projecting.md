---
layout: page
# country: Chicago, IL, USA
title: Projecting Textual Languages
year: 2021
doi: https://doi.org/10.1007/978-3-030-73758-0_7
acro: Book
venue: Domain-Specific Languages in Practice
authors: Mauricio Verano Merino, Jur Bartels, Mark van den Brand, Tijs van der Storm, and Eugen Schindler.
abstract: One of the strengths of the Jetbrains MPS projectional language workbench is that it supports mixing different kinds of notations (graphical, tabular, textual, etc.). Many existing languages, however, are fully textual and are defined using grammar technology. To allow such languages to be used from within MPS, language engineers have to manually recreate the syntax of a language using MPS concepts. In this chapter, we present an approach to automatically convert grammar-based languages to MPS languages, by mapping context-free grammars to MPS concept hierarchies. In addition, parse trees of programs in those languages are mapped to MPS models. As a result, MPS users can import textual languages and their programs into MPS without having to write tedious boilerplate code. We have implemented the approach in a tool, Rascal2MPS, which converts grammars in the built-in grammar formalism of Rascal to MPS. Although the tool is specific for the Rascal context, the underlying approach is generic and can be instantiated for other grammar formalisms. We have evaluated Rascal2MPS by generating an importer for a realistic programming language (ECMAScript 5). The results show that useable MPS editors for such languages can obtained but that further research is needed to improve their layout.
preprint: /

---

---

**[Authors](#):** {{page.authors}}

**[Book:](#):** {{page.venue}}


**[DOI]({{page.doi}})** | 
<!-- **[Preprint]({{page.preprint}}){:target="_blank"}**  -->

## Abstract

{{page.abstract}}