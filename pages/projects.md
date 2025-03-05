---
title: Projects - Robert Lewis
display: Projects
description: A showcase of my Data Engineering, MLOps, and Data Science projects.
wrapperClass: "text-center"
art: random
projects:
  Data Engineering:
    - name: "Audify: Audio Fingerprinting System"
      link: "https://github.com/robbylew/audify"
      desc: "Shazam-like song recognition using audio fingerprinting, built with Golang."
      icon: "i-simple-icons-go"
    - name: "Twitter Sentiment Dashboard"
      link: "/private-projects"
      desc: "Real-time Twitter sentiment analysis with BERT and Docker. (Private Repo)"
      icon: "i-simple-icons-docker"
    - name: "LLM-Driven Document Summarization"
      link: "/private-projects"
      desc: "Scalable document summarization using LLMs and AWS Fargate. (Private Repo)"
      icon: "i-simple-icons-amazonaws"
    - name: "End-to-End MLOps Pipeline"
      link: "/private-projects"
      desc: "Kubeflow pipeline for image classification with Terraform GPU clusters. (Private Repo)"
      icon: "i-simple-icons-kubernetes"
  Data Science:
    - name: "San Francisco Crime Classification"
      link: "https://www.kaggle.com/code/robbylew/predicting-crime-categories-using-random-forest"
      desc: "SF crime classification with a Random Forest model."
      icon: "i-material-symbols-apartment"
    - name: "House Price Prediction with XGBoost"
      link: "https://www.kaggle.com/code/robbylew/house-price-predictions-xgboost"
      desc: "House price prediction using XGBoost."
      icon: "i-simple-icons-homeassistant"
  Web Development:
    - name: "Modern Portfolio Site"
      link: "https://github.com/robbylew/robertlewisdev-v2"
      desc: "This website, built with Vue.js, TypeScript, and UnoCSS."
      icon: "i-simple-icons-vuedotjs"
    - name: "Previous Portfolio Site"
      link: "https://github.com/robbylew/robertlewisdev-v1"
      desc: "Previous portfolio built with Next.js, TypeScript, and Tailwind CSS."
      icon: "i-simple-icons-nextdotjs"
    - name: "Hacker News Clone"
      link: "https://github.com/robbylew/hacker-news-clone"
      desc: "Open-sourced Hacker News clone built with React."
      icon: "i-simple-icons-react"
  Open Source:
    - name: "Google Flutter"
      link: "https://github.com/flutter/flutter"
      desc: "Contributed to the Google Flutter project."
      icon: "i-simple-icons-flutter"
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
