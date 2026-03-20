---
slug: /reachfar/rf_v36/configuration
id: rf_v36-configuration
sidebar_label: Configuration
title: Reachfar - RF-V36 Configuration
sidebar_class_name: menu_item_tracker
description: Información pública para configurar el rastreador wearable Reachfar RF-V36 y enviarlo a Plaspy con ajustes compartidos del servidor
keywords:
  - Configuración Reachfar RF-V36
  - Instalación Reachfar RF-V36
  - Configuración RF-V36 Plaspy
  - configuración rastreador GPS wearable
  - configuración rastreador GPS para cuidado de ancianos
  - configuración rastreador Plaspy
  - ajustes de servidor RF-V36
  - configuración reloj GPS
  - configuración seguimiento RF-V36
  - integración wearable Plaspy
---

# Reachfar - RF-V36 Configuration

Esta página ofrece el contexto público de configuración para usar el rastreador GPS wearable Reachfar RF-V36 con la plataforma Plaspy. Explica los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, los pasos prácticos que suelen seguir los instaladores y qué verificar antes de integrar los equipos en campo para seguimiento en tiempo real, alertas y visibilidad de telemetría.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; además utiliza el mismo puerto para todos los dispositivos soportados. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El RF-V36 es un rastreador tipo reloj de pulsera con GPS, posicionamiento asistido por LBS e interior por Wi‑Fi, sensor G, telemetría de ritmo cardíaco y presión arterial, SOS y audio bidireccional; confirme las especificaciones del equipo y las notas de firmware del fabricante al preparar un dispositivo para la integración con la plataforma.

## Resumen de configuración

Este proceso prepara el RF-V36 para comunicarse de forma fiable con Plaspy y garantiza que el rastreador aparezca en el panel y las apps móviles de Plaspy con la telemetría y los eventos esperados. El objetivo es aplicar el endpoint y el puerto de Plaspy, seleccionar el transporte adecuado y validar que se reciben posición y telemetría de estado.

- Apunte el dispositivo al servidor y puerto de Plaspy usados por todos los dispositivos compatibles.
- Seleccione el transporte UDP o TCP en el dispositivo si la herramienta de configuración lo solicita.
- Guarde y aplique la configuración del fabricante para que el RF-V36 comience a reportar.
- Verifique que las actualizaciones de ubicación, alertas SOS y la telemetría de salud lleguen a Plaspy.
- Confirme que el comportamiento de geocercas y recordatorios sea visible en la plataforma Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Plaspy usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un equipo RF-V36 con batería suficiente para la configuración inicial y las pruebas.
- Acceso al método oficial de configuración Reachfar o al software correspondiente, como la app de compañero, herramienta web o comandos SMS proporcionados por el fabricante.
- Conectividad celular activa y una SIM con datos y SMS si el dispositivo requiere red celular para telemetría y comandos remotos.
- Una cuenta de Plaspy o un flujo de aprovisionamiento listo para asociar el dispositivo una vez que comience a reportar.
- Firmware actualizado en el RF-V36 o confirmación del proveedor sobre pasos específicos según firmware.
- Identificadores básicos del equipo, como IMEI o número de serie, para el registro y la validación en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el RF-V36 envía datos de ubicación, telemetría y eventos al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible para cuidadores y equipos de monitoreo en tiempo real. Plaspy recibe el flujo del dispositivo y asocia automáticamente el protocolo del rastreador para que los reportes aparezcan correctamente en la plataforma.

