var axios = require("axios").default;
// 原始Cookie字符串
var rawCookie = '__jdv=95931165|direct|-|none|-|1713601579451; __jdu=1713601579451345244428; wlfstk_smdl=pfmbrtdyu6tn9kuszyz3gvv1hopyi408; TrackID=1lKsNRlrDxfYaKrrVOrwj0nVW_xwbxxEwOyhktHKS7mI-STeJ3FTDw0wAW8qsZ_5UXgqEk1tWO4iUYamGEJtNX44FmaVg7azQZWtDvxj_II8; thor=1B85A6451E309CAFECCADEC9A6995463C332B2B3E051AC453A2F8B2C469CF363A770A057B3CBD3C206AE3C47E20BF968D14932E20927133A69D248121DB21B0CC2058B07B929AA80367B6DEA59AA354637CC889BA4BE32549C03E79B94E2D69A9B6BB349AA9E1E358019CA640D17E7F489FEB69A6CB677A7AEA32794FFC9183B; flash=2_zjUX2JrvoAkc4is975j2gAGsmaoBA_6OogTuzwvDZqVpElMbLQl35fkxqMirMuibf9Gb7mh8P1wICARbWbf4rthuZAfRr3XnEzr0sZixyzq*; pinId=ITwiJ7Fu7PDbXrUjzBWQTQ; pin=伟彬672; unick=伟彬672; ceshi3.com=000; _tp=hxLYH8HQwR055cBkwF6z4U/RcQpTiFWe1NPQJF/1Sv0=; _pst=伟彬672; areaId=19; smb_track=0D2CAD96FFF440B7AF37A8374C17AB9E; jsavif=1; 3AB9D23F7A4B3CSS=jdd03VZ7ZXIN2SXGMSG7RE7RO2FXF6RXH45UG5TLQNRH3RHZTNM4SJRX5SYDNEE4NPLJ2I3L2L5GA3P4VFJC25YHDQ2NV5YAAAAMO7LBYMQAAAAAACUQKXKQKYRQPKEX; _gia_d=1; shshshfpa=099f18b9-f748-4e29-ba97-6ffabb2a59e9-1713334776; shshshfpx=099f18b9-f748-4e29-ba97-6ffabb2a59e9-1713334776; 3AB9D23F7A4B3C9B=VZ7ZXIN2SXGMSG7RE7RO2FXF6RXH45UG5TLQNRH3RHZTNM4SJRX5SYDNEE4NPLJ2I3L2L5GA3P4VFJC25YHDQ2NV5Y; token=081abeae37d173f7c3f780c9153c4bfc,3,952002; __tk=81983536296430ffcff907807c44b0ce,3,952002; __jda=181111935.1713601579451345244428.1713601579.1713601579.1713604063.2; __jdc=181111935; ipLoc-djd=19-1601-50258-129167; shshshfpb=BApXc7izL-etAabapBQ-gnQheBo0A7OgzBlFyQFkW9xJ1MktSAoC2; __jdb=181111935.7.1713601579451345244428|2.1713604063'
// 分割Cookie为键值对，并对值进行URL编码
var cookiePairs = rawCookie.split(';').map(pair => {
  var [key, value] = pair.trim().split('=');
  return `${key}=${encodeURIComponent(value)}`;
});

// 将编码后的键值对重新组合成合法的Cookie字符串
var encodedCookie = cookiePairs.join('; ');


// paramJson
paramJson = {
  "platform2": "100000000001",
  "specialAttrStr": "p0ppppppppp5pppppppppppppppp",
  "skuMarkStr": "00"
}

body = {
  // SKU的唯一标识符
  "skuId": 100015248503,
  // 商品分类的父类目ID，以逗号分隔
  "cat": "737,13297,1300",
  // 地区ID，采用层级结构表示，如国家_省份_城市_地区
  "area": "19_1601_50258_129167",
  // 店铺的唯一标识符
  "shopId": "1000001402",
  // 店铺的唯一标识符，与shopId相同，但key不同，可能用于不同的上下文
  "venderId": 1000001402,
  // 请求参数的JSON字符串形式
  "paramJson": JSON.stringify(paramJson),
  // 购买数量
  "num": 1,
  // 该字段用途未明，可能用于流量调控或特殊标识
  "bbTraffic": "",
  // 画布类型，可能用于前端展示或交互控制
  "canvasType": 1
}
console.log(JSON.stringify(body));

