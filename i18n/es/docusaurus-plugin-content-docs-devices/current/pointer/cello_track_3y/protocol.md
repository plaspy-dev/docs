---
slug: /pointer/cello_track_3y/protocol
id: cello_track_3y-protocol
sidebar_label: Protocol
title: Pointer - Cello Track 3Y Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para compatibilidad del Pointer Cello Track 3Y con Plaspy y resumen de conexión
keywords:
  - Protocolo Pointer Cello Track 3Y
  - Protocolo Pointer Cello Track
  - Protocolo GPS CelloTrack 3Y
  - Comunicación Cello Track 3Y
  - Compatibilidad Pointer con Plaspy
  - protocolo seguimiento de activos
  - protocolo rastreador GPS
  - compatibilidad seguimiento de flotas
  - protocolo dispositivo Plaspy
  - seguimiento familia CelloTrack
---

# Pointer - Protocolo Cello Track 3Y

Esta página describe el contexto público del protocolo para utilizar la familia de dispositivos Pointer Cello Track 3Y con Plaspy. Se centra en el papel de comunicación que tiene el rastreador al reportar posición y estado a la plataforma Plaspy, evitando entrar en detalles privados de firmware o implementaciones internas del fabricante. La familia CelloTrack 3Y incluye modelos de batería de larga duración, carcasas resistentes con protección IP67 y variantes para reporte de energía y seguimiento de activos compactos, características que influyen en los patrones típicos de despliegue y en las expectativas de reporte.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el equipo está configurado para reportar al endpoint de Plaspy. Los dispositivos en campo pueden diferir por versión de firmware, revisión de hardware o configuración del fabricante, por lo que el tiempo exacto de los mensajes y la disponibilidad de funciones pueden variar entre unidades y a lo largo del tiempo. Para la conexión, Plaspy acepta reportes de dispositivos en el endpoint público d.plaspy.com o en la IP del servidor 54.85.159.138 en el puerto 8888, y admite reportes tanto por UDP como por TCP en ese mismo puerto.

## Descripción general del protocolo

El protocolo de comunicación del rastreador define cómo la familia Cello Track 3Y envía identificación, ubicación e información de estado a un servidor remoto y cómo esos datos se vuelven utilizables dentro de Plaspy. Esta visión pública describe el rol del protocolo sin reproducir formatos propietarios del proveedor.

- Permite reportes periódicos y por eventos de ubicación y estado del dispositivo hacia Plaspy.
- Proporciona identidad del dispositivo y telemetría básica para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Admite variantes en el comportamiento de reporte definidas por el firmware, tales como intervalos de envío distintos o modos de gestión de energía.
- Permite que el dispositivo opere sobre transporte IP estándar hacia el endpoint compartido d.plaspy.com o la dirección IP 54.85.159.138.
- Actúa como la interfaz que permite a Plaspy convertir reportes crudos del dispositivo en posiciones en el mapa, registros de actividad y alertas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto unificados y realiza detección automática para identificar el tipo de rastreador que reporta. Esto significa que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente apuntado al endpoint de Plaspy y usa el transporte soportado.

- Plaspy escucha reportes de dispositivos en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a 54.85.159.138; cualquiera de los destinos enruta al servicio de ingestión de Plaspy.
- Plaspy detecta el protocolo del rastreador automáticamente tras recibir el primer reporte válido, simplificando la incorporación de equipos.
- Cuando un dispositivo está configurado correctamente para usar UDP o TCP hacia el puerto 8888, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.
- Si un dispositivo no aparece, se recomienda que usted verifique el endpoint, la selección de transporte y la configuración del dispositivo con el fabricante.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo un dispositivo Cello Track 3Y llega hasta Plaspy, más que la estructura interna de los mensajes. El equipo puede usar transporte UDP o TCP según su configuración y las capacidades de firmware.

- Los dispositivos pueden configurarse para enviar reportes por UDP o TCP en el puerto 8888.
- Configure el dispositivo para apuntar a d.plaspy.com o a la IP directa 54.85.159.138 si la utilidad de configuración del dispositivo lo requiere.
- Todos los dispositivos soportados por Plaspy usan el mismo número de puerto para reportes, lo que simplifica la configuración de flotas.
- Consideraciones a nivel de red, como reglas de firewall y comportamiento de NAT, pueden afectar la entrega por UDP frente a TCP y deben validarse en el plan de red.
- La elección entre UDP o TCP depende de la configuración del dispositivo, perfiles de energía y la necesidad de fiabilidad en la entrega de mensajes según cada despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar intervalos de reporte, campos disponibles o transportes soportados; verifique la versión de firmware al resolver problemas de compatibilidad.
- Las variantes de hardware dentro de la familia CelloTrack 3Y pueden incluir distintos sensores o capacidades de reporte de energía que afectan qué campos de datos se presentan.
- Las opciones de configuración en el lado del fabricante pueden alterar cómo el dispositivo se identifica o qué dirección de servidor acepta, por lo que confirme la configuración del dispositivo antes de incorporarlo.
- UDP puede ser preferible para operaciones de bajo consumo en algunos modelos con batería, mientras que TCP puede ofrecer una entrega más confiable en otros casos de uso.
- Valide la compatibilidad con la documentación más reciente de Pointer para un modelo y firmware específicos y así asegurarse del comportamiento esperado.
- Si un dispositivo no aparece en Plaspy, verifique la dirección del servidor, el transporte, la versión de firmware y cualquier restricción del operador o de la red.

## Por qué es importante entender el protocolo

Entender el protocolo de comunicación ayuda a asegurar un despliegue confiable y hace que la configuración y resolución de problemas sean más eficientes. Conocer cómo los dispositivos se comunican con Plaspy reduce el tiempo de incorporación y ayuda a mantener visibilidad operativa a largo plazo.

- Acelera la incorporación de dispositivos al asegurarse de que estén apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte correcto.
- Ayuda a aislar problemas entre red, configuración del dispositivo y la ingestión en la plataforma cuando los reportes faltan o están incompletos.
- Orienta las decisiones de configuración para dispositivos con batería donde la frecuencia de reporte y el transporte afectan la vida útil.
- Mejora la planificación de escala y del diseño de red al aclarar si los dispositivos usarán UDP o TCP en despliegues masivos.
- Facilita la coordinación efectiva con el soporte de Pointer respecto a comportamientos específicos de firmware o consultas sobre características del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar la familia Pointer Cello Track 3Y con Plaspy ofrece una forma práctica de convertir los reportes de los dispositivos en datos de rastreo accionables para gestión de activos, supervisión de flotas y monitoreo operativo. La familia CelloTrack ofrece modelos de batería de larga duración, carcasas robustas con IP67 y opciones de formato que se adaptan a una variedad de despliegues, desde activos fijos hasta objetos compactos; Plaspy se enfoca en ingerir esos reportes de manera confiable y presentarlos en una plataforma unificada.

Para saber más sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento de firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la guía de protocolo y configuración específica del dispositivo con el fabricante en http://www.pointer.com.
