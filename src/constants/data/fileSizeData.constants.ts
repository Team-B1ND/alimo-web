import { FileData } from "src/types/MyNotificationDetail/File.interface";

export const fileSizeTransform = (fileData: FileData) => {
  let fileSizeData: Array<string> = [];
  fileData.map((fileData: FileData) => {
    let fileSize = fileData.fileSize;
    const sizes = ["B", "KB", "MB", "GB", "TB"];

    for (let i = 0; i < sizes.length; i++) {
      if (parseInt(fileSize) < 1024) {
        fileSizeData.push(`${fileSize} ${sizes[i]}`);
        break;
      }
      fileSize = `${(parseInt(fileSize) / 1024).toFixed(1)}`;
    }
  });
  return fileSizeData;
};
