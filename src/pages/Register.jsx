import { useState } from "react";
import axios from "axios";

function Register() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
    skills: "",
    domain: "",
    location: "",
    graduation: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  const response = await axios.post(
    "http://127.0.0.1:5000/register",
    student
  );

  localStorage.setItem("student", JSON.stringify(student));

  alert(response.data.message);

} catch (error) {
  console.log(error);
  alert("Registration Failed");
}
  };

  return (
    <div className="register">
      <h1>Student Registration</h1>

      <form className="register-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={student.mobile}
          onChange={handleChange}
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={student.college}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (HTML, CSS, React)"
          value={student.skills}
          onChange={handleChange}
        />

        <input
          type="text"
          name="domain"
          placeholder="Interested Domain"
          value={student.domain}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={student.location}
          onChange={handleChange}
        />

        <input
          type="number"
          name="graduation"
          placeholder="Graduation Year"
          value={student.graduation}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;