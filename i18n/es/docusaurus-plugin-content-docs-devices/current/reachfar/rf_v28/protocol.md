---
slug: /reachfar/rf_v28/protocol
id: rf_v28-protocol
sidebar_label: Protocol
title: Reachfar - RF-V28 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para conectar el colgante Reachfar RF V28 a Plaspy y recibir ubicación y alertas en tiempo real
keywords:
  - protocolo Reachfar RF V28
  - protocolo GPS Reachfar RF V28
  - compatibilidad RF V28 Plaspy
  - protocolo rastreador personal Reachfar
  - protocolo de rastreo RF V28
  - protocolo GPS colgante Reachfar
  - protocolo de comunicación RF V28
  - compatibilidad rastreadores Plaspy
  - protocolo rastreador de seguridad personal
  - integración de rastreo RF V28
---

# Reachfar - Protocolo RF-V28

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo que utiliza el colgante GPS SOS Reachfar RF-V28 para integrarse con Plaspy. Aquí explicamos cómo suele comunicarse el dispositivo con la plataforma Plaspy y qué comportamientos de reporte son relevantes al incorporarlo a su flujo de monitoreo.

El RF-V28 es compatible con Plaspy desde el primer momento y ofrece posicionamiento por GPS, A-GPS, Wi‑Fi y LBS, además de funciones de SOS y detección de caídas. Plaspy usa ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre conviene validar la configuración con la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del RF-V28 es el conjunto de reglas y flujos de mensajes que el colgante usa para enviar ubicación, estado y eventos a un servidor remoto. En la práctica, este protocolo define cómo el equipo se identifica ante Plaspy, cómo envía actualizaciones periódicas de ubicación y alarmas, y cómo la plataforma convierte esos mensajes en telemetría utilizable.

- Permite que el RF-V28 reporte posiciones y metadatos sobre el método de posicionamiento para que Plaspy muestre mapas e historial.
- Transmite notificaciones de eventos como pulsaciones del botón SOS, alarmas de detección de caídas y violaciones de geocerca o cierres por Wi‑Fi.
- Proporciona identidad del dispositivo y estado básico para que Plaspy asocie los mensajes entrantes con la cuenta y el wearable correctos.
- Soporta intervalos de reporte configurables y cambios de estado para que Plaspy reciba datos de ruta en tiempo real y registros históricos.
- Permite a Plaspy recibir eventos de alerta que desencadenan notificaciones y flujos de escalamiento para cuidadores y administradores.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint de servidor compartido y determina automáticamente el protocolo del rastreador a partir de las conexiones entrantes. Cuando el RF‑V28 está configurado para apuntar al endpoint de Plaspy y envía datos correctamente, por lo general no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y los patrones de mensaje.
- Asegúrese de que el RF‑V28 esté configurado para reportar a d.plaspy.com o directamente a 54.85.159.138 para la detección automática.
- Los mensajes deben incluir campos de identidad del dispositivo (IMEI o ID del equipo) para que Plaspy pueda asociar el wearable a su cuenta.

## Transporte y contexto de conexión

El transporte describe la capa de red que el RF‑V28 usa para comunicarse con Plaspy y el comportamiento básico de conexión al enviar la telemetría. El RF‑V28 puede configurarse para enviar mensajes por UDP o TCP según el firmware y las opciones seleccionadas.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138 para el reporte.
- El uso del mismo puerto en todos los dispositivos facilita la configuración de firewalls y redes en el lado receptor.
- La preferencia entre UDP o TCP depende del firmware y del equilibrio deseado entre fiabilidad y latencia.
- Factores de red como NAT del operador, reglas de firewall y la calidad de la señal móvil pueden afectar el registro inicial y los reportes continuos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el tiempo entre mensajes, campos opcionales o la preferencia de transporte; siempre verifique la versión de firmware al diagnosticar.
- Cambios en hardware o diferencias entre SKUs pueden afectar los métodos de posicionamiento disponibles o sensores de eventos como la detección de caídas.
- Las opciones de configuración del fabricante (por ejemplo, usar UDP o TCP) influyen en cómo debe configurarse el equipo para reportar a Plaspy.
- El soporte por comandos SMS y la configuración mediante la app son funciones del dispositivo y operan de forma independiente del camino de reporte IP hacia Plaspy.
- Plaspy detecta automáticamente el protocolo, pero es necesario que el dispositivo esté apuntando al endpoint de Plaspy para que la detección ocurra.
- Valide la identidad del dispositivo y la telemetría reportada con la documentación oficial de Reachfar para confirmar que los campos requeridos por Plaspy estén presentes.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el RF‑V28 ayuda a garantizar una conexión fiable con Plaspy, acelera la resolución de problemas y asegura una alerta consistente para cuidadores y administradores.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte esperado en el puerto 8888.
- Ayuda a distinguir entre problemas en el dispositivo, como ajustes de firmware, y problemas de red, como puertos bloqueados o NAT del operador.
- Mejora la velocidad de configuración al asegurar que los intervalos de reporte y la notificación de eventos se ajusten a sus necesidades de monitoreo y expectativas de batería.
- Aclara cómo se entregan a la plataforma los tipos de eventos como SOS, detección de caídas y salidas de cercas Wi‑Fi.
- Reduce la ambigüedad al validar datos de ruta históricos, sellos de tiempo y la calidad del método de posicionamiento en las vistas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el RF‑V28 con Plaspy ofrece a cuidadores y organizaciones un único lugar para recibir ubicación en vivo, alertas SOS e historiales de ruta de colgantes personales junto con otras fuentes de telemetría. La detección automática de protocolos de Plaspy y su modelo de endpoint compartido reducen la complejidad de configuración, permitiendo que el RF‑V28 comience a alimentar eventos de rastreo y alarma en mapas, notificaciones y herramientas de reporte más rápido.

Learn more about Plaspy on the main website https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest RF-V28 device specific protocol information and firmware updates on the manufacturer site https://www.reachfargps.com/ before finalizing deployment decisions.
