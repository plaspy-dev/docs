---
slug: /atrack/ak7/configuration
id: ak7-configuration
sidebar_label: Configuration
title: ATrack - AK7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para ATrack AK7 con ajustes de servidor Plaspy y ejemplos de comandos AT para conectar el rastreador
keywords:
  - Configuración ATrack AK7
  - Configuración AK7
  - Integración AK7 Plaspy
  - Configuración rastreador GPS ATrack
  - Configuración servidor AK7
  - Configuración plataforma seguimiento AK7
  - Guía rastreador vehicular AK7
  - Configuración telemetría AK7
  - Configuración GPS rastreador Plaspy
  - Comandos configuración AK7
---

# Configuración de ATrack AK7

Esta página describe el contexto público de configuración para usar el rastreador ATrack AK7 con Plaspy. Se concentra en los parámetros del servidor Plaspy y en los pasos prácticos necesarios para que el AK7 reporte ubicación y eventos a la plataforma. Cuando están disponibles, se incluyen ejemplos de comandos AT del flujo de configuración para ilustrar un patrón común.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía como punto de partida práctico y verifique los detalles específicos del equipo en la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

Configurar un AK7 para Plaspy prepara el dispositivo para establecer una sesión de datos estable y reportar eventos y ubicación a la plataforma. Los pasos públicos típicos fijan los disparadores de eventos, el intervalo de reporte, el formato del mensaje y los detalles GPRS del servidor que apuntan a Plaspy.

- Direccione los parámetros GPRS del AK7 al servidor de Plaspy para que el dispositivo envíe datos al endpoint correcto.
- Configure el reporte de eventos, por ejemplo el estado ACC, para que el dispositivo envíe eventos clave del vehículo a Plaspy.
- Defina un intervalo de rastreo adecuado que equilibre la frecuencia de reportes y el consumo de datos.
- Use el formato de mensaje recomendado por el dispositivo para payloads binarios o compatibles con la plataforma.
- Verifique la conectividad y el estado del equipo tras guardar la configuración para que el rastreador aparezca en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Estos valores son los ajustes públicos de servidor que debe usar al configurar el AK7 para que reporte a Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y gestiona la detección del protocolo de forma automática.

## Requisitos previos típicos

- Confirme que el dispositivo tiene alimentación y que el AK7 está instalado o conectado a un banco de pruebas con alimentación estable.
- Disponga de una tarjeta SIM con servicio de datos activa insertada y conozca las credenciales APN del operador.
- Tenga acceso al método de configuración del fabricante del AK7, como la herramienta oficial de configuración, la consola serie o la interfaz de comandos por SMS proporcionada por ATrack.
- Tenga familiaridad básica con comandos estilo AT o con el software del proveedor utilizado para enviar comandos de configuración al AK7.
- Asegúrese de disponer de las credenciales y el acceso necesarios en Plaspy para validar los reportes del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El AK7 se configura para abrir una sesión de datos por paquete y enviar sus informes de rastreo y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes e identifica automáticamente el protocolo del rastreador para que el dispositivo sea visible y utilizable en la plataforma.

- El dispositivo envía mensajes periódicos de rastreo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según la preferencia del instalador o el soporte del firmware.
- Los disparadores de eventos, como cambio de ACC, se reportan a Plaspy según la configuración del equipo.
- Plaspy procesa los mensajes entrantes y los asigna al registro del dispositivo mediante detección automática del protocolo.
- Tras una configuración exitosa, la ubicación y los eventos del dispositivo estarán disponibles para monitorización e informes en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración ATrack para el AK7 (consola serie, herramienta del proveedor o comandos por SMS).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP como transporte si el dispositivo exige seleccionar transporte.
5. Aplique o guarde la configuración en el AK7 y confirme que el dispositivo acepta los cambios.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware requiere reboot para aplicar ajustes de red.
7. Valide que el AK7 reporte a Plaspy comprobando el estado del dispositivo en la plataforma Plaspy y utilizando el comando de estado del dispositivo si está disponible.

## Ejemplos de comandos de configuración

A continuación se muestran los comandos públicos estilo AT extraídos de la guía de configuración del modelo AK7. Preserve los valores de marcador de posición y reemplácelos por los datos APN de su operador donde corresponda.

- Configure el reporte de evento ACC y las acciones asociadas
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```
Explicación: Estos comandos definen un evento de entrada (ACC) y crean dos reportes para los estados encendido y apagado con la acción correspondiente. Use la herramienta del fabricante o el método por SMS adecuado para su equipo para enviar estos comandos.

- Establecer intervalo de rastreo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```
Explicación: Ajusta el intervalo de rastreo temporal a 60 segundos. Modifique este valor según la frecuencia de reportes y el consumo de datos deseado.

- Configurar formato de mensaje a modo binario
```text
AT$FORM=1,@P,0,""
```
Explicación: Este comando cambia el formato de salida. Use el formato recomendado por su flujo de integración; Plaspy acepta datos en el formato soportado por el dispositivo y detectará el protocolo automáticamente.

- Configurar el servidor GPRS hacia Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explicación: Establezca el perfil GPRS con los valores APN de su operador. Reemplace los marcadores de posición como sigue:
- [apn] es el APN de datos móviles de su operador.
- [apnu] es el nombre de usuario del APN si el operador lo requiere.
- [apnp] es la contraseña del APN si el operador la requiere.
Este comando apunta el AK7 a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888. Plaspy también acepta d.plaspy.com y soporta transporte UDP o TCP; la plataforma detectará automáticamente el protocolo utilizado.

- Consultar el estado del dispositivo
```text
AT$INFO=?
```
Explicación: Consulte el estado del dispositivo para verificar la configuración actual y el estado de conectividad.

## Notas de configuración

- Las diferencias de firmware pueden modificar los comandos disponibles y el orden de los parámetros. Siempre confirme la sintaxis de los comandos contra las notas de la versión de firmware del AK7 o la documentación de ATrack.
- Elija UDP o TCP según las necesidades de la instalación; ambos transportes son compatibles con Plaspy en el puerto 8888 y la detección de protocolo es automática.
- Preserve y configure correctamente los marcadores de APN [apn], [apnu] y [apnp] al configurar GPRS para redes móviles.
- Si utiliza SMS o la herramienta de configuración del proveedor en lugar de comandos AT directos, mapee los mismos parámetros de GPRS y reporte en los campos correspondientes de la herramienta.
- Después de aplicar los ajustes, permita tiempo para que el dispositivo se conecte a la red celular y establezca la sesión de datos antes de validar la conectividad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AK7 facilita capturar la ubicación del vehículo y los datos de eventos en una plataforma centralizada de gestión de flotas. Configurar el AK7 para que reporte al servidor compartido de Plaspy garantiza una ingestión consistente de los mensajes de rastreo y simplifica el onboarding de dispositivos, ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, el comportamiento del firmware y la guía de instalación siempre verifique los detalles en el sitio oficial de ATrack https://www.atrack.com.tw/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
