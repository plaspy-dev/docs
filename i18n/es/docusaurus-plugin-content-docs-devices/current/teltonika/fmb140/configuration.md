---
slug: /teltonika/fmb140/configuration
id: fmb140-configuration
sidebar_label: Configuration
title: Teltonika - FMB140 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Teltonika FMB140 con Plaspy, incluyendo ajustes de servidor, comandos y flujo de configuración
keywords:
  - Configuración Teltonika FMB140
  - Instalación FMB140 Plaspy
  - Configuración servidor FMB140
  - Configuración rastreador GPS FMB140
  - Configuración dispositivo Plaspy
  - Rastreador vehicular FMB140
  - Configuración telemetría CAN FMB140
  - Teltonika Configurator FMB140
  - Ajustes servidor Plaspy
  - Configuración SMS FMB140
---

# Teltonika - Configuración FMB140

Esta página describe el contexto público de configuración para usar el Teltonika FMB140 con la plataforma Plaspy. Se centra en la información práctica de servidor y comandos que usted necesitará para apuntar un FMB140 a Plaspy, validar la conectividad y habilitar el dispositivo para el reporte. Use este contenido como complemento de la documentación oficial de Teltonika y de las herramientas de configuración que ya utilice.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que en la plataforma se requiere el mismo endpoint y puerto para todos los equipos soportados. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, como Teltonika Configurator o comandos SMS. Cuando esté disponible, esta página incluye comandos de ejemplo y marcadores que puede reemplazar según su despliegue.

## Resumen de la configuración

Configurar el Teltonika FMB140 para Plaspy prepara el dispositivo para enviar ubicación y telemetría al endpoint y puerto compartidos de Plaspy, de modo que los vehículos aparezcan en la plataforma y se recolecte la telemetría CAN y de sensores relacionada. El proceso de configuración típicamente establece el APN y credenciales de red, selecciona el endpoint y transporte del servidor y asegura que el equipo guarde y reinicie la configuración para que comiencen los reportes.

- Configure el APN y los parámetros de red necesarios para conectividad GPRS.
- Apunte el dispositivo al endpoint de Plaspy para que la telemetría llegue a la plataforma.
- Elija el transporte (UDP o TCP) y ajuste el puerto común usado por Plaspy.
- Guarde y aplique la configuración, luego verifique que el dispositivo aparezca en Plaspy.
- Use herramientas del fabricante o comandos SMS en lote cuando sea posible para actualizar múltiples dispositivos.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com para conexiones salientes de los rastreadores hacia Plaspy
- IP del servidor 54.85.159.138 como endpoint alternativo para configuración directa por IP
- Puerto 8888 que es el puerto único usado por Plaspy para todos los dispositivos soportados
- Soporte de transporte UDP o TCP; el FMB140 puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpretará las conexiones entrantes del FMB140 sin selección de protocolo por dispositivo en Plaspy

## Requisitos típicos antes de la configuración

- Un FMB140 con alimentación instalado o accesible para configuración y pruebas
- Servicio GSM 2G activo y una SIM con datos habilitados y los ajustes APN correctos para su operador
- Acceso a herramientas de configuración Teltonika como Teltonika Configurator o capacidad de envío de SMS para comandos en lote
- Conocimiento de los valores APN de su proveedor de SIM para reemplazar los marcadores en los comandos
- Confirmación de la versión de firmware y detalles SKU cuando el comportamiento de accesorios CAN sea relevante
- Acceso administrativo a su cuenta de Plaspy para verificar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMB140 envía posición y telemetría derivada del CAN al endpoint y puerto compartidos de Plaspy. Plaspy recibe las conexiones de dispositivos en el puerto estándar y determina automáticamente el protocolo del rastreador, por lo que los mensajes entrantes se analizan y mapean en los paneles e informes de la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138
- El tráfico saliente usa el puerto 8888, donde Plaspy acepta tanto UDP como TCP
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes para su visualización
- La telemetría, incluidos parámetros CAN y eventos de accesorios, se reenvía a Plaspy para monitorización en tiempo real
- Una vez que empiezan los reportes, usted puede validar la visibilidad y los eventos desde la interfaz de Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante, como Teltonika Configurator, o al canal de comandos SMS en lote que soporte el FMB140.
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según requiera su método de configuración.
3. Configure el puerto de destino en 8888, que es el puerto utilizado por todos los dispositivos Plaspy.
4. Elija UDP o TCP si su dispositivo solicita la selección de transporte y guarde ese ajuste.
5. Configure el APN y las credenciales de red necesarias, sustituyendo los marcadores por los valores de su operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware requieren reboot para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; verifique la telemetría y los parámetros CAN cuando aplique.

## Comandos de configuración de ejemplo

El siguiente comando de ejemplo es un comando público estilo SMS en lote de Teltonika para establecer los parámetros básicos de red y servidor. Este comando se proporciona en el contenido público de configuración del modelo y utiliza marcadores para los valores APN. Reemplace los marcadores por el APN y credenciales de su operador antes de enviar.

- Comando SMS en lote de ejemplo para establecer APN y parámetros del servidor Plaspy

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores
  - {{apn}} debe reemplazarse por el nombre APN de su operador móvil
  - {{apnu}} es el nombre de usuario del APN si el operador lo requiere; dejar en blanco si no aplica
  - {{apnp}} es la contraseña del APN si el operador la requiere; dejar en blanco si no aplica

Notas de uso
- El comando anterior se envía comúnmente como un SMS en lote al dispositivo o se aplica mediante Teltonika Configurator cuando el firmware y el flujo de trabajo lo soportan.
- La secuencia de parámetros establece el APN, las credenciales del APN, el dominio de Plaspy, el puerto y un valor de bandera según el contenido público de configuración.
- Verifique siempre la sintaxis del comando según la versión de firmware de su dispositivo y la documentación de Teltonika antes de enviarlo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los IDs de parámetros o la sintaxis requerida de los comandos; confirme siempre con la documentación de Teltonika para su versión de firmware.
- El FMB140 soporta métodos de configuración por SMS y por software; elija el método que mejor se adapte al acceso a su dispositivo y a la escala del despliegue.
- Al seleccionar TCP frente a UDP considere los requisitos de red y latencia para su caso de uso; Plaspy soporta ambos transportes en el puerto 8888.
- Dado que Plaspy utiliza un puerto compartido y detección automática de protocolos, solo es necesario asegurar que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El comando de ejemplo público incluye marcadores de APN; reemplace esos marcadores por las credenciales de su SIM antes de aplicar.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB140 con Plaspy permite a las flotas combinar ubicación en tiempo real con telemetría a nivel CAN y eventos de accesorios para obtener información operativa más completa. Configurar el dispositivo para reportar al endpoint compartido de Plaspy simplifica el despliegue, ya que el mismo puerto y la detección automática de protocolo se aplican a los rastreadores soportados, reduciendo la configuración por dispositivo en la plataforma.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y compatibilidad de accesorios, verifique la información actual en el sitio del fabricante https://www.teltonika-gps.com/ ya que las especificaciones y pasos de configuración del fabricante pueden cambiar con el tiempo.
