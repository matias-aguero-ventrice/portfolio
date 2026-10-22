# Ideas para implementar en el portfolio

Lista viva. Se actualiza a medida que se revisan otros portafolios de referencia.
Estado: `[ ]` pendiente · `[x]` hecho · `[?]` falta una decisión o un dato.

## Pendientes ya acordados
- [ ] Reemplazar `public/cv.pdf` por el CV regenerado con la URL nueva de LinkedIn (el PDF subido todavía trae la vieja).
- [?] Ahorro de $1.8M CLP: decir de qué fue y en qué período, o quitarlo (Experiencia, `lib/i18n.tsx`, chatbot en `app/api/chat/route.ts`).
- [?] "+40% en ventas de membresías": falta el período o la base de comparación.
- [?] Enlace "Ver código" del portfolio: quitarlo si el repo pasa a privado (y ajustar la insignia "Open source").
- [ ] Revisar la preview de Vercel: loader, tarjeta de MiSUPER, descarga del CV, enlace de LinkedIn, chatbot.

## MiSUPER (proyecto destacado)
Ya hay una tarjeta nueva en `main`. Falta subirla de nivel:
- [x] Carrusel de capturas en una tarjeta destacada de ancho completo (5 capturas de escritorio).
- [x] Copiar capturas optimizadas de `MiSUPER/apps/web/public/portada/` (punto de venta, caja, inventario, portal de proveedores, versión celular). Revisar las 16 antes de publicar; las de punto de venta y pedidos por WhatsApp usan datos de ejemplo.
- [?] Página propia `/proyectos/misuper` con la versión larga (venta sin internet sin cobrar doble, facturación ARCA, aislamiento por negocio y sucursal, Mercado Pago, API OpenAPI, tests y migraciones).
- [?] Cifras verificables: comercios activos o ventas procesadas (solo si son reales). Conteo de tests y migraciones: las cuento yo desde el repo.

## Del portafolio de Julián Peruzzi (julianperuzzi.vercel.app)
- [ ] Capturas grandes en las tarjetas de proyecto (carrusel).
- [ ] Botón flotante de WhatsApp siempre visible.
- [ ] Formulario de contacto a la vista con accesos rápidos (WhatsApp, correo, GitHub, ubicación, horario).
- Descartado: texto genérico ("apasionado por soluciones innovadoras"). El sitio actual ya tiene cifras y cargo reales.

## Del portafolio de Marto (marto993.github.io/Portfolio)
- [?] Página `/historia` ("Mi camino") con el recorrido en 5-6 etapas, en español e inglés, enlazada desde "Sobre mí" y LinkedIn. Las partes personales las pone el dueño; no se inventan anécdotas.
- Descartado: blog completo con categorías, etiquetas y botones de compartir. Demasiado para un portafolio que busca puesto.

## Del portafolio de Orlando Zárraga (orlando-zarraga-portfolio.vercel.app)
- [ ] Cifras en la presentación (endpoints, tests, commits, productos) en lugar de adjetivos. Para este sitio: solo las verificables.
- [ ] Experiencia con logros resumidos y botón "Ver más logros (N)" que despliega el resto.
- [ ] Etiquetas de tecnología por cada puesto en Experiencia.
- [ ] Enlaces "Sitio" / "App" por puesto o proyecto, solo cuando son públicos.
- [ ] Menú de descarga del CV con versión en español e inglés (hoy hay un solo PDF en español).
- [ ] Foto o ilustración en el hero, con fondo animado sutil. Ya existe `public/profile.png`; revisar si se usa.
- [ ] Tarjeta de educación al lado de "Sobre mí".
- Ya cubierto en este sitio: selector ES/EN, insignia de disponibilidad, botón de descargar CV, enlaces a GitHub y LinkedIn.

## Del portafolio de Adrian Espindola (resume-espindola.vercel.app)
- [ ] Franja de tecnologías en movimiento justo debajo del hero (marquee con bordes que se desvanecen). Ya existe `components/sections/Stack.tsx`; la franja sería un complemento corto, no un reemplazo.
- [ ] Botón "Ver proyecto" en cada tarjeta, solo donde el enlace sea público.
- Ya cubierto en este sitio: modo oscuro, selector ES/EN, insignia de disponibilidad, educación e idiomas.
- Descartado: resumen genérico ("experiencia en React, Next.js, TypeScript…") y lista larga de demos pequeñas. El sitio actual muestra producto real y resultados.

## Del portafolio de Lucas Espinosa (lucasees.github.io/portfolio)
- [x] (hecho en MiSUPER; falta el CRM) Tres líneas de resultado por proyecto, cada una con un dato concreto (ej. "1.747 registros · 5 tablas", "mejora del baseline 62,6%"). Para el sitio: la tarjeta de MiSUPER y la del CRM con datos verificables (tests, migraciones, integraciones, leads).
- [x] (hecho en MiSUPER) Insignia "Destacado" en 1-3 proyectos para guiar la mirada.
- [ ] Una línea que traduzca el resultado técnico a impacto de negocio.
- Ya cubierto en este sitio: métricas en la tarjeta del CRM, descarga de CV, enlaces a LinkedIn y GitHub.
- Descartado: formato de proyectos de datos con repositorio público por tarjeta. MiSUPER y los productos de Propital son privados.

## Del portafolio de Matías Pekarek (next-portfolio-matiaspekarek.vercel.app)
- [ ] Cada proyecto con dos datos fijos: **ROL** (qué hizo él, ej. "Arquitectura de producto · desarrollo full-stack") y **STACK PRINCIPAL**, más una insignia de estado honesta (EN VIVO / EN DESARROLLO / CONCEPTO). Para el sitio: ROL en la tarjeta del CRM, Orvyt, Numinap y MiSUPER (son los que más importan para un puesto de producto).
- [ ] Titular de la presentación con una frase de valor y una palabra de acento (ej. "Producto y operaciones, con profundidad técnica"), en vez del cargo solo.
- [ ] Texto que aclara el alcance real de cada proyecto ("el alcance real se indica con transparencia"). Encaja con los proyectos confidenciales de Propital.
- [ ] Sección corta "Trabajemos juntos" con dos vías: equipos que contratan en remoto y proyectos a medida (Made In 3D, desarrollo por encargo). Decidir si aporta o distrae del objetivo de conseguir puesto.
- Descartado: gráfico isométrico animado del hero (sirve a un perfil creativo, no a uno de producto) y proyectos con "capturas pendientes" (MiSUPER ya tiene capturas reales).

## Ideas propias (de la revisión de LinkedIn)
- [ ] Unificar nombre, cifras y viñetas entre el sitio, el CV y LinkedIn (mismo texto exacto).
- [ ] Post Inspector de LinkedIn sobre `https://matiasaguero.dev` para refrescar la miniatura del Destacado (la hace el dueño).
- [ ] Versión del CV en inglés.
