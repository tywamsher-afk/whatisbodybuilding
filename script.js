const exerciseDatabase = [
  { id: 'bench-press', name: 'Barbell Bench Press', muscle: 'chest', type: 'compound', illustration: 'Standard flat bench pressing motion with barbell', tips: 'Lower to chest at 45° angle, maintain scapular retraction, drive through heels' },
  { id: 'incline-bench', name: 'Incline Barbell Bench', muscle: 'chest', type: 'compound', illustration: 'Inclined pressing targeting upper chest', tips: 'Upper chest emphasis at 45° angle, controlled descent, explosive drive' },
  { id: 'dumbbell-press', name: 'Dumbbell Bench Press', muscle: 'chest', type: 'compound', illustration: 'Dumbbell pressing with greater range of motion', tips: 'Full range of motion, dumbbells to chest level, squeeze at lockout' },
  { id: 'cable-fly', name: 'Cable Flyes', muscle: 'chest', type: 'isolation', illustration: 'Cable machine chest isolation with straight arms', tips: 'Chest level pulleys, slight arm bend, focus on pec contraction' },
  { id: 'pushup', name: 'Push-ups', muscle: 'chest', type: 'bodyweight', illustration: 'Bodyweight pressing movement', tips: 'Full range to chest, core tight, elbows at 45° angle' },
  { id: 'deadlift', name: 'Conventional Deadlift', muscle: 'back', type: 'compound', illustration: 'Maximum strength pulling movement from floor', tips: 'Neutral spine, shoulders over bar, drive hips and chest up simultaneously' },
  { id: 'barbell-row', name: 'Barbell Rows', muscle: 'back', type: 'compound', illustration: 'Explosive horizontal pulling motion', tips: 'Chest to bar, elbows tucked at 45°, explosive concentric phase' },
  { id: 'pullup', name: 'Pull-ups', muscle: 'back', type: 'compound', illustration: 'Bodyweight vertical pulling from dead hang', tips: 'Full range of motion, dead hang start, chin over bar at top' },
  { id: 'lat-pulldown', name: 'Lat Pulldown', muscle: 'back', type: 'isolation', illustration: 'Machine-based vertical pulling motion', tips: 'Chest to cable machine, elbows down and back, controlled eccentric' },
  { id: 'face-pull', name: 'Face Pulls', muscle: 'back', type: 'isolation', illustration: 'Rear delt and upper back isolation work', tips: 'Elbows high, rope separation at end, high rep range' },
  { id: 'squat', name: 'Barbell Back Squat', muscle: 'legs', type: 'compound', illustration: 'Primary lower body compound movement', tips: 'Below parallel depth, vertical torso, chest up, core braced' },
  { id: 'leg-press', name: 'Leg Press', muscle: 'legs', type: 'compound', illustration: 'Machine-based lower body pressing', tips: 'Full range of motion, controlled descent, drive through heels' },
  { id: 'leg-curl', name: 'Leg Curls', muscle: 'legs', type: 'isolation', illustration: 'Hamstring isolation machine movement', tips: 'Slow eccentric, full stretch at bottom, squeeze at top' },
  { id: 'leg-extension', name: 'Leg Extensions', muscle: 'legs', type: 'isolation', illustration: 'Quadriceps isolation machine work', tips: 'Full lockout, 1-second pause at top, controlled eccentric phase' },
  { id: 'calf-raise', name: 'Calf Raises', muscle: 'legs', type: 'isolation', illustration: 'Plantar flexion isolation movement', tips: 'Full range of motion, hold 1-2 seconds at peak, high repetitions' },
  { id: 'ohp', name: 'Overhead Press', muscle: 'shoulders', type: 'compound', illustration: 'Vertical pressing compound movement', tips: 'Neutral wrist position, core tight, press vertically overhead' },
  { id: 'lateral-raise', name: 'Lateral Raises', muscle: 'shoulders', type: 'isolation', illustration: 'Lateral shoulder isolation with dumbbells', tips: 'Slight elbow bend, raise to shoulder height, controlled descent' },
  { id: 'reverse-pec', name: 'Reverse Pec Deck', muscle: 'shoulders', type: 'isolation', illustration: 'Rear deltoid isolation machine work', tips: 'Rear delts targeted, controlled motion throughout, squeeze at end' },
  { id: 'shrug', name: 'Barbell Shrugs', muscle: 'shoulders', type: 'isolation', illustration: 'Trapezius isolation vertical movement', tips: 'Straight vertical path, squeeze traps at top, 1-second hold' },
  { id: 'barbell-curl', name: 'Barbell Curls', muscle: 'arms', type: 'isolation', illustration: 'Bicep isolation with barbell', tips: 'Full range of motion, minimize momentum, squeeze at top' },
  { id: 'dumbbell-curl', name: 'Dumbbell Curls', muscle: 'arms', type: 'isolation', illustration: 'Dumbbell bicep curl with supination', tips: 'Supinate at top, controlled lowering, full stretch at bottom' },
  { id: 'tricep-dip', name: 'Tricep Dips', muscle: 'arms', type: 'compound', illustration: 'Upper body pressing with bodyweight', tips: 'Chest forward, elbows tucked, full range of motion' },
  { id: 'rope-pushdown', name: 'Rope Pushdowns', muscle: 'arms', type: 'isolation', illustration: 'Tricep cable isolation work', tips: 'Separate rope at bottom, high repetitions, controlled tempo' },
  { id: 'skull-crusher', name: 'Skull Crushers', muscle: 'arms', type: 'isolation', illustration: 'Tricep isolation with weight behind head', tips: 'Elbows stationary, full range to behind head, controlled descent' },
  { id: 'ab-wheel', name: 'Ab Wheel Rollout', muscle: 'core', type: 'isolation', illustration: 'Core rollout from knees or standing', tips: 'Full extension, squeeze abs, drive hips forward to return' },
  { id: 'hanging-leg-raise', name: 'Hanging Leg Raises', muscle: 'core', type: 'isolation', illustration: 'Abdominal work from pull-up bar', tips: 'Straight legs, full range, controlled tempo throughout' },
  { id: 'cable-crunch', name: 'Cable Crunches', muscle: 'core', type: 'isolation', illustration: 'Machine-based abdominal crunch', tips: 'Full crunch contraction, high repetitions, control the eccentric' },
  { id: 'plank', name: 'Planks', muscle: 'core', type: 'bodyweight', illustration: 'Isometric core stability hold', tips: 'Neutral spine, tight core throughout, consistent tension' },
];

