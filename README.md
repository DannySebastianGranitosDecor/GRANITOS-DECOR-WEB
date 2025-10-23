# Granitos Decor — Sitio Web Futurista (Vite + React + Tailwind)

## 🚀 Cómo correr en tu PC
1. Instala Node.js 18+
2. En la carpeta del proyecto:
   ```bash
   npm install
   npm run dev
   ```
3. Abre el enlace que sale (http://localhost:5173).

## 🖼️ Dónde poner tus imágenes
Coloca tus archivos en:
```
public/images/trabajos/
```
Reemplaza los archivos (o cambia los paths en `src/App.jsx`):
- `hero_principal.jpg`
- `mini_1.jpg`
- `mini_2.jpg`
- `mini_3.jpg`
- `cocina_cuarzo.jpg`
- `isla_granito.jpg`
- `vanitory_porcelanato.jpg`
- `barra_daymonrock.jpg`
- `encimera_banio_cuarzo.jpg`
- `cocina_porcelanato.jpg`

Puedes agregar más y solo ajustar el arreglo `trabajosDemo` en `src/App.jsx`.

## 🔗 Links y contacto
Edita WhatsApp, Facebook, correo y dirección en:
- `src/App.jsx` (secciones: Nav, Contacto, Footer)

## 🌍 Deploy recomendado
### Opción A: **Vercel** (súper fácil)
1. Sube este repo a GitHub.
2. Crea cuenta en vercel.com y **Import Project** desde GitHub.
3. Framework: **Vite** → Build command: `npm run build` → Output dir: `dist`
4. Vercel te da un dominio gratis. Puedes conectar tu propio dominio (DNS).

### Opción B: **Netlify**
1. Netlify → **New site from Git**.
2. Build: `npm run build` — Publish dir: `dist`.

### Dominio (DNS)
- **Cloudflare Registrar** (precio costo y DNS rápido) o **Namecheap**. 
- Apunta el dominio a tu proyecto (Vercel/Netlify te dan los registros DNS).

## 🧩 Personalizaciones rápidas
- Colores y estilos: Tailwind en `src/App.jsx`.
- Íconos: `lucide-react`.
- Animaciones: `framer-motion`.

¡Éxitos con Granitos Decor! 💎
