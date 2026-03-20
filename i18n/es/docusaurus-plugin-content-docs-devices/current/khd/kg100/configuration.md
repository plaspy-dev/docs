---
slug: /khd/kg100/configuration
id: kg100-configuration
sidebar_label: Configuration
title: KHD - KG100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador KHD KG100 a Plaspy con detalles prácticos de servidor y flujo de trabajo
keywords:
  - Configuración KHD KG100
  - Configuración servidor KG100
  - Configurar KHD KG100 para Plaspy
  - Configuración software de rastreo KG100
  - Configuración rastreador GPS KHD
  - Integración plataforma KG100
  - Rastreo vehicular KG100
  - Configuración GPRS KG100
  - Configuración rastreador Plaspy
  - Implementación KHD KG100
---

# KHD - Configuración del KG100

Esta página explica el contexto público de configuración para usar el rastreador KHD KG100 con Plaspy. Resume los ajustes públicos del servidor de Plaspy, detalla los pasos prácticos para apuntar el dispositivo a la plataforma y describe los requisitos comunes y las comprobaciones que puede realizar tras la configuración. La orientación aquí se centra en los elementos generales, independientes del fabricante, que Plaspy requiere para la conectividad.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para preparar el KG100 para Plaspy y consulte la documentación oficial de KHD o las herramientas del instalador para comandos y menús específicos del modelo.

## Resumen de la configuración

Preparar el KG100 para Plaspy significa configurar el dispositivo para que reporte al endpoint compartido del servidor de Plaspy y validar que pueda comunicarse de forma fiable a través de la red móvil. El proceso suele realizarse mediante los métodos de configuración del fabricante, como software de escritorio, una app para smartphone o comandos SMS, según el dispositivo y el firmware.

- Configure el KG100 para enviar datos al endpoint y puerto del servidor de Plaspy.
- Verifique que el rastreador tenga conectividad móvil adecuada y que los ajustes APN, si son necesarios, estén correctos.
- Seleccione la opción de transporte adecuada si el dispositivo requiere elegir UDP o TCP.
- Guarde y aplique los ajustes en el dispositivo y reinícielo si el firmware o el dispositivo lo requieren.
- Valide que el dispositivo sea visible y esté reportando activamente en Plaspy.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor al configurar el KG100 para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: se admite UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos configurados para Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo correcto una vez que el dispositivo comience a enviar datos al servicio.

## Requisitos típicos antes de la configuración

- Una unidad KG100 con alimentación y funcional, con indicadores visibles según el manual del fabricante.
- Una tarjeta SIM válida y servicio de datos móvil activo si se usa comunicación GPRS/GSM compatible con el KG100.
- Datos del APN y del operador listos para ingresarse si el dispositivo requiere configurar el APN manualmente.
- Acceso al método oficial de configuración de KHD, como software de PC, app móvil o el conjunto de comandos SMS.
- Información básica del dispositivo como IMEI o ID de dispositivo que Plaspy usa para la identificación.
- Un plan claro para las pruebas, por ejemplo un vehículo o un área de banco de pruebas con cobertura celular.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el KG100 envía mensajes de posición y estado a través de la red móvil al endpoint y puerto compartido de Plaspy. Plaspy recibe los datos entrantes, identifica automáticamente el protocolo del rastreador y muestra el dispositivo en la plataforma para monitoreo e informes.

- El rastreador envía mensajes de posición y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP en el KG100 si el dispositivo requiere la selección de transporte.
- Plaspy detecta el protocolo y asigna los datos entrantes al registro de dispositivo correcto.
- Una vez que los datos llegan a Plaspy, el dispositivo queda visible para seguimiento en tiempo real y reproducción de historial.
- Los eventos y alertas configurados en Plaspy se activarán a partir de los mensajes entrantes del dispositivo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del KHD KG100, como el software de PC, la app para smartphone o el conjunto de comandos SMS del dispositivo.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, tal como requiere Plaspy.
4. Elija UDP o TCP si el dispositivo solicita la selección de transporte y guarde esa opción.
5. Aplique o guarde la configuración en el KG100 usando la herramienta o el comando del fabricante.
6. Reinicie el dispositivo si el firmware o las instrucciones del instalador indican que es necesario para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece y envía datos a la plataforma.

## Comandos de ejemplo para la configuración

El KG100 puede configurarse usando los métodos proporcionados por el fabricante, que pueden incluir software de configuración para PC, una app móvil o comandos SMS. La sintaxis exacta de los comandos y el procedimiento varían según el firmware y las herramientas, así que siga las instrucciones oficiales de KHD para la revisión de su dispositivo. Si usa configuración por SMS, la documentación del fabricante proporcionará las plantillas de comando requeridas y los campos de marcador de posición a completar, como las credenciales del APN.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar menús disponibles y la sintaxis de los comandos; confirme siempre el método para su unidad KG100 específica.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy admite ambos transportes.
- Si usa GPRS, asegúrese de ingresar correctamente los ajustes APN en la configuración del dispositivo según su operador móvil.
- La configuración por SMS puede ser útil para ajustes en campo, pero consulte la documentación de KHD para los formatos exactos de los comandos SMS.
- Plaspy utiliza un único puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que debe centrarse en asegurar que el dispositivo pueda alcanzar el endpoint d.plaspy.com.

## Por qué usar Plaspy con esta configuración

Usar el KHD KG100 con Plaspy ofrece una manera sencilla de centralizar la ubicación y el estado de los vehículos en una plataforma para monitoreo, reproducción de rutas y gestión de eventos. Con el KG100 reportando a Plaspy, los operadores de flota obtienen visibilidad sobre la actividad del dispositivo y pueden emplear las herramientas de Plaspy para supervisión operativa e informes.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo y el comportamiento del firmware con el fabricante en http://www.khd.hk, ya que los pasos de configuración y la sintaxis de los comandos pueden cambiar con el tiempo.
