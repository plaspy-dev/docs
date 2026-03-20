---
slug: /coban/bn_401b/protocol
id: bn_401b-protocol
sidebar_label: Protocol
title: Coban - BN-401B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Coban BN-401B y cómo se comunica con Plaspy
keywords:
  - protocolo Coban BN-401B
  - protocolo GPS Coban BN-401B
  - compatibilidad BN-401B con Plaspy
  - protocolo de comunicación BN-401B
  - protocolo rastreador motocicleta Coban BN-401B
  - protocolo de rastreo BN-401B
  - rastreadores compatibles con Plaspy
  - rastreo de vehículos Coban BN-401B
  - guía de protocolo de rastreador GPS
  - compatibilidad telemetría BN-401B
---

# Coban - BN-401B Protocolo

Esta página ofrece una descripción pública y de alto nivel de cómo el Coban BN-401B se comunica con Plaspy. Se centra en el contexto de comunicación y en las consideraciones prácticas necesarias para integrar un BN-401B con Plaspy para ubicación en tiempo real, alertas y telemetría, sin exponer detalles propietarios de implementación.

El BN-401B es un rastreador GPS compacto 4G diseñado para motocicletas y vehículos pequeños, compatible con reportes por TCP, UDP y SMS, además de configuración por Bluetooth. Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; siempre valide los detalles específicos del equipo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el BN-401B formatea y envía mensajes de ubicación, estado y alarma a un servidor remoto, y cómo esa información es utilizada por una plataforma como Plaspy. En términos prácticos, el protocolo permite que el dispositivo se identifique, entregue posiciones GNSS oportunas y reporte eventos de alarma o telemetría que Plaspy procesa para monitoreo y flujos de trabajo.

- Permite el envío de posición GNSS, movimiento y eventos de alarma desde el dispositivo hacia un endpoint remoto.
- Transporta la identidad y el estado del dispositivo para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta múltiples opciones de transporte, incluyendo TCP, UDP y SMS, permitiendo reportes en distintas condiciones de red.
- Funciona con configuración local por Bluetooth para simplificar la puesta en marcha y cambios de parámetros sin alterar la semántica de los mensajes.
- Permite a Plaspy activar respuestas como notificaciones, flujos de inmovilización y reproducción de trazas históricas usando la telemetría reportada.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente el manejo apropiado para los mensajes de los rastreadores compatibles. Cuando un BN-401B está configurado para reportar a Plaspy, por lo general no es necesario seleccionar un protocolo específico dentro de la plataforma, siempre que el dispositivo apunte a la dirección de Plaspy y use un transporte esperado.

- El endpoint del servidor de Plaspy es d.plaspy.com y la dirección IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos soportados una vez que los mensajes llegan a la plataforma.
- Normalmente usted solo necesita asegurarse de que el BN-401B esté configurado para reportar al endpoint de Plaspy y use el método de transporte correcto.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte influyen en la confiabilidad y las características de entrega de los mensajes del BN-401B. El dispositivo soporta métodos de transporte comunes y opciones de configuración local que afectan cómo llega a Plaspy, pero la semántica de los mensajes a nivel superior sigue siendo el factor clave para la compatibilidad.

- El BN-401B puede usar TCP o UDP en el puerto 8888 para reportar directamente a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y el enrutamiento del servidor.
- SMS puede actuar como un canal alternativo de reporte o gestión cuando no hay datos celulares disponibles.
- La configuración por Bluetooth está disponible para setup local y cambios de parámetros sin abrir sesiones de datos.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar detalles de los mensajes o introducir nuevas funciones; confirme el comportamiento según el firmware instalado.
- Las revisiones de hardware y las variantes regionales pueden afectar bandas disponibles, valores predeterminados de transporte y opciones de configuración.
- La selección de transporte entre TCP y UDP puede impactar las garantías de entrega y debe coincidir con la configuración del dispositivo y las características de la red.
- Los reportes por SMS y la configuración por Bluetooth ofrecen rutas de respaldo o configuración local, pero pueden no transmitir la misma telemetría exacta.
- Siempre valide la compatibilidad y la configuración recomendada con la documentación oficial de Coban para su unidad y firmware.
- Asegúrese de que el dispositivo apunte al endpoint correcto de Plaspy y use el puerto 8888 para permitir la detección automática por parte de Plaspy.

## Por qué es importante entender el protocolo

Tener una comprensión clara del contexto de comunicación del BN-401B ayuda a garantizar una configuración predecible, una resolución de problemas más rápida y una operación confiable cuando el dispositivo se gestiona desde Plaspy. Entender el rol del transporte, el firmware y la configuración reduce el tiempo de integración y favorece resultados de monitoreo consistentes.

- Ayuda a verificar que el dispositivo esté reportando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir y procesar los mensajes.
- Facilita la resolución de problemas de conectividad al delimitar el alcance a transporte, SIM/red o ajustes del dispositivo.
- Permite decidir correctamente entre TCP y UDP según el comportamiento de la red y las prioridades operativas.
- Aclara cómo los eventos de alarma y telemetría se traducen en flujos de trabajo de Plaspy, como alertas por geocercas e inmovilización.
- Recomienda revisiones periódicas de firmware y configuración para mantener la compatibilidad y la disponibilidad de funciones a largo plazo.

## Por qué usar Plaspy con este protocolo

El BN-401B ofrece funciones enfocadas en antirobo y seguimiento en tiempo real adecuadas para motocicletas y vehículos pequeños. Cuando se configura para reportar a Plaspy, su conectividad 4G, suite de alarmas y capacidades de inmovilización remota se integran en los flujos de trabajo de Plaspy para monitoreo en vivo, alertas y análisis histórico. Esta combinación brinda a administradores de flotas y propietarios visibilidad concisa y accionable sobre la ubicación y los eventos sin configuraciones complejas.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el BN-401B visite https://www.plaspy.com. Para detalles más recientes específicos del dispositivo, notas de firmware y orientación del fabricante, verifique la documentación vigente en https://www.coban.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
