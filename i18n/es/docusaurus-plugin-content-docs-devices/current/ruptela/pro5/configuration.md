---
slug: /ruptela/pro5/configuration
id: pro5-configuration
sidebar_label: Configuration
title: Ruptela - Pro5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Ruptela Pro5 con Plaspy, incluyendo ajustes de servidor, transporte y flujo de configuración
keywords:
  - Configuración Ruptela Pro5
  - Configuración Pro5
  - Configuración servidor Pro5
  - Integración Pro5 Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración telemática de flotas
  - Ajustes de servidor Plaspy
  - Provisionamiento dispositivo Ruptela
  - Configuración firmware Pro5
---

# Ruptela - Configuración Pro5

Esta página documenta el contexto público de configuración para usar el Ruptela Pro5 con Plaspy. Reúne los ajustes de servidor compartidos por Plaspy y la guía práctica que puede usar al preparar unidades Pro5 para telemetría de flotas y seguimiento en tiempo real en Plaspy. El contenido se centra en pasos de configuración públicos e independientes del proveedor y en los detalles del endpoint de Plaspy necesarios para el reporte del dispositivo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las herramientas de configuración de Ruptela que utilice. Use esta página como referencia práctica y verifique los detalles específicos del equipo en la documentación oficial de Ruptela cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el Pro5 para reportar posición GNSS y telemetría del vehículo a Plaspy usando el endpoint y puerto compartidos. El objetivo es configurar el transporte y la dirección del servidor, confirmar la conectividad celular y validar que Plaspy reciba mensajes de posición y eventos.

- Indicar el endpoint y transporte de Plaspy para que el Pro5 pueda enviar telemetría
- Configurar el puerto del dispositivo y el modo de transporte según los requisitos de Plaspy
- Validar la conectividad celular y la alimentación del dispositivo para que los mensajes lleguen a Plaspy
- Confirmar el reporte y la visibilidad en la plataforma Plaspy después del registro del dispositivo
- Utilizar herramientas de provisión de Ruptela o métodos por SMS/USB según su flujo de instalación

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el dispositivo Pro5:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Detección automática de protocolo en Plaspy para que la plataforma identifique el protocolo del rastreador cuando lleguen los datos

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador a partir de las conexiones entrantes.

## Requisitos típicos antes de comenzar

- Una unidad Ruptela Pro5 instalada y con alimentación, con las conexiones vehiculares necesarias completadas
- Conectividad celular activa compatible con las capacidades LTE-M del Pro5 y con fallback 2G, y una SIM operativa cuando sea necesario
- Acceso al método o software oficial de configuración de Ruptela para su variante de dispositivo, por ejemplo Ruptela Device Center o las herramientas de provisión del fabricante
- Conocimiento de la versión de firmware del dispositivo y la capacidad para actualizar firmware si es necesario
- Una cuenta en Plaspy o un flujo de provisión para registrar y verificar el dispositivo una vez que empiece a reportar a la plataforma
- Revisiones de instalación y cableado para asegurar que la alimentación, CAN y las entradas/salidas sean estables antes de las pruebas

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el Pro5 envía posiciones GNSS y telemetría del vehículo al endpoint y puerto compartidos de Plaspy. Plaspy ingiere la telemetría y presenta la ubicación, datos CAN, asociaciones de sensores BLE y alertas de eventos para operaciones de flota.

- El rastreador se configura para reportar al endpoint d.plaspy.com o directamente a la IP 54.85.159.138
- Los datos se envían a Plaspy en el puerto 8888 usando UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los mensajes entrantes, por lo que no es necesario seleccionar un protocolo por separado en la plataforma
- Tipos de telemetría comunes: posición GNSS, parámetros del vehículo desde CAN, asociaciones con sensores BLE y eventos del acelerómetro
- Una configuración correcta hace que el dispositivo sea visible en los paneles de Plaspy y habilita el reporte de eventos y el registro histórico de rutas

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Ruptela para su unidad Pro5, como Ruptela Device Center, comandos SMS, herramienta USB o la utilidad de provisión soportada.
2. En los ajustes del servidor introduzca el dominio de Plaspy d.plaspy.com o la IP 54.85.159.138 según su herramienta o política de instalación.
3. Configure el puerto del dispositivo a 8888. Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar 8888 para el reporte del Pro5.
4. Seleccione el protocolo de transporte UDP o TCP si la herramienta o el dispositivo requieren una selección explícita.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los cambios fueron aceptados.
6. Reinicie el dispositivo si la herramienta de Ruptela o el firmware requieren un reinicio para aplicar los ajustes de red.
7. Valide que el Pro5 reporte a Plaspy confirmando que el dispositivo aparece en su cuenta de Plaspy y revisando los primeros mensajes de posición y telemetría.

## Comandos de configuración de ejemplo

Los comandos exactos y la sintaxis para configurar un Pro5 dependen del firmware de Ruptela y del método de configuración elegido (Device Center, SMS, USB o herramienta de provisión). Dado que los comandos varían según firmware y herramienta, esta página no inventa cadenas de comandos. Consulte la documentación de Ruptela Device Center o su guía de provisión para las cadenas de comando exactas o los pasos en la interfaz gráfica necesarios para apuntar el dispositivo a:

- Dominio del servidor d.plaspy.com o IP del servidor 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP

Si usa SMS o una herramienta de estilo línea de comandos proporcionada por Ruptela, siga exactamente los ejemplos del fabricante y conserve cualquier marcador de posición que indiquen esos comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de campo y comandos exactos para la dirección del servidor, el puerto y la selección de transporte; confirme siempre la sintaxis para su versión de firmware.
- Plaspy admite TCP y UDP en el puerto 8888; elija el transporte que mejor se ajuste a sus requisitos de red y fiabilidad y a las capacidades del firmware del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo desde el tráfico entrante.
- Para implementaciones masivas, considere usar Ruptela Device Center o la Ruptela Device Management Platform para el aprovisionamiento centralizado y FOTA, de modo que estandarice ajustes entre unidades.
- Verifique cualquier cadena de configuración basada en SMS o pasos con herramientas USB con la documentación de Ruptela antes de aplicarlos en campo.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela Pro5 con Plaspy proporciona a los operadores ubicación confiable del vehículo y telemetría avanzada en una sola plataforma. El hardware Pro5 está diseñado para vehículos pesados y, al apuntarlo al endpoint y puerto de Plaspy, transmite GNSS, CAN, BLE y datos de eventos que Plaspy pone a disposición para monitoreo en vivo, alertas e informes.

Para obtener más información sobre Plaspy y cómo soporta la telemática de flota, visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, comportamiento del firmware y orientación del fabricante, verifique los detalles en el sitio oficial de Ruptela https://ruptela.com/ antes de desplegar en gran escala.
