---
slug: /queclink/gl502mg/configuration
id: gl502mg-configuration
sidebar_label: Configuration
title: QuecLink - GL502MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GL502MG con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración QuecLink GL502MG
  - Instalación QuecLink GL502MG
  - Configuración de servidor para GL502MG QuecLink
  - Configuración GL502MG para Plaspy
  - Configuración rastreador GPS GL502MG
  - Guía de configuración de rastreador QuecLink
  - Configuración de rastreadores Plaspy
  - Configuración rastreo de activos GL502MG
  - Rastreo de contenedores GL502MG
  - Instrucciones de configuración QuecLink
---

# QuecLink - Configuración del GL502MG

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GL502MG con Plaspy. Resume los ajustes prácticos de servidor, ejemplos públicos de comandos de configuración por SMS y el flujo habitual para dejar el dispositivo listo para reportar a Plaspy en casos de seguimiento de activos, remolques y contenedores.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador automáticamente. Los pasos de configuración por parte del fabricante para el GL502MG pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL502MG puede configurarse mediante comandos SMS (se incluyen ejemplos más abajo); siga tanto los valores de Plaspy como la documentación actual de QuecLink para elegir el método que corresponda a su firmware.

## Resumen de la configuración

El objetivo de la configuración es dejar el GL502MG preparado para comunicarse de forma fiable con Plaspy y validar la visibilidad del dispositivo en la plataforma. Utilice los ajustes públicos de servidor que se indican abajo y el método de configuración del fabricante para establecer la dirección del servidor, el transporte y la cadencia de reportes.

- Apunte el dispositivo al endpoint de Plaspy para que la telemetría se reciba en la plataforma
- Configure el APN y parámetros GPRS para que tenga conectividad de datos móviles
- Defina el intervalo de reporte y la notificación de entradas/eventos para que el rastreador envíe actualizaciones periódicas
- Opcionalmente restaure ajustes de fábrica o aplique valores por defecto antes de una configuración limpia
- Valide que el rastreador aparece en Plaspy después de guardar y reiniciar el dispositivo

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar cualquiera)
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos previos típicos antes de la configuración

- Un GL502MG con batería cargada, firmware funcional y una instalación física adecuada al activo
- Una tarjeta SIM activa con plan de datos y los ajustes APN correctos del operador móvil
- Un teléfono o gateway SMS capaz de enviar comandos SMS de configuración si utiliza ese método
- Acceso a las instrucciones de configuración de QuecLink o herramientas del proveedor para confirmar el formato de los comandos y la compatibilidad de firmware
- Cobertura de red para LTE Cat M1/NB2 o fallback a 2G según lo requiera su despliegue
- Opcional: conexión USB Tipo-C para actualizaciones de firmware y depuración si su flujo de instalación lo contempla

## Cómo se conecta este rastreador a Plaspy

El GL502MG se configura para reportar ubicación y eventos de dispositivo a un endpoint y puerto compartido de Plaspy para que Plaspy ingiera la telemetría y la presente en la plataforma. Una vez que el rastreador apunte al servidor Plaspy y tenga conectividad de datos, Plaspy detecta el protocolo automáticamente y comienza a procesar los mensajes.

- El dispositivo envía actualizaciones periódicas de ubicación a d.plaspy.com en el puerto 8888
- El transporte puede usar UDP o TCP según la configuración del dispositivo y las condiciones de red
- Plaspy utiliza detección de protocolo automática, por lo que no se requiere seleccionar un protocolo manualmente en la plataforma
- Los mensajes de evento, como SOS o cambios de estado en entradas, se envían al mismo endpoint de Plaspy para su procesamiento
- El rastreador se vuelve visible en Plaspy una vez que se autentica correctamente y transmite sus primeros paquetes al servidor

## Flujo típico de configuración

1. Acceda al método oficial de configuración QuecLink o al software correspondiente para su GL502MG (comandos SMS, herramienta del proveedor o interfaz documentada).
2. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor según el formato que acepte su configuración.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure el APN y las credenciales del operador para que el dispositivo tenga acceso a datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si los comandos o la herramienta lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la vista de su plataforma.

## Ejemplos de comandos de configuración

El GL502MG puede configurarse enviando comandos SMS al dispositivo. Los siguientes ejemplos públicos se extraen del contenido del fabricante. En el ejemplo se usa la contraseña del dispositivo queclink, documentada como valor por defecto en el ejemplo. Envíe cada comando como SMS al número del dispositivo en el orden indicado al realizar una configuración inicial.

1. Restauración de fábrica opcional (marcar como opcional o configuración inicial)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador (reemplace los marcadores con los valores de su operador)
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es la cadena APN requerida por su operador móvil
- {{apnu}} es el usuario del APN si se requiere, de lo contrario dejar vacío
- {{apnp}} es la contraseña del APN si se requiere, de lo contrario dejar vacío

4. Configurar el servidor GPRS para Plaspy (este ejemplo incluye dominio e IP y usa el puerto 8888)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas:
- Estos comandos se presentan como ejemplo público y pueden requerir ajustes según su versión de firmware o personalizaciones del proveedor.
- Mantenga el orden cuando la secuencia sea importante; por ejemplo, configure el APN antes de habilitar los ajustes del servidor GPRS.
- La contraseña por defecto en el ejemplo es queclink; verifique si su dispositivo usa una contraseña diferente y actualice los comandos según corresponda.

## Observaciones sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los conjuntos de comandos y los parámetros requeridos; confirme siempre con las notas de la versión del firmware del dispositivo.
- La configuración por SMS está soportada por el ejemplo público anterior, pero las herramientas del proveedor o métodos por USB pueden ser preferibles para aprovisionamientos masivos.
- Elija UDP o TCP según la fiabilidad de la red y su operador; Plaspy acepta cualquiera en el puerto 8888.
- Plaspy usa el mismo puerto entre dispositivos y detectará automáticamente el protocolo del rastreador una vez que el dispositivo empiece a enviar datos a d.plaspy.com o 54.85.159.138.
- Si los ejemplos usan una contraseña por defecto, verifique y cambie la contraseña según su política de seguridad cuando sea posible.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GL502MG con Plaspy ofrece a las organizaciones una vía sencilla para monitorear activos, remolques y contenedores con un dispositivo robusto diseñado para despliegues de largo plazo. Configurar el GL502MG para que reporte al endpoint compartido de Plaspy proporciona visibilidad centralizada de los reportes de ubicación, alertas de eventos y supervisión operativa sin necesidad de infraestructura de servidor personalizada.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer guidance, always verify current information on the QuecLink official website https://www.queclink.com/ as specifications and setup steps can change over time.
