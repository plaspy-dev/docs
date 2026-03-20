---
slug: /nvs/ch_5704/configuration
id: ch_5704-configuration
sidebar_label: Configuration
title: NVS - CH-5704 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del NVS CH-5704 con ajustes de servidor Plaspy y ejemplos de comandos SMS para la puesta en marcha
keywords:
  - configuración NVS CH-5704
  - instalación NVS CH-5704
  - NVS CH-5704 Plaspy
  - configuración servidor CH-5704
  - configuración rastreador GPS NVS
  - ajustes APN CH-5704
  - configuración rastreador Plaspy
  - rastreo vehicular CH-5704
  - configuración SMS rastreador NVS
  - configuración GPRS CH-5704
---

# NVS - CH-5704 Configuración

Esta página describe la configuración pública para usar la terminal automotriz NVS CH-5704 con Plaspy. Resume los pasos prácticos y comandos SMS de ejemplo que suelen emplearse para apuntar el equipo al endpoint de Plaspy y verificar la conectividad. Úsela como referencia al preparar unidades CH-5704 para su integración en una flota gestionada por Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El CH-5704 opera sobre la red GSM y admite configuración por SMS y GPRS; por eso esta guía combina los detalles del servidor Plaspy con los comandos SMS públicos más usados para la configuración inicial. La contraseña por defecto que aparece en ejemplos públicos es 123456; confirme esto con su unidad y la documentación del fabricante.

## Resumen de la configuración

El objetivo al configurar el CH-5704 para Plaspy es preparar la terminal para que se comunique de forma fiable con el backend de Plaspy y así poder visualizar la ubicación y el estado del vehículo en la plataforma. La configuración típica usa comandos SMS o la herramienta del fabricante para establecer el APN, el endpoint del servidor, el modo de transporte y la operación GPRS, de modo que la unidad pueda iniciar una conexión con Plaspy.

- Apuntar el CH-5704 al endpoint y puerto del servidor Plaspy para que pueda abrir una sesión de datos con la plataforma.
- Configurar el APN y, si aplica, las credenciales del APN para permitir conectividad GPRS.
- Seleccionar UDP o TCP según requiera la instalación y el firmware del dispositivo, y usar el mismo puerto que Plaspy.
- Activar el modo GPRS en el dispositivo para que comience a reportar.
- Verificar la configuración con un comando de comprobación en el equipo o confirmando que el dispositivo aparece en Plaspy.
- Mantener la documentación del fabricante y notas de firmware a mano en caso de que la sintaxis varíe por revisión.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que puede reutilizar el puerto 8888 para unidades compatibles

## Requisitos habituales antes de la configuración

- Una terminal CH-5704 con alimentación, instalada o en prueba de banco, con señal GSM disponible
- Una tarjeta SIM válida con datos habilitados y los detalles APN correctos para el operador móvil
- Acceso para enviar SMS desde un teléfono o la herramienta oficial de configuración del fabricante
- Conocimiento de la contraseña del dispositivo (los ejemplos públicos usan la contraseña por defecto 123456) para incluirla en los comandos SMS
- Confirmación de la versión de firmware y la sintaxis de comandos con NVS cuando esté disponible
- Una forma de reiniciar el equipo si se requiere después de aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

El CH-5704 se configura para reportar ubicación y datos del dispositivo a través de la red GSM al endpoint y puerto del servidor Plaspy. Una vez aplicados APN y ajustes de servidor y activado GPRS, el rastreador inicia una conexión de datos y envía paquetes que Plaspy recibe y procesa mediante la detección automática del protocolo.

- El dispositivo envía paquetes GPRS a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte se establece usando UDP o TCP según la selección del equipo
- Plaspy detecta automáticamente el protocolo del rastreador y asigna el dispositivo al manejador correspondiente
- Una conexión exitosa permite la visibilidad de la ubicación y el reporte de eventos en Plaspy
- Verificar el estado del dispositivo con el comando de comprobación ayuda a confirmar la configuración

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o envíe comandos SMS según la documentación de NVS.
2. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como dirección del servidor del dispositivo.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el CH-5704 requiere una selección explícita de transporte.
5. Configure el APN y, si corresponde, las credenciales del APN para la SIM usada en el dispositivo.
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS para que empiece a reportar.
7. Reinicie el dispositivo si el firmware requiere reboot para que los cambios surtan efecto.
8. Valide que el dispositivo reporte a Plaspy usando el comando de comprobación o confirmando la visibilidad en la plataforma.

## Comandos de configuración de ejemplo

A continuación se muestran comandos SMS de ejemplo extraídos de contenido público del fabricante. Estos comandos usan la contraseña del dispositivo tal como aparece en los ejemplos públicos. La contraseña en estos ejemplos es 123456 y es la que figura por defecto en la documentación pública. Mantenga los marcadores tal como aparecen; reemplace [apn], [apnu] y [apnp] por los valores de su operador.

- Reinicio opcional a valores de fábrica (usar solo si es necesario):
```
begin123456
```

- Establecer la zona horaria a UTC 0:
```
time zone123456 0
```

- Configurar el APN del operador (reemplazar [apn] por el APN de su operador):
```
apn123456 [apn]
```

- Establecer usuario y contraseña del APN si se requieren (reemplazar [apnu] y [apnp] según corresponda):
```
up123456 [apnu] [apnp]
```

- Configurar el servidor GPRS para Plaspy usando la IP pública y el puerto:
```
adminip123456 54.85.159.138 8888
```

- Cambiar el dispositivo a modo GPRS (se muestran dos variantes presentes en ejemplos públicos):
```
gprs123456,1,1
```
o
```
gprs123456
```

- Verificar los ajustes actuales en el dispositivo:
```
check123456
```

Notas sobre los marcadores:
- [apn] — nombre del punto de acceso (APN) de su operador móvil
- [apnu] — nombre de usuario del APN si el operador lo requiere
- [apnp] — contraseña del APN si el operador lo requiere

Confirme siempre la sintaxis de comandos para su versión de firmware antes de enviar SMS masivos.

## Observaciones de configuración

- La sintaxis de los comandos SMS puede variar según la versión de firmware y la revisión de hardware; confirme con la referencia oficial de comandos de NVS.
- El CH-5704 admite la configuración del APN y de los ajustes de servidor por SMS como se muestra en ejemplos públicos, lo cual es útil para configuración remota o en campo.
- Elija UDP o TCP según su preferencia operativa y las opciones del firmware del equipo; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, por lo que ese mismo valor de puerto se aplica a las configuraciones de las unidades.
- Si se requiere un reinicio para que los ajustes se apliquen, planifique el tiempo de inactividad del dispositivo y valide después del reinicio.

## Por qué usar Plaspy con esta configuración

Configurar el NVS CH-5704 para apuntar a Plaspy ofrece una forma directa de incorporar posicionamiento preciso y monitoreo de vehículos a sus operaciones de flota. Al usar ajustes de servidor compartidos de Plaspy y el soporte de protocolo abierto del dispositivo, las organizaciones pueden estandarizar la configuración y lograr un reporte consistente en la plataforma Plaspy para seguimiento, visibilidad y monitoreo de eventos.

Learn more about Plaspy at https://www.plaspy.com and verify device-specific configuration details, firmware behavior, and any changes to command syntax on the manufacturer's site https://www.nvs-ts.ru/. Manufacturer specifications and setup methods can change over time, so always confirm the latest information with NVS.
