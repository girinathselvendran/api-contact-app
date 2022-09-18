const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name: { type: String, default: "" },
        emailId: { type: String, default: "" },
        phoneNumber: { type: String, default: "" },
        profile: { type: String, default: "" },
        photoPublic_id: { type: String, default: "" },
    },
    { timestamps: true }
);
module.exports = mongoose.model("contact-list", ContactSchema);
