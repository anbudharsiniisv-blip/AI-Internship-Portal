import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Hero() {
  const [stats, setStats] = useState({
    students: 0,
    internships: 0,
    applications: 0,
  });

  useEffect(() => {
    axios
      .get("https://ai-internship-portal-1.onrender.com/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container py-5">

      <div className="row justify-content-center text-center">

        <div className="col-lg-8">

          <h1 className="display-4 fw-bold">
            🚀 Discover Your Dream Internship
          </h1>

          <h2 className="text-info fw-bold mb-4">
            Powered by Artificial Intelligence
          </h2>

          <p className="lead text-light">
            Connect with top companies, receive AI-powered internship
            recommendations, and kickstart your career with opportunities
            tailored to your skills and interests.
          </p>

          <div className="mt-4">
            <Link to="/register">
              <button className="btn btn-primary btn-lg me-3">
                Get Started
              </button>
            </Link>

            <Link to="/internships">
              <button className="btn btn-outline-info btn-lg">
                Explore Internships
              </button>
            </Link>
          </div>

          <div className="row mt-5 g-4">

            <div className="col-md-4">
              <div className="card bg-dark text-white border-info shadow">
                <div className="card-body">
                  <h2 className="text-info">{stats.internships}+</h2>
                  <p className="mb-0">Internships</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-dark text-white border-info shadow">
                <div className="card-body">
                  <h2 className="text-info">{stats.students}+</h2>
                  <p className="mb-0">Students</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-dark text-white border-info shadow">
                <div className="card-body">
                  <h2 className="text-info">{stats.applications}+</h2>
                  <p className="mb-0">Applications</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;