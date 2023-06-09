
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
    imageSrc?:object;

  constructor(
    description:string,
    title?:string,
    imageSrc?:object
  ) {
    this.title=title;
    this.description=description;
    this.imageSrc=imageSrc;
  }
}

export class LocatorInfoContentItem {
  title?: string;
  imageSrc?: object;

  constructor( title?: string, imageSrc?: object) {
    this.title = title;
    this.imageSrc = imageSrc;
  }
}

export class ArticleItem {
  description: string;
  title?: string;
  imageSrc:  IObject;
  subtitle?: string;
  buttonLabel?: string;
  constructor(
    description: string,
    subtitle: string,
    buttonLabel: string,
    imageSrc: IObject,
    title?: string
  ) {
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.imageSrc = imageSrc;
    this.buttonLabel = buttonLabel;
  }
}