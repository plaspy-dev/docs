---
slug: /totemtech/at04/configuration
id: at04-configuration
sidebar_label: Configuration
title: Totemtech - AT04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Totemtech AT04 para compatibilidad con Plaspy ajustes de servidor y comandos SMS
keywords:
  - Configuración Totemtech AT04
  - Instalación Totemtech AT04
  - Totemtech AT04 Plaspy
  - Configuración GPS AT04
  - Configuración servidor AT04
  - Instalación rastreador Totemtech
  - Configuración rastreador Plaspy
  - Instalación rastreador vehicular
  - Configuración SMS AT04
  - Integración plataforma GPS
---

# Totemtech - Configuración del AT04

Esta página documenta el contexto público de configuración para usar el rastreador Totemtech AT04 con la plataforma Plaspy. Reúne los valores de servidor prácticos, los requisitos comunes y los comandos SMS públicos que suelen emplearse para apuntar el AT04 a Plaspy y habilitar el rastreo en tiempo real y la gestión de flotas. Use esta guía junto con la documentación del fabricante para asegurar una configuración precisa según su hardware y firmware.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT04 admite configuración por SMS, por GPRS o datos celulares, y mediante la herramienta de configuración para Windows del fabricante, así que elija el método que coincida con su dispositivo y las prácticas del instalador.

## Resumen de configuración

Configurar el AT04 para Plaspy prepara el rastreador para enviar posiciones GNSS y telemetría a un único endpoint de Plaspy, de modo que el dispositivo quede visible en la plataforma. El proceso suele incluir establecer el APN del operador, apuntar el dispositivo al servidor de Plaspy, seleccionar el método de transporte si es necesario, y confirmar los intervalos de reporte y la configuración de ACK. Los comandos SMS públicos que aparecen más abajo son un ejemplo para dispositivos que se configuran por SMS.

- Establezca el APN del dispositivo y las credenciales del APN para que el rastreador pueda abrir una sesión GPRS.
- Configure el servidor GPRS para apuntar a Plaspy usando la dirección y el puerto compartidos.
- Seleccione UDP o TCP en el dispositivo si es necesario elegir el transporte.
- Defina los intervalos de reporte y el comportamiento de ACK para que el dispositivo informe con la cadencia esperada.
- Valide la conectividad para que el rastreador aparezca y reporte correctamente en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el AT04. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port across devices

## Requisitos habituales antes de la instalación

- Una tarjeta SIM válida con un plan de datos activo y capacidad SMS para la configuración inicial por SMS cuando sea necesario.
- Conocimiento del APN de la red y las credenciales si el operador móvil las requiere para habilitar datos GPRS.
- Acceso a un teléfono con capacidad para enviar SMS desde el que enviar comandos, o bien la herramienta de configuración para Windows y un cable USB para la configuración por software.
- Alimentación del dispositivo y cableado correcto para que la unidad permanezca en línea durante la configuración y las pruebas.
- La contraseña de configuración por defecto del AT04 es 000000 si realiza la configuración vía SMS, salvo que el proveedor o instalador la haya cambiado.
- Un plan para verificar la conectividad en Plaspy después de la configuración y así validar reportes y alarmas.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT04 enviará posiciones GNSS y telemetría a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los datos de posición, sensores y eventos y los hace disponibles para mapeo, alertas e informes. Plaspy utiliza un único puerto y detecta automáticamente el protocolo del dispositivo para simplificar la integración entre modelos.

