import React, { useEffect } from "react";
import { IPost, IRecepies } from "../types";
import { urlFor } from "../sanity";
import Link from "next/link";

interface Props {
  type: string;
  post?: IPost;
  recepies?: IRecepies;
}

export const Card = ({ post, type, recepies }: Props) => {

  return (
    <>
      {/* //Render Card for article components */}
      {type === "article" && (
        <Link href={`/articles/${post?.slug.current}`}>
          <div className="hover:cursor-pointer group rounded-2xl overflow-hidden shadow-black/20 shadow-2xl h-80">
            <img
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={urlFor(post?.mainImage).url()}
              alt={`photo-post-${post?.slug}`}
            />
            <div className="bg-white p-3">
              <h2 className="text-primary-color font-bold text-2xl pb-2">
                {post?.title}
              </h2>
              <p>{post?.description}</p>
            </div>
          </div>
        </Link>
      )}
      {/* //Render Card for recipies components */}
      {type === "recipies" && (
        <Link href={`/recette/${recepies?.slug.current}`}>
          <div className="hover:cursor-pointer group rounded-2xl overflow-hidden mb-10 shadow-black/20 shadow-2xl h-80">
            <img
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={urlFor(recepies?.mainImage).url()}
              alt={`photo-post-${recepies?.slug}`}
            />
            <div className="bg-white p-3">
              <h2 className="text-primary-color font-bold text-2xl pb-2">
                {recepies?.title}
              </h2>
              {recepies?.type}
              <div>
                {recepies?.duration.totalTime} minutes
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
