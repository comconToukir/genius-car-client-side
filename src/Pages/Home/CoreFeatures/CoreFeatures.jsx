import team from "../../../assets/icons/group.svg";
import clock from "../../../assets/icons/Group 38729.svg";
import support from "../../../assets/icons/person.svg";
import equipment from "../../../assets/icons/Wrench.svg";
import guarantee from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";

const CoreFeatures = () => {
  return (
    <div className="text-center mt-32">
      <h1 className="font-bold text-lg text-orange-500">Core Features</h1>
      <h2 className="text-4xl font-semibold my-5">Why Choose Us</h2>
      <p className="w-3/5 mx-auto mb-7">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="flex flex-wrap gap-6 justify-center mx-auto mt-12">
        <div className="flex flex-col items-center p-7 border rounded-lg  flex-shrink-0 w-44">
          <img src={team} alt="" />
          <span className="mt-3 font-semibold">Expert Team</span>
        </div>
        <div className="bg-orange-600 flex flex-col items-center p-7 border rounded-lg  flex-shrink-0 w-44">
          <img src={clock} alt="" />
          <span className="mt-3 font-semibold text-white">Timely Delivery</span>
        </div>
        <div className="flex flex-col items-center p-7 border rounded-lg  flex-shrink-0 w-44">
          <img src={support} alt="" />
          <span className="mt-3 font-semibold">24/7 Support</span>
        </div>
        <div className="flex flex-col items-center p-7 border rounded-lg  flex-shrink-0 w-44">
          <img src={equipment} alt="" />
          <span className="mt-3 font-semibold">Best Equipment</span>
        </div>
        <div className="flex flex-col items-center p-7 border rounded-lg  flex-shrink-0 w-44">
          <img src={guarantee} alt="" />
          <span className="mt-3 font-semibold">100% Guarantee</span>
        </div>
        <div className="flex flex-col items-center p-7 border rounded-lg  flex-shrink-0 w-44">
          <img src={delivery} alt="" />
          <span className="mt-3 font-semibold">Timely Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
