---
slug: /bofan/pt_60/protocol
id: pt_60-protocol
sidebar_label: Protocol
title: Bofan - PT-60 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Bofan PT-60 y su comunicación con Plaspy para rastreo GPS fiable e integración
keywords:
  - protocolo Bofan PT-60
  - protocolo GPS Bofan PT-60
  - protocolo Bofan PT-60 para Plaspy
  - protocolo de comunicación Bofan PT-60
  - protocolo de rastreo Bofan PT-60
  - rastreador GPS Bofan PT-60
  - compatibilidad protocolo PT-60 Plaspy
  - protocolo de dispositivo Plaspy
  - rastreo vehicular PT-60
  - protocolo PT-60 para rastreador personal
---

# Bofan - Protocolo PT-60

Esta página ofrece una visión pública y práctica del contexto de comunicación para usar el Bofan PT-60 con Plaspy. Se centra en cómo el rastreador informa ubicación y estado a la plataforma en términos generales, y qué aspectos del protocolo del dispositivo son relevantes al integrar el PT-60 en Plaspy para rastreo en vivo, alertas y monitoreo.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página cubre conceptos públicos del protocolo y el contexto de configuración en lugar de formatos de paquete de bajo nivel.

## Resumen del protocolo

El PT-60 emplea una conexión de datos móviles para reportar posición GPS, eventos de estado y notificaciones de alarma a un servidor remoto. El protocolo define cómo el dispositivo se identifica, cómo marca y formatea los datos de ubicación, y cómo señala alertas como violaciones de geocerca, SOS, movimiento, exceso de velocidad y batería baja para que la plataforma receptora pueda procesarlos y convertirlos en información utilizable.

- Transmite actualizaciones de posición y estado desde el dispositivo al servidor para seguimiento en tiempo real y reproducción histórica
- Comunica tipos de eventos como pulsaciones de SOS, entradas o salidas de geocerca, exceso de velocidad, movimiento y batería baja para que Plaspy pueda generar alertas
- Permite que el dispositivo incluya identificación para que el servidor asocie los reportes con el registro correcto del rastreador
- Habilita latidos periódicos e intervalos de reporte para monitorear disponibilidad del dispositivo y estado de la batería
- Soporta tanto mensajes cortos de evento como actualizaciones regulares de posición para equilibrar la oportunidad de la información y el consumo de energía

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y utiliza esa conexión para determinar el protocolo del rastreador de forma automática. En la mayoría de los escenarios de integración, el usuario no necesita elegir un protocolo dentro de Plaspy si el PT-60 está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del equipo
- Cuando el PT-60 se conecta al endpoint de Plaspy, la plataforma evalúa los datos entrantes para identificar el protocolo utilizado
- La detección automática reduce los pasos manuales necesarios al incorporar dispositivos a Plaspy
- La identificación correcta del dispositivo en los primeros reportes ayuda a Plaspy a mapear los mensajes con el registro adecuado
- Usted debe asegurarse de que el dispositivo esté configurado para reportar al endpoint de Plaspy para permitir la detección automática

## Transporte y contexto de conexión

El transporte de la conexión y el destino son detalles importantes de configuración para el PT-60. El dispositivo puede configurarse para usar UDP o TCP según su capacidad y las opciones elegidas, y puede apuntar a un nombre de dominio o a una dirección IP del servidor Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138
- El PT-60 puede usar UDP o TCP dependiendo del firmware y de las opciones seleccionadas por el usuario o integrador
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de redes y firewalls
- Use la misma configuración de puerto en el dispositivo que la requerida por Plaspy para garantizar conectividad
- Verifique la conectividad de datos móviles y la configuración del APN en el PT-60 para permitir la comunicación con el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Diferentes revisiones de firmware del PT-60 pueden cambiar el tiempo de los mensajes, los tipos de eventos disponibles o campos opcionales
- Revisiones de hardware o variantes regionales del fabricante pueden afectar los transportes o características soportadas
- La elección de transporte (UDP vs TCP) puede influir en las características de entrega de los mensajes y debe coincidir con la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta correctamente al endpoint compartido, pero la configuración correcta del dispositivo es esencial
- La documentación del fabricante es la fuente autorizada para opciones específicas de protocolo según firmware y disponibilidad de funciones
- Valide la compatibilidad confirmando la configuración de reporte del dispositivo y probando reportes en vivo al endpoint de Plaspy

## Por qué es importante entender el protocolo

Conocer el comportamiento general del protocolo de comunicación del PT-60 facilita la configuración exitosa, la resolución de problemas en tiempo oportuno y un rendimiento consistente de rastreo a largo plazo en Plaspy. Un contexto claro del protocolo reduce el tiempo dedicado a diagnosticar problemas de conexión y asegura que las alertas y la telemetría lleguen como se espera.

- Ayuda a confirmar que los reportes del dispositivo están llegando al servidor de Plaspy y se interpretan correctamente
- Facilita establecer el APN, el transporte y el endpoint adecuados en el rastreador
- Aporta claridad al solucionar problemas cuando eventos como SOS, geocerca o exceso de velocidad no aparecen en la plataforma
- Permite planificar la vida útil de la batería y los intervalos de reporte según la frecuencia de transmisión del rastreador
- Ayuda a los equipos operativos a entender qué funciones del dispositivo aparecerán en Plaspy y cuáles pueden depender del firmware

## Por qué usar Plaspy con este protocolo

El Bofan PT-60 es un rastreador personal compacto que ofrece actualizaciones de ubicación en tiempo real, alertas de geocerca, notificaciones SOS, alarmas por movimiento y velocidad, y reportes de batería baja. En conjunto con Plaspy, estas capacidades se presentan como ubicación en vivo, alertas de eventos y reproducción histórica para brindar a organizaciones y particulares una mejor conciencia situacional y supervisión.

Plaspy simplifica la incorporación de dispositivos al usar un endpoint y puerto compartidos en el servidor y detecta automáticamente el protocolo del rastreador cuando el PT-60 está configurado para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138. Para obtener más información sobre Plaspy y cómo maneja la conectividad y reporte de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo; verifique la documentación y las notas de firmware más recientes del PT-60 en el sitio del fabricante https://www.bofancloud.com/ para obtener la información más actual.
