import {test,chromium,Page,Locator, Browser} from '@playwright/test';
 
test("Locator",async()=>{
    const browser:Browser = await chromium.launch({headless: false,channel:'chrome'});
    const page:Page = await browser.newPage();
 
    await page.goto("http://127.0.0.1:5500/form.html");
 
    const fname:Locator = await page.locator("#txt1");
    await fname.fill("Mohammed Siddique");
 
    const password:Locator = await page.locator("#txt2");
    await password.fill("Siddique@123");
    // await fname.fill("vijayasarathy");
 
    //use of class selector
 
     const logo:Locator = await page.locator(".logo");
     const logoExist = await logo.isEnabled();
     console.log(logoExist);
     const contact:Locator = await page.locator(".txtContact");
     await contact.fill("8768678768");
 
    //use of text selector
 
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);
 
    // use of css property tag name
    // const email:Locator = await page.locator("#hh");
    // await email.fill("siddique@gmail.com")
 
    // use of css property tag name
    const address:Locator = await page.locator("css=input#txtaddress");
    await address.fill("Chennai")
 
    // use of css property tag name
    const pincode:Locator = await page.locator("css=input#txtpincode");
    await pincode.fill("600097")

    const email:Locator = await page.locator('xpath=//input[@name="myname"]');
    await email.fill("Siddique@5257");


    // <input type="checkbox" name="term" value="agree">
    //         <label> I Agree your term and condition.</label> <br> <br>

    const condition:Locator = await page.locator('xpath//input[@name="term"]');
    const checkexist = await heading.isEnabled();
    console.log(checkexist);
 
});