
import {DeserializableModel} from "./deserializable-model";
export class WoModel implements DeserializableModel<WoModel>{
    wolo9: string;
    wonum: string;
    siteid: string;
    lead: string;
    owner: string;
    // schedstart: string;
    schedstart: Date;
    //wolo9,wonum,siteid,lead,owner,schedstart
    
    deserialize(input: any): WoModel {
        Object.assign(this, input);
        return this;
    }
    

}
