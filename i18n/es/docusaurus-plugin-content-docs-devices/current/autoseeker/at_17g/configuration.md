---
slug: /autoseeker/at_17g/configuration
id: at_17g-configuration
sidebar_label: Configuration
title: Autoseeker - AT-17G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-17G para Plaspy con ajustes de servidor y orientación práctica
keywords:
  - Configuración Autoseeker AT-17G
  - Configuración del rastreador Autoseeker
  - Configuración AT-17G para Plaspy
  - Configuración de rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración rastreador de activos
  - Rastreador para gestión de flotas
  - Ajustes de servidor AT-17G
  - Configuración GPS Autoseeker
---

# Autoseeker - AT-17G Configuración

Esta página explica el contexto público de configuración para usar el Autoseeker AT-17G, un rastreador GPS 4G para activos, con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, presenta orientación práctica para la puesta en marcha y detalla los pasos típicos que seguirá un instalador o administrador de flotas para poner dispositivos AT-17G en línea en Plaspy. La información aquí complementa de forma práctica el manual del dispositivo y la documentación del servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el AT-17G para comunicarse con Plaspy y consulte la documentación de Autoseeker para detalles específicos de interfaces de configuración o comportamientos del firmware.

## Resumen de la configuración

Configurar el AT-17G para Plaspy consiste principalmente en dirigir el dispositivo hacia el endpoint del servidor de Plaspy y confirmar que el equipo puede transmitir correctamente datos de ubicación y eventos. Como Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, el endpoint del servidor y la selección del transporte son los valores principales que la mayoría de los instaladores deben aplicar en el dispositivo.

- Apunte el AT-17G al endpoint del servidor de Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Seleccione el transporte adecuado (UDP o TCP) en el dispositivo si la opción está disponible.
- Configure el puerto del dispositivo en el puerto que usa Plaspy para que los paquetes entrantes se enruten correctamente.
- Valide la conectividad y el reporte del dispositivo en Plaspy para confirmar la visibilidad y la detección correcta del protocolo.
- Guarde y aplique la configuración en el AT-17G, luego confirme que el dispositivo aparece en los mapas y en las vistas de historial de Plaspy.

## Ajustes del servidor de Plaspy

Al configurar el AT-17G para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos

- Un AT-17G cargado y con alimentación, con la activación inicial del dispositivo y la carga de batería completadas.
- Una tarjeta SIM 4G funcional y servicio celular activo si su despliegue requiere conectividad celular.
- Acceso al método oficial de configuración de Autoseeker para el AT-17G (herramienta web del fabricante, app de configuración o herramienta del distribuidor).
- Conocimientos básicos sobre si el firmware del dispositivo requiere seleccionar UDP o TCP manualmente.
- Una cuenta de Plaspy y acceso a la plataforma para validar el reporte del dispositivo después de la configuración.
- Un entorno de prueba seguro donde pueda alimentar y observar el dispositivo mientras realiza cambios de configuración.

## Cómo se conecta este rastreador a Plaspy

El AT-17G envía sus actualizaciones de posición y la telemetría de eventos al endpoint del servidor de Plaspy para que los responsables de flota y los equipos de seguridad puedan ver la ubicación, las alertas y el historial. El rastreador se configura para reportar al endpoint y al puerto compartidos de Plaspy, y la plataforma detectará el protocolo del rastreador automáticamente cuando lleguen los datos.

- El dispositivo transmite fijaciones GPS y telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a enviar datos.
- Una vez que inicia el reporte, la ubicación, las alertas de movimiento y el estado de la batería se muestran en Plaspy.
- Use los paneles de control y el historial de Plaspy para confirmar que el reporte y el manejo de eventos del AT-17G son correctos.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Autoseeker para el AT-17G según lo documentado por el fabricante.
2. Ubique la sección de servidor o APN/servidor en la herramienta de configuración del dispositivo.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor según su preferencia o los requisitos de la herramienta.
4. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
5. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según las necesidades de la instalación.
6. Aplique o guarde la configuración en el AT-17G usando la herramienta del fabricante.
7. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requieren para aplicar los ajustes.
8. Valide que el dispositivo reporte a Plaspy comprobando actividad del dispositivo, actualizaciones de ubicación y registros de eventos en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o las cadenas SMS para el AT-17G dependen del firmware de Autoseeker y de la interfaz de configuración. Debido a que las herramientas del fabricante y las versiones de firmware varían, consulte la guía de configuración de Autoseeker para comandos específicos del dispositivo. Si utiliza un método por SMS o por terminal proporcionado por Autoseeker, aplique los ajustes de servidor indicados más arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) y conserve cualquier valor de marcador de posición que el fabricante requiera.

Si en la documentación del dispositivo aparecen ejemplos de comandos del fabricante, sígalos de cerca y utilice los datos del servidor de Plaspy en esta página al sustituir valores de servidor, IP y puerto.

## Notas de configuración

- Las diferencias en firmware y en la herramienta de configuración pueden cambiar los nombres exactos de los campos para dirección del servidor, IP, transporte y puerto; siga siempre el manual del AT-17G para los nombres de campo.
- Elegir UDP o TCP puede afectar las características de entrega; Plaspy soporta ambos y detectará el protocolo automáticamente una vez que el dispositivo envíe datos.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe ser coherente y configurar el puerto 8888 en cada unidad.
- Para instalaciones remotas o discretas, confirme que el dispositivo tenga señal celular y carga de batería adecuadas antes del montaje final.
- Consulte las notas de la versión de Autoseeker cuando solucione comportamientos inesperados tras cambios de configuración.

## Por qué usar Plaspy con esta configuración

Usar el AT-17G con Plaspy ofrece un camino sencillo hacia la visibilidad centralizada de ubicaciones, el reporte de eventos y la reproducción del historial para flotas y activos de alto valor. La larga duración de la batería del AT-17G y su montaje resistente lo hacen adecuado para despliegues prolongados, y dirigir la telemetría a Plaspy habilita alertas automatizadas y supervisión operativa en toda su organización.

Para obtener más información sobre Plaspy y cómo integrar rastreadores GPS en una única plataforma de gestión, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, detalles de firmware y la documentación oficial de Autoseeker, verifique la información actual en https://autoseekergps.com/ .
