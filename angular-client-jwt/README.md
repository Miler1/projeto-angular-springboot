### Quick start

## Dependencies
Verifique se você possui a versão do node > = v12.14.0 e npm >= 6.13.4.

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

# usar substituição de Hot Module
npm run server:dev:hmr
```
vai para [http://localhost:4200](http://localhost:4200) no seu navegador

# Table of Contents
* [File Structure](#file-structure)

## File Structure
Usamos a abordagem de componentes em nosso motor de partida. Esse é o novo padrão para o desenvolvimento de aplicativos Angular e uma ótima maneira de garantir código sustentável, encapsulando nossa lógica de comportamento. Um componente é basicamente um aplicativo independente, geralmente em um único arquivo ou pasta com cada preocupação como um arquivo: estilo, modelo, especificações, e2e e classe de componente. Veja como fica:

```
angular2-webpack/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up our Angular testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
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

