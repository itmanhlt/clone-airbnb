import { https } from "./config";

export const userService = {
  getInfoPersonal: (id) => https.get(`/api/users/${id}`),
};
