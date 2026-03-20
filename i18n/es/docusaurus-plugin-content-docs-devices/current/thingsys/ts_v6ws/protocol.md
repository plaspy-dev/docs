---
slug: /thingsys/ts_v6ws/protocol
id: ts_v6ws-protocol
sidebar_label: Protocol
title: ThingSys - TS-V6Ws Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del ThingSys TS V6Ws y cómo se comunica con Plaspy mediante ajustes de conexión compartidos
keywords:
  - ThingSys TS V6Ws
  - Protocolo TS V6Ws
  - Rastreador GPS ThingSys
  - TS V6Ws Plaspy
  - Protocolo de seguimiento vehicular
  - Comunicación rastreador GPS
  - Rastreo de flotas Plaspy
  - Compatibilidad TS V6Ws
  - Protocolo telemática vehicular
  - Protocolo de seguimiento ThingSys
---

# ThingSys - Protocolo TS-V6Ws

Esta página describe el contexto público del protocolo para usar el rastreador ThingSys TS-V6Ws con Plaspy. Resume cómo el dispositivo informa ubicación, estado y alarmas a Plaspy, y qué esperar de los ajustes de conexión que normalmente se emplean para integrarlo con la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo empieza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el TS-V6Ws puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en el contexto de comunicación público y no sensible, así como en notas prácticas de integración.

## Resumen del protocolo

El protocolo del TS-V6Ws define cómo el rastreador se identifica, cómo transmite posiciones GNSS y telemetría de sensores, y cómo se envían alarmas y actualizaciones de estado a un servidor de flotas como Plaspy. En términos prácticos, el protocolo permite reportes de ubicación confiables, notificaciones de eventos y señales de control remoto opcionales cuando el dispositivo lo soporta.

- Permite reportes periódicos o en tiempo real y configurar intervalos de telemetría para seguimiento en vivo o envíos más económicos de trazas.
- Transmite estado del vehículo y datos de sensores como el estado de encendido ACC, alarmas por vibración, eventos SOS y, opcionalmente, lecturas de combustible o temperatura.
- Entrega alarmas y notificaciones de eventos al servidor para que Plaspy genere alertas, actualice mapas y elabore informes.
- Proporciona un mecanismo para que el dispositivo se identifique y el servidor relacione el ID del equipo con un registro de cuenta en Plaspy.
- Soporta múltiples modos de transporte según la configuración del equipo para que el rastreador opere en distintas condiciones de red.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint y puerto compartidos, y utiliza esa conexión para identificar y parsear el feed del rastreador. Cuando un TS-V6Ws está configurado para reportar a Plaspy, la plataforma determina automáticamente el manejador de protocolo correcto, por lo que por lo general no es necesario seleccionar manualmente el protocolo si el dispositivo está configurado correctamente.

- Plaspy escucha en un endpoint de servidor compartido al que los dispositivos pueden apuntar para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar a la plataforma.
- Usted normalmente no necesita seleccionar un protocolo dentro de Plaspy si el TS-V6Ws está configurado para reportar al endpoint de Plaspy.
- La identificación correcta del dispositivo depende de que el equipo envíe sus datos de identificación o registro tal como lo realiza el firmware del fabricante.
- Si un dispositivo no es detectado, verificar la configuración de reporte del equipo y el comportamiento del firmware es un paso de solución de problemas importante.

## Transporte y contexto de conexión

El TS-V6Ws puede configurarse para usar modos de transporte IP estándar soportados por su firmware. Para la integración con Plaspy, los ajustes de conexión públicos están unificados para que instaladores y administradores puedan apuntar los dispositivos a la plataforma usando direcciones comúnmente disponibles.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el firmware y las opciones de configuración.
- El dominio del servidor de Plaspy para reportes es d.plaspy.com y la IP pública conocida es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que los instaladores no necesitan puertos distintos por modelo.
- Elija UDP cuando el firmware del dispositivo y las condiciones de red favorezcan el transporte por datagramas, o TCP cuando el firmware requiera una conexión persistente.
- Asegúrese de que cortafuegos de red o ajustes del APN permitan conexiones salientes a d.plaspy.com o a la IP del servidor en el puerto 8888.

## Notas de compatibilidad del protocolo

- El TS-V6Ws figura como compatible con Plaspy para monitoreo de flotas y activos, pero el comportamiento exacto puede variar según firmware y revisión de hardware.
- Actualizaciones de firmware de ThingSys pueden cambiar opciones de reporte, transportes soportados o campos de telemetría disponibles; confirme la versión de firmware activa al realizar diagnósticos.
- Variantes de hardware y versiones celulares por región pueden afectar qué modos de red están disponibles y qué funciones de firmware están presentes.
- La selección de transporte (UDP vs TCP) a menudo se configura en el equipo; confirme que la configuración del dispositivo coincida con el transporte previsto para Plaspy.
- Valide la identificación del dispositivo y los intervalos de reporte durante la configuración inicial para asegurar que Plaspy pueda detectar y mapear el equipo automáticamente.
- Consulte siempre la documentación del fabricante para conjuntos de comandos específicos del equipo, métodos de configuración y notas de lanzamiento de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar despliegues sin contratiempos, acelerar la resolución de problemas y garantizar operación confiable a largo plazo cuando el TS-V6Ws reporta a Plaspy. Tener claridad sobre el protocolo reduce errores de configuración y facilita la interpretación del comportamiento del equipo en casos límite.

- Configuración más rápida al confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte previsto.
- Mejora en la solución de problemas cuando brechas de reporte, telemetría incorrecta o alarmas faltantes se analizan en el contexto del firmware y la elección de transporte.
- Mejor planificación ante actualizaciones de firmware, para saber cuándo puede cambiar el comportamiento de reporte o la telemetría disponible.
- Expectativas claras sobre qué señales del equipo estarán disponibles en Plaspy para alertas, mapeo e informes.
- Validación más sencilla de variantes regionales y revisiones de hardware antes de un despliegue a gran escala.

## Por qué usar Plaspy con este protocolo

Usar el TS-V6Ws con Plaspy ofrece un flujo telemático práctico para flotas y operadores de activos que necesitan ubicación en tiempo real, notificaciones de eventos y telemetría configurable. Las capacidades del hardware —como GNSS de alta sensibilidad, amplio rango de voltaje de entrada y posibilidad de expandir sensores— complementan las funciones centralizadas de mapeo, alertas e informes de Plaspy para ofrecer visibilidad operativa.

Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre protocolos y firmware específicos del dispositivo en el sitio del fabricante https://www.thingsys.com/.
