---
slug: /ruptela/hcv5/protocol
id: hcv5-protocol
sidebar_label: Protocol
title: Ruptela - HCV5 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar Ruptela HCV5 con Plaspy en telemetría y seguimiento GPS
keywords:
  - protocolo Ruptela HCV5
  - protocolo GPS Ruptela HCV5
  - protocolo de comunicación Ruptela HCV5
  - protocolo de rastreo Ruptela HCV5
  - compatibilidad HCV5 Plaspy
  - telemetría de vehículo HCV5
  - integración de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - seguimiento de flotas HCV5
  - telemetría de vehículo Ruptela
---

# Ruptela - Protocolo HCV5

Esta página describe el contexto del protocolo público para usar el rastreador Ruptela HCV5 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos no sensibles y en qué esperar al integrar el HCV5 para seguimiento GNSS/GPS y telemetría del vehículo.

El HCV5 está diseñado para entregar posicionamiento GNSS continuo, telemetría CAN y OBD, datos de sensores BLE y entradas de eventos a una plataforma backend. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo de comunicación del HCV5 es el mecanismo que transporta coordenadas GNSS, telemetría del vehículo procedente de CAN y OBD, entradas de sensores y eventos, y datos de estado hacia Plaspy. En la práctica, el protocolo define cómo el rastreador se identifica ante un servidor, cómo se reportan la telemetría y los eventos, y cómo la plataforma acepta e interpreta esos reportes.

- Transporta reportes de ubicación y marcas de tiempo para que Plaspy pueda mostrar posición en vivo e historial.
- Envía telemetría del vehículo como parámetros CAN y OBD, datos de combustible y estado diagnóstico para uso en análisis.
- Codifica entradas por eventos como ignición, apertura de puertas, manipulación o activación de sensores para que Plaspy genere alertas e informes contextuales.
- Soporta modos de reporte periódicos y bajo demanda para que los administradores de flota equilibren nivel de detalle y uso de datos.
- Habilita metadatos de gestión remota del dispositivo que Plaspy usa para visibilidad del estado del dispositivo, versión de firmware y configuración.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del dispositivo, por lo que normalmente no necesita seleccionar un protocolo manualmente. Cuando un HCV5 está configurado para reportar al endpoint de Plaspy con los ajustes de red correctos, Plaspy ingerirá y encaminará los datos hacia los flujos de procesamiento adecuados para informes y uso en paneles.

- El dominio de servidor de Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para integraciones públicas.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, dependiendo de la red y de la configuración del equipo.
- Si el HCV5 está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy recibirá los datos y detectará automáticamente el protocolo del rastreador.
- Por lo general usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte y la direccionamiento de la conexión determinan cómo el HCV5 alcanza el endpoint de ingestión de Plaspy. El HCV5 soporta transportes celulares comunes y puede configurarse para usar un nombre de dominio o una dirección IP para entregar datos a Plaspy, mientras que mecanismos de fallback y el comportamiento del operador influyen en el transporte efectivo en campo.

- Los dispositivos pueden apuntar al endpoint de Plaspy usando el dominio d.plaspy.com o directamente la IP 54.85.159.138.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte compatible con el equipo y preferido por su operador.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Las conexiones celulares (LTE Cat M1, NB‑IoT y fallback 2G) influyen en la latencia y la fiabilidad de entrega, pero no cambian el endpoint público.
- Asegúrese de que el APN y los ajustes de red en el HCV5 coincidan con los requerimientos del operador para que la telemetría llegue de forma fiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar la temporización de mensajes, los campos soportados o las funciones disponibles; verifique el nivel de firmware del HCV5 al validar el comportamiento.
- Revisiones de hardware o variantes opcionales (por ejemplo diferentes GNSS o variantes de radio) pueden afectar las interfaces soportadas como CAN o BLE.
- La elección de transporte (UDP vs TCP) puede impactar el comportamiento de entrega de mensajes; seleccione el transporte que se ajuste a sus necesidades de fiabilidad y uso de datos.
- Las herramientas de configuración del fabricante y las plataformas de gestión de dispositivos pueden aplicar ajustes de servidor o plantillas que influyan en el comportamiento de reporte.
- Valide siempre que el HCV5 esté configurado para reportar al endpoint correcto de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888.
- Confirme que cualquier comando remoto o control de actuadores que pretenda usar esté soportado en el firmware desplegado y autorizado por los instaladores.

## Por qué importa entender el protocolo

Tener claridad sobre el protocolo de comunicación del HCV5 ayuda a asegurar una configuración exitosa, reportes previsibles y una resolución de problemas eficiente cuando el dispositivo se usa con Plaspy. Saber qué envía el dispositivo y cómo Plaspy lo recibe reduce la fricción en el despliegue y respalda la fiabilidad a largo plazo.

- Ayuda a confirmar que los campos de ubicación y telemetría necesarios para sus flujos de trabajo se transmiten y capturan.
- Facilita la selección del transporte y la dirección de servidor correctos para que los dispositivos alcancen el endpoint de Plaspy de forma fiable.
- Permite una resolución de problemas más rápida cuando aparecen brechas de datos, reportes duplicados o eventos inesperados en los paneles de Plaspy.
- Apoya la planificación de actualizaciones de firmware, sustituciones de dispositivos y cambios en las interfaces del vehículo como CAN u OBD.
- Mejora la postura de seguridad al clarificar cómo los dispositivos se autentican y reportan a Plaspy y qué puertos de red deben estar abiertos.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela HCV5 con Plaspy ofrece a los operadores de flota una forma de consolidar telemetría de alta fidelidad del vehículo, posicionamiento GNSS y alertas por eventos en una única vista operativa. Las interfaces de vehículo y el soporte de sensores del HCV5 entregan las entradas básicas que Plaspy necesita para proporcionar mapeo, geocercas, monitoreo de combustible, asistencia en flujos de trabajo de tacógrafo y funciones antirrobo.

Plaspy simplifica la integración exponiendo un endpoint de ingestión compartido y un puerto para todos los dispositivos soportados, además de detectar automáticamente los protocolos de los rastreadores para que los despliegues sean más sencillos de aprovisionar. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el HCV5, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica del protocolo y las guías de firmware más recientes en el sitio del fabricante https://ruptela.com/.
