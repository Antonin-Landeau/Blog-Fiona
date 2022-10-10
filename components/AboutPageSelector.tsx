import React, { Dispatch } from "react";

interface Props {
  currentPage: string;
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
}

const AboutPageSelector = ({ currentPage, setCurrentPage }: Props) => {
  return (
    <div className="flex max-w-xs">
      <div
        onClick={() => {
          console.log("click")
          setCurrentPage("me");
        }}
        className={`py-3 flex-1 text-center ${currentPage === "me" && 'bg-secondary-color'}`}
      >
        Moi
      </div>
      <div
        onClick={() => {
          console.log("click")
          setCurrentPage("sophro");
        }}
        className={`py-3 flex-1 text-center ${currentPage === "sophro" && 'bg-secondary-color'}`}
      >
        Sophrologie
      </div>
      <div
        onClick={() => {
          console.log("click")
          setCurrentPage("diet");
        }}
        className={`py-3 flex-1 text-center ${currentPage === "diet" && 'bg-secondary-color'}`}
      >
        Diététique
      </div>
    </div>
  );
};

export default AboutPageSelector;
