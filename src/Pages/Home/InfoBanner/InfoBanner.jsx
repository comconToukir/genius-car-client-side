import calendar from "../../../assets/icons/Group 32.svg";
import telephone from "../../../assets/icons/Group 34.svg";
import gps from "../../../assets/icons/Group 35.svg";

const InfoBanner = () => {
  return (
    <div className="bg-black text-white mt-32 py-24 px-20 grid grid-cols-1 lg:grid-cols-3 gap-y-10 rounded-lg">
      <div className="flex gap-3 mx-auto">
        <img src={calendar} alt="" />
        <div>
          <h6 className="text-sm">We are open monday-friday</h6>
          <p className="text-xl font-semibold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-3 mx-auto">
        <img src={telephone} alt="" />
        <div>
          <h6 className="text-sm">Have a question?</h6>
          <p className="text-xl font-semibold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex gap-3 mx-auto">
        <img src={gps} alt="" />
        <div>
          <h6 className="text-sm">Need a repair? our address</h6>
          <p className="text-xl font-semibold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
