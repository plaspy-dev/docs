---
slug: /autofon/gl/configuration
id: gl-configuration
sidebar_label: Configuration
title: AutoFon - GL-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon GL-Маяк con ajustes de servidor Plaspy y pasos prácticos para GPRS y SMS
keywords:
  - Configuración AutoFon GL-Маяк
  - Instalación AutoFon GL-Маяк
  - Configuración servidor AutoFon GL-Маяк
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración GPRS GL-Маяк
  - Reportes SMS GL-Маяк
  - Configuración rastreador GPS GLONASS
  - Guía instalación seguimiento de activos
  - Configuración rastreador encubierto
---

# Configuración del AutoFon - GL-Маяк

Esta página describe el contexto público de configuración para utilizar el AutoFon GL-Маяк (GL-Beacon) con Plaspy. Resume los ajustes compartidos del servidor Plaspy y explica los pasos prácticos que normalmente seguirá para direccionar el dispositivo a Plaspy, habilitar el rastreo en tiempo real, el reporte de alarmas y la entrega de telemetría por GPRS y SMS cuando esté disponible.

Plaspy utiliza un único endpoint y puerto compartido para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor. Siempre consulte la documentación de AutoFon para detalles específicos del modelo y notas de seguridad.

## Resumen de configuración

En esta sección se explican los objetivos prácticos para dejar un AutoFon GL-Маяк listo para funcionar con Plaspy. La meta es preparar el rastreador para comunicarse de forma fiable con los servidores de Plaspy, validar la conectividad y permitir la visualización de ubicación y alarmas dentro de la plataforma.

- Dirigir el GL-Маяк al servidor Plaspy ingresando el dominio o IP de Plaspy y el puerto compartido.
- Seleccionar la opción de transporte que requiera el dispositivo y guardar los ajustes de red.
- Asegurarse de que el dispositivo tenga una SIM válida y datos móviles activos si usa GPRS, y confirmar que SMS esté disponible como respaldo de alertas.
- Validar que el equipo reporte telemetría, eventos de alarma y señales de vida a Plaspy después de la configuración.
- Use las herramientas del fabricante o comandos SMS para ajustar parámetros según sea necesario y preserve las configuraciones de ahorro de batería para despliegues prolongados.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888 depending on device requirement
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos previos

- Acceso al método oficial de configuración de AutoFon, como el software del fabricante, comandos SMS o la utilidad de configuración.
- Una tarjeta SIM válida con datos habilitados para reportes por GPRS y capacidad de SMS si se usará como canal de respaldo.
- Conocimiento del identificador del equipo, por ejemplo el IMEI, para registrar y validar el rastreador en Plaspy.
- Batería suficiente o alimentación externa para completar la configuración y, si fuese necesario, permitir un reinicio.
- Cobertura móvil estable en el sitio de instalación para validar las subidas GPRS hacia Plaspy.

## Cómo se conecta este rastreador a Plaspy

El GL-Маяк envía datos de ubicación y eventos a Plaspy por GPRS y puede utilizar SMS para alertas críticas cuando está configurado. El dispositivo almacena paquetes durante pérdidas de conectividad y los reenvía cuando la red vuelve, lo que garantiza continuidad en la telemetría y el procesamiento de eventos por parte de Plaspy.

- El dispositivo se configura para reportar al endpoint y puerto compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según lo requiera el equipo; Plaspy acepta ambos en el mismo puerto.
- Las actualizaciones de posición, eventos de alarma (SOS, impactos, movimiento) y señales de vida se reenvían a Plaspy para monitoreo en tiempo real.
- La subida de paquetes almacenados preserva la telemetría histórica hasta que Plaspy reciba los datos.
- Las alertas por SMS pueden usarse como canal de respaldo para notificaciones urgentes cuando no hay GPRS disponible.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración recomendado por AutoFon para el GL-Маяк.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de red del dispositivo.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los equipos.
4. Si el dispositivo solicita seleccionar un transporte, elija UDP o TCP según la preferencia del instalador o la indicación del firmware.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o mediante comando SMS si está soportado.
6. Reinicie el equipo si el método de configuración o el firmware requiere un reinicio para aplicar los nuevos ajustes.
7. Verifique que el dispositivo reporte a Plaspy confirmando que el rastreador aparece en la plataforma y envía actualizaciones de posición y señales de vida.

## Ejemplos de comandos de configuración

El AutoFon GL-Маяк puede configurarse mediante el software del fabricante, herramientas web o comandos SMS según el firmware y la preferencia del instalador. La sintaxis exacta de los comandos y los parámetros disponibles varían según la versión de firmware de AutoFon y la utilidad oficial de configuración. Consulte la documentación de AutoFon para los formatos precisos de los comandos SMS o las plantillas de archivos de configuración requeridas por su firmware.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden alterar los ajustes disponibles y el flujo exacto de configuración; confirme la versión de firmware antes de hacer cambios en producción.
- Seleccione UDP para menor sobrecarga y TCP para entrega garantizada según su entorno de red y el comportamiento del firmware del dispositivo.
- El GL-Маяк soporta subidas GPRS y alertas SMS; use SMS solo para alertas críticas si desea conservar datos o batería.
- El almacenamiento de paquetes en buffer mejora la resiliencia en despliegues remotos, pero verifique el tamaño del buffer y el comportamiento de retransmisión con la documentación de AutoFon.
- Siempre guarde y, si es necesario, reinicie el dispositivo para que los nuevos ajustes de servidor surtan efecto en la próxima sesión de datos.

## Por qué usar Plaspy con esta configuración

Utilizar el AutoFon GL-Маяк con Plaspy ofrece una combinación eficaz para despliegues autónomos prolongados donde la telemetría fiable, el reporte de alarmas y la duración de batería son prioritarios. La configuración de servidor compartido de Plaspy simplifica la incorporación de dispositivos porque se emplean el mismo puerto y endpoint para todos los rastreadores compatibles, y Plaspy detecta automáticamente el protocolo del equipo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, el comportamiento del firmware y los detalles del fabricante, verifique la información en el sitio oficial de AutoFon https://www.autofon.ru/ ya que las especificaciones y los procedimientos pueden cambiar con el tiempo.
