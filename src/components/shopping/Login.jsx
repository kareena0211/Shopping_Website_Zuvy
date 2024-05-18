import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = async () => {
    const response = await fetch(
      "https://fullstack-ecom-render.onrender.com/account/login/",
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    const data = await response.json();
    console.log(response);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-yellow-100">
      <div className="bg-[#ccc7d5] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-3xl font-bold mb-4 text-[#2e1065] ">Login</h1>
        <input
          className="mb-4 px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="mb-4 px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handelLogin}
          className="bg-[#2e1065] text-[#fef3c7] p-2 pr-4 pl-4 rounded-lg"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default Login;
