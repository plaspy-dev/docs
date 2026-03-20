---
slug: /castel/pt_719/configuration
id: pt_719-configuration
sidebar_label: Configuration
title: Castel - PT-719 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Castel PT-719 y reportar a Plaspy usando ajustes de servidor compartidos y comandos SMS
keywords:
  - Configuración Castel PT-719
  - Configuración Castel PT-719 para Plaspy
  - Configuración servidor PT-719 Castel
  - Configuración rastreador GPS PT-719
  - Configuración SMS PT-719
  - Configuración PT-719 Plaspy
  - Configuración rastreador GPS Castel
  - Ajustes APN PT-719
  - Plataforma de rastreo PT-719
  - Asistencia RFID Castel PT-719
---

# Castel - Configuración PT-719

Esta página reúne el contexto público para usar el rastreador GPS Castel PT-719 con Plaspy. Contiene los pasos y comandos SMS de uso común que instaladores y administradores emplean para apuntar el dispositivo a Plaspy y verificar que el rastreador reporta correctamente. Utilice esta página como referencia práctica para aplicar los ajustes de servidor compartidos de Plaspy al PT-719.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El PT-719 admite comandos de configuración por SMS como parte de su flujo documentado; las instrucciones a continuación muestran cómo aplicar el endpoint de Plaspy y los valores APN relevantes usando esos comandos públicos y la guía del fabricante.

## Resumen de la configuración

El objetivo de la configuración es preparar el PT-719 para que comunique de forma fiable ubicación y estado a Plaspy y aparezca en su cuenta. Para el PT-719 esto normalmente implica provisionar acceso a la red, establecer los valores APN y dirigir el rastreador al endpoint y puerto del servidor de Plaspy.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los datos telemáticos lleguen a la plataforma.
- Configurar las credenciales APN para que el rastreador pueda utilizar datos móviles.
- Establecer el puerto compartido de Plaspy para asegurar recepción consistente en todos los dispositivos.
- Validar que el dispositivo es visible y está reportando en Plaspy luego de la configuración.
- Aplicar los ajustes vía SMS o con la herramienta del fabricante según su instalación.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el PT-719. Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (device may be configured to use either transport)
- Plaspy automatically detects the tracker protocol so the same port and server work for supported models

## Requisitos típicos antes de la instalación

- Dispositivo encendido y accesible para poder enviar comandos SMS o usar la herramienta del fabricante.
- Una SIM 2G funcional con datos habilitados y la información APN correcta del operador.
- Capacidad para enviar SMS desde un teléfono móvil o un gateway SMS al rastreador si utiliza aprovisionamiento por SMS.
- Acceso al método de configuración oficial del fabricante o al software correspondiente y las credenciales necesarias.
- Conocimiento del ID del dispositivo para poder derivar la clave secreta SMS por defecto si se requiere.
- Una cuenta Plaspy configurada para recibir el dispositivo una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

El PT-719 se configura para reportar su ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga conectividad móvil y se apliquen los ajustes de APN y servidor, enviará su posición y actualizaciones de estado para que usted pueda monitorearlo en Plaspy.

- El rastreador envía datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo o la elección del instalador.
- Plaspy recibe los datos entrantes y detecta automáticamente el protocolo del dispositivo para su procesamiento.
- El reporte permite visibilidad, registro de eventos y monitoreo operativo dentro de la plataforma Plaspy.
- La validación en Plaspy confirma la comunicación exitosa y el flujo de datos desde el rastreador.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar los comandos SMS documentados por Castel.
2. Obtenga el ID del dispositivo y derive la clave secreta SMS por defecto si el equipo requiere contraseña para comandos SMS.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o como la IP 54.85.159.138 en la configuración del dispositivo o en la carga del comando SMS.
4. Establezca el puerto en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el dispositivo solicita selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante así lo requiere.
7. Valide que el dispositivo esté reportando a Plaspy y sea visible en la plataforma.

## Ejemplos de comandos de configuración

El PT-719 soporta configuración vía SMS. El fabricante provee los siguientes comandos SMS para configuración GPRS y servidor. La clave secreta por defecto para instrucciones SMS son los últimos 6 caracteres ASCII del ID del dispositivo. Mantenga los marcadores de posición como [apn], [apnu], [apnp], y [SecretKey] tal como se muestran y reemplácelos por sus valores reales.

- To set APN and server IP with port 8888 (replace placeholders and preserve order):

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- To check the current GPRS settings on the device:

```
*[SecretKey]#get gprs#*
```

Notas sobre los marcadores de posición:
- [SecretKey] — la clave SMS por defecto son los últimos 6 caracteres ASCII del ID del dispositivo, salvo que se haya cambiado.
- [apn] — la cadena APN de su operador móvil.
- [apnu] — el usuario APN si el operador lo requiere, de lo contrario déjelo vacío.
- [apnp] — la contraseña APN si el operador la requiere, de lo contrario déjelo vacía.

Si el firmware del PT-719 o su herramienta de instalación permiten ingresar un dominio de servidor en lugar de la IP, puede usar d.plaspy.com en lugar de la dirección IP donde aplique. Algunas herramientas del fabricante aceptan el dominio directamente mientras que los comandos SMS pueden requerir la IP.

## Notas de configuración

- Las revisiones de firmware y software pueden cambiar la sintaxis exacta de los SMS o el conjunto de comandos disponibles. Verifique el formato de comandos con la documentación más reciente de Castel antes de despliegues masivos.
- El aprovisionamiento por SMS es práctico para actualizaciones en campo, pero confirme la clave secreta SMS del dispositivo y cualquier credencial por defecto modificada antes de usarlo.
- Considere la elección entre UDP y TCP según las condiciones de red y sus necesidades operativas; Plaspy acepta ambos en el puerto 8888.
- Confirme los valores APN con el operador de la SIM y pruebe la conectividad de datos antes de confiar en el reporte en vivo.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que simplifica la configuración del servidor.

## Por qué usar Plaspy con esta configuración

Usar el Castel PT-719 con Plaspy ofrece a las organizaciones visibilidad sencilla de activos, personal o equipos en campo. El PT-719 puede configurarse vía SMS o con herramientas del fabricante para dirigir sus reportes a Plaspy, habilitando seguimiento de ubicación, visibilidad de eventos y monitoreo centralizado de múltiples dispositivos.

Learn more about Plaspy and how it can receive and process device data at https://www.plaspy.com. For device specific configuration commands, firmware notes, and the latest manufacturer instructions verify details on the Castel website http://www.castelecom.com/ as manufacturer specifications and setup methods can change over time.
