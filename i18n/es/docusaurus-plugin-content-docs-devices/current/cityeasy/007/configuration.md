---
slug: /cityeasy/007/configuration
id: 007-configuration
sidebar_label: Configuration
title: Cityeasy - 007 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Cityeasy 007 y apuntar el rastreador a Plaspy validando la conectividad
keywords:
  - Configuración Cityeasy 007
  - Instalación Cityeasy 007
  - Configuración servidor Cityeasy 007
  - Integración Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración plataforma GPS
  - Detección protocolo rastreador
  - Configuración seguimiento de flotas
  - Configuración seguimiento en tiempo real
---

# Cityeasy - Configuración del 007

Esta página explica el contexto público de configuración para usar el rastreador GPS Cityeasy 007 con la plataforma Plaspy. Describe los ajustes de servidor compartidos a los que debe apuntar el dispositivo y los pasos prácticos habituales necesarios para que el rastreador reporte a Plaspy y quede visible para monitoreo.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para los dispositivos compatibles, detectando automáticamente el protocolo del rastreador cuando llegan datos. Los pasos exactos en el lado del fabricante para el Cityeasy 007 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso, compare siempre estos ajustes públicos con la documentación del fabricante al realizar una instalación.

## Resumen de la configuración

Este proceso prepara el Cityeasy 007 para enviar sus informes de ubicación y estado a Plaspy, de modo que el dispositivo sea visible y gestionable desde la plataforma. El objetivo es apuntar el rastreador al servidor de Plaspy, confirmar el tipo de transporte, guardar la configuración y verificar que los reportes lleguen.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que los datos sean recibidos
- Usar el puerto compartido de Plaspy para evitar mapeos de puertos específicos por dispositivo
- Seleccionar el transporte del dispositivo (UDP o TCP) si el firmware lo solicita
- Guardar y aplicar la configuración en el Cityeasy 007 y reiniciar si es necesario
- Validar que el dispositivo está reportando a Plaspy y es visible en la plataforma

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos del servidor Plaspy al configurar el Cityeasy 007. Plaspy aplica el mismo puerto y endpoint a los rastreadores compatibles y detecta automáticamente el protocolo.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

## Requisitos típicos antes de la configuración

- El Cityeasy 007 debe estar encendido y operativo, con batería cargada o alimentación del vehículo disponible
- Acceso a la herramienta oficial de configuración Cityeasy, portal web o documentación para cambiar los ajustes de servidor
- Conectividad de datos válida para el dispositivo, de modo que los reportes salientes puedan alcanzar el endpoint de Plaspy
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para verificar la visibilidad del dispositivo después de la configuración
- Un plan claro de ubicación e instalación del rastreador para poder realizar pruebas tras la configuración

## Cómo se conecta este rastreador a Plaspy

El Cityeasy 007 se configura para reportar su posición y estado del dispositivo al endpoint y puerto compartido de Plaspy. Plaspy recibe los mensajes entrantes de los dispositivos en el mismo puerto para todos los dispositivos compatibles y aplica detección automática de protocolo para interpretar los datos.

- El rastreador envía reportes periódicos de ubicación y estado a d.plaspy.com o a 54.85.159.138
- Los reportes llegan al puerto 8888 del servidor de Plaspy
- El transporte del dispositivo puede configurarse como UDP o TCP según las opciones del firmware
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes para la plataforma
- Una vez recibidos y parseados los datos, el dispositivo aparece en Plaspy para monitoreo e informes de eventos

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de Cityeasy recomendado por el fabricante.
2. Localice la sección de ajustes de servidor o reportes en la herramienta de configuración del dispositivo.
3. Introduzca el endpoint de Plaspy especificando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
4. Configure el puerto en 8888.
5. Seleccione UDP o TCP si el rastreador requiere escoger un transporte en la interfaz de configuración.
6. Aplique o guarde la configuración y reinicie el Cityeasy 007 si la herramienta o el manual lo indican.
7. Valide que el rastreador reporta a Plaspy y que aparece en la plataforma, confirmando la conectividad y la detección del protocolo.

## Ejemplos de comandos de configuración

Las herramientas del fabricante y el firmware del Cityeasy 007 determinan la sintaxis exacta de comandos o la interfaz usada para establecer los detalles del servidor. Como los métodos difieren entre proveedores y versiones de firmware, aquí no se incluyen comandos específicos. Use la utilidad de configuración Cityeasy o el manual oficial para aplicar estos ajustes públicos de Plaspy:

- Dominio o IP del servidor: d.plaspy.com o 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP

Si su dispositivo utiliza configuración por comandos o por SMS y dispone de comandos provistos por el fabricante, aplíquelos en el orden recomendado por Cityeasy, sustituyendo el dominio o la IP y el puerto mostrados arriba. Conserve cualquier marcador de posición que indiquen los comandos del fabricante y consulte el manual oficial para la sintaxis exacta.

## Notas de configuración

- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles; no necesita un puerto único por equipo.
- Elegir UDP o TCP puede afectar las características de entrega; siga las recomendaciones de Cityeasy para el transporte más adecuado a su entorno.
- Las revisiones de firmware y hardware pueden cambiar los menús de configuración o los campos disponibles; consulte siempre las notas de la versión del fabricante.
- Tras aplicar los ajustes, es común reiniciar o hacer un ciclo de alimentación para que los nuevos parámetros del servidor se apliquen.
- Si falla la conectividad, revise la herramienta de configuración del dispositivo y confirme que el dominio o la IP y el puerto estén ingresados exactamente como se indica.

## Por qué usar Plaspy con esta configuración

Configurar el Cityeasy 007 para reportar a Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad de flotas, el monitoreo operativo y la gestión centralizada de dispositivos. El uso del endpoint compartido de Plaspy y la detección automática de protocolos reduce la carga de configuración por dispositivo y facilita la incorporación masiva de rastreadores.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Los métodos específicos de configuración, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información de instalación más reciente en el sitio oficial del fabricante.
