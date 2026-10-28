const { test, expect } = require('@playwright/test');

test('standard user can log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});
test('wrong password shows an error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toContainText('do not match');
  await expect(page).not.toHaveURL(/inventory/);
});
test('second user cant log in', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','locked_out_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.');
    await expect(page).not.toHaveURL(/inventory/);
});