import { useEffect, useState } from "react";
import axios from "axios";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/applications")
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="internships">
      <h1>My Applications</h1>

      <div className="internship-container">
        {applications.map((application) => (
          <div className="card" key={application._id}>
            <h2>{application.title}</h2>

            <p>
              <strong>Company:</strong> {application.company}
            </p>

            <p>
              <strong>Location:</strong> {application.location}
            </p>

            <p>
              <strong>Student:</strong> {application.studentName}
            </p>

            <p>
              <strong>Email:</strong> {application.studentEmail}
            </p>

            <p>
              <strong>Status:</strong> ✅ {application.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;