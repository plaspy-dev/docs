---
slug: /wanway/gp10/protocol
id: gp10-protocol
sidebar_label: Protocol
title: WanWay - GP10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del WanWay GP10 y cómo se comunica con Plaspy para rastreo y alertas
keywords:
  - Protocolo WanWay GP10
  - Protocolo GPS WanWay GP10
  - WanWay GP10 para Plaspy
  - Protocolo de rastreo GP10
  - Protocolo de comunicación WanWay GP10
  - Compatibilidad WanWay GP10
  - Protocolo de rastreador WanWay GP10
  - Protocolo de dispositivo WanWay GP10
  - Rastreo en tiempo real WanWay GP10
  - Geocerca WanWay GP10
---

# WanWay - Protocolo GP10

Esta página ofrece información pública sobre el protocolo usado por el rastreador personal WanWay GP10 cuando se integra con la plataforma Plaspy. Se centra en cómo suele comunicarse el dispositivo con Plaspy para ubicación en tiempo real, eventos de geocerca, alertas SMS y telemetría relacionada, sin entrar en detalles internos de firmware o implementaciones privadas.

El GP10 es un rastreador personal compacto con rastreo en tiempo real, geocercas, alertas por SMS, monitoreo de voz y una batería de 800 mAh. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel de protocolo adecuado para integración y resolución de problemas.

## Resumen del protocolo

El protocolo del GP10 define cómo el rastreador se identifica, reporta posición y estado, y envía notificaciones de eventos a un servidor remoto. Para la integración con Plaspy, los hechos públicos más relevantes son el endpoint de transporte y que Plaspy aceptará los reportes del dispositivo e inferirá el protocolo automáticamente.

- El protocolo transmite la identidad del dispositivo y los reportes de ubicación para que Plaspy pueda asociar el GP10 a un activo en la plataforma.
- La telemetría suele incluir actualizaciones periódicas de posición, mensajes por eventos como violaciones de geocerca y alertas SOS, además de indicadores de estado como el nivel de batería.
- Los mensajes de protocolo se envían desde el dispositivo al endpoint del servidor para que Plaspy muestre el rastreo en tiempo real y dispare notificaciones.
- El dispositivo puede soportar múltiples opciones de transporte; el medio seleccionado determina cómo se entregan los mismos mensajes de protocolo.
- Conocer qué eventos puede reportar el rastreador ayuda a configurar alertas y reglas de monitoreo dentro de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy opera con un endpoint y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo de reporte cuando un rastreador está correctamente configurado para enviar datos. En la mayoría de los casos, el usuario no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo apunta al endpoint de Plaspy.

- Plaspy recibe reportes entrantes en el dominio d.plaspy.com y también acepta la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de la plataforma.
- Si un dispositivo no aparece en Plaspy, confirme que el rastreador está configurado para reportar al endpoint de Plaspy y verifique los ajustes de transporte en el equipo.
- Normalmente, los usuarios solo deben asegurarse de que la dirección del servidor y el modo de transporte estén configurados correctamente en el GP10 para que se produzca la detección automática.

## Transporte y conexión

El GP10 puede configurarse para usar transporte UDP o TCP para enviar sus reportes, según las capacidades del dispositivo y las opciones seleccionadas. Para integrarlo con Plaspy, el dispositivo debe apuntar al endpoint de Plaspy y usar el transporte soportado en el puerto común.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- El GP10 puede configurarse para usar UDP o TCP en el puerto 8888, según las opciones de configuración y el firmware.
- Elegir UDP o TCP puede afectar el comportamiento de entrega; seleccione el modo que coincida con la configuración del dispositivo y los requisitos de red.
- Asegúrese de que los firewalls de red y la configuración APN del operador permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los eventos disponibles o campos opcionales, por lo que confirme los detalles del firmware si el comportamiento difiere de lo esperado.
- Las variantes de hardware o los modelos regionales pueden implementar las características de reporte de forma ligeramente diferente; valide la revisión exacta del modelo al solucionar problemas.
- La selección del transporte (UDP versus TCP) debe coincidir con la configuración del dispositivo para garantizar la entrega a Plaspy.
- Algunas funciones como alertas por SMS o monitoreo de voz son capacidades del dispositivo y pueden no formar parte directamente del protocolo de reporte por IP.
- Siempre valide los ejemplos de configuración contra la documentación actual del fabricante para el GP10.
- Si un dispositivo no se registra automáticamente en Plaspy, vuelva a comprobar la dirección del servidor, la selección de transporte y los intervalos de reporte del dispositivo.

## Por qué es importante entender el protocolo

Saber cómo se comunica el GP10 con Plaspy facilita la configuración, la operación confiable y el diagnóstico cuando los dispositivos no se comportan como se espera. Un conocimiento básico del contexto de comunicación orienta las decisiones de configuración y reduce el tiempo dedicado a problemas comunes de conectividad.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy para que ocurra la detección automática.
- Ayuda a elegir el modo de transporte adecuado y verificar las rutas de red para el tráfico saliente del dispositivo.
- Permite un diagnóstico más eficaz cuando no se reciben eventos esperados como alertas de geocerca o mensajes SOS.
- Ayuda a planear los compromisos entre frecuencia de reporte y duración de batería para equilibrar comportamiento en tiempo real y autonomía.
- Facilita la comunicación con el soporte del fabricante cuando sea necesario investigar el firmware o el comportamiento del equipo.

## Por qué usar Plaspy con este protocolo

Usar el WanWay GP10 con Plaspy ofrece una forma simple de centralizar el rastreo, las alertas y el monitoreo de dispositivos personales y activos. La detección automática de protocolos y el modelo de endpoint compartido de Plaspy simplifican el onboarding: los dispositivos configurados para reportar al endpoint de Plaspy comienzan a aparecer en la plataforma con mínima selección manual de protocolo.

Si necesita más detalles sobre las capacidades de Plaspy o los procesos de incorporación de dispositivos, consulte https://www.plaspy.com. Para el firmware más reciente del GP10, las opciones de configuración del dispositivo y los detalles específicos del protocolo del fabricante, verifique la información en el sitio oficial de WanWay https://www.wanwaytech.net/.
