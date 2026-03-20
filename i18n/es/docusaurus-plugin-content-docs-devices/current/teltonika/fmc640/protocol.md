---
slug: /teltonika/fmc640/protocol
id: fmc640-protocol
sidebar_label: Protocol
title: Teltonika - FMC640 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMC640 y su comunicación con Plaspy para seguimiento confiable de flotas
keywords:
  - Protocolo Teltonika FMC640
  - Protocolo GPS Teltonika FMC640
  - Compatibilidad FMC640 Plaspy
  - Protocolo rastreador FMC640
  - Protocolo de rastreo Teltonika
  - seguimiento de flotas FMC640
  - rastreador GPS FMC640
  - seguimiento vehicular Teltonika
  - protocolo de dispositivo Plaspy
  - comunicación Teltonika FMC640
---

# Teltonika - Protocolo FMC640

Esta página explica, en términos no sensibles, el contexto del protocolo público para usar el rastreador Teltonika FMC640 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión se emplean y consideraciones prácticas para integrar el FMC640 en una implementación de Plaspy. El contenido se basa en las características del producto FMC640 y en prácticas generales de protocolo, no en detalles internos del firmware.

El Teltonika FMC640 es un rastreador GPS de grado profesional con conectividad GNSS y LTE, diseñado para operaciones de flota. Plaspy recibe datos del FMC640 usando un conjunto compartido de ajustes de conexión y detección automática de protocolo. El comportamiento exacto y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello siempre debe validar el comportamiento del dispositivo con la documentación oficial de Teltonika.

## Resumen del protocolo

El protocolo de reporte define cómo el FMC640 empaqueta datos de ubicación, sensores y del bus del vehículo y los envía a un servidor remoto para que Plaspy los procese y muestre. A alto nivel, el propósito del protocolo es entregar de forma fiable posiciones y telemetría, permitir la identificación del dispositivo y soportar mensajes de comando y configuración cuando estén disponibles.

- Permite que el FMC640 transmita posición GNSS, estado y telemetría a Plaspy para mapeo y alertas
- Proporciona identificación del dispositivo para asociar los datos entrantes con el activo correcto en Plaspy
- Transporta datos FMS y de combustible por CAN, telemetría relacionada con tacógrafo e información de sensores periféricos cuando están presentes
- Soporta actualizaciones en tiempo real y reportes periódicos para ahorrar ancho de banda o energía
- Permite mecanismos de intercambio de comandos o configuración remota a través de los canales de transporte soportados

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones en un endpoint y puerto comunes para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador para cada conexión entrante. En la mayoría de las implementaciones no es necesario elegir manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha reportes de rastreadores en el endpoint compartido alojado en d.plaspy.com
- La dirección IP del servidor Plaspy que pueden usar los dispositivos es 54.85.159.138 y el puerto para reportes de dispositivos es 8888
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración
- Cuando un FMC640 apunta al endpoint de Plaspy y envía datos, Plaspy detectará automáticamente el protocolo del rastreador y asociará la información con la cuenta correcta
- Los usuarios normalmente configuran el rastreador para que reporte a d.plaspy.com o a la IP indicada y eligen el transporte que soporte su dispositivo

## Transporte y contexto de conexión

Las opciones de conexión y la selección del transporte afectan cómo el FMC640 se comunica con Plaspy, pero no cambian el objetivo principal del protocolo. El FMC640 soporta transportes celulares comunes y Plaspy acepta tanto UDP como TCP en el puerto compartido, permitiendo despliegues flexibles en distintas redes.

- El FMC640 puede configurarse para usar UDP o TCP para los reportes según las opciones del equipo y las condiciones de red
- Plaspy acepta reportes de dispositivos en el puerto 8888 tanto si el equipo usa UDP como TCP
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Usar un host y puerto consistentes entre dispositivos simplifica la configuración de flota y reduce errores de puesta en marcha
- Consideraciones de red como reglas de firewall y ajustes de APN pueden afectar la conectividad y deben validarse al desplegar dispositivos

## Notas sobre compatibilidad del protocolo

- Diferencias en la versión de firmware pueden cambiar qué mensajes o campos opcionales transmite el FMC640; consulte las notas de la versión del firmware para detalles
- Revisiones de hardware y variantes regionales pueden influir en las bandas celulares disponibles e interfaces periféricas
- La elección del transporte (UDP vs TCP) puede afectar la semántica de entrega y debe ajustarse a sus necesidades de fiabilidad y latencia
- Opciones de configuración por parte del fabricante, como Dual SIM y ajustes de APN, pueden modificar el comportamiento de conectividad
- Siempre valide que el dispositivo esté reportando al endpoint de Plaspy tras la configuración para confirmar que es accesible y está identificado correctamente
- Para integraciones complejas que involucren datos CAN o periféricos externos, confirme qué interfaces están habilitadas por el firmware del FMC640 en uso

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del FMC640 y cómo Plaspy lo procesa ayuda a asegurar una integración confiable, agilizar la resolución de problemas y facilitar el mantenimiento a largo plazo de su solución de monitoreo de flota. Saber qué envía el rastreador y cómo la plataforma espera recibirlo reduce errores de configuración y apoya decisiones operativas.

- Simplifica la configuración inicial al confirmar host, transporte y puerto correctos para reportes
- Acelera la resolución de problemas de conectividad al reducir las causas posibles como transporte, APN o incompatibilidades de firmware
- Permite verificar que los datos CAN, tacógrafo y de sensores periféricos lleguen como se espera a Plaspy
- Ayuda a planificar actualizaciones de firmware, despliegues de funcionalidades y mantenimiento de hardware en la flota
- Reduce el tiempo de respuesta del soporte al aclarar lo que Plaspy espera de los reportes entrantes de los dispositivos

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC640 con Plaspy ofrece a las organizaciones una vía práctica para centralizar ubicación de vehículos, telemetría e información del bus del vehículo en una plataforma única. La detección automática de protocolos de Plaspy y los ajustes de conexión unificados simplifican la incorporación de dispositivos y permiten escalar flotas sin configuración de puertos por equipo.

Si desea saber más sobre Plaspy y cómo maneja la integración de rastreadores, visite https://www.plaspy.com. Para obtener los detalles de protocolo más actuales y específicos del dispositivo, notas de firmware y documentación de hardware, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/.
