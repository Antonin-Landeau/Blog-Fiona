import React from "react";

interface Props {
  style?: string;
  content?: string;
  listItem?: string;
  level?: number;
}
const Typography = ({ style, content, listItem, level }: Props) => {
  return (
    <>
      {style === "normal" && !listItem && (
        <p className={`text-justify my-3 indent-6 text-paragraph-color`}>
          {content}
        </p>
      )}
      {style === "blockquote" && (
        <q className="block text-justify my-3 indent-6 italic text-gray-500">
          {content}
        </q>
      )}
      {style === "h1" && <h1 className="text-3xl font-bold text-center py-7">{content}</h1>}
      {style === "h2" && <h2 className="text-primary-color font-bold text-2xl pb-2 ml-5">{content}</h2>}
      {style === "h3" && <h3 className="text-purple ml-10">{content}</h3>}
      {listItem && <li className={`ml-${level && level * 5} ${level && level > 1 && 'list-[circle]'}`}>{content}</li>}
    </>
  );
};

export default Typography;
