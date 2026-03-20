---
slug: /careu/ut1/protocol
id: ut1-protocol
sidebar_label: Protocol
title: CAREU - UT1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el CAREU UT1 con el servidor Plaspy y guía de conexión
keywords:
  - protocolo CAREU UT1
  - protocolo GPS CAREU UT1
  - compatibilidad CAREU UT1 Plaspy
  - protocolo de rastreo CAREU UT1
  - rastreador de activos CAREU Plaspy
  - protocolo de telemetría UT1
  - protocolo de comunicación UT1
  - rastreador LTE CAREU UT1
  - protocolo de dispositivo CAREU UT1
  - compatibilidad de dispositivos Plaspy
---

# CAREU - Protocolo UT1

Esta página presenta el contexto público del protocolo para usar el rastreador GPS CAREU UT1 con Plaspy. Explica a alto nivel cómo se comunica el dispositivo con el endpoint de ingestión de Plaspy y qué debe esperar al integrar dispositivos UT1 en un despliegue de Plaspy. El énfasis está en la conexión y el contexto del protocolo, no en implementaciones de bajo nivel ni en detalles propietarios.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página ofrece orientación práctica y segura, y recomienda verificar la documentación del fabricante.

## Visión general del protocolo

El protocolo de reporte UT1 permite al dispositivo enviar ubicación, telemetría, eventos y datos de sensores a un backend como Plaspy. A grandes rasgos, el protocolo proporciona identificación del equipo, reportes periódicos y por eventos, y soporte para comandos y configuración remota cuando el dispositivo y el servidor lo permiten.

- Permite que el UT1 transmita datos GPS y telemetría a Plaspy para seguimiento en tiempo real y registro histórico.
- Proporciona identificación y estado del dispositivo para que Plaspy asocie los mensajes entrantes con un rastreador específico.
- Transporta notificaciones de eventos como violaciones de geocerca, manipulación, pérdida de alimentación y eventos del acelerómetro para alertas y flujos de trabajo.
- Soporta comandos remotos y procesos de configuración cuando están habilitados por el dispositivo y las herramientas del fabricante.
- Permite reenviar datos de sensores e interfaces como RS‑232, 1‑Wire y CAN opcional a Plaspy para obtener información de la flota.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint y puerto compartido, y está diseñado para detectar automáticamente el protocolo de reporte usado por los dispositivos entrantes. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el UT1 está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy escucha conexiones de dispositivos en el dominio d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el lado del dispositivo y la accesibilidad del servidor.
- Plaspy detectará automáticamente el protocolo del rastreador una vez que un mensaje correctamente formateado desde el UT1 llegue al servidor.
- Cuando un UT1 está configurado para reportar al endpoint de Plaspy, usted normalmente no necesita elegir una opción de protocolo en la interfaz de Plaspy.
- Si surgen problemas de detección, las diferencias en la configuración del fabricante o en el firmware suelen ser las causas más comunes y deben revisarse.

## Transporte y contexto de conexión

El UT1 puede configurarse para usar transporte UDP o TCP para comunicarse con un backend, según el firmware del dispositivo y las necesidades del despliegue. Plaspy admite ambos modos de transporte en el puerto compartido, de modo que usted puede elegir la mejor opción para cobertura y confiabilidad.

- Los dispositivos pueden enviarse al host d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica los despliegues en flotas mixtas.
- TCP suele seleccionarse para entrega más fiable cuando el dispositivo y la red lo soportan, mientras que UDP puede utilizarse para reportes de baja sobrecarga en algunos escenarios.
- Asegúrese de que el APN del dispositivo y los permisos de red permitan conexiones salientes hacia el endpoint de Plaspy en el transporte configurado.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre revisiones UT1 pueden cambiar campos de mensaje, funciones opcionales o el comportamiento del transporte; confirme siempre la versión de firmware en uso.
- Las variantes de hardware y las interfaces opcionales, como CAN o E/S adicionales, pueden exponer telemetría distinta y requerir validación separada.
- Las configuraciones del fabricante, incluidos APN, intervalos de reporte y modo de transporte, afectan la forma en que el UT1 se comunica con Plaspy.
- Algunas funciones como FOTA, configuración por FTP o canales de comandos propietarios dependen de servidores o flujos de trabajo del fabricante y podrían no gestionarse directamente desde Plaspy.
- Si cambia entre UDP y TCP, pruebe las rutas de reporte y de comandos para confirmar la entrega y los acuses de recibo del servidor cuando estén disponibles.
- Valide la compatibilidad y los ajustes recomendados contra la documentación oficial de CAREU para la revisión de hardware y firmware específica del UT1.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del UT1 y el contexto de conexión ayuda a garantizar una inicialización confiable, una ingesta de telemetría precisa y una resolución eficaz de problemas al usar Plaspy. Saber qué transporte y ajustes utiliza el dispositivo reduce el tiempo de puesta en marcha y facilita el diagnóstico de problemas de conectividad o de mapeo de datos.

- Ayuda a confirmar que el dispositivo apunta al endpoint y transporte correctos de Plaspy para reportes fiables.
- Facilita la resolución de problemas cuando la telemetría, eventos o comandos no aparecen en los paneles de Plaspy.
- Aclara qué campos de datos y eventos estarán disponibles en Plaspy según las interfaces del dispositivo y el firmware.
- Apoya la planificación de flujos de gestión remota como configuración remota y actualizaciones de firmware.
- Mejora la confiabilidad a largo plazo al señalar qué cambios de firmware o configuración afectan el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

El CAREU UT1 combinado con Plaspy ofrece una solución robusta para organizaciones que necesitan seguimiento en tiempo real resiliente y telemetría completa para maquinaria pesada, remolques, cajas fuertes y activos industriales. Plaspy ingiere la posición, los sensores y los eventos del UT1 para que los equipos puedan monitorear la ubicación de los activos, responder a alarmas y analizar la actividad histórica para operaciones y seguridad.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el CAREU UT1, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, avisos de firmware y guías de configuración más recientes, consulte al fabricante en https://www.systech-iot.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
