(function(){
  var LANGS=[['en','EN'],['zh','ZH'],['km','KM'],['th','TH'],['vi','VI'],['ja','JA'],['ko','KO'],['id','ID'],['es','ES'],['fr','FR'],['pt','PT'],['de','DE'],['ru','RU'],['ar','AR']];
  var CH={
    en:{brand:'Global AI Directory',hot:'Today picks',all:'All tools',close:'Close',themeD:'Dark',themeL:'Light'},
    zh:{brand:'全球优选AI导航',hot:'今日热点',all:'全部工具',close:'关闭',themeD:'深色',themeL:'浅色'},
    km:{brand:'Global AI Directory',hot:'Hangsai thngai nih',all:'Kor krup',close:'Bonghaos',themeD:'Phet',themeL:'Sral'},
    th:{brand:'Global AI Directory',hot:'ยอดนิยมวันนี้',all:'เครื่องมือทั้งหมด',close:'ปิด',themeD:'มืด',themeL:'สว่าง'},
    vi:{brand:'Global AI Directory',hot:'Chọn hôm nay',all:'Tất cả công cụ',close:'Đóng',themeD:'Tối',themeL:'Sáng'},
    ja:{brand:'Global AI Directory',hot:'今日のピック',all:'すべてのツール',close:'閉じる',themeD:'ダーク',themeL:'ライト'},
    ko:{brand:'Global AI Directory',hot:'오늘 선택',all:'전체 도구',close:'닫기',themeD:'다크',themeL:'라이트'},
    id:{brand:'Global AI Directory',hot:'Pilihan hari ini',all:'Semua alat',close:'Tutup',themeD:'Gelap',themeL:'Terang'},
    es:{brand:'Global AI Directory',hot:'Hoy',all:'Todas las herramientas',close:'Cerrar',themeD:'Oscuro',themeL:'Claro'},
    fr:{brand:'Global AI Directory',hot:'Choix du jour',all:'Tous les outils',close:'Fermer',themeD:'Sombre',themeL:'Clair'},
    pt:{brand:'Global AI Directory',hot:'Hoje',all:'Todas as ferramentas',close:'Fechar',themeD:'Escuro',themeL:'Claro'},
    de:{brand:'Global AI Directory',hot:'Heute',all:'Alle Tools',close:'Schließen',themeD:'Dunkel',themeL:'Hell'},
    ru:{brand:'Global AI Directory',hot:'Сегодня',all:'Все инструменты',close:'Закрыть',themeD:'Тёмная',themeL:'Светлая'},
    ar:{brand:'Global AI Directory',hot:'اليوم',all:'كل الأدوات',close:'إغلاق',themeD:'داكن',themeL:'فاتح'},
    ms:{brand:'Global AI Directory',hot:'Pilihan hari ini',all:'Semua alat',close:'Tutup',themeD:'Gelap',themeL:'Cerah'},
    lo:{brand:'Global AI Directory',hot:'ຍອດນິຍົມມື້ນີ້',all:'ທຸກເຄື່ອງມື',close:'ປິດ',themeD:'ມືດ',themeL:'ແຈ້ງ'},
    my:{brand:'Global AI Directory',hot:'ယနေ့ရွေးချယ်မှု',all:'ကိရိယာအားလုံး',close:'ပိတ်',themeD:'အမှောင်',themeL:'အလင်း'},
    tl:{brand:'Global AI Directory',hot:'Picks ngayon',all:'Lahat ng tools',close:'Isara',themeD:'Madilim',themeL:'Maliwanag'},
    hi:{brand:'Global AI Directory',hot:'आज की पसंद',all:'सभी टूल',close:'बंद',themeD:'डार्क',themeL:'लाइट'},
    uk:{brand:'Global AI Directory',hot:'Сьогодні',all:'Усі інструменти',close:'Закрити',themeD:'Темна',themeL:'Світла'},
    it:{brand:'Global AI Directory',hot:'Scelte di oggi',all:'Tutti gli strumenti',close:'Chiudi',themeD:'Scuro',themeL:'Chiaro'},
    nl:{brand:'Global AI Directory',hot:'Vandaag',all:'Alle tools',close:'Sluiten',themeD:'Donker',themeL:'Licht'},
    pl:{brand:'Global AI Directory',hot:'Dzisiaj',all:'Wszystkie narzędzia',close:'Zamknij',themeD:'Ciemny',themeL:'Jasny'},
    tr:{brand:'Global AI Directory',hot:'Bugün',all:'Tüm araçlar',close:'Kapat',themeD:'Koyu',themeL:'Açık'}
  };
  var GR={
    free:{zh:'免费试用',en:'Free',km:'Free',th:'ฟรี',vi:'Miễn phí',ja:'無料',ko:'무료',id:'Gratis',es:'Gratis',fr:'Gratuit',pt:'Grátis',de:'Gratis',ru:'Бесплатно',ar:'مجانا',ms:'Percuma',lo:'ຟຣີ',my:'အခမဲ့',tl:'Libre',hi:'मुफ़्त',uk:'Безкоштовно',it:'Gratis',nl:'Gratis',pl:'Za darmo',tr:'Ücretsiz'},
    learn:{zh:'学习教程',en:'Learn',km:'Learn',th:'เรียน',vi:'Học',ja:'学習',ko:'학습',id:'Belajar',es:'Aprender',fr:'Apprendre',pt:'Aprender',de:'Lernen',ru:'Учёба',ar:'تعلم',ms:'Belajar',lo:'ຮຽນ',my:'သင်ယူ',tl:'Aral',hi:'सीखें',uk:'Навчання',it:'Impara',nl:'Leren',pl:'Nauka',tr:'Öğren'},
    gig:{zh:'接单赚钱',en:'Gigs',km:'Gigs',th:'งาน',vi:'Nhận việc',ja:'案件',ko:'건',id:'Job',es:'Tareas',fr:'Missions',pt:'Jobs',de:'Jobs',ru:'Заказы',ar:'وظائف',ms:'Kerja',lo:'ວຽກ',my:'အလုပ်',tl:'Trabaho',hi:'काम',uk:'Замовлення',it:'Lavori',nl:'Klussen',pl:'Zlecenia',tr:'İşler'},
    draw:{zh:'绘画设计',en:'Art',km:'Art',th:'ดีไซ',vi:'Vẽ',ja:'絵',ko:'그림',id:'Desain',es:'Arte',fr:'Art',pt:'Arte',de:'Kunst',ru:'Рисунок',ar:'فن',ms:'Seni',lo:'ສິລະປະ',my:'ပန်းချီ',tl:'Sining',hi:'कला',uk:'Малюнок',it:'Arte',nl:'Kunst',pl:'Sztuka',tr:'Sanat'},
    make:{zh:'创作媒体',en:'Media',km:'Media',th:'มีเดีย',vi:'Media',ja:'メディア',ko:'미디어',id:'Media',es:'Medios',fr:'Médias',pt:'Mídia',de:'Medien',ru:'Медиа',ar:'وسائط',ms:'Media',lo:'ສື່',my:'မီဒီယာ',tl:'Media',hi:'मीडिया',uk:'Медіа',it:'Media',nl:'Media',pl:'Media',tr:'Medya'},
    life:{zh:'生活社交',en:'Life',km:'Life',th:'ชีวิต',vi:'Đời sống',ja:'生活',ko:'생활',id:'Hidup',es:'Vida',fr:'Vie',pt:'Vida',de:'Leben',ru:'Жизнь',ar:'حياة',ms:'Hidup',lo:'ຊີວິດ',my:'ဘဝ',tl:'Buhay',hi:'जीवन',uk:'Життя',it:'Vita',nl:'Leven',pl:'Życie',tr:'Yaşam'},
    work:{zh:'工作办公',en:'Work',km:'Work',th:'งาน',vi:'Văn phòng',ja:'仕事',ko:'직장',id:'Kantor',es:'Oficina',fr:'Bureau',pt:'Escritório',de:'Büro',ru:'Офис',ar:'عمل',ms:'Pejabat',lo:'ຫ້ອງການ',my:'ရုံး',tl:'Opisina',hi:'ऑफिस',uk:'Офіс',it:'Ufficio',nl:'Kantoor',pl:'Biuro',tr:'Ofis'},
    adult:{zh:'成人内容',en:'Adult',km:'Adult',th:'ผู้ใหญ่',vi:'Người lớn',ja:'アダルト',ko:'성인',id:'Dewasa',es:'Adulto',fr:'Adulte',pt:'Adulto',de:'Adult',ru:'18+',ar:'للبالغين',ms:'Dewasa',lo:'ຜູ້ໃຫຍ່',my:'အရွယ်ရောက်',tl:'Adult',hi:'वयस्क',uk:'18+',it:'Adulti',nl:'18+',pl:'18+',tr:'Yetişkin'},
    other:{zh:'其他类型',en:'Other',km:'Other',th:'อื่นๆ',vi:'Khác',ja:'その他',ko:'기타',id:'Lain',es:'Otros',fr:'Autre',pt:'Outros',de:'Andere',ru:'Другое',ar:'أخرى',ms:'Lain',lo:'ອື່ນ',my:'အခြား',tl:'Iba pa',hi:'अन्य',uk:'Інше',it:'Altro',nl:'Overig',pl:'Inne',tr:'Diğer'}
  };
  var TG={
    '免费':{en:'Free',vi:'Gratis',ja:'無料',ko:'무료',th:'ฟรี',id:'Gratis',es:'Gratis',fr:'Gratuit',pt:'Grátis',de:'Free',ru:'Free',ar:'Free',km:'Free'},
    '收费':{en:'Paid',vi:'Trả phí',ja:'有料',ko:'유료',th:'เงิน',id:'Berbayar',es:'Pago',fr:'Payant',pt:'Pago',de:'Paid',ru:'Paid',ar:'Paid',km:'Paid'},
    '对话':{en:'Chat',vi:'Chat',ja:'チャット',ko:'채팅',th:'แชท',id:'Chat',es:'Chat',fr:'Chat',pt:'Chat',de:'Chat',ru:'Chat',ar:'Chat',km:'Chat'},
    '聊天':{en:'Talk',vi:'Nói',ja:'集い',ko:'대화',th:'คุย',id:'Obrolan',es:'Hablar',fr:'Parler',pt:'Falar',de:'Talk',ru:'Talk',ar:'Talk',km:'Talk'},
    '插件':{en:'Plugin',vi:'Plugin',ja:'拡張',ko:'플러그인',th:'พลักอิน',id:'Plugin',es:'Plugin',fr:'Plugin',pt:'Plugin',de:'Plugin',ru:'Plugin',ar:'Plugin',km:'Plugin'},
    '陪伴':{en:'Buddy',vi:'Bạn',ja:'相手',ko:'동반',th:'เพื่อน',id:'Teman',es:'Compa',fr:'Ami',pt:'Amigo',de:'Buddy',ru:'Buddy',ar:'Buddy',km:'Buddy'},
    '学习':{en:'Study',vi:'Học',ja:'勉強',ko:'공부',th:'เรียน',id:'Belajar',es:'Estudio',fr:'Étude',pt:'Estudo',de:'Study',ru:'Study',ar:'Study',km:'Study'},
    '健身':{en:'Fit',vi:'Gym',ja:'筋トレ',ko:'피트',th:'ฟิต',id:'Fit',es:'Fit',fr:'Sport',pt:'Fit',de:'Fit',ru:'Fit',ar:'Fit',km:'Fit'},
    '美妆':{en:'Beauty',vi:'Làm đẹp',ja:'ビューティ',ko:'뷰티',th:'ความงาม',id:'Cantik',es:'Belleza',fr:'Beauté',pt:'Beleza',de:'Beauty',ru:'Beauty',ar:'Beauty',km:'Beauty'},
    '宠物':{en:'Pets',vi:'Thú cưng',ja:'ペット',ko:'펫',th:'สัตว์',id:'Hewan',es:'Mascotas',fr:'Animaux',pt:'Pets',de:'Pets',ru:'Pets',ar:'Pets',km:'Pets'},
    '美食':{en:'Food',vi:'Ẩm thực',ja:'グルメ',ko:'음식',th:'อาหาร',id:'Makanan',es:'Comida',fr:'Cuisine',pt:'Comida',de:'Food',ru:'Food',ar:'Food',km:'Food'},
    '旅行':{en:'Travel',vi:'Du lịch',ja:'旅行',ko:'여행',th:'ท่องเที่ยว',id:'Travel',es:'Viaje',fr:'Voyage',pt:'Viagem',de:'Reise',ru:'Travel',ar:'Travel',km:'Travel'},
    '拼车':{en:'Ride',vi:'Đi chung',ja:'相乗',ko:'카풀',th:'ร่วมรถ',id:'Bonceng',es:'Ride',fr:'Covoit',pt:'Carona',de:'Ride',ru:'Ride',ar:'Ride',km:'Ride'},
    '租车':{en:'Rent',vi:'Thuê xe',ja:'レンタカー',ko:'렌트',th:'เช่ารถ',id:'Sewa',es:'Alquiler',fr:'Location',pt:'Aluguel',de:'Miete',ru:'Rent',ar:'Rent',km:'Rent'},
    '法律':{en:'Law',vi:'Luật',ja:'法律',ko:'법률',th:'กฎหมาย',id:'Hukum',es:'Ley',fr:'Droit',pt:'Lei',de:'Recht',ru:'Law',ar:'Law',km:'Law'},
    '管理':{en:'Manage',vi:'Quản lý',ja:'管理',ko:'관리',th:'จัดการ',id:'Kelola',es:'Gestion',fr:'Gestion',pt:'Gestão',de:'Manage',ru:'Manage',ar:'Manage',km:'Manage'},
    '绘画':{en:'Draw',vi:'Vẽ',ja:'作画',ko:'그리기',th:'วาด',id:'Gambar',es:'Dibujar',fr:'Dessin',pt:'Desenho',de:'Draw',ru:'Draw',ar:'Draw',km:'Draw'},
    '视频':{en:'Video',vi:'Video',ja:'動画',ko:'영상',th:'วิดีโอ',id:'Video',es:'Vídeo',fr:'Vidéo',pt:'Vídeo',de:'Video',ru:'Video',ar:'Video',km:'Video'},
    '成人':{en:'Adult',vi:'18+',ja:'成人',ko:'성인',th:'18+',id:'Dewasa',es:'Adulto',fr:'Adulte',pt:'Adulto',de:'Adult',ru:'18+',ar:'18+',km:'18+'},
    '直播':{en:'Live',vi:'Live',ja:'ライブ',ko:'라이브',th:'สด',id:'Live',es:'Directo',fr:'Live',pt:'Ao vivo',de:'Live',ru:'Live',ar:'Live',km:'Live'},
    '交友':{en:'Date',vi:'Hẹn hò',ja:'恋活',ko:'데이트',th:'เดท',id:'Kencan',es:'Citas',fr:'Rencontre',pt:'Dating',de:'Date',ru:'Date',ar:'Date',km:'Date'},
    '约炮':{en:'Hookup',vi:'Hookup',ja:'ハック',ko:'훅업',th:'Hookup',id:'Hookup',es:'Hookup',fr:'Hookup',pt:'Hookup',de:'Hookup',ru:'Hookup',ar:'Hookup',km:'Hookup'},
    '办公':{en:'Office',vi:'Văn phòng',ja:'オフィス',ko:'오피스',th:'ออฟิศ',id:'Kantor',es:'Oficina',fr:'Bureau',pt:'Escritório',de:'Büro',ru:'Office',ar:'Office',km:'Office'},
    '编程':{en:'Code',vi:'Code',ja:'コード',ko:'코드',th:'โค้ด',id:'Kode',es:'Código',fr:'Code',pt:'Código',de:'Code',ru:'Code',ar:'Code',km:'Code'},
    '游戏':{en:'Games',vi:'Game',ja:'ゲーム',ko:'게임',th:'เกม',id:'Game',es:'Juegos',fr:'Jeux',pt:'Jogos',de:'Games',ru:'Games',ar:'Games',km:'Games'},
    '音乐':{en:'Music',vi:'Nhạc',ja:'音楽',ko:'음악',th:'ดนตรี',id:'Musik',es:'Música',fr:'Musique',pt:'Música',de:'Musik',ru:'Music',ar:'Music',km:'Music'},
    '语音':{en:'Voice',vi:'Giọng',ja:'音声',ko:'음성',th:'เสียง',id:'Suara',es:'Voz',fr:'Voix',pt:'Voz',de:'Stimme',ru:'Voice',ar:'Voice',km:'Voice'},
    '设计':{en:'Design',vi:'Design',ja:'デザイン',ko:'디자인',th:'ดีไซ',id:'Desain',es:'Diseño',fr:'Design',pt:'Design',de:'Design',ru:'Design',ar:'Design',km:'Design'},
    '搜索':{en:'Search',vi:'Tìm',ja:'検索',ko:'검색',th:'ค้น',id:'Cari',es:'Buscar',fr:'Recherche',pt:'Busca',de:'Suche',ru:'Search',ar:'Search',km:'Search'},
    '写作':{en:'Write',vi:'Viết',ja:'ライティング',ko:'글쓰기',th:'ขียน',id:'Tulis',es:'Escribir',fr:'Écrire',pt:'Escrever',de:'Text',ru:'Write',ar:'Write',km:'Write'},
    '接单':{en:'Gigs',vi:'Job',ja:'案件',ko:'외주',th:'รับงาน',id:'Job',es:'Gigs',fr:'Missions',pt:'Jobs',de:'Jobs',ru:'Gigs',ar:'Gigs',km:'Gigs'},
    '兼职':{en:'Part',vi:'Part-time',ja:'バイト',ko:'알바',th:'พาร์ทไทม์',id:'Paruh',es:'Parcial',fr:'Temps partiel',pt:'Parcial',de:'Teilzeit',ru:'Part',ar:'Part',km:'Part'},
    '招聘':{en:'Jobs',vi:'Tuyển',ja:'求人',ko:'채용',th:'สมัคร',id:'Loker',es:'Empleo',fr:'Emploi',pt:'Vagas',de:'Jobs',ru:'Jobs',ar:'Jobs',km:'Jobs'},
    '社区':{en:'Forum',vi:'Forum',ja:'コミュ',ko:'커뮤니티',th:'ชุมชน',id:'Forum',es:'Foro',fr:'Forum',pt:'Fórum',de:'Forum',ru:'Forum',ar:'Forum',km:'Forum'},
    '开店':{en:'Shop',vi:'Shop',ja:'出店',ko:'신고',th:'ร้าน',id:'Toko',es:'Tienda',fr:'Boutique',pt:'Loja',de:'Shop',ru:'Shop',ar:'Shop',km:'Shop'},
    'API':{en:'API',vi:'API',ja:'API',ko:'API',th:'API',id:'API',es:'API',fr:'API',pt:'API',de:'API',ru:'API',ar:'API',km:'API'},
    '图书':{en:'Books',vi:'Sách',ja:'本',ko:'책',th:'หนังสือ',id:'Buku',es:'Libros',fr:'Livres',pt:'Livros',de:'Books',ru:'Books',ar:'Books',km:'Books'},
    '小说':{en:'Novel',vi:'Tiểu thuyết',ja:'小説',ko:'소설',th:'นิยาย',id:'Novel',es:'Novela',fr:'Roman',pt:'Romance',de:'Roman',ru:'Novel',ar:'Novel',km:'Novel'},
    '漫画':{en:'Manga',vi:'Manga',ja:'漫画',ko:'만화',th:'มังงะ',id:'Manga',es:'Manga',fr:'Manga',pt:'Mangá',de:'Manga',ru:'Manga',ar:'Manga',km:'Manga'},
    '星座':{en:'Zodiac',vi:'Cung',ja:'星座',ko:'별자리',th:'ราศี',id:'Zodiak',es:'Zodiaco',fr:'Zodiaque',pt:'Zodíaco',de:'Stern',ru:'Zodiac',ar:'Zodiac',km:'Zodiac'},
    '塔罗':{en:'Tarot',vi:'Tarot',ja:'タロット',ko:'타로',th:'ทาโรต์',id:'Tarot',es:'Tarot',fr:'Tarot',pt:'Tarot',de:'Tarot',ru:'Tarot',ar:'Tarot',km:'Tarot'},
    '云盘':{en:'Cloud',vi:'Cloud',ja:'クラウド',ko:'클라우드',th:'คลาวด์',id:'Cloud',es:'Nube',fr:'Cloud',pt:'Nuvem',de:'Cloud',ru:'Cloud',ar:'Cloud',km:'Cloud'},
    '换脸':{en:'Face',vi:'Face',ja:'顔交換',ko:'얼굴',th:'แปลงหน้า',id:'Wajah',es:'Cara',fr:'Visage',pt:'Rosto',de:'Face',ru:'Face',ar:'Face',km:'Face'},
    '打扮':{en:'Style',vi:'Style',ja:'コーデ',ko:'스타일',th:'แต่งตัว',id:'Gaya',es:'Estilo',fr:'Style',pt:'Estilo',de:'Style',ru:'Style',ar:'Style',km:'Style'},
    '隐私':{en:'Privacy',vi:'Riêng tư',ja:'プライバシー',ko:'개인',th:'ความเป็นส่วน',id:'Privasi',es:'Privacidad',fr:'Privé',pt:'Privado',de:'Privat',ru:'Privacy',ar:'Privacy',km:'Privacy'},
    '资讯':{en:'News',vi:'Tin',ja:'ニュース',ko:'뉴스',th:'ข่าว',id:'Berita',es:'Noticias',fr:'Actu',pt:'Notícias',de:'News',ru:'News',ar:'News',km:'News'},
    '短剧':{en:'Short',vi:'Short',ja:'短編',ko:'싸지',th:'ซอร์ต',id:'Short',es:'Corto',fr:'Short',pt:'Short',de:'Short',ru:'Short',ar:'Short',km:'Short'},
    '漫剧':{en:'Toon',vi:'Toon',ja:'アニメ',ko:'웨툰',th:'ตูน',id:'Kartun',es:'Toon',fr:'Toon',pt:'Toon',de:'Toon',ru:'Toon',ar:'Toon',km:'Toon'},
    '故事':{en:'Story',vi:'Truyện',ja:'物語',ko:'이야기',th:'เรื่อง',id:'Cerita',es:'Historia',fr:'Récit',pt:'História',de:'Story',ru:'Story',ar:'Story',km:'Story'},
    '创业':{en:'Startup',vi:'Startup',ja:'起業',ko:'스타트업',th:'สตาร์ท',id:'Startup',es:'Startup',fr:'Startup',pt:'Startup',de:'Startup',ru:'Startup',ar:'Startup',km:'Startup'},
    '名人':{en:'Bio',vi:'Bio',ja:'名士',ko:'명사',th:'ชื่อ',id:'Tokoh',es:'Bio',fr:'Bio',pt:'Bio',de:'Bio',ru:'Bio',ar:'Bio',km:'Bio'},
    '八卦':{en:'Gossip',vi:'Gossip',ja:'スキャンダル',ko:'가십',th:'ซุบซิบ',id:'Gosip',es:'Chisme',fr:'Potins',pt:'Fofoca',de:'Gossip',ru:'Gossip',ar:'Gossip',km:'Gossip'},
    '亲子':{en:'Kids',vi:'Trẻ',ja:'子育',ko:'아이',th:'เด็ก',id:'Anak',es:'Niños',fr:'Enfants',pt:'Kids',de:'Kids',ru:'Kids',ar:'Kids',km:'Kids'},
    '宝妈':{en:'Moms',vi:'Mẹ',ja:'ママ',ko:'엄마',th:'แม่',id:'Ibu',es:'Mamas',fr:'Mamans',pt:'Mães',de:'Mamas',ru:'Moms',ar:'Moms',km:'Moms'},
    '主播':{en:'Stream',vi:'Stream',ja:'配信',ko:'스트림',th:'สตรีม',id:'Stream',es:'Stream',fr:'Stream',pt:'Stream',de:'Stream',ru:'Stream',ar:'Stream',km:'Stream'},
    '融资':{en:'Fund',vi:'Vốn',ja:'資金',ko:'투자',th:'ทุน',id:'Dana',es:'Fondo',fr:'Fonds',pt:'Fundo',de:'Fund',ru:'Fund',ar:'Fund',km:'Fund'},
    '理财':{en:'Money',vi:'Tiền',ja:'理財',ko:'재테크',th:'การเงิน',id:'Uang',es:'Dinero',fr:'Argent',pt:'Dinheiro',de:'Geld',ru:'Money',ar:'Money',km:'Money'},
    '种植':{en:'Farm',vi:'Nông',ja:'農業',ko:'농사',th:'กระศิก',id:'Tani',es:'Granja',fr:'Ferme',pt:'Fazenda',de:'Farm',ru:'Farm',ar:'Farm',km:'Farm'},
    '搭伙':{en:'Mate',vi:'Đôi',ja:'仲間',ko:'동행',th:'เพื่อน',id:'Teman',es:'Pareja',fr:'Duo',pt:'Par',de:'Mate',ru:'Mate',ar:'Mate',km:'Mate'},
    '爬山':{en:'Hike',vi:'Leo núi',ja:'登山',ko:'등산',th:'เขาเขา',id:'Hiking',es:'Hiking',fr:'Rando',pt:'Trilha',de:'Wander',ru:'Hike',ar:'Hike',km:'Hike'},
    '陪聊':{en:'Chat+',vi:'Trò chuyện',ja:'雑談',ko:'수다',th:'คุย',id:'Ngobrol',es:'Charla',fr:'Discuter',pt:'Papo',de:'Chat+',ru:'Chat+',ar:'Chat+',km:'Chat+'},
    '情感':{en:'Feel',vi:'Cảm xúc',ja:'感情',ko:'감정',th:'ความรู้',id:'Perasaan',es:'Emoción',fr:'Sentiment',pt:'Sentir',de:'Gefühl',ru:'Feel',ar:'Feel',km:'Feel'},
    '厨房':{en:'Kitchen',vi:'Bếp',ja:'厨房',ko:'주방',th:'ครัว',id:'Dapur',es:'Cocina',fr:'Cuisine',pt:'Cozinha',de:'Küche',ru:'Kitchen',ar:'Kitchen',km:'Kitchen'},
    '菜谱':{en:'Recipe',vi:'Công thức',ja:'レシピ',ko:'레시피',th:'สูตร',id:'Resep',es:'Receta',fr:'Recette',pt:'Receita',de:'Rezept',ru:'Recipe',ar:'Recipe',km:'Recipe'},
    '酒店':{en:'Hotel',vi:'Khách sạn',ja:'ホテル',ko:'호텔',th:'โรงแรม',id:'Hotel',es:'Hotel',fr:'Hôtel',pt:'Hotel',de:'Hotel',ru:'Hotel',ar:'Hotel',km:'Hotel'},
    '房产':{en:'Home',vi:'Nhà',ja:'不動産',ko:'부동산',th:'อสังหา',id:'Properti',es:'Casa',fr:'Immo',pt:'Imóvel',de:'Immo',ru:'Home',ar:'Home',km:'Home'},
    '电影':{en:'Film',vi:'Phim',ja:'映画',ko:'영화',th:'หนัง',id:'Film',es:'Cine',fr:'Film',pt:'Filme',de:'Film',ru:'Film',ar:'Film',km:'Film'},
    '私影':{en:'Cinema',vi:'Rạp',ja:'私影',ko:'관',th:'โรงนัง',id:'Bioskop',es:'Cine+',fr:'Ciné',pt:'Cinema',de:'Kino',ru:'Cinema',ar:'Cinema',km:'Cinema'},
    '附近':{en:'Near',vi:'Gần',ja:'近く',ko:'근처',th:'ใกล้',id:'Dekat',es:'Cerca',fr:'Près',pt:'Perto',de:'Nah',ru:'Near',ar:'Near',km:'Near'},
    '美剧':{en:'US TV',vi:'US TV',ja:'米ドラマ',ko:'미드',th:'US TV',id:'US TV',es:'US TV',fr:'US TV',pt:'US TV',de:'US TV',ru:'US TV',ar:'US TV',km:'US TV'},
    '韩剧':{en:'KR TV',vi:'KR TV',ja:'韓ドラマ',ko:'한드',th:'KR TV',id:'KR TV',es:'KR TV',fr:'KR TV',pt:'KR TV',de:'KR TV',ru:'KR TV',ar:'KR TV',km:'KR TV'},
    '日剧':{en:'JP TV',vi:'JP TV',ja:'日ドラマ',ko:'일드',th:'JP TV',id:'JP TV',es:'JP TV',fr:'JP TV',pt:'JP TV',de:'JP TV',ru:'JP TV',ar:'JP TV',km:'JP TV'},
    '监控':{en:'Cams',vi:'Camera',ja:'監視',ko:'카메라',th:'กล้อง',id:'Kamera',es:'Cámaras',fr:'Cam',pt:'Câmeras',de:'Cams',ru:'Cams',ar:'Cams',km:'Cams'},
    '学生':{en:'Student',vi:'Sinh viên',ja:'学生',ko:'학생',th:'นักเรียน',id:'Siswa',es:'Alumno',fr:'Étudiant',pt:'Aluno',de:'Student',ru:'Student',ar:'Student',km:'Student'},
    '女心':{en:'Her',vi:'Tâm sự',ja:'彼女',ko:'그녀',th:'ใจสาว',id:'Dia',es:'Ella',fr:'Elle',pt:'Ela',de:'Sie',ru:'Her',ar:'Her',km:'Her'},
    '语录':{en:'Quotes',vi:'Quotes',ja:'名言',ko:'명언',th:'คำคม',id:'Quote',es:'Frases',fr:'Citations',pt:'Frases',de:'Zitate',ru:'Quotes',ar:'Quotes',km:'Quotes'},
    '富婆':{en:'Sugar',vi:'Sugar',ja:'ギャル',ko:'슈거',th:'ซุก้า',id:'Sugar',es:'Sugar',fr:'Sugar',pt:'Sugar',de:'Sugar',ru:'Sugar',ar:'Sugar',km:'Sugar'},
    '人设':{en:'Persona',vi:'Persona',ja:'人格',ko:'페르소나',th:'ตัวตน',id:'Persona',es:'Persona',fr:'Persona',pt:'Persona',de:'Persona',ru:'Persona',ar:'Persona',km:'Persona'},
    '套图':{en:'Sets',vi:'Set ảnh',ja:'写真集',ko:'세트',th:'ชุดภาพ',id:'Set',es:'Sets',fr:'Sets',pt:'Sets',de:'Sets',ru:'Sets',ar:'Sets',km:'Sets'},
    '文案':{en:'Copy',vi:'Copy',ja:'コピー',ko:'문구',th:'คัดลอก',id:'Copy',es:'Copy',fr:'Texte',pt:'Copy',de:'Copy',ru:'Copy',ar:'Copy',km:'Copy'},
    '外贸':{en:'Trade',vi:'Trade',ja:'貿易',ko:'무역',th:'การค้า',id:'Dagang',es:'Trade',fr:'Trade',pt:'Trade',de:'Trade',ru:'Trade',ar:'Trade',km:'Trade'},
    '铺货':{en:'Drop',vi:'Drop',ja:'仕入れ',ko:'드롭싶',th:'ดรอปชิป',id:'Dropship',es:'Drop',fr:'Drop',pt:'Drop',de:'Drop',ru:'Drop',ar:'Drop',km:'Drop'},
    '网店':{en:'Store',vi:'Store',ja:'ネットシທ็อป',ko:'스토어',th:'ร้าน',id:'Toko',es:'Tienda',fr:'Shop',pt:'Loja',de:'Store',ru:'Store',ar:'Store',km:'Store'},
    '养成':{en:'Raise',vi:'Nuôi',ja:'育成',ko:'육성',th:'เลี้ยง',id:'Asuh',es:'Criar',fr:'Élever',pt:'Criar',de:'Raise',ru:'Raise',ar:'Raise',km:'Raise'},
    '婚恋':{en:'Match',vi:'Hôn nhân',ja:'婚活',ko:'결혼',th:'แต่งงาน',id:'Nikah',es:'Pareja',fr:'Couple',pt:'Casal',de:'Match',ru:'Match',ar:'Match',km:'Match'},
    '出轨':{en:'Affair',vi:'Ngoại tình',ja:'不倫',ko:'불륜',th:'นอกใจ',id:'Selingkuh',es:'Aventura',fr:'Aventure',pt:'Caso',de:'Affair',ru:'Affair',ar:'Affair',km:'Affair'},
    '检测':{en:'Detect',vi:'Kiểm',ja:'検知',ko:'검출',th:'ตรวจ',id:'Deteksi',es:'Detectar',fr:'Détecter',pt:'Detectar',de:'Detect',ru:'Detect',ar:'Detect',km:'Detect'},
    '检验':{en:'Test',vi:'Test',ja:'検証',ko:'검증',th:'ทดสอบ',id:'Uji',es:'Test',fr:'Test',pt:'Teste',de:'Test',ru:'Test',ar:'Test',km:'Test'},
    '获粉':{en:'Grow',vi:'Tăng follow',ja:'仲まし',ko:'팔로우',th:'ฟอล',id:'Follow',es:'Follow',fr:'Follow',pt:'Follow',de:'Follow',ru:'Grow',ar:'Grow',km:'Grow'},
    '投票':{en:'Vote',vi:'Bỏ phiếu',ja:'投票',ko:'투표',th:'โอต',id:'Vote',es:'Votar',fr:'Vote',pt:'Voto',de:'Vote',ru:'Vote',ar:'Vote',km:'Vote'},
    '数据':{en:'Stats',vi:'Data',ja:'データ',ko:'데이터',th:'ข้อมูล',id:'Data',es:'Datos',fr:'Stats',pt:'Dados',de:'Daten',ru:'Stats',ar:'Stats',km:'Stats'},
    '无审核':{en:'Open',vi:'No review',ja:'無審査',ko:'무심의',th:'ไม่กรอง',id:'Terbuka',es:'Abierto',fr:'Ouvert',pt:'Aberto',de:'Open',ru:'Open',ar:'Open',km:'Open'},
    '小商品':{en:'Goods',vi:'Hàng',ja:'雑貨',ko:'잡화',th:'สินค้า',id:'Barang',es:'Goods',fr:'Goods',pt:'Goods',de:'Goods',ru:'Goods',ar:'Goods',km:'Goods'},
    '机器人':{en:'Bot',vi:'Bot',ja:'ボット',ko:'봇',th:'บอท',id:'Bot',es:'Bot',fr:'Bot',pt:'Bot',de:'Bot',ru:'Bot',ar:'Bot',km:'Bot'},
    '无障碍':{en:'Access',vi:'Trợ năng',ja:'アクセス',ko:'접근성',th:'เข้าถึง',id:'Akses',es:'Acceso',fr:'Accès',pt:'Acesso',de:'Access',ru:'Access',ar:'Access',km:'Access'},
    '模型包':{en:'Weights',vi:'Model',ja:'重み',ko:'모델',th:'โมเดล',id:'Model',es:'Modelo',fr:'Modèle',pt:'Modelo',de:'Modell',ru:'Weights',ar:'Weights',km:'Weights'},
    '数字人':{en:'Avatar',vi:'Avatar',ja:'デジタル人',ko:'디지털',th:'ดิจิทอล',id:'Avatar',es:'Avatar',fr:'Avatar',pt:'Avatar',de:'Avatar',ru:'Avatar',ar:'Avatar',km:'Avatar'},
    '电视台':{en:'TV',vi:'TV',ja:'テレビ',ko:'TV',th:'ทีวี',id:'TV',es:'TV',fr:'TV',pt:'TV',de:'TV',ru:'TV',ar:'TV',km:'TV'},
    '虚拟人':{en:'Virtual',vi:'Virtual',ja:'仮想',ko:'가상',th:'วิรัว',id:'Virtual',es:'Virtual',fr:'Virtuel',pt:'Virtual',de:'Virtual',ru:'Virtual',ar:'Virtual',km:'Virtual'},
    'AI音乐':{en:'AI music',vi:'AI nhạc',ja:'AI音楽',ko:'AI음악',th:'AI ดนตรี',id:'AI musik',es:'AI music',fr:'AI music',pt:'AI music',de:'AI Musik',ru:'AI music',ar:'AI music',km:'AI music'},
    '翻唱':{en:'Cover',vi:'Cover',ja:'カバー',ko:'커버',th:'คอเวอ',id:'Cover',es:'Cover',fr:'Cover',pt:'Cover',de:'Cover',ru:'Cover',ar:'Cover',km:'Cover'},
    '夜生活':{en:'Night',vi:'Về đêm',ja:'ナイト',ko:'나이트',th:'กลางคืน',id:'Malam',es:'Noche',fr:'Nuit',pt:'Noite',de:'Nacht',ru:'Night',ar:'Night',km:'Night'},
    '线下交':{en:'Meetup',vi:'Offline',ja:'オフ会',ko:'만남',th:'ผลอฟ',id:'Offline',es:'Quedar',fr:'Irl',pt:'Encontro',de:'Treffen',ru:'Meetup',ar:'Meetup',km:'Meetup'}
  };
  function lang(){return localStorage.getItem('lang')||'en'}
  function pick(map,l){return (map&&(map[l]||map.en))||''}
  function apply(){
    var l=lang();
    var c=CH[l]||CH.en;
    var el;
    el=document.getElementById('brand'); if(el) el.textContent=c.brand;
    el=document.getElementById('hotTitle'); if(el) el.textContent=c.hot;
    el=document.getElementById('listTitle'); if(el) el.textContent=c.all;
    el=document.getElementById('popX'); if(el) el.textContent=c.close;
    el=document.getElementById('theme');
    if(el){
      var dark=document.documentElement.dataset.theme==='dark';
      el.textContent=dark?c.themeL:c.themeD;
    }
    document.querySelectorAll('#side button').forEach(function(b){
      var g=GR[b.dataset.c];
      if(g) b.textContent=pick(g,l);
    });
    document.querySelectorAll('#tags button').forEach(function(b){
      var g=TG[b.dataset.t];
      if(g) b.textContent=pick(g,l);
      else if(l!=='zh') b.textContent=b.dataset.t;
    });
    var btn=document.getElementById('lang');
    if(btn) btn.textContent=(LANGS.filter(function(p){return p[0]===l})[0]||['en','EN'])[1];
  }
  function bar(){
    var box=document.getElementById('langBar');
    if(!box){
      box=document.createElement('div');
      box.id='langBar';
      box.className='langbar';
      var acts=document.querySelector('.acts');
      if(acts&&acts.parentNode) acts.parentNode.appendChild(box);
      else document.body.appendChild(box);
    }
    var cur=lang();
    box.innerHTML=LANGS.map(function(p){
      return '<button type="button" data-l="'+p[0]+'" class="'+(p[0]===cur?'on':'')+'">'+p[1]+'</button>';
    }).join('');
    box.onclick=function(e){
      var b=e.target.closest('button'); if(!b)return;
      localStorage.setItem('lang',b.dataset.l);
      box.classList.remove('show');
      apply();
    };

  }
  var t=null;
  var mo=new MutationObserver(function(){clearTimeout(t);t=setTimeout(apply,30)});
  function boot(){
    apply();
    var root=document.getElementById('scroll')||document.body;
    mo.observe(root,{childList:true,subtree:true});
  }
  window.aidTranslate=apply;
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
