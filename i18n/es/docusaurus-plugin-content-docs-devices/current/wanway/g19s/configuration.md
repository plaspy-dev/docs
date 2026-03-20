---
slug: /wanway/g19s/configuration
id: g19s-configuration
sidebar_label: Configuration
title: WanWay - G19S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el WanWay G19S a Plaspy usando la configuración compartida del servidor Plaspy
keywords:
  - WanWay G19S configuración
  - WanWay G19S instalación
  - WanWay G19S Plaspy
  - WanWay G19S configuración servidor
  - WanWay G19S rastreador GPS
  - WanWay G19S configuración SMS
  - WanWay G19S configuración GPRS
  - WanWay rastreador Plaspy
  - G19S configuración rastreo vehicular
  - G19S configuración software de rastreo
---

# WanWay - Configuración del G19S

Esta página describe la configuración pública para usar el rastreador WanWay G19S con la plataforma Plaspy. Resume los ajustes prácticos del servidor y los pasos de configuración más habituales que permiten al G19S reportar ubicación y estado del dispositivo a Plaspy. Las indicaciones que aparecen a continuación usan únicamente pasos publicados y los valores públicos de conexión de Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El G19S puede configurarse por SMS y GPRS usando los comandos públicos de WanWay; para detalles específicos del dispositivo utilice la documentación oficial de WanWay y las herramientas del proveedor.

## Resumen de la configuración

Esta configuración prepara el G19S para enviar posiciones y actualizaciones de estado a Plaspy mediante la configuración del APN del dispositivo, el endpoint del servidor, el intervalo de reporte y el modo GPRS. El objetivo es que el rastreador sea visible y manejable dentro de Plaspy usando el endpoint compartido de la plataforma y la detección automática del protocolo.

- Configure el APN del operador para que el G19S pueda conectarse a datos móviles y reportar por GPRS.  
- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma.  
- Configure un intervalo de reporte que controle la frecuencia con la que el rastreador envía actualizaciones a Plaspy.  
- Habilite el modo GPRS en el rastreador para que use datos móviles en la transmisión de mensajes.  
- Verifique la configuración y el estado del dispositivo con los comandos de verificación publicados por WanWay.

## Valores del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transport: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta conexiones de dispositivos compatibles sin que sea necesario seleccionar el protocolo en el servidor

## Requisitos típicos antes de configurar

- Un rastreador WanWay G19S instalado y con alimentación, con acceso a su interfaz de SMS o de configuración.  
- Una tarjeta SIM insertada que soporte datos móviles y pueda enviar/recibir SMS si emplea la configuración por SMS.  
- Información del APN del operador para la tarjeta SIM, necesaria para habilitar la conectividad GPRS.  
- Acceso al método de configuración oficial de WanWay, típicamente comandos SMS o una herramienta de configuración de WanWay.  
- Una cuenta en Plaspy o un método de aprovisionamiento para registrar y visualizar el dispositivo una vez que informe a la plataforma.  
- Un plan básico de validación para confirmar que el dispositivo reporta ubicación tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El WanWay G19S puede configurarse para reportar ubicación y estado usando GPRS hacia el endpoint y puerto compartidos de Plaspy, de modo que los datos del rastreador aparezcan dentro de la plataforma Plaspy. El servidor de Plaspy acepta conexiones por el puerto compartido y detecta el protocolo del rastreador automáticamente.

- El rastreador utiliza el APN configurado para establecer una sesión de datos GPRS.  
- La telemetría del dispositivo se envía a d.plaspy.com (o a la IP del servidor Plaspy) en el puerto 8888.  
- El rastreador puede configurarse para usar transporte UDP o TCP al transmitir hacia el puerto 8888.  
- Plaspy recibe los datos entrantes y los asocia al dispositivo correspondiente mediante la detección automática del protocolo.  
- Tras la conexión exitosa, las actualizaciones de ubicación y los mensajes de estado se vuelven visibles en Plaspy para monitoreo y generación de informes.

## Flujo de configuración habitual

