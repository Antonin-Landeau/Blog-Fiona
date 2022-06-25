import { NextComponentType } from "next";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

interface Props {
  image: string | StaticImageData;
  title: string;
  content: string;
  reverse?: boolean;
}

const PourQuiCard: FunctionComponent<Props> = ({
  content,
  image,
  title,
  reverse,
}) => {
  return (
    <div className="flex justify-around my-8">
      {reverse && (
        <>
          <div className="self-center">
            <Image src={image} width={70} height={70} />
          </div>
          <div className="ml-5 w-9/12">
            <h3 className="text-primary-color font-bold text-xl text-end">
              {title}
            </h3>
            <p className="text-end">{content}</p>
          </div>
        </>
      )}
      {!reverse && (
        <>
          <div className="mr-5 w-9/12">
            <h3 className="text-primary-color font-bold text-xl">{title}</h3>
            <p className="text-justify ">{content}</p>
          </div>
          <div className="self-center">
            <Image src={image} width={70} height={70} />
          </div>
        </>
      )}
    </div>
  );
};

export default PourQuiCard;
