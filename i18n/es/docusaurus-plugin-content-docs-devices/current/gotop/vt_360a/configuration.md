---
slug: /gotop/vt_360a/configuration
id: vt_360a-configuration
sidebar_label: Configuration
title: GOTOP - VT-360A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP VT-360A y apuntarlo a Plaspy, validando la conectividad
keywords:
  - GOTOP VT-360A configuración
  - configuración tracker GOTOP
  - configuración servidor VT-360A
  - VT-360A configuración para Plaspy
  - integración rastreador GPS Plaspy
  - configuración rastreador vehicular
  - configuración plataforma GPS
  - ajustes servidor dispositivo de rastreo
  - detección de protocolo Plaspy
  - guía GOTOP VT360A
---

# GOTOP - VT-360A Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP VT-360A con Plaspy. Explica los ajustes disponibles públicamente que debe aplicar para que el dispositivo envíe ubicaciones y alertas a la plataforma Plaspy, y resume qué verificar antes de la integración. Use esta guía junto con la documentación del fabricante para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT-360A admite reporte de ubicación por SMS o GPRS y ofrece funciones de eventos como SOS, geocerca y alarmas de movimiento que puede reenviar a Plaspy una vez que el dispositivo esté apuntando al endpoint de la plataforma.

## Resumen de la configuración

Este proceso deja al VT-360A listo para comunicarse con el backend de Plaspy para que el dispositivo aparezca y funcione correctamente en su cuenta. El objetivo principal es apuntar el rastreador al endpoint de Plaspy, elegir el transporte correcto y validar que el equipo envíe datos tras la configuración.

- Configure el VT-360A para que envíe datos al endpoint del servidor Plaspy y así recibir telemetría y alarmas.
- Seleccione UDP o TCP en el rastreador si el firmware requiere elegir el transporte.
- Use el puerto compartido de Plaspy para que el dispositivo sea detectado y enrutable automáticamente.
- Valide la conexión después de guardar los ajustes y, si es necesario, reinicie el equipo.
- Confirme que los mensajes de ubicación y eventos aparezcan en Plaspy para visibilidad operativa.

## Ajustes del servidor Plaspy

Ingrese los siguientes datos públicos del servidor en la herramienta de configuración del VT-360A o mediante comandos SMS según corresponda:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según el menú del dispositivo o el comando
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe configurar el puerto 8888 en el VT-360A para coincidir con el comportamiento de la plataforma.

## Requisitos típicos antes de la configuración

- Acceso al método de configuración del fabricante del VT-360A, como el software oficial, la herramienta de configuración o el conjunto de comandos SMS.
- Un rastreador instalado y con alimentación, con buena recepción GPS para la validación inicial.
- Una SIM activa con datos o capacidad de SMS si va a usar reporte GPRS o SMS.
- Una computadora o dispositivo móvil para ejecutar el software del proveedor o enviar comandos SMS.
- El IMEI o identificador del dispositivo disponible para registrar y validar la unidad en Plaspy.
- Conocimiento de la versión de firmware del dispositivo y de posibles diferencias en los menús del proveedor.

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el VT-360A envía mensajes de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos. Plaspy recibe los datos entrantes y identifica automáticamente el protocolo del rastreador para que la información del dispositivo aparezca en la plataforma sin necesidad de cambiar puertos por unidad.

- El dispositivo envía posiciones y alarmas a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP en el rastreador si el firmware lo exige; Plaspy acepta ambos.
- Plaspy detecta el protocolo y asigna los mensajes entrantes al registro correcto del dispositivo.
- Una vez conectado, eventos como SOS, alertas de geocerca e informes de movimiento son visibles en Plaspy para monitoreo.
- Reconfigure o reinicie el rastreador si no se reciben mensajes después de guardar la configuración.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del GOTOP VT-360A o al software del proveedor, o prepare la secuencia de comandos SMS proporcionada por el fabricante.
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP si el equipo solicita selección de transporte; Plaspy soporta ambos.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS equivalentes.
6. Reinicie el VT-360A si el firmware necesita reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy verificando la llegada de telemetría y mensajes de eventos en la plataforma.

## Ejemplos de comandos de configuración

El fabricante del VT-360A puede facilitar comandos SMS o de software para configurar el servidor y los parámetros APN. El conjunto exacto de comandos y la sintaxis varían según el firmware y la herramienta del proveedor, así que consulte la documentación oficial de GOTOP o a su proveedor para las cadenas precisas. Debido a que los comandos específicos dependen de la versión y la distribución, esta guía no inventa comandos. Use el manual del proveedor para localizar los comandos que establecen:

- Dominio del servidor o IP del servidor
- Número de puerto (8888)
- Tipo de transporte UDP o TCP
- APN y parámetros relacionados con la SIM cuando use GPRS

Si dispone de una lista de comandos públicos del fabricante, aplíquelos en el orden que indique el manual y mantenga los marcadores como {{apn}}, {{apnu}} o {{apnp}} cuando estén presentes.

## Notas de configuración

- Las diferencias de firmware y de revisiones de hardware pueden cambiar la disposición de los menús y la sintaxis de los comandos; siempre verifique la versión de firmware antes de proceder.
- Algunos instaladores prefieren la configuración por software y otros usan comandos SMS; elija el método que coincida con su despliegue y la documentación del VT-360A.
- TCP vs UDP: Plaspy soporta ambos en el puerto 8888; seleccione el que mejor se ajuste a la fiabilidad de su red y a la recomendación del proveedor.
- Plaspy usa el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando el dispositivo envíe datos al endpoint configurado.
- Mantenga un registro del IMEI y de los ajustes del servidor después de la configuración para agilizar la resolución de problemas y las consultas de soporte.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-360A con Plaspy ofrece un camino sencillo para integrar posición de vehículos, alarmas y mensajes de estado en una vista unificada de su flota. Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y confirmar la selección de transporte brinda a los operadores visibilidad oportuna sobre los movimientos y eventos del vehículo, como SOS, alertas de geocerca y alarmas de movimiento.

Para obtener más información sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Los pasos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar la guía de configuración más reciente en el sitio oficial de GOTOP https://www.gotop.cc/.
