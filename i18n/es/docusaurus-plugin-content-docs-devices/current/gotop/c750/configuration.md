---
slug: /gotop/c750/configuration
id: c750-configuration
sidebar_label: Configuration
title: GOTOP - C750 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP C750 para conectarlo a Plaspy y habilitar seguimiento en tiempo real por OBD
keywords:
  - configuración GOTOP C750
  - instalación GOTOP C750
  - configurar servidor GOTOP C750
  - GOTOP C750 Plaspy
  - configuración rastreador OBD GOTOP
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración rastreador de flota
  - integración plataforma GPS
---

# GOTOP - C750 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador OBD GOTOP C750 con Plaspy. Incluye los ajustes de servidor que Plaspy requiere, requisitos habituales y el flujo de trabajo recomendado para preparar un C750 y que reporte correctamente en la plataforma. El contenido está dirigido a técnicos y responsables de flota que necesiten pasos claros y no propietarios para conectar el dispositivo a Plaspy y habilitar seguimiento y reportes de eventos en tiempo real.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración del fabricante para el C750 pueden variar según la versión de firmware, lote de hardware, tipo de instalación y la herramienta del proveedor; use las indicaciones siguientes junto con la documentación del equipo y el método de configuración que disponga.

## Resumen de la configuración

Preparar el C750 para Plaspy se centra en habilitar un informe GPRS confiable (o SMS cuando se use) y verificar que el equipo pueda alcanzar el endpoint de Plaspy. El objetivo es que el rastreador sea visible en Plaspy, validar el reporte de eventos y asegurar que alertas como exceso de velocidad o corte de alimentación lleguen a la plataforma.

- Configurar el dispositivo para enviar datos al endpoint de Plaspy para que posiciones y eventos aparezcan en la plataforma.
- Validar la conectividad móvil y los ajustes APN para que el C750 pueda usar GSM GPRS y transmitir telemetría.
- Elegir el transporte (UDP o TCP) si el dispositivo requiere selección para sesiones GPRS.
- Aplicar y guardar la configuración del fabricante, reiniciar el equipo si es necesario y confirmar que reporta a Plaspy.
- Verificar que las alertas (exceso de velocidad, geocerca, movimiento, corte de alimentación) se registren en Plaspy una vez el dispositivo esté en línea.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el GOTOP C750 para reporte por GPRS. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados: UDP o TCP (el dispositivo puede configurarse usando UDP o TCP en el puerto 8888)
- Detección automática de protocolo en Plaspy para que la plataforma reconozca el protocolo entrante del rastreador

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD-II del vehículo para conectar el C750 y confirmar alimentación.
- Una tarjeta SIM activa con datos (GPRS) o capacidad SMS provisionada para el dispositivo.
- Credenciales APN del proveedor si son necesarias para la conectividad GPRS (APN, usuario APN, contraseña APN).
- Acceso al método oficial de configuración GOTOP o al software proporcionado por el proveedor para cambiar servidor y transporte.
- Una cuenta en Plaspy y conocimiento básico de cómo verificar el reporte del dispositivo en el panel de Plaspy.
- Capacidad para recibir SMS o monitorear registros de sesión GPRS para resolución de problemas.

## Cómo se conecta este rastreador a Plaspy

El GOTOP C750 envía datos de posición y eventos al endpoint y puerto compartido de Plaspy para que la plataforma ingiera la telemetría y genere alertas. El funcionamiento típico usa GPRS para reporte continuo y SMS como verificación bajo demanda o como respaldo cuando está configurado.

- El dispositivo envía paquetes de posición y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los paquetes pueden transmitirse por UDP o TCP dependiendo de la configuración del C750; Plaspy soporta ambos transportes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos, por lo que dispositivos con diferentes protocolos pueden convivir en el mismo puerto.
- La telemetría y eventos como exceso de velocidad, rupturas de geocerca, movimiento, vibración y cortes de alimentación son entregados a Plaspy para su procesamiento.
- La telemetría procedente del OBD-II del vehículo puede correlacionarse con GPS y registros de eventos dentro de Plaspy.

## Flujo de trabajo recomendado de configuración

1. Acceda al método o software oficial de configuración GOTOP proporcionado por el proveedor (comandos SMS, herramienta web o utilidad de configuración para escritorio/móvil).
2. Asegúrese de que el equipo tenga una SIM funcional con datos y configure el APN si el operador lo requiere.
3. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor de la herramienta de configuración.
4. Configure el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
5. Seleccione UDP o TCP si el equipo le solicita elegir el protocolo de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante indican que es necesario.
7. Valide que el C750 reporte a Plaspy comprobando la actividad del dispositivo en el panel de Plaspy y confirmando que se reciben actualizaciones de ubicación y eventos.

## Ejemplos de comandos de configuración

No se proporcionaron comandos modelConfiguration públicos para el C750 en esta referencia. Los comandos exactos o las cadenas SMS varían según el firmware del fabricante y la herramienta del proveedor utilizada. En la práctica usará el método de configuración GOTOP para:

- Establecer el servidor a d.plaspy.com o 54.85.159.138
- Ajustar el puerto a 8888
- Seleccionar UDP o TCP si se requiere
- Configurar los datos de APN cuando se use GPRS

Consulte la guía de configuración GOTOP o la lista de comandos SMS suministrada por el proveedor para la sintaxis exacta y comandos de verificación.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y los ajustes disponibles; confirme el procedimiento correcto para la versión de su dispositivo con la documentación de GOTOP.
- Si debe elegir entre UDP y TCP, pruebe ambos transportes; UDP se usa comúnmente para paquetes de rastreo ligeros, mientras que TCP puede emplearse cuando se requiere entrega fiable y está soportado.
- Las credenciales APN suelen ser necesarias para la conectividad GPRS. Tenga a mano APN, usuario APN y contraseña APN al aprovisionar dispositivos.
- La configuración por SMS y la verificación vía SMS pueden estar disponibles para la puesta en marcha o la resolución de problemas; revise la documentación del proveedor para los formatos de comandos SMS.
- Plaspy usa el mismo puerto en todos los dispositivos y detecta automáticamente el protocolo, lo que simplifica la configuración del servidor pero no excluye la necesidad de configurar correctamente el equipo.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP C750 con Plaspy ofrece una forma ágil de añadir rastreo OBD plug-and-play a flotas y vehículos particulares. La conectividad GSM/GPRS integrada del C750 y su batería de respaldo ayudan a mantener el reporte durante interrupciones de energía, mientras que Plaspy ingiere la ubicación y los eventos para habilitar monitoreo, alertas y visibilidad en mapas. Esta combinación es adecuada para gestores de flota que requieren instalación rápida, telemetría sencilla y reenvío fiable de eventos a una plataforma centralizada.

Learn more about Plaspy at https://www.plaspy.com and verify device specific configuration details and the latest manufacturer documentation at https://www.gotop.cc/ since firmware behavior and setup methods can change over time.
