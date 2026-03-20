---
slug: /suntech/st_340/configuration
id: st_340-configuration
sidebar_label: Configuration
title: Suntech - ST 340 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Suntech ST 340 y pasos prácticos para conectar el rastreador a Plaspy
keywords:
  - Configuración Suntech ST 340
  - Configuración ST 340 Plaspy
  - Configuración rastreador GPS Suntech
  - Configuración servidor ST340
  - Configuración SMS ST 340
  - Ajustes APN Suntech ST 340
  - Configuración GPRS ST 340
  - Configuración rastreador Plaspy
  - Instalación Suntech ST 340
  - Configuración plataforma seguimiento ST 340
---

# Suntech - Configuración del ST 340

Esta página recoge el contexto público de configuración para usar el rastreador Suntech ST 340 con Plaspy. Describe los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, explica el flujo común de configuración y proporciona ejemplos públicos de comandos SMS del fabricante que se usan habitualmente para preparar el ST 340 y ponerlo en funcionamiento con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo de cada rastreador. La configuración del fabricante puede variar según la versión de firmware, la revisión de hardware, el método del instalador y las herramientas del proveedor. El ST 340 puede configurarse mediante comandos SMS como los que se muestran en los ejemplos públicos; estas instrucciones se centran en los pasos prácticos para apuntar el dispositivo a Plaspy y verificar la conectividad.

## Visión general de la configuración

Configurar el ST 340 para Plaspy prepara el rastreador para enviar información de ubicación y eventos a la plataforma, de modo que los dispositivos aparezcan en la consola de flotas y reporten a un endpoint predecible. Los comandos públicos del fabricante se envían con frecuencia por SMS e incluyen la configuración del APN, el endpoint del servidor y los intervalos de reporte de telemetría.

- Apunte el rastreador al endpoint del servidor Plaspy para que el dispositivo entregue los datos de ubicación a la plataforma.
- Configure el APN y, si corresponde, el nombre de usuario y la contraseña del APN para que el dispositivo use datos móviles.
- Defina el intervalo de reporte para que Plaspy reciba actualizaciones con la frecuencia deseada.
- Aplique los ajustes mediante comandos SMS del fabricante o utilizando la herramienta de configuración oficial.
- Verifique que el dispositivo aparezca en Plaspy y que esté reportando como se espera.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y la plataforma detectará automáticamente el protocolo correcto.

## Requisitos habituales antes de la configuración

- Un ST 340 instalado y con batería cargada, con acceso a su número IMEI.
- Una SIM celular activa configurada para datos y SMS si va a usar la configuración por SMS.
- Credenciales APN del operador móvil (APN y, opcionalmente, usuario y contraseña del APN).
- Un teléfono capaz de enviar SMS al dispositivo o acceso a la herramienta de configuración del fabricante.
- Acceso al lugar de instalación para poder apagar y encender o reiniciar el rastreador si es necesario.
- El IMEI es necesario para derivar el ID de dispositivo que se usa en los comandos SMS del ST 340.

## Cómo se conecta este rastreador a Plaspy

El ST 340 se configura para informar al endpoint y puerto compartidos de Plaspy para que la plataforma reciba actualizaciones de ubicación y mensajes de estado. La detección automática de protocolo de Plaspy permite usar el mismo puerto y endpoint en los dispositivos compatibles.

