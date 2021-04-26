import { Appearence } from './Appearence.model';
import { Biography } from './Biography.model';
import { Connections } from './Connections.model';
import { ImageArray } from './ImageArray.model';
import { Powerstats } from './Powerstats.model';
import { Work } from './Work.model';
import {Deserializable} from './deserializable.model';

export class HeroModel implements Deserializable{
  id!: string;
  name!: string;
  powerstats!: Powerstats;
  biography!: Biography;
  appearance!: Appearence;
  work!: Work;
  connections!: Connections;
  image!: ImageArray;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