- Actualizaciones periódicas de ubicación (GPS en exteriores y LBS asistido o Wi‑Fi en interiores) se envían a d.plaspy.com en el puerto 8888.
- La telemetría de salud, como ritmo cardíaco y presión arterial, se reporta junto con la ubicación a Plaspy para monitoreo remoto.
- Eventos SOS y alertas desencadenan reportes inmediatos al endpoint de Plaspy para los flujos de notificación.
- Los eventos de movimiento del sensor G se transmiten a Plaspy y se usan para reducir saltos falsos de ubicación y ofrecer un rastreo más fiable.
- Los eventos de geocerca y recordatorios se reportan para que la plataforma genere alarmas y notificaciones a los cuidadores.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración Reachfar proporcionado por el proveedor (app de compañero, panel web o configuración por SMS).
2. Ubique los ajustes de servidor o plataforma en la herramienta del proveedor e ingrese d.plaspy.com o, si la herramienta lo requiere, use la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 para que coincida con la configuración del servidor Plaspy.
4. Seleccione el transporte UDP o TCP si el rastreador solicita elegir un transporte; Plaspy acepta ambos.
5. Guarde o aplique la configuración en la herramienta Reachfar y confirme que los cambios se aceptaron.
6. Reinicie el RF-V36 si las instrucciones del proveedor indican un reboot para que los ajustes surtan efecto.
7. Valide que el dispositivo reporte a Plaspy observando las ubicaciones y la telemetría entrante en su cuenta Plaspy o confirmando la comunicación mediante diagnósticos del equipo.

## Ejemplos de comandos de configuración

El fabricante del RF-V36 ofrece múltiples métodos de configuración y los comandos o pasos exactos dependen de la herramienta del proveedor y del firmware. Debido a la variedad de herramientas del fabricante, no se listan aquí cadenas exactas de SMS o comandos. Al usar las herramientas Reachfar:

- Utilice la app oficial de compañero o el panel web de configuración para establecer dominio o IP y puerto del servidor.
- Si el equipo admite configuración por SMS, consulte la lista de comandos SMS Reachfar en el manual del dispositivo para la sintaxis exacta para establecer servidor y transporte.
- Recuerde usar d.plaspy.com o 54.85.159.138 y el puerto 8888 al especificar el endpoint de Plaspy.

Si necesita ejemplos estilo SMS o comandos de configuración en bruto, consulte el manual del dispositivo Reachfar o el PDF de configuración del proveedor para el RF-V36. Los comandos del fabricante suelen incluir marcadores para APN o parámetros de cuenta como [apn], que debe reemplazar con el APN de su operador cuando aparezcan.

## Notas de configuración

- Las diferencias de firmware pueden modificar los campos de configuración disponibles o el lugar exacto donde ingresar el dominio del servidor frente a la IP; confirme siempre el método correcto para su revisión de firmware.
- Elegir UDP o TCP puede afectar las características de entrega; Plaspy soporta ambos y detectará el protocolo automáticamente, pero revise las notas del proveedor sobre comportamientos específicos según el transporte.
- Plaspy utiliza el mismo puerto en los dispositivos soportados, lo que simplifica despliegues con múltiples equipos y el enrutamiento en servidor.
- Si usa configuración por SMS, mantenga los mensajes concisos y verifique la aplicación exitosa comprobando los reportes del dispositivo en Plaspy.
- El RF-V36 figura como fuera de producción en la página pública del producto; verifique soporte y disponibilidad de firmware con el fabricante antes de desplegar unidades nuevas.

## Por qué usar Plaspy con esta configuración

Usar el RF-V36 con Plaspy brinda a cuidadores y equipos de monitoreo una visibilidad unificada de ubicación, telemetría de salud y alertas críticas desde un solo wearable. La plataforma Plaspy ingiere el flujo de datos del RF-V36 y ofrece seguimiento en tiempo real, notificaciones configurables para SOS y geocercas, y reportes históricos de salud y ubicación.

Para conocer más sobre Plaspy y cómo puede integrarse con rastreadores compatibles como el RF-V36, visite https://www.plaspy.com. Para información más reciente sobre configuración específica del dispositivo, comportamiento de firmware y orientación del fabricante para el RF-V36, confirme la información actual en el sitio oficial de Reachfar https://www.reachfargps.com/ ya que los métodos y el firmware pueden cambiar con el tiempo.
