---
title: Exchange learning Discrete
date: 2025/12/10
desc: Exchange to NUS (National university of Singapore) learning
tags: Exchange/Study/CS1231
---




## Chapter 1 — Propositional Logic

### 1.1 Propositions

* **Definition**: A proposition is a sentence that is either true (T) or false (F), not both. Its truth value is unique—even if unknown.
* **Non-Propositions**: Questions, commands, expressions with unassigned variables (`x + y = 0`), paradoxes (e.g., Liar Paradox: "This sentence is not true").
* **Example (Liar Paradox)**: Assuming `R = "R is not true"` leads to contradiction: `R ∈ R ↔ R ∉ R`. Not a proposition.

### 1.2 Boolean Connectives

* **Negation (`¬p`)**: Truth opposite of `p`.
* **Conjunction (`p ∧ q`)**: True only if both `p` and `q` are true.
* **Disjunction (`p ∨ q`)**: Inclusive "or". True if at least one is true.
* **Note**: Use "exclusive or" explicitly if needed.

### 1.3 Conditional Propositions

* **Implication (`p → q`)**: False only if `p = T` and `q = F`. True otherwise (including vacuous truth when `p = F`).
* **Related Forms**:

  * Converse: `q → p` (not equivalent).
  * Inverse: `¬p → ¬q` (not equivalent).
  * Contrapositive: `¬q → ¬p` (logically equivalent).
* **Biconditional (`p ↔ q`)**: True if `p` and `q` have the same truth value.

### 1.4 Logical Equivalence

* **Equivalence (`P ≡ Q`)**: Same truth value for all substitutions.
* **Tautology**: Always true.
* **Contradiction**: Always false.
* **Key Identities**: De Morgan, implication equivalence, double negation, idempotent, commutativity, associativity, distributivity.

---

## Chapter 2 — Predicate Logic

### 2.1 Predicates and Variables

* **Variable**: Placeholder with domain (e.g., `x ∈ ℤ`).
* **Predicate**: Becomes proposition when variables are assigned.
  Example: `P(x): x² ≥ x` over ℚ.

### 2.2 Quantifiers

* **Universal (`∀x`)**: True if predicate holds for all x. Counterexample disproves.
* **Existential (`∃x`)**: True if predicate holds for some x (witness).
* **Restricted Form**: `∀x ∈ D P(x)` = `∀x (x ∈ D → P(x))`; `∃x ∈ D P(x)` = `∃x (x ∈ D ∧ P(x))`.

### 2.3 Negation of Quantifiers

* `¬∀x P(x) ↔ ∃x ¬P(x)`
* `¬∃x P(x) ↔ ∀x ¬P(x)`
* **Examples**:

  * "Not every integer is even" ↔ `∃n ∈ ℤ ¬Even(n)`
  * "No integer is both odd and even" ↔ `∀n ∈ ℤ ¬(Odd(n) ∧ Even(n))`

### 2.4 Nested Quantifiers

* **Order Matters**: `∀x ∃y Q(x,y) ≠ ∃y ∀x Q(x,y)`
* **Unique Existential (`∃! x`)**: Existence + uniqueness.
* **Negation**: Flip quantifiers and negate predicate.

---

## Chapter 3 — Proofs

### 3.1 Mathematical Theories

* **Components**: Definitions, Axioms, Theorems, Lemmas, Corollaries.
* **Deduction Rules**: Modus ponens, universal instantiation, transitivity of implication.

### 3.2 Common Proof Techniques

1. **Direct Proof**: Assume `p` → show `q`.
2. **Contrapositive**: Prove `¬q → ¬p` instead of `p → q`.
3. **Contradiction**: Assume false → derive contradiction.
4. **Cases**: Split into exhaustive cases.
5. **Constructive**: Construct explicit example.
6. **Induction**: Base case + inductive step.

### 3.3 Number Theory (Extra)

* **Divisibility**: `d | n ↔ n = d·k`.
* **Primes**: Only divisible by 1 and itself.
* **Fundamental Theorem**: Unique prime factorization.
* **Classic Proof**: `√2` is irrational (contradiction using lowest terms).

---

## Chapter 4 — Sets

### 4.1 Basics

