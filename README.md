# 🚀 DevOps Notes App

Application web fullstack de gestion de notes personnelles avec une chaîne DevOps complète.

## 📌 Description

Notes App est une application web qui permet de créer, consulter, modifier et supprimer des notes personnelles. Chaque note possède un titre, un contenu, une catégorie (personnel, travail, étude) et une priorité (basse, moyenne, haute).

## 🏗️ Architecture

- **Frontend** : React.js (port 3000)
- **Backend** : Node.js + Express (port 5000)
- **Base de données** : MongoDB
- **Conteneurisation** : Docker
- **Orchestration** : Kubernetes (Minikube)
- **CI/CD** : GitHub Actions + ArgoCD
- **Sécurité** : Trivy + GitHub Secrets + SonarCloud
- **Monitoring** : Prometheus + Grafana

## 📁 Structure du projet
devops-notes-app/
├── frontend/
├── backend/
├── k8s/
├── .github/workflows/
└── README.md
## 🚀 Lancer le projet

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend
cd frontend && npm install && npm start

# Kubernetes
minikube start
kubectl apply -f k8s/
```

## 🌿 Branches

| Branche | Rôle |
|---------|------|
| main | Production |
| dev | Développement |
| feat/notes-crud | Feature CRUD |

## 👤 Auteur
Minyar Lajili — Mini Projet DevOps 2026