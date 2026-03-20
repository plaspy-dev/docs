---
slug: /flextrack/lommy_power/configuration
id: lommy_power-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Power Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Flextrack Lommy Power con Plaspy, incluyendo ajustes de servidor y pasos de integración
keywords:
  - Configuración Flextrack Lommy Power
  - Instalación Flextrack Lommy Power
  - Integración Lommy Power Plaspy
  - Configuración de servidor Lommy Power
  - Configuración rastreador Flextrack
  - Configuración GPS Lommy Power
  - Configuración rastreador Plaspy
  - Seguimiento de flotas Lommy Power
  - Seguimiento de equipos Lommy Power
  - Guía de instalación Lommy Power
---

# Flextrack - Configuración de Lommy Power

Esta página documenta el contexto público de configuración para usar el rastreador GPS Flextrack Lommy Power con Plaspy. Describe los ajustes compartidos del servidor Plaspy que debe aplicar en el dispositivo o mediante la herramienta del fabricante, y explica los pasos prácticos para poner Lommy Power en línea en Plaspy y obtener ubicación y telemetría en tiempo real. Utilice esta guía junto con la documentación oficial de Lommy Power para asegurar que los pasos específicos del dispositivo coincidan con su firmware e instalación.

Plaspy usa ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la configuración se centra principalmente en apuntar Lommy Power al endpoint y transporte correctos de Plaspy. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de Flextrack, por lo que siempre confirme los comandos y procedimientos específicos con la documentación de Flextrack.

## Resumen de la configuración

Este proceso prepara a Lommy Power para enviar posición GNSS y telemetría a Plaspy, de modo que el dispositivo sea visible en la plataforma y entregue datos operativos para seguimiento, alertas e informes.

- Apuntar el dispositivo al endpoint de ingestión de Plaspy para que la telemetría fluya a su cuenta.
- Seleccionar un transporte compatible y confirmar que el dispositivo use el puerto 8888 de Plaspy.
- Verificar la conectividad celular y que la SIM tenga un plan de datos activo si utiliza LTE o 2G.
- Aplicar o guardar la configuración del fabricante y reiniciar la unidad si se requiere para activar los cambios.
- Confirmar el reporte correcto en Plaspy para que ubicación, ignición, movimiento y horas de funcionamiento aparezcan en la plataforma.

## Ajustes del servidor Plaspy

Al configurar Lommy Power para Plaspy, use estos ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de configurar

- Asegúrese de que la unidad Lommy Power esté instalada y recibiendo alimentación continua dentro del rango soportado de 5 a 40 V.
- Tenga una tarjeta SIM con un plan de datos activo si utiliza conectividad celular LTE o 2G, y confirme la cobertura de red en el sitio de instalación.
- Acceso al método o software oficial de configuración de Flextrack para Lommy Power, como la herramienta de aprovisionamiento del fabricante o la lista de comandos SMS.
- Una cuenta de Plaspy o un método para confirmar la visibilidad del dispositivo en su plataforma Plaspy una vez que el dispositivo reporte.
- Confirme la versión de firmware del dispositivo y cualquier nota del proveedor que afecte campos de configuración o la sintaxis de los comandos.

## Cómo se conecta este rastreador a Plaspy

Lommy Power envía paquetes GNSS y de telemetría a través de celular (LTE/2G) al endpoint de ingestión de Plaspy para que la plataforma muestre mapas en vivo, eventos e informes históricos. El rastreador puede configurarse para usar transporte UDP o TCP y debe dirigirse al servidor y puerto compartidos de Plaspy para el manejo automático del protocolo.

- El dispositivo reporta posiciones GNSS y telemetría a d.plaspy.com en el puerto 8888.
- Plaspy agrega datos de ignición, movimiento y horas de funcionamiento junto con la ubicación para visualización y procesamiento de reglas.
- El transporte de paquetes puede ser UDP o TCP según la configuración del dispositivo; Plaspy detectará el protocolo utilizado.
- Tras la configuración correcta, el dispositivo será visible en Plaspy y comenzará a reportar según su lógica de reporte.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Flextrack o al software para Lommy Power proporcionado por el fabricante.
2. Confirme que la alimentación y la conexión celular estén listas, luego ingrese el endpoint de Plaspy especificando d.plaspy.com o 54.85.159.138.
3. Configure el puerto de destino en 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte durante la configuración.
5. Aplique o guarde la configuración en la herramienta del fabricante o mediante comandos SMS según corresponda.
6. Reinicie el dispositivo Lommy Power si las instrucciones del fabricante indican que es necesario para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando su cuenta Plaspy para la posición inicial y los mensajes de telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar Lommy Power dependen del firmware de Flextrack y de la herramienta de aprovisionamiento que proporcionen. Lommy Power normalmente permite la configuración mediante el software del fabricante o cadenas de comandos SMS; consulte la documentación de Flextrack para el conjunto de comandos preciso para su versión de firmware. Si su instalador utiliza comandos SMS, normalmente enviará cadenas de configuración desde un número autorizado y luego verificará mediante la respuesta del dispositivo.

Si dispone de cadenas de comandos específicas de Flextrack, aplíquelas siguiendo las instrucciones del fabricante en el orden recomendado y mantenga cualquier marcador de posición como [apn] o [apnu] exactamente como se proporcionó. Los marcadores representan valores que debe reemplazar por la configuración o credenciales de su operador celular.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y los campos de configuración disponibles; confirme siempre las notas de la versión de firmware antes de aplicar comandos.
- La configuración por SMS puede estar disponible como alternativa a las herramientas de PC del fabricante; use SMS solo cuando esté documentado para su firmware.
- Elija UDP para menor sobrecarga cuando su red lo soporte, o TCP cuando se requiera un handshake de conexión confiable para su despliegue; Plaspy detectará cualquiera de los dos protocolos.
- Como buena práctica, el instalador debe validar el reporte en Plaspy después de la configuración y conservar un registro de los comandos utilizados para futuras consultas.
- Las variantes de mercado o revisiones de hardware pueden alterar las bandas compatibles o comportamientos por defecto; verifique las marcas de hardware e información de lanzamiento de Flextrack.

## Por qué usar Plaspy con esta configuración

Usar Lommy Power con Plaspy ofrece una solución práctica para el seguimiento continuo de equipos y maquinaria pesada donde se requiere alimentación cableada, hardware robusto y GNSS multiconstelación. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy simplifica la integración, mientras que Plaspy se encarga de la detección de protocolo y la normalización de datos para que la telemetría esté lista para mapas, alertas, geovallas e informes de utilización.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como Lommy Power visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación de configuración del fabricante, verifique los detalles en el sitio oficial de Flextrack https://flextrack.dk. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre confirme las instrucciones vigentes con la documentación de Flextrack.
