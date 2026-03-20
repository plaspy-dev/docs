---
slug: /neomatica/adm300/protocol
id: adm300-protocol
sidebar_label: Protocol
title: Neomatica - ADM300 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el Neomatica ADM300 con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo Neomatica ADM300
  - Protocolo GPS Neomatica ADM300
  - Protocolo EGTS ADM300
  - Compatibilidad ADM300 Plaspy
  - Protocolo de seguimiento Neomatica
  - Protocolo de comunicación ADM300
  - Protocolo de rastreador Neomatica
  - Compatibilidad de dispositivos Plaspy
  - Rastreo vehicular ADM300
  - Rastreo de flotas ADM300
---

# Neomatica - Protocolo ADM300

Esta página describe el contexto público del protocolo para usar el rastreador Neomatica ADM300 con Plaspy. Se enfoca en cómo el ADM300 se comunica con un servidor Plaspy, el papel del protocolo de reporte del dispositivo y consideraciones prácticas para configurar el envío de datos por red móvil. El ADM300 es una terminal de rastreo vehicular compacta con soporte EGTS y un protocolo abierto que facilita su integración en sistemas de flotas basados en Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para implementaciones del ADM300 que dependan de reportes por GPRS y EGTS o un protocolo abierto, confirme los ajustes del equipo y el comportamiento del firmware con la documentación del fabricante y mediante pruebas en campo.

## Resumen del protocolo

El protocolo que usa el ADM300 define cómo la terminal empaqueta la posición GNSS, la velocidad, el rumbo, las entradas de telemetría, los eventos y las actualizaciones de estado para enviarlas a un servidor remoto. En el contexto de Plaspy, el protocolo determina cómo el dispositivo se identifica, cómo se formatean los eventos y los datos de sensores, y cómo el servidor interpreta los mensajes entrantes para monitoreo en tiempo real e historial.

- Permite que el ADM300 reporte ubicación GNSS, marcas de tiempo, velocidad, rumbo y telemetría a Plaspy para seguimiento en vivo.
- Transporta información de eventos y estados de entradas como movimiento detectado por acelerómetro, alertas por manipulación, entradas analógicas y de pulso, y otras lecturas de sensores.
- Permite que el servidor asocie los mensajes entrantes con un identificador único del dispositivo para que Plaspy pueda asignar los datos a un activo conocido.
- Soporta cargas por lotes de historial de rutas almacenadas en memoria interna o microSD cuando la conectividad lo permite.
- Funciona con variantes EGTS y protocolo abierto soportadas por el ADM300 para integrarse con plataformas de terceros como Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores usando un único endpoint y puerto compartidos. Cuando un ADM300 está configurado para reportar a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador, por lo que a menudo no se requiere seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos de reporte llegan correctamente al servidor.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración del equipo.
- Si un dispositivo admite tanto UDP como TCP, configúrelo para usar el transporte elegido hacia el endpoint de Plaspy en el puerto 8888.
- Típicamente sólo necesita configurar la dirección del servidor de reportes y el transporte en el ADM300; Plaspy se encarga de la identificación del protocolo al ingresar los datos.

## Transporte y contexto de conexión

El ADM300 envía datos sobre el enlace celular GPRS a una dirección de servidor y transporte configurados. Para la integración con Plaspy seleccione la dirección de reporte y el transporte coherentes con su red y las capacidades del dispositivo, y confirme que los valores de APN y la SIM sean correctos para que el equipo pueda establecer una sesión GPRS.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como host de destino para el reporte.
- El puerto es 8888 y debe usarse para todos los dispositivos que reporten a Plaspy para mantener un comportamiento de ingestión consistente.
- La conectividad subyacente usa GPRS sobre redes GSM, por lo que asegúrese de que el dispositivo tenga un plan de datos activo y los valores de APN correctos.
- Para gestión remota y actualizaciones de firmware, verifique que el dispositivo pueda iniciar conexiones salientes y que su red permita que el transporte elegido alcance el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El ADM300 soporta EGTS y un protocolo abierto que facilita la integración con Plaspy sin necesidad de firmware personalizado en muchos casos.
- Las versiones de firmware pueden cambiar campos de mensajes, capacidades o campos opcionales; siempre verifique la revisión de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware y las interfaces opcionales como RS‑485 o sensores adicionales pueden alterar la telemetría disponible para Plaspy.
- La selección del transporte entre UDP y TCP puede afectar la semántica de entrega para el reconocimiento de eventos o el comportamiento de reenvío a nivel de dispositivo.
- Las configuraciones por defecto del fabricante a veces usan un servidor o puerto de marcador; confirme que los valores de reporte estén configurados al endpoint de Plaspy antes del despliegue.
- Para flotas grandes, pruebe un dispositivo de muestra de principio a fin para validar el mapeo de entradas y eventos a las alertas y reglas de Plaspy.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del ADM300 ayuda a asegurar una incorporación de dispositivos fiable, la interpretación correcta de la telemetría y una resolución más rápida de incidencias en campo. Saber qué envía el equipo y cómo espera recibirlo el servidor reduce el tiempo de configuración y mejora el tiempo operativo.

- Permite mapear con precisión las entradas y eventos del dispositivo a las reglas y flujos de alertas de Plaspy.
- Acelera la resolución de problemas al acotar si un fallo es de red, transporte, configuración del dispositivo o del protocolo.
- Ayuda a planificar ventanas de actualización y mantenimiento de firmware cuando se esperan cambios en el protocolo o el formato.
- Mejora la calidad de los datos al asegurar que el dispositivo reporte los identificadores y campos de telemetría correctos para la asociación de activos.
- Facilita despliegues escalables al estandarizar ajustes de reporte como host de destino, transporte y puerto.

## Por qué usar Plaspy con este protocolo

Usar el ADM300 con Plaspy brinda a las operaciones una vía práctica para mapear en tiempo real, generar alertas basadas en eventos, reproducir rutas y analizar historial a largo plazo. La combinación del ADM300 de recepción GNSS, almacenamiento a bordo e interoperabilidad EGTS o de protocolo abierto permite que alimente a Plaspy con la telemetría y los eventos necesarios para la supervisión de flotas y la respuesta a incidentes.

El enfoque de endpoint unificado de Plaspy reduce la complejidad de configuración en flotas con dispositivos mixtos al usar el mismo puerto para todos los equipos y detección automática de protocolo. Para saber más sobre cómo Plaspy funciona con dispositivos como el ADM300 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante confirme la información con Neomatica en https://neomatica.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
