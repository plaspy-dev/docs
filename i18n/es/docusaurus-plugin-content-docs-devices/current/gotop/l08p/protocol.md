---
slug: /gotop/l08p/protocol
id: l08p-protocol
sidebar_label: Protocol
title: GOTOP - L08P Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo GOTOP L08P y cómo el dispositivo se comunica con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo GOTOP L08P
  - protocolo GPS GOTOP L08P
  - GOTOP L08P Plaspy
  - comunicación GOTOP L08P
  - protocolo de rastreo GOTOP L08P
  - protocolo rastreador wearable GOTOP
  - protocolo rastreador GPS Plaspy
  - compatibilidad telemetría L08P
  - telemetría de salud GOTOP L08P
  - integración dispositivo GOTOP L08P
---

# GOTOP - Protocolo L08P

Esta página describe el contexto público del protocolo para usar el smartwatch rastreador GOTOP L08P con Plaspy. Se concentra en cómo el dispositivo se comunica con Plaspy de manera general, el papel del protocolo de reporte para telemetría y alarmas, y los ajustes de conexión necesarios para un despliegue con Plaspy. No proporciona lógica propietaria de parseo ni detalles internos de firmware, pero resume el contexto práctico de comunicación necesario para la integración y la resolución de problemas.

El L08P es un smartwatch GPS 4G compatible con Plaspy diseñado para telemetría continua de ubicación y salud. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos están configurados para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar los detalles específicos del dispositivo con la documentación de fábrica cuando sea necesario.

## Visión general del protocolo

En términos prácticos, el protocolo del rastreador es el conjunto de reglas de red que el L08P usa para identificarse, enviar telemetría de ubicación y salud, y transmitir alarmas a una plataforma de monitoreo como Plaspy. El protocolo regula cómo el reloj informa posiciones GNSS, telemetría de sensores, eventos SOS y actualizaciones de estado para que Plaspy pueda registrar eventos, mostrar el historial de ubicaciones y activar notificaciones.

- Permite reportes periódicos y por eventos de posición GNSS y telemetría de salud a un servidor
- Transporta identidad y estado del dispositivo para que Plaspy asocie los datos a una unidad específica
- Entrega alarmas y eventos de emergencia como SOS y batería baja a paneles de monitoreo
- Soporta flujos de telemetría para frecuencia cardiaca, SpO2, eventos de movimiento y otros datos de sensores
- Funciona sobre transportes comunes para que el dispositivo pueda reportar vía celular o WiFi hacia Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un L08P está configurado para reportar al endpoint de Plaspy. En la mayoría de los despliegues, el usuario configura el dispositivo para enviar sus reportes a la dirección y puerto compartidos del servidor Plaspy, y Plaspy empareja el tráfico entrante con un manejador de protocolo. Normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.

- Plaspy recibe los reportes de los rastreadores en su endpoint compartido y determina el protocolo de forma automática
- Los dispositivos deben estar configurados para reportar a la dirección del servidor Plaspy como d.plaspy.com o a la IP del servidor
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que un único puerto maneja múltiples modelos de rastreadores
- Plaspy soporta dispositivos que envían datos sobre transportes comunes como UDP o TCP
- Si el dispositivo está correctamente configurado para reportar a Plaspy, la plataforma asociará los datos entrantes con el registro de dispositivo correspondiente

## Transporte y contexto de conexión

El L08P puede usar múltiples transportes de red según la configuración y la conectividad disponible. Para la integración con Plaspy, el dispositivo puede estar configurado para reportar por UDP o TCP al servidor de Plaspy en el puerto compartido. Los dispositivos pueden apuntar al dominio del servidor Plaspy o a su IP pública cuando no se prefiera usar DNS.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com
- Plaspy también acepta conexiones a la IP del servidor 54.85.159.138
- Plaspy escucha y usa el mismo puerto para todos los dispositivos soportados, que es el 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red
- Use el transporte y la dirección del servidor que coincidan con la política de su SIM o red y verifique que el dispositivo esté configurado para reportar al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, los campos de telemetría disponibles y las funciones opcionales
- Las revisiones de hardware o paquetes opcionales de sensores pueden añadir o quitar canales de telemetría como ECG o SpO2
- Algunos despliegues prefieren TCP para entrega fiable y otros prefieren UDP por menor overhead según las condiciones de red
- Los menús de configuración del fabricante y los procedimientos de aprovisionamiento determinan cómo se apunta el dispositivo a Plaspy
- Siempre valide la compatibilidad para una build de firmware y revisión de dispositivo concretas según las notas del fabricante
- Plaspy detecta muchos protocolos de rastreadores de forma automática, pero se requieren ajustes correctos del servidor en el dispositivo para la detección

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a administradores e integradores a configurar los dispositivos correctamente, interpretar los reportes y responder a problemas de conectividad o telemetría. Tener una apreciación práctica de dónde puede variar el comportamiento del protocolo reduce el tiempo dedicado a la resolución de problemas y mejora la fiabilidad a largo plazo.

- Asegura que los dispositivos estén configurados para enviar reportes al endpoint y transporte de Plaspy correctos
- Ayuda a diagnosticar por qué un dispositivo no aparece en Plaspy o por qué la telemetría está incompleta
- Informa la selección de transporte y las reglas de firewall de red durante el despliegue
- Aclara qué campos de telemetría y alarmas están disponibles en una versión de firmware determinada
- Facilita la planificación de actualizaciones OTA y el mantenimiento del ciclo de vida sin interrumpir el monitoreo

## Ventajas de usar Plaspy con este protocolo

Usar el GOTOP L08P con Plaspy brinda a organizaciones y cuidadores visibilidad confiable de la ubicación, la telemetría de salud y los eventos de emergencia. El L08P ofrece posicionamiento multi GNSS, ubicación asistida por BLE y WiFi, conectividad celular con opciones eSIM y un conjunto de sensores de salud que en conjunto proporcionan la telemetría que Plaspy consume para alertas, historial y notificaciones. Desplegar estos dispositivos con Plaspy permite enrutamiento centralizado de incidentes, reproducción de ubicaciones y alertas configurables para una supervisión y respuesta eficaces.

Para conocer más sobre Plaspy y cómo su despliegue puede usar el GOTOP L08P, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que conviene verificar la documentación de protocolo específica del dispositivo con GOTOP en https://www.gotop.cc/.
