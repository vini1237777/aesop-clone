
import { iconTypes } from "../icons/config";
import { IObject } from "../interface/interface";
import { textTypes } from "../styles/fontstyles";

export class ListItem{

     key:number;
     value:number | string;
     icon?:iconTypes;
     variant?:textTypes;
     sx?:IObject;

    constructor(key:number, value:number | string, icon?: iconTypes,variant?:textTypes,sx?:IObject){
     this.key = key;
     this.value = value;
     this.icon = icon;
     this.sx = sx;
     this.variant=variant;
    }

}


export class ContentItem {
    title?:string;
    description:string;
    imageSrc?:string;

  constructor(
    description:string,
    title?:string,
    imageSrc?:string
  ) {
    this.title=title;
    this.description=description;
    this.imageSrc=imageSrc;
  }
}

export class ArticleItem {
  description: string;
  title?: string;
  imageSrc?: string;
  subtitle?:string;
  buttonLabel?:string;
  constructor(
    description: string,
    subtitle: string,
    buttonLabel: string,
    imageSrc?: string,
    title?: string
  ) {
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.imageSrc = imageSrc;
    this.buttonLabel = buttonLabel;
  }
}