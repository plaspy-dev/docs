---
slug: /bofan/b5/protocol
id: b5-protocol
sidebar_label: Protocol
title: Bofan - B5 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Bofan B5 y su comunicación con Plaspy para monitoreo de flotas confiable
keywords:
  - protocolo Bofan B5
  - protocolo GPS Bofan B5
  - protocolo del rastreador B5
  - compatibilidad GPS Bofan Plaspy
  - protocolo de rastreo Bofan Plaspy
  - protocolo rastreador GPS B5
  - rastreo vehicular Bofan B5
  - protocolo gestión de flotas B5
  - comunicación Bofan B5
  - compatibilidad de dispositivos Plaspy
---

# Bofan - Protocolo B5

Esta página describe, en términos públicos, el protocolo usado por el rastreador vehicular Bofan B5 para integrarse con Plaspy. Resume cómo el dispositivo reporta posiciones, eventos y telemetría a Plaspy y qué esperar de los ajustes compartidos de conexión que emplea la plataforma, basándose en la descripción del producto B5 y en patrones comunes de integración.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento en el campo puede diferir ligeramente de este resumen general.

## Resumen del protocolo

Conocer el protocolo de reporte del B5 en términos públicos ayuda a explicar cómo el dispositivo entrega datos útiles a Plaspy sin exponer detalles internos del fabricante. A grandes rasgos, el protocolo permite que el rastreador se identifique, envíe posiciones GNSS, reporte el estado de sensores y entradas, y transmita alertas de eventos que Plaspy puede procesar y presentar a los usuarios.

- Transporta actualizaciones de ubicación y telemetría desde el B5 hasta un servidor de Plaspy para generar mapas en tiempo real e informes.
- Informa tipos de eventos como activación de geocercas, exceso de velocidad, remolque, choque y SOS, de modo que Plaspy pueda mapearlos a alarmas y flujos de trabajo.
- Envía identificación del equipo e información de estado para que Plaspy asocie los reportes con el activo correcto.
- Almacena datos localmente cuando está fuera de línea y sube la telemetría guardada cuando vuelve la conectividad, lo que mantiene la continuidad de los registros históricos.
- Permite comandos remotos sobre el enlace celular para cambios de configuración y salidas remotas cuando el dispositivo lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un único endpoint y puerto compartido para la recepción de reportes e incorpora detección automática de protocolo, por lo que la mayoría de los dispositivos correctamente configurados no requieren selección manual de protocolo en la plataforma. La detección se realiza sobre las conexiones entrantes al endpoint compartido de Plaspy, lo que facilita la integración de equipos como el B5 con una configuración mínima si apuntan al servidor y puerto correctos.

- El dominio del servidor de Plaspy es d.plaspy.com y puede configurarse como destino de reporte.
- La IP del servidor de Plaspy es 54.85.159.138 como alternativa al dominio para la configuración del dispositivo si fuese necesario.
- La plataforma usa el puerto 8888 para todos los dispositivos y protocolos, por lo que un único ajuste de puerto es suficiente para los reportes del B5.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el B5 envía datos al endpoint y puerto compartidos.
- En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar a Plaspy.

## Contexto de transporte y conexión

El contexto de conexión explica cómo el B5 llega hasta Plaspy y qué opciones de transporte son las más usadas. El B5 puede configurarse para usar la red celular GPRS estándar para enviar telemetría al endpoint de Plaspy, y la capa de transporte puede ser UDP o TCP según el soporte del dispositivo y las preferencias de configuración.

- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP numérica 54.85.159.138 cuando la red o el aprovisionamiento requieren una dirección IP.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall en despliegues de flota.
- Use el modo de transporte que soporte la versión de firmware específica del B5 y confirme los permisos de red con su operador móvil.
- Verifique que el APN del dispositivo y la provisión de la SIM permitan transferencia de datos GPRS hacia el endpoint de Plaspy para un reporte fiable.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar los comandos disponibles, los conjuntos de eventos y los intervalos de reporte; confirme la compatibilidad con la versión de firmware instalada en cada B5.
- Las revisiones de hardware y las variantes regionales pueden modificar las bandas celulares soportadas o características como sensores internos y entradas.
- La configuración del fabricante determina si el B5 usa TCP o UDP y con qué frecuencia reporta; confirme estos ajustes durante el aprovisionamiento del dispositivo.
- El comportamiento del operador de red y la configuración del APN pueden afectar la conectividad y requerir ajustes específicos del perfil de la SIM.
- Valide que los formatos de comandos remotos requeridos sean compatibles con el firmware del dispositivo antes de depender de funciones de control remoto.
- Siempre contraste el comportamiento de ingestión de Plaspy con la documentación del fabricante para el modelo y firmware precisos.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del B5 reduce el tiempo de puesta en marcha, acelera la resolución de problemas y mejora la confiabilidad a largo plazo al usar Plaspy para la gestión de flotas. Saber cómo reporta el dispositivo y qué espera la plataforma permite un diagnóstico más rápido cuando los eventos no aparecen o la telemetría está incompleta.

- Identificación más veloz de problemas de configuración, como servidor, IP o puerto incorrectos.
- Mejor resolución de problemas de conectividad al confirmar el tipo de transporte y la configuración del APN.
- Expectativas claras sobre qué eventos y telemetría estarán disponibles en Plaspy según las capacidades del firmware.
- Planificación mejorada para registro offline y estrategias de subida de datos cuando los vehículos entran en zonas de baja cobertura.
- Menor fricción en el despliegue al alinear los pasos de aprovisionamiento del dispositivo con los requisitos del endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Bofan B5 con Plaspy entrega a las organizaciones visibilidad centralizada de la ubicación de los vehículos, tiempo de motor y eventos críticos. La combinación de sensores a bordo, almacenamiento offline y la ingestión de Plaspy ofrece a los gestores de flota alertas oportunas, reportes históricos y la capacidad de actuar mediante salidas remotas cuando el dispositivo lo permite. Esta integración soporta flujos de trabajo anti robo, monitoreo de seguridad del conductor e informes operacionales sin necesitar una configuración profunda de protocolos en la plataforma.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el Bofan B5, visite https://www.plaspy.com. Para obtener los detalles más recientes del protocolo específico del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información actual en el sitio oficial de Bofan https://www.bofancloud.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
