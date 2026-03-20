---
slug: /xexun/u02/protocol
id: u02-protocol
sidebar_label: Protocol
title: Xexun - U02 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el wearable Xexun U02 con Plaspy y ofrecer posicionamiento interior preciso y telemetría
keywords:
  - Protocolo Xexun U02
  - Protocolo GPS Xexun U02
  - Comunicación Xexun U02
  - Seguimiento Xexun U02
  - Dispositivo U02 UWB
  - Rastreadores compatibles con Plaspy
  - Posicionamiento interior U02
  - Alertas de manipulación U02
  - Integración de telemetría U02
  - Protocolo de dispositivo Plaspy
---

# Xexun - Protocolo U02

Esta página describe el contexto público del protocolo para usar el rastreador wearable Xexun U02 con Plaspy. Explica, en términos generales y no sensibles, cómo se comporta el dispositivo al reportar datos y cómo los sistemas de soporte interactúan con la plataforma Plaspy, con especial énfasis en el papel de la comunicación para entregar ubicación y telemetría al servidor.

El U02 es un reloj de posicionamiento UWB con protección anti manipulación diseñado para despliegues de alta seguridad; complementa a los rastreadores GPS al proporcionar posicionamiento interior con precisión de centímetros, alertas por manipulación y telemetría de personal. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del U02 permite que el reloj y su red de anclas entregue fijaciones de posición, eventos de manipulación y emergencia, y telemetría de sensores a Plaspy. En la práctica, el protocolo define cómo el dispositivo o la red de anclas informa posiciones calculadas y datos de eventos a un endpoint de backend que Plaspy consume y asigna a una cuenta de usuario.

- Transporta datos de posición derivados por UWB e intercambios con anclas que resultan en actualizaciones de ubicación interior de alta precisión para Plaspy.
- Transmite alarmas por manipulación y eventos del botón de emergencia para que Plaspy pueda generar alertas inmediatas y registros de incidentes.
- Reenvía telemetría de sensores como ritmo cardíaco y movimiento para permitir la monitorización de salud y actividad dentro de Plaspy.
- Admite mensajería bidireccional entre el dispositivo y las anclas para habilitar acuses de recibo de comandos y mensajes del sistema cuando está soportado.
- Permite que el sistema de anclas o el motor de posicionamiento reenvíe fijaciones calculadas y metadatos de eventos a Plaspy para visualización e informes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos reportados en un único endpoint compartido y detecta automáticamente el protocolo del rastreador usado por los dispositivos entrantes. Cuando una implementación U02 está configurada para reportar a Plaspy, la plataforma identifica el tipo de mensaje entrante e integra el dispositivo sin que, en la mayoría de los casos, sea necesario seleccionar manualmente el protocolo.

- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Plaspy soporta reportes vía UDP y TCP según la configuración del dispositivo y las necesidades de la red.
- Normalmente usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo apunta al endpoint y puerto correctos de Plaspy.
- La detección automática del protocolo simplifica la incorporación en despliegues mixtos que incluyen wearables U02 y rastreadores GPS convencionales.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el U02 y su sistema de anclas reenvían posiciones calculadas y telemetría a Plaspy, más que los detalles de estructura de mensajes a bajo nivel. Los ajustes públicos críticos para la integración son el endpoint de Plaspy, las opciones de transporte y el puerto consistente usado por los dispositivos.

- El dispositivo o el sistema de anclas puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Plaspy acepta reportes enviados a d.plaspy.com o a la dirección numérica 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de firewall y de red para los despliegues.
- La selección del transporte puede depender de la estabilidad de la red, del comportamiento de retransmisión de los sistemas de anclas y de cualquier gateway intermedio usado en el despliegue.
- Asegúrese de que el enrutamiento de red y las reglas de firewall permitan tráfico saliente desde anclas o gateways hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en las unidades U02 o en el firmware de las anclas pueden cambiar el timing de los mensajes, los campos disponibles o la telemetría opcional. Verifique las notas de firmware antes de rollouts a gran escala.
- Las revisiones de hardware u opciones adicionales como variantes con RFID o NFC pueden afectar qué campos de telemetría están disponibles para Plaspy.
- El modo de transporte importa: considere si sus anclas o gateways reenvían vía UDP o TCP y configure los dispositivos en consecuencia.
- Las herramientas de configuración del fabricante o los sistemas de gestión de anclas pueden ser responsables de reenviar fijaciones calculadas a Plaspy en vez de que lo haga directamente el reloj.
- Valide cualquier flujo de trabajo de mensajería bidireccional con las anclas para asegurarse de que los mensajes del sistema se transmitan a Plaspy como se espera.
- Consulte siempre la documentación oficial del fabricante para detalles de implementación que afecten la integración y compatibilidad.

## Por qué es importante comprender el protocolo

Comprender cómo el U02 reporta posiciones, eventos de manipulación y telemetría de sensores hace que el despliegue, la resolución de problemas y la monitorización operativa sean más fiables cuando se integran con Plaspy. La claridad sobre transporte, configuración del endpoint y tipos de eventos esperados reduce el tiempo de incorporación y facilita la localización rápida de problemas.

- Acelera la incorporación al asegurar que dispositivos y anclas apunten al endpoint y puerto correctos de Plaspy.
- Reduce falsas alarmas y eventos perdidos al alinear los ajustes de firmware con los intervalos de reporte y las opciones de transporte esperadas.
- Mejora la respuesta ante incidentes cuando usted conoce cómo se codifican y entregan a Plaspy los eventos de manipulación y emergencia.
- Ayuda a planificar las configuraciones de red y firewall ya que todos los dispositivos Plaspy comparten el mismo puerto de escucha.
- Facilita el mantenimiento y las actualizaciones al identificar dónde los cambios de firmware podrían alterar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Xexun U02 junto con Plaspy brinda a las organizaciones una vista unificada que combina posicionamiento interior de alta precisión y telemetría de personal con datos de rastreadores GPS de área amplia. Esta combinación es valiosa para sitios con alta sensibilidad de seguridad, centros de salud y entornos industriales donde la precisión interior, la protección contra manipulación y la detección de eventos de salud complementan el seguimiento convencional de flotas y activos.

Plaspy toma los eventos entrantes del U02 y las posiciones derivadas de las anclas e integra esa información en mapas en vivo, alertas y reproducciones históricas junto con la telemetría de vehículos y activos. Para saber más sobre Plaspy y cómo maneja despliegues mixtos, visite https://www.plaspy.com. Para detalles más actuales sobre el comportamiento del protocolo del dispositivo, cambios de firmware y notas específicas del fabricante, verifique la información en el sitio oficial de Xexun https://www.xexun.com/ ya que el soporte de dispositivos y el comportamiento del firmware pueden cambiar con el tiempo.
