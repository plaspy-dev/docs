---
slug: /xexun/tk_103_2/protocol
id: tk_103-2-protocol
sidebar_label: Protocol
title: Xexun - TK-103-2 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Xexun TK-103-2 con Plaspy y garantizar comunicación y compatibilidad del dispositivo
keywords:
  - Protocolo Xexun TK-103-2
  - Protocolo GPS Xexun TK-103-2
  - Comunicación Xexun TK-103-2
  - Protocolo de rastreo TK-103-2
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo para rastreador GPS
  - Protocolo de rastreo de vehículos Xexun
  - Integración TK-103-2 con Plaspy
  - Protocolo de reportes del rastreador
  - Rastreo de flotas Xexun
---

# Xexun - Protocolo TK-103-2

Esta página describe el contexto del protocolo público para usar el rastreador GPS Xexun TK-103-2 con Plaspy. Se centra en cómo el dispositivo comunica con un endpoint del servidor Plaspy y en qué aspectos considerar al integrar este modelo en un flujo de monitoreo de flotas o activos. El contenido se basa en la descripción del dispositivo y en principios generales de protocolo sin exponer detalles privados de implementación.

El Xexun TK-103-2 es un equipo versátil empleado en vehículos particulares, flotas de arrendamiento, seguimiento anti robo de equipos de exterior y gestión de vehículos corporativos. Entre las funciones habitualmente asociadas a este modelo están consultas de ubicación en tiempo real, reporte periódico por intervalos programados, múltiples tipos de alarmas, reproducción de trayectos históricos, geocercas, posibilidad de actualización remota, funcionamiento con doble SIM y almacenamiento local opcional. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento concreto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo del TK-103-2 define cómo el rastreador envía información de ubicación, estado y alarmas a un servidor remoto, y cómo el servidor puede emitir comandos de configuración o consultas. Para la integración con Plaspy, lo importante es asegurar que el equipo pueda reportar al endpoint de Plaspy y que el servidor reciba los datos necesarios para el procesamiento de ubicación, eventos y alarmas.

- Permite que el dispositivo reporte actualizaciones periódicas de ubicación y responda a consultas de ubicación inmediatas hacia un servicio remoto.
- Transmite eventos de alarma y de estado para que Plaspy pueda mostrar alertas por velocidad, vibración, pérdida de energía, SOS y otras condiciones.
- Incluye información de identificación y estado del dispositivo para que la plataforma asocie los reportes entrantes con el activo correcto.
- Soporta configuración remota y gestión de firmware cuando el fabricante y el dispositivo lo permiten.
- Proporciona los elementos de datos que Plaspy necesita para la reproducción histórica, la evaluación de geocercas y los paneles de monitoreo de flota.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos e identifica el protocolo del rastreador según el comportamiento del dispositivo y los datos reportados. Dado que muchos rastreadores comparten patrones de reporte comunes, Plaspy está diseñado para detectar automáticamente el protocolo, por lo que normalmente no es necesario seleccionar manualmente el protocolo en la plataforma cuando el dispositivo está configurado correctamente.

- Plaspy escucha en un único endpoint y puerto compartidos para simplificar la configuración de dispositivos.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, usando el puerto 8888 como receptor.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante y asocia los mensajes con el registro de dispositivo correspondiente.
- Cuando un rastreador está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy se encargará de la detección del protocolo y del procesamiento de datos.
- Normalmente, usted solo necesita apuntar el rastreador al endpoint de Plaspy y verificar la conectividad de red para el reconocimiento automático del protocolo.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento determinan cómo el TK-103-2 alcanza el endpoint de Plaspy. La práctica habitual es configurar el dispositivo para que reporte al dominio o IP del servidor Plaspy y seleccionar el modo de transporte que soporte el equipo y la red.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración de la red local.
- Se puede apuntar a d.plaspy.com o directamente a 54.85.159.138 si se prefiere una IP fija.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y las reglas de firewall en despliegues de flota.
- Elija UDP para reportes periódicos ligeros cuando esté disponible, o TCP cuando se requiera un transporte orientado a sesión más confiable y el dispositivo lo soporte.
- Verifique la configuración de la red móvil o del operador de la SIM si usa funciones de doble SIM para garantizar un reporte ininterrumpido al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, las funciones soportadas y las alarmas disponibles; siempre confirme la versión de firmware del dispositivo.
- Las revisiones de hardware y accesorios opcionales como antenas externas o almacenamiento SD pueden afectar el comportamiento y los campos de datos disponibles.
- Configuraciones del fabricante o variantes regionales de firmware pueden introducir diferencias en la implementación de ciertas alarmas o comandos remotos.
- La selección de transporte entre UDP y TCP puede afectar la entrega y debe concordar con la configuración del dispositivo y las limitaciones de la red.
- Los equipos con doble SIM pueden cambiar de red y de dirección IP; asegúrese de que el dispositivo permanezca configurado para reportar a d.plaspy.com o 54.85.159.138 para que Plaspy reciba las actualizaciones de forma consistente.
- Valide la compatibilidad y las funciones disponibles contra la documentación oficial de Xexun para detalles específicos por modelo y firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar reportes fiables, manejo correcto de eventos y una resolución de problemas más rápida al integrar el TK-103-2 con Plaspy. Conocer cómo el rastreador se comunica con el endpoint de Plaspy reduce el tiempo de puesta en marcha y mejora la estabilidad a largo plazo.

- Garantiza que el dispositivo esté configurado para enviar los tipos de reportes y alarmas correctos a Plaspy para el monitoreo operativo.
- Ayuda a identificar por qué un dispositivo podría no aparecer en Plaspy cuando la red, el transporte o la dirección están desalineados.
- Apoya las decisiones sobre la selección del modo de transporte y las reglas de firewall al desplegar a escala.
- Facilita la interpretación de diferencias en el comportamiento del dispositivo por actualizaciones de firmware o cambios de configuración del fabricante.
- Aumenta la confianza al validar la reproducción histórica, los eventos de geocerca y la entrega de alarmas en la interfaz de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Xexun TK-103-2 con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación de vehículos y equipos, de las alarmas y del historial de movimiento. La plataforma de Plaspy procesa los reportes entrantes de rastreadores compatibles, permitiendo supervisión de flotas, monitoreo de geocercas, alertas y reproducción de rutas históricas para la toma de decisiones operativas.

Si desea conocer más sobre cómo funciona Plaspy con rastreadores GPS como el TK-103-2, visite https://www.plaspy.com. Para obtener detalles más actuales sobre el protocolo del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de Xexun https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
