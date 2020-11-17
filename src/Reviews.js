import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    let randomNubmer = Math.floor(Math.random() * people.length);
    if (randomNubmer === index) {
      randomPerson();
    }
    setIndex(randomNubmer);
  };

  return (
    <div className="w-1/2 mx-auto bg-gray-100 relative shadow-lg rounded mt-12 h-auto p-6">
      <div
        className="  mx-auto relative"
        style={{ width: "100px", height: "100px" }}
      >
        <img
          src={image}
          alt="imagea"
          className=" rounded-full object-cover object-center  shadow-lg"
          style={{ width: "100px", height: "100px" }}
        />
        <span className="absolute top-0 rounded-full bg-blue-500 p-1 transform translate-y-2">
          <FaQuoteRight className="text-white  text-xs" />
        </span>
      </div>
      <div className="mt-8  flex justify-center items-center flex-col">
        <h4 className="text-s text-gray-900 font-bold tracking-widest capitalize">
          {name}
        </h4>
        <p className="uppercase tracking-wide text-xs text-blue-500">{job}</p>
        <p className="pt-3 text-gray-600 text-sm text-center">{text}</p>
        <div className=" mt-5 flex justify-center items-center">
          <button>
            <FaChevronLeft
              className="text-blue-500 px-1 mr-1 "
              onClick={prevPerson}
            />
          </button>
          <button
            className=" text-blue-700 bg-blue-200 text-sm rounded px-2 hover:bg-blue-300 transition ease-in-out duration-500"
            onClick={randomPerson}
          >
            surprise me
          </button>
          <button>
            <FaChevronRight
              className="text-blue-500 px-1 ml-1 "
              onClick={nextPerson}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
