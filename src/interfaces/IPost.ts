export interface IPost {
  id: Number;
  createdAt: Date;
  title: string;
  domain: string;
  image: string | File | null | undefined;
  smallDescription: string;
  descriptions: IDescription[];
  imageExample: string | null | undefined | File;
  externalLink: string | null | undefined;
}

export interface IDescription {
  id: Number
  code: string | null | undefined;
  image: string | null | undefined | File;
  lang: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  link: string | null | undefined;
}

export const initPostDefault = {
  title: "",
  descriptions: [],
  externalLink: "",
  id: -1,
  image: "",
  domain: "",
  imageExample: "",
  smallDescription: "",
  createdAt: new Date(),
}

export const initDescription ={ 
  id: -1, 
  code: "",
  image: "",
  description: "",
  lang: "",
  title: "",
  link: ""
}
