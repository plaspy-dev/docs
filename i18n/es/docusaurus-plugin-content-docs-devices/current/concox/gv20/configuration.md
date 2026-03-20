---
slug: /concox/gv20/configuration
id: gv20-configuration
sidebar_label: Configuration
title: Concox - GV20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox GV20 con Plaspy mediante comandos SMS y ajustes de servidor
keywords:
  - configuración Concox GV20
  - instalación Concox GV20
  - configuración GV20 Plaspy
  - configuración servidor GV20
  - configuración rastreador Concox
  - configuración SMS GV20
  - configuración rastreador Plaspy
  - configuración seguimiento vehicular
  - ajustes servidor rastreador GPS
  - integración Concox GV20
---

# Concox - Configuración del GV20

Esta página presenta el contexto público para configurar el rastreador GPS Concox GV20 con Plaspy. Consolida los ajustes de servidor de Plaspy que debe aplicar y muestra ejemplos de comandos SMS comúnmente usados para preparar un GV20 para reportar a Plaspy. Use esta guía para comprender los valores de servidor requeridos y los pasos prácticos de configuración vía SMS que aparecen en la documentación pública del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que ofrezca el proveedor. El GV20 es un rastreador vehicular 3G con funciones como notificaciones de alerta y corte remoto de combustible o alimentación; los comandos a continuación reflejan los elementos de configuración por SMS publicados con más frecuencia para este modelo.

## Visión general de la configuración

El objetivo al configurar un GV20 para Plaspy es apuntar el dispositivo al endpoint compartido de Plaspy, asegurar que los ajustes de GPRS y APN estén correctos y verificar que el rastreador esté reportando activamente. Los comandos SMS de ejemplo que siguen son las instrucciones públicas, en estilo del fabricante, que comúnmente se usan para realizar esas acciones.

- Configure el APN del dispositivo para que pueda usar datos móviles para reportes GPRS.
- Establezca el servidor del dispositivo al endpoint de Plaspy para que los datos de posición se envíen a Plaspy.
- Elija el transporte (UDP o TCP) y el puerto requerido, consistente con los ajustes de Plaspy.
- Habilite el reporte por GPRS y configure un temporizador de reporte para controlar la frecuencia de actualizaciones.
- Verifique la configuración con el comando de estado del dispositivo para confirmar los parámetros.
- Opcionalmente, restaure a los valores de fábrica antes de configurar si está preparando una instalación nueva.

## Ajustes de servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: The device may be configured using UDP or TCP on port 8888  
- Protocol detection: Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Una unidad GV20 conectada y con alimentación instalada o conectada temporalmente para la configuración.  
- Una tarjeta SIM activa con datos (GPRS) habilitados y capacidad de SMS para enviar mensajes de configuración.  
- La información APN del operador móvil para la SIM (APN, usuario, contraseña) para completar los campos APN del dispositivo.  
- Acceso al método de comandos SMS del fabricante o a la herramienta de configuración provista en la documentación de Concox.  
- Medios para enviar y recibir SMS al número de la SIM del dispositivo para confirmar comandos.  
- Información básica sobre la instalación, como el intervalo de reporte deseado y si prefiere UDP o TCP.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GV20 se dirigirá al endpoint compartido de Plaspy y al puerto de reporte para que la plataforma pueda recibir sus mensajes de posición y eventos. La detección automática de protocolo de Plaspy maneja las diferencias entre protocolos de rastreadores, por lo que el mismo puerto puede usarse en muchos modelos de dispositivos.

- El rastreador envía datos GPRS a d.plaspy.com o a la IP del servidor de Plaspy.  
- Los datos se transmiten por el transporte seleccionado (UDP o TCP) al puerto 8888.  
- Plaspy recibe y detecta automáticamente el protocolo del rastreador para parsear los mensajes.  
- Los intervalos de reporte y los disparadores de eventos determinan con qué frecuencia el dispositivo envía actualizaciones.  
- Los eventos del dispositivo y las actualizaciones de ubicación se vuelven visibles en la plataforma Plaspy una vez que la unidad se conecta con éxito.

