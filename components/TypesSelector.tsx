import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import { sanityClient } from '../sanity';
import { IRecepiesFilter } from '../types';

interface Props {
  setFilters: Dispatch<SetStateAction<string[]>>,
  filters: string[],
}


const TypesSelector = ({setFilters, filters}: Props) => {
  const [types, setTypes] = useState<string[]>([])

  const handleClick = (event: MouseEvent<HTMLDivElement>, ) => {
    console.log('caca');
  }
  
  
  const getTypes = async () => {
    const query = `*[_type == 'recepiesTypes']{
      title
    }`;
    const typesObj = await sanityClient.fetch(query)

    const types:string[] = []

    typesObj.map((type: {title: string}) => {
      types.push(type.title)
    })
    setTypes(types)
  }

  useEffect(() => {
    getTypes()
  }, [])
  
  return (
    <div className='flex overflow-y-hidden overflow-auto flex-shrink-0 pb-3 whitespace-nowrap'>
      {types.map((type, index) => {
        return (
          <div key={index} className={`border-primary-color border px-2 w-full mx-1 rounded-md hover:cursor-pointer ${filters.includes(type) && 'bg-primary-color text-white'}`} onClick={() => {
            if (filters.includes(type)) {
              const newAr = filters.filter(item => item !== type)
              setFilters(newAr)
            }
            if (!filters.includes(type)) {
              setFilters((prev) => ([...prev, type]))
            }
          }}>
            {type}
          </div>
        )
      })}
    </div>
  )
}

export default TypesSelector