
import {DeserializableModel} from "./deserializable-model";
export class WowfModel implements DeserializableModel<WowfModel> {

    //TODO field name : type
    
    deserialize(input: any): WowfModel {
        Object.assign(this, input);
        return this;
    }
}
