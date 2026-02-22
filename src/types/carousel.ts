export interface CarouselItemData {
  id: number;
  title: string | null;
  subtitle: string | null;
  image: string;
  link: string | null;
  buttonText: string | null;
  order: number;
  isActive: boolean;
}

export interface HeroCarouselClientProps {
  slides: CarouselItemData[];
  autoplayDelay?: number;
}
