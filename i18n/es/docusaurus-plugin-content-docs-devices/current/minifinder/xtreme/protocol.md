---
slug: /minifinder/xtreme/protocol
id: xtreme-protocol
sidebar_label: Protocol
title: MiniFinder - Xtreme Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del MiniFinder Xtreme y cómo se comunica con Plaspy para rastreo y telemetría
keywords:
  - protocolo MiniFinder Xtreme
  - protocolo GPS MiniFinder Xtreme
  - compatibilidad MiniFinder Xtreme Plaspy
  - protocolo de rastreo Xtreme
  - protocolo de comunicación MiniFinder
  - protocolo del rastreador MiniFinder
  - rastreador GPS Xtreme Plaspy
  - protocolo de rastreo de activos MiniFinder
  - protocolo de rastreo vehicular Xtreme
  - integración MiniFinder Xtreme
---

# MiniFinder - Protocolo Xtreme

Esta página describe el contexto público del protocolo para usar el rastreador MiniFinder Xtreme con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a un nivel general, qué tipos de telemetría suele entregar y cómo el comportamiento a nivel de protocolo influye en la integración y en la operación diaria. El objetivo es ofrecer un contexto claro y no sensible para ayudar en la configuración y la resolución de problemas, a la vez que se recomienda revisar la documentación oficial del fabricante.

El MiniFinder Xtreme es un rastreador GPS robusto con base magnética, batería de larga duración y sensores de movimiento y manipulación. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al backend correcto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles específicos del dispositivo deben validarse con la documentación de MiniFinder cuando sea necesario.

## Visión general del protocolo

A un nivel general, el protocolo de comunicación del Xtreme define cómo el rastreador se identifica, envía posiciones GNSS y reporta eventos de sensores a Plaspy. El protocolo garantiza que la telemetría generada por el dispositivo se transforme en eventos y datos de posición utilizables que Plaspy pueda mostrar, sobre los que pueda alertar y que pueda almacenar para informes.

- Reporta telemetría típica como posición GPS, marca de tiempo, estado de batería, eventos de movimiento o manipulación y estado de señal para que Plaspy pueda mapear y analizar.
- Proporciona identidad del dispositivo y contexto de sesión para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Permite reportes basados en eventos para reducir la transmisión de datos cuando el dispositivo está estacionario y aumentar la frecuencia durante el movimiento o alarmas.
- Soporta registro interno como respaldo cuando la cobertura se interrumpe, de modo que Plaspy pueda recibir datos acumulados cuando la conectividad se reanude.
- Funciona sobre transporte celular para entregar telemetría a un endpoint central de Plaspy para seguimiento en tiempo real y reproducción histórica.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint de backend compartido y detecta qué protocolo de rastreador se está utilizando sin que normalmente sea necesario seleccionar uno manualmente. Siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy, la detección y el parseo del protocolo los maneja automáticamente la plataforma.

- Plaspy utiliza un único endpoint de servidor compartido para el reporte de dispositivos, lo que simplifica la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que por lo general usted no necesita elegir un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint.
- Una identidad de dispositivo correcta y unos intervalos de reporte consistentes ayudan a Plaspy a asociar mensajes rápida y de forma fiable con el activo correspondiente.
- Si un rastreador no aparece en línea, verifique la configuración de reporte del equipo, la cobertura de red y que el dispositivo apunte al endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el Xtreme alcanza el backend de Plaspy pero no cambian el rol público del protocolo en sí. El dispositivo puede usar UDP o TCP en el mismo puerto en el que Plaspy escucha para todos los dispositivos, y puede apuntarse al dominio de Plaspy o a la dirección IP pública.

- El dominio del servidor de Plaspy es d.plaspy.com para reporte de dispositivos y configuración basada en DNS.
- La IP del servidor de Plaspy es 54.85.159.138 y puede usarse cuando se requiere un endpoint numérico.
- El puerto es 8888, que Plaspy utiliza como puerto de escucha para tráfico de dispositivos.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica despliegues con múltiples equipos y las guías de configuración.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y el comportamiento de las funciones; siempre anote la versión de firmware durante la resolución de problemas.
- Revisiones de hardware o variantes de modelo pueden introducir diferencias en sensores o reportes que afecten la telemetría disponible para Plaspy.
- Ajustes del lado del fabricante, como el modo de transporte por defecto o la configuración del APN, pueden requerir modificación para asegurar un reporte fiable al endpoint de Plaspy.
- Elegir UDP o TCP puede afectar las características de entrega en redes móviles con pérdida de paquetes; adecue el transporte a sus necesidades operativas y a las capacidades del dispositivo.
- Valide la compatibilidad y los ajustes recomendados según la documentación oficial de MiniFinder y las notas de versión del Xtreme.
- En caso de duda, confirme que el destino de reporte del dispositivo esté configurado al endpoint de Plaspy y que el dispositivo tenga conectividad celular.

## Por qué es importante conocer el protocolo

Comprender cómo el Xtreme se comunica con Plaspy ayuda a una configuración correcta, facilita la resolución de problemas y ofrece un comportamiento operativo predecible a lo largo del tiempo. Familiarizarse con el contexto de comunicación reduce errores de configuración y mejora la confianza en que la telemetría llegará a Plaspy de manera fiable.

- Ayuda a verificar que el dispositivo está configurado para reportar al endpoint y puerto correctos de Plaspy.
- Facilita la resolución de problemas de conectividad al acotar el alcance a transporte, APN o factores de firmware.
- Permite establecer expectativas razonables sobre la duración de la batería según reportes basados en eventos frente a reportes programados frecuentes.
- Contribuye a interpretar qué eventos y telemetría aparecerán en los feeds y alertas de Plaspy.
- Hace más sencillo planificar despliegues y ciclos de mantenimiento anticipando cómo las actualizaciones de firmware podrían modificar el comportamiento.

## Por qué usar Plaspy con este protocolo

Combinar el MiniFinder Xtreme con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad en tiempo real, alertas y reproducción histórica sin requerir selección manual del protocolo dentro de la plataforma. El diseño robusto del Xtreme, su batería de larga duración y sus sensores de evento generan la posición y la telemetría de eventos que Plaspy consume para ofrecer geocercas, gestión de alarmas e informes operativos.

Para conocer más sobre las funciones y capacidades de la plataforma Plaspy visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la guía más reciente específica del dispositivo y el firmware en el sitio del fabricante https://minifinder.se/.
