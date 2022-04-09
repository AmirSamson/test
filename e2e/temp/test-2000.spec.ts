import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.playpod.ir/');
    await page.click('"ورود"');
    await page.waitForNavigation()
    await page.waitForLoadState()
    await page.screenshot();
    expect(await page.screenshot()).toMatchSnapshot();
    // expect(await page.textContent("#__next")).toMatchSnapshot();
});