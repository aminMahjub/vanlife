import { redirect } from "./mutateRedicret";

const LOGIN_MESSAGE = "You must login first";

export async function requireAuth({ url }: Request) {
  const pathname = new URL(url).pathname;
  const isLoggedIn = JSON.parse(localStorage.getItem("logged_in") as string);

  if (!isLoggedIn) {
    throw redirect(`/login?msg=${btoa(LOGIN_MESSAGE)}${pathname && "&redirectTo=" + pathname}`);
  }

  return null;
}
