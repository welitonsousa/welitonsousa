// import dateFormat from "dateformat/";

export class Formatters {
  static replaceAll(sentence: string): string {
    return (sentence.replace(/[" "]/g, "-")).toLowerCase();
  }
}