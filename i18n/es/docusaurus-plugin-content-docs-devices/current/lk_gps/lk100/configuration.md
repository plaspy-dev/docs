---
slug: /lk_gps/lk100/configuration
id: lk100-configuration
sidebar_label: Configuration
title: LK-GPS - LK100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK100 para apuntar el rastreador a Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - LK-GPS
  - LK100
  - configuración LK100
  - configuración LK-GPS
  - instalación LK100
  - integración Plaspy
  - configuración Plaspy
  - configuración rastreador GPS
  - configuración rastreador de mascotas
  - configuración plataforma de seguimiento
---

# LK-GPS - Configuración del LK100

Esta página documenta el contexto público de configuración para usar el rastreador mini de mascotas LK-GPS LK100 con Plaspy. Describe los valores de servidor compartido que Plaspy requiere y explica los pasos prácticos que suele realizar en el lado del fabricante para apuntar el dispositivo a la plataforma. Los detalles técnicos se enfocan en lo que debe ingresarse en el rastreador o en la herramienta del fabricante para que la unidad pueda enviar datos de ubicación y eventos a Plaspy.

Plaspy utiliza un único endpoint de servidor y puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al recibir datos. Los pasos exactos del fabricante pueden variar según la revisión de firmware, la versión del hardware, el método de instalación y la herramienta de configuración del proveedor (por ejemplo, una app móvil, portal web o comandos SMS). Use esta guía para preparar el LK100 para Plaspy y verifique los detalles específicos del dispositivo con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el LK100 para enviar actualizaciones de ubicación, alertas y telemetría básica a la plataforma Plaspy, de modo que el dispositivo sea visible y manejable en la vista de flota o de rastreo de mascotas. El objetivo es configurar el rastreador con los valores de servidor de Plaspy, confirmar los ajustes de transporte y validar que el equipo informe correctamente a la plataforma.

- Ingrese el endpoint de servidor de Plaspy y los identificadores proporcionados aquí en el método de configuración del LK100.
- Seleccione el tipo de transporte si el dispositivo requiere elegir entre UDP y TCP.
- Establezca el puerto en el puerto compartido de Plaspy para que el rastreador pueda abrir una sesión con la plataforma.
- Guarde y aplique la configuración del fabricante, luego reinicie o reactive el dispositivo si es necesario.
- Verifique la conectividad confirmando que el LK100 aparece en Plaspy y envía actualizaciones periódicas de ubicación y alertas de eventos.

## Ajustes de servidor de Plaspy

Plaspy requiere los siguientes ajustes públicos de servidor para todos los dispositivos compatibles. Estos valores deben usarse al configurar el LK100 para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos que soporta, y la plataforma intentará reconocer el protocolo del rastreador de forma automática.

## Requisitos típicos antes de la configuración

- Un LK100 con batería cargada y en el estado de energía recomendado por el fabricante, listo para configuración.
- Acceso al método oficial de configuración de LK-GPS o al software del fabricante, como la app móvil, el portal web o los comandos SMS documentados.
- Conexión de red en el dispositivo para que pueda alcanzar servidores externos y reportar a Plaspy.
- El identificador del dispositivo o la información de serie que acompaña a la unidad para registro o datos en la plataforma.
- Acceso a cualquier cuenta o credenciales de gestión que requiera la herramienta del fabricante para aplicar ajustes.
- Un plan para probar el dispositivo en un área controlada y confirmar las actualizaciones antes de un despliegue amplio.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el LK100 envía información de ubicación y eventos al endpoint de la plataforma para que el dispositivo sea visible y rastreable en el panel. El rastreador se configurará para reportar al endpoint y puerto compartidos de Plaspy y depende del método de configuración del fabricante para dirigir esos mensajes.

- El LK100 se configura para enviar actualizaciones periódicas de ubicación a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP y detectará automáticamente el protocolo correcto de los mensajes entrantes.
- Las pulsaciones de SOS y las violaciones de geo-cerca reportadas por el LK100 se reenviarán a Plaspy cuando el dispositivo esté apuntando al servidor compartido.
- La monitorización de voz bidireccional y otros eventos soportados por el dispositivo se transmitirán a la plataforma cuando la conectividad esté activa.
- Una configuración exitosa resulta en visibilidad en tiempo real y reproducción histórica de rutas dentro de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de LK-GPS o al software proporcionado por el fabricante (app, portal web o método documentado por SMS/comandos).
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario un reinicio o reinitialización.
7. Valide que el LK100 está reportando a Plaspy verificando la llegada de actualizaciones de ubicación y eventos en la plataforma Plaspy.

## Comandos de configuración de ejemplo

No se incluye un conjunto de comandos públicos para el LK100 en esta página. Los comandos exactos de configuración o los formatos de mensaje dependen de las herramientas del fabricante y del firmware del LK100. Use el método oficial de configuración de LK-GPS para ingresar los ajustes de servidor de Plaspy mostrados más arriba. Si su proveedor proporciona SMS o cadenas de comando directas para configuración, los valores relevantes que debe suministrar son:

- Dominio del servidor d.plaspy.com o IP del servidor 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP según lo requiera el dispositivo

Consulte la documentación de LK-GPS o la guía de configuración del proveedor para ver la sintaxis exacta de los comandos y la secuencia correspondiente a su versión de firmware.

## Notas de configuración

- Las diferencias en el firmware del fabricante pueden cambiar menús de configuración, nombres de campos o la sintaxis de comandos; siempre verifique la documentación del dispositivo.
- Elija TCP o UDP según la recomendación del fabricante; Plaspy admite ambos y detectará el protocolo automáticamente al conectarse.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, el campo de puerto debe establecerse en 8888 como se muestra y no en un puerto específico del dispositivo.
- Pruebe la configuración en un entorno controlado para confirmar que las actualizaciones de ubicación, alertas SOS y eventos de geo-cerca aparecen en Plaspy antes de un despliegue general.
- Cuando sea posible, mantenga el firmware del dispositivo actualizado según el fabricante para asegurar compatibilidad con las integraciones de la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el LK100 para reportar a Plaspy ofrece una forma sencilla de centralizar el rastreo de mascotas, el monitoreo de eventos y la revisión histórica de rutas en una sola plataforma. Organizaciones y propietarios de mascotas se benefician de visibilidad consistente, alertas de eventos sencillas y gestión consolidada de dispositivos cuando los rastreadores se dirigen al endpoint compartido de Plaspy.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y herramientas de configuración más recientes del LK100, consulte al fabricante en https://www.lk-gps.com. Las especificaciones del fabricante y los métodos de instalación pueden cambiar con el tiempo, por lo que debe verificar los detalles actuales en la documentación oficial de LK-GPS.
