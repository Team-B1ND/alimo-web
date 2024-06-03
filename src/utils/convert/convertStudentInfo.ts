class ConvertStudentInfo {
  public convertGrade = (grade: string): number => {
    switch (grade) {
      case "1학년":
        return 1;
      case "2학년":
        return 2;
      case "3학년":
        return 3;
      default:
        return 0;
    }
  };

  public convertRoom = (room: string): number => {
    switch (room) {
      case "1반":
        return 1;
      case "2반":
        return 2;
      case "3반":
        return 3;
      case "4반":
        return 4;
      default:
        return 0;
    }
  };
}

const convertStudentInfo = new ConvertStudentInfo();
export default convertStudentInfo;
