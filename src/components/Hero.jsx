import { Link } from "react-router-dom";

function Hero(){

return(

<section className="hero">

<div className="hero-content">

<h1>
🚀 Discover Your Dream Internship
</h1>

<h2>
Powered by Artificial Intelligence
</h2>

<p>
Connect with top companies, receive AI-powered internship recommendations and launch your career with opportunities tailored to your skills and interests.
</p>

<div className="hero-buttons">

<Link to="/register">
<button className="primary-btn">
Get Started
</button>
</Link>

<Link to="/internships">
<button className="secondary-btn">
Explore Internships
</button>
</Link>

</div>

<div className="stats">

<div className="card">
<h2>120+</h2>
<p>Internships</p>
</div>

<div className="card">
<h2>350+</h2>
<p>Students</p>
</div>

<div className="card">
<h2>780+</h2>
<p>Applications</p>
</div>

</div>

</div>

</section>

)

}

export default Hero;