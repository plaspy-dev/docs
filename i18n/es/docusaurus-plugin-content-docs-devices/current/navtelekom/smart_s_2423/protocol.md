---
slug: /navtelekom/smart_s_2423/protocol
id: smart_s_2423-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-2423 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Navtelekom SMART S-2423 y cómo se comunica con Plaspy para rastreo y telemetría confiables
keywords:
  - Protocolo Navtelekom SMART S-2423
  - Protocolo GPS Navtelekom SMART S-2423
  - Protocolo de rastreo Navtelekom SMART S-2423
  - Compatibilidad SMART S-2423 con Plaspy
  - Protocolo rastreador GPS Navtelekom
  - Protocolo de comunicación para rastreadores de vehículos
  - Rastreo de flotas SMART S-2423
  - Protocolo de dispositivo Plaspy
  - Integración de rastreador GPS con Plaspy
  - Integración de telemetría SMART S-2423
---

# Navtelekom - Protocolo SMART S-2423

Esta página describe, en términos no sensibles, el contexto público del protocolo para usar el rastreador Navtelekom SMART S-2423 con Plaspy. Explica cómo el dispositivo se comunica con la plataforma Plaspy para envío de ubicación, telemetría y señales de control básicas, y resalta los ajustes de conexión que usted usará con más frecuencia durante la implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo del SMART S-2423 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto general de comunicación y en consideraciones prácticas de compatibilidad más que en los detalles internos del equipo.

## Resumen del protocolo

El protocolo usado por el SMART S-2423 define cómo el rastreador informa su identidad, las posiciones y la telemetría a un servidor remoto para que una plataforma de flotas como Plaspy pueda ingerir y presentar los datos. Para la integración con Plaspy, el protocolo actúa como la capa de transporte que lleva los fixes GNSS, valores de sensores desde RS-485 y 1-Wire, estados de entradas y salidas, y la información básica de salud del dispositivo.

- Permite reportes periódicos y por eventos de posición y telemetría desde el SMART S-2423 a un servidor remoto
- Transporta identificación y estado del dispositivo que Plaspy mapea a un registro de activo en la flota
- Lleva datos de sensores e interfaces de periféricos RS-485, 1-Wire y Bluetooth de forma que Plaspy los consuma para alertas y diagnóstico
- Soporta intervalos de reporte configurables y disparadores por evento que determinan la frecuencia de actualización recibida por Plaspy
- Permite integrar estados de entradas y salidas para usos de control remoto o flujos de alerta dentro de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en su endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para dispositivos correctamente configurados. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está apuntando al endpoint de Plaspy con los ajustes de red correctos.

- Plaspy escucha en un único puerto común para todos los dispositivos soportados y detecta automáticamente el protocolo entrante
- La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy es el paso principal para permitir la detección automática
- Cuando el SMART S-2423 reporta identidad y telemetría a Plaspy, la plataforma asigna el dispositivo a la cuenta y activo correspondientes
- La detección automática reduce los pasos de configuración manual en flotas mixtas cuando los rastreadores envían al endpoint correcto
- Si un dispositivo no se detecta, revisar los ajustes de reporte y la accesibilidad de red suele ser la ruta típica de resolución de problemas

## Contexto de transporte y conexión

El contexto de conexión abarca la capa de red que el SMART S-2423 usa para alcanzar Plaspy. El rastreador puede configurarse para usar transporte UDP o TCP según la compatibilidad del equipo y los requisitos del sitio, y puede apuntar a Plaspy por nombre DNS o por dirección IP para el enrutamiento.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para enrutamiento directo
- El servicio Plaspy usa el puerto 8888 para conexiones entrantes de rastreadores y todos los dispositivos en Plaspy usan el mismo puerto
- El SMART S-2423 puede usar UDP o TCP en el puerto 8888 según la configuración del rastreador y las capacidades del firmware
- La elección entre UDP y TCP afecta las características de entrega y las reglas de firewall, pero no al hecho de que Plaspy aceptará la conexión en el puerto compartido
- Asegúrese de que los operadores de red y los firewalls a bordo del vehículo permitan tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888

## Notas de compatibilidad del protocolo

- El SMART S-2423 figura como compatible con Plaspy, pero el comportamiento real de los mensajes puede cambiar entre versiones de firmware
- Las revisiones de hardware y las interfaces opcionales como Bluetooth, RS-485 y 1-Wire pueden influir en qué campos de telemetría están disponibles
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del rastreador y su infraestructura de red soporten
- Herramientas del fabricante como NTC Configurator y DRC para gestión remota ayudan a mantener versiones de firmware y consistencia en la configuración
- Verifique que el destino de reporte del dispositivo esté establecido en d.plaspy.com o 54.85.159.138 y que el dispositivo use el puerto 8888 para la conectividad con Plaspy
- Confirme siempre los ajustes específicos del dispositivo en la documentación oficial de Navtelekom antes de desplegar a gran escala

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación contribuye a una configuración exitosa, operación predecible y una resolución de problemas más eficiente al usar el SMART S-2423 con Plaspy. Conocer el rol del transporte, los endpoints requeridos de reporte y qué campos de telemetría puede enviar el dispositivo reduce la fricción en la integración y las sorpresas operativas.

- Acelera la configuración inicial al clarificar cómo apuntar el dispositivo al endpoint de Plaspy y qué transporte utilizar
- Mejora la resolución de problemas al acotar las fallas a la accesibilidad de red, desajuste de transporte o comportamiento del firmware
- Ayuda a planificar el monitoreo y las alertas según la frecuencia y contenido de los reportes que el rastreador puede enviar
- Orienta la gestión de firmware y configuración para que los dispositivos desplegados se mantengan compatibles a lo largo del tiempo
- Apoya las decisiones sobre el uso de interfaces periféricas como RS-485 o Bluetooth para necesidades adicionales de telemetría

## Por qué usar Plaspy con este protocolo

Usar el SMART S-2423 con Plaspy ofrece a las organizaciones un camino claro para incorporar posicionamiento GLONASS/GPS, reporte celular y telemetría de periféricos en una vista única de la flota. El endpoint compartido de conexión de Plaspy y la detección automática de protocolo simplifican la incorporación cuando en la flota conviven dispositivos de múltiples fabricantes.

Para saber más sobre Plaspy y cómo maneja la conectividad de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la documentación y la información de firmware más reciente del SMART S-2423 en el sitio del fabricante https://www.navtelecom.ru/.
