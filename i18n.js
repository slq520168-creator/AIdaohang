/* static UI i18n */
(function (w) {
  var KEY = "yx_lang";
  var SUPPORTED = ["zh", "en", "km", "th", "vi", "id", "lo", "my", "ms", "hi", "si", "ta", "ja", "ko", "es"];
  var FALLBACK = "zh";
  var dict = {
    zh: { brand: "全球优选AI导航", hello: "你好，欢迎来到全球优选AI导航", enter: "进入主页", create: "图片 · 视频 · 音乐", search: "搜索工具", home: "首页", tools: "工具", translate: "面对面翻译", more: "更多", hot: "今日热点", all: "全部", loading: "加载中", empty: "没有结果", copy: "复制", open: "打开", rh: "网页出图 · RunningHub", rhsub: "工作流可用 · 有额度", transub: "语音 / 打字 / 拍照", draw: "出图", make: "创作", fraud: "防骗指南", allTools: "全部工具", themeD: "深色", themeL: "浅色", tab_pic: "图片", tab_novel: "小说", tab_movie: "电影", tab_soft: "软件", tab_xiaonuan: "小暖", tab_order: "接单", tab_near: "附近" , ft_tip: "按住话筒说话，松手发出", ft_speak: "播报", ft_photo: "拍照", ft_clear: "清空", ft_go: "翻译", xn_tip: "小暖是成人向聊天，只限年满 18 岁。", xn_ok: "我已满 18 岁", xn_no: "离开"},
    en: { brand: "AI Directory", hello: "Hello. Welcome to Global AI Directory.", enter: "Enter home", create: "Image · Video · Music", search: "Search tools", home: "Home", tools: "Tools", translate: "Translate", more: "More", hot: "Today picks", all: "All", loading: "Loading", empty: "No results", copy: "Copy", open: "Open", rh: "Web Image · RunningHub", rhsub: "Workflow ready", transub: "Voice / type / photo", draw: "Draw", make: "Create", fraud: "Scam", allTools: "All tools", themeD: "Dark", themeL: "Light", tab_pic: "Photos", tab_novel: "Novels", tab_movie: "Movies", tab_soft: "Apps", tab_xiaonuan: "Xiao Nuan", tab_order: "Gigs", tab_near: "Nearby", ft_tip: "Hold mic to talk, release to send", ft_speak: "Speak", ft_photo: "Photo", ft_clear: "Clear", ft_go: "Translate", xn_tip: "Xiao Nuan is adult chat. 18+ only.", xn_ok: "I am 18+", xn_no: "Leave"},
    km: { brand: "បញ្ជីឧបករណ៍ AI សកល", hello: "សួស្តី សូមស្វាគមន៍", enter: "ចូលទំព័រដើម", create: "រូប · វីដេអូ · តន្ត្រី", search: "ស្វែងរកឧបករណ៍", home: "ទំព័រដើម", tools: "ឧបករណ៍", translate: "បកប្រែផ្ទាល់មុខ", more: "ផ្សេងទៀត", hot: "ពេញនិយមថ្ងៃនេះ", all: "ទាំងអស់", loading: "កំពុងផ្ទុក", empty: "គ្មានលទ្ធផល", copy: "ចម្លង", open: "បើក", rh: "បង្កើតរូប · RunningHub", rhsub: "មាន workflow", transub: "សំឡេង / វាយ / ថត", draw: "បង្កើតរូប", make: "បង្កើត", fraud: "ការពារការបោកប្រាស់", allTools: "ឧបករណ៍ទាំងអស់", themeD: "ងងឹត", themeL: "ភ្លឺ", tab_pic: "រូប", tab_novel: "ប្រលោមលោក", tab_movie: "ភាពយន្ត", tab_soft: "កម្មវិធី", tab_xiaonuan: "ស៊ាវនួន", tab_order: "ការងារ", tab_near: "ក្បែរ" , ft_tip: "ចុចមីក្រូហ្វូននិយាយ រួចផ្ញើ", ft_speak: "និយាយ", ft_photo: "ថត", ft_clear: "សម្អាត", ft_go: "បកប្រែ", xn_tip: "ការជជែកសម្រាប់មនុស្សពេញវ័យ 18+ ប៉ុណ្ណោះ។", xn_ok: "ខ្ញុំមាន 18+", xn_no: "ចាកចេញ"}
  };
  /* v280: draw (本站出图) + video list pages; other languages inherit en below */
  Object.assign(dict.zh, { back: "返回", draw_title: "本站出图", draw_tip: "免费 Pollinations，不用登录、不用手机号、不用密钥。免费通道要排队，一般 30–60 秒；图片右下角带小水印。", draw_ph: "写提示词，中英文都可（英文效果更好）", draw_go: "生成", draw_wait: "生成中… {s} 秒（一般 30–60 秒）", draw_retry: "第一次没成功，自动重试中… {s} 秒", draw_done: "完成，用时 {s} 秒。长按图片可保存。", draw_fail: "生成失败：免费通道繁忙或超时，请过一分钟再点“生成”。", draw_empty: "请先写提示词", draw_save: "下载图片",
    vid_title: "免费做视频", vid_open: "打开", vid_login: "需注册 · 有免费额度", vid_nologin: "免登录 · 要排队 · 匿名额度很少",
    vid_n_jimeng: "即梦", vid_d_jimeng: "字节出品，文生视频、图生视频", vid_n_kling: "可灵", vid_d_kling: "快手出品，文生视频、图生视频", vid_n_hailuo: "海螺视频", vid_d_hailuo: "MiniMax 出品，文生视频、图生视频", vid_n_vidu: "Vidu", vid_d_vidu: "生数科技，图生视频、参考生视频", vid_n_wan: "通义万相", vid_d_wan: "阿里出品，文生视频、图生视频", vid_n_pixverse: "PixVerse", vid_d_pixverse: "文生视频、图生视频，特效模板多", vid_n_hfwan: "Wan2.2 (Hugging Face)", vid_d_hfwan: "开源模型在线演示，上传图片生成短视频", vid_n_hfltx: "LTX Video (Hugging Face)", vid_d_hfltx: "开源模型在线演示，文生视频、图生视频",
    create_vid_n: "免费视频网站", create_vid_t: "即梦、可灵、海螺等免费做视频。" });
  Object.assign(dict.en, { back: "Back", draw_title: "Free AI Image", draw_tip: "Free Pollinations: no login, no phone number, no key. The free queue usually takes 30–60 s; images carry a small watermark.", draw_ph: "Describe the image (English works best)", draw_go: "Generate", draw_wait: "Generating… {s} s (usually 30–60 s)", draw_retry: "First try failed, retrying… {s} s", draw_done: "Done in {s} s. Long-press the image to save.", draw_fail: "Failed: the free service is busy or timed out. Please try again in a minute.", draw_empty: "Please enter a prompt first", draw_save: "Download image",
    vid_title: "Free video makers", vid_open: "Open", vid_login: "Sign-up · free credits", vid_nologin: "No login · queue · small anonymous quota",
    vid_n_jimeng: "Dreamina (Jimeng)", vid_d_jimeng: "By ByteDance: text-to-video, image-to-video", vid_n_kling: "Kling AI", vid_d_kling: "By Kuaishou: text-to-video, image-to-video", vid_n_hailuo: "Hailuo AI", vid_d_hailuo: "By MiniMax: text-to-video, image-to-video", vid_n_vidu: "Vidu", vid_d_vidu: "By Shengshu: image-to-video, reference-to-video", vid_n_wan: "Wan (Tongyi)", vid_d_wan: "By Alibaba: text-to-video, image-to-video", vid_n_pixverse: "PixVerse", vid_d_pixverse: "Text/image-to-video with many effect templates", vid_n_hfwan: "Wan2.2 (Hugging Face)", vid_d_hfwan: "Open-source model demo: turn a photo into a short clip", vid_n_hfltx: "LTX Video (Hugging Face)", vid_d_hfltx: "Open-source model demo: text/image-to-video",
    create_vid_n: "Free video sites", create_vid_t: "Dreamina, Kling, Hailuo and more." });
  Object.assign(dict.km, { back: "ត្រឡប់", draw_title: "បង្កើតរូបឥតគិតថ្លៃ", draw_tip: "Pollinations ឥតគិតថ្លៃ៖ មិនបាច់ចូលគណនី មិនបាច់លេខទូរស័ព្ទ មិនបាច់ key។ ជួររង់ចាំឥតគិតថ្លៃ ជាធម្មតា 30–60 វិនាទី; រូបមានស្លាកតូច។", draw_ph: "សរសេរពណ៌នារូប (អង់គ្លេសល្អជាង)", draw_go: "បង្កើត", draw_wait: "កំពុងបង្កើត… {s} វិនាទី (ជាធម្មតា 30–60 វិនាទី)", draw_retry: "លើកទីមួយបរាជ័យ កំពុងសាកម្តងទៀត… {s} វិនាទី", draw_done: "រួចរាល់ក្នុង {s} វិនាទី។ ចុចឱ្យយូរលើរូបដើម្បីរក្សាទុក។", draw_fail: "បរាជ័យ៖ សេវាឥតគិតថ្លៃរវល់ ឬអស់ពេល។ សូមសាកម្តងទៀតក្រោយមួយនាទី។", draw_empty: "សូមសរសេរពណ៌នាជាមុនសិន", draw_save: "ទាញយករូប",
    vid_title: "បង្កើតវីដេអូឥតគិតថ្លៃ", vid_open: "បើក", vid_login: "ត្រូវចុះឈ្មោះ · មានក្រេឌីតឥតគិតថ្លៃ", vid_nologin: "មិនបាច់ចូល · ត្រូវរង់ចាំ · កូតាតិច",
    vid_n_jimeng: "Dreamina (Jimeng)", vid_d_jimeng: "ByteDance៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_kling: "Kling AI", vid_d_kling: "Kuaishou៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_hailuo: "Hailuo AI", vid_d_hailuo: "MiniMax៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_vidu: "Vidu", vid_d_vidu: "Shengshu៖ រូបទៅវីដេអូ", vid_n_wan: "Wan (Tongyi)", vid_d_wan: "Alibaba៖ អត្ថបទទៅវីដេអូ រូបទៅវីដេអូ", vid_n_pixverse: "PixVerse", vid_d_pixverse: "អត្ថបទ/រូបទៅវីដេអូ មានគំរូបែបផែនច្រើន", vid_n_hfwan: "Wan2.2 (Hugging Face)", vid_d_hfwan: "សាកល្បងម៉ូដែលកូដចំហ៖ រូបទៅវីដេអូខ្លី", vid_n_hfltx: "LTX Video (Hugging Face)", vid_d_hfltx: "សាកល្បងម៉ូដែលកូដចំហ៖ អត្ថបទ/រូបទៅវីដេអូ",
    create_vid_n: "គេហទំព័រវីដេអូឥតគិតថ្លៃ", create_vid_t: "Dreamina, Kling, Hailuo និងផ្សេងទៀត។" });
  var extra={
    th:{brand:"สารบบ AI ทั่วโลก",search:"ค้นหาเครื่องมือ",home:"หน้าแรก",tools:"เครื่องมือ",translate:"แปลต่อหน้า",more:"เพิ่มเติม",hot:"วันนี้",all:"ทั้งหมด",loading:"กำลังโหลด",empty:"ไม่มีผลลัพธ์",copy:"คัดลอก",open:"เปิด",draw:"สร้างภาพ",make:"สร้าง",fraud:"กันหลอก",allTools:"เครื่องมือทั้งหมด",themeD:"มืด",themeL:"สว่าง",tab_pic:"รูป",tab_novel:"นิยาย",tab_movie:"หนัง",tab_soft:"แอป",tab_xiaonuan:"เสี่ยวหน่วน",tab_order:"งาน",tab_near:"ใกล้เคียง",ft_tip:"กดไมค์ค้างเพื่อพูด ปล่อยเพื่อส่ง",ft_speak:"พูด",ft_photo:"ถ่าย",ft_clear:"ล้าง",ft_go:"แปล", xn_tip:"แชทผู้ใหญ่ 18+ เท่านั้น", xn_ok:"ฉันอายุ 18+", xn_no:"ออก"},
    vi:{brand:"Danh bạ AI toàn cầu",search:"Tìm công cụ",home:"Trang chủ",tools:"Công cụ",translate:"Dịch đối mặt",more:"Thêm",hot:"Hôm nay",all:"Tất cả",loading:"Đang tải",empty:"Không có kết quả",copy:"Sao chép",open:"Mở",draw:"Tạo ảnh",make:"Tạo",fraud:"Chống lừa",allTools:"Mọi công cụ",themeD:"Tối",themeL:"Sáng",tab_pic:"Ảnh",tab_novel:"Tiểu thuyết",tab_movie:"Phim",tab_soft:"Ứng dụng",tab_xiaonuan:"Tiểu Noãn",tab_order:"Việc",tab_near:"Gần đây",ft_tip:"Giữ mic để nói, thả để gửi",ft_speak:"Đọc",ft_photo:"Ảnh",ft_clear:"Xóa",ft_go:"Dịch", xn_tip:"Chat người lớn, chỉ 18+.", xn_ok:"Tôi đủ 18 tuổi", xn_no:"Rời"},
    id:{brand:"Direktori AI Global",search:"Cari alat",home:"Beranda",tools:"Alat",translate:"Terjemahan tatap muka",more:"Lainnya",hot:"Hari ini",all:"Semua",loading:"Memuat",empty:"Tidak ada hasil",copy:"Salin",open:"Buka",draw:"Gambar",make:"Buat",fraud:"Anti tipuan",allTools:"Semua alat",themeD:"Gelap",themeL:"Terang",tab_pic:"Foto",tab_novel:"Novel",tab_movie:"Film",tab_soft:"Aplikasi",tab_xiaonuan:"Xiao Nuan",tab_order:"Order",tab_near:"Terdekat",ft_tip:"Tahan mic untuk bicara, lepas untuk kirim",ft_speak:"Ucapkan",ft_photo:"Foto",ft_clear:"Hapus",ft_go:"Terjemahkan", xn_tip:"Obrolan dewasa, hanya 18+.", xn_ok:"Saya 18+", xn_no:"Keluar"},
    ms:{brand:"Direktori AI Global",search:"Cari alat",home:"Laman utama",tools:"Alat",translate:"Terjemahan bersemuka",more:"Lagi",hot:"Hari ini",all:"Semua",loading:"Memuatkan",empty:"Tiada hasil",copy:"Salin",open:"Buka",draw:"Lukis",make:"Cipta",fraud:"Anti scam",allTools:"Semua alat",themeD:"Gelap",themeL:"Cerah",tab_pic:"Foto",tab_novel:"Novel",tab_movie:"Filem",tab_soft:"Aplikasi",tab_xiaonuan:"Xiao Nuan",tab_order:"Kerja",tab_near:"Berdekatan",ft_tip:"Tahan mic untuk cakap, lepas untuk hantar",ft_speak:"Sebut",ft_photo:"Foto",ft_clear:"Kosongkan",ft_go:"Terjemah", xn_tip:"Sembang dewasa, 18+ sahaja.", xn_ok:"Saya 18+", xn_no:"Keluar"},
    lo:{brand:"ບັນຊີ AI ທົ່ວໂລກ",search:"ຄົ້ນຫາເຄື່ອງມື",home:"ໜ້າຫຼັກ",tools:"ເຄື່ອງມື",translate:"ແປຕໍ່ໜ້າ",more:"ເພີ່ມ",hot:"ມື້ນີ້",all:"ທັງໝົດ",loading:"ກຳລັງໂຫຼດ",empty:"ບໍ່ມີຜົນ",copy:"ສຳເນົາ",open:"ເປີດ",draw:"ແຕ້ມ",make:"ສ້າງ",fraud:"ກັນຫຼອກ",allTools:"ເຄື່ອງມືທັງໝົດ",themeD:"ມືດ",themeL:"ສະຫວ່າງ",tab_pic:"ຮູບ",tab_novel:"ນິຍາຍ",tab_movie:"ຮູບເງົາ",tab_soft:"ແອັບ",tab_xiaonuan:"ສ້ຽວໜວນ",tab_order:"ວຽກ",tab_near:"ໃກ້",ft_tip:"ກົດໄມຄ້າງເພື່ອເວົ້າ ປ່ອຍເພື່ອສົ່ງ",ft_speak:"ເວົ້າ",ft_photo:"ຖ່າຍ",ft_clear:"ລ້າງ",ft_go:"ແປ", xn_tip:"ສົນທະນາຜູ້ໃຫຍ່ 18+ ເທົ່ານັ້ນ.", xn_ok:"ຂ້ອຍອາຍຸ 18+", xn_no:"ອອກ"},
    my:{brand:"ကမ္ဘာလုံး AI လမ်းညွှန်",search:"ကိရိယာရှာ",home:"ပင်မ",tools:"ကိရိယာ",translate:"မျက်နှာချင်းဆိုင် ဘာသာပြန်",more:"ထပ်",hot:"ယနေ့",all:"အားလုံး",loading:"ဖွင့်နေသည်",empty:"ရလဒ်မရှိ",copy:"ကူး",open:"ဖွင့်",draw:"ပုံ",make:"ဖန်တီး",fraud:"လိမ်လည်မှုကာကွယ်",allTools:"ကိရိယာအားလုံး",themeD:"အမှောင်",themeL:"အလင်း",tab_pic:"ပုံ",tab_novel:"ဝတ္ထု",tab_movie:"ရုပ်ရှင်",tab_soft:"အက်ပ်",tab_xiaonuan:"ရှောင်နွမ်",tab_order:"အလုပ်",tab_near:"အနီး",ft_tip:"မိုက်ကိုဖိပြီးပြော၊ လွှတ်ပြီးပို့",ft_speak:"ပြော",ft_photo:"ဓာတ်ပုံ",ft_clear:"ရှင်း",ft_go:"ပြန်", xn_tip:"လူကြီးချတ်၊ ၁၈+ သာ။", xn_ok:"ကျွန်ုပ် ၁၈ နှစ်ပြည့်ပြီ", xn_no:"ထွက်"},
    hi:{brand:"ग्लोबल AI निर्देशिका",search:"टूल खोजें",home:"होम",tools:"टूल",translate:"आमने-सामने अनुवाद",more:"और",hot:"आज",all:"सभी",loading:"लोड हो रहा है",empty:"कोई परिणाम नहीं",copy:"कॉपी",open:"खोलें",draw:"चित्र",make:"बनाएँ",fraud:"धोखाधड़ी रोकें",allTools:"सभी टूल",themeD:"डार्क",themeL:"लाइट",tab_pic:"फ़ोटो",tab_novel:"उपन्यास",tab_movie:"फ़िल्म",tab_soft:"ऐप",tab_xiaonuan:"शियाओ नुआन",tab_order:"काम",tab_near:"पास",ft_tip:"बोलने के लिए माइक दबाएँ, भेजने के लिए छोड़ें",ft_speak:"बोलें",ft_photo:"फ़ोटो",ft_clear:"साफ़",ft_go:"अनुवाद", xn_tip:"वयस्क चैट, केवल 18+।", xn_ok:"मैं 18+ हूँ", xn_no:"छोड़ें"},
    si:{brand:"ගෝලීය AI නාමාවලිය",search:"මෙවලම් සොයන්න",home:"මුල් පිටුව",tools:"මෙවලම්",translate:"මුහුණට මුහුණ පරිවර්තනය",more:"තව",hot:"අද",all:"සියල්ල",loading:"පූරණය වේ",empty:"ප්‍රතිඵල නැත",copy:"පිටපත්",open:"අරින්න",draw:"ඇඳීම",make:"සාදන්න",fraud:"වංචා වැළැක්වීම",allTools:"සියලු මෙවලම්",themeD:"අඳුරු",themeL:"එළිය",tab_pic:"ඡායාරූප",tab_novel:"නවකතා",tab_movie:"චිත්‍රපට",tab_soft:"යෙදුම්",tab_xiaonuan:"ෂියාඔ නුආන්",tab_order:"වැඩ",tab_near:"අසල",ft_tip:"කතා කිරීමට මයික් අල්ලන්න, යැවීමට අතහරින්න",ft_speak:"කියන්න",ft_photo:"ඡායාරූප",ft_clear:"මකන්න",ft_go:"පරිවර්තනය", xn_tip:"වැඩිහිටි කතාබහ, 18+ පමණි.", xn_ok:"මම 18+", xn_no:"ඉවත්"},
    ta:{brand:"உலக AI அடைவு",search:"கருவி தேடு",home:"முகப்பு",tools:"கருவிகள்",translate:"நேருக்கு நேர் மொழிபெயர்ப்பு",more:"மேலும்",hot:"இன்று",all:"அனைத்தும்",loading:"ஏற்றுகிறது",empty:"முடிவு இல்லை",copy:"நகல்",open:"திற",draw:"படம்",make:"உருவாக்கு",fraud:"மோசடி தடுப்பு",allTools:"அனைத்து கருவிகள்",themeD:"இருள்",themeL:"ஒளி",tab_pic:"படம்",tab_novel:"நாவல்",tab_movie:"திரைப்படம்",tab_soft:"செயலி",tab_xiaonuan:"ஷியாவ் நுவான்",tab_order:"வேலை",tab_near:"அருகில்",ft_tip:"பேச மைக்கை அழுத்து, அனுப்ப விடு",ft_speak:"பேசு",ft_photo:"புகைப்படம்",ft_clear:"அழி",ft_go:"மொழிபெயர்", xn_tip:"பெரியோர் அரட்டை, 18+ மட்டும்.", xn_ok:"எனக்கு 18+", xn_no:"வெளியே"},
    ja:{brand:"グローバルAIナビ",search:"ツール検索",home:"ホーム",tools:"ツール",translate:"対面翻訳",more:"もっと",hot:"今日",all:"すべて",loading:"読み込み中",empty:"結果なし",copy:"コピー",open:"開く",draw:"画像",make:"作成",fraud:"詐欺注意",allTools:"すべてのツール",themeD:"ダーク",themeL:"ライト",tab_pic:"画像",tab_novel:"小説",tab_movie:"映画",tab_soft:"アプリ",tab_xiaonuan:"シャオヌアン",tab_order:"受注",tab_near:"近く",ft_tip:"マイクを押して話す、離して送信",ft_speak:"読み上げ",ft_photo:"写真",ft_clear:"消去",ft_go:"翻訳", xn_tip:"成人向けチャット。18歳以上のみ。", xn_ok:"18歳以上です", xn_no:"離れる"},
    ko:{brand:"글로벌 AI 내비게이션",search:"도구 검색",home:"홈",tools:"도구",translate:"대면 번역",more:"더보기",hot:"오늘",all:"전체",loading:"불러오는 중",empty:"결과 없음",copy:"복사",open:"열기",draw:"이미지",make:"만들기",fraud:"사기 예방",allTools:"모든 도구",themeD:"다크",themeL:"라이트",tab_pic:"사진",tab_novel:"소설",tab_movie:"영화",tab_soft:"앱",tab_xiaonuan:"샤오누안",tab_order:"수주",tab_near:"근처",ft_tip:"마이크를 눌러 말하고 놓아 전송",ft_speak:"읽기",ft_photo:"사진",ft_clear:"지우기",ft_go:"번역", xn_tip:"성인 채팅. 18세 이상만.", xn_ok:"18세 이상입니다", xn_no:"나가기"},
    es:{brand:"Directorio AI global",search:"Buscar herramientas",home:"Inicio",tools:"Herramientas",translate:"Traducción cara a cara",more:"Más",hot:"Hoy",all:"Todo",loading:"Cargando",empty:"Sin resultados",copy:"Copiar",open:"Abrir",draw:"Imagen",make:"Crear",fraud:"Antifraude",allTools:"Todas las herramientas",themeD:"Oscuro",themeL:"Claro",tab_pic:"Fotos",tab_novel:"Novelas",tab_movie:"Cine",tab_soft:"Apps",tab_xiaonuan:"Xiao Nuan",tab_order:"Encargos",tab_near:"Cerca",ft_tip:"Mantén el micrófono para hablar, suelta para enviar",ft_speak:"Leer",ft_photo:"Foto",ft_clear:"Borrar",ft_go:"Traducir", xn_tip:"Chat para adultos. Solo 18+.", xn_ok:"Tengo 18+", xn_no:"Salir"}
  };
  Object.keys(extra).forEach(function(code){ dict[code]=Object.assign({}, dict.en, extra[code]); });
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
