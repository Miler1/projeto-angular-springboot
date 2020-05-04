
# Backend

## Localização
```
 angular2-webpack/
 ├──backend/                           * pasta raiz
 |   ├──src                            * pasta do servidor
 ```

O servidor foi implementado na linguagem java com Spring Boot que é baseada no Spring e para o armazenamento de dados foi utilizado o servidor MySQL.

Para executar o servidor spring boot deverão ser executadas as seguintes etapas:

dentro da pasta executar o comando:
"mvn spring-boot:run" ou poderá ser aberto dentro de qualquer IDE de desenvolvimento de sua preferência.
O comando acima instala as dependencias do maven quando é executado pela primeira vez e depois executa o servidor.

Como pré-requisito deve ser instalado o maven no seu computador o mesmo poderá ser baixado nesse link: https://maven.apache.org/download.cgi. No sistema operacional Windows o comando deve ser setado na variável de ambiente.

caso o comando exibir a seguinte mensagem: 
"The JAVA_HOME environment variable is not defined correctly This environment variable is needed to run this program NB: JAVA_HOME should point to a JDK not a JRE" 

basta executar o comando:
"export PATH=$JAVA_HOME/jre/bin:$PATH" na qual permitirá a execução do comando do maven normalmente.

## Run Spring Boot application
```
mvn spring-boot:run
```

## Run following SQL insert statements
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```
