export interface Student {
  id: number;
  name: string;
}

export interface MemberInfo {
  memberId: number;
  name: string;
  profileImage: string;
  cnt: number;
}

export interface MemberCntList {
  teacher: number;
  parent: number;
  student: [
    {
      grade1: [
        {
          cls: 1;
          count: number;
        },
        {
          cls: 2;
          count: number;
        },
        {
          cls: 3;
          count: number;
        },
        {
          cls: 4;
          count: number;
        },
      ];
      grade2: [
        {
          cls: 1;
          count: number;
        },
        {
          cls: 2;
          count: number;
        },
        {
          cls: 3;
          count: number;
        },
        {
          cls: 4;
          count: number;
        },
      ];
      grade3: [
        {
          cls: 1;
          count: number;
        },
        {
          cls: 2;
          count: number;
        },
        {
          cls: 3;
          count: number;
        },
        {
          cls: 4;
          count: number;
        },
      ];
    },
  ];
}
