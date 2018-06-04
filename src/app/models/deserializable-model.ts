export interface DeserializableModel<T> {
    deserialize(input: any): T;
}
