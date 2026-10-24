![Ghanendra Sahu — Data Scientist](assets/header.svg)

[![Web](https://img.shields.io/badge/🌐_Live_Site-ghanendrasahu.github.io-58a6ff?style=for-the-badge&labelColor=0d1117)](https://ghanendrasahu.github.io/ghanendrasahu/)
[![GitHub](https://img.shields.io/badge/GitHub-ghanendrasahu-181717?style=for-the-badge&logo=github&labelColor=0d1117)](https://github.com/ghanendrasahu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ghendrasahu-0A66C2?style=for-the-badge&logo=linkedin&labelColor=0d1117)](https://linkedin.com/in/ghanendrasahu)

![Profile Views](https://komarev.com/ghpvc/?username=ghanendrasahu&label=PROFILE+VIEWS&color=blue&style=flat-square)

Building production-grade ML systems, RAG pipelines, and agentic AI applications — currently completing formal Data Science & ML training while shipping real-world inference systems. 🐍 *The green snake patrols this banner's border clockwise — keep an eye on it.*

---

## 🏆 Top 5 Projects

### 1. [Multi-Agent Study Assistant](https://github.com/ghanendrasahu/multi-agent-study-assistant) — [🌐 LIVE](https://multi-agent-study-assistant-app.onrender.com)

Agentic AI reference architecture showing the full LLM stack: prompt engineering → RAG → multi-agent orchestration → persistent vector memory.

- **4 specialized agents** (Researcher → Analyst → Critic → Finaliser) with reflexion loops — the Critic scores answers and routes weak drafts back for refinement
- **RAG:** semantic search + Wikipedia + DuckDuckGo retrieval grounded in LangGraph; **ChromaDB** memory persists across sessions
- Fully typed `TypedDict` state graph with tool-abstraction (LLM decides when to call Wikipedia / search / calculator)

### 2. [Workforce Intelligence](https://github.com/ghanendrasahu/workforce-intelligence) — [🌐 API](https://workforce-intelligence-api-1n9k.onrender.com) · [🌐 UI](https://workforce-intelligence-ui.onrender.com)

Enterprise decision engine for employee attrition — *explains drivers and simulates interventions, not just a probability score*.

- 260k+ synthetic employee snapshots from a known causal DAG → every claim is testable; calibrated **LightGBM (0.67 ROC-AUC, validation 0.72)**
- Per-employee risk drivers, what-if simulation ("10% raise + 20% workload cut → 32% → 29.4% risk, ₹18.4L cost avoided/yr")
- Isotonic calibration (ECE 0.038 → 0.018), SHAP explainability, 5-stage data-quality pipeline, FastAPI + Streamlit + Docker + CI/CD

### 3. [AI Supply Chain Digital Twin](https://github.com/ghanendrasahu/ai-supply-chain-digital-twin) — [🌐 LIVE](https://supply-chain-digital-twin-app.onrender.com)

Simulation-first supply-chain digital twin: demand forecasting, inventory policy, and disruption-scenario simulation via a Streamlit control panel.

- Demand forecasting + inventory simulation engine you can stress-test with disruption scenarios
- Interactive what-if control panel for planners — compare policies before committing capital

### 4. [Customer Churn Prediction](https://github.com/ghanendrasahu/customer-churn-project) — [🌐 LIVE](https://customer-churn-app-1jyq.onrender.com)

Full ML pipeline to deployment: data generation → training → FastAPI inference API → Streamlit dashboard.

- Telco churn pipeline with tuned **Random Forest (87%+ accuracy)** and proper train/validation discipline
- FastAPI inference with structured schemas + interactive dashboard for risk assessment and batch prediction

### 5. [Fraud Detection Engine](https://github.com/ghanendrasahu/fraud-detection-engine) — [🌐 LIVE](https://fraud-detection-engine-s5k7.onrender.com)

Transaction fraud scoring API: ensemble models trained at deploy time, served through FastAPI.

- **XGBoost / LightGBM / CatBoost ensembles** exported to **ONNX** for fast inference
- `/health` + `/predict` endpoints with imbalanced-learning-aware training

---

## 🚀 More Projects — every live link beside the name

| Project | ↗ Live | One-liner |
|---|---|---|
| [JobHunter AI](https://github.com/ghanendrasahu/jobhunter-ai) | [🌐 LIVE](https://jobhunter-ai-h73m.onrender.com) | Multi-agent pipeline discovers + ranks + tracks GenAI/DS roles (Adzuna + scraping), agent workflow dashboard |
| [Kitsunecart](https://github.com/ghanendrasahu/kitsunecart) | [🌐 LIVE](https://kitsunecart.onrender.com) | E-commerce listing agent: product photo → SEO titles, bullets, descriptions (Groq LLM, offline fallback) |
| [LegalLens India](https://github.com/ghanendrasahu/sharingan) | [🌐 LIVE](https://legal-lens-india.onrender.com) | AI contract literacy for startups, freelancers, landlords/tenants (phase-1 API live) |
| [RAG Assistant API](https://github.com/ghanendrasahu/rag-assistant-api) | [🌐 LIVE](https://rag-assistant-api-393o.onrender.com) | PDF Q&A API: ChromaDB vector index + MiniLM/onnxruntime embeddings + Groq synthesis |
| [Local RAG Assistant](https://github.com/ghanendrasahu/local-rag-assistant) | — | Privacy-first offline knowledge retrieval: TXT/PDF chunking + TF-IDF, config-driven, pytest |
| [V-Call](https://github.com/ghanendrasahu/v-call) | — | AI Meeting Intelligence: FastAPI + Celery + PostgreSQL + LangGraph, multi-tenant transcription & agent orchestration |
| [OnePiece](https://github.com/ghanendrasahu/onepiece) | — | Live 360° streaming & AI-guided virtual tourism with verified human guides |

<details>
  <summary><b>📚 More repos</b></summary>

&nbsp;|&nbsp;
---|---
[breast-cancer-classification](https://github.com/ghanendrasahu/breast-cancer-classification) · [credit-risk-project](https://github.com/ghanendrasahu/credit-risk-project) · [industrial-predictive-maintenance](https://github.com/ghanendrasahu/industrial-predictive-maintenance) · [student-attendance](https://github.com/ghanendrasahu/student-attendance) · [finance-forecast-lstm](https://github.com/ghanendrasahu/finance-forecast-lstm) · [crewai-research-agent](https://github.com/ghanendrasahu/crewai-research-agent) · [ai-chat-bot](https://github.com/ghanendrasahu/ai-chat-bot) · [ml-notebooks](https://github.com/ghanendrasahu/ml-notebooks) · [leetcode-dsa](https://github.com/ghanendrasahu/leetcode-dsa) · [fastapi-project](https://github.com/ghanendrasahu/fastapi-project)

</details>

---

## 💻 Tech Stack

**Languages:** ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![Bash](https://img.shields.io/badge/Bash-121011?style=flat-square&logo=gnu-bash&logoColor=white)

**ML/AI:** ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white) ![XGBoost](https://img.shields.io/badge/XGBoost-AA3939?style=flat-square) ![RAG](https://img.shields.io/badge/RAG-7C3AED?style=flat-square) ![LangChain](https://img.shields.io/badge/LangChain-1C3C13?style=flat-square) ![LangGraph](https://img.shields.io/badge/LangGraph-2C6E49?style=flat-square) ![LlamaIndex](https://img.shields.io/badge/LlamaIndex-8A2BE2?style=flat-square) ![CrewAI](https://img.shields.io/badge/CrewAI-FF4455?style=flat-square) ![AutoGen](https://img.shields.io/badge/AutoGen-0078D4?style=flat-square)

**Deployment:** ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions_CI%2FCD-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6F00?style=flat-square) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Model Artifacts](https://img.shields.io/badge/Model_Artifacts-6E7681?style=flat-square)

**Analytics:** ![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=flat-square&logo=powerbi&logoColor=black) ![Excel](https://img.shields.io/badge/Excel-217346?style=flat-square&logo=microsoftexcel&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

---

## 💼 Experience

**Data Science with AI Apprentice** — BDreamz Global Solutions, Bengaluru *(Oct 2025 – Mar 2026)*
Built and validated ML/AI models in production environments; end-to-end model lifecycle management.

**Data Science Intern** — Prinston Smart Engineers, Bengaluru *(Jan – Feb 2025)*
Workforce attendance forecasting pipeline (Linear Regression, KNN, Linear SVC) → **89% accuracy**.

## 🎓 Education

**BCA** — Krupanidhi Degree College, Bangalore University | CGPA **9.15/10** · **Data Science & ML Full-Time Training** — Besant Technologies, Bengaluru (2025-26)

---

## 📫 Reach Me

[![Email](https://img.shields.io/badge/Email-ghanendra2911@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:ghanendra2911@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in/ghanendrasahu-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/ghanendrasahu)
[![GitHub](https://img.shields.io/badge/GitHub-ghanendrasahu-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ghanendrasahu)
![Phone](https://img.shields.io/badge/Phone-%2B91_7608060384-2E7D32?style=flat-square&logo=phone&logoColor=white)

Open to ML/AI projects, internships, and full-time roles in Data Science or ML Engineering.

<div align="right">

<details>
<summary>👁️</summary>

[don't](https://github.com/ghanendrasahu/ghanendrasahu/graphs/traffic)

</details>

</div>
