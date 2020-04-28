(() => {
    const DB_NAME = "my-database";
    const RULE_COLLECTION = "test";
  
    db = db.getSiblingDB(DB_NAME);
  
    db.createCollection(RULE_COLLECTION, {
      validator: {
        $jsonSchema: {
          required: [
            "id",
            "name"
          ],
          properties: {
            id: {
              bsonType: "string",
              description: "running number ID for each channel ID"
            },
            name: {
              bsonType: "string",
              description: "Rule name",
              minimum: 1,
              maximum: 40
            }
          }
        }
      }
    });
  
    db.getCollection(RULE_COLLECTION).createIndex({ name: 1 }, { background: true });
  })();
  