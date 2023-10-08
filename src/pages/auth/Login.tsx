import { Link, useLoaderData, Form, useActionData, useNavigation } from "react-router-dom";
import { useState } from "react";
import getUsers from "../../services/getUsers";
import { redirect } from "../../utils/mutateRedicret";
import { AxiosError } from "axios";
import useTitleDocument from "../../hooks/useTitleDocument";

export const loader = async ({ request }: { request: Request }) => {
  const encodedMessage = new URL(request.url).searchParams.get("msg");
  if (encodedMessage !== null) {
    return atob(encodedMessage);
  }

  return null;
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const [email, password] = [formData.get("email"), formData.get("password")];

  try {
    const user = await getUsers({ email, password });
    const pahtname = new URL(request.url).searchParams.get("redirectTo") || "/host";
    localStorage.setItem("logged_in", "true");
    throw redirect(pahtname);
  } catch (error) {
    return error;
  }
};

const Login = () => {
  const loginMessage = useLoaderData() as string;
  const errorMsg = useActionData() as AxiosError;
  const { state } = useNavigation();
  const pageTitle = useTitleDocument("Login");

  return (
    <Form method="post" className="mt-12 px-7">
      {loginMessage && (
        <div className="text-center mb-6 text-btn-bg-primary py-3 bg-secondary-color border border-btn-bg-primary rounded-md">
          {loginMessage}
        </div>
      )}
      <h1 className="text-center text-app-text-secondary text-3xl font-inter-bold mb-12">
        Sign in to your account
      </h1>

      {errorMsg && <p className="text-rose-800 font-inter-bold text-center">{errorMsg.message}</p>}

      <input
        type="email"
        className="w-full h-11 py-2 px-3 font-inter-regular focus:outline-none text-base placeholder:text-app-text-primary rounded-t-md border border-app-text-primary"
        placeholder="Email address"
        name="email"
      />
      <input
        type="password"
        className="w-full mb-6 h-11 py-2 px-3 font-inter-regular text-base focus:outline-none placeholder:text-app-text-primary rounded-b-md border border-app-text-primary border-t-0"
        placeholder="Password"
        name="password"
      />

      <button
        type="submit"
        disabled={state === "submitting"}
        className="bg-btn-bg-primary cursor-pointer rounded-md text-pure-white py-4 w-full text-center font-inter-bold text-base mb-12"
      >
        {state === "submitting" ? "Sending" : "Sign In"}
      </button>

      <p className="font-inter-medium text-base text-app-text-secondary text-center">
        Don't have an account?{" "}
        <Link to="" className="font-inter-bold text-btn-bg-primary">
          Create one now
        </Link>
      </p>
    </Form>
  );
};

export default Login;
