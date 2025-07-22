import {test} from '@playwright/test';

test("Login Test",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
   //await page.pause();
    await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN'}).click();


  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^\$15\.99ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button').click();
   await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
//   await page.close();
  await page.pause();
});




// test("Good Afternoon",async({})=>{
//     console.log("Hey");

// });

// test.afterEach("Good Night",async({})=>{
//     console.log("Bye");

// });