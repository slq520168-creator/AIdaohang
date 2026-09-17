/* static UI i18n */
(function (w) {
  var KEY = "yx_lang";
  var SUPPORTED = ["zh", "en", "km", "th", "vi", "id", "lo", "my", "ms", "hi", "si", "ta", "ja", "ko", "es"];
  var FALLBACK = "en";
  var dict = {
    zh: { brand: "全球优选AI导航", hello: "你好，欢迎来到全球优选AI导航", enter: "进入主页", create: "图片 · 视频 · 音乐", search: "搜索工具", home: "首页", tools: "工具", translate: "面对面翻译", more: "更多", hot: "热门", all: "全部", loading: "加载中", empty: "没有结果", copy: "复制", open: "打开", rh: "网页出图 · RunningHub", rhsub: "工作流可用 · 有额度", transub: "语音 / 打字 / 拍照", draw: "出图", make: "创作", fraud: "防骗指南", allTools: "全部工具" },
    en: { brand: "Global AI Directory", hello: "Hello. Welcome to Global AI Directory.", enter: "Enter home", create: "Image · Video · Music", search: "Search tools", home: "Home", tools: "Tools", translate: "Face translate", more: "More", hot: "Hot", all: "All", loading: "Loading", empty: "No results", copy: "Copy", open: "Open", rh: "Web Image · RunningHub", rhsub: "Workflow ready", transub: "Voice / type / photo", draw: "Draw", make: "Create", fraud: "Scam guide", allTools: "All tools" },
    km: { brand: "ថតហកសារ AI សកល", hello: "សួស្តី សូមស្វាគមន៍", enter: "ចូលទំព័រដើម", create: "រូប · វីដេអូ · តន្ត្រី", search: "ស្វែងរកហបករ៎ន៍", home: "ទំព័រដើម", tools: "ឧបករ៎ន៍", translate: "បកប្រែផ្តាំផ្ទាល់មុខ", more: "ផ្សេងទ័ត", hot: "ពេញនិយម", all: "ទាងអស់", loading: "កំពុងផ្ទុក", empty: "គ្មានលទ្ធផល", copy: "ចម្លង", open: "បើក", rh: "បង្កើតរូប · RunningHub", rhsub: "មាន workflow", transub: "សំឡេង / វាយ / ថត", draw: "បង្កើតរូប", make: "បង្កើត", fraud: "ការពារក្លែង", allTools: "ឧបករ៎ន៍ទាងអស់" }
  };
  dict.th = dict.en; dict.vi = dict.en; dict.ja = dict.en; dict.ko = dict.en; dict.es = dict.en; dict.id = dict.en;
  dict.lo = dict.en; dict.my = dict.en; dict.ms = dict.en; dict.hi = dict.en; dict.si = dict.en; dict.ta = dict.en;
  function norm(l) {
    l = String(l || "").toLowerCase().split("-")[0];
    return SUPPORTED.indexOf(l) >= 0 ? l : FALLBACK;
  }
  function detect() {
    var q = new URLSearchParams(w.location.search).get("lang");
    if (q) return norm(q);
    try { var s = localStorage.getItem(KEY); if (s) return norm(s); } catch (e) {}
    return norm(navigator.language || "en");
  }
  function t(key) {
    var pack = dict[I18N.lang] || dict[FALLBACK];
    return pack[key] || dict.zh[key] || key;
  }
  function apply(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    (root || document).querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    document.documentElement.lang = I18N.lang;
  }
  var I18N = {
    lang: detect(),
    t: t,
    apply: apply,
    set: function (lang) {
      I18N.lang = norm(lang);
      try { localStorage.setItem(KEY, I18N.lang); } catch (e) {}
      apply(document);
    },
    supported: SUPPORTED
  };
  w.I18N = I18N;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(document); });
  else apply(document);
})(window);
