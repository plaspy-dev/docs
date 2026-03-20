---
slug: /sinotrack/st_905/configuration
id: st_905-configuration
sidebar_label: Configuration
title: SinoTrack - ST-905 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-905 y reportar a Plaspy vía SMS o GPRS
keywords:
  - Configuración SinoTrack ST-905
  - Configuración ST-905
  - Configuración ST-905 Plaspy
  - Configuración servidor ST-905
  - Configuración rastreador GPS SinoTrack
  - Configuración SMS ST-905
  - Configuración APN ST-905
  - Configuración rastreador GPS Plaspy
  - Rastreo de vehículos ST-905
  - Gestión de flotas ST-905
---

# SinoTrack - Configuración ST-905

Esta página documenta el contexto público de configuración para utilizar el SinoTrack ST-905 con Plaspy. Explica los comandos SMS publicados por el fabricante y los ajustes de servidor de Plaspy necesarios para apuntar el tracker al endpoint de ingestión de Plaspy y habilitar el rastreo en tiempo real e integración con la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando llegan los datos. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use los ejemplos de comandos SMS que se muestran abajo como guía pública y verifique cualquier comportamiento específico del dispositivo con la documentación oficial de SinoTrack.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el ST-905 para que reenvíe reportes de posición por GPRS a la plataforma Plaspy y aparezca como un dispositivo en línea en Plaspy. Los pasos habituales incluyen configurar el APN, definir la dirección y el puerto del servidor GPRS, activar el modo de reportes GPRS y verificar que el tracker reporte correctamente.

- Configurar el APN del dispositivo y el servidor GPRS para que los paquetes se envíen a Plaspy
- Ajustar los intervalos de reporte para equilibrar la frescura de la ubicación y la duración de la batería
- Cambiar el tracker a modo GPRS para que envíe paquetes de posición por la conexión de datos móviles
- Verificar la configuración con el comando de verificación del tracker para confirmar que reporta a Plaspy
- Validar la visibilidad y telemetría del dispositivo en Plaspy después de la configuración

## Ajustes del servidor Plaspy

Al configurar el ST-905 para que funcione con Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker en las conexiones entrantes
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para los dispositivos compatibles

## Requisitos típicos antes de empezar

- Un ST-905 cargado con una tarjeta SIM funcional que tenga datos GPRS habilitados
- Acceso a un teléfono que pueda enviar comandos SMS de configuración al tracker
- El APN, usuario del APN y contraseña del APN del operador móvil que vaya a usar
- El IMEI del dispositivo y cualquier ID requerido para confirmar qué tracker está reportando
- Conocimiento de la versión de firmware del tracker o herramientas del proveedor si planea usar utilidades además de SMS
- Acceso a la documentación oficial de SinoTrack o soporte del proveedor para preguntas específicas del dispositivo

## Cómo se conecta este tracker a Plaspy

El ST-905 se configura para enviar reportes de ubicación y estado a través de la red de datos celulares al endpoint de servidor de Plaspy. Una vez que el tracker tiene configurados el servidor GPRS y el APN y el modo GPRS está habilitado, enviará paquetes de posición a Plaspy para su procesamiento y visualización.

- El tracker envía paquetes de datos GPRS periódicos a la IP y puerto configurados
- Plaspy recibe los paquetes en el puerto 8888 y determina automáticamente el protocolo del dispositivo
- La visibilidad del dispositivo en Plaspy se establece después de que el tracker se autentique o se identifique con su ID de dispositivo
- Los intervalos de reporte controlan la frecuencia con la que llegan las actualizaciones de posición a Plaspy
- Funciones de la plataforma como alertas, geovallas e historial están disponibles una vez que el ST-905 reporta correctamente al servidor de Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software. Para el ST-905 esto comúnmente implica enviar comandos SMS como documenta SinoTrack.
2. Prepare las credenciales APN para su SIM y confirme que GPRS está disponible.
3. Ingrese la dirección del servidor Plaspy enviando el dominio d.plaspy.com o la IP 54.85.159.138 al tracker donde sea compatible.
4. Configure el puerto a 8888 en la configuración del dispositivo y elija UDP o TCP si el tracker requiere selección explícita del transporte.
5. Aplique o guarde la configuración enviando los comandos SMS adecuados y cambie el dispositivo al modo de reporte GPRS.
6. Reinicie o corte la alimentación del tracker si el firmware lo requiere para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en el panel de Plaspy

## Comandos de configuración de ejemplo

El ST-905 admite comandos de configuración por SMS. Los comandos siguientes son los publicados públicamente para los trackers SinoTrack y conservan el orden recomendado para la configuración inicial. Use un número de teléfono de confianza para enviar estos SMS al dispositivo. Mantenga los marcadores de posición tal como se muestran cuando corresponda.

- Reinicio inicial opcional para restaurar ajustes de fábrica. Use solo si desea borrar la configuración existente.
```text
RESET
```

- Ajustar la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN del operador. Reemplace los marcadores de posición con los valores de su operador
```text
8030000 [apn] [apnu] [apnp]
```
Explicación de los marcadores de posición
- [apn] es el nombre del APN del operador móvil
- [apnu] es el usuario del APN si el operador lo requiere; de lo contrario deje en blanco o envíe un marcador vacío según indique el proveedor
- [apnp] es la contraseña del APN si el operador la exige

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP numérica y el puerto mostrados en la documentación de SinoTrack
```text
8040000 54.85.159.138 8888
```
Nota: Este ejemplo usa la IP numérica del servidor según los ejemplos SMS públicos de SinoTrack. Si su dispositivo admite nombres de dominio, podría usar d.plaspy.com en lugar de la IP, pero verifique el soporte de dominios en el manual del dispositivo.

- Establecer el intervalo de actualización cuando el dispositivo está encendido
```text
8050000 60
```

- Establecer el intervalo de actualización cuando el dispositivo está apagado o en bajo consumo
```text
8090000 60
```

- Cambiar el tracker al modo de reporte GPRS
```text
7100000
```

- Verificar la configuración actual y recuperar parámetros del dispositivo
```text
RCONF
```

Utilice la respuesta de verificación RCONF para confirmar que el APN, la IP del servidor, el puerto y los intervalos de reporte están configurados según lo previsto.

## Notas sobre la configuración

- La configuración por SMS es un método habitual para el ST-905, pero las versiones de firmware y las herramientas del proveedor pueden cambiar el formato y el comportamiento exacto de los comandos.
- El comando de servidor de ejemplo anterior usa una IP numérica según los ejemplos SMS publicados por SinoTrack. Confirme si su dispositivo acepta nombres de dominio si prefiere usar d.plaspy.com.
- Elija UDP o TCP según los requisitos del dispositivo. Plaspy acepta cualquiera de los dos transportes y detecta automáticamente el protocolo utilizado por el dispositivo entrante.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles. Use el puerto 8888 al configurar el tracker.
- Siempre confirme los comandos y las respuestas con la documentación oficial de SinoTrack para la revisión de firmware específica de su dispositivo

## Por qué usar Plaspy con esta configuración

Apuntar el SinoTrack ST-905 a Plaspy ofrece un camino directo para el rastreo en tiempo real, reproducción histórica y alertas sin necesidad de alojar una plataforma propietaria. Para protección de activos discretos y visibilidad de flotas, el ST-905 combinado con Plaspy puede ofrecer reportes de posición, monitoreo de estado y intervalos de actualización configurables que equilibran la duración de la batería y las necesidades de rastreo.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and firmware behavior on the SinoTrack official website https://www.sinotrackgps.com/ for the most current manufacturer details.
