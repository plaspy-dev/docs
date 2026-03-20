---
slug: /condor/tg_512/configuration
id: tg_512-configuration
sidebar_label: Configuration
title: Condor - TG-512 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Condor TG-512 para Plaspy con valores de servidor, comandos SMS y lista de verificación
keywords:
  - Configuración Condor TG-512
  - Instalación Condor TG-512
  - Integración TG-512 Plaspy
  - Configuración servidor TG-512
  - Comandos SMS TG-512
  - Configuración GPRS TG-512
  - Configuración de tracker Plaspy
  - Configuración plataforma rastreo GPS
  - Configuración rastreo vehicular
  - Rastreo de flotas TG-512
---

# Condor - TG-512 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Condor TG-512 con Plaspy. Se centra en los pasos prácticos y públicos del fabricante y en los valores de servidor necesarios para apuntar el dispositivo a Plaspy, de modo que el tracker pueda enviar localización y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. Esta página incluye ejemplos públicos de comandos SMS suministrados para el TG-512 y explica cómo esos comandos se corresponden con los ajustes de servidor de Plaspy.

## Panorama de la configuración

El proceso de configuración prepara al TG-512 para enviar fijaciones GNSS y telemetría a Plaspy mediante datos móviles y la pila GPRS del dispositivo. En unidades TG-512, los comandos SMS proporcionados por el fabricante se usan habitualmente para establecer el APN, el servidor, el intervalo de reporte y el modo GPRS antes de que el dispositivo pueda reportar a Plaspy.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que el tracker sepa dónde enviar los datos.
- Configurar el APN de la operadora y, si aplica, el usuario y contraseña del APN para conectividad GPRS.
- Establecer un intervalo de reporte y un modo GPRS para que el tracker transmita las posiciones con la cadencia deseada.
- Verificar la conectividad y la accesibilidad al servidor usando el comando de verificación provisto.
- Validar que el dispositivo aparezca en los paneles de Plaspy una vez que comience a reportar.

## Valores de servidor de Plaspy

Configure el dispositivo para que reporte a la siguiente información del endpoint de Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del tracker y usa el mismo puerto para todos los dispositivos compatibles

Use exactamente estos valores al configurar la entrada de servidor en el TG-512 para que Plaspy pueda ingerir los datos del tracker.

## Requisitos habituales antes de la configuración

- Una unidad TG-512 con alimentación y funcional, con una tarjeta SIM válida y un plan de datos activo para comunicación GPRS.
- La SIM debe permitir el envío de SMS si va a usar comandos SMS, y debe permitir datos GPRS para el envío de telemetría.
- Tener a mano el número IMEI del dispositivo para identificación y alias durante la configuración.
- Valores APN del operador móvil, incluyendo {{apn}} y opcionalmente {{apnu}} y {{apnp}} cuando el operador los requiera.
- Acceso al método de configuración oficial de Condor, como comandos SMS o la herramienta del proveedor recomendada para su versión de firmware.
- Documentación del fabricante y notas de firmware para confirmar la sintaxis de los comandos y cualquier matiz específico del dispositivo.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el TG-512 envía fijaciones GNSS y telemetría a través de la red móvil al endpoint y puerto compartidos de Plaspy. Plaspy procesa esos mensajes y los asocia con el registro de dispositivo correspondiente para que la ubicación, los eventos y la telemetría sean visibles en la plataforma.

- El tracker se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El dispositivo transmite datos por GPRS usando el transporte seleccionado (UDP o TCP).
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta a la plataforma.
- Un reporte correcto permite actualizaciones de posición en tiempo real, notificación de eventos y visibilidad de telemetría dentro de Plaspy.
- Puede usar comandos de verificación para confirmar que el dispositivo aceptó las configuraciones de servidor y GPRS antes de la validación completa en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Condor para su unidad TG-512, como comandos SMS o el software del fabricante. Ese es el medio autorizado para cambiar la configuración del dispositivo.
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de configuración del servidor del dispositivo.
3. Establezca el puerto en 8888. Todos los dispositivos en Plaspy usan el mismo puerto, por lo que utilice 8888 para los reportes del TG-512.
4. Elija UDP o TCP como transporte si el TG-512 requiere selección de transporte al configurar el servidor.
5. Configure el APN y cualquier credencial del APN para su SIM usando los valores del operador (se pueden usar marcadores de posición como {{apn}} en los comandos).
6. Aplique o guarde la configuración y reinicie el dispositivo si este requiere reboot para que los cambios surtan efecto.
7. Valide el dispositivo usando el comando de verificación y confirme que el tracker aparece y reporta en Plaspy.

