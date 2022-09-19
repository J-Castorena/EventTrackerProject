export class Wod {
  id: number;
  name: string;
  date: string | undefined;
  description: string;
  personalTime: string| undefined;
  comments: string| undefined;

  constructor(id: number = 0,
    name: string = '',
    date: string = '',
    description: string = '',
    personalTime: string = '',
    comments: string= '') {
      this.id = id;
      this.name = name;
      this.date = date;
      this.description = description;
      this.personalTime = personalTime;
      this.comments = comments;
  }

}
