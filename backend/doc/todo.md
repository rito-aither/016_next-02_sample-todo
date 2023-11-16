# ToDo REST API設計書

## ToDoアイテム一覧取得

### エンドポイント
GET /todos
### レスポンス
```json
[
  {
    "id": 1,
    "title": "ToDoアイテム1",
    "is_delete": false
  },
  {
    "id": 2,
    "title": "ToDoアイテム2",
    "is_delete": true
  },
  // 他のToDoアイテム
]
``` 
## ToDoアイテム詳細取得
### エンドポイント
```bash
GET /todos/{id}
``` 
### レスポンス
```json
{
  "id": 1,
  "title": "ToDoアイテム1",
  "completed": false
}
``` 
## ToDoアイテム作成
### エンドポイント
POST /todos
### リクエストボディ
```json
{
  "title": "新しいToDoアイテム"
}
``` 
### レスポンス
``` json
{
  "id": 3,
  "title": "新しいToDoアイテム",
  "completed": false
}
```
### ToDoアイテム更新
### エンドポイント
PUT /todos/{id}
### リクエストボディ
``` json
{
  "title": "更新されたToDoアイテム",
  "completed": true
}
``` 
### レスポンス
```json

{
  "id": 3,
  "title": "更新されたToDoアイテム",
  "completed": true
}
``` 
## ToDoアイテム削除
### エンドポイント
DELETE /todos/{id}
### レスポンス
``` json

{
  "message": "ToDoアイテムが削除されました"
}
``` 
