---
slug: /gotop/te_207s/configuration
id: te-207s-configuration
sidebar_label: Configuration
title: GOTOP - TE-207S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP TE-207S para seguimiento en tiempo real y ajustes de servidor en Plaspy
keywords:
  - configuración GOTOP TE-207S
  - instalación GOTOP TE-207S
  - configuración servidor GOTOP TE-207S
  - GOTOP TE-207S Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS personal
  - configuración GPRS TE-207S
  - configuración rastreador GPS impermeable
  - integración rastreador GPS Plaspy
  - configuración plataforma de rastreo
---

# GOTOP - Configuración del TE-207S

Esta página describe el flujo público de configuración para usar el rastreador GOTOP TE-207S con Plaspy. Explica los ajustes compartidos del servidor Plaspy, los pasos prácticos para apuntar un TE-207S a Plaspy y el procedimiento general para verificar que el dispositivo reporte correctamente. El TE-207S es un rastreador personal compacto e impermeable que admite seguimiento en tiempo real vía GPRS o SMS e incluye SOS, detección de caídas y funciones de voz que se integran con la telemetría y las alertas de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que esta guía sirve como flujo operativo público para integrar dispositivos TE-207S con Plaspy, mientras que debe consultarse la documentación de GOTOP para menús o comandos SMS específicos del dispositivo.

## Resumen de configuración

Configurar el TE-207S para Plaspy consiste principalmente en dirigir el dispositivo para que envíe reportes GPRS o SMS al punto de ingestión de Plaspy y validar que la telemetría y los eventos aparezcan en la plataforma. Así se garantiza la disponibilidad de la ubicación en vivo, eventos SOS y alarmas, además del historial de telemetría en su cuenta Plaspy.

- Establezca los valores de servidor/reportes del dispositivo al endpoint compartido de Plaspy para que el rastreador reenvíe datos de posición y eventos a Plaspy.
- Configure el APN y los detalles de la SIM para que el TE-207S pueda conectarse vía GPRS y reportar en tiempo real.
- Seleccione UDP o TCP como transporte si el dispositivo solicita una elección y configure el puerto de Plaspy.
- Guarde y aplique la configuración usando la herramienta oficial de GOTOP, comandos SMS o la interfaz de configuración.
- Reinicie o corte la alimentación del rastreador si es necesario para activar los nuevos ajustes y permitir que el equipo obtenga fijaciones GNSS y comience a reportar.
- Verifique la visibilidad del dispositivo y el reporte de eventos en Plaspy después de configurar.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el TE-207S:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects

Todos los dispositivos en Plaspy usan el mismo puerto y el sistema de ingestión de Plaspy determinará automáticamente el protocolo correcto cuando el dispositivo envíe datos al endpoint del servidor.

## Requisitos habituales antes de comenzar

- Un TE-207S cargado con una Micro SIM activa insertada y suficiente cuota de datos para reportes GPRS.
- APN y ajustes de la SIM correctos configurados en el dispositivo para que alcance la red móvil y abra conexiones de datos.
- Acceso al método oficial de configuración de GOTOP, como software del proveedor, interfaz de comandos SMS o el manual del dispositivo para el modelo TE-207S.
- Un lugar con visibilidad GNSS adecuada para que el dispositivo consiga fijaciones de posición durante la validación.
- Un equipo o dispositivo móvil para acceder a Plaspy y confirmar que el rastreador está reportando tras la configuración.
- Conocimiento de si el dispositivo usará GPRS o SMS en su despliegue para elegir el transporte y los ajustes de APN correctos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TE-207S reenvía sus actualizaciones de ubicación y notificaciones de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma muestre la ubicación en vivo, active alertas y almacene la telemetría histórica.

- El rastreador envía paquetes de posición y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe los paquetes y detecta automáticamente el protocolo del dispositivo para parsear los datos de ubicación y alarma.
- Eventos como SOS, geovalla, detección de caídas, exceso de velocidad y batería baja se reenvían a Plaspy para la gestión de alertas y flujos de trabajo.
- Plaspy muestra el dispositivo en mapas, conserva la telemetría en el historial y expone los eventos para notificaciones o integraciones.
- El TE-207S puede usar GPRS para actualizaciones continuas en tiempo real o SMS como método de respaldo según la configuración y la disponibilidad de red.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de GOTOP para el TE-207S (comandos SMS, herramienta del proveedor o menú del dispositivo) según la documentación del fabricante.
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Configure el puerto en 8888 exactamente, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP como transporte si la configuración del TE-207S requiere elegir un protocolo de transporte.
5. Configure el APN y los parámetros de la SIM para que el TE-207S pueda establecer una conexión de datos GPRS.
6. Aplique o guarde la configuración y reinicie o corte la alimentación del rastreador si el dispositivo necesita un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de posición en vivo y los registros de eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El TE-207S puede configurarse usando utilidades proporcionadas por GOTOP o comandos SMS según la versión de firmware y las herramientas del proveedor. La sintaxis exacta varía según la versión de firmware y el método de configuración elegido, por lo que debe consultarse la documentación de GOTOP para las cadenas SMS o las pantallas de la utilidad. En general, la acción de configuración incluirá establecer el dominio del servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888, además de elegir UDP o TCP cuando sea necesario.

Si recibe una lista de comandos SMS del fabricante GOTOP, comúnmente encontrará comandos para establecer IP/dominio del servidor, configurar el puerto, definir valores de APN y solicitar guardar la configuración o reiniciar. Use siempre la referencia oficial de comandos de GOTOP para las cadenas exactas requeridas por el firmware de su TE-207S.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y la ubicación de los menús; verifique comandos y opciones con el manual del TE-207S correspondiente a su revisión de dispositivo.
- Elija UDP o TCP según sus necesidades de despliegue; Plaspy aceptará cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Asegúrese de que APN, usuario y contraseña estén configurados correctamente para la SIM en uso; marcadores de posición como [apn], [apnu] o [apnp] suelen aparecer en plantillas del fabricante para indicar dónde colocar los valores del APN de su operador.
- Si usa configuración vía SMS, confirme que la SIM puede enviar SMS y que los comandos SMS están permitidos por su política de despliegue.
- Pruebe los eventos SOS y las alarmas después de la configuración para confirmar que se reenvían y son visibles en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TE-207S con Plaspy brinda visibilidad centralizada de la ubicación en vivo, alertas de eventos y telemetría histórica en una sola plataforma, lo cual es útil para equipos que rastrean personal, activos protegidos o trabajadores remotos en entornos húmedos o exigentes. La detección automática de protocolos de Plaspy y su modelo de puerto compartido simplifican la integración, permitiéndole apuntar múltiples dispositivos al mismo endpoint de ingestión y confiar en Plaspy para interpretar los datos entrantes.

To learn more about Plaspy and how it can manage TE-207S devices at scale visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer configuration guidance verify current information on the GOTOP website https://www.gotop.cc/ since setup methods and firmware behavior can change over time.
