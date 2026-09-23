/* static UI i18n */
(function (w) {
  var KEY = "yx_lang";
  var SUPPORTED = ["zh", "en", "km", "th", "vi", "id", "lo", "my", "ms", "hi", "si", "ta", "ja", "ko", "es"];
  var FALLBACK = "en";
  var dict = {
    zh: { brand: "全球优选AI导航", hello: "你好，欢迎来到全球优选AI导航", enter: "进入主页", create: "图片 · 视频 · 音乐", search: "搜索工具", home: "首页", tools: "工具", translate: "面对面翻译", more: "更多", hot: "今日热点", all: "全部", loading: "加载中", empty: "没有结果", copy: "复制", open: "打开", rh: "网页出图 · RunningHub", rhsub: "工作流可用 · 有额度", transub: "语音 / 打字 / 拍照", draw: "出图", make: "创作", fraud: "防骗指南", allTools: "全部工具", themeD: "深色", themeL: "浅色", tab_pic: "图片", tab_novel: "小说", tab_movie: "电影", tab_soft: "软件", tab_order: "接单", tab_near: "附近", toolsCount: " 款", hitCount: " 条" , ft_tip: "按住话筒说话，松手发出", ft_speak: "播报", ft_photo: "拍照", ft_clear: "清空", ft_go: "翻译"},
    en: { brand: "AI Directory", hello: "Hello. Welcome to Global AI Directory.", enter: "Enter home", create: "Image · Video · Music", search: "Search tools", home: "Home", tools: "Tools", translate: "Translate", more: "More", hot: "Today picks", all: "All", loading: "Loading", empty: "No results", copy: "Copy", open: "Open", rh: "Web Image · RunningHub", rhsub: "Workflow ready", transub: "Voice / type / photo", draw: "Draw", make: "Create", fraud: "Scam", allTools: "All tools", themeD: "Dark", themeL: "Light", tab_pic: "Photos", tab_novel: "Novels", tab_movie: "Movies", tab_soft: "Apps", tab_order: "Gigs", tab_near: "Nearby", toolsCount: " tools", hitCount: " items", ft_tip: "Hold mic to talk, release to send", ft_speak: "Speak", ft_photo: "Photo", ft_clear: "Clear", ft_go: "Translate"},
    km: { brand: "ថតហកសារ AI សកល", hello: "សួស្តី សូមស្វាគមន៍", enter: "ចូលទំព័រដើម", create: "រូប · វីដេអូ · តន្ត្រី", search: "ស្វែងរកហបករ៎ន៍", home: "ទំព័រដើម", tools: "ឧបករ៎ន៍", translate: "បកប្រែផ្តាំផ្ទាល់មុខ", more: "ផ្សេងទ័ត", hot: "ពេញនិយមថ្ងៃនេះ", all: "ទាងអស់", loading: "កំពុងផ្ទុក", empty: "គ្មានលទ្ធផល", copy: "ចម្លង", open: "បើក", rh: "បង្កើតរូប · RunningHub", rhsub: "មាន workflow", transub: "សំឡេង / វាយ / ថត", draw: "បង្កើតរូប", make: "បង្កើត", fraud: "ការពារក្លែង", allTools: "ឧបករ៎ន៍ទាងអស់", themeD: "ងងឹត", themeL: "ភ្លឺ", tab_pic: "រូប", tab_novel: "ប្រលោមលោក", tab_movie: "ភាពយន្ត", tab_soft: "កម្មវិធី", tab_order: "ការងារ", tab_near: "ក្បែរ", toolsCount: "", hitCount: "" , ft_tip: "ចុចមីក្រូហ្វូននិយាយ រួចផ្ញើ", ft_speak: "និយាយ", ft_photo: "ថត", ft_clear: "សម្អាត", ft_go: "បកប្រែ"}
  };
  dict.th = Object.assign({}, dict.en); dict.vi = Object.assign({}, dict.en); dict.ja = Object.assign({}, dict.en); dict.ko = Object.assign({}, dict.en); dict.es = Object.assign({}, dict.en); dict.id = Object.assign({}, dict.en);
  dict.lo = Object.assign({}, dict.en); dict.my = Object.assign({}, dict.en); dict.ms = Object.assign({}, dict.en); dict.hi = Object.assign({}, dict.en); dict.si = Object.assign({}, dict.en); dict.ta = Object.assign({}, dict.en);
  function norm(l) {
    l = String(l || "").toLowerCase().split("-")[0];
    if (l === "tl") l = "en";
    return SUPPORTED.indexOf(l) >= 0 ? l : FALLBACK;
  }
  function detect() {
    var q = new URLSearchParams(w.location.search).get("lang");
    if (q) return norm(q);
    try {
      var y = localStorage.getItem(KEY); if (y) return norm(y);
      var s = localStorage.getItem("lang"); if (s) return norm(s);
    } catch (e) {}
    return norm(navigator.language || "en");
  }
  function t(key) {
    var pack = dict[I18N.lang] || dict[FALLBACK];
    if (pack && Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
    if (dict.en && Object.prototype.hasOwnProperty.call(dict.en, key)) return dict.en[key];
    if (dict.zh && Object.prototype.hasOwnProperty.call(dict.zh, key)) return dict.zh[key];
    return key;
  }
  function apply(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    (root || document).querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    document.documentElement.lang = I18N.lang === "zh" ? "zh-CN" : I18N.lang;
  }
  var I18N = {
    lang: detect(),
    t: t,
    apply: apply,
    set: function (lang) {
      I18N.lang = norm(lang);
      try {
        localStorage.setItem(KEY, I18N.lang);
        localStorage.setItem("lang", I18N.lang);
      } catch (e) {}
      apply(document);
      if (typeof w.setAidLang === "function") w.setAidLang(I18N.lang);
    },
    supported: SUPPORTED
  };
  try { localStorage.setItem(KEY, I18N.lang); localStorage.setItem("lang", I18N.lang); } catch (e) {}
  w.I18N = I18N;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(document); });
  else apply(document);
})(window);
