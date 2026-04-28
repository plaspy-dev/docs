---
slug: /aovx/gm100/protocol
id: gm100-protocol
sidebar_label: Protocol
title: AOVX - GM100 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo AOVX GM100 para Plaspy con ajustes de conexión compartidos detección de protocolo y guía de comunicación del rastreador
keywords:
  - Protocolo AOVX GM100
  - Protocolo GPS AOVX GM100
  - Protocolo de comunicación AOVX GM100
  - Protocolo de rastreo AOVX GM100
  - AOVX GM100 para Plaspy
  - compatibilidad del rastreador GM100
  - rastreador GPS GM100
  - protocolo de dispositivo Plaspy
  - comunicación de rastreadores GPS
  - dispositivo de rastreo de envíos
---

# AOVX - GM100 Protocol

Esta página presenta el contexto público del protocolo para usar el AOVX GM100 con Plaspy. Su objetivo es ayudar a los usuarios a entender cómo se comunica el rastreador con la plataforma, qué significa el protocolo en la práctica y por qué el reporte correcto del dispositivo es clave para un monitoreo confiable.

El GM100 es un rastreador ultradelgado para mercancías compatible con Plaspy, diseñado para ofrecer visibilidad discreta de los envíos y monitoreo de condiciones. Como Plaspy trabaja con muchos modelos de rastreadores mediante un modelo de conexión compartido, se puede usar el mismo punto de conexión en los dispositivos compatibles mientras Plaspy detecta automáticamente el protocolo del rastreador una vez que el equipo se conecta.

## Panorama del protocolo

El protocolo define cómo el GM100 envía información de rastreo y telemetría para que Plaspy pueda recibirla e interpretarla como datos útiles del dispositivo. En términos prácticos, es la capa de comunicación que permite que el rastreador se identifique, reporte su estado y entregue actualizaciones de ubicación y eventos a la plataforma.

- Permite que el GM100 transmita datos de posición y estado a Plaspy en un formato que la plataforma puede entender
- Soporta la comunicación del dispositivo necesaria para el reporte de ubicación y la visibilidad operativa
- Ayuda a Plaspy a asociar los mensajes entrantes con el registro correcto del rastreador
- Transporta telemetría que puede incluir información sobre la condición del envío y alertas cuando el dispositivo lo permite
- Sirve como base para un comportamiento de rastreo confiable en distintos escenarios de implementación

## Cómo Plaspy detecta el protocolo

Plaspy utiliza un punto de conexión compartido en el servidor y un puerto común para los dispositivos compatibles, y luego detecta automáticamente el protocolo del rastreador después de que el equipo se conecta. Esto significa que por lo general el usuario no necesita elegir un protocolo específico dentro de Plaspy si el GM100 está configurado correctamente y apuntando al servicio de Plaspy.

- El rastreador se conecta al punto de conexión de Plaspy y envía sus datos de reporte
- Plaspy identifica automáticamente el protocolo del dispositivo cuando recibe la conexión
- Se utiliza un solo puerto para todos los dispositivos compatibles en Plaspy
- Normalmente no es necesario seleccionar el protocolo de forma manual cuando el rastreador está bien configurado
- El registro correcto del dispositivo y la configuración de red ayudan a asegurar una detección exitosa

## Contexto de transporte y conexión

Para la configuración de conexión, el GM100 puede configurarse para comunicarse con Plaspy mediante UDP o TCP en el puerto 8888, según la compatibilidad del dispositivo y el comportamiento de red elegido. El rastreador puede apuntar al dominio de Plaspy d.plaspy.com o usar la IP del servidor de Plaspy 54.85.159.138.

- El tráfico de conexión de Plaspy usa el puerto 8888 para los dispositivos compatibles
- Se puede usar UDP o TCP según cómo esté configurado el rastreador
- El dominio del servidor de Plaspy es d.plaspy.com
- La IP del servidor de Plaspy es 54.85.159.138
- Los ajustes de conexión deben coincidir con el modo de red compatible con el rastreador y el entorno de implementación

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden afectar cómo el GM100 reporta datos o maneja la comunicación de red
- Las diferencias de hardware pueden influir en las funciones disponibles y en el comportamiento del protocolo
- Los detalles de implementación del fabricante pueden variar entre lotes de dispositivos o variantes regionales
- La configuración de UDP y TCP debe validarse según la configuración del dispositivo y los requisitos de red
- Siempre se debe revisar la documentación oficial más reciente del fabricante para obtener orientación específica del protocolo
- Si el comportamiento difiere de lo esperado, verifique la configuración del rastreador antes de ajustar la configuración de Plaspy

## Por qué es importante entender el protocolo

Entender el protocolo de comunicación ayuda a asegurar que el GM100 esté configurado correctamente y envíe datos a Plaspy de una manera que favorezca un rastreo confiable. También facilita la solución de problemas cuando un dispositivo no aparece en línea, reporta de forma intermitente o no entrega la telemetría esperada.

- Ayuda a confirmar que el rastreador está apuntando al punto de conexión correcto de Plaspy
- Reduce los problemas de configuración causados por transporte o ajustes de reporte incompatibles
- Mejora el diagnóstico cuando los datos de ubicación o eventos se retrasan
- Favorece un monitoreo más confiable a largo plazo en Plaspy
- Hace más fácil validar la compatibilidad después de cambios de firmware o configuración

## Por qué usar Plaspy con este protocolo

Cuando el GM100 se conecta a través de su protocolo de rastreador, Plaspy ofrece un entorno centralizado para visibilidad de envíos, alertas y revisión histórica. Eso facilita que los equipos de logística supervisen mercancías en tránsito, vigilen cambios de condición y respondan con rapidez a eventos de manipulación o batería baja sin agregar complejidad operativa.

Para las organizaciones que administran paquetes, tarimas y otros activos móviles, Plaspy ayuda a convertir la comunicación del rastreador en supervisión práctica. Conozca más sobre Plaspy en el sitio web principal en https://www.plaspy.com, y verifique los detalles más recientes del protocolo específico del dispositivo y la guía del fabricante en https://www.aovx.com/ porque la compatibilidad del protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
