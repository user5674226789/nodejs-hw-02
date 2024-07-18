// src/services/contact.js

import {
    ContactsCollection
} from "../db/models/contact.js";

export const getAllContacts = async () => {
    return await ContactsCollection.find();
};

export const getContactById = async (contactId) => {
    return await ContactsCollection.findById(contactId);
};
