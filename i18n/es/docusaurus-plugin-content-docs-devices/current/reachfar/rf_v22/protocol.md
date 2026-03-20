---
slug: /reachfar/rf_v22/protocol
id: rf_v22-protocol
sidebar_label: Protocol
title: Reachfar - RF-V22 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del sensor Reachfar RF-V22 para reportes de puerta mediante Plaspy y monitoreo confiable
keywords:
  - Protocolo Reachfar RF-V22
  - Compatibilidad RF-V22 Plaspy
  - Protocolo de alarma de puerta Reachfar
  - Protocolo de comunicación RF-V22
  - Protocolo de seguimiento RF-V22
  - Integración de dispositivos Plaspy
  - Protocolo sensor de puerta GSM GPRS
  - Integración de telemetría Reachfar
  - Detección de protocolo Plaspy
  - Protocolo de alarma de puerta celular
---

# Reachfar - Protocolo RF-V22

Esta página describe el contexto público del protocolo para usar la alarma de puerta Reachfar RF-V22 Telecom Smart Door Alarm con Plaspy. Se enfoca en cómo el dispositivo reporta eventos de apertura y cierre de puertas vía GSM GPRS a un endpoint de Plaspy y qué deben entender integradores y administradores sobre esa comunicación para lograr un monitoreo y alertas confiables.

El RF-V22 es un detector de estado de puerta con comunicación celular y protección IP67, diseñado para control supervisado de accesos en entornos sanitarios, de cuarentena, residencias asistidas y similares. Plaspy utiliza configuraciones compartidas de conexión entre dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero el comportamiento exacto del equipo puede variar según firmware, revisión de hardware e implementación del fabricante. La información que sigue pretende explicar conceptos de conexión y protocolo en términos públicos sin entrar en detalles internos de firmware.

## Resumen del protocolo

El RF-V22 comunica el estado de la puerta y eventos de alarma a través de redes celulares hacia un servicio de monitoreo remoto. En el contexto de Plaspy, el dispositivo envía telemetría a endpoints de Plaspy donde esos eventos se convierten en alertas, registros y disparadores de automatización. Entender este flujo de extremo a extremo ayuda a garantizar que la unidad reporte de forma fiable y que Plaspy muestre datos útiles a los operadores.

- El protocolo define cómo el RF-V22 empaqueta y transmite eventos de apertura y cierre de puerta a un endpoint remoto.
- Los reportes permiten a Plaspy correlacionar el estado de la puerta con otra telemetría para flujos automatizados y respuestas ante incidentes.
- El protocolo debe permitir que la unidad se identifique para que Plaspy asocie los eventos con el activo y la configuración correctos.
- Un transporte fiable y un comportamiento de reintento a nivel del dispositivo son importantes para la entrega casi en tiempo real en entornos celulares.
- Las marcas temporales y los identificadores de evento a nivel de protocolo ayudan a Plaspy a registrar historiales precisos para cumplimiento y auditoría.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un endpoint común al que los dispositivos RF-V22 pueden reportar. Cuando un equipo correctamente configurado envía telemetría a ese endpoint, Plaspy detecta automáticamente el protocolo del tracker y procesa los eventos entrantes sin necesidad de seleccionar manualmente el protocolo en la mayoría de los casos. Esta detección automática simplifica la incorporación y reduce el riesgo de errores de configuración.

- Los dispositivos deben apuntar al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto para telemetría entrante, lo que simplifica la configuración del equipo.
- Plaspy escucha en el puerto 8888 y puede aceptar reportes de dispositivos tanto por UDP como por TCP según el soporte y la configuración del dispositivo.
- Cuando el RF-V22 envía eventos al endpoint de Plaspy, la plataforma asocia esos eventos con el registro de dispositivo correcto y aplica las reglas de alerta configuradas.
- Las instalaciones típicas no requieren que los usuarios seleccionen manualmente un protocolo en Plaspy una vez que el dispositivo esté configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión en el nivel del dispositivo determinan cómo los mensajes llegan a Plaspy. El RF-V22 usa GSM GPRS para acceder a la red pública y puede configurarse para enviar telemetría por UDP o TCP. Entender las opciones de transporte y hacia dónde apuntar el dispositivo es esencial para una integración exitosa.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- El servidor de Plaspy puede referenciarse por nombre de dominio en d.plaspy.com o por la dirección IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración de red y las reglas de firewall.
- Elija UDP para menor sobrecarga y entrega potencialmente más rápida en configuraciones simples de reporte de eventos, o TCP para entrega orientada a conexión si el dispositivo y la red lo prefieren.
- Confirme que la operadora celular o las políticas de firewall locales permitan conexiones salientes al endpoint y al puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades RF-V22 pueden cambiar el temporizado de mensajes, los campos incluidos en los reportes o el comportamiento de reintento. Verifique las notas de la versión de firmware al solucionar problemas.
- Las revisiones de hardware u opciones de accesorios pueden afectar la telemetría disponible o el comportamiento de alimentación, aunque la función básica de reporte de puerta sea consistente.
- La selección de transporte entre UDP y TCP es configurable en el dispositivo y puede requerir que la configuración del equipo coincida con el comportamiento del listener de Plaspy.
- Dado que el RF-V22 es una alarma de puerta celular y no un rastreador GPS, los campos GNSS no son aplicables y no aparecerán en la telemetría.
- Consulte la documentación del fabricante y las guías de instalación para confirmar los pasos exactos de configuración para apuntar el dispositivo al endpoint de Plaspy.
- Pruebe los dispositivos en el entorno de despliegue objetivo para validar cobertura celular, temporización de eventos y asociación con Plaspy antes de implementaciones a gran escala.

## Por qué es importante comprender el protocolo

Tener claridad sobre el protocolo de comunicación del RF-V22 y el contexto de conexión reduce la fricción en la incorporación y mejora la confiabilidad operativa. Saber cómo el dispositivo reporta eventos y cómo Plaspy los recibe e interpreta ayuda a los equipos a configurar alertas, mantener registros de cumplimiento y resolver problemas de conectividad de forma eficiente.

- Acorta el tiempo hasta el primer evento exitoso en Plaspy al asegurar que el dispositivo apunte al endpoint y puerto correctos.
- Permite mapear con precisión los identificadores del dispositivo en Plaspy para que los eventos queden asociados al activo y ubicación correctos.
- Ayuda a diagnosticar pérdida o demora de eventos enfocando las comprobaciones en transporte, conectividad con la operadora y comportamiento de reintento del firmware.
- Facilita el diseño de reglas de automatización en Plaspy que respondan correctamente a eventos de apertura y cierre de puerta.
- Aclara expectativas sobre retención de datos, marcas temporales y registros de auditoría en flujos operativos y de cumplimiento.

## Por qué usar Plaspy con este protocolo

Usar el RF-V22 con Plaspy ofrece a las organizaciones un lugar centralizado para recibir eventos de apertura y cierre de puertas junto con otra telemetría. Esto es valioso para instalaciones que requieren control supervisado de accesos, entornos de salud que monitorean la seguridad de pacientes y operaciones que se benefician de correlacionar eventos de acceso con otros datos de activos gestionados en Plaspy.

Plaspy facilita recibir y actuar sobre eventos RF-V22 al proporcionar un endpoint compartido y detección automática de protocolo. Para saber más sobre Plaspy y cómo maneja la integración de dispositivos visite https://www.plaspy.com. Para detalles actuales específicos del protocolo y firmware del dispositivo, verifique la información con el fabricante en https://www.reachfargps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
