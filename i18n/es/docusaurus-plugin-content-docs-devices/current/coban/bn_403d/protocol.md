---
slug: /coban/bn_403d/protocol
id: bn_403d-protocol
sidebar_label: Protocol
title: Coban - BN-403D Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador GPS Coban BN-403D y compatibilidad con Plaspy para comunicación y configuración
keywords:
  - Protocolo Coban BN-403D
  - Protocolo GPS Coban BN-403D
  - Protocolo Coban BN-403D para Plaspy
  - Protocolo de comunicación Coban BN-403D
  - Protocolo de rastreo Coban BN-403D
  - Protocolo del rastreador BN-403D
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreador GPS para vehículos
  - Protocolo GPS para gestión de flotas
  - Compatibilidad de rastreador GPS con Plaspy
---

# Coban - Protocolo BN-403D

Esta página explica el contexto público del protocolo para usar el rastreador vehicular Coban BN-403D con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, de modo que gerentes de flota, integradores y usuarios técnicos puedan comprender la conexión y el comportamiento de reporte que permiten ver la ubicación en tiempo real, las alarmas y la telemetría en la plataforma Plaspy.

El BN-403D es un rastreador vehicular compacto compatible con LTE y 2G, con configuración por Bluetooth, entradas para alarmas, detección de combustible opcional y monitoreo de voz unidireccional. Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante; por ello esta página ofrece contexto general del protocolo en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que usa el BN-403D para enviar fijaciones de posición, actualizaciones de estado y eventos de alarma a un servidor remoto como Plaspy. En términos prácticos, el protocolo permite que el dispositivo se identifique, entregue datos útiles y reciba comandos de configuración o control cuando están disponibles.

- Permite al BN-403D entregar posición, hora y telemetría a Plaspy para rastreo en vivo y reproducción histórica.
- Transporta señales de alarma y estado como encendido ACC, puertas abiertas, impacto, exceso de velocidad, SOS y pérdida de alimentación para el procesamiento de eventos.
- Proporciona un canal de reporte consistente que permite a Plaspy asociar los mensajes entrantes con un dispositivo específico y aplicar reglas configuradas por el usuario.
- Soporta patrones de configuración remota en los que el rastreador acepta cambios por aire o mediante Bluetooth local según las capacidades del modelo.
- Funciona sobre protocolos de transporte estándar, de modo que el rastreador opera en entornos de red diversos y puede cambiar entre modos celulares según sea necesario.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un endpoint y puerto compartidos y realiza detección automática de protocolo para que la mayoría de los dispositivos correctamente configurados no requieran selección manual del protocolo dentro de Plaspy. La detección busca hacer coincidir el formato del mensaje entrante con un tipo de dispositivo soportado y luego encaminar los datos al flujo de trabajo de la plataforma.

- Plaspy recibe el tráfico de rastreadores en la dirección de servidor d.plaspy.com y en la IP pública 54.85.159.138.
- La plataforma escucha en el puerto común 8888, que se utiliza para todos los dispositivos soportados por Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir una opción de protocolo cuando el dispositivo apunta al endpoint de Plaspy.
- La configuración correcta del dispositivo para reportar a la dirección y puerto de Plaspy es el paso clave para que la detección automática funcione.
- Si un rastreador no reporta como se espera, verificar la alcanzabilidad de red a d.plaspy.com o 54.85.159.138 en el puerto 8888 es un primer paso práctico de solución de problemas.

## Transporte y contexto de conexión

El BN-403D puede configurarse para usar protocolos de transporte comunes según el firmware y las opciones de configuración. El contexto de conexión determina cómo el dispositivo entrega sus mensajes de protocolo al endpoint de Plaspy y cómo se comporta la entrega fiable en distintas redes.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o directamente a 54.85.159.138 en el puerto compartido 8888.
- Usar TCP puede ofrecer entrega orientada a conexión, mientras que UDP puede ser útil para reportes ligeros en ciertas condiciones de red, sujeto a la capacidad del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del endpoint en despliegues con múltiples equipos.
- Factores de red como NAT del operador, reglas de firewall y configuración de APN pueden afectar la conectividad y deberían validarse al poner en marcha un dispositivo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, las funciones soportadas y campos opcionales. Verifique la versión de firmware del rastreador al confirmar el comportamiento.
- Las revisiones de hardware y las opciones de accesorios, como sensores externos de combustible, pueden añadir o cambiar los canales de telemetría disponibles.
- La configuración por parte del fabricante y las variantes regionales del firmware pueden alterar las opciones de transporte o reporte por defecto.
- La selección de transporte entre UDP y TCP depende del dispositivo y debe coincidir con la configuración del BN-403D.
- La conmutación por SMS u otros métodos alternativos de reporte puede estar disponible en el dispositivo, pero son rutas separadas del camino de reporte TCP/UDP hacia Plaspy.
- Siempre contraste cualquier paso de configuración con la documentación más reciente del fabricante para los conjuntos de comandos y valores por defecto específicos del dispositivo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del BN-403D ayuda a asegurar una instalación confiable, una solución de problemas precisa y un comportamiento predecible a largo plazo cuando los dispositivos se integran con Plaspy. Conocer la ruta de reporte y las dependencias de configuración reduce el tiempo de despliegue y mejora la visibilidad operativa.

- Ayuda a diagnosticar problemas de conectividad enfocando los esfuerzos en el transporte y el endpoint de servidor correctos.
- Mejora la eficiencia en la puesta en marcha cuando varios dispositivos apuntan al mismo servidor y puerto de Plaspy.
- Facilita confirmar qué tipos de telemetría y alarmas suministrará el dispositivo a la plataforma Plaspy.
- Apoya la planificación de actualizaciones de firmware, diferencias de hardware y compatibilidad de accesorios en toda la flota.
- Permite mejor coordinación entre la instalación en vehículos, la provisión celular y la configuración en Plaspy para un reporte consistente.

## Por qué usar Plaspy con este protocolo

Usar el Coban BN-403D con Plaspy combina las funciones de hardware con una plataforma diseñada para visibilidad de flotas. El BN-403D aporta posición en tiempo real, eventos de alarma y telemetría opcional como nivel de combustible, mientras que Plaspy ofrece paneles centralizados, alertas y reproducción histórica que hacen que esas señales sean accionables para los equipos operativos.

Si desea saber más sobre cómo Plaspy utiliza los protocolos de dispositivos en el rastreo de flotas y activos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación de implementación más actualizados, verifique siempre la información con el fabricante en https://www.coban.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
