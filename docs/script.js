/* Data — single source of truth for the page */
const TOP = [
  {
    n: "Multi-Agent Study Assistant",
    gh: "https://github.com/ghanendrasahu/multi-agent-study-assistant",
    live: ["https://multi-agent-study-assistant-app.onrender.com"],
    d: "Agentic AI architecture: 4 specialized agents (Researcher → Analyst → Critic → Finaliser) with reflexion loops, RAG over Wikipedia + DuckDuckGo, and ChromaDB long-term memory that persists across sessions.",
    tags: ["LangGraph", "RAG", "ChromaDB", "GPT"],
    tag: "Agentic AI",
    grad: "g"
  },
  {
    n: "Workforce Intelligence",
    gh: "https://github.com/ghanendrasahu/workforce-intelligence",
    live: ["https://workforce-intelligence-api-1n9k.onrender.com", "https://workforce-intelligence-ui.onrender.com"],
    d: "Decision engine for attrition: 260k+ causal synthetic snapshots, calibrated LightGBM (0.67 ROC-AUC), SHAP risk drivers, what-if intervention simulation with cost-avoidance math.",
    tags: ["LightGBM", "SHAP", "FastAPI", "Causal"],
    tag: "Decision ML",
    grad: "g"
  },
  {
    n: "AI Supply Chain Digital Twin",
    gh: "https://github.com/ghanendrasahu/ai-supply-chain-digital-twin",
    live: ["https://supply-chain-digital-twin-app.onrender.com"],
    d: "Simulation-first digital twin: demand forecasting, inventory policy, and disruption-scenario simulation with a Streamlit control panel — stress-test decisions before committing capital.",
    tags: ["Streamlit", "Forecasting", "Sim"],
    tag: "Digital Twin",
    grad: "g"
  },
  {
    n: "Customer Churn Prediction",
    gh: "https://github.com/ghanendrasahu/customer-churn-project",
    live: ["https://customer-churn-app-1jyq.onrender.com"],
    d: "Full pipeline to deployment: Telco data → tuned Random Forest (87%+) → FastAPI inference with structured schemas → interactive Streamlit dashboard for risk + batch prediction.",
    tags: ["Random Forest", "FastAPI", "Streamlit"],
    tag: "Classic ML",
    grad: "g"
  },
  {
    n: "Fraud Detection Engine",
    gh: "https://github.com/ghanendrasahu/fraud-detection-engine",
    live: ["https://fraud-detection-engine-s5k7.onrender.com"],
    d: "Transaction fraud scoring API: XGBoost / LightGBM / CatBoost ensembles trained at deploy time, exported to ONNX for fast inference, served via FastAPI /health + /predict.",
    tags: ["XGBoost", "ONNX", "FastAPI"],
    tag: "Fraud",
    grad: "g"
  }
];

const ALL = [
  { n: "JobHunter AI", gh: "https://github.com/ghanendrasahu/jobhunter-ai", live: "https://jobhunter-ai-h73m.onrender.com", d: "Multi-agent pipeline discovers + ranks + tracks GenAI/DS roles (Adzuna + scraping), agent workflow dashboard." },
  { n: "Kitsunecart", gh: "https://github.com/ghanendrasahu/kitsunecart", live: "https://kitsunecart.onrender.com", d: "E-commerce listing agent: product photo → SEO titles, bullets, descriptions (Groq LLM, offline fallback)." },
  { n: "LegalLens India", gh: "https://github.com/ghanendrasahu/sharingan", live: "https://legal-lens-india.onrender.com", d: "AI contract literacy for startups, freelancers, landlords/tenants — phase-1 API live." },
  { n: "RAG Assistant API", gh: "https://github.com/ghanendrasahu/rag-assistant-api", live: "https://rag-assistant-api-393o.onrender.com", d: "PDF Q&A API: ChromaDB vector index + MiniLM/onnxruntime embeddings + Groq synthesis." },
  { n: "Local RAG Assistant", gh: "https://github.com/ghanendrasahu/local-rag-assistant", live: null, d: "Privacy-first offline retrieval: TXT/PDF chunking + TF-IDF, config-driven, pytest." },
  { n: "V-Call", gh: "https://github.com/ghanendrasahu/v-call", live: null, d: "AI Meeting Intelligence: FastAPI + Celery + PostgreSQL + LangGraph, multi-tenant transcription." },
  { n: "OnePiece", gh: "https://github.com/ghanendrasahu/onepiece", live: null, d: "Live 360° streaming & AI-guided virtual tourism with verified human guides." }
];

/* Render top cards */
document.getElementById("top-cards").innerHTML = TOP.map((p, i) => `
  <article class="card reveal" style="transition-delay:${i * 70}ms">
    <span class="tag ${p.grad}" style="margin-bottom:10px;display:inline-block">${p.tag}</span>
    <h3><a href="${p.gh}" target="_blank" rel="noopener">${p.n}</a> <a href="${p.live[0]}" target="_blank" rel="noopener" style="color:var(--grn)">🌐</a></h3>
    <p>${p.d}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="go">
      ${p.live.map((u, j) => `<a class="btn btn-primary" style="padding:8px 14px;font-size:12.5px" href="${u}" target="_blank" rel="noopener">🌐 LIVE${p.live.length > 1 ? (j ? " · UI" : "") : ""}</a>`).join("")}
      <a class="btn" style="padding:8px 14px;font-size:12.5px" href="${p.gh}" target="_blank" rel="noopener">💻 Code</a>
    </div>
  </article>`).join("");

/* Render all-rows */
document.getElementById("all-rows").innerHTML = ALL.map((p, i) => `
  <div class="row reveal" style="transition-delay:${i * 40}ms">
    <div class="rn">${p.live ? `<a href="${p.gh}" target="_blank" rel="noopener">${p.n}</a>&nbsp;<a href="${p.live}" target="_blank" rel="noopener" style="color:var(--grn)">🌐 LIVE ↗</a>`
      : `<a href="${p.gh}" target="_blank" rel="noopener">${p.n}</a>&nbsp;<span style="color:#6e7681">💻 repo only</span>`}</div>
    <div class="rd">${p.d}</div>
  </div>`).join("");

/* Typewriter */
const ROLES = [
  "Data Scientist",
  "ML Engineer",
  "Generative AI Builder",
  "RAG & Agentic AI Developer",
  "Bengaluru, India 📍"
];
let ri = 0, ci = 0, del = false;
const typeEl = document.getElementById("type");
(function type() {
  const w = ROLES[ri];
  typeEl.textContent = w.slice(0, ci);
  if (!del && ci < w.length) { ci++; setTimeout(type, 55); }
  else if (!del) { del = true; setTimeout(type, 1500); }
  else if (ci > 0) { ci--; setTimeout(type, 28); }
  else { del = false; ri = (ri + 1) % ROLES.length; setTimeout(type, 350); }
})();

/* Scroll reveal */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
