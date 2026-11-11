# Homepage Redirect: Bilibili → Following feed, YouTube → Subscriptions

[中文](README.md) | **English**

You open Bilibili or YouTube to watch something worthwhile, and the homepage recommendations pull you into short videos within seconds.

This userscript keeps you off the homepage. **When you open the homepage, it sends you somewhere else.**

| Site | When you open | You land on |
| --- | --- | --- |
| Bilibili | `www.bilibili.com` | Following feed (`t.bilibili.com`) |
| YouTube | `www.youtube.com` | Subscriptions (`/feed/subscriptions`) |

The script only acts on the homepage itself (the root path `/`). Video pages, search, channel pages and playlists open as usual.

## Install

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Open [`homepage-redirect.user.js`](homepage-redirect.user.js) in this repository and click **Raw**. Tampermonkey shows an install page; click **Install**.

The script updates itself automatically through Tampermonkey when a new version is published here.

## Tips

- **YouTube**: turning off Watch History removes most recommendations from the homepage and the sidebar.
- **Mobile**: the official apps don't let you turn off the recommendation feed. The simplest fix is to uninstall the mobile app and watch on your computer when you have something specific in mind.

## FAQ

**Does clicking the site logo also redirect?**
Yes, because the logo links to the homepage.

**What if I want a quick look at the recommendations?**
Turn the script off temporarily from the Tampermonkey menu.

## License

[MIT](LICENSE)
