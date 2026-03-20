---
slug: /gosafe/g1s/configuration
id: g1s-configuration
sidebar_label: Configuration
title: Gosafe - G1S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Gosafe G1S y conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Gosafe G1S
  - Instalación Gosafe G1S
  - Gosafe G1S Plaspy
  - Configuración rastreador GPS Gosafe
  - Configuración servidor G1S
  - Configuración seguimiento Gosafe
  - Configuración rastreador GPS Plaspy
  - Seguimiento de vehículos G1S
  - Compatibilidad G1S Plaspy
  - Instalación G1S Gosafe
---

# Gosafe - Configuración del G1S

Esta página documenta el contexto público de configuración para usar el rastreador GPS portátil Gosafe G1S con la plataforma Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy y ofrece orientación práctica para preparar el G1S, de modo que reporte la ubicación y sea visible en la plataforma. La descripción del dispositivo indica que el G1S admite baterías CR123 reemplazables o baterías recargables y carga externa, lo cual influye en la planificación de alimentación durante la instalación y el uso a largo plazo.

Plaspy emplea ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del equipo cuando se conecta a la plataforma. Los pasos exactos en el lado del fabricante para configurar el G1S pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con los recursos oficiales de Gosafe.

## Resumen de la configuración

Este proceso prepara el G1S para comunicarse de forma fiable con Plaspy, verifica la conectividad y confirma que el dispositivo esté visible y reporte según lo esperado en la plataforma.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy usado para todos los dispositivos compatibles.
- Seleccione el protocolo de transporte en el rastreador (UDP o TCP) si el equipo solicita elegir.
- Valide la conectividad de red y la disponibilidad de energía para asegurar reportes constantes.
- Guarde y aplique los ajustes del fabricante, luego confirme que el dispositivo aparece en Plaspy.
- Monitoree los reportes iniciales para verificar que Plaspy detecte y procese correctamente el protocolo del rastreador.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP según la configuración del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son el endpoint compartido que Plaspy provee para todos los rastreadores compatibles. Use el dominio d.plaspy.com o la IP 54.85.159.138 al ingresar los detalles del servidor durante la configuración del dispositivo y establezca el puerto en 8888.

## Requisitos típicos antes de la instalación

- Asegúrese de que el G1S tenga una fuente de energía adecuada instalada o esté cargado según las recomendaciones del fabricante.
- Tener acceso al método oficial de configuración de Gosafe o al software que se utiliza para este modelo.
- Prepare los identificadores del dispositivo o números de serie que requiera su flujo de trabajo de flota o la cuenta de Plaspy.
- Confirme que el rastreador cuenta con el método de conectividad requerido por Gosafe para el reporte de datos.
- Esté listo para elegir entre UDP o TCP si el firmware del dispositivo solicita seleccionar un tipo de transporte.

## Cómo se conecta este rastreador a Plaspy

El G1S se configura para enviar sus reportes al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda detectar y analizar automáticamente el protocolo del rastreador. Una vez configurado correctamente, los reportes del dispositivo serán visibles en la plataforma para monitoreo operativo y gestión de eventos.

- El rastreador envía datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP según lo requiera el firmware o el instalador.
- Plaspy inspecciona las conexiones entrantes y detecta automáticamente el protocolo del rastreador.
- Tras la conexión exitosa, los reportes de ubicación y estado aparecen en Plaspy para monitoreo e informes.
- Los reportes de prueba iniciales confirman el correcto parseo y la visibilidad en la plataforma.

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial del Gosafe G1S o a la herramienta del proveedor para este modelo.
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o alternativamente 54.85.159.138 como destino.
3. Establezca el puerto de destino en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Si el dispositivo solicita seleccionar transporte, elija UDP o TCP según la preferencia del instalador o la guía del firmware.
5. Aplique o guarde la configuración en la herramienta Gosafe o mediante la interfaz del dispositivo.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para aplicar cambios.
7. Valide que el dispositivo está reportando a Plaspy y que la plataforma ha detectado automáticamente el protocolo del rastreador.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exactos para configurar el Gosafe G1S dependen de la herramienta de configuración del fabricante, el firmware o la interfaz del servicio. Dado que los métodos de configuración varían, consulte el manual de configuración oficial de Gosafe o la herramienta del proveedor para comandos precisos y ejemplos. Si utiliza una interfaz por comandos o SMS proporcionada por el fabricante, consulte la documentación de Gosafe para el formato correcto de los comandos y los marcadores de posición.

## Notas de configuración

- Las variaciones de firmware y las revisiones regionales de hardware pueden cambiar cómo se aplican los ajustes; siempre verifique la versión de firmware del dispositivo antes de seguir los pasos.
- Elegir TCP frente a UDP puede afectar las características de entrega; en caso de duda, siga la recomendación del fabricante o del instalador y recuerde que Plaspy detectará el protocolo automáticamente.
- Las opciones de alimentación del G1S permiten una planificación de instalación flexible; asegúrese de que las baterías reemplazables o recargables cumplan con sus intervalos de reporte.
- Use las herramientas oficiales de configuración de Gosafe cuando sea posible para evitar errores de sintaxis y asegurarse de que la configuración se aplique correctamente.
- Mantenga un registro de los identificadores configurados para relacionar los dispositivos con las entradas en Plaspy y facilitar la incorporación.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G1S con Plaspy ofrece un enfoque sencillo para integrar rastreadores portátiles en una plataforma de monitoreo unificada. El servidor compartido de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos y reducen la necesidad de gestionar endpoints específicos por dispositivo, permitiéndole centrarse en la visibilidad, el monitoreo de eventos y las operaciones.

Learn more about how Plaspy supports tracker integration at https://www.plaspy.com and verify the latest device specific setup details, firmware behavior, and manufacturer guidance at the official Gosafe site https://gosafesystem.com/.
