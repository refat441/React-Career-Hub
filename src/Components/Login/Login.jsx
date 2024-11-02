import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      setError("All fields are required!");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password is too short");
      return;
    } else {
      setError("");
    }
    console.log("username:", formData.userName, "password:", formData.password);
    fetch("'https://dummyjson.com/auth/login'", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.userName,
        password: formData.password,
        expiresInMins: 30, // optional, defaults to 60
      }),
      //   credentials: "include",  Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        if (user.message) {
          //for coustom mage by font end
          // if (user.message === "Invalid credentials") {
          //   setError("mara khao");
          // } else {
          //   setError(user.message);
          // }
          setError(user.message);
        } else {
          localStorage.setItem("token", user.accessToken);
          alert(`Login Success!`);
          navigate("/profile");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6  rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-200 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="userName"
          >
            Username
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="userName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
        >
          Submit
        </button>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
