// SocialLogin.js
import React, { useContext } from 'react';
import { Button } from 'flowbite-react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
  const { googleLogIn, githubLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle Social login
  const handleSocialLogIn = (media) => {
    media()
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
      <div className="flex justify-center items-center mt-5">
        <div className="h-[1px] w-20 bg-gray-300"></div>
        <h1 className="mx-5">or login with</h1>
        <div className="h-[1px] w-20 bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <Button outline gradientDuoTone="purpleToBlue" onClick={() => handleSocialLogIn(googleLogIn)}>
          Google
        </Button>
        <Button outline gradientDuoTone="purpleToBlue" onClick={() => handleSocialLogIn(githubLogIn)}>
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
