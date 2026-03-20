---
slug: /sanav/ct_24/protocol
id: ct_24-protocol
sidebar_label: Protocol
title: Sanav - CT-24 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del rastreador Sanav CT-24 y cómo se comunica con Plaspy para seguimiento confiable
keywords:
  - protocolo Sanav CT 24
  - protocolo GPS Sanav CT 24
  - Sanav CT 24 Plaspy
  - protocolo rastreador CT 24
  - protocolo rastreador GPS Sanav
  - rastreo de vehículos CT 24
  - protocolo de comunicación CT 24
  - compatibilidad rastreadores Plaspy
  - integración rastreador GPS Plaspy
  - configuración Sanav CT 24
---

# Sanav - Protocolo CT-24

Esta página resume el contexto público del protocolo para usar el rastreador GPS Sanav CT-24 con Plaspy. Explica cómo el dispositivo suele comunicarse con Plaspy y qué ajustes de conexión compartidos se emplean. El enfoque está en hechos observables y públicos sobre el reporte del dispositivo y la compatibilidad con la plataforma, no en formatos de paquetes internos o propietarios.

El CT-24 es un rastreador de larga duración de batería con alta sensibilidad GPS y GSM, operación con antena interna, entradas y salidas, detección de vibración, contactos reed, capacidad de voz, batería de respaldo y memoria interna. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique siempre los detalles específicos del dispositivo en la documentación oficial de Sanav cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador define cómo el CT-24 se identifica ante el servidor, reporta posición y estado y transmite datos de sensores y entradas que Plaspy utiliza para seguimiento, alertas e historial. En la plataforma, Plaspy acepta datos entrantes en un único punto de conexión compartido e interpreta el flujo para generar posiciones y telemetría útiles.

- Permite que el CT-24 envíe actualizaciones de ubicación, marcas de tiempo y telemetría básica a Plaspy para mapeo e historial.
- Transmite la identidad y el estado del dispositivo para que Plaspy asocie los reportes con el activo o usuario correcto.
- Lleva el estado de sensores y E/S, como vibración, cambios en contactos reed y estado de la batería de respaldo para detección de eventos.
- Soporta reporte intermitente y almacenamiento local para que el dispositivo resista pérdidas temporales de conectividad antes de reenviar a Plaspy.
- Permite configuración por aire e interacciones de comando cuando el dispositivo y el firmware del fabricante exponen esa capacidad mediante el reporte al servidor.

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un único endpoint público y puerto para los reportes de dispositivos. La plataforma detecta automáticamente el protocolo del rastreador en conexiones entrantes, por lo que normalmente no es necesario seleccionar un protocolo dentro de Plaspy cuando el CT-24 está configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- Los dispositivos pueden configurarse para usar UDP o TCP hacia Plaspy en el puerto 8888 según la capacidad del dispositivo y la preferencia del usuario.
- Cuando el CT-24 está configurado para enviar al endpoint de Plaspy, Plaspy detectará e interpretará automáticamente los reportes entrantes.
- Rara vez será necesaria la selección manual de protocolo en la plataforma Plaspy si el dispositivo está correctamente apuntado al endpoint compartido.

## Transporte y contexto de conexión

El contexto de conexión para el CT-24 es sencillo: el dispositivo puede reportar a través de la red celular usando UDP o TCP y debe apuntar al endpoint y puerto compartidos de Plaspy. Comprender estas opciones de transporte ayuda a garantizar un flujo de datos confiable hacia Plaspy.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 al enviar reportes.
- La plataforma Plaspy escucha en el puerto 8888 tanto para UDP como para TCP; los dispositivos deben configurarse con el protocolo que el firmware soporte mejor.
- Usar el mismo puerto para todos los dispositivos simplifica la configuración de firewalls y APN para flotas.
- La memoria interna y la batería de respaldo del CT-24 pueden ayudar a almacenar datos durante cortes temporales y reenviarlos cuando se restablezca la conexión.
- Para obtener los mejores resultados, verifique los ajustes de APN, transporte (UDP vs TCP) y la dirección del servidor en la configuración del CT-24.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades CT-24 pueden afectar los intervalos de reporte disponibles, los sensores habilitados y las preferencias de transporte.
- Revisiones de hardware u módulos opcionales pueden cambiar qué funciones de E/S o lecturas de sensores aparecen en los reportes.
- La configuración por parte del fabricante y los servidores predeterminados determinan si el dispositivo usa UDP o TCP por defecto.
- La capacidad del CT-24 para operar sin antena externa y su memoria interna pueden influir en cómo reporta desde entornos con limitaciones.
- Verifique la compatibilidad y los ajustes recomendados contra la documentación de Sanav y las notas de cambios de firmware antes de desplegar a gran escala.
- Probar una unidad individual con Plaspy antes del despliegue masivo es una práctica recomendada para confirmar el comportamiento en su entorno de red.

## Por qué importa comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del CT-24 y del contexto de transporte ayuda a lograr una configuración fluida, reportes confiables y una resolución de problemas efectiva al usar Plaspy. Conocer los hechos públicos de comunicación reduce la fricción en la incorporación y favorece la estabilidad operativa.

- Ayuda a confirmar el servidor, puerto y ajustes de transporte correctos al configurar el dispositivo para Plaspy.
- Facilita interpretar comportamientos del dispositivo como reportes perdidos, almacenamiento en búfer y tiempos de eventos de sensores.
- Permite una resolución de problemas más dirigida con el soporte de Sanav al aislar factores de configuración, transporte o firmware.
- Contribuye a optimizar perfiles de energía y de reporte para obtener la vida útil de batería y la frecuencia de actualización esperadas.
- Ayuda a planificar actualizaciones de firmware, diferencias de características y el impacto de revisiones de hardware en el reporte.

## Por qué usar Plaspy con este protocolo

Usar el Sanav CT-24 con Plaspy ofrece visibilidad práctica para vehículos, activos y otros elementos rastreados donde la larga duración de la batería y una instalación discreta son importantes. El endpoint compartido y la detección automática de protocolo de Plaspy reducen la complejidad de configuración mientras ofrecen historial de posiciones, alertas por eventos y monitoreo centralizado para flotas o activos distribuidos.

Si desea conocer más sobre las capacidades de Plaspy y cómo la plataforma gestiona la incorporación y el seguimiento de dispositivos, visite https://www.plaspy.com. Para los detalles más actuales y específicos del protocolo, notas de firmware e instrucciones de configuración del dispositivo, consulte la documentación del fabricante en http://es.sanav.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable verificar los detalles con Sanav para obtener la información más reciente.
