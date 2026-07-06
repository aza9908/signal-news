/* ====== CONFIG (edit these) ====== */
const TRIBUTE_URL = "https://web.tribute.tg/p/zw8";
const ACCESS_CODE = "SIGNAL3";

/* ====== I18N ====== */
const I18N = {
  en:{
    "nav.about":"About","nav.feed":"Feed","nav.subscribe":"Subscribe","nav.unlock":"Unlock · $3",
    "hero.status":"LIVE FROM ASTANA · AI & ROBOTICS","hero.title1":"The frontier,","hero.title2":"read closely.",
    "hero.lede":"A hand-run channel on frontier AI, humanoid robotics, and the labs shaping both — written by two people who build in the field, not just watch it.",
    "hero.who":"By Azamat Armanuly — computational antibody design & ML · and Kuanysh Magauin — Apple Certified Trainer & robotics.",
    "hero.cta1":"Unlock the feed · $3","hero.cta2":"Meet the writers","hero.note":"One-time $3 · lifetime access to the news feed · powered by Tribute.",
    "ppl.eyebrow":"01 — The writers","ppl.head":"Two builders, one signal.","ppl.sub":"We spend our days inside these fields — antibody models, robotics classrooms, and the tools students actually ship.",
    "az.role":"Founder · Computational Biology & ML",
    "az.bio":"CEO & co-founder of Foldexa.bio, an AI-driven antibody-design startup in Astana with an oncology pipeline (EGFR, HER2, PD-L1, VEGFR2) and a published lead candidate, mTie2 (mAbs, 2025). M.S. from KAIST, where he worked on computational antibody design under Prof. Ho Min Kim at IBS Korea. Robotics & AI teacher at Haileybury Astana, FLL/FTC coach, and assistant coach of Kazakhstan's national robotics team. Ex-ML engineer at CYBERPACK.AI and CerebraAI.",
    "az.tag1":"Antibody design","az.f1k":"Building","az.f2v":"4th · Jackson Division","az.f3k":"Languages","az.f4k":"On the web",
    "ku.role":"Robotics & AI Edu Learning Designer · Kazakhstan national robotics team coach · Apple Certified Trainer",
    "ku.bio":"One of the first teachers in Kazakhstan to become an Apple Certified Trainer in Swift — a certification that brought Apple Authorized Training Center status to his school. Robotics teacher at Haileybury Astana and an iOS developer who trained alongside educators from Germany, Ireland, the UAE, Egypt and India. Co-builds Champion's Journey, a gamified robotics learning app for Kazakhstani schools, and teaches pupils to ship real mobile apps.",
    "ku.tag2":"Apple Certified","ku.tag3":"Robotics coach","ku.f1k":"Credential","ku.f2k":"Teaches","ku.f2v":"iOS dev · Robotics","ku.f3k":"Ships","ku.f4k":"Based in","ku.f4v":"Astana, KZ",
    "feed.eyebrow":"02 — The feed","feed.head":"Latest in AI & robotics.","feed.sub":"Refreshed automatically from live sources every time this page loads. Subscribers read the full stream.",
    "feed.note":"Headlines link to their original publishers and are shown in the source language (English).",
    "lock.cyc":" / lifetime","lock.title":"Unlock the full feed","lock.desc":"One payment. Every AI & robotics story, kept fresh — plus the subscriber-only Telegram channel.",
    "lock.pay":"Pay with Tribute · $3","lock.ph":"ACCESS CODE","lock.enter":"Enter",
    "sub.eyebrow":"03 — Subscribe","sub.head":"Three dollars. Done.","sub.sub":"No recurring charge, no account. Pay once, get the code, keep reading.",
    "sub.access":"Full access","sub.cyc":"one-time · lifetime feed access",
    "perk1":"The complete AI & robotics feed, always current","perk2":"Subscriber-only Telegram channel from Azamat & Kuanysh","perk3":"Field notes: what we're building in antibody ML & robotics","perk4":"No ads, no recurring billing, no data resale",
    "sub.cta":"Unlock now via Tribute","pay.head":"How payment works","pay.tribute.d":"Handles the charge & channel access","pay.safe":"SAFE",
    "pay.note":"Tribute processes the $3 and adds you to the private channel automatically — no banking details ever touch this page. After paying, you'll receive your access code to unlock the feed here too.",
    "foot.writers":"Writers","foot.feed":"Feed","foot.subscribe":"Subscribe",
    "foot.fine":"© 2026 Azamat Armanuly & Kuanysh Magauin. Headlines are aggregated from public news feeds and link to their original publishers; summaries are our own. This is an independent channel and is not affiliated with the publishers or companies mentioned.",
    "st.fetching":"● Fetching live signal…","st.live":"● Live · updated just now","st.curated":"● Curated · latest signal",
    "u.stories":" stories","u.read":"Read →","u.free":"FREE","cat.ai":"AI","cat.robo":"Robotics","cat.biz":"Business","cat.gov":"Policy",
    "code.ok":"Unlocked. Welcome in.","code.bad":"That code isn't right — check your Tribute receipt."
  },
  kz:{
    "nav.about":"Біз туралы","nav.feed":"Ағын","nav.subscribe":"Жазылу","nav.unlock":"Ашу · $3",
    "hero.status":"АСТАНАДАН ТІКЕЛЕЙ · ЖИ & РОБОТОТЕХНИКА","hero.title1":"Алдыңғы шеп,","hero.title2":"жақыннан.",
    "hero.lede":"Озық ЖИ, гуманоид робототехника және оларды қалыптастыратын зертханалар туралы авторлық арна — бұл салада тек бақылап қоймай, нақты жұмыс істейтін екі адамнан.",
    "hero.who":"Авторлар: Азамат Арманұлы — есептеуіш антидене дизайны және ML · және Қуаныш Мағауин — Apple Certified Trainer және робототехника.",
    "hero.cta1":"Ағынды ашу · $3","hero.cta2":"Авторлармен танысу","hero.note":"Бір реттік $3 · жаңалық ағынына өмір бойы қолжетімділік · Tribute арқылы.",
    "ppl.eyebrow":"01 — Авторлар","ppl.head":"Екі шебер, бір сигнал.","ppl.sub":"Күндерімізді осы салаларда өткіземіз — антидене модельдері, робототехника сабақтары және оқушылар шынымен шығаратын құралдар.",
    "az.role":"Құрылтайшы · Есептеуіш биология және ML",
    "az.bio":"Foldexa.bio-ның бас директоры әрі тең құрылтайшысы — Астанадағы ЖИ негізіндегі антидене дизайны стартапы. Онкологиялық бағыты (EGFR, HER2, PD-L1, VEGFR2) және жарияланған негізгі кандидаты mTie2 бар (mAbs, 2025). KAIST-те магистр дәрежесін алды, IBS Korea-да проф. Хо Мин Кимнің жетекшілігімен есептеуіш антидене дизайнымен айналысты. Haileybury Astana-да робототехника және ЖИ мұғалімі, FLL/FTC жаттықтырушысы, Қазақстан ұлттық робототехника командасының көмекші жаттықтырушысы. Бұрын CYBERPACK.AI және CerebraAI компанияларында ML инженері болған.",
    "az.tag1":"Антидене дизайны","az.f1k":"Жобалары","az.f2v":"4-ші · Jackson Division","az.f3k":"Тілдер","az.f4k":"Интернетте",
    "ku.role":"Robotics & AI Edu Learning Designer · ҚР робототехника құрамасының жаттықтырушысы · Apple Certified Trainer",
    "ku.bio":"Қазақстанда Swift бойынша Apple Certified Trainer атанған алғашқы мұғалімдердің бірі — бұл сертификат оның мектебіне Apple Authorized Training Center мәртебесін әперді. Haileybury Astana-да робототехника мұғалімі әрі iOS әзірлеушісі; Германия, Ирландия, БАӘ, Мысыр және Үндістан педагогтарымен бірге оқыды. Champion's Journey — қазақстандық мектептерге арналған ойындық робототехника қосымшасын бірге жасайды және оқушыларды нақты мобильді қосымшалар шығаруға үйретеді.",
    "ku.tag2":"Apple сертификаты","ku.tag3":"Робототехника коучы","ku.f1k":"Сертификат","ku.f2k":"Сабақ береді","ku.f2v":"iOS әзірлеу · Робототехника","ku.f3k":"Жасаған","ku.f4k":"Орналасқан","ku.f4v":"Астана, ҚР",
    "feed.eyebrow":"02 — Ағын","feed.head":"ЖИ мен робототехникадағы соңғы жаңалықтар.","feed.sub":"Бет ашылған сайын тікелей дереккөздерден автоматты түрде жаңарады. Жазылушылар толық ағынды оқиды.",
    "feed.note":"Тақырыптар түпнұсқа басылымдарға сілтейді және дереккөз тілінде (ағылшын) көрсетіледі.",
    "lock.cyc":" · өмір бойы","lock.title":"Толық ағынды ашу","lock.desc":"Бір төлем. ЖИ мен робототехника бойынша барлық жаңалық жаңартылып тұрады — және жазылушыларға арналған Telegram арнасы.",
    "lock.pay":"Tribute арқылы төлеу · $3","lock.ph":"КІРУ КОДЫ","lock.enter":"Кіру",
    "sub.eyebrow":"03 — Жазылу","sub.head":"Үш доллар. Болды.","sub.sub":"Қайталанатын төлем жоқ, тіркелу жоқ. Бір рет төлеп, кодты алып, оқи беріңіз.",
    "sub.access":"Толық қолжетімділік","sub.cyc":"бір реттік · өмір бойы қолжетімділік",
    "perk1":"ЖИ мен робототехника бойынша толық ағын, әрдайым өзекті","perk2":"Азамат пен Қуаныштан жазылушыларға арналған Telegram арнасы","perk3":"Далалық жазбалар: антидене ML мен робототехникада не жасап жатқанымыз","perk4":"Жарнама жоқ, қайталанатын төлем жоқ, деректі сатпаймыз",
    "sub.cta":"Tribute арқылы ашу","pay.head":"Төлем қалай жүреді","pay.tribute.d":"Төлем мен арнаға кіруді басқарады","pay.safe":"ҚАУІПСІЗ",
    "pay.note":"Tribute $3-ті өңдеп, сізді жеке арнаға автоматты түрде қосады — банк деректері бұл бетке ешқашан түспейді. Төлегеннен кейін ағынды осы жерде ашуға арналған кодты аласыз.",
    "foot.writers":"Авторлар","foot.feed":"Ағын","foot.subscribe":"Жазылу",
    "foot.fine":"© 2026 Азамат Арманұлы & Қуаныш Мағауин. Тақырыптар ашық жаңалық ағындарынан жиналып, түпнұсқа басылымдарға сілтейді; қысқаша мазмұны — біздікі. Бұл тәуелсіз арна және аталған басылымдармен немесе компаниялармен байланысты емес.",
    "st.fetching":"● Тікелей сигнал жүктелуде…","st.live":"● Тікелей · жаңа ғана жаңарды","st.curated":"● Таңдаулы · соңғы сигнал",
    "u.stories":" жаңалық","u.read":"Оқу →","u.free":"ТЕГІН","cat.ai":"ЖИ","cat.robo":"Робототехника","cat.biz":"Бизнес","cat.gov":"Саясат",
    "code.ok":"Ашылды. Қош келдіңіз.","code.bad":"Код дұрыс емес — Tribute түбіртегін тексеріңіз."
  },
  ru:{
    "nav.about":"О нас","nav.feed":"Лента","nav.subscribe":"Подписка","nav.unlock":"Открыть · $3",
    "hero.status":"ПРЯМО ИЗ АСТАНЫ · ИИ И РОБОТОТЕХНИКА","hero.title1":"Передний край,","hero.title2":"вблизи.",
    "hero.lede":"Авторский канал о передовом ИИ, человекоподобной робототехнике и лабораториях, которые их создают — от двух людей, которые сами работают в этой сфере, а не просто наблюдают.",
    "hero.who":"Авторы: Азамат Арманулы — вычислительный дизайн антител и ML · и Куаныш Магауин — Apple Certified Trainer и робототехника.",
    "hero.cta1":"Открыть ленту · $3","hero.cta2":"Познакомиться с авторами","hero.note":"Разовые $3 · пожизненный доступ к ленте новостей · через Tribute.",
    "ppl.eyebrow":"01 — Авторы","ppl.head":"Два создателя, один сигнал.","ppl.sub":"Мы каждый день внутри этих сфер — модели антител, уроки робототехники и инструменты, которые ученики реально выпускают.",
    "az.role":"Основатель · Вычислительная биология и ML",
    "az.bio":"CEO и сооснователь Foldexa.bio — стартапа по дизайну антител на основе ИИ в Астане с онкологическим пайплайном (EGFR, HER2, PD-L1, VEGFR2) и опубликованным ведущим кандидатом mTie2 (mAbs, 2025). Магистр KAIST, где занимался вычислительным дизайном антител под руководством проф. Хо Мин Кима в IBS Korea. Преподаватель робототехники и ИИ в Haileybury Astana, тренер FLL/FTC и ассистент тренера национальной сборной Казахстана по робототехнике. Ранее — ML-инженер в CYBERPACK.AI и CerebraAI.",
    "az.tag1":"Дизайн антител","az.f1k":"Создаёт","az.f2v":"4-е · Jackson Division","az.f3k":"Языки","az.f4k":"В сети",
    "ku.role":"Robotics & AI Edu Learning Designer · тренер сборной РК по робототехнике · Apple Certified Trainer",
    "ku.bio":"Один из первых учителей в Казахстане, ставший Apple Certified Trainer по Swift — сертификация, которая принесла его школе статус Apple Authorized Training Center. Преподаватель робототехники в Haileybury Astana и iOS-разработчик, обучавшийся вместе с педагогами из Германии, Ирландии, ОАЭ, Египта и Индии. Соавтор Champion's Journey — геймифицированного приложения по робототехнике для казахстанских школ; учит детей выпускать настоящие мобильные приложения.",
    "ku.tag2":"Сертификат Apple","ku.tag3":"Тренер робототехники","ku.f1k":"Сертификат","ku.f2k":"Преподаёт","ku.f2v":"iOS-разработка · Робототехника","ku.f3k":"Создаёт","ku.f4k":"Находится","ku.f4v":"Астана, КЗ",
    "feed.eyebrow":"02 — Лента","feed.head":"Свежее в ИИ и робототехнике.","feed.sub":"Обновляется автоматически из живых источников при каждой загрузке страницы. Подписчики читают полный поток.",
    "feed.note":"Заголовки ведут к оригинальным изданиям и показаны на языке источника (английский).",
    "lock.cyc":" · навсегда","lock.title":"Открыть всю ленту","lock.desc":"Один платёж. Все новости ИИ и робототехники, всегда свежие — плюс закрытый Telegram-канал для подписчиков.",
    "lock.pay":"Оплатить через Tribute · $3","lock.ph":"КОД ДОСТУПА","lock.enter":"Ввести",
    "sub.eyebrow":"03 — Подписка","sub.head":"Три доллара. Готово.","sub.sub":"Без регулярных списаний и аккаунта. Заплатите один раз, получите код, читайте.",
    "sub.access":"Полный доступ","sub.cyc":"разово · доступ к ленте навсегда",
    "perk1":"Полная лента ИИ и робототехники, всегда актуальная","perk2":"Закрытый Telegram-канал от Азамата и Куаныша","perk3":"Заметки из практики: что мы строим в ML для антител и робототехнике","perk4":"Без рекламы, без регулярных списаний, без перепродажи данных",
    "sub.cta":"Открыть через Tribute","pay.head":"Как проходит оплата","pay.tribute.d":"Обрабатывает платёж и доступ к каналу","pay.safe":"БЕЗОПАСНО",
    "pay.note":"Tribute обрабатывает $3 и автоматически добавляет вас в закрытый канал — банковские данные никогда не попадают на эту страницу. После оплаты вы получите код доступа, чтобы открыть ленту и здесь.",
    "foot.writers":"Авторы","foot.feed":"Лента","foot.subscribe":"Подписка",
    "foot.fine":"© 2026 Азамат Арманулы & Куаныш Магауин. Заголовки собраны из открытых новостных лент и ведут к оригинальным изданиям; краткие описания — наши. Это независимый канал, не связанный с упомянутыми изданиями или компаниями.",
    "st.fetching":"● Загрузка сигнала…","st.live":"● Онлайн · только что обновлено","st.curated":"● Подборка · последний сигнал",
    "u.stories":" новостей","u.read":"Читать →","u.free":"БЕСПЛАТНО","cat.ai":"ИИ","cat.robo":"Робототехника","cat.biz":"Бизнес","cat.gov":"Политика",
    "code.ok":"Открыто. Добро пожаловать.","code.bad":"Код неверный — проверьте чек Tribute."
  }
};

