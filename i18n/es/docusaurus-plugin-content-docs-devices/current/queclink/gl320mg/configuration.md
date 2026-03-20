---
slug: /queclink/gl320mg/configuration
id: gl320mg-configuration
sidebar_label: Configuration
title: QuecLink - GL320MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para QuecLink GL320MG con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración QuecLink GL320MG
  - Configuración GL320MG
  - Configuración GL320MG Plaspy
  - Configuración rastreador QuecLink
  - configuración rastreador de activos
  - ajustes servidor rastreador GPS
  - configuración seguimiento de vehículos
  - configuración LTE rastreador de activos
  - Configuración serie QuecLink GL300
  - Configuración rastreador Plaspy
---

# QuecLink - Configuración del GL320MG

Esta página describe el contexto público de configuración para utilizar el QuecLink GL320MG con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos públicos de configuración que suelen usarse para apuntar dispositivos GL320MG a Plaspy, de modo que el rastreador pueda enviar ubicación y eventos a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, esta página incluye ejemplos de comandos SMS de QuecLink comúnmente utilizados para la configuración inicial; siempre verifique los comandos según el firmware del dispositivo y la documentación oficial de QuecLink.

## Resumen de la configuración

El objetivo al configurar un GL320MG para Plaspy es dejar el rastreador listo para que se conecte de forma fiable al servidor de Plaspy y aparezca en la plataforma para seguimiento y monitoreo de eventos. El flujo de configuración público típicamente establece el APN de la red, apunta el dispositivo al endpoint y puerto de Plaspy, y ajusta intervalos de reporte o entradas de alarma según sea necesario.

- Configure el APN y las credenciales de datos móviles correctas para que el dispositivo pueda alcanzar Plaspy.
- Establezca los parámetros de servidor GPRS/GSM para apuntar a Plaspy y que la telemetría llegue a la plataforma.
- Ajuste los intervalos de reporte y la configuración de entradas/alertas según sus necesidades de monitoreo.
- Valide la conectividad confirmando que el dispositivo informe en Plaspy después de aplicar la configuración.
- Use los comandos SMS de ejemplo más abajo como punto de partida y adapte los marcadores de posición como APN a su operador de SIM.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte compatible UDP o TCP (Plaspy acepta cualquiera en el puerto configurado)  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una SIM celular funcional con datos móviles habilitados y el APN correcto para su operador.  
- Acceso al dispositivo y al método necesario para enviar comandos de configuración (en los ejemplos, SMS, o la herramienta del fabricante).  
- El dispositivo debe tener batería suficiente o alimentación externa durante la configuración y los reinicios.  
- Conocimiento de la contraseña del dispositivo si es necesario para aceptar comandos de configuración (los ejemplos abajo usan la contraseña por defecto que aparece en configuraciones públicas).  
- Confirmación de la revisión de firmware del dispositivo y compatibilidad con los comandos de ejemplo antes de aplicar cambios.

## Cómo se conecta este rastreador a Plaspy

Los QuecLink GL320MG informan ubicación y eventos de dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma pueda mostrar posición y estado en tiempo real. Una vez que el dispositivo está configurado con los ajustes del servidor Plaspy, establecerá una conexión GPRS y transferirá telemetría al endpoint compartido de Plaspy.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com en el puerto 8888.  
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.  
- El dispositivo envía actualizaciones periódicas de posición y notificaciones de eventos configurados a Plaspy para visibilidad y monitoreo.  
- El uso de un único puerto por parte de Plaspy simplifica el aprovisionamiento de dispositivos y la configuración del servidor.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para su dispositivo y firmware (comandos SMS, herramientas QuecLink o software de aprovisionamiento del proveedor).  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Elija UDP o TCP en el dispositivo si se requiere seleccionar el transporte.  
5. Configure el APN del dispositivo y las credenciales requeridas por su proveedor de SIM.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.  
7. Valide que el dispositivo informe en Plaspy verificando la actividad del dispositivo y las actualizaciones en vivo en la plataforma.

## Comandos de configuración de ejemplo

El GL320MG puede configurarse mediante comandos SMS. Los siguientes comandos públicos se ofrecen como ejemplos comunes. Estos comandos usan la contraseña del dispositivo que aparece en ejemplos públicos: queclink. Reemplace los marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador móvil.

1. Paso inicial opcional: Restaurar ajustes de fábrica (ejecutar solo si necesita un estado limpio de fábrica)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador (reemplace los marcadores por los valores de su operador)
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = nombre del APN de su operador  
- {{apnu}} = usuario del APN si el operador lo requiere (dejar en blanco si no es necesario)  
- {{apnp}} = contraseña del APN si el operador lo requiere (dejar en blanco si no es necesario)

4. Configurar el servidor GPRS hacia Plaspy usando dominio e IP con puerto 8888 (Plaspy acepta UDP o TCP en este puerto)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando incluye tanto el dominio d.plaspy.com como la IP 54.85.159.138 y configura el puerto 8888.

5. Establecer el intervalo de actualización de posición a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Estos comandos son ejemplos públicos usados para el aprovisionamiento del GL320MG en muchas instalaciones. Verifique la sintaxis y los parámetros con el firmware de su equipo y la documentación actual de QuecLink antes de usarlos.

## Observaciones sobre la configuración

- La configuración vía SMS se muestra arriba porque estos comandos son ejemplos públicos; algunas instalaciones utilizan herramientas PC de QuecLink o sistemas de aprovisionamiento del proveedor en su lugar.  
- Diferentes versiones de firmware o revisiones de la serie GL300 pueden cambiar la sintaxis de los comandos o los parámetros admitidos. Confirme los comandos con las notas de la versión del firmware.  
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red; Plaspy aceptará cualquiera en el puerto 8888 y detectará automáticamente el protocolo.  
- Use la contraseña del dispositivo que figure en su rastreador o la proporcionada por su proveedor; los ejemplos públicos usan la contraseña por defecto queclink.  
- Siempre pruebe el dispositivo después de aplicar la configuración para confirmar que informa a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Configurar el QuecLink GL320MG para que informe a Plaspy brinda a las organizaciones visibilidad en tiempo real de activos y dispositivos usando un endpoint y puerto de servidor consistentes. La larga duración de batería del GL320MG y su conectividad LTE global lo hacen adecuado para el monitoreo de activos y vehículos, y apuntar los dispositivos a Plaspy centraliza la telemetría para monitoreo, notificaciones y supervisión operativa.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles específicos y actualizaciones sobre configuración de dispositivos, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de QuecLink https://www.queclink.com/.
