---
slug: /appello/5p/configuration
id: 5p-configuration
sidebar_label: Configuration
title: Appello - 5P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Appello 5P a Plaspy con ajustes de servidor compartidos y pasos comunes
keywords:
  - configuración Appello 5P
  - instalación Appello 5P
  - rastreador GPS Appello Plaspy
  - configuración de servidor Appello 5P
  - configuración de software de seguimiento Appello 5P
  - configuración de plataforma GPS Appello 5P
  - compatibilidad rastreador Appello con Plaspy
  - guía de integración Appello 5P
  - configuración rastreador Appello
  - configuración GPRS Appello 5P
---

# Appello - Configuración 5P

Esta página describe el contexto público de configuración para usar el rastreador GPS Appello 5P con Plaspy. Reúne los ajustes del servidor Plaspy que necesitará y describe los pasos generales para preparar el dispositivo y que pueda comunicarse con Plaspy. Use esta guía para saber qué información introducir en el dispositivo o en las herramientas del fabricante y qué verificar una vez que el rastreador esté operativo en la red.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Appello 5P admite configuración por los métodos del fabricante y los ejemplos públicos han incluido flujos por SMS o software del proveedor para establecer APN, destino del servidor y comportamiento de reporte. Esta página se centra en aplicar los valores públicos de conexión de Plaspy y validar la visibilidad del equipo en la plataforma.

## Resumen de la configuración

Configurar el Appello 5P para Plaspy implica dirigir el rastreador a reportar al endpoint público del servidor de Plaspy y verificar que el dispositivo pueda establecer una sesión GPRS y transmitir datos de posición y estado. El objetivo es asegurar un flujo de datos fiable para que Plaspy muestre actualizaciones de ubicación y eventos del dispositivo en la plataforma.

- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos se envíen al destino correcto.
- Configure el transporte y el puerto del dispositivo para que pueda abrir una sesión con Plaspy en la red.
- Introduzca en el rastreador los ajustes de red necesarios mediante el método de configuración oficial del fabricante.
- Valide la conectividad y el reporte desde el dispositivo hacia Plaspy para que las ubicaciones y eventos aparezcan en la plataforma.
- Utilice las herramientas del fabricante o los flujos SMS soportados para aplicar los ajustes cuando estén disponibles.

## Ajustes del servidor Plaspy

- El dominio del servidor Plaspy para conexiones de dispositivos es d.plaspy.com.
- La IP alternativa del servidor Plaspy es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para conexiones de dispositivos.
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888 según las opciones del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al servidor.

## Requisitos típicos antes de la configuración

- Un Appello 5P cargado y operativo con acceso del fabricante para la configuración.
- Una SIM compatible con 2G provisionada para datos y SMS según lo requiera su red móvil local.
- Acceso al método de configuración del fabricante, como el software del proveedor o el flujo de configuración por SMS documentado.
- Conocimiento del APN de su operador si el dispositivo necesita una conexión de datos para alcanzar Plaspy.
- Detalles del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) y la confirmación de que la red permite conexiones salientes a ese puerto.
- Una cuenta u organización en Plaspy para ver y validar el dispositivo una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Appello 5P envía datos de ubicación y estado a través de la red celular de datos hacia Plaspy. El rastreador se ajusta para reportar al endpoint y puerto compartido de Plaspy, de modo que la plataforma pueda ingerir y mostrar la telemetría sin cambios de puerto por dispositivo.

- El rastreador se configura para reportar a d.plaspy.com o alternativamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP en el puerto 8888 según la selección del dispositivo y las condiciones de la red.
- Plaspy recibe la conexión entrante e identifica automáticamente el protocolo del dispositivo para parsear la telemetría.
- Una vez que los datos llegan a Plaspy, el dispositivo se vuelve visible en la plataforma para monitoreo y reporte de eventos.
- Validaciones periódicas aseguran que el rastreador siga siendo accesible y reporte según lo esperado.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software del Appello 5P.
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP alternativa 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP como transporte si el rastreador solicita elegir el tipo de transporte.
5. Guarde o aplique la configuración mediante la herramienta del fabricante o el flujo SMS soportado.
6. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta u organización de Plaspy.

Nota: Los flujos provistos por el fabricante a veces incluyen configuración vía SMS o utilidades de vendor que permiten ajustar APN, destino del servidor e intervalos de reporte. Utilice esos métodos oficiales en lugar de procedimientos no documentados.

## Notas de configuración

- Las revisiones de firmware y hardware pueden afectar los pasos exactos de configuración y las etiquetas de los menús; consulte la herramienta del fabricante para su versión de dispositivo.
- Algunos instaladores prefieren usar TCP para entrega fiable mientras que otros usan UDP para menor overhead; elija el transporte que mejor se adapte a su red y necesidades de monitoreo.
- La configuración por SMS es común en dispositivos como el Appello 5P, pero evite enviar cadenas de comandos crudas desde fuentes de terceros; utilice documentación o herramientas oficiales.
- Las variantes de mercado y diferencias regionales de firmware pueden cambiar las opciones disponibles o el comportamiento por defecto; verifique los ajustes en el dispositivo real antes de desplegar en gran escala.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando este se conecte al servidor.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Appello 5P ofrece una forma directa de centralizar la visibilidad de ubicación y el monitoreo operativo. Al dirigir el rastreador al endpoint compartido de Plaspy y al puerto estándar, administradores de flotas y activos pueden consolidar la telemetría de múltiples dispositivos y confiar en Plaspy para parsear automáticamente las variaciones de protocolo.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos a escala, visite https://www.plaspy.com. Para pasos específicos de configuración del dispositivo, detalles de firmware y la guía más reciente del fabricante para el Appello 5P consulte el sitio oficial del fabricante en http://www.cnjeo.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
