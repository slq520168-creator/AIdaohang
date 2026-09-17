# 导航站翻译方案（以后固定用这套）

## 为什么之前翻坏
1. `api/translate.js` 走非官方 Google `clients5.google.com/translate_a/t`，随时会断、乱码、英文残留。
2. 界面文案、工具名、对面翻译三套同时打开，一开页多个请求互相覆盖。
3. `app.js` 从旧 commit CDN 再拉一份，本地改了线上还是旧逻辑。

## 以后只用三层
| 层 | 内容 | 做法 |
|---|---|---|
| A 界面 | 按钮、标题、空状态 | `i18n.js` 静态词表 `data-i18n`，禁止现场机翻 |
| B 工具名 | 站点名、一句话 | 数据里预写 `name_zh/name_en/name_km`，缺失才回退英文 |
| C 对面说话 | 用户当场输入 | **只保一个**入口；结果本地缓存；不要跟 A/B 混用 |

## 页面接法
```html
<script src="./i18n.js"></script>
<h1 data-i18n="hello"></h1>
<button onclick="I18N.set('km')">ភាសាខ្មែរ</button>
```

语言优先：`?lang=km` > localStorage `yx_lang` > 浏览器语言。

## 禁止
- 禁止再用 clients5.google.com 翻界面。
- 禁止 index / tools / face-translate 各启一套语音+翻译。
- 禁止 app.js 再指向旧 SHA。
