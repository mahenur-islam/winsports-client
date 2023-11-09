import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";



const Login = () => {
  return (
    <div>
      {/* <div className="max-w-md">
        <img src="https://i.ibb.co/p0fq94m/undraw-Access-account-re-8spm.png" alt='login-illustration'/>
      </div> */}
      <form className="flex max-w-md flex-col gap-4 mx-auto mt-10 shadow-xl p-5 my-20 rounded-md">
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
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className="bg-[#053B50] ">
          Login
        </Button>
        <div className="flex justify-center items-center mt-5">
        <div className="h-[1px] w-20 bg-gray-300"></div>
        <h1 className="mx-5">or login with</h1>
        <div className="h-[1px] w-20 bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <Button outline gradientDuoTone="purpleToBlue">
            Google
          </Button>
          <Button outline gradientDuoTone="purpleToBlue">
            Facebook
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
