---
slug: /tzone/tz_tt18/protocol
id: tz_tt18-protocol
sidebar_label: Protocol
title: TZone - TZ-TT18 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TZone TZ-TT18 y cómo se comunica con Plaspy para monitoreo de temperatura y humedad
keywords:
  - protocolo tzone tz tt18
  - protocolo gps tzone tz tt18
  - protocolo de rastreo tzone tz tt18
  - protocolo de comunicación tzone tz tt18
  - compatibilidad tz tt18 plaspy
  - integración de rastreadores plaspy
  - protocolo de rastreo temperatura humedad
  - protocolo de cadena de frío
  - compatibilidad rastreadores gprs
  - protocolo del dispositivo tz tt18
---

# TZone - Protocolo TZ-TT18

Esta página describe el contexto público del protocolo para usar el transmisor de temperatura y humedad TZone TZ-TT18 con Plaspy. Se centra en cómo el dispositivo se comunica por la red, qué papel tiene el protocolo de reporte para llevar telemetría útil a Plaspy y consideraciones prácticas de configuración y resolución de problemas, sin entrar en detalles internos específicos del firmware.

El TZ-TT18 es un transmisor compacto GSM GPRS que requiere una tarjeta SIM, despierta para transmisiones programadas o por operación manual, y envía datos de temperatura y humedad a un servidor. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar los detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El contexto del protocolo TZ-TT18 cubre cómo el dispositivo empaqueta y entrega datos de medición por GPRS a un punto final remoto para que una plataforma de rastreo como Plaspy pueda ingerirlos. El protocolo regula la identificación, los tiempos y la entrega del payload mientras que el firmware del dispositivo implementa la lógica de sueño y despertar para maximizar la autonomía de la batería.

- Permite que el TZ-TT18 reporte mediciones de temperatura y humedad a un servidor remoto para su procesamiento
- Incluye información básica de identificación para que Plaspy asocie los datos entrantes con el registro del dispositivo
- Codifica lecturas con marca de tiempo e indicadores de estado necesarios para monitoreo de cadena de frío o almacenamiento
- Soporta el patrón de reporte con sueño y despertar del dispositivo para que las transmisiones ocurran solo en intervalos configurados o por acción del usuario
- Facilita la entrega fiable sobre el enlace celular GPRS hacia el endpoint de Plaspy para su uso posterior en alertas e historiales

## Cómo detecta Plaspy el protocolo

Plaspy acepta datos entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que generalmente no es necesario seleccionar manualmente un protocolo en la plataforma. Cuando un TZ-TT18 está configurado para reportar a Plaspy, la plataforma utiliza las características de conexión y del paquete para identificar el dispositivo y comenzar a procesar sus reportes.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- La plataforma escucha en el puerto 8888 para conexiones de dispositivos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Por lo general, los usuarios solo necesitan configurar el dispositivo para que apunte al endpoint de Plaspy y la plataforma emparejará los datos entrantes con el tipo de dispositivo
- Si un dispositivo está correctamente configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto de Plaspy, normalmente no se requiere selección manual del protocolo

## Transporte y contexto de conexión

El TZ-TT18 utiliza el enlace celular GPRS para alcanzar el endpoint de Plaspy. El comportamiento del transporte puede configurarse en el dispositivo y depende del firmware y de la disponibilidad de la red de la SIM. Comprender los ajustes de transporte y del endpoint es importante para asegurar que los datos lleguen a Plaspy de forma confiable.

- El dispositivo puede configurarse para usar UDP o TCP para el reporte según el soporte del dispositivo y la configuración
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos usan el mismo puerto en Plaspy
- Los dispositivos pueden configurarse para apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- La conectividad GPRS y la calidad de la señal celular influyen en el éxito de las transmisiones y en la lógica de reintentos
- El reporte con sueño y despertar reduce el tiempo de conexión y conserva batería, por lo que verifique que los intervalos del dispositivo coincidan con sus necesidades de monitoreo

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento exacto de los reportes o los campos disponibles; verifique los detalles del firmware al solucionar problemas
- Las revisiones de hardware o variantes regionales pueden alterar modos de transporte soportados o la configuración de servidor por defecto
- Las herramientas de configuración del fabricante y los ajustes por defecto determinan si se usa TCP o UDP para reportar
- Los modos de ahorro de batería y los buffers de mensajes almacenados (por ejemplo, guardar datos GPRS cuando está offline) afectan cuándo y cómo se transmiten los datos
- Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 es necesario para la ingestión por Plaspy
- Siempre contraste la configuración del dispositivo con la documentación del fabricante para la revisión de firmware correspondiente

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación TZ-TT18 ayuda a asegurar una configuración correcta, reportes predecibles y una resolución eficiente de problemas al usar Plaspy. Conocer la interacción entre la programación del dispositivo, el transporte y el endpoint de Plaspy mejora la fiabilidad a largo plazo en aplicaciones de monitoreo.

- Ayuda a confirmar que el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Aclara si el dispositivo debería usar UDP o TCP en su escenario de despliegue
- Facilita la interpretación de datos faltantes, reportes retrasados o comportamientos relacionados con la batería
- Apoya la planificación de almacenamiento y reglas de alerta en logística de cadena de frío y aplicaciones médicas
- Reduce el tiempo de resolución al coordinarse con el fabricante del dispositivo o el operador de red

## Por qué usar Plaspy con este protocolo

Usar el TZ-TT18 con Plaspy ofrece un camino sencillo para capturar telemetría de temperatura y humedad desde dispositivos desplegados en cadena de frío, almacenamiento médico, refrigeración u otros entornos que requieren monitoreo ambiental. La detección automática de protocolos y el enfoque de endpoint único de Plaspy simplifican el alta de dispositivos, de modo que los equipos que apunten al endpoint de Plaspy comienzan a reportar con una configuración mínima dentro de la plataforma.

Para obtener más información sobre Plaspy y cómo puede ingerir y mostrar datos del TZ-TT18, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en http://www.tzonedigital.com/
