
import {test, expect} from "@playwright/test";
import path from "path";
import fs from "fs";

test('@download', async ({page}) => {
    let promisedDownloadEvent = page.waitForEvent("download")
    await page.goto("https://the-internet-5chk.onrender.com/download");
    await page.click("text='Main Method.png'");
    let download = await promisedDownloadEvent;

    let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());
    await download.saveAs(downloadPath);

    expect(fs.existsSync(downloadPath)).toBeTruthy();

})


test("@upload", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/upload");
    let filePath = path.join(__dirname, "./uploads", "TestUpload.txt");
    await page.setInputFiles("//input[@id='file-upload']",filePath);

    page.click("//input[@id='file-submit']");
    expect(page.getByText("File Uploaded")).toBeVisible();


});
















