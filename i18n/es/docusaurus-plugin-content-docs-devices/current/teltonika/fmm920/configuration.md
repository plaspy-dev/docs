---
slug: /teltonika/fmm920/configuration
id: fmm920-configuration
sidebar_label: Configuration
title: Teltonika - FMM920 Configuration
sidebar_class_name: menu_item_tracker
description: Instrucciones públicas para configurar Teltonika FMM920 y conectarlo a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - configuración Teltonika FMM920
  - instalación FMM920
  - ajustes servidor FMM920
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - implementación seguimiento de flotas
  - integración rastreador Teltonika
  - ajustes servidor Plaspy
  - configuración seguimiento de vehículos
  - comandos configuración FMM920
---

# Teltonika - Configuración del FMM920

Esta página describe el contexto público de configuración para utilizar el rastreador Teltonika FMM920 con Plaspy. Se enfoca en los ajustes compartidos del servidor y en los pasos prácticos que usted seguirá para apuntar el dispositivo a Plaspy, de modo que la ubicación y la telemetría lleguen a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el FMM920 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el método de configuración Teltonika que usted utilice. Cuando está disponible, incluimos los comandos públicos y los marcadores que ayudan en la implementación.

## Resumen de la configuración

Este proceso prepara una unidad FMM920 para que usted reporte datos a Plaspy configurando el endpoint del servidor, el transporte y las credenciales APN necesarias para que el dispositivo envíe telemetría y posiciones a la plataforma.

- Apunte el rastreador al endpoint del servidor de Plaspy para que el dispositivo pueda establecer conexiones salientes
- Configure el transporte y el puerto para que los datos se enruten al endpoint de ingestión de Plaspy
- Proporcione los campos APN y de autenticación necesarios para la conectividad celular
- Guarde y aplique la configuración del dispositivo y reinícielo si es necesario para comenzar a reportar
- Verifique la visibilidad en Plaspy una vez que el dispositivo empiece a enviar datos

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en Plaspy

## Requisitos previos

- Una unidad FMM920 con alimentación y accesible, con el hardware de instalación requerido
- Una SIM celular activa y un plan de datos apropiado para la variante regional del dispositivo y la disponibilidad de la red
- Acceso al método de configuración Teltonika que usted vaya a usar, como comandos SMS, las herramientas de configuración Teltonika o Teltonika FOTA WEB para actualizaciones masivas
- Conocimiento del APN correcto, nombre de usuario APN y contraseña APN para la SIM instalada en el dispositivo
- Una cuenta en Plaspy y el flujo de registro de dispositivos listo para validar que el rastreador está reportando a la plataforma
- Confirmación del nivel de firmware del dispositivo si su despliegue requiere un comportamiento de firmware específico

## Cómo se conecta este rastreador a Plaspy

El FMM920 se configura para enviar posiciones GPS periódicas y telemetría al endpoint y puerto compartidos de Plaspy, de modo que los datos de ubicación aparezcan en el panel de Plaspy para supervisión e informes.

- El rastreador reporta a d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888
- Usted puede seleccionar UDP o TCP para el transporte cuando el dispositivo requiera elegir uno
- Plaspy recibe telemetría, actualizaciones de posición y cambios de estado, y detecta automáticamente el protocolo del dispositivo para la ingestión
- Una vez configurado, el dispositivo será visible en Plaspy y empezará a enviar datos de ubicación y telemetría en tiempo real para alertas e historial

## Flujo común de configuración

1. Acceda al método oficial de configuración Teltonika que prefiera, como comandos SMS, la herramienta de configuración Teltonika o Teltonika FOTA WEB
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo
3. Establezca el puerto del servidor en 8888
4. Elija UDP o TCP si el dispositivo requiere selección de transporte
5. Aplique o guarde la configuración en el dispositivo y suba los cambios mediante el método de gestión elegido
6. Reinicie el dispositivo si el método de configuración o el firmware exige un reinicio para aplicar los ajustes
7. Valide que el dispositivo reporte a Plaspy y aparezca en el panel de Plaspy

## Comandos de configuración ejemplares

El FMM920 puede configurarse usando comandos tipo fabricante. El ejemplo a continuación se proporciona en el contenido público de configuración modelo y muestra cómo establecer valores APN junto con el dominio y puerto de Plaspy. Los marcadores se conservan y se explican después del comando.

- Ejemplo de comando set parameter por SMS o lote

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores y campos
  - [apn] es el nombre del APN celular requerido para la tarjeta SIM
  - [apnu] es el usuario del APN si su operador lo requiere; en caso contrario déjelo en blanco
  - [apnp] es la contraseña del APN si se requiere; en caso contrario déjela en blanco
  - 2004 establece el dominio del servidor, que en este ejemplo es d.plaspy.com
  - 2005 establece el puerto del servidor, que debe ser 8888 para Plaspy
  - 2006 puede representar un modo de conexión al servidor o un flag de activación en el conjunto de comandos del dispositivo, dependiendo del firmware de Teltonika

Tenga en cuenta que el medio exacto del comando y la sintaxis pueden variar según el firmware. El ejemplo anterior es la forma pública utilizada para la configuración básica de parámetros y se usa comúnmente como comando por lote vía SMS o mediante utilidades de configuración Teltonika.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los números de parámetro o la sintaxis exacta del comando, así que confirme el mapeo de comandos para su nivel de firmware
- Teltonika FOTA WEB y sus herramientas de configuración pueden usarse para desplegar ajustes a escala en lugar de comandos SMS por dispositivo
- Elija UDP o TCP en función de las características de la red y la preferencia del instalador; Plaspy aceptará cualquiera de los dos transportes en el puerto 8888
- Todos los dispositivos Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita un puerto específico por dispositivo para cada instalación
- Mantenga a mano las credenciales APN y verifique la conectividad celular antes de comprobar Plaspy en busca de datos entrantes

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM920 con Plaspy ofrece a las organizaciones visibilidad centralizada y consistente de la ubicación de vehículos y la telemetría del dispositivo. Los ajustes de servidor compartidos de Plaspy facilitan estandarizar las implementaciones en una flota, mientras la plataforma ingiere datos de ubicación, telemetría y eventos para supervisión, alertas e informes históricos.

Para obtener más información sobre cómo Plaspy maneja las integraciones de dispositivos y la supervisión de flotas visite https://www.plaspy.com y revise los últimos detalles de configuración específicos de dispositivos y firmware en el sitio del fabricante https://www.teltonika-gps.com/ . Los métodos de configuración específicos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que confirme la documentación actual del fabricante al preparar un despliegue.
