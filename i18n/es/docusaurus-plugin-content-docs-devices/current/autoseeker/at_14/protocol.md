---
slug: /autoseeker/at_14/protocol
id: at_14-protocol
sidebar_label: Protocol
title: Autoseeker - AT-14 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador Autoseeker AT-14 y cómo comunica con Plaspy para rastreo de vehículos y activos
keywords:
  - protocolo Autoseeker AT-14
  - protocolo GPS Autoseeker AT-14
  - protocolo de comunicación Autoseeker AT-14
  - protocolo de rastreo Autoseeker AT-14
  - protocolo GPS Autoseeker
  - protocolo rastreador AT-14
  - compatibilidad Autoseeker Plaspy
  - protocolo rastreador de vehículos AT-14
  - protocolo rastreador GPS magnético
  - protocolo de rastreo AT-14 2G
---

# Autoseeker - Protocolo AT-14

Esta página describe el contexto público del protocolo para usar el Autoseeker AT-14 con Plaspy. Se centra en cómo el rastreador informa posición y estado a la plataforma Plaspy en términos generales, para ayudar a usuarios técnicos a comprender el papel del protocolo del dispositivo al integrar el AT-14 en flotas o flujos de monitoreo de activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel alto y anima a verificar la documentación del fabricante cuando sea necesario.

## Visión general del protocolo

El AT-14 se comunica con un servidor para reportar posición, movimiento y estado básico usando la conectividad celular integrada del dispositivo. El protocolo define cómo el rastreador se identifica, cuándo envía actualizaciones y qué campos de datos se transmiten para que una plataforma como Plaspy pueda convertir mensajes crudos en registros útiles de ubicación y estado.

- Permite que el rastreador transmita ubicación GPS, hora y estado de movimiento a un servidor remoto para su procesamiento.
- Proporciona identificación del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correcto.
- Codifica telemetría que permite monitorear el estado de la batería, eventos de movimiento y reportes periódicos de latido (heartbeat).
- Facilita el análisis en el servidor para que los puntos de ubicación se mapeen, filtren y almacenen en Plaspy.
- Admite intervalos de reporte configurables y reportes basados en eventos según la configuración del rastreador y el firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los rastreadores en un único endpoint compartido y reconoce automáticamente el protocolo del dispositivo, por lo que en general usted no necesita seleccionar un protocolo manualmente dentro de Plaspy. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática.

- Plaspy escucha reportes del AT-14 en su endpoint público, d.plaspy.com, así como en la dirección de servidor asociada.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy maneja la diferenciación de protocolos de forma automática.
- Cuando el AT-14 está configurado para reportar a Plaspy, los mensajes entrantes se emparejan con el registro de dispositivo correcto usando los identificadores que envía el rastreador.
- La configuración típica no requiere selección manual de protocolo en Plaspy si el dispositivo está correctamente apuntado al endpoint y reportando.
- Si un dispositivo no aparece, la primera medida de solución es revisar la configuración de reporte del dispositivo y el comportamiento del firmware.

## Transporte y contexto de conexión

El AT-14 puede usar UDP o TCP para enviar reportes dependiendo de la configuración del dispositivo y las capacidades del firmware. Plaspy acepta conexiones en un único puerto para mantener la configuración sencilla entre múltiples modelos de rastreadores.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El transporte puede ser UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles para simplificar la puesta en marcha y reducir diferencias de configuración por dispositivo.
- Al configurar el AT-14, asegúrese de establecer el tipo de transporte y el endpoint correctos para que los mensajes lleguen a d.plaspy.com en el puerto 8888.
- Los entornos de red con firewalls restrictivos deben permitir tráfico saliente UDP o TCP al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte y los campos de telemetría disponibles; siempre consulte las notas de la versión del firmware para detectar diferencias.
- Las revisiones de hardware o diferentes SKU pueden implementar opciones de reporte o gestión de energía ligeramente distintas que afecten la cadencia de los mensajes.
- Pueden ser necesarios comandos de configuración o pasos de aprovisionamiento por parte del fabricante para habilitar el reporte hacia un servidor de terceros como Plaspy.
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y cualquier restricción de la red intermedia.
- Valide los identificadores del dispositivo y el reporte de IMEI para garantizar que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Confirme los ajustes de batería y modos de reposo, ya que largos modos de espera pueden alterar la frecuencia con la que el dispositivo reporta.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del AT-14 a nivel funcional ayuda a asegurar una configuración confiable, una solución de problemas más eficiente y una operación predecible a largo plazo cuando el dispositivo se gestiona a través de Plaspy.

- Ayuda a verificar que el dispositivo está apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para que los datos lleguen a Plaspy.
- Permite a los administradores ajustar la configuración del dispositivo (UDP o TCP) según las políticas de red y reglas de firewall.
- Facilita la resolución de problemas al aclarar si la falta de datos se debe a la configuración, al transporte o a diferencias de firmware.
- Ayuda en la planificación de intervalos de reporte y en las compensaciones de duración de batería para implementaciones de larga espera.
- Mejora la confianza de que la detección automática en Plaspy identificará correctamente el dispositivo cuando los identificadores estén presentes.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-14 con Plaspy ofrece una forma simple de convertir los reportes del dispositivo en información accionable de ubicación y estado para el monitoreo de vehículos y activos. El diseño compacto del AT-14, su montaje magnético resistente, la larga autonomía de la batería y su conectividad 2G lo hacen adecuado para casos de uso que van desde remolques y contenedores hasta vehículos ligeros y equipos, y Plaspy se encarga de la ingesta en el servidor y de la visibilidad.

Aprenda más sobre cómo Plaspy trabaja con rastreadores GPS y dispositivos de flota en https://www.plaspy.com. Para obtener los detalles de protocolo más actuales y específicos del dispositivo, notas de firmware e instrucciones del fabricante, por favor verifique la información en el sitio de Autoseeker https://autoseekergps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
