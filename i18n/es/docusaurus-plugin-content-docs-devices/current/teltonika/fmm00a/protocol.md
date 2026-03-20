---
slug: /teltonika/fmm00a/protocol
id: fmm00a-protocol
sidebar_label: Protocol
title: Teltonika - FMM00A Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el rastreador OBD II Teltonika FMM00A a Plaspy con contexto de transporte y compatibilidad
keywords:
  - Protocolo Teltonika FMM00A
  - GPS Teltonika FMM00A
  - Compatibilidad Teltonika FMM00A Plaspy
  - Protocolo OBD II FMM00A
  - Protocolo de comunicación FMM00A
  - Rastreo de vehículos Teltonika
  - Protocolo de dispositivo Plaspy
  - Rastreador OBD II GPS
  - Rastreador de flotas Teltonika
  - Telemetría FMM00A
---

# Teltonika - Protocolo FMM00A

En esta página se ofrece contexto público sobre el protocolo para usar el rastreador Teltonika FMM00A con Plaspy. El enfoque está en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se emplean y qué aspectos considerar al desplegar el FMM00A en flotas o vehículos de alquiler. Esta guía está pensada para usuarios técnicos, integradores y administradores de flota que requieren una visión precisa de la comunicación dispositivo-plataforma sin entrar en detalles de implementación privada.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El FMM00A es un rastreador OBD II plug and play con conectividad LTE Cat M1 y NB‑IoT opcional, posicionamiento GNSS y Bluetooth; transmite telemetría y diagnóstico del vehículo a Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las implementaciones deben validar la configuración frente al firmware del dispositivo y la documentación del fabricante.

## Resumen del protocolo

El protocolo define cómo se empaqueta y transmite la telemetría, la ubicación y los datos de diagnóstico desde el dispositivo hacia un servidor remoto, y cómo se aplican comandos o configuraciones de regreso al equipo. Para los usuarios de Plaspy, lo más importante es la entrega confiable de parámetros GNSS y OBD, la identificación correcta del dispositivo y la consistencia en el reporte de eventos como viajes, alertas y diagnósticos.

- Permite que el FMM00A informe posición GNSS, odómetro, consumo de combustible y parámetros OBD a Plaspy para mapeo y análisis.
- Transporta identificadores de dispositivo e información de sesión para que Plaspy asocie los datos entrantes con el registro vehicular correcto.
- Transmite datos de eventos y estados como encendido, movimiento, eventos del acelerómetro y códigos de falla.
- Soporta actualizaciones de comandos y configuración entregadas mediante flujos de gestión remota compatibles con aprovisionamiento masivo.
- Proporciona el contexto en tiempo de ejecución que Plaspy necesita para normalizar la telemetría en paneles, alertas e informes históricos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría en un endpoint y puerto compartidos y utiliza detección automática para determinar qué protocolo de rastreador está usando un dispositivo. En la mayoría de los casos, cuando el FMM00A se configura para reportar al endpoint de Plaspy, no es necesario seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha en un solo puerto para todos los dispositivos, lo que simplifica el aprovisionamiento y reduce errores de configuración.
- Cuando un dispositivo se conecta a d.plaspy.com o a 54.85.159.138 en el puerto configurado, Plaspy inspecciona los datos entrantes para identificar el protocolo de reporte.
- Los usuarios normalmente configuran el dispositivo para enviar datos al endpoint de Plaspy y eligen UDP o TCP según lo soporte el dispositivo y la red.
- La detección automática permite que Plaspy asigne la telemetría entrante al perfil de dispositivo correcto sin intervención del usuario en la mayoría de los despliegues.
- Si un dispositivo no reporta como se espera, confirme primero la configuración de red del equipo y la versión de firmware antes de ajustar parámetros en la plataforma.

## Contexto de transporte y conexión

Las decisiones sobre conexión y transporte determinan cómo viaja la telemetría desde el FMM00A hasta Plaspy y pueden afectar la latencia, la confiabilidad y la configuración de cortafuegos. El FMM00A soporta transporte por celular y puede configurarse para usar UDP o TCP hacia el endpoint de Plaspy.

- Los dispositivos pueden configurarse para enviar a d.plaspy.com o directamente a 54.85.159.138 según las preferencias de DNS y la red.
- Plaspy utiliza el puerto 8888 para las conexiones de los dispositivos y el FMM00A puede configurarse para usar UDP o TCP en el puerto 8888.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto para simplificar el aprovisionamiento de flotas y las reglas de cortafuegos.
- La elección entre UDP y TCP depende de los ajustes de firmware del dispositivo, las características de la red y la semántica de entrega deseada.
- Asegúrese de que las políticas del operador y del cortafuegos permitan conexiones salientes hacia el endpoint y puerto de Plaspy para lograr un reporte fiable.

## Notas sobre compatibilidad del protocolo

- El FMM00A es compatible con Plaspy desde el primer uso, pero el comportamiento específico puede depender de la versión de firmware del dispositivo y de variantes regionales de hardware.
- Las actualizaciones de firmware del fabricante pueden añadir funciones o cambiar el nombre de parámetros y campos reportados; valide los cambios tras las actualizaciones.
- Las revisiones de hardware u accesorios opcionales pueden exponer distintos PIDs OBD o entradas de sensores que afecten la telemetría disponible.
- La elección de transporte (UDP vs TCP) puede modificar cómo el dispositivo reintenta o confirma la entrega; seleccione el modo acorde a sus necesidades de fiabilidad.
- Herramientas de gestión remota del fabricante, como Teltonika FOTA WEB, pueden ayudar con el aprovisionamiento masivo, pero verifique los ajustes de compatibilidad antes de un despliegue amplio.
- Siempre confirme la configuración del dispositivo y pruebe el reporte en un entorno controlado antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que los dispositivos estén configurados correctamente, simplifica la resolución de problemas y mejora la confiabilidad a largo plazo de la telemetría de la flota enviada a Plaspy. Conocer cómo reporta el rastreador y qué datos envía reduce el tiempo de puesta en marcha y evita brechas de información evitables.

- Permite identificar configuraciones incorrectas cuando un dispositivo no logra reportar al endpoint de Plaspy.
- Orienta la decisión entre UDP o TCP para equilibrar latencia y garantías de entrega.
- Ayuda a interpretar campos de telemetría como PIDs OBD, odómetro y valores de combustible dentro de los paneles de Plaspy.
- Facilita la planificación frente a actualizaciones de firmware, aprovisionamiento remoto y cambios relacionados con el operador móvil.
- Mejora la capacidad para correlacionar eventos del dispositivo con operaciones del vehículo para diagnóstico y alertas.

## Por qué usar Plaspy con este protocolo

Combinar el Teltonika FMM00A con Plaspy ofrece a los operadores de flota un despliegue rápido de telemetría OBD II junto con seguimiento en la nube, reportes y gestión de eventos. La instalación plug and play, el posicionamiento GNSS, la telemetría OBD y la conectividad celular eficiente hacen que el FMM00A sea apropiado para flotas de alquiler, despliegues con vehículos mixtos y operaciones que requieren parámetros de nivel OEM como odómetro real y lecturas de combustible.

Para conocer más sobre cómo Plaspy maneja la comunicación de dispositivos y la telemetría de flota, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware y la guía oficial del fabricante, verifique la información en el sitio de Teltonika en https://www.teltonika-gps.com/ ya que el soporte de protocolo y los detalles de implementación pueden cambiar con el tiempo.
