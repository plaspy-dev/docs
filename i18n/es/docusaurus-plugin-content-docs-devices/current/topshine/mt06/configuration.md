---
slug: /topshine/mt06/configuration
id: mt06-configuration
sidebar_label: Configuration
title: TopShine - MT06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopShine MT06 con ajustes de servidor Plaspy, comandos SMS y flujo de configuración
keywords:
  - Configuración TopShine MT06
  - Instalación TopShine MT06
  - Configuración MT06 Plaspy
  - Configuración rastreador GPS TopShine
  - Comandos SMS MT06
  - Ajustes servidor Plaspy TopShine
  - Configuración GPRS MT06
  - Integración rastreador TopShine
  - Rastreo vehicular MT06
  - Rastreo de flotas TopShine
---

# TopShine - Configuración MT06

Esta página describe el contexto público de configuración para usar el rastreador TopShine MT06 con Plaspy. Explica los pasos prácticos y los comandos públicos que se usan comúnmente para preparar el MT06 para reportar a Plaspy, incluyendo los ajustes de servidor compartidos utilizados en las implementaciones de Plaspy y ejemplos de comandos SMS frecuentes para este modelo.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración por parte del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; considere los comandos y el flujo aquí como una guía práctica que complementa la documentación oficial del dispositivo.

## Resumen de la configuración

Configurar el MT06 para Plaspy prepara el dispositivo para enviar posiciones y eventos a la plataforma Plaspy y permite que el rastreador sea visible y gestionable desde su consola de flota. El proceso normalmente incluye establecer la identidad del equipo, configurar el APN del operador móvil, apuntar el rastreador al endpoint de Plaspy y activar el modo de reporte por GPRS.

- Defina el identificador del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Configure el APN de datos móviles y, si aplica, el usuario y la contraseña del APN para conectividad celular.
- Señale el servidor de Plaspy usando los ajustes de servidor compartidos para que las ubicaciones y eventos lleguen a la plataforma.
- Habilite el modo de reporte por GPRS y establezca un intervalo de reporte para controlar la frecuencia de actualizaciones.
- Valide la conectividad y el IMEI para que el dispositivo aparezca en Plaspy y empiece a enviar telemetría.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos comunes antes de la configuración

- Una unidad MT06 alimentada y accesible con el IMEI visible para registro y configuración.
- Una tarjeta SIM válida con datos y capacidad de SMS insertada y activa en la red del operador que vaya a utilizar.
- Un teléfono o puerta SMS capaz de enviar mensajes de configuración si utiliza configuración vía SMS.
- Acceso a las instrucciones de configuración del fabricante o herramientas para la revisión de firmware específica del equipo.
- Conocimiento del APN del operador y, si corresponde, usuario y contraseña del APN para la conexión de datos.
- Una cuenta en Plaspy o acceso de administrador para confirmar que el dispositivo aparece y reporta correctamente.

## Cómo se conecta este rastreador a Plaspy

El MT06 se configura para enviar posiciones y mensajes de evento al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir esos mensajes en mapas en vivo, el historial y las alertas. Plaspy acepta conexiones por el transporte declarado y determina automáticamente el protocolo correcto.

- El rastreador envía datos GPRS al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones UDP o TCP y detectará el protocolo del rastreador para su interpretación.
- Las actualizaciones de posición y los eventos de alarma reportados por el MT06 se muestran en los paneles y reportes de Plaspy.
- Comportamientos del dispositivo como control de relé o señales de alarma pueden activar acciones y flujos de trabajo dentro de Plaspy.
- Usar el servidor y puerto compartidos de Plaspy simplifica la incorporación de equipos porque los mismos ajustes de red se aplican a todos los rastreadores compatibles.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante para el MT06 (comandos SMS o el software proporcionado) y confirme el IMEI del dispositivo.
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en la configuración del rastreador.
3. Establezca el puerto de Plaspy en 8888 en la configuración del dispositivo.
4. Elija UDP o TCP en el equipo si este requiere seleccionar el transporte; Plaspy detectará automáticamente el protocolo independientemente de esta elección.
5. Configure el APN del operador móvil y, si aplica, el usuario y la contraseña del APN para que el dispositivo pueda conectarse por GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y las actualizaciones en vivo en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El MT06 comúnmente permite configuración por SMS. Los ejemplos de SMS abajo usan la contraseña por defecto del dispositivo 000000 en el prefijo del comando. Reemplace los marcadores y valores según corresponda para su equipo y operador.

