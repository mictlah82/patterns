# Decorator Pattern in JavaScript

## Overview

The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.

## Project Information

### Installation

To install the project dependencies, run the following command:

```bash
npm install
```

### Usage

To run the project, use the following command:

```bash
node index.js
```

or with npm
```bash
npm start
```

### Example

Here is an example of how to use the Decorator Pattern in this project:

```javascript
const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.cost()); // 5

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(milkCoffee.cost()); // 7

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(sugarMilkCoffee.cost()); // 8
```

### License

This project is licensed under the MIT License.