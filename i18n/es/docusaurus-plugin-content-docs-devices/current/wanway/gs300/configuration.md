---
slug: /wanway/gs300/configuration
id: gs300-configuration
sidebar_label: Configuration
title: WanWay - GS300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar WanWay GS300 con servidores Plaspy y comandos SMS
keywords:
  - Configuración WanWay GS300
  - Configuración WanWay GS300 Plaspy
  - Configuración servidor GS300
  - Comandos SMS GS300
  - Configuración rastreador GPS WanWay
  - Configuración GPRS GS300
  - Configuración rastreador Plaspy
  - Configuración seguimiento GS300
  - Rastreador de activos WanWay
  - Configuración plataforma GPS
---

# WanWay - Configuración del GS300

Esta página describe el contexto de configuración pública para usar el rastreador WanWay GS300 con Plaspy. Reúne la información pública esencial que necesita para apuntar el dispositivo a los servidores de Plaspy y validar la conectividad básica. Cuando el GS300 admite configuración por SMS, los ejemplos adjuntos muestran los comandos SMS que el fabricante publica para la configuración y verificación de GPRS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use los valores de servidor que se indican aquí para configurar el dispositivo para Plaspy y confirme siempre los detalles específicos del equipo con la documentación de WanWay cuando esté disponible.

## Resumen de la configuración

Configurar el GS300 para Plaspy prepara el rastreador para enviar su ubicación y flujo de eventos a la plataforma Plaspy, de modo que usted pueda monitorear activos, recibir alertas y revisar trazas históricas. El procedimiento típico establece el APN del proveedor, configura la dirección y puerto del servidor GPRS, activa el reporte por GPRS y verifica que el equipo esté reportando.

- Configure el APN del operador para que el dispositivo pueda abrir una sesión de datos para el reporte GPRS.
- Configure la entrada del servidor del dispositivo para apuntar a Plaspy usando el dominio o IP publicados y el puerto común de Plaspy.
- Active o cambie el modo de datos a GPRS para que el dispositivo envíe telemetría al servidor configurado.
- Ajuste el intervalo de reporte o el heartbeat según sus necesidades de monitoreo y perfil de consumo de energía.
- Verifique la configuración con los comandos de consulta de parámetros o estado del dispositivo para confirmar la comunicación.
- Valide que el dispositivo aparezca y se actualice en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol when the device connects

## Requisitos habituales antes de comenzar

- Un GS300 con batería cargada y una tarjeta SIM activa con plan de datos o capacidad SMS según el método de configuración elegido.  
- Datos del APN del operador para la SIM, necesarios para habilitar GPRS. Use marcadores como {{apn}} donde corresponda.  
- Acceso al método de configuración del WanWay GS300 documentado por el fabricante (SMS o herramienta del proveedor).  
- Una cuenta en Plaspy y la posibilidad de confirmar la visibilidad del dispositivo en su instancia de Plaspy.  
- Capacidad básica para enviar SMS desde su teléfono o acceso a la herramienta de escritorio del proveedor si la configuración se hace por software.  
- El dispositivo debe estar encendido y dentro de cobertura de red durante la configuración inicial y la verificación.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el GS300 abre una sesión de datos GPRS hacia el endpoint compartido de Plaspy y envía paquetes de ubicación y eventos a la plataforma en el puerto 8888. Plaspy recibe el flujo, detecta automáticamente el protocolo del rastreador y pone los datos a disposición en el panel de Plaspy para monitoreo en tiempo real y alertas.

- El dispositivo envía su posición y datos de eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo; seleccione uno durante la puesta a punto si es necesario.  
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.  
- Los mensajes de latido (heartbeat) o temporizadores regulares mantienen la presencia en Plaspy y permiten que los informes de la plataforma se mantengan actualizados.  
- Los comandos de verificación o consultas de estado pueden confirmar que el dispositivo tiene el servidor correcto y está en línea.

## Flujo de configuración común

