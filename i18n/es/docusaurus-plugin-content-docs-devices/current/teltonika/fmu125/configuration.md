---
slug: /teltonika/fmu125/configuration
id: fmu125-configuration
sidebar_label: Configuration
title: Teltonika - FMU125 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Teltonika FMU125 a Plaspy con ejemplos prácticos de servidor y comandos
keywords:
  - Teltonika FMU125 configuración
  - FMU125 configuración Plaspy
  - configuración servidor tracker Teltonika
  - FMU125 configuración plataforma GPS
  - rastreo vehicular FMU125
  - FMU125 configuración APN Teltonika
  - integración de rastreadores Plaspy
  - comandos configurador FMU125
  - rastreo de flotas FMU125
  - configuración telemetría FMU125
---

# Teltonika - FMU125 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMU125 con Plaspy. Reúne los ajustes de servidor públicos prácticos y un ejemplo de comando que puede usarse con las herramientas de configuración de Teltonika o mediante SMS. Use esta información para preparar el dispositivo para comunicarse con la plataforma Plaspy, siguiendo siempre los manuales oficiales del fabricante para el mapeo detallado de parámetros.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante varían según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas Teltonika que elija usar. El FMU125 soporta GNSS y conectividad 3G GSM, antenas internas, acelerómetro, interfaces RS232/RS485 y múltiples métodos de configuración como Teltonika Configurator, comandos SMS y herramientas FOTA.

## Resumen de la configuración

El objetivo de la configuración del FMU125 para Plaspy es apuntar el rastreador a los servidores de Plaspy, proporcionar credenciales APN válidas si es necesario y verificar que el dispositivo sea detectado y reporte correctamente dentro de Plaspy. La configuración prepara el equipo para enviar datos de ubicación y eventos a la plataforma de forma fiable.

- Configure las credenciales APN y parámetros de red del dispositivo para que el rastreador pueda acceder a datos celulares si corresponde.
- Establezca el endpoint de servidor en d.plaspy.com o en la IP del servidor Plaspy proporcionada, para que el dispositivo envíe telemetría a Plaspy.
- Use el puerto común de Plaspy 8888, que se emplea para todos los dispositivos en la plataforma.
- Elija el protocolo de transporte (UDP o TCP) en el equipo si el firmware requiere una selección explícita.
- Aplique y guarde la configuración, luego confirme que el dispositivo aparece y reporta datos en tiempo real dentro de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones de servidor

## Requisitos típicos antes de la configuración

- Una unidad FMU125 alimentada que funcione y sea accesible durante la configuración.
- Una SIM celular con datos habilitados y los datos APN correctos si va a usar datos celulares por 3G GSM.
- Acceso al método de configuración del fabricante que prefiera, como Teltonika Configurator por USB/Bluetooth, capacidad de enviar comandos SMS o herramientas FOTA.
- Conocimiento de los parámetros APN, incluyendo nombre de APN, usuario y contraseña para insertar en los campos correspondientes.
- Tener a mano los ajustes del servidor Plaspy arriba indicados para ingresarlos en la configuración del equipo.
- Un método para validar el estado del dispositivo después de configurar, como una consola, respuestas SMS o la observación de la conexión del dispositivo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el FMU125 envía actualizaciones de ubicación basadas en GNSS y datos de sensores o eventos compatibles al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión e identifica automáticamente el protocolo del rastreador para decodificar y mostrar la información en la plataforma.

- El rastreador se apunta a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según el firmware del equipo o la preferencia del instalador.
- El dispositivo entrega mensajes de ubicación y evento que Plaspy procesa para monitoreo e informes.
- Plaspy detecta automáticamente el protocolo del dispositivo para decodificar los datos entrantes sin asignaciones de puertos por dispositivo.
- Tras una configuración y conectividad de red exitosas, el rastreador queda visible y reportable en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Teltonika que vaya a utilizar, como Teltonika Configurator, comandos SMS o herramientas FOTA.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el parámetro de servidor u host primario del dispositivo.
3. Ajuste el puerto del dispositivo a 8888, que es el puerto común usado por Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si el firmware requiere elección de transporte.
5. Proporcione las credenciales APN usando marcadores como [apn] [apnu] y [apnp] donde sea necesario para datos celulares.
6. Aplique o guarde la configuración en la herramienta Teltonika y reinicie el rastreador si la herramienta o el dispositivo lo requieren.
7. Valide que el dispositivo reporte correctamente a Plaspy verificando su estado en la plataforma o mediante el método de respuesta disponible del dispositivo.

## Ejemplo de comandos de configuración

El siguiente comando por lotes público se usa comúnmente para establecer parámetros básicos de red y servidor en dispositivos Teltonika. Tiene marcadores para las credenciales APN que debe reemplazar por los valores de su operador.

- Ejemplo de comando por lotes

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Qué significan los marcadores
  - [apn] Reemplace con el nombre APN de los datos de su SIM.
  - [apnu] Reemplace con el usuario APN si su operador lo requiere; deje en blanco si no aplica.
  - [apnp] Reemplace con la contraseña APN si es necesaria; deje en blanco si no corresponde.

Nota: Este comando establece los marcadores APN y el dominio del servidor Plaspy d.plaspy.com con el puerto 8888 en un solo comando por lotes. Los números de parámetro se corresponden con parámetros del dispositivo Teltonika; consulte la documentación de Teltonika para el mapeo exacto de parámetros y el significado del parámetro 2006 antes de aplicar.

## Notas de configuración

- Las versiones de firmware y del configurador cambian el mapeo de parámetros y las opciones disponibles; confirme los números de parámetro y la sintaxis según las notas del firmware del dispositivo.
- El comportamiento de TCP y UDP difiere según la red y el manejo del servidor; elija el transporte que mejor se adapte a su conectividad y reglas de firewall.
- Los dispositivos Teltonika pueden configurarse por múltiples métodos, incluyendo configurador USB/Bluetooth, comandos SMS y herramientas FOTA. Utilice el método apropiado para su instalación.
- Plaspy usa un único puerto entre los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte al servidor.
- Verifique siempre los valores APN y asegúrese de que la SIM tenga datos habilitados antes de probar el reporte en vivo a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el FMU125 con Plaspy ofrece una forma directa de añadir un rastreador Teltonika profesional a una plataforma de monitoreo operativa que centraliza la visibilidad de ubicación, eventos y operaciones. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos simplifica el despliegue, ya que el uso del mismo puerto y la detección automática de protocolo reducen la complejidad de la configuración por dispositivo.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes del equipo, notas de firmware y mapas de parámetros oficiales, consulte la documentación del fabricante en https://www.teltonika-gps.com/ que ofrece orientación completa para dispositivos Teltonika.
