---
slug: /topfly/tld2_d/configuration
id: tld2_d-configuration
sidebar_label: Configuration
title: TopFly - TLD2-D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del tracker TopFly TLD2-D para apuntar al servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración TopFly TLD2 D
  - instalación TopFly TLD2 D
  - configuración rastreador GPS TopFly
  - configuración servidor TLD2 D
  - configuración rastreador OBDII Plaspy
  - configuración rastreador Plaspy
  - configuración seguimiento de vehículos
  - integración telemetría de flotas
  - configuración SMS TLD2 D
  - guía de compatibilidad Plaspy
---

# TopFly - Configuración TLD2-D

Esta página describe el contexto público de configuración para usar el tracker TopFly TLD2-D con Plaspy. Se centra en los ajustes y comandos accesibles públicamente que le permitirán apuntar el dispositivo a Plaspy y verificar la comunicación. El contenido refleja los valores de servidor de Plaspy y comandos de ejemplo que forman parte del flujo público de configuración del TLD2-D.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TLD2-D admite configuración por SMS como se muestra en los comandos de ejemplo más abajo, pero usted debe confirmar el procedimiento preciso con la documentación de TopFly antes de aplicar ajustes en producción.

## Resumen de la configuración

Este proceso prepara el TLD2-D para comunicarse con Plaspy configurando parámetros de red, intervalos de actualización y el endpoint remoto del servidor. El objetivo es permitir la entrega fiable de posiciones GNSS y telemetría CAN BUS a la plataforma Plaspy con el menor esfuerzo del instalador.

- Configure el APN y el servidor GPRS del dispositivo para que apunten a Plaspy y la telemetría llegue al endpoint correcto.
- Elija el protocolo de transporte (UDP o TCP) y establezca el puerto compartido de Plaspy que usan todos los dispositivos.
- Defina un intervalo de reporte acorde con la política de su flota para equilibrar la puntualidad y el uso de datos.
- Valide que el dispositivo pueda registrarse en la red móvil y enviar paquetes a Plaspy.
- Confirme que el dispositivo aparece en Plaspy y que la ubicación, CAN BUS y datos de sensores se muestran correctamente.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy which identifies the tracker protocol after the device connects

Estos valores son los ajustes públicos de Plaspy que debe ingresar en el dispositivo TopFly o enviar por SMS cuando dirija el tracker a la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Confirme que el TLD2-D está alimentado y conectado al puerto OBDII del vehículo o que dispone de alimentación alternativa.
- Inserte una nano SIM funcional con capacidad de datos o SMS y el APN correcto proporcionado por su operador móvil.
- Tenga a mano la contraseña predeterminada del dispositivo para la configuración por SMS si el tracker la requiere (los comandos de ejemplo usan 0000).
- Acceso al método de envío de comandos SMS de TopFly o a la herramienta de configuración del proveedor necesaria para transmitir los ajustes al dispositivo.
- Una cuenta en Plaspy y permisos para agregar o monitorear el nuevo dispositivo dentro de su espacio de trabajo en la plataforma.
- Un plan de pruebas para verificar ubicación, telemetría CAN BUS e informes de eventos tras la configuración.

## Cómo se conecta este tracker a Plaspy

El TLD2-D se configura para reportar posiciones GNSS, telemetría CAN BUS y eventos de sensores al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos del dispositivo para monitoreo e informes.

- El tracker se apunta al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 y usa el puerto 8888 para la telemetría saliente.
- El transporte puede ser UDP o TCP según las opciones del dispositivo; puede configurarse para usar cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del tracker después de la primera conexión, por lo que no es necesario seleccionar explícitamente el protocolo en la plataforma.
- El dispositivo envía actualizaciones periódicas de ubicación y telemetría según el intervalo de reporte configurado para habilitar mapeo en vivo y registro histórico.
- Los informes de eventos, como cambios de ignición, conducción brusca, actualizaciones de sensores BLE y datos CAN BUS, se entregan a Plaspy para alertas y análisis.

## Flujo de configuración típico

1. Acceda al método oficial de configuración TopFly para el TLD2-D, como la interfaz de comandos SMS o la herramienta de configuración proporcionada por el vendedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 al configurar el destino del servidor GPRS.
3. Establezca el puerto en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).
4. Elija UDP o TCP en el dispositivo si se requiere selección de transporte.
5. Configure el APN del dispositivo y cualquier usuario o contraseña de APN necesarios para que coincidan con los ajustes de su SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte correctamente a Plaspy y que aparezca en su espacio de trabajo con la telemetría esperada.

## Comandos de configuración de ejemplo

El TLD2-D admite configuración por SMS. Los siguientes comandos de ejemplo públicos se envían al dispositivo como mensajes SMS. La configuración de muestra usa la contraseña del dispositivo 0000 que es la predeterminada. Conserve los marcadores de posición al reemplazarlos por sus valores de operador.

- Establecer la zona horaria del dispositivo a UTC 0
```
GMT,0000,0#
```

- Establecer el APN del operador con marcadores de posición para APN, usuario APN y contraseña APN
```
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: reemplace [apn] por el APN de su operador, [apnu] por el usuario APN si se requiere y [apnp] por la contraseña APN si se requiere. Si no se necesita usuario o contraseña, muchos operadores aceptan valores vacíos o su omisión según la sintaxis del fabricante.

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```
Nota: Alternativamente puede configurar el servidor usando el dominio d.plaspy.com cuando el método de configuración del dispositivo lo soporte.

- Establecer el intervalo de reporte a 60 segundos
```
TIMER,0000,60:60:0:0#
```
Estos comandos son ejemplos públicos de la documentación de configuración de TopFly. Use la sintaxis SMS exacta requerida por la versión de firmware de su dispositivo y confirme la contraseña predeterminada o cualquier regla de número de teléfono origen requerida con TopFly.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; verifique el formato SMS exacto para la versión de firmware de su dispositivo.
- El TLD2-D admite múltiples métodos de transporte; elija UDP o TCP según su preferencia operativa y el comportamiento de la red, y apunte a Plaspy en el puerto 8888.
- La configuración por SMS es una opción común mostrada aquí, pero TopFly también puede ofrecer herramientas del proveedor, un portal web o opciones de gestión remota según el dispositivo y su flujo de aprovisionamiento.
- Mantenga un registro de los ajustes del APN y cualquier marcador de posición usado para que reaprovisionamientos futuros o cambios de SIM sean sencillos.
- Plaspy usa el mismo puerto en los dispositivos compatibles y detecta automáticamente el protocolo, reduciendo la configuración necesaria por dispositivo en el lado del servidor.

## Por qué usar Plaspy con esta configuración

Usar el TLD2-D con Plaspy ofrece a los operadores de flota una vía rápida para disponer de ubicación en tiempo real, diagnóstico del vehículo y visibilidad de sensores con un tiempo de instalación mínimo. La forma OBDII plug-and-play combinada con la capacidad de configurar el dispositivo para apuntar a Plaspy facilita el despliegue a escala y el monitoreo centralizado en flotas mixtas y vehículos de renta.

Learn more about Plaspy and how it collects and presents fleet telemetry on the main website https://www.plaspy.com. For the most current device specific configuration commands, firmware behavior and installation details verify information on the manufacturer website https://www.topflytech.com/ before final deployment.
