---
slug: /atrack/ak300/protocol
id: ak300-protocol
sidebar_label: Protocol
title: ATrack - AK300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador ATrack AK300 con Plaspy y reportar GPS y telemetría
keywords:
  - protocolo ATrack AK300
  - protocolo GPS AK300
  - compatibilidad ATrack AK300 con Plaspy
  - protocolo de comunicación AK300
  - protocolo de rastreo AK300
  - rastreador GPS ATrack AK300
  - rastreo de flotas AK300
  - protocolo de telemetría AK300
  - compatibilidad de dispositivos Plaspy
  - seguimiento de vehículo AK300
---

# ATrack - Protocolo AK300

Esta página documenta el contexto del protocolo público para usar el rastreador vehicular ATrack AK300 con Plaspy. Se enfoca en cómo el dispositivo envía ubicaciones y datos de telemetría al servicio Plaspy y en qué considerar al configurar y solucionar problemas de comunicación. El contenido está pensado para administradores de flota, integradores y usuarios técnicos que requieren una comprensión práctica de la relación de reporte entre el rastreador y Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y recomienda validar contra la documentación del fabricante.

## Visión general del protocolo

El protocolo de reporte del AK300 define cómo el rastreador envía correcciones GPS/GLONASS, telemetría y notificaciones de eventos a un servidor remoto para que Plaspy pueda mostrar y procesar los datos de ubicación y del vehículo. A alto nivel, el protocolo garantiza que el dispositivo pueda identificarse, transmitir telemetría útil (kilometraje, velocidad, combustible, entradas digitales, estado del motor) y reportar alertas basadas en eventos para los flujos de trabajo de la flota.

- Permite el envío de actualizaciones periódicas y basadas en eventos a Plaspy para visibilidad en tiempo real.
- Transporta telemetría vehicular como kilometraje, velocidad, consumo de combustible, estado de encendido y entradas digitales.
- Admite la inclusión de datos de sensores de accesorios opcionales como sensores Bluetooth y registro local cuando están disponibles.
- Permite al servidor correlacionar la identidad del dispositivo con un registro de rastreador registrado para mapas y alertas.
- Proporciona la carga transportable que Plaspy interpreta para convertirla en métricas del tablero y notificaciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe las conexiones entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo correcto según los datos que envía el equipo. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo en Plaspy si el AK300 está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy ofrece un endpoint de servidor común para que los dispositivos reporten a la misma dirección y puerto.
- Cuando el AK300 envía datos al endpoint de Plaspy, la plataforma detecta el formato de reporte y asocia el dispositivo con el registro de cuenta correspondiente.
- La identificación adecuada del dispositivo y los intervalos de reporte consistentes ayudan a que Plaspy clasifique los mensajes automáticamente.
- Normalmente, los usuarios configuran el dispositivo para enviar reportes al endpoint de Plaspy y no seleccionan manualmente los manejadores de protocolo.
- Si un dispositivo no es detectado, las comprobaciones básicas como endpoint, transporte y configuración del dispositivo son los primeros pasos de solución de problemas.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el AK300 llega a Plaspy, pero no cambian el propósito general del protocolo de reporte. El AK300 soporta múltiples opciones de transporte; los dispositivos pueden configurarse para usar UDP o TCP para alcanzar el endpoint de Plaspy según el firmware y las preferencias del instalador. Plaspy expone un único endpoint de servidor compartido que todos los dispositivos compatibles usan para reportar telemetría y ubicación.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para reporte de dispositivos es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y todos los dispositivos Plaspy usan este mismo puerto.
- El AK300 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración.
- Los dispositivos pueden apuntar al nombre de dominio d.plaspy.com o a la IP 54.85.159.138 al configurar el servidor de salida.
- La selección de transporte puede afectar las características de entrega pero no los campos fundamentales de telemetría que envía el rastreador.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y hardware del AK300 pueden cambiar qué campos de telemetría se reportan y cómo funcionan las funciones opcionales.
- Las opciones de configuración del fabricante, como la selección de transporte, intervalos de reporte y entradas habilitadas, afectan lo que recibe Plaspy.
- Accesorios opcionales como sensores Bluetooth, antenas GNSS externas o adaptadores CAN pueden añadir canales de datos que requieren mapeo en Plaspy.
- Las variantes regionales y diferencias de certificación pueden influir en las bandas celulares soportadas y el comportamiento de conmutación, pero no en el concepto de reporte de alto nivel.
- Siempre valide que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte elegido esté soportado por el firmware del equipo.
- Para un mapeo de funciones más preciso, consulte la documentación oficial de ATrack para su versión específica de hardware y firmware del AK300.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del AK300 ayuda a asegurar un funcionamiento confiable del dispositivo, un procesamiento preciso de telemetría en Plaspy y una solución de problemas más eficiente cuando surjan incidencias. Familiarizarse con el comportamiento de reporte reduce el tiempo de integración y mejora la confianza en la calidad de los datos de la flota.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa un transporte aceptado.
- Ayuda a mapear las salidas del dispositivo como encendido, entradas digitales y lecturas de combustible a los campos y alertas del panel de Plaspy.
- Permite configurar intervalos de reporte y disparadores de eventos de forma sensata para equilibrar la oportunidad de la información y el uso de datos.
- Facilita el diagnóstico rápido cuando falta telemetría o los eventos no aparecen en Plaspy.
- Orienta decisiones sobre funciones opcionales como sensores BLE o adaptadores CAN y cómo se integrarán con la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el AK300 con Plaspy ofrece a los operadores de flota una solución práctica de seguimiento y telemetría en tiempo real que aprovecha la conectividad LTE del dispositivo, las entradas/salidas del vehículo y el soporte de sensores opcionales. Plaspy ingiere los reportes del dispositivo y los convierte en visualización de ubicación, alertas configurables e indicadores operativos que apoyan flujos de trabajo contra robo, mantenimiento preventivo y programas de seguridad para conductores.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el ATrack AK300 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y del firmware en el sitio del fabricante https://www.atrack.com.tw/.
