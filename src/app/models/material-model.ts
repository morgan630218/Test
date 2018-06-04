
import {DeserializableModel} from "./deserializable-model";
export class MaterialModel implements DeserializableModel<MaterialModel> {

    //TODO field name : type


    deserialize(input: any): MaterialModel {
        Object.assign(this, input);
        return this;
    }
}
