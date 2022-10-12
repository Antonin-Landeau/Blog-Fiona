import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  currentPage: number;
  totalPage?: number;
  setPage: Dispatch<SetStateAction<number>>
  itemPerPage: number,
  totalItem?:number 
}

const Pagination = ({currentPage, totalPage, setPage, itemPerPage, totalItem }: Props) => {
  return (
    <div className="mx-auto w-fit my-10">
          {currentPage > 1 && (
            <span
              className="border border-primary-color rounded-full p-3 text-primary-color hover:cursor-pointer"
              onClick={() => setPage(1)}
            >
              {1}
            </span>
          )}

          <span
            onClick={() => setPage((prev) => prev - 1)}
            className="p-5 hover:text-primary-color hover:cursor-pointer"
          >
            {currentPage > 1 ? "<" : ""}
          </span>

          <span className="bg-primary-color rounded-full p-3 text-white">
            {currentPage}
          </span>
          {currentPage !== totalPage && (
            <span
              className="p-5 hover:text-primary-color hover:cursor-pointer"
              onClick={() => setPage((prev) => prev + 1)}
            >
              &gt;
            </span>
          )}
          {currentPage !== totalPage && (
            <span
              className="border border-primary-color rounded-full p-3 text-primary-color hover:cursor-pointer"
              onClick={() => {
                if (totalItem) {
                  setPage(Math.ceil(totalItem / itemPerPage));
                }
              }}
            >
              {totalPage}
            </span>
          )}
        </div>
  )
}

export default Pagination