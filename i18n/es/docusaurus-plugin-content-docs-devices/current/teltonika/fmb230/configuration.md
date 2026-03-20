---
slug: /teltonika/fmb230/configuration
id: fmb230-configuration
sidebar_label: Configuration
title: Teltonika - FMB230 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMB230 con ajustes de servidor Plaspy y pasos prácticos para visibilidad en la plataforma
keywords:
  - Configuración Teltonika FMB230
  - Instalación Teltonika FMB230
  - Configuración servidor FMB230
  - Configuración FMB230 Plaspy
  - Configuración rastreador GPS Teltonika
  - Rastreador GPS Plaspy
  - Rastreo de vehículos FMB230
  - Configuración APN FMB230
  - Configuración dispositivo Teltonika
  - Ajustes servidor Plaspy
---

# Teltonika - Configuración FMB230

Esta página describe la configuración pública necesaria para usar el rastreador Teltonika FMB230 con la plataforma Plaspy. Se enfoca en los valores prácticos de servidor y transporte requeridos para conectar el equipo a Plaspy y explica los pasos y verificaciones habituales que instaladores y administradores deben realizar antes y después del aprovisionamiento.

Plaspy utiliza un conjunto de ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que emplee esta guía junto con los métodos y la documentación oficiales de Teltonika.

## Resumen de la configuración

El objetivo de esta configuración es preparar el FMB230 para enviar posiciones y datos del dispositivo a Plaspy usando el endpoint y el puerto compartidos de Plaspy. La configuración normalmente incluye ingresar la información APN si el equipo usa datos celulares, apuntar el rastreador a Plaspy, seleccionar el transporte y validar que el dispositivo sea visible en la plataforma.

- Configure el APN y los parámetros de red para que el rastreador tenga conectividad a internet
- Establezca el endpoint y el puerto de Plaspy para que el FMB230 reporte al servicio
- Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita
- Aplique o envíe la configuración usando la herramienta del fabricante o un comando SMS por lotes
- Verifique que el rastreador sea visible y reporte correctamente dentro de Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Nota: Plaspy emplea el mismo puerto para todos los dispositivos compatibles y selecciona automáticamente el manejador de protocolo correcto según los datos entrantes.

## Requisitos típicos antes de la configuración

- Un FMB230 alimentado con el cableado y antenas necesarios conectados
- Una SIM celular válida y un plan de datos activo con la configuración APN correcta para su operador móvil
- Acceso al método de configuración oficial de Teltonika para el equipo (comandos SMS, Teltonika Configurator u otras herramientas compatibles)
- Los ajustes del servidor Plaspy listados más arriba (d.plaspy.com o 54.85.159.138 y puerto 8888)
- Capacidad para reiniciar o reiniciar el dispositivo después de aplicar la configuración si es necesario
- Acceso a Plaspy para validar que el rastreador esté reportando

## Cómo se conecta este rastreador a Plaspy

El FMB230 se configura para enviar su telemetría al endpoint y puerto compartidos de Plaspy. Una vez establecida la conectividad de red y los parámetros del servidor, Plaspy recibirá los mensajes del dispositivo y detectará automáticamente el protocolo para procesar los datos y mostrar el dispositivo en la plataforma.

- El rastreador envía actualizaciones de parámetros y telemetría por GPRS o SMS según su configuración
- El APN y las credenciales de red permiten que el dispositivo establezca una conexión a internet con d.plaspy.com
- El equipo utiliza el puerto 8888 como destino para los datos enviados a Plaspy
- Puede seleccionar UDP o TCP como transporte en el dispositivo cuando sea necesario
- Plaspy acepta la conexión y detecta automáticamente el protocolo del rastreador para su correcto parseo

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de Teltonika para configurar el FMB230 (SMS, Teltonika Configurator u otras herramientas compatibles).
2. Ingrese el servidor de Plaspy como d.plaspy.com o, cuando se requiera una IP directa, 54.85.159.138.
3. Establezca el puerto de destino en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Proporcione el APN y, si corresponde, el nombre de usuario y la contraseña del APN para la SIM instalada.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo exigen.
7. Valide que el dispositivo esté reportando a Plaspy y que la plataforma esté recibiendo y procesando los mensajes correctamente.

## Comandos de configuración de ejemplo

El FMB230 puede configurarse con un comando por lotes de parámetros. El ejemplo público abajo muestra el formato común de la cadena de parámetros usada para establecer los valores APN, el servidor Plaspy, el puerto y una bandera de selección de transporte. Conserve los marcadores cuando los reemplace por los valores del APN de su operador.

- Comando por lotes de parámetros (ejemplo):

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y los campos anteriores:
- {{apn}} = nombre del APN de su operador móvil
- {{apnu}} = nombre de usuario del APN si su operador lo requiere
- {{apnp}} = contraseña del APN si su operador lo requiere
- 2004 establece la dirección del servidor a d.plaspy.com
- 2005 establece el puerto de destino a 8888
- 2006 es un selector de transporte o modo usado por el conjunto de parámetros del dispositivo; consulte la documentación de parámetros de Teltonika para el significado exacto de valores como 1

Este comando se suele enviar como un SMS por lotes o introducirse mediante una herramienta de configuración de Teltonika que acepte cadenas de parámetros crudas. Si usa SMS, envíe la línea anterior al número del dispositivo tras reemplazar los marcadores. Si usa una herramienta del fabricante, pegue la cadena en el campo de parámetros correspondiente y aplique.

## Notas de configuración

- Esta página muestra valores de configuración públicos; las versiones de firmware y la numeración de parámetros pueden variar. Confirme siempre el mapeo de parámetros con la lista de parámetros de Teltonika para su firmware.
- La elección entre TCP y UDP puede afectar las garantías de entrega y el comportamiento en la red. Si no está seguro, pruebe ambos transportes con su red y Plaspy para determinar cuál funciona mejor en su entorno.
- La cadena setparam proporcionada contiene marcadores para credenciales APN. Reemplace estos marcadores con los valores de su operador móvil.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que los valores de servidor y puerto deben ser consistentes entre los dispositivos soportados.
- Las herramientas del fabricante y los comandos SMS se usan comúnmente para el aprovisionamiento. Utilice las herramientas oficiales de Teltonika para configuraciones masivas o con interfaz gráfica cuando estén disponibles.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMB230 para que reporte a Plaspy ofrece una manera sencilla de centralizar datos de ubicación, eventos y estado del dispositivo en una sola plataforma de gestión de flotas. Para equipos que necesitan visibilidad y monitoreo operativo, usar el endpoint compartido de Plaspy simplifica la incorporación porque los mismos valores de puerto y servidor aplican a varios rastreadores y Plaspy se encarga de la detección automática de protocolos.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para las listas de parámetros específicas del dispositivo más recientes, notas de firmware y herramientas de configuración, verifique siempre los detalles en el sitio del fabricante https://www.teltonika-gps.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con las revisiones de firmware y hardware.
