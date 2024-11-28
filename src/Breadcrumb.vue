<template>
    <nav aria-label="breadcrumb">
      <ol :class="['breadcrumb', customClass]">
        <li
          v-for="(crumb, index) in crumbs"
          :key="index"
          :class="['breadcrumb-item', { active: index === crumbs.length - 1 }]"
          aria-current="index === crumbs.length - 1 ? 'page' : null"
        >
          <router-link v-if="index !== crumbs.length - 1" :to="crumb.path">
            {{ crumb.label }}
          </router-link>
          <span v-else>{{ crumb.label }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      customClass: {
        type: String,
        default: '',
      },
      separator: {
        type: String,
        default: '/',
      },
      i18n: {
        type: Function,
        default: (label) => label, // Default to identity if no i18n provided
      },
    },
    computed: {
      crumbs() {
        const route = this.$route;
        const pathArray = route.path.split('/').filter(Boolean);
        return pathArray.map((segment, index) => ({
          label: this.i18n(segment),
          path: '/' + pathArray.slice(0, index + 1).join('/'),
        }));
      },
    },
  };
  </script>
  
  <style>
  .breadcrumb {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: var(--separator, '/');
    padding: 0 0.5rem;
  }
  </style>
  