import {test} from "@playwright/test"


test(": @env-", async ({ page }) => {
  console.log(process.env.BASIC_AUTH_USERNAME);
  console.log(process.env.BASIC_AUTH_PASSWORD);
});

test("Bypass authentication by encoding the credentials base64 format: @env", async ({
  page,
}) => {
  let encodedCredential = Buffer.from(
    `${process.env.BASIC_AUTH_USERNAME}:${process.env.BASIC_AUTH_PASSWORD}`
  ).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });

  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
});







