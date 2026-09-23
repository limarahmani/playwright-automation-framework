import {test} from "@playwright/test"

test.describe("Test Group for: Check, Uncheck, SelectOption",  () => {

    test.beforeEach( async ({page}) => {
      await  page.goto("https://the-internet-5chk.onrender.com/");
    })

    test("Check", async ({page}) => {
        let checkBox = page.locator("text='Checkboxes'");
        await checkBox.click();

        let checkBox1 = page.locator("//*[@id='box1']");
        await checkBox1.check();
    })

    test("Uncheck", async ({ page }) => { 
        let checkBox = page.locator("text='Checkboxes'");
        await checkBox.click();
        let checkBox2 = page.locator("//*[@id='box2']");
        await checkBox2.uncheck();

    })

    test("SelectOption", async ({ page }) => {
        let dropdown = page.locator("text='Dropdown'");
        await dropdown.click();
        let simpleDropdown = page.locator("//select[@id='dropdown']");
        
        //By value: await simpleDropdown.selectOption("1");
       //By text: await simpleDropdown.selectOption({ label: "Option 1" });
       //By index:
       await simpleDropdown.selectOption({index: 1});
    });




})


test.describe("user story", () => {

    test.beforeEach(async ({page})=> {
        await page.goto("https://the-internet-5chk.onrender.com/");
    })


  test("innerText()", async ({ page }) => {
    let h1 = page.locator("text='Test Automation Practice'"); 
    let actualText = await h1.innerText();
    console.log(actualText);
  });

  test("inputValue(), Only works with <input>,<textarea>,<select>", async ({
    page,
  }) => {
    let inputLink = page.getByText("Inputs");
    await inputLink.click();
    let inputBox = page.locator("//input[@type='number']");
    await inputBox.fill("123");
    let actualInput = await inputBox.inputValue();
    console.log(actualInput);
  });

  test("getAttribute()", async ({ page }) => {
    let abTextingLink = page.locator("text='A/B Testing'");
    let hrefLink = await abTextingLink.getAttribute("href");
    console.log(hrefLink);
  });


});

