/* NexoSphere — single-file interactive app */

/* ---------- ICONS ---------- */
const I = {
  home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>`,
  network:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="17" r="2.6"/><path d="M4 20c.8-3.4 3.4-5 5.2-5 3 0 4 2 4 4"/></svg>`,
  market:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h18l-1 3H4z"/><path d="M5 11v9h14v-9"/><path d="M3 8l2-4h14l2 4"/></svg>`,
  jobs:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>`,
  inbox:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13V7l3-4h12l3 4v6"/><path d="M3 13h6l1 2h4l1-2h6v8H3z"/></svg>`,
  workspace:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  personal:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2"/></svg>`,
  career:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h16v11H4z"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  professional:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  creator:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h4l1-2h8l1 2h4v13H3z"/><circle cx="12" cy="12" r="3.2"/></svg>`,
  educator:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>`,
  partner:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M4 20c1-4 4-6 8-6s7 2 8 6"/></svg>`,
  business:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21V8l6-4 6 4v13"/><path d="M15 12h6v9"/><path d="M9 13h.01M9 17h.01"/></svg>`,
  org:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="4" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/><path d="M12 6v6M12 12H5v5M12 12h7v5"/></svg>`,
  bell:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 1 1 12 0v5l1.5 3h-15L6 13z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>`,
  translate:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h9M7 4v2M4 6c1 5 4 8 8 8"/><path d="M12 10c-1 3-3 5-6 6"/><path d="M13 20l4-9 4 9M14.5 17h5"/></svg>`,
  db:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="2.5"/><path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5"/><path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6"/></svg>`,
  moon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10z"/></svg>`,
  sun:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  search:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  spark:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/></svg>`,
  chev:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>`,
  chevR:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>`,
  panel:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>`,
  money:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18"/><path d="M17 7H9.5a2.5 2.5 0 0 0 0 5H14a2.5 2.5 0 0 1 0 5H7"/></svg>`,
  learn:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h13a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3z"/><path d="M4 6a2 2 0 0 1 2-2h11"/></svg>`,
  opp:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.5 6 6.5.6-5 4.4 1.5 6.5L12 16.9 6.5 19.5 8 13l-5-4.4 6.5-.6z"/></svg>`,
  msg:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v12H8l-4 4z"/></svg>`,
  ext:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7M10 14 21 3M21 14v7H3V3h7"/></svg>`,
  plus:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  play:`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
};

/* ---------- STATE ---------- */
const state = {
  route: 'sphere-hub',
  theme: localStorage.getItem('ns-theme') || 'dark',
  smart: true,
  tab: 'feed',
  openMenus: new Set(['workspace-parent']),
};

/* ---------- DATA ---------- */
const orbitNodes = [
  { id:'network',       label:'Network',       sub:'12 connections',  icon:I.network,  angle:-90 },
  { id:'business',      label:'Business',      sub:'0 partners',      icon:I.business, angle:-30 },
  { id:'career',        label:'Career',        sub:'0 opportunities', icon:I.career,   angle:30 },
  { id:'learning',      label:'Learning',      sub:'0 courses',       icon:I.learn,    angle:90 },
  { id:'money',         label:'Money',         sub:'Growth tools',    icon:I.money,    angle:150 },
  { id:'opportunities', label:'Opportunities', sub:'0 new leads',     icon:I.opp,      angle:210 },
  { id:'market',        label:'Market',        sub:'Live intelligence', icon:I.market, angle:270 },
];

const sidebarMain = [
  { id:'sphere-hub', label:'Sphere Hub', icon:I.home },
  { id:'network',    label:'Network',    icon:I.network, sub:['Connections','Groups','Followers','Invites'] },
  { id:'market',     label:'Market',     icon:I.market,  sub:['Live Feed','Trends','Watchlist','Signals'] },
  { id:'jobs',       label:'Jobs',       icon:I.jobs,    sub:['Discover','Applications','Saved','Interviews'] },
  { id:'inbox',      label:'Inbox',      icon:I.inbox },
  { id:'workspace',  label:'Workspace',  icon:I.workspace, sub:['Projects','Tasks','Docs','Files','Automations'] },
];

const sidebarWorkspaces = [
  { id:'personal',      label:'Personal',        icon:I.personal,     sub:['Overview','Habits','Goals','Notes'] },
  { id:'career',        label:'Career',          icon:I.career,       sub:['Profile','Resume','Skills','Pipeline'] },
  { id:'professional',  label:'Professional',    icon:I.professional, sub:['Portfolio','Clients','Contracts','Rates'] },
  { id:'creator',       label:'Creator Studio',  icon:I.creator,      sub:['Posts','Media','Schedule','Analytics'] },
  { id:'educator',      label:'Educator Studio', icon:I.educator,     sub:['Courses','Lessons','Cohorts','Grading'] },
  { id:'partner',       label:'Partner Center',  icon:I.partner,      sub:['Partners','Deals','Commissions','Docs'] },
  { id:'business',      label:'Business',        icon:I.business,     sub:['Company','Invoices','Expenses','Reports'] },
  { id:'organisation',  label:'Organisation',    icon:I.org,          sub:['Team','Roles','Departments','Policies'] },
];

const feedItems = [
  { icon:I.spark, chip:'Scoped to you', title:'NexoAI daily brief', body:'Your receivables are all current — nothing is overdue. A good moment to line up new opportunities or send a fresh outreach batch to your top 5 warm leads.', time:'2m'},
  { icon:I.opp,  chip:'Opportunity', title:'3 new project briefs match your profile', body:'Two remote design roles and one full-time PH-based product manager position are trending in your Market feed.', time:'26m'},
  { icon:I.network, chip:'Network', title:'Maria Aquino connected with you', body:'You now share 4 mutual connections — consider replying with a short intro.', time:'1h'},
  { icon:I.learn, chip:'Learning', title:'New course: Growth loops for founders', body:'Estimated 3h · matches your recent activity around retention & activation.', time:'3h'},
];

const connections = [
  ['Maria Aquino','Product Designer','Bloom Studio','Manila','Active'],
  ['Jared Cruz','Backend Engineer','NexoFlow','Cebu','Warm'],
  ['Lea Domingo','Founder','Craftly','Pasig','Active'],
  ['Rico Bernal','Growth Lead','Vertex','Taguig','Cold'],
  ['Ana Santos','Copywriter','Freelance','Davao','Warm'],
  ['Diego Ramos','CFO','Halo Foods','Makati','Active'],
  ['Nikki Ong','iOS Engineer','Payd','Remote','Warm'],
  ['Kyle Lim','Investor','Kalinga Capital','BGC','Active'],
  ['Sam Reyes','PMM','Loop','Cebu','Cold'],
  ['Trisha Uy','HR Lead','Verde','Quezon City','Warm'],
  ['Miguel Vela','Community','NexoSphere','PH','Active'],
  ['Kai Torres','Ops Manager','NexoFlow','Manila','Active'],
];

const jobsList = [
  { title:'Senior Product Designer', co:'Bloom Studio', loc:'Remote · Philippines', pay:'₱120k–₱180k', tag:'Remote', chip:'violet' },
  { title:'Full-stack Engineer', co:'NexoFlow', loc:'Hybrid · Taguig', pay:'₱90k–₱150k', tag:'Hybrid', chip:'blue' },
  { title:'Growth PM', co:'Vertex', loc:'On-site · BGC', pay:'₱140k–₱200k', tag:'Full-time', chip:'green' },
  { title:'Content Marketer', co:'Craftly', loc:'Remote · APAC', pay:'₱60k–₱95k', tag:'Contract', chip:'amber' },
  { title:'Data Analyst', co:'Payd', loc:'Remote · Global', pay:'$3k–$4.5k', tag:'Remote', chip:'violet' },
];

const marketItems = [
  { t:'B2B SaaS in PH sees 22% MoM signup growth', s:'Signal · Market', chip:'green'},
  { t:'Freelance design demand up in Cebu', s:'Trend · Talent', chip:'violet'},
  { t:'Fintech rails: GCash checkout adoption rising', s:'Signal · Payments', chip:'blue'},
  { t:'AI tooling budgets shifting to bundles', s:'Trend · Software', chip:'amber'},
  { t:'Local D2C brands piloting live-selling on TikTok', s:'Signal · Commerce', chip:'green'},
];

const messages = [
  { from:'Maria Aquino', preview:'Ping when you have 10 mins — quick portfolio pitch', time:'2m', unread:true, initial:'MA', color:'linear-gradient(135deg,#a855f7,#6366f1)'},
  { from:'NexoFlow HR', preview:'Payroll cutoff moved to Friday 5pm', time:'1h', unread:true, initial:'NF', color:'linear-gradient(135deg,#10b981,#22c55e)'},
  { from:'Kyle Lim', preview:'Deck v3 attached — LMK before Monday', time:'Yesterday', unread:false, initial:'KL', color:'linear-gradient(135deg,#f59e0b,#ef4444)'},
  { from:'Craftly Ops', preview:'Contract counter-signed 🎉', time:'2d', unread:false, initial:'CO', color:'linear-gradient(135deg,#3b82f6,#0ea5e9)'},
];

const projects = [
  { s:'todo', t:'Refresh NexoFlow landing hero', s2:'Design · due Fri' },
  { s:'todo', t:'Draft Q3 partner outreach', s2:'Sales · due next week' },
  { s:'doing', t:'Onboarding v2 flow', s2:'Product · 60%' },
  { s:'doing', t:'Investor deck v3', s2:'Founder · 40%' },
  { s:'done', t:'Website analytics wiring', s2:'Growth · shipped' },
];

/* ---------- HELPERS ---------- */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const el = (html)=>{const d=document.createElement('div');d.innerHTML=html.trim();return d.firstElementChild;};

function setTheme(t){
  state.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('ns-theme', t);
}
setTheme(state.theme);

/* ---------- RENDER ---------- */
function render(){
  const app = $('#app');
  app.innerHTML = `
    <div class="app">
      ${renderSidebar()}
      <div class="main">
        ${renderTopbar()}
        <div class="scroll">
          <div class="container" id="view">${renderRoute()}</div>
        </div>
      </div>
    </div>
    <button class="fab" onclick="go('inbox')">${I.msg}<span>Messaging</span></button>
  `;
  bind();
  if(state.route === 'sphere-hub') layoutOrbit();
}

function renderSidebar(){
  const main = sidebarMain.map(m=>navItem(m,'main')).join('');
  const ws = sidebarWorkspaces.map(m=>navItem(m,'ws')).join('');
  return `
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-mark"></div>
      <div>
        <div class="brand-name">Nexo<em>Sphere</em></div>
        <div class="brand-tag">The business operating network</div>
      </div>
    </div>

    <div class="profile-card">
      <div class="profile-row">
        <div class="avatar">CS</div>
        <div>
          <div class="profile-name">Christopher Sumner</div>
          <div class="profile-sub">Founder, NexoFlow</div>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><span>Connections</span><b>12</b></div>
        <div class="stat"><span>Profile strength</span><b>63%</b></div>
        <div class="bar"><i style="width:63%"></i></div>
      </div>
    </div>

    <div class="section-label">Operating as</div>
    <div class="op-card">
      <div class="op-mark">N</div>
      <div>
        <div class="op-name">NexoFlow</div>
        <div class="op-sub">Platform Plan</div>
      </div>
    </div>

    <div class="section-label">Main</div>
    <div class="nav">
      ${main}
      <div class="section-label" style="padding:14px 10px 6px">Workspaces</div>
      ${ws}
    </div>
  </aside>`;
}

function navItem(m, group){
  const active = state.route === m.id;
  const open = state.openMenus.has(m.id);
  const hasSub = m.sub && m.sub.length;
  return `
    <div class="nav-item ${active?'active':''} ${open?'open':''}" data-nav="${m.id}" data-hassub="${!!hasSub}">
      <span class="ico">${m.icon}</span>
      <span>${m.label}</span>
      ${m.id==='network'?'<span class="badge">12</span>':''}
      ${hasSub?`<span class="chev">${I.chev}</span>`:''}
    </div>
    ${hasSub?`<div class="nav-sub">
      ${m.sub.map(s=>`<a data-subnav="${m.id}:${s}">${s}</a>`).join('')}
    </div>`:''}
  `;
}

function renderTopbar(){
  return `
  <div class="topbar">
    <button class="icon-btn" title="Collapse sidebar">${I.panel}</button>
    <div class="ws-switch" title="Switch workspace">
      <div class="avatar sm">CS</div>
      <div>
        <div class="ws-name">Christopher Sumner</div>
        <div class="ws-tag">Personal</div>
      </div>
      ${I.chev}
    </div>
    <div class="search">
      ${I.search}
      <input placeholder="Search or ask NexoAI…" />
      <span class="kbd">⌘</span><span class="kbd">K</span>
    </div>
    <button class="nexoai-btn">${I.spark}<span>NexoAI</span></button>
    <button class="icon-btn notif-dot" title="Notifications">${I.bell}</button>
    <button class="icon-btn" title="Translate">${I.translate}</button>
    <button class="icon-btn" title="Data">${I.db}</button>
    <button class="icon-btn" id="theme-toggle" title="Theme">${state.theme==='dark'?I.moon:I.sun}</button>
    <div class="avatar green sm" title="You">CS</div>
  </div>`;
}

/* ---------- ROUTES ---------- */
function renderRoute(){
  const r = state.route;
  if(r === 'sphere-hub')   return viewSphereHub();
  if(r === 'network')      return viewNetwork();
  if(r === 'market')       return viewMarket();
  if(r === 'jobs')         return viewJobs();
  if(r === 'inbox')        return viewInbox();
  if(r === 'workspace')    return viewWorkspace();
  if(r === 'business')     return viewBusiness();
  if(r === 'career')       return viewCareer();
  if(r === 'learning')     return viewLearning();
  if(r === 'money')        return viewMoney();
  if(r === 'opportunities')return viewOpportunities();
  if(r === 'personal')     return viewPersonal();
  if(r === 'professional') return viewProfessional();
  if(r === 'creator')      return viewCreator();
  if(r === 'educator')     return viewEducator();
  if(r === 'partner')      return viewPartner();
  if(r === 'organisation') return viewOrganisation();
  return viewSphereHub();
}

/* ---------- VIEW: SPHERE HUB (main dashboard) ---------- */
function viewSphereHub(){
  const nodes = orbitNodes.map(n=>`
    <div class="orbit-node" data-node="${n.id}" data-angle="${n.angle}">
      <div class="n-ico">${n.icon}</div>
      <div class="n-name">${n.label}</div>
      <div class="n-sub">${n.sub}</div>
    </div>`).join('');

  const feed = feedItems.map(f=>`
    <div class="feed-item">
      <div class="feed-icon">${f.icon}</div>
      <div>
        <div class="row" style="justify-content:space-between">
          <div class="feed-title">${f.title}</div>
          <span class="chip">${I.spark}${f.chip}</span>
        </div>
        <div class="feed-body">${f.body}</div>
      </div>
      <div class="feed-time">${f.time}</div>
    </div>`).join('');

  return `
  <div class="greeting">Good morning, Christopher <span class="wave">👋</span></div>
  <div class="subtitle">Here's what happened, who needs you, and what to do next.</div>

  <div class="hub-card mt-24">
    <div class="hub-stage" id="hub-stage">
      <div class="orbit-ring"></div>
      <div class="orbit-icons" id="orbit-icons">${nodes}</div>
      <div class="hub-center">
        <div class="hub-orb"></div>
        <div class="hub-name">Sphere Hub</div>
        <div class="hub-cta">${I.play} Hear our vision</div>
      </div>
    </div>
    <div class="hub-footer">
      <div class="switch ${state.smart?'on':''}" id="smart-toggle"></div>
      <div class="smart-label"><b>Smart View</b><span>Content adapts to your goals & activity</span></div>
      <button class="btn ml-auto">${I.workspace}<span>Your modules</span></button>
      <button class="btn">${I.plus}<span>Expand all</span></button>
    </div>
  </div>

  <div class="grid cols-3 mt-24">
    <div>
      <div class="tabs">
        <div class="tab ${state.tab==='feed'?'active':''}" data-tab="feed">${I.home}Feed</div>
        <div class="tab ${state.tab==='news'?'active':''}" data-tab="news">${I.market}News</div>
        <div class="tab ${state.tab==='universities'?'active':''}" data-tab="universities">${I.learn}Universities</div>
      </div>
      <div class="card">${feed}</div>
    </div>

    <div class="side-panel">
      <div class="head"><span>Money at a glance</span><a href="#" onclick="go('money');return false">View</a></div>
      <div class="metric-grid">
        <div class="metric"><div class="lbl">Overdue</div><div class="val red">₱0</div><div class="sub">0 customers</div></div>
        <div class="metric"><div class="lbl">Outstanding</div><div class="val">₱0</div><div class="sub">receivables</div></div>
      </div>
      <div class="head"><span>Today</span><a href="#">Open</a></div>
      <div class="card">
        <div class="row" style="gap:10px"><span class="pill violet">Focus</span><span class="muted">Ship onboarding v2 preview</span></div>
        <div class="divider"></div>
        <div class="row" style="gap:10px"><span class="pill green">Meeting</span><span class="muted">1:1 with Kyle · 3:00 PM</span></div>
        <div class="divider"></div>
        <div class="row" style="gap:10px"><span class="pill amber">Follow-up</span><span class="muted">Send proposal to Craftly</span></div>
      </div>
      <div class="head"><span>Network moves</span><a href="#" onclick="go('network');return false">See all</a></div>
      <div class="card">
        <div class="row"><div class="avatar sm">MA</div><div><b>Maria Aquino</b><div class="muted">Connected · 2m</div></div></div>
        <div class="divider"></div>
        <div class="row"><div class="avatar sm">JC</div><div><b>Jared Cruz</b><div class="muted">Viewed your profile · 1h</div></div></div>
      </div>
    </div>
  </div>`;
}

/* ---------- Simple page shell ---------- */
function pageShell(title, sub, body){
  return `
    <div class="crumbs">Sphere Hub <b>›</b> ${title}</div>
    <div class="title-row">
      <div><h2>${title}</h2>${sub?`<div class="sub">${sub}</div>`:''}</div>
      <div class="row" style="gap:8px">
        <button class="btn ghost">${I.spark}Ask NexoAI</button>
        <button class="btn primary">${I.plus}New</button>
      </div>
    </div>
    ${body}
  `;
}

/* ---------- VIEW: Network ---------- */
function viewNetwork(){
  const rows = connections.map(c=>`
    <tr>
      <td><div class="row"><div class="avatar sm">${c[0].split(' ').map(x=>x[0]).join('')}</div><b>${c[0]}</b></div></td>
      <td>${c[1]}</td>
      <td>${c[2]}</td>
      <td>${c[3]}</td>
      <td><span class="pill ${c[4]==='Active'?'green':c[4]==='Warm'?'amber':'blue'}">${c[4]}</span></td>
      <td style="text-align:right"><button class="btn ghost">Message</button></td>
    </tr>`).join('');
  const body = `
    <div class="split-3">
      <div class="metric"><div class="lbl">Connections</div><div class="val">12</div><div class="sub">+3 this week</div></div>
      <div class="metric"><div class="lbl">Followers</div><div class="val">148</div><div class="sub">+9 this week</div></div>
      <div class="metric"><div class="lbl">Profile views</div><div class="val">72</div><div class="sub">last 7 days</div></div>
    </div>
    <div class="card mt-16" style="padding:0">
      <table class="table">
        <thead><tr><th>Name</th><th>Role</th><th>Company</th><th>Location</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  return pageShell('Network', '12 connections · 4 pending invites', body);
}

