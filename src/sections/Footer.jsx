import { socialImgs } from "../constants";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          
          <p>
            <i className="fa-solid fa-location-dot text-red-400">  </i> 
          Rawalpindi, Pakistan</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index,) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon"  onClick={() => window.open(socialImg.link)}/>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} nuhk . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
