# Themerr website

The organization website serves the Themerr product page at <https://themerr.lizardbyte.dev/>.
GitHub Pages publishes the `master` branch from the repository root. Keep `CNAME` and `.nojekyll` in that root.

ThemerrDB is published independently from <https://github.com/Themerr/ThemerrDB> and inherits this site's domain at
<https://themerr.lizardbyte.dev/ThemerrDB/>. Its repository's Pages custom-domain setting stays empty.

## Local preview

Run `python -m http.server 8000` from the repository root and open <http://localhost:8000/>.
The site uses plain HTML, CSS, and JavaScript with a light/dark theme switcher. It has no build step.

## Assets

- The [Themerr icon](https://github.com/Themerr/Themerr/blob/master/web/images/icon-default.png) retains its
  [AGPL-3.0 license](assets/licenses/AGPL-3.0.txt).
- [Manrope](assets/fonts/manrope.woff2) is distributed under the [SIL Open Font License](assets/fonts/OFL-Manrope.txt).
