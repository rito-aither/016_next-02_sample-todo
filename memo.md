参考に
https://zenn.dev/dani_rk/articles/4369b5d3a19629
ベース,nextはnodeのバージョンを20にした

https://zenn.dev/ryo7/articles/create-mysql-on-docker
mysqlはこれを

pirsma
https://zenn.dev/yamo/articles/prisma-express-rest-api

## 初期コマンド
### next構築
cd frontend && npx create-next-app app --ts 
### express 
cd backend
npm init 
npm install express
npm install -D typescript @types/node ts-node @types/express
npm install -D ts-node-dev
npx tsc --init
touch index.ts

package.jsonのscriptに追記
"dev": "ts-node-dev index.ts

### prisma
cd backend/app
npm install prisma --save-dev
コンテナ再起動
docker exec -it express-container /bin/sh -c "npx prisma init --datasource-provider mysql" 
.env修正
todoモデル作成
docker exec -it express-container /bin/sh -c "npx prisma migrate dev --name init"
コンテナ間のポート
https://qiita.com/YuitoSato/items/4a4b46f5670b45739a37


### tailwindcss
https://qiita.com/P-man_Brown/items/6e9e1f18453a39bda4de
https://nerdcave.com/tailwind-cheat-sheet

## memo
next.jsでcrosエラー
https://dev.to/kaede_io/next-ji-chu-part-02-axios-de-api-wokou-keruyounisuru-59ae




### 履歴

```
trmac 016_next-02_msEngineer-todo % cd frontend && npx create-next-app app --ts 
Need to install the following packages:
  create-next-app@14.0.2
Ok to proceed? (y) y
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'create-next-app@14.0.2',
npm WARN EBADENGINE   required: { node: '>=18.17.0' },
npm WARN EBADENGINE   current: { node: 'v16.20.0', npm: '8.19.4' }
npm WARN EBADENGINE }
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/repository/my/016_next/016_next-02_msEngineer-todo/frontend/app.

Using npm.

Initializing project with template: app-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- autoprefixer
- postcss
- tailwindcss
- eslint
- eslint-config-next

npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'next@14.0.2',
npm WARN EBADENGINE   required: { node: '>=18.17.0' },
npm WARN EBADENGINE   current: { node: 'v16.20.0', npm: '8.19.4' }
npm WARN EBADENGINE }

added 331 packages, and audited 332 packages in 29s

116 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created app at /Users/repository/my/016_next/016_next-02_msEngineer-todo/frontend/app




- postcss
- tailwindcss
- eslint
- eslint-config-next

npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'next@14.0.2',
npm WARN EBADENGINE   required: { node: '>=18.17.0' },
npm WARN EBADENGINE   current: { node: 'v16.20.0', npm: '8.19.4' }
npm WARN EBADENGINE }

added 331 packages, and audited 332 packages in 29s

116 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created app at /Users/repository/my/016_next/016_next-02_msEngineer-todo/frontend/app





trmac 016_next-02_msEngineer-todo % cd backend
npm init
npm install express
npm install -D typescript @types/node ts-node @types/express
npx tsc --init
touch index.ts
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (backend) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/repository/my/016_next/016_next-02_msEngineer-todo/backend/package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 

added 62 packages, and audited 63 packages in 1s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

added 30 packages, and audited 93 packages in 3s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig


@trmac 016_next-02_msEngineer-todo % docker exec -it express-container /bin/sh -c "npx prisma init --datasource-provider mysql" 

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

```
