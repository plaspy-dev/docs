---
slug: /bofan/pt_100/protocol
id: pt_100-protocol
sidebar_label: Protocol
title: Bofan - PT-100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador Bofan PT-100 con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo Bofan PT-100
  - protocolo GPS Bofan PT-100
  - protocolo de comunicación Bofan PT-100
  - protocolo de rastreo Bofan PT-100
  - compatibilidad PT-100 con Plaspy
  - protocolo rastreador Bofan
  - rastreo vehicular PT-100
  - protocolo GPS rastreador Bofan
  - compatibilidad de dispositivos Plaspy
  - comunicación GPS vehicular
---

# Bofan - Protocolo PT-100

Esta página describe el contexto público del protocolo para utilizar el rastreador GPS Bofan PT-100 con Plaspy. Resume cómo se comunica el equipo a alto nivel, el papel de los reportes de dispositivo y los ajustes de conexión relevantes que usa Plaspy. El objetivo es ayudar a usuarios técnicos e integradores a comprender cómo el PT-100 puede enviar datos de ubicación y alertas a Plaspy sin exponer implementaciones privadas ni detalles internos de firmware.

El PT-100 es un rastreador vehicular compacto y económico que soporta SMS y seguimiento en tiempo real vía GPRS, registro de posiciones con miles de waypoints, alertas SOS y geocerca, notificaciones por batería baja y corte de alimentación, alertas de exceso de velocidad y control opcional de corte de motor. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante validar el comportamiento específico contra la documentación del fabricante.

## Visión general del protocolo

El protocolo es el conjunto de reglas e intercambios de mensajes que permiten al PT-100 reportar posición, estado y alertas a un servidor remoto como Plaspy. En términos prácticos, el rastreador utiliza conectividad celular para enviar actualizaciones periódicas de ubicación, notificaciones de eventos y waypoints almacenados, de modo que Plaspy pueda mostrar y procesar la telemetría del vehículo.

- Permite reportes de ubicación en tiempo real o por intervalos desde el PT-100 a un servidor remoto para seguimiento en vivo e historial.
- Transmite eventos de alerta como pulsos de SOS, activación de geocercas, exceso de velocidad, batería baja y corte de alimentación hacia la plataforma.
- Proporciona identificación e información del estado del dispositivo para que Plaspy asocie los mensajes con una unidad PT-100 específica y mantenga el historial.
- Soporta tanto el reporte inmediato de eventos como cargas periódicas por lotes de waypoints registrados para análisis histórico.
- Permite acciones de control remoto soportadas por el equipo, como comandos de corte de motor, cuando se inician desde una plataforma integrada.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un endpoint compartido y usa esa entrada para determinar automáticamente el protocolo del rastreador en los dispositivos compatibles. Para un PT-100 correctamente configurado que reporta a Plaspy, la plataforma generalmente reconoce el tipo de mensaje y lo mapea al registro de dispositivo correspondiente, por lo que los usuarios no suelen necesitar seleccionar manualmente un protocolo.

- Plaspy escucha en un solo puerto compartido el tráfico de los dispositivos y utiliza la conexión entrante para identificar el protocolo automáticamente.
- Cuando un PT-100 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.
- La detección se basa en la presencia de identificadores de dispositivo y patrones de mensaje reconocibles en el tráfico entrante, no en una configuración manual dentro de Plaspy.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito más común para que la detección automática tenga éxito.
- Si la detección no ocurre, los pasos habituales son verificar la configuración de reporte del dispositivo, el tipo de transporte y la configuración del fabricante para esa unidad.

## Transporte y contexto de conexión

El PT-100 puede reportar vía datos celulares y soporta tanto transporte UDP como TCP según el firmware y la configuración del dispositivo. Plaspy acepta conexiones para dispositivos compatibles en un único endpoint y puerto, por lo que los equipos deben estar configurados para alcanzar esa dirección y transporte para un reporte exitoso.

- Los dispositivos pueden configurarse para apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy acepta tráfico de dispositivos en el puerto 8888 y todos los dispositivos soportados por Plaspy usan ese mismo puerto.
- El PT-100 puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes de la unidad y las capacidades del firmware.
- Confirme si una unidad PT-100 específica está configurada para UDP o TCP al solucionar problemas de conectividad con Plaspy.
- Asegúrese de que el plan de la SIM del vehículo y la configuración APN permitan datos GPRS para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones disponibles; dos PT-100 con firmware distinto pueden comportarse de forma diferente.
- Las revisiones de hardware y los ajustes de fábrica pueden alterar el transporte por defecto (UDP frente a TCP) o el formato de la dirección del servidor.
- Algunas funciones, como el reporte por SMS frente al seguimiento en vivo por GPRS, requieren rutas de configuración distintas y pueden no ser completamente equivalentes para la integración.
- La elección del transporte (UDP o TCP) afecta la forma en que se entregan los mensajes y debe configurarse acorde con la capacidad del equipo y el enfoque de integración elegido.
- Valide la compatibilidad probando un dispositivo en el endpoint de Plaspy y revisando la documentación del fabricante para el build de firmware exacto.
- Cuando sea posible, pruebe en un entorno controlado antes de desplegar a escala para confirmar que el reporte de eventos, las alertas de geocerca y las subidas de waypoints funcionan según lo esperado.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el PT-100 ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y garantizar una operación predecible a largo plazo cuando se integra con Plaspy. Un conocimiento claro del contexto de comunicación reduce el tiempo de puesta en marcha y mejora la seguridad de que las alertas y los datos históricos serán entregados.

- Acelera la configuración inicial asegurando la dirección de servidor, el transporte y el modo de reporte adecuados.
- Ayuda a aislar problemas de conectividad frente a problemas de formato cuando los mensajes no aparecen en Plaspy.
- Permite tomar decisiones informadas sobre intervalos de reporte, gestión de batería y uso de datos para despliegues de flota.
- Mejora la capacidad para verificar que alertas como SOS, geocerca y corte de alimentación son recibidas y gestionadas por la plataforma.
- Apoya la planificación del ciclo de vida para actualizaciones de firmware, reemplazo de dispositivos y comprobaciones de compatibilidad.

## Por qué usar Plaspy con este protocolo

Usar el Bofan PT-100 con Plaspy ofrece a las organizaciones una vía sencilla para capturar ubicación en tiempo real, alertas y waypoints históricos desde un rastreador vehicular económico. La detección automática de protocolos y los ajustes de conexión compartidos de Plaspy simplifican la incorporación, de modo que los equipos pueden centrarse en la monitorización, las alertas y los flujos operativos en lugar de en la selección de protocolos a bajo nivel.

Plaspy proporciona un endpoint unificado para el reporte de dispositivos y soporta las opciones de transporte comunes usadas por el PT-100. Para saber más sobre Plaspy y cómo puede utilizarse con dispositivos como el PT-100, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles específicos del protocolo y la información de firmware con el fabricante en https://www.bofancloud.com/ antes de desplegar a gran escala.
