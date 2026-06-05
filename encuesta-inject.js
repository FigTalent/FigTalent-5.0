// FIGTALENT — Encuesta inject
function initEncuesta(){
  // 1. CSS
  var s=document.createElement('style');
  s.textContent="/* ── ENCUESTA ── */\n#encuesta{background:var(--blue-deep);position:relative;overflow:hidden}\n#encuesta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 20% 50%,rgba(0,102,255,.1) 0%,transparent 60%),radial-gradient(ellipse 40% 60% at 80% 50%,rgba(0,255,136,.06) 0%,transparent 60%);pointer-events:none}\n.encuesta-inner{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}\n@media(max-width:780px){.encuesta-inner{grid-template-columns:1fr;gap:32px}}\n.encuesta-card{background:rgba(10,22,40,.85);border:1px solid rgba(0,102,255,.25);border-radius:var(--radius);padding:32px;box-shadow:0 4px 32px rgba(0,0,0,.4),0 0 0 1px rgba(0,102,255,.08);backdrop-filter:blur(14px);position:relative;z-index:1}\n.encuesta-total{display:inline-flex;align-items:center;gap:8px;background:rgba(0,102,255,.1);border:1px solid rgba(0,212,255,.2);border-radius:100px;padding:5px 14px;font-size:12px;font-weight:700;color:var(--blue-glow);letter-spacing:.5px;margin-bottom:20px}\n.encuesta-total-dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 6px var(--green);animation:pulseDot 2s ease-in-out infinite}\n@keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}\n.encuesta-bar-wrap{margin-bottom:22px}\n.encuesta-bar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}\n.encuesta-bar-label{font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:8px}\n.encuesta-bar-label-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}\n.encuesta-bar-pct{font-family:'Playfair Display',serif;font-size:28px;font-weight:900;line-height:1}\n.encuesta-bar-track{height:36px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;position:relative}\n.encuesta-bar-fill{height:100%;border-radius:10px;width:0%;transition:width 1.4s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;justify-content:flex-end;padding-right:14px;position:relative;overflow:hidden}\n.encuesta-bar-fill::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.08) 50%,transparent 100%);animation:shimmer 2.5s ease-in-out infinite}\n@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}\n.encuesta-bar-fill-si{background:linear-gradient(90deg,rgba(0,102,255,.7),rgba(0,212,255,.9));box-shadow:0 0 16px rgba(0,212,255,.3)}\n.encuesta-bar-fill-no{background:linear-gradient(90deg,rgba(124,58,237,.6),rgba(201,169,122,.7));box-shadow:0 0 16px rgba(124,58,237,.2)}\n.encuesta-bar-count{font-size:11px;font-weight:700;color:#fff;position:relative;z-index:2;white-space:nowrap;text-shadow:0 1px 4px rgba(0,0,0,.4)}\n.encuesta-preguntas{display:flex;flex-direction:column;gap:11px;margin-top:28px}\n.encuesta-pregunta-item{display:flex;align-items:flex-start;gap:11px;padding:12px 14px;background:rgba(0,102,255,.06);border:1px solid rgba(0,102,255,.15);border-radius:var(--radius-sm);transition:all .3s ease}\n.encuesta-pregunta-item:hover{background:rgba(0,102,255,.1);border-color:rgba(0,212,255,.25)}\n.encuesta-q-icon{font-size:16px;flex-shrink:0;margin-top:1px}\n.encuesta-q-text{font-size:12.5px;color:var(--text-muted);line-height:1.5}\n.encuesta-q-badge{margin-left:auto;flex-shrink:0;font-size:10px;font-weight:700;padding:2px 8px;border-radius:100px}\n.encuesta-q-badge-si{background:rgba(0,212,255,.12);color:var(--blue-glow);border:1px solid rgba(0,212,255,.2)}\n.encuesta-q-badge-no{background:rgba(124,58,237,.12);color:#a78bfa;border:1px solid rgba(124,58,237,.2)}\n.encuesta-error{text-align:center;padding:28px;font-size:13px;color:var(--text-muted)}\n.encuesta-loading{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--text-muted);margin-bottom:16px}\n.encuesta-spinner{width:16px;height:16px;border-radius:50%;border:2px solid rgba(0,212,255,.2);border-top-color:var(--blue-glow);animation:spin .8s linear infinite}\n@keyframes spin{to{transform:rotate(360deg)}}\n.encuesta-update{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-muted);margin-top:16px}\n";
  document.head.appendChild(s);

  // 2. SECCIÓN — insertar entre #testimonios y #blog
  var secHTML='<!-- ENCUESTA EN TIEMPO REAL -->\n<section id="encuesta">\n  <div class="section-inner">\n    <div class="encuesta-inner">\n      <div class="encuesta-info reveal-left">\n        <div class="section-label">Validación de la comunidad</div>\n        <h2 class="section-title">¿Qué piensan los jóvenes talentos?</h2>\n        <div class="section-divider"></div>\n        <p style="font-size:14.5px;color:var(--text-muted);line-height:1.8;margin-bottom:6px">Encuestamos a estudiantes ecuatorianos para validar si <strong style="color:var(--blue-glow)">FigTalent</strong> resuelve un problema real. Estos son los resultados en tiempo real.</p>\n        <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin-bottom:20px">Cada respuesta que apoya la necesidad de una plataforma como FigTalent se cuenta como <span style="color:var(--blue-glow);font-weight:700">DE ACUERDO</span>.</p>\n        <div class="encuesta-preguntas stagger">\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">💡</span><span class="encuesta-q-text">¿Consideras que tienes algún talento o habilidad especial?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">👁️</span><span class="encuesta-q-text">¿Te gustaría que más personas conozcan tu talento?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">🚧</span><span class="encuesta-q-text">¿Crees que es difícil ser descubierto sin contactos o dinero?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">📱</span><span class="encuesta-q-text">¿Sabes cómo construir una marca personal en internet?</span><span class="encuesta-q-badge encuesta-q-badge-no">No ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">😔</span><span class="encuesta-q-text">¿Has perdido oportunidades por falta de visibilidad?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí/Tal vez ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">🤖</span><span class="encuesta-q-text">¿Utilizarías una plataforma con IA para mostrar tu talento?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí/Tal vez ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">🔍</span><span class="encuesta-q-text">¿Te parecería útil que scouts te encuentren digitalmente?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">🛡️</span><span class="encuesta-q-text">¿Una plataforma segura para jóvenes sería importante?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí ✓</span></div>\n          <div class="encuesta-pregunta-item"><span class="encuesta-q-icon">🚀</span><span class="encuesta-q-text">¿Te gustaría formar parte de FigTalent?</span><span class="encuesta-q-badge encuesta-q-badge-si">Sí/Tal vez ✓</span></div>\n        </div>\n      </div>\n      <div class="reveal-right">\n        <div class="encuesta-card">\n          <div class="encuesta-loading" id="enc-loading"><div class="encuesta-spinner"></div><span>Cargando resultados en tiempo real…</span></div>\n          <div class="encuesta-total" id="enc-total-badge" style="display:none"><div class="encuesta-total-dot"></div><span id="enc-total-num">0</span> respuestas totales · En vivo</div>\n          <div class="encuesta-bar-wrap">\n            <div class="encuesta-bar-header">\n              <div class="encuesta-bar-label"><div class="encuesta-bar-label-dot" style="background:var(--blue-glow);box-shadow:0 0 8px var(--blue-glow)"></div>De acuerdo con FigTalent</div>\n              <div class="encuesta-bar-pct" id="enc-pct-si" style="color:var(--blue-glow)">—</div>\n            </div>\n            <div class="encuesta-bar-track"><div class="encuesta-bar-fill encuesta-bar-fill-si" id="enc-bar-si"><span class="encuesta-bar-count" id="enc-count-si"></span></div></div>\n          </div>\n          <div class="encuesta-bar-wrap">\n            <div class="encuesta-bar-header">\n              <div class="encuesta-bar-label"><div class="encuesta-bar-label-dot" style="background:#a78bfa;box-shadow:0 0 8px rgba(124,58,237,.5)"></div>No de acuerdo</div>\n              <div class="encuesta-bar-pct" id="enc-pct-no" style="color:#a78bfa">—</div>\n            </div>\n            <div class="encuesta-bar-track"><div class="encuesta-bar-fill encuesta-bar-fill-no" id="enc-bar-no"><span class="encuesta-bar-count" id="enc-count-no"></span></div></div>\n          </div>\n          <div class="encuesta-update"><div class="encuesta-total-dot" style="width:6px;height:6px"></div><span>Se actualiza automáticamente cada 30 segundos</span></div>\n          <div class="encuesta-error" id="enc-error" style="display:none">⚠️ No se pudieron cargar los datos en este momento.</div>\n        </div>\n        <div style="margin-top:20px;padding:18px 20px;background:rgba(0,255,136,.05);border:1px solid rgba(0,255,136,.15);border-radius:var(--radius-sm)">\n          <div style="font-size:12px;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">📊 Sobre esta encuesta</div>\n          <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0">Aplicada a estudiantes ecuatorianos de entre 10 y 18 años. Los resultados validan la necesidad real de una plataforma como FigTalent en el ecosistema educativo del Ecuador.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n';
  var blog=document.getElementById('blog');
  if(blog){
    var div=document.createElement('div');
    div.innerHTML=secHTML.trim();
    var node=div.firstElementChild;
    blog.parentNode.insertBefore(node,blog);
    // Activar scroll observer para los nuevos elementos
    if(typeof io !== 'undefined'){
      node.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(function(el){
        io.observe(el);
      });
    }
    // Forzar visibilidad si ya en viewport
    setTimeout(function(){
      node.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(function(el){
        if(el.getBoundingClientRect().top < window.innerHeight){
          el.classList.add('visible');
        }
      });
    }, 300);
  } else {
    console.warn('FigTalent Encuesta: no se encontró #blog');
  }

  // 3. JS de encuesta
  /* ══════════════════════════════════════
   ENCUESTA EN TIEMPO REAL — FIGTALENT
══════════════════════════════════════ */
const APPS_SCRIPT_URL='https://script.google.com/macros/s/AKfycbzTbEin9m0mNraRjDlwrSENl_3mbsf9OCPrAV5BcYPhnsH1AJfjqrUck6Saf0ilIXvL-w/exec';
let encuestaAnimated=false;
function renderEncuesta(data){
  const total=data.deAcuerdo+data.enDesacuerdo;
  if(total===0)return;
  const pctSi=Math.round((data.deAcuerdo/total)*100);
  const pctNo=Math.round((data.enDesacuerdo/total)*100);
  const loading=document.getElementById('enc-loading');
  const badge=document.getElementById('enc-total-badge');
  const error=document.getElementById('enc-error');
  if(loading)loading.style.display='none';
  if(error)error.style.display='none';
  if(badge)badge.style.display='inline-flex';
  const totalEl=document.getElementById('enc-total-num');
  if(totalEl)totalEl.textContent=total;
  const pctSiEl=document.getElementById('enc-pct-si');
  const pctNoEl=document.getElementById('enc-pct-no');
  if(pctSiEl)pctSiEl.textContent=pctSi+'%';
  if(pctNoEl)pctNoEl.textContent=pctNo+'%';
  const barSi=document.getElementById('enc-bar-si');
  const barNo=document.getElementById('enc-bar-no');
  const cntSi=document.getElementById('enc-count-si');
  const cntNo=document.getElementById('enc-count-no');
  const animateNow=()=>{
    if(barSi)barSi.style.width=pctSi+'%';
    if(barNo)barNo.style.width=pctNo+'%';
    if(cntSi)cntSi.textContent=data.deAcuerdo+(data.deAcuerdo===1?' respuesta':' respuestas');
    if(cntNo)cntNo.textContent=data.enDesacuerdo+(data.enDesacuerdo===1?' respuesta':' respuestas');
    if(pctSi<12&&cntSi)cntSi.style.display='none';
    if(pctNo<12&&cntNo)cntNo.style.display='none';
  };
  if(encuestaAnimated){animateNow();}
  else{
    const section=document.getElementById('encuesta');
    if(section){
      const obs=new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){setTimeout(animateNow,200);encuestaAnimated=true;obs.disconnect();}
      },{threshold:0.2});
      obs.observe(section);
    }else{animateNow();encuestaAnimated=true;}
  }
}
function fetchEncuesta(){
  fetch(APPS_SCRIPT_URL)
    .then(r=>r.json())
    .then(data=>{renderEncuesta(data);})
    .catch(()=>{
      const loading=document.getElementById('enc-loading');
      const error=document.getElementById('enc-error');
      if(loading)loading.style.display='none';
      if(error)error.style.display='block';
    });
}
fetchEncuesta();
setInterval(fetchEncuesta,30000);

}

// Esperar a que el DOM esté completamente listo
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initEncuesta);
} else {
  initEncuesta();
}
