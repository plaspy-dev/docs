---
slug: /thingsys/ts_v6w/protocol
id: ts_v6w-protocol
sidebar_label: Protocol
title: ThingSys - TS-V6W Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador GPS ThingSys TS V6W con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo ThingSys TS V6W
  - Protocolo GPS ThingSys TS V6W
  - Protocolo ThingSys TS V6W para Plaspy
  - Protocolo de comunicación ThingSys TS V6W
  - Protocolo de rastreo ThingSys TS V6W
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador GPS vehicular
  - Integración de rastreadores para flotas
  - Configuración de rastreador GPRS
  - Protocolo de telemetría vehicular
---

# ThingSys - Protocolo TS-V6W

Esta página describe el contexto público del protocolo para usar el rastreador GPS vehicular ThingSys TS-V6W con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, cómo Plaspy recibe y reconoce el tráfico del equipo, y qué debe considerarse al configurar el dispositivo para que informe de forma fiable a la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y notas prácticas en lugar de comandos específicos de firmware o detalles de implementación privados.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo que transmite la ubicación, eventos y telemetría básica del TS-V6W a un servidor remoto como Plaspy. En términos generales, el protocolo permite que el dispositivo se identifique, envíe actualizaciones de posición periódicas o por evento, y comunique alarmas o estados de sensores para su consumo por una plataforma de flotas.

- Transporta posición GPS y telemetría básica para que Plaspy pueda mapear ubicaciones y generar rutas históricas.
- Transmite notificaciones de eventos como exceso de velocidad, vibración y cambios en la ignición ACC para alertas en tiempo real.
- Soporta modos de reporte y configuración remota como seguimiento por GPRS y configuración por SMS según la configuración del dispositivo.
- Permite que eventos de accesorios y sensores opcionales se reenvíen a la plataforma para su gestión consolidada.
- Suministra información de estado que Plaspy puede usar para mantener indicadores de disponibilidad y salud del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un endpoint y puerto comunes y determina automáticamente qué protocolo soportado está usando un dispositivo. Cuando un TS-V6W está configurado para reportar al endpoint de Plaspy, la plataforma por lo general detecta y comienza a procesar los mensajes sin requerir una selección manual del protocolo.

- El dominio de servidor de Plaspy usado para el reporte de dispositivos es d.plaspy.com para configuraciones basadas en DNS.
- Plaspy también acepta reportes directos a la IP pública 54.85.159.138 cuando no se usa DNS.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y utiliza el mismo puerto para todos los equipos soportados.
- Plaspy puede aceptar conexiones de dispositivos sobre TCP o UDP cuando el rastreador está configurado adecuadamente.
- En la mayoría de los casos, solo es necesario apuntar el dispositivo al endpoint de Plaspy y la plataforma se encargará de la detección del protocolo de forma automática.

## Transporte y contexto de conexión

El transporte y el direccionamiento son el contexto de la capa de conexión que determinan cómo el TS-V6W llega a Plaspy. El TS-V6W soporta reporte por datos celulares sobre 4G LTE con retroceso a 2G GSM y puede configurarse para usar transporte UDP o TCP al enviar mensajes a un servidor remoto.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138 según preferencias de red o DNS.
- El equipo puede ajustarse para usar UDP o TCP en el puerto 8888 para reportes; Plaspy acepta ambos transportes en el mismo puerto.
- Plaspy mantiene el puerto 8888 para todos los dispositivos para simplificar la configuración y el despliegue en flotas mixtas.
- Cuando se usa direccionamiento por DNS, el rastreador resuelve d.plaspy.com y luego transmite a la IP resuelta sobre el transporte elegido.
- El comportamiento de la red celular y la configuración del APN pueden afectar la fiabilidad del enlace de datos, por lo que verifique los ajustes del APN y el soporte del plan de datos al desplegar dispositivos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de los mensajes, los campos disponibles y los eventos soportados; siempre verifique la versión de firmware del equipo al validar la compatibilidad.
- Las revisiones de hardware o los módulos accesorios opcionales pueden añadir o quitar elementos de telemetría que la plataforma puede recibir y mostrar.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe elegirse según la fiabilidad de la red y las capacidades del dispositivo.
- La configuración por SMS sigue siendo un recurso común para la puesta a punto remota cuando no hay conectividad de datos, pero el SMS no reemplaza el reporte GPRS en vivo para el seguimiento en tiempo real.
- Confirme que el TS-V6W está configurado para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar que Plaspy reciba los reportes.
- Valide funciones como control de inmovilizador, integración de sensores de combustible y accesorios externos conforme a la documentación del fabricante para confirmar los detalles de implementación.

## Por qué es importante entender el protocolo

Tener conocimiento sobre cómo el rastreador reporta a Plaspy facilita una configuración correcta, una resolución de problemas más rápida y operaciones confiables a largo plazo. Comprender el contexto de la comunicación reduce errores de configuración y ayuda a administradores de flota e integradores a identificar el origen de los problemas.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a diagnosticar problemas de conectividad separando fallas a nivel de transporte de errores de análisis del protocolo.
- Orienta la decisión entre UDP y TCP con base en el comportamiento de la red y las necesidades de entrega críticas.
- Aclara la disponibilidad de funciones al emparejar periféricos opcionales para que los eventos esperados aparezcan en Plaspy.
- Apoya la planificación informada de actualizaciones de firmware al entender que el comportamiento de los mensajes puede cambiar con nuevas versiones.

## Por qué usar Plaspy con este protocolo

Usar el TS-V6W con Plaspy ofrece una ruta práctica para organizaciones que necesitan visibilidad continua de vehículos, alertas por eventos y telemetría consolidada para operaciones de flota. El soporte del TS-V6W para conectividad primaria 4G LTE con retroceso a 2G, su factor de forma compacto, batería de respaldo y múltiples tipos de alarma lo hacen adecuado para prevención de robo, monitoreo de rutas y despliegues en flotas mixtas.

Para conocer más sobre Plaspy y cómo se integra con rastreadores como el TS-V6W visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y soporte de accesorios verifique la información en el sitio oficial del fabricante https://www.thingsys.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
