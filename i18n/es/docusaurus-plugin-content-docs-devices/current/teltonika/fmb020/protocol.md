---
slug: /teltonika/fmb020/protocol
id: fmb020-protocol
sidebar_label: Protocol
title: Teltonika - FMB020 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar Teltonika FMB020 con el servidor y ajustes de conexión de Plaspy
keywords:
  - protocolo Teltonika FMB020
  - protocolo GPS FMB020
  - compatibilidad FMB020 Plaspy
  - protocolo rastreador Teltonika
  - protocolo rastreador OBD II
  - comunicación rastreador GPS
  - protocolo seguimiento vehicular
  - seguimiento sensores BLE
  - protocolo gestión de flotas
  - compatibilidad dispositivos Plaspy
---

# Teltonika - Protocolo FMB020

En esta página se describe el contexto público del protocolo para utilizar el rastreador Teltonika FMB020 con Plaspy. El enfoque está en cómo el dispositivo se comunica con el servicio de Plaspy en términos generales, cómo suele configurarse esa comunicación y qué aspectos del protocolo del rastreador son relevantes para una integración exitosa, sin exponer detalles privados o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los equipos soportados y detecta automáticamente el protocolo del rastreador cuando un FMB020 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica los conceptos comunes de conexión y reporte más que los detalles internos del dispositivo.

## Visión general del protocolo

El protocolo de reporte del FMB020 gobierna cómo el rastreador envía ubicación, telemetría OBD del vehículo y eventos de sensores BLE a un servidor. En la integración con Plaspy, el protocolo provee identificación del dispositivo, reportes periódicos y por eventos, y la entrega de elementos de datos que Plaspy utiliza para mapas, alertas y análisis.

- Permite la identificación del dispositivo para que Plaspy asocie los datos entrantes con el activo y el perfil de configuración correctos.
- Transporta información de ubicación GPS y de marca temporal para seguimiento en vivo y reproducción de historial en Plaspy.
- Transmite telemetría derivada de OBD y parámetros del vehículo que Plaspy usa para estado de encendido, datos del motor e insights de conducción eficiente.
- Reenvía entradas de sensores y balizas BLE como temperatura, humedad o movimiento para escenarios de monitoreo más completos.
- Soporta latidos (heartbeat) y reportes por eventos para que Plaspy pueda detectar dispositivos fuera de línea y activar alertas cuando se cumplan condiciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el FMB020 esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, al que se pueden apuntar los dispositivos durante la configuración.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse como alternativa al nombre DNS.
- El endpoint de Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al registro de dispositivo correcto.
- El reporte correcto del dispositivo al endpoint de Plaspy generalmente elimina la necesidad de seleccionar el protocolo manualmente en la plataforma.

## Transporte y contexto de conexión

El FMB020 puede configurarse para usar capas de transporte estándar al enviar datos a un servidor remoto. Para la conectividad con Plaspy, muchos rastreadores soportan tanto UDP como TCP y el transporte específico se selecciona durante la configuración del dispositivo.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de la flota.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar el endpoint de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall para despliegues de flota.
- Elija UDP para reportes con menor sobrecarga o TCP para sesiones que requieran fiabilidad de conexión, según sus necesidades operativas y las capacidades del firmware del dispositivo.
- Confirme la selección de transporte y los ajustes DNS o IP usando las herramientas de configuración de Teltonika o los procedimientos de aprovisionamiento antes del despliegue.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de reporte y los campos de telemetría disponibles. Revise las notas de la versión del firmware al solucionar problemas.
- Las revisiones de hardware pueden afectar funciones soportadas, como capacidades BLE o la disponibilidad de parámetros OBD.
- Las herramientas de configuración del fabricante y los servicios de gestión remota pueden modificar los destinos de reporte o los ajustes de transporte del dispositivo.
- La elección de transporte entre UDP y TCP puede afectar la semántica de entrega y debe validarse en su entorno de red.
- Confirme que las cadenas de identificación del dispositivo y los intervalos de reporte sean aceptados por Plaspy durante las pruebas iniciales para asegurar una detección y mapeo fluidos.
- Valide la compatibilidad y cualquier extensión específica del proveedor contra la documentación oficial de Teltonika al planear despliegues a gran escala.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo del rastreador facilita la configuración y las operaciones continuas, acelera la resolución de problemas y ayuda a garantizar la entrega fiable de telemetría a Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce errores de configuración y mejora la visibilidad de la flota.

- Le ayuda a elegir los ajustes de transporte y endpoint correctos durante el aprovisionamiento para un reporte fiable.
- Facilita la interpretación del comportamiento del dispositivo cuando falta telemetría o no se disparan eventos como se espera.
- Ayuda a planear reglas de firewall y red al conocer los requisitos de DNS, IP y puerto para Plaspy.
- Apoya decisiones informadas sobre actualizaciones de firmware y gestión remota para mantener los dispositivos reportando correctamente.
- Permite una mejor integración entre la telemetría OBD, los datos de sensores BLE y los conjuntos de reglas de Plaspy para alertas y reportes más precisos.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB020 con Plaspy ofrece a las flotas un rastreador OBD compacto y plug and play combinado con una plataforma que maneja automáticamente la detección de protocolo y la configuración de endpoint compartido. Esta combinación es adecuada para despliegues rápidos, telemetría continua de vehículos y escenarios que se benefician de entradas combinadas de OBD y sensores BLE.

Plaspy ofrece mapas en vivo, alertas y reportes que consumen la ubicación, los parámetros OBD y las entradas de sensores que el FMB020 puede proporcionar. Para más información sobre Plaspy y cómo soporta el seguimiento y la telemetría de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información de protocolo específica del dispositivo en el sitio del fabricante en https://www.teltonika-gps.com/
