import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="rounded-lg shadow-2xl w-4/5 h-full object-cover"
            alt=""
          />
          <img
            src={parts}
            className="max-w-xs w-3/5 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-orange-500 text-lg font-bold">About Us</h1>
          <h2 className="text-4xl font-semibold my-5">
            We are qualified <br />
            & of experience <br />
            in this field
          </h2>
          <p className="mb-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange-500 hover:bg-orange-600 border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
