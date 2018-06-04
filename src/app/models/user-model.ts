
import {DeserializableModel} from "./deserializable-model";
export class UserModel implements DeserializableModel<UserModel> {
    
    //TODO field name : type
    
    
    deserialize(input: any): UserModel {
        Object.assign(this, input);
        return this;
    }
}
