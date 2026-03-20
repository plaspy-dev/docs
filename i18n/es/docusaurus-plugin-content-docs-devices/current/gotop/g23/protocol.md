---
slug: /gotop/g23/protocol
id: g23-protocol
sidebar_label: Protocol
title: GOTOP - G23 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del GOTOP G23 con reporte en tiempo real e integración de flotas en Plaspy
keywords:
  - protocolo GOTOP G23
  - protocolo GPS GOTOP G23
  - protocolo de comunicación GOTOP G23
  - protocolo de rastreo GOTOP G23
  - GOTOP G23 Plaspy
  - rastreador GPS GOTOP G23
  - compatibilidad GOTOP G23
  - rastreo de flotas GOTOP G23
  - protocolo rastreador GOTOP
  - telemetría GOTOP G23
---

# GOTOP - Protocolo G23

Esta página describe el contexto público del protocolo para usar el rastreador GPS mini wire GOTOP G23 con Plaspy. Explica cómo el dispositivo informa posiciones y eventos en términos generales, qué ajustes de conexión acepta Plaspy y cómo el conocimiento del protocolo facilita una integración exitosa sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la revisión de firmware, cambios de hardware o la implementación del fabricante, por lo que el funcionamiento en campo puede diferir entre unidades o versiones de firmware.

## Panorama del protocolo

El G23 utiliza un protocolo de reporte para enviar posiciones GNSS, posicionamiento basado en red celular y telemetría de eventos a un servidor remoto. El protocolo define cómo la unidad se identifica, cómo indica alarmas y entradas, y cómo se entregan las actualizaciones de posición para que una plataforma de flotas como Plaspy pueda asociar esos mensajes a ubicaciones, alertas y registros históricos.

- Permite la transmisión de datos GNSS y posicionamiento híbrido a un endpoint remoto para mapas en vivo y reproducción histórica.
- Transporta marcadores de eventos como estado de encendido ACC, corte de energía, exceso de velocidad, vibración y acciones de inmovilizador remoto para alertas y reglas.
- Permite que el dispositivo se identifique para que Plaspy pueda asociar los reportes entrantes con el equipo y la cuenta correctos.
- Proporciona un flujo consistente de telemetría que Plaspy mapea a paneles, notificaciones y flujos de reporte.
- Puede exponer campos de configuración o estado que faciliten la gestión del dispositivo cuando se accede mediante canales soportados.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes y detecta automáticamente el protocolo del rastreador según el patrón de conexión y datos recibidos. En la mayoría de las implementaciones, un G23 configurado correctamente reportará al endpoint de Plaspy y será reconocido sin necesidad de seleccionar manualmente el protocolo en la interfaz.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para conexiones de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma.
- Por lo general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El G23 soporta el reporte celular estándar en 2G y puede usar UDP o TCP para enviar mensajes a un servidor remoto, según la configuración del equipo y el firmware. Los detalles de conexión se centran en direccionamiento y transporte más que en el contenido de los mensajes; Plaspy acepta tráfico en un puerto compartido para simplificar el despliegue.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración del usuario.
- Plaspy usa el mismo puerto 8888 para todos los rastreadores compatibles para simplificar las implementaciones.
- La elección entre UDP o TCP suele ser una opción de configuración del dispositivo; revise los ajustes de firmware para el transporte preferido.
- Asegúrese de que el APN y la configuración de la SIM permitan conectividad de datos GSM para que los reportes lleguen al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes o las funciones disponibles; confirme las notas de la versión cuando tenga dudas.
- Variantes de hardware y revisiones de fabricación pueden introducir pequeñas diferencias en las entradas soportadas o en el reporte de eventos.
- La selección de transporte entre UDP y TCP es a menudo configurable y puede afectar los requisitos de firewall y red.
- Las configuraciones de servidor predeterminadas del fabricante pueden necesitar actualización para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Se recomienda validar el equipo en banco o en una cuenta de staging antes de un despliegue masivo para confirmar el comportamiento esperado.
- Consulte la documentación oficial del fabricante para comportamiento específico de firmware y comandos de configuración del dispositivo.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar una conexión fiable con Plaspy, acelera la resolución de problemas y reduce el tiempo hasta la plena operatividad de la flota. Tener claridad sobre lo que el dispositivo reporta y cómo se conecta mejora la eficiencia en la instalación y la fiabilidad a largo plazo.

- Agiliza la configuración inicial al confirmar servidor, APN y ajustes de transporte correctos.
- Facilita la interpretación de reportes de eventos como ACC, pérdida de energía y acciones del inmovilizador.
- Ayuda a diagnosticar problemas de conectividad aislando transporte y direccionamiento.
- Permite tomar decisiones informadas sobre actualizaciones de firmware y cambios de configuración.
- Reduce ambigüedades al mapear eventos del dispositivo a reglas y notificaciones en Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP G23 con Plaspy ofrece una solución práctica para organizaciones que requieren instalación discreta, posicionamiento híbrido confiable y reporte de eventos sencillo para visibilidad de flota y flujos antirobo. Plaspy consume la telemetría del G23 y la convierte en mapas en vivo, alertas y reportes históricos para que los equipos puedan monitorear activos, responder a incidentes y analizar datos operativos.

Learn more about Plaspy and how it integrates with devices like the G23 at https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation can change over time, so verify the latest device specific details on the official GOTOP website at https://www.gotop.cc/.
