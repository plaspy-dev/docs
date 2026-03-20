---
slug: /suntech/st_300a/protocol
id: st_300a-protocol
sidebar_label: Protocol
title: Suntech - ST 300A Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Suntech ST 300A con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - protocolo Suntech ST 300A
  - protocolo GPS Suntech ST 300A
  - Suntech ST 300A Plaspy
  - protocolo rastreador GPS Suntech
  - protocolo de comunicación ST 300A
  - protocolo de rastreo ST 300A
  - compatibilidad rastreadores Plaspy
  - integración de dispositivos Plaspy
  - rastreo vehicular Suntech
  - sensor de temperatura rastreador GPS
---

# Suntech - Protocolo ST 300A

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Suntech ST 300A con Plaspy. Resume cómo el equipo reporta telemetría y eventos a alto nivel y explica el contexto de conexión necesario para que Plaspy reciba los datos. El ST 300A es un rastreador versátil con antenas internas, soporte 1-Wire para sensores de temperatura e iButton, RS232, múltiples entradas analógicas y un arnés que admite detección de puertas, botón de pánico, inmovilización y otras señales del vehículo.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. Plaspy acepta conexiones a d.plaspy.com y al IP público 54.85.159.138 en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información pública y no sensible para una integración y pruebas correctas.

## Resumen del protocolo

El protocolo de comunicación del ST 300A define cómo el equipo se identifica, reporta posición y datos de sensores, y envía alarmas y eventos a un servidor remoto. Para integrar con Plaspy, los aspectos importantes son la identificación fiable del dispositivo, los informes periódicos de posición, las notificaciones de eventos desde el arnés y sensores, y la capacidad de operar sobre canales de transporte estándar.

- El protocolo transmite identidad y estado del dispositivo para que Plaspy pueda asociar los datos entrantes con el activo correcto.
- Los informes de posición incluyen las soluciones GPS principales y se complementan con entradas, valores de analógicos y lecturas de sensores como la temperatura.
- Los mensajes de eventos cubren entradas del arnés como puerta abierta, pánico, inmovilización, detección de interferencia y alertas de arrastre de grúa.
- El rastreador puede incorporar datos auxiliares desde dispositivos RS232 y múltiples canales analógicos como parte de sus reportes.
- Los fabricantes pueden codificar la semántica de sensores y eventos de manera distinta; las plataformas receptoras mapean esos campos a telemetría estandarizada.

## Cómo Plaspy detecta el protocolo

Plaspy está configurado para recibir datos de rastreadores en un endpoint y puerto comunes, e identificará el dispositivo emisor y su protocolo basándose en el tráfico entrante. Cuando un ST 300A esté correctamente apuntado al endpoint de Plaspy y permitido por los controles de red, Plaspy hará coincidir los reportes del dispositivo y aplicará el manejo apropiado de forma automática.

- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, usando el mismo puerto de forma uniforme.
- Los equipos deben configurarse para reportar a d.plaspy.com o al IP público 54.85.159.138.
- Plaspy acepta transporte tanto TCP como UDP ya que algunas unidades prefieren uno u otro.
- En la mayoría de los casos no es necesario que los usuarios seleccionen manualmente un protocolo dentro de Plaspy si el dispositivo reporta al endpoint de Plaspy.
- Es importante que la identificación del dispositivo en los primeros reportes sea correcta para que Plaspy pueda asociar IMEI o ID del equipo con la cuenta.

## Contexto de transporte y conexión

Las opciones de conexión y transporte afectan cómo el ST 300A alcanza el servidor de Plaspy, pero no cambian la semántica fundamental de los reportes. El rastreador puede configurarse para usar TCP o UDP al enviar sus reportes, y las rutas de red y reglas de firewall deben permitir conexiones salientes al endpoint de Plaspy.

- El ST 300A puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy.
- Plaspy utiliza el mismo puerto para todos los modelos de dispositivo a fin de simplificar la configuración y las reglas de red.
- Asegúrese de que los firewalls de la flota y los APN móviles permitan tráfico hacia el endpoint y puerto de Plaspy.
- Elija UDP cuando prefiera menor latencia y un intercambio mínimo, o TCP cuando la configuración del dispositivo requiera un transporte orientado a conexión.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades ST 300A pueden modificar los campos de reporte, la frecuencia de los mensajes y las alarmas disponibles.
- Las revisiones de hardware u módulos opcionales como periféricos RS232 y entradas analógicas adicionales pueden afectar qué datos se transmiten.
- Los perfiles de configuración del fabricante y las builds de firmware regionales pueden introducir pequeñas diferencias en el nombre de eventos y la escala de sensores.
- La selección del transporte entre UDP y TCP debe coincidir con la configuración del equipo para evitar reportes perdidos o no procesados.
- Verifique que el cableado del arnés y las definiciones de entradas en el dispositivo coincidan con la semántica de eventos esperada en Plaspy.
- Siempre pruebe un equipo de muestra en un entorno controlado antes de un despliegue a gran escala para confirmar el comportamiento.

## Por qué es importante entender el protocolo

Comprender cómo el ST 300A reporta datos ayuda a asegurar una integración fiable con Plaspy, agilizar la resolución de problemas y mapear correctamente los eventos del vehículo y los sensores en los flujos de trabajo de la flota. Saber dónde revisar la identificación, el transporte y el mapeo de sensores reduce el tiempo de configuración y mejora la confiabilidad a largo plazo.

- Confirma que los dispositivos apuntan al endpoint y puerto correctos de Plaspy y utilizan el transporte previsto.
- Ayuda a verificar que el reporte de IMEI o ID permita a Plaspy asociar automáticamente los equipos a las cuentas.
- Garantiza que las entradas auxiliares, los sensores de temperatura y los datos RS232 se interpreten correctamente en la plataforma.
- Acelera el diagnóstico de reportes faltantes revisando firmware, transporte y la ruta de red hacia d.plaspy.com.
- Facilita la planificación de actualizaciones de firmware y cambios de configuración que puedan afectar el comportamiento de los reportes.

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST 300A con Plaspy ofrece una manera directa de recopilar datos GPS, de sensores y eventos de vehículos y activos. Plaspy centraliza la telemetría entrante, normaliza los reportes de dispositivos y presenta posición, alarmas y valores de sensores para que los equipos de operaciones puedan monitorear flotas, gestionar alertas y analizar el comportamiento de los activos de forma más eficaz.

Para conocer más sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente del protocolo y del firmware con el fabricante en http://www.suntechint.com/.
