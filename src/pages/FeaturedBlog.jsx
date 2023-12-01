import React, { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { Table } from "flowbite-react";
import useAuth from "../hooks/useAuth";

const FeaturedBlog = () => {
  const blogs = useLoaderData();
  const user = useAuth();
  console.log(user.user);
  // Calculate the word count and sort the blogs
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => {
      const wordCountA = a.details.split(/\s+/).length;
      console.log(wordCountA);
      const wordCountB = b.details.split(/\s+/).length;
      console.log(wordCountB);
      return wordCountB - wordCountA;
    });
  }, [blogs]);

  console.log(sortedBlogs);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Featured Blogs</h2>
      <div className="max-w-7xl mx-auto">
        <Table hoverable >
          <Table.Head  >
            <Table.HeadCell>Serial No.</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Owner</Table.HeadCell>
            <Table.HeadCell>Profile</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {sortedBlogs.map((blog, index) => (
              <Table.Row
                key={blog._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{blog.title}</Table.Cell>
                <Table.Cell>{blog.owner}</Table.Cell>
                <Table.Cell>
                  <img
                    src={blog.ownerProfilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default FeaturedBlog;
