import { test, expect } from '@playwright/test';

// test("check title", async({page})=>{
//   await page.goto('https://www.changepond.com/');

//   await expect(page).toHaveTitle("Leading Digital Transformation with Scalable Solutions: Changepond");
// })

test("check title", async({page})=>{
  await page.goto("file:///C:/Users/siddique.c/Documents/Javascript/calculator.html/cal.html");
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btn');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('8');


});

test("check sub", async({page})=>{
  await page.goto("file:///C:/Users/siddique.c/Documents/Javascript/calculator.html/cal.html");
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btn1');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('2');


});









// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
