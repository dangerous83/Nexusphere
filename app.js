/* NexoSphere — single-file interactive app */

/* Assets injected by index.html or artifact wrapper (fallback to relative paths). */
const LOGO   = window.LOGO_URL   || "nexusphere%20Logo.png";
const AVATAR = window.AVATAR_URL || "Alvin%20Profile.jpg";
const SCENES = window.SCENE_URLS || [
  "Scene%201.png","Scene%202.png","Scene%203.png","Scene%204.png",
  "Scene%205.png","Scene%206.png","Scene%207.png","Scene%208.png",
  "Scene%209.png","Scene%2010.png","Scene%2011.png","Scene%2012.png"
];

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
  plus:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  play:`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  image:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 17-5-5-9 9"/></svg>`,
  smile:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>`,
  video:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>`,
  location:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  like:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 22V10l5-8 1 1v6h7a2 2 0 0 1 2 2l-2 9a2 2 0 0 1-2 2z"/></svg>`,
  comment:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a8 8 0 0 1-11 7L4 21l2-6a8 8 0 1 1 15-3z"/></svg>`,
  share:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12v7h16v-7"/><path d="M12 3v13M7 8l5-5 5 5"/></svg>`,
  user:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 5-6 8-6s7 2 8 6"/></svg>`,
  settings:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V9c.3.6.9 1 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  credit:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>`,
  help:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/></svg>`,
  logout:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4"/><path d="M10 17l-5-5 5-5M4 12h11"/></svg>`,
};

/* ---------- STATE ---------- */
const state = {
  route: 'sphere-hub',
  theme: localStorage.getItem('ns-theme') || 'dark',
  smart: true,
  tab: 'feed',
  openMenus: new Set(),
  drawerOpen: false,
  ddOpen: false,
  posts: loadPosts(),
  composer: { text:'', img:null },
};

const USER = { name:'Alvin Espazar', role:'Member', initials:'AE', location:'Manila, PH', avatar: AVATAR };

/* ---------- ORBIT (evenly spaced 7 nodes starting at top) ---------- */
const orbitNodes = (()=>{
  const items = [
    { id:'network',       label:'Network',       sub:'12 connections',    icon:I.network  },
    { id:'business',      label:'Business',      sub:'0 partners',        icon:I.business },
    { id:'career',        label:'Career',        sub:'0 opportunities',   icon:I.career   },
    { id:'learning',      label:'Learning',      sub:'0 courses',         icon:I.learn    },
    { id:'money',         label:'Money',         sub:'Growth tools',      icon:I.money    },
    { id:'opportunities', label:'Opportunities', sub:'0 new leads',       icon:I.opp      },
    { id:'market',        label:'Market',        sub:'Live intelligence', icon:I.market   },
  ];
  const step = 360 / items.length;   // 51.43°
  return items.map((n,i)=> ({...n, angle: -90 + i*step }));
})();

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

/* ---------- POSTS ---------- */
function loadPosts(){
  try{
    const raw = localStorage.getItem('ns-posts-v2');
    if(raw){ const arr = JSON.parse(raw); if(Array.isArray(arr) && arr.length) return arr; }
  }catch(e){}
  return seedPosts();
}
function savePosts(){ try{ localStorage.setItem('ns-posts-v2', JSON.stringify(state.posts)); }catch(e){} }
function seedPosts(){
  const s = SCENES;
  return [
    { id:'p1', author:'Alvin Espazar', avatar:AVATAR, ini:'AE', color:'linear-gradient(135deg,#22c55e,#10b981)',
      time:'12m', body:'Fresh drop for the NexoSphere launch series — cinematic renders straight from the studio. Which frame is your favourite? 🌌',
      img:s[0], liked:false, likes:214, comments:[
        { who:'Maria Aquino', ini:'MA', text:'Frame 1 is stunning — the lighting on the glass panels is unreal.' },
        { who:'Kyle Lim', ini:'KL', text:'Please put this on a billboard. 🔥' },
      ]},
    { id:'p2', author:'NexoAI', avatar:null, ini:'AI', color:'linear-gradient(135deg,#7c5cff,#5b8cff)',
      time:'1h', body:'Your daily brief is ready ✨ — receivables are current and 3 warm leads went quiet. Want me to draft a nudge?',
      img:null, liked:false, likes:14, comments:[
        { who:'Kyle Lim', ini:'KL', text:'Please do — start with Craftly.' },
      ]},
    { id:'p3', author:'Alvin Espazar', avatar:AVATAR, ini:'AE', color:'linear-gradient(135deg,#22c55e,#10b981)',
      time:'3h', body:'Storyboarding scene 4 today — the interior sequence for the Business Hub reveal.',
      img:s[3], liked:true, likes:98, comments:[
        { who:'Lea Domingo', ini:'LD', text:'The palette is 🔥' },
      ]},
    { id:'p4', author:'NexoFlow', avatar:null, ini:'NF', color:'linear-gradient(135deg,#10b981,#22c55e)',
      time:'5h', body:'We just crossed 10,000 businesses running on NexoFlow. Thank you to every founder shipping alongside us.',
      img:s[6], liked:false, likes:238, comments:[] },
    { id:'p5', author:'Alvin Espazar', avatar:AVATAR, ini:'AE', color:'linear-gradient(135deg,#22c55e,#10b981)',
      time:'Yesterday', body:'Working on the money module hero — clean, calm, and honest about the numbers.',
      img:s[9], liked:false, likes:67, comments:[] },
  ];
}

/* ---------- HELPERS ---------- */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const esc = (s)=> (s??'').toString().replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function setTheme(t){
  state.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('ns-theme', t);
}
setTheme(state.theme);

/* Avatar helper — image if provided, initials otherwise */
function avatarEl(size='', imgUrl=null, initials='', tintClass=''){
  const sz = size ? ` ${size}` : '';
  const cls = tintClass ? ` ${tintClass}` : '';
  if(imgUrl){
    return `<div class="avatar${sz}${cls}"><img src="${imgUrl}" alt=""></div>`;
  }
  return `<div class="avatar${sz}${cls}">${esc(initials)}</div>`;
}
function userAvatar(size=''){ return avatarEl(size, USER.avatar, USER.initials); }

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
    <div class="scrim ${state.drawerOpen?'on':''}" id="scrim"></div>
    <button class="fab" onclick="go('inbox')">${I.msg}<span>Messaging</span></button>
  `;
  bind();
  if(state.route === 'sphere-hub') requestAnimationFrame(layoutOrbit);
}

function renderSidebar(){
  const main = sidebarMain.map(m=>navItem(m)).join('');
  const ws   = sidebarWorkspaces.map(m=>navItem(m)).join('');
  return `
  <aside class="sidebar ${state.drawerOpen?'open':''}" id="sidebar">
    <div class="brand">
      <div class="brand-mark"><img src="${LOGO}" alt="NexoSphere logo"></div>
      <div>
        <div class="brand-name">Nexo<em>Sphere</em></div>
        <div class="brand-tag">The business operating network</div>
      </div>
      <button class="brand-close" id="drawer-close" aria-label="Close menu">✕</button>
    </div>

    <div class="profile-card">
      <div class="profile-row">
        ${userAvatar()}
        <div>
          <div class="profile-name">${USER.name}</div>
          <div class="profile-sub">${USER.role} · ${USER.location}</div>
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

