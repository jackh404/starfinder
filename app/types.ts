export type Assignment = {
  id: number;
  title: string;
  text: string;
  sector: string;
  duration: string;
  requestor: string;
  funds: string;
  notes: string[];
  show: boolean
};
export type Article = {
    id: number;
    title: string;
    text: string;
    image: string;
    date: string;
}
export type Archive = {
    id: number;
    title: string;
    text: string;
    image: string|null;
    notes: string[];
    show: boolean
}
    