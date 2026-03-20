---
slug: /winrich/gt003/protocol
id: gt003-protocol
sidebar_label: Protocol
title: Winrich - GT003 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador Winrich GT003 con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - Winrich GT003
  - protocolo Winrich GT003
  - protocolo GPS Winrich GT003
  - compatibilidad GT003 Plaspy
  - protocolo de seguimiento GT003
  - protocolo rastreador GPS Winrich
  - seguimiento vehicular GT003
  - telemetría GT003 Plaspy
  - gestión de flotas GT003
  - compatibilidad rastreador GPS Plaspy
---

# Winrich - Protocolo GT003

Esta página describe el contexto público del protocolo para usar el rastreador GPS Winrich GT003 con Plaspy. Explica cómo el GT003 comunica su posición y telemetría de eventos a un endpoint de Plaspy y qué papel juega el protocolo de reporte del dispositivo en la integración con paneles de control y alertas de flota. El contenido se centra en detalles de alto nivel y no sensibles del protocolo y la conexión, útiles para instaladores, integradores y operadores de flota.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el GT003 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los instaladores deben considerar estas variables al configurar y solucionar problemas para monitoreo continuo, detección de ACC, geocercas, alertas de exceso de velocidad e historial de rutas en Plaspy.

## Descripción general del protocolo

A alto nivel, el protocolo de reporte del GT003 permite que el dispositivo se identifique ante un servidor, transmita posiciones GPS y telemetría de eventos, y entregue datos de ubicación y alertas que puedan ser utilizados por una plataforma de seguimiento como Plaspy. El protocolo convierte las señales GPS y los eventos de entrada en mensajes estructurados que el servidor puede procesar para mapeo en tiempo real, procesamiento de eventos e informes históricos.

- Facilita la transmisión de coordenadas GPS y marcas de tiempo al endpoint de reporte de Plaspy.
- Transmite telemetría de eventos como estado de encendido ACC, alertas de movimiento, disparos de geocerca y eventos de exceso de velocidad.
- Permite que el servidor asocie los mensajes entrantes con una identidad única del dispositivo para seguimiento e historial de rutas.
- Soporta reportes periódicos y basados en eventos para que la telemetría sea oportuna y, al mismo tiempo, conserve uso de datos móviles.
- Proporciona el marco de comunicaciones que posibilita que Plaspy traduzca los mensajes del dispositivo en actualizaciones del panel y alertas.

## Cómo Plaspy detecta el protocolo

Plaspy procesa el tráfico de dispositivo enviado al endpoint compartido y determina automáticamente el protocolo del rastreador a partir del comportamiento de la conexión y de los mensajes entrantes. En la mayoría de los casos, cuando un GT003 está correctamente apuntado al servidor Plaspy, no se requiere selección manual del protocolo dentro de Plaspy.

- Plaspy usa un único endpoint de servidor compartido en d.plaspy.com y una IP fija de servidor 54.85.159.138 para el reporte de dispositivos.
- El puerto utilizado por todos los dispositivos en Plaspy es 8888 y Plaspy emplea el mismo puerto para cada dispositivo soportado.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint, por lo que la selección manual del protocolo generalmente no es necesaria.
- La configuración correcta del dispositivo y la dirección de reporte adecuada son los requisitos principales para una detección automática exitosa.
- Si un dispositivo envía datos de ubicación y eventos al endpoint de Plaspy, Plaspy mapeará esos datos en la plataforma para mapeo, alertas e historial.

## Transporte y contexto de conexión

Las elecciones de transporte y conexión afectan cómo el GT003 llega al servicio Plaspy. El dispositivo puede configurarse para usar UDP o TCP según su firmware y ajuste, y debe apuntar al endpoint compartido de Plaspy para entregar los datos a la plataforma.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- El host de reporte de Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de firewall y la configuración de red en implementaciones de flota.
- Elija el modo de transporte que coincida con la capacidad del dispositivo y las consideraciones de confiabilidad de la red móvil en la SIM del vehículo.
- Asegúrese de que el APN y los ajustes de datos móviles del dispositivo sean correctos para que el rastreador pueda establecer conexiones salientes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden cambiar el comportamiento exacto de reporte y los campos de telemetría disponibles, por lo que es recomendable verificar las notas de la versión del firmware cuando sea posible.
- Las revisiones de hardware o variantes regionales del GT003 pueden implementar opciones predeterminadas de transporte o reporte ligeramente distintas.
- Algunas funciones, como el comportamiento de la entrada ACC, el manejo de geocercas o el filtrado de eventos, pueden depender del firmware y variar entre unidades.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega; pruebe ambos si encuentra problemas de conectividad.
- Confirme que el GT003 esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para compatibilidad con Plaspy.
- Valide la compatibilidad contra la documentación oficial del fabricante y las notas de versión antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GT003 ayuda en la configuración, solución de problemas y mantenimiento de una telemetría confiable hacia Plaspy. Un conocimiento claro del protocolo reduce errores de configuración, acelera la resolución de fallas y favorece un comportamiento coherente de los dispositivos en una flota mixta.

- Permite un análisis más rápido de la causa raíz cuando un dispositivo no aparece en Plaspy o deja de reportar eventos esperados.
- Ayuda a los instaladores a elegir el modo de transporte y los ajustes de APN apropiados para una conectividad celular robusta.
- Aumenta la confianza al validar que los eventos de ACC, movimiento, geocerca y exceso de velocidad se entregan correctamente.
- Orienta las decisiones sobre actualizaciones de firmware y pruebas de compatibilidad antes de un despliegue masivo.
- Facilita la configuración de red y firewall al conocer el dominio del servidor Plaspy y el único puerto usado por todos los dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el Winrich GT003 con Plaspy ofrece un camino directo hacia visibilidad continua del vehículo y monitoreo basado en eventos para flotas, operaciones de alquiler y casos de seguridad. El GT003 entrega la telemetría básica que Plaspy consume para mapeo en vivo, reproducción de historial de rutas y generación de alertas, mientras que Plaspy se encarga de la ingestión, detección de protocolo y presentación de los datos a los operadores.

Si desea saber más sobre cómo Plaspy ingiere y presenta los datos de los dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información de protocolo específica y más actual en el sitio del fabricante en http://www.winrichgroup.com/en/.
