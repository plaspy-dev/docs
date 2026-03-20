---
slug: /wanway/gs05/configuration
id: gs05-configuration
sidebar_label: Configuration
title: WanWay - GS05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el WanWay GS05 con Plaspy; incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración WanWay GS05
  - Configuración inicial WanWay GS05
  - Configuración servidor GS05
  - Configuración GS05 para Plaspy
  - Configuración rastreador GPS WanWay
  - Comandos SMS GS05
  - Compatibilidad rastreador GPS Plaspy
  - Seguimiento de vehículos GS05
  - Gestión de flotas GS05
  - Guía de instalación GS05
---

# WanWay - GS05: Configuración

Esta página explica el contexto público de configuración para usar el tracker WanWay GS05 con Plaspy. Describe los ajustes prácticos del servidor, el flujo de trabajo típico de puesta en marcha y los comandos SMS incluidos en la configuración pública del modelo que se usan para apuntar el dispositivo a la plataforma Plaspy para rastreo en tiempo real y envío de telemetría.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GS05 permite la configuración por SMS para APN y ajustes de servidor GPRS; los comandos que se indican a continuación reflejan la información pública disponible para este modelo.

## Resumen de configuración

Configurar el GS05 para Plaspy garantiza que el rastreador pueda autenticarse en la red móvil, establecer una conexión GPRS y enviar posición y datos de sensores al punto de ingreso de Plaspy para que el dispositivo sea visible en la plataforma.

- Configure el APN del operador y, si aplica, las credenciales APN para que el dispositivo pueda usar servicios de datos.
- Apunte el dispositivo a los ajustes del servidor de Plaspy para que la telemetría se reenvíe a la plataforma.
- Ajuste los intervalos de reporte para que las actualizaciones de ubicación lleguen con la cadencia esperada en Plaspy.
- Active el modo de reporte por GPRS y verifique la conectividad usando consultas de estado y parámetros.
- Valide que el dispositivo aparezca en Plaspy después de la configuración y confirme el reporte de eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el firmware del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos típicos antes de la configuración

- Una tarjeta SIM válida instalada en el GS05 con datos habilitados y capacidad de SMS para la configuración inicial
- Alimentación al dispositivo y un entorno estable para probar la conectividad durante la puesta en marcha
- Acceso al método oficial de configuración de WanWay, normalmente comandos SMS o la herramienta del proveedor
- Información del APN del operador móvil, incluyendo usuario y contraseña APN opcionales si son necesarios
- Una cuenta registrada en Plaspy y un lugar desde donde monitorear el dispositivo una vez que informe a la plataforma
- Conocer el número telefónico de la SIM del dispositivo o disponer de un método para enviar SMS al rastreador

## Cómo se conecta este rastreador a Plaspy

El GS05 utiliza su conexión de datos GSM 3G para abrir una sesión GPRS y enviar la ubicación GPS junto con la telemetría de sensores a la dirección compartida de servidor de Plaspy. Una vez configurados el servidor y el transporte, el dispositivo transmite actualizaciones regulares que Plaspy ingiere para mapas en vivo, alertas e historial.

- El dispositivo se configura para reportar al endpoint de Plaspy d.plaspy.com en el puerto 8888
- La telemetría y las actualizaciones de posición se envían a través de la red móvil usando GPRS
- Plaspy recibe los paquetes entrantes y detecta automáticamente el protocolo del dispositivo
- Los reportes aparecen en los paneles de Plaspy para rastreo en vivo, reproducción de rutas y alertas
- Las consultas de estado y parámetros permiten verificar la configuración del dispositivo de forma remota

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de WanWay o al software correspondiente, o prepare la capacidad de enviar SMS al GS05.
2. Introduzca el dominio o la IP del servidor Plaspy en los ajustes del dispositivo usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
4. Configure el APN del operador y las credenciales APN opcionales para el acceso de datos GPRS.
5. Aplique o guarde la configuración y habilite el modo de reporte por GPRS en el tracker.
6. Reinicie el dispositivo si el firmware recomienda un reinicio tras la configuración.
7. Verifique que el dispositivo reporte a Plaspy y que las actualizaciones de posición aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El modelo GS05 soporta configuración por SMS. Envíe estos comandos como mensajes de texto al número de la SIM del tracker en el orden mostrado cuando siga un flujo de trabajo por SMS. Conserve los marcadores de posición al sustituir los datos de su operador.

1. Configurar el APN del operador
```text
APN,[apn]#
```
Si su operador requiere usuario y contraseña APN, use:
```text
APN,[apn],[apnu],[apnp]#
```
- [apn] es el nombre del APN del operador
- [apnu] es el usuario APN si es requerido
- [apnp] es la contraseña APN si es requerida

2. Configurar el servidor GPRS para apuntar a Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```
- Esto establece la ranura de servidor 1 para usar el dominio d.plaspy.com en el puerto 8888
- El dígito final es una bandera de modo utilizada por el firmware del dispositivo

3. Ajustar el intervalo de reporte
```text
TIMER,60,60#
```
- El ejemplo fija el temporizador de reporte; modifique los valores según sus necesidades y la capacidad del dispositivo

4. Cambiar a modo GPRS
```text
GPRSON,1#
```
- Habilita el modo de reporte por GPRS en el tracker

5. Comprobar la configuración del dispositivo
```text
PARAM#
```

6. Comprobar el estado del dispositivo
```text
STATUS#
```

## Notas de configuración

- Las diferencias de firmware pueden modificar la sintaxis de los comandos SMS disponibles o el significado de las banderas numéricas; confirme el conjunto exacto de comandos para su versión de GS05.
- El GS05 soporta la configuración por SMS como se muestra, pero algunas instalaciones podrían preferir la herramienta del proveedor o una interfaz cableada si están disponibles.
- Elija UDP o TCP según su entorno y comportamiento de WAN; pruebe ambos si no está seguro, ya que Plaspy soporta ambos transportes.
- Verifique los valores del APN con su operador móvil y utilice los marcadores de usuario y contraseña APN opcionales si son necesarios.
- Después de aplicar los ajustes de servidor y GPRS, espere unos minutos para que el dispositivo se registre en la red y comience a enviar a d.plaspy.com puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el WanWay GS05 con Plaspy ofrece un camino sencillo para obtener visibilidad en tiempo real de ubicación y telemetría de vehículos. El soporte del GS05 para configuración por SMS y reporte por GPRS lo hace práctico para desplegar en flotas donde se prefiere un punto final único y compartido de Plaspy para reportes fiables y sencillos.

Learn more about Plaspy and how it can consolidate tracking data into dashboards at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command documentation for the GS05, verify current information at https://www.wanwaytech.net/.
