---
layout: page
title: LLMs as User Interfaces for Domain-Specific Languages (DSLs)
level: Masters CS or AI
authors: Mauricio Verano Merino, Forward.Football
type: Graduation project

---

---
**Degree level:** {{page.level}}

**Supervisor:** {{page.authors}}


## Problem description

LLMS have demonstrated significant potential as source code generators for general purpose programming languages (GPLs) (e.g., Java, Python) thanks to the extensive training data extracted from open-source projects. As a result, tool developers and companies can use LLMS to build tools to boost engineer’s productivity (e.g., GitHub Copilot).
In the high-tech industry, both general-purpose and domain-specific languages (DSLs) are prevalent, especially in model-driven engineering. DSLs are small languages tailored to address specific domains and often individual companies. Consequently, DSL programs are typically not available in the open-source world. **This raises the question of how LLMs can be leveraged to effectively generate DSLs’ code when the code and definition of the DSLs is rarely present in the LLMs' training dataset.**

Existing literature offers several approaches to address this question. One method is to use the RAG (Retrieval-Augmented Generation) framework, which allows LLMs to retrieve similar code snippets as few-shots examples from a database that stores valid DSL programs and generate new code given a user input. Another approach is to fine-tune models specifically for a target DSL, though this can be costly. A recent comparative study (Bassamzadeh, 2024) conducted at Microsoft evaluated these two methods for a DSL. Interestingly, the RAG solution delivers comparable quality to the fine-tuned model for the DSL, suggesting that the RAG solution can be a  cheaper alternative to fine-tuning. However, both methods require a large number of code-snippets, and both produce code with syntax errors.
To address the challenge of generating syntax error-free code, there are several existing approaches that use grammars to guide LLMs code generation. One of these methods is called Syncode (Singh, 2024). Syncode incorporates grammar definitions of languages directly into the code generation process. By leveraging grammar rules, Syncode ensures that the generated code adheres strictly to the syntax requirements of the target language. This guarantees that the output is not only syntactically correct but also aligns with the specific constraints and structures of the language. As shown in their experiment, Syncode offers a more reliable solution for generating error-free code in the target GPL. However, it remains unclear whether this grammar-based method is feasible for generating DSL code from natural language prompts.

### Research questions
We would like to answer the following question:

- How effectively can LLMs generate DSL code when provided with the DSL grammar and a few DSL programs (few-shots examples) using RAG?
- How does the performance of LLMs differ between open-source DSLs and closed-source DSLs?

**Partners**:
* [TNO-ESI](https://esi.nl)
* VU Amsterdam

### References
* Bassamzadeh, N. a. (2024). A Comparative Study of DSL Code Generation: Fine-Tuning vs. Optimized Retrieval Augmentation.
* Singh, S. U. (2024). SynCode: LLM Generation with Grammar Augmentation.




