
import {DeserializableModel} from "./deserializable-model";
export class LaborModel implements DeserializableModel<LaborModel> {

    //TODO field name : type

    deserialize(input: any): LaborModel {
        Object.assign(this, input);
        return this;
    }
}
