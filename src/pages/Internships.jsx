import { useEffect, useState } from "react";
import axios from "axios";

function Internships() {
  const [internships, setInternships] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://ai-internship-portal-1.onrender.com/internships")
      .then((res) => {
        setInternships(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applyInternship = async (internship) => {
    // Get student details from localStorage
    const student = JSON.parse(localStorage.getItem("student"));

    if (!student) {
      alert("Please register first.");
      return;
    }

    const application = {
      studentName: student.name,
      studentEmail: student.email,
      studentMobile: student.mobile,

      title: internship.title,
      company: internship.company,
      location: internship.location,
      skills: internship.skills,
      stipend: internship.stipend,

      status: "Applied",
    };

    try {
      const response = await axios.post(
        "https://ai-internship-portal-1.onrender.com/apply",
        application
      );

      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Application Failed!");
      }
    }
  };

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(search.toLowerCase()) ||
      internship.company.toLowerCase().includes(search.toLowerCase()) ||
      internship.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="internships">
      <h1>Recommended Internships</h1>

      <input
        type="text"
        className="search-box"
        placeholder="Search by title, company or skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="internship-container">
        {filteredInternships.map((internship) => (
          <div className="card" key={internship._id}>
            <h2>{internship.title}</h2>

            <p><strong>Company:</strong> {internship.company}</p>

            <p><strong>Skills:</strong> {internship.skills}</p>

            <p><strong>Location:</strong> {internship.location}</p>

            <p><strong>Stipend:</strong> {internship.stipend}</p>

            <button onClick={() => applyInternship(internship)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;