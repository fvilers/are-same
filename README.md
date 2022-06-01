# @fvilers/are-same

A TypeScript helper function that compare arguments for sameness

## Installation

```
npm install @fvilers/are-same
```

or

```
yarn add @fvilers/are-same
```

## Usage

```ts
import areSame from "@fvilers/are-same";

const x = {
  dob: new Date(2022, 5, 1, 9, 34),
  foo: "bar",
  n: 42,
  score: { values: [0, 1, 1, 2, 3, 5] },
};
const y = {
  dob: new Date(2022, 5, 1, 9, 34),
  foo: "bar",
  n: 42,
  score: { values: [0, 1, 1, 2, 3, 5] },
};

console.log("'x' and 'y' are", areSame(x, y) ? "the same" : "different");
```

```
'x' and 'y' are the same
```
