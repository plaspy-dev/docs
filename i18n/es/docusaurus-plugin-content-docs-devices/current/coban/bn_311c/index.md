---
slug: /coban/bn_311c
id: bn_311c
sidebar_label: BN-311C
sidebar_class_name: menu_item_tracker
---
# Coban - BN-311C

![BN-311C](./tracker.png)

El BN-311C es un rastreador GPS compacto de 2G diseñado para el rastreo de motocicletas y vehículos ligeros. Con instalación cableada oculta y funcionamiento continuo en sistemas de 12–24 V, el BN-311C se sincroniza con plataformas compatibles con Plaspy para ofrecer monitoreo en tiempo real, alertas de eventos y funciones básicas de gestión de flota. Su pequeño formato y capacidades antirrobo enfocadas lo convierten en una opción práctica para propietarios y operadores que requieren monitorización discreta y opciones de inmovilización remota.

Diseñado como un terminal de gestión de motocicletas sencillo, el BN-311C combina posicionamiento GNSS con comunicaciones GSM/GPRS para enviar datos de ubicación, telemetría y alarmas a Plaspy para monitoreo en vivo, reproducción de rutas, geocercas y notificaciones push. El modelo tipo C incluye funciones de control remoto como activación/desactivación remota y corte remoto de combustible/energía \(inmovilizador\), que se integran con los flujos de trabajo de Plaspy para seguridad y control operacional.

## Aspectos clave

- Compatible con Plaspy: envía posición, alarmas y telemetría a Plaspy para seguimiento en tiempo real e informes.
- Diseño compacto y oculto \(6.0 × 3.5 × 1.8 cm; 50 g\) ideal para motocicletas y vehículos ligeros.
- Varias alarmas antirrobo: movimiento, geocerca, impacto, arranque ilegal, exceso de velocidad y desconexión de la alimentación externa.
- Inmovilizador y control remoto \(modelo C\): corte remoto de combustible/energía y activación/desactivación remota vía plataforma o accesorio de control remoto.
- Rendimiento confiable de GNSS: receptor de alta sensibilidad con precisión típica de alrededor de 5 metros y arranque en caliente rápido.
- Alimentación cableada con batería de respaldo: conexión directa de 12–24 V para vehículo; batería Li‑ion interna recargable de 3.7 V y 180 mAh para seguir reportando ante pérdida de alimentación externa.
- Opciones de configuración simples: comandos de configuración por SMS más informes TCP/UDP para facilitar la integración con Plaspy.

## Cómo funciona con Plaspy

Cuando está instalado y configurado, el BN-311C reporta de forma continua o intermitente coordenadas GNSS y mensajes de estado a Plaspy usando GSM/GPRS. Plaspy consume los mensajes TCP/UDP o SMS del dispositivo para proporcionar mapas de ubicación en vivo, paneles de telemetría, alertas basadas en eventos y reproducción histórica de rutas. Las funciones de alarma y control remoto del equipo se muestran en Plaspy como eventos accionables que pueden monitorizarse y responderse en tiempo real.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para seguimiento en vivo y reproducción de rutas.
- Estado de encendido \(ACC\) y notificaciones de funcionamiento del ACC para monitorizar el uso del vehículo y eventos de inicio/parada.
- Informes de alarmas por exceso de velocidad, violación de geocerca, movimiento, impacto y desconexión de la alimentación externa—mostrados como alertas de Plaspy y notificaciones push.
- Control remoto del inmovilizador \(corte remoto de combustible/energía\) soportado en el modelo de tipo C y accesible a través de flujos de trabajo de Plaspy o el accesorio de control remoto incluido.
- Alarma de emergencia SOS y eventos de despertar remoto transmitidos a Plaspy para atención y respuesta inmediatas.

## Resumen técnico

| Conectividad | GSM/GPRS \(TCP / UDP / SMS\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz \(quad-band\) |
| Alimentación y batería | Alimentación de vehículo con cableado directo 12 V–24 V; batería Li‑ion interna recargable de 3.7 V, 180 mAh |
| Interfaz | Arnés cableado con entrada de encendido ACC; accesorio de relé para corte remoto de combustible/energía; accesorio de control remoto compatible; comandos de configuración por SMS |
| GNSS | Receptor GNSS de alta precisión; sensibilidad −165 dBm; precisión típica ~5 m; arranque en frío ~45 s, arranque en caliente ~1 s |
| Gestión remota | Compatibilidad con app móvil y plataforma web vía Plaspy; admite informes TCP/UDP y comandos de configuración por SMS |
| Ambiental | Operación −20°C a +65°C; almacenamiento −40°C a +85°C; humedad 5%–95% no condensante |
| Formato | Terminal compacto cableado oculto para motocicletas y vehículos ligeros \(6.0 × 3.5 × 1.8 cm; 50 g\) |

## Casos de uso

- Protección antirrobo de motocicletas y inmovilización remota para conductores y propietarios individuales.
- Gestión de flotas de dos ruedas pequeñas para servicios de entrega: rastreo en tiempo real, reproducción de rutas y monitorización del uso.
- Operaciones de alquiler o scooters/motocicletas compartidas que requieren instalación discreta, monitorización de arranque y alertas rápidas.
- Instalaciones de seguridad de bajo costo donde se requiere activación/desactivación remota e inmovilización por corte de energía sin hardware voluminoso.

## Por qué elegir este rastreador con Plaspy

El BN-311C está diseñado para conductores y operadores de vehículos ligeros que necesitan un rastreador GPS discreto, compatible con Plaspy, con seguimiento en tiempo real fiable y telemetría básica. Su diseño con cableado directo y batería de respaldo garantiza la continuación de los informes incluso cuando se pierde la alimentación externa; y las funciones de control remoto de tipo C proporcionan capacidades prácticas antirrobo como corte remoto de combustible/energía y activación remota. Combinado con las características de la plataforma de Plaspy—mapas en vivo, geocercas, notificaciones push y historial de rutas—el BN-311C ofrece una forma rentable de añadir protección antirrobo, monitorización de encendido y gestión simple de flotas a motocicletas y activos similares.

Aunque el BN-311C se centra en un rastreo confiable GNSS/GSM y en la inmovilización, el ecosistema de Plaspy también admite integraciones extendidas \(por ejemplo, sensores Bluetooth cuando estén disponibles a través de la plataforma\) para ampliar la telemetría—como temperatura u otros datos de sensores—si sus necesidades operativas crecen. Para instaladores y gestores de flotas, el tamaño reducido, la sencilla caja de empalmes y las opciones de accesorio \(relé, arnés, control remoto, bocina opcional\) hacen del BN-311C una elección fácil de desplegar y compatible con Plaspy para la monitorización de motocicletas y vehículos ligeros.

