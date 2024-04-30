import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_welcome">
        <h2 className="footer_intro">WELCOME HOM!</h2>
        <button className="visitBt">Visit Us</button>
      </div>
      <hr className="footer_division1" />
      <div className="follow_socials">
        <h5 className="follow_intro">Follow Our Socials</h5>
        <p className="follow_text">
          Follow our social media pages to stay updated on our latest posts
        </p>
        <ul className="socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i>
        </ul>
      </div>
      <hr className="footer_division1" />
      <div className="footer_mail">
        <h5 className="mail_intro">Send us a mail?</h5>
        <a href="mailto:homchapel@gmail.com">click here</a>
      </div>
    </footer>
  );
};

export default Footer;
