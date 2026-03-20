---
slug: /xexun/x05/protocol
id: x05-protocol
sidebar_label: Protocol
title: Xexun - X05 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador Xexun X05 con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Protocolo Xexun X05
  - Protocolo GPS Xexun X05
  - Protocolo de comunicación Xexun X05
  - Protocolo de seguimiento Xexun X05
  - Protocolo de rastreador GPS Xexun
  - Rastreador compatible con Plaspy
  - Protocolo de rastreador GPS para mascotas
  - Rastreador con posicionamiento híbrido
  - Integración del rastreador con la nube
  - Seguimiento de mascotas con Plaspy
---

# Xexun - Protocolo X05

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación para usar el rastreador de mascotas Xexun X05 con Plaspy. Explica cómo el dispositivo informa ubicación y telemetría a la nube de Plaspy, qué papel juega el protocolo del dispositivo en ese flujo y qué ajustes compartidos de conexión se utilizan al incorporar el dispositivo a Plaspy. El objetivo es ayudar a usuarios técnicos e integradores a comprender los aspectos públicos de la comunicación del dispositivo sin revelar detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta a la plataforma. Para el X05 esto significa que el equipo puede apuntar al endpoint de Plaspy y la plataforma se encargará de la detección del protocolo y el procesamiento de mensajes. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el soporte y el comportamiento específico del firmware deben confirmarse con el fabricante cuando sea necesario. Plaspy acepta conexiones en d.plaspy.com o 54.85.159.138 en el puerto compartido 8888 y admite reportes de dispositivos por UDP o TCP en ese mismo puerto.

## Resumen del protocolo

El protocolo usado por el X05 regula cómo el dispositivo se identifica, reporta ubicación y telemetría, y recibe gestión a nivel de nube como configuraciones o actualizaciones de firmware. En términos generales, el protocolo define los tipos de mensaje y la cadencia que el dispositivo utiliza para comunicarse con Plaspy, de modo que las actualizaciones de ubicación, el estado de batería, eventos de movimiento y otra telemetría puedan mostrarse a los usuarios.

- Permite que el X05 entregue fijaciones GPS y posicionamiento híbrido, además de telemetría, a la nube de Plaspy para mapeo en tiempo real e historial.
- Transporta información de identificación y estado del dispositivo para que Plaspy asocie los mensajes entrantes con el registro correcto del rastreador.
- Soporta el informe de eventos de movimiento, nivel de batería y estado de conectividad que Plaspy utiliza para alertas y monitoreo de salud del dispositivo.
- Permite comportamientos de transmisión en cola y retransmisión para que los datos almacenados durante zonas sin cobertura se entreguen cuando la conectividad se reanude.
- Facilita acciones de gestión remota expuestas a través de Plaspy, como intervalos de reporte configurables y actualizaciones de firmware OTA cuando están soportadas.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint de recolección compartido que acepta reportes de dispositivos en un puerto común y utiliza esa entrada para determinar el protocolo que usa un dispositivo. Cuando el X05 está configurado para reportar al endpoint de Plaspy, la plataforma examina conexiones y mensajes entrantes para emparejarlos con un tipo de rastreador compatible. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint de reporte de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP 54.85.159.138 en el puerto compartido 8888.
- La plataforma detecta automáticamente el protocolo del rastreador a partir de los patrones de conexión y de los mensajes entrantes.
- Normalmente, solo debe configurarse en el X05 la dirección de envío hacia el endpoint de Plaspy mediante la herramienta de configuración del dispositivo o el aprovisionamiento del fabricante.
- No se requiere seleccionar un puerto por dispositivo porque Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Si un dispositivo no aparece registrado, confirme la dirección de reporte, la selección de transporte y los pasos de configuración del fabricante.

## Transporte y contexto de conexión

El contexto de transporte cubre cómo el X05 entrega mensajes a Plaspy y qué opciones de conexión suelen estar disponibles. El X05 es un rastreador híbrido con conectividad celular que reporta ubicación y telemetría a través de redes móviles; según el firmware y el aprovisionamiento del equipo, puede usar UDP o TCP para llegar a Plaspy. Comprender las opciones de transporte ayuda a asegurar que los dispositivos lleguen al endpoint de Plaspy de forma fiable.

- El X05 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración.
- Los dispositivos pueden apuntar al endpoint de Plaspy por dominio d.plaspy.com o por la IP pública 54.85.159.138.
- Todos los dispositivos que se conectan a Plaspy usan el mismo puerto, 8888, lo que simplifica el aprovisionamiento y la configuración de cortafuegos.
- La elección entre UDP y TCP puede afectar características de entrega como la fiabilidad y las retransmisiones; seleccione el transporte que coincida con el firmware del dispositivo y las condiciones de red.
- Verifique que las redes del operador y los cortafuegos locales permitan conexiones salientes en el transporte y puerto configurados para que los reportes puedan alcanzar Plaspy.

## Notas sobre compatibilidad del protocolo

- El X05 se describe como compatible con Plaspy, pero el comportamiento exacto del protocolo puede variar entre versiones de firmware y variantes de hardware.
- Las interfaces de aprovisionamiento del fabricante pueden exponer campos para seleccionar transporte y dirección del servidor que deben apuntar al endpoint de Plaspy para un reporte exitoso.
- Las diferencias en firmware regional, bandas celulares o conjuntos de funciones pueden cambiar cuáles campos de telemetría están disponibles para Plaspy.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y con las características de fiabilidad previstas para la implementación.
- Valide la compatibilidad de funciones específicas, como actualización remota de firmware, monitoreo de voz o almacenamiento en zonas sin cobertura, según la documentación oficial del fabricante.
- Al depurar conectividad, confirme la resolución de dominios, las políticas de red saliente y que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación usado por el X05 ayuda a asegurar una integración confiable con Plaspy, facilita la resolución de problemas y respalda la gestión a largo plazo del dispositivo. Saber qué se espera que envíe el dispositivo y cómo se conecta hace más sencillo confirmar una incorporación exitosa y resolver problemas comunes con rapidez.

- Configuración más rápida al asegurar que el dispositivo apunte al endpoint correcto de Plaspy y que el transporte esté seleccionado adecuadamente.
- Resolución de problemas más efectiva cuando los reportes no aparecen en Plaspy, al revisar la conexión, el transporte y la configuración a nivel de dispositivo.
- Mejor optimización de la batería alineando los intervalos de reporte y el comportamiento del sensor de movimiento con los flujos de telemetría esperados.
- Alertas y comportamiento de geocercas más fiables cuando el dispositivo informa de manera consistente movimiento, ubicación y eventos de batería.
- Expectativas claras sobre la disponibilidad de funciones cuando las revisiones de firmware o hardware cambian el conjunto de mensajes soportados.

## Por qué usar Plaspy con este protocolo

Usar el Xexun X05 con Plaspy ofrece a los propietarios de mascotas y a los gestores visibilidad centralizada sobre ubicación, actividad y salud del dispositivo. Plaspy recopila las fijaciones de ubicación y la telemetría enviadas por el X05 y las pone a disposición mediante mapas en tiempo real, alertas y reproducción de historial, de modo que el seguimiento y la supervisión operativa sean sencillos de gestionar. Para implementaciones que requieran reportes configurables, alertas por geocerca y gestión remota, Plaspy agrega los datos del dispositivo en un panel unificado que facilita el monitoreo diario y la respuesta a incidentes.

Si desea saber más sobre Plaspy y cómo se integra con rastreadores compatibles como el Xexun X05, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de Xexun https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
