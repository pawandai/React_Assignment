export type spellType = {
  index: string;
  name: string;
  desc: [];
  higher_level: [];
  range: number;
  components: [];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  classes: [];
  subclasses: [];
};

export type spellsType = {
  index: string;
  level: number;
  name: string;
  url: string;
};
