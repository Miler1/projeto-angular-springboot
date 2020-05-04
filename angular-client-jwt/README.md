### Quick start
Verifique se você possui a versão do node > = v12.14.0 e npm >= 6.13.4 **
> Clone / Faça o download do repositório e edite `app.component.ts` dentro de [` /src/app/app.component.ts`Body(/src/app/app.component.ts)

```bash
# clone nosso repo
# --depth 1 remove todos, exceto um histórico de confirmação .git
git clone --depth 1 https://github.com/angularclass/angular2-webpack.git

# mudar o diretorio do nosso repo
cd angular2-webpack

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
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Backend](#backend)


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

# Getting Started
## Dependencies
O que você precisa para executar este aplicativo:
* `node` e` npm` (`brew install node`)
* Verifique se você está executando as últimas versões: Node `v6.x.x` + (ou` v7.x.x`) e NPM `3.x.x` +

> Se você tem o `nvm` instalado, o que é altamente recomendado (` brew install nvm`), você pode fazer um `nvm install --lts && nvm use` em` $ `para rodar com o Node LTS mais recente. Você também pode fazer esse `zsh` para você [automaticamente] (https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

Depois de ter esses, você deve instalar esses globais com `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork 'este repositório
* clone o 'fork'
* `npm install webpack-dev-server rimraf webpack -g` para instalar as dependências globais necessárias
* `npm install` para instalar todas as dependências ou` yarn`
* `npm run server` para iniciar o servidor de desenvolvimento em outra aba

## Running the app
Depois de instalar todas as dependências, você poderá executar o aplicativo. Execute o `npm run server` para iniciar um servidor local usando o` webpack-dev-server` que assistirá, criará (na memória) e recarregará para você. A porta será exibida para você como
 `http://0.0.0.0:3000` (ou se você preferir IPv6, se estiver usando o servidor `express`, é
 `http://[::1]:3000/`).

### server
```bash
# desenvolvimento
npm run server
# produção
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# desenvolvimento
npm run build:dev
# produção (jit)
npm run build:prod
# AoT
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (opcional, feito automaticamente pelo script de pós-instalação)
npm run webdriver: atualização
# isto iniciará um servidor de teste e iniciará o transferidor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# isso testará suas compilações JIT e AoT
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

