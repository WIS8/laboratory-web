import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {SexEnum} from '../domain/Enum';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: string): SexEnum {
    if (value === SexEnum.MALE) {
      return SexEnum.MALE;
    } else if (value === SexEnum.FEMALE) {
      return SexEnum.FEMALE;
    }
    return null;
  }

}
