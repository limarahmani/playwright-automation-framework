import {test, expect} from "@playwright/test"


test.describe("test group: @mouseActions ", () => {

    test.beforeEach(async ({page}) => {

        await page.goto("https://the-internet-5chk.onrender.com/");
    })

    test("left click", async ({page}) => {
       await page.click("text='A/B Testing'");
    })

    test("right click", async ({ page }) => {
        await page.click("text='A/B Testing'", { button: "right" });
    });


    test("hover", async ({ page }) => {
        await page.click("text='Hovers'");
        
        let elements = await page.locator("//img[@alt='User Avatar']").all();

        for (let each of elements) {
            await page.waitForTimeout(1000);
            await each.hover();
        }


    });


    test("mouse wheel scroling", async ({ page }) => {

        await page.mouse.wheel(0,2000)


    });


    test("scrolling to specific element", async ({ page }) => {
        let inputLink = page.getByText("Inputs");
        await inputLink.scrollIntoViewIfNeeded();
        await inputLink.click();
    });


     test("drag and drop", async ({ page }) => {
        await page.click("text='Drag and Drop'")
        
        await page.dragAndDrop("//div[@id='column-a']","//div[@id='column-b']");
       
     })


})