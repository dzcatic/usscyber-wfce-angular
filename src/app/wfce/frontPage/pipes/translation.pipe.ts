import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'frontPageTranslation'})
export class FrontPageTranslationPipe implements PipeTransform {

  transform(value: string) {
    return 'wfce.frontPage.' + value;
  }

}
