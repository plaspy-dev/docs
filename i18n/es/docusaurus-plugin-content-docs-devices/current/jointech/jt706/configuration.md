---
slug: /jointech/jt706/configuration
id: jt706-configuration
sidebar_label: Configuration
title: Jointech - JT706 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Jointech JT706 para Plaspy con ajustes públicos de servidor y comandos SMS para GPRS y APN
keywords:
  - Configuración Jointech JT706
  - Configuración de servidor JT706
  - Configuración JT706 para Plaspy
  - Configuración de rastreador GPS Jointech
  - Ajustes APN JT706
  - Configuración de seguimiento de contenedores
  - Integración de rastreadores en Plaspy
  - Comandos SMS JT706
  - Configuración de telemetría en contenedores
  - Configuración de plataforma JT706
---

# Jointech - JT706: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Jointech JT706 con Plaspy. Aquí se explican los ajustes de servidor compartidos por Plaspy y se muestran los ejemplos habituales de comandos SMS publicados por el fabricante para apuntar dispositivos JT706 al backend de Plaspy, de modo que el rastreador entregue telemetría de ubicación y condiciones.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, el estilo de instalación o las herramientas del proveedor. El JT706 es un rastreador enfocado en contenedores con posicionamiento híbrido GPS/LBS, sensores de puerta y carga, y telemetría de temperatura y humedad; la guía aquí se centra en los pasos públicos prácticos para conectar ese dispositivo a Plaspy.

## Resumen de la configuración

El objetivo al configurar un Jointech JT706 para Plaspy es preparar el dispositivo para que envíe su ubicación y la telemetría de sensores al endpoint del servidor Plaspy, de forma que la unidad aparezca en la plataforma y reporte eventos y condiciones de manera confiable. Normalmente esto implica establecer el ID del dispositivo, los parámetros del servidor GPRS y las credenciales APN mediante el método soportado por el fabricante.

- Apuntar el JT706 al endpoint del servidor Plaspy para que la telemetría llegue a su cuenta de Plaspy.
- Configurar el APN y, si aplica, las credenciales de usuario del APN para permitir el uso de datos GPRS.
- Validar la conectividad para que la ubicación, eventos de puerta y telemetría ambiental sean visibles en Plaspy.
- Usar los comandos SMS de configuración del JT706 cuando estén disponibles para aplicar los ajustes de servidor y APN.
- Confirmar que el dispositivo reporta a Plaspy y monitorear los primeros mensajes para verificar el manejo correcto del protocolo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones al servidor

## Requisitos previos

- Un rastreador JT706 encendido y accesible con un ID de dispositivo conocido
- Una tarjeta SIM con datos GPRS activos o capacidad de SMS insertada en el rastreador
- Datos del APN del operador móvil, incluyendo usuario y contraseña del APN si aplica
- Un teléfono móvil o herramienta de configuración capaz de enviar comandos SMS al rastreador, o acceso al software de configuración oficial de Jointech
- Acceso a la documentación del fabricante para el JT706 para confirmar la sintaxis de los comandos y posibles diferencias específicas del dispositivo

## Cómo se conecta este rastreador a Plaspy

El JT706 se configura para enviar su ubicación y la telemetría ambiental al endpoint y puerto compartidos de Plaspy, de modo que los operadores reciban actualizaciones y eventos en tiempo real dentro de la plataforma. Una vez que el dispositivo apunta a Plaspy, la plataforma ingestará las posiciones y lecturas de sensores para visualización y alertas.

- El rastreador envía actualizaciones periódicas de posición a d.plaspy.com en el puerto 8888
- La telemetría como el estado de la puerta y la temperatura se envía junto con los datos de ubicación
- Plaspy recibe los paquetes entrantes en el puerto 8888 y detecta automáticamente el protocolo del rastreador
- En el dispositivo se puede elegir transporte UDP o TCP según las preferencias de instalación y comportamiento de la red
- Una conexión exitosa hace que el JT706 sea visible en Plaspy para monitoreo e informes históricos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Jointech para el JT706, como la interfaz de comandos SMS o el software de configuración del fabricante.
2. Identifique y anote el ID del dispositivo requerido por el rastreador para la configuración por SMS.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo del servidor GPRS.
4. Establezca el puerto en 8888 como puerto de destino para Plaspy.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere la selección explícita.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.
7. Valide que el JT706 reporte a Plaspy comprobando mensajes entrantes y la visibilidad del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

El Jointech JT706 puede configurarse por SMS usando el ID del dispositivo y los comandos siguientes. Estos ejemplos provienen de los formatos públicos de comandos de Jointech y conservan los marcadores que debe reemplazar por los valores de su equipo.

Tenga en cuenta los marcadores:
- {{trackerID}} es el ID del dispositivo asignado al rastreador
- {{apn}} es el nombre del APN de la red móvil proporcionado por su operador
- {{apnu}} es el usuario del APN si su operador lo requiere
- {{apnp}} es la contraseña del APN si su operador lo requiere

Envíe estos comandos como mensajes SMS al JT706 desde un número que el dispositivo acepte para configuración.

1. Establecer el servidor GPRS y el APN
```text
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```

2. Opcional: establecer usuario y contraseña del APN
```text
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```

El segundo comando solo es necesario si su APN requiere autenticación con usuario y contraseña. Reemplace cada marcador por los valores reales de su rastreador y operador de SIM. Estos comandos están pensados para configuración vía SMS según lo publica el fabricante.

## Notas sobre la configuración

- La configuración por SMS es comúnmente soportada en el JT706; siga la sintaxis SMS exacta que soporte su versión de firmware.
- Las revisiones de firmware y las herramientas del proveedor pueden cambiar los identificadores o parámetros de los comandos, por lo que verifique con la documentación de Jointech en caso de duda.
- Elija UDP o TCP según la confiabilidad de la red y los requerimientos del operador; Plaspy acepta ambos transportes en el puerto 8888.
- Mantenga seguras las credenciales APN y los IDs de dispositivo; no los publique en canales públicos.
- Plaspy usa un único puerto para todos los dispositivos y detecta el protocolo automáticamente, por lo que la consistencia de servidor y puerto es importante en toda su flota.

## Por qué usar Plaspy con esta configuración

Usar el JT706 con Plaspy centraliza el monitoreo de ubicación y condiciones de contenedores, de modo que los equipos de logística y cumplimiento reciban alertas oportunas y puedan revisar la telemetría histórica. El posicionamiento híbrido GPS y LBS del JT706, combinado con datos de temperatura, humedad y estado de puerta, ofrece a los operadores la visibilidad necesaria para flujos de trabajo contra robo, supervisión de carga refrigerada y controles aduaneros.

Para saber más sobre Plaspy y cómo ingiere la telemetría de dispositivos como el JT706 visite https://www.plaspy.com. Para los detalles más actuales sobre la configuración específica del dispositivo, la sintaxis de comandos y el comportamiento del firmware, verifique la información con el fabricante en https://www.jointcontrols.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
