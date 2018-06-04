
import {DeserializableModel} from "./deserializable-model";
export class ToolsModel implements DeserializableModel<ToolsModel> {

    //TODO field name : type

    deserialize(input: any): ToolsModel {
        Object.assign(this, input);
        return this;
    }
}
