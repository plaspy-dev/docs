---
slug: /jointech/jt_600/configuration
id: jt_600-configuration
sidebar_label: Configuration
title: Jointech - JT 600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para conectar el Jointech JT 600 con la plataforma Plaspy
keywords:
  - Jointech JT 600 configuración
  - Configuración servidor Jointech JT 600
  - Configuración JT 600 para Plaspy
  - Configuración GPS JT 600
  - Configuración plataforma GPS Jointech
  - Configuración software seguimiento JT 600
  - Configuración tracker Plaspy
  - APN y ajustes de servidor GPS
  - Comandos SMS JT 600
  - Rastreo vehicular JT 600
---

# Jointech - JT 600 Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador Jointech JT 600 con la plataforma Plaspy. Resume los ajustes de servidor que Plaspy requiere y los pasos prácticos que se usan comúnmente para apuntar un dispositivo JT 600 a Plaspy. El contenido se basa en la descripción del JT 600 para ofrecer consejos prácticos y, cuando están disponibles públicamente, incluye los comandos SMS con estilo del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JT 600 admite reportes por GPRS y puede configurarse mediante comandos SMS como se muestra en la guía del fabricante incluida a continuación.

## Resumen de configuración

El objetivo de los pasos de configuración es preparar un JT 600 para que comunique de forma fiable datos de ubicación y eventos a Plaspy y aparezca en su cuenta. La configuración normalmente implica indicar el servidor GPRS, confirmar el APN y credenciales cuando sea necesario, y validar que el rastreador sea visible en la plataforma.

- Apuntar el JT 600 al endpoint del servidor de Plaspy y confirmar los ajustes de transporte.
- Proveer el APN correcto y credenciales opcionales para que el dispositivo use datos móviles o vuelva a subir por GPRS.
- Guardar y aplicar los ajustes en el dispositivo mediante SMS o la herramienta del fabricante, y reiniciar si es necesario.
- Validar la conectividad y que el dispositivo reporte ubicación, SOS y datos históricos a Plaspy.
- Usar los ajustes de servidor compartidos de Plaspy para gestionar varios modelos de dispositivo de forma coherente.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El transporte puede configurarse como UDP o TCP según los requisitos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo para simplificar la configuración en el dispositivo.

## Requisitos típicos antes de la configuración

- Un dispositivo JT 600 encendido y accesible con un ID de dispositivo válido
- Una tarjeta SIM con datos activados y los ajustes APN correctos para el operador móvil
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta oficial de Jointech
- El nombre del APN y, opcionalmente, el usuario y la contraseña del APN para el operador de la SIM
- Un teléfono con capacidad SMS o una pasarela SMS si va a configurar el dispositivo por SMS
- Una cuenta en Plaspy y la posibilidad de verificar que el dispositivo se haya conectado a la plataforma

## Cómo se conecta este rastreador a Plaspy

El JT 600 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez establecidos el servidor y el APN, el dispositivo usará GPRS para conectarse y transmitir sus reportes, y Plaspy se encargará de la detección del protocolo y el procesamiento.

- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP cuando el rastreador requiere una selección
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes
- Los reportes de ubicación, alertas SOS, eventos de geocerca y subidas históricas se reenvían a Plaspy para su visualización e informes
- Una configuración correcta hace que el JT 600 sea visible en Plaspy para monitoreo y alertas

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Jointech, como los comandos SMS del fabricante o el software de configuración de Jointech.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 como destino.
3. Configure el puerto en 8888 en la configuración del dispositivo.
4. Elija el transporte UDP o TCP si el JT 600 requiere una selección.
5. Proporcione el APN del operador móvil y, opcionalmente, el usuario y la contraseña del APN para permitir conexiones GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige para que los cambios tengan efecto.
7. Valide que el dispositivo está reportando y es visible en Plaspy y que llegan los mensajes de ubicación y eventos.

Si utiliza configuración por SMS, incluya el ID del dispositivo en los comandos y siga el orden del fabricante para establecer los valores de servidor y APN.

## Ejemplos de comandos de configuración

El JT 600 puede configurarse enviando comandos SMS al dispositivo. Reemplace [trackerID] con el IMEI del dispositivo o el ID configurado y sustituya los marcadores de APN por los valores correctos de su operador.

1. Establecer el servidor GPRS y el APN
Envíe este SMS al rastreador, reemplazando los marcadores según sea necesario:

```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

También puede usar el dominio del servidor en el mismo comando si el dispositivo acepta un nombre de host:

```
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2. (Opcional) Establecer usuario y contraseña del APN
Si su APN requiere credenciales, envíe este SMS:

```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Notas sobre los marcadores
- [trackerID] — Reemplace con el ID del dispositivo o el IMEI según lo requiera el rastreador.
- [apn] — Reemplace con el nombre del APN de su operador móvil.
- [apnu] — Reemplace con el usuario del APN si su operador lo exige.
- [apnp] — Reemplace con la contraseña del APN si su operador lo exige.

Siga el orden indicado por el fabricante al enviar los comandos; el comando de servidor/APN normalmente debe aplicarse antes que los comandos opcionales de credenciales.

## Notas de configuración

- Las diferencias de firmware o compilaciones regionales pueden cambiar la sintaxis de SMS o el orden de los parámetros; confirme siempre con la documentación del dispositivo.
- Use UDP o TCP según la preferencia del instalador o las condiciones de red; Plaspy admite ambos y detecta el protocolo automáticamente al conectar.
- La configuración por SMS es comúnmente compatible con el JT 600, pero también pueden existir herramientas de instalación y utilidades para PC proporcionadas por Jointech.
- Si su APN no requiere usuario ni contraseña, puede omitir el segundo comando SMS para credenciales.
- Debido a que Plaspy utiliza el mismo puerto en todos los dispositivos, los ajustes de servidor específicos que normalmente necesita establecer en el dispositivo son la dirección del servidor, el APN y el transporte.

## Por qué usar Plaspy con esta configuración

Usar el JT 600 con Plaspy ofrece a las organizaciones una vía sencilla para centralizar ubicaciones, alertas y el estado operativo de una flota o activos distribuidos. Apuntar el JT 600 al endpoint compartido de Plaspy simplifica el despliegue porque la plataforma se encarga de la detección de protocolo y el parseo de datos una vez que el dispositivo se conecta.

Para obtener más información sobre cómo Plaspy maneja la conectividad de dispositivos y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los comandos más recientes específicos del dispositivo, notas de firmware y documentación del fabricante verifique los detalles de configuración en el sitio web de Jointech https://www.jointcontrols.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
