---
slug: /istartek/vt005/configuration
id: vt005-configuration
sidebar_label: Configuration
title: iStartek - VT005 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek VT005 con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos de despliegue
keywords:
  - configuración iStartek VT005
  - configuración inicial iStartek VT005
  - configuración servidor VT005
  - configuración VT005 Plaspy
  - configuración rastreador GPS iStartek
  - configuración rastreador Plaspy
  - rastreo vehicular VT005
  - configuración OBD II VT005
  - configuración dispositivo Plaspy
  - configuración rastreador GPS VT005
---

# iStartek - VT005 Configuración

Esta página documenta el contexto público de configuración para utilizar el iStartek VT005 con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo, describe los prerequisitos típicos y presenta los comandos SMS de configuración del VT005 que se usan comúnmente para preparar el tracker para reportar a Plaspy. Use esta guía para entender cómo enrutar la telemetría del VT005 hacia Plaspy y para validar la conectividad básica antes de completar el aprovisionamiento de dispositivos en su flota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El VT005 admite configuración por SMS y reporte TCP sobre datos celulares; esta página se centra en los ajustes públicos relevantes para la compatibilidad con Plaspy y en los pasos prácticos para configurar y verificar el dispositivo.

## Resumen de la configuración

Configurar el VT005 para Plaspy prepara el dispositivo para enviar datos de ubicación, diagnóstico y eventos a un endpoint centralizado para que Plaspy pueda ingerir y mostrar esos datos en tiempo real. El proceso normalmente establece el APN y los parámetros del servidor, selecciona el transporte (si es necesario) y confirma que el dispositivo está reportando correctamente a la plataforma. Si planea usar SMS para la configuración, el VT005 acepta comandos SMS para estos ajustes; los comandos se muestran a continuación.

- Apunte el VT005 a los ajustes del servidor Plaspy para que la telemetría y los eventos lleguen a la plataforma.
- Configure el APN celular y las credenciales APN necesarias para permitir datos GPRS/4G.
- Elija el transporte (UDP o TCP) si el dispositivo requiere una selección y configure el puerto compartido de Plaspy.
- Valide la conectividad con un comando de verificación de parámetros y confirme que los datos aparecen en Plaspy.
- Opcionalmente, restablezca a los valores de fábrica antes de un despliegue masivo para asegurar un comportamiento consistente.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en dominio.
- IP del servidor 54.85.159.138 para configuración por IP directa.
- Puerto 8888 que Plaspy usa para las conexiones de los dispositivos.
- Soporte de transporte: configure el tracker para usar UDP o TCP en el puerto 8888 si el dispositivo requiere seleccionar el transporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que siempre configurará el puerto 8888 para los trackers compatibles.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que la plataforma puede aceptar diferentes protocolos de dispositivo en el mismo endpoint del servidor.

## Requisitos típicos antes de la configuración

- Una unidad VT005 instalada en el puerto OBD II del vehículo o colocada según la guía de instalación del dispositivo y con alimentación.
- Una tarjeta SIM celular activa con plan de datos habilitado para GPRS/4G y capacidad de SMS si usará configuración vía SMS.
- Información del APN proporcionada por el operador móvil y cualquier usuario o contraseña APN si son requeridos.
- Acceso al método de configuración del fabricante del VT005, como comandos SMS o software de configuración del proveedor.
- Un proceso para verificar el reporte en Plaspy (acceso a cuenta Plaspy o vista de administrador de flota) para confirmar que el dispositivo aparece como en línea.
- Conocimiento de la versión de firmware o variante de hardware del dispositivo cuando sea posible, ya que los conjuntos de comandos y el comportamiento pueden variar.

## Cómo se conecta este rastreador a Plaspy

El VT005 se configura para enviar actualizaciones de ubicación, diagnósticos OBD II y alertas de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, procesar y mostrar los datos para operaciones de flota. El reporte se realiza normalmente por TCP (o UDP si se elige) usando la conexión de datos celulares; los SMS pueden usarse como respaldo o para configuración remota cuando sea necesario. El dispositivo también puede almacenar registros GPS cuando la conectividad de red no está disponible y subir los registros almacenados una vez que se restaure la conexión.

