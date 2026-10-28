import { test, expect } from '@playwright/test';

test.describe('Cart', () => {
  test.beforeEach('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  });
  test('test adding to cart @smoke', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
 
});
test('test removing from cart @smoke', async ({ page }) => {
 
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();

  await expect(page.locator('[data-test="remove-sauce-labs-onesie"]')).toHaveCount(0);

});
test('testing inventory list has 6 items', async ({ page }) => {
 

  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
 
});

test('test the filter option @smoke', async ({ page }) => {
 
  await page.locator('[data-test="product-sort-container"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)');

  await expect(page.locator('[data-test="inventory-item-name"]').first()).toHaveText('Sauce Labs Onesie');
  await expect(page.locator('.active_option')).toHaveText('Price (low to high)');
 
});
});