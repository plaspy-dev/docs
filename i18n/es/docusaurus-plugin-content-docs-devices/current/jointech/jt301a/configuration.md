---
slug: /jointech/jt301a/configuration
id: jt301a-configuration
sidebar_label: Configuration
title: Jointech - JT301A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Jointech JT301A con Plaspy, con ajustes de servidor y comandos SMS prácticos
keywords:
  - Configuración Jointech JT301A
  - Configuración JT301A para Plaspy
  - Configuración rastreador Jointech
  - Configuración servidor JT301A
  - Configuración SMS JT301A
  - Configuración tracker Plaspy
  - Ajustes APN JT301A
  - Integración rastreador con Plaspy
  - Localizaciones LBS programadas JT301A
  - Documentación Jointech
---

# Jointech - Configuración JT301A

Esta página documenta el contexto de configuración pública para usar el rastreador de activos Jointech JT301A con Plaspy. Se enfoca en los pasos prácticos de configuración disponibles públicamente y en los ajustes exactos del servidor Plaspy que debe aplicar para que el JT301A envíe telemetría y estado a los paneles y alertas de Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello, esta página explica los ajustes específicos de Plaspy e incluye los comandos SMS del JT301A que están documentados públicamente para configurar GPRS y valores APN.

## Resumen de configuración

El objetivo de configurar el JT301A para Plaspy es preparar el dispositivo para enviar actualizaciones programadas de ubicación LBS y el estado de sensores al punto de ingestión de Plaspy, de modo que los activos sean visibles y accionables en la plataforma.

- Configure el dispositivo para que apunte al servidor Plaspy y así la telemetría llegue al endpoint correcto.
- Proporcione el APN y, si aplica, las credenciales APN para que el rastreador use datos móviles en los reportes programados.
- Seleccione la opción de transporte si es necesario y establezca el puerto compartido de Plaspy para que los mensajes sean aceptados.
- Valide la conectividad y confirme que el dispositivo comienza a reportar en Plaspy.
- Active el reporte de sensores para eventos como apertura de puertas e iluminación, de modo que Plaspy reciba alertas y cambios de estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP compatible
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una unidad JT301A cargada y encendida, lista para configurar.
- Una tarjeta SIM operativa con capacidad de datos o SMS, insertada según lo requiera su despliegue.
- El ID del dispositivo (device ID) conocido y disponible para usar en comandos SMS o herramientas del fabricante.
- Nombre del APN y, opcionalmente, usuario y contraseña APN provistos por su operador móvil.
- Acceso a un teléfono con capacidad SMS o la herramienta oficial de configuración de Jointech para enviar los comandos.
- Acceso básico a su cuenta Plaspy o contacto en la plataforma para confirmar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El JT301A se configura para enviar arreglos programados de ubicación LBS y eventos de sensores al punto de ingestión compartido de Plaspy en el puerto indicado. Plaspy recibe estos mensajes temporales, los asocia con el ID del dispositivo y proporciona visibilidad, alertas y reproducción histórica en la plataforma.

- El rastreador envía telemetría y mensajes de estado programados a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP en el puerto 8888; Plaspy aceptará cualquiera y determinará el protocolo automáticamente.
- Los eventos de sensores, como apertura de puerta o cambios de iluminación, se transmiten como mensajes de estado a Plaspy para generación de alertas.
- Plaspy ingiere los mensajes entrantes y los asocia al device ID para que los datos sean visibles en paneles y reportes.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Jointech para el JT301A, como comandos SMS o el software del fabricante.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar explícitamente el transporte.
5. Proporcione el APN y, si corresponde, el usuario y la contraseña APN de su proveedor móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo reporta a Plaspy comprobando la aparición del device ID y la telemetría entrante en la plataforma.

## Ejemplos de comandos de configuración

El JT301A puede configurarse usando mensajes SMS. Envíe estos comandos públicos en el orden mostrado. Reemplace los marcadores con sus valores reales.

- Escriba o ingrese el ID del dispositivo en el comando como [trackerID] antes de enviar.

1. Establecer servidor GPRS, puerto y APN
```text
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
- Reemplace [trackerID] con el ID del dispositivo.
- Reemplace [apn] con el nombre del APN de su operador.
- Este comando configura la IP del servidor GPRS, el puerto 8888 y el APN usado para datos.

2. (Opcional) Establecer usuario y contraseña APN cuando el proveedor requiere autenticación
```text
([trackerID],2,S24,129,1,[apnu],[apnp])
```
- Reemplace [apnu] con el usuario APN si es necesario.
- Reemplace [apnp] con la contraseña APN si es necesaria.
- Envíe este comando solo si su operador de red exige autenticación del APN.

Notas sobre los marcadores
- [trackerID] es el identificador del dispositivo impreso en el equipo o proporcionado por el fabricante.
- [apn] es la cadena del nombre del punto de acceso (APN) de su operador móvil.
- [apnu] y [apnp] son credenciales APN opcionales requeridas por algunos operadores.

Estos comandos son el patrón de configuración SMS documentado públicamente para la configuración GPRS y APN del JT301A. Después de enviarlos, permita que el dispositivo aplique los ajustes y se reinicie si es necesario.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros admitidos; consulte la documentación del fabricante para su unidad.
- Los comandos de usuario y contraseña APN son opcionales y solo necesarios cuando su operador requiere autenticación.
- Elija UDP o TCP según la confiabilidad de la red y las necesidades de su instalación. Plaspy admite ambos y detectará el protocolo automáticamente.
- El JT301A admite configuración mediante SMS según la documentación pública, así que tenga disponible un teléfono con capacidad de SMS al seguir estos comandos.
- Confirme siempre que el dispositivo reporta a Plaspy después de la configuración antes de desplegar el activo en campo.

## Por qué usar Plaspy con esta configuración

Usar el JT301A con Plaspy ofrece a los equipos logísticos visibilidad de activos económica y de larga duración mediante actualizaciones LBS periódicas y alertas basadas en sensores. La combinación de reportes programados, detección de apertura de puertas e iluminación y la ingestión en Plaspy permite monitoreo y notificaciones de eventos sin el costo de energía y datos de un rastreo GPS continuo.

Learn more about how Plaspy can ingest JT301A telemetry and provide dashboards and alerts at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer details verify setup guidance on the official Jointech site https://www.jointcontrols.com/
