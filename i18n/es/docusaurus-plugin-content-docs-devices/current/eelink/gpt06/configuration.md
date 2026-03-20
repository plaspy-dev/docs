---
slug: /eelink/gpt06/configuration
id: gpt06-configuration
sidebar_label: Configuration
title: EElink - GPT06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink GPT06 y ajustes del servidor Plaspy para seguimiento confiable
keywords:
  - Configuración EElink GPT06
  - Configuración GPT06 Plaspy
  - Configuración rastreador GPS EElink
  - Configuración servidor GPT06
  - Configuración GPRS rastreador GPS
  - Configuración SMS GPT06
  - Configuración plataforma de rastreo de vehículos
  - Detección de protocolo de rastreador
  - Configuración APN rastreador GPS
  - Integración seguimiento de flotas
---

# EElink - Configuración GPT06

Esta página describe el contexto público de configuración para usar el rastreador EElink GPT06 con la plataforma Plaspy. Resume los pasos prácticos y públicamente disponibles para apuntar el dispositivo a los servidores de Plaspy y validar la conectividad básica para que el rastreador envíe datos de ubicación y alarmas a la plataforma.

Plaspy utiliza un punto final de servidor y puerto compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante para el GPT06 pueden variar según la versión de firmware, la revisión de hardware, las preferencias del instalador y las herramientas del proveedor. El GPT06 admite carga por GPRS/WCDMA y configuración por SMS; los ejemplos siguientes usan los comandos SMS públicos comúnmente soportados por este modelo.

## Resumen de la configuración

Esta configuración prepara el GPT06 para comunicarse de forma confiable con Plaspy, de modo que las actualizaciones de ubicación, alertas SOS, eventos de geocerca y alarmas de movimiento sean visibles en la plataforma de flotas.

- Configure el APN del operador móvil para que el rastreador pueda usar datos celulares para cargas GPRS o WCDMA.
- Apunte el dispositivo al servidor de Plaspy usando el dominio público o la IP y el puerto compartido.
- Seleccione el modo de transporte (UDP o TCP) si es necesario y aplique la configuración.
- Valide la conectividad e informes para que el dispositivo aparezca en Plaspy y envíe actualizaciones periódicas.
- Use SMS o la herramienta del fabricante para enviar comandos de configuración cuando corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: se puede usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos al servidor

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo compatible automáticamente cuando el rastreador suba datos al punto final del servidor.

## Requisitos típicos antes de la configuración

- Un rastreador GPT06 con batería y encendido, y acceso al método de configuración que utilice el instalador
- Una tarjeta SIM activa con plan de datos y los valores APN correctos para el operador móvil
- Capacidad para enviar SMS al dispositivo si va a utilizar comandos de configuración por SMS
- Conocimiento del APN del operador y cualquier usuario o contraseña que éste requiera
- Acceso a la documentación del fabricante o a la herramienta de configuración correspondiente a la versión de firmware del dispositivo

## Cómo se conecta este rastreador a Plaspy

El GPT06 puede subir datos de ubicación y eventos mediante los canales de datos celulares al punto final y puerto del servidor Plaspy, para que la plataforma muestre el seguimiento y la información de alarmas.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a enviar datos
- Eventos como SOS, geocerca, movimiento y otras alarmas reportadas por el GPT06 se entregan a la plataforma para su monitoreo
- Una vez configurado correctamente, el dispositivo se vuelve visible en Plaspy y puede participar en el seguimiento en tiempo real y la reproducción de historial

## Flujo típico de configuración

1. Acceda al método oficial de configuración EElink para el GPT06, como comandos SMS o la herramienta de configuración del fabricante.
2. Configure el APN del operador usando los valores correctos para la tarjeta SIM instalada en el dispositivo.
3. Ingrese el servidor de Plaspy como d.plaspy.com o, alternativamente, use 54.85.159.138.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante (para el GPT06 esto puede ser mediante comandos SMS).
6. Reinicie o corte la alimentación del rastreador si el firmware requiere un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones periódicas.

## Comandos de configuración de ejemplo

El GPT06 admite configuración vía SMS. Los siguientes comandos SMS públicos se usan comúnmente en el orden mostrado. Envíe cada comando como un SMS al rastreador desde un número autorizado.

1. Reinicio de fábrica opcional (usar solo si necesita borrar configuraciones previas)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
- Reemplace los marcadores con los valores de su operador. {{apn}} es obligatorio. {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña si su operador los solicita.
```
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Variantes de ejemplo que puede enviar:
```
APN,your.apn.name#
```
o si se requieren usuario y contraseña:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Configurar el servidor GPRS al dominio y puerto de Plaspy
```
SERVER,1,d.plaspy.com,8888#
```

Alternativa usando la IP del servidor Plaspy
```
SERVER,0,54.85.159.138,8888#
```

5. Establecer el intervalo de actualización de ubicación a cada 60 segundos
```
TIMER,60#
```

6. Consultar los parámetros actuales
```
PARAM#
```

Notas sobre los comandos
- Envíe cada comando como un SMS independiente al dispositivo. Mantenga el orden cuando sea importante (por ejemplo, configure el APN antes de establecer el servidor si el dispositivo necesita acceso a la red de forma inmediata).
- Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN del operador, el usuario APN y la contraseña APN proporcionados por el operador móvil.
- El comando SERVER puede usar tanto el dominio d.plaspy.com como la IP pública 54.85.159.138; ambos apuntan a Plaspy en el puerto 8888.

## Notas de configuración

- Las versiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme siempre la compatibilidad de comandos con el firmware de su dispositivo.
- La configuración vía SMS es útil en campo cuando aún no existe conectividad de datos directa; confirme los números autorizados para control por SMS en la documentación del dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Verifique los valores del APN y el plan de datos antes de intentar enviar datos a Plaspy para evitar demoras de conectividad.
- Después de aplicar la configuración, confirme que el dispositivo está reportando a Plaspy y que eventos como SOS y alertas de geocerca aparecen según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar el GPT06 con Plaspy ofrece una ruta sencilla para obtener visibilidad de flota o activos al dirigir el rastreador a un punto final y puerto públicos y documentados de Plaspy. Las opciones de carga celular y el reporte de eventos del GPT06, como SOS y geocerca, lo hacen adecuado para organizaciones que necesitan actualizaciones de posición confiables y visibilidad de alarmas en una sola plataforma.

Para saber más sobre Plaspy y cómo integrar dispositivos, visite https://www.plaspy.com. Para los comandos más recientes del EElink GPT06, notas de firmware y detalles oficiales del dispositivo, verifique la información con el fabricante en https://www.eelink.com.cn/. Los métodos específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que siempre debe consultar el sitio del fabricante para obtener las instrucciones más actuales.
