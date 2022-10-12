import Link from "next/link";
import React from "react";
import { Body } from "../../types/types.articles";

interface Props {
  item: Body;
}
const Typography = ({ item }: Props) => {
  return (
    <>
      {item.style === "h2" && (
        <h2 className="text-primary-color font-bold text-2xl py-2">
          {item.children?.map((child, index) => (
            <>{child.text}</>
          ))}
        </h2>
      )}
      {item.style === "h3" && (
        <h2 className="text-primary-color font-semibold text-xl pl-2">
          {item.children?.map((child, index) => (
            <>{child.text}</>
          ))}
        </h2>
      )}
      {item.style === "normal" && !item.listItem && (
        <p className="text-justify my-3 indent-6 text-text-color">
          {item.children?.map((child, index) => (
            <>
              {child.marks?.includes("em") && child.marks?.includes("strong") && (
                <strong>
                  <em>{child.text}</em>
                </strong>
              )}
              {child.marks?.length === 1 && child.marks?.[0] === "em" && (
                <em>{child.text}</em>
              )}
              {child.marks?.length === 1 && child.marks?.[0] === "strong" && (
                <strong>{child.text}</strong>
              )}
              {child.marks?.length === 0 && <> {child.text}</>}
              {item.markDefs?.map((markDef, index) => (
                <>
                  {child.marks?.[0] === markDef._key && (
                    <Link href={markDef.href}>
                      <a
                        className="text-primary-color underline"
                        target="_blank"
                      >
                        {child.text}
                      </a>
                    </Link>
                  )}
                </>
              ))}
            </>
          ))}
        </p>
      )}
      {item.style === "blockquote" && (
        <q className="block text-justify my-3 indent-6 italic text-gray-600">
          {item.children?.map((child, index) => (
            <>{child.text}</>
          ))}
        </q>
      )}
      {item.listItem === "bullet" && (
        <li
          className={`ml-${item.level && item.level * 5} ${
            item.level && item.level > 1 && "list-[circle]"
          }`}
        >
          {item.children?.map((child, index) => (
            <>{child.text}</>
          ))}
        </li>
      )}

      {/* {style === "normal" && !listItem && (
        <p className={`text-justify my-3 indent-6 text-text-color`}>
          {children.map((child, index) => {

          })}
        </p>
      )}
      {style === "blockquote" && (
        <q className="block text-justify my-3 indent-6 italic text-secondary-color bg-purple ">
          {content}
        </q>
      )}
      {style === "h1" && (
        <h1 className="text-3xl font-bold text-center py-7 text-text-color">
          {content}
        </h1>
      )}
      {style === "h2" && (
        <h2 className="text-primary-color font-bold text-2xl py-2">
          {content}
        </h2>
      )}
      {style === "h3" && (
        <h3 className="text-primary-color font-semibold text-xl pl-2">
          {content}
        </h3>
      )}
      {listItem && (
        <li
          className={`ml-${level && level * 5} ${
            level && level > 1 && "list-[circle]"
          }`}
        >
          {content}
        </li>
      )} */}
    </>
  );
};

export default Typography;
