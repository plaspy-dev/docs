---
slug: /astra_telematics/at211/protocol
id: at211-protocol
sidebar_label: Protocol
title: Astra Telematics - AT211 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo AT211 de Astra Telematics y cómo se comunica con Plaspy para un seguimiento fiable de flotas
keywords:
  - protocolo Astra Telematics AT211
  - rastreador AT211 Plaspy
  - protocolo de comunicacion AT211
  - protocolo de rastreo AT211
  - compatibilidad Astra AT211 Plaspy
  - protocolo rastreador Astra Telematics
  - reporte telemetria AT211
  - telemetria GNSS AT211
  - seguimiento de flotas AT211
  - rastreador IP67 AT211
---

# Astra Telematics - Protocolo AT211

Esta página ofrece un resumen del contexto público del protocolo para integrar el rastreador Astra Telematics AT211 con Plaspy. Se centra en la forma en que el dispositivo comunica con la plataforma Plaspy en términos no sensibles e independientes de la implementación. El AT211 es un rastreador robusto con clasificación IP67, diseñado para maquinaria y equipos, y transmite GNSS, detección de movimiento y estados de entradas y salidas a servidores remotos mediante redes celulares como GSM GPRS y redes de área amplia de baja potencia (LPWAN).

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se envían datos a la plataforma. El comportamiento exacto del protocolo, la cadencia de los mensajes y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página brinda contexto práctico e invita a verificar la documentación del firmware y del proveedor para detalles específicos del dispositivo.

## Visión general del protocolo

El protocolo de comunicación del AT211 define cómo el dispositivo empaqueta telemetría, posiciones GNSS, lecturas de sensores y notificaciones de eventos para su transporte a un servidor backend. En la práctica, esto significa que el rastreador transmite posiciones GNSS, eventos de movimiento derivados del acelerómetro, estados de entradas y salidas, nivel de batería y estado de alimentación, y eventos opcionales relacionados con BLE a Plaspy, para que esos datos sean procesables en la plataforma.

- Permite la entrega periódica y basada en eventos de datos de ubicación GNSS y marcas de tiempo a Plaspy.
- Comunica eventos de movimiento e impactos derivados del acelerómetro para situaciones de remolque y alarmas.
- Reporta el estado de entradas y salidas digitales y telemetría básica como batería y estado de alimentación.
- Utiliza redes celulares para el transporte y puede recurrir a modos LPWAN para una cobertura extendida.
- Soporta eventos opcionales de sensores BLE para inmovilizadores e identificación de conductor cuando están habilitados.

## Cómo Plaspy detecta el protocolo

Plaspy acepta tráfico entrante de dispositivos en un único endpoint y puerto compartidos y realiza detección automática de protocolo, por lo que normalmente no es necesario seleccionar un protocolo manualmente. Cuando un AT211 se configura para reportar a Plaspy, la plataforma reconoce el patrón de reporte del dispositivo y asigna los datos entrantes al registro de dispositivo y al modelo de datos adecuados.

- El endpoint público de Plaspy es d.plaspy.com y también acepta conexiones al servidor IP 54.85.159.138.
- Todos los dispositivos de Plaspy usan el mismo puerto en la plataforma, que es el 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual de protocolo en la plataforma suele ser innecesaria cuando el dispositivo reporta correctamente.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para que la detección tenga éxito.
- La detección automática cubre una gama de transportes y patrones de reporte comunes en rastreadores industriales.

## Transporte y contexto de conexión

El AT211 puede transmitir a servidores remotos a través de varios tipos de transporte según las capacidades del módulo y la configuración. Para la integración con Plaspy, los detalles de conexión esenciales son compartidos y consistentes entre los modelos compatibles, lo que hace que la configuración inicial sea sencilla y minimiza el trabajo en la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos del sitio.
- Los dispositivos pueden apuntar al servidor Plaspy por nombre de host en d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy escucha en el mismo puerto 8888 para todos los rastreadores soportados, lo que simplifica la provisión y las reglas de firewall.
- La selección de transporte entre UDP y TCP suele depender de la configuración del firmware y de consideraciones sobre la fiabilidad de la red.
- Asegúrese de que el tráfico saliente del dispositivo hacia d.plaspy.com o la IP del servidor esté permitido en el puerto 8888 desde la red del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, quitar o cambiar campos de los mensajes y los intervalos de reporte; valide la versión de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware y las características opcionales como BLE o antenas GNSS externas pueden afectar qué elementos de telemetría están disponibles.
- Algunas variantes de operador o de módulo pueden preferir UDP o TCP por defecto; confirme el modo de transporte en la configuración del dispositivo.
- El enfoque de puerto compartido de Plaspy reduce la complejidad de configuración, pero requiere ajustes correctos de endpoint y puerto en el rastreador.
- Los menús de configuración del fabricante, los ajustes de APN y la provisión de la SIM siguen siendo importantes para garantizar que el dispositivo pueda alcanzar el endpoint de Plaspy.
- Siempre contraste las notas de despliegue y cualquier limitación regional del módulo con la documentación del fabricante.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del AT211 ayuda a los administradores a configurar los dispositivos correctamente, diagnosticar problemas de reporte y asegurar que los datos que recibe Plaspy sean completos y oportunos. Saber cómo el rastreador reporta ubicaciones, eventos y telemetría reduce la fricción en la integración y soporta operaciones de flota robustas.

- Ayuda a asegurar los ajustes correctos de endpoint y transporte para que los datos lleguen a Plaspy de forma fiable.
- Facilita la resolución de problemas por reportes faltantes o retrasados al clarificar qué eventos enviará el rastreador.
- Permite configurar umbrales de E/S y del acelerómetro para alinear los eventos del dispositivo con las alertas de Plaspy.
- Permite a los equipos validar el comportamiento del firmware y la disponibilidad de funciones para necesidades de despliegue específicas.
- Informa las decisiones sobre la elección de transporte y ajustes de APN de la SIM para obtener el mejor rendimiento de red.

## Por qué usar Plaspy con este protocolo

Usar el Astra AT211 con Plaspy ofrece a las organizaciones una forma práctica de convertir la telemetría de campo resistente en información accionable para flotas y activos. La combinación del AT211 de hardware duradero, conectividad multinetwork y flexibilidad en entradas y salidas lo hace adecuado para monitoreo de maquinaria, construcción, agro y activos móviles donde el reporte confiable y los flujos de trabajo anti robo son importantes.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el AT211, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente y específica del dispositivo en el sitio del fabricante https://astratelematics.com/ para obtener la guía más actualizada.
