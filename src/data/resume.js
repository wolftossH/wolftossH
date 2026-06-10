export const personal = {
  name: "Huy Trinh",
  title: "Data Analytics Engineer",
  email: "XXXXXXXXXX@gmail.com",
  phone: "(XXX) XXX-XXXX",
  linkedin: "https://linkedin.com/in/huy-trinh-vu",
  github: "https://github.com/wolftossH",
  summary:
    "Data Analytics Engineer with 3+ years of experience building scalable data pipelines, ML systems, & LLM-powered applications. Focused on turning data into measurable business impact.",
};

export const education = [
  {
    school: "University of California San Diego",
    degree: "B.S., Data Science",
    gpa: "3.95",
    period: "August 2020 – June 2023",
  },
];

export const experience = [
  {
    company: "Workday",
    role: "Data Analytics Engineer",
    period: "September 2023 – Present",
    logo: "/portfolio/logos/workday.jpeg",
    bullets: [
      "Enhanced efficiency for 200+ salespeople with a RAG LLM sales chatbot using FastAPI, functional testing, Grafana-like monitor dashboards, and improved scalability by migrating chat storage from Databricks to MongoDB & DynamoDB",
      "Automated reporting over 200,000 data errors and missing data points by developing Snowpark Python scripts on Snowflake tasks (DAG) & dbt to prevent downstream reporting failures",
      "Identified $100k+ in annual compute savings by benchmarking AWS vs. Databricks LLM inference costs and steering infrastructure decisions to non-technical stakeholders",
      "Optimized data processing runtime by 80% (4 hours to ~45 minutes) by refactoring legacy Pandas codebase into reusable PySpark jobs and SQL queries on Databricks",
      "Data modeled and deployed a prompt management system using SQLAlchemy and MongoDB to version, track, and roll back LLM prompts, accelerating prompt tuning and experimentation",
      "Reduced manual sales operations by automating a DLT workflow pipeline with LLM runtime calls, enabling efficient analysis and summarization of customer notes",
      "Drove an 8% lift in conversion by leading model feature development and deploying cross-sell & churn models with H2O, MLflow & Databricks AutoML",
      "Projected +$200K in next-year cost savings by leading the enterprise migration from H2O.ai to Databricks AutoML to streamline ML pipelines",
    ],
  },
  {
    company: "Workday",
    role: "Data Analyst Intern",
    period: "July 2022 – September 2022",
    logo: "/portfolio/logos/workday.jpeg",
    bullets: [
      "Achieved 78% accuracy in predicting fields for internal incident ticketing by developing a multiclass classification model with ServiceNow Predictive Intelligence, outperforming the benchmark model",
      "Revamped field predictions display using JavaScript with Server-side Scripting GlideRecord API",
    ],
  },
  {
    company: "Wells Fargo",
    role: "Data Analyst Intern",
    period: "June 2021 – August 2021",
    logo: "/portfolio/logos/wellsfargo.png",
    bullets: [
      "Engineered Tableau dashboards for the service team's agile resource allocation, finding bottlenecks in time allocation",
      "Reduced customer behavior analysis query time by 25% by optimizing Teradata SQL queries and developed Tableau dashboards for anomaly detection in bank transaction events",
    ],
  },
  {
    company: "UC San Diego",
    role: "Data Science Instructor Assistant",
    period: "January 2021 – December 2021",
    logo: "/portfolio/logos/ucsd.jpeg",
    bullets: [
      "Held weekly office hours, resulting in a 10% increase in grades for Python programming assignments compared to students who did not attend",
      "Evaluated coding assignments, set up lecture quizzes, organized midterm review sessions, proctored exams, and created exam rubrics for 160+ students",
    ],
  },
];

export const projects = [
  {
    name: "NYC Taxi Data Lakehouse",
    description:
      "Hybrid batch-stream data pipeline for NYC Taxi trip data with real-time fare analytics, anomaly detection, and ML demand forecasting.",
    bullets: [
      "Built a hybrid batch-stream pipeline using Kafka, Flink, and Debezium to capture CDC changes from PostgreSQL",
      "Architected a lakehouse solution with Delta Lake, Trino, and MinIO; automated workflows with Airflow for ingestion, transformation, and ML feature generation",
    ],
    tags: ["Kafka", "Flink", "Debezium", "Delta Lake", "Trino", "MinIO", "Airflow", "PostgreSQL"],
    github: "https://github.com/wolftossH",
  },
  {
    name: "Decentralized Escrow Marketplace",
    description:
      "A crypto e-commerce marketplace where users connect crypto wallets, publish products, deposit ETH to buy, approve or reject purchases, and rate products. Associated with Franklin Templeton.",
    bullets: [
      "Implemented a responsive front-end using React.js, Vite, JSX, and Tailwind CSS",
      "Built the backend smart contract using Solidity and Thirdweb API",
    ],
    tags: ["React.js", "Solidity", "Thirdweb", "Tailwind CSS", "Vite", "Ethereum"],
    github: "https://github.com/wolftossH/DSC--180AB-escrow",
  },
  {
    name: "Power Outage Classification Prediction",
    description:
      "Exploratory analysis and ML classification of U.S. power outage causes, with an interactive map visualization and a React front-end.",
    bullets: [
      "Mapped U.S. outage information using Folium and GeoPandas to perform exploratory data analysis",
      "Leveraged KNN and Random Forest classifiers to predict outage causes",
    ],
    tags: ["Python", "Folium", "GeoPandas", "Scikit-learn", "React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/wolftossH/US-Power-Outages",
  },
  {
    name: "Cook Journal Basket Analysis and Recommendation System",
    description:
      "A desktop application for users to log their food dishes and receive recommendations based on ingredient associations using the Apriori Algorithm.",
    bullets: [
      "Used PyQt5 & sqlite3 libraries for user to input food dish journal, retrieved from a db & search for dishes based on input ingredients",
      "Applied the Apriori Algorithm to analyze support, confidence, and lift scores with association rules to recommend dishes with popular ingredients from Recipes from Tasty Kaggle and a user input dataset",
    ],
    tags: ["Python", "PyQt5", "sqlite3", "Apriori Algorithm", "Association Rules"],
    github: "https://github.com/wolftossH/Cook-Journal-Basket-Analysis",
  },
];

export const skills = {
  Languages: ["Python", "SQL", "JavaScript", "HTML", "CSS", "R", "C++", "Java", "Stata"],
  "Libraries & Frameworks": [
    "PySpark", "MLflow", "React", "Node.js", "Django", "Sklearn", "TensorFlow",
    "Pandas", "NumPy", "Streamlit", "Selenium", "NLTK", "Matplotlib", "Seaborn",
  ],
  "Data & ML Tools": [
    "Databricks", "Snowflake", "MongoDB", "AWS DynamoDB", "AWS S3",
    "dbt", "H2O.ai", "Kafka", "Terraform", "Docker",
  ],
  "Databases & Infra": [
    "Cassandra", "Neo4j", "Redis", "PostgreSQL",
    "Grafana", "New Relic", "gRPC", "REST API",
  ],
};

export const certifications = [
  {
    name: "Databricks Certified Data Engineer Associate",
    url: "https://credentials.databricks.com/568c1116-b3b3-4790-9787-b386fe2d4003#acc.wd1mUoO7",
  },
  {
    name: "Snowflake Badges",
    url: "https://achieve.snowflake.com/profile/mikephung146714/wallet",
  },
];
