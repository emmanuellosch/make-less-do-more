import { User } from "../models/User.model.js";
import { findAll, findById, saveToDb } from "../lib/databaseHelpers.js";

async function getCUsers(_, res) {
  try {
    const user = await findAll(User);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
}

async function getUser(req, res) {
  const userId = req.params.userId;
  try {
    const user = await findById(User, userId);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
}

async function postUser(req, res) {
  const newCustomer = new Customer({
    firstName: req.body.firstName,
    email: req.body.email,
    image: req.body.image,
  });
  try {
    const user = await saveToDb(newUser);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
}

export { getUser, postUser, getUser };
