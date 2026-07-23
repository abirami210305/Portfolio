import novitech from "../assets/novitech.jpg";
import scode from "../assets/scode.jpg";
import nptel from "../assets/nptel.jpg";
function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <h2>Certifications</h2>

      <div className="cert-container">

        <div className="cert-card">
          <img src={novitech} alt="NoviTech" className="cert-image" />
          <h3>🏆 Full Stack Development MasterClass</h3>

          <h4>NoviTech R&D Private Limited</h4>

          <p>July 2025 – August 2025</p>

          <p>
            Successfully completed a 30-day Full Stack Development
            MasterClass covering HTML, CSS, JavaScript, React,
            Java, Spring Boot and MySQL.
          </p>
        </div>

        <div className="cert-card">
          <img src={scode} alt="Scode" className="cert-image" />
          <h3>📱 Mobile App Development Internship</h3>

          <h4>Scode Software Solutions</h4>

          <p>February 2025</p>

          <p>
            Successfully completed a Mobile App Development Internship
            and received a Certificate of Appreciation for
            excellent performance.
          </p>
        </div>

        <div className="cert-card">
          <img src={nptel} alt="NPTEL" className="cert-image" />
          <h3>🎓 Python for Data Science</h3>

          <h4>NPTEL - IIT Madras</h4>

          <p>Jan – Feb 2026</p>

          <p>
            Successfully completed the NPTEL Elite course
            "Python for Data Science".
          </p>
        </div>

      </div>

    </section>
  );
}

export default Certifications;