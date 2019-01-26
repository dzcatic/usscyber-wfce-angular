import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'sharedTranslation'})
export class SharedTranslationPipe implements PipeTransform {

  transform(value: string) {
    return 'wfce.shared.' + value;
  }

}
