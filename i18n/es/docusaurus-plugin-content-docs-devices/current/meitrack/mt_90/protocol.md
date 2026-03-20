---
slug: /meitrack/mt_90/protocol
id: mt_90-protocol
sidebar_label: Protocol
title: Meitrack - MT-90 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Meitrack MT-90 y cómo comunica con Plaspy usando los mismos ajustes de conexión
keywords:
  - protocolo Meitrack MT-90
  - protocolo GPS Meitrack MT-90
  - comunicación rastreador MT-90
  - protocolo MT-90 Plaspy
  - protocolo rastreador personal Meitrack
  - compatibilidad rastreadores GPS Plaspy
  - informes dispositivo MT-90
  - guía protocolo Meitrack
  - guía integración MT-90
  - compatibilidad seguimiento Meitrack
---

# Meitrack - Protocolo MT-90

Esta página describe el contexto público del protocolo para usar el rastreador personal Meitrack MT-90 con Plaspy. Explica a alto nivel cómo se comunica el MT-90, el papel del protocolo de reporte en la integración del dispositivo y qué debe considerar al configurar el equipo para enviar ubicaciones y eventos a Plaspy. El MT-90 V4 es un rastreador personal compacto con mayor autonomía de batería, alarma por caída, audio bidireccional y clasificación IP65, lo que lo hace apto para varios casos de monitoreo.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información pública y segura sobre conexión y compatibilidad en lugar de detalles específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación de un rastreador define cómo el dispositivo se identifica, reporta posición y estado, y entrega alarmas y telemetría a un servidor. En el caso del MT-90, estas funciones permiten a Plaspy recibir actualizaciones periódicas de ubicación, alarmas de emergencia como caída o inmovilidad, y estado básico del dispositivo para monitoreo e informes históricos.

- Permite la identificación del dispositivo para que Plaspy asocie los reportes entrantes con la unidad MT-90 correcta.
- Transporta datos periódicos de GPS y marcas de tiempo que Plaspy usa para mapas e historial.
- Transmite señales de alarma y eventos como caída, batería baja y alertas por movimiento para activar notificaciones.
- Indica el estado de audio o escucha remota cuando el equipo lo soporta y está configurado.
- En entornos donde el fabricante lo soporta, permite comandos de configuración y consultas remotas desde el servidor.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes entrantes de muchos modelos de rastreadores reduciendo la configuración manual para los usuarios. Cuando un MT-90 está correctamente apuntado al endpoint y puerto de Plaspy, la plataforma intenta identificar el protocolo del dispositivo automáticamente y procesa los datos de esa unidad.

- Plaspy recibe reportes de dispositivos en el dominio compartido d.plaspy.com.
- La plataforma también acepta conexiones directamente al servidor IP 54.85.159.138 cuando es necesario.
- Todos los dispositivos usan el mismo puerto en Plaspy, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que usted normalmente no necesita seleccionar el protocolo manualmente.
- Si el rastreador está configurado para reportar correctamente al endpoint de Plaspy, el dispositivo debería aparecer e identificarse sin selección adicional de protocolo dentro de Plaspy.

## Transporte y contexto de conexión

Los ajustes de transporte determinan cómo el MT-90 envía sus reportes a Plaspy y forman parte de la configuración del equipo. El MT-90 puede configurarse para usar UDP o TCP según el firmware del dispositivo y la preferencia del instalador.

- El MT-90 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los equipos pueden apuntar al servidor de Plaspy usando el nombre de dominio d.plaspy.com o la IP directa 54.85.159.138.
- El puerto 8888 se usa en todos los dispositivos soportados por Plaspy para ofrecer un punto de conexión uniforme.
- La elección entre UDP y TCP afecta el comportamiento de entrega a nivel de transporte, pero no cambia cómo Plaspy detecta el protocolo.
- Asegúrese de que el APN del dispositivo y las configuraciones de red saliente permitan conexiones al endpoint de Plaspy para un reporte confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar cómo un dispositivo Meitrack implementa ciertos mensajes o funciones opcionales, por lo que el comportamiento puede variar entre unidades MT-90.
- Las variantes de hardware y los modelos regionales a veces incluyen u omiten características como sensores externos o audio, lo cual afecta lo que el protocolo reporta.
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con las condiciones de la red.
- El soporte de comandos por servidor del fabricante y las capacidades de configuración remota dependen del firmware específico del MT-90.
- Siempre valide una unidad individual enviando reportes de prueba al endpoint de Plaspy y confirmando que aparece correctamente en la plataforma.
- Consulte la documentación oficial del fabricante al verificar el nivel de funciones para una compilación de firmware concreta.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el MT-90 con un servidor ayuda a asegurar una configuración fluida, un monitoreo confiable y una resolución de problemas más rápida cuando surgen inconvenientes. Comprender de forma práctica el protocolo de reporte y el contexto de conexión reduce conjeturas y mejora el tiempo de actividad.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint y puerto correctos de Plaspy para reportes consistentes.
- Facilita la interpretación del comportamiento del equipo, como intervalos de reporte, disparo de alarmas y condiciones de desconexión.
- Agiliza la resolución de incidentes al acotar si el problema es de transporte, configuración o dependiente del firmware.
- Colabora en la planificación de estrategias de batería y reporte para casos de uso que requieren largos tiempos en espera.
- Aporta información para decidir si se necesitan accesorios adicionales o configuraciones para soportar funciones requeridas.

## Por qué usar Plaspy con este protocolo

Usar el Meitrack MT-90 con Plaspy ofrece una forma directa de convertir los reportes del dispositivo en vistas de ubicación accionables, alertas y trazas históricas. La combinación del MT-90 —larga duración de batería, alarma por caída y audio bidireccional— es adecuada para seguridad personal y monitoreo de campo, y Plaspy recibe y normaliza los reportes entrantes para su uso en rastreo en vivo y flujos de trabajo de reporte.

Para saber más sobre Plaspy y cómo la plataforma procesa los reportes de rastreadores visite https://www.plaspy.com. Verifique la documentación específica del dispositivo, el comportamiento del firmware y los detalles de implementación más recientes en el sitio del fabricante https://www.meitrack.com/ ya que el soporte de protocolo y las funciones del firmware pueden cambiar con el tiempo.
