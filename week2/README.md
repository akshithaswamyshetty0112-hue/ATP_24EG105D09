# Week 2 JavaScript Assignments

This folder contains standalone JavaScript practice files for array methods, modules, and small data-processing problems.

## Files

### shoppingcartECommerce.js
Shopping cart summary assignment for an e-commerce website.

It demonstrates:
- filter() to get products that are in stock
- map() to calculate total price per product
- reduce() to calculate the grand total
- find() to get the Mouse item
- findIndex() to locate Keyboard

### studentPerformanceDashboard.js
Student result analysis assignment.

It demonstrates:
- Filtering passed students
- Mapping marks to grades
- Calculating average marks with reduce()
- Finding a student by marks
- Finding the index of a student by name

### employeePayrollProcessor.js
Employee salary processing assignment.

It demonstrates:
- Filtering employees by department
- Calculating net salary with bonus
- Calculating total salary payout
- Finding an employee by salary
- Finding an employee index by name

### movieStreamingPlatform.js
Movie recommendation and rating assignment.

It demonstrates:
- Filtering movies by genre
- Mapping movie information
- Calculating average rating
- Finding a movie by title
- Finding the index of a movie

### bankTransactionAnalyzer.js
Bank statement summary assignment.

It demonstrates:
- Filtering credit transactions
- Extracting transaction amounts
- Calculating final account balance
- Finding the first debit transaction
- Finding the index of a transaction amount

### module1.js and module2.js
Basic ES module export and import example.

module1.js exports:
- data
- person
- username

module2.js imports and prints those exported values.

## How to Run

Use Node.js:
node filename.js
Example:

node bankTransactionAnalyzer.js


For the module import example, make sure Node.js is configured for ES modules, such as by using a package.json with:

json
{
  "type": "module"
}

