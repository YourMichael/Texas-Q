# Q萌德州扑克 · 安卓 App

Q 版单机德州扑克（4/5/6 人场，小盲 1、大盲 2，每轮思考 60 秒），用 Capacitor 打包成安卓 App，由 GitHub Actions 在云端自动编译出 APK 安装包，电脑上不需要装任何开发工具。

## 目录说明

| 路径 | 作用 |
| --- | --- |
| `www/index.html` | 游戏本体（改游戏就改这个文件） |
| `www/fonts/` | 内置字体（站酷快乐体、Fredoka，均为 OFL 开源授权，可免费商用） |
| `android-res/` | App 图标和启动画面 |
| `assets/` | 图标、启动图原图（1024 图标可用于应用商店） |
| `capacitor.config.json` | App 名称和包名 |
| `.github/workflows/build-android.yml` | 云端自动打包流程 |

## 第一次打包（约 15 分钟）

1. **新建仓库**：登录 github.com，右上角 “+” → New repository，名字随便起（如 `q-texas-holdem`），选 Private（私有）或 Public 都行，点 Create repository。
2. **上传文件**：在新仓库页面点 “uploading an existing file”，把本文件夹里的**所有内容**拖进去，点 Commit changes。
   - 注意：`.github` 是隐藏文件夹，有的电脑拖不上去。上传后如果仓库里看不到 `.github` 文件夹，就点 Add file → Create new file，文件名填 `.github/workflows/build-android.yml`，把本地这个文件的内容复制粘贴进去，再 Commit。
3. **填签名密钥**（强烈建议）：仓库页面 Settings → Secrets and variables → Actions → New repository secret，按另一个压缩包里《填写到GitHub的4个密钥.txt》添加 4 项。
   不填也能打包，但只能出“测试版”，以后每次更新都要先卸载旧版。
4. **开始打包**：点仓库上方的 **Actions** → 左侧 “打包安卓 APK” → 右侧 **Run workflow**。等 5～8 分钟变成绿色对勾。
5. **下载安装包**：点进这次运行记录，页面最下方 Artifacts 里下载 `QMengPoker-版本号`，解压得到 `.apk`，发到手机上安装（手机会提示“允许安装未知来源应用”，同意即可）。

以后只要往仓库里提交新改动（比如替换 `www/index.html`），就会自动重新打包。

## 发布正式版本（方便分享下载链接）

仓库首页右侧 Releases → Draft a new release → Choose a tag 输入 `v1.0.0`（以后递增成 `v1.0.1`、`v1.1.0`…）→ Publish release。
几分钟后 APK 会自动出现在这个 Release 的下载列表里，把 Release 页面链接发给别人就能下载（私有仓库别人看不到，需要公开仓库）。

## 常见修改

- **改 App 名称**：`capacitor.config.json` 里的 `appName`。
- **改包名**：`appId`（如 `com.yourcompany.poker`）。包名一旦发给别人安装后就不要再改，否则会变成另一个 App。
- **换图标/启动图**：替换 `android-res` 里对应尺寸的图片。

## App 里多出的手机功能

- 打开后自动隐藏状态栏，全屏游戏。
- 手机返回键：有弹窗时关闭弹窗；加注面板打开时收起；否则弹出“要退出游戏吗？”。
- “退出”按钮会真正关闭 App；切到后台时音乐自动暂停。

## 苹果手机（iOS）

iOS 打包需要苹果开发者账号（每年 99 美元）和签名证书，流程不同，需要时可以再加。
