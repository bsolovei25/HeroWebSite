import {Deserializable} from './deserializable.model';

export class Powerstats implements Deserializable{
  intelligence!: string;
  strength!: string;
  speed!: string;
  durability!: string;
  power!: string;
  combat!: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
