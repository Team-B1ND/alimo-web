export interface FileData {
  map(arg0: (fileData: FileData) => void): unknown;
  fileUrl: string;
  fileName: string;
  fileSize: string;
  filetype: string;
  imageOrFile: string;
}
