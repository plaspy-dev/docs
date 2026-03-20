---
slug: /concox/vl103m/protocol
id: vl103m-protocol
sidebar_label: Protocol
title: Concox - VL103M Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas sobre el protocolo de Concox VL103M y cómo se comunica con Plaspy para seguimiento GPS y alertas confiables
keywords:
  - protocolo Concox VL103M
  - protocolo GPS Concox VL103M
  - Concox VL103M Plaspy
  - protocolo rastreador VL103M
  - protocolo de comunicación VL103M
  - compatibilidad rastreador Concox
  - protocolo rastreador GPS Plaspy
  - rastreo de vehículos VL103M
  - telemetría VL103M
  - integración Concox VL103M
---

# Concox - Protocolo VL103M

Esta página explica el contexto público del protocolo para usar el rastreador Concox VL103M con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, para que usted entienda la integración, el reporte del dispositivo y qué verificar al conectar unidades VL103M a la plataforma.

El VL103M es un rastreador 4G compacto y robusto diseñado para motocicletas y vehículos comerciales ligeros, con posicionamiento GNSS, comunicación LTE Cat 1 y respaldo GSM. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo del VL103M puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar detalles específicos del equipo cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador define cómo el VL103M informa ubicación, telemetría y eventos a través de la conexión celular para que Plaspy pueda recibir y presentar datos de rastreo útiles. Esta página no reproduce tramas propietarias ni reglas de parseo, pero explica el papel del protocolo al conectar el dispositivo con Plaspy y al mantener el reporte confiable.

- Identificación del dispositivo y reportes periódicos para que cada unidad VL103M quede asociada a un activo específico en Plaspy.
- Entrega de datos de ubicación y GNSS para seguimiento en tiempo real y reproducción histórica dentro de la plataforma Plaspy.
- Reporte de eventos y telemetría como vibración, manipulación, baja de voltaje, SOS y cambios en entradas digitales para soportar alertas y automatizaciones.
- Comportamiento de almacenamiento en búfer para retener registros cuando no hay cobertura celular y transmitirlos más tarde a Plaspy una vez que se restablece la conectividad.
- Señalización de comandos remotos en términos generales para soportar salidas como buzzer o activación de relé cuando el firmware del dispositivo lo permite.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos, y detecta automáticamente el protocolo del rastreador para enrutar y decodificar los reportes. En la mayoría de los casos, un VL103M correctamente configurado que apunte a Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com para configuración basada en DNS.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse cuando se requiere configuración directa por IP.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la preferencia del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir una variante de protocolo dentro de Plaspy cuando el dispositivo reporta al endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el VL103M establece una sesión con Plaspy y qué ajustes de red son comúnmente requeridos. Esta sección se enfoca en transporte y direccionamiento más que en los detalles internos del protocolo.

- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de reporte.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según sus capacidades; ambos transportes son compatibles para el envío de reportes.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de flotas y las reglas de firewall.
- Configure el APN, la SIM y el modo de red del dispositivo conforme a la guía de aprovisionamiento del VL103M para que pueda alcanzar Plaspy por LTE con respaldo GSM.
- Considere NAT, firewall y restricciones de los operadores móviles al solucionar problemas de conectividad con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar funciones disponibles, formatos de eventos y campos opcionales; confirme la versión de firmware del VL103M al diagnosticar diferencias.
- Variantes de hardware o versiones celulares regionales pueden alterar el comportamiento de radio y los conjuntos de bandas soportadas; esto no suele cambiar los conceptos generales del protocolo pero puede afectar la conectividad.
- La elección del transporte (UDP vs TCP) puede seleccionarse en el dispositivo y afectar características de entrega como retransmisión y ordenamiento.
- Los ajustes de servidor por defecto del fabricante pueden apuntar a una nube del proveedor; asegúrese de reconfigurar los dispositivos a d.plaspy.com o 54.85.159.138 con el puerto 8888 para la integración con Plaspy.
- Valide el comportamiento de alarmas y E/S (buzzer, relé, escucha) acorde a su versión de firmware, ya que las implementaciones y la disponibilidad de comandos pueden variar.
- Pruebe un subconjunto pequeño de dispositivos antes de un despliegue masivo para confirmar la cadencia de reportes y el comportamiento de eventos esperado.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a lograr una configuración inicial fluida, una resolución de problemas más rápida y una mayor fiabilidad a largo plazo al desplegar rastreadores VL103M con Plaspy. Saber qué esperar de los reportes del dispositivo y de las opciones de transporte reduce el tiempo de integración y mantiene la visibilidad operativa.

- Verifique con confianza que los dispositivos reportan al endpoint y puerto correctos de Plaspy cuando no aparecen en la plataforma.
- Interprete qué eventos deberían llegar a Plaspy (vibración, manipulación, baja de voltaje, SOS) para ajustar reglas de notificación y alarmas.
- Decida entre transporte UDP o TCP según las necesidades de confiabilidad y las condiciones de la red de su flota.
- Solucione problemas de conectividad revisando APN, estado de la SIM, versión de firmware y si el dispositivo apunta a d.plaspy.com o a 54.85.159.138.
- Planifique actualizaciones de firmware y despliegues sabiendo que el comportamiento del protocolo puede variar entre versiones de firmware y variantes de hardware.

## Por qué usar Plaspy con este protocolo

Usar el Concox VL103M con Plaspy ofrece a operadores y administradores de flotas una forma eficiente de convertir las capacidades GNSS y de telemetría del equipo en información operativa accionable. Plaspy ingiere ubicaciones en tiempo real, alertas basadas en eventos y telemetría para que usted pueda monitorear vehículos, activar flujos de trabajo ante manipulación o eventos SOS, y mantener registros históricos de rastreo para análisis.

Para conocer más sobre cómo Plaspy funciona con dispositivos como el VL103M, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en https://www.iconcox.com/ antes de despliegues a gran escala.
