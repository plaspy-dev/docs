---
slug: /aplicom/a9_quick/configuration
id: a9_quick-configuration
sidebar_label: Configuration
title: Aplicom - A9 Quick Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Aplicom A9 Quick y conectarlo a la plataforma Plaspy usando ajustes de servidor compartidos y notas prácticas
keywords:
  - Configuración Aplicom A9 Quick
  - Configuración A9 Quick
  - Aplicom A9 Quick Plaspy
  - Configuración de servidor A9 Quick
  - Configuración del rastreador GPS Aplicom
  - Configuración de seguimiento de vehículos Aplicom
  - Gestión de flotas Aplicom
  - Configuración de rastreo A9 Quick
  - Guía Aplicom A9 Quick
  - Configuración de dispositivo Plaspy
---

# Aplicom - Configuración del A9 Quick

Esta página describe el contexto de configuración pública para usar el Aplicom A9 Quick con la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos y en los pasos generales necesarios para conectar el dispositivo, de modo que pueda reportar ubicación y eventos básicos a Plaspy. Las indicaciones a continuación se basan en características públicas del dispositivo y en la configuración estándar del servidor Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo dentro de la plataforma. Los pasos de configuración del fabricante y los detalles exactos pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; confirme siempre los procedimientos específicos con la documentación de Aplicom y con los instaladores certificados.

## Resumen de configuración

El objetivo de la configuración es preparar el A9 Quick para que se comunique de forma fiable con Plaspy, permitiendo que los vehículos y los eventos aparezcan en la plataforma. Este proceso se centra en apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el transporte si es necesario y validar que los datos llegan correctamente a la plataforma.

- Apunte el dispositivo a los ajustes de servidor de Plaspy para que la telemetría se enrute a su cuenta.
- Seleccione el método de transporte soportado por el dispositivo y por Plaspy si la configuración del equipo lo requiere.
- Aplique y guarde la configuración del fabricante y asegúrese de que el equipo tenga conectividad celular estable.
- Valide la conectividad y la visibilidad en Plaspy para confirmar que la unidad aparece y reporta según lo esperado.
- Confirme que cualquier integración con accesorios, como el Aplicom 3PAD u otros periféricos, funciona después de aplicar la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el Aplicom A9 Quick para su uso con el servicio Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos típicos antes de la instalación

- Una unidad A9 Quick alimentada y accesible, lista para configuración e instalación.
- Conectividad celular activa compatible con el dispositivo usando la antena GSM interna.
- Acceso al método de configuración oficial de Aplicom o al software proporcionado por el fabricante o un proveedor autorizado.
- Conocimiento de los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y del puerto 8888 para ingresarlos en la configuración del equipo.
- Un proceso para verificar que la unidad reporte a Plaspy una vez configurada, por ejemplo revisando la lista de dispositivos o la telemetría reciente en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El A9 Quick se configura para enviar su ubicación y datos operativos al endpoint y puerto compartidos de Plaspy, de modo que la unidad sea visible en la plataforma. La detección automática de protocolos de Plaspy facilita la compatibilidad sin configurar nada adicional en la plataforma.

- El dispositivo envía mensajes de posición y estado a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888, según cómo el equipo exponga la opción de transporte.
- Los datos que llegan al endpoint de Plaspy se procesan y se asocian con la cuenta del cliente para su seguimiento y monitoreo.
- Una vez confirmado el reporte, el dispositivo aparece en la interfaz de Plaspy para actualizaciones de posición en tiempo real y supervisión de eventos.

## Flujo de configuración típico

1. Acceda a la herramienta o al método de configuración oficial de Aplicom para el A9 Quick proporcionado por el fabricante o el instalador.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el dispositivo para usar el puerto 8888, que es el puerto compartido de Plaspy para todos los dispositivos soportados.
4. Elija UDP o TCP si el A9 Quick requiere selección de transporte durante la configuración.
5. Guarde o aplique la configuración mediante la herramienta o interfaz de configuración del dispositivo.
6. Valide que el equipo esté reportando a Plaspy comprobando la llegada de telemetría y la presencia del dispositivo en la plataforma.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones disponibles y la terminología de los menús; verifique las notas de Aplicom para la versión de su equipo.
- Las prácticas de instalación pueden variar entre instalaciones con conexión por plug-in y con cableado fijo; asegúrese de que el método de configuración coincida con el estilo de instalación elegido.
- TCP y UDP se comportan de forma diferente en la entrega de mensajes y el manejo del estado; seleccione el transporte que mejor se adapte a los requisitos de la instalación y la fiabilidad de la red.
- Si utiliza accesorios opcionales como el Aplicom 3PAD, confirme que las funciones de reporte del accesorio continúan tras aplicar los ajustes del servidor.
- Mantenga siempre un registro de los cambios de configuración y una lista de verificación para confirmar la visibilidad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A9 Quick con Plaspy ofrece una forma sencilla de añadir seguimiento de vehículos portátil y reportes básicos de conductores a una solución de visibilidad de flotas. La naturaleza plug and play del A9 Quick junto con el enfoque de servidor compartido de Plaspy simplifica el despliegue en activos móviles y en instalaciones temporales.

Para obtener más información sobre Plaspy y su compatibilidad con dispositivos visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento de firmware y los detalles del fabricante, verifique la información en el sitio web de Aplicom https://www.aplicom.com/.
