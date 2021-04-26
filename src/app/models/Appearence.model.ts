import {Deserializable} from './deserializable.model';

export class Appearence implements Deserializable{
  gender!: string;
  race!: string;
  height!: string[];
  weight!: string[];
  eye_color!: string;
  hair_color!: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
