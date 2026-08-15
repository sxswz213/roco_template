<div align="center">

# 🌿 ROCO Academic Homepage Template ✨

### 把学术旅程，装进一座会发光的小屋

一款带着「洛克王国」气息的 Jekyll 学术主页模板。

在这里，论文是一路收集的徽章，项目是刚刚解锁的新地图，  
博客是冒险手记，而每一条学术动态，都是旅途中闪闪发亮的小事件。⭐

不用和复杂的前端魔法缠斗——  
填好资料、换上头像、推送到 GitHub Pages，  
你的专属学术小屋就可以正式开门营业啦！🏡

[🌐 在线逛逛](https://sxswz213.github.io/)

<br>

[![ROCO Academic Homepage Template 示例](example.png)](https://sxswz213.github.io/)

<sub>🌱 愿每一份认真做出的研究，都能拥有一个可爱又体面的展示角落。</sub>

</div>

## 模板来源

本项目基于原 `Academic Homepage Template` 改造而来，保留 MIT License，并感谢原模板提供的 Jekyll 页面结构、数据组织方式和学术主页基础样式。

## 功能

- 使用 Jekyll 生成静态网站，适合部署到 GitHub Pages。
- 通过 `_config.yml` 管理站点标题、导航栏、联系方式和页脚。
- 通过 `_data/*.yml` 管理新闻、成员、奖项、服务活动等内容。
- 通过 `assets/ref.bib` 和 `jekyll-scholar` 管理论文列表。
- 内置五个洛克王国主题，可在页面右上角一键切换，并自动记住上次选择：
  - `喵喵`：默认绿色主题，背景图为 `images/miaomiao.png`。
  - `水蓝蓝`：蓝色主题，背景图为 `images/shuilanlan.png`。
  - `火花`：橙红色主题，背景图为 `images/huohua.png`。
  - `大耳帽兜`：粉色主题，背景图为 `images/maodou.png`。
  - `恶魔叮`：棕色主题，背景图为 `images/emoding.png`。

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

1. 修改 `_config.yml`：站点标题、邮箱、机构、URL、导航栏和默认主题 `theme_style`。
2. 修改 `_data/pi.yml`：个人简介、教育经历、主页链接、Google Scholar、ResearchGate 和 CV 路径。
3. 替换 `images/profile.jpg`：主页头像。
4. 替换 `images/banner.jpg`：主页横幅。
5. 替换 `images/miaomiao.png`、`images/shuilanlan.png`、`images/huohua.png`、`images/maodou.png` 或 `images/emoding.png`：对应主题的页面背景图。
6. 修改 `_data/themes.yml`：调整主题显示名；修改 `_sass/SHB_css.scss`：调整主题颜色。
7. 修改 `assets/ref.bib`：添加论文 BibTeX。
8. 修改 `_data/`、`_pages/`、`_posts/`：更新新闻、页面和博客内容。

## 许可证

本项目遵循 MIT License。详见 `LICENSE`。
