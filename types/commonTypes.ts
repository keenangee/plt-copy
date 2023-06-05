import { ImageSourcePropType } from "react-native";

export interface CarouselItemProps {
  id: number;
  title: string;
  img: ImageSourcePropType;
}

export interface CarouseAslItemProps {
  item: {
    id: number;
    title: string;
    img: ImageSourcePropType;
  };
}

export interface PaginationProps {
  data: {
    id: number;
    title: string;
    img: ImageSourcePropType;
  }[];
}
