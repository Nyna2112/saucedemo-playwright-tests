import { test, expect } from '@playwright/test';

test('testing about section', async ({ page }) => {
  await test.step('Log in', async () => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  });
  await page.getByRole('button',{name: 'Open Menu'}).click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await expect(page.locator('.hero-eyebrow')).toHaveText('From BUSINESS Intent to Production Confidence');
  
});
test('testing checkout form', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button',{name: 'Checkout'}).click();
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText(' First Name is required');
});
test('testing checkout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button',{name: 'Checkout'}).click();
  await page.locator('[data-test="firstName"]').fill('naina');
  await page.locator('[data-test="lastName"]').fill('na');
  await page.locator('[data-test="postalCode"]').fill('neyana');
  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});
test('testing payment flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button',{name: 'Checkout'}).click();
  await page.locator('[data-test="firstName"]').fill('naina');
  await page.locator('[data-test="lastName"]').fill('na');
  await page.locator('[data-test="postalCode"]').fill('neyana');
  await page.locator('[data-test="continue"]').click();
  await page.getByRole('button',{name: 'Finish'}).click();
  await expect(page.locator('[data-test="pony-express"]')).toBeVisible();
});
test('testing remove button for error user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();

  await expect.soft(page).not.toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await expect.soft(page.locator('[data-test="shopping-cart-link"]'),'the cart badge is not updating and the remove button is not working in the product page').toHaveText('1');
});