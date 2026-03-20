---
slug: /gotop/l08p/configuration
id: l08p-configuration
sidebar_label: Configuration
title: GOTOP - L08P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP L08P con ajustes de servidor Plaspy, flujo de instalación y notas prácticas de integración
keywords:
  - configuración GOTOP L08P
  - instalación GOTOP L08P
  - configuración de servidor GOTOP L08P
  - configuración de dispositivos Plaspy
  - configuración rastreador GPS Plaspy
  - configuración reloj inteligente GPS
  - integración L08P Plaspy
  - configuración rastreador GPS vestible
  - guía de configuración de dispositivos
  - configuración plataforma de seguimiento
---

# GOTOP - L08P: Configuración

Esta página documenta el contexto público de configuración para usar el reloj rastreador GOTOP L08P con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para que el dispositivo informe posición y telemetría a Plaspy. Utilice esta guía junto con las referencias del fabricante al aplicar ajustes en dispositivos en campo.

Plaspy comparte ajustes de servidor entre los dispositivos compatibles y detecta automáticamente el protocolo correcto cuando un equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El L08P admite 4G/3G/2G celular (eSIM y nano‑SIM), WiFi de 2.4 GHz, GNSS multiconstelación, BLE y actualizaciones OTA, lo que ofrece varias opciones de conectividad para apuntar el dispositivo hacia Plaspy.

## Resumen de la configuración

Este proceso prepara el L08P para comunicarse de forma fiable con Plaspy, de modo que la ubicación, la telemetría de salud y los eventos de emergencia sean visibles en la plataforma. El objetivo es establecer el endpoint del servidor, validar la configuración de transporte y asegurar la conectividad para que Plaspy reconozca automáticamente el protocolo del equipo.

- Configure el rastreador para que informe al endpoint compartido de Plaspy y al puerto correspondiente.
- Seleccione y valide el transporte (UDP o TCP) y guarde la configuración del dispositivo.
- Asegúrese de la conectividad celular o WiFi y de que el plan de datos de la SIM o eSIM esté activo si aplica.
- Verifique que el dispositivo aparezca en Plaspy y que se reciban actualizaciones de posición y telemetría.
- Use las herramientas del fabricante o la interfaz web/app del dispositivo y consulte la documentación oficial de GOTOP cuando sea necesario.

## Ajustes del servidor Plaspy

Al configurar el L08P para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y el mismo puerto se usa para todos los dispositivos compatibles

Estos valores son los detalles públicos del endpoint de Plaspy para el reporte de dispositivos y deben ingresarse en el equipo o en la herramienta de configuración del fabricante.

## Requisitos típicos antes de la configuración

- Un L08P con batería suficiente y acceso físico al reloj para realizar la configuración.
- Un plan de datos celular activo en la nano‑SIM o eSIM si se usará reporte celular, o acceso a una red WiFi conocida para reporte por WiFi.
- Acceso al método de configuración del fabricante, como la app móvil de GOTOP, el portal web o la herramienta de aprovisionamiento.
- Acceso básico a una cuenta de Plaspy o al equipo responsable del onboarding para poder verificar que el dispositivo aparece en la plataforma.
- Firmware actualizado cuando sea posible; tenga en cuenta que algunas opciones pueden variar entre versiones de firmware.

## Cómo se conecta este rastreador a Plaspy

El L08P envía posiciones GNSS, telemetría de salud y alertas de eventos al endpoint del servidor Plaspy para que cuidadores y equipos de monitoreo puedan ver el estado en tiempo real y el historial. Configure el dispositivo para que apunte a Plaspy y valide la conectividad para que la plataforma procese y presente los datos entrantes.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según la interfaz de configuración del dispositivo; Plaspy admite ambos.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llegan los datos al puerto compartido y enruta la telemetría a la cuenta correcta.
- Las actualizaciones de ubicación, alarmas SOS y otra telemetría se reenvían a Plaspy para el manejo de eventos y alertas.
- La integración exitosa permite historial de ubicaciones, entrega de alarmas y monitoreo remoto del dispositivo a través de Plaspy.

## Flujo de trabajo de configuración común

Siga estos pasos prácticos y públicos al preparar un L08P para Plaspy:

1. Acceda al método oficial de configuración del fabricante o al software proporcionado por GOTOP (app móvil, portal web o herramienta de aprovisionamiento).
2. En los ajustes de servidor o reporte del dispositivo, ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto de reporte en 8888 para coincidir con el puerto compartido de Plaspy.
4. Elija UDP o TCP si la interfaz del dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo o en la herramienta del fabricante.
6. Reinicie el equipo si el fabricante lo recomienda o requiere para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando las primeras actualizaciones de posición y telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

La configuración del modelo L08P puede realizarse mediante las herramientas de aprovisionamiento de GOTOP o la aplicación móvil. Las cadenas de comando exactas y su formato varían según el firmware y la interfaz de configuración del fabricante, por lo que no existen comandos públicos universales que incluir aquí. Al usar una herramienta del fabricante, ingrese el dominio del servidor Plaspy d.plaspy.com (o 54.85.159.138) y el puerto 8888, seleccione UDP o TCP según se requiera, guarde los ajustes y luego confirme la conectividad.

Si dispone de comandos SMS o de consola proporcionados por GOTOP, aplíquelos en el orden que indique GOTOP y sustituya los marcadores de posición según lo documentado por el proveedor. Conserve siempre marcadores como {{apn}} exactamente como aparecen en las instrucciones del proveedor y reemplácelos por los valores APN de su red cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden alterar los nombres exactos de los menús y los pasos en la app de configuración de GOTOP o en la herramienta de aprovisionamiento; revise las notas de la versión del firmware.
- Elegir UDP o TCP depende de la interfaz del dispositivo y del entorno de red; Plaspy admite ambos transportes en el mismo puerto.
- Para despliegues masivos, estandarice ajustes y firmware para reducir la variación entre unidades y simplificar el onboarding a Plaspy.
- Use la funcionalidad de actualizaciones OTA cuando esté disponible para mantener los equipos en firmware soportado y consulte la documentación del fabricante para flujos OTA específicos.
- Verifique siempre la conectividad después de la configuración inicial comprobando que el dispositivo sea visible en Plaspy y que la telemetría y los datos de ubicación se actualicen.

## Por qué usar Plaspy con esta configuración

Conectar el GOTOP L08P a Plaspy permite visibilidad continua de la ubicación, telemetría de salud y eventos de emergencia en una sola plataforma de monitoreo. Para organizaciones que gestionan cuidado de personas, seguridad de trabajadores en solitario o monitoreo remoto de salud, el emparejamiento ofrece rastreo en tiempo real, enrutamiento de alarmas y reproducción histórica que respaldan decisiones operativas y respuestas rápidas.

Para conocer más sobre Plaspy y cómo gestiona el onboarding de dispositivos, integraciones y monitoreo, visite https://www.plaspy.com. Para los métodos de configuración más recientes por dispositivo, comportamiento de firmware y detalles del fabricante para el GOTOP L08P, verifique la información actual en el sitio oficial de GOTOP https://www.gotop.cc/.