## Flujo común de configuración

1. Acceda al método oficial de configuración Concox para el GV20, normalmente comandos por SMS o la utilidad de configuración del fabricante.  
2. Configure el APN del dispositivo usando los parámetros del operador para que el rastreador pueda establecer una conexión GPRS.  
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y ponga el puerto del servidor en 8888.  
4. Elija UDP o TCP en los dispositivos que requieran selección de transporte y guarde la elección.  
5. Habilite el reporte por GPRS y ajuste el temporizador de reporte deseado (por ejemplo, 60 segundos) y luego aplique/guarde la configuración.  
6. Reinicie el rastreador si las instrucciones del fabricante indican que se requiere reinicio para aplicar los nuevos ajustes.  
7. Valide que el dispositivo reporte a Plaspy verificando el estado del dispositivo en Plaspy después de que la unidad intente conectarse.

## Comandos de configuración de ejemplo

Para configurar el GV20 vía SMS, utilice los siguientes comandos públicos en el orden mostrado. Los comandos se envían como mensajes SMS al número de la SIM del dispositivo. Los caracteres prefijo o sufijo deben coincidir con lo que espera el firmware; los ejemplos reflejan los formatos publicados más comunes.

1. (Opcional) Restablecer a configuración de fábrica — usar cuando prepare una configuración nueva:
```
FACTORY#
```

2. Establecer zona horaria a UTC-0:
```
GMT,E,0#
```

3. Configurar el APN del operador móvil. Reemplace los marcadores según corresponda:
```
APN,[apn],[apnu],[apnp]#
```
- [apn] es el APN de datos móviles para la SIM.  
- [apnu] y [apnp] son marcadores de usuario y contraseña del APN; inclúyalos solo si su operador los requiere.

4. Configurar el servidor GPRS usando el dominio de Plaspy (preferible por hostname):
```
SERVER,1,d.plaspy.com,8888,0#
```

   O configurar el servidor GPRS usando la IP del servidor de Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el temporizador de actualización/reporte a cada 60 segundos (dos formatos alternativos comúnmente publicados):
```
TIMER,60#
```
o
```
TIMER,60,60#
```

6. Habilitar modo GPRS para que el dispositivo use datos móviles para enviar actualizaciones:
```
GPRSON,1#
```

7. Consultar parámetros GPRS actuales y ajustes de servidor:
```
GPRSSET#
```

Nota: Mantenga el orden de comandos al realizar una configuración inicial (por ejemplo, primero el APN, luego el servidor, después el temporizador y habilitar GPRS). El comando de restablecimiento de fábrica es opcional y sólo debe usarse si pretende devolver el dispositivo a los valores de fábrica antes de reconfigurarlo.

## Notas de configuración

- La configuración vía SMS es un método publicado por Concox; siga la sintaxis exacta que requiera el firmware del GV20.  
- Las revisiones de firmware y las variantes regionales de hardware pueden cambiar los comandos disponibles o el formato requerido; consulte la documentación de Concox si un comando no funciona como espera.  
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detecta automáticamente el protocolo.  
- Recuerde reemplazar los marcadores del APN ([apn], [apnu], [apnp]) por los valores de su operador móvil al enviar los comandos de APN.  
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, por lo que los ajustes únicos por dispositivo son principalmente el APN, la selección de transporte y el intervalo de reporte.

## Por qué usar Plaspy con esta configuración

Configurar un Concox GV20 para que reporte a Plaspy ofrece un camino directo hacia la visibilidad centralizada de vehículos, monitoreo de eventos y supervisión operativa. Usar el endpoint compartido de Plaspy y los comandos SMS de ejemplo anteriores permite que el GV20 envíe actualizaciones de ubicación y eventos a la plataforma Plaspy, donde pueden ser rastreadas, analizadas y gestionadas junto con otros dispositivos.

Para saber más sobre Plaspy y cómo esta configuración se integra en la plataforma, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware e instrucciones del fabricante para el Concox GV20, verifique la información actual en el sitio oficial de Concox https://www.iconcox.com/ porque los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
