# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01-regression.spec.js >> Regression Tests - Home Page >> 11. Empty bag shows empty message
- Location: tests\playwright\01-regression.spec.js:59:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=empty, text=No items').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=empty, text=No items').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - paragraph [ref=e14]: Hurry Up, Shop Now!
        - paragraph [ref=e16]: 50% Off
      - generic [ref=e18]:
        - img [ref=e19]
        - paragraph [ref=e23]: 00H:50M:01S
    - generic [ref=e24]:
      - link "Search" [ref=e26] [cursor=pointer]:
        - /url: /search
        - generic [ref=e28]:
          - img [ref=e29]
          - textbox [ref=e31]
          - paragraph [ref=e32]: Search
      - link "logo__Mama World" [ref=e33] [cursor=pointer]:
        - /url: /
        - img "logo__Mama World" [ref=e34]
      - generic [ref=e35]:
        - link [ref=e36] [cursor=pointer]:
          - /url: /orders
          - button [ref=e37]:
            - img [ref=e39]
        - link [ref=e41] [cursor=pointer]:
          - /url: /bag
          - button [ref=e42]:
            - img [ref=e44]
    - list [ref=e48]:
      - listitem [ref=e49] [cursor=pointer]:
        - link "HOME" [ref=e50]:
          - /url: https://mamaworld.in/
          - paragraph [ref=e51]: HOME
      - listitem [ref=e52] [cursor=pointer]:
        - link "MATERNITY NIGHT WEAR" [ref=e53]:
          - /url: https://mamaworld.in/only-night-wear/collection/Aahm3Wot
          - paragraph [ref=e54]: MATERNITY NIGHT WEAR
      - listitem [ref=e55] [cursor=pointer]:
        - link "MATERNITY CO-ORD SET" [ref=e56]:
          - /url: /collection/keR5QsOH
          - paragraph [ref=e57]: MATERNITY CO-ORD SET
      - listitem [ref=e58] [cursor=pointer]:
        - link "NEW ARRIVALS" [ref=e59]:
          - /url: /collection/cF1wR54K
          - paragraph [ref=e60]: NEW ARRIVALS
      - listitem [ref=e61] [cursor=pointer]:
        - link "BESTSELLER" [ref=e62]:
          - /url: /collection/kRr89Z5K
          - paragraph [ref=e63]: BESTSELLER
  - paragraph [ref=e66]: YOUR BAG
  - generic [ref=e69] [cursor=pointer]:
    - img [ref=e70]
    - text: CONTINUE SHOPPING
  - generic [ref=e74]:
    - img [ref=e75]
    - paragraph [ref=e80]: Your bag is empty
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { BASE_URL, PRODUCT_URLS, TEST_DATA, TIMEOUTS } = require('./helpers');
  3   | 
  4   | test.describe('Regression Tests - Home Page', () => {
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  7   |   });
  8   | 
  9   |   test('01. Home page loads successfully', async ({ page }) => {
  10  |     await expect(page).toHaveTitle(/Mama World/i);
  11  |   });
  12  | 
  13  |   test('02. Logo is visible on home page', async ({ page }) => {
  14  |     const logo = page.locator('img[alt*="Mama"], a:has-text("Mama World")').first();
  15  |     await expect(logo).toBeVisible({ timeout: TIMEOUTS.elementWait });
  16  |   });
  17  | 
  18  |   test('03. Navigation menu is visible', async ({ page }) => {
  19  |     const nav = page.locator('nav, header');
  20  |     await expect(nav).toBeVisible({ timeout: TIMEOUTS.elementWait });
  21  |   });
  22  | 
  23  |   test('04. Home link is accessible', async ({ page }) => {
  24  |     await page.click('a:has-text("HOME")');
  25  |     await expect(page).toHaveURL(/mamaworld.in/);
  26  |   });
  27  | 
  28  |   test('05. Maternity Night Wear category loads', async ({ page }) => {
  29  |     await page.click('a:has-text("MATERNITY NIGHT WEAR")');
  30  |     await expect(page).toHaveURL(/night-wear/i);
  31  |   });
  32  | 
  33  |   test('06. Maternity Co-ord Set category loads', async ({ page }) => {
  34  |     await page.click('a:has-text("MATERNITY CO-ORD SET")');
  35  |     await expect(page).toHaveURL(/keR5QsOH|co-ord/i);
  36  |   });
  37  | 
  38  |   test('07. New Arrivals page loads', async ({ page }) => {
  39  |     await page.click('a:has-text("NEW ARRIVALS")');
  40  |     await expect(page).toHaveURL(/cF1wR54K|new-arrival/i);
  41  |   });
  42  | 
  43  |   test('08. Best Seller page loads', async ({ page }) => {
  44  |     await page.click('a:has-text("BESTSELLER")');
  45  |     await expect(page).toHaveURL(/kRr89Z5K|bestseller/i);
  46  |   });
  47  | 
  48  |   test('09. Search functionality works', async ({ page }) => {
  49  |     await page.fill('input[type="search"], input[placeholder*="Search"]', 'Kurta');
  50  |     await page.press('input[type="search"], input[placeholder*="Search"]', 'Enter');
  51  |     await expect(page).toHaveURL(/search/i);
  52  |   });
  53  | 
  54  |   test('10. Bag (Cart) page is accessible', async ({ page }) => {
  55  |     await page.click('a:has-text("Bag"), a[href*="/bag"]');
  56  |     await expect(page).toHaveURL(/bag/i);
  57  |   });
  58  | 
  59  |   test('11. Empty bag shows empty message', async ({ page }) => {
  60  |     await page.goto(`${BASE_URL}/bag`);
  61  |     const emptyMsg = page.locator('text=empty, text=No items');
> 62  |     await expect(emptyMsg.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
      |                                    ^ Error: expect(locator).toBeVisible() failed
  63  |   });
  64  | 
  65  |   test('12. Footer is visible', async ({ page }) => {
  66  |     const footer = page.locator('footer');
  67  |     await expect(footer).toBeVisible({ timeout: TIMEOUTS.elementWait });
  68  |   });
  69  | 
  70  |   test('13. About Us page loads', async ({ page }) => {
  71  |     await page.goto(`${BASE_URL}/about-us`);
  72  |     await expect(page).toHaveURL(/about-us/);
  73  |   });
  74  | 
  75  |   test('14. Privacy Policy page loads', async ({ page }) => {
  76  |     await page.goto(`${BASE_URL}/privacy-policy`);
  77  |     await expect(page).toHaveURL(/privacy-policy/);
  78  |   });
  79  | 
  80  |   test('15. Return Policy page loads', async ({ page }) => {
  81  |     await page.goto(`${BASE_URL}/return-policy`);
  82  |     await expect(page).toHaveURL(/return-policy/);
  83  |   });
  84  | 
  85  |   test('16. Shipping Policy page loads', async ({ page }) => {
  86  |     await page.goto(`${BASE_URL}/shipping-policy`);
  87  |     await expect(page).toHaveURL(/shipping-policy/);
  88  |   });
  89  | 
  90  |   test('17. Terms and Conditions page loads', async ({ page }) => {
  91  |     await page.goto(`${BASE_URL}/terms-and-conditions`);
  92  |     await expect(page).toHaveURL(/terms/);
  93  |   });
  94  | 
  95  |   test('18. Contact phone number is visible', async ({ page }) => {
  96  |     const phone = page.locator('text=9820584377');
  97  |     await expect(phone.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  98  |   });
  99  | 
  100 |   test('19. WhatsApp contact is visible', async ({ page }) => {
  101 |     const whatsapp = page.locator('text=WhatsApp, a[href*="whatsapp"]');
  102 |     await expect(whatsapp.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  103 |   });
  104 | 
  105 |   test('20. Email contact is visible', async ({ page }) => {
  106 |     const email = page.locator('text=sdnenwani@gmail.com');
  107 |     await expect(email.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  108 |   });
  109 | 
  110 |   test('21. Address is visible', async ({ page }) => {
  111 |     const address = page.locator('text=Vikhroli');
  112 |     await expect(address.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  113 |   });
  114 | 
  115 |   test('22. Product collection loads correctly', async ({ page }) => {
  116 |     await page.goto(PRODUCT_URLS[0]);
  117 |     await expect(page).toHaveURL(/collection/);
  118 |   });
  119 | 
  120 |   test('23. Multiple categories are accessible', async ({ page }) => {
  121 |     const categories = ['Night Wear', 'Feeding Kurta', 'Co-ord Set'];
  122 |     for (const cat of categories.slice(0, 2)) {
  123 |       await page.goto(BASE_URL);
  124 |       try {
  125 |         await page.click(`a:has-text("${cat}")`);
  126 |       } catch (e) {
  127 |         console.log(`Category ${cat} not found`);
  128 |       }
  129 |     }
  130 |   });
  131 | 
  132 |   test('24. Best sellers section displays products', async ({ page }) => {
  133 |     await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
  134 |     const products = page.locator('.product, [class*="product"]');
  135 |     expect(await products.count()).toBeGreaterThan(0);
  136 |   });
  137 | 
  138 |   test('25. Page loads without JavaScript errors', async ({ page }) => {
  139 |     const errors = [];
  140 |     page.on('pageerror', error => errors.push(error.message));
  141 |     await page.goto(BASE_URL);
  142 |     await page.waitForTimeout(2000);
  143 |     expect(errors.filter(e => e.includes('Error'))).toHaveLength(0);
  144 |   });
  145 | 
  146 |   test('26. All images load (no broken images)', async ({ page }) => {
  147 |     await page.goto(BASE_URL);
  148 |     const images = page.locator('img');
  149 |     const count = await images.count();
  150 |     expect(count).toBeGreaterThan(0);
  151 |   });
  152 | 
  153 |   test('27. Social media links present', async ({ page }) => {
  154 |     await page.goto(BASE_URL);
  155 |     const socialLinks = page.locator('a[href*="facebook"], a[href*="instagram"]');
  156 |     expect(await socialLinks.count()).toBeGreaterThan(0);
  157 |   });
  158 | 
  159 |   test('28. Responsive design works', async ({ page }) => {
  160 |     await page.setViewportSize({ width: 375, height: 667 });
  161 |     await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  162 |     const menu = page.locator('nav, header, .menu');
```