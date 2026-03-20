---
slug: /wanway/ev02/configuration
id: ev02-configuration
sidebar_label: Configuration
title: WanWay - EV02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WanWay EV02 para Plaspy con ajustes de servidor, comandos SMS y flujo de configuración para reportes GPRS
keywords:
  - WanWay EV02
  - Configuración WanWay EV02
  - Configurar WanWay EV02
  - Configuración servidor WanWay EV02
  - Configuración tracker Plaspy
  - Configuración Plaspy
  - Rastreador GPS EV02
  - Gestión de flotas EV02
  - Configuración GPS WanWay
  - Seguimiento vehicular EV02
---

# WanWay - EV02 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador WanWay EV02 con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy que se usan en los dispositivos compatibles y muestra los comandos SMS públicos más habituales para configurar el EV02 y que reporte a Plaspy.

Plaspy emplea ajustes de servidor comunes para todos los rastreadores compatibles y detecta automáticamente el protocolo del equipo cuando se conecta. Los pasos de configuración del fabricante y el formato exacto de los comandos pueden variar según la versión de firmware del EV02, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. Los comandos de ejemplo que siguen muestran un flujo típico de configuración vía SMS.

## Resumen de la configuración

El EV02 debe estar preparado para comunicarse con Plaspy para que los datos de ubicación, eventos y estado lleguen de forma fiable a la plataforma. El proceso de configuración se centra en establecer el APN del equipo, apuntar el dispositivo al endpoint del servidor Plaspy y habilitar el reporte por GPRS para que la unidad aparezca en los paneles de Plaspy.

- Configure el APN celular para que el EV02 pueda abrir una sesión de datos GPRS.  
- Apunte el rastreador al servidor Plaspy d.plaspy.com y al puerto compartido de Plaspy para enrutar los datos a su cuenta.  
- Establezca los intervalos de reporte y active el modo GPRS para que el dispositivo envíe actualizaciones regulares a Plaspy.  
- Verifique la configuración y el estado del equipo usando las consultas por SMS del EV02 para confirmar la visibilidad en Plaspy.  
- Valide el dispositivo en Plaspy después de la configuración para asegurarse de que los eventos y las actualizaciones de ubicación se reciben correctamente.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (configure the tracker to use whichever transport the device requires)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Una tarjeta SIM con servicio activo de voz/SMS y datos GPRS adecuada para el EV02 y la región de operación.  
- Capacidad para enviar y recibir SMS desde el teléfono del instalador o del administrador si utiliza configuración por SMS.  
- Acceso a la instalación del EV02 (alimentación y cableado) para que el dispositivo esté encendido y pueda registrarse en la red.  
- El método oficial de configuración del fabricante o la documentación para comandos SMS o herramientas de aprovisionamiento del EV02.  
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece después de la configuración.  
- Conocimientos básicos de las credenciales APN de su operador para completar los campos del APN.

## Cómo se conecta este rastreador a Plaspy

El EV02 se conecta a Plaspy estableciendo una sesión GPRS y enviando datos de ubicación y eventos al endpoint y puerto compartidos del servidor Plaspy. Una vez que el dispositivo apunta al servidor Plaspy y el GPRS está habilitado, Plaspy recibirá telemetría, alarmas y actualizaciones de estado para su visualización y procesamiento.

- El dispositivo se configura para reportar a d.plaspy.com en el puerto 8888 para que toda la telemetría llegue al endpoint de Plaspy.  
- Plaspy usa detección automática de protocolo para identificar el protocolo del rastreador cuando el EV02 se conecta.  
- Las actualizaciones de ubicación, eventos de alarma y mensajes de estado son reenviados a Plaspy para monitoreo en tiempo real y reportes históricos.  
- El reporte periódico mediante temporizador asegura subidas regulares de posición a Plaspy para visibilidad de la flota.  
- Las verificaciones del instalador y las consultas de estado ayudan a confirmar que el dispositivo está en línea y visible dentro de Plaspy.

## Flujo común de configuración

1. Consulte el método de configuración oficial del WanWay EV02 descrito por el fabricante, normalmente comandos SMS o la herramienta de aprovisionamiento del proveedor.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto del dispositivo en 8888, el puerto compartido de Plaspy utilizado para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP en el dispositivo si requiere elegir el transporte explícitamente.  
5. Configure el APN del operador y cualquier credencial APN necesaria para la conectividad GPRS.  
6. Aplique o guarde la configuración y reinicie el rastreador si el firmware requiere un reboot para aplicar cambios.  
7. Valide que el dispositivo reporte a Plaspy verificando el estado en la plataforma y utilizando consultas de estado por SMS si están disponibles.

## Comandos de configuración de ejemplo

El EV02 soporta configuración por SMS. Envíe estos comandos desde un número de teléfono autorizado al dispositivo en el orden indicado. Preserve los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador al enviarlos.

- Configure el APN del operador (reemplace los marcadores con los valores de su proveedor):
```
APN,[apn]#
```
Si su operador requiere usuario y contraseña, inclúyalos:
```
APN,[apn],[apnu],[apnp]#
```
- Configure el servidor GPRS a Plaspy (entrada de servidor 1 apuntando a d.plaspy.com en el puerto 8888):
```
SERVER,1,d.plaspy.com,8888,0#
```
- Defina el intervalo de reporte (el ejemplo establece valores de temporizador a 60 segundos):
```
TIMER,60,60#
```
- Active el modo de reporte por GPRS:
```
GPRSON,1#
```
- Consulte los parámetros de configuración actuales:
```
PARAM#
```
- Consulte el estado del rastreador:
```
STATUS#
```

Notas sobre los marcadores de posición:
- [apn] es la cadena APN del operador necesaria para abrir una sesión GPRS.  
- [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN cuando el operador requiere credenciales.

## Observaciones de configuración

- La sintaxis exacta de los comandos SMS y el orden de parámetros pueden variar según la versión de firmware del EV02; consulte la documentación del fabricante si un comando no responde como se espera.  
- La configuración por SMS es un método público común para dispositivos EV02; algunos instaladores utilizan herramientas del proveedor o servicios de aprovisionamiento en lugar de SMS.  
- La elección entre TCP y UDP puede depender del soporte de firmware y la fiabilidad en su red; Plaspy acepta ambos transportes y detectará el protocolo automáticamente.  
- Plaspy utiliza el mismo puerto 8888 en todos los dispositivos, lo que simplifica la configuración del servidor al desplegar múltiples modelos de rastreadores.  
- Verifique los ajustes del APN y pruebe la conectividad de datos antes de confiar en el reporte por temporizador para alertas críticas.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay EV02 para reportar a Plaspy ofrece una vía práctica y probada en campo para obtener visibilidad de vehículos en tiempo real, gestión de alarmas y flujos de inmovilización remota. Para flotas que requieren hardware compacto con funciones antirrobo y configuración sencilla, combinar el EV02 con Plaspy brinda telemetría centralizada, notificaciones de eventos y acceso a historiales de ubicación para supervisión operativa.

Para obtener más información sobre Plaspy y cómo la plataforma funciona con dispositivos como el EV02 visite https://www.plaspy.com. Para los comandos específicos más actualizados, notas de firmware e instrucciones de instalación detalladas consulte el sitio del fabricante en https://www.wanwaytech.net/ ya que el comportamiento y los métodos de configuración pueden cambiar con revisiones de firmware y hardware.
