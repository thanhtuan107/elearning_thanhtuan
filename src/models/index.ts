export type ApiResponse<T = any> = {
  statusCode: number;
  message: string;
  content: T;
  dateTime: Date;
  messageConstants: null;
};

export type Movie = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};
