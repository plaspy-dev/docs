---
slug: /itriangle/at101_4g/protocol
id: at101_4g-protocol
sidebar_label: Protocol
title: iTriangle - AT101 4G Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del iTriangle AT101 4G y su comunicación con Plaspy para rastreo confiable de flotas y activos
keywords:
  - protocolo iTriangle AT101 4G
  - rastreador GPS AT101 4G
  - protocolo iTriangle Plaspy
  - comunicación AT101 4G
  - protocolo de rastreo AT101
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - rastreo de activos AT101
  - rastreador GPS de batería de larga duración
  - rastreador GPS 4G Plaspy
---

# iTriangle - Protocolo AT101 4G

Esta página ofrece el contexto público del protocolo para usar el rastreador iTriangle AT101 4G con Plaspy. Explica, en términos no sensibles, cómo el equipo se comunica con la plataforma Plaspy y qué revisar al integrar el dispositivo en flotas y procesos de monitoreo de activos. El enfoque está en el comportamiento de comunicación que afecta la configuración, la conectividad y la ingestión confiable de datos de ubicación y sensores.

El AT101 4G es un rastreador de activos inalámbrico compatible con Plaspy, con batería de 10000 mAh, soporte multi-constelación GNSS, sensores de movimiento, BLE y gestión OTA. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto en tiempo de ejecución puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles específicos del equipo deben validarse con la documentación de iTriangle cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador describe cómo el AT101 4G reporta GNSS, telemetría de sensores y eventos a un servidor remoto como Plaspy. En la práctica, esto significa que el dispositivo formatea y transmite actualizaciones periódicas de ubicación, eventos de movimiento y manipulación, y mensajes de estado para que Plaspy pueda mostrar ubicación en tiempo real, historial y alertas.

- Permite que el AT101 envíe posiciones GNSS y eventos de sensores al equipo a Plaspy para mapeo y alertas
- Transporta información de identificación y estado para que Plaspy asocie los mensajes con el registro correcto del dispositivo
- Soporta buffering local para que los registros en cola se transmitan tras pérdidas temporales de conectividad
- Permite la configuración y gestión de firmware por aire (OTA) coordinada con los flujos de trabajo de Plaspy
- Entrega mensajes basados en eventos para movimiento, geocercas y manipulación que generan notificaciones en Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint compartido de Plaspy. En la mayoría de los casos no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está configurado para transmitir al endpoint y puerto correctos de Plaspy.

- Plaspy escucha en una dirección de servidor y puerto compartidos para que los dispositivos reporten a un endpoint común
- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- El puerto usado por Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888
- Cuando el AT101 reporta al endpoint de Plaspy, la plataforma detectará y ruteará los mensajes entrantes al registro de dispositivo correspondiente

## Contexto de transporte y conexión

El contexto de conexión determina cómo el AT101 establece una sesión y entrega telemetría a Plaspy. El dispositivo soporta enlace celular y puede configurarse para usar UDP o TCP según la configuración y las condiciones de red.

- El AT101 puede configurarse para enviar datos por UDP o TCP en el puerto 8888
- Los equipos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados para simplificar la configuración de firewalls y redes
- Verifique que la SIM del dispositivo y la red móvil tengan conectividad saliente al endpoint y puerto de Plaspy
- La fiabilidad de la conexión y la selección del transporte pueden afectar el consumo de batería y la lógica de reintentos

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar la frecuencia de reporte, los campos disponibles y los protocolos de transporte soportados
- Revisiones de hardware o variantes regionales pueden alterar las constelaciones GNSS disponibles, las bandas de radio o el comportamiento de los sensores del equipo
- Ajustes o aprovisionamiento del lado del fabricante pueden afectar la dirección de servidor y el tipo de transporte predeterminado que usa el rastreador
- UDP se usa comúnmente para reportes de bajo overhead, mientras que TCP puede elegirse para una entrega orientada a sesión más fiable según la configuración del dispositivo
- Valide cualquier paso de configuración del dispositivo contra la documentación de iTriangle al cambiar objetivos de servidor o ajustes de transporte
- Confirme el comportamiento OTA y FOTA para su compilación de firmware antes de desplegar cambios de configuración a gran escala

## Por qué importa conocer el protocolo

Comprender el protocolo de comunicación del AT101 ayuda a evitar brechas de integración y reduce el tiempo de resolución de problemas cuando los dispositivos no aparecen en Plaspy como se espera. También permite planificar presupuestos de energía, la resiliencia de conectividad y la fidelidad de eventos.

- Asegura que el servidor y puerto correctos estén configurados para que los datos lleguen a Plaspy de forma confiable
- Ayuda a interpretar por qué algunos eventos o campos de telemetría aparecen distinto entre versiones de firmware
- Guía la configuración de red y firewall para que los dispositivos alcancen d.plaspy.com o 54.85.159.138 en el puerto 8888
- Informa las compensaciones de energía y reporte para optimizar la vida útil de la batería en despliegues de larga duración
- Facilita una gestión OTA coordinada para que los cambios de firmware y configuración se comporten según lo previsto en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el iTriangle AT101 4G con Plaspy ofrece una vía práctica para obtener visibilidad continua y flujos de trabajo basados en eventos para activos que requieren monitoreo inalámbrico de larga duración. Plaspy centraliza los datos de ubicación, movimiento, geocerca y manipulación del AT101 en mapas, historial y alertas para que los equipos puedan actuar sobre inteligencia en tiempo real e histórica.

Para conocer más sobre cómo Plaspy soporta la incorporación de dispositivos, la visualización de telemetría y la gestión remota de equipos, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento de firmware pueden cambiar con el tiempo, por lo que se recomienda verificar los detalles más recientes del protocolo específico del dispositivo y las notas de firmware en el sitio del fabricante en https://www.itriangle.net/.
