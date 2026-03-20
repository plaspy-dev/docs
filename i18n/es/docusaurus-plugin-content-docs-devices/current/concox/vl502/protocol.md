---
slug: /concox/vl502/protocol
id: vl502-protocol
sidebar_label: Protocol
title: Concox - VL502 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas para integrar el rastreador Concox VL502 OBDII con Plaspy para telemetría en tiempo real y gestión de flotas
keywords:
  - Protocolo Concox VL502
  - GPS Concox VL502
  - Compatibilidad VL502 Plaspy
  - Protocolo GPS Concox
  - Rastreo vehicular VL502
  - Protocolo rastreador OBDII
  - Gestión de flotas VL502
  - Protocolo de comunicación VL502
  - Protocolo de telemetría Concox
  - Rastreadores compatibles Plaspy
---

# Concox - Protocolo VL502

Esta página describe el contexto público del protocolo para utilizar el rastreador vehicular Concox VL502 OBDII GNSS con Plaspy. Explica cómo el VL502 transmite telemetría y eventos a la plataforma Plaspy en términos generales, sin incluir información sensible y con un enfoque práctico en la configuración y compatibilidad para uso en flotas y telemática.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del equipo; no obstante, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante. La información aquí se centra en el contexto de conexión y el rol del protocolo, no en formatos de paquete propietarios ni en detalles internos de firmware. Para implementaciones específicas y actualizaciones consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y comportamientos que permiten al VL502 enviar posiciones GNSS, telemetría obtenida por OBDII y señales de eventos a un servicio backend como Plaspy. Esta visión general pública explica el papel del protocolo para llevar datos útiles del vehículo a mapas, alertas e informes sin revelar detalles propietarios o sensibles.

- Permite que el VL502 transmita coordenadas GNSS y telemetría con marcas de tiempo a un servidor remoto para seguimiento en vivo y reproducción histórica.
- Incluye parámetros OBDII como VIN, revoluciones del motor, temperatura de refrigerante, kilometraje, estadísticas de combustible y estado de ignición para que Plaspy procese diagnósticos y métricas operativas.
- Entrega eventos basados en el acelerómetro, como frenadas bruscas, aceleraciones repentinas e impactos, que Plaspy puede usar para puntuación de seguridad y alertas.
- Soporta reportes periódicos, mensajes por eventos y actualizaciones de estado para poder monitorear la salud del dispositivo y la conectividad.
- Permite que el equipo se identifique e incluya metadatos del dispositivo que ayudan a Plaspy a asociar los datos entrantes con el vehículo y la cuenta correctos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador a partir del patrón de tráfico entrante y la identificación del equipo. En la mayoría de los casos, un VL502 correctamente configurado comenzará a reportar a Plaspy sin que sea necesario seleccionar manualmente el protocolo en la plataforma.

- Plaspy usa un puerto y un endpoint consistentes para todos los dispositivos soportados, lo que simplifica la configuración en despliegues de flota.
- Cuando un equipo reporta al endpoint de Plaspy, la plataforma compara identificadores de dispositivo y características del mensaje con el comportamiento esperado del protocolo.
- Normalmente no es necesario elegir un protocolo dentro de Plaspy si el rastreador está configurado para reportar a la dirección y puerto del servidor Plaspy.
- Plaspy puede ingerir mensajes de GNSS, telemetría OBDII y eventos, y mapearlos automáticamente a seguimiento en vivo, alertas e informes.
- Si surgen problemas de conexión, confirme la configuración de reporte del equipo y que el VL502 apunte a la dirección del servidor Plaspy.

## Transporte y contexto de conexión

El contexto de transporte describe cómo el VL502 se conecta a Plaspy a través de la red móvil. El VL502 se comunica por datos celulares y puede configurarse para usar UDP o TCP según el soporte del equipo y las necesidades del despliegue. Plaspy proporciona una dirección de servidor y un puerto compartidos para el reporte de dispositivos.

- Los equipos pueden configurarse para apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- El servidor Plaspy escucha en el puerto 8888 para el tráfico de dispositivos; el VL502 puede enviarlo por UDP o TCP a ese mismo puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las configuraciones basadas en APN para flotas.
- La elección entre UDP y TCP puede basarse en criterios de eficiencia o confiabilidad según el firmware de la unidad y las características de la red.
- Confirme los planes de datos y la configuración APN de la SIM del vehículo para que el equipo pueda alcanzar d.plaspy.com o la IP del servidor correctamente.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos de telemetría disponibles y el comportamiento de transporte; verifique la versión de firmware al diagnosticar compatibilidad.
- Las variantes de hardware y las diferencias regionales en las bandas celulares pueden afectar la conectividad y el comportamiento de conmutación entre LTE y 2G.
- Los menús de configuración del fabricante o servidores de aprovisionamiento pueden modificar la dirección de reporte predeterminada o el protocolo de transporte; asegúrese de que el equipo apunte al endpoint de Plaspy.
- Seleccionar UDP frente a TCP en el equipo afecta la entrega y la semántica de retransmisión, pero no cambia el contenido de telemetría de alto nivel enviado a Plaspy.
- Confirme que las lecturas OBDII requeridas para su caso de uso estén disponibles en el bus del vehículo y expuestas por el firmware del VL502.
- Siempre valide detalles críticos del despliegue, como el análisis del VIN, umbrales de eventos y unidades de telemetría, con datos de prueba del dispositivo y de Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VL502 ayuda a garantizar un flujo de datos confiable, agilizar la resolución de problemas e interpretar correctamente la telemetría del vehículo dentro de Plaspy. Un conocimiento práctico del contexto del protocolo facilita despliegues más fluidos y mejores resultados operativos para equipos de flota y telemática.

- Acelera la configuración al asegurar que la dirección de reporte y la configuración de transporte correctas se apliquen antes de la instalación.
- Mejora el diagnóstico al centrar la investigación en conectividad, elección de transporte y diferencias de firmware en lugar de especular sobre el contenido de los datos.
- Ayuda a interpretar la telemetría entrante para que las alertas, los cálculos de combustible y la puntuación del comportamiento del conductor se basen en las señales esperadas.
- Informa la planificación de mantenimiento porque la disponibilidad de OBDII y DTC puede variar según el firmware y la interfaz del vehículo.
- Facilita la planificación de despliegues a gran escala mediante el uso del modelo de puerto único de Plaspy y un endpoint de servidor consistente.

## Por qué usar Plaspy con este protocolo

Utilizar el Concox VL502 con Plaspy ofrece a las organizaciones una solución OBDII compacta que reporta telemetría vehicular detallada y posicionamiento GNSS a una plataforma centralizada de gestión de flota. La instalación plug and play en el puerto OBDII del VL502, combinada con GNSS dual, eventos por acelerómetro y lecturas de diagnóstico OBD, lo hacen adecuado para operaciones de flota, seguros basados en uso, monitoreo en concesionarios y flujos de trabajo antirrobo cuando se integra con Plaspy.

Los ajustes de conexión compartidos de Plaspy y la detección automática del protocolo reducen la carga de configuración durante el despliegue y permiten que el VL502 proporcione posiciones en tiempo real, parámetros del motor y datos de eventos a mapas, alertas e informes. Para saber más sobre Plaspy visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en https://www.iconcox.com/
