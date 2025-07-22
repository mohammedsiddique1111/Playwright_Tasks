import {expect, test} from '@playwright/test';


test(" test ",async({page})=>{
    await page.route("api/users",(route)=>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([
                {id:1,name:"Siddique"},
                {id:2,name:"Rehan"}
            ]),
        });
    })
  await page.goto("http://127.0.0.1:5500/index1.html");
  const userList = await page.locator(".user").allTextContents();
  await expect(userList).toContain("Siddique")



  test("test to handle 500 error",async({page})=>{
    await page.route("api/users",(route)=>{
        route.fulfill({
            status:500,
            contentType:'application/json',
            body:"Internal Server Error"
        });
 
    });
    await page.goto("http://127.0.0.1:5500/index2.html");
    const userList = await page.locator(".useerror").allTextContents();
    await expect(userList).toContain("Internal Server Error")
 
});
})