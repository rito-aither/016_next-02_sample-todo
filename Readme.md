## dockerコンテナ作成
```
#コンテナ作成 イメージごと
docker-compose up -d --build

#コンテナ起動
docker-compose up -d 

#コンテナ停止
docker-compose down   

#コンテナ削除
docker-compose down --rmi all -v

``` 
## コマンド
docker exec -it express-container /bin/sh -c "npx prisma studio" 

## 初期構築
docker-compose up -d --build
以降はコンテナを起動と停止してください
