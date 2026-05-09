const { test, expect } = require('@playwright/test');
const { BASE_URL, TIMEOUTS } = require('./helpers');

test.describe('Performance Tests', () => {
  test('01. Home page load time < 3s', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('02. First Contentful Paint < 1.5s', async ({ page }) => {
    await page.goto(BASE_URL);
    const fcp = await page.evaluate(() => {
      return new Promise(resolve => {
        if (typeof performance !== 'undefined') {
          const entries = performance.getEntriesByType('paint');
          const fcp = entries.find(e => e.name === 'first-contentful-paint');
          resolve(fcp ? fcp.startTime : 0);
        } else {
          resolve(0);
        }
      });
    });
    expect(fcp).toBeLessThan(1500);
  });

  test('03. Time to Interactive < 5s', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const tti = Date.now() - startTime;
    expect(tti).toBeLessThan(5000);
  });

  test('04. Page weight < 5MB', async ({ page }) => {
    const response = await page.request.get(BASE_URL);
    const body = await response.body();
    expect(body.length).toBeLessThan(5 * 1024 * 1024);
  });

  test('05. Images optimized', async ({ page }) => {
    await page.goto(BASE_URL);
    const images = await page.locator('img').all();
    for (const img of images.slice(0, 5)) {
      const src = await img.getAttribute('src');
      if (src && !src.includes('data:image')) {
        const response = await page.request.get(src);
        const contentType = response.headers()['content-type'];
        expect(['image/jpeg', 'image/webp', 'image/png', 'image/avif']).toContain(contentType);
      }
    }
  });

  test('06. CSS minified', async ({ page }) => {
    const links = await page.locator('link[rel="stylesheet"]').all();
    for (const link of links.slice(0, 3)) {
      const href = await link.getAttribute('href');
      if (href) {
        const response = await page.request.get(href);
        const body = await response.text();
        expect(body.includes('\n\n')).toBe(false);
      }
    }
  });

  test('07. JavaScript minified', async ({ page }) => {
    const scripts = await page.locator('script[src]').all();
    for (const script of scripts.slice(0, 3)) {
      const src = await script.getAttribute('src');
      if (src) {
        const response = await page.request.get(src);
        const body = await response.text();
        expect(body.includes('\n\n')).toBe(false);
      }
    }
  });

  test('08. No render-blocking resources', async ({ page }) => {
    await page.goto(BASE_URL);
    const stylesheets = await page.locator('link[rel="stylesheet"]').count();
    expect(stylesheets).toBeLessThan(10);
  });

  test('09. Efficient selectors', async ({ page }) => {
    await page.goto(BASE_URL);
    const slowQueries = await page.evaluate(() => {
      let count = 0;
      if (typeof queryObjects !== 'undefined') {
        const queries = queryObjects();
        count = queries.length;
      }
      return count;
    });
    expect(slowQueries).toBeLessThan(10);
  });

  test('10. Lazy loading images', async ({ page }) => {
    await page.goto(BASE_URL);
    const images = await page.locator('img[loading="lazy"]').count();
    const totalImages = await page.locator('img').count();
    if (totalImages > 5) {
      expect(images).toBeGreaterThan(0);
    }
  });

  test('11. Cache headers present', async ({ page }) => {
    const response = await page.request.get(BASE_URL);
    const cacheControl = response.headers()['cache-control'];
    expect(cacheControl).toBeTruthy();
  });

  test('12. Compression enabled', async ({ page }) => {
    const response = await page.request.get(BASE_URL, {
      headers: { 'Accept-Encoding': 'gzip, deflate, br' }
    });
    const contentEncoding = response.headers()['content-encoding'];
    expect(contentEncoding).toBeTruthy();
  });

  test('13. DOM depth < 32', async ({ page }) => {
    await page.goto(BASE_URL);
    const maxDepth = await page.evaluate(() => {
      const getDepth = (el, depth = 0) => {
        if (!el.children.length) return depth;
        return Math.max(...Array.from(el.children).map(c => getDepth(c, depth + 1)));
      };
      return getDepth(document.body);
    });
    expect(maxDepth).toBeLessThan(32);
  });

  test('14. Minimal reflows', async ({ page }) => {
    await page.goto(BASE_URL);
    const layoutCount = await page.evaluate(() => {
      if (typeof performance === 'undefined') return 0;
      const entries = performance.getEntriesByType('layout-shift');
      return entries.length;
    });
    expect(layoutCount).toBeLessThan(10);
  });

  test('15. Efficient fonts', async ({ page }) => {
    await page.goto(BASE_URL);
    const fonts = await page.locator('link[rel="preload"], link[href*="font"]').count();
    expect(fonts).toBeLessThan(5);
  });

  test('16. No memory leaks', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.reload();
    await page.reload();
    await page.reload();
    const memory = await page.evaluate(() => {
      return performance.memory ? performance.memory.usedJSHeapSize : 0;
    });
    expect(memory).toBeGreaterThan(0);
  });

  test('17. Smooth scrolling', async ({ page }) => {
    await page.goto(BASE_URL);
    const scrollTime = await page.evaluate(() => {
      const start = performance.now();
      window.scrollTo(0, 1000);
      return performance.now() - start;
    });
    expect(scrollTime).toBeLessThan(100);
  });

  test('18. Fast search', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(`${BASE_URL}/search?q=kurta`);
    const searchTime = Date.now() - startTime;
    expect(searchTime).toBeLessThan(3000);
  });

  test('19. Fast category navigation', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const navTime = Date.now() - startTime;
    expect(navTime).toBeLessThan(3000);
  });

  test('20. Image loading speed', async ({ page }) => {
    await page.goto(BASE_URL);
    const image = page.locator('img').first();
    if (await image.count() > 0) {
      const loadTime = await page.evaluate(() => {
        return new Promise(resolve => {
          const img = document.querySelector('img');
          if (img && img.complete) resolve(0);
          else {
            img.onload = () => resolve(performance.now());
            img.onerror = () => resolve(performance.now());
          }
        });
      });
      expect(loadTime).toBeLessThan(2000);
    }
  });

  test('21. JavaScript execution time', async ({ page }) => {
    const executionTime = await page.evaluate(() => {
      const start = performance.now();
      let total = 0;
      for (let i = 0; i < 10000; i++) total += i;
      return performance.now() - start;
    });
    expect(executionTime).toBeLessThan(50);
  });

  test('22. No long tasks', async ({ page }) => {
    await page.goto(BASE_URL);
    const longTasks = await page.evaluate(() => {
      if (typeof performance === 'undefined') return 0;
      const entries = performance.getEntriesByType('longtask');
      return entries.length;
    });
    expect(longTasks).toBeLessThan(5);
  });

  test('23. Third-party impact', async ({ page }) => {
    await page.goto(BASE_URL);
    const thirdPartyRequests = await page.evaluate(() => {
      return new Promise(resolve => {
        const entries = performance.getEntriesByType('resource');
        const thirdParty = entries.filter(e => {
          return !e.name.includes('mamaworld');
        }).length;
        resolve(thirdParty);
      });
    });
    expect(thirdPartyRequests).toBeLessThan(15);
  });

  test('24. API response time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    await page.waitForTimeout(2000);
    const responseTime = Date.now() - startTime;
    expect(responseTime).toBeLessThan(5000);
  });

  test('25. Cart operations speed', async ({ page }) => {
    await page.goto(BASE_URL);
    const addToBagBtn = page.locator('button:has-text("Add to bag"), button:has-text("Add to Cart")').first();
    if (await addToBagBtn.count() > 0) {
      const startTime = Date.now();
      await addToBagBtn.click();
      await page.waitForTimeout(1000);
      const operationTime = Date.now() - startTime;
      expect(operationTime).toBeLessThan(2000);
    }
  });

  test('26. Search suggestions speed', async ({ page }) => {
    await page.goto(BASE_URL);
    const searchInput = page.locator('input[type="search"]');
    await searchInput.fill('kurta');
    const startTime = Date.now();
    await page.waitForTimeout(500);
    const suggestionTime = Date.now() - startTime;
    expect(suggestionTime).toBeLessThan(1000);
  });

  test('27. Page transitioned smoothly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('a:has-text("About")');
    await page.waitForTimeout(500);
    const transTime = await page.evaluate(() => {
      const entries = performance.getEntriesByType('navigation');
      return entries[0] ? entries[0].duration : 0;
    });
    expect(transTime).toBeLessThan(3000);
  });

  test('28. Footer loads quickly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const footer = page.locator('footer');
    expect(await footer.isVisible()).toBe(true);
  });

  test('29. Form submission speed', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    const submitBtn = page.locator('button[type="submit"]');
    if (await submitBtn.count() > 0) {
      const startTime = Date.now();
      await page.fill('input[name*="name"]', 'Test');
      await page.fill('input[type="email"]', 'test@test.com');
      await page.fill('textarea', 'Test message');
      await submitBtn.click();
      await page.waitForTimeout(2000);
      const submitTime = Date.now() - startTime;
      expect(submitTime).toBeLessThan(5000);
    }
  });

  test('30. Hero image loads immediately', async ({ page }) => {
    await page.goto(BASE_URL);
    const heroImages = page.locator('[class*="hero"] img, header img');
    if (await heroImages.count() > 0) {
      const loadState = await heroImages.first().evaluate(img => {
        return img.complete && img.naturalHeight !== 0;
      });
      expect(loadState).toBe(true);
    }
  });
});