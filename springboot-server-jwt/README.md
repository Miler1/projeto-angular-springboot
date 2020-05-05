
## Quick start

O servidor foi implementado na linguagem java com Spring Boot que é baseada no Spring e para o armazenamento de dados foi utilizado o servidor MySQL. Além disso foi configurado uma biblioteca de autenticação conhecida como JWT (Json Web Token) para garantir o acesso de determinados recursos somente com o referido token de autenticação para garantir a segurança das informações.

Para executar o servidor spring boot deverão ser executadas as seguintes etapas:

dentro da pasta executar o comando:
"mvn spring-boot:run" ou poderá ser aberto dentro de qualquer IDE de desenvolvimento de sua preferência.
O comando acima instala as dependencias do maven quando é executado pela primeira vez e depois executa o servidor.

Como pré-requisito deve ser instalado o maven no seu computador o mesmo poderá ser baixado nesse link: https://maven.apache.org/download.cgi. No sistema operacional Windows o comando deve ser setado na variável de ambiente.

caso o comando exibir a seguinte mensagem: 
"The JAVA_HOME environment variable is not defined correctly This environment variable is needed to run this program NB: JAVA_HOME should point to a JDK not a JRE" 

basta executar o comando:
"export PATH=$JAVA_HOME/jre/bin:$PATH" na qual permitirá a execução do comando do maven normalmente.

## Executar o servidor no terminal
```
mvn spring-boot:run
```

## Script SQL do banco de dados

No repositório principal se encontra o script de criação das tabelas do banco de dados. O script deverá ser importado no MySQL Workbench em qualquer IDE de preferência ou pelo terminal.

```
# comando do terminal
mysql -u <username> -p<PlainPassword> <databasename> < <filename.sql>
```

Em ambas as formas tanto pelo Workbench como pelo terminal deverá ser criado a base de dados antes de ser importado o arquivo.

```
# pelo terminal basta digitar
mysql -u <username> -p 

# tecle enter após isso informe a senha e entre com comando abaixo
CREATE DATABASE dbtest; 
assim o banco de dados será criado
```

## Executar o script SQL abaixo
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```

```
# repositorio do backup no github
https://github.com/Miler1/projeto-angular-springboot/blob/master/script.sql

```

