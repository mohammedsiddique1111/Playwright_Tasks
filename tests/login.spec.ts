import {test,expect,chromium,Browser,Page,Locator } from '@playwright/test';

test("login test",async ()=>{
    const browser : Browser = await chromium.launch({headless:false});
    const page : Page = await browser.newPage();
    await page.goto("http://quiz.hematitecorp.com/#/");
    const email:Locator = await page.locator("#email");
    const password:Locator = await page.locator("#password");
    const button:Locator = await page.locator("[type='submit']");
   

    await email.fill("siddique.c@changepond.com");
    await password.fill("Siddique@123");
    await button.click();

    const title = await page.title();
    console.log("Home page title",title);
    await page.screenshot({path: 'Vouchercode.png'});

    expect(title).toEqual("Quiz App");
   // browser.close();

})