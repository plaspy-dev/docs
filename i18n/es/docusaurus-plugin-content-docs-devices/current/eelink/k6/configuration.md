---
slug: /eelink/k6/configuration
id: k6-configuration
sidebar_label: Configuration
title: EElink - K6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink K6 con ajustes de servidor Plaspy, comandos SMS de ejemplo y flujo de puesta en marcha
keywords:
  - configuración EElink K6
  - instalación EElink K6
  - configuración servidor K6
  - configuración K6 en Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - comandos SMS K6
  - configuración dispositivo Plaspy
  - configuración APN K6
  - detección protocolo del rastreador
---

# EElink - K6 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador EElink K6 con Plaspy. Se centra en los ajustes prácticos del servidor, los comandos SMS de ejemplo que aparecen en la documentación pública y el flujo general necesario para poner un K6 en línea en la plataforma Plaspy. Úsela como referencia práctica para preparar el dispositivo para Plaspy y, al mismo tiempo, revise la documentación oficial del fabricante para detalles específicos del equipo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que siga las instrucciones a continuación junto con la documentación del K6 y cualquier herramienta de instalación que tenga para el dispositivo.

## Resumen de la configuración

El objetivo de este proceso es preparar el K6 para comunicarse de forma fiable con Plaspy, validar la conectividad y habilitar la visibilidad en la plataforma. Los comandos públicos de EElink muestran un camino de configuración sencillo basado en SMS que cubre APN, objetivo de servidor, intervalo de reporte y verificación.

- Configure el APN del dispositivo para que pueda usar datos GPRS y acceder a Internet.
- Apunte el rastreador al servidor de Plaspy usando el endpoint compartido y el puerto.
- Establezca el intervalo de reporte para que las actualizaciones de ubicación aparezcan en Plaspy según lo desee.
- Verifique la configuración y la conectividad usando el comando de comprobación de parámetros.
- Guarde y, si es necesario, reinicie el dispositivo para que los nuevos ajustes surtan efecto.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son los ajustes públicos del endpoint de Plaspy para la integración con K6 y son requeridos al configurar el objetivo de servidor del dispositivo.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM funcional con datos habilitados y capacidad de SMS instalada en el K6.
- Una unidad K6 cargada o conectada y con energía durante la configuración.
- Conocimiento del APN de la red móvil y, opcionalmente, del usuario y la contraseña del APN para la SIM.
- Acceso al método de configuración por SMS de EElink o a la herramienta de configuración del fabricante.
- Un medio para recibir o verificar las respuestas SMS del dispositivo para los comandos de verificación.
- Acceso básico a la cuenta de Plaspy donde registrará o verificará el dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El K6 se configura para enviar ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir y mostrar la telemetría del dispositivo. Los comandos públicos por SMS muestran cómo apuntar el dispositivo a la plataforma y definir el comportamiento de reporte.

- El rastreador sube datos vía GPRS al endpoint de servidor configurado.
- El dispositivo se dirige a d.plaspy.com o a la IP y puerto de Plaspy para que los datos lleguen a la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe mensajes del dispositivo.
- Las actualizaciones periódicas y basadas en eventos aparecen en Plaspy una vez confirmada la conectividad.
- Use el comando de comprobación de parámetros proporcionado para confirmar que el dispositivo está usando el servidor y los ajustes previstos.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de EElink para el K6, ya sea la interfaz por SMS o la herramienta del fabricante.
2. Verifique que la SIM esté activa y configure el APN del operador usando el comando APN con los valores correctos.
3. Ingrese d.plaspy.com o 54.85.159.138 como objetivo de servidor y establezca el puerto 8888.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según las necesidades de su instalación.
5. Defina el intervalo de reporte deseado (por ejemplo, cada 60 segundos) y cualquier otro ajuste de zona horaria o temporizadores.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando los parámetros con PARAM# y confirmando la visibilidad en su cuenta Plaspy.

## Comandos de configuración de ejemplo

La configuración pública de EElink usa comandos SMS. Preserve los marcadores de posición cuando los envíe desde su teléfono de gestión o sistema.

- Reinicio opcional a fábrica (usar solo cuando sea necesario):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```
GMT,E,0#
```

- Configurar el APN del operador. Use la forma mínima o incluya usuario y contraseña si el operador lo requiere:
```
APN,[apn]#
```
o
```
APN,[apn],[apnu],[apnp]#
```
Explicación de los marcadores:
- [apn] es el APN de la red móvil proporcionado por el operador de la SIM.
- [apnu] es el usuario opcional del APN si lo requiere el operador.
- [apnp] es la contraseña opcional del APN si lo requiere el operador.

- Configurar el servidor GPRS usando el dominio y puerto de Plaspy:
```
SERVER,1,d.plaspy.com,8888#
```
Alternativa usando la IP de Plaspy:
```
SERVER,0,54.85.159.138,8888#
```
Ambas formas aparecen en la guía pública de EElink. Envíe la que corresponda a su flujo de trabajo o práctica de instalador.

- Establecer un intervalo de reporte para enviar cada 60 segundos:
```
TIMER,60#
```

- Consultar los parámetros actuales en el dispositivo:
```
PARAM#
```

Use estos comandos en el orden indicado cuando el orden sea relevante para su configuración. El reinicio a fábrica es opcional y debe utilizarse solo cuando necesite restaurar valores predeterminados antes de configurar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o el conjunto de comandos disponible; siempre verifique los comandos con la documentación de EElink para la versión de firmware de su dispositivo.
- El K6 puede configurarse por SMS como se muestra en los comandos públicos o mediante herramientas del fabricante cuando estén disponibles; elija el método que se ajuste a su instalación y volumen.
- Plaspy acepta tanto la forma de dominio como la de IP para el objetivo del servidor; use d.plaspy.com o 54.85.159.138 con puerto 8888.
- El K6 puede configurarse para usar UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy detectará automáticamente el protocolo utilizado cuando el dispositivo se conecte.
- Después de cambiar la configuración del servidor o de red, espere un breve periodo para que el dispositivo se registre en la red móvil y envíe los primeros paquetes a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el EElink K6 con Plaspy ofrece a las organizaciones una plataforma consistente para la visibilidad de ubicación, el monitoreo de eventos y la supervisión operativa. Con los comandos SMS públicos y los ajustes de servidor compartidos de Plaspy, puede poner un K6 en línea rápidamente y validar el reporte a la plataforma.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para obtener los detalles más actuales sobre la configuración específica del dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la documentación del EElink K6 en https://www.eelink.com.cn/ antes de finalizar cualquier instalación.
