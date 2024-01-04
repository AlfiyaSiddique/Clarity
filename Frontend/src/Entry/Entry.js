import React from "react";
import { Card, Input } from "antd";
import { Link } from "react-router-dom";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import "../Entry/Entry.css";

const Entry = ({ login }) => (
  <section id="signup-signin">
    <div>
      <Card
        title="Think, Note, Implement"
        extra={<h2>{login ? "Login" : "Sign Up"}</h2>}
        className="entryCard"
      >
        {!login ? (
          <>
            {" "}
            <Input
              placeholder="Full Name"
              size="large"
              prefix={<UserAddOutlined />}
            />
          </>
        ) : null}
        <Input
              placeholder="Email"
              size="large"
              prefix={<PhoneOutlined />}
            />
        <Input
          placeholder="Password"
          size="large"
          prefix={<SecurityScanOutlined />}
        />
        <button type="button" className="buttonBig">
          {login? "Login" :"Sign Up"}
        </button>
        <div className="switch">
          {!login ? (
            <div>
              Already have an account?
              <Link to="/">Log In</Link>
            </div>
          ) : (
            <div>
              Don't have an account?
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </Card>
    </div>
  </section>
);

export default Entry;
