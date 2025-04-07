<script setup lang="ts">
import { computed } from 'vue'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: string
}

const props = withDefaults(defineProps<{
    items: BreadcrumbItem[]
    separator?: string
}>(), {
  separator: undefined,
})


const separatorClass = computed(() => {
  return props.separator ? "spec-seperator" : "";
});
</script>

<template>
  <div class="breadcrumbs" :class="[separatorClass]" :style="`--separator: '${props.separator}'`">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.href" v-if="item.href">
          <span v-if="item.icon" class="mr-1">{{ item.icon }}</span>
          {{ item.label }}
        </a>
        <span v-else>
          <span v-if="item.icon" class="mr-1">{{ item.icon }}</span>
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  :is(.breadcrumbs.spec-seperator > menu, .breadcrumbs.spec-seperator > ul, .breadcrumbs.spec-seperator > ol) > li + ::before {
    content: var(--separator);
    opacity: .4;
    background-color: #0000;
    width: .375rem;
    margin-left: .5rem;
    margin-right: .75rem;
    display: block;
    border: unset;
    height: auto;
    rotate: 0deg;
  }
</style>