import AddIcon from "./AddIcon";
import UpArrow from "./UpArrow";

export type iconTypes='addRounded' | 'upArrow';

export enum iconTypesEnum{
  addRounded ='addRounded',
  upArrow ='upArrow',
}

export const IconMapper={
    addRounded:AddIcon,
    upArrow:UpArrow
}

export const Icon =({type}:{type:iconTypes})=>{
    switch (type){
        case iconTypesEnum.addRounded:
            return <AddIcon/>;
        case iconTypesEnum.upArrow:
            return <UpArrow/>;
        default: return <></>
    }

}