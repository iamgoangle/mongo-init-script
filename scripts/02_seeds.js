const DB_NAME = "my-database";
db = db.getSiblingDB(DB_NAME);

db.test.insert([{
    "id": "1",
    "name": "Hello World 1"
}])

db.test.insert([{
    "id": "2",
    "name": "Hello World 2"
}])
