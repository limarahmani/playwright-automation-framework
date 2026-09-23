import {test, expect} from "@playwright/test";


test("window @hundle", async ({page}) => {
    
    let newpageEvent = page.waitForEvent("popup"); //event listenr

    await page.goto("https://the-internet-5chk.onrender.com/windows");
    await page.click("text='Click Here'")

    let newPage = await newpageEvent;
     
    await expect(newPage).toHaveTitle("New Window");
    await expect(page).toHaveTitle("Windows");


    let firstWindowElement = page.getByText("Opening a new window");
    await expect(firstWindowElement).toBeVisible();

    let secondPageElement = newPage.getByText("New Window");
    await expect(secondPageElement).toBeVisible();

})