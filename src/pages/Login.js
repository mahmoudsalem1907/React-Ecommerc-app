import { useRef, useState } from "react";

const Login = () => {
  //   const emailref = useRef();
  const [email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [errors, setErrors] = useState(null);

  // handler
  const handlerSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (!errors) {
      console.log(email);
      console.log(Pass);
    } else {
      // not valid
      setErrors(errors);
      console.log("not valid");
    }
    // const email = document.querySelector("#exampleInputEmail1").value;
    // console.log("done");
    // console.log(email);
    // console.log(Pass);
    // console.log(emailref.current.value);
  };
  const handlerChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlerChangePass = (e) => {
    console.log(e.target.value);
    setPass(e.target.value);
  };
  const validate = () => {
    const errors = {};

    if (email.trim() === "") {
      errors.email = "Email is required";
    }

    if (Pass.trim() === "") {
      errors.pass = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  // render
  return (
    <form className="py-2" onSubmit={handlerSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          //   ref={emailref}
          onChange={handlerChangeEmail}
          autoFocus
          type="email"
          className={
            errors?.email ? "form-control border-danger" : "form-control"
          }
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="text-danger">{errors?.email}</div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={handlerChangePass}
          type="password"
          className={
            errors?.pass ? "form-control border-danger" : "form-control"
          }
          id="exampleInputPassword1"
        />
      </div>
      <div className="text-danger mb-2">{errors?.pass}</div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
