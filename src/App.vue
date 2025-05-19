<script setup>
import DuButton from "@lib/components/Actions/du-button/du-button.vue";
</script>

<template>
<div>
  <h1>Vue 3 + Vite + Tailwind CSS</h1>
  <h2>Button</h2>
  <div class="flex flex-wrap gap-4">
    <DuButton>Default</DuButton>
    <DuButton variant="primary">Primary</DuButton>
    <DuButton variant="secondary">Secondary</DuButton>
    <DuButton variant="success">Success</DuButton>
    <DuButton variant="error">Error</DuButton>
    <DuButton variant="warning">Warning</DuButton>
    <DuButton variant="info">Info</DuButton>
  </div>
</div>
</template>

<style scoped></style>
