import { FetchResponeUser } from "../types";
import api from "../utils/api";

const getUsers = (creds: FetchResponeUser) => api("/login", { method: "post", data: creds });

export default getUsers;
