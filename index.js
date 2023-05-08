/**
 * Videos de referência para criar este código:
 * 
 * -Como criar um robô que faz login e da like? | Robô com JavaScript, NodeJS e Puppeteer : 
 * https://www.youtube.com/watch?v=Ltdp9-ZTAzM
 * 
 * - Como criar um robô que acessa sites com JavaScript .feat NodeJS | O que é Pupeteer? 
 * https://www.youtube.com/watch?v=4W55nFDyIrc
 */

//require('dotenv').config()

const puppeteer = require("puppeteer");

console.log('Bem vindo ao teste do Puppeteer!');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();

  const URL = "https://beta.dashboard.pagar.me/#/account/login"
  await page.goto(URL);

  //Para não deixar tão exposto dados sensíveis,
  // informações de Email e Senha foram armazenadas no arquivo ".env"
  // esse arquivo não será passado para Github nem ficará tão exposto
  
  // === Digitar Email e Acessar ===//
  email = "anderson.leandro@agendaedu.com";
  await page.type('[name="email"]', email);
  //await page.type('[name="email"]', process.env.PAGARME_EMAIL);
  
  //clicar em "Entrar"
  await page.click('[class="index_button__R7TRH index_flat__4ocPA index_normalRelevance__XjXcN index_huge__aqouP"]');
  //esperar a página carregar
  await page.waitForNavigation(); 
  
  // === Digitar Senha e Acessar (semelhante ao acesso do Email) ===//
  senha="Nick2@@9"
  await page.type('[name="password"]', senha); 
  //await page.type('[name="email"]', process.env.PAGARME_PASSWORD);
  await page.click('[class="index_button__R7TRH index_flat__4ocPA index_normalRelevance__XjXcN index_huge__aqouP"]'); 
  await page.waitForNavigation();

  //Ir em Recebedores
  await page.waitForNavigation();
  await page.waitForNavigation(); //precisou ter duas vezes para dar tempo para carregar
  await page.click('[data-testid="menu-recipients"]');
  await page.waitForNavigation();

  //Digitar "fm securitizadora" na caixa de busca
  await page.waitForNavigation();
  await page.waitForNavigation();
  const busca = 'fm securitizadora'
  await page.type('#search-zQeXKCyAb', busca);
  await page.click('[class="index_button__R7TRH index_flat__4ocPA index_normalRelevance__XjXcN index_default__xQV7T"]')

  //await browser.close();
})();