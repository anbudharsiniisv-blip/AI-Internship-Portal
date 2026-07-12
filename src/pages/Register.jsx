import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

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
        "https://ai-internship-portal-1.onrender.com/register",
        student
      );

      // Save student details
      localStorage.setItem("student", JSON.stringify(student));

      // Success message
      alert("🎉 Registration Successful!");

      // Redirect to internships page
      navigate("/internships");

    } catch (error) {
      console.log(error);
      alert("❌ Registration Failed!");
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
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={student.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={student.college}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (HTML, CSS, React)"
          value={student.skills}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="domain"
          placeholder="Interested Domain"
          value={student.domain}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={student.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="graduation"
          placeholder="Graduation Year"
          value={student.graduation}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;