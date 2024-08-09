import mongoose from "mongoose";
const contactsSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: ["work", "home", "personal"],
        required: true,
        default: "personal",
    },
    },
    {
        timestamps: true,
        versionKey: false,
    },

);

const Contact = mongoose.model("Contact", contactsSchema);

export default Contact ;
