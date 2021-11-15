export interface FileObj {
  id: number;
  fileName: string;
  fileSize: number;
  fileType: number;
  fullUrl: string;
}

export interface LinkFile {
  id: number;
  uid: string;
  fileId: number;
  file: FileObj;
  dateAdd: Date;
}
