---
slug: /ruptela/hcv5/configuration
id: hcv5-configuration
sidebar_label: Configuration
title: Ruptela - HCV5 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Ruptela HCV5 para Plaspy con ajustes de servidor, flujo de trabajo y guía práctica de instalación
keywords:
  - Configuración Ruptela HCV5
  - Instalación Ruptela HCV5
  - Configuración servidor Ruptela HCV5
  - Ruptela HCV5 Plaspy
  - Rastreador GPS Ruptela HCV5
  - Configuración telemática Ruptela HCV5
  - Seguimiento de flotas Ruptela HCV5
  - Configuración de dispositivo Ruptela HCV5
  - Guía de integración Ruptela HCV5
  - Configuración de rastreador Plaspy
---

# Ruptela - HCV5 Configuración

Esta página describe el contexto público de configuración para usar el Ruptela HCV5 con Plaspy. Presenta los ajustes compartidos del servidor Plaspy que deberá aplicar en el dispositivo o en la herramienta de configuración del fabricante, junto con pasos prácticos para validar la conectividad y la visibilidad en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos precisos en el lado del fabricante para el HCV5 pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso esta guía se centra en los ajustes y el flujo de trabajo a nivel de plataforma, recomendando además verificar con la documentación de Ruptela.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el HCV5 para enviar ubicación y telemetría del vehículo a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. Configurar el equipo normalmente implica apuntarlo al endpoint de Plaspy, seleccionar el modo de transporte si es necesario y confirmar que el dispositivo transmite datos GNSS y CAN/OBD según lo esperado.

- Apunte el HCV5 al endpoint del servidor Plaspy para que la telemetría llegue a su cuenta de Plaspy.
- Configure los ajustes de transporte y el puerto del dispositivo para que el HCV5 pueda establecer conexión mediante redes celulares.
- Valide que la posición GNSS y la telemetría del vehículo desde CAN u OBD se transmitan y aparezcan en los paneles de Plaspy.
- Guarde y aplique la configuración y, si es necesario, reinicie el dispositivo para comenzar el reporte.
- Confirme la visibilidad del dispositivo y sus reportes básicos en Plaspy antes de finalizar la instalación.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos de Plaspy al configurar el HCV5. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Alimentar el HCV5 con una fuente de energía de vehículo adecuada y confirmar que el dispositivo esté encendido.
- Asegurarse de que el dispositivo tenga conexión celular activa y un plan de datos compatible con LTE Cat M1, NB-IoT o fallback 2G según corresponda.
- Acceso físico al dispositivo o acceso al método/software de configuración de Ruptela utilizado por su instalador.
- Acceso a su cuenta de Plaspy o a un administrador de la plataforma para verificar la llegada y visibilidad del dispositivo tras la configuración.
- Confirmación de la versión de firmware del dispositivo y de cualquier archivo o perfil de configuración específico del proveedor necesario para su despliegue.
- Herramientas básicas para ver registros o el estado del dispositivo desde la herramienta del fabricante al diagnosticar problemas de conectividad.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para usar Plaspy, el HCV5 envía coordenadas GNSS y telemetría del vehículo a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy ingiere estas transmisiones, las asocia con la cuenta correcta y las pone a disposición en paneles, alertas y herramientas de reporte.

- Posición GNSS y actualizaciones de ubicación con marca de tiempo entregadas a Plaspy para vistas de mapa en tiempo real.
- Telemetría CAN y OBD reenviada a Plaspy para reportes de combustible, motor y diagnóstico del vehículo cuando esté habilitado.
- Reporte de eventos e entradas digitales para ignición, puertas, manipulación y otros sensores.
- Señales de gestión del dispositivo y telemetría visibles en Plaspy para monitoreo operativo.
- El rastreador se configura para reportar al endpoint compartido de Plaspy usando el puerto 8888 y UDP o TCP según la selección.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Ruptela o al software utilizado por su instalador o equipo de operaciones de flota.
2. En la sección de configuración del servidor o APN, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 como puerto objetivo de Plaspy.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elección de modo.
5. Aplique o guarde el perfil de configuración en la herramienta de Ruptela o en la interfaz de gestión del dispositivo.
6. Reinicie el HCV5 si la herramienta o el firmware lo requieren para comenzar a reportar a Plaspy.
7. Valide que el dispositivo está reportando a Plaspy comprobando la llegada del equipo y los datos en los paneles de su cuenta Plaspy.

## Ejemplos de comandos de configuración

El HCV5 puede configurarse con las herramientas de gestión de Ruptela, software del fabricante o utilidades del instalador. Los comandos exactos o las secuencias de configuración pueden variar según el firmware de Ruptela y el método de aprovisionamiento usado por su instalador. No se incluye un conjunto público de comandos del dispositivo aquí porque las herramientas del fabricante y las revisiones de firmware determinan los comandos precisos.

Si usa Ruptela Device Center u otra herramienta oficial de Ruptela, siga su interfaz guiada para establecer el host del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888. Si necesita ejemplos de comandos específicos, consulte la documentación de Ruptela o a su instalador para obtener los comandos correctos según su versión de firmware.

## Notas de configuración

- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint de Plaspy.
- La selección de transporte entre UDP y TCP se realiza en el dispositivo; elija el modo soportado por su instalación y la red, y esté preparado para probar ambos si encuentra problemas de conectividad.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar menús de configuración y métodos de aprovisionamiento disponibles; confirme los pasos exactos con la documentación de Ruptela para su versión de firmware.
- El manejo remoto de dispositivos o los flujos FOTA pueden estar disponibles a través de Ruptela Device Center o una plataforma de gestión de dispositivos; use esas herramientas para despliegues a gran escala.
- Mantenga las mejores prácticas físicas y eléctricas de instalación para evitar fallas de reporte relacionadas con la alimentación durante la puesta en marcha.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela HCV5 con Plaspy ofrece a los operadores de flotas una vía confiable para ingerir ubicación GNSS y telemetría profunda del vehículo en una sola plataforma para monitoreo, alertas y reportes. El hardware HCV5 entrega los flujos de telemetría que Plaspy utiliza para ofrecer seguimiento en vivo, monitoreo de eventos y visibilidad de sistemas del vehículo que mejoran la toma de decisiones operativas y la seguridad.

Para obtener más información sobre la integración de dispositivos con Plaspy visite https://www.plaspy.com y para verificar los detalles más recientes de configuración específica del dispositivo consulte al fabricante en https://ruptela.com/ para la documentación y notas de firmware más actuales.
