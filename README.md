
# 🚀 NFC Attendance System

Sistem absensi modern menggunakan **NFC/RFID card** untuk mencatat kehadiran secara otomatis.  
Dibangun dengan **Node.js (Express + TypeScript)** untuk backend, **Next.js 14 + TailwindCSS** untuk frontend, serta **PostgreSQL + Prisma** untuk database.  

---

## ✨ Fitur Utama
- Absensi dengan **NFC card UID** melalui perangkat reader.
- Dashboard web untuk simulasi & monitoring.
- Backend API dengan autentikasi JWT.
- Database schema (User, Card, Device, Tap) menggunakan Prisma.
- Docker Compose untuk setup cepat (API, Web, Database).

---

## 🏗 Arsitektur


├── server/   # Backend (Express + Prisma)
├── web/      # Frontend (Next.js + Tailwind)
├── docker-compose.yml
├── .env.example
└── README.md


- **API** → menerima data tap `{ deviceKey, uid }` dari perangkat.
- **Web** → simulasi tap, dashboard sederhana.
- **DB** → PostgreSQL (default, bisa ganti SQLite/MySQL).


## ⚡️ Quick Start

### 1. Clone repo

git clone https://github.com/username/nfc-attendance-system.git
cd nfc-attendance-system


### 2. Setup environment

cp .env.example .env


### 3. Jalankan dengan Docker


docker compose up --build

* API → [http://localhost:4000](http://localhost:4000)
* Web → [http://localhost:3000](http://localhost:3000)

Cek API health:


curl http://localhost:4000/health




## 🛠 Development Mode (tanpa Docker)

### Backend


cd server
npm install
npm run dev


### Frontend


cd web
npm install
npm run dev



## 🔑 Contoh API Tap

Endpoint: `POST /tap`


{
  "deviceKey": "devkey-demo-123",
  "uid": "04A1B2C3"
}


Response:


{
  "message": "Tap recorded (skeleton)",
  "deviceKey": "devkey-demo-123",
  "uid": "04A1B2C3"
}


## 📌 Roadmap

* [ ] HMAC Signing untuk request perangkat.
* [ ] CRUD Users / Cards / Devices di dashboard.
* [ ] Role-based Auth (Admin, User).
* [ ] Laporan absensi (export Excel/PDF).
* [ ] Integrasi notifikasi (Email/WA).
* [ ] Firmware contoh untuk ESP32 + PN532.

---

## 🤝 Kontribusi

Pull Request & Issue sangat terbuka.
Silakan fork repo ini lalu buat branch baru:

git checkout -b feature/nama-fitur




## 📜 Lisensi

MIT License © 2025

```

---

```
