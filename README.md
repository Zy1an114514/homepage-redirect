# 干掉主页：B站→动态，YouTube→订阅

**中文** | [English](README.en.md)

本来只想看点优质内容，一打开 B站 / YouTube 却先被首页推荐里的短视频勾走了？

这个油猴脚本做的事很简单：**你一打开主页，它就把你送到别的地方。**

| 网站 | 打开主页时 | 跳转到 |
| --- | --- | --- |
| B站 | `www.bilibili.com` | 动态页 `t.bilibili.com` |
| YouTube | `www.youtube.com` | 订阅页 `/feed/subscriptions` |

脚本只处理主页（根路径 `/`），看视频、搜索、个人空间、收藏夹这些页面都照常打开。

## 安装

1. 给浏览器装上 [Tampermonkey](https://www.tampermonkey.net/)（篡改猴）扩展。
2. 打开本仓库里的 [`homepage-redirect.user.js`](homepage-redirect.user.js)，点右上角的 **Raw**，Tampermonkey 会弹出安装页面，点「安装」就行。

以后这里发布新版本，Tampermonkey 会自动更新脚本。

## 配合使用效果更好

- **YouTube**：关掉「观看记录」以后，首页和侧栏的推荐会少很多。
- **手机端**：官方 App 的首页推荐关不掉，最省事的办法是卸载手机 App，只在电脑上带着目的看。

## 常见问题

**点 B站 左上角的 logo 也会跳走吗？**
会，因为 logo 链接到的就是主页。

**想临时看一眼推荐怎么办？**
在 Tampermonkey 面板里把这个脚本临时关掉就行。

## 许可证

[MIT](LICENSE)
