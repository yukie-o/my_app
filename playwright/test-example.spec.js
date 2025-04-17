import { test, expect } from '@playwright/test';

test('homepage has React text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/React App/); // or check for text on screen
});