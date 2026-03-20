---
slug: /queclink/gv300w/protocol
id: gv300w-protocol
sidebar_label: Protocol
title: QuecLink - GV300W Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del QuecLink GV300W y su comunicación con Plaspy para rastreo de flotas confiable
keywords:
  - protocolo QuecLink GV300W
  - protocolo GPS QuecLink GV300W
  - protocolo QuecLink GV300W Plaspy
  - protocolo de comunicación GV300W
  - protocolo de rastreo GV300W
  - protocolo rastreador GPS QuecLink
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - protocolo de rastreo vehicular
  - rastreador para gestión de flotas
---

# QuecLink - Protocolo GV300W

Esta página presenta el contexto público del protocolo para usar el rastreador QuecLink GV300W con Plaspy. Describe, a alto nivel, cómo el GV300W envía datos GNSS, entradas/salidas y telemetría útiles a Plaspy para seguimiento en tiempo real, alertas y reportes históricos, sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en consideraciones prácticas y no sensibles sobre integración en lugar de formatos de paquete de bajo nivel.

## Visión general del protocolo

El protocolo de reporte del GV300W es el mecanismo que permite al dispositivo entregar posición GNSS, estados de entradas/salidas y telemetría de eventos a Plaspy, de modo que la plataforma pueda mostrar mapas en tiempo real, líneas de tiempo y telemetría agregada. El protocolo habilita la identificación, el reporte de estado y la entrega de eventos mientras el dispositivo usa almacenamiento en búfer y controles remotos para preservar y gestionar el flujo de datos.

- Permite la entrega de posición GNSS, estado de ignición y telemetría de eventos del GV300W a Plaspy.
- Incluye la identidad del dispositivo y marcadores contextuales de eventos para que Plaspy atribuya los mensajes al activo correcto.
- Soporta patrones de entrega fiables adecuados para cobertura intermitente combinando reportes en vivo con cargas desde búfer.
- Transmite telemetría que Plaspy utiliza para geocercas, comportamiento de conducción, alarmas por choque y remolque, y entradas de sensores.
- Funciona junto a canales de control OTA para permitir el control remoto de salidas y gestión básica del dispositivo sin alterar el flujo de reportes.

## Cómo detecta Plaspy el protocolo

Plaspy acepta tráfico de dispositivos en un único endpoint y puerto compartidos y reconocerá automáticamente el protocolo del rastreador cuando un dispositivo configurado correctamente reporte a ese endpoint. En la mayoría de implementaciones, el propietario del dispositivo no necesita seleccionar el protocolo manualmente dentro de Plaspy siempre que el rastreador apunte al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y puede usarse como el hostname de reporte del dispositivo.
- La IP del servidor de Plaspy es 54.85.159.138 y el puerto común para tráfico de dispositivos es 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según las capacidades del equipo y las condiciones de red.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- Cuando el GV300W está correctamente configurado para enviar al endpoint de Plaspy, Plaspy parseará los mensajes entrantes y los asignará al perfil del dispositivo.

## Transporte y contexto de conexión

Las opciones de transporte influyen en cómo el GV300W llega a Plaspy, pero no cambian que Plaspy aceptará e intentará parsear los mensajes. Comprender el transporte y los endpoints de conexión es importante para la configuración de red, reglas de firewall y el ajuste del dispositivo.

- El GV300W puede enviar telemetría por TCP, UDP o SMS; los reportes TCP y UDP pueden dirigirse a d.plaspy.com o a 54.85.159.138.
- El puerto 8888 es el puerto compartido que usa Plaspy para reportes TCP y UDP de dispositivos.
- Elija UDP cuando sea aceptable un menor overhead y pérdidas intermitentes de paquetes; elija TCP cuando se prefiera una conexión persistente y entrega ordenada, sujeto al soporte del dispositivo y la red.
- SMS puede usarse como transporte alterno en entornos con disponibilidad limitada de datos por paquetes y como reporte de respaldo.
- Confirme que el enrutamiento de red y las reglas de firewall permiten tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Diferencias en la versión de firmware pueden cambiar campos de mensaje, reportes soportados y comportamientos de control; siempre revise las notas de la versión del firmware del dispositivo.
- Revisiones de hardware o configuraciones de accesorios (por ejemplo lectores CAN o sensores externos) pueden afectar qué elementos de telemetría se reportan.
- Algunas funciones como control OTA, salidas con retención o canales de sensor especializados dependen de opciones de firmware habilitadas por el fabricante.
- La selección de transporte entre UDP y TCP puede afectar la fiabilidad y la semántica de entrega para cargas grandes desde el búfer.
- El comportamiento de reporte por SMS y los formatos de mensajes están definidos por el proveedor y pueden variar entre revisiones de firmware.
- Valide la compatibilidad de funciones críticas, como control de inmovilizador o reportes de combustible basados en CAN, consultando la documentación oficial de QuecLink y la compilación de firmware correspondiente.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GV300W ayuda a asegurar un despliegue exitoso, agilizar la resolución de problemas y lograr un comportamiento predecible cuando el rastreador reporta en Plaspy. Saber qué envía el dispositivo, qué espera Plaspy y cómo las elecciones de transporte afectan la entrega reduce el tiempo de configuración y mejora la confiabilidad operativa.

- Permite confirmar la configuración del dispositivo para que los mensajes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte esperado.
- Acelera la resolución de problemas cuando un dispositivo no es visible en Plaspy al aislar causas relacionadas con transporte, endpoint y firmware.
- Ayuda a planificar cargas desde búfer y recuperación de huecos en escenarios de cobertura intermitente.
- Orienta las decisiones sobre habilitar funciones OTA, salidas remotas o integraciones de accesorios que dependen del soporte de firmware.
- Establece expectativas claras sobre qué campos de telemetría estarán disponibles en Plaspy según la configuración del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el GV300W con Plaspy ofrece a las organizaciones una manera fiable de recolectar posicionamiento GNSS preciso, estados de E/S del vehículo y telemetría enriquecida en sus flotas. La combinación de las características de hardware del GV300W y la ingestión unificada de Plaspy en d.plaspy.com en 54.85.159.138 puerto 8888 simplifica los despliegues a gran escala al minimizar la configuración por dispositivo dentro de la plataforma y habilitar visibilidad y alertas centralizadas.

Para saber más sobre cómo Plaspy soporta integraciones de rastreadores y telemática de flotas, visite https://www.plaspy.com. Para obtener los detalles más actuales del protocolo del dispositivo, notas de firmware y compatibilidad de accesorios consulte la documentación del fabricante en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
