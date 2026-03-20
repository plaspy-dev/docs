---
slug: /thingsys/ts_v6h/features
id: ts_v6h-features
sidebar_label: Features
title: ThingSys - TS-V6H Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del GPS ThingSys TS-V6H y su integración con Plaspy para rastreo y seguridad vehicular
keywords:
  - ThingSys TS-V6H
  - funciones TS-V6H
  - rastreadores GPS ThingSys
  - compatibilidad TS-V6H Plaspy
  - características GPS TS-V6H
  - dispositivo de rastreo vehicular
  - rastreador para gestión de flotas
  - alertas de manipulación TS-V6H
  - inmovilizador por relé TS-V6H
  - funciones rastreador ThingSys
---

# ThingSys - TS-V6H: Características

Esta página ofrece un panorama público de las funciones del ThingSys TS-V6H y cómo sus capacidades se integran con Plaspy para posicionamiento vehicular, seguimiento en tiempo real y telemática de flotas. Se concentra en los aspectos visibles no sensibles del dispositivo que son relevantes al desplegarlo con Plaspy para monitoreo, alertas y flujos operativos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, el lote de hardware, el método de instalación y la configuración de funciones opcionales por parte del fabricante. Para instrucciones técnicas detalladas y especificaciones actualizadas consulte la documentación oficial de ThingSys y las notas de firmware.

## Resumen de funciones

El TS-V6H es un rastreador vehicular de construcción robusta diseñado para ofrecer actualizaciones continuas de ubicación y telemetría práctica del vehículo. Emplea un receptor GNSS UBLOX de alta sensibilidad y comunica posición y estado mediante datos celulares, con SMS como respaldo, además de contar con entradas y salidas orientadas a seguridad vehicular y control remoto.

- Posicionamiento GPS en tiempo real reportado por GPRS con consulta de ubicación vía SMS como respaldo ante pérdida de datos.
- Módulo GNSS UBLOX de alta sensibilidad con precisión típica adecuada para rastreo vehicular.
- Entradas de telemetría vehicular, incluyendo detección de ignición (ACC) y sensor de vibración para alertas de manipulación.
- Batería de respaldo integrada para mantener el rastreo y registrar eventos de pérdida de alimentación durante cortes de energía principal.
- Control de relé para corte remoto de alimentación o circuito que facilita acciones tipo inmovilizador cuando está autorizado.
- Micrófono externo opcional y soporte SOS para flujos de trabajo de emergencia donde la normativa lo permita.

## Funciones principales del ThingSys - TS-V6H

- Receptor GNSS UBLOX para posicionamiento por satélite fiable y fijaciones consistentes en condiciones habituales de vehículo.
- Reportes por GPRS con fallback por SMS para entregar posición y estado a un servidor de rastreo.
- Entrada de ignición (ACC) para reportar eventos de encendido/apagado y señales sencillas de actividad del conductor.
- Sensor de vibración y detección de pérdida de alimentación para visibilidad de manipulación y antirrobo.
- Batería de respaldo integrada que permite rastreo a corto plazo después de la desconexión de la alimentación principal.
- Control de relé para gestión remota de corte de alimentación o circuito, donde la instalación y la normativa lo permitan.
- Micrófono externo y soporte SOS opcional para audio de emergencia y flujos de alerta, sujeto a regulaciones locales.

## Cómo funcionan estas funciones con Plaspy

Al conectar el TS-V6H a Plaspy, los mensajes de posición y telemetría se transforman en mapas en vivo, alertas e informes históricos que respaldan el monitoreo operativo y los flujos de seguridad. Plaspy ingiere actualizaciones de ubicación y estado y las presenta en paneles y motores de reglas útiles para la supervisión de flotas.

- Las ubicaciones en tiempo real aparecen en los mapas de Plaspy para seguimiento y despacho inmediato.
- Los cambios en el estado de ignición se registran como eventos y pueden utilizarse para generar informes de uso o de turnos.
- Señales de manipulación, como alertas de vibración y notificaciones de pérdida de alimentación, generan eventos que alimentan las reglas de alerta y escalamiento en Plaspy.
- Los eventos de batería de respaldo y los periodos de funcionamiento sin conexión son visibles en el estado y el historial del dispositivo.
- Las funciones de control de relé pueden coordinarse con flujos de trabajo en Plaspy cuando la intervención remota está autorizada y configurada.

## Casos de uso típicos

- Gestión de flotas para autos y camiones que requieren rastreo continuo y registro de actividad basado en la ignición.
- Monitoreo de seguridad y antirrobo utilizando alertas de vibración, detección de pérdida de alimentación y control remoto de circuitos.
- Operaciones de renta y uso compartido de vehículos que necesitan historial de ubicaciones y capacidad de desactivación remota entre arrendamientos.
- Flujos de respuesta a emergencias aprovechando las funciones opcionales de SOS y micrófono externo cuando la ley lo permite.
- Localización y monitoreo discreto de vehículos en flotas mixtas gracias al formato compacto y amplio soporte de voltaje.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden cambiar con actualizaciones de firmware; algunas capacidades pueden añadirse, modificarse o desactivarse por el fabricante.
- Las revisiones de hardware y las variantes regionales pueden afectar bandas soportadas, interfaces y funciones auxiliares.
- Las decisiones de instalación y el cableado determinan qué entradas de telemetría están disponibles, por ejemplo la conexión de ACC o del relé.
- Funciones opcionales como SOS o soporte de micrófono externo pueden no estar presentes en todas las unidades o mercados.
- Verifique siempre las capacidades exactas de una unidad y la versión de firmware contra la documentación de ThingSys.

## Por qué usar Plaspy con estas funciones

Combinar el TS-V6H con Plaspy proporciona una forma directa de convertir mensajes crudos del rastreador en visibilidad operativa. El mapeo, las alertas y los informes de Plaspy le ofrecen una vista centralizada de ubicaciones, eventos de ignición, alertas de manipulación e historial de pérdida de alimentación para que los equipos puedan actuar ante incidentes de seguridad, hacer cumplir políticas de flota y analizar el uso vehicular.

Para más información sobre Plaspy y cómo soporta el despliegue de rastreadores compatibles como el TS-V6H visite https://www.plaspy.com. Para detalles de funciones específicos del dispositivo, notas de firmware y guías de instalación consulte el sitio del fabricante en https://www.thingsys.com/ ya que el comportamiento y las funciones disponibles pueden cambiar con el tiempo.
