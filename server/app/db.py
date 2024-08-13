
import motor.motor_asyncio
import json
import certifi

with open('./config/db.json') as config:
  db_config = json.loads(config.read())

client = motor.motor_asyncio.AsyncIOMotorClient(db_config.get("mongodb"),tls = True, tlsCAFile= certifi.where())
db = client.get_database("captain")

async def get_db():
    return db
