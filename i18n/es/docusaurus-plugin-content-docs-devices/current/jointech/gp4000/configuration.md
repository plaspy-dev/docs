---
slug: /jointech/gp4000/configuration
id: gp4000-configuration
sidebar_label: Configuration
title: Jointech - GP4000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech GP4000 para integrarlo con Plaspy incluye servidor APN comandos SMS y flujo de configuración
keywords:
  - Configuración Jointech GP4000
  - Instalación Jointech GP4000
  - Configuración GP4000 Plaspy
  - Configuración de servidor Jointech GP4000
  - Configuración del rastreador GPS GP4000
  - Configuración del rastreador Jointech
  - Configuración de software de seguimiento GP4000
  - Configuración APN Jointech GP4000
  - Integración de rastreador GPS Plaspy
  - Rastreo de vehículos GP4000
---

# Jointech - GP4000 Configuración

Esta página ofrece contexto público de configuración para usar el rastreador Jointech GP4000 con Plaspy. Explica los parámetros de servidor compartidos que Plaspy requiere, describe el flujo típico de configuración y recopila los comandos SMS públicos que los fabricantes suelen publicar para la configuración de GPRS y APN.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del equipo. Los pasos en el lado del fabricante para configurar un GP4000 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los ejemplos aquí deben tomarse como orientación pública y práctica; confirme los detalles específicos del equipo con el fabricante cuando sea necesario.

## Resumen de la configuración

Esta sección resume lo que necesita preparar para que el GP4000 se comunique con Plaspy y para validar que el dispositivo sea visible en la plataforma.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así la plataforma reciba las ubicaciones y eventos.
- Proporcione el APN correcto y las credenciales opcionales del APN para la tarjeta SIM para habilitar los datos GPRS.
- Seleccione el tipo de transporte si el equipo lo solicita y asegúrese de que el dispositivo use el puerto compartido de Plaspy.
- Verifique la conectividad y que el ID del rastreador esté registrado o sea reconocido por su cuenta de Plaspy.
- Valide la transmisión en tiempo real y el reenvío de eventos en Plaspy después de aplicar los ajustes.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes del servidor de Plaspy al configurar el GP4000. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos habituales antes de la configuración

- Un dispositivo GP4000 con alimentación y en funcionamiento con acceso a su interfaz de configuración
- Una tarjeta SIM activa con datos habilitados y los valores APN del operador disponibles
- El IMEI del equipo o el ID del rastreador para incluir en mensajes SMS o en la configuración
- Acceso al método de configuración Jointech recomendado para su unidad, como comandos SMS o la herramienta del proveedor
- Una forma de enviar comandos SMS desde un teléfono o una herramienta de gestión si usa configuración vía SMS
- Acceso a Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GP4000 envía fijaciones de posición, telemetría e informes de eventos al endpoint y puerto compartidos del servidor de Plaspy. Plaspy recibe estos mensajes y los asigna al registro de dispositivo correspondiente usando el ID del rastreador o el IMEI.

- El rastreador se configura para reportar al dominio o IP del servidor de Plaspy y al puerto 8888
- Los datos se envían por el protocolo de transporte seleccionado, UDP o TCP según la opción del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante
- Las actualizaciones de posición y los eventos de alarma se muestran en los paneles y registros de Plaspy
- La validación se realiza confirmando que el dispositivo esté reportando activamente a Plaspy después de la configuración

## Flujo de trabajo común de configuración

Siga estos pasos prácticos para configurar un GP4000 para Plaspy usando métodos públicos como comandos SMS o la herramienta oficial de configuración.

1. Acceda al método de configuración oficial de Jointech para su unidad GP4000, como los comandos por SMS o la herramienta de configuración del proveedor.
2. Prepare los datos del APN de su operador y, si aplica, el usuario y la contraseña del APN.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo exija el método de configuración.
4. Configure el puerto 8888 en la configuración del dispositivo. Tenga en cuenta que Plaspy usa el mismo puerto para todos los equipos.
5. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
6. Aplique o guarde la configuración y reinicie el equipo si el procedimiento indica un reinicio.
7. Valide que el GP4000 reporte a Plaspy y que los mensajes de posición y eventos aparezcan en la plataforma.

## Ejemplo de comandos de configuración

El Jointech GP4000 puede configurarse mediante comandos SMS. Los siguientes comandos públicos muestran la sintaxis típica de SMS. Reemplace los marcadores con los valores de su dispositivo y los datos APN de su operador.

- Nota sobre los marcadores
  - [trackerID] debe sustituirse por el IMEI de su equipo o el ID del rastreador según lo requiera Jointech
  - [apn] es la cadena APN del operador móvil para datos
  - [apnu] y [apnp] son el usuario y la contraseña del APN opcionales si su operador los solicita

1. Establecer el servidor GPRS y el APN
```text
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
o usando el dominio del servidor
```text
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2. (Opcional) Configurar usuario y contraseña del APN si lo requiere el operador
```text
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Instrucciones
- Envíe cada comando como SMS desde el número de teléfono registrado para el rastreador, o siga el procedimiento de Jointech para el envío de SMS de configuración.
- El comando de usuario y contraseña del APN solo es necesario cuando su operador móvil solicita credenciales además de la cadena APN.
- Si el dispositivo requiere reinicio tras aplicar los comandos SMS, realice el reinicio como parte del flujo de trabajo.

## Notas de configuración

- Las versiones de firmware de Jointech y los formatos de comandos de configuración pueden variar. Confirme las plantillas SMS exactas con la documentación de su dispositivo.
- La configuración basada en SMS es comúnmente compatible con el GP4000, pero también pueden existir herramientas del proveedor o una utilidad de configuración para PC que resulten preferibles para aprovisionamiento masivo.
- Elija TCP o UDP según la fiabilidad de su red y la orientación del instalador; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles. Asegúrese de que el puerto 8888 esté configurado y no esté bloqueado por su operador o red.
- Mantenga seguras las credenciales del APN y verifique los valores APN con su operador móvil antes de aplicarlos.

## Por qué usar Plaspy con esta configuración

Usar el Jointech GP4000 con Plaspy ofrece visibilidad confiable de la ubicación del vehículo, reportes de eventos y telemetría para operaciones de flota. El hardware probado del GP4000 combinado con la detección automática de protocolos y el endpoint unificado de Plaspy simplifica la incorporación de dispositivos y ayuda a que los equipos obtengan datos consistentes y en tiempo real en una sola plataforma para supervisión e informes.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration details and firmware behavior on the manufacturer site https://www.jointcontrols.com/. Manufacturer specifications and setup methods can change over time so confirming current documentation is recommended.
