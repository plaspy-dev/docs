---
slug: /jointech/jt709a/protocol
id: jt709a-protocol
sidebar_label: Protocol
title: Jointech - JT709A Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el cerrojo inteligente Jointech JT709A con Plaspy para rastreo GPS y telemetría de eventos
keywords:
  - protocolo Jointech JT709A
  - protocolo GPS Jointech JT709A
  - compatibilidad JT709A Plaspy
  - protocolo de comunicación JT709A
  - protocolo de rastreo JT709A
  - rastreador de seguridad Jointech para activos
  - rastreador GPS para cerraduras inteligentes
  - guía de protocolo para rastreadores GPS
  - integración de dispositivos Plaspy
  - seguimiento de precintos de contenedores
---

# Jointech - Protocolo JT709A

Esta página describe el contexto público del protocolo para usar el cerrojo electrónico inteligente Jointech JT709A con Plaspy. Se centra en cómo el JT709A comunica posiciones, eventos y estados a Plaspy y qué aspectos considerar durante la integración para flujos de trabajo de rastreo y seguridad de activos. El nivel técnico aquí es intencionalmente de alto nivel y está pensado para ayudar a equipos de operaciones, integradores y personal técnico a comprender el rol de la comunicación sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo para el JT709A puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe validar el comportamiento del dispositivo frente a la documentación del fabricante y la configuración real del firmware al configurar el reporte a Plaspy.

## Visión general del protocolo

El protocolo de comunicación del JT709A es el mecanismo por el cual el dispositivo envía posiciones GNSS y LBS, eventos de desbloqueo y manipulación, telemetría de batería y salud, y otras actualizaciones de estado a un servidor remoto como Plaspy. En términos prácticos, el protocolo define cómo el dispositivo se identifica, informa eventos y mantiene a Plaspy sincronizado con el estado del activo para monitoreo y alertas.

- Permite que el JT709A transmita actualizaciones de posicionamiento GNSS, BeiDou y basadas en celda a un sistema backend.
- Transporta telemetría de eventos como acciones de desbloqueo, alertas por manipulación, accesos vía Bluetooth o RFID y estado de batería.
- Proporciona información de identidad y sesión que permite a Plaspy asociar los mensajes entrantes con un dispositivo y activo específicos.
- Soporta comportamiento de transporte configurable para que los dispositivos puedan reportar hacia un endpoint de Plaspy.
- Permite a Plaspy ingerir flujos de eventos para geocercas, cadena de custodia y alertas sin requerir cambios en el dispositivo para cada cliente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y utiliza sus mecanismos de detección para interpretar los mensajes entrantes. En la mayoría de los casos, un JT709A correctamente configurado que informe al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy usa un único endpoint compartido para reportes de dispositivos en d.plaspy.com.
- La dirección IP del servidor Plaspy disponible para la configuración del dispositivo es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto; el puerto común de reporte es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy.
- Si un dispositivo está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, la selección manual del protocolo en Plaspy normalmente no es necesaria.

## Transporte y contexto de conexión

La elección de transporte y los ajustes de conexión determinan cómo los mensajes del JT709A llegan a Plaspy. El JT709A puede configurarse para usar opciones de transporte estándar soportadas por muchos rastreadores, y Plaspy acepta reportes enviados a su endpoint y puerto compartidos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y preferencias de configuración.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el reporte.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración entre modelos.
- Seleccionar UDP puede reducir la sobrecarga y es común para reportes pequeños y frecuentes, mientras que TCP puede usarse cuando se requiere entrega de sesión más fiable según las capacidades del dispositivo.
- Asegúrese de que el acceso de salida desde el entorno del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 esté permitido por cortafuegos o configuraciones del operador.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los campos soportados o el comportamiento de reporte de eventos; siempre confirme la compatibilidad con la versión de firmware del dispositivo en campo.
- Las revisiones de hardware o las variantes del JT709A pueden incluir radios o sensores distintos que afecten la telemetría y los tipos de eventos disponibles.
- La configuración del fabricante puede permitir la selección entre reporte por UDP y TCP; elija el transporte que coincida con su red y las expectativas de Plaspy.
- Algunos tipos de eventos, como desbloqueo por Bluetooth o acceso RFID, pueden requerir emparejamiento o configuración en el dispositivo además de los ajustes de reporte al servidor.
- El enfoque de puerto único de Plaspy hace que la configuración de red sea consistente, pero confirme que el dispositivo esté configurado para usar el endpoint y puerto de Plaspy.
- Valide la integración enviando reportes de prueba desde el dispositivo y confirmando que los eventos aparecen en Plaspy según lo esperado.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del JT709A ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y mantener estabilidad operativa a largo plazo al usar Plaspy. Saber qué reportará el dispositivo y cómo se conecta reduce errores de configuración y favorece un comportamiento predecible en despliegues en producción.

- Agiliza la configuración inicial al alinear los ajustes de reporte del dispositivo con el endpoint y el transporte de Plaspy.
- Reduce el tiempo de resolución de problemas al acotar los fallos a transporte, red o diferencias de firmware.
- Ayuda a los equipos de operaciones a interpretar la telemetría de eventos entrantes y correlacionar eventos de desbloqueo o manipulación con el historial de ubicaciones.
- Permite planear intervalos de energía y reporte para alinear los objetivos de duración de batería con las necesidades de rastreo.
- Apoya la gestión del ciclo de vida al aclarar cómo las actualizaciones de firmware pueden afectar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Combinar el JT709A con Plaspy ofrece una solución enfocada para seguridad de carga y activos, donde tanto la precisión de la ubicación como la fidelidad de los eventos son importantes. El posicionamiento triple y la telemetría de eventos del JT709A complementan bien las funciones de alertas, geocercas e informes de Plaspy, proporcionando a equipos de logística y seguridad visibilidad accionable sobre el estado del precinto y los movimientos de los activos.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el JT709A visite https://www.plaspy.com. Para los detalles específicos más recientes del protocolo, avisos de firmware e instrucciones del fabricante, verifique la información actual en el sitio de Jointech en https://www.jointcontrols.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben confirmarse con la documentación oficial del fabricante.
