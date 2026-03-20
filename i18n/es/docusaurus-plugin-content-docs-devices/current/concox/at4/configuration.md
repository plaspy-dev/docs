---
slug: /concox/at4/configuration
id: at4-configuration
sidebar_label: Configuration
title: Concox - AT4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox AT4 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación para un rastreo de activos confiable
keywords:
  - configuración Concox AT4
  - instalación Concox AT4
  - Concox AT4 Plaspy
  - configuración servidor AT4
  - comandos SMS AT4
  - configuración rastreador GPS AT4
  - configuración rastreador Plaspy
  - rastreo de activos Concox AT4
  - rastreo de vehículo AT4
  - configuración GPRS AT4
---

# Concox - Configuración del AT4

Esta página describe el contexto de configuración pública para usar el rastreador Concox AT4 con Plaspy. Está enfocada en los ajustes prácticos del servidor, el flujo de configuración por SMS recomendado en la documentación pública del fabricante y qué debe verificar antes de iniciar la integración. El AT4 es un rastreador portátil con montaje magnético diseñado para largos periodos en espera y entornos de trabajo exigentes; esta guía explica cómo apuntar el dispositivo a Plaspy para que la ubicación y los eventos lleguen a su cuenta.

Plaspy utiliza un endpoint de servidor compartido y un único puerto para los dispositivos compatibles, detectando automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante para el AT4 pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración que su proveedor suministre. Cuando sea útil, esta página incluye los comandos SMS del AT4 que aparecen en la documentación pública para ajustar el APN, el servidor y los temporizadores de reporte.

## Resumen de la configuración

El objetivo al configurar un AT4 para Plaspy es preparar el dispositivo para comunicarse de forma confiable con el servidor compartido de Plaspy, validar la conectividad desde campo y permitir que el rastreador envíe ubicación y eventos a su panel de Plaspy. En los AT4 esto normalmente implica enviar un conjunto reducido de comandos SMS o usar la herramienta de configuración del fabricante para definir APN y parámetros de servidor.

- Apunte el dispositivo al endpoint de servidor de Plaspy para que los reportes lleguen a la plataforma.
- Configure el APN del operador móvil para que el rastreador pueda establecer una sesión de datos GPRS.
- Defina un temporizador de reporte para controlar la frecuencia de envío de las actualizaciones de ubicación a Plaspy.
- Active el modo GPRS/datos para que el dispositivo transmita al servidor configurado.
- Verifique la configuración con el comando de verificación del dispositivo o confirmando la recepción de reportes en Plaspy.
- Use las instrucciones del fabricante para un reinicio de fábrica opcional antes de la configuración inicial si fuese necesario.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP; configure UDP or TCP on the device if required
- Plaspy automatically detects the tracker protocol when the device connects
- Note: All devices in Plaspy use the same port (port 8888) which simplifies server configuration across different tracker models

## Requisitos típicos antes de la configuración

- Un equipo AT4 con batería cargada y encendido, con una tarjeta SIM funcionando y servicio de datos activo
- El APN del operador móvil, y el usuario y contraseña del APN si su operador los exige
- Capacidad para enviar comandos SMS al dispositivo para configuración por SMS o acceso a la herramienta oficial del fabricante
- Cobertura básica de la red GSM para que el dispositivo pueda registrarse y abrir una sesión GPRS
- Acceso a la documentación del fabricante o soporte del proveedor para orientación específica de firmware
- Una cuenta en Plaspy y la expectativa de que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT4 abre una conexión GPRS y envía sus paquetes periódicos de posición y eventos al endpoint y puerto compartido de Plaspy. Plaspy recibe reportes de posición GNSS y derivados por GSM, notificaciones de manipulación y eventos, y otra telemetría para que los activos puedan ser monitoreados y gestionados en tiempo real.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com (o directamente a 54.85.159.138) en el puerto 8888
- Los paquetes de posición y eventos se transmiten por el transporte elegido (UDP o TCP) y son procesados por la detección automática de protocolos de Plaspy
- Alertas de manipulación, batería baja, apagado y otros eventos se envían a Plaspy según los temporizadores y ajustes de eventos del dispositivo
- El almacenamiento en el dispositivo asegura que los reportes en caché se reenvíen a Plaspy tras breves interrupciones de conectividad
- Una configuración exitosa se traduce en actualizaciones visibles del dispositivo y reproducciones históricas dentro de la plataforma Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para el AT4 (comandos SMS o herramienta del proveedor) y confirme el comportamiento del firmware actual.
2. Ingrese el servidor de Plaspy como d.plaspy.com o como la dirección IP 54.85.159.138 según su preferencia y el soporte del dispositivo.
3. Establezca el puerto del servidor en 8888; tenga en cuenta que Plaspy usa este mismo puerto para todos los dispositivos.
4. Elija UDP o TCP en el dispositivo si la selección de transporte es requerida por el firmware.
5. Configure el APN y las credenciales APN necesarias para la SIM para que el rastreador pueda abrir una sesión GPRS.
6. Aplique o guarde la configuración y reinicie o corte la energía del dispositivo si éste lo requiere para cargar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en su cuenta Plaspy o usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

