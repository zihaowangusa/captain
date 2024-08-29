import dateutil.parser
from fastapi import APIRouter, Request, Depends
from fastapi.responses import JSONResponse
from bson.objectid import ObjectId
from utils import parser
from db import get_db
from schema.schedule import Event
from pydantic import BaseModel
from typing import List

router = APIRouter()

class EventData(BaseModel):
    events: List[Event]

class EventIds(BaseModel):
    ids: List[str]


@router.get("/event", summary="Get Schedule Event")
async def get_schedule_event(start, end, db=Depends(get_db)):
    schedule_collection = db.get_collection("schedule")
    events = []

    async for event in schedule_collection.find({"start" : { "$gte": dateutil.parser.parse(start), "$lte": dateutil.parser.parse(end)} }):
        event = parser.parse_json(event)
        event["start"] = event.get("start", None).get("$date", None)
        event["end"] = event.get("end", None).get("$date", None)
        events.append(event)

    return JSONResponse({"code": 200, "message": "Successfully Retrieved Events", "data": events})


@router.post("/event", summary="Save Schedule Event")
async def save_schedule_event(data:EventData, db=Depends(get_db)):
    schedule_collection = db.get_collection("schedule")

    if(len(data.events) > 0):
        new_events = []
        for event in data.events:
            new_event = event.model_dump()
            new_event['start'] = dateutil.parser.parse(event.start)
            new_event['end'] = dateutil.parser.parse(event.end)
            new_event['_id'] = ObjectId()
            new_events.append(new_event)

        await schedule_collection.insert_many(new_events)

    return JSONResponse({"code": 200, "message": "Successfully Saved Events", "data": []})


@router.put("/event", summary="Modify Schedule Event")
async def modify_schedule_event(data:EventData, db=Depends(get_db)):
    schedule_collection = db.get_collection("schedule")
    new_events = []

    for event in data.events:
        id = event.get("id", None)
        previous_event = await schedule_collection.find_one({"id": id})

        if previous_event:
            updated_event = await schedule_collection.update_one(
                {"id": id }, {"$set": event}
            )
            new_events.append(updated_event)

    if len(new_events)>0:
        return JSONResponse({"code": 200, "message": "Successfully Updated Events", "data": []})
    else:
        return JSONResponse({"code": 500, "message": "Failed to Update Events", "data": []})


@router.delete("/event", summary="Delete Schedule Event")
async def delete_schedule_event(data: EventIds, db=Depends(get_db)):
    schedule_collection = db.get_collection("schedule")

    if len(data.ids)>0:
        await schedule_collection.delete_many({"id": { "$in": data.ids}})
        return JSONResponse({"code": 200, "message": "Successfully Deleted Event", "data": []})
    else:
        return JSONResponse({"code": 404, "message": "Event Not Found", "data": []})
