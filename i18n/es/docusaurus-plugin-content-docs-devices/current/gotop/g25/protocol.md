---
slug: /gotop/g25/protocol
id: g25-protocol
sidebar_label: Protocol
title: GOTOP - G25 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GOTOP G25 y cómo el rastreador se comunica con Plaspy para un seguimiento confiable de activos
keywords:
  - protocolo GOTOP G25
  - rastreador GPS GOTOP G25
  - compatibilidad GOTOP G25 con Plaspy
  - protocolo de comunicación GOTOP G25
  - protocolo de rastreo GOTOP G25
  - protocolo rastreador de activos GOTOP
  - rastreador GOTOP G25 4G
  - protocolo de dispositivo Plaspy
  - compatibilidad rastreadores Plaspy
  - protocolo de rastreo vehicular
---

# GOTOP - Protocolo G25

Esta página explica el contexto público del protocolo para usar el rastreador GOTOP G25 con Plaspy. Describe a alto nivel cómo se comunica el dispositivo, qué papel juega el protocolo de reporte del rastreador para la entrega fiable de datos y qué verificar al configurar dispositivos para que reporten a Plaspy. El contenido está dirigido a gestores de flotas, integradores y usuarios técnicos que requieren orientación práctica y no sensible para integración y resolución de problemas.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan datos a la plataforma. El comportamiento exacto del protocolo en el G25 puede variar según versiones de firmware, revisiones de hardware y configuraciones del fabricante, por lo que esta página se concentra en orientación pública y práctica en lugar de detalles internos de firmware o formatos privados de comandos.

## Resumen del protocolo

El protocolo que utiliza un rastreador GPS define cómo el dispositivo reporta ubicación, estado, alarmas y telemetría a un servidor remoto. En el caso del G25, el protocolo de reporte permite que el dispositivo se identifique ante Plaspy, envíe actualizaciones de posición periódicas o por eventos y transmita información de alarmas o estado de batería que Plaspy puede presentar a usuarios y sistemas.

- Proporciona el canal para el envío de posición y estado del G25 al servidor.
- Incluye información de identidad para que Plaspy asocie los mensajes entrantes con el equipo correcto.
- Transporta notificaciones de eventos como alertas de movimiento, alertas por caída y avisos de batería baja.
- Soporta tanto reportes periódicos como mensajes basados en eventos, según la configuración del equipo y el firmware.
- Permite a Plaspy convertir la telemetría en datos útiles de posición, batería y entradas/salidas para seguimiento y alertas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y aplica detección automática de protocolo para asociar los datos recibidos con formatos de rastreadores conocidos. Cuando un G25 está configurado para reportar a Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de reporte.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha el tráfico de rastreadores en el puerto 8888 y usa el mismo puerto para todos los dispositivos compatibles.
- El G25 puede configurarse para usar UDP o TCP al enviar mensajes al endpoint de Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes del dispositivo llegan al endpoint.
- En la mayoría de los casos, una configuración DNS o IP correcta en el dispositivo es todo lo que se requiere para que Plaspy empiece a reconocer los mensajes entrantes.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el G25 alcanza a Plaspy a través de la red. El dispositivo soporta redes celulares y puede configurarse para reportar usando distintos modos de transporte; elegir el transporte y endpoint adecuados es esencial para un reporte confiable.

- El G25 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración.
- Los dispositivos pueden apuntar al dominio de reporte d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración del lado del equipo.
- Consideraciones de red como NAT del operador móvil, ajustes de APN y reglas de firewall pueden afectar si UDP o TCP es más confiable en una implementación concreta.
- Asegúrese de que el APN del equipo y los comandos de configuración por SMS o web (según los provea el fabricante) estén configurados para dirigirse al endpoint de reporte de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el tiempo de envío de mensajes, los campos disponibles y el soporte de comandos; verifique la versión de firmware del G25 si encuentra comportamientos inesperados.
- Revisiones de hardware o variantes regionales pueden introducir diferencias sutiles en el protocolo; consulte la etiqueta del dispositivo y la documentación para detalles de la variante.
- La elección entre UDP y TCP en el puerto 8888 puede afectar las características de entrega de mensajes y debe seleccionarse según sus necesidades de red y fiabilidad.
- Métodos de configuración del fabricante, como parámetros por SMS o herramientas de configuración, pueden ser necesarios para apuntar el dispositivo al endpoint de Plaspy.
- La detección automática de Plaspy reduce la necesidad de seleccionar manualmente un protocolo en la plataforma, pero se requieren ajustes correctos en el dispositivo.
- Siempre valide la compatibilidad y la disponibilidad de funciones con la documentación oficial del fabricante para la unidad G25 y la compilación de firmware específica.

## Por qué es importante entender el protocolo

Comprender cómo el G25 se comunica con Plaspy ayuda a garantizar un seguimiento confiable, acelerar la resolución de problemas y obtener un comportamiento predecible en despliegues productivos. Incluso sin detalles de bajo nivel del protocolo, el conocimiento práctico de expectativas de conexión, elecciones de transporte y características comunes del dispositivo mejora los resultados operativos.

- Ayuda a diagnosticar por qué un equipo no aparece en Plaspy revisando endpoint, APN y configuración de transporte.
- Permite seleccionar de forma informada UDP o TCP para adaptarse a las condiciones de red y requisitos de entrega.
- Permite a los administradores confirmar que las alarmas y campos de telemetría necesarios para la operación están incluidos y son interpretados por Plaspy.
- Orienta sobre actualizaciones de firmware y configuración cuando el comportamiento del dispositivo cambia tras una actualización.
- Reduce la fricción de integración al alinear la cadencia de reporte y el reporte de eventos del dispositivo con las expectativas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G25 con Plaspy ofrece una forma práctica de monitorear activos con larga duración de batería, resistencia al agua y una variedad de alarmas adecuadas para el seguimiento de activos y vehículos. La plataforma de Plaspy ingiere datos de ubicación y telemetría de los rastreadores, presentando visibilidad en tiempo real y contexto histórico que las organizaciones usan para seguridad, logística y operaciones.

Para obtener más información sobre Plaspy y cómo la plataforma soporta integraciones de dispositivos como el GOTOP G25, visite https://www.plaspy.com. Para detalles específicos sobre el protocolo del dispositivo, notas de firmware e instrucciones de configuración del G25, verifique la información en el sitio del fabricante https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
