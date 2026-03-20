---
slug: /carscop/cctr_800g_4g/protocol
id: cctr_800g_4g-protocol
sidebar_label: Protocol
title: Carscop - CCTR-800G-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Carscop CCTR-800G-4G con el servidor Plaspy
keywords:
  - Carscop CCTR-800G-4G
  - protocolo GPS Carscop
  - CCTR-800G-4G Plaspy
  - protocolo de rastreo Carscop
  - comunicación CCTR-800G-4G
  - rastreador GPS Carscop Plaspy
  - compatibilidad CCTR-800G-4G
  - guía de protocolo Carscop
  - integración rastreador GPS Plaspy
  - protocolo de seguimiento de vehículos
---

# Carscop - Protocolo CCTR-800G-4G

Esta página describe el contexto público del protocolo para usar el rastreador Carscop CCTR-800G-4G con Plaspy. Resume cómo configurar el dispositivo para enviar telemetría y ubicación en tiempo real a Plaspy, y qué función cumple el protocolo de reporte del equipo para entregar datos utilizables a la plataforma. El enfoque está en los puntos de comunicación y configuración a alto nivel que son relevantes para la integración y la solución de problemas.

El CCTR-800G-4G es un rastreador portátil y robusto con un protocolo abierto y una dirección de subida configurable, lo que permite redirigir la telemetría a plataformas de terceros como Plaspy. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es normal encontrar diferencias en el tiempo de mensajes, campos opcionales y funciones disponibles entre unidades o versiones de firmware.

## Resumen del protocolo

A grandes rasgos, el protocolo del rastreador define cómo el CCTR-800G-4G empaqueta y envía telemetría, eventos e identidad básica del dispositivo a un servidor remoto para que Plaspy pueda mostrar ubicaciones, alarmas y estado. El protocolo abierto y la dirección de subida configurable hacen que este equipo sea adecuado para integraciones en la nube, manteniendo al fabricante el control del firmware y las funciones opcionales.

- Permite la transmisión periódica de posiciones GNSS y telemetría de movimiento al servidor para que Plaspy genere posiciones en vivo e historial de seguimiento.
- Transporta información de estado y eventos del dispositivo, como nivel de batería, alarmas por movimiento o impacto, y eventos SOS para alertas en la plataforma.
- Proporciona un mecanismo para incluir identidad del dispositivo y contexto de sesión, de modo que la plataforma receptora pueda atribuir los mensajes al activo correcto.
- Soporta la subida de recorridos offline, de forma que los datos registrados en el equipo mientras está fuera de cobertura se entreguen cuando se restaure la conexión.
- Funciona junto con funciones del dispositivo como intervalos de subida configurables, ajustes APN y fallback por SMS para mantener la continuidad de los reportes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo usado por cada rastreador. Cuando un CCTR-800G-4G está configurado para enviar a Plaspy, la plataforma identificará el formato del mensaje y procesará la telemetría sin que normalmente sea necesario seleccionar el protocolo manualmente.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP de servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de equipos y las reglas de firewall.
- Plaspy acepta tráfico de dispositivos por UDP o TCP al mismo puerto y gestionará los mensajes entrantes según el protocolo detectado.
- Si el CCTR-800G-4G está apuntando al endpoint de Plaspy con el APN y los ajustes de subida correctos, por lo general no es necesaria la selección manual del protocolo dentro de Plaspy.
- Una identidad de dispositivo adecuada y intervalos de subida consistentes facilitan la detección automática y la asignación de la telemetría al registro de activo correcto.

## Transporte y contexto de conexión

Las elecciones de conexión afectan cómo el rastreador alcanza los servidores de Plaspy, pero no cambian el resumen público del protocolo. El CCTR-800G-4G permite configurar una IP o un dominio de subida y puede usar UDP o TCP en el puerto compartido de Plaspy según los ajustes del equipo y las condiciones de la red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El puerto de transporte para todos los dispositivos Plaspy es 8888 y en ese puerto se soportan tanto UDP como TCP.
- Elija UDP para reportes con menor overhead o TCP si prefiere un comportamiento de conexión persistente y el firmware del rastreador lo soporta.
- Asegúrese de que los ajustes de APN y de la red móvil estén aplicados correctamente para que el equipo pueda abrir sesiones de datos hacia el endpoint de Plaspy.
- Considere el comportamiento de firewall y NAT en redes privadas cuando pruebe la conectividad hacia d.plaspy.com o la dirección IP.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, los campos opcionales y los eventos soportados. Verifique el comportamiento contra las notas de la versión del firmware.
- Las revisiones de hardware pueden introducir pequeñas diferencias en el manejo del GNSS, la gestión de energía o el cableado de sensores que afecten el contenido de la telemetría.
- Ajustes del fabricante como la dirección de subida configurable, el modo de transporte y los modos de trabajo determinan si el rastreador usa UDP o TCP y con qué frecuencia reporta.
- Algunas funciones como la localización por SMS y el almacenamiento de pistas offline operan fuera del protocolo IP principal y son mecanismos útiles de respaldo.
- Siempre pruebe un dispositivo en un entorno controlado antes de un despliegue amplio para confirmar que Plaspy recibe e interpreta la telemetría esperada.
- Consulte la documentación de Carscop para notas específicas del modelo que puedan afectar la integración o los pasos de configuración requeridos.

## Por qué es importante entender el protocolo

Comprender cómo el CCTR-800G-4G se comunica con Plaspy ayuda a garantizar reportes fiables, un procesamiento correcto de alarmas y una solución de problemas más eficiente durante la implementación y el mantenimiento. Tener expectativas claras sobre transporte, intervalos de subida y telemetría disponible reduce tiempos de integración y sorpresas operativas.

- Acelera la configuración inicial al confirmar que la dirección de subida, el modo de transporte y el APN son correctos para la conectividad con Plaspy.
- Facilita el diagnóstico de problemas como reportes faltantes, subidas demoradas o telemetría incompleta revisando la configuración del equipo y el comportamiento del firmware.
- Mejora la eficiencia de batería y red al seleccionar intervalos de reporte y modos de trabajo apropiados a los requisitos de la plataforma.
- Asegura que las alarmas y eventos SOS se entreguen y mapeen correctamente en Plaspy para alertas y respuesta oportunas.
- Favorece un comportamiento offline predecible al clarificar cómo el dispositivo cachea y sube posteriormente las pistas almacenadas.

## Por qué usar Plaspy con este protocolo

Usar el Carscop CCTR-800G-4G con Plaspy ofrece a las organizaciones una opción resistente para el rastreo de vehículos, activos y personal, combinando hardware robusto con reportes flexibles. La dirección de subida configurable del equipo y su enfoque de protocolo abierto facilitan apuntar la telemetría a Plaspy para ubicación en vivo, alertas de eventos y reproducción histórica en diversos escenarios de despliegue.

Para saber más sobre Plaspy y las funciones de la plataforma para monitoreo de flotas y rastreo de activos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y las notas de firmware con la documentación oficial de Carscop en http://www.carscop.com/.
