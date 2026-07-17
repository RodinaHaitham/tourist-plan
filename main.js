/* ============================================================
   القرية السياحية العالمية — Vanilla JS
   Data rendering, mobile menu, modal, scroll effects
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Data ---------- */
  const projects = [
    { n: 1, cat: 'الضيافة', ar: 'فندق أزور الدولي', en: 'Azure International Hotel',
      desc: 'فندق خمس نجوم بتصميم دائري أيقوني بواجهات زجاجية زرقاء متدرجة يمنح النزلاء إطلالات بانورامية بزاوية 360 درجة.',
      loc: 'الواجهة الشمالية للمخطط', img: 'images/hotel_azure_5cc06205.jpg' },
    { n: 2, cat: 'الصحة والاستشفاء', ar: 'مستشفى سلطان الدولي', en: 'Sultan International Hospital',
      desc: 'صرح طبي فاخر بأبراج زجاجية تتوجها قمة كريستالية، يقدم خدمات طبية تخصصية بمعايير عالمية.',
      loc: 'الجهة الغربية للمخطط', img: 'images/hospital_sultan_b92c8306.png' },
    { n: 3, cat: 'الإقامة', ar: 'مجمع البروج السكني السياحي', en: 'Al Burooj Residential Tourist Complex',
      desc: 'أربعة أبراج حديثة (A–D) تحيط بها منطقة فلل راقية، بخيارات تملك وإيجار متنوعة.',
      loc: 'الواجهة الشرقية للمخطط', img: 'images/residential_burooj_20058c9e.png' },
    { n: 4, cat: 'الثقافة والفنون', ar: 'المسرح الدولي للفنون', en: 'International Arts Theater',
      desc: 'صرح ثقافي بطراز كلاسيكي فخم تعلوه قبة ذهبية مضيئة، منارة للفنون والعروض العالمية.',
      loc: 'الشمال الشرقي للمخطط', img: 'images/theater_arts_c175e1d9.png' },
    { n: 5, cat: 'الرياضة والترفيه', ar: 'مركز التزلج على الجليد', en: 'Ice Skating Center',
      desc: 'صالة تزلج عصرية بعمارة انسيابية وسقف أبيض متموج، مؤهلة لاستضافة البطولات الدولية.',
      loc: 'الشمال الغربي للمخطط', img: 'images/ice_skating_9f1f29b8.png' },
    { n: 6, cat: 'التجارة والتسوق', ar: 'مركز عمان للتسوق', en: 'Oman Shopping Center',
      desc: 'مول تجاري عصري بسقف مقوس وواجهات زجاجية يضم علامات تجارية عالمية ومحلية.',
      loc: 'جنوب المخطط قرب المدخل الرئيسي', img: 'images/shopping_mall_eec12963.png' },
    { n: 7, cat: 'الترفيه العائلي', ar: 'الحديقة المائية', en: 'Water Park',
      desc: 'منزلقات حلزونية ملونة وحوض أمواج فيروزي ونهر متعرج تحيط بها أسوار بطراز القلاع العمانية.',
      loc: 'الجنوب الشرقي للمخطط', img: 'images/water_park_8d861533.png' },
    { n: 8, cat: 'الترفيه العائلي', ar: 'حديقة الحيوانات الدولية', en: 'International Zoo',
      desc: 'بوابة مستوحاة من الحصون العمانية، بيئات طبيعية مفتوحة وواحة قطبية ومروج أوروبية.',
      loc: 'الجنوب الغربي للمخطط', img: 'images/zoo_international_7f1ba692.png' },
    { n: 9, cat: 'الثقافة والتراث', ar: 'نفحة التراث العماني والأسواق', en: 'Omani Heritage & Souqs',
      desc: 'سوق تراثي محصن بقبة ذهبية مركزية وأبراج مراقبة، يحتضن الحرف اليدوية العمانية والمقاهي الشعبية.',
      loc: 'قلب المخطط (المركز)', img: 'images/souq_heritage_5d2abb59.png' }
  ];

  const leaders = [
    { name: 'سلطان البسامي', role: 'الرئيس التنفيذي ورئيس مجلس الإدارة',
      img: 'images/leader_sultan_real_5c3ec135.jpeg',
      quote: 'انطلقنا من رؤية واضحة: أن نصنع على أرض عمان الطيبة وجهة سياحية متكاملة تليق بمكانة السلطنة وتاريخها العريق. القرية السياحية العالمية منظومة حياة تجمع الضيافة والعلاج والثقافة والترفيه لتكون إرثاً للأجيال.' },
    { name: 'أنطوان شموني', role: 'المستثمر ومدير عام الإدارة المالية',
      img: 'images/leader_antoine_real_a61fdab6.jpeg',
      quote: 'آمنت بهذا المشروع منذ اللحظة الأولى لأنه يقوم على أسس استثمارية صلبة: موقع استراتيجي وتنوع في مصادر الدخل عبر تسعة مشاريع متكاملة وإدارة مالية رشيدة تضمن الاستدامة والنمو.' },
    { name: 'عبدالحميد وجية', role: 'مدير إدارة الاحتفالات والمناسبات',
      img: 'images/leader_abdulhamid_real_bf2f8634.jpeg',
      quote: 'القرية ستكون مسرحاً نابضاً بالحياة على مدار العام؛ مهرجانات وفعاليات ومناسبات عالمية تحتفي بالتراث العماني وتجعل من القرية وجهة الاحتفالات الأولى في المنطقة.' }
  ];

  const departments = [
    ['إدارة المشاريع', 'الإشراف على تخطيط وتنفيذ المشاريع التسعة ومتابعة الجودة والمقاولين.'],
    ['إدارة النقليات', 'إدارة أسطول النقل والتنقل الداخلي للزوار والخدمات اللوجستية.'],
    ['إدارة الشؤون الصحية', 'الإشراف على الخدمات الطبية ودعم منظومة السياحة العلاجية.'],
    ['إدارة التنسيق والمتابعة', 'تنسيق العمل بين الإدارات والجهات الحكومية ومتابعة القرارات.'],
    ['إدارة الشؤون القانونية', 'صياغة العقود وحماية الحقوق وضمان الامتثال للأنظمة العمانية.'],
    ['إدارة الحفلات والمناسبات', 'تنظيم المهرجانات والفعاليات العالمية على مدار العام.'],
    ['إدارة نظم المعلومات والتقنية', 'البنية الرقمية وأنظمة التشغيل الذكية وأمن المعلومات.'],
    ['إدارة الإعلام والتسويق', 'الهوية الإعلامية والحملات التسويقية محلياً ودولياً.'],
    ['إدارة الشؤون المالية', 'التخطيط المالي والموازنات والتدقيق وإدارة الاستثمارات.']
  ];

  const axes = [
    ['الإقامة والضيافة', 'فندق أزور الدولي، مجمع البروج السكني', 'السياح والمقيمون'],
    ['الصحة والاستشفاء', 'مستشفى سلطان الدولي', 'السياحة العلاجية'],
    ['الثقافة والتراث', 'المسرح الدولي، نفحة التراث العماني', 'عشاق الثقافة والفنون'],
    ['الترفيه العائلي', 'الحديقة المائية، حديقة الحيوانات، مركز التزلج', 'العائلات والشباب'],
    ['التجارة والتسوق', 'مركز عمان للتسوق', 'جميع الزوار والمنطقة المحيطة']
  ];

  const contactItems = [
    ['العنوان', 'سلطنة عمان — موقع المشروع: الأرض السياحية 201,000 م²'],
    ['الهاتف', '+968 9807 2328'],
    ['البريد الإلكتروني', 'info@tourist-village.com'],
    ['الموقع الإلكتروني', 'www.global-tourist-village.com'],
    ['ساعات العمل', 'على مدار الساعة — 24/7']
  ];

  const routes = [
    { title: 'مطار مسقط الدولي', en: 'Muscat International Airport', dist: '~45 كم', time: '~35 دقيقة', via: 'مباشرة عبر طريق الباطنة السريع باتجاه بركاء' },
    { title: 'مركز مدينة مسقط', en: 'Muscat City Centre', dist: '~70 كم', time: '~50 دقيقة', via: 'عبر طريق السلطان قابوس ثم طريق الباطنة السريع' },
    { title: 'طريق الباطنة السريع', en: 'Al Batinah Highway — Route 1', dist: 'وصول مباشر', time: 'دقائق', via: 'من مخرج بركاء مباشرة إلى المدخل الرئيسي الجنوبي' },
    { title: 'ميناء صحار', en: 'Sohar Port', dist: '~170 كم', time: '~ساعة و45 د', via: 'عبر طريق الباطنة السريع باتجاه الشمال الغربي' }
  ];

  /* ---------- Helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const create = (tag, cls, html) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html !== undefined) el.innerHTML = html;
    return el;
  };

  /* ---------- Render: Projects ---------- */
  const projectsGrid = $('projectsGrid');
  projects.forEach((p) => {
    const card = create('button', 'project-card reveal');
    card.setAttribute('type', 'button');
    card.innerHTML = `
      <div class="project-media">
        <img src="${p.img}" alt="${p.ar}" loading="lazy" />
        <div class="project-tags">
          <span class="chip-num">${p.n}</span>
          <span class="chip-cat">${p.cat}</span>
        </div>
      </div>
      <div class="project-body">
        <h3>${p.ar}</h3>
        <div class="project-en">${p.en}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-loc">${p.loc}</div>
      </div>`;
    card.addEventListener('click', () => openModal(p));
    projectsGrid.appendChild(card);
  });

  /* ---------- Render: Leaders ---------- */
  const leadersGrid = $('leadersGrid');
  leaders.forEach((l) => {
    const el = create('article', 'leader-card reveal');
    el.innerHTML = `
      <div class="leader-media"><img src="${l.img}" alt="${l.name}" loading="lazy" /></div>
      <div class="leader-body">
        <h3>${l.name}</h3>
        <div class="leader-role">${l.role}</div>
        <div class="leader-quote-label">كلمة عن الشركة</div>
        <blockquote class="leader-quote">${l.quote}</blockquote>
      </div>`;
    leadersGrid.appendChild(el);
  });

  /* ---------- Render: Departments ---------- */
  const deptGrid = $('deptGrid');
  departments.forEach((d, i) => {
    const el = create('div', 'dept-card reveal');
    const num = String(i + 1).padStart(2, '0');
    el.innerHTML = `
      <div class="dept-head"><h4>${d[0]}</h4><span class="dept-num">${num}</span></div>
      <p>${d[1]}</p>`;
    deptGrid.appendChild(el);
  });

  /* ---------- Render: Axes table ---------- */
  const axesBody = $('axesBody');
  axes.forEach((r) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td>`;
    axesBody.appendChild(tr);
  });

  /* ---------- Render: Contact ---------- */
  const contactList = $('contactList');
  contactItems.forEach(([k, v]) => {
    const li = create('li');
    li.innerHTML = `<b>${k}</b><span>${v}</span>`;
    contactList.appendChild(li);
  });

  const routesGrid = $('routesGrid');
  routes.forEach((r) => {
    const el = create('div', 'route-card');
    el.innerHTML = `
      <div class="rt-title">${r.title}</div>
      <div class="rt-en">${r.en}</div>
      <div class="route-row">
        <div><b>${r.dist}</b><small>المسافة</small></div>
        <div class="col-r"><b>${r.time}</b><small>زمن الوصول</small></div>
      </div>
      <p class="rt-via">${r.via}</p>`;
    routesGrid.appendChild(el);
  });

  /* ---------- Render: interest select ---------- */
  const interestSelect = $('interestSelect');
  projects.forEach((p) => {
    const opt = document.createElement('option');
    opt.textContent = p.ar;
    interestSelect.appendChild(opt);
  });
  ['استثمار شامل في الوجهة', 'شراكة أخرى'].forEach((t) => {
    const opt = document.createElement('option');
    opt.textContent = t;
    interestSelect.appendChild(opt);
  });

  /* ---------- Modal ---------- */
  const modal = $('modal');
  function openModal(p) {
    $('modalImg').src = p.img;
    $('modalImg').alt = p.ar;
    $('modalNum').textContent = p.n;
    $('modalCat').textContent = p.cat;
    $('modalTitle').textContent = p.ar;
    $('modalEn').textContent = p.en;
    $('modalDesc').textContent = p.desc;
    $('modalLoc').textContent = p.loc;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ---------- Mobile menu ---------- */
  const menuBtn = $('menuBtn');
  const navLinks = $('navLinks');
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Nav shadow on scroll ---------- */
  const nav = $('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 8px 24px -12px rgba(0,0,0,0.5)' : 'none';
  }, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .section h2, .section .lead').forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });

  /* ---------- Contact form ---------- */
  $('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('تم استلام طلبك، سنتواصل معك قريباً.');
    e.target.reset();
  });

  /* ---------- Footer year ---------- */
  $('year').textContent = new Date().getFullYear();
})();
