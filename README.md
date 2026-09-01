## Data Scientist | ML Engineer | Generative AI

Building production-grade ML systems, RAG pipelines, and agentic AI applications. Currently completing formal training in Data Science & ML while working on real-world inference systems, causal inference, and LLM-powered applications.

**Location:** Bengaluru, India | **Phone:** +91 7608060384 | **Email:** [ghanendra2911@gmail.com](mailto:ghanendra2911@gmail.com)

**Links:** [LinkedIn](https://linkedin.com/in/ghanendrasahu) | [GitHub](https://github.com/ghanendrasahu)

---

## What I Do

I specialize in end-to-end ML solutions: data pipeline design, model training with rigorous evaluation, and production deployment. Recent focus areas include RAG systems, multi-agent agentic AI, and building decision intelligence platforms that answer real business questions (not just prediction scores).

**Core competencies:**
- ML pipeline development (feature engineering, model selection, evaluation, threshold tuning)
- Generative AI & LLM applications (RAG, embeddings, prompt engineering, agent orchestration)
- Production deployment (FastAPI, Docker, Streamlit)
- SQL analytics and data-driven decision systems

---

## Featured Projects

### **Multi-Agent Study Assistant** — Agentic AI Reference Architecture
[Repository](https://github.com/ghanendrasahu/multi-agent-study-assistant) | [Live Demo](https://ghanendrasahu-multi-agent-study-assistant-ap.streamlit.app/)

A production-style agentic AI application demonstrating the full LLM stack: prompt engineering → RAG → multi-agent orchestration → persistent vector memory.

**What it does:** Accepts a learning topic and orchestrates 4 specialized agents (Researcher, Analyst, Critic, Finaliser) to produce structured study notes, self-critique loops, and long-term semantic memory.

**Technical highlights:**
- **Agent loop & reflexion:** Critic scores answers; below threshold routes back to Analyst for refinement
- **RAG pipeline:** Semantic search + Wikipedia + DuckDuckGo retrieval for grounded reasoning
- **Vector memory:** ChromaDB persistent storage across sessions — the agent "remembers"
- **State management:** TypedDict-based state flows through the agent graph safely
- **Tool abstraction:** Wikipedia, search, and calculator tools; LLM decides when to invoke

**Why it matters for hiring:** Shows ability to design complex agentic systems, manage stateful AI workflows, and build user-facing applications that handle multi-step reasoning.

---

### **Workforce Intelligence — Decision Engine, Not Just Predictions**
[Repository](https://github.com/ghanendrasahu/workforce-intelligence)

Enterprise AI for employee attrition: predicts risk, explains drivers, simulates interventions, and prices outcomes. Demonstrates causal reasoning and what-if analysis—not just a probability score.

**What it does:**
- Generates 260k+ synthetic employee snapshots from a known causal structure
- Trains calibrated LightGBM model (0.67 ROC-AUC, 0.72 validation)
- Produces per-employee risk drivers: "engagement +8.1pp, comp ratio +5.9pp, promo pressure +4.2pp"
- Simulates interventions: "10% raise + 20% workload cut → risk 32% → 29.4%, cost avoided Rs 18.4L/yr"
- Grounds answers via tools: analytics queries return real data, never invented metrics

**Technical highlights:**
- **Causal framework:** Synthetic data generated from known causal DAG; every claim is testable
- **Model calibration:** Isotonic regression reduces ECE from 0.038 → 0.018
- **Explainability:** SHAP-based feature importance; "discrimination ceiling" measures model vs. Bayes limit
- **Data quality:** 5-stage validation pipeline (completeness, validity, integrity, drift, PSI)
- **Tool-calling agent:** Azure OpenAI agent queries analytics tools; refuses to hallucinate
- **Production architecture:** FastAPI service + Streamlit dashboard + Docker compose + CI/CD

**Why it matters:** Demonstrates that ML isn't just modeling—it's building decision systems. Shows causal thinking, rigorous evaluation, and bridging the gap between ML and business.

---

### **Customer Churn Prediction — Full ML Pipeline to Deployment**
[Repository](https://github.com/ghanendrasahu/customer-churn-project)

End-to-end ML system: training pipeline → FastAPI inference API → Streamlit dashboard.

**What it does:**
- Ingests 7,043-row Telco dataset
- Trains Random Forest (87%+ accuracy) with hyperparameter optimization
- Serves predictions via FastAPI with structured request/response schemas
- Interactive Streamlit UI for risk assessment and batch prediction

**Technical highlights:**
- Modular structure: data pipeline, training script, API layer, UI layer
- FastAPI with proper schemas, async endpoints, error handling
- Streamlit integration for non-technical stakeholders
- Model serialization and artifact management

**Why it matters:** Shows ability to build production-quality ML systems from scratch with clean architecture.

---

### **RAG Assistant API — Document Intelligence with FastAPI**
[Repository](https://github.com/ghanendrasahu/rag-assistant-api)

FastAPI-based PDF RAG backend: ingest PDFs → embed with Hugging Face → store in ChromaDB → retrieve + generate answers via Groq.

**What it does:**
- `/ingest` endpoint: Parse PDFs, chunk text, generate embeddings, persist to vector DB
- `/query` endpoint: Retrieve relevant chunks, generate grounded answers
- `/health` endpoint: Service readiness checks

**Technical highlights:**
- ChromaDB for vector storage (production-ready DB)
- Clean service architecture: `api/`, `core/`, `services/`, `utils/`
- Groq LLM integration for low-latency generation
- Structured logging and request context tracking

**Why it matters:** Shows API design, vector database integration, and LLM service composition.

---

### **Local RAG Assistant — Offline Knowledge Retrieval**
[Repository](https://github.com/ghanendrasahu/local-rag-assistant)

Offline RAG pipeline for enterprise documents: zero external API dependency, designed for privacy-first document Q&A.

**What it does:**
- Loads TXT and PDF files
- Chunks with configurable overlap (improves recall at chunk boundaries)
- Indexes with TF-IDF (fast, interpretable baseline)
- CLI interface for indexing and querying

**Technical highlights:**
- Config-driven pipeline (`pyproject.toml`)
- Custom chunking strategy with overlap
- TF-IDF as strong retrieval baseline (before jumping to embeddings)
- Unit tests with pytest
- Clear separation of concerns: `ingest.py`, `chunking.py`, `index.py`, `pipeline.py`

**Why it matters:** Shows understands retrieval fundamentals, software engineering discipline, and building tools others can use.

---

## Technical Stack

**Languages & Core:** Python · SQL (MySQL, PostgreSQL) · Bash

**ML/AI:** Scikit-learn · PyTorch · XGBoost · Random Forest · Logistic Regression · LSTM
- **Evaluation:** ROC-AUC, F1-Score, Precision-Recall, Confusion Matrix, Threshold Tuning, A/B Testing
- **GenAI/NLP:** RAG, Embeddings, Vector Retrieval, Semantic Search, TF-IDF, Prompt Engineering
- **Agentic:** LangChain, LangGraph, LlamaIndex, CrewAI, Multi-Agent Orchestration

**Libraries:** Pandas · NumPy · Matplotlib · Seaborn · Hugging Face Transformers

**Deployment & Backend:** FastAPI · Streamlit · Docker · Git/GitHub
- **Cloud:** AWS (EC2, S3, Lambda)
- **Databases:** ChromaDB, PostgreSQL, MySQL
- **Monitoring:** Structured logging, pytest

**Frontend:** React (Vite) · Node.js/Express (basic fullstack experience)

---

## Work Experience

**Data Science with AI Apprentice**  
BDreamz Global Solutions Pvt. Ltd., Bengaluru | Oct 2025 – Mar 2026
- Built and validated ML/AI models in production environments
- Collaborated on real-time data science and agentic AI projects
- End-to-end model lifecycle management

**Data Science Intern**  
Prinston Smart Engineers, Bengaluru | Jan 2025 – Feb 2025
- Developed ML pipeline for workforce attendance forecasting (Linear Regression, KNN, Linear SVC)
- Achieved 89% classification accuracy
- Delivered production-ready inference pipeline

---

## Education

**Bachelor of Computer Application (BCA)**  
Krupanidhi Degree College, Bangalore North University | 2022 – 2025  
CGPA: 9.15/10

**Data Science & ML Full-Time Training**  
Besant Technologies, Bengaluru | Sep 2025 – May 2026

---

## Certifications & Recognition

- AI Apprentice — BDreamz Global Solutions / Besant Technologies
- Python & SQL Certification — Besant Technologies
- KRUPADECON Conference Participation

---

## Currently Exploring

- **LLM fine-tuning & adaptation:** Beyond prompt engineering → practical model tuning
- **Advanced agent patterns:** Tool use, hierarchical planning, long-horizon reasoning
- **MLOps maturity:** Beyond local notebooks → CI/CD, model registries, deployment pipelines
- **Causal inference & interpretability:** Moving from correlations to actionable insights

---

## How to Reach Me

- **Code:** [github.com/ghanendrasahu](https://github.com/ghanendrasahu)
- **Professional:** [linkedin.com/in/ghanendrasahu](https://linkedin.com/in/ghanendrasahu)
- **Email:** [ghanendra2911@gmail.com](mailto:ghanendra2911@gmail.com)
- **Phone:** +91 7608060384

I'm open to discussions about ML/AI projects, internships, and full-time roles in Data Science or ML Engineering.
