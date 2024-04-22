// paramJson
paramJson={
  "platform2":"100000000001",
  "specialAttrStr":"p0ppppppppp5pppppppppppppppp",
  "skuMarkStr":"00"
} 

body={"skuId":100015248503,
  "cat":"737,13297,1300",
  "area":"19_1601_50258_129167",
  "shopId":"1000001402",
  "venderId":1000001402,
  "paramJson":  JSON.stringify(paramJson),
  "num":1,"bbTraffic":"","canvasType":1
}
  console.log(JSON.stringify(body));

params= {
  appid: 'pc-item-soa',
  functionId: 'pc_detailpage_wareBusiness',
  client: 'pc',
  clientVersion: '1.0.0',
  t: '1713763190814',
  body: JSON.stringify(body),
  h5st: '20240422131950854;5yn9ng9n6t0jcch6;fb5df;tk03wca391d8c18nmZ450GkJLnXjzkjQWSZQv6nEv1Y8m0OJZathSImZxwajwhOfcNzhEiLrg4xjhGEePhCIbqrPAhXj;e4f4e892b0e4bc2a1f0a2dedcad62e8e;4.4;1713763190854;bc15aeea977fc5bc2b4f3072713e53bae506e78af453d4c3437fdba2aecb38b26b091907b47c360e2f03e6bcf567ea40b50781b319335fb1d9c3e80a62f4eb3325cc91a1a3731b637354391338929041c87ae5529fe8e5beb66563a352a200f2a6110c1d06e21943cff2940ddff7a9b0dfb71b3707b05cc4d93fd9698b898bd23a50024d41f12d538d9c15c365763019e4e908d7418bccce911107a91497c41d08a8e10ebb192e613bb9651d38ef63fa8cf57ff0ad17231f1c3a5a26c419d0218357fa04b80cdbf315b8bce9d6e0d6ec4bd05273eb03034971a07fd9ff8436c70e7c3bef7612e2a9a3fa69613dcc75207209ee5d04d517212e04ff779db8d2c5208df071c98b9eeb341b3bb10a7959b94b86e0d91e94dedcaed82fd2dbf8acb704315cb27785325362b48e90cf63f9027e4ab45bf8b35414b2f2e1c7ab9e39e87c6c45bce53fea13a7220db6a4553c6c',
  'x-api-eid-token': 'jdd03VZ7ZXIN2SXGMSG7RE7RO2FXF6RXH45UG5TLQNRH3RHZTNM4SJRX5SYDNEE4NPLJ2I3L2L5GA3P4VFJC25YHDQ2NV5YAAAAMPAQ7DAVAAAAAAC5OJLFO6BJNBJ4X',
  loginType: '3',
  scval: '100015248503',
  uuid: '181111935.1713609274960931816330.1713609275.1713706386.1713763134.6'
}



// 在现代浏览器或支持 URLSearchParams 的 Node.js 环境中
let searchParams = new URLSearchParams(params);
console.log(searchParams.toString());




// for (let key in params) {
//   searchParams.append(key, params[key]);
 

// }



// for (let pair of searchParams.entries()) {

//   console.log("遍历searchParams：",pair[0]+ ': '+ pair[1]); 
// }

