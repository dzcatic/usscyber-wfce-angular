import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'userTranslation'})
export class UserTranslationPipe implements PipeTransform {

  transform(value: string) {
    return 'wfce.user.' + value;
  }

}
