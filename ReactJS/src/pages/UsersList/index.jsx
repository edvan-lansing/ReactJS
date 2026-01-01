import React from "react";
import { useNavigate } from "react-router-dom";
import { UserList } from "../../components/organisms";

export function UsersList() {
  const navigate = useNavigate();
  return (
    <UserList
      onBack={() => navigate("/")}
      onCreate={() => navigate("/register")}
      onEdit={(id) => navigate(`/users/${id}/edit`)}
    />
  );
};
