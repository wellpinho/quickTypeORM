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

