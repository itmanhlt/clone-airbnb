import { https } from "./config";

export const authService = () => ({
  sigIn: (account) => https.post("/api/auth/signin", account),
});
