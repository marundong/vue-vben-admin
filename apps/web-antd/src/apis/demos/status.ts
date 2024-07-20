import { requestClient } from '#/forward';

/**
 * 模拟任意状态码
 */
async function getMockStatus(status: string) {
  return requestClient.get('/status', { params: { status } });
}

export { getMockStatus };