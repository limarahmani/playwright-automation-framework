//const {test} = require("@playwright/test");

import {test} from '@playwright/test';


test("Open Google get @title", async ({ page }) => {
  await page.goto("https://www.google.com");

  let title = await page.title();
  console.log(`title: ${title}`);

  let url = page.url();
  console.log(`URL: ${url}`);

  let searchBox = page.locator("//*[@id='ti6dpd']")
  await searchBox.fill("Cars");
  await searchBox.press("Enter");
  

});









