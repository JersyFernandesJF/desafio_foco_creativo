export namespace Api {
  export type ErrorResponse = {
    message: string;
  };

  export type Response<T> = {
    data: T;
    message: string;
  };
}
