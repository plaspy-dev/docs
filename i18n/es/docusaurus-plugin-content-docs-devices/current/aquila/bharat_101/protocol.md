---
slug: /aquila/bharat_101/protocol
id: bharat_101-protocol
sidebar_label: Protocol
title: Aquila - BHARAT 101 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del Aquila BHARAT 101 y su comunicación con Plaspy ajustes de servidor y compatibilidad
keywords:
  - Protocolo Aquila BHARAT 101
  - Protocolo GPS Aquila BHARAT 101
  - Compatibilidad BHARAT 101 Plaspy
  - Protocolo de seguimiento Aquila
  - Rastreador vehicular BHARAT 101
  - Protocolo AIS140
  - Gestión de flotas Plaspy
  - Integración rastreador GPS Plaspy
  - Protocolo de comunicación BHARAT 101
  - Protocolo de rastreo Aquila BHARAT 101
---

# Aquila - Protocolo BHARAT 101

Esta página presenta notas públicas sobre el protocolo utilizado por el rastreador Aquila BHARAT 101 al trabajar con Plaspy. Resume cómo se comunica el dispositivo en términos generales y qué esperar al integrarlo con Plaspy para rastreo vehicular, monitoreo y telemetría. Los lectores con perfil técnico encontrarán orientación sobre el contexto de conexión y consideraciones prácticas de compatibilidad; los detalles sensibles de implementación se omiten intencionalmente.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador envía datos al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que, aunque el BHARAT 101 es compatible con Plaspy, el funcionamiento del equipo puede diferir entre versiones de firmware e instalaciones.

## Resumen del protocolo

El protocolo define el lenguaje común que el BHARAT 101 utiliza para reportar posición, estado y datos de sensores a un servidor remoto. En términos públicos, regula cómo el rastreador se identifica ante el servidor, cómo empaqueta la posición y los datos de entradas, y cómo el servidor procesa esos mensajes para mapeo e informes.

- Permite reportes periódicos y basados en eventos de posición GNSS y telemetría a un endpoint remoto.
- Incluye información identificadora que permite a Plaspy asociar los mensajes entrantes con un registro de dispositivo.
- Transporta el estado de sensores y entradas/salidas, como entradas digitales, lecturas analógicas y eventos de detección de movimiento.
- Permite al servidor recibir datos históricos cuando el dispositivo sube información almacenada.
- Soporta reporte en vivo inmediato y cargas diferidas tras la restauración de conectividad.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint de red compartido y detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado envía datos. Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy y usa las opciones de transporte estándar.

- El dominio de servidor de Plaspy para reporte de dispositivos es d.plaspy.com, que resuelve al endpoint público del servicio.
- La IP del servidor Plaspy es 54.85.159.138, que puede usarse en la configuración del dispositivo como alternativa al dominio.
- Plaspy recibe el tráfico de dispositivos en el puerto 8888 y todos los dispositivos en la plataforma usan el mismo puerto para reportar.
- Los dispositivos pueden configurarse para reportar por UDP o TCP al puerto 8888, según el dispositivo y la configuración de la SIM.
- Cuando el dispositivo apunta al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador y encaminará los datos adecuadamente.
- La selección manual del protocolo en la plataforma suele ser innecesaria si el rastreador está correctamente configurado para enviar a d.plaspy.com o a la IP de Plaspy en el puerto 8888.

## Transporte y contexto de conexión

El BHARAT 101 puede reportar usando las opciones de transporte de red estándar que admiten los rastreadores vehiculares. Para la integración con Plaspy, el contexto de conexión se limita al host y al transporte usados para entregar los mensajes del rastreador al ingresador de Plaspy.

- Los dispositivos pueden usar UDP o TCP para enviar reportes a Plaspy según la configuración y el comportamiento de la red.
- El host de reporte de Plaspy es d.plaspy.com, pero la IP 54.85.159.138 puede utilizarse en ajustes de dispositivo donde DNS esté restringido.
- Todos los dispositivos que reportan a Plaspy usan el mismo número de puerto, 8888, para datos entrantes.
- Seleccionar UDP puede favorecer menor latencia y menor overhead, mientras que TCP puede ofrecer entrega más fiable según el firmware del equipo.
- Verifique que la SIM y el operador permitan el transporte elegido para conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles y las funciones opcionales; confirme la versión de firmware al solucionar problemas.
- Las variantes de hardware y los lotes de producción a veces difieren en interfaces habilitadas, como RS232, entradas analógicas o configuraciones de antena interna.
- Las utilidades de configuración del fabricante o los servicios de aprovisionamiento pueden establecer valores predeterminados de transporte y host que deben ajustarse para el reporte a Plaspy.
- La elección de transporte entre UDP y TCP puede afectar el comportamiento de entrega y debe validarse en campo.
- La certificación AIS140 y la carcasa resistente son capacidades del dispositivo que ayudan a cumplir requisitos regulatorios y ambientales, pero no modifican las configuraciones de transporte de red.
- Siempre valide la compatibilidad y el comportamiento con la documentación del fabricante para la unidad BHARAT 101 y la versión de firmware exactas.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el BHARAT 101 facilita la configuración, verificación y resolución de problemas de conectividad con Plaspy. Tener expectativas claras sobre transporte, selección de host y roles típicos de los mensajes reduce el tiempo de integración y mejora la fiabilidad operativa.

- Acelera la provisión inicial del dispositivo y la configuración correcta del host para reportar a Plaspy.
- Ayuda a diagnosticar problemas de conectividad verificando transporte, resolución DNS y restricciones del operador.
- Clarifica cómo los datos de sensores y entradas se mapean a los campos de Plaspy para monitoreo y reglas significativas.
- Facilita la comunicación con el fabricante cuando el comportamiento difiere entre versiones de firmware.
- Apoya la planificación de almacenamiento en dispositivo, cargas diferidas y límites de capacidad durante el despliegue.

## Por qué usar Plaspy con este protocolo

Usar el Aquila BHARAT 101 con Plaspy ofrece una vía práctica hacia la visibilidad de la flota y el monitoreo remoto, aprovechando el diseño resistente del dispositivo y su conformidad AIS140. La detección automática de protocolo de Plaspy y el enfoque de puerto unificado simplifican la incorporación, de modo que las flotas puedan centrarse en los flujos operativos en lugar de configuraciones de red complejas por dispositivo.

Para obtener más información sobre Plaspy y cómo integrarse con dispositivos como el BHARAT 101, visite https://www.plaspy.com. Por favor verifique el soporte más reciente específico del dispositivo, el comportamiento del firmware y los detalles de implementación con el fabricante en https://www.itriangle.in/ ya que los protocolos y el firmware pueden cambiar con el tiempo.
