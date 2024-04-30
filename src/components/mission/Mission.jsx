import "./Mission.css";
import Vision from "./Vision";

const Mission = () => {
  return (
    <section className="mission">
      <h2 className="mission_heading">OUR MISSION</h2>
      <div className="mission_vision">
        <div className="mission_text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            vitae laborum, voluptatem doloribus tenetur quaerat quidem ad
            nesciunt assumenda ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            vitae laborum, voluptatem doloribus tenetur quaerat quidem ad
            nesciunt assumenda ipsa.
          </p>
        </div>
        <Vision />
      </div>
    </section>
  );
};

export default Mission;