1. Reúna el dispositivo, una SIM operativa con datos y capacidad de SMS, el APN del operador y acceso a las instrucciones o herramientas de WanWay.  
2. Use el método oficial de configuración de WanWay (comandos SMS o herramienta del proveedor) para establecer el APN del operador y permitir que el rastreador abra una sesión GPRS.  
3. Introduzca los valores del servidor Plaspy: d.plaspy.com (o 54.85.159.138) y establezca el puerto en 8888.  
4. Si el dispositivo requiere elegir el tipo de transporte, seleccione UDP o TCP según su preferencia de red.  
5. Configure un intervalo de reporte (timer) apropiado para sus necesidades de monitoreo y guarde o aplique la configuración.  
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware lo exige para activar los nuevos ajustes.  
7. Valide que el dispositivo está reportando comprobando el estado con los comandos de verificación de WanWay y confirmando que el dispositivo aparece en Plaspy.

## Comandos de ejemplo para la configuración

El WanWay G19S admite configuración por SMS. A continuación aparecen los comandos públicos más comunes publicados para el G19S. Conserve los marcadores de posición al enviar comandos.

- Configure el APN del operador (reemplace {{apn}}, y si es necesario incluya usuario y contraseña):
```text
APN,{{apn}}{{# if apnu }} ,{{apnu}},{{apnp}}#{{/if}}
```
Ejemplo en la forma proporcionada:
```text
APN,{{apn}}
```
o cuando se requieren usuario y contraseña:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Configure el servidor GPRS para que reporte a Plaspy (entrada del servidor seguida del puerto y cualquier parámetro del dispositivo):
```text
SERVER,1,d.plaspy.com,8888,0#
```
- Establezca el intervalo de reportes periódico (ejemplo que define dos timers, usados a menudo para intervalos fijo y en movimiento):
```text
TIMER,60,60#
```
- Habilite el modo GPRS en el dispositivo:
```text
GPRSON,1#
```
- Verifique la configuración actual del dispositivo:
```text
PARAM#
```
- Consulte el estado del rastreador:
```text
STATUS#
```

Notas sobre los comandos anteriores:
- Mantenga el orden: APN primero, luego SERVER, después TIMER y por último habilitar GPRS. Esa secuencia ayuda a garantizar que el dispositivo tenga conectividad de red antes de apuntarlo al servidor Plaspy.  
- {{apn}}, {{apnu}} y {{apnp}} son marcadores de posición para su APN del operador, nombre de usuario del APN y contraseña del APN respectivamente. Reemplácelos por los valores exactos proporcionados por su operador móvil.  
- El comando SERVER del ejemplo usa d.plaspy.com y el puerto 8888 según lo requerido por Plaspy.

## Observaciones sobre la configuración

- Las versiones de firmware de WanWay y las variantes regionales de hardware pueden cambiar la sintaxis exacta de los SMS o el orden de los parámetros; siempre consulte la documentación más reciente de WanWay para su revisión de dispositivo.  
- La configuración por SMS es un método público habitual para el G19S, pero también pueden existir software del proveedor o herramientas USB/serial; utilice el método recomendado por su instalador.  
- Si la interfaz de configuración solicita el tipo de transporte, puede elegir UDP o TCP; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente en el servidor.  
- Confirme las credenciales del APN con el operador móvil antes de enviar comandos; un APN incorrecto es la causa más frecuente de fallos en los reportes GPRS.  
- Después de aplicar los ajustes, espere un corto período para que el dispositivo se registre en la red móvil y para que Plaspy detecte la sesión entrante.

## Por qué usar Plaspy con esta configuración

Usar el WanWay G19S con Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real y monitoreo operativo. Al apuntar el G19S al endpoint compartido de Plaspy y configurar un intervalo de reporte fiable, las organizaciones obtienen seguimiento casi en tiempo real, alertas de estado e historial de rutas en una plataforma única diseñada para aceptar múltiples protocolos de rastreadores.

Si desea obtener más información sobre Plaspy y cómo la plataforma gestiona las conexiones de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, notas de firmware y referencias técnicas más actualizadas, verifique los detalles de configuración en el sitio del fabricante https://www.wanwaytech.net/ ya que el comportamiento y los comandos del dispositivo pueden cambiar entre versiones de firmware y hardware.
