# Portafolio - Rodrigo Adrián Rosa Rivas

Portafolio profesional desarrollado con Next.js, diseñado para destacar como Software Developer.

## Stack Tecnológico

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

## Instalación y Desarrollo

1. Clona el repositorio e instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. Para construir la aplicación (Build):
   ```bash
   npm run build
   ```

4. Para hacer Deploy:
   El proyecto está listo para ser desplegado directamente en **Vercel** sin configuración adicional. Simplemente importa el repositorio desde tu dashboard de Vercel.

---

## Personalizar el Portafolio

Este portafolio está diseñado para que sea extremadamente fácil de mantener. **No necesitas tocar los componentes de React para actualizar tu información.**

### Dónde cambiar tu información
Toda la información del portafolio (textos, links, proyectos, skills) está centralizada en un solo archivo:
👉 `src/data/portfolio.ts`

### Cómo agregar nuevos proyectos
Ve a `src/data/portfolio.ts` y busca el arreglo `projects`. Simplemente añade un nuevo objeto con esta estructura:

```typescript
{
  id: "04",
  title: "Nuevo Proyecto",
  problem: "El problema...",
  solution: "La solución...",
  myContribution: "Tu rol...",
  technologies: ["Tech 1", "Tech 2"],
  image: "/images/projects/nuevo-proyecto.webp",
  github: "https://github.com/...",
  demo: "https://...",
  featured: true, // Pon false si no quieres que aparezca en el inicio aún
}
```

### Dónde cambiar imágenes
Por favor, lee el archivo [IMAGE-GUIDE.md](./IMAGE-GUIDE.md) para ver los tamaños recomendados y rutas exactas.

Todas las imágenes se encuentran en la carpeta `public/images/`. Para cambiarlas, simplemente sustituye los archivos manteniendo los mismos nombres.