- El dispositivo utiliza datos celulares (GPRS) para enviar telemetría al servidor de Plaspy.
- Es necesario configurar el APN para que el dispositivo pueda abrir una sesión de datos con el operador.
- El rastreador envía reportes periódicos a 54.85.159.138 en el puerto 8888 o a d.plaspy.com en el puerto 8888.
- Puede seleccionar UDP o TCP según el firmware del dispositivo o la preferencia del instalador.
- Una vez configurado, Plaspy detectará el protocolo del rastreador y procesará los mensajes recibidos para que el dispositivo sea visible en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Suntech para el ST 340, normalmente mediante comandos SMS o la herramienta del proveedor.
2. Confirme el IMEI del dispositivo y derive el ID de dispositivo de 9 dígitos requerido por la sintaxis SMS del ST 340 (ver ejemplos abajo).
3. Indique d.plaspy.com o 54.85.159.138 como servidor GPRS según el formato de comando SMS que espere el dispositivo.
4. Establezca el puerto 8888 para el endpoint del servidor.
5. Seleccione UDP o TCP si el ST 340 solicita elección de transporte durante la configuración.
6. Aplique o guarde la configuración usando los comandos SMS del fabricante o la herramienta de configuración.
7. Reinicie el dispositivo si el firmware lo requiere o si el instalador lo recomienda.
8. Valide que el dispositivo reporte a Plaspy comprobando que aparece en la plataforma y confirma actualizaciones periódicas.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del ST 340 se proporcionan como comandos SMS. El ID del dispositivo son los 9 dígitos extraídos del IMEI: use los 9 últimos números del IMEI excluyendo el dígito de control final. Por ejemplo, si el IMEI es 123456789012345, el ID de dispositivo en el ejemplo del fabricante sería 678901234.

Reemplace DEVICEID con el ID de dispositivo de 9 dígitos derivado cuando envíe estos comandos SMS.

1. Restablecimiento inicial opcional de fábrica (use sólo si es necesario en su instalación):

```
ST300CMD;DEVICEID;02;Reset
```

2. Establecer APN del operador y servidor GPRS. El cuarto campo es 1 si incluye nombre de usuario o contraseña del APN, de lo contrario ponga 0. Reemplace [apn], [apnu] y [apnp] por el APN del operador, el usuario del APN y la contraseña del APN según corresponda. El comando apunta el dispositivo a Plaspy por IP y puerto.

```
ST300NTW;DEVICEID;02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Notas:
- Si no proporciona usuario o contraseña del APN, cambie el 1 a 0 y deje [apnu] y [apnp] vacíos.
- También puede sustituir d.plaspy.com por la IP si el dispositivo acepta un nombre de host en su comando de red.

3. Establecer el intervalo de reporte a 60 segundos (ejemplo de configuración de reporte):

```
ST300RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

4. Comando para comprobar configuraciones actuales o solicitar una respuesta preestablecida:

```
ST300CMD;DEVICEID;02;PresetA
```

Envíe estos comandos como mensajes SMS al rastreador desde un número autorizado según la configuración del dispositivo.

## Notas de configuración

- Los ejemplos del fabricante para el ST 340 usan configuración por SMS; confirme si su firmware soporta SMS, una herramienta web o una utilidad de escritorio.
- Derive el ID de dispositivo a partir del IMEI exactamente como se muestra en el ejemplo del fabricante: últimos 9 dígitos excluyendo el dígito de control final del IMEI.
- Elija TCP o UDP según la preferencia del instalador y el soporte del firmware; Plaspy admite ambos y detectará el protocolo automáticamente.
- Mantenga los marcadores de posición [apnu] y [apnp] si su operador los requiere; de lo contrario, use 0 para la bandera de usuario/contraseña.
- Las revisiones de firmware y las herramientas del proveedor pueden cambiar el formato de comandos o añadir parámetros; consulte la documentación del fabricante ante cualquier duda.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 340 con Plaspy ofrece a las organizaciones ajustes de servidor y comportamiento de plataforma consistentes entre dispositivos. Apuntar el rastreador a Plaspy mediante el endpoint y puerto compartidos simplifica la integración y permite que la plataforma detecte automáticamente el protocolo de su dispositivo, facilitando la incorporación y reduciendo la complejidad de la configuración por unidad.

Learn more about Plaspy and how it manages device connectivity at https://www.plaspy.com. For device specific details, firmware changes, and the latest manufacturer instructions verify current information at http://www.suntechint.com/.
