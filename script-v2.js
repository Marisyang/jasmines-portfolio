const A='./assets/';
const groups=[
  {id:'graphic',zh:'平面与视觉研究',en:'Graphic Design & Visual Research'},
  {id:'digital',zh:'数字体验',en:'Digital Experience'},
  {id:'photo',zh:'摄影',en:'Photography'},
  {id:'film',zh:'影像',en:'Moving Image'},
  {id:'threeD',zh:'三维探索',en:'3D Exploration'}
];
// These notes list the supplied files and visible features without inferring intent.
const projects=[
  {slug:'sound-overload',zhTitle:'声音过载',enTitle:'Sound Overload',group:'graphic',zh:'四张声音过载主题故事板，分别呈现商业、交通、旅游和竞赛场景。',en:'Four Sound Overload storyboards featuring business, transit, tourism, and competition settings.',cover:'mixue-storyboard.jpg',tone:'dark',gallery:['research-2.jpg','research-3.jpg','research-4.jpg','mixue-storyboard.jpg','transit-storyboard.jpg','tourism-storyboard.jpg','compete-storyboard.jpg']},
  {slug:'sound-overload-research',zhTitle:'声音过载：设计调研与分析',enTitle:'Sound Overload: Design Research & Analysis',group:'graphic',zh:'围绕“声音过载”互动问卷的设计调研，展示问卷结构、场景声音感知与可视化分析，以及声格倾向结果。',en:'Design research for the Sound Overload interactive questionnaire, showing its structure, visual analysis of sound perception in different settings, and sound persona results.',cover:'design-research-a2-2.jpg',tone:'dark',gallery:['design-research-a2-1.jpg','design-research-a2-2.jpg','design-research-a2-3.jpg','design-research-a2-4.jpg'],pdf:'https://marisyang.github.io/jasmines-portfolio/assets/design-research-a2.pdf',pdfZh:'查看完整设计调研 PDF',pdfEn:'View the complete design research PDF'},
  {slug:'choral-concert',zhTitle:'听风起，见荔海',enTitle:'Choral Concert Poster & Booklet',group:'graphic',zh:'2026 年合唱专场的海报与谱册设计。',en:'Poster and booklet design for a 2026 choral concert.',cover:'choral-poster.jpg',tone:'blue',gallery:['choral-poster.jpg','choral-booklet.jpg'],pdf:'choral-booklet.pdf',pdfZh:'查看完整谱册 PDF',pdfEn:'View the complete booklet PDF'},
  {slug:'memphis',zhTitle:'后现代主义的第一声嚎叫',enTitle:'The First Roar of Postmodernism',group:'graphic',zh:'一本以孟菲斯设计为主题的课程手册，包含设计史资料与页面编排。',en:'A course booklet about Memphis design, combining design history research and page layouts.',cover:'memphis-cover-01.jpg',tone:'pink',gallery:['memphis-07.jpg','memphis-08.jpg','memphis-09.jpg','memphis-10.jpg'],pdf:'memphis-book.pdf',pdfZh:'阅读完整手册 PDF',pdfEn:'Read the complete booklet PDF'},
  {slug:'sisd-in-mc',zhTitle:'SISD in MC',enTitle:'SISD in MC',group:'graphic',zh:'两张课程视觉练习版面，分别使用校园建筑照片和游戏角色图像。',en:'Two visual design exercises using campus architecture photographs and game character imagery.',cover:'sis-design-1.jpg',tone:'white',gallery:['sis-design-1.jpg','sis-design-2.jpg']},
  {slug:'sound-persona',zhTitle:'声格测试',enTitle:'Sound Persona',group:'digital',zh:'一个声音探索网页，包含蜜雪冰城、自然旅游景点、考场和高铁站四种场景，以及测试结果页面。',en:'An interactive sound exploration website with four settings: Mixue, a nature destination, an exam room, and a train station, plus a results page.',cover:'sound-10.jpg',tone:'dark',gallery:['sound-02.jpg','sound-14.jpg','sound-16.jpg','sound-23.jpg','sound-28.jpg'],url:'https://9kxg70pv4-soundpersonapreview-10u3y6r3co.maozi.io/',pdf:'sound-persona-preview.pdf',pdfZh:'查看网页预览 PDF',pdfEn:'View the website preview PDF'},
  {slug:'yesterday-sky',zhTitle:'昨日晴空',enTitle:'Yesterday’s Sky',group:'photo',zh:'一组以校园建筑与天空为主题的摄影作品。',en:'A photography series featuring campus buildings and the sky.',cover:'photo-2.jpg',tone:'dark',gallery:['photo-1.jpg','photo-2.jpg','photo-3.jpg','photo-4.jpg','photo-5.jpg','photo-7.jpg'],pdf:'photo-series.pdf',pdfZh:'查看完整摄影作品 PDF',pdfEn:'View the complete photography PDF'},
  {slug:'preset-life',zhTitle:'Preset Life',enTitle:'Preset Life',group:'film',zh:'一部 AI 影像短片，附有海报和影片画面。',en:'An AI-assisted short film presented with its poster and selected frames.',cover:'preset-poster.jpg',tone:'dark',gallery:['preset-poster.jpg','preset-still-1.jpg','preset-still-2.jpg'],video:'preset-life.mp4'},
  {slug:'paper-name',zhTitle:'一纸假名',enTitle:'A Name on Paper',group:'film',zh:'一部 AI 影像短片，附有影片画面。',en:'An AI-assisted short film presented with selected frames.',cover:'paper-cover.jpg',tone:'dark',gallery:['paper-still-1.jpg','paper-still-2.jpg'],video:'paper-name.mp4'},
  {slug:'modeling-study',zhTitle:'三维建模练习',enTitle:'3D Modeling Study',group:'threeD',zh:'一张展示二维图像、模型制作与最终渲染的三维练习过程图。',en:'A process image showing a 2D reference, model creation, and the final 3D render.',cover:'modeling.jpg',tone:'white',gallery:['modeling.jpg']}
];
const main=document.getElementById('mainContent'),menu=document.getElementById('menuPanel'),menuButton=document.getElementById('menuButton');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const asset=n=>/^https?:\/\//.test(n)?n:A+encodeURIComponent(n);
const bi=(zh,en,extra='')=>`<span class="bi ${extra}"><span class="bi-zh" lang="zh-CN">${esc(zh)}</span><span class="bi-en" lang="en">${esc(en)}</span></span>`;
const title=p=>p.zhTitle===p.enTitle?esc(p.zhTitle):bi(p.zhTitle,p.enTitle);
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{menu.hidden=!menu.hidden;menuButton.setAttribute('aria-expanded',String(!menu.hidden));});
document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

