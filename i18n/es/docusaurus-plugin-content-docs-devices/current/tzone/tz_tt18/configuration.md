---
slug: /tzone/tz_tt18/configuration
id: tz_tt18-configuration
sidebar_label: Configuration
title: TZone - TZ-TT18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para preparar el TZone TZ-TT18 y usarlo con Plaspy mediante la configuración de servidor compartido
keywords:
  - Configuración TZone TZ TT18
  - Configurar TZ TT18 para Plaspy
  - Configuración de servidor TZone TZ TT18
  - Configuración rastreador GPS TZ TT18
  - Configuración GPRS TZ TT18
  - Configuración de dispositivo Plaspy
  - Configuración transmisor temperatura humedad
  - Comandos SMS TZone
  - Configuración transmisor cadena fría
  - Configuración seguimiento de vehículos y activos
---

# TZone - TZ-TT18 Configuración

Esta página describe la configuración pública necesaria para usar el transmisor de temperatura y humedad de un solo uso TZone TZ-TT18 con Plaspy. Se concentra en los ajustes de servidor compartido y en los pasos prácticos para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda enviar lecturas de temperatura y humedad mediante GPRS. Cuando los comandos del fabricante son públicos, se incluyen como ejemplos.

Plaspy emplea un punto de conexión y un puerto comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; el TZ-TT18 admite configuración por SMS y reporte por GPRS, y los comandos que se muestran abajo representan un flujo típico de SMS para configurar este modelo.

## Resumen de la configuración

El objetivo de esta configuración es dejar al TZ-TT18 preparado para reportar de manera fiable datos de temperatura y humedad a Plaspy vía GPRS. Esto incluye proporcionar los datos del APN del operador, configurar el dispositivo para usar el punto de conexión y el puerto de Plaspy, y habilitar el reporte por GPRS para que el equipo despierte, envíe datos y vuelva a modo de bajo consumo entre reportes.

- Proveer el APN del operador para que el dispositivo se conecte a la red de datos móviles.
- Establecer un intervalo de reporte apropiado para la frecuencia de transmisión requerida.
- Apuntar el dispositivo al endpoint y puerto de Plaspy para que los datos lleguen a la plataforma.
- Habilitar el modo GPRS para que el rastreador envíe lecturas almacenadas y en tiempo real a Plaspy.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy después de la configuración.

## Parámetros del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888 (device may be configured for either)  
- Plaspy behavior: Plaspy automatically detects the tracker protocol when data arrives and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa insertada en el TZ-TT18 con un plan de datos y los datos del APN del operador disponibles.  
- El rastreador debe tener carga de batería suficiente para completar la configuración inicial y el registro en GPRS.  
- Un método para enviar comandos SMS al dispositivo (el TZ-TT18 soporta configuración por SMS).  
- Acceso a las instrucciones o herramientas oficiales del fabricante para el TZ-TT18 para confirmar especificaciones según modelo o firmware.  
- Cobertura de datos GPRS en el lugar donde se desplegará el dispositivo para que pueda alcanzar Plaspy mediante la red móvil.

## Cómo se conecta este rastreador a Plaspy

El TZ-TT18 recolecta muestras de temperatura y humedad y las reporta a Plaspy usando GPRS. La configuración indica al dispositivo qué servidor contactar y con qué frecuencia despertar y enviar mediciones, lo que permite a Plaspy mostrar la telemetría y el historial para monitoreo y alertas.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy.  
- El rastreador usa GPRS para abrir una conexión a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes para su visualización en la plataforma.  
- Los reportes se envían según el intervalo configurado para que Plaspy muestre lecturas recientes e históricas.  
- Cuando está correctamente configurado, el dispositivo queda visible en Plaspy para monitoreo operativo y generación de eventos.

## Flujo de configuración común

