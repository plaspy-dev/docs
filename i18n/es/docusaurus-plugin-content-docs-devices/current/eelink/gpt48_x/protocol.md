---
slug: /eelink/gpt48_x/protocol
id: gpt48_x-protocol
sidebar_label: Protocol
title: EElink - GPT48‑X Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador EElink GPT48‑X y su comunicación con Plaspy para seguimiento y telemetría confiables
keywords:
  - Protocolo EElink GPT48‑X
  - Protocolo GPS EElink GPT48‑X
  - Comunicación EElink GPT48‑X
  - Compatibilidad GPT48‑X Plaspy
  - Integración protocolo EELINK
  - Protocolo rastreador GPS Plaspy
  - Seguimiento de activos GPT48‑X
  - Gestión de flotas GPT48‑X
  - Rastreador GPS bajo consumo standby prolongado
  - Rastreador NB IoT LTE Cat M
---

# EElink - Protocolo GPT48‑X

Esta página resume el contexto público del protocolo para usar el rastreador EElink GPT48‑X con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, y explica el papel del protocolo del equipo para entregar posición, telemetría y eventos a Plaspy para su monitoreo e informes.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos que soporta y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo GPT48‑X puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página ofrece orientación general y contexto de integración sin exponer internals de firmware ni formatos privados de paquetes.

## Visión general del protocolo

El protocolo EELINK empleado por el GPT48‑X define cómo el rastreador informa posiciones GNSS, estados y notificaciones de eventos a un servicio backend como Plaspy. A alto nivel, el protocolo permite la identificación, el reporte periódico y por evento, y la configuración remota para que Plaspy pueda ingerir datos de ubicación y telemetría utilizables.

- Información de identificación y registro del dispositivo que permite a Plaspy asociar los reportes recibidos con el activo correcto
- Reportes periódicos de posición y latidos (heartbeat) para el rastreo de ubicación y la supervisión de la salud del dispositivo
- Reportes de eventos y alarmas por manipulación, movimiento, modo de emergencia y disparos de geocercas
- Soporte de configuración remota para ajustar parámetros y modos de reporte desde la plataforma, la app móvil o SMS
- Campos de telemetría como nivel de batería y estado del dispositivo que Plaspy muestra en paneles y alertas

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto compartidos para los reportes de los dispositivos y detecta automáticamente el protocolo cuando los equipos configurados envían datos. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta al endpoint correcto y usa el transporte compatible.

- El dominio del servidor Plaspy para reportes de dispositivo es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y el puerto compartido es 8888
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos entrantes al registro de dispositivo correspondiente
- Los dispositivos deben estar configurados para reportar a d.plaspy.com o a 54.85.159.138 para alcanzar Plaspy
- La configuración típica del equipo incluye un identificador único del dispositivo para que Plaspy pueda emparejar los reportes con el activo correcto

## Transporte y contexto de conexión

El GPT48‑X puede usar enlaces celulares de bajo consumo como LTE Cat‑M y NB‑IoT para conectarse a Plaspy. La selección de transporte y el comportamiento de red del dispositivo los determina el firmware y la configuración; Plaspy acepta reportes sobre los ajustes de transporte compartidos para simplificar la integración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar, por lo que un único endpoint entrante simplifica el enrutamiento en la plataforma
- Los dispositivos pueden apuntar al dominio Plaspy d.plaspy.com o directamente a la IP 54.85.159.138
- El tipo de conectividad celular como LTE Cat‑M o NB‑IoT afectará la frecuencia de reporte, la latencia y el consumo de energía
- Asegúrese de que la red y la operadora permitan conexiones salientes al endpoint de Plaspy y al transporte elegido

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento y los campos disponibles en los reportes del dispositivo; confirme la versión de firmware al validar la integración
- Los SKUs de hardware y las variantes regionales pueden alterar las bandas soportadas y los modos de energía y, en algunos casos, las opciones del protocolo
- El GPT48‑X anuncia soporte del protocolo EELINK, pero la configuración del fabricante o firmware personalizado puede introducir variantes del proveedor
- La elección de transporte entre UDP y TCP puede influir en las características de entrega y debe coincidir con la configuración del dispositivo
- Los métodos de gestión remota como la plataforma, la app o la configuración por SMS son útiles para modificar los ajustes de reporte tras el despliegue
- Siempre valide la compatibilidad con la documentación oficial del fabricante y su proveedor de dispositivos antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Saber cómo se comunica el GPT48‑X ayuda a garantizar una configuración confiable, una incorporación fluida a Plaspy y una resolución eficaz de problemas de telemetría y alertas. Una comprensión clara del protocolo reduce retrasos en la integración y mejora la fiabilidad a largo plazo.

- Confirma que el dispositivo está reportando los identificadores y campos que Plaspy necesita para asociar datos con los activos
- Ayuda a elegir el transporte y los intervalos de reporte adecuados para equilibrar capacidad de respuesta y duración de batería
- Facilita la resolución de problemas cuando los dispositivos están fuera de línea, reportan incorrectamente o envían eventos inesperados
- Apoya la planificación de actualizaciones de firmware y la comprensión de cómo los cambios pueden afectar los reportes o la configuración
- Permite mapear con confianza eventos del dispositivo como manipulación, emergencia y alertas de geocerca en las reglas y flujos de trabajo de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el GPT48‑X con Plaspy ofrece seguimiento duradero y de bajo mantenimiento para activos que necesitan tiempos de espera prolongados y reportes de eventos confiables. Plaspy ingiere posiciones GNSS y telemetría del dispositivo y las presenta en paneles, alertas e informes históricos para apoyar operaciones de flota, recuperación de activos y mantenimiento preventivo.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el GPT48‑X visite https://www.plaspy.com. Para detalles específicos sobre protocolo y firmware verifique siempre la información más reciente en el sitio del fabricante https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
