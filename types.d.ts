import { SetStateAction } from "react"

export interface IPost {
  title: string,
  description: string,
  _createdAt: string,
  _id: string,
  _type: string,
  author: {
    name:string,
    image:string
  },
  mainImage: {
    assest: {
      url:string,
    }
  },
  slug: {
    current: string
  },
  body: [object]
}

export interface IDuration {
  preparationTime: number,
  restTime: number,
  cookTime: number,
  totalTime: number,
}

export interface IIngredient {
  quantity: number,
  title: string,
  unit: string
}

export interface IRecepies {
  _createdAt: string,
  _id: string,
  _type: string,
  duration: IDuration,
  ingredients: [IIngredient],
  mainImage: {
    asset: {
      _ref:string,
    }
  },
  title: string,
  type: string,
  slug: {
    current: string
  },
}

export interface IPostFilter {
  search: string |SetStateAction,
  orderBy?: string,
}

export interface IRecepiesFilter extends IPostFilter {
  type: string[]
}