function navItem(m){
  const rp = routeParent(state.route);
  const rs = routeSub(state.route);
  const active = rp === m.id;
  const open   = state.openMenus.has(m.id) || active;
  const hasSub = m.sub && m.sub.length;
  return `
    <div class="nav-item ${active?'active':''} ${open?'open':''}" data-nav="${m.id}" data-hassub="${!!hasSub}">
      <span class="ico">${m.icon}</span>
      <span>${m.label}</span>
      ${m.id==='network'?'<span class="badge">12</span>':''}
      ${hasSub?`<span class="chev">${I.chev}</span>`:''}
    </div>
    ${hasSub?`<div class="nav-sub">
      ${m.sub.map(s=>`<a class="${(active && rs===s)?'active':''}" data-subnav="${m.id}:${s}">${s}</a>`).join('')}
    </div>`:''}
  `;
}
function routeParent(r){ return (r||'').split(':')[0]; }
function routeSub(r){ return (r||'').split(':')[1] || ''; }

function renderTopbar(){
  return `
  <div class="topbar">
    <button class="icon-btn" id="hamburger" title="Menu" aria-label="Open menu">${I.panel}</button>
    <div class="ws-switch" title="Switch workspace">
      ${userAvatar('sm')}
      <div>
        <div class="ws-name">${USER.name}</div>
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

    <div class="avatar-btn" id="avatar-btn">
      ${userAvatar('sm')}
      <div class="dropdown ${state.ddOpen?'on':''}" id="user-dd" role="menu">
        <div class="dd-head">
          ${userAvatar()}
          <div><b>${USER.name}</b><span>${USER.role} · ${USER.location}</span></div>
        </div>
        <div class="dd-item" data-dd="profile">${iconWrap(I.user)}View profile</div>
        <div class="dd-item" data-dd="settings">${iconWrap(I.settings)}Account settings</div>
        <div class="dd-item" data-dd="billing">${iconWrap(I.credit)}Billing &amp; plans</div>
        <div class="dd-item" data-dd="theme">${iconWrap(state.theme==='dark'?I.sun:I.moon)}Switch to ${state.theme==='dark'?'light':'dark'} mode</div>
        <div class="dd-sep"></div>
        <div class="dd-item" data-dd="help">${iconWrap(I.help)}Help &amp; support</div>
        <div class="dd-item danger" data-dd="logout">${iconWrap(I.logout)}Sign out</div>
      </div>
    </div>
  </div>`;
}
function iconWrap(svg){ return `<span class="ico">${svg}</span>`; }

/* ---------- ROUTES ---------- */
function renderRoute(){
  const r  = state.route;
  const rp = routeParent(r);
  const rs = routeSub(r);

  // Sub-route rendering: parent + subkey
  if(rs){
    return renderSubRoute(rp, rs);
  }

  const map = {
    'sphere-hub':viewSphereHub,'network':viewNetwork,'market':viewMarket,'jobs':viewJobs,
    'inbox':viewInbox,'workspace':viewWorkspace,'business':viewBusiness,'career':viewCareer,
    'learning':viewLearning,'money':viewMoney,'opportunities':viewOpportunities,
    'personal':viewPersonal,'professional':viewProfessional,'creator':viewCreator,
    'educator':viewEducator,'partner':viewPartner,'organisation':viewOrganisation,
    'profile':viewProfile,'settings':viewSettings,'billing':viewBilling,'help':viewHelp,
  };
  return (map[rp] || viewSphereHub)();
}

/* ---------- SPHERE HUB ---------- */
function viewSphereHub(){
  const nodes = orbitNodes.map(n=>`
    <div class="orbit-node" data-node="${n.id}" data-angle="${n.angle}">
      <div class="n-ico">${n.icon}</div>
      <div class="n-name">${n.label}</div>
      <div class="n-sub">${n.sub}</div>
    </div>`).join('');

  return `
  <div class="greeting">Good morning, Alvin <span class="wave">👋</span></div>
  <div class="subtitle">Here's what happened, who needs you, and what to do next.</div>

  <div class="hub-card mt-24">
    <div class="hub-stage" id="hub-stage">
      <svg class="hub-svg" id="hub-svg" aria-hidden="true">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stop-color="#b06bff" stop-opacity=".9"/>
            <stop offset="50%" stop-color="#7c5cff" stop-opacity=".7"/>
            <stop offset="100%" stop-color="#5b8cff" stop-opacity=".4"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="orbit-icons" id="orbit-icons">${nodes}</div>
      <div class="hub-center">
        <div class="hub-orb"><img src="${LOGO}" alt="NexoSphere"></div>
        <div class="hub-name">Sphere Hub</div>
        <div class="hub-cta">${I.play} Hear our vision</div>
      </div>
    </div>
    <div class="hub-footer">
      <div class="switch ${state.smart?'on':''}" id="smart-toggle"></div>
      <div class="smart-label"><b>Smart View</b><span>Content adapts to your goals &amp; activity</span></div>
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
      ${renderFeedComposer()}
      <div id="posts">${renderPosts()}</div>
    </div>

    <div class="side-panel">
      <div class="head"><span>Money at a glance</span><a onclick="go('money')">View</a></div>
      <div class="metric-grid">
        <div class="metric"><div class="lbl">Overdue</div><div class="val red">₱0</div><div class="sub">0 customers</div></div>
        <div class="metric"><div class="lbl">Outstanding</div><div class="val">₱0</div><div class="sub">receivables</div></div>
      </div>
      <div class="head"><span>Today</span><a>Open</a></div>
      <div class="card">
        <div class="row" style="gap:10px"><span class="pill violet">Focus</span><span class="muted">Ship onboarding v2 preview</span></div>
        <div class="divider"></div>
        <div class="row" style="gap:10px"><span class="pill green">Meeting</span><span class="muted">1:1 with Kyle · 3:00 PM</span></div>
        <div class="divider"></div>
        <div class="row" style="gap:10px"><span class="pill amber">Follow-up</span><span class="muted">Send proposal to Craftly</span></div>
      </div>
      <div class="head"><span>Network moves</span><a onclick="go('network')">See all</a></div>
      <div class="card">
        <div class="row"><div class="avatar sm">MA</div><div><b>Maria Aquino</b><div class="muted">Connected · 2m</div></div></div>
        <div class="divider"></div>
        <div class="row"><div class="avatar sm">JC</div><div><b>Jared Cruz</b><div class="muted">Viewed your profile · 1h</div></div></div>
      </div>
    </div>
  </div>`;
}

