import { Injectable } from '@nestjs/common';
import * as OSS from 'ali-oss';
import * as dayjs from 'dayjs';
import { OSSType } from './dto/oss.type';

@Injectable()
export class OSSService {
  //新增用户
  async getSignature(): Promise<OSSType> {
    const config = {
      accessKeyId: 'LTAI5t6baDzYyZqYeJMeytZb',
      accessKeySecret: 'sSjfel0jNeyTtXdPKTdeuqHvJJlKMI',
      bucket: 'homework-drop-assets',
      dir: 'images/',
    };

    const client = new OSS(config);

    const date = new Date();
    date.setDate(date.getDate() + 1);
    const policy = {
      expiration: date.toISOString(), // 请求有效期
      conditions: [
        ['content-length-range', 0, 1048576000], // 设置上传文件的大小限制
        // { bucket: client.options.bucket } // 限制可上传的bucket
      ],
    };
    //bucket域名
    const host = `http://${config.bucket}.${
      (await client.getBucketLocation()).location
    }.aliyuncs.com`.toString();
    console.log('host', host);
    //签名
    const formData = await client.calculatePostSignature(policy);
    //返回参数
    const params = {
      expire: dayjs().add(1, 'days').unix().toString(),
      policy: formData.policy,
      signature: formData.Signature,
      accessId: formData.OSSAccessKeyId,
      host,
      dir: 'images/',
    };
    return params;
  }
}
