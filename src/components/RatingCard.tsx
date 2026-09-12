import { useState } from "react";
import { IconStar } from "../assets";
import { ThankYouCard } from "./ThankYouCard";

export const RatingCard = () => {
  const [ratingNumber, setRatingNumber] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ratings = [1, 2, 3, 4, 5];
  return (
    <article className="max-w-100 rounded-2xl bg-gray-900 p-6">
      {!isSubmitted && (
        <div className="*:py-4">
          <div className="flex h-10 w-10 items-center justify-around rounded-full bg-gray-500/40">
            <img src={IconStar} alt="" className="w-5" />
          </div>
          <fieldset className="mt-5 space-y-4">
            <legend className="text-3xl text-white">How did we do?</legend>
            <p className="text-gray-500">
              {" "}
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            <div className="flex justify-around">
              {ratings.map((rating) => (
                <button
                  key={rating}
                  type="button"
                  aria-pressed={rating === ratingNumber}
                  aria-label={`Choose ${rating} star rating.`}
                  onClick={() => setRatingNumber(rating)}
                  className={`${ratingNumber === rating ? "bg-white" : "text-grey-500 hover:text-grey-950 bg-gray-500/40 hover:bg-orange-500"} h-10 w-10 rounded-full`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(true);
              }}
              disabled={ratingNumber === null}
              className="w-[90%] rounded-full bg-orange-500 py-2 font-medium text-gray-950 hover:bg-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      )}

      {isSubmitted && <ThankYouCard ratingNumber={ratingNumber} />}
    </article>
  );
};
