import axios from "../helpers/axios";

export const getAll = async () => {
  const res = await axios.get(`Employee`);
  return res;
};
export const edit = async (id, employee) => {
  const res = await axios.put(`Employee/${id}`, employee);
  return res;
};
