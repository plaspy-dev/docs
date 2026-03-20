---
slug: /cantrack/yg119/protocol
id: yg119-protocol
sidebar_label: Protocol
title: CanTrack - YG119 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo CanTrack YG119 y cómo comunica con Plaspy para rastreo en tiempo real y alertas
keywords:
  - protocolo CanTrack YG119
  - protocolo GPS CanTrack YG119
  - protocolo de comunicación YG119
  - protocolo de rastreo YG119
  - compatibilidad CanTrack Plaspy
  - protocolo para rastreador de mascotas
  - rastreador GPS para perros de caza
  - compatibilidad de dispositivo Plaspy
  - protocolo de rastreo en tiempo real
  - protocolo de reporte de rastreador
---

# CanTrack - Protocolo YG119

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack YG119 con la plataforma Plaspy. Se centra en cómo el dispositivo reporta posición y estado a Plaspy y en las expectativas a nivel de conexión que son relevantes para un reporte confiable, alertas y telemetría histórica, sin exponer detalles privados de implementación.

El YG119 es un rastreador compacto y recargable diseñado para perros de caza y mascotas activas. Ofrece reportes por movimiento o por intervalos, escucha remota de voz, un zumbador audible, alertas por geocerca y advertencias de batería baja. Plaspy usa un conjunto de ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según versiones de firmware, revisiones de hardware y configuraciones del fabricante.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del YG119 define cómo el rastreador se identifica, envía actualizaciones de ubicación y estado, y reporta eventos como cruces de geocerca o alertas de batería baja. Para integrarse con Plaspy, el protocolo debe proporcionar telemetría oportuna y parsable para que la plataforma muestre ubicaciones en tiempo real, notificaciones e historial a los usuarios.

- Trasmite posiciones GNSS y estado del dispositivo para que Plaspy muestre ubicaciones en vivo y recorridos históricos.
- Envía marcadores de eventos como activaciones de geocerca, activaciones del zumbador y advertencias de batería baja para generar alertas.
- Incluye información de identidad y sesión que permite a Plaspy asociar los datos entrantes con el registro de dispositivo correcto.
- Soporta modos de reporte configurables para que reportes activados por movimiento o por intervalo ahorren batería manteniendo tasas de actualización útiles.
- Opera sobre transporte IP estándar para que el dispositivo pueda enviar datos al endpoint compartido de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir reportes de dispositivos en un endpoint compartido y determinar automáticamente el protocolo del rastreador usado por un dispositivo que reporta. Cuando un YG119 está correctamente apuntado a Plaspy, la plataforma matchea los datos entrantes con identificadores de dispositivo conocidos y aplica el manejo apropiado sin requerir selección manual del protocolo en la mayoría de los casos.

- Plaspy escucha en un único puerto común el tráfico de dispositivos y mapea los flujos entrantes a los registros de dispositivo.
- La plataforma detecta automáticamente el protocolo del rastreador a partir del comportamiento de reporte y la identidad del dispositivo.
- En general, usted no necesita seleccionar un protocolo específico dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.
- Una configuración correcta del dispositivo asegura que Plaspy pueda asociar los mensajes con el YG119 e interpretar los eventos.
- Si necesita solucionar problemas, verifique que el dispositivo esté configurado para reportar al endpoint correcto de Plaspy y que el identificador coincida con el registro en Plaspy.

## Transporte y contexto de conexión

El YG119 transmite telemetría a través del enlace celular usando transporte IP estándar. Plaspy acepta modos de transporte comunes y usa un único puerto para todos los dispositivos soportados, por lo que la configuración es consistente y sencilla para instaladores y usuarios.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el entorno del operador.
- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la plataforma también acepta reportes al IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que una única configuración de puerto de salida puede servir múltiples modelos de rastreador.
- Elija UDP o TCP en el dispositivo conforme a la documentación del rastreador y a las consideraciones de fiabilidad de la red.
- Confirme la configuración de APN y la conectividad celular en el dispositivo para que el transporte IP hacia el endpoint de Plaspy tenga éxito.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo se reportan eventos y campos; verifique la versión de firmware del rastreador al validar el comportamiento.
- Las revisiones de hardware o variantes regionales pueden alterar bandas soportadas, preferencias de transporte o funcionalidades disponibles.
- Los menús de configuración del fabricante pueden exponer la selección de transporte y opciones de intervalo de reporte que afectan la frecuencia con la que Plaspy recibe actualizaciones.
- Algunas funciones, como la escucha remota de voz y los eventos del zumbador, se comunican como eventos en lugar de transmisiones continuas y pueden variar en su representación según el firmware.
- Valide siempre un dispositivo de muestra de extremo a extremo con Plaspy tras la configuración para confirmar que la telemetría y las alertas esperadas se reciben.
- Para integraciones avanzadas o necesidades de telemetría personalizada, revise tanto los ajustes del dispositivo como el mapeo en Plaspy para asegurar que los campos se interpreten según lo previsto.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a asegurar una configuración exitosa, un comportamiento predecible en campo y una solución de problemas eficiente cuando el rastreo es crítico. Entender qué envía el rastreador y cómo lo recibe Plaspy reduce el tiempo de puesta en marcha y mejora la fiabilidad operativa.

- Asegura una configuración correcta del dispositivo para que los reportes lleguen a Plaspy con prontitud y se asocien al dispositivo correcto.
- Facilita el diagnóstico de problemas comunes como actualizaciones de ubicación faltantes, mapeo incorrecto de eventos o conectividad intermitente.
- Permite tomar decisiones informadas sobre intervalos de reporte y detección de movimiento para equilibrar la vida útil de la batería y la frescura de la ubicación.
- Aclara cómo aparecen los eventos del lado del dispositivo en Plaspy para que usted pueda configurar alertas y flujos de trabajo adecuadamente.
- Ayuda al mantenimiento a largo plazo, haciendo más sencillo evaluar el impacto de actualizaciones de firmware y cambios de hardware sobre el reporte.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack YG119 con Plaspy ofrece una solución práctica para equipos y propietarios que necesitan visibilidad en tiempo real, alertas confiables y rastreo histórico para mascotas y animales de trabajo. Los reportes activados por movimiento y por intervalos del YG119, junto con la detección automática de protocolo de Plaspy y su arquitectura de endpoint único, simplifican el despliegue y reducen la carga de configuración para los operadores en campo.

Para conocer más sobre cómo funciona Plaspy con rastreadores compatibles y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y variantes regionales, consulte la documentación del fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo y deben verificarse frente a fuentes oficiales.
