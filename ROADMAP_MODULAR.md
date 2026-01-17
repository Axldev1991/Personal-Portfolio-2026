# Hoja de Ruta: Modularidad Extrema y Escalabilidad Estética

Esta guía establece los principios para construir un sistema web donde los componentes sean piezas de Lego intercambiables, permitiendo cambios visuales profundos con el mínimo esfuerzo técnico.

## 1. Arquitectura de Carpetas y Modularidad

### [x] Estructura de Directorios Atómica
- **Objetivo:** Separar la lógica de negocio de la UI pura.
- **Acción:** Organizar carpetas en:
    - `@/components/ui`: Componentes básicos sin lógica (botones, inputs).
    - `@/components/layout`: Estructuras maestras (Navbar, Footer, Sidebar).
    - `@/components/features`: Componentes complejos con lógica (ProjectGrid, ContactForm).
    - `@/lib`: Utilidades puras y configuraciones de terceros.
    - `@/hooks`: Toda la lógica de estado extraída.

### [x] Implementación de Barrel Files (`index.ts`)
- **Por qué:** Permite cambiar la estructura interna de una carpeta sin romper los `imports` en el resto de la aplicación.
- **Acción:** Crear un `index.ts` en cada carpeta de componente para exportar solo lo necesario.

### [ ] Abstracción de Layout (Slots)
- **Por qué:** Evita que el `layout.tsx` dependa de una Navbar específica.
- **Acción:** Usar composición de componentes donde el Layout recibe la navegación como un `prop` o un "slot".

---

## 2. Estrategia de Estilos Globales

### [x] Centralización de Design Tokens
- **Objetivo:** Rebranding en minutos.
- **Acción:** 
    - Definir colores, radios de borde y espaciados en `tailwind.config.ts` o variables CSS en `globals.css`.
    - Usar nombres semánticos: `--primary`, `--accent`, `--surface` en lugar de `blue-500`.

### [x] Adopción de Componentes "Headless"
- **Acción:** Integrar Radix UI o Shadcn.
- **Por qué:** Obtienes la funcionalidad y accesibilidad perfectas, pero tú tienes el control total del estilo (CSS/Tailwind).

---

## 3. Lógica de Componentes (Separación de Preocupaciones)

### [x] Extracción a Hooks Personalizados
- **Acción:** Si un componente tiene más de un `useState` o lógica de `useEffect` compleja, moverlo a un hook (ej. `useContactForm`).
- **Por qué:** El componente visual se convierte en una "cáscara" que solo recibe datos y funciones, siendo 100% reemplazable.

### [x] Separación RSC vs Cliente
- **Acción:** Mantener los componentes de "Layout" y "Contenedores de Datos" como Server Components. Solo los elementos interactivos (botones, formularios) deben ser Client Components.

---

## 4. Configuración Técnica y Escalabilidad

### [ ] Tipado Estricto (Interfaces)
- **Acción:** Definir `interfaces` para cada componente.
- **Por qué:** Garantiza que si cambias la implementación de un componente, el "contrato" de datos se mantenga, evitando errores en tiempo de compilación.

### [ ] Metadatos Dinámicos Independientes
- **Acción:** Implementar la función `generateMetadata` de Next.js separada del diseño visual de la página.

### [ ] Capa de Abstracción de Datos (Services)
- **Acción:** Crear una capa de servicios para las llamadas a API/Base de datos.
- **Por qué:** Si cambias tu backend de PHP a Java, solo modificas un archivo en el frontend.

---

## ¿Por qué esta estrategia?
Cada decisión busca reducir el **acoplamiento**. En un proyecto normal, el diseño y la lógica están pegados con pegamento. Aquí, los unimos con "velcro": si quieres cambiar el diseño, simplemente despegas la pieza vieja y pegas la nueva sobre la misma lógica.
