# Academic Homepage Template

This is a sanitized Jekyll academic homepage template copied from a personal site and converted to reusable placeholder content.

## Quick Start

1. Edit `_config.yml` with your name, email, institution, URL, and navigation.
2. Edit `_data/pi.yml` with your profile, education, links, and optional CV path.
3. Replace `images/profile-placeholder.svg` and `images/banner-placeholder.svg` with your own images.
4. Add publications to `assets/ref.bib` using BibTeX entries.
5. Add news, awards, services, team members, and alumni in `_data/*.yml`.
6. Replace or remove sample posts in `_posts/`.

## Local Preview

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser.

## GitHub Pages

- Update `url` in `_config.yml` to your GitHub Pages URL.
- If you use the included GitHub Actions workflow, configure the branch and token/permissions for your repository.
- Do not commit generated folders such as `_site/`, `.jekyll-cache/`, `vendor/`, or `node_modules/`.

## Privacy Checklist

Before publishing, check that you only include information you intend to make public:

- Email and social profile links
- CV and personal photos
- Office address or phone number
- Publication drafts or private PDFs
- Analytics IDs, domain names, and deployment tokens