- Nota: La contraseña por defecto del dispositivo que aparece en ejemplos públicos es 000000. Si su equipo usa otra contraseña, reemplace 000000 en cada comando.

- Reinicio de fábrica opcional inicial (usar solo cuando sea necesario):
```text
W000000,990,099###
```

- Establecer el ID del equipo usando los primeros 14 dígitos del IMEI (Plaspy utiliza el IMEI completo de 15 dígitos como identificador). Reemplace [IMEI14] por los primeros 14 dígitos del IMEI:
```text
W000000,010,[IMEI14]
```

- Configurar el APN del operador. Reemplace [apn] por el APN de su operador. Si su APN requiere usuario y contraseña, incluya [apnu] y [apnp]:
```text
W000000,011,[apn]
```
O con usuario y contraseña del APN:
```text
W000000,011,[apn],[apnu],[apnp]
```
(Placeholders: [apn] es su APN, [apnu] es el usuario del APN, [apnp] es la contraseña del APN.)

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
W000000,012,54.85.159.138,8888
```
(También puede ingresar el dominio d.plaspy.com en dispositivos que acepten un nombre de dominio para el servidor.)

- Cambiar el dispositivo al modo de reporte GPRS:
```text
W000000,013,2
```

- Establecer el intervalo de actualización de ubicación (valor de ejemplo 6; consulte la documentación del fabricante para unidades e intervalos válidos):
```text
W000000,014,6
```

- Verificar el IMEI del dispositivo vía SMS:
```text
W000000,601
```

Siga la secuencia anterior cuando el orden sea importante: por ejemplo, configure APN y servidor GPRS antes de cambiar al modo GPRS. Use el comando de reinicio solo cuando sea necesario.

## Notas de configuración

- La configuración por SMS es de uso habitual para el MT06 y aparece en ejemplos públicos; asegúrese de que el remitente SMS use el formato correcto y la contraseña por defecto.
- Algunas revisiones de firmware o variantes regionales pueden aceptar nombres de dominio como d.plaspy.com en lugar de la IP 54.85.159.138; elija la forma que su dispositivo soporte.
- Plaspy utiliza un único puerto para todos los dispositivos y detectará automáticamente el protocolo; aun así, puede que deba seleccionar UDP o TCP en el equipo según lo requiera el firmware.
- El APN, usuario y contraseña del APN son específicos del operador; confirme estos valores con su proveedor móvil antes de configurar.
- Siempre contraste los comandos con la documentación más reciente del fabricante para su versión de firmware MT06, ya que los formatos de comandos y parámetros disponibles pueden cambiar.

## Por qué usar Plaspy con esta configuración

Usar el MT06 con Plaspy ofrece una ruta sencilla hacia la visibilidad en tiempo real de vehículos, notificaciones de eventos y monitoreo operativo sin configuraciones de red complejas por equipo. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la fricción en implementaciones masivas, mientras que el diseño compacto y de bajo consumo del MT06 y sus capacidades de control de relé lo hacen adecuado para instalaciones discretas y flujos básicos de inmovilización.

Para obtener más información sobre Plaspy y cómo esta configuración encaja en flujos de trabajo de seguimiento de flotas visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, sintaxis de comandos y detalles de firmware, verifique la información en el sitio del fabricante https://www.gztopshine.com/
