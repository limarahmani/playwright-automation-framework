import {test} from "@playwright/test"


test.describe("test group @alert", () => {

    test.beforeEach('', async ({page}) => {
        await page.goto("https://the-internet-5chk.onrender.com/javascript_alerts");
    })

    test("regular alert ", async ({ page }) => {

        page.on('dialog', async (alert) => {
            alert.accept();
        })

        let clickAlert = page.locator("//button[@onclick='jsAlert()']");
        await clickAlert.click();
    });


    test("confirmation alert", async ({ page }) => {
        page.on("dialog", async (alert) => {
          alert.dismiss();
        });
        let clickConfirmAlert = page.locator("//button[contains(text(), 'JS Confirm')]");
        await clickConfirmAlert.click();
    });


    test("Prompt Alert", async ({ page }) => {
            page.on("dialog", async (alert) => {
                console.log(`alert message: ${alert.message()}`);
              alert.accept("accept");
            });
        let clickPromptAlert = page.locator("//button[@onclick='jsPrompt()']");
        await clickPromptAlert.click();
    });
})

















