import {test,expect,Browser, chromium,Page,BrowserContext, Locator} from '@playwright/test';
test("testing browser context", async({page})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserContext:BrowserContext = await browser.newContext();
    const page1:Page = await browserContext.newPage();

     const browserContext_2:BrowserContext = await browser.newContext();
    const page2:Page = await browserContext.newPage();
     
    await page1.goto("http://quiz.hematitecorp.com/");
    const email:Locator = await page1.locator("#email");
    const password:Locator = await page1.locator("#password");
    const button:Locator = await page1.locator("[type='submit']");


      await page2.goto("http://quiz.hematitecorp.com/");
    const email2:Locator = await page2.locator("#email");
    const password2:Locator = await page2.locator("#password");
    const button2:Locator = await page2.locator("[type='submit']");

    await email.fill("siddique.c@changepond.com");
    await password.fill("Siddique@123");
    await button.click();

    await email2.fill("vijayasarathy.r@changepond.com");
    await password2.fill("@Vijay997670");
    await button2.click();


    const title1 = await page1.title();
    const title2 = await page2.title();
    console.log("Home page title",title1);
        console.log("Home page title",title2);

        await page1.screenshot({path: 'Vouchercode1.png'});
        

    
        expect(title1).toEqual("Quiz App");
        expect(title2).toEqual("Quiz App");
        await page2.screenshot({path: 'Vouchercode2.png'});

      
   
})
