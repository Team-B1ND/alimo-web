export interface MyNotificationData {
  notificationId: number;
  title: string;
  content: string;
  speaker: boolean;
  createdAt: string;
  memberId: number;
  name: string;
  profileImage: string;
  isBookMarked: boolean;
  emoji: string;
  images: [
    {
      fileUrl: string;
      fileName: string;
      fileSize: number;
      filetype: string;
      imageOrFile: string;
    }
  ];
  files: [
    {
      fileUrl: string;
      fileName: string;
      fileSize: number;
      filetype: string;
      imageOrFile: string;
    }
  ];
}
