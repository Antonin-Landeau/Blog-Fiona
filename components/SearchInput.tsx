import Image from "next/image";
import { ChangeEventHandler, InputHTMLAttributes } from "react";
import searchIcon from "../public/search-icon.svg";

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value?: string;
}

const SearchInput = ({onChange, placeholder, value}:IProps) => {
  return (
    <div className="relative mb-3 ml-auto">
      <input placeholder={placeholder} value={value} onChange={onChange} type="text" className="bg-gray-200 h-10 pr-10 px-5 focus:outline-none w-full rounded-xl" />
      <div className="absolute right-3 w-fit h-fit flex items-center justify-center top-1/2 -translate-y-1/2">
        <Image src={searchIcon} alt="sha"/>
      </div>
    </div>
  );
};

export default SearchInput;
