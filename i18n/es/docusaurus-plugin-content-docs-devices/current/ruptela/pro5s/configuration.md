---
slug: /ruptela/pro5s/configuration
id: pro5s-configuration
sidebar_label: Configuration
title: Ruptela - Pro5S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ruptela Pro5S para integrarlo con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Ruptela Pro5S
  - Instalación Ruptela Pro5S
  - Configuración Pro5S Plaspy
  - Configuración de servidor Pro5S
  - Configuración rastreador GPS Ruptela
  - Configuración de rastreador Plaspy
  - Rastreo de vehículos Pro5S
  - Rastreo de flotas Ruptela Pro5S
  - Configuración de telemetría Pro5S
  - Configuración Ruptela Pro5S LATAM
---

# Ruptela - Configuración Pro5S

Esta página describe el contexto público de configuración para usar el tracker Ruptela Pro5S con Plaspy. Se concentra en la información práctica de servidor y los pasos de ajuste que las operaciones de flota e integradores necesitan para preparar un equipo Pro5S y que Plaspy ingiera su telemetría. El contenido se basa en la descripción del producto Pro5S y en los ajustes de servidor de Plaspy disponibles públicamente.

Plaspy utiliza ajustes de servidor compartidos entre los trackers compatibles y detecta automáticamente el protocolo del dispositivo al conectarse. Los pasos exactos del lado del fabricante para el Pro5S pueden variar según la revisión de firmware, el SKU de hardware, el tipo de instalación y la herramienta de configuración de Ruptela que se use. Use esta página para aplicar los ajustes comunes de Plaspy y luego verifique los detalles específicos del dispositivo con la documentación oficial de Ruptela.

## Resumen de la configuración

El objetivo al configurar un Pro5S para Plaspy es dirigir la telemetría del dispositivo hacia la plataforma y validar una conectividad confiable para que el equipo sea visible y administrable. La configuración prepara el tracker para enviar posiciones GNSS, eventos CAN e I/O y otra telemetría que Plaspy procesa para mapas, alertas e informes.

- Indicar al dispositivo el endpoint de Plaspy para que la telemetría llegue a la plataforma
- Configurar transporte y puerto para que coincidan con los requisitos de Plaspy
- Asegurar conectividad celular y un APN o provisión de SIM correctos para entrega de datos fiable
- Validar que el equipo reporte a Plaspy y sea visible en los paneles de la plataforma
- Confirmar compatibilidad de firmware y de la herramienta de configuración de Ruptela antes del despliegue masivo

## Ajustes del servidor Plaspy

Use estos ajustes de servidor de Plaspy al configurar el Pro5S. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando se conecta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker al conectarse

## Requisitos típicos antes de la configuración

- Acceso físico a la unidad Pro5S y al arnés del vehículo para verificar alimentación y señales I/O
- SIM celular activa provisionada para datos con APN configurado cuando el dispositivo y el operador lo requieran
- Acceso a las herramientas oficiales de configuración o software de provisión de Ruptela para el Pro5S
- Conocimiento de la versión de firmware y del SKU del equipo para asegurar el método de configuración correcto
- Antena GNSS externa instalada si la ubicación de montaje está obstruida y se requiere posicionamiento preciso
- Batería de respaldo cargada o fuente de alimentación conectada para completar los pasos de configuración y verificación

## Cómo se conecta este tracker a Plaspy

Al configurarse para Plaspy, el Pro5S envía posiciones GNSS y telemetría del vehículo a través de la red celular hacia el endpoint y puerto compartidos de Plaspy. Plaspy procesa automáticamente el protocolo entrante, habilitando mapas en tiempo real, alertas de eventos y paneles de telemetría sin necesidad de personalizar servidores por dispositivo.

- El Pro5S reporta posiciones GNSS y marcas de tiempo al endpoint d.plaspy.com en el puerto 8888
- Los eventos CAN e I/O se envían junto con los mensajes de posición para que Plaspy muestre parámetros del motor y sensores
- El tracker puede usar UDP o TCP según la configuración; Plaspy acepta ambos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta a 54.85.159.138 en el puerto 8888
- El registro interno del Pro5S ayuda a evitar pérdidas de datos y puede reenviar registros en búfer cuando la conectividad se restaura

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Ruptela para el Pro5S, como Ruptela Manager o la herramienta de provisión del proveedor
2. En los ajustes de servidor del dispositivo, ingrese el servidor Plaspy como d.plaspy.com o el endpoint numérico 54.85.159.138
3. Establezca el puerto del dispositivo en 8888, que es el puerto usado por Plaspy para todos los dispositivos
4. Seleccione transporte UDP o TCP si la configuración del Pro5S requiere elegir un transporte
5. Configure el APN y parámetros de la SIM necesarios para que el dispositivo establezca conectividad de datos celulares
6. Aplique o guarde la configuración en la herramienta de Ruptela y, si se indica, reinicie el dispositivo para activar los nuevos ajustes
7. Valide que el dispositivo reporte a Plaspy revisando la recepción de datos y la visibilidad en la plataforma Plaspy

## Ejemplos de comandos de configuración

Los comandos exactos o los pasos de provisión para un Pro5S dependen de la herramienta de configuración de Ruptela y del firmware instalado. Algunos integradores usan comandos SMS, una herramienta local por USB o utilidades de gestión remota de Ruptela. Dado que las herramientas del fabricante y los firmwares pueden variar, siga la guía de Ruptela para la sintaxis precisa de comandos según su dispositivo y versión de firmware.

## Notas de configuración

- Las diferencias de firmware y los SKUs regionales pueden cambiar los menús de configuración y la sintaxis de comandos; confirme siempre el método exacto para su variante Pro5S
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega en redes marginales; Plaspy soporta ambos en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no necesita un puerto único por equipo al apuntar a d.plaspy.com
- Use las herramientas oficiales de Ruptela para la provisión masiva y reducir errores manuales en despliegues a escala
- Verifique el APN y la provisión de la SIM antes de finalizar los ajustes de servidor para evitar problemas de conexión al probar con Plaspy

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela Pro5S para reportar a Plaspy ofrece a los operadores de flotas una forma sencilla de centralizar posiciones GNSS de alta fidelidad y telemetría del vehículo en una sola plataforma. El hardware Pro5S, con su u blox GNSS, integración CAN y registro interno, complementa los paneles y alertas de Plaspy para soportar seguimiento en tiempo real, supervisión de conductores y flujos de trabajo de seguridad.

Para más información sobre Plaspy visite https://www.plaspy.com y para detalles específicos de configuración del dispositivo y las instrucciones de firmware consulte al fabricante en https://ruptela.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre verifique la información más reciente en el sitio oficial de Ruptela.
