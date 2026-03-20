---
slug: /tzone/tz_bc05/configuration
id: tz_bc05-configuration
sidebar_label: Configuration
title: TZone - TZ-BC05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TZone TZ-BC05 con Plaspy con pasos prácticos de servidor y configuración por SMS
keywords:
  - Configuración TZone TZ-BC05
  - Instalación TZ-BC05 Plaspy
  - Configuración rastreador GPS TZone
  - Configuración servidor TZ-BC05
  - Integración rastreador Plaspy
  - Configuración SMS TZ-BC05
  - Configuración GPRS tracker TZone
  - Configuración iBeacon Bluetooth
  - Configuración plataforma GPS
  - Configuración rastreo de vehículos
---

# TZone - TZ-BC05 Configuración

Esta página documenta el contexto público de configuración para usar el TZone TZ-BC05 con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos de configuración públicos que permiten integrar este modelo en Plaspy, incluyendo comandos por SMS cuando el fabricante los provee. Use esta guía junto con la documentación del dispositivo al realizar la instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo transmite al endpoint de Plaspy. Los pasos exactos en el lado del fabricante y las etiquetas de menú pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que confirme siempre los detalles específicos del dispositivo con la documentación del fabricante. Los comandos que se muestran a continuación presentan un flujo común de configuración por SMS cuando está disponible.

## Resumen de la configuración

El proceso de configuración prepara el TZ-BC05 para comunicarse con Plaspy y asegura que el dispositivo sea visible en la plataforma. Cuando el modelo soporta ajustes por SMS y GPRS, éstos suelen usarse para apuntar el dispositivo a Plaspy y definir los intervalos de reporte.

- Configure el APN del equipo para que use datos móviles en el envío de informes.
- Establezca el servidor GPRS en Plaspy usando el dominio o la IP proporcionada y el puerto compartido.
- Seleccione el protocolo de transporte si el dispositivo requiere elegir entre UDP o TCP.
- Defina el intervalo de actualización deseado para controlar la frecuencia de reporte.
- Active el modo GPRS o datos para que el rastreador comience a enviar a Plaspy.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888 — Plaspy usa el mismo puerto para todos los dispositivos soportados
- Transport: UDP o TCP son compatibles, configure el dispositivo según el transporte que requiera
- Protocol detection: Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos al servidor

## Requisitos previos habituales

- Dispositivo encendido y accesible, con batería cargada o conectado a una fuente de alimentación.
- Si va a usar reporte celular, una SIM activa con datos y capacidad de SMS instalada en el equipo.
- APN del operador, y opcionalmente usuario y contraseña APN si el operador los requiere.
- Acceso al método de configuración del fabricante, como comandos SMS, herramienta de configuración o software del proveedor.
- Un teléfono móvil o herramienta capaz de enviar SMS al equipo para configurar por SMS.
- Conocimiento de cualquier contraseña SMS del equipo o contraseña de administrador modificada que pueda ser necesaria para aceptar comandos.

## Cómo se conecta este tracker a Plaspy

Cuando se configura para reporte en red, el TZ-BC05 envía sus datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar e interpretar los mensajes del dispositivo. Plaspy recibe la conexión entrante en el endpoint configurado y asigna el protocolo automáticamente.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy (d.plaspy.com) o a su IP 54.85.159.138.
- Todos los dispositivos reportan al mismo puerto de Plaspy 8888, por lo que no se requiere un mapeo de puerto por dispositivo.
- El dispositivo puede usar transporte UDP o TCP según su firmware y la selección que usted realice.
- La frecuencia de reporte se controla mediante el intervalo de actualización configurado en el dispositivo.
- Una vez que llegan los datos, Plaspy detecta automáticamente el protocolo del dispositivo y lo muestra en la plataforma para monitoreo y generación de eventos.

## Flujo de configuración típico

1. Acceda al método o software de configuración oficial del fabricante. Para muchas instalaciones del TZ-BC05 esto se hace mediante comandos SMS enviados desde un teléfono móvil.
2. Ingrese el servidor de Plaspy como d.plaspy.com o, si el dispositivo requiere IP, use 54.85.159.138.
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP en el dispositivo si el firmware exige elegir el transporte.
5. Configure el APN del operador y el usuario y contraseña APN si aplica.
6. Aplique o guarde la configuración y active el modo GPRS o de datos.
7. Reinicie el equipo si el fabricante lo recomienda, luego valide que el rastreador reporte a Plaspy y aparezca en la plataforma.

## Ejemplos de comandos de configuración

El fabricante del TZ-BC05 proporciona un flujo de comandos por SMS para la configuración pública. Los siguientes comandos se muestran en el orden en que comúnmente se aplican. Reemplace la contraseña SMS y los marcadores de posición según sea necesario.

- Configure el APN del operador. Reemplace 000000 con la contraseña SMS del equipo si se ha cambiado, y sustituya {{apn}}, {{apnu}}, {{apnp}} por los valores de su operador. Los campos de usuario y contraseña son opcionales y solo se requieren si el operador los solicita.

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

- Establezca el intervalo de actualización a 60 segundos (ejemplo). Esto controla cada cuánto tiempo el equipo envía actualizaciones de posición.

```
*000000,018,60,999#
```

- Configure el servidor GPRS con la IP y el puerto de Plaspy. Si su dispositivo acepta un nombre de dominio en lugar de una IP, puede usar d.plaspy.com en lugar de 54.85.159.138.

```
*000000,015,0,54.85.159.138,8888#
```

- Active el modo GPRS o datos en el dispositivo para que empiece a reportar.

```
*000000,016,1#
```

Notas sobre los marcadores de posición:
- 000000 es el marcador de la contraseña administrativa SMS. Reemplácelo por su contraseña SMS si se ha modificado respecto al valor de fábrica.
- {{apn}} es el nombre del APN del operador.
- {{apnu}} es el usuario del APN cuando el operador lo requiere.
- {{apnp}} es la contraseña del APN cuando el operador la requiere.

## Notas de configuración

- La configuración por SMS es compatible y es un método público frecuente para ajustar APN y detalles de servidor en este modelo.
- Las versiones de firmware y las revisiones de hardware pueden alterar la sintaxis exacta de los SMS, los parámetros disponibles o la ubicación de las opciones en los menús. Verifique la sintaxis exacta de comandos con su equipo.
- Elija UDP o TCP según la capacidad del firmware del dispositivo; Plaspy aceptará cualquiera en el puerto 8888 y realizará la detección automática de protocolo.
- Si el equipo admite nombres de dominio para la configuración del servidor, usar d.plaspy.com puede ser más resistente que una IP fija; use la IP 54.85.159.138 cuando el dispositivo no soporte DNS.
- Mantenga un registro de cualquier contraseña SMS administrativa que cambie; los comandos generalmente requieren el prefijo correcto de contraseña para ser aceptados.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-BC05 para enviar datos a Plaspy centraliza los reportes de ubicación y estado del dispositivo, de modo que flotas, gestores de activos y equipos de operaciones puedan monitorear actividad y eventos desde una sola plataforma. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la integración y reducen la necesidad de configuraciones específicas del dispositivo más allá del APN, servidor, puerto y selección de transporte.

Para saber más sobre Plaspy y cómo soporta una amplia gama de rastreadores GPS visite https://www.plaspy.com. Para obtener los detalles más actuales sobre configuración específica del dispositivo, notas de firmware y la guía del fabricante para el TZone TZ-BC05, verifique la información con el fabricante en http://www.tzonedigital.com/
