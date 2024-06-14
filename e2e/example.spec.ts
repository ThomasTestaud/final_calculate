import { test, expect } from '@playwright/test';
import { operation } from '../../fullstack copy/node_modules/playwright-core/lib/server/trace/recorder/tracing';

test.beforeEach(async ({ page }) => {
  // Avant chaque test, on se rend sur la page localhost:5173
  await page.goto('http://localhost:5173/');
});

test('has title', async ({ page }) => {
  const title = await page.locator("h1")

  expect(title).toBeVisible();

  const titleText = await title.innerText();
  expect(titleText).toBe("Calculatror");
});

// All off this doesn't work because there is a space character in the screen
test('clicks on 0', async ({ page }) => {
  const button0 = await page.locator("#0")

  await button0.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("0");
});

test('clicks on 1', async ({ page }) => {
  const button1 = await page.locator("#1")

  await button1.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("1");
});

test('clicks on 2', async ({ page }) => {
  const button2 = await page.locator("#2")

  await button2.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("2");
});

test('clicks on 3', async ({ page }) => {
  const button3 = await page.locator("#3")

  await button3.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("5");
});

test('clicks on 4', async ({ page }) => {
  const button4 = await page.locator("#4")

  await button4.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("4");
});

test('clicks on 5', async ({ page }) => {
  const button5 = await page.locator("#5")

  await button5.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("5");
});

test('clicks on 6', async ({ page }) => {
  const button6 = await page.locator("#6")

  await button6.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("6");
});

test('clicks on 7', async ({ page }) => {
  const button7 = await page.locator("#7")

  await button7.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("7");
});

test('clicks on 8', async ({ page }) => {
  const button8 = await page.locator("#8")

  await button8.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("8");
});

test('clicks on 9', async ({ page }) => {
  const button9 = await page.locator("#9")

  await button9.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("9");
});

test('addition', async ({ page }) => {
  const button5 = await page.locator("#5")
  const operatiorsDiv = await page.locator("#operators");
  const buttonPlus = await operatiorsDiv.locator(":nth-child(1)");
  const button3 = await page.locator("#3")
  const buttonEqual = await page.locator(".btnEqual")

  await button5.click();
  await buttonPlus.click();
  await button3.click();
  await buttonEqual.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("8");
});

test('subtraction', async ({ page }) => {
  const button5 = await page.locator("#5")
  const operatorsDiv = await page.locator("#operators");
  const buttonMinus = await operatorsDiv.locator(":nth-child(2)");
  const button3 = await page.locator("#3");
  const buttonEqual = await page.locator(".btnEqual")

  await button5.click();
  await buttonMinus.click();
  await button3.click();
  await buttonEqual.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("2");
});

test('multiplication', async ({ page }) => {
  const button5 = await page.locator("#5")
  const operatorsDiv = await page.locator("#operators");
  const buttonMultiply = await operatorsDiv.locator(":nth-child(3)");
  const button3 = await page.locator("#3")
  const buttonEqual = await page.locator(".btnEqual")

  await button5.click();
  await buttonMultiply.click();
  await button3.click();
  await buttonEqual.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("15");
});

test('Cancel function', async ({ page }) => {
  const button5 = await page.locator("#5")
  const cancelBtn = await page.locator(".btnCancel");

  await button5.click();
  await cancelBtn.click();

  const screen = await page.locator(".screen")
  const screenText = await screen.innerText();

  expect(screenText).toBe("0");
});

test('change equal btn to red color', async ({ page }) => {
  const buttonEqual = await page.locator(".btnEqual");

  const color = await buttonEqual.evaluate((button) => {
    return button.style.backgroundColor;
  });

  expect(color).toBe("rgb(255, 0, 0)");
});