
import {test, expect} from "@playwright/test"

test("web @table" , async ({page}) => {
   await page.goto("https://the-internet-5chk.onrender.com/web-tables");
   let table = page.locator("//table[@class='SampleTable']");

   let rows = await table.locator("//tr").all();
   let columns = await table.locator("//th").all();
    let cells = await table.locator("//td").all();
   expect(rows.length).toBe(9);
   expect(columns.length).toBe(13);
   expect(cells.length).toBe(104);

   for(let each of cells){
    console.log(await each.textContent())
   }


})


test ('@data', async ({page}) => {
    await page.goto("https://the-internet-5chk.onrender.com/web-tables");
    let table = page.locator("//table[@class='SampleTable']");
    let rows = await table.locator("//tr").all();

    for (let row of rows) {
         let cells = await row.locator("//td").all();

         //for (let cell of cells) {
          //  console.log(await cell.textContent());}

          if(cells.length > 2){
            for(let i = 1; i< cells.length-1; i++){
                console.log(await cells[i].textContent());
            }
            console.log("-------------------------------");
          }
    }

})


test('@Check', async ({page}) => {

    await page.goto("https://the-internet-5chk.onrender.com/web-tables");
    let table = page.locator("//table[@class='SampleTable']");
    let checkbox = await page.locator("//input[@type='checkbox']").all();

    for (const each of checkbox) {
        await each.check();
        expect (each).toBeChecked();
        
    }


})










