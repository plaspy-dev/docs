---
slug: /arknav/k_18u/configuration
id: k_18u-configuration
sidebar_label: Configuration
title: ArkNav - K-18U Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del registrador GPS ArkNav K-18U con ajustes del servidor Plaspy y orientación práctica
keywords:
  - Configuración ArkNav K-18U
  - Configuración K-18U Plaspy
  - Configuración registrador GPS ArkNav
  - Configuración servidor K-18U
  - Configuración software seguimiento K-18U
  - Ajustes servidor Plaspy
  - Configuración plataforma rastreo GPS
  - Integración registrador de datos K-18U
  - Guía ArkNav K-18U
  - Rastreo de flotas K-18U
---

# ArkNav - K-18U Configuración

En esta página se describe el contexto público de configuración para usar el registrador de datos GPS ArkNav K-18U con Plaspy. Se explica cómo suele prepararse la salida de datos descrita por el fabricante y el software del proveedor para que una plataforma de rastreo la ingiera, además de los ajustes prácticos de servidor que Plaspy requiere para ser compatible.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando llegan datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe emplear esta guía junto con la documentación de ArkNav y las utilidades del vendedor al preparar un K-18U para su uso con Plaspy.

## Panorama de la configuración

El objetivo de la configuración es poner a disposición de Plaspy los datos GPS registrados por el K-18U en un formato que la plataforma pueda procesar y mostrar. Dado que el K-18U es principalmente un registrador de datos que almacena sentencias NMEA, muchas integraciones usan el software del proveedor o una herramienta de reenvío para transferir los datos a Plaspy en lugar de configurar un flujo de red nativo en el propio dispositivo.

- Prepare el dispositivo y los archivos NMEA almacenados para que un reenvío o la herramienta del proveedor pueda leerlos
- Configure cualquier middleware con capacidad de reenvío o red para apuntar al endpoint del servidor Plaspy
- Seleccione el protocolo de transporte (UDP o TCP) si la herramienta de reenvío o el firmware lo requiere
- Valide la conectividad con Plaspy y confirme que la plataforma está recibiendo registros
- Verifique que las salidas NMEA del K-18U se conserven o se traduzcan correctamente para la ingestión en Plaspy

## Ajustes del servidor Plaspy

Al configurar el K-18U mediante una herramienta del proveedor, un forwarder o un firmware que soporte transmisión por red, use los siguientes ajustes del servidor Plaspy exactamente como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP según la herramienta o firmware que utilice
- Plaspy detecta automáticamente el protocolo del tracker cuando recibe datos

Todos los dispositivos en Plaspy usan el mismo puerto, y Plaspy intentará detectar el protocolo del tracker automáticamente a partir de los datos entrantes.

## Requisitos típicos antes de la configuración

- Dispositivo K-18U cargado y operativo con una tarjeta micro SD legible que contenga archivos de registro NMEA
- Cable USB o lector de tarjetas y una PC con acceso al K-18S Tracking Log Management Software u otras herramientas del proveedor
- Acceso a la documentación oficial de ArkNav o a las utilidades de configuración del K-18U
- Forwarder, middleware o firmware con capacidad de red que pueda enviar datos al endpoint del servidor Plaspy
- Conocimiento de los ajustes del servidor Plaspy (d.plaspy.com, 54.85.159.138, puerto 8888) para ingresarlos en la herramienta de reenvío

## Cómo se conecta este tracker a Plaspy

El K-18U registra sentencias NMEA GPS (por ejemplo GPRMC y GPGGA) en almacenamiento extraíble. Para que esos datos estén disponibles en Plaspy, la salida NMEA registrada debe reenviarse o transmitirse al endpoint y puerto del servidor Plaspy. Con el reenvío configurado, Plaspy analizará los datos entrantes y hará que el dispositivo sea visible en la plataforma.

- El dispositivo almacena sentencias NMEA GPS completas para su posterior recuperación o procesamiento
- El software del proveedor, como K-18S, o una herramienta de terceros puede leer los archivos de la micro SD y reenviar los datos
- Las herramientas de reenvío o el firmware deben configurarse para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Seleccione UDP o TCP como transporte en la herramienta de reenvío si es necesario; Plaspy soporta ambos
- Una vez que Plaspy reciba los datos, la plataforma detectará automáticamente el protocolo y comenzará a procesar los registros para que el dispositivo aparezca en el sistema

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o al software (por ejemplo K-18S Tracking Log Management Software) o a su middleware de reenvío elegido.
2. Prepare los archivos de datos del K-18U en la micro SD o conecte el dispositivo a la herramienta del proveedor mediante USB.
3. En las opciones del proveedor o del forwarder, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto de destino en 8888 según lo requiera Plaspy.
5. Si la herramienta requiere selección de transporte, elija UDP o TCP según sus requisitos de red.
6. Aplique o guarde la configuración en la herramienta del proveedor o forwarder y, si el firmware del dispositivo lo solicita, reinicie el dispositivo o el software para aplicar los cambios.
7. Valide que el dispositivo o el forwarder informe a Plaspy y que los datos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

La descripción del ArkNav K-18U que aquí se presenta no incluye comandos de red del fabricante para configuración directa dispositivo-a-servidor. La sintaxis exacta de los comandos y su disponibilidad pueden variar según el firmware y las utilidades del proveedor. Si utiliza un forwarder o firmware que acepte comandos mediante línea de comandos o estilo SMS, ingrese el destino de Plaspy como:

- Host: d.plaspy.com (o 54.85.159.138)
- Puerto: 8888
- Transporte: UDP o TCP

Dado que el K-18U se usa comúnmente como registrador de datos, muchas integraciones emplearán el software K-18S o un forwarder personalizado para leer archivos NMEA y enviarlos al endpoint de Plaspy indicado arriba. Confirme la sintaxis exacta del comando o el formato de configuración en la documentación de ArkNav antes de aplicar ajustes.

## Notas de configuración

- El K-18U almacena sentencias NMEA completas, lo que facilita reenviar las cadenas GPS en bruto; sin embargo, puede necesitar un convertidor para ajustar los datos al formato de protocolo que Plaspy espere cuando use middleware.
- Las versiones de firmware, las herramientas del proveedor y las revisiones de hardware pueden cambiar la forma en que se admiten los comandos de transmisión por red; siempre verifique la documentación de ArkNav para la revisión de su dispositivo.
- Al elegir entre UDP y TCP, considere la fiabilidad y la latencia de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo número de puerto 8888 para ingestión, por lo que cualquier configuración de reenvío debe apuntar a ese puerto.
- Si su flujo de trabajo utiliza cargas periódicas en lugar de streaming en vivo, asegúrese de que el forwarder conserve las marcas de tiempo y el orden cronológico para que Plaspy secuencie los eventos con precisión.

## Por qué usar Plaspy con esta configuración

Integrar el ArkNav K-18U con Plaspy ofrece a las organizaciones una vía práctica para convertir registros NMEA GPS en visibilidad dentro de una plataforma de rastreo de flotas. Ya sea que reenvíe datos en vivo desde un forwarder con capacidad de red o suba registros históricos procesados por el software del proveedor, usar el endpoint compartido de Plaspy simplifica la configuración de destino y permite que Plaspy gestione automáticamente la detección de protocolo.

Para obtener más información sobre Plaspy y cómo la plataforma puede ingerir y mostrar datos de dispositivos compatibles, visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo ArkNav, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de ArkNav https://www.arknavgps.com.tw/ ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
