---
slug: /lk_gps/lk980_4g/configuration
id: lk980_4g-configuration
sidebar_label: Configuration
title: LK-GPS - LK980-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK-GPS LK980-4G con Plaspy, incluyendo ajustes de servidor, opciones de transporte y flujo de configuración
keywords:
  - Configuración LK GPS LK980 4G
  - Configuración LK980 4G
  - Configuración servidor LK GPS
  - Configuración LK980 4G Plaspy
  - Configuración rastreador Plaspy
  - Integración Plaspy LK GPS
  - Configuración rastreador GPS LK980 4G
  - Configuración rastreador vehicular LK GPS
  - Configuración SMS LK980 4G
  - Consideraciones firmware LK980 4G
---

# LK-GPS - LK980-4G Configuración

Esta página documenta el contexto público de configuración para usar el rastreador LK-GPS LK980-4G con la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos que Plaspy requiere, los pasos prácticos en el lado del fabricante y qué validar para que su dispositivo aparezca y reporte correctamente en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica y verifique cualquier paso específico del dispositivo con la documentación de LK-GPS o con su instalador.

## Resumen de configuración

Configurar el LK980-4G para Plaspy prepara la unidad para enviar ubicación, telemetría y eventos de alarma a la plataforma de forma confiable. El objetivo es apuntar el dispositivo a los servidores de Plaspy, seleccionar un transporte apropiado y confirmar la comunicación para que el rastreador quede visible y manejable en Plaspy.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así las ubicaciones y eventos se reenvíen a la plataforma.
- Elija el método de transporte que soporte el equipo y concórdelo con las opciones de Plaspy en el rastreador.
- Establezca y guarde el host y puerto del servidor para que la unidad pueda establecer conexión.
- Valide la comunicación desde el dispositivo hacia Plaspy y confirme que la unidad aparece en su cuenta o inventario de Plaspy.
- Pruebe las alarmas y la telemetría básica para asegurarse de que los eventos se reciban e interpreten correctamente.

## Ajustes de servidor de Plaspy

- dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- puerto: 8888
- transporte: UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Una unidad LK980-4G instalada y alimentada, con el cableado vehicular completado según la guía de instalación del fabricante.
- Conectividad celular activa en el dispositivo, incluyendo una tarjeta SIM compatible provisionada para datos y SMS si va a usar configuración por SMS.
- Acceso al método de configuración de LK-GPS que vaya a usar, como la app oficial, la interfaz de comandos por SMS o la herramienta del proveedor.
- El IMEI del rastreador o el identificador del dispositivo disponible para registrar e identificar la unidad en Plaspy.
- Una cuenta de Plaspy o acceso administrativo a la plataforma Plaspy para agregar y verificar el dispositivo una vez que empiece a reportar.
- Conocimiento de cualquier versión de firmware o personalización del proveedor que pueda afectar comandos de configuración o la ubicación de menús.

## Cómo se conecta este rastreador a Plaspy

El LK980-4G envía actualizaciones de ubicación, telemetría y eventos de alarma a través de la red celular al endpoint y puerto del servidor de Plaspy. Una vez configurado para reportar a Plaspy, la plataforma recibe datos para mapeo en vivo, alertas de eventos y reproducción histórica.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy, de modo que Plaspy ingiere coordenadas GPS y eventos de estado.
- Alertas como SOS, vibración o manipulación se reenvían a Plaspy para notificación y respuesta del operador.
- La telemetría y los eventos de entradas/salidas del dispositivo se vuelven visibles en los paneles y registros de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, reduciendo la necesidad de seleccionar el protocolo manualmente.
- La unidad puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo y la preferencia del instalador.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de LK-GPS que vaya a utilizar, como la app del proveedor, la herramienta de escritorio o la interfaz de comandos por SMS.
2. Ingrese el host del servidor de Plaspy como d.plaspy.com o use la IP alternativa 54.85.159.138 si su herramienta de configuración requiere una dirección IP.
3. Configure el puerto del dispositivo en 8888 para que el rastreador envíe datos al puerto de escucha de Plaspy.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia de red y las opciones del rastreador.
5. Aplique o guarde la configuración en el rastreador y confirme que el dispositivo ha aceptado los cambios.
6. Reinicie la unidad si el fabricante o el proceso de configuración lo requiere para activar los nuevos ajustes.
7. Valide que el rastreador reporte a Plaspy confirmando que la unidad aparece en la plataforma y observando los primeros mensajes de posición o estado.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el LK980-4G dependen del firmware de LK-GPS y del método de configuración elegido (SMS, app o software del proveedor). Dado que los formatos de comando del fabricante varían, proporcione comandos solo cuando tenga el manual del dispositivo o la orientación del proveedor.

Si usa configuración por SMS, los flujos públicos típicos implican enviar comandos de parámetros al IMEI o al número del dispositivo. Si usa la app de LK-GPS o la herramienta del proveedor, configure el host del servidor en d.plaspy.com o 54.85.159.138 y establezca el puerto 8888 en la sección de red o servidor. Plaspy aceptará conexiones vía UDP o TCP y detectará automáticamente el protocolo cuando el dispositivo se conecte.

## Notas de configuración

- Las diferencias de firmware y las personalizaciones OEM pueden cambiar los nombres de menú exactos, la sintaxis de SMS o el comportamiento de las herramientas; siempre consulte las notas de la versión del firmware del dispositivo.
- Algunos instaladores prefieren UDP por su menor overhead, mientras que otros eligen TCP por su mayor fiabilidad; el LK980-4G puede configurarse para cualquiera de los dos transportes y Plaspy soporta ambos.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos compatibles, establecer el puerto 8888 es un paso consistente entre distintos modelos de rastreador.
- Si planea usar comandos SMS para la configuración, asegúrese de que la SIM soporte SMS y de comprender el formato de comandos SMS de la documentación de LK-GPS.
- Siempre guarde o aplique los cambios en la herramienta del fabricante y siga cualquier paso de reinicio recomendado para asegurarse de que los nuevos ajustes de servidor entren en vigencia.

## Por qué usar Plaspy con esta configuración

Usar el LK980-4G con Plaspy ofrece un camino sencillo hacia la visibilidad centralizada y la gestión de eventos para flotas y operadores de vehículos. La conectividad 4G LTE con fallback a 2G del rastreador, combinada con la detección automática de protocolo y el endpoint compartido de Plaspy, simplifica el despliegue en flotas mixtas y reduce la variabilidad en la configuración.

Para saber más sobre Plaspy y cómo la plataforma puede centralizar el rastreo y las alertas para dispositivos como el LK980-4G visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware e instrucciones de instalación consulte la documentación del fabricante LK-GPS en https://www.lk-gps.com para verificar los procedimientos y comportamientos actuales.
