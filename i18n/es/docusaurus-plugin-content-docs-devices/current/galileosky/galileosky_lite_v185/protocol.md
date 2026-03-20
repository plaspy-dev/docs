---
slug: /galileosky/galileosky_lite_v185/protocol
id: galileosky_lite_v185-protocol
sidebar_label: Protocol
title: GalileoSky - GALILEOSKY Lite v1.8.5 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para comunicación del GALILEOSKY Lite v1.8.5 con el servidor Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo GalileoSky
  - protocolo GALILEOSKY Lite v1.8.5
  - protocolo GPS GalileoSky
  - GALILEOSKY Lite Plaspy
  - protocolo de rastreo de vehículos
  - protocolo de localización GPS
  - compatibilidad GalileoSky Plaspy
  - protocolo de gestión de flotas
  - protocolo de dispositivo de rastreo
  - compatibilidad de dispositivos Plaspy
---

# GalileoSky - Protocolo GALILEOSKY Lite v1.8.5

Esta página describe el contexto público del protocolo para utilizar el rastreador GALILEOSKY Lite v1.8.5 con Plaspy. Explica el papel del protocolo de reporte del dispositivo al enviar ubicación, valores de sensores y eventos a la plataforma Plaspy, y detalla los ajustes de conexión compartidos que Plaspy espera para rastreadores compatibles.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que usted debe validar la configuración del equipo y la compatibilidad del firmware con la documentación del fabricante cuando sea necesario.

## Descripción general del protocolo

El protocolo de reporte del rastreador define cómo el GALILEOSKY Lite v1.8.5 transmite informes de posición, valores de sensores y alertas a un servidor remoto para su procesamiento. A alto nivel, el protocolo permite que el dispositivo se identifique ante el servidor, entregue puntos geográficos temporizados y marcadores de eventos, y soporte configuración remota y actualizaciones de firmware cuando el dispositivo y el fabricante lo permiten.

- Permite la entrega de reportes de ubicación periódicos y por evento a una plataforma backend para mapeo y despacho
- Transporta telemetría básica como velocidad, rumbo, estado de entradas/salidas, eventos derivados del acelerómetro y lecturas de temperatura
- Permite que el dispositivo incluya un identificador para que Plaspy asocie los datos entrantes con el activo correcto
- Soporta flujos de configuración remota y diagnóstico cuando el rastreador y las herramientas del fabricante permiten comandos por GPRS o SMS
- Mantiene el historial de posiciones en el dispositivo cuando se interrumpe la conectividad y reenvía los puntos almacenados una vez que se restablece la conexión

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones y datos entrantes en un endpoint y puerto compartidos y utiliza detección automática para identificar el protocolo del rastreador que se está usando. En operación normal, los usuarios no necesitan elegir un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido
- Si el dispositivo está configurado para reportar al endpoint de Plaspy, normalmente no se requiere selección manual del protocolo en Plaspy
- Un identificador de dispositivo y ajustes de reporte correctos en el lado del rastreador ayudan a que Plaspy relacione los mensajes entrantes con la cuenta y el activo adecuados

## Transporte y contexto de conexión

El transporte y la dirección del servidor determinan cómo el GALILEOSKY Lite v1.8.5 se conecta a Plaspy, pero no cambian el papel general del protocolo. El dispositivo puede configurarse para usar distintos modos de transporte según el firmware y las decisiones del instalador, y el destino del servidor puede especificarse por nombre de dominio o por dirección IP.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino del servidor Plaspy
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el enrutamiento en el servidor y la detección automática del protocolo
- La elección del transporte puede afectar las garantías de entrega y el comportamiento durante conectividad intermitente
- Asegúrese de que el APN y los ajustes GPRS del dispositivo estén correctos para una entrega fiable de los reportes al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden alterar el tiempo de los mensajes, la disponibilidad de funciones y el soporte de comandos de configuración
- Las revisiones de hardware u opcionales pueden añadir o quitar entradas de sensores que aparecen en los reportes
- Las opciones de configuración del fabricante, como el modo de transporte, intervalos de latido y agrupación de datos, pueden afectar la frecuencia de reporte del dispositivo
- Algunas funciones, como actualizaciones remotas de firmware o diagnósticos avanzados, dependen de la cadena de herramientas del fabricante y la configuración del dispositivo
- Valide el formato del identificador de dispositivo y los parámetros de reporte con las expectativas de la cuenta Plaspy para asegurar un mapeo correcto del activo
- En caso de duda, consulte la documentación del fabricante para comportamientos específicos del dispositivo y comandos soportados

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a los administradores a configurar correctamente los dispositivos, interpretar la telemetría entrante y solucionar problemas cuando un rastreador no informa como se espera. Conocer cómo se conecta el rastreador, qué datos envía y cómo Plaspy recibe esa información reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Ayuda a confirmar ajustes de reporte del dispositivo como host de destino, tipo de transporte y puerto
- Permite una resolución más rápida de problemas de conectividad o mapeo de datos durante el despliegue
- Orienta las decisiones de ajuste de parámetros como intervalos de reporte, modos de reposo y umbrales de eventos
- Facilita la planificación de actualizaciones de firmware o cambios de hardware que podrían afectar el comportamiento de reporte
- Mejora las expectativas sobre la telemetría disponible para análisis y alertas

## Por qué usar Plaspy con este protocolo

Usar GALILEOSKY Lite v1.8.5 con Plaspy ofrece un camino simplificado para integrar la ubicación de vehículos, la telemetría de sensores y el sistema de alertas en una plataforma unificada de gestión de flotas. La detección automática de protocolos de Plaspy y el uso de un endpoint de servidor compartido reducen la carga de configuración para los operadores que despliegan flotas mixtas de dispositivos.

Plaspy está diseñado para aceptar reportes enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectará automáticamente los protocolos de rastreadores compatibles. Para saber más sobre Plaspy y cómo puede usarse con el rastreador GALILEOSKY Lite v1.8.5 visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y guías de configuración, consulte los recursos oficiales del fabricante en https://galileosky.com/ ya que los detalles de implementación pueden cambiar con el tiempo.
