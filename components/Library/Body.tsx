import React from "react";
import { urlFor } from "../../sanity";
import { Body } from "../../types/types.articles";
import Typography from "./Typography";

interface Props {
  body: Body[] | undefined;
}

const Body = ({ body }: Props) => {
  console.log(body);
  return (
    <section>
      {body &&
        body.map((item) => (
          <>
            {item._type === "block" && <Typography item={item} />}

            {item._type === "image" && <img src={urlFor(item.asset).url()} />}
          </>
        ))}
    </section>
  );
};

export default Body;
