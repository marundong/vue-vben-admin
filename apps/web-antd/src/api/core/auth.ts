import { baseRequestClient, requestClient } from '#/api/request';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password?: string;
    username?: string;
    grant_type?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    username: string;
  }

  export interface RefreshTokenResult {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    username: string;
  }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  return requestClient.post<AuthApi.LoginResult>('/oauth2/token', data, {
    headers: { Authorization: 'Basic 1=1' },
    transformRequest: [
      function (data, headers) {
        // 对发送的 data 进行任意转换处理
        headers.Authorization = 'Basic MTox';
        data.grant_type = 'authorization_pt_user';
        const formData = new FormData();
        Object.keys(data).forEach((key) => formData.append(key, data[key]));
        return formData;
      },
    ],
    transformResponse: [
      function (data) {
        // 对接收的 data 进行任意转换处理
        const parse = JSON.parse(data);
        return { data: parse, code: 0 };
      },
    ],
  });
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<AuthApi.RefreshTokenResult>('/auth/refresh', {
    withCredentials: true,
  });
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return baseRequestClient.post('/auth/logout', {
    withCredentials: true,
  });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return requestClient.get<string[]>('/auth/codes');
}
