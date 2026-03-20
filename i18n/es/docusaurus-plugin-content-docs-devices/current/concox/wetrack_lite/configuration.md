---
slug: /concox/wetrack_lite/configuration
id: wetrack_lite-configuration
sidebar_label: Configuration
title: Concox - Wetrack Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox Wetrack Lite con ajustes de servidor Plaspy, comandos SMS y pasos de verificación
keywords:
  - configuración Concox Wetrack Lite
  - instalación Concox Wetrack Lite
  - Wetrack Lite con Plaspy
  - configuración rastreador GPS Wetrack Lite
  - ajustes de servidor Concox
  - configuración APN Wetrack Lite
  - configuración seguimiento de flotas Wetrack Lite
  - comandos SMS Wetrack Lite
  - configuración rastreador vehicular Plaspy
  - ajustes servidor GPRS Wetrack Lite
---

# Concox - Wetrack Lite Configuración

Esta página describe el contexto público de configuración para usar el tracker Concox Wetrack Lite con Plaspy. Se centra en los ajustes prácticos de servidor y dispositivo necesarios para dirigir el tracker hacia Plaspy, además de los comandos SMS de ejemplo que publica el fabricante para la configuración GPRS y del servidor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use los comandos y el flujo a continuación como una base práctica y consulte la documentación oficial de Concox para diferencias específicas del dispositivo.

## Resumen de la configuración

Preparar un Wetrack Lite para integrarlo con Plaspy implica configurar el dispositivo para que envíe paquetes GNSS y de eventos a Plaspy a través de la red celular, verificar la conectividad y confirmar que el tracker aparece en la plataforma Plaspy. El conjunto de comandos SMS públicos del modelo ofrece una forma directa de aplicar estos ajustes en dispositivos que aceptan configuración por SMS.

- Configure el APN de GPRS para que el dispositivo tenga acceso a datos móviles y pueda reportar a Plaspy.
- Establezca la dirección o IP del servidor Plaspy y el puerto compartido que usan todos los dispositivos en Plaspy.
- Seleccione transporte UDP o TCP en el tracker cuando sea necesario y active el reporte por GPRS.
- Defina un intervalo de reporte periódico para controlar la frecuencia de actualizaciones y el comportamiento del buffer.
- Verifique los parámetros del tracker y confirme que el dispositivo es visible en Plaspy después de la configuración.

## Ajustes de servidor de Plaspy

- Dominio de servidor: d.plaspy.com como endpoint de Plaspy
- IP del servidor: 54.85.159.138 como alternativa de endpoint
- Puerto: 8888 que Plaspy usa para todos los dispositivos soportados
- Transporte: soporte para UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del tracker para aceptar distintos formatos de paquete

## Requisitos previos

- Un Wetrack Lite con alimentación, con una micro SIM activa y un plan de datos que permita conexiones GPRS
- Acceso a la interfaz de comandos SMS del dispositivo o a la herramienta de configuración oficial de Concox proporcionada por el proveedor
- La información correcta del APN de su operador móvil para completar los campos de APN
- Un método funcional para enviar y recibir SMS con el tracker desde un número autorizado de administrador
- Una cuenta de Plaspy o un tenant preparado en Plaspy para confirmar que el dispositivo reporta después de la configuración

## Cómo se conecta este tracker a Plaspy

Wetrack Lite envía ubicaciones derivadas del GNSS y paquetes de eventos a través de la red celular a Plaspy usando los ajustes GPRS configurados. Una vez que el dispositivo está dirigido al endpoint de Plaspy y tiene acceso a la red, Plaspy ingiere los datos, normaliza la telemetría y ofrece visibilidad en mapas y alertas.

- El tracker reporta al endpoint compartido de Plaspy ya sea por el dominio d.plaspy.com o por la IP 54.85.159.138
- Todos los dispositivos usan el mismo puerto 8888, por lo que el tracker debe configurarse para usar ese puerto
- El transporte puede configurarse como UDP o TCP en el dispositivo según la opción del tracker
- Plaspy detecta automáticamente el protocolo entrante del tracker, por lo que no se requiere seleccionar el protocolo manualmente en la plataforma
- Plaspy mostrará actualizaciones de ubicación y alertas de eventos una vez que el tracker se conecte correctamente

## Flujo típico de configuración

1. Acceda al método oficial de configuración Concox para Wetrack Lite, como comandos SMS o la herramienta de aprovisionamiento del proveedor.
2. Ingrese d.plaspy.com o, alternativamente, 54.85.159.138 como destino del servidor GPRS en el tracker.
3. Configure el puerto 8888 en el dispositivo; tenga en cuenta que Plaspy usa ese mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP en el tracker si el dispositivo requiere elección de transporte.
5. Configure el APN de su operador móvil y active el modo GPRS para que el dispositivo pueda enviar datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del tracker lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones en la plataforma Plaspy y utilizando el comando de verificación del tracker si está disponible.

## Ejemplos de comandos de configuración

El Wetrack Lite soporta configuración por SMS. A continuación se muestran los comandos SMS públicos publicados para el dispositivo. Envíe cada comando como un SMS independiente desde un número autorizado. Mantenga el orden al realizar una configuración inicial.

- Restauración de fábrica opcional (usar solo si es necesario durante el aprovisionamiento inicial)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
Nota: Reemplace {{apn}} con el APN de su operador. Si es necesario, incluya {{apnu}} y {{apnp}} para usuario y contraseña del APN.
```text
APN,{{apn}}# 
```
o, donde se requieran usuario y contraseña:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS a Plaspy por dominio (recomendado)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS a Plaspy por dirección IP (alternativa)
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer intervalo de actualización periódico cada 60 segundos
```text
TIMER,60#
```
o una forma alternativa del timer
```text
TIMER,60,60#
```

- Habilitar modo de reporte por GPRS
```text
GPRSON,1#
```

- Consultar los parámetros actuales de GPRS y servidor
```text
GPRSSET#
```

Estos comandos son los publicados por el fabricante para Wetrack Lite. Mantenga los marcadores de posición para los campos de APN y confirme la sintaxis exacta del SMS con la versión del firmware del dispositivo si los comandos no responden.

## Notas de configuración

- La configuración por SMS se muestra aquí porque es el método público publicado para Wetrack Lite; otros firmwares o herramientas de aprovisionamiento pueden ofrecer configuración por USB o web.
- Las revisiones de firmware y variantes de hardware pueden cambiar la sintaxis de los comandos o el comportamiento de los parámetros; si un comando no responde, verifique el firmware del dispositivo y consulte la documentación de Concox.
- Elija UDP o TCP en el tracker según sus requerimientos de red; Plaspy aceptará cualquiera de los dos y detectará el protocolo del tracker automáticamente.
- Siempre confirme el APN, usuario y contraseña con su operador móvil antes de completar los campos de APN.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración de servidor para flotas mixtas.

## Por qué usar Plaspy con esta configuración

Usar Wetrack Lite con Plaspy ofrece una solución de rastreo compacta y discreta que alimenta datos de ubicación y eventos en tiempo real a una plataforma única. Esta configuración permite a operadores de flotas y administradores de alquiler recibir alertas de movimiento, estado de ignición e historial de viajes almacenado en buffer en Plaspy para monitorización operativa y procesos de recuperación.

Para conocer más sobre Plaspy y las integraciones de dispositivos soportados visite https://www.plaspy.com. Para los comandos específicos del fabricante, notas de firmware y documentación del dispositivo más recientes, verifique los detalles en https://www.iconcox.com/.
