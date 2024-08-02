<template>
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000">
      <path d="M2.821 63.336H0V21.476h2.821v41.86zM2.821 37.765l-1.911-.546a24.296 24.296 0 0 1 .456-4.858q.596-2.922 1.975-5.163a13.095 13.095 0 0 1 1.801-2.309 14.17 14.17 0 0 1 10.304-4.321 18.556 18.556 0 0 1 .297-.002 15.471 15.471 0 0 1 4.714.707 14.401 14.401 0 0 1 1.064.385 13.672 13.672 0 0 1 3.647 2.227 16.913 16.913 0 0 1 1.313 1.231l-1.911 2.093a13.22 13.22 0 0 0-1.974-1.786 10.275 10.275 0 0 0-2.166-1.217 11.945 11.945 0 0 0-2.725-.736 16.052 16.052 0 0 0-2.417-.174 13.271 13.271 0 0 0-4.311.672 11.198 11.198 0 0 0-4.698 3.104q-3.04 3.321-3.407 8.067a25.488 25.488 0 0 0-.051 1.626zM37.765 63.336H34.944V0h2.821v63.336z" id="0" class="path1" />
    </g>
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@media print {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 350px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 350px 0;
  }
  85% {
    stroke-dasharray: 350px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 350px;
  }
}
.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 350px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #ffffff;
  animation-delay: 0s;
}
.dark .path1 {
  stroke: #FFFFFF;
}
</style>