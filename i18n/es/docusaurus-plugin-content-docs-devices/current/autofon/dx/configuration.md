---
slug: /autofon/dx/configuration
id: dx-configuration
sidebar_label: Configuration
title: AutoFon - DX Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador AutoFon DX Маяк con Plaspy, incluyendo ajustes de servidor y flujo de instalación práctico
keywords:
  - AutoFon DX Маяк configuración
  - AutoFon DX Mayak instalación
  - configuración rastreador AutoFon
  - DX Маяк configuración Plaspy
  - ajustes servidor rastreador GPS AutoFon
  - configuración rastreadores Plaspy
  - integración rastreador GPS
  - configuración plataforma seguimiento vehicular
  - guía configuración dispositivo GPS
  - configuración servidor monitoreo AutoFon
---

# AutoFon - Configuración del DX Маяк

Esta página describe el contexto público de configuración para usar el rastreador AutoFon DX Маяк con la plataforma de monitoreo Plaspy. Recopila los ajustes prácticos y no propietarios, así como los pasos de flujo de trabajo necesarios para apuntar el DX Маяк a Plaspy y validar que el dispositivo informe correctamente posiciones y eventos. Use esta guía junto con la documentación del fabricante y sus procedimientos de instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. La orientación a continuación se centra en el endpoint de Plaspy y en la secuencia práctica de acciones para registrar y verificar el DX Маяк en la plataforma Plaspy.

## Resumen de la configuración

Configurar el DX Маяк para Plaspy prepara el dispositivo para transmitir paquetes de ubicación y eventos al servidor de monitoreo de Plaspy, de modo que el dispositivo sea visible y gestionable dentro de la plataforma. El proceso suele incluir apuntar el rastreador a Plaspy, asegurar la conectividad de datos móviles y validar que los mensajes de posición y alarma llegan correctamente.

- Proveer o confirmar una SIM funcional con datos y acceso SMS para el dispositivo
- Configurar el objetivo de red del dispositivo al endpoint y puerto del servidor Plaspy
- Elegir el protocolo de transporte si el dispositivo lo requiere y guardar la configuración
- Realizar una validación de conectividad y envío de reportes para que el rastreador aparezca en Plaspy
- Opcionalmente, habilitar el envío de eventos del dispositivo como alertas de movimiento o choque para asegurar visibilidad completa

## Ajustes del servidor Plaspy

Al configurar el AutoFon DX Маяк para que reporte a Plaspy, utilice los siguientes detalles públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que ingrese el puerto 8888 en cualquier campo del dispositivo que solicite el puerto del servidor.

## Requisitos típicos antes de la instalación

- Una tarjeta SIM instalada en el dispositivo con datos móviles habilitados y capacidad para enviar y recibir SMS
- Batería suficiente o alimentación externa para realizar la configuración y las pruebas inmediatas
- Acceso al método oficial de configuración de AutoFon, como la cuenta web del proveedor, el conjunto de comandos SMS del dispositivo o la herramienta de configuración provista por AutoFon
- Conocimiento del número telefónico del dispositivo y de cualquier contraseña requerida para comandos SMS remotos o acceso web
- Cobertura celular en el área de instalación para transmisión de datos GPRS 2G
- Un plan para verificar el reporte en Plaspy después de aplicar la configuración

## Cómo se conecta este rastreador a Plaspy

El DX Маяк envía coordenadas y mensajes de eventos a través de la red celular usando GPRS hacia un servidor de monitoreo, o mediante SMS cuando está configurado para duplicación de mensajes. Para integrar con Plaspy, configure el dispositivo para apuntar al endpoint compartido de Plaspy para que los paquetes lleguen a la plataforma y sean procesados automáticamente.

- El dispositivo se configura para enviar paquetes GPRS a d.plaspy.com o a 54.85.159.138
- El dispositivo transmite al puerto 8888 y puede usar UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y asigna el dispositivo a la cuenta
- Los datos reportados normalmente incluyen coordenadas, eventos de movimiento o choque detectados por el acelerómetro, estado de batería y fuerza de señal
- Si está habilitado, el dispositivo puede duplicar alertas críticas vía SMS además del reporte por GPRS

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de AutoFon para el DX Маяк (cuenta web del fabricante, aplicación de configuración o interfaz de comandos SMS).
2. Ingrese el servidor de Plaspy por nombre de host d.plaspy.com o por IP 54.85.159.138 en el campo de servidor o servidor de monitoreo del dispositivo.
3. Establezca el puerto del servidor del dispositivo en 8888.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte y el campo está disponible.
5. Aplique o guarde la configuración en el dispositivo o mediante la herramienta del fabricante.
6. Reinicie el dispositivo si el fabricante o el firmware lo requieren para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo en la plataforma y confirmando la recepción de posiciones o eventos recientes.

## Ejemplos de comandos de configuración

El DX Маяк admite configuración remota mediante los métodos oficiales del fabricante, que pueden incluir comandos SMS o una interfaz web del proveedor. La sintaxis exacta de los comandos y los parámetros disponibles varían según el firmware y las herramientas del proveedor. Dado que los comandos específicos del modelo los proporciona la documentación de AutoFon y pueden cambiar con el firmware, consulte la lista oficial de comandos de AutoFon para ejemplos SMS del DX Маяк o utilidades de configuración.

Si utiliza SMS para la configuración, los flujos públicos típicos implican enviar comandos de parámetros al número del dispositivo y confirmar las respuestas. Verifique las palabras clave exactas de los comandos SMS, el orden de parámetros y cualquier contraseña requerida con AutoFon antes de enviar comandos.

## Notas sobre la configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los campos de configuración disponibles y la sintaxis de los comandos SMS; siempre consulte las notas de la versión de AutoFon.
- Elegir TCP frente a UDP puede afectar el comportamiento de transmisión y la tolerancia del operador; pruebe ambos transportes si la conectividad es inestable.
- El DX Маяк admite modos de conexión continua y de sueño por intervalos; la frecuencia de reporte y la vida útil de la batería se verán afectadas por el modo de operación seleccionado.
- Las funciones de presencia BLE y localización por dirección requieren la aplicación AutoFon BLE y el emparejamiento con un teléfono inteligente; se gestionan por separado de los ajustes del servidor GPRS.
- Dado que Plaspy utiliza un puerto compartido y detección automática de protocolos, no necesita un puerto Plaspy personalizado por dispositivo; ingrese el puerto 8888 en cada configuración de dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon DX Маяк con Plaspy ofrece a las organizaciones una vista coherente a nivel de plataforma de la ubicación, el movimiento y los eventos de los dispositivos desplegados en vehículos, activos o personas. El endpoint compartido de Plaspy simplifica la incorporación de dispositivos al usar el mismo puerto y la detección automática de protocolos para los rastreadores compatibles, reduciendo la complejidad de la configuración por dispositivo y acelerando la visibilidad de la flota.

Para obtener más información sobre Plaspy y las integraciones compatibles visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo más recientes, detalles de firmware y procedimientos del fabricante, verifique la información actual en el sitio oficial de AutoFon https://www.autofon.ru/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
