## 接口规范
返回数据的接口规范:

```json
{
   code: 200, // 10001 10002
   data: [], // {}
   message:'error',
   page:{
      start: 0,
      length: 20,
      total:100,
   },
   debug: '',
   key: '',
}
```

## 使用JWT保存登录状态

1. pnpm i ...
2. 注册JwtModule
3. 添加自定义JWT策略
4. 创建Guard，引入JWT策略
5. 修改登录接口
6. PC端页面获取JWT

# 使用plop生成模板代码

1. pnpm i plop -D
2. 配置plopfile.js文件
3. npx plop

## 重复排课 15.11 7:31
