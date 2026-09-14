# Guía de Imágenes

Este portafolio está diseñado para que no tengas que modificar el código al momento de actualizar o subir tus imágenes. Solo debes reemplazar los archivos en sus respectivas rutas manteniendo EXACTAMENTE el mismo nombre y extensión (.webp recomendado para mejor performance).

| Imagen | Ruta | Tamaño recomendado | Relación de Aspecto |
| :--- | :--- | :--- | :--- |
| **Foto Perfil (Hero)** | `/public/images/profile.png` | 1200x1200px | 1:1 (Cuadrada) |
| **Foto Sobre Mí** | `/public/images/about.png` | 1000x1250px | 4:5 (Vertical) |
| **Proyecto: Civil** | `/public/images/projects/civil-portfolio.png` | 1600x900px o 1600x1000px | 16:9 o 16:10 |
| **Proyecto: Gym** | `/public/images/projects/gymsystem.png` | 1600x900px o 1600x1000px | 16:9 o 16:10 |
| **Proyecto: English App** | `/public/images/projects/english-app.png` | 1600x900px o 1600x1000px | 16:9 o 16:10 |
| **Logro: CSP** | `/public/images/achievements/csp.png` | 800x450px | 16:9 (Horizontal) |
| **Logro: Kódigo** | `/public/images/achievements/kodigo.png` | 800x450px | 16:9 (Horizontal) |
| **Logro: English** | `/public/images/achievements/english.png` | 800x450px | 16:9 (Horizontal) |

## ¿Cómo cambiar las imágenes?

1. Exporta tus imágenes en el tamaño recomendado.
2. Nómbralas exactamente igual a como aparecen en la columna "Ruta".
3. Ve a la carpeta `public` y reemplaza los archivos correspondientes.
4. Si necesitas usar `.jpg` o `.png`, asegúrate de actualizar la extensión correspondiente en el archivo `src/data/portfolio.ts`.

## Currículum

Tu archivo de currículum debe ir en:
`/public/cv/Rodrigo-Adrian-Rosa-Rivas-CV.pdf`

Si deseas cambiar el nombre del archivo, debes actualizar la propiedad `cvUrl` en `src/data/portfolio.ts`.
