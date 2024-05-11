import { useState } from "react";

export default function DisplayName() {
  const [submit, setSubmit] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname(`${firstname} ${lastname}`);
    setSubmit(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={handleFirstname}
            required
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={handleLastname}
            required
          />
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      {submit && <div>Full Name: {fullname}</div>}
    </>
  );
}