/* ---------- SOCIAL COMPOSER + POSTS ---------- */
function renderFeedComposer(){
  return `
  <div class="card" id="composer-host">
    <div class="composer">
      ${userAvatar()}
      <div>
        <textarea id="cx-text" placeholder="What's on your mind, ${USER.name.split(' ')[0]}?">${esc(state.composer.text)}</textarea>
        ${state.composer.img?`<div class="cx-preview"><img src="${state.composer.img}" alt=""><button class="rm" id="cx-remove" title="Remove">✕</button></div>`:''}
        <div class="cx-actions">
          <label class="chip-btn" for="cx-file">${I.image}Photo</label>
          <input id="cx-file" type="file" accept="image/*" style="display:none">
          <span class="chip-btn">${I.video}Video</span>
          <span class="chip-btn">${I.smile}Feeling</span>
          <span class="chip-btn">${I.location}Check-in</span>
          <button class="btn primary" style="margin-left:auto" id="cx-post">${I.plus}Post</button>
        </div>
      </div>
    </div>
  </div>`;
}
function renderPosts(){ return state.posts.map(p=>renderPost(p)).join(''); }
function renderPost(p){
  const av = p.avatar
    ? `<div class="avatar" style="width:38px;height:38px"><img src="${p.avatar}" alt=""></div>`
    : `<div class="feed-icon" style="background:${p.color||'linear-gradient(135deg,#7c5cff,#5b8cff)'}">${esc(p.ini||p.author.slice(0,2).toUpperCase())}</div>`;
  return `
  <div class="post" data-post="${p.id}">
    <div class="post-head">
      ${av}
      <div class="who"><b>${esc(p.author)}</b><span>${esc(p.time)} · 🌐 Public</span></div>
    </div>
    <div class="post-body">${esc(p.body)}</div>
    ${p.img?`<div class="post-img"><img src="${p.img}" alt=""></div>`:''}
    <div class="post-stats">
      <span>❤️ ${p.likes}</span>
      <span>${p.comments.length} comments</span>
    </div>
    <div class="post-actions">
      <div class="pa-btn ${p.liked?'liked':''}" data-act="like">${I.like}${p.liked?'Liked':'Like'}</div>
      <div class="pa-btn" data-act="comment">${I.comment}Comment</div>
      <div class="pa-btn" data-act="share">${I.share}Share</div>
    </div>
    <div class="comments ${p.comments.length?'on':''}" data-comments>
      ${p.comments.map(c=>`
        <div class="comment">
          <div class="avatar xs">${esc(c.ini)}</div>
          <div class="bubble"><b>${esc(c.who)}</b><p>${esc(c.text)}</p></div>
        </div>`).join('')}
      <div class="comment-form">
        ${userAvatar('xs')}
        <input placeholder="Write a comment…" data-comment-input>
        <button class="btn" data-comment-submit>Send</button>
      </div>
    </div>
  </div>`;
}

/* ---------- PAGE SHELL ---------- */
function pageShell(title, sub, body, crumb='Sphere Hub'){
  return `
    <div class="crumbs">${crumb} <b>›</b> ${esc(title)}</div>
    <div class="title-row">
      <div><h2>${esc(title)}</h2>${sub?`<div class="sub">${esc(sub)}</div>`:''}</div>
      <div class="row" style="gap:8px">
        <button class="btn ghost">${I.spark}Ask NexoAI</button>
        <button class="btn primary">${I.plus}New</button>
      </div>
    </div>
    ${body}
  `;
}

