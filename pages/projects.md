---
title: Projects - Robert Lewis
display: Projects
description: A showcase of my Data Engineering, MLOps, and Data Science projects.
wrapperClass: "text-center"
art: none
projects:
  Data Engineering:
    - name: "Twitter Sentiment Dashboard"
      link: "/private-projects"
      desc: "Real-time Twitter sentiment analysis with BERT and Docker."
      icon: "i-simple-icons-docker"
    - name: "LLM-Driven Document Summarization"
      link: "/private-projects"
      desc: "Scalable document summarization using LLMs and AWS Fargate."
      icon: "i-simple-icons-amazonaws"
    - name: "End-to-End MLOps Pipeline"
      link: "/private-projects"
      desc: "Kubeflow pipeline for image classification with Terraform GPU clusters."
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
  OpenSource:
    - name: "Google Flutter"
      link: "https://github.com/flutter/flutter"
      desc: "Contributed to the Google Flutter project."
      icon: "i-simple-icons-flutter"
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
