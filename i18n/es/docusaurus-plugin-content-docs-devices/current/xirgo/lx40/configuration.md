---
slug: /xirgo/lx40/configuration
id: lx40-configuration
sidebar_label: Configuration
title: Xirgo - LX40 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo LX40 para apuntar el rastreador a Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración Xirgo LX40
  - Instalación Xirgo LX40
  - Configuración servidor Xirgo LX40
  - Configuración Xirgo LX40 Plaspy
  - Configuración rastreador GPS LX40
  - Configuración software de seguimiento LX40
  - Instalación seguimiento de vehículos LX40
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Configuración SMS LX40
---

# Xirgo - Configuración del LX40

Esta página describe el contexto público de configuración para usar el rastreador Xirgo LX40 con Plaspy. Aquí encontrará los ajustes de servidor prácticos y ejemplos de comandos que se usan con frecuencia para apuntar el LX40 a Plaspy, de modo que el dispositivo pueda reportar ubicación y telemetría a la plataforma. Cuando estén disponibles, se muestran y explican ejemplos de comandos SMS extraídos de contenido público de configuración del dispositivo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador en su punto de ingestión, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LX40 soporta configuración por SMS como se muestra a continuación; los integradores deben confirmar el significado exacto de los parámetros en la documentación de Xirgo antes de desplegar a gran escala.

## Resumen de la configuración

El objetivo de esta configuración es preparar el LX40 para que pueda comunicarse de forma confiable con Plaspy, validar la conectividad y aparecer como un dispositivo activo en la plataforma. El proceso suele implicar configurar el APN del equipo, apuntar el servidor GPRS a Plaspy, seleccionar el protocolo de transporte si es necesario y verificar el envío de datos.

- Configure parámetros de red móvil como el APN para que el dispositivo obtenga conectividad de datos.
- Apunte el LX40 al endpoint de servidor de Plaspy y al puerto compartido para que la telemetría llegue a la plataforma.
- Seleccione UDP o TCP en el dispositivo si la unidad requiere una selección de transporte explícita.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de aplicar los ajustes.
- Use SMS o la herramienta de configuración del fabricante según lo soportado para realizar los pasos de configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices sending to the same server and port are recognized

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo en uso para las conexiones entrantes.

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible para configuración por SMS o mediante la herramienta oficial de Xirgo según la preferencia del instalador.
- SIM activa con datos habilitados y credenciales APN correctas para el operador móvil.
- Capacidad de enviar y recibir SMS en la SIM, o una interfaz de configuración que permita enviar los comandos necesarios al LX40.
- Acceso al IMEI o identificador del dispositivo para confirmar que la unidad correcta está reportando a Plaspy.
- Cuenta de Plaspy o contacto en su flujo de aprovisionamiento Plaspy para verificar la visibilidad del dispositivo después de la configuración.
- Documentación del fabricante o notas de la versión del LX40 para verificar comportamientos específicos del firmware y la sintaxis de comandos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el LX40 envía su telemetría y datos de estado al endpoint y puerto compartidos de Plaspy para que la plataforma los ingiera, normalice y muestre en paneles e informes. El servidor de Plaspy y su detección automática de protocolos permiten que flotas mixtas y variantes de dispositivos informen usando el mismo endpoint.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo transmite ubicación y eventos por GPRS al endpoint de Plaspy especificado.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo establece una sesión en el puerto compartido.
- Una configuración exitosa hace que el LX40 sea visible en Plaspy, donde se pueden monitorear eventos, geocercas y telemetría.
- Los integradores pueden usar Plaspy para gestionar el ciclo de vida del dispositivo y recibir actualizaciones OTA cuando estén soportadas y provisionadas.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Xirgo o al software, o prepárese para enviar comandos SMS si su unidad LX40 lo soporta.
2. Ingrese la dirección del servidor Plaspy en la configuración del dispositivo, ya sea como el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo a 8888, que es el puerto que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS requeridos desde un número autorizado si utiliza configuración por SMS.
6. Reinicie el dispositivo si la documentación o el método de configuración lo indican como necesario.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en su instancia de Plaspy o confirmando la llegada de datos con su contacto en Plaspy.

Si usa comandos SMS para la configuración, ejecútelos en el orden que indique la documentación de Xirgo y luego verifique el reporte a Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos estilo SMS se ofrecen como ejemplos públicos de configuración para el LX40. Envíe estos comandos por SMS al número del dispositivo utilizado para la configuración. Mantenga el orden tal como se muestra.

- Set the operator APN
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explicación
- [apn] es la cadena APN del operador móvil necesaria para las conexiones de datos.
- [apnu] es el nombre de usuario del APN cuando el operador lo requiere.
- [apnp] es la contraseña del APN cuando el operador lo requiere.
Reemplace los marcadores con las credenciales de su operador exactamente como se requiera.

- Set the GPRS server to Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Explicación
- Este comando configura los parámetros del servidor GPRS para apuntar el LX40 a Plaspy usando el puerto 8888 y la IP pública 54.85.159.138.
- Los parámetros numéricos finales son específicos del fabricante. Verifique su significado exacto en la documentación de Xirgo para su nivel de firmware antes de aplicarlos.

Si prefiere usar direccionamiento por dominio y el dispositivo lo soporta, puede configurar el servidor a d.plaspy.com en lugar de la IP numérica mediante el comando equivalente del fabricante o la herramienta de configuración. Siempre confirme la sintaxis y el orden de parámetros con la documentación de Xirgo para su firmware.

## Notas de configuración

- El LX40 soporta configuración por SMS como se muestra, pero muchos integradores utilizan las herramientas oficiales de Xirgo para aprovisionamiento masivo y scripting.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de los comandos o el orden de los parámetros. Consulte la documentación del LX40 para detalles específicos del firmware.
- Elija UDP o TCP según su red y necesidades de instalación. Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo.
- Al usar comandos SMS, envíelos desde un número autorizado para la configuración del dispositivo y verifique la recepción comprobando los mensajes de respuesta del equipo si este devuelve confirmaciones.
- Siempre pruebe la configuración en un solo dispositivo y confirme la visibilidad en Plaspy antes de desplegar cambios a toda la flota.

## Por qué usar Plaspy con esta configuración

Configurar el Xirgo LX40 para reportar a Plaspy ofrece a las flotas una forma centralizada y consistente de recopilar ubicación, eventos de conductor y telemetría del vehículo. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la integración entre distintos dispositivos y variantes de firmware, reduciendo la complejidad de configuración por dispositivo.

Para saber más sobre Plaspy y cómo soporta rastreadores como el LX40 visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, comportamientos de firmware y detalles de configuración, verifique la información vigente en el sitio del fabricante https://xirgo.com/ ya que los métodos y parámetros de configuración pueden cambiar con revisiones de firmware y hardware.
