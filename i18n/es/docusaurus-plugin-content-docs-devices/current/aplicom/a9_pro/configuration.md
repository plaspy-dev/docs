---
slug: /aplicom/a9_pro/configuration
id: a9_pro-configuration
sidebar_label: Configuration
title: Aplicom - A9 PRO Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Aplicom A9 PRO para usarlo con Plaspy; ajustes de servidor compartido, opciones de transporte y flujo de configuración para rastreo de flotas
keywords:
  - Configuración Aplicom A9 PRO
  - Configurar Aplicom A9 PRO
  - Configuración rastreador GPS Aplicom
  - Aplicom A9 PRO en Plaspy
  - Configuración servidor Aplicom A9 PRO
  - Configuración rastreo flotas A9 PRO
  - Guía configuración dispositivo Aplicom
  - Integración A9 PRO Plaspy
  - Configuración telemática Aplicom
  - Instalación Aplicom A9 PRO
---

# Aplicom - Configuración A9 PRO

Esta página recoge el contexto público de configuración para usar el Aplicom A9 PRO con Plaspy. Resume los ajustes de servidor compartido y los pasos generales que integradores e instaladores usan para apuntar el dispositivo a Plaspy para rastreo y telemetría en tiempo real, sin reproducir comandos privados ni valores de configuración protegidos. Úsela como referencia práctica al preparar unidades A9 PRO para la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas Aplicom que utilice, como la herramienta de configuración A-Series, la API REST de ADS o la gestión OTA. Consulte la documentación de Aplicom para detalles específicos del dispositivo cuando sea necesario.

## Visión general de la configuración

Preparar el A9 PRO para funcionar con Plaspy se centra en habilitar comunicaciones celulares y GNSS confiables, apuntar el dispositivo al endpoint de ingestión de Plaspy y confirmar que la unidad aparece y reporta correctamente en la plataforma. Las herramientas del fabricante facilitan aplicar los ajustes de servidor y transporte que Plaspy utiliza para que la telemetría y los datos del bus CAN fluyan hacia los paneles de la plataforma.

- Configure el dispositivo para que envíe telemetría y posiciones a Plaspy usando el endpoint y el puerto compartidos.
- Asegúrese de que el dispositivo tenga una conexión celular válida y el firmware o perfil de configuración actualizado antes del despliegue.
- Use herramientas de Aplicom como la herramienta de configuración A-Series o la API REST de ADS para aplicar los ajustes de servidor y transporte.
- Valide la conectividad y el envío de datos para que el rastreador sea visible y genere flujos de datos en Plaspy.
- Vigile variaciones de firmware o hardware que puedan alterar el flujo de configuración entre distintas instalaciones.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Una unidad A9 PRO alimentada y accesible, con antenas y entradas/salidas conectadas según lo requiera la instalación.
- Conectividad celular activa con un plan de datos adecuado para 4G LTE según lo soporte la variante del dispositivo.
- Acceso a las herramientas de configuración de Aplicom, como la herramienta A-Series o la API REST de ADS, para aplicar los ajustes de red.
- Una cuenta en Plaspy o un punto de integración donde el dispositivo será visible una vez que comience a reportar.
- Conocimiento de la revisión de firmware del dispositivo y de las notas de instalación del proveedor que afecten la configuración.

## Cómo se conecta este rastreador a Plaspy

El Aplicom A9 PRO envía posición GNSS y telemetría a Plaspy al dirigir su flujo de telemetría saliente hacia el endpoint y puerto compartidos de Plaspy. Plaspy recibe las conexiones entrantes por el transporte especificado y determina automáticamente el controlador de protocolo correcto para el dispositivo.

- El dispositivo se configura para reportar a d.plaspy.com o a la dirección IP del servidor equivalente.
- Todos los dispositivos usan el puerto 8888 en el extremo de Plaspy para la ingestión de telemetría.
- El transporte puede seleccionarse como UDP o TCP según la interfaz de configuración; Plaspy soporta ambos en el mismo puerto.
- Una vez que el dispositivo se conecta y transmite datos, Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante.
- Los datos procesados quedan disponibles en Plaspy para seguimiento en tiempo real, alertas por eventos e informes históricos.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Aplicom, ya sea la herramienta A-Series, la API REST de ADS u otro software aprobado por el proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Ajuste el puerto del servidor del dispositivo a 8888 para coincidir con la ingestión de Plaspy.
4. Seleccione la opción de transporte UDP o TCP si el equipo requiere especificar el transporte.
5. Guarde o aplique la configuración usando la herramienta Aplicom y, si procede, envíe los ajustes al dispositivo por OTA o durante una sesión de conexión local.
6. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con actualizaciones de telemetría y posición.

## Notas de configuración

- Las versiones de firmware y las variantes de hardware pueden mostrar menús o nombres de campos distintos; confirme siempre los pasos exactos para su revisión de firmware.
- Use las herramientas recomendadas por el fabricante para aplicar los ajustes de servidor y evitar desajustes de configuración, además de conservar las capacidades de gestión remota.
- La elección entre TCP o UDP puede depender de la preferencia del instalador y de las condiciones de la red; Plaspy admite ambos transportes en el puerto compartido.
- Las variantes de mercado o los modelos regionales del A9 PRO pueden tener bandas celulares o opciones de antena diferentes; verifique esos detalles antes del despliegue.
- Tras la configuración, supervise las primeras sesiones de reporte para confirmar que los eventos del bus CAN y las entradas/salidas se analizan según lo esperado por Plaspy.

## Por qué usar Plaspy con esta configuración

Conectar el Aplicom A9 PRO a Plaspy ofrece una vía directa para incorporar posición GNSS confiable, telemetría del bus CAN y eventos de E/S del dispositivo en una plataforma centralizada de gestión de flotas. Para organizaciones que necesitan visibilidad de vehículos, alertas basadas en eventos y telemetría consolidada, la combinación del hardware Aplicom y la ingestión de Plaspy proporciona un camino práctico hacia el control operativo.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest Aplicom device documentation, firmware notes, and configuration tools consult the official Aplicom site at https://www.aplicom.com/ to verify device specific setup details and best practices.
