---
slug: /ruptela/lcv5/protocol
id: lcv5-protocol
sidebar_label: Protocol
title: Ruptela - LCV5 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador Ruptela LCV5 con la plataforma Plaspy
keywords:
  - protocolo Ruptela LCV5
  - protocolo GPS Ruptela LCV5
  - protocolo de rastreo LCV5
  - protocolo telemático Ruptela
  - compatibilidad LCV5 Plaspy
  - protocolo rastreador GPS Ruptela
  - protocolo de rastreo vehicular LCV5
  - telemetría CAN OBD LCV5
  - protocolo dispositivo Plaspy
  - rastreo de flotas Ruptela
---

# Ruptela - Protocolo LCV5

Esta página presenta el contexto público del protocolo para usar el rastreador Ruptela LCV5 con Plaspy. Explica, en términos generales, cómo el dispositivo se comunica con Plaspy para que responsables de flotas e integradores técnicos comprendan el papel del protocolo de reporte sin divulgar detalles privados del fabricante. El contenido se basa en la descripción del producto LCV5 y en prácticas públicas de integración.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que siempre confirme los detalles específicos del equipo con el proveedor cuando sea necesario.

## Resumen del protocolo

El protocolo del LCV5 es el conjunto de reglas y convenciones de mensaje que permiten al rastreador enviar posiciones GPS, telemetría CAN y OBD, eventos de entradas y salidas, y datos de sensores a Plaspy. A alto nivel, el protocolo facilita la identificación del dispositivo, el reporte de estado y la entrega de telemetría para que Plaspy ofrezca seguimiento, alertas y análisis.

- Permite asociar información de identificación y autenticación del dispositivo con los reportes entrantes para que Plaspy relacione los datos con el activo correcto.
- Transporta posición GPS, marca de tiempo y datos de movimiento para que Plaspy muestre ubicación en tiempo real e historial de rutas.
- Lleva telemetría del vehículo como parámetros CAN y OBD, además del estado de entradas digitales y analógicas para flujos de trabajo basados en eventos.
- Admite datos de sensores auxiliares y BLE cuando la variante de hardware LCV5 incluye conectividad Bluetooth para sensores externos.
- Facilita canales de configuración y comandos remotos vía SMS o herramientas de gestión remota cuando el dispositivo y el operador lo soportan.

## Cómo Plaspy detecta el protocolo

Plaspy recibe las conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y determina automáticamente el protocolo del dispositivo para los rastreadores compatibles. Esto significa que cuando un LCV5 está configurado para reportar al endpoint de Plaspy, la plataforma normalmente identificará y procesará sus mensajes sin que el usuario tenga que seleccionar el protocolo manualmente.

- Plaspy escucha el tráfico de rastreadores en el mismo puerto para todos los dispositivos soportados, por lo que no hay puertos por dispositivo que administrar.
- Los equipos deben configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- La plataforma Plaspy detecta automáticamente el protocolo del rastreador para modelos compatibles cuando recibe datos válidos.
- En la mayoría de los despliegues no es necesario seleccionar un protocolo manualmente dentro de Plaspy si el LCV5 apunta al endpoint correcto y utiliza el transporte soportado.
- Si un dispositivo no está siendo detectado, verifique la dirección de reporte, el tipo de transporte y que el firmware del equipo esté enviando la telemetría esperada para ese modelo.

## Transporte y configuración de conexión

El transporte de conexión y los ajustes del endpoint determinan cómo el LCV5 entrega los mensajes del protocolo a Plaspy. El LCV5 soporta transportes celulares comunes y puede configurarse para usar UDP o TCP según las capacidades del equipo y los requisitos del despliegue.

- Los dispositivos LCV5 pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Plaspy acepta conexiones de rastreadores en el puerto 8888 para todos los dispositivos compatibles, por lo que una configuración de puerto coherente simplifica los despliegues.
- Los equipos pueden apuntarse al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el reporte.
- Elija UDP o TCP según la fiabilidad de la red, las recomendaciones del operador y las opciones de configuración del dispositivo disponibles en las herramientas de Ruptela.
- Confirme el transporte y la dirección del servidor elegidos en la configuración del equipo y en cualquier regla de APN del operador o firewall que pueda afectar la conectividad.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden introducir cambios en los campos de telemetría enviados o en cómo se reportan sensores opcionales; siempre revise las notas de la versión del firmware para LCV5.
- Las variantes de hardware, como el modelo con BLE, proporcionan tipos adicionales de telemetría que aparecerán en Plaspy cuando el dispositivo esté configurado para reportarlos.
- La selección de transporte, UDP frente a TCP, puede afectar el comportamiento de entrega y los requisitos de red; verifique qué transporte se recomienda para su despliegue.
- Puede ser necesario utilizar las herramientas de gestión de dispositivos del fabricante para habilitar canales de telemetría específicos, como parámetros CAN o OBD extendidos.
- La detección por la plataforma depende de que el equipo reporte al endpoint de Plaspy; una dirección o puerto incorrectos impiden la detección automática.
- Valide la compatibilidad contra la documentación de producto de Ruptela y confirme que el firmware del dispositivo está destinado a la integración con plataformas de terceros.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del LCV5 ayuda a asegurar una configuración correcta, mejora la eficiencia en la resolución de problemas y favorece una operación confiable a largo plazo cuando se integra con Plaspy. Tener claro qué reporta el dispositivo y cómo se conecta reduce tiempos de inactividad y permite un mejor aprovechamiento de la telemetría en las operaciones.

- Configuración más rápida al asegurar que el equipo apunte al endpoint correcto de Plaspy y use el transporte recomendado.
- Resolución de problemas más eficiente cuando la telemetría falta o está incompleta, al poder acotar la causa a firmware, transporte o conectividad con el servidor.
- Mejor planificación del uso de funciones como métricas basadas en CAN, monitoreo de combustible o datos de sensores BLE, de modo que los paneles y alertas de Plaspy se configuren adecuadamente.
- Mayor seguridad y planificación de red al conocer el endpoint y puerto con los que se comunicará el dispositivo.
- Coordinación más sencilla con la gestión de dispositivos de Ruptela para cambios de firmware o provisión que afecten los reportes.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela LCV5 con Plaspy ofrece a las flotas una vía práctica para consolidar ubicación de vehículos, telemetría CAN y OBD, monitoreo de combustible y eventos de sensores en una sola plataforma de supervisión e informes. El hardware LCV5 y la plataforma Plaspy, juntos, permiten visibilidad operacional para flujos de trabajo antirrobo, programas de comportamiento del conductor, gestión de combustible y monitoreo de carga sensorada.

Para conocer más sobre Plaspy y cómo la plataforma trabaja con dispositivos como el LCV5 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo específica y más reciente en el sitio del fabricante https://ruptela.com/ antes de finalizar despliegues.
