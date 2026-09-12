import { Illustration } from "../assets";
type RatingProp = {
  ratingNumber: number | null;
};
export const ThankYouCard = ({ ratingNumber }: RatingProp) => {
  return (
    <div className="text-center *:py-4">
      <div className="flex justify-center">
        <img src={Illustration} alt="" />
      </div>
      <p className="mx-12 rounded-full bg-gray-800 text-orange-500">
        You selected {ratingNumber} out of 5
      </p>
      <h1 className="text-3xl text-white">Thank you!</h1>
      <p className="text-gray-500">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
