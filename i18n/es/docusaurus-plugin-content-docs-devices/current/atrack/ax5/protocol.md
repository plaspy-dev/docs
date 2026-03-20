---
slug: /atrack/ax5/protocol
id: ax5-protocol
sidebar_label: Protocol
title: ATrack - AX5 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar ATrack AX5 con el servidor Plaspy y consideraciones de conectividad
keywords:
  - Protocolo ATrack AX5
  - Protocolo GPS ATrack AX5
  - Protocolo de comunicación AX5
  - Compatibilidad AX5 Plaspy
  - Protocolo rastreador OBDII ATrack
  - Rastreo GPRS AX5
  - Rastreo vehicular AX5
  - Integración AX5 CAN Bus
  - Protocolo rastreador Plaspy
  - Rastreo de flotas AX5
---

# ATrack - Protocolo AX5

Esta página ofrece contexto público sobre el protocolo para usar el rastreador ATrack AX5 con la plataforma Plaspy. Se centra en cómo se comunica el AX5 en términos generales, qué ajustes de conexión se usan comúnmente para reportar datos a Plaspy y qué aspectos del dispositivo y su protocolo son relevantes para una integración exitosa y la operación diaria.

El AX5 es compatible con Plaspy y soporta conexiones GPRS, TCP y UDP desde el vehículo a través de su interfaz OBD II o cableado auxiliar. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que en la práctica es normal encontrar diferencias específicas por dispositivo.

## Visión general del protocolo

El protocolo de un rastreador como el ATrack AX5 define cómo se identifica, envía telemetría y reporta datos OBD II o CAN Bus a un servidor central. Al integrarse con Plaspy, el dispositivo usa transporte de red para entregar posición GPS, entradas del vehículo y registros de eventos para que la plataforma pueda mostrar y actuar sobre esos mensajes.

- El protocolo transporta ubicación, marca de tiempo, estado de movimiento y banderas de eventos desde el dispositivo al servidor.
- La telemetría OBD II y CAN Bus del AX5 se transmite junto con los datos GPS y de estado cuando está configurado para reportar al servidor.
- El comportamiento del protocolo determina cómo el dispositivo se identifica ante el servidor para que Plaspy pueda correlacionar los mensajes con un registro de dispositivo.
- El protocolo permite reportar eventos internos como entradas de pánico, transiciones a modo reposo y estado de batería de respaldo.
- Las actualizaciones de firmware vía GPRS y el uso de memoria interna emplean el canal de comunicación del dispositivo, pero dependen de los procedimientos del fabricante y del soporte del servidor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de dispositivos en un endpoint compartido y utiliza detección automática para reconocer el protocolo del rastreador, por lo que usted normalmente no necesita seleccionar manualmente un protocolo dentro de la plataforma. Si el AX5 está configurado para reportar al endpoint de Plaspy con los ajustes de conexión correctos, Plaspy mapeará los datos entrantes a un dispositivo.

- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes y los patrones de mensaje.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Cuando el AX5 reporta al endpoint de Plaspy, la plataforma empata la identidad del dispositivo y comienza a procesar la telemetría recibida.
- Usted normalmente no necesita elegir un protocolo manualmente en Plaspy si el rastreador está correctamente configurado para enviar datos a la plataforma.

## Transporte y contexto de conexión

La selección de transporte es un detalle de implementación del AX5 y puede configurarse por dispositivo o venir determinada por el firmware. El rastreador puede usar UDP o TCP para enviar reportes; ambos transportes son compatibles cuando el dispositivo apunta al endpoint de Plaspy en el puerto compartido.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino para reportar a Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el enrutamiento en servidor.
- GPRS se usa comúnmente para proporcionar la conectividad IP requerida para el reporte por TCP o UDP desde el vehículo.
- Comportamientos de transporte como la estrategia de reintentos y keepalive están gobernados por los ajustes de firmware del AX5 y las condiciones de red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de los mensajes, los campos disponibles y las preferencias de transporte; siempre registre la versión de firmware al solucionar problemas.
- Las revisiones de hardware u opcionales como conectores OBD II o interfaces CAN Bus externas pueden afectar qué telemetría está disponible para enviar.
- Los valores por defecto del fabricante pueden usar UDP o TCP, por lo que confirme que el dispositivo está configurado para reportar a Plaspy usando el transporte correcto.
- Variaciones por parte del fabricante en el soporte de comandos o funciones opcionales pueden influir en la configuración remota y los métodos de actualización de firmware.
- La detección automática de Plaspy reduce la necesidad de selección manual de protocolo, pero validar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 es esencial.
- Valide la compatibilidad y cualquier función avanzada contra la documentación del fabricante para la revisión específica de firmware y hardware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar reportes confiables, una interpretación correcta de los datos en Plaspy y una solución de problemas más eficiente cuando faltan mensajes o están mal formateados.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte esperado.
- Ayuda a distinguir problemas de red de configuraciones del dispositivo o comportamientos del firmware.
- Facilita el mapeo correcto de parámetros OBD II y CAN Bus en los flujos de telemetría para flotas.
- Mejora la planificación de actualizaciones de firmware y configuraciones remotas que dependen del canal de comunicación del dispositivo.
- Permite una resolución más rápida cuando los dispositivos entran en modo reposo o usan memoria de respaldo para almacenar y reenviar datos.

## Por qué usar Plaspy con este protocolo

Usar el ATrack AX5 con Plaspy ofrece un camino directo hacia la visibilidad a nivel vehicular y la gestión de flotas, manteniendo una configuración consistente en una flota con dispositivos mixtos. La conectividad OBD II del AX5, el soporte CAN Bus y el reporte por GPRS lo hacen adecuado para casos de uso telemáticos comunes donde la instalación rápida y el reporte confiable son importantes.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos, visite el sitio principal en https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware e instrucciones de implementación del fabricante, verifique la información en el sitio oficial de ATrack https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
