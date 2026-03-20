---
slug: /teltonika/fmc003/configuration
id: fmc003-configuration
sidebar_label: Configuration
title: Teltonika - FMC003 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMC003 con Plaspy, incluye ajustes de servidor y ejemplo para puesta en marcha rápida
keywords:
  - Configuración Teltonika FMC003
  - Configuración FMC003 para Plaspy
  - Configuración de servidor FMC003
  - Configuración rastreador GPS FMC003
  - Configuración de rastreador Plaspy
  - Configuración Teltonika OBD II
  - Integración telemetría FMC003
  - Configuración gestión de flotas Plaspy
  - Configuración APN FMC003
  - Configuración de dispositivo Teltonika
---

# Teltonika - Configuración del FMC003

Esta página describe el contexto público de configuración para usar el Teltonika FMC003 con Plaspy. Reúne los ajustes de servidor prácticos y un comando de ejemplo que se usan habitualmente para apuntar dispositivos FMC003 al endpoint de ingestión de Plaspy, de modo que instaladores y responsables de flota puedan preparar los equipos para la integración en la plataforma.

Plaspy utiliza ajustes compartidos de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el FMC003 se puede configurar mediante comandos SMS o herramientas de Teltonika, y el comando de ejemplo abajo utiliza el estilo de parámetros públicos mostrado en la documentación de Teltonika.

## Resumen de la configuración

Este resumen explica el objetivo de la configuración mínima necesaria para que un FMC003 reporte en Plaspy. La meta es establecer el APN del dispositivo y el endpoint del servidor, elegir el transporte y verificar que los datos lleguen a la plataforma.

- Definir las credenciales APN de la tarjeta celular para que el FMC003 tenga conexión de datos activa.
- Configurar el endpoint del servidor para apuntar a Plaspy y que la ubicación y la telemetría OBD fluyan hacia la plataforma.
- Seleccionar la opción de transporte (UDP o TCP) si el dispositivo requiere elegir el transporte.
- Guardar y aplicar la configuración usando la herramienta del fabricante o el método SMS.
- Validar la conectividad para que el dispositivo aparezca y reporte correctamente en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- El dispositivo está alimentado y accesible en el puerto OBD-II del vehículo y muestra estado operativo.
- Tarjeta SIM válida con plan de datos y credenciales APN correctas para la red celular.
- Acceso a un método de configuración Teltonika como comandos SMS, Teltonika Configurator o FOTA WEB.
- El firmware del FMC003 es compatible con el método de configuración elegido; verifique las notas de la versión del fabricante.
- Una cuenta o proyecto en Plaspy para validar que el dispositivo aparezca y envíe telemetría una vez configurado.
- Un medio para recibir logs del dispositivo o respuestas SMS para resolución de problemas (número telefónico del dispositivo o consola de gestión remota).

## Cómo se conecta este rastreador a Plaspy

El FMC003 se configura para enviar ubicación y telemetría OBD a Plaspy usando el endpoint compartido y el puerto de la plataforma. Una vez que el dispositivo puede alcanzar el servidor Plaspy a través de la red celular, Plaspy ingiere la alimentación y asocia los datos del dispositivo con su cuenta.

- El dispositivo usa el APN configurado para obtener conectividad de datos móviles.
- El rastreador envía telemetría a d.plaspy.com en el puerto 8888 usando UDP o TCP según la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- Ubicación, odómetro, combustible y métricas EV se reenvían a Plaspy para visualización e informes.
- La configuración es exitosa cuando el dispositivo aparece y comienza a reportar en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Teltonika (comando SMS, Teltonika Configurator o FOTA WEB).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o, cuando se requiera, la IP del servidor 54.85.159.138 en el campo de servidor/host.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Configure el APN, el usuario APN y la contraseña APN adecuados para la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método lo requiere.
7. Verifique que el dispositivo reporte a Plaspy y que la telemetría sea visible en la plataforma.

## Comandos de configuración de ejemplo

El FMC003 acepta comandos de parámetros en lote. Un ejemplo público común establece las credenciales APN y los detalles del servidor Plaspy. Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos por el APN, usuario APN y contraseña APN de su operador.

- Este ejemplo se presenta en el formato de comando público de Teltonika y normalmente se envía vía SMS o se aplica con las herramientas de Teltonika.

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando:
- {{apn}} = el APN de su operador móvil.
- {{apnu}} = usuario APN si el operador lo requiere; dejar vacío si no se usa.
- {{apnp}} = contraseña APN si el operador lo requiere; dejar vacío si no se usa.
- La cadena incluye el dominio del servidor Plaspy d.plaspy.com y el puerto 8888 tal como Plaspy lo requiere.
- 2006 es un parámetro del dispositivo relacionado con el transporte o el comportamiento de conexión en dispositivos Teltonika; consulte la documentación de Teltonika para valores numéricos específicos y su significado según su firmware.
- Envíe este comando usando el número de teléfono del dispositivo como SMS o aplique los ajustes equivalentes en Teltonika Configurator o FOTA WEB según prefiera.

## Notas de configuración

- Los números de parámetro y el formato exacto del comando pueden variar según la versión de firmware; confirme siempre con la guía del usuario de Teltonika para la revisión de firmware de su FMC003.
- La selección de transporte (UDP vs TCP) depende del dispositivo; si tiene dudas, pruebe ambos transportes o consulte la documentación de Teltonika para valores recomendados y el significado de banderas numéricas como 2006.
- APN, usuario APN y contraseña APN son específicos del operador; una configuración incorrecta del APN es la causa más frecuente de fallas de conectividad.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detectará el protocolo automáticamente, por lo que una vez que el endpoint sea correcto la plataforma debería aceptar los mensajes de los rastreadores compatibles.
- Use las herramientas de gestión remota de Teltonika para actualizaciones masivas y FOTA para mantener flotas grandes consistentes sin enviar SMS manuales a cada dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMC003 con Plaspy ofrece a las flotas un camino de despliegue rápido y repetible para recopilar telemetría OBD y de ubicación de alta fidelidad. El diseño plug-and-play del FMC003 combinado con el endpoint compartido de ingestión de Plaspy simplifica la incorporación: configure el APN y apunte el dispositivo a d.plaspy.com en el puerto 8888, y la plataforma detectará el protocolo del rastreador y comenzará a procesar los datos.

Para conocer más sobre Plaspy e iniciar la integración de su flota, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, el comportamiento de firmware y los detalles de configuración del FMC003, verifique la información actual en el sitio oficial del fabricante https://www.teltonika-gps.com/
