---
slug: /megastek/gvt_500/configuration
id: gvt_500-configuration
sidebar_label: Configuration
title: Megastek - GVT-500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek GVT-500 con ajustes de servidor Plaspy comandos SMS e integración
keywords:
  - Configuración Megastek GVT 500
  - Configuración GVT 500
  - Ajustes servidor GVT 500
  - Configuración Plaspy GVT 500
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Ajustes servidor Plaspy
  - Comandos SMS rastreador
  - Integración GVT 500
  - Guía configuración Megastek
---

# Megastek - Configuración GVT-500

Esta página documenta el contexto público de configuración para usar el rastreador Megastek GVT-500 con Plaspy. Aquí se explican los ajustes de servidor prácticos, el flujo habitual de puesta en marcha y los comandos SMS públicos que normalmente se emplean para apuntar el dispositivo a Plaspy. Utilice esta guía junto con las instrucciones del fabricante para completar una integración confiable.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GVT-500 admite configuración por SMS y los ajustes de GPRS que se muestran a continuación; los ejemplos de comandos en esta página usan la contraseña predeterminada del dispositivo 000000 cuando corresponde.

## Resumen de configuración

El objetivo de configurar el GVT-500 para Plaspy es preparar el rastreador para comunicarse de forma fiable con la plataforma Plaspy, verificar la conectividad y habilitar la visibilidad del dispositivo y el reporte de eventos en la cuenta.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy y así la ubicación y eventos aparezcan en la plataforma.  
- Establezca el APN del operador y active el modo GPRS para que el dispositivo pueda usar datos móviles.  
- Asigne el ID del dispositivo y el intervalo de actualización para que el rastreador envíe reportes frecuentes.  
- Valide la selección del transporte (UDP o TCP) y el puerto para que coincida con los ajustes del servidor Plaspy.  
- Confirme que el dispositivo reporte correctamente y aparezca en Plaspy para su monitoreo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (device may be configured to use either UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Un GVT-500 con alimentación y accesible, con su IMEI a mano para la identificación del dispositivo.  
- Una tarjeta SIM activa con servicio de datos y un APN funcional del operador.  
- Acceso al método de configuración del fabricante para el GVT-500, como comandos SMS o una herramienta oficial de configuración.  
- Conocimiento de la contraseña del dispositivo; los ejemplos a continuación usan la contraseña predeterminada 000000.  
- Una forma de recibir mensajes de confirmación o registros desde el dispositivo después de la configuración para validar los cambios.  
- El manual del usuario del fabricante o las notas de firmware para cualquier comportamiento específico del modelo o variantes de comandos.

## Cómo se conecta este tracker a Plaspy

El GVT-500 se configura para enviar datos de ubicación y del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir y mostrar el dispositivo. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo correcto.

- El rastreador envía paquetes de datos GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- Plaspy recibe el tráfico del dispositivo y asocia los reportes a la cuenta mediante el ID de dispositivo o el IMEI.  
- Las actualizaciones y alarmas se reenvían a la plataforma Plaspy para su visibilidad y notificaciones.  
- Seleccionar UDP o TCP en el rastreador controla el transporte usado para alcanzar Plaspy en el puerto 8888.  
- La detección automática de protocolo de Plaspy simplifica la configuración porque la plataforma analiza los mensajes entrantes del rastreador.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Megastek para el GVT-500, como la interfaz de comandos SMS o la herramienta del proveedor.  
2. Introduzca el valor del servidor de Plaspy ya sea como el dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.  
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere seleccionarlo.  
5. Configure el APN y GPRS para que el equipo pueda usar datos móviles, y ajuste el intervalo de reporte según sea necesario.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador necesita reboot para que los nuevos ajustes entren en vigor.  
7. Valide que el equipo reporte a Plaspy comprobando la conectividad y la aparición del dispositivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El GVT-500 admite configuración por SMS. Los comandos a continuación son ejemplos públicos y conservan marcadores de posición cuando corresponde. Envíe cada comando como un SMS desde un número autorizado. La contraseña predeterminada de muestra que se muestra aquí es 000000.

- Establecer el ID del dispositivo (reemplazar \<IMEI15> con el IMEI de 15 dígitos del dispositivo)
```
M000000,22,<IMEI15>
```

- Establecer el APN del operador (reemplazar [apn] con el APN de su SIM; opcionalmente incluir [apnu] usuario y [apnp] contraseña si se requieren)
```
M000000,23,[apn]
```
Opcional con usuario y contraseña del APN:
```
M000000,23,[apn],[apnu],[apnp]
```

- Establecer el intervalo de actualización a 60 segundos
```
M000000,25,60
```

- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto (el ejemplo incluye un valor inicial de índice o modo de servidor común en este dispositivo)
```
M000000,24,56 54.85.159.138,8888
```

- Activar el modo GPRS
```
M000000,21,2
```

Notas sobre los marcadores de posición y el uso:
- \<IMEI15> significa el número IMEI de 15 dígitos del dispositivo. Algunos comandos requieren el IMEI o el ID del dispositivo para registrar el rastreador en la flota.  
- [apn], [apnu] y [apnp] son marcadores para el APN del operador, el usuario del APN y la contraseña del APN respectivamente. Reemplace con los valores de su operador.  
- El "56" en el comando de servidor anterior es un valor presente en el ejemplo público y puede representar una ranura de servidor o un modo; confirme su significado para su versión de firmware.  
- Los comandos deben enviarse desde un número autorizado y pueden requerir el prefijo de contraseña del dispositivo; los ejemplos usan la contraseña predeterminada 000000 como se muestra.

## Notas de configuración

- La sintaxis de comandos y el firmware pueden variar según la revisión del GVT-500; confirme el formato exacto de los comandos en el manual de Megastek para su unidad.  
- El dispositivo soporta la configuración por SMS como se muestra, pero algunas instalaciones pueden usar una herramienta cableada por RS-232 o software del proveedor. Use el método apropiado para su instalación.  
- Elija UDP o TCP según su entorno de red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Plaspy usa el mismo puerto para todos los dispositivos, por lo que siempre establezca el puerto 8888 al dirigir el dispositivo al endpoint de Plaspy.  
- Mantenga un registro del IMEI y de la contraseña del dispositivo utilizada durante la configuración para facilitar el registro y la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el Megastek GVT-500 para que reporte a Plaspy proporciona a las organizaciones una visibilidad centralizada y consistente de la ubicación y el estado de los dispositivos. Usar el endpoint compartido de Plaspy simplifica el despliegue porque la plataforma detecta automáticamente el protocolo del rastreador y usa el mismo puerto entre los dispositivos compatibles, reduciendo las diferencias de configuración por equipo.

Learn more about Plaspy and how it supports fleet and asset tracking at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation details verify the official Megastek documentation at https://www.megastek.com/ because manufacturer configuration methods and firmware behavior can change over time.
