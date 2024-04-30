import "./Overseer.css";
import NamePic from "./NamePic";

const Overseer = () => {
  return (
    <section className="overseer">
      <h2 className="overseer_heading">GENERAL OVERSEER</h2>
      <div className="overseer_content">
        <NamePic />
        <div className="welcome_text">
          <h3 className="welcome_heading">
            MAZAL TOV! <br />
            WELCOME TO HOM CHAPEL
          </h3>
          <p className="welcome_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            non. Veritatis explicabo ea accusantium placeat, error molestiae
            enim cupiditate exercitationem tenetur optio esse mollitia facere ab
            quas a pariatur, inventore aut. Harum animi quos cum voluptate nulla
            adipisci odio dolore veniam dignissimos architecto aperiam, incidunt
            totam officia debitis praesentium autem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overseer;
