---
slug: /falcom/fox_in/protocol
id: fox_in-protocol
sidebar_label: Protocol
title: Falcom - FOX-IN Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador Falcom FOX IN con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - Protocolo Falcom FOX IN
  - Rastreador GPS FOX IN
  - Protocolo GPS Falcom
  - Compatibilidad FOX IN Plaspy
  - Rastreo de vehículos Falcom
  - Protocolo de comunicación FOX IN
  - Compatibilidad de dispositivos Plaspy
  - Protocolo GPS para gestión de flotas
  - Geocercas FOX IN
  - Integración de rastreador Falcom
---

# Falcom - Protocolo FOX-IN

Esta página describe el contexto público del protocolo para usar el rastreador Falcom FOX-IN con Plaspy. Explica cómo se comunica el dispositivo en términos generales, qué ajustes de conexión espera Plaspy y por qué comprender el protocolo de reporte ayuda a una integración confiable para casos de uso como gestión de flotas, AVL, seguridad y recuperación de activos.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. Para Plaspy, la información del endpoint de servidor es d.plaspy.com con una ruta alternativa a 54.85.159.138 y el puerto estándar es 8888. El FOX-IN puede configurarse para usar UDP o TCP para reportar a ese endpoint, y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo regula cómo el FOX-IN comunica ubicación, estado, alertas e información diagnóstica a un servidor remoto como Plaspy. A alto nivel, permite la identificación, reportes periódicos y por eventos, y la interacción básica entre el rastreador y el servidor.

- Permite que el FOX-IN se identifique y asocie los reportes a un dispositivo o activo concreto
- Transporta actualizaciones periódicas de posición además de mensajes de evento y alerta necesarios para flotas y procesos de seguridad
- Envía el estado de sensores y valores telemáticos básicos que Plaspy puede mostrar para monitoreo e informes
- Soporta actualizaciones de configuración y comandos remotos cuando el dispositivo y el servidor acuerdan el transporte y direccionamiento
- Habilita notificaciones relacionadas con geocercas para monitoreo de rutas y áreas cuando está configurado en el dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y analiza los datos recibidos para determinar el tipo de dispositivo y la familia de protocolo. Dado que Plaspy centraliza el manejo de conexiones, la plataforma normalmente detecta automáticamente el protocolo del rastreador cuando este informa al endpoint correcto de Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos para simplificar la configuración y reducir errores
- Los dispositivos que reportan a d.plaspy.com o 54.85.159.138 en el puerto 8888 pueden ser reconocidos por Plaspy sin selección manual de protocolo
- En general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el FOX-IN está configurado para reportar al endpoint de Plaspy
- La detección automática reduce la fricción al agregar dispositivos diversos de múltiples fabricantes
- Si un dispositivo no aparece en línea, verifique los ajustes de reporte del dispositivo y el comportamiento del firmware según las indicaciones del fabricante

## Contexto de transporte y conexión

La elección del transporte afecta cómo el FOX-IN establece la conexión con Plaspy y cómo se entregan los mensajes. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de red. Tanto el nombre de dominio d.plaspy.com como la IP 54.85.159.138 son endpoints públicos de Plaspy que los rastreadores pueden apuntar.

- Los dispositivos FOX-IN pueden configurarse para reportar vía UDP o TCP según la preferencia del instalador y la capacidad del dispositivo
- Plaspy usa el puerto 8888 para todos los dispositivos soportados para simplificar la configuración y la detección
- Apunte el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo al dirigir el rastreador a Plaspy
- Consideraciones de red como NAT, firewalls y carrier grade NAT pueden afectar la accesibilidad del dispositivo
- Confirme el modo de transporte en el rastreador, ya que la elección puede influir en el comportamiento de entrega y en las retransmisiones

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el contenido de los mensajes y las funciones disponibles, por lo que la compatibilidad puede variar entre versiones
- Las revisiones de hardware y los módulos periféricos opcionales en el FOX-IN pueden añadir o cambiar campos telemáticos
- Opciones configurables por el fabricante, como intervalos de reporte, umbrales de alerta y selección de transporte, afectan cómo aparecen los datos en Plaspy
- Las geocercas y funciones avanzadas a menudo requieren tanto la configuración del dispositivo como reglas del lado del servidor
- Use TCP cuando se requiera entrega confiable y paquetes ordenados, y UDP cuando se prefiera menor sobrecarga y latencia, siempre que sea compatible
- Valide siempre la compatibilidad y los ajustes recomendados con la documentación oficial de Falcom para el modelo y firmware exactos del FOX-IN

## Por qué es importante entender el protocolo

Comprender cómo reporta el FOX-IN y cómo Plaspy espera recibir los datos ayuda en el despliegue exitoso, la resolución de problemas y la confiabilidad a largo plazo. Tener claro el contexto de comunicación reduce el tiempo de configuración y mejora la visibilidad operativa.

- Asegura que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir los datos
- Ayuda a diagnosticar problemas comunes de conectividad como modo de transporte incorrecto o puertos bloqueados
- Aclara expectativas sobre la frecuencia de reportes, los disparadores de eventos y cómo aparecerán las alertas en la plataforma
- Apoya la planificación de actualizaciones de firmware y la gestión del ciclo de vida del dispositivo que pueden cambiar el comportamiento del protocolo
- Mejora la calidad de la integración al combinar sensores y telemática del FOX-IN con los paneles y alertas de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Falcom FOX-IN con Plaspy ofrece un camino directo para integrar un rastreador versátil en un flujo de trabajo operativo de seguimiento y gestión de flotas. Capacidades del FOX-IN como operación autónoma, interacción con sensores, geocercas y reporte de eventos encajan bien con las funciones de Plaspy para monitoreo, alertas e informes históricos.

Plaspy centraliza las conexiones de dispositivos en d.plaspy.com y 54.85.159.138 usando el puerto 8888 y detecta automáticamente el protocolo del rastreador para que instaladores y operadores puedan concentrarse en configurar el comportamiento del dispositivo en lugar de los ajustes de protocolo de la plataforma. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el FOX-IN visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo FOX-IN, el comportamiento del firmware y la documentación del dispositivo en el sitio del fabricante https://www.falcom.de porque el soporte de protocolo y las implementaciones del dispositivo pueden cambiar con el tiempo.
