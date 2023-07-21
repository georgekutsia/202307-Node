const User = require('../models/user.model');

//Obtener todos los datos de BD
const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find(); //recojo los datos que me da la BD
    return res.status(200).json(allUsers); // devuelvo los datos en formato JSON, con status 200
  } catch (error) {
    return res.status(500).json(error);
  }
};
// hacer funciones del CRUD
// Añadir nuevo usuario a la BD
const newUser = async (req, res) => {
  try {
    const userBody = req.body;
    const newUser = new User(userBody);
    const createdUser = await newUser.save(); // guardamos  el usuario en mongo
    return res.status(200).json(createdUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};
// modificar los datos de un usuario en BD
const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // hago destructuring del objeto params
    const user = new User(req.body); //crear el usuario con los datos del body
    user._id = id; //añadirle la propiedad _id con el identificador que me llega de la url
    console.log(id);
    const updateUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (!updateUser) {
      return res.status(404).json({ message: 'usario no encontrado' });
    }
    return res.status(200).json(updateUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// eliminar un docuemnto de la coleccion user (findByIdAndDelete)

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // el id enviado en la url de la peticion
    const deleteUser = await User.findByIdAndDelete(id); // busca por id y se elimina el documento
    if (!deleteUser) {
      return res.status(404).json({ message: 'usario no encontrado' });
    }
    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = { getUsers, newUser, updateUser, deleteUser };
