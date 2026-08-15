import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'بحث' }).fill('speed test');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dspeed%2Btest%26sca_esv%3Ddea7fef904ffcd15%26source%3Dhp%26ei%3DzNF4avmXGcDLkdUPopfuiQc%26iflsig%3DABILxe8AAAAAanjf3OJMQbFUnTds2Z7agq5H_Wrw2HvN%26ved%3D0ahUKEwj5rZX6oJSWAxXAZaQEHaKLO3EQ4dUDCB0%26uact%3D5%26oq%3Dspeed%2Btest%26gs_lp%3DEgdnd3Mtd2l6IgpzcGVlZCB0ZXN0MgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiTtgFQ6FhYgLABcAh4AJABAJgBgAGgAZENqgEENS4xMbgBA8gBAPgBAZgCGKAC2w2oAgrCAgoQABgDGI8BGOoCwgIKEC4YAxiPARjqAsICDhAuGIAEGIoFGLEDGIMBwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICCBAAGIAEGLEDwgIFEC4YgATCAg8QABiABBgKGAsYsQMYgwHCAgwQABiABBgKGAsYsQPCAg0QLhiABBjHARjRAxgKwgILEC4YgAQYxwEY0QPCAhIQLhiABBgKGAsYsQMYxwEY0QPCAg0QABiABBiKBRgKGLEDwgIJEAAYgAQYChgLwgIPEC4YgAQYChgLGLEDGIMBwgIJEC4YgAQYChgLwgIIEC4YgAQYsQPCAgsQABiABBiKBRixA8ICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGB4YCpgDBvEF_kN7PFPNwnuSBwUxMS4xM6AH83CyBwQzLjEzuAfHDcIHBjEuMjAuM8gHL4AIAQ%26sclient%3Dgws-wiz%26sei%3D6tF4apvBI8ufkdUPnIXO0AQ&q=EgQpL6SqGOqj49MGIjBotgwHC2ip6-3fc7ha1LfcsunM2A2rq8Dse2hoeTtTX-5UZn8outb_Bas00xugoq8yAVJaAUM');
  await page.locator('iframe[name="a-ui7rlkxkeq5b"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.getByRole('link', { name: 'Speedtest by Ookla - The' }).click();
  await page.getByRole('button', { name: 'start speed test - connection' }).click();
  await page.goto('https://www.speedtest.net/result/19536210712');
});