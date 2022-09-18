const express = require("express");
const {
  createContact,
  getAllContact,
  deleteContact,
  editContact,
  uploadContactPhoto,
  // deleteContactPhoto,
} = require("../controller/contact");
const routes = express.Router();

//contact
routes.post("/create-contact", createContact);
routes.get("/get-all-contacts", getAllContact);
routes.delete("/delete-contact/:id", deleteContact);
routes.patch("/edit-contact/:id", editContact);
routes.post("/upload-image/:id", uploadContactPhoto);
// routes.delete("/delete-image/:id", deleteContactPhoto);

module.exports = routes;
