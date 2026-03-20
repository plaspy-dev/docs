---
slug: /autoseeker/at_2/configuration
id: at_2-configuration
sidebar_label: Configuration
title: Autoseeker - AT-2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Autoseeker AT-2 con Plaspy, con ajustes de servidor, opciones de transporte y flujo de trabajo práctico
keywords:
  - Configuración Autoseeker AT-2
  - Instalación Autoseeker AT-2
  - Configuración AT-2 Plaspy
  - Configuración rastreador GPS AT-2
  - Configuración GPS Autoseeker
  - Configuración servidor seguimiento AT-2
  - Configuración dispositivo Plaspy
  - Instalación rastreador de activos portátil
  - Configuración GPS seguridad personal
  - Integración plataforma AT-2
---

# Autoseeker - Configuración del AT-2

Esta página describe el contexto público de configuración para usar el Autoseeker AT-2 con Plaspy. Resume los ajustes del servidor de Plaspy y los pasos prácticos que puede seguir para apuntar un AT-2 a Plaspy para el envío de ubicación, telemetría y alarmas. El contenido se basa en la descripción del producto AT-2 y se centra en los detalles públicos de integración necesarios para conectar el dispositivo a Plaspy.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se comunica con la plataforma. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con los materiales oficiales de Autoseeker para las instrucciones más actualizadas y específicas del dispositivo.

## Resumen de la configuración

Este procedimiento prepara una unidad AT-2 para comunicarse con Plaspy, valida la conectividad y permite que el dispositivo aparezca como fuente de datos activa en la plataforma. El objetivo principal es configurar el rastreador para que reporte al endpoint compartido de Plaspy y verificar que los mensajes de posición, alarma y estado lleguen correctamente.

- Configure el rastreador para usar el endpoint y el puerto del servidor de Plaspy para que las cargas de datos lleguen a la plataforma.
- Elija el modo de transporte (UDP o TCP) si el rastreador requiere una selección, alineando la configuración del dispositivo con los transportes que soporta Plaspy.
- Guarde y aplique la configuración en el AT-2 y reinicie el equipo si el dispositivo o la herramienta lo requieren.
- Valide la conectividad confirmando que el AT-2 envía ubicación, telemetría y eventos de alarma a Plaspy.
- Use las herramientas oficiales de configuración de Autoseeker o las interfaces de firmware para hacer cambios y mantenga un registro de los ajustes para facilitar la resolución de problemas.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888 depending on device selection  
- Plaspy behavior: the platform automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

Estos valores son los parámetros públicos del endpoint de Plaspy para conectar dispositivos como el AT-2 a la plataforma.

## Requisitos previos típicos

- Asegúrese de que el AT-2 tenga la batería cargada y esté encendido para la configuración y las pruebas.
- Confirme que el dispositivo tenga conexión celular activa y una Micro SIM válida según lo requiera el hardware del AT-2.
- Obtenga acceso al método o software de configuración oficial de Autoseeker provisto por el distribuidor o vendedor.
- Tenga acceso a una cuenta de Plaspy y un espacio en su workspace de Plaspy para verificar que el dispositivo esté reportando.
- Esté preparado para reiniciar el dispositivo tras aplicar los ajustes si el firmware necesita reiniciarse para activar los nuevos parámetros del servidor.

## Cómo se conecta este rastreador a Plaspy

Al configurar el reporte hacia Plaspy, el AT-2 envía correcciones de posición, actualizaciones de estado y eventos de alarma por la red celular al endpoint y puerto compartido de Plaspy. Plaspy recibe los mensajes del dispositivo y los mapea en la plataforma para que los usuarios puedan ver la ubicación en tiempo real, las alarmas y la telemetría del dispositivo.

- El AT-2 se configura para enviar datos de posición y telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ajustarse a UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta el protocolo de forma automática.
- Alarmas como SOS, manipulación, desplazamiento y batería baja se reenvían a Plaspy para alertas e informes.
- Plaspy consolida los mensajes entrantes para que el rastreador sea visible en los paneles de monitoreo y las herramientas de reporte.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Autoseeker o al software para el AT-2 (use la herramienta del proveedor, la interfaz web o la interfaz de configuración documentada).
2. En los ajustes de servidor del dispositivo, ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).
4. Seleccione el protocolo de transporte (UDP o TCP) si el AT-2 requiere una selección explícita.
5. Guarde o aplique la configuración en la herramienta del fabricante para que los ajustes se escriban en el dispositivo.
6. Reinicie el AT-2 si el dispositivo o el firmware requieren un reinicio para activar los nuevos ajustes del servidor.
7. Valide la conectividad confirmando que el dispositivo envía posición y eventos a Plaspy y aparece en su espacio de trabajo de Plaspy.

## Ejemplo de comandos de configuración

El fabricante del AT-2 puede proporcionar comandos específicos de configuración o una aplicación/herramienta web para actualizar los ajustes de servidor y transporte. Los comandos exactos, si existen, varían según el firmware y las herramientas del proveedor. Dado que la sintaxis y los métodos específicos del modelo los controla Autoseeker, consulte la guía de configuración oficial de Autoseeker o la herramienta suministrada por el vendedor para el formato preciso de comando necesario para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si dispone de ejemplos de comandos proporcionados por el fabricante o de la sintaxis SMS/CLI de Autoseeker, aplíquelos en el orden recomendado por el proveedor y conserve cualquier marcador de posición que indique la herramienta. Verifique siempre el efecto de los comandos comprobando la conectividad del dispositivo en Plaspy tras aplicar los cambios.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y la ubicación de los menús; confirme siempre que las instrucciones coincidan con la versión de firmware de su dispositivo.
- La elección entre TCP y UDP puede afectar el comportamiento de entrega de mensajes y las características de retransmisión; seleccione el transporte recomendado para su implementación o el que sea compatible con Autoseeker.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del dispositivo, así que enfoque su configuración en el host del servidor y la selección del transporte correctos en el rastreador.
- Mantenga una copia de cualquier perfil de configuración o comandos que aplique para poder reproducir o solucionar la configuración posteriormente.
- Consulte la documentación del fabricante para comportamientos específicos del dispositivo, como intervalos de reporte en modo ahorro de energía y formatos de mensajes de alarma.

## Por qué usar Plaspy con esta configuración

Integrar el Autoseeker AT-2 con Plaspy ofrece una forma sencilla de incorporar seguimiento de activos personales y portátiles de larga duración a una plataforma de monitoreo centralizada. Las organizaciones que necesitan visibilidad, consolidación de alarmas e informes sencillos para casos de seguridad y anti-robo encontrarán útil el conjunto de telemetría y alarmas del AT-2 cuando se transmita a Plaspy para seguimiento en vivo y flujos de trabajo de alertas.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración específica del dispositivo Autoseeker, notas de firmware y herramientas de configuración verifique la documentación del fabricante en https://autoseekergps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
