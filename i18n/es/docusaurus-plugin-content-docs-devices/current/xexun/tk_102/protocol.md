---
slug: /xexun/tk_102/protocol
id: tk_102-protocol
sidebar_label: Protocol
title: Xexun - TK-102 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el rastreador Xexun TK-102 con Plaspy usando la configuración de conexión compartida
keywords:
  - Protocolo Xexun TK 102
  - Protocolo GPS Xexun TK 102
  - Protocolo de comunicación TK 102
  - Protocolo de rastreo TK 102
  - Compatibilidad rastreador Xexun Plaspy
  - Protocolo rastreador GPS Plaspy
  - Rastreo vehicular Xexun TK 102
  - Respaldo GPRS SD TK 102
  - Variaciones de firmware Xexun
  - Integración de dispositivos Plaspy
---

# Xexun - TK-102 Protocolo

Esta página describe el contexto público del protocolo relevante para usar el rastreador Xexun TK-102 con Plaspy. Se enfoca en cómo el dispositivo se comunica con un servidor remoto, qué papel juega el protocolo de comunicación para garantizar reportes fiables y qué ajustes de conexión compartidos espera Plaspy para recibir datos de este modelo.

Plaspy utiliza un endpoint y puerto comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al servicio. El comportamiento exacto del TK-102 en la comunicación puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la orientación aquí es deliberadamente de alto nivel y no propietaria, a la vez que destaca los ajustes de conexión compartidos por Plaspy que facilitan la integración.

## Resumen del protocolo

El protocolo que utiliza un TK-102 define cómo el dispositivo se identifica, reporta posición y estado, y envía alarmas o telemetría para que una plataforma de flotas como Plaspy pueda convertir esos datos en información útil. Esta página no reproduce los detalles internos del protocolo del fabricante, pero sí explica el papel práctico que desempeña la comunicación en la integración y operación diaria.

- Permite que el rastreador envíe ubicaciones GPS y actualizaciones de estado a un servidor remoto para que Plaspy pueda mostrar y almacenar las posiciones.
- Transporta información de identidad del dispositivo que permite a Plaspy mapear los mensajes entrantes a una unidad TK-102 específica.
- Lleva eventos de alerta y telemetría como SOS, movimiento, exceso de velocidad y batería baja para que se puedan activar reglas y notificaciones.
- Puede configurarse para usar la memoria SD del equipo como respaldo de datos GPRS cuando la conectividad de red es intermitente.
- Soporta tanto reportes en tiempo real como modos de consulta bajo demanda según la configuración del dispositivo y las capacidades del firmware.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones y datos entrantes en un único endpoint y puerto compartido para todos los rastreadores soportados, e identifica automáticamente el protocolo a partir de los datos recibidos. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está apuntando al endpoint correcto de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com que resuelve al servidor público de Plaspy.
- La IP pública del servidor Plaspy es 54.85.159.138 para configuración directa por IP si lo prefiere.
- Plaspy escucha en el puerto 8888 para tráfico de rastreadores y todos los dispositivos usan el mismo puerto en la plataforma.
- Los dispositivos compatibles con Plaspy pueden configurarse para reportar usando UDP o TCP en el puerto 8888, según el soporte del dispositivo y la preferencia del usuario.
- Cuando un TK-102 correctamente configurado reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy detectará y asociará automáticamente el protocolo del dispositivo para su procesamiento.

## Contexto de transporte y conexión

Decisiones de conexión como UDP frente a TCP, y si el dispositivo reporta a un nombre de dominio o a una IP directa, afectan cómo el TK-102 alcanza Plaspy, pero no cambian el hecho de que Plaspy usa un único puerto compartido y detección automática de protocolo para los datos entrantes. Los siguientes puntos resumen el contexto práctico de conexión para dispositivos TK-102.

- El TK-102 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto 8888 es el puerto de entrada que Plaspy expone para conexiones y reportes de dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración del usuario.
- Usar el nombre de dominio d.plaspy.com permite que los dispositivos se adapten a cambios de IP en el backend sin necesidad de reconfiguración en el equipo.
- Si las restricciones de red o del operador lo exigen, también se soporta configurar el dispositivo con la IP explícita 54.85.159.138.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware del TK-102 pueden cambiar el comportamiento de ciertos comandos e informes; verifique el comportamiento en la unidad específica que vaya a desplegar.
- Algunas funciones del TK-102, como el respaldo GPRS en tarjeta SD, cambios de modo y vigilancia de voz dependen del firmware y pueden alterar los patrones de reporte.
- El uso de UDP o TCP puede afectar las características de entrega y debe seleccionarse según la fiabilidad de la red y la capacidad del dispositivo.
- Variaciones en la configuración por defecto del fabricante o en los comandos SMS de configuración pueden requerir actualizar los ajustes del equipo para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Confirme cualquier límite impuesto por el fabricante sobre números autorizados, longitud de mensajes o intervalos de telemetría cuando planee despliegues masivos.
- Siempre valide que el dispositivo esté enviando su identificador para que Plaspy pueda relacionar los datos entrantes con el registro de dispositivo correcto.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TK-102 a un nivel práctico ayuda con la configuración, la resolución de problemas y las operaciones continuas al integrar dispositivos con Plaspy. Conocer el contexto de transporte y la variabilidad común entre firmwares facilita que los equipos reporten de forma confiable.

- Simplifica la configuración inicial al asegurar que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 con el transporte correcto seleccionado.
- Ayuda a diagnosticar huecos en los reportes diferenciando entre causas de red, transporte y configuración del equipo.
- Orienta sobre el uso del respaldo en tarjeta SD y opciones fuera de servidor cuando la conectividad GPRS es poco fiable.
- Permite reglas y alertas previsibles en Plaspy cuando usted sabe qué eventos es capaz de emitir el dispositivo.
- Reduce el tiempo de despliegue al aclarar cómo se comunica la identidad y el estado del dispositivo con la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el Xexun TK-102 con Plaspy ofrece a las organizaciones una forma práctica de centralizar ubicación, alertas y datos históricos de posición desde rastreadores pequeños. La detección automática de protocolo de Plaspy y los ajustes de conexión compartidos reducen la carga de configuración por dispositivo, mientras que las funciones de la plataforma permiten monitoreo, alertas por geocerca y supervisión operativa de la flota.

Si desea conocer más sobre cómo Plaspy maneja el reporte de dispositivos y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener detalles más actuales y específicos por dispositivo acerca del protocolo y el firmware, verifique la información en el sitio del fabricante https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
