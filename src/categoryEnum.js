export const CategoryEnum = {
  TECH: "TECH",
  SCIENCE: "SCIENCE",
  GENERAL: "GENERAL",
  FILMS: "FILMS",
  GAMES: "GAMES",
  HISTORY: "HISTORY"
};

export const IdEnum = {
  TECH: 18,
  SCIENCE: 17,
  GENERAL: 9,
  GAMES: 15,
  FILMS: 11,
  HISTORY: 23
};

export class EnumUtils {
  getCategoryFromId(id) {
    let category = "";
    switch (id) {
      case IdEnum.TECH:
        category = "Technology";
        break;
      case IdEnum.SCIENCE:
        category = "Science";
        break;
      case IdEnum.GENERAL:
        category = "General";
        break;
      case IdEnum.HISTORY:
        category = "History";
        break;
      case IdEnum.GAMES:
        category = "Games";
        break;
      case IdEnum.FILMS:
        category = "Films";
        break;
    }
    return category;
  }
}
