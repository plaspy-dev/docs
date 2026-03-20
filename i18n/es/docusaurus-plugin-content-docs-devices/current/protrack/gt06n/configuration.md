---
slug: /protrack/gt06n/configuration
id: gt06n-configuration
sidebar_label: Configuration
title: Protrack - GT06N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Protrack GT06N con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Protrack GT06N
  - Configuración GT06N
  - Rastreador Protrack Plaspy
  - Configuración de servidor GT06N
  - Configuración rastreador GPS GT06N
  - Guía de configuración Protrack
  - Configuración software de rastreo GT06N
  - Configuración GT06N Plaspy
  - Configuración rastreador de vehículo
  - Configuración rastreo de flotas
---

# Protrack - GT06N Configuración

Esta página documenta el contexto público de configuración para usar el Protrack GT06N con Plaspy. Resume los ajustes prácticos del servidor y los comandos habituales del fabricante para apuntar el GT06N a Plaspy, de modo que el dispositivo pueda reportar ubicación y estado en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. Cuando estén disponibles, aquí se incluyen los comandos SMS del GT06N que se usan comúnmente para la configuración; confirme siempre los detalles específicos del dispositivo con la documentación del fabricante.

## Resumen de configuración

Esta configuración prepara el GT06N para conectarse a Plaspy y enviar mensajes de posición y eventos a la plataforma. El proceso normalmente implica establecer el APN del operador, configurar el endpoint y puerto del servidor Plaspy, seleccionar el tipo de transporte si es necesario y verificar que el dispositivo informe correctamente.

- Proporcione al GT06N el APN correcto del operador para que pueda usar datos GPRS para la telemetría.
- Configure el dispositivo para que reporte al endpoint del servidor Plaspy y así la ubicación y los eventos lleguen a Plaspy.
- Elija UDP o TCP como transporte si el dispositivo lo solicita, usando el puerto compartido de Plaspy.
- Ajuste los intervalos de actualización y los temporizadores de reporte según sus necesidades de monitoreo y su plan de datos.
- Valide la conectividad y el estado mediante los comandos de verificación del dispositivo para que el rastreador aparezca en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo GT06N alimentado e instalado con acceso al método de configuración por SMS del dispositivo o a la herramienta del fabricante.
- Una tarjeta SIM con servicio de datos activa y la información del APN del operador necesaria para habilitar la conectividad GPRS.
- Listos el APN del operador y, si corresponde, el nombre de usuario y contraseña del APN para su configuración.
- Acceso a la documentación de Protrack o soporte del proveedor para cualquier comando o comportamiento específico de firmware.
- Una cuenta u organización en Plaspy para validar los dispositivos una vez que comiencen a reportar.
- Capacidad para enviar y recibir mensajes SMS de configuración desde el técnico instalador o el teléfono usado para la configuración.

## Cómo se conecta este rastreador a Plaspy

El GT06N se configura para enviar datos de ubicación y eventos al endpoint de Plaspy, de modo que la plataforma pueda ingerir la telemetría para mapas en vivo, alertas e informes. Al apuntar el rastreador al servidor y puerto compartidos de Plaspy, el dispositivo queda visible y manejable dentro de la plataforma.

- El dispositivo envía posiciones GPS y mensajes de eventos a d.plaspy.com en el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP según la selección del dispositivo y la capacidad del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador para que los dispositivos sean reconocidos sin necesidad de seleccionar el protocolo manualmente en la plataforma.
- Una vez que el rastreador reporte al endpoint compartido, los eventos de ubicación, SOS, geocerca, exceso de velocidad y estado estarán disponibles en Plaspy.
- Confirmar el estado y los parámetros del dispositivo ayuda a garantizar visibilidad y alertas fiables en Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Protrack para el GT06N, normalmente comandos SMS o software del proveedor, y confirme la versión de firmware si es posible.
2. Ingrese el servidor de Plaspy por nombre o IP usando d.plaspy.com o 54.85.159.138 como endpoint.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos.
4. Elija UDP o TCP como transporte si el GT06N solicita la selección durante la configuración.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña del APN que requiera su SIM.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el fabricante lo requiere.
7. Valide que el dispositivo está reportando a Plaspy comprobando el estado del equipo y asegurándose de que el rastreador aparezca en el panel de Plaspy.

## Comandos de configuración de ejemplo

El GT06N soporta la configuración vía SMS. A continuación se muestran los comandos SMS que se usan comúnmente en el orden típico requerido para la configuración. Reemplace los marcadores según se indica.

- Configure el APN del operador
  - Use este comando para establecer el APN. Reemplace {{apn}} por el APN del operador. Si su APN requiere nombre de usuario y contraseña, incluya {{apnu}} y {{apnp}} donde se muestra.
  ```text
  APN,{{apn}}# 
  ```
  o con nombre de usuario y contraseña:
  ```text
  APN,{{apn}},{{apnu}},{{apnp}}#
  ```
  Explicación: {{apn}} = APN del operador, {{apnu}} = nombre de usuario del APN si se requiere, {{apnp}} = contraseña del APN si se requiere.

- Configurar el servidor GPRS para reportar a Plaspy
  ```text
  SERVER,1,d.plaspy.com,8888,0#
  ```
  Explicación: Esto apunta el dispositivo a d.plaspy.com en el puerto 8888. Los parámetros después de la dirección del servidor dependen del firmware del dispositivo; mantenga el orden mostrado.

- Establecer el intervalo de actualización de ubicación
  ```text
  TIMER,60,60#
  ```
  Explicación: Establece los intervalos de reporte. Reemplace los valores numéricos según su política de reporte y su plan de datos.

- Habilitar modo GPRS
  ```text
  GPRSON,1#
  ```
  Explicación: Cambia el rastreador al modo GPRS para el reporte de datos.

- Consultar la configuración actual
  ```text
  PARAM#
  ```

- Consultar el estado del dispositivo
  ```text
  STATUS#
  ```

Mantenga el orden de comandos cuando sea importante para habilitar el reporte de datos. Si debe realizar un reinicio o una inicialización específica de firmware, marque ese paso como opcional y consulte la documentación de Protrack antes de proceder.

## Notas de configuración

- La configuración por SMS está soportada para el GT06N en muchas versiones de firmware; confirme siempre la sintaxis exacta para su revisión de firmware con los materiales de Protrack.
- La elección entre UDP y TCP depende de la preferencia del instalador y del firmware del dispositivo; ambos transportes son compatibles para alcanzar d.plaspy.com en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que reduce la configuración necesaria en la plataforma.
- Verifique las credenciales del APN con la operadora móvil antes del despliegue para evitar demoras en la conectividad.
- Las diferencias de firmware y las herramientas del proveedor pueden cambiar la sintaxis de los comandos o las funciones disponibles; revise la documentación oficial de Protrack cuando exista duda.

## Por qué usar Plaspy con esta configuración

Usar el GT06N con Plaspy ofrece a las organizaciones visibilidad práctica y control sobre flotas de vehículos y vehículos particulares. Apuntar el rastreador al endpoint compartido de Plaspy garantiza una ingestión de datos consistente en la plataforma para que los equipos puedan monitorear ubicaciones, recibir alertas de SOS y geocercas, auditar rutas y actuar sobre inmovilizadores u otros eventos de seguridad cuando estén configurados.

Para conocer más sobre Plaspy y cómo esta configuración encaja en un despliegue telemático más amplio visite https://www.plaspy.com. Por favor, verifique los métodos de configuración específicos del dispositivo y los detalles de firmware más recientes con el fabricante en http://www.protrackgps.in/ ya que los pasos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
