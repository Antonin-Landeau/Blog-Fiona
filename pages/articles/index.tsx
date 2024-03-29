import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "../../components/Card";

import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import { sanityClient, urlFor } from "../../sanity";
import { IPost, IPostFilter } from "../../types";
import Loader from "../../public/loader.svg";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination";

interface Props {
  posts: [IPost];
}

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState<IPostFilter>({
    search: "",
    orderBy: "desc",
  });

  const [page, setPage] = useState(1);
  const [pages, setpages] = useState<number | undefined>();
  const [articlesCount, setArticlesCount] = useState<number | undefined>();
  const [itemPerPage, setItemPerPage] = useState(9);

  const [loading, setLoading] = useState<boolean>(true);

  const getArticles = async ({ search, orderBy }: IPostFilter) => {
    setLoading(true);
    const query = `*[_type == 'post' && title match "${search}*"][${
      page * itemPerPage - itemPerPage
    }...${page * itemPerPage}]{
      _id,
      title,
      description,
      mainImage,
      _createdAt,
      slug,
    }| order(_createdAt ${orderBy})`;
    const articlesCountQuery = `count(*[_type == 'post' && title match "${search}*"])`;

    const nbPosts = await sanityClient.fetch(articlesCountQuery);
    const posts = await sanityClient.fetch(query);
    setArticlesCount(nbPosts);
    setpages(Math.ceil(nbPosts / itemPerPage));
    setArticles(posts);
    setLoading(false);
  };

  useEffect(() => {
    getArticles(filters);
  }, [filters, page]);

  return (
    <div>
      <Head>
        <title>Tous mes articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="mx-auto my-16">
        <>
          <h1 className="text-3xl font-bold text-center py-7">Articles</h1>
          <section className="mx-auto max-w-sm px-5 ">
            <SearchInput
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
              placeholder="Recherche ..."
            />
            <div className="flex items-center mb-3 justify-between px-1">
              {articlesCount && articlesCount > 1 && (
                <p className="text-gray-500">{articlesCount} resultats</p>
              )}
              {articlesCount == 1 && (
                <p className="text-gray-500">{articlesCount} resultat</p>
              )}
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setFilters((prev) => ({ ...prev, orderBy: e.target.value }))
                }
                name="pets"
                id="pet-select"
                className="p-1 border text-white bg-primary-color ml-auto  rounded-lg focus:outline-none hover:cursor-pointer"
              >
                <option className="h-4" value="desc">
                  Plus récent
                </option>
                <option className="p-4" value="asc">
                  Plus ancien
                </option>
              </select>
            </div>
          </section>
          <section className="max-w-sm mx-auto min-h-screen px-5 pt-3 grid gap-7 sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-3 lg:max-w-5xl">
            {articles &&
              articles.map((post, index) => (
                <Card post={post} type={`article`} key={index} />
              ))}
            {loading && (
              <div className="mx-auto w-fit col-span-full">
                <Image src={Loader} />
              </div>
            )}
            {articlesCount === 0 && !loading && (
              <div className="font-bold text-gray-400 text-center mt-10 col-span-full">
                Aucun resultats
              </div>
            )}
          </section>
        </>
        <Pagination currentPage={page} itemPerPage={itemPerPage} setPage={setPage} totalItem={articlesCount} totalPage={pages} />
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
