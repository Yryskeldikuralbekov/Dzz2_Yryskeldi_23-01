import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const loc = useLocation();
  console.log(loc);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
