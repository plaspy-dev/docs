---
slug: /autoseeker/at_19/configuration
id: at_19-configuration
sidebar_label: Configuration
title: Autoseeker - AT-19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS Autoseeker AT-19 con Plaspy, con ajustes de servidor y pasos prácticos de instalación
keywords:
  - Configuración Autoseeker AT-19
  - Configuración AT-19
  - AT-19 Plaspy configuración
  - Configuración rastreador GPS AT-19
  - Configuración rastreador Autoseeker
  - Configuración rastreo de vehículos
  - Configuración rastreador gestión de flotas
  - Integración de dispositivos Plaspy
  - Configuración servidor rastreador GPS
  - Configuración plataforma de rastreo
---

# Autoseeker - Configuración del AT-19

Esta página recoge la información pública necesaria para usar el rastreador GPS 2G Mini Autoseeker AT-19 con Plaspy. Resume los ajustes de servidor compartidos que requiere Plaspy, explica el flujo práctico para preparar el equipo y aclara qué conviene verificar con el fabricante antes de integrar el dispositivo en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que siga esta guía general y confirme los pasos específicos con la documentación oficial de Autoseeker.

## Panorama de la configuración

Preparar un AT-19 para Plaspy implica configurar el rastreador para que envíe posición y telemetría a los servidores de Plaspy, validar la conectividad celular y confirmar que Plaspy recibe los mensajes del dispositivo. Las tareas prácticas siguientes describen el objetivo del proceso de configuración.

- Configurar el dispositivo para que envíe datos GNSS y telemetría a los endpoints del servidor de Plaspy para que las ubicaciones aparezcan en los tableros de Plaspy.
- Verificar que la SIM y la conexión GSM/GPRS estén activas y que la APN sea la correcta para el operador móvil instalado.
- Seleccionar la opción de transporte compatible con el firmware del equipo y establecer el dominio o la IP y el puerto del servidor Plaspy.
- Aplicar y guardar la configuración en el rastreador y, si es necesario, reiniciar el dispositivo para que comience a reportar.
- Validar el reporte exitoso comprobando que el equipo sea visible y esté reportando eventos en Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el AT-19. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy performs automatic protocol detection to identify the tracker protocol

## Requisitos típicos antes de comenzar

- Un equipo AT-19 con alimentación y cableado correctos, y los accesorios de instalación necesarios.
- Una tarjeta SIM activa con datos habilitados y la APN correcta para el operador móvil.
- Acceso al método oficial de configuración de Autoseeker o al software que el proveedor suministre para el AT-19.
- Conocimiento de la versión de firmware del equipo y de cualquier nota del proveedor sobre comandos de configuración o formatos SMS.
- Una cuenta en Plaspy y acceso a la plataforma para validar la conectividad y la visibilidad del dispositivo.
- Herramientas básicas para reiniciar o cortar la alimentación del dispositivo, en caso de que el rastreador requiera un reinicio tras aplicar cambios.

## Cómo se conecta este rastreador a Plaspy

El AT-19 transmite posición GNSS y telemetría del vehículo a Plaspy por GSM GPRS o SMS según el método de reporte configurado y las capacidades del firmware. Una vez apuntado al endpoint y puerto compartidos de Plaspy, la plataforma recibe y decodifica los mensajes del equipo y muestra la ubicación y los eventos en la aplicación.

- El dispositivo reporta posición GNSS y datos de movimiento al endpoint del servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser TCP sobre GPRS o UDP sobre GPRS según la configuración del rastreador y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro de dispositivo correspondiente.
- Los mensajes de alarma y eventos como encendido/apagado de ignición, exceso de velocidad, eventos de geovalla y alertas SOS se reenvían a Plaspy para notificación y registro.
- El reporte por SMS puede usarse como ruta alternativa cuando el firmware y el flujo del proveedor lo soportan.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Autoseeker o al software proporcionado para el AT-19. Esto puede ser una herramienta del proveedor, un conjunto de comandos por SMS o una utilidad USB/serie.
2. Ubique los ajustes de servidor o reporte remoto en el menú del equipo o en la lista de comandos.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto en 8888, que es el puerto en escucha de Plaspy para todos los dispositivos.
5. Seleccione UDP o TCP si el equipo requiere especificar el transporte explícitamente.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware exigen un reinicio para activar los nuevos parámetros.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo, las posiciones recibidas y los registros de eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El AT-19 puede configurarse mediante herramientas suministradas por el fabricante o mediante comandos SMS según el firmware y la distribución del proveedor. Los comandos exactos y la forma de enviarlos varían según la versión de firmware y el canal de configuración usado. Consulte la documentación de Autoseeker o la guía de configuración del proveedor para conocer el conjunto de comandos preciso y el orden requerido para establecer servidor, puerto, transporte y APN.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la estructura de menús y el formato de comandos por SMS. Confirme el conjunto exacto de comandos para su firmware AT-19 antes de aplicar cambios.
- Elija TCP o UDP según la fiabilidad de la red y las recomendaciones del proveedor. Cualquiera de los dos transportes es soportado por Plaspy en el puerto 8888.
- Si se utiliza el reporte por SMS como respaldo, verifique que Plaspy soporte el formato SMS específico del firmware del equipo.
- Confirme la disponibilidad de la red 2G en su región, ya que el AT-19 es un dispositivo GSM GPRS 2G y algunos operadores han retirado ese servicio.
- Consulte siempre la documentación de Autoseeker para el cableado, los campos de APN y la configuración de características opcionales para evitar errores de configuración.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-19 con Plaspy ofrece una forma práctica de incorporar rastreo compacto de vehículos y telemetría a una plataforma centralizada de gestión de flotas. Plaspy recibe posición GNSS y datos de eventos del AT-19 y los presenta junto con alertas, historial de rutas y estado del dispositivo para apoyar la visibilidad operativa, la respuesta ante incidentes y la optimización de rutas.

Para conocer más sobre Plaspy y las integraciones de dispositivos compatibles, visite https://www.plaspy.com. Para los comandos de configuración específicos más actuales, notas de firmware y guías de instalación del AT-19, confirme los detalles en la web del fabricante https://autoseekergps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
