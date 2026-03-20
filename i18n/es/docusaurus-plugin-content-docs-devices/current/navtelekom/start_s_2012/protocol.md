---
slug: /navtelekom/start_s_2012/protocol
id: start_s_2012-protocol
sidebar_label: Protocol
title: Navtelekom - START S-2012 Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo START S-2012 de Navtelekom para integrar el dispositivo con Plaspy usando servidor compartido y recomendaciones de conexión
keywords:
  - Protocolo Navtelekom START S-2012
  - Protocolo GPS START S-2012
  - Protocolo Navtelekom Plaspy
  - Comunicación START S-2012
  - Protocolo de rastreo START S-2012
  - Compatibilidad de rastreadores Plaspy
  - Guía de protocolo para rastreadores de vehículos
  - Integración de rastreadores GNSS con Plaspy
  - Rastreo de flotas START S-2012
  - Resumen del protocolo de telemetría
---

# Navtelekom - Protocolo START S-2012

Esta página describe el contexto público del protocolo para usar el rastreador Navtelekom START S-2012 con Plaspy. Explica, en términos generales, cómo el dispositivo se comunica con la plataforma Plaspy y qué aspectos del comportamiento de reporte son relevantes para una integración y operación continuas exitosas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funcionalidades disponibles pueden variar según la versión de firmware, las revisiones de hardware y las decisiones del fabricante; por eso esta página se enfoca en el contexto público no sensible del protocolo y en orientación práctica para la integración.

## Visión general del protocolo

El protocolo del START S-2012 define cómo el rastreador envía posición GNSS, telemetría y datos de eventos a través de la red celular hacia un servidor backend. En el contexto de Plaspy, la función del protocolo es transmitir de forma fiable la ubicación y los sensores para que la plataforma muestre posiciones en tiempo real, genere alertas y almacene el historial para informes.

- Transporta fijaciones GNSS y telemetría, como lecturas de sensor de combustible y sensores ambientales, hacia el backend.
- Identifica el dispositivo ante el servidor para que los datos reportados se asocien al activo correcto en Plaspy.
- Codifica reportes de eventos de entradas y salidas para que Plaspy pueda activar alertas y flujos de trabajo.
- Permite integrar datos de sensores externos, como valores de sensores Bluetooth y periféricos RS-485.
- Funciona junto con herramientas del fabricante, como NTC Configurator y el sistema de gestión remota DRC, para simplificar la configuración y las actualizaciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico en un endpoint compartido para todos los dispositivos y utiliza detección automática para determinar el tipo de protocolo del rastreador. Cuando un START S-2012 está configurado para reportar a Plaspy, la plataforma empata la comunicación entrante con patrones de protocolo conocidos, por lo que normalmente el usuario no necesita seleccionar el protocolo manualmente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 en el puerto común.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint de Plaspy.
- Por lo general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al servidor Plaspy.
- Identificadores de dispositivo consistentes y reportes periódicos ayudan a que Plaspy asocie de forma confiable los mensajes entrantes con el activo correcto.

## Contexto de transporte y conexión

La configuración de conexión y transporte determina cómo el START S-2012 envía sus datos a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el soporte del equipo y los requisitos del sitio, y debe apuntar a Plaspy usando el endpoint y puerto compartidos.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto de escucha de Plaspy para todos los dispositivos es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Elija UDP o TCP según las consideraciones de red y las opciones de configuración que exponga el fabricante.
- Asegúrese de que la red móvil y cualquier firewall intermedio permitan el tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- El START S-2012 se describe como compatible con Plaspy desde fábrica, pero la disponibilidad de funciones puede depender del nivel de firmware.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el contenido exacto de los mensajes y los reportes de sensores admitidos.
- Las herramientas de configuración del fabricante, como NTC Configurator y DRC, se usan comúnmente para establecer endpoints de reporte y el modo de transporte.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe coincidir con la opción configurada en el dispositivo.
- Siempre valide un despliegue del dispositivo confirmando que el rastreador sea visible en Plaspy y que envíe la telemetría esperada después de la configuración.
- Consulte la documentación del fabricante para diagramas de conexión, integración de periféricos y ejemplos de configuración para el START S-2012.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el START S-2012 ayuda a configurar de manera fiable, depurar y operar a largo plazo cuando se utiliza con Plaspy. Tener claro el contexto de comunicación reduce el tiempo de integración y facilita diagnosticar problemas habituales.

- Acelera la configuración inicial al aclarar qué endpoint y transporte debe usar el dispositivo para llegar a Plaspy.
- Ayuda a resolver problemas de conectividad relacionados con la red, firewalls o la SIM.
- Permite verificar que los sensores y las entradas de eventos se reporten e interpreten correctamente en Plaspy.
- Facilita la planificación de actualizaciones de firmware y despliegues de funciones que puedan cambiar el comportamiento de reporte.
- Mejora la fiabilidad de la flota al asegurar que los dispositivos estén configurados de forma consistente y sean monitoreados después del despliegue.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom START S-2012 con Plaspy ofrece a las organizaciones una opción de rastreador compacta y cableada que envía posición GNSS, telemetría de combustible y sensores, y reportes de eventos a una plataforma unificada de gestión de flotas. La detección automática de protocolos de Plaspy y los ajustes de servidor compartidos reducen la carga de configuración, permitiendo que los operadores se concentren en alertas, rutas y análisis en lugar de seleccionar parsers individuales.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos y los flujos de trabajo de flotas visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware e instrucciones de configuración verifique la información con el fabricante en https://www.navtelecom.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