## Ejemplos de comandos de configuración

El TG-512 puede configurarse mediante comandos SMS. Los siguientes ejemplos se toman del formato público de configuración suministrado para el dispositivo. La contraseña de ejemplo mostrada aquí es 0000, que es la predeterminada en los ejemplos públicos. Reemplace los marcadores y la contraseña según corresponda para su dispositivo y políticas de seguridad.

- Establecer el APN del operador. Reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador según sea necesario. Los campos de usuario y contraseña del APN son opcionales dependiendo del operador.

```
APN,0000,{{apn}}{{,{{apnu}},{{apnp}}}}
```

- Establecer un identificador de 5 dígitos (alias) usando los últimos 5 dígitos del IMEI. Reemplace IMEI_LAST5 por los últimos cinco dígitos del IMEI del dispositivo.

```
ALIAS,0000,IMEI_LAST5#
```

- Ajustar la zona horaria a UTC 0 (ejemplo). Modifique la cadena de zona horaria según la región que necesite.

```
GMT,0000,-0#
```

- Establecer el servidor GPRS usando la IP pública de Plaspy y el puerto. Este comando incluye banderas de transporte y modo. El ejemplo muestra la IP de Plaspy 54.85.159.138 y el puerto 8888 e incluye una bandera de transporte en el comando del dispositivo.

```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```

- Establecer el intervalo de actualización a un minuto en el formato de comando provisto. Confirme el código de intervalo correcto con la documentación del fabricante si necesita otra cadencia.

```
INTERVALO,0000,M,6#
```

- Establecer el modo GPRS para activar datos GPRS para el reporte.

```
GPRS,0000,A#
```

- Verificar la conexión actual y la configuración del servidor con el siguiente comando de verificación.

```
CONEXION,0000#
```

Notas sobre los marcadores y valores:
- {{apn}} es la cadena APN de la operadora móvil requerida para datos en la SIM.
- {{apnu}} y {{apnp}} son marcadores opcionales de usuario y contraseña del APN usados por algunos operadores.
- La contraseña de ejemplo 0000 aparece en los ejemplos públicos. Si su dispositivo usa una contraseña distinta, reemplace 0000 por la contraseña real del dispositivo.
- El comando SERVIDOR del ejemplo usa 54.85.159.138 y el puerto 8888, que son los ajustes públicos de Plaspy. El carácter U en el ejemplo indica la bandera de transporte usada en la sintaxis del comando; confirme la correspondencia de letras de transporte con el manual del dispositivo si es necesario.

## Consideraciones de configuración

- La configuración por SMS es común en dispositivos TG-512, pero también pueden existir herramientas del fabricante o software de configuración; siga el método recomendado para su firmware.
- Las revisiones de firmware y las variantes regionales de hardware pueden modificar la sintaxis exacta de los comandos y las banderas disponibles. Verifique los comandos con la documentación del Condor TG-512 correspondiente a su dispositivo.
- Elija UDP o TCP según el transporte que requiera su instalación. El TG-512 permite seleccionar el transporte en el comando de servidor y Plaspy acepta ambos en el puerto 8888.
- Los ejemplos públicos muestran la contraseña predeterminada 0000. Cambie las contraseñas por defecto de acuerdo con su política de seguridad y registre la nueva contraseña de forma segura.
- Verifique las credenciales APN con su operador móvil antes de enviar comandos para evitar demoras en la conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Condor TG-512 con Plaspy brinda a las organizaciones una vía directa para convertir la telemetría del tracker en visibilidad operativa. Al configurar el TG-512 para que reporte al endpoint y puerto compartidos de Plaspy, flotas y operadores de activos pueden recibir actualizaciones de posición en tiempo real, notificaciones de eventos y telemetría consolidada en Plaspy para despacho, monitoreo e informes.

Para conocer más sobre cómo Plaspy maneja las integraciones de dispositivos y las funciones de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos de los dispositivos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las instrucciones y la sintaxis de comandos más recientes en el sitio oficial de Condor https://condorskyseeker.com/ antes de aplicar cambios.
