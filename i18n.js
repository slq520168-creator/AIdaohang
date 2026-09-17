/* 导航站唯一 i18n。界面用静态词表，不走现场谷歌。
   用法：html 加 data-i18n="key" ，切语言 I18N.set('km')
*/
(function (w) {
  var KEY = "yx_lang";
  var SUPPORTED = ["zh", "en", "km", "th", "vi", "id", "lo", "my", "ms", "hi", "si", "ta", "ja", "ko", "es"];
  var FALLBACK = "en";
  var dict = {
    zh: { brand: "全球优选AI导航", hello: "你好，欢迎来到全球优选AI导航", enter: "进入主页", create: "图片 · 视频 · 音乐", search: "搜索工具", home: "首页", tools: "工具", translate: "面对面翻译", more: "更多", hot: "热门", all: "全部", loading: "加载中", empty: "没有结果", copy: "复制", open: "打开" },
    en: { brand: "Global AI Directory", hello: "Hello. Welcome to Global AI Directory.", enter: "Enter home", create: "Image · Video · Music", search: "Search tools", home: "Home", tools: "Tools", translate: "Face translate", more: "More", hot: "Hot", all: "All", loading: "Loading", empty: "No results", copy: "Copy", open: "Open" },
    km: { brand: "ថតហកសារ AI សកល", hello: "សួស្តី សូមស្វាគមន៍", enter: "ចូលទំព័រដើម", create: "រូប · វីដេអូ · តន្ត្រី", search: "ស្វែងរកហបករ៎ន៍", home: "ទំព័រដើម", tools: "ឧបករ៎ន៍", translate: "បកប្រែផ្តាំផ្ទាល់មុខ", more: "ផ្សេងទ័ត", hot: "ពេញនិយម", all: "ទាងអស់", loading: "កំពុងផ្ទុក", empty: "គ្មានលទ្ធផល", copy: "ចម្លង", open: "បើក" },
    th: { brand: "ไดเรกทอรี AI โลก", hello: "สวัสดี ยินดีต้อนรับ", enter: "เข้าหน้าแรก", create: "รูป · วิดีโอ · เพลง", search: "ค้นหาเครื่องมือ", home: "หน้าแรก", tools: "เครื่องมือ", translate: "แปลตัวต่อตัว", more: "เพิ่มเติม", hot: "ยอดนิยม", all: "ทั้งหมด", loading: "กำลังโหลด", empty: "ไม่มีผลลัพธ์", copy: "คัดลอก", open: "เปิด" },
    vi: { brand: "Thư mục AI toàn cầu", hello: "Xin chào. Chào mừng.", enter: "Vào trang chủ", create: "Ảnh · Video · Nhạc", search: "Tìm công cụ", home: "Trang chủ", tools: "Công cụ", translate: "Dịch đối mặt", more: "Thêm", hot: "Nổi bật", all: "Tất cả", loading: "Đang tải", empty: "Không có kết quả", copy: "Sao chép", open: "Mở" },
    ja: { brand: "グローバルAIナビ", hello: "こんにちは。ようこそ。", enter: "ホームへ", create: "画像・動画・音楽", search: "ツール検索", home: "ホーム", tools: "ツール", translate: "対面翻訳", more: "もっと", hot: "人気", all: "すべて", loading: "読み込み中", empty: "結果なし", copy: "コピー", open: "開く" },
    ko: { brand: "글로벌 AI 디렉터리", hello: "안녕하세요. 환영합니다.", enter: "홈 들어가기", create: "이미지 · 영상 · 음악", search: "도구 검색", home: "홈", tools: "도구", translate: "대면 번역", more: "더보기", hot: "인기", all: "전체", loading: "로딩", empty: "결과 없음", copy: "복사", open: "열기" },
    es: { brand: "Directorio Global de IA", hello: "Hola. Bienvenido.", enter: "Entrar", create: "Imagen · Vídeo · Música", search: "Buscar herramientas", home: "Inicio", tools: "Herramientas", translate: "Traducir cara a cara", more: "Más", hot: "Popular", all: "Todo", loading: "Cargando", empty: "Sin resultados", copy: "Copiar", open: "Abrir" },
    id: { brand: "Direktori AI Global", hello: "Halo. Selamat datang.", enter: "Masuk beranda", create: "Gambar · Video · Musik", search: "Cari alat", home: "Beranda", tools: "Alat", translate: "Terjemah tatap muka", more: "Lainnya", hot: "Populer", all: "Semua", loading: "Memuat", empty: "Tidak ada hasil", copy: "Salin", open: "Buka" }
  };
  dict.lo = dict.en; dict.my = dict.en; dict.ms = dict.id; dict.hi = dict.en; dict.si = dict.en; dict.ta = dict.en;
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
