import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form action="#" method="post" className="mt-12 px-7">
      <h1 className="text-center text-app-text-secondary text-3xl font-inter-bold mb-12">
        Sign in to your account
      </h1>

      <input
        type="email"
        className="w-full h-11 py-2 px-3 font-inter-regular focus:outline-none text-base placeholder:text-app-text-primary rounded-t-md border border-app-text-primary"
        placeholder="Email address"
      />
      <input
        type="password"
        className="w-full mb-6 h-11 py-2 px-3 font-inter-regular text-base focus:outline-none placeholder:text-app-text-primary rounded-b-md border border-app-text-primary border-t-0"
        placeholder="Password"
      />

      <button
        type="submit"
        className="bg-btn-bg-primary rounded-md text-pure-white py-4 w-full text-center font-inter-bold text-base mb-12"
      >
        Sign in
      </button>

      <p className="font-inter-medium text-base text-app-text-secondary text-center">
        Don't have an account?{" "}
        <Link to="" className="font-inter-bold text-btn-bg-primary">
          Create one now
        </Link>
      </p>
    </form>
  );
};

export default Login;
