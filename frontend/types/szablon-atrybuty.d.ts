// Atrybuty sterujące z szablonu (odczytywane przez public/assets/js/site.js: selektory [hover="…"],
// [slider="…"], [parallax="…"] itd.). Deklarujemy je, żeby TypeScript przepuszczał je w JSX.
import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    bg?: string;
    cookies?: string;
    device?: string;
    hover?: string;
    index?: string;
    map?: string;
    mob?: string;
    parallax?: string;
    pin?: string;
    preloader?: string;
    slider?: string;
  }
  interface SVGAttributes<T> {
    slider?: string;
  }
}