let LANG = "en";
function t(k){ return (I18N[LANG] && I18N[LANG][k]) || I18N.en[k] || k; }

function applyLang(lang){
  LANG = I18N[lang] ? lang : "en";
  document.documentElement.lang = LANG;
  try{ localStorage.setItem("signal_lang", LANG); }catch(e){ window.__lang = LANG; }
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent = t(el.getAttribute("data-i18n")); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ el.placeholder = t(el.getAttribute("data-i18n-ph")); });
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on", b.dataset.lang===LANG));
  // re-render dynamic bits in the new language
  if(window.__items) render(window.__items);
  refreshStatus();
}
document.querySelectorAll(".lang button").forEach(b=>{
  b.addEventListener("click", ()=>applyLang(b.dataset.lang));
});

/* ====== NEWS (free RSS, zero AI tokens) ====== */
const FALLBACK = [
  {cat:"ai",  title:"Claude Fable 5 back online after 20-day export pause", blurb:"Anthropic's flagship returned July 1 with a new classifier that blocks the jailbreak technique behind June's temporary U.S. export-control ban.", src:"Anthropic", url:"https://www.anthropic.com/news"},
  {cat:"ai",  title:"Anthropic launches Claude Science + a drug-discovery push", blurb:"A research workbench with 60+ preconfigured tools ships in beta, alongside an internal program aimed at neglected diseases.", src:"AI Tools Recap", url:"https://aitoolsrecap.com/Blog/AINewsJuly2026.aspx"},
  {cat:"robo",title:"UBTECH's UWORLD U1 humanoid takes 13,000+ pre-orders", blurb:"The ~$17,600 bot claims 88 degrees of freedom and an emotion-aware model reading 20+ states — pitched for long-term companionship.", src:"The Register", url:"https://www.theregister.com/ai-and-ml/2026/07/02/"},
  {cat:"robo",title:"Figure AI hits one robot per hour at its BotQ factory", blurb:"Figure 03 production scales past 350 units as humanoid makers shift from demos to real manufacturing throughput.", src:"Humanoid Press", url:"https://www.humanoid.press/humanoid-daily/"},
  {cat:"robo",title:"Boston Dynamics' electric Atlas begins real deployments", blurb:"The 56-DOF production Atlas heads to Hyundai's Georgia Metaplant, with Google DeepMind's Gemini Robotics handling reasoning.", src:"Interesting Engineering", url:"https://interestingengineering.com/ai-robotics/9-humanoid-robots-at-ces-2026"},
  {cat:"ai",  title:"China's GLM-5.2 reignites the frontier-parity debate", blurb:"Z.ai's inexpensive model posts capabilities near top U.S. labs, sharpening questions about how fast the gap is closing.", src:"Crescendo AI", url:"https://www.crescendo.ai/news/latest-ai-news-and-updates"},
  {cat:"robo",title:"NVIDIA ships Isaac GR00T, Cosmos & Newton 1.0", blurb:"Open robot-foundation models, world models for synthetic data, and an open physics engine aim to speed dexterous-manipulation training.", src:"NVIDIA", url:"https://blogs.nvidia.com/blog/national-robotics-week-2026/"},
  {cat:"gov", title:"UN opens its Global Dialogue on AI Governance in Geneva", blurb:"Member states meet July 6 to weigh shared rules as a scientific panel warns governance isn't keeping pace with capability.", src:"UN News", url:"https://news.un.org/en/story/2026/07/1167848"},
  {cat:"robo",title:"NVIDIA Halos brings a full-stack safety layer to robots", blurb:"Extending its autonomous-vehicle safety work to physical AI, with Agility's Digit as the first commercial humanoid to adopt it.", src:"Humanoid Press", url:"https://www.humanoid.press/humanoid-daily/"},
  {cat:"robo",title:"Samsung becomes Rainbow Robotics' largest shareholder", blurb:"The move deepens Samsung's bet on humanoids and pushes faster commercialization of high-performance platforms.", src:"Humanoid Press", url:"https://www.humanoid.press/humanoid-daily/"},
  {cat:"biz", title:"Global VC hits a record $510B in H1 2026", blurb:"OpenAI and Anthropic together absorbed roughly 43% of the first-half total as AI capital concentrates at the top.", src:"AI Tools Recap", url:"https://aitoolsrecap.com/Blog/AINewsJuly2026.aspx"},
  {cat:"ai",  title:"A physics-trained model discovers rare-earth-free magnets", blurb:"Ames Lab's DuctGPT invents new magnetic materials while weighing production cost — cutting reliance on imported rare earths.", src:"Crescendo AI", url:"https://www.crescendo.ai/news/latest-ai-news-and-updates"}
];
const FEEDS = [
  {cat:"ai",  rss:"https://news.google.com/rss/search?q=artificial+intelligence+model+when:5d&hl=en-US&gl=US&ceid=US:en"},
  {cat:"robo",rss:"https://news.google.com/rss/search?q=humanoid+robot+robotics+when:5d&hl=en-US&gl=US&ceid=US:en"}
];
const BRIDGE = "https://api.rss2json.com/v1/api.json?rss_url=";
const CATCLS = {ai:"k-ai",robo:"k-robo",biz:"k-biz",gov:"k-gov"};

