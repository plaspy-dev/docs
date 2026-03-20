---
slug: /teltonika/fmu130/configuration
id: fmu130-configuration
sidebar_label: Configuration
title: Teltonika - FMU130 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Teltonika FMU130 para Plaspy con ajustes de servidor, ejemplo de SMS y guía paso a paso
keywords:
  - configuración Teltonika FMU130
  - instalación Teltonika FMU130
  - FMU130 Plaspy
  - configuración de servidor FMU130
  - configuración rastreador GPS FMU130
  - configuración rastreador Teltonika
  - seguimiento de flotas FMU130
  - seguimiento vehicular FMU130
  - comandos SMS Teltonika
  - configuración rastreador Plaspy
---

# Teltonika - Configuración FMU130

Esta página describe el contexto público de configuración para utilizar el rastreador Teltonika FMU130 con Plaspy. Se enfoca en los ajustes compartidos del servidor Plaspy, los pasos básicos para apuntar el dispositivo a Plaspy y los comandos públicos que los instaladores suelen usar para registrar el equipo en la plataforma. Utilice esta guía como referencia práctica; para detalles específicos del equipo consulte la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware del FMU130, la revisión de hardware, el tipo de instalación y la herramienta de configuración que emplee (por ejemplo Teltonika Configurator, SMS o FOTA). Las instrucciones a continuación muestran los valores públicos de Plaspy y un ejemplo común de comando SMS que se usa en la configuración del dispositivo.

## Resumen de la configuración

El objetivo de la configuración es preparar el FMU130 para comunicarse de forma fiable con Plaspy y verificar que los datos de ubicación y eventos llegan a la plataforma. Esto implica proporcionar los ajustes de datos móviles si son necesarios, dirigir el rastreador al endpoint del servidor Plaspy y confirmar el reporte exitoso.

- Configure el APN y los parámetros de conectividad para que el dispositivo pueda usar la red celular.
- Apunte el dispositivo al servidor Plaspy en d.plaspy.com o al IP equivalente para establecer la conexión.
- Configure el puerto compartido de Plaspy para que los datos se envíen a la plataforma.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere una selección específica.
- Verifique que el rastreador reporte a Plaspy y aparezca en la plataforma una vez configurado.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888  
- Transporte: UDP o TCP soportado en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la instalación

- Un FMU130 encendido y accesible, con batería o alimentación del vehículo conectada y listo para configurar.
- Conectividad de datos móviles válida y ajustes APN correctos para la SIM instalada en el equipo.
- Acceso al método de configuración del fabricante que prefiera (Teltonika Configurator vía USB/Bluetooth, comandos SMS o herramientas FOTA).
- Información básica del dispositivo como el IMEI para identificar el rastreador en Plaspy después de que reporte.
- Un terminal para enviar SMS o un PC con el software de configuración de Teltonika, según el método de configuración elegido.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMU130 envía sus datos GNSS y eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe la conexión entrante usando el transporte declarado y detecta automáticamente el protocolo del rastreador para que el dispositivo aparezca en la plataforma.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Los datos se transmiten por el puerto 8888, que es el mismo puerto usado para todos los dispositivos en Plaspy.
- El dispositivo puede usar UDP o TCP como transporte; Plaspy soporta ambos.
- Cuando llegan los paquetes, Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes de posición y eventos.
- Después de la configuración, verifique que el dispositivo sea visible y esté reportando en Plaspy para confirmar la conectividad de extremo a extremo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Teltonika o al software (por ejemplo Teltonika Configurator, interfaz de comandos SMS o herramientas FOTA) para editar los parámetros del dispositivo.  
2. En la configuración de servidor o destino ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.  
3. Establezca el puerto de destino en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Seleccione UDP o TCP si el dispositivo le pide elegir un transporte.  
5. Aplique o guarde la configuración en la herramienta de Teltonika o envíe el SMS de configuración si usa el método por SMS.  
6. Reinicie el dispositivo si el método de configuración o el firmware lo requiere para aplicar los cambios.  
7. Valide que el equipo esté reportando a Plaspy y aparezca en la plataforma; confirme que los datos de ubicación y eventos se están actualizando.

## Ejemplo de comandos de configuración

El ejemplo público de configuración para dispositivos Teltonika usa un comando tipo SMS que establece los campos APN y la información del servidor Plaspy. Mantenga los marcadores de posición cuando los reemplace con sus datos de red.

- Ejemplo de comando SMS/GPRS por lotes para establecer parámetros básicos:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición en el comando anterior:
- {{apn}} — el nombre del APN de su red celular (requerido para la conexión de datos).
- {{apnu}} — nombre de usuario del APN si su operador lo requiere; de lo contrario déjelo vacío.
- {{apnp}} — contraseña del APN si su operador la requiere; de lo contrario déjela vacía.

Explicación y recomendaciones:
- Este comando configura los parámetros de APN seguidos del dominio del servidor Plaspy (d.plaspy.com) y el puerto de Plaspy (8888).
- El último parámetro (2006) configura un transporte o una bandera relacionada en los parámetros del dispositivo; consulte la documentación de Teltonika para conocer los valores numéricos y su significado según la versión de firmware.
- Use Teltonika Configurator o SMS según lo permita el firmware y el proceso de aprovisionamiento de su dispositivo. Si utiliza las herramientas de Teltonika, encontrará campos equivalentes en la interfaz en lugar de introducir la cadena SMS cruda.

## Notas de configuración

- Las versiones de firmware y las interfaces de configuración de Teltonika pueden diferir; confirme siempre los IDs de parámetros y la sintaxis de comandos con el manual del FMU130 correspondiente a su firmware.
- El FMU130 soporta métodos de configuración por SMS y GPRS; elija el método apropiado para su instalación y las herramientas disponibles.
- Al seleccionar UDP o TCP, considere las condiciones de la red y el comportamiento descrito en la documentación de Teltonika; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Mantenga las credenciales APN y los ajustes de red precisos para asegurar que el dispositivo pueda crear la conexión de datos antes de enviar información a Plaspy.
- Tras aplicar cambios de configuración, algunas versiones de firmware pueden requerir un reinicio del dispositivo para comenzar a reportar.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Teltonika FMU130 ofrece a las organizaciones un proceso sencillo para centralizar el reporte de dispositivos y obtener visibilidad operativa. Los ajustes de servidor compartidos y la detección automática de protocolos facilitan la incorporación: una vez que el FMU130 apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy se encarga de identificar y procesar el protocolo para que usted pueda concentrarse en el despliegue y la supervisión de los equipos.

Learn more about Plaspy and how it integrates with trackers like the FMU130 at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and parameter definitions always verify details on the manufacturer site https://www.teltonika-gps.com/
