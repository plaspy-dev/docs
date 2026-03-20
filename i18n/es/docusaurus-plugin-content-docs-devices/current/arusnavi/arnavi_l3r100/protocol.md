---
slug: /arusnavi/arnavi_l3r100/protocol
id: arnavi_l3r100-protocol
sidebar_label: Protocol
title: Arusnavi - ARNAVI L3R100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Arusnavi ARNAVI L3R100 y cómo se comunica con Plaspy para localización y telemetría
keywords:
  - Protocolo Arusnavi ARNAVI L3R100
  - Protocolo GPS ARNAVI L3R100
  - Protocolo Arusnavi para Plaspy
  - Protocolo de comunicación ARNAVI L3R100
  - Protocolo de rastreo ARNAVI L3R100
  - Compatibilidad de dispositivos Plaspy
  - Integración de telemetría de rastreador GPS
  - Telemetría Arnavi EGTS
  - Protocolo de rastreo vehicular
  - Rastreador para gestión de flotas
---

# Arusnavi - Protocolo ARNAVI L3R100

Esta página describe el contexto público del protocolo para usar el Arusnavi ARNAVI L3R100 con Plaspy. Resume cómo el dispositivo reporta posición, telemetría y eventos a Plaspy en términos generales y aclara las configuraciones de conexión que normalmente utilizará al integrar este modelo con la plataforma Plaspy.

Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos de telemetría disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto práctico de integración y no en detalles internos de firmware.

## Resumen del protocolo

El ARNAVI L3R100 puede transmitir posiciones GNSS, telemetría de sensores cableados e inalámbricos, y notificaciones de eventos a servidores de monitoreo usando modos de telemetría compatibles. En implementaciones reales, el protocolo define cómo el dispositivo se identifica, cómo se empaqueta la telemetría y el estado para su transporte, y cómo Plaspy interpreta esos reportes para seguimiento en vivo y reproducción histórica.

- Permite al dispositivo reportar posición GNSS y marcas de tiempo para actualizaciones de ubicación en vivo en Plaspy.
- Transporta información de sensores y entradas como entradas discretas, lecturas de sensores RS485 y telemetría de sensores BLE.
- Transmite marcadores de eventos como encendido, apertura de puertas, movimiento, baja de batería y otras alertas que Plaspy puede usar para activar reglas y notificaciones.
- Admite envío a múltiples servidores de monitoreo para redundancia e integraciones paralelas.
- Permite configuración remota y activación de actualizaciones de firmware cuando el fabricante y el firmware del dispositivo lo soportan.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y conocido, y detecta automáticamente el protocolo del rastreador, de modo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy. La configuración correcta del dispositivo para que reporte al endpoint de Plaspy es el paso más importante para que la detección automática funcione de forma fiable.

- Plaspy escucha en un único puerto utilizado por todos los dispositivos compatibles, lo que simplifica la configuración.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor Plaspy serán recibidos por Plaspy para identificación automática del protocolo.
- Cuando el ARNAVI L3R100 apunta al endpoint de Plaspy, Plaspy identificará si el dispositivo está usando Arnavi, EGTS u otro modo de telemetría compatible.
- Normalmente no es necesario elegir un protocolo dentro de Plaspy si el dispositivo está correctamente ajustado para reportar al endpoint de Plaspy.
- Si un dispositivo no aparece en línea, verifique la configuración de reporte del equipo, la conectividad de red y que el dispositivo esté apuntando a la dirección del endpoint de Plaspy.

## Transporte y contexto de conexión

El ARNAVI L3R100 puede usar datos celulares para enviar telemetría a Plaspy. Según el soporte del dispositivo y la configuración, puede usar transporte UDP o TCP hacia el endpoint y puerto de Plaspy. Conocer las opciones de transporte y las direcciones de endpoint que utiliza Plaspy ayuda a garantizar que el dispositivo pueda alcanzar el servidor a través de redes de operador y cortafuegos.

- Plaspy acepta conexiones de dispositivos en un único puerto usado por todos los dispositivos compatibles, lo que reduce la complejidad de configuración.
- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- El transporte puede ser UDP o TCP en el puerto 8888, dependiendo del firmware del dispositivo y las preferencias de configuración.
- Use el mismo puerto 8888 para todos los dispositivos compatibles con Plaspy al configurar el servidor destino en el rastreador.
- Confirme que el APN del operador y las reglas del cortafuegos permitan tráfico saliente hacia d.plaspy.com o la IP de Plaspy en el puerto 8888 y con el protocolo de transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- El ARNAVI L3R100 soporta los modos de telemetría Arnavi y EGTS, que son comunes en despliegues regionales y de flotas.
- Las versiones de firmware y las revisiones de hardware pueden introducir variaciones en los campos de telemetría disponibles, modos y comportamiento de transporte.
- Algunas instalaciones usan la capacidad del dispositivo para transmitir a dos servidores de monitoreo por redundancia; verifique ambos endpoints si utiliza modo de servidor dual.
- La selección entre UDP y TCP puede afectar la fiabilidad en determinadas redes; elija el transporte que mejor se adapte a su entorno y a las capacidades del firmware.
- Valide la configuración de reporte del dispositivo contra la documentación del fabricante y confirme que el equipo esté apuntando a d.plaspy.com o a la IP de Plaspy al integrar.
- Las herramientas de configuración del fabricante y la configuración remota vía web pueden cambiar cómo se seleccionan o habilitan los modos de telemetría.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fluida, reportes confiables y una resolución de problemas efectiva cuando el ARNAVI L3R100 se usa con Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, la familiaridad con las opciones de reporte del equipo y las elecciones de transporte reduce la fricción de integración y mejora el tiempo de actividad operativo.

- Ayuda a verificar que los campos de posición y telemetría que Plaspy espera sean realmente generados por el firmware del dispositivo.
- Facilita la resolución de problemas por datos faltantes, disparos de eventos o mapeo de sensores en despliegues a gran escala.
- Aclara cómo configurar el dispositivo para reportar a d.plaspy.com o a la IP de Plaspy usando el transporte y puerto correctos.
- Apoya la planificación de redundancia cuando se utiliza la función de envío a dos servidores de forma concurrente.
- Ayuda en la gestión de cambios cuando actualizaciones de firmware o revisiones de hardware alteran el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el ARNAVI L3R100 con Plaspy ofrece una forma práctica de recopilar posiciones GNSS, datos de sensores RS485 cableados y telemetría de sensores BLE dentro de un único flujo de trabajo de gestión de flotas. Plaspy recibe datos de ubicación y eventos en tiempo real desde dispositivos apuntando al endpoint compartido y expone esa información mediante monitorización, generación de reportes y capacidades de alerta relevantes para operaciones de flotas y activos.

Si desea obtener más información sobre cómo Plaspy admite dispositivos como el ARNAVI L3R100 y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y guías de instalación, consulte la documentación del fabricante en https://www.arusnavi.ru ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
