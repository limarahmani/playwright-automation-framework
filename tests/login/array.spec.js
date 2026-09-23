import {test, expect} from "@playwright/test"

test.describe("user story", () => {
    let elements;

  test.beforeEach(async ({page}) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify that 50 link elements are within the <ul> thag", async ({page}) => {
    expect(elements.length).toBe(50);
  });


  test("verify that all 50 links are visible and clickable", async ({page}) => {
    
        for (let each of elements){
            await expect(each).toBeVisible();
           // expect(await each.isVisible()).toBeTruthy();

           await expect(each).toBeEnabled();
           //expect(await each.isEnabled()).toBeEnabled();
        }
  });



  test("verify that all 50 links have herf attribute", async ({ page }) => {
        for (let each of elements){
           await expect(each).toHaveAttribute("href");
           console.log(each.getAttribute("href"));
        }

  });
});