/* ---------- VIEW: Market ---------- */
function viewMarket(){
  const items = marketItems.map(m=>`
    <div class="feed-item">
      <div class="feed-icon">${I.market}</div>
      <div>
        <div class="feed-title">${m.t}</div>
        <div class="feed-body">${m.s}</div>
      </div>
      <span class="pill ${m.chip}">Live</span>
    </div>`).join('');
  const body = `
    <div class="split">
      <div class="card"><h3>Live intelligence</h3>${items}</div>
      <div class="side-panel">
        <div class="card">
          <h3>Your watchlist</h3>
          <div class="row"><span class="pill violet">B2B SaaS PH</span><span class="pill blue">Fintech</span><span class="pill green">Freelance</span></div>
          <div class="divider"></div>
          <div class="muted">NexoAI surfaces items scoped to your role, workspace, and goals.</div>
        </div>
        <div class="card">
          <h3>Signals today</h3>
          <div class="metric-grid">
            <div class="metric"><div class="lbl">Fresh</div><div class="val">14</div></div>
            <div class="metric"><div class="lbl">Trends</div><div class="val">6</div></div>
          </div>
        </div>
      </div>
    </div>`;
  return pageShell('Market', 'Live intelligence tuned to your interests', body);
}

/* ---------- VIEW: Jobs ---------- */
function viewJobs(){
  const cards = jobsList.map(j=>`
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <div>
          <div class="feed-title">${j.title}</div>
          <div class="muted">${j.co} · ${j.loc}</div>
        </div>
        <span class="pill ${j.chip}">${j.tag}</span>
      </div>
      <div class="divider"></div>
      <div class="row" style="justify-content:space-between">
        <div class="muted">${j.pay}</div>
        <button class="btn primary">Apply</button>
      </div>
    </div>`).join('');
  return pageShell('Jobs', 'Roles matched to your skills and workspace', `
    <div class="split-3">${cards}</div>`);
}

