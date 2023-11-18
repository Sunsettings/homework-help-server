import { ACCESS_KEY, ACCESS_KEY_SECRET } from '@/common/constants/aliyun';
import Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import { config } from 'dotenv';
import * as OpenApi from '@alicloud/openapi-client';

config();

const conf = new OpenApi.Config({
  // 必填，您的 AccessKey ID
  accessKeyId: ACCESS_KEY,
  // 必填，您的 AccessKey Secret
  accessKeySecret: ACCESS_KEY_SECRET,
});
conf.endpoint = `dysmsapi.aliyuncs.com`;
export const msgClient = new Dysmsapi20170525(conf);
