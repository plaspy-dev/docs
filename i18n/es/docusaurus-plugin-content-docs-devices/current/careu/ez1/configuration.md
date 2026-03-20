---
slug: /careu/ez1/configuration
id: ez1-configuration
sidebar_label: Configuration
title: CAREU - EZ1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CAREU EZ1 con Plaspy, incluidos ajustes de servidor y flujo de instalación
keywords:
  - configuración CAREU EZ1
  - instalación CAREU EZ1
  - configuración EZ1 Plaspy
  - configuración rastreador CAREU
  - seguimiento vehicular CAREU EZ1
  - configuración servidor EZ1
  - configuración plataforma EZ1
  - gestión de flotas EZ1
  - configuración rastreador Plaspy
  - configuración LTE EZ1
---

# CAREU - Configuración EZ1

Esta página describe el contexto público de configuración para usar el rastreador GPS CAREU EZ1 con Plaspy. Incluye los ajustes compartidos del servidor Plaspy, qué verificar antes de la integración y el flujo práctico para preparar una unidad EZ1 para que reporte ubicación y estado a la plataforma. Use esta guía como punto de partida práctico y complétela con la documentación del dispositivo al momento de realizar la instalación.

Plaspy emplea ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en la plataforma. Los pasos de configuración desde el lado del fabricante para el EZ1 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. La orientación a continuación se centra en el endpoint público de Plaspy y en los pasos comunes que aplicará con el método de configuración CAREU disponible para su unidad EZ1.

## Resumen de la configuración

Configurar el CAREU EZ1 para Plaspy prepara el dispositivo para enviar telemetría a la plataforma y garantiza visibilidad para la supervisión de flotas. El proceso suele ser breve cuando dispone de los ajustes de servidor correctos y el dispositivo es accesible por su enlace celular o mediante el método de configuración local.

- Apunte el EZ1 al endpoint del servidor Plaspy para que el dispositivo envíe datos de posición y eventos a la plataforma.
- Seleccione el protocolo de transporte que el dispositivo soporte (UDP o TCP) si la configuración del equipo lo requiere.
- Verifique la conectividad celular, la alimentación y el estado del firmware para que el rastreador pueda establecer sesiones de datos.
- Guarde y aplique los cambios, luego confirme que el dispositivo es visible en Plaspy y que reporta según lo esperado.
- Tenga a mano la documentación del fabricante para pasos específicos de variantes, como configuración por Bluetooth o cableado de accesorios.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los ajustes públicos y compartidos que debe ingresar en la herramienta de configuración del CAREU EZ1 o mediante SMS/USB/Bluetooth según aplique en su caso.

## Requisitos típicos antes de la configuración

- Una unidad EZ1 con alimentación y con la versión celular correcta (LTE o 2G) para la zona de despliegue.
- Una tarjeta SIM activa con un plan de datos y señal celular para conectividad a internet cuando se utilice reporte por celular.
- Acceso al método oficial de configuración CAREU para su EZ1 (software del fabricante, configuración por Bluetooth para la versión LTE, o la herramienta recomendada por el proveedor).
- Conocimiento de la versión de firmware del dispositivo y de las notas de la versión que puedan afectar parámetros de configuración.
- Acceso físico al dispositivo para la configuración inicial y un entorno seguro para realizar reinicios si se requieren.
- Una cuenta registrada en Plaspy o acceso a la plataforma para validar la conectividad y los datos del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El CAREU EZ1 envía datos de ubicación y eventos a la plataforma Plaspy apuntando al endpoint público y puerto de Plaspy. Una vez configurado, el dispositivo iniciará conexiones hacia Plaspy y la plataforma interpretará los mensajes entrantes mediante detección automática del protocolo.

- El EZ1 envía actualizaciones de posición y mensajes de evento al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar UDP o TCP según lo que esté configurado en el rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, lo que permite que la plataforma interprete los mensajes del EZ1.
- Tras una configuración exitosa, el rastreador será visible en Plaspy para monitoreo en tiempo real e informes históricos.
- La validación periódica del reporte después del despliegue confirma que el rastreador está enviando los eventos esperados a la plataforma.

## Flujo de configuración común

1. Acceda al método o software de configuración oficial del CAREU EZ1 recomendado por el fabricante para su unidad.
2. Ubique los ajustes de servidor u host remoto en la interfaz de configuración.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888 (este es el puerto compartido que Plaspy usa para todos los dispositivos).
5. Seleccione UDP o TCP como transporte si el equipo requiere una selección explícita.
6. Aplique o guarde los cambios de configuración en el EZ1 y confirme que los ajustes se han almacenado.
7. Reinicie el dispositivo si el flujo de configuración del fabricante lo exige.
8. Valide en Plaspy que el dispositivo reporta y actualiza correctamente su estado y posición.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos o cadenas de configuración para el CAREU EZ1 depende del método que utilice el dispositivo (por ejemplo, herramienta Bluetooth, comandos SMS, USB/serial o software del fabricante). Dado que los comandos varían según firmware y herramienta, aquí solo se ofrece una recomendación general:

- Use la herramienta oficial de configuración CAREU o la interfaz Bluetooth para unidades LTE para ingresar los valores de servidor y puerto indicados arriba.
- Si su proveedor facilita comandos de configuración por SMS, siga la sintaxis oficial de SMS en la documentación de CAREU para establecer el servidor y el puerto, preservando los marcadores que el fabricante requiera.

Como no se incluyeron detalles públicos de modelConfiguration para el EZ1 en esta guía, consulte el manual de configuración de CAREU para la sintaxis exacta de los comandos o contacte a su proveedor de dispositivos para ejemplos precisos.

## Notas de configuración

- Las diferencias de firmware pueden modificar las opciones de configuración disponibles y la sintaxis de comandos; confirme la versión de firmware antes de realizar despliegues masivos.
- Si tiene la opción, pruebe ambos transportes (UDP y TCP) en un equipo para determinar cuál es el más adecuado para su red y nivel de confiabilidad requerido.
- La configuración por Bluetooth en la versión LTE del EZ1 puede permitir la puesta a punto local sin necesidad de SMS o USB; revise la herramienta del fabricante para esa posibilidad.
- Mantenga un registro de las entradas de servidor que aplique (dominio e IP) para que la resolución de problemas use los mismos valores.
- Confirme siempre que los ajustes se han guardado y que el dispositivo se reinició si el proceso de configuración lo requiere.

## Por qué usar Plaspy con esta configuración

Configurar el CAREU EZ1 para que reporte a Plaspy proporciona a las organizaciones un endpoint confiable y estandarizado para la recolección de telemetría vehicular y datos de eventos. Con los ajustes compartidos del servidor Plaspy y la detección automática de protocolo, los equipos pueden reducir la complejidad de configuración por dispositivo y concentrarse en la escala del despliegue y la supervisión operativa.

Para obtener más información sobre Plaspy y cómo admite integraciones con múltiples marcas de rastreadores, visite https://www.plaspy.com. Verifique siempre los pasos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de CAREU en https://www.systech-iot.com/ ya que las prácticas de hardware y software pueden cambiar con el tiempo.
