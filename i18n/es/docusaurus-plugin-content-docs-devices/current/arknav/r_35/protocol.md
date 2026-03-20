---
slug: /arknav/r_35/protocol
id: r_35-protocol
sidebar_label: Protocol
title: ArkNav - R-35 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador ArkNav R-35 y su comunicación con Plaspy para seguimiento confiable
keywords:
  - protocolo ArkNav R-35
  - protocolo GPS ArkNav R-35
  - protocolo de rastreo R-35
  - compatibilidad ArkNav Plaspy
  - protocolo del rastreador GPS R-35
  - rastreo vehicular R-35
  - rastreo de activos R-35
  - comunicación del rastreador R-35
  - guía del protocolo ArkNav
  - compatibilidad de rastreadores Plaspy
---

# ArkNav - Protocolo R-35

Esta página ofrece un panorama público del protocolo para usar el rastreador GPS ArkNav R-35 con Plaspy. Se centra en el contexto de comunicación y las consideraciones operativas relevantes al integrar el R-35 en una implementación de Plaspy, sin revelar detalles privados o implementaciones restringidas por el fabricante.

El ArkNav R-35 es un rastreador GSM quadband compacto con antenas internas de GPS y GSM, soporte de batería de respaldo y capacidad de comunicación vía GSM, GPRS y TCP. Plaspy utiliza un punto de conexión compartido y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y cómo el fabricante implemente las opciones de reporte.

## Visión general del protocolo

A grandes rasgos, el protocolo del rastreador es el conjunto de reglas y formatos de mensajes que permiten al R-35 informar ubicación, estado y eventos a un servidor remoto. Para Plaspy, conocer los aspectos públicos de esa comunicación ayuda a garantizar reportes confiables y el manejo correcto de los datos del dispositivo en la plataforma.

- El protocolo define cómo el equipo se identifica y transmite telemetría como posición, hora e indicadores de estado.
- Regula los reportes periódicos, las alarmas y los mensajes opcionales de estado para supervisar batería y conectividad.
- Determina qué métodos de transporte puede usar el dispositivo para llegar al servidor y cómo se expresan los intervalos de reporte.
- Es necesario configurar correctamente la dirección del servidor y el transporte en el equipo para que los reportes lleguen a Plaspy de forma consistente.
- En el lado del servidor, el protocolo permite que Plaspy asocie mensajes entrantes con la identidad del dispositivo y los traduzca en registros de seguimiento utilizables.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes entrantes en un único endpoint compartido y detectar automáticamente el protocolo del dispositivo, por lo que normalmente no es necesario seleccionar un protocolo dentro de la plataforma. La configuración correcta del equipo para apuntar al endpoint de Plaspy es el requisito habitual para una detección y registro exitosos.

- Plaspy utiliza el dominio del servidor compartido d.plaspy.com y la IP pública 54.85.159.138 como endpoints alcanzables para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador cuando un equipo bien configurado envía datos.
- Cuando un R-35 se configura para enviar datos al endpoint de Plaspy, la plataforma identifica el patrón de mensajes y lo asocia con el registro del dispositivo.
- En la mayoría de los casos no necesitará seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint y transporte correctos.
- Si un dispositivo no parece reportar correctamente, comprobar la configuración del equipo, el tipo de transporte y la versión de firmware es el primer paso recomendado.

## Transporte y contexto de conexión

El R-35 soporta múltiples modos de transporte y puede configurarse para usar el método de red que mejor se adapte al despliegue. Para conectarse a Plaspy, las opciones de transporte y la dirección del servidor son los detalles críticos a nivel de conexión.

- El R-35 puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y las opciones de configuración.
- Plaspy acepta reportes de dispositivos en el puerto 8888; ese mismo puerto se usa en todos los dispositivos soportados para mantener consistencia.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 cuando la resolución DNS no esté disponible.
- La selección de UDP o TCP en el dispositivo afecta características de entrega como retransmisiones y comportamiento de sesión, pero no cambia cómo Plaspy detecta el tipo de protocolo.
- Confirme la configuración de transporte del equipo (UDP o TCP) y la dirección de destino para asegurar que los mensajes lleguen a Plaspy de forma confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades R-35 pueden modificar funciones disponibles y la estructura exacta de los mensajes reportados; revise las notas de la versión de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware o las variantes regionales pueden afectar las bandas de red soportadas, las opciones de reporte o el comportamiento de gestión de energía.
- Algunos despliegues prefieren TCP para establecimiento de sesión, mientras que otros usan UDP por menor sobrecarga; el R-35 soporta ambos en muchas configuraciones.
- Los ajustes predeterminados del fabricante pueden apuntar a un servidor del proveedor; reconfigure la dirección del servidor a d.plaspy.com o 54.85.159.138 y confirme transporte y puerto 8888.
- Valide los identificadores del dispositivo y el reporte de IMEI para que Plaspy pueda mapear consistentemente los mensajes entrantes al registro correcto del rastreador.
- Consulte siempre la documentación del fabricante correspondiente a la revisión de hardware y firmware de su unidad.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación ayuda a garantizar una configuración confiable, una resolución de problemas eficiente y una operación predecible a largo plazo de los rastreadores R-35 con Plaspy. Tener expectativas claras sobre lo que el dispositivo envía y cómo el servidor lo acepta reduce el tiempo de inactividad y facilita el soporte.

- Configuración más rápida cuando sabe qué transporte y dirección de servidor configurar en el dispositivo.
- Resolución de problemas más efectiva al poder distinguir entre incidencias de red, transporte y nivel de protocolo.
- Mejor planificación de batería y conectividad en función de la frecuencia de reporte y los mensajes de estado que utilice el equipo.
- Validación más clara de la identidad del dispositivo para que los datos de seguimiento se atribuyan al activo o persona correcta.
- Mayor fiabilidad operativa al alinear firmware y ajustes del dispositivo con las expectativas de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav R-35 con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de ubicación de rastreadores portátiles, vehiculares o de activos en una única plataforma de monitoreo e informes. La forma compacta del R-35, sus antenas internas y la batería de respaldo lo hacen apto para despliegues ocultos o móviles, y el enfoque de endpoint compartido de Plaspy simplifica el onboarding.

Plaspy provee un endpoint consistente para el reporte de dispositivos y detección automática de protocolo para reducir la complejidad de configuración. Para obtener más información sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos más actualizados sobre el protocolo del dispositivo, comportamiento de firmware y recomendaciones del fabricante para el ArkNav R-35, verifique la información en el sitio oficial de ArkNav https://www.arknavgps.com.tw/.
