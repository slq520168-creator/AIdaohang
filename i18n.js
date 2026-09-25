/* static UI i18n */
(function (w) {
  var KEY = "yx_lang";
  var SUPPORTED = ["zh", "en", "km", "th", "vi", "id", "lo", "my", "ms", "hi", "si", "ta", "ja", "ko", "es"];
  var FALLBACK = "zh";
  var dict = {
    zh: { brand: "全球优选AI导航", hello: "你好，欢迎来到全球优选AI导航", enter: "进入主页", create: "图片 · 视频 · 音乐", search: "搜索工具", home: "首页", tools: "工具", translate: "面对面翻译", more: "更多", hot: "今日热点", all: "全部", loading: "加载中", empty: "没有结果", copy: "复制", open: "打开", rh: "网页出图 · RunningHub", rhsub: "工作流可用 · 有额度", transub: "语音 / 打字 / 拍照", draw: "出图", make: "创作", fraud: "防骗指南", allTools: "全部工具", themeD: "深色", themeL: "浅色", tab_pic: "图片", tab_novel: "小说", tab_movie: "电影", tab_soft: "软件", tab_xiaonuan: "小暖", tab_order: "接单", tab_near: "附近", toolsCount: " 款", hitCount: " 条" , ft_tip: "按住话筒说话，松手发出", ft_speak: "播报", ft_photo: "拍照", ft_clear: "清空", ft_go: "翻译"},
    en: { brand: "AI Directory", hello: "Hello. Welcome to Global AI Directory.", enter: "Enter home", create: "Image · Video · Music", search: "Search tools", home: "Home", tools: "Tools", translate: "Translate", more: "More", hot: "Today picks", all: "All", loading: "Loading", empty: "No results", copy: "Copy", open: "Open", rh: "Web Image · RunningHub", rhsub: "Workflow ready", transub: "Voice / type / photo", draw: "Draw", make: "Create", fraud: "Scam", allTools: "All tools", themeD: "Dark", themeL: "Light", tab_pic: "Photos", tab_novel: "Novels", tab_movie: "Movies", tab_soft: "Apps", tab_xiaonuan: "Xiao Nuan", tab_order: "Gigs", tab_near: "Nearby", toolsCount: " tools", hitCount: " items", ft_tip: "Hold mic to talk, release to send", ft_speak: "Speak", ft_photo: "Photo", ft_clear: "Clear", ft_go: "Translate"},
    km: { brand: "ឧតហកសារ AI សកល", hello: "សួស្តី សូមស្វាគមណ៍", enter: "ចូលទំព័រដើម", create: "រូប · វីដេអូ · តន្ត្រី", search: "ស្វែងរកហបករ័ន៍", home: "ទំព័រដើម", tools: "ឧបករ័ន៍", translate: "បកប្រែផ្តាំផ្ទាល់មុខ", more: "ផ្សេងទ័ត", hot: "ពេញនិយមឰ្ងៃនេះ", all: "ទាងអោស", loading: "កំពុងផ្ទុក", empty: "គ្មានលទ្ធផល", copy: "ចម្លង", open: "បើក", rh: "បង្កើតរូប · RunningHub", rhsub: "មាន workflow", transub: "សំឡេង / វាយ / ឧត", draw: "បង្កើតរូប", make: "បង្កើត", fraud: "ការពារក្លែង", allTools: "ឧបករ័ន៍ទាងអោស", themeD: "ងងឹត", themeL: "ភ្លឺ", tab_pic: "រូប", tab_novel: "ប្រលោមលោក", tab_movie: "ភាពយន្ត", tab_soft: "កម្មវិធី", tab_xiaonuan: "ស៊ាវនួន", tab_order: "ការងារ", tab_near: "ក្បែរ", toolsCount: "", hitCount: "" , ft_tip: "ចុចមីក្រូហ្វូននិយាយ រួចផ្ញើ", ft_speak: "និយាយ", ft_photo: "ឧត", ft_clear: "សម្អាត", ft_go: "បកប្រែ"}
  };
  /* v280: draw (本站出图) + video list pages; other languages inherit en below */
  Object.assign(dict.zh, { back: "返回", draw_title: "本站出图", draw_tip: "免费 Pollinations，不用登录、不用手机号、不用密钥。免费通道要排队，一般 30–60 秒；图片右下角带小水印。", draw_ph: "写提示词，中英文都可（英文效果更好）", draw_go: "生成", draw_wait: "生成中… {s} 秒（一般 30–60 秒）", draw_retry: "第一次没成功，自动重试中… {s} 秒", draw_done: "完成，用时 {s} 秒。长按图片可保存。", draw_fail: "生成失败：免费通道繁忙或超时，请过一分钟再点“生成”。", draw_empty: "请先写提示词", draw_save: "下载图片",
    vid_title: "免费做视频", vid_intro: "说明：目前没有“免登录、免密钥、能直接在本站里生成”的免费视频接口（Pollinations 视频要密钥，Hugging Face 匿名额度常常用完）。下面是能免费做视频的正规网站，点“打开”在新窗口使用。", vid_open: "打开", vid_login: "需注册 · 有免费额度", vid_nologin: "免登录 · 要排队 · 匿名额度很少",
    vid_n_jimeng: "即梦", vid_d_jimeng: "字节出品，文生视频、图生视频", vid_n_kling: "可灵", vid_d_kling: "快手出品，文生视频、图生视频", vid_n_hailuo: "海螺视频", vid_d_hailuo: "MiniMax 出品，文生视频、图生视频", vid_n_vidu: "Vidu", vid_d_vidu: "生数科技，图生视频、参考生视频", vid_n_wan: "通义万相", vid_d_wan: "阿里出品，文生视频、图生视频", vid_n_pixverse: "PixVerse", vid_d_pixverse: "文生视频、图生视频，特效模板多", vid_n_hfwan: "Wan2.2 (Hugging Face)", vid_d_hfwan: "开源模型在线演示，上传图片生成短视频", vid_n_hfltx: "LTX Video (Hugging Face)", vid_d_hfltx: "开源模型在线演示，文生视频、图生视频",
    create_vid_n: "免费视频网站", create_vid_t: "即梦、可灵、海螺等免费做视频入口，新窗口打开。" });
  Object.assign(dict.en, { back: "Back", draw_title: "Free AI Image", draw_tip: "Free Pollinations: no login, no phone number, no key. The free queue usually takes 30–60 s; images carry a small watermark.", draw_ph: "Describe the image (English works best)", draw_go: "Generate", draw_wait: "Generating… {s} s (usually 30–60 s)", draw_retry: "First try failed, retrying… {s} s", draw_done: "Done in {s} s. Long-press the image to save.", draw_fail: "Failed: the free service is busy or timed out. Please try again in a minute.", draw_empty: "Please enter a prompt first", draw_save: "Download image",
    vid_title: "Free video makers", vid_intro: "Note: there is currently no free video API that works without login or key directly on this site (Pollinations video needs a key; Hugging Face anonymous quota is often used up). These real sites let you make videos for free — tap Open to use them in a new tab.", vid_open: "Open", vid_login: "Sign-up · free credits", vid_nologin: "No login · queue · small anonymous quota",
    vid_n_jimeng: "Dreamina (Jimeng)", vid_d_jimeng: "By ByteDance: text-to-video, image-to-video", vid_n_kling: "Kling AI", vid_d_kling: "By Kuaishou: text-to-video, image-to-video", vid_n_hailuo: "Hailuo AI", vid_d_hailuo: "By MiniMax: text-to-video, image-to-video", vid_n_vidu: "Vidu", vid_d_vidu: "By Shengshu: image-to-video, reference-to-video", vid_n_wan: "Wan (Tongyi)", vid_d_wan: "By Alibaba: text-to-video, image-to-video", vid_n_pixverse: "PixVerse", vid_d_pixverse: "Text/image-to-video with many effect templates", vid_n_hfwan: "Wan2.2 (Hugging Face)", vid_d_hfwan: "Open-source model demo: turn a photo into a short clip", vid_n_hfltx: "LTX Video (Hugging Face)", vid_d_hfltx: "Open-source model demo: text/image-to-video",
    create_vid_n: "Free video sites", create_vid_t: "Dreamina, Kling, Hailuo and more — opens in a new tab." });
  Object.assign(dict.km, { back: "ត្រឡប់", draw_title: "បង្កើតរូបឥតគិតថ្លៃ", draw_tip: "Pollinations ឥតគិតថ្លៃ៖ មិនបាច់ចូលគណនី មិនបាច់លេខទូរស័ព្ទ មិនបាច់ key។ ជួររង់ចាំឥតគិតថ្លៃ ជាធម្មតា 30–60 វិនាទី; រូបមានស្លាកតូច។", draw_ph: "សរសេរពណ៌នារូប (អង់គ្លេសល្អជាង)", draw_go: "បង្កើត", draw_wait: "កំពុងបង្កើត… {s} វិនាទី (ជាធម្មតា 30–60 វិនាទី)", draw_retry: "លើកទីមួយបរាជ័យ កំពុងសាកម្តងទៀត… {s} វិនាទី", draw_done: "រួចរាល់ក្នុង {s} វិនាទី។ ចុចឱ្យយូរលើរូបដើម្បីរក្សាទុក។", draw_fail: "បរាជ័យ៖ សេវាឥតគិតថ្លៃរវល់ ឬអស់ពេល។ សូមសាកម្តងទៀតក្រោយមួយនាទី។", draw_empty: "សូមសរសេរពណ៌នាជាមុនសិន", draw_save: "ទាញយករូប",
    vid_title: "បង្កើតវីដេអូឥតគិតថ្លៃ", vid_intro: "ចំណាំ៖ បច្ចុប្បន្នមិនមាន API វីដេអូឥតគិតថ្លៃ ដែលប្រើបានដោយមិនចូលគណនី ឬគ្មាន key នៅលើគេហទំព័រនេះទេ។ គេហទំព័រពិតខាងក្រោមអាចបង្កើតវីដេអូឥតគិតថ្លៃ — ចុច «បើក» ដើម្បីប្រើក្នុងផ្ទាំងថ្មី។", vid_open: "បើក", vid_login: "ត្រូវចុះឈ្មោះ · មានក្រេឌីតឥតគិតថ្លៃ", vid_nologin: "មិនបាច់ចូល · ត្រូវរង់ចាំ · កូតាតិច",
    vid_n_jimeng: "Dreamina (Jimeng)", vid_d_jimeng: "ByteDance៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_kling: "Kling AI", vid_d_kling: "Kuaishou៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_hailuo: "Hailuo AI", vid_d_hailuo: "MiniMax៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_vidu: "Vidu", vid_d_vidu: "Shengshu៖ រូបទៅវីដេអូ", vid_n_wan: "Wan (Tongyi)", vid_d_wan: "Alibaba៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_pixverse: "PixVerse", vid_d_pixverse: "អត្ថបទ/រូបទៅវីដេអូ មានគំរូបែបផែនច្រើន", vid_n_hfwan: "Wan2.2 (Hugging Face)", vid_d_hfwan: "សាកល្បងម៉ូដែលកូដចំហ៖ រូបទៅវីដេអូខ្លី", vid_n_hfltx: "LTX Video (Hugging Face)", vid_d_hfltx: "សាកល្បងម៉ូដែលកូដចំហ៖ អត្ថបទ/រូបទៅវីដេអូ",
    create_vid_n: "គេហទំព័រវីដេអូឥតគិតថ្លៃ", create_vid_t: "Dreamina, Kling, Hailuo និងផ្សេងទៀត — បើកក្នុងផ្ទាំងថ្មី។" });
  dict.th = Object.assign({}, dict.en); dict.vi = Object.assign({}, dict.en); dict.ja = Object.assign({}, dict.en); dict.ko = Object.assign({}, dict.en); dict.es = Object.assign({}, dict.en); dict.id = Object.assign({}, dict.en);
  dict.lo = Object.assign({}, dict.en); dict.my = Object.assign({}, dict.en); dict.ms = Object.assign({}, dict.en); dict.hi = Object.assign({}, dict.en); dict.si = Object.assign({}, dict.en); dict.ta = Object.assign({}, dict.en);
  dict.ja.tab_xiaonuan = "シャオヌアン"; dict.ko.tab_xiaonuan = "샤오누안"; dict.th.tab_xiaonuan = "เสี่ยวหน่วน"; dict.vi.tab_xiaonuan = "Tiểu Noãn"; dict.lo.tab_xiaonuan = "ສ້ຽວໜວນ"; dict.my.tab_xiaonuan = "ရှောင်နွမ်"; dict.hi.tab_xiaonuan = "शियाओ नुआन"; dict.si.tab_xiaonuan = "ෂියාඔ නුආන්"; dict.ta.tab_xiaonuan = "ஷியாவ் நுவான்"; dict.id.tab_xiaonuan = "Xiao Nuan"; dict.ms.tab_xiaonuan = "Xiao Nuan"; dict.es.tab_xiaonuan = "Xiao Nuan";
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
    return "zh";
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
      if (typeof w.paintTabs === "function") w.paintTabs();
    },
    supported: SUPPORTED
  };
  try { localStorage.setItem(KEY, I18N.lang); localStorage.setItem("lang", I18N.lang); } catch (e) {}
  w.I18N = I18N;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(document); });
  else apply(document);
})(window);
