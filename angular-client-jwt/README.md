### Quick start

## Dependencies

Os primeiros passos incluem verificar se você possui alguma versão do node e npm instalados. Os requisitos para a exeução do servidor incluem a instalação do node no computador. O node é um software que permite a execução do javascript e que através deste link ele pode ser baixado: https://nodejs.org/en/. Já o npm é instalado juntamente com node, o npm nada mais é um gerenciador de pacotes na qual permite a instalação de diversas outras ferramentas para auxilar no desenvolvimento. Após o download basta instalar e verificar se as dependências foram instalados corretamente:

No terminal basta digitar o comando:

node -v
npm -v

Caso apareça o número da versão, significa que o node foi instalado corretamente. Neste caso a versão que foi utilizada foram:

node >= 12.14.0
npm >= 6.13.4

```bash
# clone do repositório

git clone --depth 1 https://github.com/Miler1/projeto-angular-springboot.git

# mudar o diretorio do nosso repo
cd projeto-angular-springboot
cd angular-client-jwt

# instalar o repo com npm install
npm install

# iniciar o servidor
npm start

```
Copiar a url [http://localhost:4200](http://localhost:4200) para o seu navegador

## Estrutura de arquivos
Abaixo se encontra a estrutura de arquivos do projeto do Angular:

```
angular-client-jwt/
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```

