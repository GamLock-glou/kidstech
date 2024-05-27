export interface IData {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[]
}

export interface IRootState {
  courses: IData[];
  activeTag: string;
  setActiveTag: React.Dispatch<React.SetStateAction<string>>;
}
