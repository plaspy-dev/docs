---
slug: /eelink/gpt12/configuration
id: gpt12-configuration
sidebar_label: Configuration
title: EElink - GPT12 Configuration
sidebar_class_name: menu_item_tracker
description: Referencia pública de configuración para integrar el rastreador EElink GPT12 con Plaspy, con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - configuración EElink GPT12
  - instalación EElink GPT12
  - EElink GPT12 Plaspy
  - configuración servidor GPT12
  - configuración rastreador GPS GPT12
  - configuración rastreador GPS EElink
  - instalación rastreador de vehículo GPT12
  - configuración plataforma de rastreo GPS
  - integración de rastreador con Plaspy
  - ajustes servidor rastreador GPS
---

# EElink - Configuración GPT12

Esta página documenta el contexto público de configuración para usar el rastreador EElink GPT12 con Plaspy. Reúne los ajustes de servidor prácticos y comandos de ejemplo que se usan con frecuencia para apuntar el rastreador a Plaspy, y explica qué verificar antes y después de aplicar esos ajustes. Use esta guía como referencia técnica junto con la documentación del fabricante y sus procedimientos de instalación.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos siguientes deben tomarse solo como ejemplo público y verificar el comportamiento del equipo con los recursos oficiales de EElink.

## Resumen de la configuración

Configurar el GPT12 para Plaspy prepara el equipo para comunicarse con el endpoint de servidor de Plaspy y que los datos de ubicación y eventos aparezcan en su cuenta. El flujo público de configuración suele usar SMS del dispositivo o las herramientas del fabricante para establecer APN, dirección de servidor e intervalos de reporte, de modo que el rastreador envíe actualizaciones a Plaspy de forma fiable.

- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para enrutar los datos a la plataforma.
- Configurar el APN y los ajustes GPRS del dispositivo para que tenga conectividad de datos móviles.
- Establecer intervalos de reporte y temporizadores para controlar la frecuencia de envío de posiciones.
- Opcionalmente restablecer o verificar parámetros para asegurar un estado de configuración limpio.
- Validar la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un GPT12 con batería y una tarjeta SIM funcional que soporte datos GPRS y control por SMS.
- Tener a mano los ajustes APN correctos de su operador móvil para ingresarlos.
- Acceso al método de configuración del dispositivo que vaya a utilizar, como comandos SMS, software de PC o herramientas del proveedor.
- Asegurar que el dispositivo tenga batería suficiente o esté conectado a alimentación externa durante la configuración.
- Contar con el IMEI o identificador del dispositivo para confirmar la unidad correcta en Plaspy tras el registro.

## Cómo se conecta este rastreador a Plaspy

El GPT12 se configura para enviar su ubicación y alarmas al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera los datos del dispositivo y los muestre. Plaspy escucha en el mismo puerto para todos los dispositivos compatibles y utiliza detección automática de protocolo para reconocer los rastreadores que hablan protocolos soportados al conectarse.

- El rastreador envía informes de posición periódicos según el ajuste TIMER al servidor Plaspy.
- Mensajes de evento como geocercas o alarmas de batería baja se reenvían a Plaspy para alertas e historial.
- El rastreador puede apuntarse al servidor Plaspy usando el nombre de dominio o la dirección IP.
- Plaspy acepta conexiones en el puerto 8888 usando UDP o TCP y resuelve el protocolo del dispositivo automáticamente.
- Tras la configuración, valide que el equipo sea visible en Plaspy y esté reportando los eventos esperados.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de EElink que prefiera (comandos SMS, herramienta de PC o software del proveedor).
2. Configure el APN del dispositivo para otorgarle conectividad de datos móviles con el APN proporcionado por su operador.
3. Ingrese la dirección del servidor Plaspy ya sea como d.plaspy.com o 54.85.159.138.
4. Ajuste el puerto a 8888 y elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario.
6. Valide que el dispositivo se registre y reporte a Plaspy y que las actualizaciones de ubicación aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El GPT12 puede configurarse vía SMS usando los siguientes comandos públicos. Envíe cada comando como un SMS separado al número del dispositivo. Conserve los marcadores de posición exactamente y reemplácelos por los valores de su operador cuando sea necesario.

- Reinicio de fábrica opcional
```text
FACTORY#
```
- Ajustar zona horaria a UTC 0
```text
GMT,E,0#
```
- Establecer el APN del operador
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: mantenga los marcadores [apn], [apnu] y [apnp] y sustitúyalos por su APN de red, nombre de usuario y contraseña si son requeridos. El comando muestra el campo APN y puede incluir los parámetros opcionales de usuario y contraseña cuando sean necesarios.

- Configurar el servidor GPRS usando el dominio de Plaspy (ejemplo con dominio)
```text
SERVER,1,d.plaspy.com,8888#
```
- O configurar el servidor GPRS usando la IP de Plaspy (ejemplo con IP)
```text
SERVER,0,54.85.159.138,8888#
```
- Establecer el intervalo de actualización para informar cada 60 segundos
```text
TIMER,60#
```
- Comprobar parámetros actuales
```text
PARAM#
```

Conserve el orden de los comandos cuando su flujo de trabajo lo requiera. El comando de reinicio de fábrica es opcional y debe usarse solo si desea volver a los valores predeterminados antes de reconfigurar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; siempre revise las notas del firmware si los resultados difieren.
- El GPT12 admite configuración por SMS como se muestra arriba; también puede usar herramientas de PC o del proveedor si están disponibles para configuraciones masivas o remotas.
- Cuando el dispositivo requiera elección de transporte, seleccione UDP o TCP según su preferencia de red; Plaspy acepta cualquiera de los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Use el dominio d.plaspy.com para facilitar el mantenimiento futuro, o la IP 54.85.159.138 cuando no haya DNS disponible en su entorno.
- Mantenga los marcadores de APN intactos en los comandos y reemplácelos únicamente por los valores proporcionados por su operador.

## Por qué usar Plaspy con esta configuración

Usar el EElink GPT12 con Plaspy ofrece a las organizaciones una forma directa de incorporar telemetría, alarmas e historial de posiciones a una plataforma unificada de visibilidad de flota y activos. Apuntar el GPT12 a Plaspy con los ajustes de servidor compartidos garantiza una ingesta consistente de actualizaciones de ubicación y eventos para que usted pueda monitorear activos, recibir alertas de geocercas y revisar reproducción de rutas dentro de la plataforma.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique las instrucciones de instalación y las notas de firmware más recientes en el sitio oficial de EElink https://www.eelink.com.cn/ antes de desplegar.
