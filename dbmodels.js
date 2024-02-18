const mongoose = require('mongoose');

mongoose.set('strictQuery', false)


const stickerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address1: String,
    address2: String,
    state: String,
    city: String,
    pincode: String
})

const workshopSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
    address1: String,
    address2: String,
    state: String,
    city: String,
    pincode: String
})

const contestSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
    address: String,
    school: String,
    state: String,
    city: String,
    pincode: String,
    profile_url: String,
    art_url: String,
    art_description: String
})

stickerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

workshopSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

contestSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = {
    Sticker: mongoose.model('Sticker', stickerSchema),
    Workshop: mongoose.model('Workshop', workshopSchema),
    Contest: mongoose.model('Contest', contestSchema),
}