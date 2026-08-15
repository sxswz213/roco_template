# ROCO Academic Homepage Template

这是一个基于 Jekyll 的学术主页模板，适合研究者、实验室、课程项目或个人作品集快速搭建静态网站。本仓库已将原始个人站点内容替换为可复用的占位信息，并加入当前页面背景与基础样式配置。

## 致谢与来源

本项目基于原 `Academic Homepage Template` 模板改造，并保留 MIT License。使用、修改或再发布时，请保留 `LICENSE` 文件，并在合适位置注明原模板来源。

## 功能特点

- 使用 Jekyll 生成静态网站，适合部署到 GitHub Pages。
- 通过 `_config.yml` 管理站点标题、导航栏、联系方式和页脚信息。
- 通过 `_data/*.yml` 管理新闻、成员、奖项、服务活动、资助信息等结构化内容。
- 通过 `assets/ref.bib` 和 `jekyll-scholar` 管理论文列表。
- 支持自定义页面、博客文章、图片资源和论文 PDF。
- 已配置页面背景图：`images/image.png`。

## 本地运行

首次 clone 后安装依赖：

```bash
bundle install
```

启动本地预览：

```bash
bundle exec jekyll serve
```

浏览器打开：

```text
http://127.0.0.1:4000/
```

如需只构建静态文件：

```bash
bundle exec jekyll build
```

构建结果会输出到 `_site/`，该目录为生成产物，不需要提交到 Git。

## 如何定制

1. 修改 `_config.yml`：站点标题、邮箱、机构、URL、导航栏和页脚信息。
2. 修改 `_data/pi.yml`：个人简介、教育经历、主页链接、GitHub、Google Scholar、CV 路径等。
3. 替换 `images/profile-placeholder.svg`：个人头像或实验室标识。
4. 替换或调整 `images/image.png`：页面背景图。
5. 在 `assets/ref.bib` 中添加 BibTeX 论文条目。
6. 在 `_data/news.yml`、`_data/awards.yml`、`_data/academic_services.yml` 等文件中更新内容。
7. 在 `_posts/` 中添加或删除博客文章。
8. 在 `_pages/` 中调整 about、publications、services、blogs 等页面。

## GitHub Pages 部署

部署前请检查 `_config.yml` 中的：

```yaml
baseurl: ""
url: "https://yourusername.github.io"
```

如果部署到用户主页仓库，例如 `yourusername.github.io`，通常 `baseurl` 保持为空。

如果部署到项目仓库，例如 `roco_template`，通常需要设置：

```yaml
baseurl: "/roco_template"
url: "https://yourusername.github.io"
```

仓库中包含 GitHub Actions 配置：`.github/workflows/jekyll-deploy.yml`。推送到 `main` 分支后，工作流会构建 Jekyll 网站并发布 `_site/`。

## Git 提交说明

建议提交源码和锁定依赖版本的文件：

- 提交：`Gemfile`、`Gemfile.lock`、`_config.yml`、`_data/`、`_pages/`、`_layouts/`、`_includes/`、`_sass/`、`assets/`、`images/`、`papers/`。
- 不提交：`_site/`、`.jekyll-cache/`、`.sass-cache/`、`vendor/`、`node_modules/`、`.bundle/`。

`Gemfile.lock` 已保留在仓库中，用于让其他人 clone 后安装到尽可能一致的 Ruby gem 版本。

## 隐私检查

公开发布前，请确认以下内容不包含不希望公开的信息：

- 邮箱、电话、办公室地址和社交账号链接。
- CV、个人照片、头像和背景图。
- 未公开论文、草稿 PDF 或内部材料。
- Google Analytics、域名配置或部署 token。
- `_data/`、`_pages/`、`_posts/` 中的个人经历和项目描述。

## 许可证

本项目遵循 MIT License。详见 `LICENSE`。
