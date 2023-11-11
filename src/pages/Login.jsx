import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import SocialLogin from "../components/SocialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // get field values
    const email = event.target.email.value;
    const password = event.target.password.value;

    // validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // create a new user
    signIn(email, password)
      .then((res) => {
        toast.success("user created successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <form
        className="flex max-w-md flex-col gap-4 mx-auto mt-10 shadow-xl p-5 my-20 rounded-md"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-xl font-bold mb-2">Login Now!</h1>
          <p className="text-gray-600">
            Doesn't have an account yet?{" "}
            <span className="font-bold text-[#053B50] hover:underline">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email Address" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            name="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" name="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className="bg-[#053B50] ">
          Login
        </Button>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Login;
