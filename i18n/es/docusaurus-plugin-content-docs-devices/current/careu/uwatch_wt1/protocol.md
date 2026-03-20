---
slug: /careu/uwatch_wt1/protocol
id: uwatch_wt1-protocol
sidebar_label: Protocol
title: CAREU - uWatch WT1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el CAREU uWatch WT1 con Plaspy, con contexto de conexión y compatibilidad
keywords:
  - protocolo CAREU uWatch WT1
  - protocolo GPS uWatch WT1
  - CAREU uWatch WT1 Plaspy
  - protocolo de rastreador Plaspy
  - protocolo GPS para wearables
  - seguimiento de telemetría de salud
  - monitoreo SOS y geocercas
  - compatibilidad uWatch WT1
  - rastreador GPS tipo smartwatch
  - seguimiento para gestión de cuidados
---

# CAREU - uWatch WT1: Protocolo

Esta página describe el contexto público del protocolo para usar el CAREU uWatch WT1 con Plaspy. Explica, en términos generales, cómo el reloj inteligente transmite la ubicación, eventos SOS y telemetría de signos vitales a Plaspy y qué puede esperar usted al integrar el dispositivo en una cuenta de Plaspy. El objetivo es clarificar conceptos de red y protocolo relevantes para administradores, integradores y usuarios técnicos sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en el contexto público y en orientación práctica de conexión.

## Resumen del protocolo

El uWatch WT1 utiliza un protocolo de reporte para transmitir posiciones GPS, señales SOS, eventos de geocerca y telemetría de salud a un servidor remoto donde Plaspy recibe y correlaciona los datos. El protocolo define cómo se identifica el dispositivo, cuándo envía reportes y qué tipos de telemetría incluye cada informe para que Plaspy pueda presentar ubicación y signos vitales de forma conjunta.

- Permite reportes periódicos y por eventos para que Plaspy muestre ubicación en tiempo real y reproducción histórica.
- Transporta señales de emergencia como SOS y salidas de geocerca para alertas inmediatas en Plaspy.
- Envía telemetría de salud —ritmo cardiaco, presión arterial, SpO2 y temperatura corporal— junto con datos de ubicación para supervisión consolidada.
- Proporciona identificación del dispositivo y metadatos para que Plaspy vincule los registros entrantes con el wearable y el perfil de usuario correctos.
- Soporta alertas remotas y reportes rutinarios que habilitan notificaciones de geocerca y flujos operativos dentro de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de los rastreadores en un endpoint de red compartido y utiliza esa conexión entrante para identificar y procesar automáticamente el protocolo del dispositivo. En la mayoría de los casos, un uWatch WT1 configurado para reportar a Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en el dominio de servidor compartido d.plaspy.com y acepta conexiones a la dirección pública 54.85.159.138.
- El servicio utiliza el puerto 8888 para los reportes de los dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir un protocolo manualmente cuando el dispositivo reporta al endpoint de Plaspy.
- La configuración adecuada del dispositivo para apuntar los reportes al endpoint de Plaspy es el paso habitual para permitir la detección e ingestión automáticas.
- Si un dispositivo no aparece en Plaspy después de reportar, verifique los ajustes de reporte del dispositivo y la documentación del fabricante para opciones específicas de firmware.

## Transporte y contexto de conexión

El uWatch WT1 puede establecer transporte hacia Plaspy usando UDP o TCP, según el soporte del dispositivo y las opciones de configuración. La accesibilidad de la red, el comportamiento de NAT y las políticas del operador celular influyen en qué transporte resulta más confiable para una implementación determinada.

- Los dispositivos pueden configurarse para reportar apuntando a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Plaspy utiliza el mismo puerto de escucha 8888 para todos los dispositivos soportados, lo que simplifica la configuración del endpoint del servidor.
- UDP suele reducir la sobrecarga para reportes periódicos frecuentes, mientras que TCP puede usarse cuando el firmware del dispositivo prefiere confirmación de entrega y flujos ordenados.
- Asegúrese de que la configuración APN del operador y cualquier firewall intermedio permitan conexiones salientes a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar la cadencia de los reportes, el contenido de los payloads y qué métricas de telemetría de salud se incluyen. Verifique el comportamiento del firmware para sus unidades.
- Las revisiones de hardware o variantes regionales del uWatch WT1 pueden tener diferentes ajustes de transporte por defecto o funciones disponibles.
- Puede ser necesario utilizar herramientas de configuración del fabricante o pasos de provisión de la SIM para apuntar el dispositivo a d.plaspy.com o a la IP del servidor de Plaspy.
- La elección entre UDP y TCP influye en las características de entrega; seleccione el transporte que coincida con la recomendación del firmware del dispositivo y las limitaciones de red.
- La detección automática de protocolos de Plaspy reduce la necesidad de selección manual, pero la correcta configuración del endpoint de red en el dispositivo sigue siendo requerida.
- Valide el comportamiento del dispositivo con la documentación oficial del fabricante para comandos específicos del dispositivo, notas de versión de firmware y flujos de provisión.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el rastreador ayuda a garantizar un flujo de datos fiable, agiliza la resolución de problemas y hace que el comportamiento en los flujos de monitoreo y alertas sea más predecible para los equipos de atención y los operadores. Un entendimiento claro del contexto de conexión evita errores comunes de integración y contribuye a la estabilidad operativa.

- Asegura que los dispositivos apunten al endpoint correcto de Plaspy para que la ubicación y los signos vitales lleguen de forma confiable.
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, APN mal configuradas o selección incorrecta de transporte.
- Orienta las decisiones sobre actualizaciones de firmware y dispositivos que pueden afectar qué telemetría se reporta y cuándo.
- Mejora el ajuste de geocercas y el manejo de SOS al aclarar cómo y cuándo se generan los reportes de eventos.
- Apoya la planificación de capacidad y la gestión de flotas al comprender la cadencia de reportes y el uso de red esperado.

## Por qué usar Plaspy con este protocolo

Usar el CAREU uWatch WT1 con Plaspy integra ubicación, eventos SOS, alertas de geocerca y telemetría de signos vitales en un único entorno de monitoreo. Esta vista combinada resulta útil para centros de atención, cuidadores familiares y organizaciones que requieren respuesta rápida ante incidentes, reportes consolidados y reproducción histórica de movimientos y tendencias de salud. La plataforma de Plaspy está diseñada para presentar estos insumos juntos, de modo que los equipos puedan tomar decisiones informadas con contexto de ubicación y datos fisiológicos lado a lado.

Para obtener más información sobre Plaspy y cómo el uWatch WT1 puede integrarse en sus flujos de monitoreo, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y el firmware específicos del dispositivo con el fabricante en https://www.systech-iot.com/.
