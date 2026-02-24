
# EduClick Metrics – Course Engagement Monitoring System

---

## 🖼️ Demo Video

🎥 **Project Demo Video:** _(Will be added)_

(Shows frontend interaction, Kafka flow, Prometheus metrics, and Grafana dashboards.
Dockerized deployment coming next.) 

---

EduClick Metrics is a **full‑stack distributed monitoring system** designed to track **course engagement events** in real time and visualize system and application metrics using modern observability tools.

This project demonstrates **backend engineering, event‑driven architecture, and production‑grade monitoring** — making it ideal for recruiters evaluating real‑world system design skills.

---

## 🚀 Tech Stack (Verified)

| Layer | Technologies |
|-----|-------------|
| Backend | Java, Spring Boot, Spring Actuator, Micrometer |
| Frontend | React.js |
| Messaging | Apache Kafka |
| Monitoring | Prometheus, Grafana |
| Database | SQL (Relational DB) |
| Build Tools | Gradle |
| Dev Tools | Git, Postman |

---

## 🧠 System Architecture

```
Frontend (React)
     |
     v
Spring Boot API
     |
     v
Kafka (Event Streaming)
     |
     v
Prometheus (Metrics Collection)
     |
     v
Grafana (Visualization Dashboard)
```

---

## 📁 Project Structure (Correct & Verified)

```
EduClick Metrics Monitoring System/
│
├── backend/
│   ├── src/main/java/com/educlick/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── kafka/
│   │   ├── config/
│   │   └── dto/
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   └── prometheus.yml
│   └── build.gradle
│
├── frontend/
│   ├── src/components/
│   ├── src/services/
│   ├── src/App.js
│   └── package.json
│
├── kafka/
│   ├── producer/
│   └── consumer/
│
├── grafana/
│   └── dashboards/
│
├── database/
│   └── schema.sql
│
└── README.md
```

---

## ⚙️ Setup Instructions (Windows)

### 1️⃣ Start Kafka & Zookeeper
```bash
zookeeper-server-start.bat config/zookeeper.properties
kafka-server-start.bat config/server.properties
```

### 2️⃣ Start Backend
```bash
cd backend
./gradlew bootRun
```

### 3️⃣ Start Frontend
```bash
cd frontend
npm install
npm start
```

### 4️⃣ Start Prometheus
```bash
prometheus.exe --config.file=prometheus.yml
```

### 5️⃣ Open Grafana
```
http://localhost:3000
```

---

## 📊 Metrics & Monitoring

Tracked Metrics:
- JVM Heap Memory Usage
- CPU Utilization
- API Request Count
- Custom Business Metric: `course_clicks_total`

Prometheus scrapes metrics from Spring Boot via `/actuator/prometheus`.

---

## 🔄 Kafka Event Flow

1. User clicks course (Frontend)
2. Event sent to Spring Boot
3. Producer publishes to Kafka topic
4. Consumer processes event
5. Metrics updated & scraped

---

## 🧪 API Overview

| Method | Endpoint | Description |
|------|----------|-------------|
| POST | `/api/click` | Track course click |
| GET | `/api/metrics/click-summary` | To get the metrics of BUY and ENROLL click |

---

## 📈 Future Enhancements

- Docker Compose setup
- Alertmanager integration
- Authentication & RBAC
- Cloud deployment

---

## 👤 Author

**Hassan Sherwani**  
Junior Software Engineer

---

⭐ If you found this project useful, consider starring the repo!
