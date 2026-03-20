---
slug: /winrich/t28/configuration
id: t28-configuration
sidebar_label: Configuration
title: Winrich - T28 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Winrich T28 y reportar a Plaspy mediante SMS y GPRS con comandos de ejemplo
keywords:
  - Winrich T28
  - Configuración T28
  - Configuración Winrich T28
  - Winrich T28 Plaspy
  - Configuración servidor T28
  - Configuración rastreador GPS Winrich
  - Configuración SMS T28
  - Configuración APN Winrich T28
  - Servidor GPRS T28
  - Configuración rastreador GPS vehicular
---

# Winrich - Configuración del T28

Esta página explica la configuración pública para usar el rastreador Winrich T28 con Plaspy. Describe la información práctica disponible públicamente, incluyendo los comandos de configuración por SMS y los datos compartidos del servidor Plaspy necesarios para enviar la telemetría del T28 a la plataforma. Use esta guía para entender qué debe configurar en el dispositivo para que el T28 reporte ubicación y estado a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos y pasos aquí deben considerarse ejemplos públicos que usted debe verificar con el manual del dispositivo y la documentación del proveedor.

## Resumen de la configuración

Esta configuración prepara el T28 para comunicarse con Plaspy estableciendo el APN del dispositivo, el endpoint del servidor GPRS, el intervalo de reporte y la zona horaria mediante los comandos SMS soportados por el fabricante. El resultado es un rastreador que envía periódicamente posición y datos de estado a Plaspy para su visualización y procesamiento de eventos.

- Configure el APN del operador para que el rastreador pueda usar datos móviles y alcanzar el servidor Plaspy.
- Apunte el rastreador al endpoint del servidor Plaspy para que los reportes lleguen a la plataforma.
- Elija el transporte y establezca el puerto compartido de Plaspy para que el dispositivo pueda abrir una sesión de reporte.
- Defina un intervalo de reporte que equilibre la autonomía de la batería y la frecuencia de actualización según su despliegue.
- Valide la configuración y el estado del dispositivo con los comandos de verificación para que Plaspy muestre el equipo en línea.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como endpoint público para el envío de reportes
- IP del servidor 54.85.159.138 como endpoint numérico de Plaspy comúnmente usado en configuraciones de dispositivos
- Puerto 8888 que es el puerto compartido que Plaspy usa para todos los dispositivos soportados
- Soporte de transporte por UDP o TCP según la capacidad del dispositivo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma reconozca los reportes entrantes sin necesidad de seleccionar un protocolo específico en la plataforma

## Requisitos típicos antes de la configuración

- Un dispositivo T28 cargado con una SIM funcional que tenga datos y SMS habilitados
- Acceso a la interfaz SMS del dispositivo o a la herramienta oficial de configuración Winrich para enviar comandos
- Detalles correctos del APN proporcionados por el operador de la SIM para configurar la conectividad GPRS
- Cobertura en el área de despliegue para la transmisión de datos móviles
- Verificar la revisión de firmware o hardware del T28 con la documentación del proveedor para confirmar la compatibilidad de comandos
- Tener los valores del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888 incluidos en su plan de configuración

## Cómo se conecta este rastreador a Plaspy

El T28 se configura para enviar actualizaciones periódicas de posición y mensajes de estado al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tiene un APN funcional y reporta al servidor configurado, Plaspy ingiere los mensajes y los presenta como actualizaciones de ubicación, alertas y datos históricos en la plataforma.

- El T28 envía paquetes GPRS o TCP/UDP al endpoint del servidor Plaspy y al puerto 8888
- Plaspy recibe esos reportes y los asocia con el registro del rastreador en la plataforma
- Los intervalos de reporte periódicos permiten que el dispositivo conserve batería mientras entrega actualizaciones de ubicación relevantes a Plaspy
- Notificaciones de manipulación y batería baja configuradas en el dispositivo se reenvían a Plaspy para alertas y monitoreo
- Plaspy detecta automáticamente el protocolo del rastreador por lo que no se requiere una selección manual de protocolo en la plataforma

## Flujo común de configuración

1. Acceda al método oficial de configuración Winrich para el T28, normalmente mediante comandos SMS como muestra la guía del fabricante o usando la herramienta oficial
2. Ingrese d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo según el formato de comando del equipo
3. Establezca el puerto en 8888 que es el puerto compartido usado por Plaspy para todos los dispositivos
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte
5. Aplique o guarde la configuración en el dispositivo usando los comandos o la herramienta del fabricante
6. Reinicie o realice un ciclo de encendido del rastreador si el firmware del dispositivo lo requiere para activar los nuevos ajustes
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo y verificando que los reportes aparezcan en la plataforma Plaspy

## Comandos de configuración de ejemplo

Para configurar el rastreador envíe los siguientes comandos por SMS en el orden mostrado. Estos son comandos públicos indicados en la guía del fabricante para el T28. Envíe cada línea como un mensaje SMS al número del dispositivo.

1. Reinicio de fábrica inicial opcional cuando se inicia una configuración desde cero
```
940#
```

2. Establecer la zona horaria a UTC 0
```
801#W0#
```

3. Configurar el APN del operador
- Reemplace los marcadores con los valores de su operador
- {{apn}} es el nombre del APN
- {{apnu}} es el usuario del APN si se requiere
- {{apnp}} es la contraseña del APN si se requiere
- Use la forma corta si no se necesita usuario ni contraseña
```
802#{{apn}}#
```
o con usuario y contraseña
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```

4. Establecer el servidor GPRS hacia Plaspy usando la IP numérica y el puerto compartido
- Esto apunta el dispositivo a Plaspy para que los reportes se entreguen a la plataforma
```
803#54.85.159.138#8888#
```

5. Ajustar el intervalo de actualización a 60 segundos
```
730#60#
```

6. Verificar la configuración actual
```
886#
```

7. Consultar el estado del dispositivo
```
902#
```

Nota sobre los marcadores
- Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} tal como aparecen y sustituya los valores reales de su operador. Si su operador no requiere credenciales de APN, omita los campos de usuario y contraseña como en el ejemplo corto.

## Observaciones sobre la configuración

- La configuración por SMS es un método común para el T28 y está soportada por los comandos públicos mostrados aquí; confirme la disponibilidad y la sintaxis de los comandos SMS en el manual del dispositivo
- Las revisiones de firmware o las variantes de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles, así que verifique el conjunto de comandos correcto para su revisión exacta del T28
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador; ambos transportes son compatibles para reportar a Plaspy en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir los mensajes
- Conserve los marcadores de APN al preparar los comandos y verifique las credenciales del operador antes de enviar los SMS de configuración

## Por qué usar Plaspy con esta configuración

Usar el Winrich T28 con Plaspy es una opción práctica para organizaciones que necesitan visibilidad a largo plazo y bajo mantenimiento de activos. El T28 está optimizado para larga duración de batería y reportes periódicos, y cuando se configura para reportar a Plaspy aporta actualizaciones de ubicación predecibles y reportes básicos de estado a paneles de flota, alertas de geocercas e informes históricos.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration, firmware notes, and command syntax verify details with the manufacturer at http://www.winrichgroup.com/en/ since vendor documentation and firmware behavior can change over time.