* **Set**: Unordered collection of elements.
  Notation: `x ∈ A` (x in A), `x ∉ A` (x not in A).
* **Set Notations**: Roster `{1,2,3}`, Set-builder `{x ∈ U : P(x)}`, Replacement `{t(x) : x ∈ A}`.
* **Equality**: `A = B ↔ ∀z (z ∈ A ↔ z ∈ B)`.
* **Empty Set**: `∅`.

### 4.2 Subsets

* **Subset**: `A ⊆ B ↔ ∀z(z ∈ A → z ∈ B)`
* **Proper Subset**: `A ⊂ B` and `A ≠ B`
* **Power Set**: `𝒫(A)` = set of all subsets

### 4.3 Boolean Operations

* Union `A ∪ B`, Intersection `A ∩ B`, Difference `A \ B`, Complement `Ā`
* **Disjoint**: `A ∩ B = ∅`
* **Identities**: Commutative, Associative, Distributive, De Morgan's Laws.

### 4.4 Russell’s Paradox (Extra)

* No `R` exists such that `x ∈ R ↔ x ∉ x`.

---

## Chapter 5 — Relations

### 5.1 Basics

* Ordered pair `(x, y)`
* Cartesian product `A × B`
* Relation `R ⊆ A × B`, notation `xRy ↔ (x, y) ∈ R`
* n-ary relations: subsets of `A₁ × … × Aₙ`.

### 5.2 Operations

* Composition: `S ○ R`
* Inverse: `R⁻¹`
* `(S ○ R)⁻¹ = R⁻¹ ○ S⁻¹`

### 5.3 Graphs

* Binary relation: subset of `A × A`
* Directed: `(V,D)`
* Undirected: `(V,E)` with edges `{x,y}`

---

## Chapter 6 — Equivalence & Partial Orders

* **Equivalence**: Reflexive, Symmetric, Transitive
* **Equivalence Class**: `[x] = {y ∈ A : x ∼ y}`
* **Partition**: Non-empty, disjoint, cover all elements
* **Partial Order**: Reflexive, Antisymmetric, Transitive
* **Total Order**: All pairs comparable
* **Well-Ordering**: Every non-empty subset of ℤ≥b has smallest element

---

## Chapter 7 — Functions

* **Definition**: `f: A → B` (existence + uniqueness)
* **Domain / Codomain / Range**
* **Boolean function**: `f: {T,F}ⁿ → {T,F}`
* **Composition**: `(g ○ f)(x) = g(f(x))`
* **Identity**: `id_A(x) = x`
* **Inverse / Bijective / Surjective / Injective**

---

## Chapter 8 — Cardinality

* **Injection** → `|A| ≤ |B|` (Pigeonhole)
* **Surjection** → `|A| ≥ |B|` (Dual)
* **Bijection** → same cardinality
* **Finite / Infinite**
* Reflexive, Symmetric, Transitive properties

---

## Chapter 9 — Countability

* **Countable**: Injection to ℕ
* **Equivalence**: Countable ↔ ∃ surjection ℕ → A or A=∅
* **Examples**: ℕ, ℤ, ℕ×ℕ, `{0,1}*`
* **Uncountable**: Power set larger than set (Cantor)
* **Non-computable**: Halting problem

---

## Chapter 10 — Counting

* **Addition / Difference / Inclusion-Exclusion**
* **Multiplication / Cartesian / Power Set Cardinality**
* **Permutations / Combinations / Factorial**
* Pascal’s Formula: `C(n,r) + C(n,r+1) = C(n+1,r+1)`

---

## Chapter 11 — Graphs

* **Undirected Graph**: `(V,E)`
* **Subgraph**, **Path**, **Cycle**, **Cyclic/Acyclic**, **Connected Graph**, **Connected Component**
* Key theorem: connected ↔ path exists

---

## Chapter 12 — Trees

* **Tree**: Connected, acyclic
* **Properties**: Unique path, removing edge disconnects, |E| = |V|-1
* **Rooted Tree**: Height, Parent/Child, Leaf/Internal
* **Spanning Tree**: Algorithm to get tree from connected graph
* **Theorems**: max leaves ≤ 2^h, internal vertices, total vertices

---


