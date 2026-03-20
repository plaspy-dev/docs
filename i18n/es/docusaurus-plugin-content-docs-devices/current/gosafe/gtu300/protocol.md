---
slug: /gosafe/gtu300/protocol
id: gtu300-protocol
sidebar_label: Protocol
title: Gosafe - GTU300 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para conectar dispositivos Gosafe GTU300 a servidores Plaspy y lograr seguimiento fiable de flotas y telemetría
keywords:
  - Protocolo Gosafe GTU300
  - Protocolo GPS Gosafe GTU300
  - Compatibilidad Gosafe GTU300 Plaspy
  - Protocolo de seguimiento GTU300
  - Protocolo de comunicación GTU300
  - Rastreador Gosafe Plaspy
  - Seguimiento de flotas GTU300
  - Protocolo telemático Gosafe
  - Compatibilidad de dispositivos Plaspy
  - Protocolo rastreador GPS GTU300
---

# Gosafe - Protocolo GTU300

Esta página ofrece contexto público sobre el protocolo del rastreador Gosafe GTU300 para su uso con Plaspy. Resume cómo el dispositivo comunica información útil de ubicación y telemetría a Plaspy, qué endpoints de conexión se usan habitualmente y qué aspectos del protocolo son importantes al integrar el GTU300 para gestión de flotas, recuperación de vehículos robados o seguros basados en uso.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el GTU300 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y la cadencia de los mensajes pueden variar según la versión de firmware, la revisión de hardware, variantes regionales e implementación del fabricante, por lo que esta página se concentra en contexto práctico y no en detalles sensibles internos del dispositivo.

## Descripción general del protocolo

El protocolo de reporte del GTU300 define cómo la unidad se identifica, cómo empaqueta datos de ubicación y sensores, y cómo se envían eventos y cambios de estado al backend. En el contexto de Plaspy, el protocolo permite la ingesta fiable de ubicaciones GNSS y métodos alternativos, telemetría desde entradas y puertos serie, eventos del acelerómetro y actualizaciones de estado para que funciones de la plataforma como geocercas, alertas e historiales de viaje operen correctamente.

- Proporciona identificación del dispositivo e información de sesión para que Plaspy atribuya los mensajes al activo correspondiente
- Transmite actualizaciones periódicas de ubicación y reportes impulsados por eventos como cambios de ignición, alarmas y disparos del acelerómetro
- Transporta telemetría de sensores y periféricos desde RS232/RS485, dispositivos 1‑Wire y accesorios BLE para obtener información de flota más completa
- Soporta múltiples transportes para que el rastreador mantenga conectividad bajo distintas condiciones de red
- Habilita comandos remotos y actualizaciones OTA cuando se combina con plataformas de gestión compatibles

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico en un único endpoint y puerto compartido y usa esos datos entrantes para determinar automáticamente el protocolo del dispositivo. Cuando un GTU300 está configurado para reportar a Plaspy, la plataforma suele reconocer el equipo sin necesidad de seleccionar el protocolo manualmente en la mayoría de implementaciones estándar.

- Plaspy escucha en el endpoint de servidor compartido d.plaspy.com para conexiones entrantes de rastreadores
- La plataforma es accesible en la IP pública del servidor 54.85.159.138 y acepta tráfico de rastreadores en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere selección manual
- Un GTU300 correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 será procesado por la plataforma
- Los usuarios deben asegurarse de que los parámetros de reporte del dispositivo coincidan con el transporte y la dirección elegidos para permitir a Plaspy detectar e ingerir los mensajes

## Transporte y contexto de conexión

El GTU300 soporta múltiples opciones de transporte y puede configurarse para usar la que mejor se adapte al despliegue. Para la comunicación con Plaspy, los dispositivos comúnmente apuntan al endpoint de Plaspy usando TCP o UDP en el puerto estándar, con SMS o canales de plataforma de gestión disponibles como respaldo cuando están soportados.

- El GTU300 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy
- Los equipos pueden apuntar a d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración de puerto es consistente entre modelos
- Opciones de respaldo celular como GPRS o SMS están disponibles en el dispositivo para reporte resiliente
- El soporte para Dual SIM y eSIM en el GTU300 ayuda a mantener la conectividad en entornos con múltiples operadores

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en la frecuencia de reporte, campos de telemetría o comportamiento del transporte; siempre revise las notas del firmware del dispositivo
- Las variantes de hardware y los modelos regionales pueden diferir en bandas disponibles, rendimiento GNSS o soporte de periféricos
- La selección de transporte entre TCP y UDP afecta las garantías de entrega de mensajes y debe alinearse con las expectativas de la red y la plataforma
- Las actualizaciones OTA y las plataformas de gestión de dispositivos pueden modificar la forma y el momento en que el equipo envía mensajes diagnósticos o relacionados con actualizaciones
- Es posible que los valores predeterminados configurados por el fabricante necesiten ajuste para apuntar el dispositivo a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888
- Valide un despliegue piloto pequeño para confirmar que los mapeos de sensores y las definiciones de eventos se comportan como espera con su cuenta de Plaspy

## Por qué es importante entender el protocolo

Una comprensión clara del protocolo de comunicación del GTU300 ayuda a asegurar una configuración rápida, operaciones confiables y una resolución eficiente de problemas al integrar los dispositivos con Plaspy. Saber qué transportes utiliza el dispositivo, cómo reporta eventos y qué puede variar según el firmware permite reducir fricciones en la integración y mejorar la calidad de los datos para las operaciones de flota.

- Acelera la configuración inicial y reduce errores comunes de enrutamiento o desajustes de puerto
- Facilita el diagnóstico de problemas de conectividad entre el rastreador y el endpoint de Plaspy
- Mejora la interpretación de campos de telemetría provenientes de interfaces serie, 1‑Wire y sensores BLE
- Apoya la planificación de actualizaciones de firmware y flujos de trabajo de gestión de dispositivos
- Permite un manejo predecible de respaldos como GPRS o SMS cuando las redes primarias no están disponibles

## Por qué usar Plaspy con este protocolo

Usar el GTU300 con Plaspy ofrece a las organizaciones un camino completo desde los sensores del vehículo hasta insights operativos accionables. El GTU300 aporta GNSS de alta sensibilidad, fallback por Wi‑Fi, resiliencia celular y entradas/salidas ricas para que Plaspy entregue seguimiento en tiempo real, alertas de geocerca, análisis de viajes y notificaciones basadas en eventos al equipo de operaciones.

Si desea obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para las notas más recientes específicas del dispositivo, detalles de firmware y variantes de hardware, por favor verifique la información con el fabricante en https://gosafesystem.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
