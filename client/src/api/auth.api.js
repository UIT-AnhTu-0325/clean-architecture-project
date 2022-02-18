import axios from "../helpers/axios";

export const signin = async (data) => {
  axios.defaults.withCredentials = true;
  const res = await axios.post("SignIn", data);
  return res;
};

export const signout = async () => {
  const res = await axios.post("SignOut");
  return res;
};