let currentExerciseFilter = 'all';

function renderExerciseGrid() {
  const grid = document.getElementById('exercise-grid');
  if (!grid) return;
  const searchTerm = (document.getElementById('exercise-search')?.value || '').toLowerCase();
  const filtered = exerciseDatabase.filter(ex => {
    const matchesFilter = currentExerciseFilter === 'all' || ex.muscle === currentExerciseFilter;
    const matchesSearch = ex.name.toLowerCase().includes(searchTerm) || ex.muscle.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
  grid.innerHTML = filtered.map(ex => `
    <div class="exercise-card" onclick="showExerciseDetail('${ex.id}')">
      <div class="exercise-name">${ex.name}</div>
      <div class="exercise-muscle">${ex.muscle}</div>
      <div class="exercise-tags"><span class="exercise-tag">${ex.type}</span></div>
    </div>
  `).join('');
}

function filterByMuscle(event, muscle) {
  if (event) {
    document.querySelectorAll('.tab-buttons button').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }
  currentExerciseFilter = muscle;
  renderExerciseGrid();
}

function filterExercises() {
  renderExerciseGrid();
}

function showExerciseDetail(exerciseId) {
  const exercise = exerciseDatabase.find(ex => ex.id === exerciseId);
  if (!exercise) return;
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:300;animation:fadeIn 0.2s ease;';
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  modal.innerHTML = `
    <div style="background:var(--bg-card);border-radius:16px;padding:2rem;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
        <h2 style="font-family:'Bebas Neue';font-size:32px;letter-spacing:1px;margin:0;">${exercise.name}</h2>
        <button onclick="this.closest('div').parentElement.remove()" style="background:transparent;border:none;font-size:24px;cursor:pointer;color:var(--text-secondary);">X</button>
      </div>
      <div style="background:var(--bg-primary);padding:1.5rem;border-radius:8px;margin-bottom:1.5rem;border:2px solid var(--border-strong);text-align:center;min-height:80px;display:flex;align-items:center;justify-content:center;">
        <div style="color:var(--text-primary);font-size:14px;line-height:1.6;">${exercise.illustration}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;">
        <div style="background:var(--bg-primary);padding:1rem;border-radius:8px;text-align:center;">
          <div style="font-size:12px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:0.5rem;">Target Muscle</div>
          <div style="font-size:18px;color:var(--accent);font-weight:600;text-transform:capitalize;">${exercise.muscle}</div>
        </div>
        <div style="background:var(--bg-primary);padding:1rem;border-radius:8px;text-align:center;">
          <div style="font-size:12px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:0.5rem;">Category</div>
          <div style="font-size:18px;color:var(--accent);font-weight:600;text-transform:capitalize;">${exercise.type}</div>
        </div>
      </div>
      <div style="background:var(--bg-primary);padding:1.5rem;border-radius:8px;margin-bottom:1.5rem;border-left:4px solid var(--accent);">
        <div style="font-size:12px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:0.75rem;">Form Tips</div>
        <div style="color:var(--text-primary);line-height:1.6;font-size:14px;">${exercise.tips}</div>
      </div>
      <button onclick="this.closest('div').parentElement.remove()" style="width:100%;padding:12px;background:var(--accent);color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:14px;text-transform:uppercase;letter-spacing:1px;">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId)?.classList.add('active');
  document.querySelectorAll('.nav-buttons button').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');
  document.getElementById('nav-buttons')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  const html = document.documentElement;
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function toggleMenu() {
  document.getElementById('nav-buttons')?.classList.toggle('open');
}

function toggleSearch() {
  document.getElementById('search-overlay')?.classList.toggle('open');
  document.getElementById('site-search')?.focus();
}

function closeSearchOverlay(event) {
  if (event.target.id === 'search-overlay') {
    document.getElementById('search-overlay')?.classList.remove('open');
  }
}

function updateMacros() {
  const w = parseFloat(document.getElementById('weight')?.value) || 185;
  const a = parseFloat(document.getElementById('activity')?.value) || 1.55;
  const g = document.getElementById('goal')?.value || 'maintenance';
  const bmr = 10 * w / 2.205 + 6.25 * 70 - 5 * 35 + 5;
  let tdee = bmr * a;
  if (g === 'deficit') tdee -= 500;
  if (g === 'surplus') tdee += 500;
  const protein = w * 1;
  const fat = tdee * 0.3 / 9;
  const carbs = (tdee - protein * 4 - fat * 9) / 4;
  if (document.getElementById('tdee-result')) document.getElementById('tdee-result').textContent = Math.round(tdee);
  if (document.getElementById('protein-result')) document.getElementById('protein-result').textContent = Math.round(protein) + 'g';
  if (document.getElementById('fat-result')) document.getElementById('fat-result').textContent = Math.round(fat) + 'g';
  if (document.getElementById('carbs-result')) document.getElementById('carbs-result').textContent = Math.round(carbs) + 'g';
}

function updateORM() {
  const w = parseFloat(document.getElementById('lift-weight')?.value) || 225;
  const r = parseFloat(document.getElementById('lift-reps')?.value) || 5;
  const orm = w * (1 + r / 30);
  if (document.getElementById('orm-result')) document.getElementById('orm-result').textContent = Math.round(orm);
}

function updatePlates() {
  const t = parseFloat(document.getElementById('plate-target')?.value) || 315;
  const b = parseFloat(document.getElementById('bar-weight')?.value) || 45;
  const pw = [45, 35, 25, 10, 5, 2.5];
  const ps = (t - b) / 2;
  let rem = ps;
  const plates = [];
  for (let w of pw) {
    while (rem >= w) {
      plates.push(w);
      rem -= w;
    }
  }
  const pv = document.getElementById('plate-visual');
  if (pv) {
    pv.innerHTML = `<div class="bar"></div>${plates.map(p => {const c=p===45?'plate-45':p===35?'plate-35':p===25?'plate-25':p===10?'plate-10':p===5?'plate-5':'plate-2-5';return `<div class="plate ${c}">${p}</div>`;}).join('')}<div class="bar"></div>${plates.map(p => {const c=p===45?'plate-45':p===35?'plate-35':p===25?'plate-25':p===10?'plate-10':p===5?'plate-5':'plate-2-5';return `<div class="plate ${c}">${p}</div>`;}).join('')}`;
  }
  const pr = document.getElementById('plate-result');
  if (pr) {
    const pc = {};
    plates.forEach(p => { pc[p] = (pc[p] || 0) + 1; });
    pr.textContent = Object.entries(pc).map(([w, c]) => `${c}x ${w}`).join(', ');
  }
}

function updateBodyFat() {
  const s = document.getElementById('bf-sex')?.value || 'male';
  const h = parseFloat(document.getElementById('bf-height')?.value) || 70;
  const w = parseFloat(document.getElementById('bf-waist')?.value) || 34;
  const n = parseFloat(document.getElementById('bf-neck')?.value) || 15;
  const hip = parseFloat(document.getElementById('bf-hip')?.value) || 38;
  let bf;
  if (s === 'male') {
    bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
  } else {
    bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hip - n) + 0.22100 * Math.log10(h)) - 450;
  }
  if (document.getElementById('bf-result')) document.getElementById('bf-result').textContent = Math.max(0, bf).toFixed(1) + '%';
  const hg = document.getElementById('hip-group');
  if (hg) hg.style.display = s === 'female' ? 'block' : 'none';
}

function updateWaterIntake() {
  const w = parseFloat(document.getElementById('water-weight')?.value) || 185;
  const t = parseFloat(document.getElementById('water-training')?.value) || 1;
  let water = w * 0.5 + t * 12;
  if (document.getElementById('water-result')) document.getElementById('water-result').textContent = Math.round(water);
}

function updateProteinPerMeal() {
  const t = parseFloat(document.getElementById('prot-total')?.value) || 180;
  const m = parseFloat(document.getElementById('prot-meals')?.value) || 4;
  if (document.getElementById('prot-per-meal')) document.getElementById('prot-per-meal').textContent = Math.round(t / m) + 'g';
}

function updateWeeklyGain() {
  const c = parseFloat(document.getElementById('body-weight')?.value) || 185;
  const tgt = parseFloat(document.getElementById('target-weight')?.value) || 195;
  const wks = parseFloat(document.getElementById('target-weeks')?.value) || 12;
  if (document.getElementById('weekly-gain')) document.getElementById('weekly-gain').textContent = Math.abs((tgt - c) / wks).toFixed(2) + ' lbs';
}

let workoutLog = JSON.parse(localStorage.getItem('workoutLog')) || [];

function addLogEntry() {
  workoutLog.push({ id: Date.now(), exercise: 'Barbell Bench Press', sets: 4, reps: 8, weight: 225 });
  saveLog();
  renderLogEntries();
}

function deleteLogEntry(id) {
  workoutLog = workoutLog.filter(e => e.id !== id);
  saveLog();
  renderLogEntries();
}

function updateLogEntry(id, field, value) {
  const e = workoutLog.find(x => x.id === id);
  if (e) {
    e[field] = field === 'exercise' ? value : parseFloat(value) || 0;
    saveLog();
  }
}

function renderLogEntries() {
  const c = document.getElementById('log-entries');
  if (!c) return;
  c.innerHTML = workoutLog.map(e => `<div class="log-entry"><input type="text" value="${e.exercise}" onchange="updateLogEntry(${e.id}, 'exercise', this.value)" placeholder="Exercise name"><input type="number" value="${e.sets}" onchange="updateLogEntry(${e.id}, 'sets', this.value)" placeholder="Sets"><input type="number" value="${e.reps}" onchange="updateLogEntry(${e.id}, 'reps', this.value)" placeholder="Reps"><input type="number" value="${e.weight}" onchange="updateLogEntry(${e.id}, 'weight', this.value)" placeholder="Weight"><button class="log-delete" onclick="deleteLogEntry(${e.id})">Delete</button></div>`).join('');
  updateLogStats();
}

function updateLogStats() {
  const ts = workoutLog.reduce((s, e) => s + (e.sets || 0), 0);
  const tr = workoutLog.reduce((s, e) => s + (e.reps || 0), 0);
  const tv = workoutLog.reduce((s, e) => s + ((e.sets || 0) * (e.reps || 0) * (e.weight || 0)), 0);
  const te = new Set(workoutLog.map(e => e.exercise)).size;
  [['total-sets', ts], ['total-reps', tr], ['total-volume', Math.round(tv)], ['total-exercises', te]].forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

function saveLog() {
  localStorage.setItem('workoutLog', JSON.stringify(workoutLog));
}

function clearLog() {
  if (confirm('Clear all workout entries?')) {
    workoutLog = [];
    saveLog();
    renderLogEntries();
  }
}

function filterPrograms(event, level) {
  if (event) {
    document.querySelectorAll('.tab-buttons button').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }
  document.querySelectorAll('.program-card').forEach(p => {
    p.style.display = level === 'all' || p.getAttribute('data-level') === level ? 'block' : 'none';
  });
}

function handleNewsletter(e) {
  e.preventDefault();
  alert(`Thanks for subscribing! Check ${e.target.querySelector('input[type="email"]').value} for updates.`);
  e.target.reset();
  return false;
}

function handleContact(e) {
  e.preventDefault();
  alert('Message received! We will get back to you soon.');
  e.target.reset();
  return false;
}

const articleContent = {
  protein: { title: 'How Much Protein Do You Actually Need?', category: 'Nutrition', date: 'April 12, 2026', content: '<h2>The Real Science</h2><p>Protein intake matters for muscle building. 0.7-1g per pound is optimal.</p>' },
  overload: { title: 'Progressive Overload: The Only Principle That Matters', category: 'Training', date: 'April 10, 2026', content: '<h2>Why Programs Do Not Matter</h2><p>Progressive overload is everything. Pick any program and overload it.</p>' },
  creatine: { title: 'The Truth About Creatine in 2026', category: 'Supplements', date: 'April 8, 2026', content: '<h2>It Works</h2><p>Creatine monohydrate: 5g daily. Period.</p>' },
  failure: { title: 'Training to Failure: When It Helps, When It Hurts', category: 'Training', date: 'April 5, 2026', content: '<h2>Reps in Reserve</h2><p>Leave 1-2 reps in reserve for better long-term gains.</p>' },
  sleep: { title: 'Sleep for Strength: The Muscle Builder Guide', category: 'Recovery', date: 'April 2, 2026', content: '<h2>Sleep is Where Gains Happen</h2><p>7-9 hours nightly. Cool room. Consistent schedule.</p>' },
  cutting: { title: 'Cutting Without Losing Muscle', category: 'Nutrition', date: 'March 30, 2026', content: '<h2>The Strategy</h2><p>500 calorie deficit. High protein. High volume training.</p>' }
};

function showArticle(articleId) {
  const article = articleContent[articleId];
  if (!article) return;
  document.getElementById('article-list').style.display = 'none';
  const wrapper = document.getElementById('article-content-wrap');
  wrapper.style.display = 'block';
  wrapper.innerHTML = `<button class="cta-button" onclick="hideArticle()" style="margin-bottom:2rem;">Back to Articles</button><article class="article-full"><h1>${article.title}</h1><div class="article-meta">${article.category} - ${article.date}</div>${article.content}</article>`;
}

function hideArticle() {
  document.getElementById('article-list').style.display = 'block';
  document.getElementById('article-content-wrap').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.querySelectorAll('.nav-buttons button').forEach(b => {
    b.addEventListener('click', () => document.getElementById('nav-buttons')?.classList.remove('open'));
  });
  renderExerciseGrid();
  updateMacros();
  updateORM();
  updatePlates();
  updateBodyFat();
  updateWaterIntake();
  updateProteinPerMeal();
  updateWeeklyGain();
  renderLogEntries();
  ['weight', 'activity', 'goal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateMacros);
    if (el) el.addEventListener('input', updateMacros);
  });
  ['lift-weight', 'lift-reps'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateORM);
  });
  ['plate-target', 'bar-weight'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePlates);
  });
  ['bf-sex', 'bf-height', 'bf-waist', 'bf-neck', 'bf-hip'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateBodyFat);
    if (el) el.addEventListener('input', updateBodyFat);
  });
  ['water-weight', 'water-training'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateWaterIntake);
  });
  ['prot-total', 'prot-meals'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateProteinPerMeal);
  });
  ['body-weight', 'target-weight', 'target-weeks'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateWeeklyGain);
  });
});
