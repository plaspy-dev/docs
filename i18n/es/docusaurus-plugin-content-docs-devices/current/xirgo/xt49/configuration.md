---
slug: /xirgo/xt49/configuration
id: xt49-configuration
sidebar_label: Configuration
title: Xirgo - XT49 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Xirgo XT49 con Plaspy, con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Xirgo XT49
  - Instalación XT49 Xirgo
  - Integración XT49 Plaspy
  - Configuración de servidor XT49
  - Configuración rastreador GPS XT49
  - Configuración rastreador Xirgo
  - Configuración LTE XT49
  - Configuración rastreo de activos XT49
  - Configuración rastreador Plaspy
  - Configuración plataforma de rastreo Xirgo
---

# Xirgo - Configuración XT49

Esta página ofrece el contexto público de configuración para usar el rastreador Xirgo XT49 con Plaspy. Se centra en los ajustes prácticos del servidor y ejemplos de comandos que integran el XT49 con Plaspy para seguimiento en tiempo real y telemetría. Utilice esta guía junto con la documentación del dispositivo de Xirgo al planificar la instalación y el despliegue.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El XT49 soporta la configuración por SMS como método común; más abajo incluimos los comandos SMS públicos para APN y servidor y explicamos cómo aplicar los ajustes de Plaspy.

## Resumen de configuración

Este proceso prepara al XT49 para comunicarse con la plataforma Plaspy de modo que las actualizaciones de ubicación y el estado del dispositivo se reciban de forma fiable. El objetivo es configurar el acceso a la red, apuntar el rastreador al endpoint de Plaspy y verificar que el dispositivo reporte correctamente.

- Configure el APN del operador para que el dispositivo se registre en LTE y utilice datos para la telemetría.
- Ingrese el endpoint compartido de servidor de Plaspy y el puerto para que el dispositivo envíe datos.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo lo requiere y guarde el ajuste.
- Valide la conectividad y confirme que el XT49 aparece en Plaspy para visibilidad en tiempo real y alertas.
- Use SMS o la herramienta de configuración de Xirgo según preferencia del instalador y capacidades del firmware.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos previos habituales

- El dispositivo está alimentado y accesible para la configuración, incluyendo verificaciones de montaje necesarias.
- Tarjeta SIM activa con servicio de datos que soporte las bandas LTE del dispositivo y el APN del operador.
- Acceso al método de configuración del fabricante, como comandos SMS o software de proveedor.
- Conocimiento del APN del operador, y opcionalmente del usuario y contraseña del APN si su operador los requiere.
- Acceso básico a una cuenta de Plaspy para confirmar la provisión del dispositivo y su visibilidad después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El XT49 se configura para reenviar la ubicación y los datos operativos al endpoint y puerto compartidos de Plaspy, de modo que los gestores de flota puedan monitorizar los activos de forma centralizada. Plaspy ingiere la telemetría del dispositivo y ofrece visibilidad, alertas e informes históricos.

- El rastreador utiliza el APN configurado para establecer una conexión de datos sobre LTE.
- La telemetría del dispositivo se envía a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP dependiendo de la selección del dispositivo; Plaspy acepta ambos en el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los mensajes entrantes para mapeo y reporte de eventos.
- Una vez configurado, el rastreador aparece en Plaspy para seguimiento en tiempo real, alertas e historial.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Xirgo para el XT49, como los comandos SMS o el software de configuración del proveedor.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 para comunicación con Plaspy.
4. Seleccione el protocolo de transporte UDP o TCP si el XT49 requiere una elección explícita.
5. Configure el APN del operador y las credenciales del APN si su operador las solicita.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con la telemetría esperada.

## Comandos de configuración de ejemplo

El XT49 soporta configuración por SMS. Los siguientes comandos SMS públicos son proporcionados por el fabricante para la configuración del APN y del servidor GPRS. Envíe estos comandos al dispositivo usando el método de configuración por SMS de la unidad.

1. Definir el APN del operador
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} es la cadena APN requerida por su operador de red.
- {{apnu}} es el nombre de usuario del APN si el operador lo requiere; déjelo vacío si no se usa.
- {{apnp}} es la contraseña del APN si el operador la requiere; déjela vacía si no se usa.

2. Configurar el servidor GPRS para Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este comando establece la IP del servidor en 54.85.159.138 y el puerto en 8888 para Plaspy.
- Los parámetros después de la IP y el puerto se relacionan con opciones específicas del servidor del dispositivo; mantenga el orden y los valores tal como aparecen en el comando público.

Use exactamente los valores y marcadores cuando prepare los SMS de configuración. Reemplace los marcadores únicamente con los valores proporcionados por su operador de red o la configuración del cliente.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comandos y las opciones disponibles; confirme el soporte de comandos con la documentación actual de Xirgo antes de un despliegue masivo.
- Si el XT49 requiere elegir transporte, pruebe tanto UDP como TCP según sea necesario. Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- La configuración por SMS es útil para despliegues remotos o sellados donde el acceso físico es limitado; asegúrese de que la SIM pueda recibir mensajes SMS de configuración.
- Mantenga un registro de las credenciales APN y de los comandos de servidor usados durante la instalación para facilitar la resolución de problemas y el mantenimiento futuro.
- Verifique siempre la visibilidad del dispositivo en Plaspy después de la configuración para confirmar la correcta ingestión de telemetría.

## Por qué usar Plaspy con esta configuración

Configurar el XT49 para enviar telemetría a Plaspy proporciona a los operadores una plataforma única para seguimiento en tiempo real, alertas por eventos e informes históricos para activos remotos y de larga duración. La combinación del hardware XT49 diseñado para despliegues de bajo mantenimiento y los ajustes de servidor compartidos de Plaspy simplifica la integración y las operaciones continuas.

To learn more about Plaspy and how it supports devices like the XT49 visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and full technical documentation, verify details with the manufacturer at https://xirgo.com/ since vendor specifications and configuration methods may change over time.
