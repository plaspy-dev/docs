---
slug: /aoya/a202/protocol
id: a202-protocol
sidebar_label: Protocol
title: AoYa - A202 Protocol
sidebar_class_name: menu_item_tracker
description: Guía clara del protocolo público del AoYa A202 y cómo transmite datos al endpoint de Plaspy
keywords:
  - AoYa A202 protocolo
  - AoYa A202 protocolo GPS
  - AoYa A202 compatibilidad Plaspy
  - AoYa A202 protocolo de comunicación
  - AoYa A202 protocolo de rastreo
  - AoYa protocolo de rastreador GPS
  - protocolo de rastreo Plaspy
  - rastreo de vehículos AoYa A202
  - gestión de flotas AoYa A202
  - guía de protocolo rastreador GPS
---

# AoYa - Protocolo A202

Esta página ofrece información pública sobre el protocolo para usar el rastreador GPS AoYa A202 con la plataforma Plaspy. Se centra en cómo el dispositivo normalmente reporta ubicación y telemetría a un endpoint de Plaspy y qué debe esperar durante la configuración e integración. El objetivo es explicar la relación de comunicación en términos prácticos y no propietarios para facilitar la configuración y solución de problemas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este informa a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí es una guía general basada en las capacidades del A202 y en trackers GSM GPRS típicos, no una referencia definitiva de implementación.

## Visión general del protocolo

El protocolo de comunicación define cómo el A202 codifica y envía la identidad del equipo, la posición y el estado al servidor remoto. Para la integración con Plaspy, la función del protocolo es transferir de forma fiable telemetría y eventos utilizables a través de la red celular para que la plataforma pueda mostrar y procesar los reportes del dispositivo.

- Define los mensajes que contienen fijaciones GNSS, estado de movimiento e identificadores del dispositivo hacia el backend
- Controla cuándo y con qué frecuencia el A202 envía actualizaciones al servidor y cómo se reportan los eventos
- Permite que el servidor direccionable identifique al dispositivo para que Plaspy pueda asociar los datos entrantes con un rastreador registrado
- Soporta transporte sobre el enlace de datos móviles proporcionado por GSM GPRS para reportes en tiempo real y periódicos
- Habilita comandos remotos o flujos de configuración cuando están soportados por el fabricante y el firmware del dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido e identifica automáticamente el protocolo del rastreador, de modo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente dentro de la plataforma. Cuando un A202 esté configurado para reportar a Plaspy, la plataforma hará coincidir los reportes entrantes con su lógica de detección y enrutamiento integrada para mostrar el dispositivo en la cuenta correcta.

- Plaspy server domain is d.plaspy.com which devices may use as their reporting host
- Plaspy server IP is 54.85.159.138 as an alternative target for devices that require an IP address
- The port is 8888 and Plaspy uses the same port for all supported devices
- Plaspy automatically detects the tracker protocol from the incoming connection so manual selection is usually unnecessary
- Proper device configuration on the A202 side to point to the Plaspy endpoint is typically the only required step to enable detection

## Contexto de transporte y conexión

Las opciones de transporte y conexión determinan cómo el A202 envía sus mensajes de protocolo sobre la red celular. El A202 suele emplear datos GSM GPRS estándar para comunicarse con Plaspy y puede configurarse para UDP o TCP según las opciones del dispositivo y el soporte del firmware.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte y configuración del equipo
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como su endpoint de reporte
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y el onboarding
- TCP ofrece entrega orientada a conexión mientras que UDP puede reducir la sobrecarga dependiendo del firmware del rastreador
- Asegúrese de que el APN del dispositivo y el plan de datos permitan conexiones salientes al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Diferentes versiones de firmware para el A202 pueden cambiar intervalos de reporte, eventos soportados o campos disponibles en los mensajes
- Revisiones de hardware pueden introducir pequeñas diferencias en el soporte de transporte o en el comportamiento de gestión de energía
- Configuraciones del lado del fabricante y funciones opcionales pueden modificar cuándo y cómo se envían los datos al servidor
- La selección entre UDP y TCP en el dispositivo afecta la semántica de entrega y debe coincidir con lo que soporta el firmware
- Verifique que el host de reporte del dispositivo esté configurado en d.plaspy.com o 54.85.159.138 y el puerto en 8888 para la integración con Plaspy
- Confirme siempre el comportamiento frente a la documentación más reciente del fabricante para el número de serie o la versión de firmware específicos

## Por qué es importante comprender el protocolo

Entender cómo se comunica el A202 ayuda a garantizar una configuración fiable del dispositivo, facilita la solución de problemas y permite un comportamiento predecible en despliegues productivos. Una comprensión básica del protocolo reduce el tiempo de incorporación y mejora la estabilidad a largo plazo.

- Simplifica la configuración inicial al aclarar qué servidor y puerto debe reportar el dispositivo
- Ayuda a diagnosticar fallas de conectividad o reporte al acotar las comprobaciones a transporte y ajustes del endpoint
- Permite tomar decisiones informadas sobre modo de transporte e intervalos de reporte para optimizar la vida de la batería
- Facilita la interpretación del comportamiento del dispositivo después de actualizaciones de firmware o cuando aparecen revisiones de hardware
- Mejora la coordinación con el fabricante cuando surgen preguntas sobre implementaciones específicas del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el AoYa A202 con Plaspy ofrece a las organizaciones una vía sencilla para convertir la telemetría del dispositivo en información de ubicación y estado accionable. La combinación de batería de larga duración, construcción resistente al agua y posicionamiento GNSS fiable mediante receptor u blox hace que el A202 sea adecuado para monitoreo de flotas o activos donde importan la autonomía y la precisión.

Plaspy provee un modelo de endpoint consolidado de modo que los dispositivos configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 son enrutados y detectados automáticamente sin necesidad de configurar puertos por dispositivo. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes del protocolo específico del dispositivo y el comportamiento del firmware, verifique la información en el sitio del fabricante http://www.aoyagps.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
