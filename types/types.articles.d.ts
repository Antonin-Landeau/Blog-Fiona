export interface Article {
  _createdAt?:  Date;
  _id?:         string;
  _rev?:        string;
  _type?:       string;
  _updatedAt?:  Date;
  author?:      Author;
  body?:        Body[];
  categories?:  Category[];
  description?: string;
  mainImage?:   MainImage;
  slug?:        Slug;
  title?:       string;
}

export interface Author {
  _ref?:  string;
  _type?: string;
}

export interface Body {
  _key?:     string;
  _type?:    BodyType;
  children?: Child[] | undefined;
  markDefs?: any[];
  style?:    string;
  level?:    number;
  listItem?: string;
  asset?:    Author;
  crop?:     Crop;
  hotspot?:  Hotspot;
}

export enum BodyType {
  Block = "block",
  Image = "image",
}

export interface Child {
  _key?:  string;
  _type?: ChildType;
  marks?: any[];
  text?:  string;
}

export enum ChildType {
  Span = "span",
}

export interface Crop {
  _type?:  string;
  bottom?: number;
  left?:   number;
  right?:  number;
  top?:    number;
}

export interface Hotspot {
  _type?:  string;
  height?: number;
  width?:  number;
  x?:      number;
  y?:      number;
}

export interface Category {
  _key?:  string;
  _ref?:  string;
  _type?: string;
}

export interface MainImage {
  _type?: BodyType;
  asset?: Author;
}

export interface Slug {
  _type?:   string;
  current?: string;
}
