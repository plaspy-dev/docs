---
slug: /wanway/s20/configuration
id: s20-configuration
sidebar_label: Configuration
title: WanWay - S20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WanWay S20 para Plaspy con ajustes de servidor y comandos SMS
keywords:
  - WanWay S20 configuración
  - Configuración WanWay S20
  - WanWay S20 Plaspy
  - Configuración rastreador GPS S20
  - Configuración servidor S20
  - Configuración rastreador de activos WanWay
  - Configuración rastreador GPS Plaspy
  - Integración GPS de activos Plaspy
  - Configuración SMS S20
  - Configuración servidor GPRS WanWay
---

# WanWay - Configuración del S20

Esta página describe el contexto público de configuración para usar el rastreador GPS de activos WanWay S20 con Plaspy. Compila los ajustes de servidor de Plaspy y los comandos públicos prácticos que se usan para dirigir el S20 hacia Plaspy para el envío de reportes. Use esta guía como referencia práctica al preparar una unidad S20 para su operación con la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El S20 soporta configuración vía SMS según la guía pública que se muestra abajo, por lo que esta página incluye comandos SMS de ejemplo y el flujo de trabajo general, recomendando consultar la documentación de WanWay para detalles específicos del dispositivo.

## Resumen de la configuración

El proceso de configuración prepara el S20 para reportar ubicación y estado a Plaspy, de modo que el dispositivo sea visible en su vista de flota. Normalmente esto implica establecer el APN del operador, configurar la dirección y puerto del servidor GPRS hacia Plaspy, activar el reporte por GPRS y validar el estado del dispositivo tras la configuración.

- Configurar el APN del operador para que el dispositivo establezca conexión de datos para el reporte GPRS.
- Apuntar el servidor GPRS al dominio y puerto compartidos de Plaspy.
- Ajustar los intervalos de reporte para equilibrar visibilidad en tiempo real y duración de batería.
- Habilitar el reporte por GPRS o cambiar el dispositivo a modo GPRS para que envíe datos activamente.
- Validar la configuración con consultas de estado y parámetros y confirmar que el dispositivo aparece en Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos son los valores públicos de Plaspy que debe usar al configurar el objetivo de servidor en el S20. Todos los dispositivos que reportan a Plaspy usan el mismo puerto y la plataforma intentará detectar automáticamente el protocolo del dispositivo.

## Requisitos habituales antes de la configuración

- Una unidad S20 cargada con la ranura SIM accesible y batería suficiente.
- Una tarjeta SIM con plan de datos activo y capacidad de SMS para enviar mensajes de configuración.
- La información correcta del APN de su operador (usuario y contraseña si son requeridos).
- Acceso al método de configuración vía SMS de WanWay o a las instrucciones oficiales del fabricante.
- Una cuenta o acceso a la plataforma Plaspy para verificar que el dispositivo aparece tras la configuración.
- Capacidad para reiniciar o cortar la alimentación del dispositivo después de aplicar los ajustes si fuese necesario.

## Cómo se conecta este rastreador a Plaspy

El S20 se configura para enviar actualizaciones de ubicación y estado al endpoint del servidor de Plaspy, de modo que Plaspy pueda ofrecer mapeo, alarmas y reproducción histórica. Normalmente esto se logra configurando el dispositivo para reporte por GPRS y apuntando los campos de servidor a d.plaspy.com en el puerto compartido.

