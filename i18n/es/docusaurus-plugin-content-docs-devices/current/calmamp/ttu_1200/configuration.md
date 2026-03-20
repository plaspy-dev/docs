---
slug: /calmamp/ttu_1200/configuration
id: ttu_1200-configuration
sidebar_label: Configuration
title: CalmAmp - TTU-1200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp TTU-1200 para conectar con Plaspy usando ajustes de servidor compartidos y comandos SMS
keywords:
  - CalmAmp TTU 1200 configuración
  - CalmAmp TTU 1200 configuración Plaspy
  - CalmAmp configuración de rastreador
  - TTU 1200 configuración de servidor
  - TTU 1200 configuración SMS
  - configuración rastreador de tráiler
  - configuración de dispositivo Plaspy
  - configuración de rastreador GPS
  - configuración seguimiento de vehículos
  - CalAmp PULS gestión
---

# CalmAmp - Configuración del TTU-1200

Esta página documenta el contexto público de configuración para usar el CalmAmp TTU-1200 con la plataforma Plaspy. Resume los ajustes de servidor esenciales que Plaspy requiere, explica el flujo común de configuración y proporciona los comandos SMS públicos que aparecen en la documentación del fabricante. Utilice esta guía para preparar un TTU-1200 para su integración en Plaspy y validar la conectividad una vez configurado.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del distribuidor. El TTU-1200 soporta mensajería por SMS y UDP, y CalAmp también ofrece gestión remota por aire mediante PULS para actualizaciones OTA; elija la vía de configuración que corresponda con su firmware y práctica de instalación.

## Resumen de la configuración

El objetivo de este proceso es preparar un TTU-1200 para que envíe de forma fiable datos de ubicación y eventos a Plaspy y aparezca en su entorno de monitoreo de flotas. La configuración normalmente incluye establecer el APN celular, apuntar el dispositivo a los ajustes de servidor de Plaspy, elegir el método de transporte y validar que el dispositivo reporte correctamente.

- Configure el APN del operador y cualquier credencial APN requerida por la operadora de la SIM.  
- Apunte el dispositivo al dominio o IP del servidor de Plaspy para que pueda establecer una conexión TCP o UDP.  
- Configure el puerto compartido de Plaspy usado por todos los dispositivos para que los mensajes se dirijan al endpoint correcto.  
- Seleccione UDP o TCP según el firmware del dispositivo y las consideraciones de fiabilidad de la red.  
- Valide la conectividad comprobando las respuestas del dispositivo y observando el reporte del rastreador en Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (este mismo puerto se usa para todos los dispositivos en Plaspy)  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Estos valores de servidor son los endpoints públicos de Plaspy que debe usar al configurar el TTU-1200 para que el dispositivo pueda reportar en la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Una unidad TTU-1200 cargada y con alimentación, con acceso a su canal de configuración por SMS o al canal del fabricante.  
- Una tarjeta SIM válida con datos o mensajería habilitada y la información APN correcta para la operadora móvil.  
- Acceso al ID de respuesta del equipo (MID) que devuelve el dispositivo con el comando !R0 cuando se usa la configuración por SMS.  
- Método de configuración del fabricante disponible, como comandos SMS o CalAmp PULS si el dispositivo y la cuenta soportan gestión OTA.  
- Cobertura celular en el área de instalación para permitir que GPRS o el transporte celular llegue a Plaspy.  
- Familiaridad básica con el envío de comandos SMS a dispositivos o acceso a la herramienta de configuración del instalador recomendada por el proveedor.

## Cómo se conecta este rastreador a Plaspy

El TTU-1200 se configura para enviar datos de ubicación y eventos a un endpoint y puerto del servidor Plaspy para que la plataforma pueda ingerir y presentar la telemetría para monitoreo y alertas. Dependiendo de la configuración, usará mensajería UDP o TCP sobre la red celular, y Plaspy identificará el protocolo automáticamente.

- El rastreador envía actualizaciones de ubicación y mensajes de eventos al endpoint compartido de Plaspy.  
- Los mensajes se dirigen al puerto 8888 que Plaspy utiliza para todos los dispositivos.  
- El dispositivo puede usar UDP para transporte ligero de mensajes o TCP para una sesión orientada a conexión según la configuración.  
- Plaspy detecta automáticamente el protocolo y procesa los mensajes entrantes del TTU-1200.  
- Una vez conectado, el rastreador será visible en Plaspy para seguimiento en tiempo real y monitoreo operativo.

