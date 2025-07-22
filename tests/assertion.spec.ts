import {expect, test} from '@playwright/test';

test("assertion test",async({page})=>{
    await page.goto('http://hematitecorp.com/');
    await page.pause();

    await expect (page.locator("text= OUR COURSES")).toHaveCount(1);


    if(await page.$("text=OUR COURSES")) {
        await page.locator("text=OUR COURSES").click();
    }
    
    await expect(page.locator("text=OUR COURSE")).toBeVisible();
    await expect.soft(page.locator("text=OUR COURSE")).toBeHidden();


    await expect(page.locator("text=OUR COURSE")).toBeEnabled();
    await expect.soft(page.locator("text=OUR COURSE")).toBeDisabled();

    await expect(page.locator("text=OUR COURSE")).toHaveText("OUR COURSES");
    await expect(page.locator("text=OUR COURSE")).not.toHaveText("OUR COURSES");

});