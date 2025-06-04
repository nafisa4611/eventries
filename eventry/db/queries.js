import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";
import mongoose from "mongoose";

import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

async function getAllEvents(query) {
    let allEvents = [];
    if (query) {
        const regex = new RegExp(query, "i");
        allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
    } else {
        allEvents = await eventModel.find().lean();
    }
    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}

async function createUser(user) {
    return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function updateInterest(eventId, authId) {
    try {
        const event = await eventModel.findById(eventId);

        if (!event) return null;

        const userIndex = event.interested_ids.findIndex(id => id.toString() === authId);
        const userObjectId = new mongoose.Types.ObjectId(authId);

        if (userIndex !== -1) {
            event.interested_ids.pull(userObjectId);
        } else {
            event.interested_ids.push(userObjectId);
        }

        const updatedEvent = await event.save();
        return replaceMongoIdInObject(updatedEvent.toObject());
    } catch (err) {
        console.error("Error updating interest:", err);
        throw err;
    }
}

async function updateGoing(eventId, authId) {
    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    await event.save();
}

export {
    getAllEvents,
    getEventById,
    createUser,
    findUserByCredentials,
    updateInterest,
    updateGoing
}
