import { redirect } from "./mutateRedicret";

const LOGIN_MESSAGE = "You must login first";

export async function requireAuth() {
  const isLoggedIn = JSON.parse(localStorage.getItem("logged_in") as string);

  if (!isLoggedIn) {
    throw redirect(`/login?msg=${btoa(LOGIN_MESSAGE)}`);
  }

  return null;
}
