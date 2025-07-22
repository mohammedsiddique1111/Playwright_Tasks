import{test} from '@playwright/test';
 
test("file Handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5500/assetioneaxample.html");
    await page.pause();
 
    // file uploading test case
    const filepath:string = "tests/s.png";
    await page.setInputFiles("input[type='file']",filepath);
    await page.locator('button[type="submit"]').click();
 
    // test case for downloading file
    const [download] = await  Promise.all([
        page.waitForEvent('download'),
        page.click('a#downloadbutton')
    ]);
    //code to save file on disk
    const downloadFilePath = await download.path()
    console.log("downloading file path:",downloadFilePath)
})