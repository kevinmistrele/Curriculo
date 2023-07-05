const puppeteer = require('puppeteer');

async function convertHTMLtoPDF() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Carregar o HTML
  await page.goto('E:\\Curriculo\\index.html', { waitUntil: 'networkidle0' });



  // Definir o caminho para salvar o PDF
  const path = 'E:\\PARA ENVIAR\\arquivo.pdf';

  await page.waitForTimeout(3000);
  // Gerar o PDF com as configurações desejadas
  await page.pdf({ path, format: 'A4' });

  await browser.close();
}

convertHTMLtoPDF();