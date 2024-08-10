import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  TextInput,
  Table,
  Container,
  Paper,
  Title,
} from "@mantine/core";
import { Header } from "./header.jsx";
import "../mantine_styel.css";

/**
 * the form
 * @returns {JSX.Element} - the form
 */

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ ErrorName: "", ErrorEmail: "" });
  const [success, setSuccess] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({ ErrorName: "", ErrorEmail: "" });

    if (formData.name === "") {
      setError((prevError) => ({
        ...prevError,
        ErrorName: "Please enter your name",
      }));
      return;
    }
    if (formData.email === "") {
      setError((prevError) => ({
        ...prevError,
        ErrorEmail: "Please enter your email",
      }));
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError((prevError) => ({
        ...prevError,
        ErrorEmail: "Please enter a valid email",
      }));
      return;
    }

    handleSaveData();
    setSuccess((prevSuccess) => [...prevSuccess, formData]);
    setFormData({ name: "", email: "" });
  };

  const TableMantine = (success) => {
    return success.map((item, index) => (
      <Table.Tr
        key={index}
        className="transition-all duration-300 ease-in-out hover:bg-zinc-300 hover:scale-105 dark:hover:bg-zinc-700"
      >
        <Table.Td>{item.name}</Table.Td>
        <Table.Td>{item.email}</Table.Td>
      </Table.Tr>
    ));
  };
  // Function to handle data storage
  const handleSaveData = () => {
    const jsonData = JSON.stringify(formData );
    console.log("JSON Data:", jsonData);

    fetch("/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorResponse = await response.text();
          throw new Error(errorResponse || "Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container className="mt-5 mx-auto p-4 ">
      <Paper className="p-6 shadow-sm rounded-lg dark:bg-gray-800">
        <Title order={2} align="center" className="text-2xl mb-4">
          Submit Your Details
        </Title>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <TextInput
              label="Type your name"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              classNames={{
                label: "dark:text-white",
                input: "dark:text-white",
              }}
              className="mb-2 "
            />
            {error.ErrorName && (
              <p className="text-red-500">{error.ErrorName}</p>
            )}
          </div>

          <div className="mb-4">
            <TextInput
              label="Type your email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              classNames={{
                label: "dark:text-white",
                input: "dark:text-white",
              }}
              className="mb-2"
            />
            {error.ErrorEmail && (
              <p className="text-red-500">{error.ErrorEmail}</p>
            )}
          </div>

          <Button
            variant="filled"
            color="blue"
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </Button>
        </form>
        <Table className="mt-6 w-full border-collapse">
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="dark:text-white">Name</Table.Th>
              <Table.Th className="dark:text-white">Email</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{TableMantine(success)}</Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Header>
      <Form />
    </Header>
  </React.StrictMode>
);
