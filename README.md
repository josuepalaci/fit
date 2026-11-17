# Rutina en casa · Plan de 4 semanas

App web para seguir un plan de ejercicio en casa. Se instala en el teléfono como una app y **funciona sin internet**. No necesita servidor, cuentas ni compilación: es HTML, CSS y JavaScript puro.

**En línea:** https://josuepalaci.github.io/fit/

## Qué hace

- Calendario de 4 semanas (se puede continuar con 4 más, hasta 52), que se ve en bloques de 4 semanas con flechas para moverse entre ellos.
- Cada día tiene su ficha: fuerza A y B, caminata, movilidad o descanso, con calentamiento y ejercicios que se marcan uno a uno.
- Tres niveles: **Principiante, Intermedio y Experto**. Cambian los ejercicios, las vueltas, la caminata y el esfuerzo objetivo. La app sugiere subir o bajar de nivel según el esfuerzo que registras.
- Cronómetro con cuenta regresiva para los ejercicios de tiempo, con sonido y vibración opcionales.
- Versión mínima de 5 minutos para días de poca energía.
- Notas semanales, progreso global y modo claro/oscuro automático.
- Botón de actualizar (arriba a la derecha) para descargar la última versión cuando hay internet.

## Instalarla en el teléfono

1. Abre https://josuepalaci.github.io/fit/ **con internet, una sola vez**, y espera a que cargue.
2. **iPhone (Safari):** Compartir › Añadir a pantalla de inicio.
   **Android (Chrome):** menú ⋮ › Instalar app.
3. Ábrela desde el icono. Desde ahí funciona sin conexión.

## Tus datos

El avance, el nivel y las notas se guardan en el `localStorage` del navegador, solo en ese dispositivo. No se envían a ningún lado ni se comparten entre dispositivos. Borrar los datos del sitio en el navegador también borra el avance.

- La vibración funciona en Android; iPhone no permite vibrar desde páginas web.
- El sonido en iPhone no suena si el interruptor lateral está en silencio.

## Estructura

```
index.html            App completa (HTML, CSS y JS en un solo archivo)
sw.js                 Service worker: guarda los archivos para uso sin internet
manifest.webmanifest  Datos de instalación (nombre, iconos, colores)
fonts/                Fuentes locales (Bricolage Grotesque y Figtree)
icons/                Iconos de la app, favicon e imagen para compartir
```

## Desarrollo

No hay dependencias. Para probarla en local, sirve la carpeta con cualquier servidor estático (el service worker no funciona abriendo el archivo directamente):

```bash
python3 -m http.server 8000
```

Luego abre http://localhost:8000.

## Publicar cambios

1. Haz los cambios y **sube el número de `VERSION` en `sw.js`** (por ejemplo `rutina-v7` a `rutina-v8`). Sin esto, los teléfonos que ya instalaron la app seguirán viendo la versión guardada.
2. Haz commit y push a `main`:

   ```bash
   git add -A
   git commit -m "Descripción del cambio"
   git push origin main
   ```

3. GitHub Pages publica solo (Settings › Pages › Deploy from a branch › `main` › `/ (root)`).
4. En el teléfono, abre la app con internet; se actualiza sola, o usa el botón de actualizar.

## Aviso

Esta app es una guía general de ejercicio y no sustituye la opinión de un profesional de la salud. Detén el ejercicio si aparece dolor u opresión en el pecho, falta de aire intensa, mareo importante, palpitaciones con malestar o dolor agudo, y busca atención médica si los síntomas son intensos o no ceden.