- El rastreador reporta posición y telemetría al endpoint de Plaspy d.plaspy.com usando el puerto 8888.
- Plaspy recibe datos entrantes vía UDP o TCP; el rastreador debe configurarse según el transporte que requiera su firmware.
- La plataforma detecta automáticamente el protocolo del rastreador, por lo que se emplea el mismo puerto de Plaspy para distintos dispositivos.
- El estado de manipulación (tamper) y la batería reportados por el S20 se envían a los sistemas de alarmas e informes de Plaspy para monitoreo operativo.
- Tras una configuración exitosa, el dispositivo queda visible en Plaspy para seguimiento en vivo y reproducción histórica.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración WanWay para el S20, normalmente comandos SMS como los indicados en la documentación del fabricante o mediante una herramienta de configuración WanWay.
2. Ingrese d.plaspy.com (o la IP del servidor Plaspy) en el campo de servidor del dispositivo para dirigir los reportes hacia Plaspy.
3. Establezca el puerto 8888 como puerto de reporte del dispositivo; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo y habilite el modo de reporte GPRS si es necesario.
6. Reinicie o intercambie la alimentación del S20 si el firmware del dispositivo exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y confirmando que el activo aparece en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El S20 soporta configuración vía SMS según la guía pública provista por WanWay. Envíe estos comandos SMS desde el número de teléfono autorizado para configurar el dispositivo. Conserve los marcadores de posición al reemplazarlos por valores específicos del operador.

- Configure el APN del operador (reemplazar {{apn}} y, si corresponde, incluir {{apnu}} y {{apnp}} para usuario y contraseña del APN):
```text
APN,{{apn}}{{apnu}},{{apnp}}#
```
Nota: Si el dispositivo soporta los campos opcionales de usuario y contraseña, use el formato mostrado en el manual del equipo. Mantenga los marcadores de posición exactamente según sea necesario.

- Configure el servidor GPRS para apuntar a Plaspy usando el dominio público y el puerto:
```text
SERVER,1,d.plaspy.com,8888,0#
```
Este comando dirige el dispositivo al dominio del servidor Plaspy en el puerto 8888. El parámetro final de este comando depende del firmware y puede indicar transporte u otras banderas; consulte el manual de WanWay para el significado exacto de los parámetros.

- Establezca el intervalo de reportes (el ejemplo fija dos temporizadores, ajuste los valores según sus necesidades):
```text
TIMER,60,60#
```

- Habilite el modo de reporte por GPRS:
```text
GPRSON,1#
```

- Verifique los parámetros del dispositivo:
```text
PARAM#
```

- Consulte el estado de funcionamiento del dispositivo:
```text
STATUS#
```

Envíe cada comando como un SMS independiente desde un número de teléfono de confianza. El S20 normalmente responderá con mensajes de confirmación; supervise las respuestas para verificar la aplicación correcta de los ajustes.

## Notas sobre la configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis requerida de los comandos o el significado de los parámetros; confirme siempre el formato exacto con la documentación de WanWay para su versión de firmware.
- El S20 soporta la configuración vía SMS como se muestra en los comandos públicos arriba; algunos instaladores utilizan herramientas de software del fabricante en lugar de SMS cuando están disponibles.
- El comando SERVER en el ejemplo usa d.plaspy.com y el puerto 8888; Plaspy también publica una IP de servidor, pero usar el dominio suele ser más sencillo para actualizaciones.
- Cuando el dispositivo requiere elegir entre UDP o TCP, seleccione el transporte compatible con el firmware del equipo; Plaspy detectará el protocolo del rastreador en su puerto compartido.
- Tras aplicar los ajustes, utilice PARAM# y STATUS# para verificar que el dispositivo aceptó la configuración y está listo para reportar.

## Por qué usar Plaspy con esta configuración

Usar el WanWay S20 con Plaspy ofrece visibilidad centralizada para escenarios de rastreo de activos donde la duración de batería, la detección de manipulación y la portabilidad son importantes. Apuntar el S20 a Plaspy (d.plaspy.com en el puerto 8888) habilita seguimiento en tiempo real, enrutamiento de alarmas y reproducción histórica para que los equipos puedan responder rápidamente a incidentes y mantener supervisión operativa sobre activos distribuidos.

Para obtener más información sobre Plaspy y cómo puede integrarse con rastreadores como el WanWay S20 visite https://www.plaspy.com. Para los métodos de configuración más actuales, comportamiento de firmware y detalles del fabricante, verifique la documentación oficial de WanWay en https://www.wanwaytech.net/ antes de aplicar la configuración a activos en producción.
