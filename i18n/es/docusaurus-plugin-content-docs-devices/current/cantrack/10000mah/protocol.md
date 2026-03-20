---
slug: /cantrack/10000mah/protocol
id: 10000mah-protocol
sidebar_label: Protocol
title: CanTrack - 10000mAh Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GPS CanTrack 10000mAh y su comunicación con Plaspy para seguimiento confiable
keywords:
  - protocolo CanTrack 10000mAh
  - CanTrack 10000mAh GPS
  - protocolo CanTrack GF60
  - protocolo CanTrack Plaspy
  - protocolo de seguimiento CanTrack
  - compatibilidad GPS CanTrack
  - protocolo de dispositivo Plaspy
  - soporte rastreador GPS Plaspy
  - protocolo rastreador magnético de activos
  - protocolo de rastreo vehicular CanTrack
---

# CanTrack - Protocolo 10000mAh

Esta página describe el contexto público del protocolo para usar el rastreador GPS magnético CanTrack 10000mAh (serie GF60) con la plataforma Plaspy. Se centra en las consideraciones de comunicación y conexión relevantes al integrar este dispositivo en Plaspy, empleando únicamente información pública no sensible que facilite la configuración y validación.

Plaspy utiliza parámetros de conexión compartidos para sus dispositivos compatibles y detecta automáticamente los protocolos cuando los equipos están configurados para reportar a su endpoint. El comportamiento exacto y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía aclara el papel general del protocolo y las expectativas de conexión más que documentar detalles internos del firmware.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo define cómo el rastreador se identifica, reporta posición y estado, y envía alarmas y telemetría a un servidor como Plaspy. Para la serie GF60 esto implica el uso de datos celulares para subir posiciones GPS, evento de batería y alarmas, de modo que Plaspy pueda mostrar ubicación en tiempo real, rutas históricas y alertas.

- Permite que el rastreador informe posiciones GPS, nivel de batería, alarmas por manipulación y vibración a Plaspy.
- Transporta información de identificación y estado para que Plaspy asocie los puntos con el registro de dispositivo correcto.
- Soporta modos de reporte configurables que equilibran actualizaciones en tiempo real con mayor tiempo de espera para conservar batería.
- Permite la configuración remota mediante SMS o comandos TCP/IP cuando está soportado, útil cuando la conectividad de datos es limitada.
- Proporciona el contexto de eventos que Plaspy necesita para generar alertas de geocercas, el historial de rutas y paneles de telemetría.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía sus primeros reportes a ese endpoint. En la mayoría de implementaciones, el dispositivo se apunta al endpoint de Plaspy y no es necesario seleccionar el protocolo manualmente dentro de la plataforma para la operación estándar.

- El dominio del servidor Plaspy es d.plaspy.com, que resuelve a la dirección pública del servidor.
- La IP del servidor Plaspy es 54.85.159.138, que es la dirección publicada para el envío de reportes.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y acepta cargas en ese puerto.
- El puerto que usa Plaspy es 8888 y acepta conexiones UDP y TCP en ese puerto.
- Cuando el rastreador está configurado para enviar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy recibirá los reportes y determinará automáticamente el protocolo.
- En el flujo de trabajo típico del usuario no es necesario seleccionar un protocolo manualmente en Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

La elección del transporte influye en cómo el rastreador abre la conexión a Plaspy y puede afectar la confiabilidad y la capacidad de respuesta. La serie GF60 soporta cargas celulares sobre TCP/IP y GPRS/4G, y el dispositivo puede configurarse para usar UDP o TCP para comunicarse con Plaspy según la configuración del rastreador y las condiciones de la red.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración del lado del servidor es consistente entre modelos.
- TCP ofrece cargas orientadas a conexión, mientras que UDP puede emplearse para reportes más ligeros cuando el firmware del dispositivo lo soporta.
- Verifique que el APN y el plan de datos celulares del dispositivo permitan conexiones salientes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar los comandos disponibles, los campos de los mensajes y el comportamiento de reporte entre versiones.
- Las revisiones de hardware o variantes regionales de la serie GF60 pueden implementar ligeras variaciones en los reportes o en las bandas soportadas.
- La selección del transporte es importante: un dispositivo configurado en UDP se comportará de forma distinta a uno en TCP; confirme el transporte elegido en la configuración del equipo.
- La configuración por SMS sigue siendo una alternativa práctica para APN y parámetros de servidor cuando la configuración por datos no está disponible en campo.
- Valide el comportamiento esperado de alarmas y sensores con la documentación del fabricante para la versión de firmware específica del dispositivo.
- Confirme los ajustes de energía y modos de reporte si depende de tiempos de espera prolongados para balancear vida útil de la batería y frecuencia de informes.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a asegurar una puesta en marcha fluida, un flujo de datos confiable y una resolución de problemas efectiva cuando el rastreador se usa con Plaspy. Saber cómo reporta el dispositivo y qué campos envía reduce suposiciones durante la integración y mejora la operación.

- Acelera la configuración inicial aclarando qué dirección de servidor y transporte debe usar el equipo para comunicarse con Plaspy.
- Reduce falsas alarmas y eventos perdidos al alinear los modos de reporte del dispositivo con las expectativas de monitoreo.
- Facilita la resolución de problemas de conectividad al confirmar si el equipo usa TCP o UDP y si apunta a d.plaspy.com o a la IP de Plaspy.
- Mejora la gestión de batería al ajustar intervalos de reporte y modos a necesidades reales de operación.
- Ayuda a validar que los eventos de alarma y los datos de sensores enviados por el dispositivo serán reconocidos por los paneles y alertas de Plaspy.
- Sirve de referencia al coordinar actualizaciones de firmware o al seleccionar variantes de dispositivo para despliegues específicos.

## Por qué usar Plaspy con este protocolo

Usar la serie CanTrack 10000mAh GF60 con Plaspy ofrece a las organizaciones una combinación práctica de montaje magnético resistente y seguimiento y telemetría en la nube. Plaspy recibe posiciones GPS, alarmas y telemetría del rastreador y las presenta en vistas en tiempo real e históricas para gestión de flotas, procesos de recuperación y seguimiento prolongado de activos.

Plaspy ofrece un endpoint de servidor consistente, por lo que los dispositivos apuntados a d.plaspy.com o a 54.85.159.138 en el puerto 8888 se pueden gestionar sin cambios de puerto por dispositivo, y la plataforma detecta automáticamente el protocolo del rastreador una vez que este comienza a reportar. Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos CanTrack visite https://www.plaspy.com. Verifique siempre los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las instrucciones de configuración más recientes con el fabricante en https://www.cantrackgps.com/ ya que el soporte del protocolo y las implementaciones de los equipos pueden cambiar con el tiempo.
