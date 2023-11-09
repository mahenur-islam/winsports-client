
import { Banner, Button, Label, TextInput } from 'flowbite-react';
import { HiX } from 'react-icons/hi';

function Newsletter() {
  return (
    <Banner className='bg-[#053B50] p-10 rounded-sm'>
        <h1 className='text-3xl text-white text-center my-10'>Newsletter</h1>
      <div className="flex w-1/2 mx-auto items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
          <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
            <Label
              htmlFor="email"
              className="mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
            >
              Newsletter
            </Label>
            <TextInput id="email" placeholder="Enter your email" required type="email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </Banner>
  );
}
export default Newsletter;