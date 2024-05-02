const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.hepsiburada.com/iphone-13-128-gb-p-HBCV00000ODHHF?magaza=Hepsiburada');

  // Örnek olarak, tüm başlıkları (h1 etiketleri) alalım:
  const headings = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('span'));
    return headings.map(heading => heading.textContent);
  });

  console.log(headings);

  await browser.close();
})();