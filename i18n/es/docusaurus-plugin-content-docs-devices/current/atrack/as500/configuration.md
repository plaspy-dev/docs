---
slug: /atrack/as500/configuration
id: as500-configuration
sidebar_label: Configuration
title: ATrack - AS500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ATrack AS500 para conectar con Plaspy usando ajustes de servidor compartidos y comandos prácticos
keywords:
  - configuración ATrack AS500
  - configuración AS500 Plaspy
  - configuración rastreador ATrack
  - configuración servidor AS500
  - configuración plataforma GPS AS500
  - configuración de dispositivo Plaspy
  - configuración GPRS AS500
  - configuración rastreador de activos
  - configuración UDP TCP AS500
  - comandos AT AS500
---

# ATrack - Configuración AS500

Esta página reúne la información pública de configuración necesaria para usar el rastreador ATrack AS500 con Plaspy. Aquí encontrará los pasos prácticos para apuntar el dispositivo a Plaspy, una explicación de los ajustes del servidor y ejemplos de comandos AT que suelen emplearse para preparar el equipo para su operación con Plaspy. Utilice esta guía junto con la documentación oficial de ATrack para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la plataforma espera un punto de conexión y puerto consistentes para la ingestión mientras determina el protocolo del equipo en tiempo de ejecución. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que verifique cualquier paso específico del dispositivo con la documentación de ATrack o las indicaciones del instalador.

## Visión general de la configuración

El objetivo al configurar un AS500 para Plaspy es dejar el rastreador listo para conectar de forma confiable, reportar telemetría y ser visible en la plataforma Plaspy. Esto incluye configurar los parámetros de red, seleccionar el transporte, habilitar el reporte de eventos y verificar que el dispositivo pueda alcanzar el servidor de Plaspy.

- Apuntar el AS500 al endpoint y puerto del servidor Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN y los parámetros GPRS según lo requiera la SIM o perfil eSIM instalado.
- Habilitar intervalos de reporte y reglas de eventos para que se transmitan eventos de movimiento y sensores.
- Verificar la selección de transporte (UDP o TCP) y confirmar que el dispositivo pueda establecer sesión con Plaspy.
- Validar la entrega y la ingestión de datos en cola para asegurar que Plaspy reciba eventos en vivo y almacenados.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP; seleccione el transporte soportado por su firmware o herramienta de aprovisionamiento
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta datos de dispositivos soportados sin configuración de protocolo por dispositivo en Plaspy

## Requisitos previos típicos antes de la configuración

- Dispositivo encendido y accesible mediante la interfaz de configuración del fabricante que use (ADM, UART o consola de comandos según aplique).
- SIM de datos celular activa o eSIM aprovisionada para el dispositivo con las credenciales APN correctas.
- Valores de APN disponibles para insertar en la configuración del equipo, como los marcadores {{apn}}, {{apnu}} y {{apnp}} si son necesarios.
- Conocimiento del método de configuración del dispositivo en su despliegue para enviar comandos AT o utilizar las herramientas del fabricante.
- Un plan básico de verificación para confirmar que el dispositivo alcanza el servidor Plaspy y que los datos aparecen en la plataforma.
- Acceso del instalador al equipo físico en caso de que sea necesario reiniciar o cortar la alimentación tras aplicar los ajustes.

## Cómo se conecta este rastreador a Plaspy

El AS500 envía datos de ubicación y sensores al endpoint y puerto de Plaspy que usted configure en el dispositivo. Una vez dirigido a Plaspy, la plataforma ingiere la telemetría en vivo y las transmisiones en cola cuando la conectividad se restablece.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que todos los equipos utilicen un objetivo consistente.
- La telemetría se transporta por UDP o TCP según la selección de transporte realizada durante la configuración.
- El reporte de eventos como movimiento, manipulación o apertura de puertas se envía a Plaspy para activar alertas y flujos de trabajo.
- El almacenamiento local en el dispositivo guarda eventos durante periodos sin conexión y Plaspy procesa los datos en cola cuando se restablece el enlace.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere selección manual del protocolo en la plataforma.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante para el AS500 (ADM, consola UART o el canal de comandos AT soportado).
2. Ingrese el servidor de Plaspy por nombre de host o IP usando d.plaspy.com o 54.85.159.138 como endpoint.
3. Configure el puerto del servidor en 8888 para todos los dispositivos según lo exige Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección explícita de transporte; Plaspy acepta cualquiera y detecta el protocolo automáticamente.
5. Configure el APN y los parámetros GPRS usando los valores de su operador y los ejemplos que se muestran abajo si va a usar comandos AT.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante o el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando la respuesta de comandos del equipo y confirmando la llegada de datos en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El AS500 soporta comandos estilo AT para la configuración. El siguiente ejemplo público muestra un orden de comandos comúnmente usado para preparar el dispositivo para Plaspy. Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador cuando aplique el comando GPRS.

- Configurar manejo de evento ACC y reglas de reporte relacionadas
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer intervalo de rastreo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

- Poner el dispositivo en modo binario (modo de formateo para paquetes ascendentes)
```text
AT$FORM=1,@P,0,""
```

- Configurar el servidor GPRS a Plaspy usando marcadores para las credenciales APN
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

- Verificar estado del dispositivo
```text
AT$INFO=?
```

Notas sobre los marcadores de posición
- {{apn}} es el nombre APN de su operador.
- {{apnu}} es el usuario APN cuando el operador lo requiere.
- {{apnp}} es la contraseña APN cuando el operador la solicita.
Reemplace los marcadores con los valores correctos para su SIM o perfil eSIM antes de aplicar el comando GPRS.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles. Confirme el conjunto de comandos para su versión de firmware antes de aplicarlos.
- La elección de transporte TCP frente a UDP puede afectar la semántica de entrega; elija el transporte compatible con su flujo de aprovisionamiento y tenga en cuenta que Plaspy aceptará ambos.
- Si prefiere el software del fabricante (ADM) o una consola UART, siga el proceso recomendado por el proveedor para guardar y aplicar ajustes en lugar de enviar comandos crudos, salvo que esté capacitado para hacerlo.
- Los parámetros APN y GPRS son específicos del operador. Use los valores del operador y mantenga las credenciales seguras.
- Cuando esté disponible, use el comando de verificación del dispositivo (por ejemplo AT$INFO=? arriba) para confirmar la conectividad de red y servidor antes de completar el despliegue.

## Por qué usar Plaspy con esta configuración

Utilizar el AS500 con Plaspy ofrece un camino sencillo para la ingestión de telemetría de activos resistentes en una plataforma única. La larga autonomía del AS500 y su soporte para UDP, TCP y MQTT permiten patrones de despliegue flexibles, mientras que los ajustes de servidor compartidos de Plaspy hacen que el aprovisionamiento a gran escala sea coherente y repetible.

Para saber más sobre Plaspy y cómo gestiona la ingestión de dispositivos, visite https://www.plaspy.com. Para instrucciones específicas de dispositivos, notas de firmware y detalles de revisiones de hardware consulte la documentación oficial de ATrack en https://www.atrack.com.tw/ para verificar los métodos de configuración y la guía del fabricante vigentes.
