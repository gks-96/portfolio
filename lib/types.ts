import { links } from "./data";

//number means it could be anything of them 
export type SectionName = typeof links[number]["name"];
