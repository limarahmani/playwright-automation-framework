import {test} from "@playwright/test"

test.describe("user story", () => {
  test.beforeAll(async () => {
    console.log("befor all");
  });

  // test.afterAll(async () => {
  //     console.log("after all");
  // })

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.google.com");
  });

  test.afterEach(async ({page}) => {
    await page.waitForTimeout(3000);
  });

  test("title of the page", async ({ page }) => {
    console.log(await page.title());
  });

  test("url of the page", async ({ page }) => {
    console.log(await page.url());
  });
});