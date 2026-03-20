---
slug: /lk_gps/lk660/protocol
id: lk660-protocol
sidebar_label: Protocol
title: LK-GPS - LK660 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para compatibilidad del LK660 con Plaspy, incluye ajustes de conexión y notas de integración
keywords:
  - protocolo LK GPS LK660
  - protocolo GPS LK660
  - protocolo de comunicación LK660
  - protocolo de seguimiento LK660
  - compatibilidad LK GPS Plaspy
  - integración del dispositivo LK660
  - reportes de telemetría LK660
  - protocolo rastreador personal
  - protocolo de dispositivo Plaspy
  - guía protocolo rastreador GPS
---

# LK-GPS - Protocolo LK660

Esta página describe el contexto público del protocolo para usar el rastreador LK-GPS LK660 con la plataforma Plaspy. Se enfoca en cómo el dispositivo envía telemetría de ubicación y eventos a Plaspy, los puntos de conexión utilizados para el reporte y consideraciones prácticas de integración sin exponer detalles privados de implementación.

El LK660 es un rastreador personal 2G compacto que combina posicionamiento GPS y LBS A-GPS con funciones como detección de caídas, SOS con un solo toque y voz bidireccional. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante para detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del LK660 es el mecanismo por el cual el dispositivo se identifica ante un servidor, envía actualizaciones periódicas de ubicación y transmite información de eventos como pulsaciones de SOS, alarmas por caída y transiciones de geocerca. Para la integración con Plaspy, la función clave del protocolo es proporcionar telemetría y marcadores de eventos con un formato fiable que la plataforma pueda procesar y asociar a los registros del dispositivo.

- Permite la identificación del dispositivo y envíos regulares de telemetría para que Plaspy asocie posiciones al equipo LK660 correcto.
- Transmite notificaciones de eventos como SOS, detección de caídas y alertas de geocerca que Plaspy mostrará a los usuarios.
- Incluye fuentes de ubicación como GPS y LBS para que Plaspy pueda presentar un posicionamiento combinado en el mapa.
- Permite intervalos de reporte configurables para equilibrar la rapidez de actualización con el consumo de batería y así lograr mayor autonomía.
- Soporta mecanismos de configuración remota sencillos que se utilizan para cambios de ajustes y diagnósticos cuando el fabricante lo permite.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un endpoint compartido y detecta automáticamente qué protocolo de rastreador está usando un dispositivo cuando este reporta a la plataforma. Esto significa que un LK660 correctamente configurado normalmente no requiere selección manual de protocolo dentro de Plaspy; el servidor reconoce y asocia la telemetría entrante con el modelo de dispositivo y el registro de cuenta.

- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y centraliza la telemetría entrante.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no es necesario seleccionar el protocolo manualmente si el dispositivo apunta al endpoint correcto.
- La configuración adecuada del dispositivo para reportar al endpoint de Plaspy es el requisito principal para la detección e ingestión automática.
- Si un dispositivo no se registra o no aparece, verifique la conectividad de red, los ajustes de dirección del servidor en el dispositivo y que el firmware del equipo soporte los modos de reporte estándar.

## Transporte y contexto de conexión

El LK660 puede configurarse para enviar telemetría sobre capas de transporte comunes en rastreadores celulares. Para Plaspy, la plataforma acepta tanto reportes UDP como TCP en el mismo puerto, lo que permite flexibilidad según el firmware del dispositivo y las condiciones de red.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888 según soporte del equipo y preferencia del operador.
- El equipo puede apuntar al dominio de reporte de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota y reduce errores de configuración.
- Factores de red como la cobertura 2G, la configuración del APN y la resolución DNS pueden afectar la capacidad del dispositivo para alcanzar el endpoint de Plaspy.
- Al cambiar el tipo de transporte o la frecuencia de reporte, considere los compromisos entre la fiabilidad de entrega y la duración de la batería.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden implementar funciones de reporte o comandos de configuración de forma distinta; confirme la revisión del firmware al validar el comportamiento.
- Las revisiones de hardware o los modelos específicos de región pueden modificar las bandas celulares soportadas y las opciones de configuración disponibles.
- Los métodos de configuración por parte del fabricante, como el aprovisionamiento de parámetros por SMS o la configuración remota, pueden afectar cómo se dirige el dispositivo a Plaspy.
- La selección de transporte entre UDP y TCP puede influir en el comportamiento de entrega, especialmente en redes con limitaciones.
- Valide siempre el reporte en vivo observando el dispositivo en Plaspy después de apuntarlo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- En caso de duda, consulte la documentación del fabricante para confirmar los parámetros de reporte soportados por su unidad LK660 específica.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del LK660 y el contexto de reporte ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y lograr un comportamiento operativo predecible cuando los dispositivos se gestionan desde Plaspy.

- Agiliza la resolución de problemas cuando falta telemetría o no aparecen eventos en Plaspy al revisar transporte, dirección del servidor y modo de reporte del dispositivo.
- Mejora la gestión de batería escogiendo intervalos de reporte que se ajusten a las necesidades operativas y a las capacidades de energía del dispositivo.
- Asegura el mapeo preciso de eventos del dispositivo como SOS y detección de caídas a las alertas de Plaspy para que las notificaciones lleguen a los contactos adecuados.
- Facilita la incorporación de flotas al usar el endpoint compartido de Plaspy y ajustes de puerto consistentes entre todos los dispositivos.
- Permite una comunicación más clara con el fabricante o integrador cuando anomalías de firmware o configuración requieran escalamiento.

## Por qué usar Plaspy con este protocolo

Usar el LK660 con Plaspy ofrece a organizaciones y cuidadores visibilidad continua y conciencia de eventos para despliegues de seguridad personal. La combinación de posicionamiento GPS más LBS, reporte de eventos como SOS y caídas, y la ingestión unificada de Plaspy permite monitorear estos dispositivos junto con otros activos de una flota en una sola plataforma.

Si desea conocer más sobre cómo Plaspy maneja el reporte de dispositivos y las funcionalidades de la plataforma, visite el sitio principal https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y orientación de implementación más actualizada, consulte al fabricante en https://www.lk-gps.com, ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
