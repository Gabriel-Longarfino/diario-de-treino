const TREINOS = [
  {
    nome: "Push", emoji: "💪",
    exercicios: [
      { nome: "Paralela", meta: ["3x8-10 RIR1","3x8-10 RIR1","3x8-10 RIR1","3x8-10 RIR1"], series: [3,3,3,3], obs: "1 AQC + 1 FS antes" },
      { nome: "Crucifixo reto — halteres/máquina", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Supino inclinado — smith", meta: ["2xCS","2xCS","2xCS","2xCS"], series: [2,2,2,2], obs: "Cluster set" },
      { nome: "JM Press — smith", meta: ["2x8-10","2x8-10","2x8-10","2x8-10"], series: [2,2,2,2] },
      { nome: "Elevação lateral — halteres", meta: ["3x8-10","3x8-10","4x8-10","4x8-10"], series: [3,3,4,4] },
      { nome: "Tríceps pulley — polia", meta: ["3x8-10 +1RP","3x8-10 +1RP","3x8-10 +1RP","3x8-10 +2RP"], series: [3,3,3,3], obs: "Rest pause ao final" },
      { nome: "Elevação lateral cuffed — polia", meta: ["2x8-10 +1CS","2x8-10 +1CS","2x8-10 +1CS","2x8-10 +1CS"], series: [2,2,2,2] }
    ]
  },
  {
    nome: "Pull", emoji: "🔙",
    exercicios: [
      { nome: "Remada polia — pegada pronada", meta: ["3x5-8","3x5-8","3x5-8","3x5-8"], series: [3,3,3,3], obs: "1 AQC + 1 FS antes" },
      { nome: "Puxada pegada pronada — polia", meta: ["3x6-8","3x6-8","3x6-8","3x6-8"], series: [3,3,3,3] },
      { nome: "Kelso shrug — polia c/ triângulo", meta: ["3x10-8-6","3x10-8-6","3x10-8-6","3x10-8-6"], series: [3,3,3,3], obs: "Aumentar carga a cada série" },
      { nome: "Remada neutra unilateral — polia baixa", meta: ["1x6-8 +1CS","1x6-8 +1CS","1x6-8 +1CS","1x6-8 +1CS"], series: [1,1,1,1] },
      { nome: "Rosca Bayesian — polia", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Rosca martelo alternado — halteres", meta: ["2x8-10","2x8-10","2x8-10","2x8-10"], series: [2,2,2,2] },
      { nome: "Flexão de punho — polia", meta: ["2x6-8","2x6-8","2x6-8","2x6-8"], series: [2,2,2,2] }
    ]
  },
  {
    nome: "Legs", emoji: "🦵",
    exercicios: [
      { nome: "Agachamento hack", meta: ["3x6-8","3x6-8","3x6-8","3x6-8"], series: [3,3,3,3], obs: "1 AQC + 1 FS antes" },
      { nome: "RDL", meta: ["2x6-8","2x6-8","2x6-8","2x6-8"], series: [2,2,2,2] },
      { nome: "Mesa flexora", meta: ["2xCS","2xCS","2xCS","2xCS"], series: [2,2,2,2], obs: "Cluster set" },
      { nome: "Cadeira adutora", meta: ["1x8-10 +1CS","1x8-10 +1CS","1x8-10 +1CS","1x8-10 +1CS"], series: [1,1,1,1] },
      { nome: "Cadeira extensora", meta: ["3x6-8","3x6-8","3x6-8","3x6-8"], series: [3,3,3,3] },
      { nome: "Panturrilha — leg press/máquina", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3], obs: "Lengthened partials" },
      { nome: "Abdominal — solo (com carga)", meta: ["3x8-10 +1RP","3x8-10 +1RP","3x8-10 +1RP","3x8-10 +2RP"], series: [3,3,3,3] }
    ]
  },
  {
    nome: "Upper", emoji: "🏋️",
    exercicios: [
      { nome: "Supino reto — máquina", meta: ["3x8-10","3x8-10","3x6-8","3x6-8"], series: [3,3,3,3], obs: "1 AQC + 1 FS antes" },
      { nome: "Puxada alta c/ triângulo — pegada neutra", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3], obs: "1 AQC + 1 FS antes" },
      { nome: "Elevação lateral — halteres", meta: ["2x8-10 +1CS","2x8-10 +1CS","2x8-10 +1CS","2x8-10 +1CS"], series: [2,2,2,2] },
      { nome: "Remada c/ peito apoiado — máquina", meta: ["3x8-10 +kelso","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Rosca alternada — halteres", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Tríceps francês — corda", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Flexão de punho — polia", meta: ["2x8-10","2x8-10","2x8-10","2x8-10"], series: [2,2,2,2] }
    ]
  },
  {
    nome: "Lower", emoji: "🔽",
    exercicios: [
      { nome: "Levantamento terra", meta: ["3x8-10 RIR2","3x8-10 RIR2","3x8-10 RIR1","3x8-10 RIR1"], series: [3,3,3,3], obs: "1 AQC + 1 FS antes" },
      { nome: "Leg press 45°", meta: ["3x8-10","2x8-10","2x6-8","2x6-8"], series: [3,2,2,2], obs: "1 AQC + 1 FS antes" },
      { nome: "Mesa flexora", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Cadeira extensora", meta: ["3x8-10","3x8-10","3x8-10","3x8-10 +1RP"], series: [3,3,3,3] },
      { nome: "Cadeira abdutora", meta: ["2x8-10","2x8-10","2x8-10","2x8-10"], series: [2,2,2,2] },
      { nome: "Panturrilha — sentado", meta: ["3x8-10","3x8-10","3x8-10","3x8-10"], series: [3,3,3,3] },
      { nome: "Abdominal — solo", meta: ["3x6-8 +1DROP","3x6-8 +1DROP","3x6-8 +1DROP","3x6-8 +1DROP"], series: [3,3,3,3] }
    ]
  }
];

let currentTreino = 0, currentSemana = 0, dados = {};

// Funções de Chave de Dados
function gk(t,s,e,sr,suf=''){return `t${t}_s${s}_e${e}_s${sr}${suf}`;}
function gkObs(t,s,e){return `obs_${t}_${s}_${e}`;}
function gkChk(t,s,e,sr){return `chk_${t}_${s}_${e}_${sr}`;}

// Persistência
function load(){try{const r=localStorage.getItem('treino_v1');if(r)dados=JSON.parse(r);}catch(e){dados={};}}
function save(){try{localStorage.setItem('treino_v1',JSON.stringify(dados));}catch(e){}}

// Navegação
function setTreino(i){
  currentTreino=i;
  document.querySelectorAll('.tab-btn').forEach((b,j)=>b.classList.toggle('active',j===i));
  renderTreino();
}
function setSemana(s){
  currentSemana=s;
  document.querySelectorAll('.sem-btn').forEach((b,j)=>b.classList.toggle('active',j===s));
  renderTreino();
}

// Renderização da Interface
function renderTreino(){
  const tr=TREINOS[currentTreino], s=currentSemana;
  let html='', total=0, done=0;
  tr.exercicios.forEach((ex,ei)=>{
    const ns=ex.series[s]; total+=ns;
    let serRows='';
    for(let sr=0;sr<ns;sr++){
      const kg=dados[gk(currentTreino,s,ei,sr)]||'';
      const rp=dados[gk(currentTreino,s,ei,sr,'_r')]||'';
      const chk=dados[gkChk(currentTreino,s,ei,sr)];
      if(chk)done++;
      serRows+=`<div class="srow">
        <span class="slbl">S${sr+1}</span>
        <input class="sinp" type="number" inputmode="decimal" step="0.5" placeholder="kg" value="${kg}"
          oninput="dados['${gk(currentTreino,s,ei,sr)}']=this.value;updateProg()">
        <input class="sinp" type="number" inputmode="numeric" placeholder="reps" value="${rp}"
          oninput="dados['${gk(currentTreino,s,ei,sr,'_r')}']=this.value;updateProg()">
        <button class="chk-btn${chk?' done':''}" onclick="toggleChk(this,'${gkChk(currentTreino,s,ei,sr)}')">✓</button>
      </div>`;
    }
    const obsKey=gkObs(currentTreino,s,ei);
    html+=`<div class="card">
      <div class="card-head">
        <div><div class="ex-name">${ex.nome}</div>${ex.obs?`<div class="ex-obs">${ex.obs}</div>`:''}</div>
        <span class="badge">${ex.meta[s]}</span>
      </div>
      <div class="card-labels"><span></span><span>Carga</span><span>Reps</span><span></span></div>
      <div class="srows">${serRows}</div>
      <textarea class="obs-inp" placeholder="Observações..." oninput="dados['${obsKey}']=this.value">${dados[obsKey]||''}</textarea>
    </div>`;
  });
  document.getElementById('content').innerHTML=html;
  updateProgFill(done,total);
}

// Progresso e Checks
function updateProg(){
  const tr=TREINOS[currentTreino],s=currentSemana;
  let total=0,done=0;
  tr.exercicios.forEach((ex,ei)=>{
    const ns=ex.series[s];total+=ns;
    for(let sr=0;sr<ns;sr++){if(dados[gkChk(currentTreino,s,ei,sr)])done++;}
  });
  updateProgFill(done,total);
}
function updateProgFill(done,total){
  const pct=total?Math.round(done/total*100):0;
  document.getElementById('pFill').style.width=pct+'%';
  document.getElementById('pPct').textContent=pct+'%';
  document.getElementById('pLbl').textContent=`${done}/${total} séries`;
}
function toggleChk(btn,k){dados[k]=!dados[k];btn.classList.toggle('done',!!dados[k]);updateProg();}

// Ações
function salvar(){
  save();
  const m=document.getElementById('toast');
  m.classList.add('show');
  setTimeout(()=>m.classList.remove('show'),2000);
}

// NOVA FUNÇÃO DE EXPORTAÇÃO COM VALIDAÇÃO COMPLETA
function exportar() {
  let txt = `RELATÓRIO COMPLETO DE PROGRESSÃO — GABRIEL LONGARFINO\n`;
  txt += `Gerado em: ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}\n`;
  txt += `${'='.repeat(50)}\n\n`;

  let erros = [];

  // Percorre as 4 semanas do mesociclo
  for (let s = 0; s < 4; s++) {
    txt += `--- SEMANA ${s + 1} ---\n\n`;

    // Percorre todos os treinos (Push, Pull, etc)
    TREINOS.forEach((tr, ti) => {
      txt += `TREINO: ${tr.nome.toUpperCase()}\n`;
      txt += `${'-'.repeat(20)}\n`;

      tr.exercicios.forEach((ex, ei) => {
        txt += `${ex.nome} (Meta: ${ex.meta[s]})\n`;
        
        for (let sr = 0; sr < ex.series[s]; sr++) {
          const kg = dados[gk(ti, s, ei, sr)];
          const rp = dados[gk(ti, s, ei, sr, '_r')];
          const chk = dados[gkChk(ti, s, ei, sr)];

          // Validação: impede download se houver campo vazio ou falta de check
          if (!kg || !rp || !chk) {
            erros.push(`Semana ${s + 1} - ${tr.nome}: ${ex.nome} (Série ${sr + 1})`);
          }

          txt += `  S${sr + 1}: ${kg || '—'}kg × ${rp || '—'} reps ${chk ? '[OK]' : '[PENDENTE]'}\n`;
        }
        
        const obs = dados[gkObs(ti, s, ei)];
        if (obs) txt += `  Obs: ${obs}\n`;
        txt += `\n`;
      });
      txt += `\n`;
    });
    txt += `${'='.repeat(50)}\n\n`;
  }

  // Verifica se o array de erros contém algo
  if (erros.length > 0) {
    alert(`O relatório está incompleto! Preencha tudo antes de exportar.\n\nPendências encontradas:\n• ${erros.slice(0, 5).join('\n• ')}${erros.length > 5 ? '\n...e mais.' : ''}`);
    return;
  }

  // Se validado, inicia download
  const blob = new Blob([txt], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `progresso_completo_gabriel.txt`;
  a.click();
}

// Inicialização
load();
