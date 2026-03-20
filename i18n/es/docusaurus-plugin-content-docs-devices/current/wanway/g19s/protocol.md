---
slug: /wanway/g19s/protocol
id: g19s-protocol
sidebar_label: Protocol
title: WanWay - G19S Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador WanWay G19S con Plaspy, con contexto de conexión y guía de compatibilidad
keywords:
  - WanWay G19S
  - Protocolo WanWay G19S
  - Rastreador GPS WanWay G19S
  - Protocolo GPS WanWay
  - Protocolo de comunicación G19S
  - Protocolo de rastreo G19S
  - Compatibilidad WanWay Plaspy
  - Protocolo de rastreador Plaspy
  - Protocolo de seguimiento de vehículos
  - GPS para gestión de flotas
---

# WanWay - Protocolo G19S

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS WanWay G19S con la plataforma Plaspy. Resume cómo se comunica típicamente el dispositivo, qué papel tiene el protocolo del rastreador en la integración y qué ajustes de conexión espera Plaspy para recibir datos de posición y alertas. El contenido está pensado para lectores técnicos que desean comprender el contexto de comunicación sin exponer detalles sensibles de implementación.

El WanWay G19S es un rastreador compacto GSM y GPS con antenas y sensores integrados que ofrece funciones como detección de ACC, alarma por vibración, llamada SOS, corte remoto y monitorización por micrófono opcional. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo está apuntando correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda validar el comportamiento del dispositivo contra la documentación actual del proveedor.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que usa el G19S para informar posición, estado y alarmas a un servidor remoto y para recibir gestión remota cuando está soportada. En el contexto de Plaspy, el protocolo permite que el dispositivo se identifique ante la plataforma y entregue datos GPS y de sensores que Plaspy puede interpretar y mostrar.

- Permite reportes periódicos y por evento desde el G19S hacia un endpoint remoto.
- Comunica la identidad y el estado del dispositivo para que Plaspy asocie los datos con el activo correcto.
- Transporta alertas y eventos de sensores como SOS, estado de ACC, alarmas por vibración y cambios en entradas.
- Soporta mensajes bidireccionales cuando el firmware del dispositivo permite comandos o configuración remota.
- Proporciona datos que Plaspy traduce en ubicaciones, historial y registros de alertas para monitoreo y análisis.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido para todos los rastreadores soportados y utiliza detección automática para identificar el protocolo que emplea el dispositivo. Cuando un G19S se configura para reportar a Plaspy, por lo general no es necesario seleccionar el protocolo manualmente en la plataforma.

- Plaspy escucha en el endpoint compartido d.plaspy.com que mapea a la IP pública 54.85.159.138.
- La plataforma usa el puerto 8888 para el reporte de dispositivos; todos los dispositivos en Plaspy usan el mismo puerto.
- Los equipos pueden reportar usando TCP o UDP según la configuración del dispositivo y las capacidades del firmware.
- Si el G19S apunta al endpoint de Plaspy y la ruta de red permite la conectividad, Plaspy detectará el protocolo automáticamente y comenzará a procesar los datos entrantes.
- La selección manual de protocolo dentro de Plaspy suele ser innecesaria cuando el dispositivo está correctamente configurado para reportar a d.plaspy.com en el puerto 8888.

## Transporte y contexto de conexión

Los ajustes a nivel de transporte determinan cómo el G19S alcanza los servidores de Plaspy pero no cambian la semántica del protocolo en un nivel superior. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, y puede reportar al nombre DNS de Plaspy o a la IP de la plataforma directamente, según la preferencia del instalador.

- Los equipos pueden apuntar al nombre DNS d.plaspy.com o a la IP 54.85.159.138.
- Plaspy acepta tanto UDP como TCP en el puerto 8888; elija el transporte que el firmware del dispositivo soporte y que se ajuste a su entorno de red.
- Todos los dispositivos de Plaspy usan el puerto 8888, lo que simplifica la configuración de firewall y red para flotas.
- Asegúrese de que el APN de la red móvil y los datos salientes estén configurados en el dispositivo para que pueda alcanzar el endpoint de Plaspy.
- Elementos de red como NAT o filtrado del operador pueden afectar la conectividad; verifique que el dispositivo pueda abrir sesiones salientes hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos soportados o detalles de comportamiento; confirme la versión de firmware al validar la compatibilidad.
- Las revisiones de hardware y accesorios opcionales (por ejemplo un micrófono o sensores externos) pueden introducir mensajes o campos adicionales en los reportes.
- Algunas funciones, como el corte remoto o la monitorización por micrófono, dependen tanto del firmware del equipo como de si Plaspy expone comandos de gestión para esa capacidad.
- La elección entre TCP y UDP puede afectar las garantías de entrega y cómo el dispositivo retransmite datos; use el transporte soportado y recomendado por el fabricante para su caso de uso.
- Valide siempre el comportamiento en un entorno de pruebas antes de un despliegue masivo para confirmar que las alertas, el manejo de SOS y la reproducción de trazas funcionen según lo esperado.
- Consulte la documentación de WanWay para parámetros de configuración específicos del dispositivo y ejemplos de ajustes para apuntar el equipo a Plaspy.

## Por qué es importante comprender el protocolo

Tener una comprensión clara y práctica del protocolo de comunicación del G19S ayuda a garantizar reportes confiables, interpretación correcta de alertas y facilita la resolución de problemas cuando los dispositivos se despliegan a escala en Plaspy.

- Acelera la configuración inicial al garantizar que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto correcto.
- Facilita la resolución de problemas cuando puede distinguir entre problemas de transporte, errores de configuración y comportamiento del firmware del dispositivo.
- Le ayuda a verificar que alertas críticas como SOS, cambios de ACC y alarmas por vibración lleguen y sean gestionadas por Plaspy.
- Permite decisiones informadas sobre actualizaciones de firmware, funciones opcionales y la selección de transporte (UDP vs TCP).
- Mejora la confiabilidad de la flota al facilitar la validación de que los dispositivos envían actualizaciones de posición y datos de traza regulares.

## Por qué usar Plaspy con este protocolo

Usar el WanWay G19S con Plaspy proporciona visibilidad centralizada de la ubicación del vehículo, alertas y rutas históricas, aprovechando la detección automática de protocolo y los ajustes de conexión compartidos de Plaspy para simplificar la integración. Para organizaciones que necesitan monitoreo, reproducción de trazas y gestión de alertas en una flota mixta, la combinación de las capacidades del hardware G19S y la plataforma Plaspy puede optimizar las operaciones y reducir la carga de integración.

Para obtener más información sobre Plaspy y cómo la plataforma funciona con una variedad de rastreadores GPS, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y ejemplos de configuración del WanWay G19S, verifique la información con el fabricante en https://www.wanwaytech.net/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre consulte la documentación vigente del fabricante al planear despliegues.
