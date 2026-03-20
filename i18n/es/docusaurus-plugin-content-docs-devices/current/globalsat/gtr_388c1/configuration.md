---
slug: /globalsat/gtr_388c1/configuration
id: gtr_388c1-configuration
sidebar_label: Configuration
title: GlobalSat - GTR-388C1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat GTR-388C1 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración GlobalSat GTR-388C1
  - Configurar GTR-388C1
  - GTR-388C1 configuración Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración SMS rastreador
  - Ajustes servidor Plaspy
  - Configuración rastreador vehicular
  - Configuración GPS para eBike
  - Configuración rastreador motocicleta
  - Configuración rastreador compacto
---

# GlobalSat - GTR-388C1: Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador GlobalSat GTR-388C1 con la plataforma Plaspy. Describe los ajustes compartidos del servidor Plaspy y los comandos públicos y el flujo de trabajo práctico que se utilizan para apuntar el dispositivo a Plaspy y permitir el seguimiento en tiempo real y la ingestión de telemetría.

Plaspy utiliza un mismo endpoint y puerto de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo a continuación provienen de contenido público de configuración del dispositivo e ilustran el uso típico de comandos SMS y el manejo de checksum cuando se prepara el GTR-388C1 para Plaspy.

## Resumen de la configuración

El objetivo de este proceso es dejar el GTR-388C1 preparado para reportar posición GNSS y telemetría del equipo a la plataforma Plaspy utilizando el endpoint y puerto compartidos de Plaspy. Los comandos públicos que se muestran a continuación emplean el método de configuración por SMS disponible para esta familia de rastreadores; GlobalSat también puede ofrecer herramientas alternativas de configuración o software.

- Configurar el rastreador para enviar datos al servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy
- Insertar los valores APN y credenciales necesarios para que el dispositivo pueda usar datos móviles y alcanzar el servidor
- Establecer el puerto de destino usado por Plaspy, que es el mismo para todos los dispositivos soportados
- Elegir UDP o TCP en el dispositivo si el firmware requiere selección explícita del transporte
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy después de la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible TCP o UDP en el puerto 8888 según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se comunica con el servidor

## Requisitos típicos antes de la configuración

- Un dispositivo GTR-388C1 alimentado y accesible, capaz de recibir comandos de configuración por SMS
- Una tarjeta SIM funcional con un plan de datos activo y los valores APN correctos para su operador móvil
- El IMEI del dispositivo disponible para usar en los comandos SMS e identificación del equipo
- Acceso al método oficial de configuración del fabricante, como el formato de comandos SMS o las herramientas del proveedor
- Un teléfono o un gateway SMS capaz de enviar la cadena de comando al rastreador
- Opcionalmente, un método para reiniciar el rastreador de forma remota o local después de aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el GTR-388C1 envía posiciones GNSS y telemetría de eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y los muestra en paneles, alertas e informes para que flotas y operadores puedan supervisar ubicación y eventos del dispositivo en tiempo real.

- El rastreador reporta al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según el firmware del dispositivo y la elección del instalador
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el registro del dispositivo correspondiente
- Las actualizaciones de posición y los eventos de E/S se hacen visibles en Plaspy para seguimiento en vivo y reproducción histórica
- Los comandos de configuración en el dispositivo pueden entregarse por SMS según los formatos públicos de GlobalSat

## Flujo común de configuración

1. Acceda al método oficial de configuración de GlobalSat para el GTR-388C1, ya sean comandos SMS o la herramienta del proveedor indicada en la documentación del fabricante.
2. Prepare la cadena de comando reemplazando los marcadores como el IMEI del dispositivo y los valores APN [apn], [apnu] y [apnp].
3. Introduzca d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como destino del servidor en el comando.
4. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo requiere la selección explícita del transporte.
5. Envíe el SMS de configuración al dispositivo y aplique o guarde los ajustes según el procedimiento del equipo.
6. Reinicie o haga reboot del dispositivo si es necesario para cargar la nueva configuración.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la lista de dispositivos de la plataforma o monitoreando las conexiones entrantes al endpoint compartido de Plaspy.

## Ejemplos de comandos de configuración

Los siguientes comandos se derivan de contenido público de configuración para el GTR-388C1. Son comandos SMS. Preserve los marcadores y calcule el checksum según lo requiera el dispositivo.

Format note shown in the public content
TSPRXAB27GHKLMnaicz*U!

Primary setup command
Replace [imei] with the device IMEI and [apn], [apnu], [apnp] with your operator APN settings. Compute the checksum for the characters before the asterisk and place the two-character uppercase hex checksum in the [checksum] placeholder.

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Optional reboot command
This command reboots the device to apply changes. Compute and insert the checksum for the command portion before the asterisk.

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Explicación del checksum
- El guion público muestra que el checksum se calcula haciendo XOR de los códigos de carácter de la cadena de comando hasta, pero sin incluir, el asterisco; luego se convierte el resultado a un valor hexadecimal de dos dígitos en mayúsculas. Inserte ese valor hex en el marcador correspondiente, por ejemplo [checksum].

Descripción breve de los marcadores
- [imei] — número IMEI del dispositivo usado para dirigir el SMS al rastreador
- [apn] — Nombre del Punto de Acceso (APN) del operador de la SIM
- [apnu] — Nombre de usuario del APN si el operador lo requiere
- [apnp] — Contraseña del APN si el operador lo requiere
- [checksum] y [checksumreeboot] — valores de checksum en hexadecimal de dos caracteres en mayúsculas, computados a partir del texto del comando antes del asterisco

## Notas de configuración

- El firmware y las SKU regionales pueden alterar los comandos y parámetros disponibles; verifique el conjunto de comandos exacto con la documentación de GlobalSat para su firmware.
- El contenido público del GTR-388C1 muestra la configuración por SMS, pero pueden existir herramientas del proveedor o métodos OTA según la implementación.
- Cuando el dispositivo requiere selección de transporte, tanto TCP como UDP son compatibles para llegar a Plaspy en el puerto 8888; elija el transporte que se ajuste a su red y al comportamiento del firmware.
- Confirme siempre el IMEI y los valores APN antes de enviar comandos SMS para evitar una mala configuración.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat GTR-388C1 para reportar a Plaspy ofrece a los operadores visibilidad compacta y fiable en tiempo real para vehículos pequeños y flotas de dos ruedas. La batería de respaldo del dispositivo, su carcasa robusta y el rendimiento GNSS, junto con la ingestión y el mapeo de Plaspy, permiten obtener ubicación continua, reporte de eventos e información operativa.

Learn more about how Plaspy supports device integrations and fleet workflows at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and configuration methods verify details on the GlobalSat official site https://www.globalsat.com.tw/ as manufacturer specifications and setup methods may change over time.
