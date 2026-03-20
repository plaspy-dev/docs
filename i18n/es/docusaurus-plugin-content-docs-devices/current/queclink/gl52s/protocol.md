---
slug: /queclink/gl52s/protocol
id: gl52s-protocol
sidebar_label: Protocol
title: QuecLink - GL52S Protocol
sidebar_class_name: menu_item_tracker
description: Detalles públicos del protocolo QuecLink GL52S y cómo se comunica con Plaspy para rastreo y monitoreo a largo plazo
keywords:
  - protocolo QuecLink GL52S
  - protocolo GPS QuecLink GL52S
  - QuecLink GL52S Plaspy
  - comunicación QuecLink GL52S
  - protocolo de rastreo GL52S
  - protocolo rastreador de activos QuecLink
  - rastreador GNSS QuecLink
  - compatibilidad rastreador Sigfox
  - protocolo de dispositivo Plaspy
  - rastreo vehicular GL52S
---

# QuecLink - Protocolo GL52S

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL52S con Plaspy. Aquí se explica, a un nivel general, cómo el dispositivo comunica posición y estado, y qué aspectos de esa comunicación son relevantes al integrar el GL52S con Plaspy para seguimiento de activos o recuperación de vehículos robados.

El GL52S es un rastreador de activos en modo micro standby que usa Sigfox para uplinks, cuenta con posicionamiento GNSS y ofrece varios años de autonomía de batería. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda verificar en campo y revisar la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación define cómo el rastreador reporta posición GNSS, estado y eventos para que una plataforma backend como Plaspy pueda analizar y mostrar esa información. En el caso del GL52S, las características de uplink de Sigfox y el posicionamiento GNSS son las tecnologías principales que generan los datos que Plaspy recibe y utiliza.

- Permite que el rastreador informe ubicación, nivel de batería y marcadores de eventos a un sistema backend.
- Incluye identificadores que permiten a Plaspy asociar los mensajes con un dispositivo y una cuenta específicos.
- Ofrece actualizaciones periódicas y basadas en eventos, adecuadas para monitoreo de activos a largo plazo y flujos de recuperación.
- Integra la radio del dispositivo y la pila GNSS para que las posiciones y la telemetría lleguen a Plaspy y puedan usarse en mapas y alertas.
- Permite a Plaspy interpretar los reportes entrantes y convertirlos en datos útiles de flota o activos sin que el usuario tenga que seleccionar un protocolo manualmente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y determina automáticamente qué protocolo de rastreador se está usando, por lo que por lo general usted no necesita elegir un protocolo manualmente dentro de Plaspy. La detección está diseñada para agilizar la incorporación una vez que el dispositivo esté configurado para enviar datos al endpoint de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador para los reportes entrantes.
- Normalmente solo necesita configurar el GL52S para que reporte al endpoint de Plaspy, sin seleccionar un parser.
- Todos los dispositivos encaminados al backend de Plaspy comparten las mismas convenciones de puerto y endpoint.
- Identificadores de dispositivo correctos y una configuración de reporte adecuada en el rastreador ayudan a Plaspy a emparejar los mensajes con la cuenta correspondiente.
- Cuando un dispositivo está configurado correctamente, Plaspy asociará la telemetría al equipo y comenzará a mostrar datos de ubicación y estado.

## Contexto de transporte y conexión

El contexto de conexión se refiere a dónde y cómo el dispositivo envía sus reportes a Plaspy, más que al formato binario interno de esos reportes. Para Plaspy, los ajustes públicos de conexión son consistentes entre los dispositivos soportados.

- El dominio del servidor Plaspy es d.plaspy.com para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888 para las conexiones de dispositivos.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones de configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del lado del dispositivo.
- Dependiendo de la red y las capacidades del dispositivo, el rastreador puede apuntar a d.plaspy.com o a 54.85.159.138 como endpoint objetivo.

## Notas sobre compatibilidad del protocolo

- El GL52S depende de uplinks por radio Sigfox y del posicionamiento GNSS; el comportamiento de integración puede depender de la ruta de red utilizada para reenviar los uplinks de Sigfox a Plaspy.
- Versiones de firmware y revisiones de hardware pueden cambiar el contenido de los mensajes, su frecuencia o los campos de telemetría disponibles.
- Opciones de configuración del fabricante o configuraciones regionales del backend de Sigfox pueden afectar cómo se reenvían los mensajes a Plaspy.
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y con las expectativas de cualquier intermediario de red o gateway.
- Asegúrese de que el identificador del dispositivo y el destino de reporte estén correctamente configurados para que Plaspy pueda detectar y procesar los reportes automáticamente.
- Valide siempre el comportamiento del dispositivo después de actualizaciones de firmware o al desplegar nuevas revisiones de hardware en campo.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del GL52S ayuda a garantizar una configuración correcta, reportes confiables y una resolución de problemas más rápida cuando trabaja con Plaspy. Saber qué partes del sistema son responsabilidad del dispositivo y cuáles son del backend reduce el tiempo de configuración y aclara responsabilidades al diagnosticar problemas.

- Confirma que el rastreador apunta al endpoint y puerto correctos de Plaspy.
- Acelera la resolución de problemas al acotar si el inconveniente está en la radio, la configuración del dispositivo o el enrutamiento del backend.
- Orienta las expectativas sobre frecuencia de actualizaciones, compromisos de vida de batería y reportes basados en eventos.
- Hace más seguras las modificaciones de firmware y configuración al aclarar los posibles impactos en el reporte.
- Mejora la confiabilidad a largo plazo al fomentar la validación tras cambios en firmware o red.

## Por qué usar Plaspy con este protocolo

Usar el GL52S con Plaspy ofrece a las organizaciones una forma práctica de aprovechar la larga vida de batería, el posicionamiento GNSS y el formato compacto del dispositivo para monitorización discreta de activos, control de inventarios y recuperación de bienes robados. La detección automática de protocolos y las configuraciones de conexión compartidas de Plaspy reducen la configuración manual necesaria en la plataforma, permitiendo que los equipos se concentren en el despliegue y la operativa.

Para obtener más información sobre cómo Plaspy gestiona la conectividad de dispositivos y revisar las funcionalidades de la plataforma, visite https://www.plaspy.com. Para detalles de protocolo y firmware más recientes específicos del QuecLink GL52S, verifique la información en el sitio del fabricante https://www.queclink.com/ ya que el comportamiento del protocolo y las implementaciones del dispositivo pueden cambiar con el tiempo.
