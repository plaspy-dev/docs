---
slug: /cantrack/g06l/protocol
id: g06l-protocol
sidebar_label: Protocol
title: CanTrack - G06L Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para la compatibilidad del CanTrack G06L con Plaspy y guías de conexión para flotas
keywords:
  - protocolo CanTrack G06L
  - protocolo GPS CanTrack G06L
  - compatibilidad CanTrack G06L Plaspy
  - protocolo de rastreo G06L
  - protocolo de rastreador GPS CanTrack
  - protocolo de rastreador vehicular G06L
  - integración de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - rastreo vehicular G06L
  - telemetría y alarmas G06L
---

# CanTrack - G06L Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador GPS CanTrack G06L con Plaspy. Explica, en términos operativos y no sensibles, cómo el dispositivo se comunica con Plaspy para que integradores y operadores de flotas comprendan las opciones de conexión, el comportamiento de reporte y las consideraciones de integración en despliegues reales.

El G06L es un rastreador 4G compacto optimizado para motocicletas, automóviles, scooters y camionetas ligeras. Reporta posición GNSS, telemetría y alarmas (encendido, SOS, movimiento, exceso de velocidad y corte de energía) y puede configurarse por USB, GPRS o SMS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante verificar detalles específicos del equipo al planear despliegues.

## Descripción general del protocolo

El protocolo de comunicación del G06L permite que el dispositivo envíe coordenadas GNSS, telemetría y eventos de alarma a un servidor remoto para que plataformas como Plaspy ofrezcan ubicación en tiempo real, reproducción del historial y alertas. Esta página mantiene un enfoque de alto nivel y no expone formatos de paquete propietarios ni detalles de parseo; explica el papel del protocolo en el reporte confiable e integración.

- Transporta actualizaciones de posición y telemetría para que Plaspy pueda mostrar la ubicación en vivo y el historial del vehículo.
- Envía notificaciones de alarmas y eventos como cambios de encendido, activaciones de SOS, detección de movimiento y alertas por corte de energía.
- Incluye información de identificación del dispositivo para asociar los mensajes entrantes con el registro de dispositivo en Plaspy y asegurar la correcta asignación del activo.
- Soporta transporte sobre IP para que los datos puedan reenviarse desde GPRS o LTE hacia un endpoint de Plaspy para ingestión.
- Permite flujos opcionales de comando y control remoto cuando el dispositivo lo soporta y la funcionalidad está habilitada en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador para la mayoría de los dispositivos compatibles cuando están configurados para reportar a ese endpoint. En la práctica, esto significa que rara vez necesitará seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.

- Plaspy escucha reportes de dispositivos en d.plaspy.com y en su IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar al endpoint de Plaspy.
- La configuración típica requiere apuntar al G06L para que envíe datos a través de su canal GPRS/LTE a la dirección y puerto del servidor Plaspy.
- Si un dispositivo soporta múltiples transportes o canales de configuración (USB, SMS, GPRS), asegúrese de que el canal activo de datos esté configurado para reportar a d.plaspy.com en el puerto 8888.

## Transporte y contexto de conexión

El G06L soporta reportes basados en IP sobre redes celulares y puede configurarse para usar UDP o TCP según el firmware del dispositivo, la red del operador y la preferencia del instalador. Plaspy admite ambos transportes en el puerto compartido, de modo que la elección de conectividad puede ajustarse a las condiciones locales sin cambiar la configuración de la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y ajustes del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 para alcanzar el endpoint de ingestión.
- Plaspy usa el mismo puerto para todos los dispositivos, evitando la necesidad de configurar puertos por dispositivo en la mayoría de los despliegues.
- Use el transporte (UDP o TCP) que ofrezca el mejor equilibrio para su red: UDP para menor sobrecarga, TCP para fiabilidad de sesión cuando esté disponible.
- Si el APN del operador móvil o reglas de firewall son restrictivas, confirme que las conexiones salientes hacia el puerto 8888 estén permitidas desde la SIM del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el comportamiento de reporte y los campos disponibles; confirme la revisión de firmware al validar compatibilidad.
- Las revisiones de hardware y las variantes de características opcionales (por ejemplo, distintas opciones de E/S o antena) pueden cambiar qué campos de telemetría se envían.
- Algunos detalles de implementación son específicos del fabricante; siempre consulte la hoja de datos y las guías de configuración del dispositivo.
- La selección de transporte (UDP vs TCP) es una decisión de configuración y puede influir en las características de entrega de mensajes en condiciones de conectividad deficiente.
- La detección automática de Plaspy reduce pasos manuales de configuración, pero se requiere la dirección/puerto correctos y reportes activos para que la detección tenga éxito.
- Si planea usar SMS o USB para configuración, verifique los comandos y la sintaxis con la documentación más reciente de CanTrack antes de aplicar cambios.

## Por qué es importante comprender el protocolo

Comprender cómo el G06L se comunica con Plaspy ayuda a asegurar instalaciones exitosas, reportes predecibles y una resolución más rápida de problemas. Tener expectativas claras sobre transporte, endpoints y comportamiento de firmware reduce la fricción en la integración y el tiempo de inactividad operativo.

- Asegura la configuración correcta del servidor y puerto del dispositivo para que los datos lleguen a Plaspy sin necesidad de seleccionar el protocolo manualmente.
- Facilita la resolución de problemas de reporte al verificar el transporte, la señal y si el dispositivo apunta a d.plaspy.com en el puerto 8888.
- Orienta la gestión de firmware y la planificación de actualizaciones OTA para mantener compatibilidad y paridad de funciones.
- Apoya decisiones informadas sobre elección de transporte, intervalos de reporte y gestión de energía para reportes con respaldo de batería.
- Ayuda a mapear los campos de telemetría del dispositivo a los paneles y alertas de Plaspy para un monitoreo operacional preciso.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G06L con Plaspy ofrece una solución de rastreo discreta y con muchas funciones, diseñada para aplicaciones vehiculares y flotas livianas. El diseño compacto con antena interna del G06L, batería de respaldo para reportes de corte de energía, detección de encendido y almacenamiento offline combinan bien con la ubicación en vivo, la reproducción histórica y las capacidades de alerta de Plaspy para soportar flujos de trabajo de antirrobo, gestión de flotas y telemática para seguros.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el G06L, visite https://www.plaspy.com para explorar las funciones de la plataforma y opciones de despliegue. Para obtener los detalles más recientes sobre el protocolo, notas de firmware y comandos de configuración específicos del dispositivo, verifique la información vigente en el sitio del fabricante https://www.cantrackgps.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
