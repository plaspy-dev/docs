---
slug: /gotop/g08/protocol
id: g08-protocol
sidebar_label: Protocol
title: GOTOP - G08 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el GOTOP G08 con Plaspy para seguimiento de flotas y reportes de alarmas fiables
keywords:
  - protocolo GOTOP G08
  - protocolo GPS GOTOP G08
  - protocolo de comunicación GOTOP G08
  - protocolo de rastreo GOTOP G08
  - compatibilidad GOTOP G08 Plaspy
  - protocolo rastreador GPS GOTOP
  - protocolo rastreador OBD
  - protocolo rastreador Plaspy
  - seguimiento de flota G08
  - integración telemetría G08
---

# GOTOP - Protocolo G08

Esta página describe el contexto público del protocolo para usar el rastreador OBD GOTOP G08 con Plaspy. Se enfoca en cómo el dispositivo reporta telemetría y eventos de alarma a Plaspy en términos no sensibles y neutrales para la implementación, de modo que administradores de flota e integradores entiendan cómo conectar y validar la compatibilidad básica.

El G08 es un rastreador OBD II plug and play optimizado para instalaciones en vehículos. La integración con Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador automáticamente. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda probar en campo y consultar la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del G08 define cómo la unidad reporta posiciones GPS, estado y eventos de alarma a un servicio de backend como Plaspy. Este protocolo permite al dispositivo identificarse, entregar datos de posición y eventos, y habilitar funciones de la plataforma como seguimiento en vivo y alertas, manteniéndose independiente de los detalles de transporte específicos.

- Permite la transmisión de posiciones GPS y BeiDou con fallback a LBS para que Plaspy muestre ubicación en vivo e historial.
- Envía eventos de alarma y estado como exceso de velocidad, movimiento, vibración y pérdida de alimentación para el procesamiento inmediato por las reglas de alerta de Plaspy.
- Transporta elementos de telemetría utilizados por Plaspy en paneles y análisis de flota, incluyendo identidad del dispositivo y estado de batería y alimentación.
- Ofrece un flujo de reportes coherente para que Plaspy pueda correlacionar eventos y mantener una línea de tiempo fiable del vehículo.
- Opera de forma que Plaspy pueda ingerir datos sin requerir la selección manual del protocolo cuando el dispositivo esté configurado para reportar a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los dispositivos configurados para reportar a Plaspy aparecerán sin selección manual de protocolo. Esta detección automática simplifica el despliegue para flotas que usan muchos modelos distintos.

- Plaspy escucha conexiones entrantes de dispositivos en un único endpoint público d.plaspy.com y en la IP de servidor correspondiente 54.85.159.138.
- Todos los dispositivos soportados usan el mismo puerto de reporte, por lo que no es necesario administrar asignaciones de puerto por cada dispositivo.
- Cuando un G08 está configurado para reportar al endpoint de Plaspy y hay conectividad de red disponible, Plaspy identificará el flujo del dispositivo y procesará la telemetría automáticamente.
- En despliegues típicos no es necesario que el usuario seleccione un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint de Plaspy.
- Si un dispositivo no aparece, verifique la configuración del equipo, la conectividad con el operador y los ajustes de firmware según la documentación del fabricante.

## Contexto de transporte y conexión

Los dispositivos G08 pueden configurarse para usar opciones comunes de transporte IP según el firmware y la configuración del operador. Entender el transporte y el endpoint usado por el dispositivo ayuda a asegurar la conectividad y facilita la resolución de problemas cuando una unidad deja de reportar.

- El G08 puede configurarse para enviar datos por UDP o TCP según el firmware y las opciones de configuración del dispositivo.
- Plaspy acepta tráfico de dispositivos tanto por UDP como por TCP en el puerto 8888, que es el puerto compartido usado por todos los dispositivos soportados por Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para reportes.
- Usar el modo de transporte correcto y el endpoint adecuado en la configuración del dispositivo es una causa común de conexiones exitosas a la primera.
- Condiciones de red como restricciones del operador y la configuración del APN pueden influir en si UDP o TCP es preferible para una entrega más confiable.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware entre series de producción pueden cambiar el tiempo de mensajes, los campos disponibles o las preferencias de transporte; revise las notas de firmware antes de un despliegue masivo.
- Las revisiones de hardware y las interfaces opcionales en una versión específica del G08 pueden afectar la disponibilidad de telemetría para ciertos sensores o entradas de alarma.
- Algunos operadores y configuraciones de APN pueden influir en si UDP o TCP ofrece resultados más fiables en su región.
- Plaspy detecta automáticamente el protocolo una vez que el tráfico llega al endpoint compartido, pero el dispositivo debe estar configurado correctamente para dirigir sus reportes a ese endpoint.
- Ajustes del fabricante como intervalos de reporte y disparadores de eventos modificarán la frecuencia y el contenido de los datos enviados a Plaspy.
- Valide cualquier cambio en la configuración del dispositivo o en el firmware en un vehículo de prueba controlado antes de un despliegue amplio.

## Por qué es importante entender el protocolo

Conocer cómo el G08 se comunica con Plaspy reduce el tiempo de configuración, simplifica la resolución de problemas y ayuda a mantener una telemetría de flota confiable durante la vida útil del dispositivo.

- Despliegues más rápidos porque los integradores pueden confirmar el endpoint y los ajustes de transporte antes de la instalación.
- Diagnóstico más ágil de problemas de conectividad validando dominio, IP del servidor y selección de transporte.
- Mejor ajuste de alertas al alinear los intervalos de reporte y umbrales de alarma del dispositivo con las reglas de alerta de Plaspy.
- Planificación de actualizaciones más informada conforme el fabricante introduce revisiones de firmware o hardware.
- Expectativas más claras sobre retención de datos y reproducción histórica según la frecuencia de reporte del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G08 con Plaspy ofrece una vía práctica para despliegues rápidos de rastreo basados en OBD. El factor de forma OBD plug and play combinado con posicionamiento GPS y BeiDou más fallback LBS hace del G08 una buena opción para flotas de alquiler, taxis y camiones ligeros que requieren instalación rápida y reportes de eventos confiables.

Plaspy centraliza la telemetría del G08 para ubicación en vivo, reproducción histórica, geocercas y alertas configurables, de modo que los equipos operativos puedan monitorear el comportamiento del vehículo y responder a incidentes con rapidez. Para obtener más información sobre cómo Plaspy soporta el seguimiento de flotas y la compatibilidad de dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; es importante verificar la información más reciente específica del dispositivo en el sitio del fabricante https://www.gotop.cc/.
