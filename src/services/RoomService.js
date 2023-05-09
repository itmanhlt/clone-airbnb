import { https } from "./config";

export const roomService = {
  getRoomList: () => https.get("/api/phong-thue"),
};
