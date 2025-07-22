// import {test,expect} from '@playwright/test';

// test("custome assertion",async({page})=>{
//     await page.goto("http://127.0.0.1:5500/index.html");
//     await page.pause();

//     const textValue : any = await page.locator('#d1').textContent();
//     const value = parseInt(textValue || '0');

//     await expect(value > 10).toBeTruthy();
// });




import {test,expect} from '@playwright/test';

test("custome assertion",async({page})=>{
    await page.goto("http://127.0.0.1:5500/index.html");
    await page.pause();

    const textValue : any = await page.locator('#d2').textContent();

    await expect(textValue.length > 5).toBeTruthy();
});