---
slug: /sinotrack/st_902a
id: st_902a
sidebar_label: ST-902A
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-902A

![ST-902A](./tracker.jpg)

El ST-902A New Mini OBD GPS Tracker es un localizador OBD-II compacto y plug-and-play, diseñado para un despliegue rápido y un monitoreo fiable del vehículo. Como opción compatible con Plaspy, el ST-902A se conecta a plataformas en línea vía GPRS y es configurable por SMS, lo que facilita dirigir el dispositivo hacia un servidor Plaspy para seguimiento en tiempo real, alertas y reproducción histórica sin necesidad de cablear los vehículos.

Diseñado para responsables de flotas, operadores de alquiler y propietarios de vehículos que priorizan una instalación rápida y telemetría fiable, el ST-902A ofrece datos de posición, movimiento y alarmas desde cualquier puerto OBD de 16 pines estándar. Con batería de respaldo integrada, conectividad GPRS cuád-band y rendimiento GNSS de u-blox, proporciona las funciones principales de un rastreador GPS necesarias para la gestión de flotas, alertas anti‑robo y monitoreo diario cuando se integra con Plaspy.

## Aspectos clave

- Instalación OBD-II verdaderamente plug-and-play — no se requiere cableado ni instalación profesional.
- Compatible con Plaspy mediante servidor IP/port configurable — dirige el dispositivo a tu instancia de Plaspy mediante comandos SMS simples.
- Seguimiento en tiempo real vía GPRS con fallback por SMS para ubicaciones y alertas.
- Batería de respaldo integrada de 150 mAh mantiene la operación durante varias horas tras la pérdida de alimentación del vehículo \(resiliencia anti‑robo\).
- Conjunto de alertas robusto: alarma de choque/vibración, batería baja, exceso de velocidad y notificaciones de geocerca para telemetría inmediata y acciones de seguridad.
- GSM/GPRS cuád-banda \(850/900/1800/1900 MHz\) para una cobertura global amplia.
- Formato OBD-II compacto, ideal para vehículos de flota, alquiler y uso comercial ligero.

## Cómo funciona con Plaspy

El ST-902A envía la posición GPS y la telemetría de alarmas a un servidor en línea vía GPRS \(y puede usar SMS para comandos directos o como fallback\). Para integrarlo con Plaspy, configure las direcciones IP/port del servidor y la configuración APN del dispositivo utilizando su conjunto de comandos SMS, de modo que el rastreador publique paquetes directamente en tu endpoint de Plaspy. Plaspy ingiere luego los datos entrantes para entregar seguimiento en tiempo real, alertas de eventos e historial de rutas en tu panel de control y aplicaciones móviles.

- Actualizaciones de ubicación y telemetría en tiempo real vía GPRS a tu servidor Plaspy.
- Informes de alarmas y eventos: choque/vibración, exceso de velocidad, batería baja y disparadores de geocerca.
- Modo online GPRS con comandos/config por SMS y fallback por SMS para mensajería fuera de línea o de emergencia.
- Manejo configurable de IMEI y soporte de registro para cumplimiento nacional; el IMEI puede consultarse o cambiarse por SMS dentro de los límites del dispositivo.
- La configuración por SMS simple permite una instalación rápida en sitio y conexión a Plaspy sin herramientas especializadas.

## Visión general técnica

| Conectividad | GSM / GPRS \(Quad-band 850 / 900 / 1800 / 1900 MHz\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz \(quad-band\) |
| Power & Battery | Batería de respaldo integrada 150 mAh / 3.7 V — continúa reportando durante unas horas tras la pérdida de energía del vehículo |
| Interfaces | Conector OBD-II estándar de 16‑pin \(plug-and-play\); disponible cable de extensión opcional |
| GNSS | Conjunto de GPS u‑blox UBLOX7020; sensibilidad −159 dB; precisión típica de ubicación 2D RMS ≈ 10 meters; precisión de sincronización horaria de satélites ~1 microsegundo |
| Bluetooth | No listado para este modelo \(no se especifica soporte de sensor BLE integrado\) |
| Remote Management | Configuración mediante comandos SMS \(IP/port del servidor, APN, consultas/cambios de IMEI\); compatible con la app SinoTrack PRO y la plataforma web VIP.sinotrack — puede dirigirse a servidores personalizados como Plaspy |
| Form Factor | Unidad OBD-II plug-in compacta para uso en vehículos; no requiere cableado externo |
| Alarms & Events | Alarma de choque/vibración, alarma de batería baja, alarma de exceso de velocidad, notificaciones de geocerca |
| Package & Support | Incluye la unidad ST-902A, manual de usuario, pequeño destornillador; cable de extensión opcional. Opciones de envío global, soporte 24 horas y garantía de 2 años por parte del fabricante. |

## Casos de uso

- Monitoreo de flotas y telemetría básica — implementar en automóviles y vehículos ligeros para ubicación en tiempo real, alertas de exceso de velocidad y historial de rutas para cumplimiento y supervisión operativa.
- Antirrobo y recuperación — alertas instantáneas de vibración/choque y batería baja cuando se manipula el vehículo; la batería de respaldo mantiene el dispositivo reportando durante cortes breves de energía.
- Programas de alquiler de autos y vehículos de corto plazo — la conveniencia del plug-in OBD facilita el intercambio y la redeployación de rastreadores rápida sin cableado ni tiempo de taller.
- Operaciones basadas en geocerca — recibir notificaciones de entrada/salida de geocerca para control de perímetro, zonas de entrega y seguimiento del movimiento de activos.
- Sitios remotos o monitoreo de vehículos secundarios — usa la configuración por SMS para dirigir los dispositivos a Plaspy y recibir actualizaciones de ubicación o alarmas donde GPRS es el transporte principal.

## Por qué elegir este rastreador con Plaspy

El ST-902A es una opción pragmática cuando necesitas un rastreador GPS compatible con Plaspy que minimice el tiempo de instalación mientras ofrece lo esencial de la gestión de flotas y telemetría anti‑robo. Su diseño OBD-II plug-and-play y la configuración de servidor por SMS permiten registrar dispositivos rápidamente en Plaspy sin hardware adicional ni cableado. La conectividad GPRS cuád-banda y un motor GNSS de u‑blox proporcionan cobertura confiable y precisión de posicionamiento para uso diario.

Si bien este modelo se centra en la ubicación, alarma y telemetría básicas \(no incluye monitoreo de combustible dedicado, pines de entrada de encendido ni sensores de inmovilizador/BLE integrados\), su simplicidad es una ventaja para implementaciones rápidas. Si tu despliegue de Plaspy requiere E/S avanzada \(detección de encendido\), monitoreo de combustible o control remoto del inmovilizador, puedes combinar los datos de seguimiento del ST-902A con hardware adicional o seleccionar un modelo compatible con Plaspy que exponga esas interfaces. Para equipos que buscan un rastreador GPS fácil de instalar, robusto y que se integre con Plaspy para seguimiento en tiempo real y gestión de flotas, el ST-902A es una opción confiable y de bajo costo, respaldada por el soporte del fabricante y una garantía de dos años.

  \<meta itemprop="name" content="ST-902A New Mini OBD GPS Tracker">
  \<meta itemprop="manufacturer" content="SinoTrack">
  \<meta itemprop="model" content="ST-902A">

