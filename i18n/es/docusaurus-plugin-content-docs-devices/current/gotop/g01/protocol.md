---
slug: /gotop/g01/protocol
id: g01-protocol
sidebar_label: Protocol
title: GOTOP - G01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GOTOP G01 que explica cómo el dispositivo comunica datos de rastreo y telemetría a los servidores de Plaspy
keywords:
  - protocolo GOTOP G01
  - protocolo GPS GOTOP G01
  - protocolo de comunicación GOTOP G01
  - protocolo de rastreo GOTOP G01
  - compatibilidad GOTOP G01 con Plaspy
  - integración GOTOP con Plaspy
  - protocolo de rastreador vehicular G01
  - comunicación del rastreador GPS G01
  - protocolo de gestión de flotas G01
  - guía del protocolo GOTOP G01
---

# GOTOP - Protocolo G01

Esta página resume el contexto público del protocolo para utilizar el rastreador GOTOP G01 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, en los ajustes de conexión públicos que Plaspy expone y en consideraciones prácticas para desplegar unidades G01 en escenarios de seguimiento de flotas y vehículos. El G01 es un rastreador compacto compatible con GPS y BDS que reporta posición, entradas de estado y eventos de alarma, datos adecuados para la ingestión por Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración que el fabricante aplique al dispositivo. El conjunto de funciones del G01 —posicionamiento dual GNSS, detección ACC, alarma SOS, corte remoto y reporte de batería de respaldo— corresponde a los tipos de telemetría que Plaspy ingiere, mientras que el tiempo de envío de paquetes y el comportamiento de comandos específicos del dispositivo permanecen bajo control del fabricante.

## Visión general del protocolo

El protocolo de reporte del G01 es el canal para actualizaciones de ubicación, telemetría y eventos de alarma desde el rastreador hacia Plaspy. A alto nivel, el protocolo permite que el dispositivo se identifique, entregue posiciones GPS y BDS, reporte entradas y salidas, y notifique a Plaspy sobre alarmas o eventos de energía para que la plataforma pueda mostrar, alertar y almacenar la información.

- Permite el envío seguro de posición y telemetría a Plaspy para mapas en vivo e historial
- Transmite la identidad y el estado del dispositivo para que Plaspy asocie los datos con el vehículo correcto
- Envía eventos de alarma como SOS, pérdida de energía, manipulación y cambios del estado ACC
- Incluye confirmaciones de control y de acciones remotas cuando el dispositivo lo soporta
- Soporta latidos periódicos o keepalives para que Plaspy mantenga una vista precisa de los equipos en línea

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un endpoint público y puerto compartidos, y realiza la detección automatizada del protocolo del rastreador cuando un dispositivo se conecta y comienza a reportar. En la práctica, esto significa que la mayoría de los dispositivos G01 solo necesitan apuntar al endpoint de Plaspy y usar un transporte compatible para empezar a reportar sin seleccionar manualmente el protocolo dentro de Plaspy.

- El dominio público del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La IP pública del servidor Plaspy es 54.85.159.138 y el servicio escucha en el puerto 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración es consistente entre modelos
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía reportes identificables
- Por lo general, los usuarios no necesitan elegir un protocolo manualmente en Plaspy si el dispositivo está correctamente configurado para reportar a d.plaspy.com usando el transporte adecuado

## Contexto de transporte y conexión

Los detalles de conexión enmarcan cómo el G01 se comunica a través de redes celulares con Plaspy. La selección de transporte y el direccionamiento por DNS o IP son opciones de configuración en el dispositivo o durante la instalación. Mantener estos ajustes correctos garantiza que el G01 alcance el endpoint de ingestión de Plaspy de forma confiable.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138
- El puerto público de Plaspy para todos los dispositivos es 8888 y debe usarse tanto para configuraciones TCP como UDP
- El G01 puede configurarse para usar UDP o TCP según la versión de firmware y las preferencias del instalador
- Use el APN y los ajustes de SIM correctos en el dispositivo para asegurar conectividad de datos celular al endpoint de Plaspy
- Mantener transporte y endpoint consistentes en toda la flota facilita la incorporación y la resolución de problemas

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar tiempos, campos opcionales y funciones soportadas; corrobore las notas de firmware con el comportamiento esperado
- Revisiones de hardware pueden modificar las entradas o salidas disponibles incluso para el mismo modelo
- La configuración por defecto del fabricante podría apuntar a un servidor o puerto distinto; verifique la configuración de reporte del dispositivo durante la puesta en marcha
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe elegirse según las necesidades del despliegue
- Interfaces de configuración local o serial, como UART, pueden utilizarse para ajustar el endpoint y el transporte cuando el dispositivo lo soporta
- Valide siempre que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 antes de un despliegue a gran escala

## Por qué conocer el protocolo es importante

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una instalación confiable, telemetría precisa en Plaspy y una resolución de problemas más rápida cuando los dispositivos no se comportan como se espera. Tener claridad sobre el protocolo también respalda el uso correcto de entradas del dispositivo y controles remotos en los flujos operativos.

- Garantiza la configuración correcta de endpoint y transporte para que los equipos alcancen Plaspy de forma confiable
- Ayuda a interpretar por qué aparecen alarmas o campos de telemetría específicos en los paneles de Plaspy
- Facilita la resolución de problemas relacionados con la red, eventos de energía y reportes perdidos
- Apoya la planificación de actualizaciones de firmware y la validación del comportamiento de nuevos firmwares
- Aumenta la confianza operativa al usar inmovilizadores, SOS y flujos basados en ACC

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G01 con Plaspy brinda a las organizaciones visibilidad sobre la ubicación de los vehículos, entradas de estado y eventos de alarma mediante un único endpoint de ingestión y una estrategia de puertos consistente. Las entradas orientadas al vehículo del G01, como detección ACC, alarma SOS y corte remoto, son señales que Plaspy ingiere y presenta para monitoreo en tiempo real, alertas e informes históricos.

Si desea conocer más sobre cómo Plaspy trabaja con protocolos de dispositivos y flujos de gestión de flotas, visite https://www.plaspy.com. Para obtener detalles específicos y actuales del protocolo del dispositivo, notas de firmware e instrucciones de configuración, verifique la información con el fabricante en https://www.gotop.cc/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante asegura una integración precisa y actualizada.
