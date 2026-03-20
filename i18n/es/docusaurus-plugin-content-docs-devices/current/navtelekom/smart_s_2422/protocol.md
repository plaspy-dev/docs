---
slug: /navtelekom/smart_s_2422/protocol
id: smart_s_2422-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-2422 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo SMART S-2422 de Navtelekom para integrar, configurar y resolver problemas con Plaspy
keywords:
  - protocolo Navtelekom SMART S-2422
  - protocolo GPS SMART S-2422
  - protocolo de rastreo Navtelekom
  - compatibilidad SMART S-2422 Plaspy
  - protocolo rastreador GPS Navtelekom
  - rastreo vehicular SMART S-2422
  - integración de dispositivos Plaspy
  - protocolo de comunicación rastreadores de flota
  - envío de telemetría SMART S-2422
  - protocolo rastreador GNSS GSM
---

# Navtelekom - Protocolo SMART S-2422

Esta página resume el contexto público del protocolo para usar el rastreador Navtelekom SMART S-2422 con Plaspy. Describe, a un nivel no sensible y de forma general, cómo el dispositivo se comunica con Plaspy y señala los ajustes de conexión y las consideraciones prácticas para la configuración, el monitoreo y la resolución de problemas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el SMART S-2422 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en los hechos públicos comunes necesarios para que el equipo reporte de forma fiable a Plaspy.

## Visión general del protocolo

El protocolo de reporte del SMART S-2422 es el mecanismo por el cual el rastreador transmite posición GNSS, telemetría y eventos de entradas/salidas a un servidor como Plaspy. En la práctica, este protocolo permite que el dispositivo se identifique, envíe datos de ubicación y sensores con sello de tiempo, y genere eventos que Plaspy pueda mostrar en paneles y alertas.

- Proporciona reporte continuo de ubicación GNSS y telemetría para seguimiento en tiempo real y reproducción histórica.
- Incluye identidad y estado del dispositivo para que Plaspy pueda asociar los mensajes con un rastreador específico.
- Transmite eventos de entradas y salidas, como ignición, puertas, sensor de combustible y activaciones del acelerómetro.
- Soporta transporte sobre redes móviles para que el equipo pueda enviar datos a un endpoint central de Plaspy.
- Permite a Plaspy interpretar los datos entrantes en eventos de flota, alertas y analíticas útiles.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint y puerto compartidos, y está diseñado para detectar automáticamente el protocolo del rastreador cuando los dispositivos están configurados correctamente. En la mayoría de los casos usted no necesita seleccionar o registrar un protocolo manualmente dentro de Plaspy si el rastreador está apuntando al servidor de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que es el host recomendado para configurar en el equipo.
- La IP del servidor Plaspy es 54.85.159.138 y Plaspy acepta conexiones en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el SMART S-2422 reporta al endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el despliegue y la configuración.
- Normalmente los usuarios configuran el servidor de carga y los intervalos de reporte con la herramienta del proveedor y luego verifican la conectividad hacia el endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión para el SMART S-2422 dependen del módem del dispositivo y de su configuración. El rastreador puede enviar datos a Plaspy usando transporte TCP o UDP estándar en el puerto compartido de Plaspy, según las capacidades del equipo y las opciones de carga seleccionadas en el configurador del dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte de la red y del firmware.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en un único puerto común para todos los modelos soportados, lo que facilita la configuración de firewalls y redes.
- La selección del transporte (UDP vs TCP) puede afectar la semántica de entrega y debe elegirse según las herramientas del dispositivo y la fiabilidad de la red.
- Confirme la cobertura de la red móvil y la configuración de la SIM para que el dispositivo pueda establecer una conexión saliente al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte y los campos de los mensajes; siempre verifique los detalles del firmware al solucionar problemas.
- Diferentes hardware o lotes de producción pueden presentar variaciones menores en el protocolo aun dentro de la misma familia de modelos.
- La elección entre TCP o UDP puede depender del firmware del SMART S-2422 y de las opciones disponibles en la utilidad NTC Configurator.
- Las utilidades de configuración del fabricante y las plantillas de servidor por defecto pueden incluir valores prellenados que deben actualizarse para apuntar a d.plaspy.com o a la IP del servidor Plaspy.
- Verifique que el APN y la configuración de la SIM del dispositivo permitan subir datos a servidores externos antes de asumir problemas de protocolo.
- Consulte las notas de lanzamiento del fabricante para actualizaciones de firmware que modifiquen cómo se codifica o reporta la telemetría o los eventos I/O.
- Siempre que sea posible, pruebe un solo dispositivo de forma completa con Plaspy antes de un despliegue masivo para confirmar el comportamiento esperado.

## Por qué es importante entender el protocolo

Conocer cómo el SMART S-2422 se comunica con Plaspy facilita la configuración, acelera la resolución de problemas y mantiene la fiabilidad operativa a lo largo del tiempo. Tener una visión clara del contexto de comunicación reduce errores de configuración y orienta las comprobaciones cuando faltan datos o los eventos no son los esperados.

- Asegura los ajustes correctos del servidor de carga y transporte para que los reportes lleguen a d.plaspy.com en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad enfocando las comprobaciones en SIM, APN, modo de transporte y accesibilidad del endpoint.
- Mejora el mapeo de eventos entre entradas del dispositivo y alertas de Plaspy al alinear la configuración del equipo con las expectativas de la plataforma.
- Orienta las decisiones sobre actualizaciones de firmware cuando cambian el comportamiento o se requieren nuevos campos de telemetría.
- Reduce el tiempo de despliegue al aprovechar el mismo puerto de Plaspy y la detección automática de protocolo para modelos soportados.

## Por qué usar Plaspy con este protocolo

Usar el SMART S-2422 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar posición GNSS, telemetría y eventos I/O de rastreadores compactos en una plataforma unificada. La capacidad de Plaspy para recibir datos en un único endpoint compartido y detectar automáticamente el protocolo del rastreador reduce la complejidad de configuración y permite que los equipos se concentren en casos de uso operativos como despacho, monitoreo de combustible y análisis de comportamiento del conductor.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el SMART S-2422, visite https://www.plaspy.com. Para obtener la información más actualizada sobre protocolo específico del dispositivo, comportamiento de firmware y detalles de implementación, verifique la información en el sitio del fabricante https://www.navtelecom.ru/ ya que el soporte de protocolo y las características de firmware pueden cambiar con el tiempo.
