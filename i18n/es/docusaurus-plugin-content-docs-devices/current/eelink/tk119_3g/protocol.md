---
slug: /eelink/tk119_3g/protocol
id: tk119_3g-protocol
sidebar_label: Protocol
title: EElink - TK119‑3G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del EElink TK119‑3G con Plaspy, contexto de conexión y notas de integración
keywords:
  - protocolo EElink TK119‑3G
  - protocolo GPS EElink TK119‑3G
  - EElink TK119‑3G Plaspy
  - protocolo rastreador GPS EElink
  - protocolo de comunicación TK119‑3G
  - protocolo seguimiento de vehículos
  - seguimiento de flotas Plaspy
  - compatibilidad rastreador GPS
  - protocolo de dispositivo Plaspy
  - telemetría y alarmas
---

# EElink - Protocolo TK119‑3G

Esta página explica el contexto público del protocolo para usar el rastreador EElink TK119‑3G con Plaspy. Aborda cómo el dispositivo se comunica con Plaspy en términos prácticos y no sensibles, de modo que administradores de flota e integradores puedan comprender el comportamiento de conexión e informe sin exponer detalles propietarios.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador de forma automática. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía trata el contexto de conexión, los roles comunes del protocolo y las consideraciones de compatibilidad en lugar de los detalles internos del dispositivo.

## Descripción general del protocolo

El protocolo de reporte del TK119‑3G permite que el rastreador envíe posición, eventos y telemetría a un servidor central donde Plaspy recibe e interpreta la información para seguimiento, alertas e informes. El rol público del protocolo es entregar de manera fiable las ubicaciones y eventos de estado desde el dispositivo a través de redes celulares hacia Plaspy.

- Transporta datos de ubicación y el modo de posicionamiento para que Plaspy pueda mostrar la posición en tiempo real y el historial.
- Transmite señales de estado del vehículo y eventos como encendido ACC, alarmas y estado de relé para alertas y automatizaciones.
- Envía telemetría útil para diagnóstico e integraciones, incluyendo datos de periféricos provenientes de expansiones RS232.
- Proporciona una secuencia de eventos que Plaspy mapea en alertas, reportes y flujos de control.
- Permite que el dispositivo se identifique para que Plaspy asocie los mensajes entrantes con el activo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint público común y usa las características de la conexión y los mensajes entrantes para determinar automáticamente el protocolo del rastreador. En la mayoría de los despliegues usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente apuntado al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para el reporte de telemetría.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del usuario.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo informa al endpoint compartido de Plaspy.
- La configuración típica requiere apuntar el rastreador a la dirección del servidor Plaspy y asegurarse de que el transporte correcto (UDP o TCP) esté seleccionado en el dispositivo.

## Transporte y contexto de conexión

Las opciones de conexión forman parte de la configuración del dispositivo pero no cambian el hecho de que todos los dispositivos de Plaspy usan un único puerto de reporte. El TK119‑3G puede apuntar a un dominio o a una dirección IP y puede usar UDP o TCP según cómo se provée la unidad y lo que soporte la red móvil.

- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como host de destino para el reporte.
- El puerto para reportar a Plaspy es 8888 y el dispositivo puede configurarse usando UDP o TCP en ese puerto.
- Usar UDP puede reducir la carga para actualizaciones de posición frecuentes, mientras que TCP ofrece fiabilidad de conexión cuando el dispositivo lo soporta.
- Asegúrese de que el APN y el enrutamiento de datos de la red móvil permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.
- Mantenga la hora del dispositivo y los ajustes de asistencia GNSS actualizados para mejorar los reportes de posición y las marcas de tiempo de los eventos.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden añadir, eliminar o modificar tipos de mensajes y campos; siempre verifique el comportamiento conforme a las notas de la versión del firmware.
- Las revisiones de hardware y módulos opcionales, como la expansión RS232 o el relé, pueden influir en la telemetría y las funciones de control disponibles.
- Las herramientas de configuración del fabricante y los ajustes por defecto pueden afectar si el dispositivo usa UDP o TCP; confirme la selección de transporte durante la provisión.
- El enfoque de puerto compartido de Plaspy reduce la complejidad de configuración, pero requiere que el dispositivo esté correctamente apuntado al endpoint de Plaspy.
- Las bandas celulares regionales y el comportamiento de los operadores pueden afectar la latencia y la fiabilidad de la entrega de mensajes.
- Valide la compatibilidad y el mapeo de funciones con la documentación del fabricante antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK119‑3G ayuda a lograr una configuración fluida, telemetría confiable y alertas predecibles dentro de Plaspy. Saber qué reporta el dispositivo y cómo se conecta reduce el tiempo de resolución de problemas y mejora la confianza operativa.

- Agiliza la provisión inicial sabiendo dónde apuntar el dispositivo y qué transporte seleccionar.
- Ayuda a interpretar el comportamiento del equipo durante pérdidas de señal, eventos de alimentación o cambios de firmware.
- Mejora el ajuste de alertas al emparejar los tipos de eventos del dispositivo con las reglas de alerta de Plaspy.
- Facilita la integración confiable de datos de periféricos como la telemetría RS232 en los flujos de trabajo de la flota.
- Apoya la resolución de problemas con operadores y proveedores de hardware cuando los mensajes no llegan al endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TK119‑3G con Plaspy ofrece a los operadores de flota un camino claro para ingerir ubicación, eventos y telemetría de periféricos en una plataforma unificada. La combinación soporta seguimiento en tiempo real, monitoreo de encendido y alarmas, y acciones de control como inmovilización remota cuando el dispositivo y la instalación lo permiten.

Si desea saber más sobre cómo Plaspy gestiona el reporte de dispositivos y los flujos de trabajo de flota, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y guía de implementación consulte al fabricante en https://www.eelink.com.cn/ ya que el soporte del protocolo y el comportamiento del equipo pueden cambiar con el tiempo.