/* ---------- ROUTE VIEWS (parents) ---------- */
function viewNetwork(){
  const rows = connections.map(c=>`
    <tr>
      <td><div class="row"><div class="avatar sm">${c[0].split(' ').map(x=>x[0]).join('')}</div><b>${c[0]}</b></div></td>
      <td>${c[1]}</td><td>${c[2]}</td><td>${c[3]}</td>
      <td><span class="pill ${c[4]==='Active'?'green':c[4]==='Warm'?'amber':'blue'}">${c[4]}</span></td>
      <td style="text-align:right"><button class="btn ghost">Message</button></td>
    </tr>`).join('');
  return pageShell('Network','12 connections · 4 pending invites', `
    <div class="split-3">
      <div class="metric"><div class="lbl">Connections</div><div class="val">12</div><div class="sub">+3 this week</div></div>
      <div class="metric"><div class="lbl">Followers</div><div class="val">148</div><div class="sub">+9 this week</div></div>
      <div class="metric"><div class="lbl">Profile views</div><div class="val">72</div><div class="sub">last 7 days</div></div>
    </div>
    <div class="card mt-16" style="padding:0">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Name</th><th>Role</th><th>Company</th><th>Location</th><th>Status</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}
function viewMarket(){
  const items = marketItems.map(m=>`
    <div class="feed-item">
      <div class="feed-icon">${I.market}</div>
      <div><div class="feed-title">${m.t}</div><div class="feed-body">${m.s}</div></div>
      <span class="pill ${m.chip}">Live</span>
    </div>`).join('');
  return pageShell('Market','Live intelligence tuned to your interests', `
    <div class="split">
      <div class="card"><h3>Live intelligence</h3>${items}</div>
      <div class="side-panel">
        <div class="card"><h3>Your watchlist</h3>
          <div class="row" style="flex-wrap:wrap;gap:6px"><span class="pill violet">B2B SaaS PH</span><span class="pill blue">Fintech</span><span class="pill green">Freelance</span></div>
          <div class="divider"></div><div class="muted">NexoAI surfaces items scoped to your role, workspace, and goals.</div>
        </div>
        <div class="card"><h3>Signals today</h3>
          <div class="metric-grid">
            <div class="metric"><div class="lbl">Fresh</div><div class="val">14</div></div>
            <div class="metric"><div class="lbl">Trends</div><div class="val">6</div></div>
          </div>
        </div>
      </div>
    </div>`);
}
function viewJobs(){
  const cards = jobsList.map(j=>`
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <div><div class="feed-title">${j.title}</div><div class="muted">${j.co} · ${j.loc}</div></div>
        <span class="pill ${j.chip}">${j.tag}</span>
      </div>
      <div class="divider"></div>
      <div class="row" style="justify-content:space-between">
        <div class="muted">${j.pay}</div><button class="btn primary">Apply</button>
      </div>
    </div>`).join('');
  return pageShell('Jobs','Roles matched to your skills and workspace', `<div class="split-3">${cards}</div>`);
}
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
  return pageShell('Inbox','2 unread · connected across channels', `
    <div class="split">
      <div class="card">${items}</div>
      <div class="card"><h3>Reply with NexoAI</h3>
        <div class="muted">Draft a professional reply that matches your tone. Choose a message on the left to begin.</div>
        <div class="divider"></div><button class="btn primary">${I.spark}Draft reply</button>
      </div>
    </div>`);
}
function viewWorkspace(){
  const col = (k, title) => `
    <div class="klist">
      <h4>${title}<span>${projects.filter(p=>p.s===k).length}</span></h4>
      ${projects.filter(p=>p.s===k).map(p=>`<div class="kcard"><div class="t">${p.t}</div><div class="s">${p.s2}</div></div>`).join('')}
    </div>`;
  return pageShell('Workspace','Projects, tasks, docs, files — all in one place', `
    ${renderFeedComposer()}
    <div id="posts" class="mt-16">${renderPosts()}</div>
    <h3 style="margin:22px 0 10px">Boards</h3>
    <div class="kanban">${col('todo','To do')}${col('doing','In progress')}${col('done','Done')}</div>`);
}
function viewBusiness(){
  return pageShell('Business','0 partners · start operating your business hub', `
    <div class="split-3">
      <div class="metric"><div class="lbl">Revenue MTD</div><div class="val">₱0</div><div class="sub">start invoicing</div></div>
      <div class="metric"><div class="lbl">Deals</div><div class="val">0</div><div class="sub">pipeline empty</div></div>
      <div class="metric"><div class="lbl">Partners</div><div class="val">0</div><div class="sub">invite one</div></div>
    </div>
    <div class="card mt-16"><h3>Get started</h3>
      <div class="muted">Set up your company profile, invite teammates, and connect payments to unlock the Business hub.</div>
      <div class="divider"></div>
      <div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn primary">${I.plus}Create company</button><button class="btn">Connect payments</button></div>
    </div>`);
}
function viewCareer(){
  return pageShell('Career','0 opportunities · showcase yourself to the market', `
    <div class="split">
      <div class="card"><h3>Your career profile</h3>
        <div class="muted">63% complete — add a headline, portfolio and one recommendation to break 80%.</div>
        <div class="bar" style="margin-top:10px"><i style="width:63%"></i></div>
        <div class="divider"></div><button class="btn primary">Continue profile</button>
      </div>
      <div class="card"><h3>Suggested moves</h3>
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
      <div class="muted">${s}</div><div class="divider"></div><button class="btn">${I.play}Start</button>
    </div>`).join('');
  return pageShell('Learning','0 courses started · pick one to begin', `<div class="split">${items}</div>`);
}
function viewMoney(){
  return pageShell('Money','Growth tools for revenue, invoices, and expenses', `
    <div class="split-3">
      <div class="metric"><div class="lbl">Overdue</div><div class="val red">₱0</div><div class="sub">0 customers</div></div>
      <div class="metric"><div class="lbl">Outstanding</div><div class="val">₱0</div><div class="sub">receivables</div></div>
      <div class="metric"><div class="lbl">Cash-in MTD</div><div class="val">₱0</div><div class="sub">this month</div></div>
    </div>
    <div class="card mt-16"><h3>Quick actions</h3>
      <div class="row" style="gap:8px;flex-wrap:wrap">
        <button class="btn primary">${I.plus}Create invoice</button>
        <button class="btn">Record expense</button>
        <button class="btn">Import bank</button>
        <button class="btn">Connect GCash</button>
      </div>
    </div>`);
}
function viewOpportunities(){
  return pageShell('Opportunities','0 new leads · NexoAI is scouting for you', `
    <div class="empty">
      <div class="big">${I.opp}</div>
      <div><b>No leads yet</b></div>
      <div>Turn on the leads engine to receive briefs matched to your services.</div>
      <div style="margin-top:12px"><button class="btn primary">${I.spark}Turn on leads</button></div>
    </div>`);
}
function simpleShell(title, sub, blurb, extras=''){
  return pageShell(title, sub, `
    ${renderFeedComposer()}
    <div id="posts" class="mt-16">${renderPosts()}</div>
    <div class="split mt-16">
      <div class="card"><h3>Overview</h3><div class="muted">${esc(blurb)}</div>
        <div class="divider"></div>
        <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn primary">${I.plus}Create</button><button class="btn">Templates</button></div>
      </div>
      <div class="card"><h3>Quick tips</h3><div class="muted">Use the composer above to share updates, upload media, or start a discussion.</div></div>
    </div>
    ${extras}`);
}
function viewPersonal(){    return simpleShell('Personal','Your personal workspace','Habits, goals, notes and journals — a private space that adapts to you.');}
function viewProfessional(){return simpleShell('Professional','Portfolio, clients, contracts','Everything you need to run yourself as a professional.');}
function viewCreator(){     return simpleShell('Creator Studio','Posts, media, schedule, analytics','Publish across platforms and analyze what actually works.');}
function viewEducator(){    return simpleShell('Educator Studio','Courses, lessons, cohorts','Design courses, run cohorts, and grade with less friction.');}
function viewPartner(){     return simpleShell('Partner Center','Partners, deals, commissions','Manage partnerships with clear terms and shared docs.');}
function viewOrganisation(){return simpleShell('Organisation','Team, roles, departments, policies','Structure your org so people know where they belong.');}

function viewProfile(){
  return pageShell('View profile','Your public identity on NexoSphere', `
    <div class="split">
      <div class="card">
        <div class="row">
          <div class="avatar" style="width:72px;height:72px"><img src="${USER.avatar}" alt=""></div>
          <div><h3 style="margin:0">${USER.name}</h3><div class="muted">${USER.role} · ${USER.location}</div></div>
        </div>
        <div class="divider"></div>
        <div class="muted">Builder and community member on NexoSphere — sharing scenes, notes, and ideas as I go.</div>
        <div class="divider"></div>
        <div class="row" style="flex-wrap:wrap;gap:6px">
          <span class="pill violet">Design</span><span class="pill blue">Product</span><span class="pill green">Community</span>
        </div>
      </div>
      <div class="card"><h3>Profile strength</h3>
        <div class="muted">63% complete — add a portfolio and a recommendation to reach 80%.</div>
        <div class="bar" style="margin-top:10px"><i style="width:63%"></i></div>
        <div class="divider"></div>
        <div class="row" style="gap:8px"><button class="btn primary">Edit profile</button><button class="btn">Share</button></div>
      </div>
    </div>`);
}
function viewSettings(){
  return pageShell('Account settings','Manage your identity, security, and preferences', `
    <div class="split">
      <div class="card"><h3>Identity</h3>
        <div class="muted">Name, email, and profile photo used across NexoSphere.</div>
        <div class="divider"></div>
        <div class="row"><span class="pill violet">${USER.name}</span><span class="muted">alvin@nexosphere.app</span></div>
      </div>
      <div class="card"><h3>Security</h3>
        <div class="muted">Two-factor authentication is <b style="color:#4ade80">on</b>. Last sign-in from ${USER.location}.</div>
        <div class="divider"></div><button class="btn">Manage 2FA</button>
      </div>
      <div class="card"><h3>Notifications</h3>
        <div class="muted">Choose which activity reaches you and where.</div>
        <div class="divider"></div>
        <div class="row" style="gap:10px"><div class="switch on"></div><span>Email digest — daily</span></div>
        <div class="row" style="gap:10px;margin-top:8px"><div class="switch on"></div><span>Push — mentions only</span></div>
      </div>
      <div class="card"><h3>Appearance</h3>
        <div class="muted">Pick a theme that suits your eyes.</div>
        <div class="divider"></div>
        <div class="row" style="gap:8px"><button class="btn" onclick="setTheme('dark');render()">Dark</button><button class="btn" onclick="setTheme('light');render()">Light</button></div>
      </div>
    </div>`);
}
function viewBilling(){
  return pageShell('Billing & plans','Your subscription, invoices, and payment methods', `
    <div class="split-3">
      <div class="metric"><div class="lbl">Plan</div><div class="val">Platform</div><div class="sub">Renews Sep 12</div></div>
      <div class="metric"><div class="lbl">Seats</div><div class="val">3 / 5</div><div class="sub">2 available</div></div>
      <div class="metric"><div class="lbl">Next invoice</div><div class="val">₱1,299</div><div class="sub">on Sep 12</div></div>
    </div>
    <div class="card mt-16"><h3>Payment method</h3>
      <div class="row"><span class="pill blue">•••• 4242</span><span class="muted">Visa · exp 09/28</span></div>
      <div class="divider"></div>
      <div class="row" style="gap:8px"><button class="btn primary">Update card</button><button class="btn">Change plan</button></div>
    </div>`);
}
function viewHelp(){
  return pageShell('Help & support','Guides, FAQs and how to reach the team', `
    <div class="split">
      <div class="card"><h3>Popular guides</h3>
        <div class="feed-item"><div class="feed-icon">${I.learn}</div><div><div class="feed-title">Getting started with Sphere Hub</div><div class="feed-body">10 min · walkthrough</div></div></div>
        <div class="feed-item"><div class="feed-icon">${I.workspace}</div><div><div class="feed-title">Set up your first workspace</div><div class="feed-body">5 min · quick start</div></div></div>
        <div class="feed-item"><div class="feed-icon">${I.money}</div><div><div class="feed-title">Send your first invoice</div><div class="feed-body">3 min · Money</div></div></div>
      </div>
      <div class="card"><h3>Contact us</h3>
        <div class="muted">We usually reply within a few hours.</div>
        <div class="divider"></div>
        <div class="row" style="gap:8px"><button class="btn primary">${I.msg}Chat with support</button><button class="btn">Email us</button></div>
      </div>
    </div>`);
}

/* ---------- SUB ROUTES ---------- */
function parentLabel(pid){
  const all = [...sidebarMain, ...sidebarWorkspaces];
  return (all.find(x=>x.id===pid) || {label:pid}).label;
}
function renderSubRoute(pid, sub){
  const parentTitle = parentLabel(pid);
  const key = `${pid}:${sub}`;

  // Custom-tailored sub views for a few high-value ones
  if(key === 'network:Groups')     return pageShell(sub, `${parentTitle} · discussion groups`, subGroups(),   parentTitle);
  if(key === 'network:Followers')  return pageShell(sub, `${parentTitle} · people following you`, subFollowers(), parentTitle);
  if(key === 'network:Invites')    return pageShell(sub, `${parentTitle} · pending requests`, subInvites(),    parentTitle);
  if(key === 'network:Connections')return pageShell(sub, `${parentTitle} · your connections`, subConnections(), parentTitle);

  if(key === 'market:Live Feed')   return pageShell(sub, `${parentTitle} · streaming signals`, subLiveMarket(), parentTitle);
  if(key === 'market:Trends')      return pageShell(sub, `${parentTitle} · what's rising`, subTrends(),        parentTitle);
  if(key === 'market:Watchlist')   return pageShell(sub, `${parentTitle} · saved topics`, subWatchlist(),      parentTitle);
  if(key === 'market:Signals')     return pageShell(sub, `${parentTitle} · alerts scoped to you`, subSignals(), parentTitle);

  if(key === 'jobs:Discover')      return pageShell(sub, `${parentTitle} · fresh roles`, subJobDiscover(), parentTitle);
  if(key === 'jobs:Applications')  return pageShell(sub, `${parentTitle} · your submissions`, subJobStatus('applications'), parentTitle);
  if(key === 'jobs:Saved')         return pageShell(sub, `${parentTitle} · saved for later`, subJobStatus('saved'), parentTitle);
  if(key === 'jobs:Interviews')    return pageShell(sub, `${parentTitle} · upcoming interviews`, subJobStatus('interviews'), parentTitle);

  if(key === 'workspace:Projects')   return pageShell(sub, `${parentTitle} · project board`, subKanban(), parentTitle);
  if(key === 'workspace:Tasks')      return pageShell(sub, `${parentTitle} · your task list`, subTasks(), parentTitle);
  if(key === 'workspace:Docs')       return pageShell(sub, `${parentTitle} · shared docs`,  subDocs(), parentTitle);
  if(key === 'workspace:Files')      return pageShell(sub, `${parentTitle} · uploaded files`, subFiles(), parentTitle);
  if(key === 'workspace:Automations')return pageShell(sub, `${parentTitle} · workflows on autopilot`, subAutomations(), parentTitle);

  // Fallback: generic content page for every remaining sub-nav item so none is empty
  return pageShell(sub, `${parentTitle} · ${sub.toLowerCase()}`, subGeneric(pid, sub), parentTitle);
}

/* ----- sub view builders ----- */
function subConnections(){
  const rows = connections.slice(0,8).map(c=>`
    <div class="feed-item">
      <div class="avatar sm">${c[0].split(' ').map(x=>x[0]).join('')}</div>
      <div><div class="feed-title">${c[0]}</div><div class="feed-body">${c[1]} at ${c[2]} · ${c[3]}</div></div>
      <button class="btn ghost">Message</button>
    </div>`).join('');
  return `<div class="card">${rows}</div>`;
}
function subGroups(){
  const groups = [
    ['PH Founders','1.2k members','Ideas, deals, and hiring in the local startup scene.','violet'],
    ['Designers Manila','842 members','Feedback, jobs, and monthly meetup announcements.','blue'],
    ['Freelance Ops','604 members','Contracts, rates, and templates worth stealing.','green'],
    ['NexoFlow Users','2.8k members','Tips, feature requests, and Q&A for NexoFlow.','amber'],
  ];
  return `<div class="split">${groups.map(g=>`
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <div><div class="feed-title">${g[0]}</div><div class="muted">${g[1]}</div></div>
        <span class="pill ${g[3]}">Group</span>
      </div>
      <div class="divider"></div>
      <div class="muted">${g[2]}</div>
      <div class="divider"></div>
      <div class="row" style="gap:8px"><button class="btn primary">Open</button><button class="btn">Leave</button></div>
    </div>`).join('')}</div>`;
}
function subFollowers(){
  const rows = ['Miguel Vela','Sam Reyes','Trisha Uy','Nikki Ong','Diego Ramos','Ana Santos','Rico Bernal'].map(n=>`
    <div class="feed-item">
      <div class="avatar sm">${n.split(' ').map(x=>x[0]).join('')}</div>
      <div><div class="feed-title">${n}</div><div class="feed-body">Started following you · this week</div></div>
      <button class="btn ghost">Follow back</button>
    </div>`).join('');
  return `<div class="split-3">
    <div class="metric"><div class="lbl">Followers</div><div class="val">148</div><div class="sub">+9 this week</div></div>
    <div class="metric"><div class="lbl">Reach</div><div class="val">2.4k</div><div class="sub">last 30 days</div></div>
    <div class="metric"><div class="lbl">New this week</div><div class="val">9</div><div class="sub">from Groups</div></div>
  </div>
  <div class="card mt-16">${rows}</div>`;
}
function subInvites(){
  const items = [
    ['Kyle Lim','Kalinga Capital','wants to connect','Investor'],
    ['Trisha Uy','Verde','wants to connect','HR Lead'],
    ['Sam Reyes','Loop','wants to connect','PMM'],
    ['PH Founders','Group invitation','invited you to join','Group'],
  ];
  return `<div class="card">
    ${items.map(x=>`
      <div class="feed-item">
        <div class="avatar sm">${x[0].split(' ').map(z=>z[0]).join('')}</div>
        <div><div class="feed-title">${x[0]} <span class="muted" style="font-weight:400">${x[2]}</span></div><div class="feed-body">${x[1]} · ${x[3]}</div></div>
        <div class="row" style="gap:6px"><button class="btn primary">Accept</button><button class="btn ghost">Ignore</button></div>
      </div>`).join('')}
  </div>`;
}
function subLiveMarket(){ return viewMarketBody(true); }
function subTrends(){
  const rows = [
    ['AI-native onboarding flows in fintech','+62% mentions','violet'],
    ['Local-first D2C brands with subscription tiers','+41% mentions','green'],
    ['Freelance retainers vs project pricing debate','+28% mentions','amber'],
    ['Payroll automation in SME segment','+22% mentions','blue'],
  ].map(([t,d,c])=>`
    <div class="feed-item">
      <div class="feed-icon">${I.market}</div>
      <div><div class="feed-title">${t}</div><div class="feed-body">${d} · last 7 days</div></div>
      <span class="pill ${c}">Trend</span>
    </div>`).join('');
  return `<div class="card">${rows}</div>`;
}
function subWatchlist(){
  return `<div class="card">
    <div class="row" style="flex-wrap:wrap;gap:8px">
      <span class="pill violet">B2B SaaS PH</span>
      <span class="pill blue">Fintech</span>
      <span class="pill green">Freelance</span>
      <span class="pill amber">D2C</span>
      <span class="pill violet">AI tooling</span>
      <button class="chip-btn">${I.plus}Add topic</button>
    </div>
    <div class="divider"></div>
    <div class="muted">You'll get scoped signals and daily briefs for every topic on your watchlist.</div>
  </div>`;
}
function subSignals(){
  const rows = [
    ['New PR from your competitor "Ledger.ph" — pricing page rewrite','Signal · Competitor'],
    ['3 warm leads went quiet in the last 7 days','Signal · Sales'],
    ['Design job openings in Manila spiked 18%','Signal · Talent'],
    ['GCash checkout rolled out to more merchants','Signal · Payments'],
  ].map(([t,s])=>`
    <div class="feed-item">
      <div class="feed-icon">${I.spark}</div>
      <div><div class="feed-title">${t}</div><div class="feed-body">${s}</div></div>
      <span class="feed-time">Now</span>
    </div>`).join('');
  return `<div class="card">${rows}</div>`;
}
function viewMarketBody(){
  const items = marketItems.map(m=>`
    <div class="feed-item">
      <div class="feed-icon">${I.market}</div>
      <div><div class="feed-title">${m.t}</div><div class="feed-body">${m.s}</div></div>
      <span class="pill ${m.chip}">Live</span>
    </div>`).join('');
  return `<div class="card">${items}</div>`;
}
function subJobDiscover(){ return `<div class="split-3">${jobsList.map(j=>`
  <div class="card">
    <div class="row" style="justify-content:space-between">
      <div><div class="feed-title">${j.title}</div><div class="muted">${j.co} · ${j.loc}</div></div>
      <span class="pill ${j.chip}">${j.tag}</span>
    </div>
    <div class="divider"></div>
    <div class="row" style="justify-content:space-between">
      <div class="muted">${j.pay}</div><button class="btn primary">Apply</button>
    </div>
  </div>`).join('')}</div>`; }
function subJobStatus(kind){
  const empty = {
    applications: ['📮','No applications yet','Send your first — jobs you apply to will show up here.'],
    saved:        ['🔖','No saved jobs yet','Bookmark roles you want to come back to.'],
    interviews:   ['📅','No interviews scheduled','Interviews will appear here as they get confirmed.'],
  }[kind] || ['—','Nothing here','You will see items here soon.'];
  return `<div class="empty"><div class="big">${empty[0]}</div><div><b>${empty[1]}</b></div><div>${empty[2]}</div>
    <div style="margin-top:12px"><button class="btn primary" onclick="go('jobs')">Browse jobs</button></div></div>`;
}
function subKanban(){
  const col = (k, title) => `
    <div class="klist">
      <h4>${title}<span>${projects.filter(p=>p.s===k).length}</span></h4>
      ${projects.filter(p=>p.s===k).map(p=>`<div class="kcard"><div class="t">${p.t}</div><div class="s">${p.s2}</div></div>`).join('')}
    </div>`;
  return `<div class="kanban">${col('todo','To do')}${col('doing','In progress')}${col('done','Done')}</div>`;
}
function subTasks(){
  const rows = [
    ['Reply to Kyle re: Q3 update','Today','violet'],
    ['Ship onboarding v2 preview','Fri','amber'],
    ['Send Craftly proposal','Next Mon','green'],
    ['Review Maria portfolio','No date','blue'],
  ].map(([t,d,c])=>`
    <div class="feed-item">
      <div class="feed-icon">${I.workspace}</div>
      <div><div class="feed-title">${t}</div><div class="feed-body">Due ${d}</div></div>
      <span class="pill ${c}">${d}</span>
    </div>`).join('');
  return `<div class="card">${rows}</div>`;
}
function subDocs(){
  const docs = ['Company one-pager','Growth plan v3','Hiring plan H2','Investor updates','Design principles'];
  return `<div class="split">${docs.map(d=>`
    <div class="card">
      <div class="feed-title">${d}</div>
      <div class="muted">Edited 2h ago · shared with team</div>
      <div class="divider"></div>
      <div class="row" style="gap:8px"><button class="btn primary">Open</button><button class="btn">Duplicate</button></div>
    </div>`).join('')}</div>`;
}
function subFiles(){
  return `<div class="split-3">${SCENES.slice(0,6).map((s,i)=>`
    <div class="card"><div class="post-img" style="margin:-16px -16px 12px"><img src="${s}" alt="" style="max-height:180px"></div>
      <div class="feed-title">Scene ${i+1}.png</div>
      <div class="muted">2.3 MB · shared</div>
    </div>`).join('')}</div>`;
}
function subAutomations(){
  const flows = [
    ['Auto-tag new leads by source','on','green'],
    ['Send weekly digest to team','on','green'],
    ['Nudge quiet leads after 7 days','off','blue'],
    ['Sync invoices → accounting','on','violet'],
  ];
  return `<div class="card">${flows.map(([t,st,c])=>`
    <div class="feed-item">
      <div class="feed-icon">${I.spark}</div>
      <div><div class="feed-title">${t}</div><div class="feed-body">Runs whenever the trigger fires</div></div>
      <span class="pill ${c}">${st.toUpperCase()}</span>
    </div>`).join('')}</div>`;
}

/* Generic content for the remaining ~40 sub-items — real placeholder pages, never blank */
function subGeneric(pid, sub){
  const k = sub.toLowerCase();
  // Feed-style pages
  if(/(posts|media|feed)/.test(k)){
    return `${renderFeedComposer()}<div id="posts" class="mt-16">${renderPosts()}</div>`;
  }
  // Calendar-ish
  if(/(schedule|cohorts|interviews)/.test(k)){
    return `<div class="card"><h3>This week</h3>
      <div class="feed-item"><div class="feed-icon">${I.workspace}</div><div><div class="feed-title">Mon 9:00 — Team standup</div><div class="feed-body">30 min · recurring</div></div></div>
      <div class="feed-item"><div class="feed-icon">${I.workspace}</div><div><div class="feed-title">Wed 15:00 — 1:1 with Kyle</div><div class="feed-body">45 min · one-off</div></div></div>
      <div class="feed-item"><div class="feed-icon">${I.workspace}</div><div><div class="feed-title">Fri 11:00 — Design review</div><div class="feed-body">60 min · Onboarding v2</div></div></div>
    </div>`;
  }
  // Analytics
  if(/(analytics|reports|grading|pipeline)/.test(k)){
    return `<div class="split-3">
      <div class="metric"><div class="lbl">This week</div><div class="val">1,284</div><div class="sub">+12%</div></div>
      <div class="metric"><div class="lbl">Engagement</div><div class="val">4.6%</div><div class="sub">+0.3 pts</div></div>
      <div class="metric"><div class="lbl">Conversions</div><div class="val">38</div><div class="sub">this week</div></div>
    </div>
    <div class="card mt-16"><h3>Highlights</h3>
      <div class="muted">Your ${sub.toLowerCase()} view is trending up. Below are the top drivers this week.</div>
      <div class="divider"></div>
      <div class="row" style="gap:6px;flex-wrap:wrap"><span class="pill violet">Top post</span><span class="pill green">Best channel</span><span class="pill amber">Warm segment</span></div>
    </div>`;
  }
  // Team-ish
  if(/(team|partners|clients|roles|departments|policies)/.test(k)){
    const rows = ['Alvin Espazar · Owner','Maria Aquino · Designer','Jared Cruz · Engineer','Lea Domingo · Founder','Kai Torres · Ops']
      .map(x=>`<div class="feed-item"><div class="avatar sm">${x.split(' ').map(z=>z[0]).join('').slice(0,2)}</div>
        <div><div class="feed-title">${x.split(' · ')[0]}</div><div class="feed-body">${x.split(' · ')[1] || sub}</div></div>
        <button class="btn ghost">Manage</button></div>`).join('');
    return `<div class="card">${rows}</div>`;
  }
  // Skills / lists
  if(/(skills|habits|goals|notes|resume|portfolio|contracts|rates|invoices|expenses|deals|commissions|docs)/.test(k)){
    const items = ['Item one','Item two','Item three','Item four'].map(t=>`
      <div class="feed-item">
        <div class="feed-icon">${I.workspace}</div>
        <div><div class="feed-title">${sub} — ${t}</div><div class="feed-body">Placeholder entry · tap to open</div></div>
        <button class="btn ghost">Open</button>
      </div>`).join('');
    return `<div class="card">${items}</div>
    <div class="card mt-16"><div class="row" style="gap:8px"><button class="btn primary">${I.plus}Add ${sub.toLowerCase()}</button><button class="btn">Templates</button></div></div>`;
  }
  // Default overview
  return `<div class="split">
    <div class="card"><h3>Overview</h3><div class="muted">This is your <b>${sub}</b> page inside <b>${parentLabel(pid)}</b>. Real data will appear here as you use NexoSphere.</div>
      <div class="divider"></div>
      <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn primary">${I.plus}Create</button><button class="btn">Templates</button></div>
    </div>
    <div class="card"><h3>Recent activity</h3>
      <div class="feed-item"><div class="feed-icon">${I.spark}</div><div><div class="feed-title">NexoAI prepared 3 suggestions</div><div class="feed-body">Scoped to ${sub}</div></div></div>
      <div class="feed-item"><div class="feed-icon">${I.msg}</div><div><div class="feed-title">2 comments this week</div><div class="feed-body">Across ${parentLabel(pid)}</div></div></div>
    </div>
  </div>`;
}

/* ---------- BIND ---------- */
function bind(){
  $('#hamburger')?.addEventListener('click', ()=>{
    state.drawerOpen = !state.drawerOpen;
    $('#sidebar')?.classList.toggle('open', state.drawerOpen);
    $('#scrim')?.classList.toggle('on', state.drawerOpen);
  });
  const closeDrawer = ()=>{
    state.drawerOpen = false;
    $('#sidebar')?.classList.remove('open');
    $('#scrim')?.classList.remove('on');
  };
  $('#scrim')?.addEventListener('click', closeDrawer);
  $('#drawer-close')?.addEventListener('click', closeDrawer);

  $$('.nav-item').forEach(n=>{
    n.addEventListener('click', ()=>{
      const id = n.dataset.nav;
      const hasSub = n.dataset.hassub === 'true';
      if(hasSub){
        if(state.openMenus.has(id)) state.openMenus.delete(id);
        else state.openMenus.add(id);
      }
      go(id);
      if(window.innerWidth <= 900) closeDrawer();
    });
  });
  $$('[data-subnav]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.stopPropagation();
      go(a.dataset.subnav);
      if(window.innerWidth <= 900) closeDrawer();
    });
  });

  $('#theme-toggle')?.addEventListener('click', ()=>{ setTheme(state.theme==='dark'?'light':'dark'); render(); });
  $('#smart-toggle')?.addEventListener('click', (e)=>{ state.smart = !state.smart; e.currentTarget.classList.toggle('on', state.smart); });
  $$('.tab').forEach(t=>t.addEventListener('click', ()=>{ state.tab = t.dataset.tab; $$('.tab').forEach(x=>x.classList.toggle('active', x===t)); }));
  $$('.orbit-node').forEach(n=>{ n.addEventListener('click', ()=> go(n.dataset.node)); });

  // Avatar dropdown
  const avBtn = $('#avatar-btn');
  avBtn?.addEventListener('click', (e)=>{
    e.stopPropagation();
    state.ddOpen = !state.ddOpen;
    $('#user-dd')?.classList.toggle('on', state.ddOpen);
  });
  document.addEventListener('click', (e)=>{
    if(state.ddOpen && !e.target.closest('#avatar-btn')){
      state.ddOpen = false;
      $('#user-dd')?.classList.remove('on');
    }
  });
  $$('[data-dd]').forEach(x=>x.addEventListener('click', (e)=>{
    e.stopPropagation();
    const k = x.dataset.dd;
    state.ddOpen = false;
    if(k === 'theme'){ setTheme(state.theme==='dark'?'light':'dark'); render(); return; }
    if(k === 'logout'){ if(confirm('Sign out of NexoSphere?')){ location.reload(); } return; }
    go(k);
  }));

  // Composer (present on multiple views)
  const cxText = $('#cx-text');
  cxText?.addEventListener('input', e=>{ state.composer.text = e.target.value; });
  $('#cx-file')?.addEventListener('change', e=>{
    const f = e.target.files?.[0]; if(!f) return;
    const rd = new FileReader();
    rd.onload = ()=>{ state.composer.img = rd.result; refreshComposer(); };
    rd.readAsDataURL(f);
  });
  $('#cx-remove')?.addEventListener('click', ()=>{ state.composer.img = null; refreshComposer(); });
  $('#cx-post')?.addEventListener('click', ()=>{
    const text = state.composer.text.trim();
    if(!text && !state.composer.img) return;
    state.posts.unshift({
      id:'p'+Date.now(), author:USER.name, avatar:USER.avatar, ini:USER.initials,
      color:'linear-gradient(135deg,#22c55e,#10b981)',
      time:'just now', body:text, img:state.composer.img, liked:false, likes:0, comments:[]
    });
    state.composer = { text:'', img:null };
    savePosts();
    refreshComposer(); refreshPosts();
  });

  // Post actions
  $$('.post').forEach(node=>{
    const id = node.dataset.post;
    const p = state.posts.find(x=>x.id===id);
    if(!p) return;
    $$('[data-act]', node).forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const act = btn.dataset.act;
        if(act === 'like'){
          p.liked = !p.liked;
          p.likes += p.liked ? 1 : -1;
          savePosts(); refreshPosts();
        } else if(act === 'comment'){
          const c = $('[data-comments]', node); c?.classList.toggle('on');
          $('input[data-comment-input]', node)?.focus();
        } else if(act === 'share'){
          const url = location.href;
          if(navigator.share){ navigator.share({title:'NexoSphere', text:p.body, url}).catch(()=>{}); }
          else { navigator.clipboard?.writeText(url); btn.textContent = 'Copied ✓'; setTimeout(()=>refreshPosts(), 900); }
        }
      });
    });
    const ci = $('input[data-comment-input]', node);
    const submit = ()=>{
      const v = ci.value.trim(); if(!v) return;
      p.comments.push({ who:USER.name, ini:USER.initials, text:v });
      ci.value = ''; savePosts(); refreshPosts();
    };
    ci?.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); submit(); }});
    $('[data-comment-submit]', node)?.addEventListener('click', submit);
  });

  window.addEventListener('resize', ()=>{ if(state.route === 'sphere-hub') layoutOrbit(); }, {passive:true});
}
function refreshComposer(){
  const host = $('#composer-host');
  if(!host) return;
  host.outerHTML = renderFeedComposer();
  bind();
}
function refreshPosts(){
  const posts = $('#posts');
  if(!posts) return;
  posts.innerHTML = renderPosts();
  bind();
}

