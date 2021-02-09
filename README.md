# quickTypeORM

## TypeORM
[Documentação](https://typeorm.io/)

## Iniciando o projeto com TypeORM
1. Instale typeorm globalmente
``` npm i typeorm -g ```

2. Inicie o projeto onde: 
- MyProject é nome do seu projeto
- --database é o banco de dados utilizado
``` 
  typeorm init --name MyProject --database mysql 
```

## Estrutura das pastas depois do projeto criado:
``` 
MyProject
├── src              // place of your TypeScript code
│   ├── entity       // place where your entities (database models) are stored
│   │   └── User.ts  // sample entity
│   ├── migration    // place where your migrations are stored
│   └── index.ts     // start point of your application
├── .gitignore       // standard gitignore file
├── ormconfig.json   // ORM and database connection configuration
├── package.json     // node module dependencies
├── README.md        // simple readme file
└── tsconfig.json    // TypeScript compiler options
```

3. Entre na pasta do projeto e instale os pacotes:
``` 
  cd MyProject
  npm install
```

4. Confira as configurações e caminhos das pasta no arquivo ormconfig.json
```
{
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "test",
   "password": "test",
   "database": "test",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ]
}
```

6. Iniciando o projeto: 
``` 
  npm start 
```

## Trabalhando com Entities
1. Criando Entity pelo terminal:
```
npx typeorm entity:create -n entityName
```

2. Caso queira trabalha a migration com comando sql:
```
npm run typeorm migration:generate -- -n NomeDaTabela
```

3. Para adiciona um novo campo a classe já existente basta digitar o comando:
```
npm run typeorm migration:generate -- -n AddNomeCampoNomeTabela
```

## Deploy no heroku
1. Usando o cli do heroku
[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

2. inserir no script do package.json:
``` 
"start": "node dist/server.js"
```
Assim o heroku entende que o node deve executar o arquivo no caminho expecificado.
Dica: Para criar a pasta dist digite: ``` tsc ``` no terminal para criar o build do projeto

## criando o app no heroku via terminal
1. 
```
heroku login
```

2. criando o app
```
heroku create nome-do-app
```

3. Deixando heroku puxando apdates do repo no github
Vai no app recem criado no heroku entre nele, vai em 
deploy > conectar com github > digiteNomeDoRepo e colcoa pra buscar > connect > marca caixa do cli > enable deploy automatic

4. instalando addon postgres pelo terminal
```
heroku addons:create heroku-postgresql:hobby-dev
```
5. Vai em settings no app, e click em review config vars para add a variavel de ambiente criado na instalação do banco postgres, lá tem a url que deve se adcionada na configuração do ormconfig.json do projeto local.

6. converter o arquivo ormconfig.json para ormconfig.js

7. trabalhando com a variaveis de ambiente
```
npm i dotenv
```
8. no server.ts
```
import dotenv from 'dotenv'
```
9. Chamar no final do arquivo antes do app.listen
```
dotenv.config()
```
10. criar o .env e inserir
```
DATABASE_URL = urllocal
```
11. na ormconfig.js
```
"url": process.env.DATABASE_URL,
```

12. Configurar os caminhos das entidades, e migrations

## Acessando banco remotamente do heroku e executando as migrations via terminal
1. ``` heroku pg:psql ```



