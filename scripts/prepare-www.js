// 把 Capacitor 运行库复制到 www 目录，让网页在 App 里能调用"返回键""退出"等手机功能
const fs = require('fs');
const path = require('path');
const nm = path.join(__dirname, '..', 'node_modules');
const www = path.join(__dirname, '..', 'www');
const files = {
  '@capacitor/core/dist/capacitor.js': 'capacitor.js',
  '@capacitor/app/dist/plugin.js': 'capacitor-app.js',
  '@capacitor/status-bar/dist/plugin.js': 'capacitor-status-bar.js',
};
for (const [src, dst] of Object.entries(files)) {
  fs.copyFileSync(path.join(nm, src), path.join(www, dst));
  console.log('已复制', dst);
}