/* ---------- VIEW: Inbox ---------- */
function viewInbox(){
  const items = messages.map(m=>`
    <div class="feed-item">
      <div class="feed-icon" style="background:${m.color}">${m.initial}</div>
      <div>
        <div class="feed-title">${m.from} ${m.unread?'<span class="pill violet">New</span>':''}</div>
        <div class="feed-body">${m.preview}</div>
      </div>
      <div class="feed-time">${m.time}</div>
    </div>`).join('');
  return pageShell('Inbox', '2 unread · connected across channels', `
    <div class="split">
      <div class="card">${items}</div>
      <div class="card">
        <h3>Reply with NexoAI</h3>
        <div class="muted">Draft a professional reply that matches your tone. Choose a message on the left to begin.</div>
        <div class="divider"></div>
        <button class="btn primary">${I.spark}Draft reply</button>
      </div>
    </div>`);
}

/* ---------- VIEW: Workspace ---------- */
function viewWorkspace(){
  const col = (k, title, count) => `
    <div class="klist">
      <h4>${title}<span>${count}</span></h4>
      ${projects.filter(p=>p.s===k).map(p=>`
        <div class="kcard"><div class="t">${p.t}</div><div class="s">${p.s2}</div></div>`).join('')}
    </div>`;
  return pageShell('Workspace', 'Projects, tasks, docs, files — all in one place', `
    <div class="kanban">
      ${col('todo','To do', projects.filter(p=>p.s==='todo').length)}
      ${col('doing','In progress', projects.filter(p=>p.s==='doing').length)}
      ${col('done','Done', projects.filter(p=>p.s==='done').length)}
    </div>`);
}

