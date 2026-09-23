import {test} from "@playwright/test"

test("Bypass authentication by embedding the credentials in the URL", async ({
  page,
}) => {
  // await page.goto("https://the-internet-5chk.onrender.com/");
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
});


test("Bypass authentication by encoding the credentials base64 format", async ({
  page,
}) => {
  let encodedCredential = Buffer.from("admin:admin").toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });

 await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
});







