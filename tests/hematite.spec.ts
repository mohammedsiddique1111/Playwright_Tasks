import{test} from '@playwright/test';

// test("test",async({page})=>{
    
//     await page.pause();

// })

test('Test Login', async ({page}) => {
  await page.goto("http://quiz.hematitecorp.com/");
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('siddique.c@changepond.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Siddique@123');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('button', { name: 'submit' }).click();
  //await page.pause();
   await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.pause();

});


// test('Test Logout', async ({ page }) => {
//   a
// });