1. Confirme los prerequisitos: inserte una SIM funcional, anote el APN del operador y asegúrese de que el dispositivo tenga energía.  
2. Revise el método oficial de configuración del fabricante o el software y consulte el formato de comandos SMS para el TZ-TT18.  
3. Configure el APN en el dispositivo usando el formato de comando SMS mostrado abajo para que el rastreador pueda usar GPRS.  
4. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.  
5. Elija UDP o TCP en el dispositivo si requiere selección explícita del transporte.  
6. Aplique o guarde la configuración y active el modo GPRS en el rastreador.  
7. Reinicie el dispositivo si el fabricante lo solicita o como parte de sus pasos de verificación.  
8. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con las lecturas de sensores esperadas.

## Comandos de configuración de ejemplo

El TZ-TT18 puede configurarse enviando mensajes SMS. Los siguientes comandos SMS públicos aparecen en la documentación del fabricante y muestran un orden común para la configuración inicial. Mantenga los marcadores de posición y reemplace con sus valores de operador según corresponda.

1. Configure el APN del operador (el usuario y la contraseña del APN son opcionales). Reemplace {{apn}} por el APN de su SIM y opcionalmente proporcione {{apnu}} y {{apnp}} si su operador los requiere.

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

Si no se necesita usuario ni contraseña, use la forma más simple:

```
*000000,011,{{apn}}#
```

2. Establezca el intervalo de actualización a 60 segundos (este ejemplo fija el intervalo y un parámetro de reintento o modo según lo usa el dispositivo).

```
*000000,018,60,999#
```

3. Configure el servidor GPRS hacia el endpoint de Plaspy usando la IP y el puerto públicos. Este ejemplo usa la IP y puerto públicos de Plaspy.

```
*000000,015,0,54.85.159.138,8888#
```

También puede apuntar el dispositivo al dominio en lugar de la IP si el dispositivo acepta nombres de dominio en este comando (use d.plaspy.com), de lo contrario utilice la IP como se muestra.

4. Active el modo GPRS para que el dispositivo use reporte por datos:

```
*000000,016,1#
```

Notas sobre marcadores de posición y valores:
- {{apn}} es la cadena APN de su operador móvil.  
- {{apnu}} es el usuario del APN cuando el operador lo exige.  
- {{apnp}} es la contraseña del APN cuando el operador lo exige.  
- La secuencia numérica inicial 000000 en estos ejemplos es la contraseña de comandos del dispositivo según las formas públicas; confirme la contraseña correcta para su unidad en la documentación del fabricante o con el proveedor.

## Observaciones sobre la configuración

- Los ejemplos usan comandos SMS para configurar el TZ-TT18; versiones de firmware del fabricante o variantes regionales pueden alterar el formato de los comandos.  
- Seleccione UDP o TCP en el dispositivo según su red y proveedor; Plaspy acepta ambos transportes y detectará el protocolo automáticamente.  
- Plaspy utiliza el mismo puerto (8888) para todos los dispositivos compatibles; asegúrese de que su dispositivo esté configurado con ese puerto.  
- Dado que el TZ-TT18 entra en modo de sueño entre ventanas de reporte para ahorrar batería, permita tiempo para que el dispositivo despierte y realice una sesión GPRS exitosa durante las pruebas.  
- Siempre confirme los detalles del APN y cualquier ajuste específico del operador antes de enviar comandos SMS de configuración.

## Por qué usar Plaspy con esta configuración

Usar el TZ-TT18 con Plaspy ofrece una vía sencilla para capturar la telemetría de temperatura y humedad de activos distribuidos y disponer de esos datos en una plataforma centralizada. Para aplicaciones como la logística de cadena fría, almacenamiento médico y monitorización de refrigeración, configurar el dispositivo para reportar a Plaspy garantiza que las lecturas ambientales se registren y estén disponibles para revisión operativa, alertas y conservación de registros.

Para obtener más información sobre Plaspy y los dispositivos soportados visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos exactos de configuración pueden cambiar con el tiempo, por lo que debe verificar los detalles específicos más recientes en el sitio oficial de TZone en http://www.tzonedigital.com/.
