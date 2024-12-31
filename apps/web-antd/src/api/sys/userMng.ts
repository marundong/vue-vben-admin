import { requestClient } from '#/api/request';

export namespace UserMngApi {
  /** 登录接口参数 */
  export interface QueryUserParams {
    username?: string;
    id?: number;
  }

  /** 登录接口返回值 */
  export interface UserInfo {
    username: string;
  }
}
/**
 * 登录
 */
export async function pageUserList(data: UserMngApi.QueryUserParams) {
  return requestClient.post<UserMngApi.UserInfo>('/user/list', data);
}
