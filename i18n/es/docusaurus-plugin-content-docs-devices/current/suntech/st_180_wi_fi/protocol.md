---
slug: /suntech/st_180_wi_fi/protocol
id: st_180_wi_fi-protocol
sidebar_label: Protocol
title: Suntech - ST 180 Wi-FI Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Suntech ST 180 Wi-FI y cómo se comunica con los servidores de Plaspy
keywords:
  - Protocolo Suntech ST 180 Wi-Fi
  - Protocolo GPS Suntech ST 180 Wi-Fi
  - Suntech ST 180 Wi-Fi Plaspy
  - Comunicación Suntech ST 180 Wi-Fi
  - Protocolo de rastreo ST 180 Wi-Fi
  - Protocolo rastreador de vehículos Suntech
  - Seguimiento OBD CAN Suntech
  - Descarga datos GPS Wi-Fi Suntech
  - Gestión de flotas rastreador Suntech
  - Compatibilidad rastreadores Plaspy
---

# Suntech - Protocolo ST 180 Wi-FI

Esta página documenta el contexto público del protocolo para usar el rastreador Suntech ST 180 Wi-FI con Plaspy. Se enfoca en cómo el dispositivo se comunica con los servidores de Plaspy en términos generales y no sensibles, y explica el papel del protocolo de reporte del rastreador para una integración exitosa. El ST 180 Wi-FI es un rastreador vehicular con almacenamiento local de posiciones GPS, capacidad de descarga por Wi‑Fi, soporte para interfaces CAN Bus y OBDII, y múltiples opciones de transporte; aquí se resumen esas capacidades en lo que atañe a la comunicación con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los rastreadores soportados y detecta automáticamente el protocolo cuando los dispositivos reportan a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza la compatibilidad y el contexto de configuración a alto nivel más que detalles específicos de firmware.

## Visión general del protocolo

A alto nivel, el protocolo de reporte del rastreador es el mecanismo que el ST 180 Wi-FI usa para identificarse frente a un servidor, enviar datos de posición y telemetría, y permitir el parseo y almacenamiento en el lado del servidor. Para la integración con Plaspy, los aspectos públicos del protocolo determinan cómo se transportan los datos por la red y qué funciones del dispositivo estarán disponibles en la plataforma.

- Permite la transmisión de posiciones GPS y marcas de tiempo a un servidor remoto para que las ubicaciones se muestren en Plaspy.
- Transporta telemetría del vehículo disponible desde CAN Bus y OBDII cuando el ST 180 Wi-FI está configurado para recopilar esos datos.
- Soporta la descarga (offload) de posiciones almacenadas internamente mediante Wi‑Fi para que los datos en memoria puedan descargarse al conectarse a una red.
- Utiliza opciones de transporte estándar soportadas por Plaspy, de modo que el dispositivo puede reportar por UDP o TCP según la configuración.
- Proporciona reportes de eventos e entradas como encendido, entradas digitales y estado de reposo que Plaspy puede registrar para flujos de trabajo de flota.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y está diseñado para detectar automáticamente el protocolo del rastreador usado por un dispositivo. En la mayoría de los casos, un ST 180 Wi-FI correctamente configurado que reporte al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y también acepta conexiones a la IP del servidor 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del equipo y los requisitos de la red local.
- Cuando el rastreador reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del dispositivo, por lo que normalmente no es necesario asignarlo manualmente.
- Asegúrese de que el rastreador esté configurado para reportar al endpoint de Plaspy y que el enrutamiento de red y las reglas de firewall permitan conexiones salientes desde el dispositivo.

## Contexto de transporte y conexión

El ST 180 Wi-FI soporta múltiples métodos de transporte y descarga por Wi‑Fi que afectan cómo llega a Plaspy. Entender el contexto de transporte ayuda con la configuración de firewalls, la planificación de la red y la puesta en marcha inicial de los dispositivos.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según soporte del equipo y preferencias de configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138 como destino del servidor al reportar.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica las reglas de red para flotas y proveedores de servicio.
- La descarga por Wi‑Fi puede usarse para subir posiciones almacenadas cuando el rastreador está en una red de confianza en lugar de usar el enlace GSM.
- Verifique que NAT, firewall y la configuración del operador móvil permitan conexiones salientes al endpoint de Plaspy en el transporte y puerto especificados.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, la disponibilidad de funciones y el contenido de los campos, por lo que el comportamiento puede variar entre unidades ST 180 Wi-FI.
- Las revisiones de hardware u opciones adicionales de CAN Bus/OBD pueden alterar qué valores de telemetría del vehículo se reportan.
- Las opciones de configuración del fabricante pueden afectar si el dispositivo usa UDP o TCP y cómo realiza la descarga por Wi‑Fi.
- La selección de transporte entre UDP y TCP puede influir en la confiabilidad y el comportamiento de retransmisión de paquetes en redes móviles.
- Confirme cualquier paso de configuración específico del dispositivo para apuntar el reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 antes de esperar la detección automática.
- Valide la compatibilidad con la documentación oficial de Suntech para la revisión de hardware exacta que esté en uso.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y a alto nivel del protocolo de comunicación del ST 180 Wi-FI ayuda a los equipos a planear despliegues, solucionar problemas de conectividad y garantizar la recolección fiable de datos en Plaspy. Saber cómo el rastreador envía posiciones y telemetría reduce los ciclos de configuración y favorece un funcionamiento predecible.

- Asegura que los ajustes de servidor y puerto sean correctos para que el rastreador llegue al endpoint de Plaspy.
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, resolución DNS o incompatibilidades de transporte.
- Clarifica cómo el almacenamiento en el dispositivo y la descarga por Wi‑Fi interactúan con el reporte en tiempo real a Plaspy.
- Facilita el mapeo de campos de telemetría CAN y OBD a los paneles y reportes de la flota.
- Apoya la decisión sobre usar UDP o TCP en función de la confiabilidad y los requisitos de latencia de la red.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Suntech ST 180 Wi-FI ofrece a las organizaciones una plataforma unificada para recolectar posiciones GPS, telemetría vehicular desde CAN Bus y OBDII, y datos basados en eventos en un solo lugar. La detección automática de protocolos y los ajustes de conexión compartidos de Plaspy reducen la complejidad de configuración para operadores de flota que despliegan hardware mixto a lo largo de sus vehículos.

Si desea obtener más información sobre cómo Plaspy puede trabajar con el Suntech ST 180 Wi-FI visite https://www.plaspy.com. Para información de protocolo y firmware más actualizada y específica del dispositivo, consulte la documentación del fabricante en http://www.suntechint.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse contra la fuente oficial.
