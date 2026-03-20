---
slug: /autoseeker/at_23/protocol
id: at_23-protocol
sidebar_label: Protocol
title: Autoseeker - AT-23 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Autoseeker AT-23 y su comunicación con Plaspy para seguimiento de flotas confiable
keywords:
  - Protocolo Autoseeker AT 23
  - Protocolo GPS Autoseeker
  - Protocolo de rastreo AT 23
  - Rastreador GPS AT 23 Plaspy
  - Protocolo de comunicación AT 23
  - Dispositivos compatibles con Plaspy
  - Protocolo de rastreador vehicular
  - Protocolo de rastreador con relé GPS
  - Compatibilidad rastreador 2G
  - Integración rastreador GNSS
---

# Autoseeker - Protocolo AT-23

Esta página describe el contexto público del protocolo para usar el Autoseeker AT-23 con Plaspy. Explica, en términos prácticos, cómo el AT-23 transmite posiciones GNSS, telemetría y mensajes de eventos a Plaspy, manteniendo el foco en detalles de protocolo de alto nivel y no sensibles que son útiles para instaladores y operadores de flotas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El AT-23 es un rastreador GPS compacto de 2G con posicionamiento GPS y Beidou, un relé inmovilizador integrado y un conjunto de reportes de eventos estándar que Plaspy interpreta para mapeo en vivo, geocercas y alertas.

## Resumen del protocolo

El protocolo de comunicación del AT-23 define cómo el dispositivo informa ubicación, estado y eventos a un servidor remoto. Para la compatibilidad con Plaspy, el interés principal es la entrega consistente de posiciones, el estado del relé, eventos de energía y batería, y alertas de movimiento o manipulación, de modo que Plaspy pueda mostrar telemetría precisa y activar flujos de trabajo.

- Entrega reportes de ubicación periódicos y basados en eventos que incluyen coordenadas GNSS y metadatos temporales para historial de rutas y seguimiento en tiempo real.
- Envía notificaciones de eventos como entrada/salida de geocerca, excesos de velocidad, alertas por vibración o manipulación y pérdida de alimentación principal que Plaspy muestra a los usuarios.
- Comunica el estado del relé y eventos de corte o reanudación remota para que las acciones del inmovilizador queden registradas y auditadas en Plaspy.
- Proporciona identificación del dispositivo y mensajes de estado que permiten a Plaspy asociar los datos entrantes con el activo correcto y mostrar telemetría en los paneles.
- Soporta transporte de red que permite al rastreador enviar mensajes de forma confiable a un endpoint de Plaspy para ingestión en tiempo real.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un único endpoint compartido y determina automáticamente qué protocolo soportado está usando un dispositivo. En configuraciones normales, el equipo se apunta a Plaspy y la plataforma asigna los reportes entrantes a sus perfiles de dispositivo compatibles, por lo que la mayoría de los usuarios no necesitan seleccionar el protocolo manualmente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para ingestión pública.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo de la configuración del rastreador y las condiciones de la red.
- Cuando el AT-23 se configura para reportar al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y enrutar los datos a la vista de dispositivo correspondiente.
- La acción habitual del usuario se limita a configurar el dispositivo para reportar al endpoint de Plaspy; Plaspy se encarga del mapeo del protocolo al recibir los datos.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el AT-23 alcanza a Plaspy y las decisiones prácticas que toman los integradores durante la instalación. El AT-23 usa celular 2G para enviar sus reportes y puede configurarse para usar TCP o UDP para comunicarse con Plaspy según la configuración del rastreador.

- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 para alcanzar Plaspy.
- Los dispositivos pueden apuntar al nombre de dominio d.plaspy.com o al endpoint numérico 54.85.159.138 como dirección del servidor.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración en flotas mixtas.
- UDP se utiliza comúnmente por su menor overhead para reportes, mientras que TCP puede elegirse cuando el instalador requiere confirmación de entrega a nivel de transporte.
- Consideraciones a nivel de red como NAT del operador, ajustes de APN y provisión de la SIM afectan la conectividad pero no los conceptos generales del protocolo descritos aquí.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto exacto de mensajes y el comportamiento que el AT-23 utiliza para reportar eventos y telemetría.
- Variantes de hardware o lotes de producción pueden mostrar diferencias menores en características soportadas, como el cableado del relé o el reporte de batería de respaldo.
- Las opciones de configuración del fabricante pueden influir en si el dispositivo usa UDP o TCP y qué eventos se reportan por defecto.
- Confirme que el APN y la SIM del dispositivo estén correctamente provisionados, ya que la conectividad celular es obligatoria para la integración con Plaspy.
- Valide la compatibilidad y la disponibilidad de funciones frente a la documentación del fabricante antes de despliegues a gran escala.
- Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 es el enfoque estándar de ingestión de Plaspy para rastreadores soportados.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del AT-23 ayuda a asegurar instalaciones confiables, telemetría precisa y un comportamiento predecible dentro de Plaspy. Saber qué reporta el rastreador y cómo alcanza el servidor reduce el tiempo de configuración y facilita la solución de problemas cuando eventos o ubicaciones no aparecen como se espera.

- Facilita que los instaladores confirmen APN y ajustes de reporte para garantizar que el dispositivo alcance el endpoint de Plaspy.
- Permite interpretar con mayor claridad las líneas de tiempo de eventos en Plaspy al saber qué alertas puede generar el rastreador.
- Ayuda a decidir entre UDP o TCP según las características de la red y las necesidades de confiabilidad.
- Reduce el riesgo de mala configuración al alinear el cableado del relé y el reporte de eventos con los flujos de trabajo de Plaspy para inmovilización y alertas.
- Apoya a los equipos de operaciones en la planificación de actualizaciones de firmware y estrategias de ciclo de vida de los dispositivos para mantener la compatibilidad.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-23 junto con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad, detección de manipulación y control remoto de inmovilización para vehículos y activos móviles. El AT-23 suministra ubicación y telemetría de eventos mientras Plaspy agrega esos datos en paneles, geocercas, reproducción histórica y flujos de alertas que apoyan las operaciones de flota y las respuestas de seguridad.

Si desea conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles más actuales del protocolo AT-23, diferencias de firmware e instrucciones de instalación verifique la información específica del dispositivo en el sitio del fabricante https://autoseekergps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
