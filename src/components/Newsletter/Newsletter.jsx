import { Banner, Button, Label, TextInput } from 'flowbite-react';
import toast from 'react-hot-toast';
import { useState } from 'react'; // Import useState

function Newsletter() {
  const [email, setEmail] = useState(''); // State for the email input

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(email);
    toast.success('Your Email Received Successfully');
    setEmail('');
    
  };

  return (
    <Banner className='bg-[#053B50] p-10 rounded-sm'>
      <h1 className='text-3xl text-white text-center my-10'>Newsletter</h1>
      <div className="flex w-1/2 mx-auto items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
          <form
            action="#"
            className="flex w-full flex-col items-center md:flex-row md:gap-x-3"
            onSubmit={handleSubscribe}
          >
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              name="email"
              value={email} // Set the value from state
              onChange={(e) => setEmail(e.target.value)} // Update the state on change
             required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Banner>
  );
}

export default Newsletter;
