---
slug: /xirgo/xt_3200/configuration
id: xt_3200-configuration
sidebar_label: Configuration
title: Xirgo - XT-3200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT-3200 con ajustes de servidor Plaspy comandos SMS e pasos de integración
keywords:
  - Configuración Xirgo XT 3200
  - Instalación Xirgo XT 3200
  - Configuración XT 3200 Plaspy
  - Configuración servidor rastreador Xirgo
  - Comandos SMS XT 3200
  - Configuración rastreador OBDII GPS
  - Rastreo de flotas XT 3200
  - Configuración comportamiento de conductor
  - Integración plataforma GPS Plaspy
  - Ajustes APN XT 3200
---

# Xirgo - XT-3200 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Xirgo XT-3200 con Plaspy. Incluye los ajustes de servidor compartidos que Plaspy espera, los pasos generales para preparar un XT-3200 para conectividad y los comandos SMS de ejemplo más utilizados con este modelo. El XT-3200 es un dispositivo OBD II plug and play con antena celular integrada y acelerómetro, diseñado para vehículos de pasajero y de servicio ligero, capaz de reportar estado de encendido y eventos de conducción.

Plaspy aplica un conjunto de ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para el XT-3200 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT-3200 permite configuración por SMS de APN y parámetros del servidor GPRS, lo que se refleja en los comandos de ejemplo más abajo.

## Resumen de la configuración

Preparar el XT-3200 para su uso con Plaspy se centra en configurar el acceso a la red y el endpoint de reporte del dispositivo para que el rastreador pueda comunicarse de forma fiable con la plataforma. Cuando esté disponible, el XT-3200 puede configurarse por SMS para establecer el APN del operador y el servidor GPRS que apunte a Plaspy.

- Configurar el APN de datos móviles para que el dispositivo use la conexión de datos del operador.
- Indicar al dispositivo que reporte a Plaspy usando el endpoint y puerto compartidos del servidor.
- Seleccionar el tipo de transporte (UDP o TCP) si el rastreador requiere una selección de transporte.
- Aplicar y guardar los ajustes, y reiniciar el rastreador si es necesario para comenzar a reportar.
- Verificar que el dispositivo aparezca y envíe datos en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Al configurar el XT-3200 para usar con Plaspy, utilice los siguientes ajustes públicos exactamente como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

Estos valores son el objetivo central de conexión para que el XT-3200 alcance Plaspy.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM operativa con datos móviles y capacidad de SMS instalada en el dispositivo
- Acceso al puerto OBD II del vehículo para alimentar y operar el XT-3200
- Valores APN del operador para la SIM que permitan conectividad GPRS
- Conocimiento del formato de comandos SMS del fabricante o acceso a la herramienta del proveedor
- Una cuenta de Plaspy o un administrador de cuenta disponible para confirmar la visibilidad del dispositivo tras la configuración

## Cómo se conecta este rastreador a Plaspy

El XT-3200 envía ubicación y parámetros del vehículo a Plaspy transmitiendo sus datos al endpoint y puerto compartidos de Plaspy. Una vez que el XT-3200 apunte a Plaspy y tenga conexión de datos activa, la plataforma detectará el protocolo y comenzará a procesar los mensajes del dispositivo.

- El rastreador se configura para enviar tráfico GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede establecerse en UDP o TCP según los ajustes del dispositivo y la preferencia del instalador
- El dispositivo transmite informes periódicos de posición y estado del vehículo a Plaspy
- Plaspy detecta automáticamente el protocolo del dispositivo y procesa los mensajes entrantes para visibilidad e informes de eventos
- Tras una configuración exitosa, el dispositivo debería ser visible en Plaspy y reportar telemetría según lo permita su firmware

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Xirgo para el XT-3200, como el conjunto de comandos SMS o la herramienta del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el XT-3200 requiere selección de transporte para el reporte GPRS.
5. Configure el APN del dispositivo con los valores del operador si el dispositivo requiere configuración manual del APN.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide que el XT-3200 reporte a Plaspy y aparezca en la plataforma; confirme la telemetría y los eventos reportados.

## Comandos de configuración de ejemplo

El XT-3200 admite configuración por SMS. Los comandos SMS públicos comúnmente usados para fijar el APN y el servidor de reporte GPRS se muestran a continuación. Preserve los marcadores de posición al reemplazarlos por los valores del operador.

1. Configurar el APN del operador
```
+XT:1002,[apnu],[apnp],[apn]
```
- Explicación: Reemplace los marcadores de posición por los valores de su operador. [apn] suele ser el nombre del APN. [apnu] y [apnp] representan el usuario y la contraseña del APN, opcionales si su operador los exige.

2. Configurar el servidor GPRS para que apunte a Plaspy
```
+XT:1001,8888,54.85.159.138,4,0,0
```
- Explicación: Este comando configura el rastreador para usar el puerto 8888 y la IP del servidor Plaspy 54.85.159.138. Las banderas numéricas adicionales al final son específicas del dispositivo; consulte la documentación de Xirgo para conocer sus significados antes de modificarlas.

Nota sobre el orden: envíe primero el comando de APN para que el dispositivo pueda establecer conectividad GPRS, y luego configure el comando del servidor GPRS. Si su instalación usa un nombre de dominio en lugar de una IP, puede usar d.plaspy.com cuando la sintaxis del comando lo permita; consulte la documentación de Xirgo para soporte de dominios.

## Observaciones de configuración

- Las diferencias de firmware pueden modificar los parámetros exactos de SMS y el significado de las banderas numéricas; siempre verifique los comandos según la documentación de su firmware XT-3200.
- El XT-3200 soporta configuración por SMS como se muestra, pero algunos instaladores prefieren herramientas del proveedor o servicios de aprovisionamiento; use el método más apropiado para su entorno.
- Elija UDP o TCP basándose en la confiabilidad de la red y las recomendaciones del instalador. Plaspy acepta ambos transportes en el puerto compartido.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detectará automáticamente el protocolo del equipo, por lo que confirme que el dispositivo apunte al endpoint del servidor Plaspy.
- Pruebe la conectividad después de aplicar los ajustes confirmando que el dispositivo reporte a Plaspy y comprobando mensajes de posición y eventos en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el XT-3200 con Plaspy ofrece a las organizaciones una forma directa de recopilar ubicación de vehículos y ciertos eventos de estado del vehículo mediante una configuración de servidor común. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad por equipo y permiten que las flotas se concentren en el despliegue, la monitorización y el análisis del comportamiento de los conductores.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante la sintaxis de comandos SMS y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los últimos detalles de configuración y las referencias de comandos del XT-3200 en el sitio oficial de Xirgo https://xirgo.com/.
