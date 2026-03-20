---
slug: /careu/u1_lite/protocol
id: u1_lite-protocol
sidebar_label: Protocol
title: CAREU - U1 Lite+ Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CAREU U1 Lite+ y su compatibilidad con el servidor Plaspy y el contexto de conexión
keywords:
  - protocolo CAREU U1 Lite+
  - protocolo GPS CAREU U1 Lite+
  - protocolo CAREU U1 Lite+ para Plaspy
  - protocolo de comunicación CAREU U1 Lite+
  - protocolo de rastreo CAREU U1 Lite+
  - rastreador LTE CAREU U1 Lite+
  - compatibilidad CAREU U1 Lite+
  - rastreadores compatibles con Plaspy
  - protocolo de rastreo vehicular
  - protocolo GPS para flotas
---

# CAREU - Protocolo U1 Lite+

Esta página describe el contexto público del protocolo para utilizar el rastreador CAREU U1 Lite+ con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, el contexto de transporte que debe configurarse en el equipo y consideraciones prácticas de compatibilidad, sin entrar en detalles propietarios ni específicos del firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es posible observar diferencias de comportamiento entre distintas versiones de firmware o configuraciones de accesorios.

## Resumen del protocolo

El protocolo de reporte del U1 Lite+ es el mecanismo por el cual el rastreador se identifica ante un servidor remoto, envía datos de posición y telemetría, y recibe opcionalmente configuraciones remotas o comandos. En Plaspy, el protocolo tiene como objetivo principal habilitar actualizaciones de posición confiables, telemetría de estado y datos de accesorios como flujos CAN o RS232 cuando el dispositivo lo soporta.

- Transporta datos de posición y telemetría desde el rastreador hacia el servidor para su uso en Plaspy
- Transmite estados de sensores y E/S de accesorios conectados, como periféricos RS232 y entradas digitales
- Admite el reporte opcional de eventos de conectividad y seguridad, por ejemplo detección de jamming
- Permite configuración remota y señales relacionadas con firmware cuando el dispositivo y la versión de firmware lo permiten
- Opera con la pila de red del dispositivo para enviar datos mediante el transporte elegido al endpoint de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un único endpoint compartido e inspecciona los reportes entrantes para identificar el protocolo del rastreador correspondiente. Para la mayoría de los usuarios esto significa que no es necesario seleccionar manualmente un protocolo en la plataforma si el dispositivo está apuntando a Plaspy y utiliza los ajustes de conexión esperados.

- Plaspy escucha en un puerto común para todos los dispositivos y protocolos soportados
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Los usuarios normalmente configuran el rastreador para que reporte al servidor de Plaspy y no necesitan seleccionar un protocolo en la nube
- Las credenciales correctas de reporte y los ajustes de transporte adecuados en el dispositivo son los requisitos habituales para la detección automática
- Si no aparece telemetría del dispositivo, revisar los ajustes de transporte y la documentación del fabricante es el siguiente paso recomendado

## Transporte y contexto de conexión

Los dispositivos CAREU U1 Lite+ pueden usar múltiples opciones de red celular y local para la entrega de datos. El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración, y puede direccionar el servidor Plaspy por dominio o IP según sea necesario para su infraestructura de red.

- El dominio del servidor Plaspy es d.plaspy.com para la configuración basada en DNS
- La IP del servidor Plaspy es 54.85.159.138 para entornos que requieren direccionamiento directo
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en ese puerto
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Elija UDP o TCP en el rastreador según las recomendaciones del firmware y las consideraciones de fiabilidad de la red

## Notas de compatibilidad del protocolo

- Las variaciones de firmware entre equipos CAREU pueden cambiar las opciones de reporte disponibles y los intervalos de mensaje
- Las revisiones de hardware y cables de extensión opcionales pueden exponer sensores o interfaces que afectan los datos reportados
- Los ajustes en el lado del fabricante, como transporte por defecto o uso de DNS, pueden variar entre versiones y regiones
- Cambiar entre UDP y TCP en el dispositivo puede alterar el comportamiento y la fiabilidad según las condiciones de la red
- Siempre valide el destino de reporte y el transporte del dispositivo para que coincidan con la configuración del endpoint Plaspy
- Consulte las opciones de configuración del dispositivo para funciones adicionales como transmisión de video por WiFi o flujos de accesorios RS232

## Por qué es importante entender el protocolo

Comprender cómo se comunica el U1 Lite+ contribuye a una instalación exitosa, operación confiable de la flota y una resolución de problemas más efectiva en Plaspy. Conocer el transporte, el comportamiento de reporte y las interfaces opcionales reduce errores de configuración y mejora la calidad de los datos para monitoreo e informes.

- Garantiza que la dirección del servidor y el transporte estén configurados correctamente en el rastreador para reportes fiables
- Ayuda a diagnosticar telemetría faltante confirmando si el dispositivo alcanza el endpoint de Plaspy
- Aclara qué flujos de datos de accesorios se deben esperar en Plaspy según el hardware y firmware del dispositivo
- Informa la elección entre UDP y TCP en función de la fiabilidad de la red y las recomendaciones del firmware
- Facilita la planificación de actualizaciones de firmware o cambios de hardware que podrían modificar el comportamiento de reporte

## Por qué usar Plaspy con este protocolo

Utilizar dispositivos CAREU U1 Lite+ con Plaspy ofrece una forma sencilla de recopilar posición GPS, telemetría de sensores y datos de accesorios para visibilidad de flota y supervisión operativa. Las opciones de conectividad celular del rastreador, incluyendo LTE con fallback, WiFi integrado y soporte para interfaces RS232 y CAN, lo hacen adecuado para flotas mixtas y vehículos que requieren video, CAN o datos de sensores periféricos además del GPS estándar.

El diseño de endpoint único de Plaspy y la detección automática de protocolos reducen la carga de configuración al desplegar múltiples modelos de dispositivos. Para saber más sobre cómo Plaspy puede integrarse con rastreadores CAREU y conocer las funciones e integraciones de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información más reciente del modelo en el sitio del fabricante https://www.systech-iot.com/.
