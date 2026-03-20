---
slug: /wanway/g18/configuration
id: g18-configuration
sidebar_label: Configuration
title: WanWay - G18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador WanWay G18 y ajustes de servidor Plaspy para una integración rápida
keywords:
  - Configuración WanWay G18
  - Instalación WanWay G18
  - WanWay G18 Plaspy
  - Configuración de servidor WanWay G18
  - Configuración rastreador GPS WanWay
  - Configuración del tracker G18
  - Ajustes de servidor G18 Plaspy
  - Comandos SMS WanWay G18
  - Configuración GPRS G18
  - Configuración rastreador vehicular G18
---

# WanWay - G18 Configuración

Esta página describe la configuración pública necesaria para usar el rastreador WanWay G18 con Plaspy. Se enfoca en los ajustes prácticos y públicos requeridos para apuntar el dispositivo al servidor de Plaspy y validar la conectividad. Use esta guía para conocer los datos de servidor necesarios y el flujo general de configuración por SMS o por herramienta; confirme cualquier detalle específico del dispositivo en la documentación oficial de WanWay.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, mientras que los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G18 soporta GSM 2G y configuración GPRS mediante comandos SMS y parámetros de servidor GPRS, como se muestran en los ejemplos a continuación.

## Resumen de la configuración

El objetivo es dejar el G18 listo para comunicarse de forma fiable con Plaspy, enviar actualizaciones periódicas de posición y reportes de eventos, y aparecer en la plataforma de Plaspy. Una configuración típica incluye ajustar el APN del operador, apuntar el tracker al endpoint de Plaspy, configurar los intervalos de reporte y habilitar el modo de datos GPRS.

- Configure el APN del operador para que el dispositivo pueda usar datos móviles para subidas GPRS.
- Apunte el tracker al servidor Plaspy d.plaspy.com (o a la IP del servidor) y establezca el puerto compartido.
- Ajuste el intervalo de reportes para que el dispositivo envíe fixes GPS periódicos a Plaspy.
- Habilite el modo de datos GPRS y verifique que el dispositivo pueda registrarse en la red.
- Valide la configuración usando los comandos de estado y consulta de parámetros del tracker.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo que use el tracker cuando se conecte.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con datos GPRS habilitados y el APN correcto para su operador.
- Energía en el G18 y acceso físico para enviar comandos SMS o usar la herramienta de configuración del fabricante.
- Una cuenta en Plaspy capaz de recibir datos de dispositivos y asociarlos en la plataforma.
- Conocimiento del APN de su operador y, si aplica, el nombre de usuario y contraseña del APN.
- Capacidad básica para enviar SMS al número IMEI del dispositivo o usar la utilidad de configuración WanWay cuando esté disponible.
- Acceso a la documentación oficial de WanWay para la sintaxis de comandos específica del firmware y ejemplos.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el G18 usa GPRS para subir datos de ubicación y eventos al endpoint compartido del servidor Plaspy. Plaspy ingiere esos paquetes, normaliza las cargas útiles específicas del protocolo y expone la telemetría y las alertas en paneles y reportes.

- El tracker se configura para apuntar a d.plaspy.com (o 54.85.159.138) en el puerto 8888 para todas las conexiones de dispositivos.
- Los fixes de posición y los paquetes de eventos se envían por GPRS al endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del tracker y procesa los datos entrantes.
- Alertas de eventos como vibración, manipulación o colisión se reenvían a la plataforma Plaspy.
- Plaspy ofrece visibilidad y monitoreo operativo una vez que el dispositivo reporte al servidor compartido.

## Flujo típico de configuración

1. Acceda al método oficial de configuración WanWay o al software correspondiente (comandos SMS, herramienta del proveedor o utilidad de instalador) para el G18.
2. Configure el APN del operador para que el dispositivo pueda usar datos GPRS.
3. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Elija transporte UDP o TCP si el dispositivo requiere selección explícita; de lo contrario, confíe en los valores por defecto del dispositivo y la detección automática de Plaspy.
6. Aplique o guarde la configuración y habilite el modo de datos GPRS en el dispositivo.
7. Reinicie o corte y restablezca la alimentación del dispositivo si el firmware lo requiere.
8. Valide que el dispositivo reporte a Plaspy revisando la plataforma Plaspy y usando los comandos de verificación del dispositivo.

## Comandos de configuración de ejemplo

El G18 acepta comandos de configuración por SMS. A continuación se muestran comandos públicos de ejemplo para el modelo en el orden recomendado. Preserve los marcadores de posición al reemplazar valores.

- Configure el APN del operador (reemplace los marcadores con los valores de su APN; apnu y apnp son opcionales y solo se usan si su operador requiere usuario y contraseña):
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Configure el servidor GPRS a Plaspy usando el dominio público y el puerto. Mantenga el orden de parámetros tal como aparece:
```
SERVER,1,d.plaspy.com,8888,0#
```
Nota: El parámetro final en el comando SERVER puede depender del firmware. Consulte la documentación de WanWay para la sintaxis y el significado exacto.

- Configure el intervalo de actualización de ubicación (ejemplo con valores de temporizador; modifique según necesite):
```
TIMER,60,60#
```
- Habilite el modo GPRS en el tracker:
```
GPRSON,1#
```
- Verifique los parámetros de configuración actuales:
```
PARAM#
```
- Consulte el estado del tracker:
```
STATUS#
```

Envíe estos comandos SMS al dispositivo según las indicaciones del manual de usuario de WanWay. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN, usuario y contraseña de su operador según corresponda.

## Notas de configuración

- La configuración por SMS está soportada para el G18; los comandos y el orden de parámetros dependen del firmware, por lo que confirme la sintaxis exacta en la documentación de WanWay.
- El comando SERVER mostrado usa d.plaspy.com y el puerto 8888; Plaspy utiliza un puerto compartido y detección automática del protocolo para los trackers entrantes.
- Si su dispositivo requiere selección explícita de transporte, elija UDP o TCP según la guía del instalador; Plaspy acepta ambos.
- Los intervalos de reporte y el comportamiento pueden variar entre versiones de firmware y revisiones de hardware; realice pruebas después de la configuración.
- Mantenga a mano las notas de firmware del fabricante y la documentación de instalación durante el proceso para resolver cualquier diferencia en la sintaxis o las respuestas de los comandos.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay G18 para reportar a Plaspy ofrece a las flotas un hardware compacto junto con una plataforma unificada para seguimiento de posiciones, alertas de eventos y visibilidad del comportamiento del conductor. La configuración de servidor compartida y la detección automática de protocolos en Plaspy simplifican el alta de múltiples unidades G18 y permiten obtener telemetría consistente en sus flujos de mapas y reportes.

Para saber más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para métodos específicos del dispositivo, comportamiento del firmware y la sintaxis de comandos más reciente, siempre verifique la información vigente con el fabricante en https://www.wanwaytech.net/.
