# SauceDemo Playwright Tests

Automated browser tests written in JavaScript with Playwright against saucedemo.com, a public practice site built for testers.

## What is covered
- Login: valid user, invalid password, locked-out user
- Cart: add and remove items, cart count
- Sorting: price and name order
- Checkout: complete purchase, required-field validation

Each test uses assertions to check the result, and screenshots are captured on failure.

## How to run
1. Install Node.js
2. Run `npm install`
3. Run `npx playwright install`
4. Run `npx playwright test`
5. Run `npx playwright show-report` to open the HTML report


## What I learned
Playwright follows the same ideas as Selenium and Cypress: locate an element, act on it, assert the result. 
