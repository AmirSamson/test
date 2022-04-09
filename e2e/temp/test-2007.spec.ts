import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
   await page.goto("https://dev.playpod.ir/");
   await page.goto("https://dev.playpod.ir/");
   await page.locator("text=ورود").click();
   await page.locator("text=ورود با حساب کاربری پاد").click();
   await page.waitForEvent("popup");
   await page.click("input[name=identity]")
   await page.locator("[placeholder='نام کاربری / تلفن / ایمیل / کدملی']").fill("eri13")
   await page.locator("[placeholder='رمز عبور']").fill("920325nasrin")
   await page.locator("button[type=submit]").click();
   await page.locator(".st1-user-icon").first().click();
   await page.locator(".sc-hoHwyw").click();
   await expect(page).toHaveURL("https://dev.playpod.ir/profile");
   expect(await page.locator("sc-knKHOI bNmBDM").innerText()).toBe("شما از امکانات رایگان استفاده میکنید و اشتراک ندارید.");
});