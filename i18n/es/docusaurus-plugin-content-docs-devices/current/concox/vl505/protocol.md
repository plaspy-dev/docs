---
slug: /concox/vl505/protocol
id: vl505-protocol
sidebar_label: Protocol
title: Concox - VL505 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Concox VL505 y cómo comunica datos con Plaspy
keywords:
  - protocolo Concox VL505
  - protocolo GPS Concox VL505
  - protocolo de seguimiento VL505
  - compatibilidad VL505 Plaspy
  - protocolo rastreador GPS Concox
  - protocolo OBD II VL505
  - rastreador VL505 LTE Cat 1
  - gestión de flotas protocolo VL505
  - protocolo de comunicación VL505
  - protocolo serie VL Concox
---

# Concox - Protocolo VL505

Esta página ofrece una visión pública y no sensible del contexto de comunicación del rastreador GPS Concox VL505 cuando se integra con Plaspy. Explica cómo el dispositivo informa posiciones y telemetría a la plataforma Plaspy y describe el papel general del protocolo sin revelar detalles propietarios del parser ni implementaciones privadas. El VL505 es un rastreador OBD II 4G ultra compacto diseñado para una instalación sencilla y reportes continuos; este documento se centra en cómo esos reportes encajan en el modelo de ingestión y conectividad de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. Los endpoints públicos de Plaspy incluyen el dominio d.plaspy.com y la IP 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. Plaspy emplea el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto y el contenido de los mensajes pueden variar según la versión de firmware del VL505, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo de reporte del VL505 es el mecanismo mediante el cual el dispositivo se identifica y entrega posiciones GNSS, eventos de movimiento y telemetría a servicios en la nube como Plaspy. En términos prácticos, el protocolo define qué datos envía el dispositivo y cómo señala eventos como encendido, activaciones de geocerca o alertas de movimiento. Este resumen público se enfoca en el papel de esa comunicación en la configuración y operación cotidiana, más que en los formatos de trama de bajo nivel.

- Permite que el VL505 transmita posiciones GNSS de múltiples fuentes y telemetría a Plaspy para seguimiento en tiempo real y registro histórico.
- Transporta eventos del dispositivo como entrada o salida de geocercas, alertas por vibración, exceso de velocidad, desconexión de alimentación y notificaciones de comportamiento de conducción.
- Permite reportar telemetría derivada del puerto OBD II cuando el vehículo y el dispositivo soportan PIDs, enriqueciendo los paneles de Plaspy.
- Soporta canales de configuración remota usados por fabricantes, como SMS o plataformas de aprovisionamiento en la nube, que pueden coexistir con el reporte a Plaspy.
- Proporciona la base para una reproducción fiable y análisis dentro de Plaspy cuando se resuelven interrupciones temporales de conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar tráfico de dispositivos en un endpoint compartido y determinar automáticamente el protocolo de reporte cuando un equipo envía datos a la plataforma. Para la mayoría de los usuarios, esto implica una configuración mínima dentro de Plaspy siempre que el dispositivo apunte al endpoint y transporte correctos.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 para que Plaspy reciba los reportes entrantes.
- Plaspy escucha en el puerto 8888 por datos de rastreadores y utiliza el mismo puerto para todos los dispositivos compatibles.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del dispositivo y los requerimientos de la red.
- Cuando el VL505 envía sus primeros reportes al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y comenzará a ingerir datos de posición y eventos.
- Por lo general no es necesario seleccionar manualmente un protocolo en Plaspy si el rastreador está correctamente configurado para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

La selección del transporte y la correcta configuración del endpoint son las consideraciones fundamentales al integrar unidades VL505 con Plaspy. El dispositivo soporta conectividad celular LTE Cat 1 y puede aprovisionarse para enviar datos por UDP o TCP en el puerto 8888 hacia los endpoints públicos de Plaspy.

- Los dispositivos VL505 pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 para enviar reportes a Plaspy.
- Se soportan tanto UDP como TCP en el puerto 8888; elija el transporte que mejor se adapte a las condiciones de red y a la configuración del dispositivo.
- Todos los dispositivos de Plaspy usan el mismo número de puerto 8888, lo que simplifica las reglas de firewall y red para despliegues a gran escala.
- Asegúrese de que la SIM, el APN y el aprovisionamiento del dispositivo estén configurados para que el rastreador tenga acceso a Internet antes de intentar la integración con Plaspy.
- Las variantes regionales del VL505, como VL505-NA y VL505-EU, deben aprovisionarse con los ajustes de operador y APN correspondientes para una conectividad celular confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de versión de firmware pueden cambiar qué eventos o campos de telemetría reporta el VL505; valide el comportamiento con el firmware instalado.
- Las revisiones de hardware y las variantes regionales del modelo pueden alterar las fuentes GNSS soportadas, compatibilidad de bandas o sensores periféricos.
- El VL505 soporta configuración remota vía SMS y plataformas de aprovisionamiento en la nube, lo cual puede afectar la manera en que reporta a Plaspy si se utilizan esos servicios.
- La elección del transporte (UDP vs TCP) puede impactar las características de entrega de mensajes; pruebe ambos si experimenta problemas de reporte intermitente.
- Confirme APN, aprovisionamiento eSIM y restricciones del operador al desplegar a gran escala para evitar brechas de datos.
- Siempre contraste cualquier asunción sobre el protocolo con la documentación oficial del fabricante para comportamientos específicos del modelo.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el VL505 con Plaspy ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y mantener una operación consistente a largo plazo. Conocer el papel del transporte, los endpoints y las variaciones de firmware reduce el tiempo de integración y aumenta la confianza operativa de gerentes de flota y técnicos.

- Acelera la configuración inicial indicando el endpoint correcto, el transporte y las opciones de aprovisionamiento de la SIM.
- Facilita la resolución de problemas cuando ubicaciones, eventos o parámetros OBD II no aparecen en Plaspy.
- Ayuda a planificar reglas de red y firewall ya que Plaspy usa un puerto compartido para todos los dispositivos.
- Reduce el riesgo de pérdida de datos al clarificar cómo el registro temporal en el borde y el reenvío interactúan con la ingestión de Plaspy.
- Mejora la gestión del ciclo de vida al hacer seguimiento de diferencias de firmware que afectan campos y eventos reportados.

## Por qué usar Plaspy con este protocolo

Usar el Concox VL505 con Plaspy ofrece una solución práctica para organizaciones que necesitan recoger ubicación en tiempo real, alertas de eventos y telemetría de vehículos en flotas privadas y comerciales. La forma OBD II compacta del VL505, su posicionamiento GNSS multi fuente y los sensores integrados lo hacen apropiado para despacho, monitoreo antirrobo, análisis de comportamiento de conducción y reportes basados en uso cuando se combina con las funcionalidades de ingestión y visualización de Plaspy.

El modelo de endpoint unificado de Plaspy simplifica los despliegues a gran escala porque todos los dispositivos usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador una vez que el VL505 está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888. Para saber más sobre cómo Plaspy puede integrarse con su flota, visite https://www.plaspy.com. Para obtener los detalles más actualizados a nivel de dispositivo, notas de firmware y comportamientos específicos por modelo, verifique la documentación oficial del fabricante en https://www.iconcox.com/.
