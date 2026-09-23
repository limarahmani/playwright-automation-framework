import {test, expect} from "@playwright/test";

test("iframe @iframe", async ({page}) => {

   await page.goto("https://the-internet-5chk.onrender.com/iframe");
   let iframe = page.frameLocator("//iframe[@id='mce_0_ifr']"); 
   let element = iframe.locator("//body[@id='tinymce']");
   await expect(element).toHaveText("Your content goes here.");
  // await element.clear();
  // await element.fill("hello :)");
   

})