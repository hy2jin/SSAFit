import motor.motor_asyncio
import asyncio
from bson import ObjectId
from .database_helper import *

mongo_url = "mongodb://admin:ssafit@ssafit.site:8975/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
client = motor.motor_asyncio.AsyncIOMotorClient(mongo_url)
client.get_io_loop = asyncio.get_running_loop
database = client.ssafit

cloth_collection = database.get_collection('cloth')
user_meta_collection = database.get_collection('user_meta')
cloth_meta_collection = database.get_collection('cloth_meta')
user_ssafit_collection = database.get_collection('user_ssafiit')

async def retrieve_users(what_id):
    users = []
    async for user in user_meta_collection.find({'what': int(what_id)}):
        users.append(user_meta_helper(user))
    return users

async def retrieve_clothes(what_id):
    clothes = []
    async for cloth in cloth_meta_collection.find({'what': int(what_id)}):
        clothes.append(cloth_meta_helper(cloth))
    return clothes

async def retrieve_user(userId, largecategory):
    user = await user_ssafit_collection.find_one({'userId': int(userId), 'largecategory': int(largecategory)})
    return user_ssafit_helper(user)

async def get_cloth(idList):
    clothes = []
    for cloth_id in idList:
        cloth = await cloth_collection.find_one({'newClothId': int(cloth_id)})
        clothes.append(cloth_helper(cloth))
    return clothes
    
async def get_user_gender(userId):
    user = await user_ssafit_collection.find_one({'userId': int(userId)})
    return user_ssafit_helper(user)['userMale']