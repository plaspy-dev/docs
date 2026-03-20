---
slug: /autoseeker/at_20/protocol
id: at_20-protocol
sidebar_label: Protocol
title: Autoseeker - AT-20 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo de conexión Autoseeker AT-20 con Plaspy y ajustes comunes de transporte
keywords:
  - Protocolo Autoseeker AT-20
  - Protocolo GPS Autoseeker AT-20
  - Protocolo de comunicación AT-20
  - Protocolo de rastreo AT-20
  - Protocolo GPS Autoseeker
  - Compatibilidad AT-20 con Plaspy
  - Protocolo de rastreador Plaspy
  - Protocolo para rastreadores vehiculares
  - Protocolo gestión de flotas
  - Protocolo telemetría GPS
---

# Autoseeker - Protocolo AT-20

Esta página resume el contexto público del protocolo para usar el rastreador Autoseeker AT-20 con Plaspy. Se enfoca en las consideraciones de comunicación y conexión que importan cuando el AT-20 reporta ubicación, alarmas y telemetría del vehículo a Plaspy para seguimiento en tiempo real y gestión de flotas. La información está pensada para integradores técnicos y administradores de flota que necesiten entender cómo los reportes del dispositivo interactúan con la plataforma Plaspy sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo está configurado correctamente para reportar al endpoint de Plaspy. El AT-20 admite múltiples transportes y variantes de firmware, por lo que el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. La información pública del endpoint de Plaspy para el reporte de dispositivos es d.plaspy.com y 54.85.159.138 en el puerto 8888, y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.

## Resumen del protocolo

El protocolo que emplea el AT-20 regula cómo el dispositivo se identifica, reporta posiciones GNSS y envía telemetría del vehículo y notificaciones de eventos a un servidor remoto. En términos generales, el protocolo de comunicación define cómo se empaquetan y transmiten marcas de tiempo, coordenadas, estados de entradas y tipos de alarma para que Plaspy pueda ingerir y presentar datos útiles a los usuarios.

- Permite que el AT-20 transmita posiciones GNSS, marcas de tiempo y telemetría como estado de ACC y movimiento a Plaspy
- Transporta notificaciones de eventos incluyendo entrada y salida de geocerca, exceso de velocidad y alarmas SOS para alertas oportunas
- Envía datos de accesorios y sensores cuando hay entradas opcionales como sensores de combustible o accesorios externos
- Soporta transporte sobre enlaces celulares para que el dispositivo reporte vía LTE o, como respaldo, GPRS al endpoint de Plaspy
- Permite a Plaspy mapear identificadores entrantes del dispositivo a una cuenta de cliente y mostrar datos en tiempo real e históricos

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un endpoint y puerto compartidos y utiliza detección automática para identificar el protocolo del rastreador, de modo que los mensajes se analicen y enruten correctamente. En la mayoría de los casos, un AT-20 configurado para apuntar a Plaspy no requerirá seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un endpoint común en d.plaspy.com y en la IP pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, lo que simplifica la configuración
- El AT-20 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 según las opciones del dispositivo
- Cuando el dispositivo reporta correctamente al endpoint de Plaspy, la detección del protocolo y el mapeo a su cuenta se realizan automáticamente
- Usualmente solo es necesario confirmar los ajustes de reporte del dispositivo y la asociación a la cuenta, en vez de elegir manualmente un protocolo

## Contexto de transporte y conexión

Las decisiones en la capa de transporte afectan la fiabilidad, la latencia y el comportamiento durante transiciones de cobertura. El AT-20 soporta transportes celulares y puede configurarse para comunicarse usando UDP o TCP hacia Plaspy. Los dispositivos pueden apuntar a Plaspy por nombre de dominio o por IP según la preferencia del instalador y los requisitos de la red.

- El AT-20 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 para el reporte
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, lo que reduce la complejidad de configuración en despliegues
- La selección del transporte puede afectar comportamiento de retransmisión y la puntualidad de los mensajes según las condiciones de red y el firmware del dispositivo
- Modos de respaldo como SMS y GPRS suelen estar disponibles en rastreadores vehiculares y pueden complementar el reporte IP primario cuando sea necesario

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede variar entre versiones de firmware y revisiones de hardware incluso para el mismo modelo AT-20
- Las opciones de configuración del fabricante, como elección de transporte y frecuencia de reporte, influyen en cómo aparecen los datos en Plaspy
- Accesorios y sensores opcionales pueden requerir soporte de firmware para reportar telemetría de forma consistente a Plaspy
- Confirme siempre que el dispositivo apunte a d.plaspy.com o 54.85.159.138 y que el transporte de reporte esté configurado para usar el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, pero verificar la identidad del dispositivo y muestras de reportes ayuda a evitar problemas de incorporación
- Consulte las notas de versión del fabricante para cambios de firmware que puedan alterar campos de reporte o el comportamiento de eventos

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una configuración confiable, facilita la resolución de problemas y mejora el rendimiento a largo plazo de los dispositivos conectados a Plaspy. Tener expectativas claras sobre qué enviará el dispositivo y cuándo lo hará reduce el tiempo dedicado a diagnosticar problemas de conectividad y eventos.

- Facilita una configuración inicial correcta para que el AT-20 reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Ayuda a resolver posiciones faltantes, alertas retrasadas o telemetría inconsistente cuando cambian el firmware o las condiciones de red
- Orienta en la selección del transporte, por ejemplo elegir UDP o TCP según las necesidades de fiabilidad
- Sirve para planificar actualizaciones de firmware que preserven la compatibilidad con Plaspy y las integraciones de accesorios
- Permite interpretar con precisión alarmas y lecturas de sensores en los paneles y reportes de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-20 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad confiable de vehículos, alertas en tiempo real y análisis histórico de rutas. Las entradas orientadas al vehículo del AT-20, como detección de ACC, SOS y soporte para sensores opcionales, proveen la telemetría que los operadores de flota requieren, mientras que Plaspy ingiere esos datos para alimentar flujos de trabajo de seguimiento, alertas y reportes.

Si desea aprender más sobre cómo funciona Plaspy con dispositivos como el AT-20 y explorar opciones de despliegue, visite https://www.plaspy.com. Para conocer el comportamiento específico del protocolo en la versión más reciente, las releases de firmware y los detalles de implementación del fabricante, consulte la documentación de Autoseeker en https://autoseekergps.com/.
