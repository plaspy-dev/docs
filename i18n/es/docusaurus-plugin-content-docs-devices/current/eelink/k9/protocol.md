---
slug: /eelink/k9/protocol
id: k9-protocol
sidebar_label: Protocol
title: EElink - K9 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo EElink K9 para integrar el rastreador GPS con Plaspy y asegurar seguimiento fiable de flotas y activos
keywords:
  - Protocolo EElink K9
  - Protocolo GPS EElink K9
  - Protocolo de comunicación EElink K9
  - Compatibilidad del rastreador K9 con Plaspy
  - Protocolo rastreador GPS EElink
  - Protocolo de seguimiento K9
  - Integración EElink K9
  - Protocolo de dispositivo Plaspy
  - Rastreo de vehículos EElink K9
  - Compatibilidad de rastreadores GPS con Plaspy
---

# EElink - Protocolo K9

Esta página describe el contexto público del protocolo para usar el rastreador GPS EElink K9 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y consideraciones prácticas para garantizar que las posiciones y las alarmas lleguen de forma fiable a la plataforma Plaspy.

El EElink K9 es un rastreador con muchas funciones: posicionamiento GPS y LBS, reporte por GPRS, voz bidireccional, alarmas SOS, geocercas y alertas por exceso de velocidad, batería extraíble y capacidad de actualización OTA. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el tiempo de envío de paquetes, el contenido de los mensajes y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de mensajes y comportamientos de reporte que el K9 utiliza para identificarse, enviar posiciones y alarmas, y recibir comandos remotos. Cuando está configurado para reportar a Plaspy, el protocolo permite cargas periódicas de ubicaciones GPS o basadas en red celular, notificaciones de eventos como SOS o alertas de movimiento, y reportes de estado como el nivel de batería.

- Transporta información de identidad para que Plaspy asocie los mensajes con un dispositivo K9 concreto
- Entrega reportes de posición y estimaciones LBS para seguimiento en tiempo real y reproducción de historial
- Transmite alarmas y notificaciones de eventos como SOS, geocercas y exceso de velocidad
- Permite configuración remota y actualizaciones OTA cuando el dispositivo y el fabricante lo habilitan
- Funciona sobre datos móviles para que el rastreador pueda subir información vía GPRS a un servidor remoto

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un endpoint público compartido y determina automáticamente el protocolo adecuado para cada equipo. En la mayoría de los casos, un K9 correctamente configurado comenzará a reportar a Plaspy sin que usted tenga que seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un único endpoint público los reportes de dispositivos y aplica detección automática de protocolos
- Usted normalmente configura los dispositivos para que apunten a d.plaspy.com o a la dirección del servidor Plaspy equivalente
- Plaspy soporta tanto reportes por UDP como por TCP según la configuración del dispositivo
- Como Plaspy usa el mismo puerto para todos los dispositivos, un K9 solo necesita reportar al endpoint de Plaspy para ser detectado
- La detección automática evita, en la mayoría de los casos, la selección manual de un protocolo en la plataforma

## Contexto de transporte y conexión

El contexto de conexión se refiere a cómo el K9 alcanza el servidor de Plaspy más que al formato exacto de los mensajes. El K9 puede configurarse para usar UDP o TCP en los envíos y debe apuntar al endpoint de Plaspy en el puerto compartido.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138
- Plaspy acepta reportes de dispositivos en el puerto 8888 y todos los dispositivos usan el mismo puerto
- El rastreador puede configurarse para usar UDP o TCP según el soporte del dispositivo y la preferencia del operador
- Use el mismo host y puerto proporcionados por Plaspy para asegurar que la detección automática funcione
- Factores a nivel de red como la configuración del APN, NAT del operador y la conectividad de datos afectan la entrega, pero no la elección básica del transporte

## Notas sobre compatibilidad del protocolo

- EElink publica actualizaciones de firmware y diferentes versiones pueden alterar el tiempo de mensajes o las funciones disponibles
- Revisiones de hardware o variantes regionales del K9 pueden implementar diferencias en el protocolo aunque el modelo sea el mismo
- La selección del transporte (UDP vs TCP) es un ajuste del dispositivo y puede afectar la confiabilidad en ciertas condiciones de red
- Algunas funciones, como la llamada bidireccional o la escucha de audio local, dependen tanto del firmware como del soporte del operador de la SIM
- Se reporta que el K9 soporta múltiples protocolos y puede recibir actualizaciones OTA que añadan o cambien comportamiento
- Valide la compatibilidad comparando las notas de la versión del firmware y la documentación del fabricante antes de despliegues a gran escala
- Confirme siempre que la configuración del dispositivo apunte al endpoint de Plaspy para permitir la detección automática del protocolo

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación ayuda a asegurar que los dispositivos reporten con fiabilidad, que las alarmas se gestionen con prontitud y que los cambios de configuración surtan efecto según lo esperado. Tener nociones básicas de cómo el K9 envía ubicaciones y eventos hace que la instalación, las pruebas y la resolución de problemas sean más rápidas y efectivas.

- Permite verificar con mayor rapidez que un dispositivo está reportando a Plaspy y que se identifica correctamente
- Facilita la resolución de problemas de conectividad, como reportes de posición faltantes o alarmas retrasadas
- Ayuda a decidir entre UDP o TCP según el comportamiento de la red y las necesidades de confiabilidad
- Sirve para planificar ciclos de actualización de firmware y comprender cómo esos cambios pueden alterar los reportes
- Ayuda a identificar cuándo la configuración del fabricante o las limitaciones del operador están afectando el comportamiento del dispositivo

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el EElink K9 ofrece una forma unificada de recolectar datos de ubicación, alarma y estado de este rastreador junto con otros dispositivos. Organizaciones que requieren visibilidad de flotas de vehículos, protección de activos o seguridad personal se benefician de que Plaspy procese los reportes del K9, normalice los mensajes del dispositivo y presente ubicaciones y eventos en una plataforma única.

Plaspy escucha los reportes del K9 en d.plaspy.com y 54.85.159.138 en el puerto 8888 y soporta dispositivos que reportan por UDP o TCP. Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, la mayoría de las unidades K9 pueden integrarse configurando el dispositivo para que apunte al endpoint de Plaspy y verificando la conectividad. Para conocer más sobre la plataforma Plaspy y cómo puede trabajar con dispositivos EElink visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y orientación del fabricante, verifique la información oficial en https://www.eelink.com.cn/.
