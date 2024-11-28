
# Dynamic Breadcrumb

**Dynamic Breadcrumb** is a lightweight breadcrumb component for Vue.js and React applications. It dynamically adapts to your application's routing structure, making it easy to display navigational breadcrumbs with minimal configuration.

---

## Features
- 🌐 **Framework Support**: Works seamlessly with Vue Router and React Router.  
- 🔄 **Dynamic Updates**: Automatically adapts to route changes.  
- 🎨 **Customizable**: Style the breadcrumbs and separator as needed.  
- 🌍 **Internationalization**: Supports custom label translations via `i18n`.  
- 🧩 **Plug and Play**: Easy integration with Vue.js and React applications.

---

## Installation

Install the package using npm:

```bash
npm install dynamic-breadcrumb
```

---

## Usage

### Vue.js

#### Import the Component
```javascript
import { BreadcrumbVue } from 'dynamic-breadcrumb';

export default {
  components: {
    BreadcrumbVue,
  },
};
```

#### Add to Template
```vue
<template>
  <BreadcrumbVue 
    customClass="my-custom-breadcrumb"
    :i18n="translateLabel"
    separator=">"
  />
</template>

<script>
export default {
  methods: {
    translateLabel(label) {
      const translations = { home: "Inicio", about: "Acerca de", contact: "Contacto" };
      return translations[label] || label;
    },
  },
};
</script>
```

---

### React

#### Import the Component
```javascript
import React from 'react';
import { BreadcrumbReact } from 'dynamic-breadcrumb';

const App = () => {
  const translateLabel = (label) => {
    const translations = { home: "Inicio", about: "Acerca de", contact: "Contacto" };
    return translations[label] || label;
  };

  return (
    <BreadcrumbReact 
      customClass="my-custom-breadcrumb"
      i18n={translateLabel}
      separator=">"
    />
  );
};

export default App;
```

---

## Props

| Prop          | Type     | Default      | Description                                      |
|---------------|----------|--------------|--------------------------------------------------|
| `customClass` | `String` | `""`         | Custom CSS class for the breadcrumb container.  |
| `separator`   | `String` | `/`          | Separator character between breadcrumb items.   |
| `i18n`        | `Func`   | `label => label` | Function to translate breadcrumb labels.      |

---

## Customization

### Styling
You can style the breadcrumbs by providing your own CSS class via the `customClass` prop.

#### Example CSS
```css
.my-custom-breadcrumb {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

.my-custom-breadcrumb .breadcrumb-item {
  color: #007bff;
}

.my-custom-breadcrumb .breadcrumb-item.active {
  color: #495057;
}
```

### Internationalization (i18n)
You can pass a custom function to translate the labels dynamically.

#### Example
```javascript
const translateLabel = (label) => {
  const translations = { home: "Inicio", about: "Acerca de", contact: "Contacto" };
  return translations[label] || label;
};
```

---

## Support
If you encounter any issues, feel free to open an [issue on GitHub](https://github.com/Rahulr-dev/dynamic-breadcrumb/issues).

---

## Example Projects

### Vue.js Example
```vue
<template>
  <BreadcrumbVue :i18n="translateLabel" separator=">" />
</template>

<script>
export default {
  methods: {
    translateLabel(label) {
      const translations = { home: "Inicio", about: "Acerca de", contact: "Contacto" };
      return translations[label] || label;
    },
  },
};
</script>
```

### React Example
```javascript
import React from 'react';
import { BreadcrumbReact } from 'dynamic-breadcrumb';

const App = () => {
  const translateLabel = (label) => {
    const translations = { home: "Inicio", about: "Acerca de", contact: "Contacto" };
    return translations[label] || label;
  };

  return (
    <BreadcrumbReact 
      i18n={translateLabel}
      separator=">"
    />
  );
};

export default App;
```
