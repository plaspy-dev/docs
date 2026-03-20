---
slug: /cantrack/g08l/configuration
id: g08l-configuration
sidebar_label: Configuration
title: CanTrack - G08L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador trasero CanTrack G08L con Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración CanTrack G08L
  - Instalación CanTrack G08L
  - Configuración servidor G08L
  - Integración G08L con Plaspy
  - Configuración rastreador GPS CanTrack
  - Instalación rastreador GPS luz trasera
  - Rastreo de flotas G08L
  - Configuración OTA G08L
  - Rastreador de vehículo G08L
  - Configuración rastreador Plaspy
---

# CanTrack - Configuración del G08L

Esta página ofrece el contexto público de configuración para usar el rastreador CanTrack G08L con Plaspy. Describe los ajustes de servidor compartidos que Plaspy requiere, pasos prácticos de preparación y el flujo de trabajo habitual que técnicos e instaladores siguen para apuntar el dispositivo a Plaspy y lograr que la telemetría aparezca en la plataforma. La guía está pensada para usuarios técnicos que preparan el G08L para su integración con una plataforma de flotas como Plaspy.

Plaspy utiliza el mismo endpoint y puerto en todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan datos. Los pasos concretos en el lado del fabricante para el G08L pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página debe usarse como referencia práctica y confirmar los procedimientos específicos con CanTrack o la herramienta de aprovisionamiento que esté utilizando.

## Resumen de configuración

Preparar el G08L para funcionar con Plaspy consiste principalmente en configurar sus parámetros de reporte hacia el backend y verificar la conectividad para que la telemetría de GNSS, movimiento y estado llegue a Plaspy en tiempo real. Una vez que el dispositivo reporta correctamente, Plaspy ingiere los datos y los muestra en mapas en vivo, alertas y paneles de informes.

- Apunte el endpoint de reporte del dispositivo al servidor de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto compartido 8888.
- Elija transporte UDP o TCP en el dispositivo si la configuración solicita una selección; Plaspy soporta ambos.
- Guarde y aplique la configuración, y reinicie el G08L si el procedimiento del fabricante requiere un reinicio para activar los cambios.
- Valide que la telemetría de GNSS y eventos sea visible en Plaspy; la plataforma detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles.
- Use OTA y las herramientas del fabricante para mantener el firmware actualizado y confirmar cualquier paso de aprovisionamiento específico del proveedor.

## Ajustes del servidor de Plaspy

Use los siguientes valores de servidor de Plaspy al configurar los parámetros de reporte del G08L. Estos son los valores públicos que Plaspy utiliza para la ingestión de dispositivos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos habituales

- Confirme que el G08L tenga alimentación adecuada y esté en estado operativo normal (batería interna cargada o alimentación vehicular presente).
- Disponga del método oficial de configuración de CanTrack o la herramienta de aprovisionamiento del proveedor necesaria para cambiar ajustes de servidor y transporte.
- Asegúrese de que haya conectividad celular disponible en la ubicación de la instalación para que el dispositivo alcance d.plaspy.com o 54.85.159.138.
- Obtenga cualquier credencial o detalle de aprovisionamiento requerido por su herramienta del proveedor o script de instalación.
- Verifique la recepción GNSS en una ubicación de prueba para confirmar que el dispositivo puede obtener un fix antes de la instalación final.
- Prepárese para reiniciar el dispositivo si el método de configuración exige un reinicio para aplicar los nuevos ajustes de servidor.

## Cómo se conecta este rastreador a Plaspy

El G08L utiliza su enlace celular para enviar posición GNSS, eventos de movimiento y estado del dispositivo a Plaspy. Los dispositivos configurados para reportar a Plaspy apuntan al endpoint y puerto compartidos para que la telemetría entrante se encamine al sistema de ingestión de Plaspy, donde la plataforma reconoce automáticamente el protocolo del rastreador.

- El dispositivo envía reportes de posición GNSS y marcas de tiempo al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los datos de movimiento y eventos, como alarmas del G-sensor por conducción brusca o detección de choque, se envían junto con la telemetría de posición.
- La información de batería y estado del dispositivo (estado de carga, nivel de batería) se reporta a Plaspy para monitoreo remoto.
- Plaspy ingiere el flujo y aplica detección de protocolo, por lo que no es necesario seleccionar manualmente el protocolo por dispositivo en la plataforma.
- El uso del puerto compartido 8888 simplifica los despliegues con múltiples dispositivos, ya que Plaspy recibe todo el tráfico de los dispositivos en el mismo puerto.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de CanTrack o al software del fabricante para el G08L (interfaz web, herramienta local, SMS o la herramienta de aprovisionamiento del proveedor según corresponda).
2. En los ajustes de servidor, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de reporte en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione el transporte UDP o TCP si la configuración del dispositivo requiere elegir uno.
5. Aplique o guarde la configuración en la herramienta de aprovisionamiento o en la interfaz del dispositivo.
6. Reinicie el G08L si las instrucciones del proveedor lo requieren para activar los nuevos ajustes de reporte.
7. Valide que el dispositivo reporte a Plaspy comprobando la plataforma Plaspy para telemetría entrante y confirmando que el dispositivo aparezca en línea.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para establecer el dominio del servidor, la IP, el puerto y el transporte en el G08L dependen del método de aprovisionamiento de CanTrack y del firmware. Los fabricantes pueden proporcionar una aplicación de configuración, conjunto de comandos por SMS o una herramienta de aprovisionamiento USB/serial. Para la integración con Plaspy, debe configurar el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, seleccionando UDP o TCP si el dispositivo solicita elección de transporte. Consulte la documentación de CanTrack o la herramienta de aprovisionamiento para la sintaxis y el orden precisos de los comandos.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los pasos de aprovisionamiento o los comandos disponibles; siempre verifique la versión de firmware del dispositivo antes de aplicar instrucciones.
- Plaspy admite tanto TCP como UDP; elija el transporte que requiera su herramienta de aprovisionamiento o el entorno de red. Plaspy detectará automáticamente el protocolo utilizado por el rastreador.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos (8888), apuntar múltiples dispositivos a d.plaspy.com o 54.85.159.138 simplifica los despliegues masivos.
- Use actualizaciones de firmware OTA (cuando estén disponibles) para mantener el G08L actualizado; algunos métodos de configuración se añaden o cambian entre versiones de firmware.
- Confíe en la documentación oficial de CanTrack y en las herramientas del proveedor para los comandos de configuración exactos y cualquier salvaguarda específica del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack G08L para reportar a Plaspy ofrece seguimiento continuo y discreto junto con reportes de eventos que se integran directamente en los paneles, alertas y análisis de flota de Plaspy. Para operaciones que requieren instalaciones discretas, detección fiable de eventos por GNSS y movimiento, y visibilidad centralizada, el G08L junto con Plaspy entrega telemetría accionable para monitoreo de rutas, análisis de incidentes y planificación de mantenimiento.

Para saber más sobre Plaspy y cómo ingiere la telemetría de dispositivos, visite https://www.plaspy.com. Para instrucciones específicas de configuración, notas de firmware y recursos de soporte del proveedor para el CanTrack G08L, verifique los detalles en la web del fabricante https://www.cantrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
