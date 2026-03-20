---
slug: /gosafe/g2c_db/protocol
id: g2c_db-protocol
sidebar_label: Protocol
title: Gosafe - G2C-DB Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Gosafe G2C-DB y cómo se comunica con Plaspy para ubicación y telemetría confiables
keywords:
  - Protocolo Gosafe G2C-DB
  - Protocolo GPS Gosafe G2C-DB
  - Protocolo Gosafe G2C-DB para Plaspy
  - Protocolo de comunicación Gosafe G2C-DB
  - Protocolo de rastreo Gosafe G2C-DB
  - Rastreador GPS Gosafe Plaspy
  - Compatibilidad G2C-DB Plaspy
  - Protocolo de rastreador de activos Gosafe
  - Rastreador GPS de larga duración Gosafe
  - Rastreo de vehículos G2C-DB
---

# Gosafe - Protocolo G2C-DB

Esta página documenta el contexto público del protocolo para usar el rastreador Gosafe G2C-DB con Plaspy. Se centra en cómo el dispositivo comunica ubicación, telemetría de movimiento, estado del equipo y cómo gestiona el almacenamiento y reenvío de datos hacia Plaspy sin exponer detalles internos del firmware o implementaciones privadas. El G2C-DB es un rastreador robusto de larga duración diseñado para semirremolques, contenedores y equipos remotos; aquí se explica cómo sus patrones de reporte y opciones de conectividad se integran con la ingestión de Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto general y recomienda verificar la documentación específica del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del G2C-DB permite la entrega confiable de posiciones GNSS, eventos de movimiento y estado del equipo desde el rastreador hacia un servidor remoto para gestión de flotas y monitoreo antirrobo. Describe cómo el dispositivo establece el transporte hacia el servidor, cómo informa datos periódicos o por eventos y de qué forma la memoria de almacenamiento y reenvío soporta cobertura intermitente.

- Permite al rastreador reportar coordenadas GNSS, marcas de tiempo y estado básico del equipo para su ingestión por Plaspy
- Transmite eventos de movimiento y manipulación detectados por el acelerómetro integrado para apoyar alertas antirrobo
- Soporta almacenamiento y reenvío de registros grabados para que los eventos no se pierdan ante cobertura celular intermitente
- Permite configuración remota y actualizaciones como FOTA a través de canales de control soportados
- Balancea la frecuencia de reportes y el consumo de energía para preservar la larga vida de la batería en despliegues de baja mantención

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y aplica detección automática de protocolo para la mayoría de los rastreadores soportados, incluido el G2C-DB. Cuando un G2C-DB debidamente configurado reporta al endpoint de Plaspy, la plataforma identifica el tipo de dispositivo y extrae telemetría utilizable sin requerir que el usuario seleccione manualmente el protocolo.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La IP pública del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones de dispositivos en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a escala
- Plaspy puede detectar automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo reporta al endpoint
- Los dispositivos configurados para usar TCP, UDP o canales SMS soportados serán asociados con su protocolo de reporte cuando se conecten o envíen datos

## Transporte y contexto de conexión

El G2C-DB puede usar canales de datos celulares para alcanzar Plaspy y la elección de transporte afecta la confiabilidad, el consumo de energía y la configuración. El dispositivo soporta reportes por TCP y por SMS como parte de sus opciones de conectividad y puede configurarse para usar UDP o TCP en el puerto compartido de la plataforma según el firmware y la configuración del equipo.

- Los dispositivos pueden apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138
- Plaspy acepta reportes de dispositivos tanto por UDP como por TCP en el puerto 8888
- El G2C-DB también soporta reportes por SMS como vía alternativa para regiones o implementaciones que dependen de mensajería
- El comportamiento de almacenamiento y reenvío garantiza que los registros se mantengan localmente y se suban cuando la cobertura se restablezca
- FOTA y la configuración remota se implementan sobre los canales de transporte soportados cuando el dispositivo y el firmware lo permiten

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar los comandos disponibles, los formatos de reporte y los modos de transporte soportados entre revisiones del equipo
- Las revisiones de hardware y las variantes regionales del modelo, como versiones LTE Cat 1 o solo GSM, pueden afectar la conectividad celular y el comportamiento de reporte
- Las opciones de configuración por parte del fabricante y las configuraciones de servidor predeterminadas pueden variar; confirme el destino de reporte y el modo de transporte del equipo antes del despliegue
- Seleccionar UDP frente a TCP puede afectar la vida de la batería, la confiabilidad de los datos y la capacidad de atravesar firewalls según el entorno de red
- Las vías de reporte por SMS y TCP coexisten pero pueden requerir direccionamiento de servidor o pasos de configuración distintos en el dispositivo
- Valide la compatibilidad y los ajustes recomendados contra la documentación oficial de Gosafe y las notas de la versión para la unidad G2C-DB y su firmware específico

## Por qué es importante entender el protocolo

Conocer cómo se comunica el G2C-DB ayuda a asegurar una configuración inicial sin contratiempos, telemetría continua confiable y una resolución de problemas más rápida cuando los dispositivos se comportan de forma inesperada. Comprender el protocolo y el contexto de transporte reduce errores de configuración y favorece una mejor planificación operativa en despliegues de larga duración.

- Asegura ajustes correctos de servidor y transporte para que los dispositivos reporten al endpoint de Plaspy de forma fiable
- Ayuda a balancear la frecuencia de reportes y la vida de la batería al seleccionar modos de reporte apropiados para el caso de uso
- Mejora la resolución de problemas al aclarar si los problemas son de red, transporte, firmware o configuración del dispositivo
- Soporta el uso adecuado de las funciones de almacenamiento y reenvío para mantener la continuidad de eventos en zonas de baja cobertura
- Orienta la planificación de actualizaciones de firmware cuando el fabricante publica nuevas funciones o correcciones del protocolo

## Por qué usar Plaspy con este protocolo

Usar el G2C-DB con Plaspy ofrece una solución práctica para organizaciones que requieren visibilidad persistente sobre semirremolques, contenedores y activos remotos, minimizando las tareas de mantenimiento. El dispositivo combina protección ambiental robusta, larga duración de batería y memoria de almacenamiento y reenvío con modos de reporte flexibles, de modo que Plaspy puede ingerir datos de ubicación, movimiento y estado del dispositivo para gestión de flotas, flujos de trabajo antirrobo y supervisión de activos.

Plaspy recibe la telemetría de dispositivos en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, para que usted pueda concentrarse en configurar los modos de reporte que se ajusten a sus necesidades operativas. Para obtener más información sobre Plaspy y cómo soporta flotas mixtas y programas de activos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la información más reciente del protocolo y del firmware específico del dispositivo en el sitio oficial de Gosafe https://gosafesystem.com/ antes de un despliegue a gran escala.
