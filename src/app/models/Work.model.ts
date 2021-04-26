import {Deserializable} from './deserializable.model';

export class Work implements Deserializable{
  occupation!: string;
  base!: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