1. Acceda al método oficial de configuración del WanWay GS300 o al software tal como lo documenta WanWay. Esto puede basarse en comandos SMS o en una herramienta del proveedor.  
2. Introduzca la dirección del servidor Plaspy configurando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la sección de servidores del dispositivo.  
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Elija UDP o TCP si el equipo requiere seleccionar un protocolo de transporte. Plaspy acepta cualquiera de los dos en el puerto 8888 y detecta el protocolo automáticamente.  
5. Configure el APN del operador usando el comando APN o las opciones de la herramienta para que se inicie GPRS.  
6. Aplique o guarde la configuración en el dispositivo y reinícielo o active/desactive el modo GPRS si el equipo necesita reinicio para aplicar los cambios.  
7. Valide que el dispositivo reporte a Plaspy usando los comandos de verificación del equipo (por ejemplo PARAM o STATUS) y confirme que el dispositivo aparezca y se actualice en Plaspy.

## Ejemplos de comandos de configuración

El WanWay GS300 soporta comandos SMS públicos. Envíe estos comandos por mensaje de texto al número del dispositivo en el orden indicado cuando utilice la configuración por SMS.

- Configure el APN del operador (reemplace {{apn}} y opcionalmente {{apnu}} y {{apnp}} por los valores de su operador):
```
APN,{{apn}}
```
o, si se requiere usuario y contraseña:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Configure el servidor GPRS a Plaspy usando el dominio y puerto indicados:
```
SERVER,1,d.plaspy.com,8888,0#
```
- Establezca el intervalo periódico de envío (ejemplo que fija dos temporizadores a 60 segundos cada uno):
```
TIMER,60,60#
```
- Cambie el dispositivo al modo de reporte GPRS:
```
GPRSON,1#
```
- Consulte los parámetros del dispositivo para verificar la configuración actual:
```
PARAM#
```
- Consulte el estado del dispositivo para información de funcionamiento y conectividad:
```
STATUS#
```

Notas sobre marcadores y comandos:
- {{apn}} es la cadena APN del operador necesaria para abrir la sesión de datos.  
- {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN cuando su operador exige autenticación.  
- El comando SERVER mostrado apunta a d.plaspy.com y al puerto 8888, que son los ajustes públicos de servidor de Plaspy. Mantenga el orden de comandos cuando aplique la secuencia para la configuración inicial.

## Observaciones sobre la configuración

- Las versiones de firmware y las revisiones regionales de hardware pueden cambiar la sintaxis de comandos o los parámetros soportados; siempre verifique la documentación del WanWay GS300 correspondiente a la versión de firmware de su equipo.  
- Los ejemplos de configuración aquí usan comandos SMS tal como los publica el fabricante; si su instalación utiliza la herramienta del proveedor o aprovisionamiento OTA, siga el flujo de trabajo de la herramienta del proveedor.  
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que debe usar el puerto 8888 al apuntar el GS300 a Plaspy.  
- Cuando el dispositivo permite seleccionar TCP o UDP, elija el transporte adecuado para su despliegue; Plaspy acepta ambos en el puerto 8888.  
- Verifique el APN y la conectividad de datos antes de esperar actualizaciones en tiempo real en Plaspy; un APN incorrecto impedirá que se formen las sesiones GPRS.

## Por qué usar Plaspy con esta configuración

Usar el WanWay GS300 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, reporte de eventos y reproducción de trazas históricas para activos y flotas. Configurar el dispositivo para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888 permite que Plaspy ingiera la telemetría, detecte automáticamente el protocolo del equipo y ponga a disposición los datos de ubicación y alertas para monitoreo y procesos operativos.

Learn more about Plaspy and how it works with compatible trackers at https://www.plaspy.com. For the most current manufacturer specific configuration methods, command syntax, and firmware behavior for the GS300, verify details on the WanWay official website https://www.wanwaytech.net/ as device specific steps and parameters may change over time.
