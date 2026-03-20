---
slug: /lk_gps/lk930/protocol
id: lk930-protocol
sidebar_label: Protocol
title: LK-GPS - LK930 Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo LK930 para conectar el rastreador GPS a Plaspy con detalles de transporte y detección
keywords:
  - protocolo LK-GPS LK930
  - protocolo rastreador GPS LK930
  - protocolo LK-GPS Plaspy
  - protocolo de comunicación LK930
  - protocolo de rastreo LK930
  - compatibilidad rastreador GPS Plaspy
  - rastreo vehicular LK930
  - compatibilidad firmware LK930
  - configuración de red LK930
  - configuración GPRS LK930
---

# LK-GPS - Protocolo LK930

Esta página describe el contexto público del protocolo para usar el rastreador GPS LK930 con Plaspy. Explica cómo el dispositivo comunica información de ubicación y estado a través de redes móviles y cómo Plaspy procesa esos mensajes. El LK930 es un rastreador vehicular compacto con antenas GPS y GSM integradas, amplia autonomía gracias a una batería de 6000 mAh y funciones como alertas por vibración, desplazamiento, batería baja, apagado y exceso de velocidad que generan los datos que Plaspy puede mostrar.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles públicos aquí se centran en el contexto de conexión y operación más que en formatos de paquete propietarios o internals de firmware.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del dispositivo define cómo el LK930 envía datos de ubicación, estado y alertas a un servidor remoto y cómo se intercambian respuestas del servidor o comandos de configuración cuando están soportados. El protocolo es el puente entre los sensores del dispositivo y Plaspy, permitiendo actualizar posiciones, notificar alarmas e identificar el dispositivo de forma fiable para su mapeo y registro.

- Transporta informes periódicos y por evento desde el LK930 hacia Plaspy
- Transmite señales de alerta y estado como batería baja, apagado, vibración y exceso de velocidad
- Permite a Plaspy asociar mensajes entrantes con la identidad específica de un dispositivo
- Habilita la recolección histórica de rutas y actualizaciones de posición en tiempo real visibles en Plaspy
- Soporta transportes persistentes y sin conexión según la configuración del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido e identifica automáticamente el protocolo de reporte que usa un dispositivo cuando llegan los mensajes. En la mayoría de los casos usted no necesita especificar un protocolo dentro de Plaspy si el LK930 está configurado para reportar al endpoint y puerto correctos de Plaspy.

- El dominio público del servidor de Plaspy para informes de dispositivos es d.plaspy.com
- La dirección IP del servidor de Plaspy usada para reportes de dispositivos es 54.85.159.138
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos
- El LK930 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador
- Si el rastreador apunta al endpoint de Plaspy y la operadora lo permite, Plaspy recibirá y procesará los reportes sin selección manual de protocolo

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el LK930 alcanza los servidores de Plaspy y qué opciones de transporte son las más comunes. El rastreador usa redes GSM y GPRS para el transporte de datos; la configuración del dispositivo determina si las comunicaciones usan UDP o TCP. La selección correcta del transporte y la configuración del endpoint son prerrequisitos básicos para una integración exitosa con Plaspy.

- El transporte del dispositivo puede ser UDP o TCP según la configuración del LK930 y la capacidad del firmware
- Los dispositivos deben configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- Plaspy recibe el tráfico de dispositivos en el puerto 8888 para todos los equipos soportados
- Las condiciones de red, la configuración del APN y los ajustes de la SIM/carrier afectan la conectividad al endpoint de Plaspy
- Usar el mismo puerto y endpoint en todos los dispositivos simplifica la configuración de la flota y el enrutamiento del servidor

## Notas sobre compatibilidad del protocolo

- Funciones del LK930 como AGPS y la localización por WiFi opcional o accesorios magnéticos pueden influir en la naturaleza y frecuencia de los reportes
- Las revisiones de firmware y las variantes de hardware pueden cambiar comandos disponibles, intervalos de reporte o formatos de alerta
- Parte del comportamiento depende de los ajustes por defecto del fabricante y de cómo el integrador configure el equipo
- La elección del transporte (UDP frente a TCP) es una opción de configuración del dispositivo que puede afectar la fiabilidad en ciertas redes
- Valide la configuración del APN y los parámetros de la SIM/carrier para asegurar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138
- Siempre verifique el número de serie o IMEI reportado por el rastreador con los registros en Plaspy para confirmar la identidad
- Revise la documentación del fabricante para notas específicas de firmware que puedan afectar la comunicación y el comportamiento

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del LK930 ayuda a asegurar una integración con Plaspy más predecible y fácil de mantener. Saber cómo y cuándo el dispositivo reporta, y qué dispara las alertas, facilita la configuración inicial y reduce el tiempo dedicado a resolver problemas de conectividad o interpretación de datos.

- Configuración más rápida al apuntar el dispositivo al endpoint y transporte correctos de Plaspy
- Mejor diagnóstico cuando los reportes no llegan como se espera
- Posibilidad de ajustar la frecuencia de reporte y los umbrales de evento para equilibrar necesidades operativas y vida de batería
- Mayor fiabilidad en geocercas y notificaciones mediante una correcta configuración del APN y transporte
- Expectativas claras sobre cómo actualizaciones de firmware o variantes de hardware pueden cambiar el comportamiento del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el LK930 con Plaspy proporciona a las organizaciones visibilidad centralizada de la ubicación de vehículos, alertas y rutas históricas en una sola plataforma. La gran autonomía del LK930, sus múltiples tipos de alerta y el soporte de AGPS y localización por WiFi opcional lo hacen adecuado para el seguimiento de activos a largo plazo, donde los reportes periódicos y las notificaciones por evento son importantes.

Si desea conocer más sobre cómo Plaspy trabaja con rastreadores como el LK930 y revisar opciones de despliegue para su flota, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la información más reciente específica del dispositivo y las notas de firmware en el sitio del fabricante en https://www.lk-gps.com.
