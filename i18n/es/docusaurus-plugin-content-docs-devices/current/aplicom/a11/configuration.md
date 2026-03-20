---
slug: /aplicom/a11/configuration
id: a11-configuration
sidebar_label: Configuration
title: Aplicom - A11 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Aplicom A11 para Plaspy con parámetros públicos y un flujo de configuración para visibilidad confiable de su flota
keywords:
  - Configuración Aplicom A11
  - Instalación Aplicom A11
  - Configuración servidor Aplicom A11
  - Integración Aplicom A11 Plaspy
  - Configuración rastreador GPS Aplicom A11
  - Seguimiento de flotas Aplicom A11
  - Rastreador LTE Aplicom A11
  - Telemática Bluetooth Aplicom A11
  - Configuración rastreador Plaspy
  - Configuración dispositivo Plaspy
---

# Aplicom - Configuración del A11

Esta página describe el contexto público de configuración para usar los dispositivos Aplicom A11 con Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos generales necesarios para apuntar un equipo A11 a la plataforma Plaspy, de modo que el dispositivo comience a reportar ubicación y datos. Las indicaciones que siguen usan únicamente parámetros públicos de Plaspy y conceptos generales del fabricante para que pueda preparar la unidad para la integración.

La familia Aplicom A11 incluye unidades telemáticas con LTE y Bluetooth, soporte para actualizaciones OTA y una variedad de opciones de E/S. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que su proveedor le facilite.

## Resumen de la configuración

Esta guía destaca los ajustes públicos clave y un flujo de trabajo general para configurar un Aplicom A11 y que pueda comunicarse con Plaspy. El proceso se centra en aplicar el endpoint y el puerto de Plaspy, seleccionar el protocolo de transporte si es necesario y validar que el dispositivo sea visible en la plataforma.

- Apunte el dispositivo al endpoint de Plaspy para que la telemetría se enrute correctamente.
- Seleccione el método de transporte compatible entre el dispositivo y Plaspy para asegurar la entrega.
- Aplique y guarde la configuración en el equipo mediante el método oficial de Aplicom.
- Verifique la conectividad entre el dispositivo y Plaspy y confirme que el equipo aparece en la vista de gestión.
- Una vez confirmada la conectividad, utilice las funciones OTA y Bluetooth que ofrezca Aplicom para extender la funcionalidad.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos entrantes

Estos valores públicos exactos son los ajustes centrales que Plaspy utiliza para la conectividad de los dispositivos. Plaspy emplea el mismo puerto para todos los equipos compatibles y detecta el protocolo del rastreador de forma automática.

## Requisitos habituales antes de la configuración

- Acceso físico al Aplicom A11 o a la herramienta de instalación que utilice su proveedor para modificar los ajustes del dispositivo.
- Conectividad celular activa apropiada para la unidad A11, por ejemplo una SIM provisionada y datos móviles habilitados si lo requiere su variante.
- Fuente de alimentación o batería cargada y el dispositivo operativo para que pueda establecer conexiones salientes.
- Acceso al software de configuración de Aplicom o al método de configuración suministrado por el proveedor para aplicar los ajustes de servidor y transporte.
- Una cuenta de Plaspy o instrucciones de aprovisionamiento de dispositivos para confirmar que el equipo aparece en la plataforma después de la configuración.
- Conocimiento de la revisión de firmware del dispositivo y de cualquier nota de instalación específica del proveedor que pueda afectar el comportamiento de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Aplicom A11 envía su telemetría y mensajes de estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe el tráfico entrante, detecta el protocolo del equipo y pone los datos del dispositivo a disposición en la plataforma para monitoreo y reportes.

- El dispositivo se configura para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138.
- Todo el reporte se envía al puerto 8888, que Plaspy usa para los dispositivos compatibles.
- El transporte puede ser UDP o TCP, según la configuración del equipo y la elección del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos entrantes a la sesión de dispositivo correcta.
- Una vez que el reporte comienza, la ubicación y los eventos del dispositivo se hacen visibles en Plaspy para el monitoreo operativo.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Aplicom provisto por su instalador o proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los equipos compatibles.
4. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Guarde o aplique la configuración usando la herramienta del dispositivo y permita que el equipo se reconecte.
6. Valide que el dispositivo reporte a Plaspy confirmando su visibilidad en su cuenta y comprobando la telemetría inicial.

## Notas de configuración

- Los Aplicom A11 admiten actualizaciones OTA y variantes con Bluetooth; la disponibilidad de funciones depende del firmware instalado.
- Los menús de comportamiento y configuración pueden variar entre versiones de firmware y revisiones de hardware; siempre registre la versión de firmware durante la puesta en marcha.
- Elegir TCP frente a UDP puede afectar las características de entrega; seleccione el transporte que mejor se ajuste a su instalación y condiciones de red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y realiza la detección de protocolo de forma automática para simplificar la configuración del servidor.
- Si emplea funciones Bluetooth para configuración local o sensores, empareje y verifique esas funciones después de establecer la conectividad con el servidor.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A11 con Plaspy ofrece un camino directo para capturar información de ubicación, estado y eventos en una plataforma centralizada de gestión de flotas. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos reducen la cantidad de cambios específicos por dispositivo, permitiendo un despliegue más rápido a lo largo de una flota de unidades A11.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware e instrucciones de configuración más recientes, verifique siempre la información en el sitio de Aplicom https://www.aplicom.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
