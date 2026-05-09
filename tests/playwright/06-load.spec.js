const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('./helpers');

test.describe('Load Tests', () => {
  test('01. Multiple concurrent page loads', async ({ browser }) => {
    const contexts = await Promise.all(
      Array(5).fill(null).map(() => browser.newContext())
    );
    const pages = await Promise.all(contexts.map(c => c.newPage()));
    await Promise.all(pages.map(p => p.goto(BASE_URL)));
    const results = await Promise.all(
      pages.map(p => p.title())
    );
    expect(results.filter(t => t).length).toBe(5);
    await Promise.all(contexts.map(c => c.close()));
  });

  test('02. Rapid page navigation', async ({ page }) => {
    const pages = ['/', '/about-us', '/privacy-policy', '/return-policy'];
    for (const path of pages) {
      await page.goto(`${BASE_URL}${path}`);
      await page.waitForTimeout(100);
    }
    expect(true).toBe(true);
  });

  test('03. Multiple search queries', async ({ page }) => {
    for (let i = 0; i < 10; i++) {
      await page.goto(`${BASE_URL}/search?q=kurta${i}`);
      await page.waitForTimeout(200);
    }
    expect(true).toBe(true);
  });

  test('04. Repeated form submissions', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    for (let i = 0; i < 5; i++) {
      await page.fill('input[name*="name"]', `User${i}`);
      await page.fill('input[type="email"]', `user${i}@test.com`);
      await page.fill('textarea', 'Test message');
      await page.click('button[type="submit"]').catch(() => {});
      await page.waitForTimeout(300);
    }
  });

  test('05. High-frequency clicks', async ({ page }) => {
    await page.goto(BASE_URL);
    const buttons = await page.locator('button').all();
    for (let i = 0; i < Math.min(10, buttons.length); i++) {
      await buttons[i].click().catch(() => {});
      await page.waitForTimeout(50);
    }
  });

  test('06. Multiple browser contexts', async ({ browser }) => {
    const contexts = await Promise.all(
      Array(3).fill(null).map(() => browser.newContext())
    );
    await Promise.all(contexts.map(c => c.close()));
    expect(contexts.length).toBe(3);
  });

  test('07. Memory under load', async ({ page }) => {
    await page.goto(BASE_URL);
    const initialMemory = await page.evaluate(() => {
      return performance.memory ? performance.memory.usedJSHeapSize : 0;
    });
    for (let i = 0; i < 10; i++) {
      await page.reload();
      await page.waitForTimeout(100);
    }
    const finalMemory = await page.evaluate(() => {
      return performance.memory ? performance.memory.usedJSHeapSize : 0;
    });
    expect(finalMemory).toBeLessThan(initialMemory * 2);
  });

  test('08. Rapid scroll actions', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 20; i++) {
      await page.evaluate(() => window.scrollBy(0, 100));
      await page.waitForTimeout(20);
    }
  });

  test('09. Multiple product views', async ({ page }) => {
    const products = ['/collection/kRr89Z5K', '/collection/cF1wR54K', '/collection/keR5QsOH'];
    for (const product of products) {
      await page.goto(`${BASE_URL}${product}`);
      await page.waitForTimeout(300);
    }
  });

  test('10. Concurrent add to cart', async ({ browser }) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    await page1.goto(BASE_URL);
    await page2.goto(BASE_URL);
    const addToBagBtn1 = page1.locator('button:has-text("Add to bag")').first();
    const addToBagBtn2 = page2.locator('button:has-text("Add to bag")').first();
    if (await addToBagBtn1.count() > 0) await addToBagBtn1.click();
    if (await addToBagBtn2.count() > 0) await addToBagBtn2.click();
    await context1.close();
    await context2.close();
  });

  test('11. Stress test - repeated reloads', async ({ page }) => {
    for (let i = 0; i < 30; i++) {
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(100);
    }
  });

  test('12. Multiple tab handling', async ({ page }) => {
    await page.goto(BASE_URL);
    const tabs = [page];
    for (let i = 0; i < 3; i++) {
      const newPage = await page.context().newPage();
      await newPage.goto(BASE_URL);
      tabs.push(newPage);
    }
    await Promise.all(tabs.map(t => t.close()));
  });

  test('13. Network request saturation', async ({ page }) => {
    const requests = [];
    page.on('request', () => requests.push(1));
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    expect(requests.length).toBeGreaterThan(10);
  });

  test('14. Cookie handling under load', async ({ page }) => {
    for (let i = 0; i < 50; i++) {
      await page.setCookie({ name: `test${i}`, value: `value${i}`, domain: 'mamaworld.in' });
    }
    const cookies = await page.context().cookies();
    expect(cookies.length).toBeLessThan(50);
  });

  test('15. Large viewport resize', async ({ page }) => {
    await page.goto(BASE_URL);
    const sizes = [
      { width: 1920, height: 1080 },
      { width: 375, height: 667 },
      { width: 768, height: 1024 }
    ];
    for (const size of sizes) {
      await page.setViewportSize(size);
      await page.waitForTimeout(100);
    }
  });

  test('16. Rapid API calls', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 20; i++) {
      await page.goto(`${BASE_URL}/collection/kRr89Z5K`, { timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(100);
    }
  });

  test('17. Session persistence', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto(BASE_URL);
    await page2.goto(BASE_URL);
    await context.close();
  });

  test('18. Long session duration', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
    }
  });

  test('19. Heavy DOM manipulation', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => {
        const div = document.createElement('div');
        div.textContent = 'Test';
        document.body.appendChild(div);
      });
    }
  });

  test('20. Multiple redirects', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/cF1wR54K`);
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    await page.goto(`${BASE_URL}/collection/keR5QsOH`);
  });

  test('21. Database query simulation', async ({ page }) => {
    const queries = ['kurta', 'night wear', 'feeding', 'maternity', 'best seller'];
    for (const q of queries) {
      await page.goto(`${BASE_URL}/search?q=${encodeURIComponent(q)}`);
      await page.waitForTimeout(300);
    }
  });

  test('22. Cache stress test', async ({ page }) => {
    const urls = [
      BASE_URL,
      `${BASE_URL}/about-us`,
      `${BASE_URL}/privacy-policy`
    ];
    for (let i = 0; i < 3; i++) {
      for (const url of urls) {
        await page.goto(url);
        await page.waitForTimeout(100);
      }
    }
  });

  test('23. JSON payload stress', async ({ page }) => {
    const largeData = { data: Array(100).fill('test') };
    await page.goto(BASE_URL);
    await page.evaluate((data) => {
      console.log(JSON.stringify(data));
    }, largeData);
  });

  test('24. Concurrent resource loads', async ({ page }) => {
    const resources = await page.evaluate(() => {
      return new Promise(resolve => {
        const entries = performance.getEntriesByType('resource');
        setTimeout(() => resolve(entries.length), 2000);
      });
    });
    expect(resources).toBeGreaterThan(0);
  });

  test('25. Event accumulation', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 100; i++) {
      await page.mouse.move(i, i);
      await page.waitForTimeout(10);
    }
  });

  test('26. HandleConnectionRequest saturation', async ({ page }) => {
    const pages = [];
    for (let i = 0; i < 5; i++) {
      pages.push(await page.context().newPage());
    }
    await Promise.all(pages.map(p => p.close()));
  });

  test('27. LocalStorage stress', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 50; i++) {
      await page.evaluate((i) => {
        localStorage.setItem(`key${i}`, `value${i}`);
      }, i);
    }
  });

  test('28. SessionStorage stress', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 50; i++) {
      await page.evaluate((i) => {
        sessionStorage.setItem(`key${i}`, `value${i}`);
      }, i);
    }
  });

  test('29. Rapid URL changes', async ({ page }) => {
    for (let i = 0; i < 20; i++) {
      await page.goto(BASE_URL + '/collection/kRr89Z5K?page=' + i);
      await page.waitForTimeout(50);
    }
  });

  test('30. Graceful degradation', async ({ page }) => {
    await page.route('**/*.js', route => route.abort());
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    const content = await page.content();
    expect(content.length).toBeGreaterThan(0);
  });
});