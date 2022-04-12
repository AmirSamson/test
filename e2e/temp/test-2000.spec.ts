import { expect, test } from "@playwright/test";

test.describe("e2e", () => {
  test.describe("temp", () => {
    test("basic test", async ({ page }) => {
      await page.goto("https://playwright.dev/");
      expect(await page.innerText(".navbar__title")).toBe("Playwright");
      expect(await page.screenshot()).toMatchSnapshot();
    });
  });
});
