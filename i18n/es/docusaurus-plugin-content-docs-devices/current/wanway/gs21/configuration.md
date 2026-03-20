---
slug: /wanway/gs21/configuration
id: gs21-configuration
sidebar_label: Configuration
title: WanWay - GS21 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WanWay GS21 para apuntar el dispositivo a Plaspy y verificar la conectividad
keywords:
  - Configuración WanWay GS21
  - Configuración GS21
  - Configuración servidor GS21
  - GS21 Plaspy configuración
  - Configuración rastreador GPS GS21
  - WanWay rastreador Plaspy
  - Comandos SMS GS21
  - Configuración rastreador de vehículos
  - Configuración rastreador OBD II
  - Configuración seguimiento de flotas
---

# WanWay - Configuración del GS21

Esta página documenta el contexto público de configuración para usar el rastreador WanWay GS21 con Plaspy. Resume los ajustes del servidor que Plaspy requiere, los comandos de fabricante más comunes publicados para el GS21 y pasos prácticos para preparar el equipo y que pueda reportar al servicio Plaspy. Use esto como complemento enfocado en la plataforma junto a la documentación del fabricante.

Plaspy emplea ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GS21 soporta comandos de configuración por SMS y GPRS que se usan comúnmente para configurar el host del servidor, el APN, los intervalos de reporte y el modo GPRS antes de que el dispositivo comience a enviar datos a Plaspy.

## Resumen de configuración

El proceso de configuración prepara un rastreador GS21 OBD II para comunicarse de forma confiable con Plaspy, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma. Al aplicar los ajustes que se indican a continuación, usted estará apuntando el rastreador al endpoint de Plaspy, habilitando el envío de datos y confirmando la conectividad.

- Configure el APN del operador para que el GS21 pueda abrir una sesión de datos GPRS en la red móvil.
- Apunte el dispositivo al host del servidor de Plaspy para que los mensajes de ubicación se enruten a la plataforma.
- Defina intervalos de reporte según sus necesidades de monitoreo y para ahorrar datos cuando sea necesario.
- Ponga el rastreador en modo GPRS para que transmita por IP en lugar de almacenar localmente.
- Valide el estado y los parámetros del rastreador para confirmar que está registrado en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos previos habituales

- Un dispositivo GS21 correctamente instalado en el vehículo y alimentado a través del puerto OBD II o conexión equivalente.
- Una tarjeta SIM activa con datos móviles habilitados y la información correcta del APN del operador.
- Capacidad para enviar SMS al número del rastreador o acceso a la herramienta oficial de configuración del fabricante si está disponible.
- Conocimientos básicos del formato de comandos SMS del dispositivo o acceso a la documentación del proveedor para confirmar la sintaxis de los comandos.
- Un plan para definir un intervalo de reporte apropiado según sus necesidades de monitoreo y el plan de datos.

## Cómo se conecta este rastreador a Plaspy

El GS21 se configura para reportar su posición y estado al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo sea visible y manejable dentro de la plataforma. Una vez que el dispositivo tenga GPRS funcional y los ajustes del servidor estén guardados, empezará a enviar datos a Plaspy para actualizaciones de ubicación, alertas y monitoreo operativo.

- El rastreador envía mensajes de ubicación y estado a d.plaspy.com en el puerto 8888.
- Los datos se transportan por GPRS usando UDP o TCP según la opción de transporte seleccionada.
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador para su correcto parseo.
- Mensajes periódicos por temporizador o intervalo proporcionan visibilidad continua en la plataforma Plaspy.
- Se pueden emitir comandos de verificación por SMS para confirmar la configuración actual y el estado operativo.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante, como comandos SMS o la utilidad del proveedor proporcionada por WanWay.
2. Ingrese el host del servidor de Plaspy estableciendo el campo de servidor del dispositivo a d.plaspy.com o a la IP 54.85.159.138.
3. Configure el puerto remoto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP para el transporte si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y cualquier credencial de APN que su SIM requiera.
6. Aplique o guarde la configuración y luego cambie el dispositivo a modo GPRS si es necesario.
7. Reinicie o desconecte y vuelva a conectar la alimentación del dispositivo si el fabricante lo recomienda.
8. Valide que el dispositivo reporte a Plaspy verificando el estado en la plataforma y usando los comandos de verificación del equipo.

## Ejemplos de comandos de configuración

El GS21 acepta comandos SMS para la configuración básica. A continuación están los comandos públicos más comunes publicados para el GS21. Envíelos como mensajes SMS al número del dispositivo en el orden indicado durante la configuración inicial.

- Configure el APN del operador. Use los campos de marcador de posición del APN según lo requiera su operador. Si no se necesitan usuario y contraseña, use la forma simple.

```
APN,{{apn}}#
```

o, si su operador requiere usuario y contraseña del APN:

```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establezca el servidor GPRS a Plaspy usando el dominio y el puerto. El ejemplo configura el índice de servidor 1 a d.plaspy.com en el puerto 8888.

```
SERVER,1,d.plaspy.com,8888,0#
```

- Configure el intervalo de reporte del dispositivo (el ejemplo usa 60 segundos tanto para movimiento como para reposo).

```
TIMER,60,60#
```

- Active el GPRS del dispositivo para que intente conectar al servidor mediante datos móviles.

```
GPRSON,1#
```

- Verifique los parámetros de configuración actuales (solicitud).

```
PARAM#
```

- Consulte el estado del dispositivo (solicitud).

```
STATUS#
```

Notas sobre los marcadores de posición:
- {{apn}} es el nombre del APN de su operador.
- {{apnu}} es el usuario del APN si el operador lo requiere.
- {{apnp}} es la contraseña del APN si el operador la requiere.

Envíe cada comando como un único SMS al dispositivo. El formato exacto de la respuesta y los índices disponibles pueden variar según el firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o la sintaxis; confirme siempre la sintaxis de los comandos con la documentación más reciente de WanWay.
- El GS21 soporta tanto la configuración por SMS como el reporte por GPRS; la configuración por SMS se usa comúnmente para instalaciones sin interfaz o en campo.
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte a d.plaspy.com en el puerto 8888.
- Use intervalos de reporte conservadores para gestionar el consumo de datos en planes SIM medidos.
- Si un ajuste no parece aplicarse, intente reiniciar el dispositivo o consulte con el soporte de WanWay por comportamientos específicos del firmware.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el WanWay GS21 ofrece a las organizaciones una forma directa de centralizar la visibilidad de vehículos y el monitoreo de eventos. Apuntar el GS21 al servidor compartido de Plaspy hace que el dispositivo sea visible en la plataforma rápidamente, permitiendo actualizaciones de ubicación en tiempo real y supervisión operativa con pasos de configuración mínimos.

To learn more about Plaspy and how the platform handles device connections and fleet monitoring visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance please verify details with the manufacturer at https://www.wanwaytech.net/ as specifications and setup methods can change over time.
