---
slug: /gotop/d10/protocol
id: d10-protocol
sidebar_label: Protocol
title: GOTOP - D10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP D10 y cómo se comunica con Plaspy para seguimiento en tiempo real y alertas
keywords:
  - protocolo GOTOP D10
  - protocolo GPS GOTOP D10
  - protocolo de comunicación GOTOP D10
  - protocolo de rastreo GOTOP D10
  - protocolo GPS GOTOP
  - compatibilidad GOTOP D10 Plaspy
  - protocolo rastreador D10
  - rastreo vehicular GOTOP D10
  - rastreo de flotas protocolo D10
  - protocolo rastreador Plaspy
---

# GOTOP - Protocolo D10

Esta página ofrece un resumen público del protocolo del rastreador GOTOP D10 y de cómo se comunica con la plataforma Plaspy. Describe el papel del protocolo de reporte del dispositivo para enviar ubicación, eventos de alarma y telemetría básica desde el compacto D10 hacia el sistema backend, evitando detalles de implementación sensibles. El D10 utiliza posicionamiento híbrido (GPS, BeiDou BD, WiFi y LBS) y conectividad celular para enviar los eventos y datos de ubicación que Plaspy ingiere para paneles y alertas.

Plaspy acepta datos de dispositivos compatibles usando configuraciones de conexión compartidas entre los modelos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos están configurados para reportar al endpoint de Plaspy. El comportamiento del D10 puede variar según la versión de firmware, la revisión de hardware y las opciones de configuración del fabricante, por lo que la cadencia de mensajes observada, los campos opcionales y las alarmas disponibles pueden diferir entre unidades y compilaciones de firmware.

## Visión general del protocolo

A grandes rasgos, el protocolo del dispositivo es el método de reporte que usa el D10 para identificarse y transmitir datos de posición y eventos a un servicio backend. El protocolo garantiza que Plaspy reciba el contexto suficiente para mapear una conexión entrante a un dispositivo y convertir la telemetría en eventos útiles para el panel.

- Permite que el D10 reporte fijaciones de posición GPS/BeiDou y ubicaciones asistidas por WiFi y LBS a Plaspy.
- Transporta eventos de alarma y estado como encendido del motor, vibración, geocerca, corte de alimentación y batería baja hacia el backend.
- Asocia la identidad del dispositivo (IMEI u otro identificador) con la telemetría entrante para que Plaspy atribuya los datos al activo correcto.
- Ofrece reportes periódicos y mensajes por eventos que permiten a Plaspy construir el historial de ubicaciones y disparar alertas.
- Permite interacciones básicas de control remoto cuando el dispositivo lo soporta y las políticas operativas lo permiten, por ejemplo control de relé para funciones de inmovilizador.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones entrantes de dispositivos en un endpoint de ingestión unificado e identifica automáticamente el protocolo del rastreador que usa el dispositivo. En la mayoría de las instalaciones el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy y utilice los ajustes de transporte soportados.

- Plaspy escucha en un único puerto estándar para conexiones de dispositivos y detecta automáticamente el comportamiento del protocolo a partir de la sesión entrante.
- El dominio del servidor de Plaspy para reporte de dispositivos es d.plaspy.com y la dirección IP del servidor es 54.85.159.138.
- Los dispositivos pueden configurarse para usar UDP o TCP hacia el endpoint de ingestión de Plaspy según el soporte del dispositivo y la preferencia del operador.
- Todos los dispositivos conectados a Plaspy usan el mismo puerto para simplificar la configuración e ingestión.
- Si un dispositivo está configurado para reportar al endpoint de Plaspy y usa el transporte soportado, Plaspy generalmente reconocerá el protocolo del dispositivo sin necesidad de selección manual.

## Transporte y contexto de conexión

Transporte se refiere a cómo el D10 lleva sus datos de protocolo sobre la red celular hacia Plaspy. El D10 soporta el enlace ascendente celular estándar para telemetría y ofrece configuración de servidor flexible en el equipo para que pueda apuntar al endpoint de Plaspy o a un backend alterno para redundancia.

- El D10 puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Plaspy emplea el puerto 8888 para todos los dispositivos soportados para que los instaladores apliquen una configuración saliente consistente en flotas mixtas.
- Al configurar el D10, verifique si el firmware del dispositivo espera reporte por UDP o TCP y ajuste el equipo en consecuencia para una entrega confiable.
- Los campos de servidor dual o servidor de respaldo en el D10 pueden utilizarse para redundancia manteniendo el reporte primario apuntando al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades D10 pueden cambiar la frecuencia de mensajes, los tipos de evento disponibles y los campos de telemetría opcionales.
- Las revisiones de hardware o variantes regionales pueden introducir diferencias menores en cómo se reportan ciertas alarmas o entradas de periféricos.
- La selección de transporte (UDP frente a TCP) afecta las garantías de entrega; elija el transporte que se alinee con el firmware del dispositivo y los objetivos de fiabilidad de la red.
- Los ajustes de servidor dual del fabricante pueden usarse para proporcionar un endpoint de respaldo, pero asegúrese de que el servidor primario apunte a Plaspy cuando se requiera integración.
- Verifique qué alarmas y accesorios opcionales (botón SOS, relé, micrófono) vienen habilitados por defecto en el firmware del dispositivo que tiene a la mano.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial de GOTOP para notas de firmware específicas y registros de cambios.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del D10 ayuda a instaladores y operadores a lograr un alta confiable de dispositivos, un reporte de eventos preciso y una operación predecible a largo plazo con Plaspy. Conocer claramente los intervalos de reporte, las alarmas compatibles y las opciones de transporte reduce la fricción en la integración y acelera la resolución de problemas.

- Asegura la configuración correcta de servidor y transporte para que los dispositivos lleguen a Plaspy con éxito.
- Ayuda a mapear la telemetría entrante a los campos esperados en el panel y a las reglas de alerta en Plaspy.
- Reduce el tiempo para diagnosticar brechas de conectividad o reporte al saber qué eventos debe emitir el dispositivo.
- Apoya decisiones informadas sobre actualizaciones de firmware, cambios de configuración y habilitación de accesorios.
- Facilita la planificación de redundancia y políticas operativas al entender el comportamiento de servidores duales y reportes de respaldo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D10 con Plaspy ofrece una solución de rastreo compacta que integra fijaciones de posición, eventos de alarma y telemetría básica en una única plataforma de gestión. Para flotas pequeñas de vehículos, scooters y protección de activos encubiertos, el hardware D10 combinado con el software Plaspy permite a los operadores monitorear ubicación en tiempo real, recibir alertas de eventos y revisar historial en flotas mixtas con un manejo backend consistente.

Si desea saber más sobre cómo Plaspy gestiona la ingestión de dispositivos, las funciones y los paneles operativos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo específico del dispositivo y las notas de firmware en el sitio del fabricante en https://www.gotop.cc/.
