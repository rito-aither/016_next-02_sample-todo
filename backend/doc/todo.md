# ToDo REST API設計書

## ToDoアイテム一覧取得

### エンドポイント
GET /todos
### レスポンス
```json
[
  {
    "id ": 1,
    "todo": "ToDoアイテム1",
    "is_delete": false
  },
  {
    "id ": 2,
    "todo": "ToDoアイテム2",
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
  "id ": 1,
  "todo": "ToDoアイテム1",
  "is_delete": false
}
``` 
## ToDoアイテム作成
### エンドポイント
POST /todos
### リクエストボディ
```json
{
  "todo": "新しいToDoアイテム"
}
``` 
### レスポンス
``` json
{
  "id ": 3,
  "todo": "新しいToDoアイテム",
  "is_delete": false
}
```
### ToDoアイテム更新
### エンドポイント
PUT /todos/{id}
### リクエストボディ
``` json
{
  "todo": "更新されたToDoアイテム",
  "is_delete": true
}
``` 
### レスポンス
```json

{
  "id ": 3,
  "todo": "更新されたToDoアイテム",
  "is_delete": true
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
