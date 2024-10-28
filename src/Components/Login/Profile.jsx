import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState(null);
  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/Login");
      }
      /* providing accessToken in bearer */
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token, // Pass JWT via Authorization header
        },
      })
        .then((res) => res.json())
        .then((user) => {
          setuser(user);
        });
    };
    getAuthUser();

    // (()=>{

    // })() efie
  }, []);

  console.log(user);
  if (!user) {
    return <div>Loading user...</div>;
  }
  return (
    <div>
      <img src={user?.image} alt="user profile" />
      <h2>
        Name : {user?.firstName} {user?.lastName}
      </h2>
      <h3>Age : </h3>
      <h3>Gender : </h3>
      <p>Address : </p>
      <Link to={"/Login"}>Login again</Link>
    </div>
  );
};

export default Profile;
