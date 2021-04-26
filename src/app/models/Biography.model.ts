import {Deserializable} from './deserializable.model';

export class Biography implements Deserializable{
  full_name!: string;
  alter_egos!: string;
  aliases!: string[];
  place_of_birth!: string;
  first_appearance!: string;
  publisher!: string;
  alignment!: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
