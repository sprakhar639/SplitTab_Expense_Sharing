import { register, login, logout } from "./auth.service.js";
async function userRegister(req, res) {
  const user = await register(req.body);
  res.status(200).json({ message: "Registed Successfully"},user);
}
async function userLogin(req, res) {

}

async function userLogout() {}

export { userRegister, userLogin, userLogout };
