# ROCO Academic Homepage Template

一套带点“洛克王国”气质的 Jekyll 学术主页模板：清爽、可爱，适合展示个人介绍、论文、项目、博客和学术活动。你可以把它当成自己的“学术小屋”——填入资料、挂上成果，再让绿色小伙伴当背景守护灵。

[![ROCO Academic Homepage Template 示例](example.png)](https://sxswz213.github.io/)

在线示例：<https://sxswz213.github.io/>

## 模板来源

本项目基于原 `Academic Homepage Template` 改造而来，保留 MIT License，并感谢原模板提供的 Jekyll 页面结构、数据组织方式和学术主页基础样式。

## 功能

- 使用 Jekyll 生成静态网站，适合部署到 GitHub Pages。
- 通过 `_config.yml` 管理站点标题、导航栏、联系方式和页脚。
- 通过 `_data/*.yml` 管理新闻、成员、奖项、服务活动等内容。
- 通过 `assets/ref.bib` 和 `jekyll-scholar` 管理论文列表。
- 内置两个主题：`喵喵` 使用 `images/miaomiao.png`，`水蓝蓝` 使用 `images/shuilanlan.png`。
- 页面右上角可一键切换主题，并自动记住上次选择。

## 使用方式

安装依赖：

```bash
bundle install
```

本地预览：

```bash
bundle exec jekyll serve
```

浏览器打开：

```text
http://127.0.0.1:4000/
```

只构建静态文件：

```bash
bundle exec jekyll build
```

## 快速定制

1. 修改 `_config.yml`：站点标题、邮箱、机构、URL 和导航栏。
2. 修改 `_data/pi.yml`：个人简介、教育经历、主页链接和 CV 路径。
3. 替换 `images/profile-placeholder.svg`：头像或实验室 logo。
4. 替换 `images/miaomiao.png` 或 `images/shuilanlan.png`：对应主题的页面背景图。
5. 修改 `assets/ref.bib`：添加论文 BibTeX。
6. 修改 `_data/`、`_pages/`、`_posts/`：更新新闻、页面和博客内容。

## 许可证

本项目遵循 MIT License。详见 `LICENSE`。
