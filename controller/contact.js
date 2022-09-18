const Contact = require("../Model/Contact");
const axios = require("axios");
const cloudinary = require("cloudinary");
// console.log("cloudinary", cloudinary);

const createContact = async (req, res) => {
  try {
    const { PhoneNumber, Name, EmailId, Photo, PhotoPublic_id } = req.body;

    const contactData = new Contact({
      name: Name,
      emailId: EmailId,
      phoneNumber: PhoneNumber,
      profile: Photo,
      photoPublic_id: PhotoPublic_id,
    });
    await contactData.save();

    let response = await Contact.find().sort({
      createdAt: "desc",
    });

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

const getAllContact = async (req, res) => {
  try {
    let response = await Contact.find().sort({
      createdAt: "desc",
    });

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

const editContact = async (req, res) => {
  try {
    const { PhoneNumber, Name, EmailId, Photo, Id, PhotoPublic_id } = req.body;

    await Contact.findByIdAndUpdate(Id, {
      name: Name,
      emailId: EmailId,
      phoneNumber: PhoneNumber,
      profile: Photo,
      photoPublic_id: PhotoPublic_id,
    });

    let response = await Contact.find().sort({
      createdAt: "desc",
    });

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

const uploadContactPhoto = async (req, res) => {
  let aa = req.body;
  let response = await axios({
    method: "post",
    url: "http://api.cloudinary.com/v1_1/dqaevwfop/image/upload",
    data: req.body,
  });
  console.log("response", response.data);
};

// const deleteContactPhoto = async (req, res) => {
//   cloudinary.config({
//     cloud_name: "dqaevwfop",
//     api_key: "135441475753318",
//     api_secret: "LAnu3c7gyk6IyBEaw7R7Wz9tCnk",
//   });
//   try {
//     // delete image from cloudinary first
//     cloudinary.uploader
//       .destroy("62a810cc4591160d024715c02a53e242",array('invalidate'=>TRUE, 'type'=>'fetch', 'resource_type'=>'image'))
//       .then((res) => {
//         console.log("res", res);
//         return res.status(200).json({
//           status: 200,
//           data: res,
//         });
//       })
//       .catch((err) => {
//         return res.status(400).json({
//           status: 400,
//           data: err,
//         });
//       });
//   } catch (error) {
//     console.log("error.message", error);
//   }
// };

const deleteContact = async (req, res) => {
  try {
    let id = req.params.id;
    await Contact.findByIdAndRemove(id, { new: true });

    let response = await Contact.find().sort({
      createdAt: "desc",
    });

    return res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

module.exports = {
  createContact,
  getAllContact,
  editContact,
  uploadContactPhoto,
  // deleteContactPhoto,
  deleteContact,
};
