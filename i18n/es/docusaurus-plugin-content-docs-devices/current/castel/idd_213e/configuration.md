---
slug: /castel/idd_213e/configuration
id: idd_213e-configuration
sidebar_label: Configuration
title: Castel - IDD-213E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Castel IDD-213E con Plaspy mediante dominio o IP y configuración por SMS
keywords:
  - Configuración Castel IDD-213E
  - Configuración Castel IDD-213E para Plaspy
  - Configuración tracker Castel
  - Instalación rastreador GPS Castel
  - Configuración dispositivo Plaspy
  - Configuración rastreador diagnóstico vehicular
  - Configuración rastreador 3G
  - Rastreo de flotas Castel IDD-213E
  - Configuración por SMS de rastreador
  - Configuración rastreador OBD
---

# Castel - IDD-213E Configuración

Esta página documenta el contexto de configuración pública para usar el Castel IDD-213E con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo básico de configuración por SMS publicado para el IDD-213E, de modo que usted pueda apuntar el dispositivo a Plaspy y verificar la conectividad. Use esta guía junto con el manual del dispositivo y las herramientas del fabricante para la instalación y el ajuste completos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante para el IDD-213E pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El IDD-213E admite configuración por SMS y conectividad 3G; los comandos SMS públicos que siguen muestran cómo establecer APN y valores de servidor para Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el IDD-213E para que se comunique de forma fiable con Plaspy y aparezca en la plataforma para seguimiento en tiempo real y diagnóstico. Los pasos públicos se enfocan en ajustar el APN celular y el endpoint del servidor Plaspy, validar la conectividad y confirmar que los datos llegan a la plataforma.

- Establecer APN y parámetros GPRS para que el dispositivo utilice su conexión 3G y envíe datos a Plaspy.
- Configurar el IDD-213E para que reporte al endpoint central de Plaspy mediante dominio o IP.
- Elegir el transporte (UDP o TCP) según se requiera y configurar el puerto común de Plaspy.
- Verificar la configuración usando el comando de consulta por SMS del dispositivo y comprobando el estado en Plaspy.
- Asegurarse de que el dispositivo pueda leer datos diagnósticos del vehículo y enviarlos al backend una vez conectado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un IDD-213E alimentado e instalado con acceso al puerto OBD del vehículo o al punto de instalación correspondiente.
- Una tarjeta SIM activa con plan de datos y los valores correctos de APN para su operador móvil.
- Acceso al ID del dispositivo para derivar la clave secreta predeterminada usada en las instrucciones por SMS.
- Capacidad para enviar y recibir SMS desde el teléfono del instalador para la configuración basada en SMS.
- Documentación oficial de Castel o la herramienta de configuración proporcionada por el proveedor como referencia.

## Cómo se conecta este rastreador a Plaspy

El IDD-213E se configura para reportar su ubicación e información diagnóstica al endpoint y puerto compartidos de Plaspy. Normalmente se establecen el APN y los detalles del servidor en el dispositivo, y se verifica que pueda abrir una sesión GPRS/3G para enviar paquetes a Plaspy.

- El dispositivo usa su enlace celular 3G y el APN configurado para abrir conectividad de datos GPRS.
- El IDD-213E se apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte se selecciona como UDP o TCP según preferencia del dispositivo o del instalador.
- Una vez conectado, el dispositivo transmite mensajes de rastreo y diagnóstico a Plaspy, donde la detección de protocolo ocurre automáticamente.
- Plaspy recibe los mensajes en el puerto compartido y presenta los datos de ubicación y eventos en la plataforma.

## Flujo de configuración común

1. Obtenga el método oficial de configuración de Castel o el software y revise el manual del dispositivo para los ajustes SMS y GPRS.
2. Confirme el ID del dispositivo y derive la clave secreta SMS predeterminada (el IDD-213E usa los últimos 6 caracteres ASCII del ID del dispositivo como clave secreta por defecto para comandos SMS).
3. Introduzca el servidor de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 según lo que admita el dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP si el equipo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo usando SMS o la herramienta del fabricante.
6. Reinicie el dispositivo si el procedimiento o el firmware exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy consultando los ajustes GPRS del equipo y confirmando que el dispositivo aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El IDD-213E admite configuración basada en SMS. Los comandos SMS públicos que siguen muestran cómo establecer valores de APN y servidor, y cómo consultar los ajustes GPRS actuales. La clave secreta predeterminada para instrucciones SMS son los últimos 6 caracteres ASCII del ID del dispositivo. Reemplace [SecretKey] por ese valor y [apn], [apnu], [apnp] por el APN, usuario y contraseña de su operador según sea necesario.

- Establecer APN y servidor por IP o dominio (el ejemplo usa la IP y puerto de Plaspy). Reemplace los marcadores antes de enviar:

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

o, si prefiere usar el dominio de Plaspy:

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],d.plaspy.com,8888*
```

- Consultar los ajustes GPRS actuales en el dispositivo:

```
*[SecretKey]#get gprs#*
```

Notas sobre los marcadores:
- [SecretKey]: la contraseña SMS del dispositivo, por defecto los últimos 6 caracteres ASCII del ID del dispositivo.
- [apn]: la cadena APN del operador móvil necesaria para datos.
- [apnu] y [apnp]: usuario y contraseña del APN opcionales si su operador los requiere.

## Observaciones de configuración

- Las diferencias de firmware pueden cambiar los comandos SMS disponibles o la sintaxis de los comandos; consulte siempre el manual del dispositivo para su revisión de firmware.
- El IDD-213E soporta la configuración vía SMS como se muestra, pero los fabricantes suelen ofrecer herramientas para PC o aplicaciones de configuración como alternativas.
- Elija UDP o TCP según las indicaciones del instalador o las condiciones de la red; ambos transportes son compatibles en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 es suficiente para la conectividad inicial.
- Mantenga privada la información del APN y credenciales, y confirme los requisitos del operador antes de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Usar el Castel IDD-213E con Plaspy ofrece un manejo unificado en el backend de datos de ubicación y diagnóstico para que los administradores de flotas puedan combinar telemetría y rastreo en una sola plataforma. La configuración centralizada del servidor de Plaspy simplifica el aprovisionamiento de dispositivos porque los rastreadores soportados reportan al mismo endpoint y Plaspy detecta el protocolo automáticamente, reduciendo la personalización por dispositivo.

Para saber más sobre Plaspy y la compatibilidad con dispositivos visite https://www.plaspy.com. Para métodos específicos del dispositivo Castel, notas de firmware y comandos oficiales consulte a Castel en http://www.castelecom.com/ ya que la documentación del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
