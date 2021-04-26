import {Deserializable} from './deserializable.model';

export class Connections implements Deserializable{
  group_affiliation!: string;
  relatives!: string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
