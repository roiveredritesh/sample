import React from "react";

function Cards(props) {
  const showalert = () => {
    alert("Welcome to " + props.uName);
  };

  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-2">
      <img
        src={props.uImage}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.uName}</h1>
        <p className="mt-2 text-sm text-gray-300">{props.uDetails}</p>
        <button
          onClick={showalert}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold p-2 rounded-md border-current text-black bg-white hover:bg-black hover:border-white hover:text-white"
        >
          {props.bText}
        </button>
      </div>
    </div>
  );
}

Cards.defaultProps = {
  uName: "NA",
  uDetails: "Not available",
  uImage:
    "https://images.pexels.com/photos/1446948/pexels-photo-1446948.jpeg?auto=compress&cs=tinysrgb&w=600",
  bText: "NA",
};

export default Cards;
