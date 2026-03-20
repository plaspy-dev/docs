---
slug: /queclink/gmt100/protocol
id: gmt100-protocol
sidebar_label: Protocol
title: QuecLink - GMT100 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador QuecLink GMT100 y cómo se comunica con Plaspy para reporte y monitoreo
keywords:
  - protocolo QuecLink GMT100
  - QuecLink GMT100 GPS
  - compatibilidad GMT100 Plaspy
  - protocolo de rastreo QuecLink
  - protocolo de comunicación GMT100
  - rastreador GPS QuecLink
  - rastreo de flotas GMT100
  - protocolo de rastreador Plaspy
  - integración de dispositivo QuecLink
  - protocolo de reporte GMT100
---

# QuecLink - Protocolo GMT100

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS QuecLink GMT100 con Plaspy. Describe de forma general cómo se comunica el equipo, qué ajustes de conexión espera Plaspy y qué considerar al integrar el dispositivo para monitoreo en tiempo real e informes periódicos. El GMT100 es un rastreador resistente al agua diseñado para aplicaciones de bajo consumo como motocicletas y embarcaciones; incluye detección de movimiento, múltiples entradas/salidas y un protocolo de reporte integrado con funciones completas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. Para el GMT100 y otros dispositivos, Plaspy acepta datos en el mismo puerto y puede recibir reportes por UDP o TCP según la configuración del rastreador. El comportamiento exacto del protocolo y los reportes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene confirmar detalles específicos con QuecLink cuando sea necesario.

## Descripción general del protocolo

El protocolo de comunicación del GMT100 define cómo el rastreador se identifica, reporta posiciones GPS y envía alertas y mensajes de estado a un servidor backend. Plaspy se apoya en esos reportes para convertir los datos crudos del dispositivo en posiciones en el mapa, eventos de geocerca y otra telemetría operativa sin requerir la selección manual del protocolo cuando el equipo apunta al endpoint de Plaspy.

- El protocolo transmite datos de posición, marcas de tiempo y mensajes de estado del dispositivo para uso de los servicios de Plaspy.
- Alertas integradas, como eventos de emergencia, cruces de geocercas y batería baja, pueden reportarse mediante el protocolo del dispositivo.
- La detección de movimiento y el manejo de energía influyen en cuándo y con qué frecuencia el equipo envía reportes.
- El GMT100 incorpora un protocolo de reporte embebido que permite transmisiones periódicas y basadas en eventos hacia un servidor.
- Identificadores a nivel de protocolo permiten a Plaspy asociar mensajes entrantes con el registro de dispositivo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint compartido e identifica automáticamente el protocolo del rastreador a partir de los patrones de tráfico entrante y los identificadores del dispositivo. Cuando un GMT100 está configurado para reportar a Plaspy, la plataforma empareja la conexión del dispositivo con la lógica de manejo correspondiente, de modo que por lo general no es necesario que el usuario seleccione el protocolo manualmente.

- Plaspy utiliza un endpoint unificado para el reporte de dispositivos y detecta automáticamente el protocolo que usan los rastreadores entrantes.
- Los dispositivos que reportan a d.plaspy.com o a la IP del servidor Plaspy son procesados sin que normalmente se requiera selección manual del protocolo.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy garantiza que el rastreador sea reconocido por la plataforma.
- Si ocurren problemas de conexión, revisar los ajustes de reporte del equipo y el comportamiento del firmware es el primer paso de diagnóstico.
- Por lo general, usted debe configurar el GMT100 para enviar mensajes de posición y alertas al endpoint y al puerto de Plaspy.

## Contexto de transporte y conexión

El GMT100 puede configurarse para usar UDP o TCP para enviar reportes, y Plaspy acepta el tráfico de dispositivos en el mismo puerto para todos los equipos soportados. Los dispositivos pueden apuntar al dominio de Plaspy o a su dirección IP pública según cómo se configure el rastreador o las herramientas de aprovisionamiento.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP pública del servidor Plaspy para reporte directo es 54.85.159.138.
- El puerto compartido usado por Plaspy para conexiones de dispositivos es 8888.
- El GMT100 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de firewalls.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar los reportes disponibles y las opciones de transporte; verifique la versión de firmware del rastreador al diagnosticar problemas de integración.
- Revisiones de hardware o variantes regionales del GMT100 pueden presentar pequeñas diferencias en ajustes predeterminados o configuraciones de fábrica.
- La selección del protocolo de transporte (UDP vs TCP) afecta las características de entrega y debe coincidir con la configuración del dispositivo en campo.
- Los ajustes del lado del dispositivo deben apuntar al dominio o IP de Plaspy y al puerto compartido para que la entrega sea exitosa.
- Las notas de aplicación y las herramientas de configuración del fabricante suelen contener las instrucciones más fiables y específicas por firmware.
- Pruebe nuevo firmware o configuraciones personalizadas en un entorno controlado antes de desplegarlas masivamente.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GMT100 ayuda a asegurar un registro de dispositivos confiable, agilizar la resolución de problemas y lograr un comportamiento operativo predecible dentro de Plaspy. Conocer cómo y cuándo el rastreador reporta posición y eventos permite a los administradores ajustar intervalos de reporte, manejo de alertas y consumo de energía según las necesidades operativas.

- Permite validar que los dispositivos apuntan correctamente al endpoint de Plaspy y usan el transporte requerido.
- Facilita la solución de problemas comunes como reportes faltantes, marcas de tiempo incorrectas o comportamientos de energía inesperados.
- Orienta la elección de la frecuencia de reporte y la sensibilidad de detección de movimiento para equilibrar la vida útil de la batería y la granularidad del seguimiento.
- Aclara qué eventos y alertas puede generar el rastreador y cómo se mostrarán en Plaspy.
- Reduce el tiempo de despliegue al alinear los ajustes del dispositivo con las expectativas de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GMT100 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar posiciones GPS, alertas y estado del dispositivo mediante un endpoint de integración común. La detección automática de protocolo y el puerto unificado de Plaspy simplifican el aprovisionamiento en flotas grandes, mientras que la detección de movimiento y el diseño de bajo consumo del GMT100 lo hacen adecuado para vehículos y equipos con restricciones de energía.

Si desea obtener más información sobre cómo Plaspy maneja el reporte de dispositivos y las funciones de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actuales específicos por dispositivo, notas de firmware e instrucciones de configuración del fabricante, consulte el sitio de QuecLink en https://www.queclink.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación más reciente del fabricante.