## Flujo común de configuración

1. Acceda al método oficial de configuración de CalmAmp para su unidad, ya sea por comandos SMS o por el sistema OTA CalAmp PULS según lo que soporte su cuenta.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor/GPRS del dispositivo.  
3. Configure el puerto del servidor en 8888. Tenga en cuenta que Plaspy utiliza el mismo puerto en todos los dispositivos.  
4. Elija el método de transporte UDP o TCP si el firmware del equipo requiere una selección.  
5. Aplique o guarde la configuración en el dispositivo o envíe los comandos SMS para programar los parámetros.  
6. Reinicie o haga un reboot del equipo si el método de configuración lo requiere para aplicar los ajustes.  
7. Valide que el dispositivo reporte en Plaspy comprobando las respuestas del equipo y confirmando la visibilidad en la plataforma.

Si prefiere la programación por SMS, utilice los comandos SMS del fabricante que se muestran más abajo. Si gestiona dispositivos con PULS, use PULS para enviar parámetros equivalentes y actualizaciones de firmware cuando estén disponibles.

## Ejemplos de comandos de configuración

El TTU-1200 puede configurarse por SMS usando los comandos documentados por el fabricante. El ID referenciado en los comandos SMS es el MID, un identificador de 10 dígitos que se obtiene emitiendo el comando !R0 al dispositivo. Envíe estos mensajes SMS desde un número autorizado para configurar el dispositivo.

1. Solicite el MID para identificar la unidad (útil para confirmar el ID del dispositivo antes de enviar comandos de configuración):

```
!R0
```

2. Configure el APN del operador (reemplazar {{apn}} con la cadena APN de su operadora):

```
!RP,2306,0,{{apn}}
```

3. Configure el nombre de usuario APN si la operadora lo requiere (reemplazar {{apnu}} con el nombre de usuario APN):

```
!RP,2314,0,{{apnu}}
```

4. Configure la contraseña APN si la operadora la requiere (reemplazar {{apnp}} con la contraseña APN):

```
!RP,2315,0,{{apnp}}
```

5. Configure el servidor GPRS para Plaspy usando la IP pública del servidor:

```
!RP,2319,0,54.85.159.138
```

6. Configure el puerto del servidor a 8888 de Plaspy:

```
!RP,769,0,8888
```

7. Reinicie el rastreador para aplicar los cambios (etiquetado aquí como paso de reboot para refrescar la configuración):

```
!R3,70,0
```

Verificación: compruebe los ajustes configurados en el dispositivo con:

```
!RO
```

Notas sobre los marcadores:
- {{apn}} es la cadena APN de la operadora requerida para datos GPRS.  
- {{apnu}} es el nombre de usuario APN opcional para la autenticación con la operadora.  
- {{apnp}} es la contraseña APN opcional para la autenticación con la operadora.  
Mantenga los marcadores tal como aparecen y reemplácelos por las credenciales de la operadora correspondientes a su tarjeta SIM.

## Observaciones sobre la configuración

- El TTU-1200 admite configuración por SMS así como gestión remota vía CalAmp PULS cuando está disponible; elija el método que mejor se adapte a su despliegue y acceso de cuenta.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar nombres de parámetros o la sintaxis de los comandos; confirme los comandos con la respuesta de la unidad y la documentación de CalAmp.  
- Al seleccionar el transporte, UDP suele ser más liviano mientras que TCP puede ofrecer garantías de sesión; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Plaspy utiliza el puerto 8888 para todos los dispositivos, así que asegúrese de usar ese valor de forma consistente al programar varias unidades.  
- Verifique siempre las credenciales APN con su operadora móvil para garantizar que el dispositivo pueda establecer una sesión de datos GPRS/packet data.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp TTU-1200 con Plaspy ofrece a flotas y gestores de activos una vía directa para ingresar datos de ubicación y eventos desde un dispositivo de seguimiento de larga duración para remolques. Configurar la unidad para que apunte al endpoint y puerto del servidor Plaspy permite visibilidad centralizada, reporte de eventos y monitoreo operativo entre dispositivos y tipos de activos.

Para obtener más información sobre Plaspy y cómo presentar y gestionar datos de dispositivos, visite https://www.plaspy.com. Para los comandos específicos más recientes, detalles de firmware y orientación de configuración del fabricante, verifique la información actual en el sitio de CalmAmp en http://www.calamp.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
