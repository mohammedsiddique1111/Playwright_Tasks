import{Browser, BrowserContext, chromium, Page, test} from "@playwright/test";
test("auth test",async()=>{
const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
const browserContext:BrowserContext = await browser.newContext();
const page:Page = await browserContext.newPage();


const userId:string = "siddique.c@changepond.com";
const userPass:string = "Siddique@123";
const authHeader:string = "Basic "+btoa(userId+":"+userPass);
page.setExtraHTTPHeaders({Authorization:authHeader});
await page.goto("http://quiz.hematitecorp.com");
})