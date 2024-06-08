type Portfolio = {
  name: string;
  designations: string[];
  social_icons: SocialTcons[];
  cards: Cards[];
  projects : Project[]
};

type SocialTcons = {
  icon: string;
  url: string;
};
type Cards = {
  title: string;
  description: string;
  url: string;
};

type Project = {
  id : number
  title : string
  description? : string
  languages? : string[]
  url?:string
}