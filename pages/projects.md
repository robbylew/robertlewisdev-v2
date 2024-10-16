---
title: Projects - Robert Lewis
display: Projects
description:  Projects that I created, maintaining, or commit to.
wrapperClass: "text-center"
art: none
projects:
  Websites:
    - name: "Hacker News Clone"
      link: "https://github.com/robbylew/hacker-news-clone"
      desc: "React and GraphQL-based news site clone"
      icon: "i-simple-icons-reactjs"
    - name: "Vue.js Portfolio"
      link: "https://github.com/robbylew/robertlewisdev-v2"
      desc: "My current portfolio's repo"
      icon: "i-simple-icons-vuedotjs"
    - name: "Next.js Portfolio"
      link: "https://github.com/robbylew/robertlewisdev-v1"
      desc: "My first full-stack portfolio's repo"
      icon: "i-simple-icons-nextdotjs"
  Open Source Contributions:
    - name: "Google Flutter"
      link: "https://github.com/flutter/flutter"
      desc: "Contributed to the Google Flutter open source project"
      icon: "i-simple-icons-flutter"
  Kaggle Projects:
    - name: "House Price Prediction using XGBoost"
      link: "https://www.kaggle.com/code/robbylew/house-price-predictions-xgboost"
      desc: "An XGBoost model for house price prediction"
      icon: "i-simple-icons-homeassistant"
    - name: "Simple Neural Network for MNIST"
      link: "https://www.kaggle.com/code/robbylew/my-first-kaggle-notebook-simple-cnn-for-mnist-dig"
      desc: "Simple Neural Network for MNIST"
      icon: "i-material-symbols-neurology"
    - name: "San Francisco Crime Classification"
      link: "https://www.kaggle.com/code/robbylew/predicting-crime-categories-using-random-forest"
      desc: "SF crime categories using a RFC"
      icon: "i-material-symbols-apartment"


---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
