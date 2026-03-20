---
slug: /gotop/te_200/configuration
id: te_200-configuration
sidebar_label: Configuration
title: GOTOP - TE-200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP TE-200 para conectar con Plaspy y habilitar seguimiento en tiempo real
keywords:
  - configuración GOTOP TE-200
  - instalación GOTOP TE-200
  - TE-200 Plaspy
  - configuración rastreador GOTOP
  - configuración rastreador mascotas
  - configuración rastreador GPRS
  - configuración rastreador GPS
  - ajustes servidor Plaspy
  - guía integración rastreador
  - configuración GPS TE-200
---

# GOTOP - Configuración del TE-200

Esta página documenta el contexto público de configuración para usar el rastreador mini para mascotas GOTOP TE-200 con Plaspy. Se centra en los ajustes prácticos del lado de la plataforma y en los pasos típicos necesarios para apuntar un TE-200 a Plaspy y habilitar seguimiento en tiempo real, telemetría y reporte de eventos. Utilice esta guía junto con el manual del dispositivo y las herramientas del fabricante para completar la configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo se conecta al endpoint de Plaspy. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe consultar las instrucciones oficiales de GOTOP para comandos y opciones específicas del dispositivo.

## Resumen de la configuración

Configurar el TE-200 para Plaspy prepara el dispositivo para enviar mensajes de posición, estado y alertas a Plaspy, donde se muestran en mapas, líneas de tiempo y feeds de alertas. El TE-200 soporta reporte por datos GPRS y por SMS, además de funciones como monitoreo de voz bidireccional y alarmas configurables que complementan la visibilidad en Plaspy.

- Apunte el dispositivo al endpoint del servidor de Plaspy para que los reportes GPRS lleguen a la plataforma
- Seleccione el transporte (UDP o TCP) y configure el puerto compartido que usa Plaspy
- Asegúrese de que el dispositivo tenga una SIM activa y datos disponibles para el reporte por GPRS
- Verifique que el dispositivo aparezca en Plaspy y que se reporten eventos como geocercas y batería baja
- Guarde y, si es necesario, reinicie el rastreador para aplicar los ajustes e iniciar el envío de datos

## Ajustes del servidor Plaspy

Al configurar el TE-200 para Plaspy, use los siguientes ajustes públicos exactamente como se indican:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol after the device connects

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto una vez que el TE-200 se conecte al endpoint del servidor.

## Requisitos habituales antes de la configuración

- Batería del dispositivo cargada y fuente de alimentación funcional para la configuración inicial
- Micro SIM instalada con un plan de datos activo para reporte por GPRS o con capacidad de SMS si va a usar ese método
- Acceso al método oficial de configuración GOTOP para el TE-200 (herramienta del fabricante, aplicación de escritorio o comandos SMS)
- Dispositivo encendido y accesible mediante la herramienta de configuración o la interfaz SMS
- Una cuenta o proyecto en Plaspy configurado para recibir e identificar el TE-200 cuando comience a reportar
- Conocimientos básicos para elegir entre TCP o UDP si el dispositivo solicita selección de transporte

## Cómo se conecta este rastreador a Plaspy

El TE-200 envía mensajes de ubicación y estado del dispositivo a Plaspy usando su conexión de datos GPRS o, si se configura, vía SMS. Al dirigir el TE-200 al endpoint del servidor Plaspy y al puerto compartido, el dispositivo se vuelve visible en los paneles de Plaspy y puede entregar alertas y telemetría para monitoreo y registro histórico.

- El TE-200 transmite actualizaciones de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en el servidor
- Eventos como movimiento, geocerca, batería baja y otras alarmas se envían a Plaspy para alertas y registro
- Si se pierde cobertura, el TE-200 puede almacenar puntos y volver a enviarlos a Plaspy cuando se restablezca la conectividad

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP para el TE-200 (herramienta web del fabricante, aplicación de escritorio o comandos SMS según lo proporcione GOTOP).
2. En los ajustes de servidor del dispositivo, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del servidor en 8888 (Plaspy usa este mismo puerto para todos los equipos).
4. Elija UDP o TCP si el TE-200 requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta de GOTOP o envíe el comando SMS correspondiente para almacenar los ajustes.
6. Reinicie el TE-200 si las instrucciones del fabricante indican que es necesario para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo reporta a Plaspy verificando una posición o estado inicial en su proyecto Plaspy y confirmando que aparecen las alertas como se espera.

## Ejemplos de comandos de configuración

La documentación del fabricante y la herramienta de configuración del TE-200 definen los comandos exactos o las cadenas SMS usadas para establecer el servidor y las opciones de transporte. Debido a que los formatos de comando varían según el firmware y la herramienta del proveedor, aquí no se incluyen los comandos precisos. Use el método oficial de GOTOP o el manual del TE-200 para obtener la sintaxis exacta y ejemplos sobre cómo:

- Configurar el servidor a d.plaspy.com o 54.85.159.138
- Establecer el puerto en 8888
- Elegir UDP o TCP si se requiere
- Guardar la configuración y forzar el reinicio del dispositivo

Consulte el manual de GOTOP para ejemplos paso a paso de comandos y cadenas SMS específicos según la versión de firmware del TE-200.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre confirme los comandos con la documentación del TE-200.
- Si el dispositivo soporta tanto GPRS como SMS, elija GPRS para ubicación en tiempo real en Plaspy y reserve SMS como respaldo o para reportes de emergencia.
- Cuando hay que elegir, UDP suele usarse por ser eficiente en reportes de ubicación, mientras que TCP puede seleccionarse si se prefiere confirmación de entrega de paquetes; Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy detectará automáticamente el protocolo del rastreador una vez que el TE-200 se conecte a d.plaspy.com o 54.85.159.138 en el puerto 8888, de modo que no se requiere configuración adicional del protocolo en el servidor.
- Anote cualquier marcador de posición en los comandos del fabricante, como valores APN, y consulte con su proveedor móvil para obtener las credenciales APN correctas si son necesarias.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP TE-200 con Plaspy ofrece una opción compacta y de bajo consumo para el rastreo de mascotas y pequeños activos, al tiempo que proporciona visibilidad continua en mapas, líneas de tiempo y feeds de alertas de Plaspy. Las capacidades de reporte por GPRS y SMS del TE-200, su búfer interno de registro y sus alarmas, combinadas con el endpoint centralizado de Plaspy y la detección automática de protocolo, facilitan una integración sencilla para monitoreo en tiempo real e informes históricos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para las instrucciones más recientes específicas del dispositivo, notas de firmware y sintaxis de comandos del GOTOP TE-200, verifique los detalles en el sitio del fabricante https://www.gotop.cc/. Los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe confirmar las instrucciones actuales en la documentación oficial de GOTOP.
