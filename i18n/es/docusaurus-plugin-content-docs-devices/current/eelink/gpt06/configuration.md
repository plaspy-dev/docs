---
slug: /eelink/gpt06/configuration
id: gpt06-configuration
sidebar_label: Configuration
title: EElink - GPT06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink GPT06 e integración con Plaspy con ajustes de servidor compartido y ejemplos por SMS
keywords:
  - configuración EElink GPT06
  - instalación EElink GPT06
  - configuración servidor GPT06
  - integración GPT06 Plaspy
  - configuración rastreador EElink
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración GPRS tracker
  - configuración SMS GPT06
  - seguimiento de flotas GPT06
---

# EElink - GPT06 Configuración

Esta página describe el contexto público de configuración para usar el rastreador EElink GPT06 con Plaspy. Explica los ajustes de servidor compartido de Plaspy a los que debe apuntar el dispositivo, los requisitos habituales antes de la puesta en marcha y los comandos SMS públicos más comunes que muchos equipos GPT06 aceptan para configurar el reporte hacia Plaspy.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente solo deberá configurar el endpoint del servidor y el transporte en el dispositivo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, la instalación y las herramientas del proveedor; considere los ejemplos de SMS aquí como orientación práctica pública y no como sustituto de la documentación oficial del fabricante.

## Resumen de configuración

El objetivo de este proceso es preparar el GPT06 para que suba datos de ubicación y estado a Plaspy y así el dispositivo aparezca y reporte correctamente en la plataforma. El GPT06 admite configuración por SMS y subida por GPRS/WCDMA, lo que lo hace adecuado para muchas instalaciones de seguimiento de vehículos y activos.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que Plaspy reciba los datos.  
- Configurar el APN del dispositivo para que establezca la conexión de datos móviles para las subidas por GPRS.  
- Elegir el transporte (UDP o TCP) y establecer el puerto compartido de Plaspy utilizado por todos los dispositivos.  
- Fijar un intervalo de reporte para controlar con qué frecuencia el GPT06 envía actualizaciones de posición a Plaspy.  
- Verificar los parámetros y confirmar que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transporte soportado UDP o TCP (el GPT06 puede configurarse para usar cualquiera de los dos)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un equipo GPT06 con batería cargada y/o alimentación externa funcional.  
- Una SIM activa con datos móviles habilitados y el APN correcto para el operador.  
- Acceso vía SMS al dispositivo o acceso a la herramienta de configuración del fabricante si es necesario.  
- Conocimiento de la versión de firmware o revisión de hardware del equipo cuando esté disponible, ya que los comandos pueden variar.  
- Forma de reiniciar o cortar la alimentación del dispositivo después de la configuración si el equipo lo requiere.  
- Acceso a la documentación del fabricante o soporte del proveedor para detalles que vayan más allá de los comandos SMS públicos.

## Cómo se conecta este rastreador a Plaspy

El GPT06 se configura para enviar datos de posición y estado al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador tenga una conexión GPRS/WCDMA válida y los ajustes de servidor/puerto correctos, Plaspy recibirá e interpretará los mensajes del dispositivo mediante detección automática del protocolo.

- El rastreador sube datos de ubicación a través de la conexión de datos móviles hacia d.plaspy.com o la IP especificada.  
- Los datos se envían al puerto 8888, el mismo puerto usado por todos los dispositivos compatibles con Plaspy.  
- Plaspy detecta automáticamente el protocolo del dispositivo y comienza a parsear los reportes.  
- Temporizadores regulares o disparadores por evento en el equipo provocan el reporte periódico a Plaspy.  
- Se puede usar SMS para configurar o verificar parámetros antes de confirmar el flujo de datos hacia Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software correspondiente — en muchos equipos GPT06 esto puede hacerse por comandos SMS o herramientas del proveedor.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 según su preferencia o soporte del dispositivo.  
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Elija UDP o TCP en el equipo si la unidad le solicita seleccionar el transporte.  
5. Configure el APN para la SIM instalada para que el GPRS/WCDMA pueda conectarse.  
6. Aplique o guarde la configuración y reinicie o ciclo de alimentación el rastreador si el equipo lo requiere.  
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con la frecuencia de actualización esperada.

## Ejemplos de comandos de configuración

El GPT06 suele aceptar comandos SMS para la configuración. Los siguientes comandos públicos se presentan en el orden mostrado en la documentación del fabricante. Si usa estos SMS, envíelos desde un número autorizado según la configuración de control de acceso del equipo.

- Reinicio de fábrica opcional (solo si es necesario o para un estado inicial limpio):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```
GMT,E,0#
```

- Establecer el APN del operador (reemplace los marcadores según necesite):
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: [apn] es el nombre del APN del operador. Los marcadores opcionales [apnu] y [apnp] representan el usuario y la contraseña del APN cuando el operador los requiere. Mantenga las comas tal como se muestran si incluye usuario y contraseña.

- Configurar el servidor GPRS usando el dominio de Plaspy (forma legible recomendada):
```
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP de Plaspy (opción alternativa):
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización periódica a 60 segundos:
```
TIMER,60#
```

- Consultar parámetros y configuración actual:
```
PARAM#
```

Use la forma con dominio (SERVER,1,...) si su SIM y el dispositivo pueden resolver nombres de host. Use la forma con IP (SERVER,0,...) si la resolución DNS no está disponible o como paso de diagnóstico. Mantenga el puerto del servidor en 8888 porque Plaspy utiliza el mismo puerto para todos los dispositivos y se encarga de la detección automática del protocolo.

## Notas de configuración

- El firmware y la sintaxis de los comandos pueden variar según el lote de producción del GPT06 o la versión de firmware; confirme el formato SMS exacto con su proveedor o la documentación oficial de EElink.  
- Elija UDP o TCP según la fiabilidad de la red y el soporte del equipo; ambos son aceptados pero el comportamiento puede cambiar según el firmware.  
- La configuración por SMS es habitual en dispositivos GPT06 y resulta útil para instalaciones sin interfaz o en vehículos donde no hay acceso directo al software.  
- Al incluir usuario y contraseña del APN, conserve exactamente los separadores por comas que exige la sintaxis del comando.  
- Si la resolución DNS es poco fiable, use la opción de IP del servidor Plaspy tal como se muestra en los comandos de ejemplo.

## Por qué usar Plaspy con esta configuración

Usar el GPT06 con Plaspy ofrece una forma práctica de centralizar la ubicación y el estado de los dispositivos en una sola plataforma que reconoce automáticamente el protocolo del rastreador. Los ajustes de servidor compartido de Plaspy simplifican la incorporación en flotas mixtas porque todos los dispositivos compatibles reportan al mismo endpoint y puerto.

Para obtener más información sobre Plaspy y los flujos de trabajo compatibles visite https://www.plaspy.com. Para detalles específicos del equipo, notas de firmware y referencias de comandos más actualizadas consulte la documentación del fabricante en https://www.eelink.com.cn/. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, así que verifique la guía más reciente antes del despliegue.
