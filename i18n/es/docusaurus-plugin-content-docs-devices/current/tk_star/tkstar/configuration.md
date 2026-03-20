---
slug: /tk_star/tkstar/configuration
id: tkstar-configuration
sidebar_label: Configuration
title: TK-Star - TKSTAR Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador TK-Star TKSTAR con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración TK-Star TKSTAR
  - Instalación TKSTAR Plaspy
  - Configuración del servidor TKSTAR
  - Configuración rastreador GPS TKSTAR
  - Configuración SMS TKSTAR
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS
  - Rastreo de vehículos TKSTAR
  - Ajustes APN TKSTAR
  - Configuración GPRS TKSTAR
---

# TK-Star - Configuración de TKSTAR

Esta página describe el contexto público de configuración para usar el rastreador portátil TK-Star TKSTAR con la plataforma Plaspy. Se centra en los pasos prácticos de servidor y ajuste que permiten que el TKSTAR sea visible y reporte en Plaspy, usando patrones públicos de comandos SMS y recomendaciones generales de configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se enfoca en los ajustes públicos y comandos SMS más comunes para apuntar un rastreador TKSTAR al servicio Plaspy.

## Resumen de la configuración

Este proceso prepara el TKSTAR para enviar actualizaciones de posición y estado a Plaspy, de modo que el dispositivo pueda ser monitoreado en la plataforma. Normalmente los pasos incluyen configurar el APN para datos, establecer el servidor de Plaspy, seleccionar el transporte si es necesario y confirmar que el dispositivo está reportando.

- Configure el APN del dispositivo, usuario y contraseña para que el rastreador pueda usar datos móviles para reportes GPRS.
- Establezca en el rastreador el endpoint del servidor de Plaspy usando el puerto compartido de Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el firmware del equipo lo requiere.
- Valide la conectividad y confirme que el rastreador es visible y está reportando en Plaspy.
- Aplique los ajustes vía SMS o con la herramienta del fabricante según el dispositivo y el flujo de trabajo disponible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (todos los dispositivos en Plaspy usan el mismo puerto)  
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un dispositivo TKSTAR cargado o una fuente de alimentación confiable para realizar la configuración y las pruebas.  
- Una tarjeta SIM válida con datos móviles habilitados y el APN correcto del operador.  
- Acceso al método de configuración del fabricante TKSTAR, como comandos SMS o software del proveedor.  
- Conocimiento de la contraseña del dispositivo si esta se requiere para la configuración (la contraseña pública por defecto mostrada aquí es 123456).  
- Capacidad para enviar y recibir SMS con el rastreador si la configuración se realiza por SMS.  
- Conectividad de red básica para asegurar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TKSTAR envía periódicamente mensajes de ubicación y estado al endpoint compartido y al puerto de Plaspy para que el dispositivo pueda ser rastreado y monitoreado desde la plataforma. Plaspy recibe esos mensajes y los asigna a la entrada de dispositivo correspondiente mediante la detección del protocolo.

- El rastreador utiliza datos móviles (GPRS) para abrir una conexión a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- El dispositivo puede configurarse para usar transporte UDP o TCP según el firmware y la preferencia del instalador.  
- Plaspy identifica automáticamente el protocolo del rastreador, por lo que no se requiere una selección adicional a nivel de servidor.  
- Una vez que reporta, las actualizaciones de ubicación, eventos de movimiento y alertas configuradas se vuelven visibles en Plaspy.  
- El intervalo de subida controla la frecuencia de reportes; ajústelo para equilibrar la frecuencia de informes y el consumo de batería.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial recomendado por el fabricante TK-Star, normalmente comandos SMS o la herramienta de configuración del proveedor.  
2. Asegúrese de que el dispositivo tenga una SIM operativa y configure el APN usando el comando SMS correspondiente o la entrada en la herramienta.  
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.  
4. Establezca el puerto del servidor a 8888 en la configuración del equipo.  
5. Seleccione UDP o TCP en el dispositivo si el firmware solicita elegir un transporte.  
6. Guarde o aplique la configuración y reinicie el dispositivo si el procedimiento del fabricante lo requiere.  
7. Valide que el rastreador reporta a Plaspy y que aparece en la plataforma con las actualizaciones de ubicación esperadas.

## Comandos de configuración de ejemplo

El TKSTAR suele aceptar comandos SMS para su configuración. La contraseña pública por defecto usada en estos ejemplos es 123456. Reemplace los marcadores según sea necesario.

1. Restauración de fábrica inicial (opcional)
```text
begin123456
```
2. Establecer el APN del operador (reemplace {{apn}} con el APN del operador móvil)
```text
apn123456 {{apn}}
```
3. Configurar el usuario del APN si el operador lo exige (reemplace {{apnu}} con el usuario APN)
```text
apnuser123456 {{apnu}}
```
4. Configurar la contraseña del APN si es necesaria (reemplace {{apnp}} con la contraseña APN)
```text
apnpasswd123456 {{apnp}}
```
5. Señalar el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
6. Establecer el intervalo de subida a 60 segundos (ajuste según necesidad)
```text
upload123456 60
```
7. Cambiar el dispositivo al modo de reporte GPRS
```text
gprs123456
```

Notas sobre marcadores y comandos
- {{apn}} es la cadena APN del operador móvil requerida para datos.  
- {{apnu}} es el usuario APN cuando el operador lo requiere.  
- {{apnp}} es la contraseña APN cuando se solicita.  
- El comando adminip anterior apunta el dispositivo a la IP del servidor Plaspy y utiliza el puerto 8888; alternativamente puede especificar d.plaspy.com en la herramienta del fabricante si admite nombres de dominio.  
- Algunas variantes de firmware incluyen comandos separados para seleccionar UDP o TCP; si su dispositivo requiere una selección explícita de transporte, configúrelo en UDP o TCP antes de guardar.

## Notas de configuración

- La configuración por SMS es un método público común para dispositivos TKSTAR; siga el formato exacto de comandos y la contraseña del dispositivo para su modelo.  
- Las revisiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o las funciones disponibles; consulte los recursos actuales del fabricante si tiene dudas.  
- Elija UDP o TCP según la preferencia del instalador y el comportamiento del firmware; Plaspy acepta ambos en el puerto 8888.  
- Todos los dispositivos que reportan a Plaspy usan el puerto 8888, lo que simplifica los ajustes de servidor para múltiples dispositivos.  
- Verifique las credenciales APN con el operador móvil si el dispositivo no puede establecer una conexión GPRS.

## Por qué usar Plaspy con esta configuración

Configurar un rastreador TK-Star TKSTAR para reportar a Plaspy ofrece una forma sencilla de centralizar la visibilidad de ubicaciones, el reporte de eventos y el monitoreo operativo básico de activos o personas. Usar los ajustes de servidor compartidos de Plaspy facilita el despliegue porque el mismo endpoint y puerto se aplican a todos los dispositivos compatibles y Plaspy gestiona la detección automática de protocolos.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para los comandos específicos del dispositivo más recientes, notas de firmware e instrucciones del fabricante, verifique la información actual en el sitio oficial de TK-Star https://www.tk-star.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