/* ---------- Orbit target views ---------- */
function viewBusiness(){
  return pageShell('Business', '0 partners · start operating your business hub', `
    <div class="split-3">
      <div class="metric"><div class="lbl">Revenue MTD</div><div class="val">₱0</div><div class="sub">start invoicing</div></div>
      <div class="metric"><div class="lbl">Deals</div><div class="val">0</div><div class="sub">pipeline empty</div></div>
      <div class="metric"><div class="lbl">Partners</div><div class="val">0</div><div class="sub">invite one</div></div>
    </div>
    <div class="card mt-16">
      <h3>Get started</h3>
      <div class="muted">Set up your company profile, invite teammates, and connect payments to unlock the Business hub.</div>
      <div class="divider"></div>
      <div class="row"><button class="btn primary">${I.plus}Create company</button><button class="btn">Connect payments</button></div>
    </div>`);
}
function viewCareer(){
  return pageShell('Career', '0 opportunities · showcase yourself to the market', `
    <div class="split">
      <div class="card">
        <h3>Your career profile</h3>
        <div class="muted">63% complete — add a headline, portfolio and one recommendation to break 80%.</div>
        <div class="bar" style="margin-top:10px"><i style="width:63%"></i></div>
        <div class="divider"></div>
        <button class="btn primary">Continue profile</button>
      </div>
      <div class="card">
        <h3>Suggested moves</h3>
        <div class="feed-item"><div class="feed-icon">${I.jobs}</div><div><div class="feed-title">3 senior design roles match you</div><div class="feed-body">Bloom · Vertex · Craftly</div></div></div>
        <div class="feed-item"><div class="feed-icon">${I.opp}</div><div><div class="feed-title">Freelance briefs open now</div><div class="feed-body">2 briefs closing this week</div></div></div>
      </div>
    </div>`);
}
function viewLearning(){
  const items = [
    ['Growth loops for founders','3h · Intermediate','violet'],
    ['Design systems from scratch','5h · Advanced','blue'],
    ['Selling as a non-salesperson','2h · Beginner','green'],
    ['Financial hygiene for owners','1.5h · Beginner','amber'],
  ].map(([t,s,c])=>`
    <div class="card">
      <div class="row" style="justify-content:space-between"><div class="feed-title">${t}</div><span class="pill ${c}">Course</span></div>
      <div class="muted">${s}</div>
      <div class="divider"></div>
      <button class="btn">${I.play}Start</button>
    </div>`).join('');
  return pageShell('Learning', '0 courses started · pick one to begin', `<div class="split">${items}</div>`);
}
function viewMoney(){
  return pageShell('Money', 'Growth tools for revenue, invoices, and expenses', `
    <div class="split-3">
      <div class="metric"><div class="lbl">Overdue</div><div class="val red">₱0</div><div class="sub">0 customers</div></div>
      <div class="metric"><div class="lbl">Outstanding</div><div class="val">₱0</div><div class="sub">receivables</div></div>
      <div class="metric"><div class="lbl">Cash-in MTD</div><div class="val">₱0</div><div class="sub">this month</div></div>
    </div>
    <div class="card mt-16">
      <h3>Quick actions</h3>
      <div class="row" style="gap:8px;flex-wrap:wrap">
        <button class="btn primary">${I.plus}Create invoice</button>
        <button class="btn">Record expense</button>
        <button class="btn">Import bank</button>
        <button class="btn">Connect GCash</button>
      </div>
    </div>`);
}
function viewOpportunities(){
  return pageShell('Opportunities', '0 new leads · NexoAI is scouting for you', `
    <div class="empty">
      <div class="big">${I.opp}</div>
      <div><b>No leads yet</b></div>
      <div>Turn on the leads engine to receive briefs matched to your services.</div>
      <div style="margin-top:12px"><button class="btn primary">${I.spark}Turn on leads</button></div>
    </div>`);
}