params = {
  // 应用程序ID
  appid: 'pc-item-soa',
  // 函数ID，标识具体的功能或操作
  functionId: 'pc_detailpage_wareBusiness',
  // 客户端类型
  client: 'pc',
  // 客户端版本
  clientVersion: '1.0.0',
  // 时间戳，用于请求追踪和防重放攻击
  t: '1713763190814',
  // 请求体，序列化后的JSON字符串
  body: JSON.stringify(body),
  // 安全令牌，用于身份验证和请求完整性校验
  h5st: '20240422131950854;5yn9ng9n6t0jcch6;fb5df;tk03wca391d8c18nmZ450GkJLnXjzkjQWSZQv6nEv1Y8m0OJZathSImZxwajwhOfcNzhEiLrg4xjhGEePhCIbqrPAhXj;e4f4e892b0e4bc2a1f0a2dedcad62e8e;4.4;1713763190854;bc15aeea977fc5bc2b4f3072713e53bae506e78af453d4c3437fdba2aecb38b26b091907b47c360e2f03e6bcf567ea40b50781b319335fb1d9c3e80a62f4eb3325cc91a1a3731b637354391338929041c87ae5529fe8e5beb66563a352a200f2a6110c1d06e21943cff2940ddff7a9b0dfb71b3707b05cc4d93fd9698b898bd23a50024d41f12d538d9c15c365763019e4e908d7418bccce911107a91497c41d08a8e10ebb192e613bb9651d38ef63fa8cf57ff0ad17231f1c3a5a26c419d0218357fa04b80cdbf315b8bce9d6e0d6ec4bd05273eb03034971a07fd9ff8436c70e7c3bef7612e2a9a3fa69613dcc75207209ee5d04d517212e04ff779db8d2c5208df071c98b9eeb341b3bb10a7959b94b86e0d91e94dedcaed82fd2dbf8acb704315cb27785325362b48e90cf63f9027e4ab45bf8b35414b2f2e1c7ab9e39e87c6c45bce53fea13a7220db6a4553c6c',
  // API令牌，用于访问权限验证
  'x-api-eid-token': 'jdd03VZ7ZXIN2SXGMSG7RE7RO2FXF6RXH45UG5TLQNRH3RHZTNM4SJRX5SYDNEE4NPLJ2I3L2L5GA3P4VFJC25YHDQ2NV5YAAAAMPAQ7DAVAAAAAAC5OJLFO6BJNBJ4X',
  // 登录类型
  loginType: '3',
  // 会话值，用于识别用户会话
  scval: '100015248503',
  // 全局唯一标识符
  uuid: '181111935.1713609274960931816330.1713609275.1713706386.1713763134.6'
}



// 在现代浏览器或支持 URLSearchParams 的 Node.js 环境中
let searchParams = new URLSearchParams(params);
// console.log(searchParams.toString());





var options = {
  method: 'GET',
  url: `https://api.m.jd.com/?`,
  params: searchParams,

  headers: {
    // 一系列HTTP请求头配置，用于定义请求的行为和客户端信息
    accept: 'application/json, text/javascript, */*; q=0.01', // 客户端能够接受的响应数据类型
    'accept-language': 'zh-CN,zh;q=0.9', // 客户端接受的语言类型，优先级从高到低
    'cache-control': 'no-cache', // 禁止缓存响应
    origin: 'https://item.jd.com', // 请求的来源域
    pragma: 'no-cache', // 也是用于请求不被缓存
    referer: 'https://item.jd.com/', // 发起请求的页面URL
    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"', // 用户代理标识，用于识别浏览器类型和版本
    'sec-ch-ua-mobile': '?0', // 表明请求是否来自移动设备
    'sec-ch-ua-platform': '"Windows"', // 请求发起的操作系统平台
    'sec-fetch-dest': 'empty', // 描述请求的目的，此处表示是一个不期望有响应体的请求
    'sec-fetch-mode': 'cors', // 请求模式，表示这是一个跨源请求
    'sec-fetch-site': 'same-site', // 表示请求和目标站点的关系，这里是同站点请求
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', // 完整的用户代理字符串，用于识别发起请求的客户端
    'x-referer-page': 'https://item.jd.com/100032991046.html', // 自定义的引用页面，可能用于跟踪或验证请求来源
    'x-rp-client': 'h5_1.0.0', // 可能是客户端版本标识，用于服务端识别客户端版本
    Cookie: encodedCookie.toString() // 编码后的Cookie字符串，用于在请求中携带用户会话等信息
  }
};


axios.request(options).then(function (response) {
  // 检查响应状态码
  if (response.status >= 200 && response.status < 300) {
    // 请求成功，可以进一步处理 response.data
    console.log('请求成功:');
    console.log('响应数据:', response.data.price);
  } else {
    // HTTP状态码不在200-299范围内，认为请求失败
    console.error('请求失败, HTTP状态码:', response.status);
  }
}).catch(function (error) {
  console.error(error);
});