---
slug: /skypatrol/sp4603/protocol
id: sp4603-protocol
sidebar_label: Protocol
title: SkyPatrol - SP4603 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar SkyPatrol SP4603 con Plaspy, con contexto de conexión y notas de compatibilidad
keywords:
  - protocolo SkyPatrol SP4603
  - rastreador GPS SP4603
  - compatibilidad protocolo SkyPatrol Plaspy
  - protocolo de seguimiento SP4603
  - comunicación GPS SkyPatrol
  - rastreo de flotas SP4603
  - telemática SP4603
  - integración de dispositivos Plaspy
  - guía de protocolo de rastreador GPS
  - seguimiento vehicular SP4603
---

# SkyPatrol - Protocolo SP4603

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol SP4603 Series con Plaspy. Se enfoca en cómo se comunica el dispositivo en términos generales, qué configuraciones de conexión se usan para reportar a Plaspy y qué debe considerarse al integrar dispositivos SP4603 en una flota o despliegue telemático.

La serie SP4603 incluye funciones como gestión remota por aire (OTA), actualizaciones FOTA, detección de interferencias GSM y geocercas por hardware. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte la información del fabricante para detalles específicos del equipo mientras usa esta página como referencia de compatibilidad y conexión para la integración con Plaspy.

## Resumen del protocolo

El protocolo de la serie SP4603 define cómo el rastreador informa ubicación, estado y alarmas a un servidor remoto y cómo el servidor puede emitir instrucciones de gestión. Para integrar con Plaspy, los aspectos públicos más importantes son el endpoint de conexión, las opciones de transporte y el propósito general de los mensajes que envía el dispositivo.

- Permite que el SP4603 reporte posiciones GPS periódicas, eventos de movimiento e ignición, y condiciones de alarma a un servidor remoto.
- Proporciona un método para que el dispositivo se identifique y así el servicio receptor pueda asociar los reportes con el activo y la cuenta correctos.
- Soporta funciones de gestión remota, como cambios de configuración y actualizaciones de firmware cuando el dispositivo y el fabricante soportan gestión OTA.
- Transporta eventos de entrada y salida de geocerca, alertas por manipulación o jamming, y telemetría básica necesaria para el monitoreo de flotas.
- Permite que la plataforma receptora reconozca o responda cuando aplique, facilitando una gestión bidireccional básica y comprobaciones de estado.

## Detección del protocolo en Plaspy

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador basándose en las conexiones y mensajes entrantes. En la mayoría de los escenarios habituales no es necesario seleccionar manualmente un protocolo en Plaspy si el SP4603 está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse como endpoint alternativo cuando DNS no esté disponible.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del firmware y las preferencias del sitio.
- Cuando un SP4603 reporta al endpoint de Plaspy con los ajustes compartidos, Plaspy intenta identificar el protocolo del dispositivo automáticamente, por lo que la selección manual del protocolo suele ser innecesaria.

## Transporte y contexto de conexión

Comprender el transporte y la configuración del endpoint es clave para lograr una conexión exitosa entre los SP4603 y Plaspy. La serie SP4603 está diseñada para operar sobre redes celulares y puede configurarse para usar UDP o TCP según el firmware y las necesidades del despliegue.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 como endpoint del servidor.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 y debe emplear el transporte que soporte su firmware.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad de configuración en flotas mixtas.
- Las reglas de firewall y NAT en la red deben permitir conexiones salientes desde los dispositivos hacia el puerto 8888 del endpoint de Plaspy.
- Elegir UDP o TCP afecta las características de entrega a nivel de transporte, pero no el comportamiento público de alto nivel descrito aquí.

## Notas de compatibilidad del protocolo

- Revisiones de firmware pueden cambiar la temporización de mensajes, campos disponibles o comandos soportados; consulte las notas de lanzamiento del firmware cuando haga pruebas o resuelva problemas.
- Las revisiones de hardware y las variantes 2G frente a 3G pueden alterar los transportes disponibles o el comportamiento de radio; valide el soporte de red esperado para su región.
- La gestión por aire del fabricante y las actualizaciones FOTA pueden modificar el comportamiento del dispositivo de forma remota y afectar el formato o la frecuencia de los reportes.
- Las herramientas de configuración del dispositivo o las opciones de configuración por SMS que proporcione SkyPatrol pueden influir en si el dispositivo usa UDP o TCP para reportar.
- Valide la compatibilidad frente a la documentación oficial de SkyPatrol y las notas de lanzamiento de la serie SP4603.
- Al desplegar a escala, pruebe dispositivos representativos para asegurar que la combinación de transporte y firmware elegida funcione con Plaspy.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el SP4603 ayuda a garantizar reportes confiables, un manejo adecuado de las alarmas y una gestión fluida de los dispositivos a través de Plaspy. Una comprensión práctica del protocolo reduce la incertidumbre durante la configuración y agiliza la resolución de problemas si los dispositivos no aparecen en la plataforma como se espera.

- Facilita confirmar que los dispositivos apuntan al endpoint correcto de Plaspy d.plaspy.com o 54.85.159.138 y usan el puerto 8888.
- Permite elegir UDP o TCP en la configuración del dispositivo según la confiabilidad y las condiciones de la red.
- Ayuda a verificar que funciones como geocercas, detección de jamming y OTA se estén reportando a Plaspy.
- Acelera el diagnóstico cuando los dispositivos dejan de reportar, enfocando las comprobaciones en transporte, firmware y configuración del endpoint.
- Apoya la planificación operativa para actualizaciones de firmware y despliegues masivos al comprender los posibles impactos del protocolo.

## Por qué usar Plaspy con este protocolo

Integrar la serie SkyPatrol SP4603 con Plaspy ofrece a las organizaciones una vía práctica hacia la visibilidad de activos y el control operativo. El SP4603 dispone de funciones de hardware y firmware útiles para la gestión de flotas, mientras que Plaspy proporciona un endpoint unificado y detección automática de protocolos para simplificar la incorporación y el monitoreo continuo de dispositivos.

Si está evaluando dispositivos SP4603 para flotas, telemática de seguros o aplicaciones de despacho de campo, integrarlos con Plaspy puede reducir la carga de configuración mediante el uso de los ajustes compartidos de Plaspy y la detección automática del protocolo. Para saber más sobre Plaspy y cómo apoya la integración de dispositivos, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y orientación del fabricante, consulte el sitio oficial de SkyPatrol en https://www.skypatrol.com/.
