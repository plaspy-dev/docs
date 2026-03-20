---
slug: /teltonika/fmc920/protocol
id: fmc920-protocol
sidebar_label: Protocol
title: Teltonika - FMC920 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Teltonika FMC920 con Plaspy en rastreo en tiempo real y gestión de flotas
keywords:
  - Protocolo Teltonika FMC920
  - Protocolo GPS Teltonika FMC920
  - Protocolo de comunicación FMC920
  - Protocolo de rastreo FMC920
  - Rastreador Teltonika Plaspy
  - Compatibilidad FMC920 Plaspy
  - Protocolo de seguimiento de vehículos FMC920
  - Protocolo rastreador GPS Teltonika FMC920
  - Protocolo de telemetría FMC920
  - Teltonika FMC920 sensores BLE
---

# Teltonika - Protocolo FMC920

Esta página describe el contexto público del protocolo para integrar el Teltonika FMC920 con Plaspy. Se centra en cómo el equipo se comunica con Plaspy de forma general, explica el papel del protocolo de reporte del dispositivo y resalta los ajustes de conexión prácticos que usted debe conocer al apuntar los FMC920 al servicio de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llega la telemetría al endpoint de Plaspy. El tiempo exacto de mensajes, los campos de telemetría disponibles y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación neutral respecto a la implementación y contexto de conexión en lugar de detalles específicos de paquetes o comandos de firmware.

## Resumen del protocolo

El protocolo de comunicación FMC920 define las convenciones que el rastreador usa para reportar posiciones GNSS, telemetría, estados de sensores y eventos de estado a un servidor como Plaspy. En términos prácticos, este protocolo permite al dispositivo identificarse ante Plaspy, enviar datos de ubicación y sensores útiles, y soportar flujos de control o alertas a través de la plataforma Plaspy.

- Permite que el rastreador reporte fijaciones de posición, marcas de tiempo y telemetría básica a Plaspy para que las ubicaciones aparezcan en mapas en tiempo real e informes.
- Transmite la identidad y el estado del dispositivo para que Plaspy pueda asociar los mensajes con el activo de la flota correcto y mostrar metadatos del equipo.
- Transporta datos de sensores y auxiliares como lecturas de sensores BLE, estado de batería y eventos de entradas digitales para su uso en alertas y paneles.
- Facilita acciones remotas cuando el equipo lo soporta, por ejemplo comandos de inmovilizador o confirmaciones de configuración enrutadas por Plaspy.
- Opera sobre transportes de red estándar para que el rastreador entregue datos de forma confiable desde redes celulares hacia los servidores de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint y puerto compartidos y detecta automáticamente el protocolo de reporte cuando llega la telemetría. Eso significa que, en la mayoría de los casos, usted no necesita seleccionar un protocolo específico dentro de Plaspy siempre que el FMC920 esté configurado para enviar datos al endpoint del servidor Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para reporte de dispositivos.
- El puerto para reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 dependiendo de la configuración del rastreador y las condiciones de la red.
- Cuando el FMC920 reporta al endpoint de Plaspy, Plaspy reconocerá el protocolo del dispositivo automáticamente y encaminará la telemetría entrante dentro de la plataforma.
- La configuración típica requiere únicamente apuntar el equipo al dominio o IP de Plaspy y confirmar los ajustes de transporte en el rastreador.

## Transporte y contexto de conexión

Comprender el transporte y los parámetros básicos de conexión ayuda a garantizar que el FMC920 pueda alcanzar Plaspy de forma confiable a través de redes celulares. Las opciones de conexión varían según el despliegue y la calidad de la red celular, y el FMC920 puede configurarse para usar diferentes transportes según las necesidades operativas.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del instalador.
- Apunte el rastreador al endpoint de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 si no hay DNS disponible en el entorno.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración al desplegar múltiples modelos de rastreadores.
- Asegúrese de que el APN y la conectividad celular estén correctamente provisionados para que el rastreador pueda establecer conexiones salientes hacia Plaspy.
- Cuando existan firewalls de red, permita el tráfico saliente hacia el endpoint de Plaspy para asegurar que los reportes lleguen al servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden agregar, cambiar o eliminar campos de telemetría y comportamientos; confirme qué funciones están disponibles en el firmware de su FMC920.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas de radio y tecnologías celulares soportadas, lo que a su vez influye en el comportamiento de conectividad.
- Las opciones de configuración del fabricante pueden cambiar los valores por defecto de transporte entre UDP y TCP, por lo que verifique el modo de transporte en cada equipo.
- El comportamiento de sensores Bluetooth LE y los tipos de sensores soportados dependen tanto del firmware del FMC920 como de los periféricos BLE empleados.
- Plaspy detecta el protocolo automáticamente, pero es necesario que el equipo esté correctamente configurado apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para su descubrimiento.
- Siempre valide la compatibilidad y cualquier característica relacionada con seguridad, como certificados o firma de firmware, consultando la documentación oficial de Teltonika antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Saber cómo se comunica el FMC920 con Plaspy ayuda a instaladores y responsables de flota a configurar los dispositivos correctamente, resolver problemas de entrega y planificar mantenimiento y actualizaciones de firmware. Una comprensión clara reduce tiempos de inactividad y garantiza que la telemetría sea confiable para la toma de decisiones operativas.

- Una configuración precisa reduce reportes fallidos y acelera la incorporación de dispositivos en Plaspy.
- Entender la elección de transporte ayuda a diagnosticar problemas de conectividad en redes celulares o cuando los firewalls restringen el tráfico.
- Conocer las diferencias de firmware guía las decisiones sobre disponibilidad de funciones como inmovilización, sensores BLE y campos de telemetría.
- El manejo correcto de la identidad del dispositivo asegura que la telemetría se atribuya al vehículo o activo correcto en Plaspy.
- Saber dónde consultar los recursos oficiales del fabricante ayuda a resolver casos límite y confirmar requisitos de seguridad o certificados.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC920 con Plaspy brinda a las organizaciones hardware compacto que se integra en una sola plataforma de gestión de flotas para visibilidad en tiempo real, alertas e informes históricos. El tamaño reducido del FMC920, su soporte para sensores BLE y la capacidad de inmovilizador lo hacen adecuado para instalaciones discretas donde tanto la ubicación como el monitoreo de condiciones son importantes.

Para saber más sobre Plaspy y cómo funciona con rastreadores como el FMC920 visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, comportamiento de firmware y recomendaciones del fabricante, verifique la información con los recursos oficiales de Teltonika en https://www.teltonika-gps.com/ ya que las capacidades del dispositivo y el firmware pueden cambiar con el tiempo.