function go(id){
  if(!id) return;
  state.route = id;
  // auto-open its parent menu
  const pid = routeParent(id);
  if(pid) state.openMenus.add(pid);
  render();
  $('.scroll')?.scrollTo({top:0});
}
window.go = go;
window.setTheme = setTheme;
window.render = render;

/* ---------- ORBIT LAYOUT + LINES ---------- */
function layoutOrbit(){
  const stage = $('#hub-stage'); if(!stage) return;
  const rect = stage.getBoundingClientRect();
  const cx = rect.width/2, cy = rect.height/2;
  const R = Math.min(rect.width, rect.height)/2 - 80;
  const svg = $('#hub-svg');
  if(svg){
    svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
    const defs = svg.querySelector('defs');
    svg.innerHTML = '';
    svg.appendChild(defs);
    orbitNodes.forEach(n=>{
      const a = n.angle * Math.PI/180;
      const x = cx + Math.cos(a) * R;
      const y = cy + Math.sin(a) * R;
      const trim = 60;
      const dx = x-cx, dy = y-cy, len = Math.hypot(dx,dy);
      const ux = dx/len, uy = dy/len;
      const x1 = cx + ux*trim, y1 = cy + uy*trim;
      const x2 = x - ux*trim, y2 = y - uy*trim;
      const line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('class','hub-line');
      line.setAttribute('x1',x1); line.setAttribute('y1',y1);
      line.setAttribute('x2',x2); line.setAttribute('y2',y2);
      svg.appendChild(line);
      const dur = 3.2 + Math.random()*1.3;
      const pulse = document.createElementNS('http://www.w3.org/2000/svg','circle');
      pulse.setAttribute('class','hub-pulse');
      pulse.setAttribute('r','2.6');
      pulse.setAttribute('cx', x1); pulse.setAttribute('cy', y1);
      const a1 = document.createElementNS('http://www.w3.org/2000/svg','animate');
      a1.setAttribute('attributeName','cx'); a1.setAttribute('values',`${x1};${x2};${x1}`);
      a1.setAttribute('dur', dur+'s'); a1.setAttribute('repeatCount','indefinite');
      const a2 = document.createElementNS('http://www.w3.org/2000/svg','animate');
      a2.setAttribute('attributeName','cy'); a2.setAttribute('values',`${y1};${y2};${y1}`);
      a2.setAttribute('dur', dur+'s'); a2.setAttribute('repeatCount','indefinite');
      pulse.appendChild(a1); pulse.appendChild(a2);
      svg.appendChild(pulse);
    });
  }
  $$('.orbit-node', stage).forEach(node=>{
    const a = parseFloat(node.dataset.angle) * Math.PI/180;
    const x = cx + Math.cos(a) * R;
    const y = cy + Math.sin(a) * R;
    node.style.left = x + 'px';
    node.style.top  = y + 'px';
  });
}

render();
