export interface CarouselItemTypes {
  map(
    arg0: (item: CarouselItemTypes, idx: number) => import('react').JSX.Element
  ): import('react').ReactNode;
  url: string;
  width: number;
  height: number;
  length: any;
}
