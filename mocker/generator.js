
export default function generator() {
  return {
    // 这里添加接口的模拟数据的 function ，按接口来
    // 接口在 routers.json 里定义好如何对应到这里的 function 上
    appVersion: function(...p) {
      console.log(p)
      return [
        {
          appVersion: p,
        }
      ];
    },
  }
}
