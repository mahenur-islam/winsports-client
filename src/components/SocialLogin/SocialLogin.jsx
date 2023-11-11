import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {

    const { googleLogIn } = useContext(AuthContext);
    
   //handle Social login 
   const handleSocialLogIn = (media) =>{
    media()
    .then(res => console.log(res))
    .catch(error => console.log(error));
   }
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
        <Button outline gradientDuoTone="purpleToBlue">
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
