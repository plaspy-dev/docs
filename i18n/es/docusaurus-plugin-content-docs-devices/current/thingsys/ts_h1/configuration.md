---
slug: /thingsys/ts_h1/configuration
id: ts_h1-configuration
sidebar_label: Configuration
title: ThingSys - TS-H1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys TS H1 con parámetros de servidor Plaspy y comandos SMS para integración rápida
keywords:
  - Configuración ThingSys TS H1
  - Configuración TS H1
  - Configuración servidor TS H1
  - Integración TS H1 Plaspy
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración plataforma rastreo vehicular
  - Configuración APN rastreador
  - Comandos configuración SMS
  - Configuración seguimiento GPRS
---

# ThingSys - Configuración TS-H1

Esta página documenta el contexto público de configuración para usar el rastreador GPS ThingSys TS-H1 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS que el fabricante publica y que se utilizan en instalaciones públicas, para que usted pueda preparar el equipo y permitir su comunicación con la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador automáticamente; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TS-H1 puede configurarse mediante comandos SMS o con la herramienta del fabricante; aquí se muestran los comandos SMS públicos que se usan comúnmente para establecer el APN y los parámetros del servidor GPRS para la integración con Plaspy.

## Resumen de configuración

Preparar el TS-H1 para Plaspy implica configurar el acceso a la red y el endpoint del servidor GPRS para que el rastreador pueda reportar ubicación y eventos a la plataforma. El flujo público de comandos SMS incluye establecer las credenciales APN y dirigir el dispositivo al endpoint y puerto del servidor Plaspy.

- Configure el APN del dispositivo, usuario APN y contraseña APN para que la SIM tenga conectividad de datos.
- Establezca el servidor GPRS hacia Plaspy para que el rastreador envíe reportes al endpoint correcto.
- Seleccione el transporte (UDP o TCP) si el equipo requiere elegir uno y guarde los ajustes.
- Valide la conectividad y verifique que el dispositivo esté reportando a Plaspy para que sea visible en la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el TS-H1:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son la información pública del endpoint Plaspy para la configuración de dispositivos y deben aplicarse al establecer el servidor GPRS o el dominio del servidor en el equipo.

## Requisitos típicos antes de la configuración

- El dispositivo debe estar encendido y accesible para la configuración, con la batería cargada o conectado a alimentación.
- Tener una SIM válida instalada con servicio de datos habilitado y conocer las credenciales APN del operador.
- Acceso a los comandos SMS o a la herramienta oficial de configuración ThingSys, según lo proporcione el fabricante.
- Conocer la contraseña por defecto del dispositivo usada en los comandos; en los ejemplos públicos se usa 123456 como contraseña por defecto.
- Cobertura GSM/GPRS básica en el lugar de instalación para permitir que el rastreador se registre en la red.

## Cómo se conecta este rastreador a Plaspy

El TS-H1 se configura para reportar ubicación y eventos al endpoint y puerto compartidos de Plaspy para que los dispositivos sean visibles en la plataforma. La configuración dirige el tráfico GPRS del rastreador hacia Plaspy, y Plaspy se encarga de la identificación del protocolo y del parseo de la telemetría de forma automática.

- El rastreador envía datos de ubicación y mensajes de evento vía GPRS a d.plaspy.com o a la IP 54.85.159.138.
- El tráfico se dirige al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- El equipo puede usar UDP o TCP como transporte; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Una vez accesible el dispositivo, Plaspy puede mostrar actualizaciones de posición y recibir las alertas que envíe el rastreador.
- Funciones del fabricante como alertas por manipulación y respuestas de posición se reportan al mismo endpoint de Plaspy cuando están configuradas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración ThingSys o al software, o prepárese para usar comandos SMS provistos por ThingSys.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888 para coincidir con el puerto público de escucha de Plaspy.
4. Elija UDP o TCP si el TS-H1 requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo y confirme que los ajustes fueron aceptados.
6. Reinicie el equipo si el fabricante lo requiere para activar los cambios de red.
7. Valide que el dispositivo reporte a Plaspy verificando la visibilidad en la plataforma y observando la entrada de mensajes de ubicación o eventos.

Si opta por la configuración vía SMS, utilice los comandos públicos en el orden recomendado por ThingSys e incluya la contraseña del dispositivo cuando sea necesario.

## Ejemplos de comandos de configuración

El TS-H1 puede configurarse enviando comandos SMS al equipo. Los siguientes comandos son ejemplos públicos proporcionados por ThingSys. La contraseña de muestra que aparece en el contenido público es 123456 y se usa en varios comandos. Reemplace los marcadores de APN con los valores correctos de su operador.

- Reinicio de fábrica opcional inicial (usar solo cuando sea necesario para la configuración inicial)
```
FORMAT
```

- Configurar el APN del operador
```
apn123456 {{apn}}
```
Explicación: reemplace {{apn}} con la cadena APN de su operador móvil.

- Configurar el usuario APN
```
apnuser123456 {{apnu}}
```
Explicación: reemplace {{apnu}} con el usuario APN si su operador lo requiere. Si no es necesario, a menudo puede dejarse en blanco.

- Configurar la contraseña APN
```
apnpasswd123456 {{apnp}}
```
Explicación: reemplace {{apnp}} con la contraseña APN si su operador lo exige.

- Establecer el servidor GPRS a Plaspy por IP y puerto
```
ip54.85.159.138 8888
```
Nota: Este comando público establece el servidor en la IP de Plaspy 54.85.159.138 y el puerto compartido 8888. También puede configurar el dispositivo para usar el dominio d.plaspy.com si el equipo acepta un nombre de host en lugar de una IP.

- Verificar la configuración actual
```
CXZT
```
Explicación: Use este comando de verificación para solicitar al dispositivo que devuelva su configuración actual.

Mantenga el orden de comandos cuando sea importante. Use la contraseña por defecto (123456) donde aparece en los ejemplos y reemplace los marcadores con los valores APN de su operador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; verifique el conjunto de comandos para la versión de firmware de su dispositivo antes de aplicar cambios.
- Los comandos SMS públicos del TS-H1 muestran la configuración por SMS; algunas instalaciones pueden preferir la herramienta oficial de ThingSys si está disponible.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy soporta ambos y detectará el protocolo del rastreador automáticamente.
- Verifique siempre los valores de APN, usuario APN y contraseña APN con el operador móvil para asegurar la conectividad GPRS.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor en flotas.

## Por qué usar Plaspy con esta configuración

Configurar el ThingSys TS-H1 para reportar a Plaspy ofrece una forma práctica de centralizar los datos de ubicación y eventos de los dispositivos en una única plataforma de monitoreo. Usar los ajustes de servidor compartidos de Plaspy y los comandos SMS públicos permite a los técnicos preparar los equipos para el despliegue y verificar la conectividad rápidamente.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance for the TS H1, please verify current information on the ThingSys website https://www.thingsys.com/.
