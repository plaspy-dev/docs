---
slug: /cantrack/6000mah/protocol
id: 6000mah-protocol
sidebar_label: Protocol
title: CanTrack - 6000mAh Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del CanTrack 6000mAh GF50 y su comunicación con Plaspy para seguimiento de activos y flotas
keywords:
  - Protocolo CanTrack 6000mAh
  - Protocolo CanTrack GF50
  - Protocolo GPS CanTrack 6000mAh
  - Compatibilidad CanTrack 6000mAh con Plaspy
  - Protocolo rastreador GPS GF50
  - Protocolo rastreador de activos Plaspy
  - Protocolo de rastreo de flotas CanTrack
  - Protocolo rastreador magnético de activos
  - Guía de protocolo de rastreadores GPS
  - Protocolo de dispositivo Plaspy
---

# CanTrack - Protocolo 6000mAh

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GPS magnético CanTrack 6000mAh, modelo GF50, con la plataforma Plaspy. Se centra en cómo el dispositivo reporta ubicación, estado y eventos de alarma a Plaspy en términos generales y no sensibles, y qué puede esperar al integrar el rastreador en su flujo de trabajo de gestión de flotas o activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo, los intervalos de reporte y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware o la configuración del fabricante; por eso esta página enfatiza el contexto de comunicación más que los detalles internos del dispositivo.

## Visión general del protocolo

El GF50 transmite telemetría, fijaciones de posición y notificaciones de eventos a una plataforma backend usando su módem celular integrado y receptor GNSS. El protocolo de comunicación define cómo el rastreador se identifica ante el servidor, envía datos posicionales y de estado, y reporta alarmas como manipulación, vibración, ruptura de geocerca y batería baja.

- Permite transmisiones periódicas y por evento de posiciones GPS y estado del dispositivo a Plaspy para monitoreo en tiempo real y reproducción histórica.
- Incluye metadatos que permiten asociar un dispositivo a una cuenta y poblar el estado del equipo, como nivel de batería, estado de movimiento y tipo de alarma.
- Soporta múltiples modos de trabajo en el dispositivo, como tiempo real, por intervalos y activación por reloj, los cuales afectan cuándo y cómo se generan los mensajes del protocolo.
- Permite que la plataforma reciba eventos de alarma con marca temporal y contexto de ubicación para geocercas, vibración y alertas antimanipulación.
- Proporciona la carga útil que Plaspy ingiere y normaliza para paneles, alertas e informes sin que el usuario tenga que manejar detalles de bajo nivel.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador según los datos que envía el dispositivo. En la mayoría de los casos, solo es necesario configurar el equipo para que reporte al endpoint de Plaspy y la plataforma mapeará la telemetría entrante al registro correcto del dispositivo.

- Plaspy usa un único endpoint de servidor compartido para el reporte de dispositivos, lo que simplifica la configuración.
- La plataforma detecta automáticamente el protocolo del rastreador, por lo que normalmente no hace falta seleccionar el protocolo manualmente si el dispositivo apunta al endpoint correcto.
- La identificación correcta del dispositivo depende de que este incluya información identificadora en sus reportes habituales.
- Si un dispositivo no aparece, verifique la configuración del servidor en el equipo y que el dispositivo pueda alcanzar el endpoint de Plaspy desde la red móvil.

## Transporte y contexto de conexión

La configuración de la conexión y la selección del transporte determinan cómo el GF50 entrega los mensajes del protocolo a Plaspy. El GF50 soporta transportes celulares comunes y puede configurarse para usar el modo de red y método de reporte que mejor equilibren la vida útil de la batería y la frecuencia de reporte.

- Los dispositivos pueden configurarse para reportar al dominio de servidor de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y las preferencias de configuración.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que facilita despliegues masivos y la gestión de configuración.
- La elección entre UDP o TCP afecta las características de entrega y se puede decidir en función del firmware del dispositivo y los requisitos operativos.
- Asegúrese de que el APN y la conectividad saliente del dispositivo permitan conexiones al endpoint de Plaspy por el transporte elegido.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la frecuencia de los mensajes, los campos disponibles o el reporte de eventos opcionales, por lo que debe verificar el firmware del rastreador al evaluar compatibilidad.
- El GF50 está disponible en variantes 2G y 4G; el soporte regional de redes y el firmware del módem pueden influir en el comportamiento de conectividad.
- Revisiones de hardware, como cambios en los módulos GNSS o celulares, pueden alterar la implementación de ciertas características del protocolo.
- La elección de transporte entre UDP y TCP suele ser configurable y puede afectar la semántica de retransmisión y entrega.
- Los valores por defecto del fabricante y los comandos SMS de configuración pueden cambiar los destinos de reporte y deben validarse.
- Siempre contraste la configuración del dispositivo con la documentación actual del fabricante cuando investigue comportamientos inesperados.

## Por qué es importante entender el protocolo

Comprender cómo el GF50 se comunica con Plaspy ayuda a asegurar una configuración fiable, un uso eficiente de la batería y un comportamiento predecible de las alarmas en sus despliegues. Tener presente el contexto de comunicación reduce errores de configuración y acelera la resolución de problemas cuando los dispositivos no aparecen en la plataforma como se espera.

- Ayuda a elegir el modo y el intervalo de reporte adecuados para balancear la vida de la batería y las necesidades de telemetría.
- Facilita el diagnóstico de problemas de conectividad al confirmar transporte, dirección del servidor y configuración de puerto.
- Aclara la relación entre las alarmas del dispositivo y los eventos que Plaspy muestra para que las alertas sean accionables.
- Permite planificar actualizaciones de firmware y revisiones de hardware que puedan cambiar el contenido o la frecuencia de los mensajes.
- Favorece la planificación de integraciones cuando se correlacionan datos del GF50 con otros sensores o sistemas vehiculares en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack 6000mAh GF50 con Plaspy ofrece a las organizaciones una combinación práctica de larga duración de batería, montaje robusto y visibilidad centralizada para monitoreo de activos y flotas. Plaspy ingiere la telemetría del rastreador y la expone mediante mapas, reproducción histórica, geocercas y alertas para que los equipos puedan responder rápidamente a robos, manipulación o excepciones operativas.

Si desea saber más sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Para los detalles específicos más actuales del protocolo del dispositivo, notas de firmware y comandos de configuración, consulte la documentación del fabricante en https://www.cantrackgps.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