function row(p){
  const g=groups.find(x=>x.id===p.group);
  return `<button class="project-row" type="button" data-project="${p.slug}" aria-label="${esc(p.zhTitle)} / ${esc(p.enTitle)}"><span class="number">${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span class="title">${title(p)}</span><span class="description">${bi(p.zh,p.en)}</span><span class="category">${bi(g.zh,g.en)}</span><span class="year">2026</span><span class="arrow" aria-hidden="true">↗</span></button>`;
}
function home(){
  document.title='Jasmine‘s — Portfolio';
  main.innerHTML=`<div class="home"><section class="intro-space"><div class="intro-index">PORTFOLIO / 2026</div></section><div class="section-nav"><a href="#work">${bi('作品','Work')} <span>↓</span></a></div><section id="work" aria-label="Works">${groups.map((g,i)=>`<section class="work-group"><div class="group-heading"><span>${String(i+1).padStart(2,'0')} / 05</span><h2>${bi(g.zh,g.en)}</h2><span>${String(projects.filter(p=>p.group===g.id).length).padStart(2,'0')} WORKS</span></div><div class="project-list">${projects.filter(p=>p.group===g.id).map(row).join('')}</div></section>`).join('')}</section><div class="home-ending"><strong>Jasmine‘s.</strong></div></div><div id="hoverPreview" class="hover-preview" aria-hidden="true"></div>`;
  const preview=document.getElementById('hoverPreview');
  main.querySelectorAll('[data-project]').forEach(el=>{const p=projects.find(x=>x.slug===el.dataset.project);const show=()=>{preview.innerHTML=`<img src="${asset(p.cover)}" alt="">`;preview.classList.add('active');};const hide=()=>preview.classList.remove('active');el.addEventListener('click',()=>{location.hash='#project='+p.slug;});el.addEventListener('mouseenter',show);el.addEventListener('mouseleave',hide);el.addEventListener('focus',show);el.addEventListener('blur',hide);});
}
function image(name,i){const wide=/^(research|photo|modeling)/.test(name),tall=/storyboard|sound-/.test(name);return `<figure class="gallery-item ${wide?'wide':tall?'tall':''}"><img src="${asset(name)}" alt="Work image ${i+1}" loading="lazy"></figure>`;}
function detail(p){
  document.title=`${p.enTitle} — Jasmine‘s`;
  const g=groups.find(x=>x.id===p.group),next=projects[(projects.indexOf(p)+1)%projects.length];
  const cover=p.slug==='sound-persona'?`<div class="phone-stack" aria-label="Three Sound Persona screens"><img src="${asset('sound-02.jpg')}" alt="Question screen"><img src="${asset('sound-10.jpg')}" alt="Scene screen"><img src="${asset('sound-23.jpg')}" alt="Results screen"></div>`:p.video?`<video controls playsinline preload="metadata" poster="${asset(p.cover)}" aria-label="Play ${esc(p.enTitle)}"><source src="${asset(p.video)}" type="video/mp4"></video>`:`<img class="${/^(photo|modeling)/.test(p.cover)?'wide':''}" src="${asset(p.cover)}" alt="${esc(p.enTitle)} cover">`;
  main.innerHTML=`<article class="detail"><div class="detail-top"><a class="back-link" href="#">${bi('← 返回作品','← Back to work')}</a><span class="detail-kicker">${String(projects.indexOf(p)+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span></div><h1 class="detail-title">${title(p)}</h1><div class="detail-meta"><div>${bi('项目','Project','meta-label')}${bi(g.zh,g.en)}<span class="meta-year">2026</span></div><div>${bi('简介','Overview','meta-label')}<div class="summary">${bi(p.zh,p.en)}</div></div><div>${bi('媒介','Medium','meta-label')}${bi(g.zh,g.en)}</div></div><div class="detail-hero ${p.tone}">${cover}</div><section class="detail-copy"><h2>${bi('作品介绍','About this work')}</h2><p>${bi(p.zh,p.en)}</p></section><section><div class="gallery-heading"><h2>${bi('作品图像','Selected images')}</h2><span>${String(p.gallery.length).padStart(2,'0')} IMAGES</span></div><div class="gallery">${p.gallery.map(image).join('')}</div></section><div class="project-links">${p.url?`<a class="document-link primary-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${bi('进入声格测试网站','Visit Sound Persona')}<span aria-hidden="true">↗</span></a>`:''}${p.pdf?`<a class="document-link" href="${asset(p.pdf)}" target="_blank" rel="noopener">${bi(p.pdfZh,p.pdfEn)}<span aria-hidden="true">↗</span></a>`:''}</div><a class="next-project" href="#project=${next.slug}"><span class="next-label">${bi('下一个项目','Next project')}</span><strong>${title(next)}</strong><span class="next-arrow">↗</span></a></article>`;
}
function route(){closeMenu();const hash=decodeURIComponent(location.hash.slice(1));if(hash.startsWith('project=')){const p=projects.find(x=>x.slug===hash.slice(8));p?detail(p):home();}else home();window.scrollTo(0,0);if(hash==='work')document.getElementById('work')?.scrollIntoView();}
window.addEventListener('hashchange',route);route();
function tick(){document.getElementById('clock').textContent=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());}tick();setInterval(tick,1000);
