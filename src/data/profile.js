export const profile = {
  name: "Muhammad Haris Ali",
  shortName: "Haris Ali",
  title: "AI Engineer",
  location: "Islamabad, Pakistan",
  email: "muhammadharrisali1@gmail.com",
  phone: "+92 349 8969762",
  linkedin: "https://www.linkedin.com/in/muhammad-haris-ali",
  github: "https://github.com/harris2578887",
  githubUsername: "harris2578887",
  portfolio: "https://muhammad-haris-ali-portfolio.vercel.app",
  headline:
    "Building intelligent systems across Computer Vision, Generative AI, and edge deployment.",
  summary:
    "AI Engineer with hands-on expertise in Computer Vision, Generative AI, and Machine Learning. Experienced in LLM fine-tuning, edge AI deployment, and building intelligent systems that solve real-world problems. Proficient in Python, C++, and modern ML frameworks. Passionate about applying cutting-edge AI to healthcare, security, and education — with a track record of award-winning university projects and production-grade deployments.",
  education: {
    school: "Bahria University Islamabad, Pakistan",
    degree: "Bachelor of Science in Computer Science",
    period: "2021 – 2025",
  },
  roles: [
    "AI Engineer",
    "Computer Vision",
    "Generative AI",
    "LLM Fine-Tuning",
    "Edge AI",
  ],
};

