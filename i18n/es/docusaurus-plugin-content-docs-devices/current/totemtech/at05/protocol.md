---
slug: /totemtech/at05/protocol
id: at05-protocol
sidebar_label: Protocol
title: Totemtech - AT05 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Totemtech AT05 y cómo se comunica con Plaspy para seguimiento e integración fiables
keywords:
  - Protocolo Totemtech AT05
  - Rastreador GPS AT05
  - Compatibilidad AT05 Plaspy
  - Protocolo GPS Totemtech
  - Protocolo de comunicación AT05
  - Seguimiento vehicular AT05
  - Gestión de flotas AT05
  - Protocolo de rastreador Plaspy
  - OTA firmware AT05
  - Integración de rastreador Totemtech
---

# Totemtech - Protocolo AT05

Esta página ofrece una visión pública del protocolo utilizado por el rastreador GPS Totemtech AT05 al integrarse con Plaspy. Se enfoca en el contexto de comunicación y en cómo el dispositivo informa ubicación, movimiento y alarmas a la plataforma Plaspy, sin revelar detalles sensibles o propietarios. El contenido está pensado para ayudar a usuarios técnicos a comprender qué esperar al integrar un AT05 con Plaspy.

El Totemtech AT05 es un rastreador versátil con funciones como reporte simultáneo a dos servidores, acelerómetro digital de 3 ejes para detección de movimiento, actualizaciones OTA de firmware, un amplio rango de entrada DC con protección contra sobrevoltaje, soporte para comandos por GPRS y SMS, trazas en tiempo real y de historial, múltiples tipos de alarmas y puertos I/O configurables. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte define cómo el AT05 comunica posición, estado, datos de sensores y alarmas a un servidor remoto. En términos generales, permite que el dispositivo se identifique, negocie el comportamiento de transporte y entregue los mensajes de telemetría y eventos que Plaspy utiliza para el seguimiento y las alertas.

- Permite que el AT05 envíe posición GPS y estado de movimiento a un endpoint remoto para su procesamiento.
- Comunica estados de alarma y entradas digitales para capturar eventos como SOS, exceso de velocidad o pérdida de alimentación.
- Soporta el reporte del estado de movimiento del acelerómetro para detección de manipulación y movimiento.
- Permite reportes en tiempo real y envío de trazas de historial para revisión posterior.
- Admite reporte a dos servidores, de modo que el dispositivo pueda enviar datos a Plaspy y a otro endpoint simultáneamente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y usa identificación automática para asociar la telemetría entrante con el registro de dispositivo correcto. Cuando un AT05 está configurado para reportar a Plaspy normalmente no requiere selección manual de protocolo dentro de la plataforma, siempre que el dispositivo envíe sus datos al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivo es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para simplificar la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan correctamente al endpoint de la plataforma.
- En general, usted solo necesita apuntar el dispositivo al endpoint de Plaspy y asegurarse de que el transporte coincida con la capacidad del equipo.

## Transporte y contexto de conexión

El AT05 puede configurarse para enviar datos por GPRS celular usando UDP o TCP, según la configuración del dispositivo y el firmware. Entender los ajustes de transporte y destino contribuye a garantizar la entrega confiable de la telemetría a Plaspy.

- El AT05 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta tráfico de dispositivos en el puerto 8888 y el dispositivo puede usar UDP o TCP hacia ese puerto.
- Elija UDP o TCP en el dispositivo según las características de entrega deseadas y lo que soporte el equipo.
- Verifique que el APN y la configuración GPRS del dispositivo permitan conexiones salientes al endpoint de Plaspy.
- Firewalls de red y restricciones del operador pueden afectar la conectividad, por lo que valide el acceso saliente al puerto 8888.

## Notas sobre compatibilidad

- La compatibilidad puede variar entre versiones de firmware; versiones más nuevas o antiguas pueden cambiar el comportamiento de reporte.
- Revisiones de hardware y opciones de configuración en el AT05 pueden afectar qué transportes y funciones de reporte están disponibles.
- Ajustes del fabricante, como el reporte a servidores duales, deben configurarse con cuidado para que uno de los servidores apunte a Plaspy.
- Al usar la función de respaldo por comandos SMS, verifique los formatos de comando según la documentación del fabricante para evitar comportamientos conflictivos.
- La selección de transporte (UDP vs TCP) impacta la entrega y debe elegirse de acuerdo con las necesidades de fiabilidad y las capacidades del dispositivo.
- Siempre confirme que el equipo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy.

## Por qué es importante conocer el protocolo

Conocer el protocolo de comunicación ayuda en la configuración inicial, en la resolución de problemas de conectividad y en mantener un seguimiento fiable a lo largo del tiempo. Entender cómo el AT05 reporta datos y qué espera Plaspy reduce errores de configuración y acelera la resolución cuando eventos o telemetría no aparecen como se espera.

- Ayuda a confirmar que el dispositivo está correctamente apuntado al endpoint de Plaspy y usa el puerto 8888.
- Facilita la elección del modo de transporte apropiado (UDP o TCP) para su entorno.
- Permite interpretar con mayor facilidad los reportes del dispositivo y las condiciones de alarma al diagnosticar incidencias.
- Ayuda a planear actualizaciones OTA de firmware y a entender cómo los cambios podrían afectar el comportamiento de reporte.
- Permite tomar decisiones informadas sobre configuraciones con servidor dual y redundancia para un seguimiento crítico.

## Por qué usar Plaspy con este protocolo

Usar el Totemtech AT05 con Plaspy ofrece una forma práctica de recopilar datos de ubicación, movimiento y alarmas de sus activos para visibilidad operativa y supervisión de flotas. Las capacidades del hardware AT05, como la detección de movimiento basada en acelerómetro, las actualizaciones OTA y el reporte a servidores duales, combinan bien con la detección automática de protocolo y la ingesta centralizada de Plaspy para simplificar la incorporación de dispositivos.

Si desea saber más sobre Plaspy y cómo maneja las integraciones de rastreadores GPS visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y guía de implementación consulte al fabricante en http://www.totemtek.com/ ya que el comportamiento y el soporte del protocolo pueden cambiar con nuevas versiones de firmware y revisiones de hardware.
