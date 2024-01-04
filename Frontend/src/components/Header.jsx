import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import { PoweroffOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigator = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigator("/");
  };

  return (
    <header>
      <h1>
        <HighlightIcon /> Clarify
      </h1>
      <div>
        <span id="name">{user.fullname}</span>
        <span id="logout" title="logout" onClick={logout}>
          <PoweroffOutlined color="black" />
        </span>
      </div>
    </header>
  );
}

export default Header;
