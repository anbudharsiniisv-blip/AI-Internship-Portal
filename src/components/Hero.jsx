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
    <section className="hero">

      <div className="hero-content">

        <h1>
          🚀 Discover Your Dream Internship <br />
          <span>Powered by Artificial Intelligence</span>
        </h1>

        <p>
          Connect with top companies, receive AI-powered internship
          recommendations, and kickstart your career with opportunities
          tailored to your skills and interests.
        </p>

        <div className="hero-buttons">
          <Link to="/register">
            <button className="btn-primary">
              Get Started
            </button>
          </Link>

          <Link to="/internships">
            <button className="btn-secondary">
              Explore Internships
            </button>
          </Link>
        </div>

        {/* 🔥 LIVE STATS FROM MONGODB */}
        <div className="hero-stats">

          <div className="stat-box">
            <h2>{stats.internships}+</h2>
            <p>Internships</p>
          </div>

          <div className="stat-box">
            <h2>{stats.students}+</h2>
            <p>Students</p>
          </div>

          <div className="stat-box">
            <h2>{stats.applications}+</h2>
            <p>Applications</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;