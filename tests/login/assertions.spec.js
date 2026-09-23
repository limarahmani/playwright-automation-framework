import {test, expect} from "@playwright/test"


test.describe("user story", () => {

    test.beforeEach(async ({page}) =>{
        await page.goto("https://the-internet-5chk.onrender.com/");
        expect(page).toHaveTitle("Practice");
        expect(await page.title()).toBe("Practice");
        

    })

  test("Verify CheckBox are Checked", async ({page}) => {
        page.getByText("Checkboxes").click();
        let firstCheckbox = page.locator("input#box1");
        let secondCheckbox = page.locator("input#box2");

        await firstCheckbox.check();
        await secondCheckbox.check();

        await expect(firstCheckbox).toBeChecked();
        await expect(secondCheckbox).toBeChecked();

        expect(await firstCheckbox.isChecked()).toBeTruthy();
        expect(await secondCheckbox.isChecked()).toBeTruthy();
  });

  test("Verify CheckBox are Unchecked", async ({ page }) => {

    page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");
    
    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();

  });

  test("Verify text of the element", async ({ page }) => {
    let header = page.locator("span.h1y");    
    await expect(header).toHaveText("Test Automation Practice");

    //Or:

    let actualText = await header.innerText();
    expect(header).toHaveText("Test Automation Practice");

  });


});