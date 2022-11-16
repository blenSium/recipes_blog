const usersModel = require('../models/usersModel')

const getUsers = () => {
  return usersModel.find({});
};
const getUser = (obj) => {
  return usersModel.findOne(obj);
};

const getUserById = (id) => {
  return usersModel.findById(id);
};

const addUser = async (obj) => {
  try {
    const newUser = usersModel({
      fullName: obj.fullName,
      email: obj.email,
      password: obj.password,
    });
    await newUser.save();
    return "Created";
  } catch (e) {
    throw e;
  }
};

const editUser = async (id, obj) => {
    try {
      await usersModel.findByIdAndUpdate(id, obj);
      return "UPDATED";
    } catch (e) {
      ("ERROR");
    }
  };

module.exports = { getUsers, getUserById, addUser, editUser,getUser};
