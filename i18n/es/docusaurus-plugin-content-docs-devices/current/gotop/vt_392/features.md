---
slug: /gotop/vt_392/features
id: vt_392-features
sidebar_label: Features
title: GOTOP - VT-392 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GOTOP VT-392 y su compatibilidad con Plaspy para seguridad vehicular e identificación de conductor
keywords:
  - GOTOP VT-392 características
  - Rastreador GPS GOTOP VT-392
  - VT-392 identificación de conductor
  - Integración alarma coche GOTOP VT-392
  - Lector RFID para teléfono VT-392
  - GOTOP VT-392 Plaspy
  - seguimiento vehicular GOTOP VT-392
  - capacidades VT-392
  - rastreador GPS identificación de conductor
  - seguridad vehicular VT-392
---

# GOTOP - VT-392 Características

Esta página ofrece un resumen público orientado a las funciones del GOTOP VT-392 y cómo sus capacidades se integran con Plaspy. Se centra en información práctica y no sensible sobre lo que el rastreador puede hacer y cómo esas funciones se reflejan en una plataforma de monitoreo vehicular o de flotas como Plaspy.

La disponibilidad exacta de funciones en una unidad VT-392 puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use este resumen como guía general y consulte la documentación del fabricante para obtener detalles actuales del dispositivo.

## Resumen de funciones

El VT-392 combina rastreo GPS con identificación de conductor e integración de alarma del vehículo para apoyar la seguridad y el monitoreo operativo. Está diseñado para reconocer teléfonos autorizados, reportar la identidad del conductor a un servidor y enviar notificaciones de alarma cuando hay accesos o movimientos no autorizados.

- Reporte de posición GPS para rastreo básico del vehículo y localización.
- Función de lector RFID para teléfono que permite usar un smartphone como una etiqueta reconocida.
- Armado automático cuando un teléfono reconocido abandona el vehículo y desarmado al regresar.
- Notificaciones de alarma y alertas, incluyendo notificaciones en la plataforma y llamadas telefónicas ante un evento de alarma.
- Solución de identificación de conductor que vincula un teléfono autorizado con un perfil de conductor y envía el ID al servidor vía GPRS.
- Restricción de arranque del motor para conductores no reconocidos por el rastreador.

## Funciones principales del GOTOP - VT-392

- Rastreo GPS que proporciona actualizaciones de posición para el monitoreo de la ubicación del vehículo.
- Reconocimiento de smartphones mediante un lector estilo RFID, de modo que un teléfono pueda actuar como etiqueta autorizada.
- Armado y desarmado automático asociado a la presencia o ausencia de un teléfono reconocido.
- Integración de alarma que genera notificaciones en la plataforma y alertas telefónicas al número configurado.
- Solución de identificación de conductor (Driver ID) que asigna un ID a cada conductor autorizado y lo reporta al servidor.
- Transmisión de ID desde el dispositivo a la plataforma utilizando GPRS según lo descrito por el fabricante.
- Capacidad para impedir la activación del motor del vehículo para conductores no autorizados según la implementación del dispositivo.

## Cómo funcionan estas funciones con Plaspy

Cuando un VT-392 está conectado a Plaspy, los eventos de rastreo, identificación y alarma del dispositivo pueden representarse en la plataforma para ayudar a operadores y administradores a mantener visibilidad y responder a incidentes.

- La información de Driver ID enviada por el VT-392 aparece en Plaspy como eventos de identificación de conductor vinculados al registro del vehículo.
- Las actualizaciones de ubicación GPS del rastreador se muestran en mapas y en el historial de ubicaciones recientes dentro de Plaspy.
- Los eventos de alarma del dispositivo generan alertas en la plataforma y registros de eventos para que los equipos puedan revisar y escalar según sea necesario.
- El estado de armado/desarmado automático ligado a teléfonos reconocidos puede registrarse como eventos para verificar accesos autorizados.
- Las llamadas o alertas SMS generadas por el dispositivo se reflejan como eventos de alarma en Plaspy cuando el dispositivo reporta esas condiciones al servidor.
- Plaspy detecta protocolos comunes de rastreadores y acepta el reporte del VT-392 para que los eventos del dispositivo se conviertan en datos accionables en la plataforma.

## Casos de uso típicos

- Operadores de flota que identifican qué conductor autorizado está usando un vehículo y registran la presencia del conductor.
- Propietarios de vehículos que agregan una capa adicional de disuasión contra robos mediante reconocimiento por teléfono y armado automático.
- Programas de alquiler o vehículos compartidos que necesitan restringir el arranque del motor a usuarios autorizados.
- Operadores de seguridad que reciben alertas en la plataforma y llamadas telefónicas ante accesos o movimientos no autorizados.
- Administradores que rastrean asignaciones y presencia de conductores mediante informes de ID enviados al servidor.

## Notas sobre disponibilidad de funciones

- El comportamiento de las funciones depende del firmware del dispositivo y de la revisión de hardware suministrada por el fabricante.
- Algunas funciones de identificación de conductor requieren configuración inicial, incluyendo el emparejamiento de un teléfono reconocido con el rastreador (la descripción del dispositivo menciona una conexión USB para registrar un teléfono).
- La integración de alarmas y la restricción de arranque del motor dependen de la instalación y del cableado del VT-392 en los sistemas del vehículo.
- Variantes regionales o actualizaciones de firmware pueden cambiar el comportamiento de comunicaciones, como la forma en que los IDs se reportan al servidor.
- Plaspy admite la recepción de eventos de rastreadores y detectará automáticamente protocolos comunes de rastreadores cuando el dispositivo esté apuntando a la plataforma.

## Por qué usar Plaspy con estas funciones

Usar el GOTOP VT-392 con Plaspy proporciona a las organizaciones visibilidad centralizada de ubicaciones de vehículos, eventos de identificación de conductores y condiciones de alarma. Plaspy recopila y muestra los reportes del rastreador para que los administradores puedan monitorear accesos autorizados, revisar el historial de alarmas y actuar sobre alertas desde una sola plataforma.

Para obtener más información sobre cómo Plaspy puede integrar los datos del VT-392 en sus flujos de monitoreo e informes, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, detalles de firmware y orientación del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/.
