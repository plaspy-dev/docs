---
slug: /riti/690t_idu_400/configuration
id: 690t_idu_400-configuration
sidebar_label: Configuration
title: Riti - 690T (IDU-400) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Riti 690T IDU-400 con ajustes de servidor Plaspy y pasos prácticos para integrar su flota
keywords:
  - Configuración Riti 690T
  - Instalación Riti 690T
  - Configuración Riti IDU 400
  - Riti rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Retención de tacógrafo en la nube
  - Configuración telemática
  - Configuración rastreo de flotas
  - Configuración servidor de rastreo
---

# Riti - 690T (IDU-400) Configuración

Esta página describe el contexto público de configuración para usar el Riti Locator 690T (IDU-400) con Plaspy. Se centra en los ajustes de servidor prácticos y en la guía paso a paso que usted utilizará para apuntar el rastreador a Plaspy, de modo que el dispositivo pueda subir registros de conducción, telemetría de alta frecuencia y datos de eventos para su retención en la nube y visibilidad en la flota.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el 690T para la integración con Plaspy y consulte la documentación de Riti para instrucciones específicas del dispositivo o diferencias de firmware.

## Visión general de la configuración

Antes de integrar el 690T con Plaspy deberá configurar el dispositivo para que envíe su telemetría y los registros del tacógrafo al endpoint y puerto del servidor Plaspy. La acción central es apuntar el rastreador a Plaspy para que la plataforma reciba ubicación en tiempo real, identificación del conductor, entradas de sensores y datos de viaje registrados.

- Apunte el 690T al endpoint del servidor Plaspy d.plaspy.com o a la dirección IP equivalente 54.85.159.138 en el puerto de Plaspy
- Seleccione el protocolo de transporte requerido por su instalación, UDP o TCP, si el dispositivo solicita una elección
- Confirme que el dispositivo puede usar su conexión celular y que cuenta con una SIM activa con datos para LTE o redes de respaldo
- Guarde y aplique los parámetros del dispositivo, luego valide que los datos lleguen a Plaspy
- Verifique que el 690T reporte las muestras de tacógrafo y telemetría esperadas después de la configuración y de cualquier reinicio requerido

## Ajustes del servidor Plaspy

- Nombre de dominio del servidor: d.plaspy.com para la configuración del rastreador
- Dirección IP del servidor: 54.85.159.138 como opción alternativa de endpoint
- Puerto: 8888 utilizado por todos los dispositivos que se conectan a Plaspy
- Transporte: soporte para UDP o TCP en el puerto 8888 según la preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta variantes de protocolo compatibles sin cambiar el puerto por dispositivo

## Requisitos típicos antes de la configuración

- Acceso al método oficial de configuración de Riti o al software para el 690T, como la herramienta del proveedor, la interfaz web o la utilidad de configuración
- Una SIM con datos activa y conectividad celular confirmada si se usa LTE o redes de respaldo
- Alimentación al dispositivo y una instalación estable para la configuración inicial y las pruebas
- Conocimiento de la revisión de firmware del dispositivo, ya que los nombres de menú y la ubicación de los parámetros pueden variar según la versión
- Acceso de administrador a la cuenta de flota en Plaspy para verificar el registro del dispositivo y los datos entrantes después de la configuración

## Cómo se conecta este tracker a Plaspy

El 690T se configura para reportar ubicación, registros del tacógrafo y telemetría a un endpoint central de Plaspy, de modo que los gestores de flota puedan ver y retener los registros en la nube. La configuración dirige el dispositivo al servidor y puerto compartidos de Plaspy para recibir flujos consistentes desde múltiples equipos.

- El rastreador se apunta a d.plaspy.com o a 54.85.159.138 como servidor de destino
- El tráfico saliente se envía por el puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles
- El transporte puede configurarse como UDP o TCP según las opciones del rastreador
- Plaspy detecta automáticamente el protocolo del dispositivo para interpretar los mensajes entrantes sin necesidad de puertos distintos por protocolo
- Una vez conectado, el 690T envía telemetría y datos de eventos para monitoreo en vivo, reproducción histórica y retención de registros de tacógrafo

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Riti o al software para el 690T, como la herramienta de Riti, la interfaz web o la interfaz de parámetros documentada.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP alternativa 54.85.159.138.
3. Establezca el puerto de destino en 8888, que Plaspy usa para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno.
5. Guarde o aplique la configuración en el dispositivo mediante la herramienta del fabricante.
6. Reinicie el dispositivo si el procedimiento o el firmware lo exige para asegurar que los nuevos parámetros entren en vigor.
7. Valide que el dispositivo se reporte a Plaspy y que la ubicación, las cargas del tacógrafo y la telemetría aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos y los nombres de parámetros para configurar el 690T dependen del firmware de Riti y de la utilidad de configuración del fabricante. Normalmente deberá establecer el host del servidor en d.plaspy.com o la IP alternativa 54.85.159.138 y el puerto en 8888, luego seleccionar UDP o TCP como opción de transporte. Dado que Riti provee herramientas específicas del dispositivo y los nombres de parámetros varían con el firmware, siga la guía de configuración de Riti para los comandos o pasos exactos en la interfaz.

Configuración conceptual de ejemplo para aplicar en su herramienta Riti:
- Host del servidor: d.plaspy.com o 54.85.159.138
- Puerto del servidor: 8888
- Transporte: UDP o TCP
- Aplique los cambios y reinicie el dispositivo si es necesario

Si dispone de una interfaz tipo línea de comandos de Riti o de un script de aprovisionamiento, utilice los comandos y la sintaxis publicados por Riti para su versión de firmware y mantenga los marcadores de posición que indique el fabricante.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar las etiquetas de los parámetros y la ubicación de los menús para servidor, puerto y transporte.
- Elija UDP o TCP según su red y el comportamiento del dispositivo; ambos son compatibles con Plaspy en el puerto 8888 y Plaspy detectará el protocolo del rastreador automáticamente.
- Para despliegues remotos, utilice Riti OTA o las herramientas de aprovisionamiento del proveedor cuando estén disponibles para reducir visitas de campo en actualizaciones masivas.
- Confirme la cobertura celular y los detalles del plan de datos de la SIM antes de intentar cargas de telemetría de alta frecuencia hacia Plaspy.
- En caso de duda, consulte el manual de usuario de Riti para el 690T IDU 400 para sintaxis de comandos, utilidades de configuración y buenas prácticas de aprovisionamiento.

## Por qué usar Plaspy con esta configuración

Usar el Riti 690T con Plaspy centraliza la telemetría de alta frecuencia y los registros del tacógrafo en una plataforma en la nube diseñada para la retención de auditorías y la visibilidad operativa. Plaspy acepta telemetría y datos de eventos en un endpoint compartido, lo que simplifica los despliegues a escala de flota y reduce la complejidad de configurar cada dispositivo por separado.

Para saber más sobre Plaspy y las opciones de despliegue compatibles visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la guía de configuración más reciente en el sitio del fabricante en https://www.riti.com.tw/ antes de realizar despliegues en producción.
