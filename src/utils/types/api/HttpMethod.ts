export const HttpMethod = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
} as const;

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];
