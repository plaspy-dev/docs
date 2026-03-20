---
slug: /atrack/as700/configuration
id: as700-configuration
sidebar_label: Configuration
title: ATrack - AS700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ATrack AS700 a Plaspy con ajustes de servidor compartidos y comandos prácticos
keywords:
  - Configuración ATrack AS700
  - Instalación ATrack AS700
  - Configuración AS700 Plaspy
  - Configuración del servidor AS700
  - Configuración del rastreador GPS ATrack
  - Configuración rastreador LTE AS700
  - Configuración seguimiento de activos AS700
  - Configuración gestión de flotas AS700
  - Configuración del dispositivo AS700
  - Configuración plataforma GPS AS700
---

# ATrack - Configuración del AS700

Esta página describe el contexto público de configuración para usar el rastreador ATrack AS700 con Plaspy. Consolida los ajustes de servidor compartidos que Plaspy requiere y presenta comandos prácticos de dispositivo y orientación de flujo de trabajo públicamente disponibles para apuntar un AS700 a la plataforma Plaspy y permitir el envío de telemetría y ubicación.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice estas instrucciones públicas como un punto de partida práctico y confirme los detalles del equipo con la documentación del fabricante cuando sea necesario.

## Visión general de la configuración

Configurar el AS700 para Plaspy significa preparar el dispositivo para enviar telemetría GNSS, de sensores y de energía al endpoint de ingestión de Plaspy y confirmar que el dispositivo sea visible en la plataforma. Las siguientes tareas describen el propósito práctico del proceso de configuración.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los paquetes telemáticos lleguen a la plataforma.
- Configurar el comportamiento de reporte y los desencadenantes de eventos, como movimiento o eventos ACC, para actualizaciones oportunas.
- Asegurarse de que el dispositivo use formatos de payload binarios o compatibles aceptados por Plaspy y que el transporte sea el correcto.
- Validar la conectividad celular y los ajustes de APN para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Confirmar la visibilidad del dispositivo en Plaspy y verificar telemetría como fixes GNSS y estado de batería o solar.

## Configuración del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS y referencias de hostname.
- IP del servidor 54.85.159.138 como la dirección pública de ingestión de Plaspy.
- Puerto 8888 que Plaspy utiliza para todos los rastreadores.
- Soporte de transporte para UDP o TCP; el AS700 puede configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma usa el mismo puerto en los dispositivos compatibles.

## Requisitos previos típicos

- Un AS700 cargado con energía solar o de batería suficiente para pruebas y configuración.
- Una suscripción celular activa en una SIM o eSIM compatible y los valores de APN correctos para la red móvil.
- Acceso a herramientas de configuración del fabricante como ATrack Device Management (ADM) vía Bluetooth o USB Type-C, o una interfaz de comandos AT según lo descrito en la documentación del dispositivo.
- Los valores de APN, nombre de usuario APN y contraseña APN de su proveedor para rellenar los marcadores {{apn}}, {{apnu}}, {{apnp}} si se requieren.
- Conocimientos básicos sobre si usará UDP o TCP como transporte para poder seleccionar el protocolo al configurar el dispositivo.
- Acceso administrativo a Plaspy para verificar que el dispositivo aparece en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El AS700 transmite telemetría de ubicación, sensores y energía a través del enlace celular hacia el endpoint y puerto compartido de Plaspy. Plaspy ingiere estos paquetes y los asocia al registro del dispositivo utilizando el protocolo del rastreador que detecta automáticamente.

- El dispositivo abre una sesión de datos usando el APN configurado y se conecta a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- En el dispositivo se selecciona el transporte UDP o TCP; Plaspy acepta ambos y detecta automáticamente el protocolo en uso.
- Los fixes GNSS, la telemetría de sensores Bluetooth y el estado de batería/solar se envían según los payloads de reporte configurados.
- Los reportes impulsados por eventos, como disparos por ACC o movimiento, generan paquetes inmediatos hacia Plaspy para alertas en tiempo real.
- Una vez conectado, Plaspy ofrece visibilidad mediante paneles, reportes históricos y alertas basadas en la telemetría recibida.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante, como ADM por Bluetooth o USB, o a una interfaz de comandos AT soportada por ATrack.
2. Ingrese el servidor Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor o GPRS del dispositivo.
3. Establezca el puerto en 8888 que Plaspy utiliza para todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo solicita selección de transporte.
5. Configure los ajustes de APN incluyendo {{apn}}, {{apnu}} y {{apnp}} según lo provea su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren reinicio para activar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del dispositivo en la plataforma y confirmando telemetría reciente.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del AS700 usan comandos estilo AT. Preserve el orden de comandos donde se indica y reemplace los marcadores con las credenciales APN de su operador.

- Configurar comportamiento de evento ACC y reportes para ACC encendido y apagado, y aplicar una regla de reacción:
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer un intervalo de seguimiento/reportes de 60 segundos:
```text
AT$TRAC=1,60,,,,,2
```

- Poner el dispositivo en modo binario (formato de payload):
```text
AT$FORM=1,@P,0,""
```

- Configurar servidor GPRS y ajustes de APN apuntando a Plaspy. Reemplace {{apn}}, {{apnu}}, {{apnp}} con los valores de su operador. Este ejemplo usa la IP del servidor Plaspy y el puerto 8888:
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

- Consultar estado del dispositivo e información básica:
```text
AT$INFO=?
```

Notas sobre los marcadores
- {{apn}} es el APN de su red móvil.
- {{apnu}} es el nombre de usuario del APN cuando el operador lo requiere.
- {{apnp}} es la contraseña del APN cuando el operador lo requiere.

Estos comandos reflejan ejemplos públicos de configuración. Use ADM o la herramienta del fabricante si prefiere un método de configuración gráfica.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros soportados; confirme siempre los comandos según la versión de firmware del AS700 en uso.
- Elija UDP para menor overhead y entrega típicamente más rápida, o TCP cuando prefiera un transporte persistente y orientado a conexión; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El comando GPRS AT mostrado arriba usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888; puede usar d.plaspy.com cuando el dispositivo soporte DNS.
- Si utiliza marcadores para las credenciales APN, asegúrese de reemplazarlos por los valores exactos de su proveedor celular antes de aplicar la configuración.
- La configuración puede realizarse vía ADM por Bluetooth o USB Type-C o mediante la interfaz AT, según el método de configuración del AS700 usado en su instalación.

## Por qué usar Plaspy con esta configuración

Usar el AS700 con Plaspy ofrece una forma práctica de combinar la robustez del hardware y la operación a largo plazo con asistencia solar, junto con una plataforma telemática unificada. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo simplifican la incorporación de múltiples dispositivos y reducen la fricción por dispositivo en la configuración, permitiendo visibilidad confiable para contenedores, remolques, generadores y otros activos remotos.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, detalles de firmware y las últimas instrucciones del fabricante, verifique la información en el sitio de ATrack https://www.atrack.com.tw/ ya que las especificaciones y procedimientos de configuración del fabricante pueden cambiar con el tiempo.
