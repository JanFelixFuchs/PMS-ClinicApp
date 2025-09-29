export const HttpMethod = {
  POST: 'post',
  GET: 'get',
  UPDATE: 'update',
  DELETE: 'delete',
} as const;

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];
