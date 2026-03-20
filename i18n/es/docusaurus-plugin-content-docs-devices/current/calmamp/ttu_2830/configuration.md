---
slug: /calmamp/ttu_2830/configuration
id: ttu_2830-configuration
sidebar_label: Configuration
title: CalmAmp - TTU-2830 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para CalmAmp TTU 2830 para conectar con Plaspy usando ajustes compartidos y opciones SMS u OTA
keywords:
  - Configuración CalmAmp TTU-2830
  - Configuración inicial CalmAmp TTU-2830
  - TTU-2830 Plaspy
  - Configuración rastreador GPS CalmAmp
  - Configuración rastreador de remolque
  - Configuración servidor Plaspy
  - Configuración SMS dispositivo GPS
  - Ajustes servidor TTU-2830
  - Configuración evento PEG
---

# CalmAmp - TTU-2830 Configuración

Esta página proporciona el contexto público de configuración para usar el CalmAmp TTU-2830 con Plaspy. Reúne los ajustes de servidor prácticos y los pasos comunes necesarios para apuntar un TTU-2830 a la plataforma Plaspy y validar que el dispositivo reporte correctamente. Cuando están disponibles, se incluyen ejemplos de comandos SMS del dispositivo para facilitar instalaciones en campo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TTU-2830 admite configuración por SMS y por datos celulares, y puede administrarse con herramientas de CalAmp como PULS o mediante comandos SMS para redes que soporten GPRS o mensajería UDP mejorada.

## Resumen de la configuración

Configurar el TTU-2830 para Plaspy prepara el rastreador para establecer un canal de datos fiable hacia el servidor de Plaspy, garantiza que el dispositivo use los parámetros de red correctos y habilita la visibilidad en la plataforma Plaspy. Este proceso normalmente establece el APN y el endpoint del servidor, selecciona el transporte y verifica que el rastreador esté reportando.

- Configure el APN del dispositivo y las credenciales para que pueda abrir una sesión de datos celulares.
- Apunte el rastreador al nombre de host o IP del servidor Plaspy para que los reportes se enruten a Plaspy.
- Establezca el puerto de transporte y el modo UDP o TCP según lo requiera el dispositivo.
- Reinicie o reinicie el rastreador para aplicar los parámetros de red y servidor.
- Verifique los ajustes y confirme que el dispositivo está reportando a Plaspy usando un comando de verificación del fabricante o los registros del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP soportado
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática del protocolo, por lo que los rastreadores configurados para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888 serán reconocidos por la plataforma.

## Requisitos previos típicos

- Una unidad TTU-2830 con batería cargada o conectada, instalada según las indicaciones de CalAmp y con alimentación accesible.
- Una tarjeta SIM activa provisionada para datos celulares (GPRS/HSPA donde aplique) y capaz de enviar y recibir SMS si se va a usar configuración por SMS.
- Acceso al MID o ID del dispositivo devuelto por el comando de verificación para que los comandos SMS de configuración puedan dirigirse correctamente.
- Acceso a herramientas de configuración de CalAmp como PULS o a un teléfono con capacidad de enviar SMS para mandar comandos de configuración.
- Una cuenta de Plaspy o instrucciones de integración para confirmar la aparición y visibilidad del dispositivo en la plataforma una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El TTU-2830 se configura para reportar ubicaciones y mensajes del dispositivo a través de redes celulares al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes y los asigna a dispositivos, usando detección automática de protocolo para interpretar el protocolo del rastreador.

- El dispositivo utiliza datos celulares (GPRS/HSPA o redes soportadas) para abrir una sesión hacia d.plaspy.com o 54.85.159.138.
- Los reportes de datos y eventos se envían al puerto 8888 usando UDP o TCP según la configuración del dispositivo.
- Las reglas PEG de CalAmp y la lógica de eventos a bordo pueden generar mensajes que se entregan a Plaspy para alertas o registro.
- Una vez que el dispositivo reporta, se vuelve visible en Plaspy para monitoreo de ubicación, estado y eventos.
- La detección automática de protocolo de Plaspy elimina, en la mayoría de los casos, la necesidad de seleccionar manualmente un protocolo de rastreador.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de CalAmp que vaya a utilizar, como comandos SMS o la gestión OTA con PULS.
2. Obtenga el ID o MID del dispositivo ejecutando el comando de verificación para que posteriormente se acepten los comandos SMS dirigidos.
3. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo del servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Elija el transporte UDP o TCP si el dispositivo requiere una selección explícita.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para activar los nuevos parámetros.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, usando el comando de verificación del dispositivo o consultando la lista de dispositivos en Plaspy.

## Ejemplos de comandos de configuración

El TTU-2830 puede configurarse por SMS. Los siguientes comandos públicos por SMS se presentan en orden y usan el MID del dispositivo como ID objetivo. El ID es el MID de 10 dígitos que devuelve la respuesta al comando de verificación indicado más abajo.

1. Obtenga el MID o ID del dispositivo (envíe esto al dispositivo y lea su respuesta)
```
!R0
```

2. Configure el APN del operador (reemplace {{apn}} con el APN del operador)
```
!RP,2306,0,{{apn}}
```

3. Configure el usuario del APN si es necesario (reemplace {{apnu}} con el usuario APN)
```
!RP,2314,0,{{apnu}}
```

4. Configure la contraseña del APN si es necesaria (reemplace {{apnp}} con la contraseña APN)
```
!RP,2315,0,{{apnp}}
```

5. Establezca el servidor GPRS a Plaspy por IP
```
!RP,2319,0,54.85.159.138
```

6. Establezca el puerto del servidor a 8888 (puerto de Plaspy)
```
!RP,769,0,8888
```

7. Reinicie el rastreador para aplicar los cambios (recomendado)
```
!R3,70,0
```

Comando de verificación para revisar los ajustes (devuelve la configuración actual)
```
!RO
```

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN del operador celular requerida para conectividad de datos.
- {{apnu}} es el usuario del APN cuando el operador exige autenticación.
- {{apnp}} es la contraseña del APN cuando el operador exige autenticación.
- Envíe los comandos de usuario y contraseña únicamente si su operador o SIM los requiere.

## Notas de configuración

- Las versiones de firmware y software pueden cambiar nombres de comandos o índices de parámetros; verifique la sintaxis de los comandos con respecto a las notas de firmware del dispositivo antes de enviar SMS.
- La gestión OTA CalAmp PULS puede proporcionar una alternativa al SMS para aprovisionamiento masivo y actualizaciones posteriores según su contrato de servicio.
- Elija UDP o TCP según la confiabilidad de la red y las consideraciones NAT de routers o carriers; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- La configuración por SMS es útil para instalaciones en campo sin conexión de datos, pero asegúrese de que la SIM soporte SMS y datos para un funcionamiento completo.
- Confirme siempre el MID o ID del dispositivo usando el comando de verificación antes de aplicar comandos SMS dirigidos.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp TTU-2830 con Plaspy ofrece una ruta sencilla para integrar un rastreador de remolque o activo en una plataforma de monitoreo centralizada. La batería interna del TTU-2830 y sus capacidades de red, combinadas con el endpoint compartido de Plaspy, permiten a las organizaciones obtener visibilidad de ubicación y recibir reportes accionados por eventos con una configuración mínima por dispositivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos más recientes del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio de CalAmp http://www.calamp.com/ ya que las especificaciones y los procedimientos de configuración del fabricante pueden cambiar con el tiempo.
