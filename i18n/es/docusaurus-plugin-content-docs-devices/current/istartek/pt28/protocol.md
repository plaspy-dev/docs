---
slug: /istartek/pt28/protocol
id: pt28-protocol
sidebar_label: Protocol
title: iStartek - PT28 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del reloj GPS iStartek PT28 y cómo se comunica con Plaspy para rastreo y alertas
keywords:
  - protocolo iStartek PT28
  - protocolo GPS PT28
  - iStartek PT28 Plaspy
  - protocolo de comunicación PT28
  - protocolo de rastreo PT28
  - protocolo de rastreador GPS iStartek
  - protocolo de rastreador GPS personal
  - protocolo de reloj GPS
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
---

# iStartek - Protocolo PT28

Esta página ofrece una visión pública y sin detalles sensibles sobre el contexto de comunicación del reloj GPS iStartek PT28 cuando se usa con la plataforma Plaspy. Se centra en cómo el dispositivo reporta ubicación, eventos y telemetría a Plaspy para monitoreo en tiempo real, alertas y revisión histórica sin exponer detalles internos privados.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe roles generales del protocolo y el contexto de conexión más que internals del dispositivo.

## Resumen del protocolo

El protocolo de reporte del PT28 es el mecanismo por el cual el reloj envía fijaciones de posición, avisos de eventos y telemetría a una plataforma remota como Plaspy. En la práctica, el protocolo permite que el dispositivo se identifique, transmita datos de ubicación y estado utilizables, y comunique eventos del usuario como SOS o alertas de llamada bidireccional para que Plaspy los presente a cuidadores y operadores.

- Transporta datos de posición incluyendo fijaciones en modos múltiples y actualizaciones asistidas por AGPS para que Plaspy muestre la ubicación en tiempo real y el historial de rutas.
- Transmite información de eventos como alertas SOS, pulsaciones de botones y eventos telefónicos para que la plataforma genere notificaciones.
- Envía telemetría adicional como batería, frecuencia cardíaca y conteo de pasos que Plaspy puede almacenar y mostrar en paneles de monitoreo.
- Permite cargas de rutas históricas y reportes periódicos para que las rutas almacenadas estén disponibles para revisión en Plaspy.
- Proporciona la identidad y el contexto del dispositivo necesarios para que Plaspy asocie los datos entrantes con la cuenta y el registro de activo correctos.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de una amplia gama de rastreadores compatibles en un único endpoint y puerto compartidos, y la plataforma determina automáticamente el manejo de protocolo apropiado para los datos entrantes del dispositivo. En la mayoría de las configuraciones usted no necesita seleccionar un protocolo dentro de Plaspy si el PT28 está configurado para reportar correctamente al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y Plaspy usa este mismo puerto para todos los dispositivos soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- Plaspy detecta el protocolo del rastreador automáticamente una vez que el dispositivo comienza a reportar al endpoint de Plaspy.
- Cuando el PT28 reporta su identidad y actualizaciones regulares de posición al endpoint de Plaspy, la plataforma asociará esos mensajes con el registro de dispositivo correspondiente para monitoreo y alertas.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el PT28 llega hasta Plaspy más que la estructura interna de los marcos de datos. El reloj típicamente utiliza conectividad celular con Wi‑Fi y LBS como opciones de respaldo para entregar mensajes de posición y eventos a la plataforma. La selección de transporte (UDP o TCP) y la dirección del servidor se configuran en el dispositivo o a través de la app complementaria.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el firmware y la configuración del PT28.
- Los dispositivos pueden apuntar al endpoint de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de puertos y el direccionamiento en el servidor.
- Los datos celulares son el transporte principal, mientras que Wi‑Fi y LBS funcionan como fuentes de posicionamiento alternativas en lugar de rutas de transporte separadas.
- La confiabilidad de la red y el transporte elegido afectan las características de entrega; TCP ofrece entrega orientada a conexión mientras que UDP es sin conexión.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el temporizado de mensajes, los campos de telemetría disponibles o las funciones opcionales. Verifique el firmware del dispositivo al evaluar compatibilidad.
- Las revisiones de hardware o variantes por región pueden incluir diferentes radios, bandas o sensores opcionales que afectan la telemetría reportada.
- El comportamiento del servidor del fabricante y las configuraciones opcionales de reenvío desde la app complementaria pueden influir en si el PT28 reporta directamente a plataformas de terceros o lo hace a través de un relay del fabricante.
- La elección de transporte (UDP vs TCP) es configurable en muchos dispositivos; asegúrese de que el equipo esté configurado para usar el puerto 8888 y apunte a d.plaspy.com o a la IP del servidor Plaspy.
- Algunas funciones de rastreadores personales, como frecuencia cardíaca, telemetría de pasos o capturas de cámara, pueden ser opcionales o requerir ajustes de firmware/app específicos para reenviarse a Plaspy.
- Siempre valide el comportamiento del dispositivo en un entorno controlado antes de un despliegue masivo y consulte la documentación oficial para detalles específicos del firmware.

## Por qué es importante comprender el protocolo

Comprender cómo el PT28 se comunica con Plaspy ayuda a asegurar una configuración fiable, un comportamiento predecible y a agilizar la resolución de problemas cuando surgen desviaciones. Tener claro el contexto de comunicación también mejora el mapeo de eventos y confirma que alertas críticas como SOS se entregan e interpretan correctamente por la plataforma.

- Ayuda a confirmar que el dispositivo está configurado para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto requerido para que Plaspy reciba actualizaciones.
- Aclara si el dispositivo está usando UDP o TCP, lo que puede afectar la entrega y la retransmisión de mensajes.
- Facilita la interpretación de campos de telemetría y tipos de eventos visibles en los paneles e informes de Plaspy.
- Ayuda a diagnosticar problemas de conectividad relacionados con datos celulares, ajustes de APN o reglas de firewall en el borde de la red.
- Apoya la planificación de actualizaciones de firmware y despliegues de funciones que puedan cambiar lo que el dispositivo reporta a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el PT28 con Plaspy ofrece una solución práctica para organizaciones y cuidadores que necesitan visibilidad continua, recepción de eventos y datos históricos de rutas desde rastreadores portátiles personales. Plaspy ingiere el flujo de ubicación del dispositivo, eventos SOS y la telemetría disponible para habilitar monitoreo, alertas e informes que apoyan la seguridad infantil, el cuidado de adultos mayores y la supervisión de personal en campo.

El enfoque de Plaspy simplifica el despliegue al usar un endpoint y puerto compartidos y al detectar automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. Para obtener más información sobre cómo Plaspy puede trabajar con el PT28 y otros dispositivos visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo y del firmware con el fabricante en https://istartek.com/ antes de finalizar despliegues.
