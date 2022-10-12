import { NextComponentType } from "next";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex justify-around md:p-5 md:rounded-xl md:shadow-gray-700/20 md:shadow-md"
    >
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
    </motion.div>
  );
};

export default PourQuiCard;