const $ = s => document.querySelector(s);
const grid = $("#feedGrid");
let liveState = "fetching";
function esc(s){return (s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function host(u){try{return new URL(u).hostname.replace(/^www\./,"");}catch(e){return "";}}

function cardHTML(it, free){
  const cls = CATCLS[it.cat] || "k-ai";
  const label = t("cat."+it.cat);
  return '<a class="card glass" href="'+esc(it.url)+'" target="_blank" rel="noopener">'
    +'<div class="kicker '+cls+'">● '+esc(label)
    +(free ? '<span class="free-badge">'+esc(t("u.free"))+'</span>' : '')+'</div>'
    +'<h3>'+esc(it.title)+'</h3>'
    +(it.blurb ? '<p>'+esc(it.blurb)+'</p>' : '')
    +'<div class="src"><span>'+esc(it.src||host(it.url))+'</span><span class="arrow">'+esc(t("u.read"))+'</span></div></a>';
}
function render(items){
  window.__items = items;
  const list = items.slice(0,12);
  // First 2 AI stories are free to read; the rest sit behind the paywall blur.
  const preview = [], rest = [];
  for(const it of list){
    if(preview.length < 2 && it.cat === "ai") preview.push(it);
    else rest.push(it);
  }
  $("#feedPreview").innerHTML = preview.map(it=>cardHTML(it,true)).join("");
  grid.innerHTML = rest.map(it=>cardHTML(it,false)).join("");
  $("#countChip").textContent = list.length + t("u.stories");
}
function refreshStatus(){
  const map={fetching:"st.fetching",live:"st.live",curated:"st.curated"};
  $("#statusChip").textContent = t(map[liveState]||"st.curated");
}
function stamp(){
  const d=new Date();
  $("#dateChip").textContent=d.toLocaleDateString(LANG==="en"?undefined:(LANG==="ru"?"ru-RU":"kk-KZ"),{month:"short",day:"numeric",year:"numeric"});
}
function cleanText(s){
  return (s||"").replace(/<[^>]+>/g," ").replace(/&[a-z#0-9]+;/gi," ").replace(/\s+/g," ").trim();
}
/* Google News titles end with " - Source" and descriptions repeat the headline; tidy both. */
function normItem(cat, rawTitle, desc, srcHint, url){
  const raw=(rawTitle||"").trim();
  const src=((srcHint||"").trim())||raw.split(" - ").pop()||"News";
  const title=raw.endsWith(" - "+src)?raw.slice(0,-(" - "+src).length):raw;
  let blurb=cleanText(desc);
  if(title && blurb.startsWith(title.slice(0,60)))blurb="";
  if(blurb)blurb=blurb.slice(0,150)+"…";
  return {cat:cat,title:title,blurb:blurb,src:src,url:(url||"").trim()};
}
async function pull(feed){
  // Primary bridge: rss2json (free tier, occasionally rate-limited)
  try{
    const r=await fetch(BRIDGE+encodeURIComponent(feed.rss)); if(!r.ok)throw 0;
    const j=await r.json(); if(!j.items||!j.items.length)throw 0;
    return j.items.slice(0,7).map(x=>normItem(feed.cat,x.title,x.description,"",x.link))
      .filter(x=>x.title&&x.url);
  }catch(e){}
  // Fallback bridges: raw CORS proxies + native XML parsing
  const proxies=[
    u=>"https://api.allorigins.win/raw?url="+encodeURIComponent(u),
    u=>"https://corsproxy.io/?url="+encodeURIComponent(u)
  ];
  for(const proxy of proxies){
    try{
      const r=await fetch(proxy(feed.rss)); if(!r.ok)throw 0;
      const xml=new DOMParser().parseFromString(await r.text(),"text/xml");
      const items=[...xml.querySelectorAll("item")].slice(0,7).map(it=>{
        const g=n=>((it.querySelector(n)||{}).textContent||"");
        return normItem(feed.cat,g("title"),g("description"),g("source"),g("link"));
      }).filter(x=>x.title&&x.url);
      if(items.length)return items;
    }catch(e){}
  }
  return [];
}
/* Prebuilt news.json — refreshed every 6h by a GitHub Actions cron (free, zero AI tokens).
   Falls back to in-browser RSS bridges, then to the curated list. */
const NEWS_SOURCES = [
  "https://raw.githubusercontent.com/aza9908/signal-news/main/news.json",
  "news.json"
];
async function loadPrebuilt(){
  for(const src of NEWS_SOURCES){
    try{
      const r=await fetch(src+(src.startsWith("http")?"?t="+Date.now():""),{cache:"no-store"});
      if(!r.ok)continue;
      const j=await r.json();
      const fresh = j.updated && (Date.now()-Date.parse(j.updated)) < 36*3600e3;
      if(j.items && j.items.length>=6 && fresh) return j.items.slice(0,12);
    }catch(e){}
  }
  return null;
}
async function loadFeed(){
  render(FALLBACK); stamp(); refreshStatus();
  const prebuilt = await loadPrebuilt();
  if(prebuilt){ render(prebuilt); liveState="live"; refreshStatus(); return; }
  try{
    const batches=await Promise.all(FEEDS.map(pull));
    let live=batches.flat();
    if(live.length>=6){
      const ai=live.filter(x=>x.cat==="ai"), ro=live.filter(x=>x.cat==="robo"), mixed=[];
      for(let i=0;i<Math.max(ai.length,ro.length);i++){ if(ai[i])mixed.push(ai[i]); if(ro[i])mixed.push(ro[i]); }
      render(mixed.concat(FALLBACK).slice(0,12)); liveState="live";
    }else{ liveState="curated"; }
  }catch(e){ liveState="curated"; }
  refreshStatus();
}

/* ====== PAYWALL ====== */
const KEY="signal_unlocked_v1";
function isUnlocked(){ try{return localStorage.getItem(KEY)==="1";}catch(e){return window.__unlocked===true;} }
function setUnlocked(){ try{localStorage.setItem(KEY,"1");}catch(e){window.__unlocked=true;} }
function applyLock(){ const s=$("#feedShell"); if(isUnlocked()){s.classList.remove("locked");s.classList.add("unlocked");} }
$("#payBtn").href=TRIBUTE_URL;
$("#codeBtn").addEventListener("click",()=>{
  const v=$("#codeInput").value.trim().toUpperCase(), msg=$("#codeMsg");
  if(v===ACCESS_CODE.toUpperCase()){ setUnlocked(); applyLock(); msg.className="codemsg ok"; msg.textContent=t("code.ok"); }
  else{ msg.className="codemsg"; msg.textContent=t("code.bad"); }
});
$("#codeInput").addEventListener("keydown",e=>{ if(e.key==="Enter")$("#codeBtn").click(); });

/* ====== reveal ====== */
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

/* ====== boot ====== */
let saved="en";
try{ saved=localStorage.getItem("signal_lang")||"en"; }catch(e){ saved=window.__lang||"en"; }
applyLang(saved);
applyLock();
loadFeed();