export const experience = [
  {
    company: "Government of Pakistan",
    location: "Islamabad, Pakistan",
    role: "AI Engineer (BPS-17)",
    period: "Sep 2025 – Present",
    highlights: [
      "Developing and deploying AI-driven solutions for national-scale digital transformation in a secure government environment.",
      "Designing Computer Vision, Machine Learning, NLP, and LLM applications for mission-critical use cases.",
      "Building scalable AI services, REST APIs, and microservices for production with security and reliability in mind.",
      "Optimizing deep learning models with TensorRT, ONNX Runtime, CUDA, and GPU acceleration.",
      "Maintaining on-premises GPU infrastructure, Docker/Kubernetes inference pipelines, and NVIDIA MPS for concurrent model serving.",
    ],
  },
  {
    company: "Techostudios",
    location: "Remote",
    role: "Generative AI Engineer | Financial AI Product",
    period: "Dec 2024 – Sep 2025",
    highlights: [
      "Architected an end-to-end AI platform for financial forecasting and transaction analysis.",
      "Developed LSTM forecasting models for equity trends and anomaly detection on large financial datasets.",
      "Engineered time-series feature pipelines and grounded LLM reports with retrieval workflows.",
      "Managed the full ML lifecycle and containerized training/inference services with Docker.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    role: "Generative AI Engineer",
    period: "May 2023 – Present",
    highlights: [
      "Built AI interview assistants with speech recognition, LLM reasoning, and automated evaluation.",
      "Created synthetic data pipelines for healthcare and enterprise NLP with quality and diversity filtering.",
      "Designed multimodal semantic search with CLIP, vector databases, and RAG.",
      "Deployed real-time YOLO Computer Vision on NVIDIA Jetson with TensorRT optimization.",
    ],
  },
  {
    company: "RISETech, NUST College of E&ME",
    location: "Rawalpindi, Pakistan",
    role: "Machine Learning Intern",
    period: "Jul 2024 – Aug 2024",
    highlights: [
      "Fine-tuned LLaMA and Gemma for healthcare and educational applications using PEFT.",
      "Developed an AI-powered Medical OSCE simulation for history taking, diagnosis, and assessment.",
      "Built custom datasets, prompt strategies, and evaluation pipelines for clinical reasoning tasks.",
    ],
  },
];

export const projects = [
  {
    title: "VetAI Chatbot",
    tag: "Final Year Project",
    stack: "Generative AI · Flutter · LLM · Voice",
    description:
      "Multi-module veterinary chatbot with Flutter, fine-tuned LLaMA diagnosis, Whisper Urdu voice, and Gemini report generation.",
    image: "vetai",
    ghLink: "https://github.com/harris2578887/vetai-chatbot",
  },
  {
    title: "ANPR Gate Entry System",
    tag: "2nd · Project Gala 2023",
    stack: "YOLOv8 · Edge AI · Jetson Nano",
    description:
      "On-device number plate recognition with custom YOLOv8, OCR post-processing, and real-time Jetson Nano inference.",
    image: "anpr",
    ghLink: null,
  },
  {
    title: "HACRF Spectrum Analyzer",
    tag: "Confidential Client",
    stack: "Edge AI · RF · Signal Processing",
    description:
      "Drone detection via RF spectrum analysis with ARM, x64, and AMD builds tuned for low false positives and latency.",
    image: "spectrum",
    ghLink: null,
  },
  {
    title: "Synthetic Healthcare NLP",
    tag: "Healthcare AI",
    stack: "LLM · Data Augmentation · NLP",
    description:
      "LLM pipeline generating 50K+ labeled samples, cutting annotation cost ~80% and lifting classifier accuracy by 15%.",
    image: "synthetic",
    ghLink: null,
  },
  {
    title: "Cancer Cell Segmentation",
    tag: "Medical Imaging",
    stack: "U-Net · Computer Vision · DL",
    description:
      "Automated cell segmentation with U-Net, ResNet/EfficientNet benchmarks, augmentation, and imbalance handling.",
    image: "cancer",
    ghLink: null,
  },
  {
    title: "SAM 3D Sketch Animation",
    tag: "EdTech",
    stack: "SAM · 3D Rendering · CV",
    description:
      "Turns children’s sketches into animated 3D characters using Segment Anything, rigging, and procedural motion.",
    image: "sam3d",
    ghLink: null,
  },
  {
    title: "Enterprise RAG System",
    tag: "LLM Systems",
    stack: "RAG · LangChain · Vectors",
    description:
      "Document Q&A with chunking, embeddings, and LangChain orchestration on Pinecone at sub-second latency.",
    image: "rag",
    ghLink: null,
  },
  {
    title: "Document Summarizer",
    tag: "NLP Web App",
    stack: "TF-IDF · PyMuPDF · Flask",
    description:
      "Flask app for PDF extraction and extractive summarization with TF-IDF scoring and adjustable compression.",
    image: "summarize",
    ghLink: null,
  },
  {
    title: "Inventory Detection",
    tag: "Retail Automation",
    stack: "YOLOv8 · TensorRT · Jetson",
    description:
      "Real-time stock monitoring on Jetson Nano with YOLOv8, TensorRT acceleration, and edge batch inference.",
    image: "inventory",
    ghLink: null,
  },
];

export const skills = {
  "AI & Deep Learning":
    "LLM Fine-Tuning, Computer Vision, LSTM, U-Net, YOLOv8, SAM, Generative AI, NLP, Time-Series Forecasting, Transformers, RAG, CLIP, LoRA",
  "ML Frameworks":
    "PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face Transformers, spaCy, NLTK, OpenCV, FastAI, XGBoost",
  "Model Optimization":
    "TensorRT, ONNX, OpenVINO, CUDA, MPS, Model Pruning, Quantization, Knowledge Distillation, GPU Acceleration",
  "DevOps & MLOps":
    "Docker, Kubernetes, NVIDIA Container Toolkit, AWS (EC2, S3), GCP, MinIO, FastAPI, Flask, REST APIs, Microservices",
  "GPU & Local AI":
    "NVIDIA CUDA Toolkit, Drivers, CUDA MPS, GPU Partitioning, nvidia-smi, On-Premises GPU Infrastructure",
  Programming:
    "Python, C++, SQL, PostgreSQL, MySQL, MongoDB, Redis, FAISS, PHP, Laravel, Bash, Linux, Git, Jetson Nano",
};

export const certifications = [
  "Google Data Analytics Professional Certificate – Google",
  "AWS Academy Cloud Architecting – Amazon Web Services",
  "Introduction to Data Science – IBM",
  "AI for Everyone – Google",
  "Agentic AI – Hands-On Training",
  "Deep Learning Specialization – Coursera (In Progress)",
];

export const achievements = [
  "2nd Position – Project Gala 2023, Bahria University — ANPR Gate Entry System on NVIDIA Jetson Nano",
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Urdu", level: "Native" },
];

export const competencies = [
  {
    title: "Technical Leadership",
    text: "Owning AI systems end-to-end from research and prototyping through production deployment and monitoring.",
  },
  {
    title: "Cross-Functional Collaboration",
    text: "Working with data engineers, backend teams, and stakeholders to turn requirements into deployable AI solutions.",
  },
  {
    title: "Problem Solving",
    text: "Diagnosing performance bottlenecks in training and inference pipelines and applying targeted optimizations.",
  },
  {
    title: "Communication",
    text: "Translating technical AI concepts into clear insights for non-technical stakeholders.",
  },
];
