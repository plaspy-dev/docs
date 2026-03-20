---
slug: /autoseeker/at_23/configuration
id: at_23-configuration
sidebar_label: Configuration
title: Autoseeker - AT-23 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-23 para usar con Plaspy, con ajustes de servidor y flujo de configuración
keywords:
  - Configuración Autoseeker AT-23
  - Instalación Autoseeker AT-23 para Plaspy
  - Configuración de servidor AT-23
  - Configuración GPS AT-23
  - Integración Autoseeker Plaspy
  - Instalación rastreador de vehículo AT-23
  - Configuración inmovilizador relé AT-23
  - Guía configuración rastreador 2G
  - Seguimiento de flotas AT-23 Plaspy
  - Configuración plataforma rastreador GPS
---

# Autoseeker - Configuración del AT-23

Esta página documenta el contexto público de configuración para usar el rastreador Autoseeker AT-23 con Plaspy. Incluye los ajustes de servidor y conectividad que Plaspy requiere, lo que debe verificar antes de comenzar y un flujo de trabajo práctico para configurar el dispositivo y que reporte correctamente en Plaspy. La información aquí se centra en los pasos comunes y públicos necesarios para apuntar el AT-23 a Plaspy y validar que los datos telemáticos y de eventos aparezcan en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y las utilidades del proveedor. Use esta página para preparar y aplicar los ajustes de Plaspy y consulte la documentación o herramientas de Autoseeker para pantallas o comandos específicos del dispositivo cuando sea necesario.

## Resumen de configuración

El objetivo de la configuración es dejar el AT-23 listo para enviar de forma fiable ubicación, estado del relé y mensajes de evento a Plaspy para visualización en tiempo real y reproducción histórica. Las tareas típicas de instalación incluyen apuntar el dispositivo al endpoint de Plaspy, seleccionar un transporte, guardar la configuración y confirmar que los datos llegan a la plataforma.

- Configure el rastreador para reportar al servidor Plaspy y que los mensajes de ubicación y eventos lleguen a la plataforma.
- Seleccione el protocolo de transporte que soporte el dispositivo y Plaspy, UDP o TCP, y ajuste el puerto compartido de Plaspy.
- Valide la conectividad celular y el estado de la SIM para que el AT-23 pueda alcanzar el servidor Plaspy.
- Guarde y aplique los ajustes en el rastreador y, si es necesario, reinicie el dispositivo para comenzar el reporte.
- Confirme la visibilidad del dispositivo en los paneles de Plaspy y verifique el registro de eventos como acciones del relé, alertas de alimentación y eventos de movimiento.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Detección automática de protocolo en Plaspy

Estos valores son los detalles públicos del endpoint de Plaspy que se deben usar al apuntar el AT-23 a Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se comunique con el servidor.

## Requisitos típicos antes de la configuración

- Confirme que el AT-23 esté alimentado y cableado correctamente según la guía de instalación de Autoseeker.
- Instale y active una tarjeta SIM 2G compatible si su dispositivo y operador la requieren.
- Tenga acceso al método de configuración del fabricante, como una herramienta de configuración, comandos SMS o interfaz web provistos por Autoseeker.
- Conozca los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888 antes de iniciar la configuración.
- Prepare un procedimiento de prueba para validar que el dispositivo aparezca en Plaspy después de la configuración, como un viaje de prueba o la activación de un evento.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el AT-23 envía su posición, telemetría y datos de eventos al endpoint y puerto del servidor Plaspy para que los operadores puedan monitorear los activos desde los paneles de Plaspy. El dispositivo utiliza conectividad celular 2G estándar para reenviar mensajes al host configurado y Plaspy identificará el protocolo del rastreador automáticamente una vez que reciba datos.

- El rastreador informa soluciones GNSS y eventos de movimiento a d.plaspy.com en el puerto 8888.
- Los cambios de estado del relé y los eventos de inmovilizador se envían a Plaspy y se registran en la línea de tiempo del dispositivo.
- Las alertas de alimentación y batería se reenvían al servidor Plaspy para monitoreo y notificaciones.
- Plaspy recibe datos por UDP o TCP según la configuración del dispositivo y detectará el protocolo de forma automática.
- Una vez que el reporte comienza, los paneles de Plaspy ofrecen mapeo en vivo, reproducción de historial y alertas basadas en eventos.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de Autoseeker adecuado para el modelo AT-23 y su firmware.
2. En los ajustes de servidor o host remoto del dispositivo introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de destino en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador o las condiciones de red.
5. Aplique o guarde la configuración en la herramienta o interfaz del dispositivo Autoseeker.
6. Reinicie el AT-23 si el fabricante lo indica para que los nuevos ajustes de red surtan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando el panel de Plaspy y confirmando que llegan mensajes de ubicación y eventos.

## Ejemplos de comandos de configuración

La documentación del AT-23 y las herramientas del proveedor determinan los comandos o menús exactos de configuración. El método puede variar según el firmware y el conjunto de herramientas del fabricante, por lo que la sintaxis no es universal. Use la utilidad de configuración de Autoseeker o el manual oficial del dispositivo para aplicar los valores del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888, y para elegir UDP o TCP según sea necesario.

Si su dispositivo usa configuración por SMS o comandos textuales proporcionados por Autoseeker, consulte la lista oficial de comandos de Autoseeker para la sintaxis y el orden exactos. Siempre preserve los marcadores de posición de las plantillas del fabricante, como los valores APN cuando estén presentes, y sustitúyalos por los datos de su operador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar dónde se presentan los ajustes y la sintaxis exacta de los comandos; siempre revise las notas de firmware del AT-23.
- Elegir UDP reduce la sobrecarga de conexión, pero TCP puede ofrecer una entrega más fiable en redes que lo soporten; Plaspy admite ambos y detectará el protocolo automáticamente.
- Las prácticas del instalador varían según el tipo de vehículo y el lugar de instalación; asegúrese de que las antenas y las conexiones de alimentación cumplan las recomendaciones de Autoseeker para una recepción GNSS y celular fiable.
- Mantenga un registro del IMEI del dispositivo y de cualquier identificador de aprovisionamiento para poder emparejar el equipo físico con la entrada del panel de Plaspy tras la configuración.
- Confirme el estado de la batería de respaldo opcional o los ajustes de reporte de energía si depende de alertas de baja potencia o manipulación en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el AT-23 con Plaspy ofrece a los administradores de flotas y operadores de activos una vía sencilla para combinar un hardware compacto de rastreo vehicular con la visibilidad de la plataforma. Cuando el AT-23 apunta a Plaspy usando los ajustes de servidor compartidos, el dispositivo proporciona ubicación, estado del relé y mensajes de eventos que Plaspy puede usar para geocercas, reproducción histórica y alertas automatizadas que apoyan la supervisión operativa y los flujos de trabajo antirobo.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware behavior, and manufacturer details verify information on the Autoseeker site https://autoseekergps.com/
