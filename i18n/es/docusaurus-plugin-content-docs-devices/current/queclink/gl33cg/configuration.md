---
slug: /queclink/gl33cg/configuration
id: gl33cg-configuration
sidebar_label: Configuration
title: QuecLink - GL33CG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GL33CG y vincularlo con Plaspy usando ajustes de servidor y comandos SMS
keywords:
  - QuecLink GL33CG configuración
  - QuecLink GL33CG instalación
  - integración GL33CG Plaspy
  - configuración servidor QuecLink
  - configuración rastreador GPS GL33CG
  - configuración rastreador de carga
  - comandos SMS GL33CG
  - configuración rastreador Plaspy
  - ajustes de servidor del dispositivo
  - plataforma de rastreo GL33CG
---

# QuecLink - GL33CG Configuración

Esta página describe el contexto público de configuración para usar el rastreador QuecLink GL33CG con Plaspy. Se concentra en los pasos y ajustes prácticos y disponibles públicamente necesarios para apuntar el dispositivo a Plaspy y que pueda reportar ubicación y eventos a la plataforma. Cuando están disponibles, se incluyen ejemplos de comandos SMS proporcionados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Use esta guía como punto de partida práctico y verifique diferencias específicas del dispositivo en la documentación oficial de QuecLink.

## Resumen de la configuración

El objetivo es preparar el GL33CG para que se comunique de forma confiable con Plaspy y así que la plataforma reciba ubicaciones, alertas y telemetría básica. La configuración normalmente implica definir el APN, apuntar al servidor de Plaspy, seleccionar el modo de transporte si es necesario y habilitar los intervalos de reporte o entradas de alarma requeridas.

- Configurar el acceso a la red y el APN para que el GL33CG pueda acceder a Internet
- Apuntar el equipo al servidor de Plaspy usando el nombre de host o la IP y el puerto compartido
- Seleccionar UDP o TCP si el dispositivo requiere elegir el transporte
- Definir intervalos de reporte y activar notificaciones de entradas o alarmas necesarias para monitoreo de carga
- Verificar que el dispositivo sea visible y que reporte correctamente en Plaspy tras aplicar la configuración

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de configurar

- Rastreador con batería cargada y alimentación instalada según sea necesario
- SIM activa que pueda enviar y recibir SMS y tenga acceso a datos configurado para el equipo
- Datos del APN, usuario APN y contraseña APN del operador listos para aplicar
- Acceso al método oficial de configuración de QuecLink para este modelo, por ejemplo comandos SMS o herramientas del proveedor
- Conocimiento de la contraseña del dispositivo o credenciales administrativas usadas para la configuración por SMS
- Acceso básico a la cuenta de Plaspy o instrucciones del instalador para validar el dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GL33CG usa su enlace celular para enviar datos de ubicación y eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe esos paquetes en el puerto compartido e identifica automáticamente el protocolo del rastreador, por lo que no son necesarios ajustes de servidor específicos por dispositivo en el lado de Plaspy.

- El dispositivo se configura para reportar a Plaspy usando el nombre de host d.plaspy.com o la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy acepta ambos y detecta el protocolo
- Los intervalos de reporte determinan la frecuencia con la que el equipo envía actualizaciones de posición a Plaspy
- Las entradas de alarma y los eventos SOS son enviados por el dispositivo a Plaspy para permitir el monitoreo operativo
- Las funciones RF433 y LBS locales son características del dispositivo y no sustituyen el canal celular de reporte hacia Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GL33CG, como la interfaz de comandos SMS o la herramienta de configuración del proveedor
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint
3. Establezca el puerto de destino en 8888 para que coincida con la configuración del servidor Plaspy
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte
5. Configure los ajustes del APN y cualquier contraseña o credencial del equipo, luego aplique o guarde la configuración
6. Reinicie o alimente el rastreador si el dispositivo necesita reinicio para aplicar los nuevos ajustes de red o servidor
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones de ubicación y eventos esperados

## Comandos de configuración de ejemplo

El GL33CG puede configurarse enviando comandos SMS al equipo. Los siguientes comandos SMS se muestran como ejemplo público. La contraseña del dispositivo usada en estos comandos es la contraseña por defecto queclink. Reemplace {{apn}}, {{apnu}} y {{apnp}} con los ajustes APN de su operador móvil donde se indique.

Tenga en cuenta que el comando del servidor GPRS que sigue incluye tanto el dominio de Plaspy d.plaspy.com como la IP 54.85.159.138 con puerto 8888. Plaspy acepta UDP o TCP en el puerto 8888 y detectará automáticamente el protocolo del rastreador.

- Restaurar ajustes de fábrica (paso inicial opcional)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Ajustar zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador. Reemplace los marcadores según sea necesario:
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explicación de los marcadores:
- {{apn}} es la cadena APN de su operador móvil
- {{apnu}} es el nombre de usuario APN si el operador lo requiere
- {{apnp}} es la contraseña APN si el operador la requiere

- Establecer el servidor GPRS a Plaspy usando el hostname y la IP en el puerto 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando apunta el equipo a Plaspy mediante d.plaspy.com y la IP 54.85.159.138 en el puerto 8888

- Establecer intervalo de reporte a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando como SMS al equipo desde un número autorizado y confirme las respuestas del dispositivo cuando estén disponibles. Después de la configuración, considere cambiar la contraseña por defecto queclink hacia una contraseña segura usando el comando o herramienta recomendada por el proveedor.

## Notas de configuración

- Las versiones de firmware del fabricante y el comportamiento del dispositivo pueden cambiar la forma en que se aceptan o procesan los comandos; siempre consulte la documentación de QuecLink para detalles según el firmware
- La configuración vía SMS está soportada para el GL33CG como se muestra arriba, pero las herramientas del proveedor pueden ofrecer una alternativa con interfaz gráfica según su proceso de instalación
- Plaspy acepta UDP o TCP en el puerto 8888 y detectará automáticamente el protocolo correcto; elija el transporte que coincida con la política de su flota o la capacidad del dispositivo
- Reemplace los marcadores del APN con los valores del operador y verifique que la SIM tenga SMS y datos habilitados si son necesarios para los pasos de configuración
- Si el dispositivo usa una contraseña por defecto como queclink, cámbiela tras la configuración inicial cuando sea posible para protegerlo contra comandos no autorizados

## Por qué usar Plaspy con esta configuración

Usar el GL33CG con Plaspy ofrece una vía directa para la visibilidad de carga y el monitoreo de eventos. Apuntar el equipo al endpoint compartido de Plaspy simplifica el despliegue porque Plaspy usa un servidor y puerto comunes para todos los dispositivos compatibles y maneja la detección del protocolo, reduciendo la complejidad de configuración por dispositivo.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior at the manufacturer site https://www.queclink.com/ . Manufacturer specifications and setup steps can change over time so confirm device details on the official QuecLink pages.
