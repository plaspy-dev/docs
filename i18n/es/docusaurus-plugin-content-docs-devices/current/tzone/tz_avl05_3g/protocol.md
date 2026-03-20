---
slug: /tzone/tz_avl05_3g/protocol
id: tz_avl05_3g-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL05 3G Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para conectar el rastreador TZone TZ-AVL05 3G a Plaspy con guía de conexión y compatibilidad
keywords:
  - protocolo tzone tz-avl05 3g
  - protocolo gps tzone tz-avl05 3g
  - tzone tz-avl05 3g plaspy
  - protocolo de rastreo tz avl05 3g
  - protocolo rastreador gps tzone
  - protocolo de seguimiento de vehículos tzone
  - compatibilidad tz avl05
  - protocolo de dispositivo plaspy
  - integración rastreador gps plaspy
  - guía de protocolo tzone
---

# TZone - Protocolo TZ-AVL05 3G

Esta página resume el contexto público del protocolo para usar el rastreador GPS TZone TZ-AVL05 3G con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se emplean y puntos prácticos a considerar al integrar el equipo para monitoreo de flotas y aplicaciones de seguridad.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, revisión de hardware e implementación del fabricante. El TZ-AVL05 3G soporta el protocolo estándar TZONE e incluye funciones habituales de rastreo vehicular, como reportes periódicos de posición, alarmas y almacenamiento en búfer cuando falta señal, todo lo cual afecta la forma en que el equipo comunica con un servidor como Plaspy.

## Resumen del protocolo

El protocolo del TZ-AVL05 3G define cómo el rastreador informa posición, estado e información de alarmas a un servidor remoto y cómo se pueden aplicar comandos o configuraciones remotas si el dispositivo lo soporta. A nivel público, el objetivo del protocolo es entregar de forma fiable la ubicación y los eventos del equipo para que Plaspy los presente en la plataforma.

- Permite que el equipo reporte posición GPS, movimiento y eventos de alarma a un servidor backend para su procesamiento y visualización.
- Incluye información de identidad para que el servidor asocie los datos entrantes con el vehículo o el registro de dispositivo correcto.
- Soporta reportes periódicos y almacenamiento en búfer para que los datos no se pierdan cuando el dispositivo está temporalmente fuera de cobertura.
- Transporta señales de estado y alarmas como SOS, corte de energía, desconexión de antena, violaciones de geo-cercas y alertas de velocidad al servidor.
- Permite configuración remota y actualizaciones de firmware cuando el rastreador y el fabricante soportan comportamiento OTA.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint de servidor compartido y determina automáticamente el protocolo del rastreador, por lo que por lo general usted no necesita elegir un protocolo manualmente en la plataforma. La configuración correcta del dispositivo para reportar a Plaspy es el requisito principal para la detección automática.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo.
- El puerto es 8888 y este mismo puerto se usa para todos los dispositivos en Plaspy.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido.
- En la mayoría de los casos solo necesita apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y asegurarse de que envíe sus reportes estándar.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el rastreador alcanza físicamente el servicio de Plaspy en la red. El TZ-AVL05 3G puede usar datos GSM para enviar sus reportes y soporta modos de transporte estándar que se configuran comúnmente en rastreadores vehiculares.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el transporte elegido y las capacidades del firmware.
- Los equipos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y la incorporación de dispositivos.
- Elija TCP para entrega confiable cuando el rastreador y la red lo soporten, o UDP cuando se prefiera menor overhead o menor latencia y el equipo implemente lógica de reenvío.
- Asegúrese de que el APN y los ajustes de datos GSM del rastreador sean válidos para que el dispositivo pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar el timing de mensajes, las alarmas disponibles o campos opcionales que recibe el servidor.
- Las revisiones de hardware u módulos opcionales (por ejemplo sensores externos, dispositivos RS232 o registro en tarjeta TF) pueden añadir o modificar los datos reportados.
- La selección de transporte (UDP vs TCP) es una elección de configuración del dispositivo que afecta las características de entrega y debe coincidir con la capacidad del equipo y las condiciones de la red.
- La presencia de funciones como actualizaciones OTA, almacenamiento en búfer y soporte de ID de conductor puede variar según el firmware y las opciones de modelo.
- Verifique la compatibilidad de características específicas como corte remoto de combustible, respaldo en tarjeta TF o periféricos RS232 según la documentación del equipo.
- Para detalles precisos y específicos de firmware consulte los recursos oficiales del fabricante antes de confiar en comportamientos no documentados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el TZ-AVL05 3G reporte de manera confiable a Plaspy, evita brechas de datos y agiliza la resolución de problemas cuando surjan incidencias. También le ayuda a elegir los ajustes de transporte adecuados y a confirmar qué alarmas y sensores opcionales estarán disponibles en su implementación.

- Diagnóstico más rápido cuando los reportes no aparecen, porque usted puede revisar primero APN, modo de transporte y configuración del endpoint.
- Mejor planificación del uso de funciones como geo-cercas, monitoreo de combustible o cortes remotos al saber qué datos puede enviar el dispositivo.
- Gestión del ciclo de vida del equipo mejorada cuando se anticipan cambios de firmware, verificando cómo pueden afectar los reportes.
- Expectativas de integración más claras al añadir periféricos opcionales como ID de conductor o sensores de temperatura.
- Menor tiempo de despliegue al configurar un endpoint y un comportamiento de puerto consistente en toda la flota.

## Por qué usar Plaspy con este protocolo

Usar el TZ-AVL05 3G con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de posición en tiempo real, alarmas y sensores en una sola plataforma de gestión de flotas. El endpoint compartido de Plaspy y la detección automática de protocolo agilizan la incorporación para que los dispositivos que hablan el protocolo estándar TZONE puedan comenzar a reportar con una configuración mínima en la plataforma.

Si desea evaluar opciones de integración o confirmar comportamientos específicos de alarmas, actualizaciones OTA o interfaces opcionales, consulte la documentación de Plaspy y las guías de configuración del dispositivo. Para más información sobre cómo Plaspy gestiona las conexiones de dispositivos visite https://www.plaspy.com. Verifique siempre los últimos detalles del protocolo específico por dispositivo, comportamiento de firmware y funciones del fabricante en el sitio oficial de TZone http://www.tzonedigital.com/ ya que los detalles de implementación pueden cambiar con el tiempo.
