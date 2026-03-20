---
slug: /aquila/bharat_101/configuration
id: bharat_101-configuration
sidebar_label: Configuration
title: Aquila - BHARAT 101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar Aquila BHARAT 101 con Plaspy mediante ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Aquila BHARAT 101
  - Configuración BHARAT 101 Plaspy
  - Configuración de rastreador Aquila
  - Configuración de servidor BHARAT 101
  - Configuración rastreador GPS BHARAT 101
  - Rastreador de vehículos Aquila Plaspy
  - Guía de configuración BHARAT 101
  - Configuración rastreador AIS140 Aquila
  - Configuración seguimiento flota BHARAT 101
  - Configuración plataforma GPS Aquila
---

# Aquila - Configuración del BHARAT 101

Esta página ofrece el contexto público de configuración para usar el Aquila BHARAT 101 con Plaspy. Reúne los ajustes prácticos orientados a la plataforma que deberá aplicar para dirigir el dispositivo hacia Plaspy, describe el flujo típico para establecer esos parámetros y señala los requisitos previos más comunes que conviene confirmar antes de la integración. La orientación aquí se centra en los ajustes de servidor compartido y en cómo se espera que el rastreador informe a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartido entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante para el BHARAT 101 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que use su instalador. Siempre combine los ajustes de servidor que aparecen abajo con las herramientas del fabricante o los procedimientos del instalador para el BHARAT 101.

## Visión general de la configuración

El objetivo del proceso de configuración es preparar el BHARAT 101 para comunicarse de forma fiable con Plaspy, validar la conectividad y permitir que el dispositivo aparezca y envíe datos correctamente en la plataforma. Usando el endpoint y el puerto indicados más abajo, el rastreador enviará su ubicación y eventos a Plaspy, donde la detección del protocolo es automática.

- Direccione el BHARAT 101 hacia Plaspy usando el dominio del servidor o la IP del servidor y el puerto compartido de Plaspy
- Seleccione el modo de transporte que requiera la herramienta de configuración del dispositivo, UDP o TCP en el puerto de Plaspy
- Guarde y aplique los ajustes con el método oficial de configuración de Aquila o con el software del instalador
- Reinicie la unidad si la herramienta del dispositivo lo indica para empezar a reportar al endpoint de Plaspy
- Verifique que el dispositivo aparece y reporta en Plaspy tras la configuración

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Dispositivo con alimentación y accesible para la configuración o la instalación
- SIM activa instalada si se utilizará conectividad celular compatible con el BHARAT 101
- Acceso al método de configuración oficial de Aquila o al software de configuración suministrado por el proveedor
- Información de firmware actualizada y conocimiento de la revisión de hardware
- Plan de datos y cobertura de red para la SIM que se vaya a usar
- Acceso del instalador para probar el dispositivo en el vehículo y confirmar las conexiones físicas

## Cómo se conecta este rastreador a Plaspy

El BHARAT 101 se configura para reportar ubicación, movimiento y eventos del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda mostrar y procesar la telemetría entrante. Usar el dominio o la IP con el puerto común asegura que Plaspy reciba los datos y aplique la detección automática del protocolo para su análisis.

- Los reportes del dispositivo se dirigen a d.plaspy.com o a 54.85.159.138
- Las comunicaciones utilizan el puerto 8888 para todos los dispositivos compatibles en Plaspy
- El transporte puede configurarse como UDP o TCP según la herramienta de configuración o la opción de firmware
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma
- Una vez que el equipo está reportando, Plaspy procesará las actualizaciones de posición y los mensajes de evento para monitoreo operativo

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Aquila o al software proporcionado para el BHARAT 101. Esto puede ser una herramienta para PC, una app móvil o una interfaz de instalador.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo solicite la herramienta.
3. Establezca el valor del puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los rastreadores soportados.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un transporte durante la configuración.
5. Aplique o guarde la configuración en la herramienta del proveedor para que el rastreador almacene los nuevos ajustes de servidor.
6. Reinicie o haga un ciclo de alimentación del BHARAT 101 si la herramienta de configuración o la documentación del dispositivo lo recomienda.
7. Valide que el dispositivo está reportando a Plaspy comprobando la llegada de datos a la plataforma después del reinicio.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o las cadenas SMS para el BHARAT 101 dependen de la herramienta de configuración de Aquila y de la versión de firmware; esos métodos proporcionados por el fabricante pueden variar. Para la integración con Plaspy deberá apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 y elegir UDP o TCP como transporte si se lo solicita. Consulte la documentación de configuración de Aquila o a su instalador para la sintaxis precisa de comandos o las acciones de la herramienta necesarias para escribir esos ajustes en el dispositivo.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware del BHARAT 101 pueden mostrar menús de configuración o sintaxis de comandos distintas; confirme los pasos exactos con la documentación de Aquila.
- TCP y UDP se comportan de forma diferente en redes celulares; elija el transporte que coincida con la documentación del dispositivo y con las consideraciones de fiabilidad de la red.
- Plaspy utiliza el mismo puerto para todos los dispositivos y ofrece detección automática de protocolo, por lo que solo necesita configurar el dominio o la IP y el puerto en el dispositivo.
- Conserve una copia de la configuración original del dispositivo antes de realizar cambios para poder restaurarla si es necesario.
- Confíe en la herramienta de configuración del fabricante para los comandos exactos y cualquier opción específica del dispositivo, como habilitar canales de datos adicionales o el reenvío de puertos serie

## Por qué usar Plaspy con esta configuración

Usar el Aquila BHARAT 101 con Plaspy combina la robustez y el cumplimiento a nivel de dispositivo de un rastreador certificado AIS140 con una plataforma que acepta un endpoint y puerto compartidos para integraciones sencillas. Esta combinación es útil para organizaciones que requieren visibilidad de ubicación persistente, monitoreo de eventos y supervisión centralizada de una flota mixta mediante un punto de ingesta unificado.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para verificar la información de configuración específica del dispositivo y el comportamiento del firmware consulte el sitio del fabricante https://www.itriangle.in/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que confirme los detalles actuales con la documentación de Aquila al planificar el despliegue.
