---
slug: /tzone/tz_dp070/protocol
id: tz_dp070-protocol
sidebar_label: Protocol
title: TZone - TZ-DP070 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del monitor de temperatura TZone TZ-DP070 y su comunicación con Plaspy para reportes e integración de dispositivos
keywords:
  - Protocolo TZone TZ DP070
  - Comunicación TZone TZ DP070
  - Compatibilidad TZ DP070 con Plaspy
  - Protocolo monitor de temperatura TZone
  - Transmisión RF TZ DP070
  - Integración RFID TZ DP070
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador Plaspy
  - Configuración de red TZ DP070
  - Documentación del dispositivo TZone
---

# TZone - Protocolo TZ-DP070

Esta página ofrece una visión pública del contexto de comunicación del monitor de temperatura TZone TZ-DP070 cuando se integra con Plaspy. Describe el papel general del protocolo de reporte del equipo, los puntos finales y opciones de transporte, y cómo el TZ-DP070 puede enviar temperaturas y datos de sensores relacionados a un servidor Plaspy para su monitoreo y análisis. Los detalles técnicos aquí son de alto nivel y se centran en el contexto de integración más que en internals privados del fabricante.

El TZ-DP070 es un monitor de temperatura basado en WinCE6.0 que recibe datos de sensores por RS485, soporta integración de etiquetas RFID y transmisión inalámbrica RF de 2.4 GHz, y ofrece conectividad Ethernet y USB para reportes en red. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Plaspy acepta reportes de dispositivos en el endpoint compartido d.plaspy.com (54.85.159.138) en el puerto 8888, y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar la configuración del equipo con la documentación oficial más reciente.

## Resumen del protocolo

El protocolo del tracker regula cómo el TZ-DP070 empaqueta y transmite información de identificación y lecturas de sensores para que una plataforma como Plaspy pueda consumir y presentar los datos. A alto nivel, el protocolo cubre la identidad del dispositivo, cargas útiles de sensores (temperatura, ID de etiqueta, estado), la selección de transporte y el reporte de latidos o keepalive para mantener una sesión activa con el servidor.

- Permite que el TZ-DP070 se identifique y entregue datos de temperatura y etiquetas RFID en formato legible por máquina
- Transporta reportes periódicos y actualizaciones por eventos para que Plaspy muestre valores en tiempo real e históricos
- Señala el estado del dispositivo y la conectividad para que Plaspy pueda monitorizar la salud del equipo
- Funciona con la pila de red del dispositivo para transmitir datos por Ethernet o interfaces inalámbricas hacia el endpoint de Plaspy
- Permite comandos de configuración desde herramientas de aprovisionamiento cuando el dispositivo y el firmware lo soportan

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo adecuado según la conexión entrante y el patrón de datos. En la mayoría de los casos, los equipos correctamente configurados para reportar a Plaspy no requerirán selección manual de protocolo dentro de la plataforma.

- Plaspy escucha reportes en d.plaspy.com y en la dirección IP 54.85.159.138
- Todos los dispositivos soportados por Plaspy envían reportes al mismo puerto para aplicar detección del lado del servidor de forma consistente
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888
- Cuando el TZ-DP070 apunta al endpoint de Plaspy, la plataforma aplica detección automática para interpretar los mensajes entrantes
- Por lo general, los usuarios solo necesitan asegurarse de que el dispositivo esté configurado para reportar al endpoint de Plaspy y utilice el protocolo de transporte correcto

## Contexto de transporte y conexión

Los detalles de conexión y transporte son importantes para garantizar que el TZ-DP070 alcance Plaspy con fiabilidad. El dispositivo soporta múltiples interfaces físicas y puede usar distintos modos de transporte según la configuración y las capacidades del firmware. Los ajustes de conexión relevantes en Plaspy son consistentes entre dispositivos para simplificar la configuración.

- Los dispositivos pueden reportar a d.plaspy.com o directamente a 54.85.159.138
- Plaspy acepta conexiones en el puerto 8888 y ese mismo puerto se utiliza para todos los dispositivos soportados
- El TZ-DP070 puede configurarse para usar UDP o TCP para el reporte según la configuración del equipo
- Si el dispositivo dispone de Ethernet, configure los parámetros de red y el endpoint de reporte de forma adecuada
- Pasarelas inalámbricas o intermediarias que reenvían datos RF deben configurarse para enviar los reportes al endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar tiempos de mensaje, campos disponibles y características opcionales; verifique siempre la versión de firmware al validar el comportamiento
- Las variantes de hardware y módulos accesorios como lectores RFID o pasarelas RF pueden afectar cómo los datos de sensores se exponen en la red
- La elección de transporte entre UDP y TCP puede influir en la fiabilidad y en el tránsito NAT según la topología de red
- Las herramientas del fabricante o las interfaces de aprovisionamiento pueden ofrecer opciones de configuración diferentes entre lanzamientos
- La detección automática de Plaspy reduce la necesidad de selección manual de protocolo, pero sigue siendo necesario configurar correctamente el endpoint y el transporte en el dispositivo
- Valide la compatibilidad y el soporte de funciones con la documentación oficial del fabricante para su unidad TZ-DP070

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de reporte del TZ-DP070 y del contexto de conexión ayuda a asegurar una configuración fiable y facilita la resolución de problemas cuando un dispositivo no aparece en Plaspy. Saber qué se espera que envíe el equipo y cómo llega al endpoint de Plaspy reduce errores de configuración y acelera la resolución.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte requerido
- Ayuda a diagnosticar problemas de conectividad como cortafuegos o NAT que puedan bloquear UDP o TCP en el puerto 8888
- Permite evaluar el impacto del firmware en los campos de telemetría disponibles y en la cadencia de reportes
- Orienta las decisiones al integrar datos RFID o sensores externos en el modelo de datos de Plaspy
- Apoya la planificación de mantenimiento a largo plazo al rastrear diferencias entre revisiones de firmware y hardware

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el TZ-DP070 ofrece una plataforma centralizada para recolectar, visualizar y actuar sobre datos de temperatura y etiquetas en despliegues que requieren monitoreo y registros históricos. La detección automática de protocolo de Plaspy y su endpoint consistente simplifican la configuración inicial para que los equipos se concentren en la operación y el análisis de datos en lugar de en el parseo de mensajes del dispositivo.

Si desea obtener más información sobre Plaspy y cómo se puede integrar con dispositivos como el TZone TZ-DP070, visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las notas de implementación con el fabricante en http://www.tzonedigital.com/ ya que estos detalles pueden cambiar con el tiempo.
