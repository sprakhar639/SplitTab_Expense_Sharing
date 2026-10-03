import { register, login, logout } from "./auth.service.js";

async function userRegister(req, res) {
  try {
    const { user, sessionToken } = await register(req.body);

    res.cookie("sessionId", sessionToken, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Registed Successfully", user });
  } catch (error) {
    res.status(404).json({ message: "Registration Failed" });
  }
}

async function userLogin(req, res) {
  try {
    const {user,sessionToken} = await login(req.body);

    res.cookie("sessionId",sessionToken,{
      httpOnly:true,
      secure:false,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(200).json({ message: "LoggedIn Successfully", user });
  } catch (error) {
    res.status(404).json({ message: "LoggedIn Failed" });
  }
}

async function userLogout() {}

export { userRegister, userLogin, userLogout };