/* ---------- Workspace shells ---------- */
function simpleShell(title, sub, blurb){
  return pageShell(title, sub, `
    <div class="split">
      <div class="card"><h3>Overview</h3><div class="muted">${blurb}</div>
        <div class="divider"></div>
        <div class="row"><button class="btn primary">${I.plus}Create</button><button class="btn">Templates</button></div>
      </div>
      <div class="card"><h3>Recent</h3><div class="muted">Nothing here yet. Your recent items will show up in this space.</div></div>
    </div>`);
}
function viewPersonal(){    return simpleShell('Personal',       'Your personal workspace', 'Habits, goals, notes and journals — a private space that adapts to you.');}
function viewProfessional(){return simpleShell('Professional',   'Portfolio, clients, contracts', 'Everything you need to run yourself as a professional.');}
function viewCreator(){     return simpleShell('Creator Studio', 'Posts, media, schedule, analytics', 'Publish across platforms and analyze what actually works.');}
function viewEducator(){    return simpleShell('Educator Studio','Courses, lessons, cohorts', 'Design courses, run cohorts, and grade with less friction.');}
function viewPartner(){     return simpleShell('Partner Center', 'Partners, deals, commissions', 'Manage partnerships with clear terms and shared docs.');}
function viewOrganisation(){return simpleShell('Organisation',   'Team, roles, departments, policies', 'Structure your org so people know where they belong.');}

