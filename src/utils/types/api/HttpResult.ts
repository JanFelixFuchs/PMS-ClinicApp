export type HttpResult<T> = {
  httpStatusCode: number;
  exception: string | null;
  message: string | null;
  errors: string[] | null;
  payload: T | null;
};

export function transformHttpResult<T>(response: HttpResult<T>): T {
  return response.payload!;
}
