import React, { useState } from "react";
import { Card, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  UserAddOutlined,
  PhoneOutlined,
  SecurityScanOutlined,
  EyeInvisibleFilled,
  EyeFilled,
} from "@ant-design/icons";
import "../Entry/Entry.css";
import validate from "../common/validation";
import { toast } from "react-toastify";
import backendURL from "../common/backendUrl";
import axios from "axios";

const Entry = ({ login }) => {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const [error, setError] = useState({
    email: false,
    emailError: false,
    fullname: false,
    fullnameError: false,
    password: false,
    passwordError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let message = validate[name](value);
    setForm((prev) => {
      return { ...prev, [name]: value };
    });

    setError((prev) => {
      return { ...prev, ...message };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let submitable = true;
    let api = login ? "/api/login" : "/api/signup";

    if (login) {
      delete error.fullname;
      delete error.fullnameError;
      delete form.fullname;
    }

    Object.values(error).forEach((val) => {
      if (val) {
        submitable = false;
        return;
      }
    });

    if (submitable) {
      axios
        .post(`${backendURL}${api}`, form)
        .then((res) => {
          if (res.data.success) {
            toast.info(res.data.message);
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigator("/notes", { state: { user: res.data.user } });
          }else{

          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err);
        });
    } else {
      toast.error("Please fill all fields with valid value");
    }
  };

  return (
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
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
              />
              {error.fullname && <p className="error">{error.fullnameError}</p>}
            </>
          ) : null}
          <Input
            placeholder="Email"
            size="large"
            prefix={<PhoneOutlined />}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.emailError}</p>}
          <Input
            placeholder="Password"
            size="large"
            prefix={<SecurityScanOutlined />}
            suffix={
              show ? (
                <EyeFilled onClick={() => setShow(!show)} />
              ) : (
                <EyeInvisibleFilled onClick={() => setShow(!show)} />
              )
            }
            type={show ? "text" : "password"}
            value={form.password}
            name="password"
            onChange={handleChange}
          />
          {error.password && <p className="error">{error.passwordError}</p>}

          <button type="button" className="buttonBig" onClick={handleSubmit}>
            {login ? "Login" : "Sign Up"}
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
};

export default Entry;
