---
slug: /ev/ev_601/configuration
id: ev_601-configuration
sidebar_label: Configuration
title: EV - EV-601 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador EV-601 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos de instalación
keywords:
  - configuración EV EV-601
  - instalación EV EV-601
  - EV EV-601 Plaspy
  - configuración rastreador EV
  - configuración rastreador GPS vehicular
  - configuración servidor Plaspy
  - comandos SMS rastreador GPS
  - configuración GSM GPRS rastreador
  - configuración APN EV-601
  - detección protocolo rastreador
---

# EV - Configuración del EV-601

Esta página describe el contexto público de configuración para usar el rastreador EV EV-601 con Plaspy. Explica los ajustes públicos del servidor Plaspy a los que debe apuntar el dispositivo, los comandos SMS de configuración publicados por el fabricante y los pasos generales necesarios para que el EV-601 reporte información a Plaspy para monitoreo vehicular en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando está disponible, esta página incluye los comandos SMS públicos para el EV-601 y orientación sobre cómo esos comandos se relacionan con los ajustes del servidor Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el EV-601 para que comunique de forma confiable datos de ubicación y eventos a la plataforma Plaspy. Los comandos públicos del fabricante muestran la configuración por SMS como un método admitido; Plaspy acepta el tráfico del dispositivo en un único puerto compartido y detecta el protocolo automáticamente.

- Configure el APN y el acceso a la red para que el dispositivo pueda enviar datos GPRS a Plaspy.
- Ajuste la zona horaria y parámetros básicos para que las marcas de tiempo sean correctas.
- Apunte el rastreador al endpoint del servidor Plaspy para que los reportes lleguen a la plataforma.
- Valide el transporte (UDP o TCP) y confirme que el dispositivo está enviando al puerto compartido de Plaspy.
- Compruebe que el rastreador aparece en Plaspy y que está enviando actualizaciones de ubicación y eventos.

## Ajustes del servidor Plaspy

Al configurar el EV-601 para su uso con Plaspy, utilice los siguientes ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 as the device requires  
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol to Plaspy beyond the transport choice

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo de forma automática.

## Requisitos típicos antes de la configuración

- Un dispositivo EV-601 alimentado e instalado o accesible para la configuración y pruebas.  
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil. El EV-601 soporta comunicaciones GSM GPRS y puede configurarse por SMS.  
- Acceso al método de configuración por SMS del fabricante o a la herramienta de instalador autorizada para el EV-601.  
- La contraseña por defecto del dispositivo si se requiere para la configuración por SMS (la documentación pública indica que la contraseña por defecto del EV-601 es 123456).  
- Información de contacto del fabricante o vendedor si el dispositivo requiere habilitar opciones para cambiar el servidor antes de poder establecer uno personalizado.  
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para verificar que el dispositivo aparece y reporta tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El EV-601 generalmente envía datos de ubicación y estado a Plaspy a través de la red de datos móviles una vez que se aplican los ajustes de APN y servidor. Plaspy recibe el tráfico del rastreador en un endpoint y puerto compartidos, y detecta automáticamente el protocolo utilizado por el dispositivo.

- El dispositivo debe configurarse para reportar al endpoint compartido de Plaspy d.plaspy.com o al IP equivalente 54.85.159.138.  
- Los datos se envían al puerto 8888 en ese endpoint.  
- El rastreador puede usar transporte UDP o TCP; elija el que soporte el dispositivo y permita la red.  
- Plaspy detecta automáticamente el protocolo del rastreador para que los mensajes entrantes se enruten correctamente en la plataforma.  
- Si se utilizan reportes por SMS o respuestas a comandos, esos se mantienen separados del canal de datos GPRS y se gestionan por SMS estándar.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante EV. En muchas instalaciones esto implica comandos SMS o una herramienta de instalador autorizada.  
2. Asegúrese de que el dispositivo tenga una SIM con datos activa y configure el APN del operador móvil. Utilice los valores de APN que solicite el proveedor de la SIM.  
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo según lo permita el equipo.  
4. Establezca el puerto del servidor en 8888. Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
5. Si el dispositivo exige seleccionar el tipo de transporte, elija UDP o TCP según la capacidad del equipo y las condiciones de red. Plaspy admite ambos en el puerto 8888.  
6. Aplique o guarde la configuración del dispositivo; si el equipo requiere una opción o firmware específico para permitir cambiar el servidor, contacte al fabricante o al vendedor para habilitar esa opción.  
7. Reinicie o haga un ciclo de alimentación del dispositivo si es necesario y verifique que el EV-601 reporta a Plaspy y aparece en la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del EV-601 se proporcionan como comandos SMS en la documentación del fabricante. La contraseña por defecto del dispositivo indicada en materiales públicos es 123456. Envíe estos comandos por SMS al dispositivo en el orden siguiente como parte de la configuración inicial.

- Establecer la zona horaria a UTC+0 (contraseña por defecto 123456):
```
123456L+00
```

- Configurar el APN del operador. Reemplace {{apn}} con el APN de su operador. Si su operador requiere usuario o contraseña para el APN, incluya {{apnu}} y {{apnp}} respectivamente. Los campos de usuario y contraseña son opcionales y solo deben incluirse si su proveedor los exige:
```
123456S1,{{apn}},{{apnu}},{{apnp}}
```

- Establecer la IP del servidor y el puerto para Plaspy. Tenga en cuenta que la documentación del fabricante indica que puede necesitar contactar al fabricante para habilitar la opción de cambiar el servidor antes de que este comando sea aceptado:
```
123456I1,54.85.159.138,8888
```

Notas importantes sobre los comandos anteriores:
- Los comandos se envían por SMS al número del dispositivo a menos que esté utilizando una herramienta oficial alternativa de configuración.  
- La contraseña SMS por defecto indicada en documentación pública es 123456; si usted cambió la contraseña del dispositivo, utilice la contraseña actual.  
- El comando de servidor utiliza la IP del servidor Plaspy y el puerto compartido 8888; Plaspy aceptará tráfico a d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectará automáticamente el protocolo.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los pasos requeridos; verifique con la documentación del fabricante si un comando es rechazado.  
- El EV-601 soporta la configuración por SMS en los ejemplos públicos, lo cual es útil cuando no hay acceso directo a una herramienta de configuración.  
- Elija UDP o TCP según el comportamiento de la red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Algunas unidades EV-601 pueden requerir que el vendedor o el fabricante habilite la opción de cambiar el servidor antes de aceptar comandos de servidor personalizados. Contacte al vendedor si es necesario.  
- Mantenga las credenciales de APN seguras; los marcadores {{apn}}, {{apnu}} y {{apnp}} representan el APN, el usuario del APN y la contraseña del APN respectivamente y deben completarse con los valores de su operador.

## Por qué usar Plaspy con esta configuración

Configurar el EV-601 para que reporte a Plaspy brinda a administradores de flotas y propietarios de vehículos visibilidad centralizada de la ubicación en vivo, eventos y alertas en una sola plataforma. Usar el endpoint compartido de Plaspy y los comandos SMS documentados permite una vía de integración directa para dispositivos que soportan GSM GPRS y SMS.

Si desea conocer más sobre Plaspy y cómo puede aceptar datos del EV-601, visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante del EV-601, verifique la información actual en el sitio del fabricante http://www.eviewltd.com/.