Para configurar el AT4 mediante SMS, envíe los siguientes comandos en el orden mostrado. Estos comandos se basan en guías públicas y mantienen los marcadores donde se requieren.

1. Reinicio de fábrica opcional (use solo si desea devolver el dispositivo a valores de fábrica):
```
FACTORY#
```

2. Ajuste la zona horaria del dispositivo a UTC+0 (modifique si necesita otra zona):
```
GMT,E,0#
```

3. Configure el APN del operador móvil. Reemplace [apn] con el APN de su operador. Si su operador requiere usuario o contraseña del APN, incluya [apnu] y [apnp] según corresponda:
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: Mantenga los marcadores [apn], [apnu] y [apnp] y reemplácelos por los datos de su operador. Si no se requiere usuario o contraseña, envíe solo APN,[apn]#.

4. Configure el servidor GPRS para usar el dominio de Plaspy (ejemplo usando dominio):
```
SERVER,1,d.plaspy.com,8888,0#
```
O configure el servidor usando la IP de Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establezca el intervalo de actualizaciones de ubicación a cada 60 segundos (se muestran dos sintaxis comunes de temporizador):
```
TIMER,60#
```
o
```
TIMER,60,60#
```

6. Active el modo GPRS para que el dispositivo use conectividad de datos:
```
GPRSON,1#
```

7. Verifique los ajustes actuales de GPRS y servidor:
```
GPRSSET#
```

Mantenga el orden de comandos al realizar la configuración inicial: primero APN, luego servidor y temporizador, y finalmente habilite GPRS. Si el firmware o la herramienta del proveedor admite una selección explícita de transporte UDP o TCP, configúrela en la herramienta del fabricante; el comando SERVER anterior configura host y puerto, pero no siempre el tipo de transporte en todas las versiones de firmware.

## Notas sobre la configuración

- La configuración por SMS es comúnmente compatible con el AT4; asegúrese de enviar SMS desde un número que el dispositivo acepte para configuración remota si usa números seguros o lista blanca.
- Las revisiones de firmware pueden cambiar el formato de comandos o los parámetros disponibles; consulte el manual del dispositivo o a su proveedor si un comando no responde como espera.
- El AT4 usará el servidor de Plaspy d.plaspy.com o la IP y puerto proporcionados; Plaspy detecta automáticamente el protocolo, por lo que no necesita especificar el tipo de protocolo para Plaspy, aunque el dispositivo puede requerir elegir UDP o TCP.
- Reemplace los marcadores del APN con las credenciales de su operador exactamente; datos incorrectos impedirán las conexiones GPRS.
- Tras aplicar los ajustes, puede ser necesario reiniciar o cortar la energía del dispositivo para que los cambios entren en vigor, según el firmware.

## Por qué usar Plaspy con esta configuración

Usar el Concox AT4 con Plaspy ofrece una configuración de servidor simple y consistente que facilita integrar rastreadores robustos y de larga espera en una vista única de gestión de flotas o activos. Con el endpoint compartido de Plaspy y la detección automática de protocolos, los operadores pueden estandarizar los ajustes de servidor entre modelos y concentrarse en la instalación y la configuración del APN en lugar de endpoints personalizados por cada dispositivo.

Para saber más sobre Plaspy y cómo soporta el seguimiento en tiempo real y flujos telemáticos, visite https://www.plaspy.com. Para detalles específicos del dispositivo, actualizaciones de firmware y la referencia más reciente de comandos del AT4, verifique la documentación del fabricante en https://www.iconcox.com/ ya que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