- El tracker envía posiciones GPS y LBS a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- La telemetría y las banderas de eventos (encendido, colisión, manipulación, diagnósticos OBD II) se reenvían a Plaspy para alertas e informes.
- Los registros de ubicación almacenados se cargan después de la restauración de la red para preservar el historial de rutas.
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta al servidor y puerto compartidos.
- Elija UDP o TCP en el dispositivo si se requiere la selección de transporte; ambos son compatibles en Plaspy en el puerto 8888.

## Flujo común de configuración

1. Acceda al método oficial de configuración del iStartek VT005 — normalmente comandos SMS o herramientas del proveedor — y confirme que el dispositivo es accesible para configuración.
2. Ingrese el APN provisto por su operador móvil usando el comando APN para que el VT005 pueda establecer datos celulares.
3. Configure la dirección del servidor como d.plaspy.com o como la IP directa 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte para el reporte.
5. Aplique o guarde la configuración en el dispositivo y, si corresponde, reinicie el equipo o corte y restablezca la alimentación para asegurar que los ajustes entren en vigor.
6. Valide el reporte del dispositivo revisando parámetros y confirmando que el VT005 aparece en línea en Plaspy y está enviando actualizaciones de ubicación.
7. Si administra flotas, repita o automatice estos pasos para despliegue masivo y mantenga un registro de versiones de firmware y perfiles APN utilizados.

## Comandos de configuración de ejemplo

El VT005 admite configuración vía SMS. A continuación se muestran los comandos SMS de uso común presentados en el orden recomendado para la configuración inicial. Envíe cada comando como SMS al número del dispositivo. Las etiquetas y notas siguen a cada comando para explicar su propósito y los marcadores de posición.

1. Restablecimiento de fábrica opcional (usar solo cuando sea necesario para borrar configuraciones previas)
```
FACTORY#
```

2. Establecer la zona horaria a UTC-0 (ejemplo)
```
GMT,E,0#
```

3. Establecer el APN del operador
- Reemplace [apn] por el APN de su operador móvil.
- Si su operador requiere usuario o contraseña APN, suministre [apnu] y [apnp] respectivamente. Mantenga los marcadores de posición si va a sustituirlos por valores reales.
```
APN,[apn]# 
```
O, si se necesita usuario y contraseña:
```
APN,[apn],[apnu],[apnp]#
```

4. Configurar el servidor GPRS para usar el dominio de Plaspy en el puerto 8888 (la elección TCP o UDP depende del dispositivo)
- Use la opción por dominio:
```
SERVER,1,d.plaspy.com,8888#
```
- O use la opción por IP directa:
```
SERVER,0,54.85.159.138,8888#
```

5. Establecer el intervalo de actualización periódica a 60 segundos
```
TIMER,60#
```

6. Verificar los parámetros actuales
```
PARAM#
```

Notas sobre estos comandos:
- Mantenga el orden al desplegar ajustes iniciales: APN primero, luego SERVER, después TIMER y verificación.
- El comando APN muestra marcadores de posición [apn], [apnu] y [apnp] que deben reemplazarse por los valores de su operador si son requeridos.
- El comando SERVER se muestra tanto en forma basada en dominio como en forma basada en IP; use la que sea apropiada para su entorno.

## Notas sobre la configuración

- La configuración por SMS está documentada públicamente para el VT005 y es útil cuando un dispositivo no tiene conexión de datos inmediata; asegúrese de que el plan o crédito permita SMS salientes/entrantes durante la configuración.
- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o la sintaxis; siempre verifique el conjunto de comandos con las notas de la versión de firmware del dispositivo cuando sea posible.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del dispositivo cuando el tracker se conecte.
- El usuario y la contraseña del APN son opcionales en muchas regiones, pero obligatorios en algunos operadores; incluya [apnu] y [apnp] cuando su operador lo solicite.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, confirmar el puerto correcto (8888) y la dirección del servidor es crítico para la visibilidad inmediata en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el VT005 con Plaspy ofrece a las organizaciones una vía simple hacia la visibilidad centralizada del vehículo, alertas basadas en eventos y diagnósticos básicos sin cableado complejo. La forma OBD II plug-and-play del VT005, combinada con la detección automática de protocolos de Plaspy y los ajustes de servidor compartidos, simplifica el despliegue en flotas y asegura que la telemetría del dispositivo llegue a la plataforma para monitoreo, informes y generación de alertas.

Learn more about Plaspy at https://www.plaspy.com and review the latest device-specific setup details and firmware notes at the manufacturer site https://istartek.com/ to confirm commands, firmware behavior, and any updates to configuration methods.
