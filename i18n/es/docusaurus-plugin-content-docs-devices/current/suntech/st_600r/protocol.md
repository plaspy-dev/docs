---
slug: /suntech/st_600r/protocol
id: st_600r-protocol
sidebar_label: Protocol
title: Suntech - ST 600R Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Suntech ST 600R y cómo se comunica con Plaspy para el seguimiento de flotas
keywords:
  - protocolo Suntech ST 600R
  - protocolo GPS Suntech ST 600R
  - protocolo de comunicación Suntech ST 600R
  - protocolo de rastreo Suntech ST 600R
  - protocolo rastreador GPS Suntech
  - compatibilidad ST 600R Plaspy
  - rastreo de vehículos Suntech ST 600R
  - rastreo de flotas Suntech
  - protocolo de rastreador Plaspy
  - compatibilidad de dispositivos Plaspy
---

# Suntech - Protocolo ST 600R

Esta página explica, a nivel público, el contexto del protocolo para usar el rastreador GPS Suntech ST 600R con Plaspy. Se centra en cómo se comunica el equipo de forma general, qué funciones habilita el protocolo y cómo Plaspy recibe e interpreta los datos del rastreador para monitoreo de flotas y activos. La información está pensada para ayudar a administradores e integradores a comprender la relación de comunicación entre el ST 600R y Plaspy sin divulgar detalles privados de implementación.

El Suntech ST600R es un rastreador de alto rendimiento con soporte celular multigeneracional y múltiples entradas y salidas para periféricos. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según revisiones de firmware, variantes de hardware y decisiones del fabricante. El dominio del servidor Plaspy es d.plaspy.com. La IP del servidor es 54.85.159.138. El puerto es 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto. Plaspy detecta automáticamente el protocolo del rastreador.

## Visión general del protocolo

A nivel público, el protocolo del ST 600R es el método que usa el equipo para informar ubicación, estado y entradas de periféricos a un servidor remoto como Plaspy. El rastreador utiliza su módem celular para transmitir mensajes a través de la red móvil y el protocolo define el contenido y la temporalidad de los mensajes de forma que el servidor pueda interpretarlos. El protocolo también permite la identificación del dispositivo y soporta funciones operativas como alertas y reporte de E/S.

- Permite informar ubicación y telemetría del ST 600R a Plaspy para que la plataforma muestre posición, velocidad y estado
- Incluye identidad del dispositivo y contexto de sesión para que Plaspy asocie los mensajes con el registro correcto del rastreador
- Transmite el estado de entradas y salidas de sensores y periféricos conectados al ST 600R
- Funciona sobre redes celulares con comportamiento de respaldo entre tecnologías 3G y 2G que provee el dispositivo
- Permite comandos de configuración y gestión remota cuando lo soportan el dispositivo y el firmware del fabricante

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido e identifica automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de la plataforma. La detección está diseñada para funcionar con dispositivos configurados correctamente que reportan al endpoint de Plaspy y usan el transporte soportado.

- El dominio del servidor Plaspy es d.plaspy.com y el servidor también aceptará conexiones a 54.85.159.138
- El puerto usado por todos los dispositivos en Plaspy es 8888, por lo que los equipos deben configurarse para reportar a ese puerto
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la red del operador
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido
- En la mayoría de los casos los usuarios solo deben configurar la dirección de reporte a d.plaspy.com o 54.85.159.138 y el transporte correcto según la capacidad del dispositivo

## Contexto de transporte y conexión

El contexto de conexión explica cómo el ST 600R alcanza a Plaspy a través de la red móvil. El rastreador utiliza su módem celular para abrir una conexión al endpoint de Plaspy y enviar reportes periódicos y eventos. La selección de red y transporte puede afectar latencia, confiabilidad y la forma en que el equipo se recupera de brechas de cobertura.

- Los dispositivos pueden apuntar al endpoint de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138
- El puerto es 8888 y este puerto se comparte para todos los dispositivos que reportan a Plaspy
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte que coincida con el firmware del equipo y el comportamiento del operador
- El respaldo entre tecnologías celulares lo maneja el hardware del dispositivo, por lo que unidades ST 600R con 3G pueden operar en redes 2G cuando sea necesario
- Verifique permisos de red y ajustes de APN con el proveedor celular para asegurar que el dispositivo pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles o los comandos de configuración soportados; verifique la versión de firmware al validar el comportamiento
- Las revisiones de hardware y módulos periféricos opcionales pueden afectar qué E/S y datos de sensores reporta el rastreador
- Algunas implementaciones del fabricante exponen opciones de configuración para transporte TCP versus UDP; configure el transporte según las capacidades del rastreador
- Las diferencias entre redes de los operadores pueden afectar las características de entrega de mensajes y la persistencia de sesión
- Plaspy usa un único puerto para todos los dispositivos soportados lo que simplifica la configuración, pero requiere que el endpoint y el transporte estén configurados correctamente en el rastreador
- Siempre valide la compatibilidad y las funciones soportadas con la documentación y notas de versión de Suntech

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ST 600R ayuda a una implementación exitosa, reportes fiables y una resolución de problemas más eficiente. Conocer el rol del transporte, la identidad del dispositivo y el comportamiento del firmware reduce el tiempo de integración y ayuda a planear casos límite de conectividad.

- Asegura que los dispositivos estén configurados para reportar al endpoint y puerto correctos de Plaspy y que los datos lleguen de forma fiable
- Facilita el diagnóstico de problemas de conectividad al confirmar la selección de transporte y la configuración de APN o del operador
- Ayuda a validar que las entradas y salidas periféricas se reporten como se espera después de actualizaciones de firmware
- Apoya la planificación de respaldos de red y limitaciones de cobertura en entornos operativos
- Mejora el mantenimiento a largo plazo al alinear el firmware y la configuración del dispositivo con las expectativas de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST 600R con Plaspy ofrece una vía sencilla para centralizar ubicación, estado y telemetría de periféricos en una sola plataforma de gestión de flotas. La flexibilidad celular y las opciones de E/S del ST 600R lo hacen adecuado para una amplia gama de casos de uso, y la detección automática de protocolo y el modelo de endpoint compartido de Plaspy reducen la carga de configuración al incorporar muchos dispositivos.

Para saber más sobre Plaspy y los flujos de trabajo con dispositivos compatibles visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con actualizaciones de firmware y del fabricante, por lo que confirme los detalles específicos del protocolo y las notas de firmware más recientes en el sitio de Suntech en http://www.suntechint.com/ antes de desplegar a gran escala.
