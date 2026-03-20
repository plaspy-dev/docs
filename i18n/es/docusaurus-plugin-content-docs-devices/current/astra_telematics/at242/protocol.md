---
slug: /astra_telematics/at242/protocol
id: at242-protocol
sidebar_label: Protocol
title: Astra Telematics - AT242 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Astra Telematics AT242 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Astra Telematics AT242
  - protocolo GPS AT242
  - compatibilidad AT242 Plaspy
  - protocolo de comunicación AT242
  - protocolo de rastreo AT242
  - protocolo de rastreador GPS Astra Telematics
  - integración de rastreador Plaspy
  - protocolo de telemática vehicular
  - rastreo de flotas AT242
  - protocolo de telemetría GNSS
---

# Astra Telematics - Protocolo AT242

Esta página explica el contexto público del protocolo para usar el Astra Telematics AT242 con Plaspy. Se centra en cómo el rastreador se comunica con Plaspy en términos generales, los ajustes de conexión necesarios para alcanzar los servidores de Plaspy y consideraciones prácticas de compatibilidad. La orientación está pensada para integradores de sistemas, administradores de flotas y usuarios técnicos que configuran o validan la conectividad del AT242 con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí es de alto nivel y complementaria a la documentación del producto AT242 y a los recursos de Astra Telematics.

## Resumen del protocolo

El protocolo de comunicación del AT242 regula cómo el rastreador envía posición, telemetría, eventos de E/S y datos CANBus a una plataforma backend como Plaspy. En la práctica, el protocolo permite que el equipo se identifique al servidor, reporte fijaciones GNSS y telemetría de sensores, y entregue notificaciones de eventos que Plaspy puede convertir en ubicaciones, alertas e informes.

- Transmite posición GNSS y telemetría con marcas de tiempo para ubicación en vivo y recorridos históricos.
- Entrega eventos de entradas y salidas digitales, alertas de acelerómetro y manipulación, e información de identificación de conductor para flujos de trabajo basados en eventos.
- Envía telemetría CANBus y ADC que Plaspy procesa para mostrar estado del vehículo y valores diagnósticos.
- Incluye campos de identificación y estado del dispositivo para que Plaspy asocie los datos entrantes con el activo correcto.
- Opera sobre transportes de red estándar, de modo que el mismo endpoint y puerto pueden servir para varios tipos de dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos y realiza detección automática de protocolo para conexiones entrantes desde rastreadores compatibles. Cuando un AT242 está configurado para reportar a Plaspy, la plataforma reconoce los reportes del equipo y mapea los datos entrantes al registro de dispositivo correspondiente sin necesidad de seleccionar manualmente el protocolo en la mayoría de los casos.

- Plaspy expone un endpoint de ingestión común en d.plaspy.com para el reporte de dispositivos.
- El servidor de Plaspy accesible en 54.85.159.138 acepta conexiones de rastreadores en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de red.
- Plaspy puede aceptar datos desde dispositivos que apunten tanto al nombre de dominio como a la IP del servidor como dirección de destino.
- Por lo general no necesita elegir un protocolo de dispositivo dentro de Plaspy si el rastreador está correctamente dirigido al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento forman parte del contexto público de configuración para despliegues AT242. El dispositivo puede configurarse para usar UDP o TCP según la variante del modelo, la configuración del operador y la preferencia del instalador. Los hechos públicos importantes son el endpoint de Plaspy y el puerto uniforme usado por todos los rastreadores soportados.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com como nombre DNS del servidor.
- Alternativamente, los dispositivos pueden apuntar directamente a la IP del servidor Plaspy 54.85.159.138.
- El AT242 puede usar UDP o TCP para enviar reportes al puerto 8888 según la configuración del equipo y el comportamiento de la red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica reglas de firewall y APN.
- Asegúrese de configurar el APN y la conectividad de datos celulares para que el dispositivo pueda resolver o alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y la telemetría opcional; verifique la versión de firmware durante la validación.
- Las revisiones de hardware y las variantes regionales pueden ofrecer soporte de bandas de radio o cableados periféricos distintos que afecten el comportamiento de reporte.
- Los menús de configuración del fabricante suelen permitir cambiar el transporte entre UDP y TCP; elija el transporte que se ajuste a su red y requisitos del operador.
- Algunas funciones del AT242, como sensores BLE opcionales o entradas auxiliares, pueden requerir configuración específica para aparecer en Plaspy.
- Confirme que la identidad del dispositivo (IMEI o ID de dispositivo) esté asociada correctamente con la cuenta o flota deseada en Plaspy.
- Siempre contraste el comportamiento observado en campo con la documentación oficial de Astra Telematics para el modelo y firmware específicos.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar una configuración exitosa, un funcionamiento predecible y una resolución de problemas eficiente al integrar el AT242 con Plaspy. Saber cómo el equipo reporta datos reduce el tiempo de puesta en marcha y facilita aislar problemas cuando la telemetría no aparece como se espera.

- Asegura la selección correcta de la dirección del servidor y del transporte para que el dispositivo alcance Plaspy.
- Ayuda a interpretar qué campos de telemetría son esperables y si deberían mostrarse en los paneles de Plaspy.
- Facilita la resolución de problemas de conectividad y frecuencia de reporte al acotar variables a firmware, transporte o red.
- Apoya la planificación para casos como pérdida de alimentación, comportamiento de batería de respaldo y eventos de manipulación.
- Mejora la coordinación con el soporte del fabricante cuando el comportamiento del dispositivo difiera de lo esperado.

## Por qué usar Plaspy con este protocolo

El AT242 combina hardware robusto y amplio E/S con la ingestión y mapeo de telemetría de Plaspy para ofrecer ubicación en tiempo real, alertas e información del vehículo. Para organizaciones que requieren visibilidad continua, detección de manipulación, asociación de conductor y telemetría CANBus, combinar el AT242 con Plaspy ofrece un camino práctico desde las señales del dispositivo hasta paneles operativos y flujos de trabajo automatizados.

Para conocer más sobre cómo Plaspy maneja integraciones de dispositivos y revisar las funciones de la plataforma, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del protocolo y las notas de firmware con Astra Telematics en https://astratelematics.com/.
