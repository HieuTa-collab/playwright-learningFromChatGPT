import {test, expect } from '@playwright/test';

// test('open homepage', async({page}) => {
//   await page.goto('https://demo.nopcommerce.com');
//   await expect(page).toHaveTitle(/nopCommerce/);
// });

test('should open Google homepage successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Google/);
  await expect(page).toHaveURL(/google/);
});