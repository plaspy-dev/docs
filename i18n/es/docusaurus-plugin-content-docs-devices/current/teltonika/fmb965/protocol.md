---
slug: /teltonika/fmb965/protocol
id: fmb965-protocol
sidebar_label: Protocol
title: Teltonika - FMB965 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el Teltonika FMB965 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - Teltonika FMB965
  - Protocolo FMB965
  - Protocolo GPS Teltonika
  - Compatibilidad FMB965 Plaspy
  - Protocolo de dispositivo Plaspy
  - Comunicación rastreador GPS
  - Rastreo de vehículos FMB965
  - Integración sensores BLE
  - Rastreo de activos Teltonika
  - Gestión de flotas Plaspy
---

# Teltonika - Protocolo FMB965

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMB965 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos no sensibles y explica el papel del protocolo de reporte del rastreador para una integración y operación correctas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía mantiene un enfoque general y práctico, haciendo referencia a los ajustes de conexión que Plaspy emplea para recibir reportes.

## Resumen del protocolo

El protocolo que implementa un rastreador define cómo se identifica, cómo establece la conexión con un endpoint remoto y cómo entrega datos de posición y telemetría que Plaspy puede procesar. En el caso del FMB965, esto implica transmitir posiciones GNSS y telemetría de sensores BLE a través de redes móviles al endpoint de Plaspy para que los administradores de flota puedan ver ubicación en tiempo real, estado y eventos.

- Permite que el dispositivo se registre e identifique ante el servicio Plaspy para que la telemetría registrada se asocie con el activo correcto.
- Transporta actualizaciones de posición, reportes de eventos y datos auxiliares de sensores en un formato que el servidor puede interpretar para mapas y alertas.
- Soporta transporte sobre redes IP para que el rastreador pueda enviar datos al endpoint configurado de Plaspy.
- Proporciona metadatos y señales de eventos que Plaspy emplea para alertas de geocercas, detección de movimiento y reproducción histórica.
- Funciona junto con herramientas de configuración de dispositivos y flujos de gestión remota para asegurar reportes y ajustes de firmware correctos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador a partir del flujo de datos entrante. En la mayoría de las implementaciones, el integrador solo necesita configurar el dispositivo para reportar al endpoint de Plaspy y la plataforma asociará los mensajes entrantes con el manejador de protocolo correspondiente.

- Plaspy escucha en un endpoint común para que los dispositivos apunten al mismo host y puerto para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las características de la conexión y la carga útil, sin selección manual.
- La configuración típica requiere apuntar el dispositivo a d.plaspy.com o a la IP del servidor Plaspy y al puerto compartido.
- Cuando el rastreador está configurado correctamente para reportar a Plaspy, normalmente no se requiere seleccionar el protocolo dentro del servicio.
- Si un rastreador utiliza transportes alternos o herramientas del fabricante, asegúrese de que esas opciones apunten al endpoint de Plaspy para permitir la detección automática.

## Transporte y contexto de conexión

El establecimiento de la conexión es una cuestión de transporte que determina cómo el FMB965 abre el canal hacia Plaspy para enviar reportes. El dispositivo puede configurarse para usar UDP o TCP según la configuración y el firmware, y ambos transportes son compatibles hacia el endpoint de Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos usan el mismo puerto para reportes.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según capacidades y requisitos.
- La elección entre UDP y TCP afecta características de entrega como retransmisiones y orden, pero no cambia la manera en que Plaspy identifica el protocolo.
- Asegúrese de que la APN y la configuración de la SIM permitan tráfico saliente hacia el endpoint de Plaspy y el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden modificar el comportamiento del protocolo o las funciones disponibles; siempre verifique la versión de firmware al validar compatibilidad.
- Las revisiones de hardware o módulos opcionales como accesorios BLE pueden alterar qué campos de telemetría están disponibles para Plaspy.
- La selección del transporte entre UDP y TCP es configurable en el dispositivo y debe ajustarse a los requisitos de confiabilidad y condiciones de red del despliegue.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y confía en la detección automática del protocolo en el endpoint del servidor.
- Algunas herramientas de configuración del dispositivo o soluciones de gestión remota pueden cambiar los ajustes de reporte; confirme el host y puerto finales de reporte antes del despliegue.
- Al integrar a escala, realice una prueba piloto con firmware representativo para validar el manejo de eventos y los flujos de datos de los sensores.

## Por qué es importante entender el protocolo

Conocer lo esencial del protocolo de reporte del rastreador ayuda a garantizar que los dispositivos estén configurados correctamente y que los datos lleguen a Plaspy en un formato utilizable. Esta comprensión reduce los tiempos de resolución de problemas y favorece una operación a largo plazo fiable de los rastreadores desplegados.

- Permite configurar correctamente el host de reporte y el transporte para que los mensajes lleguen a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad y entrega de datos separando fallos de transporte de comportamientos de protocolo o firmware.
- Informa decisiones sobre selección de transporte, intervalos de reporte y gestión de energía para adecuarse a requisitos operativos.
- Asegura que los datos de sensores BLE y otra telemetría que el FMB965 puede proporcionar se asignen correctamente en la plataforma Plaspy.
- Facilita el uso efectivo de flujos de gestión remota para actualizaciones de firmware y orquestación de configuraciones.

## Ventajas de usar Plaspy con este protocolo

Usar el Teltonika FMB965 con Plaspy ofrece a las organizaciones una opción de rastreo compacta y robusta con respaldo de batería y soporte para sensores BLE, mientras confían en Plaspy para recibir, interpretar y presentar ubicación y telemetría en paneles y alertas. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican los despliegues al permitir que múltiples modelos de dispositivos reporten al mismo servidor y puerto.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para detalles específicos más recientes sobre comportamiento del protocolo, notas de firmware e implementaciones, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben confirmarse con la documentación oficial.