/* ---------- BIND ---------- */
function bind(){
  $$('.nav-item').forEach(n=>{
    n.addEventListener('click', (e)=>{
      const id = n.dataset.nav;
      const hasSub = n.dataset.hassub === 'true';
      if(hasSub){
        // toggle open
        if(state.openMenus.has(id)) state.openMenus.delete(id);
        else state.openMenus.add(id);
      }
      go(id);
    });
  });
  $$('[data-subnav]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.stopPropagation();
      const [parent] = a.dataset.subnav.split(':');
      go(parent);
    });
  });
  const themeBtn = $('#theme-toggle');
  themeBtn && themeBtn.addEventListener('click', ()=>{
    setTheme(state.theme==='dark'?'light':'dark');
    render();
  });
  const smart = $('#smart-toggle');
  smart && smart.addEventListener('click', ()=>{
    state.smart = !state.smart;
    smart.classList.toggle('on', state.smart);
  });
  $$('.tab').forEach(t=>t.addEventListener('click', ()=>{
    state.tab = t.dataset.tab;
    $$('.tab').forEach(x=>x.classList.toggle('active', x===t));
  }));
  $$('.orbit-node').forEach(n=>{
    n.addEventListener('click', ()=> go(n.dataset.node));
  });
  window.addEventListener('resize', ()=>{
    if(state.route === 'sphere-hub') layoutOrbit();
  }, {passive:true});
}

function go(id){
  if(!id) return;
  state.route = id;
  render();
  const scroll = $('.scroll'); if(scroll) scroll.scrollTop = 0;
}
window.go = go;

/* ---------- ORBIT LAYOUT ---------- */
function layoutOrbit(){
  const stage = $('#hub-stage');
  if(!stage) return;
  const rect = stage.getBoundingClientRect();
  const cx = rect.width/2, cy = rect.height/2;
  const R = Math.min(rect.width, rect.height)/2 - 60;
  $$('.orbit-node', stage).forEach(node=>{
    const a = parseFloat(node.dataset.angle) * Math.PI/180;
    const x = cx + Math.cos(a) * R;
    const y = cy + Math.sin(a) * R;
    node.style.left = x + 'px';
    node.style.top  = y + 'px';
  });
}

render();