- El rastreador abre una sesión GPRS usando el APN y las credenciales del operador, y luego envía datos al endpoint del servidor Plaspy.
- El dispositivo informa ubicación y actualizaciones de telemetría en los intervalos configurados o de forma inmediata cuando ocurren alarmas.
- Eventos de alarma y entrada, como SOS, manipulación y cambios del inmovilizador, se transmiten a Plaspy para notificaciones en tiempo real.
- Plaspy muestra la posición en vivo, recorridos históricos y paneles de telemetría basados en los datos del dispositivo.
- El transporte puede ser UDP o TCP según la configuración seleccionada en el dispositivo y las condiciones de la red.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, por ejemplo la herramienta de configuración para Windows del AT04 o la interfaz de comandos SMS.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la opción de servidor o servidor GPRS.
3. Configure el puerto en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Configure el APN del operador y cualquier usuario y contraseña del APN necesarios para la conectividad GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el método o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que las posiciones y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El AT04 soporta configuración por SMS. Los siguientes comandos SMS públicos se muestran en el orden proporcionado por el fabricante. La contraseña por defecto del dispositivo es 000000. Envíe cada línea como un SMS desde un teléfono autorizado al número de la SIM del dispositivo.

- Optional initial factory reset command
```text
*000000,007#
```
Utilice esto únicamente si necesita restablecer el dispositivo a los valores de fábrica antes de la configuración.

- Set the operator APN with placeholders
```text
*000000,002,[apn],[apnu],[apnp]#
```
Reemplace [apn] por la cadena APN del operador. Reemplace [apnu] y [apnp] por el usuario y la contraseña del APN si son necesarios. Si el APN no requiere usuario ni contraseña, deje esos marcadores vacíos según lo permita el firmware del dispositivo.

- Set the GPRS server to Plaspy using the server IP and port
```text
*000000,003,54.85.159.138,8888,1
```
Este comando apunta el rastreador a Plaspy por IP y puerto. El parámetro final forma parte del formato de comando del dispositivo y puede seleccionar el modo de conexión según el firmware.

- Enable ACK or server acknowledgement behavior
```text
*000000,019,1#
```
Este comando configura el comportamiento de ACK según lo definido por el fabricante.

- Set the reporting interval to 60 seconds
```text
*000000,60,60,0,60#
```
Este comando establece parámetros de reporte basados en tiempo; ajuste los valores según la política de reporte que necesite.

Nota sobre el envío de comandos: envíe cada comando como una única cadena SMS exactamente como se indica, sustituyendo los marcadores cuando corresponda. Si utiliza otro método de configuración, como la herramienta para Windows, aplique los mismos valores de dominio o IP y puerto descritos en esta guía.

## Notas de configuración

- Las diferencias de firmware y las versiones de las herramientas del proveedor pueden cambiar la sintaxis de los comandos y el significado de los parámetros. Confirme los comandos con la documentación del firmware del dispositivo.
- La elección entre TCP y UDP puede afectar el comportamiento de entrega y el consumo de datos móviles. Seleccione el transporte que se ajuste a su red y a las expectativas de la plataforma.
- Los marcadores de APN [apn], [apnu] y [apnp] deben reemplazarse por los valores específicos del operador. Si el operador no requiere usuario o contraseña, esos campos normalmente pueden dejarse en blanco.
- La configuración por SMS es un método práctico para instalaciones de campo, mientras que la herramienta para Windows puede ser más rápida para aprovisionamiento masivo o cuando se dispone de una conexión USB.
- Tenga presente la contraseña por defecto 000000 para la configuración inicial y cámbiela si el flujo del dispositivo permite actualizar la contraseña tras el aprovisionamiento.

## Por qué usar Plaspy con esta configuración

Usar el AT04 con Plaspy ofrece a las organizaciones un rastreador compacto que suministra datos continuos GNSS y telemetría a una plataforma centralizada para mapeo, alertas e informes. Las funciones del AT04, como operación de bajo consumo, detección de manipulación y control remoto del inmovilizador, combinadas con Plaspy, proporcionan conciencia situacional, notificaciones de eventos y análisis histórico de viajes para flotas mixtas.

To learn more about Plaspy and how it can work with Totemtech devices visit https://www.plaspy.com. For the latest device specific details, firmware notes, and manufacturer configuration guides verify current information at the Totemtech website http://www.totemtek.com/ as vendor documentation may change over time.
