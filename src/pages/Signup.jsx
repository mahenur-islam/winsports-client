// Signup.js
import React, { useContext } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import SocialLogin from '../components/SocialLogin/SocialLogin';
// import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // get field values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    // create a new user
    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form className="flex max-w-md flex-col gap-4 mx-auto p-3" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            name="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" name="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Signup;
