import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://figihome.com/?media_type=image&utm_medium=paid&utm_id=52538517672952&utm_content=52538517672752&utm_term=52538517672552&utm_campaign=52538517672952&campaign_id=52538517672952&ad_id=52538517672752');
  await page.getByRole('link', { name: 'Islamic - اسلامي' }).click();
  await page.getByRole('link', { name: 'Framed “ما شاء الله” Tile -' }).click();
  await page.getByRole('button', { name: 'Increase quantity for Framed' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Decrease quantity for Framed' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('label').filter({ hasText: 'White Variant sold out or' }).click();
});