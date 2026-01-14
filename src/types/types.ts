export interface ISlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface IContentResponse {
  hero: {
    heading: string;
    subheading: string;
  };
  slides: ISlideContent[];
}
