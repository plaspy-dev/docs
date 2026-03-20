---
slug: /arusnavi/arnavi_integral_2/protocol
id: arnavi_integral_2-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi Integral 2 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para compatibilidad y comunicación del rastreador Arusnavi Arnavi Integral 2 con Plaspy
keywords:
  - protocolo Arusnavi Arnavi Integral 2
  - protocolo rastreador GPS Arusnavi
  - comunicación Arnavi Integral 2
  - compatibilidad Plaspy
  - protocolo seguimiento vehicular
  - rastreador gestión de flotas
  - guía integración rastreador
  - protocolo reporte de dispositivo
  - protocolo rastreo en tiempo real
  - compatibilidad geocercas rastreador
---

# Arusnavi - Protocolo Arnavi Integral 2

Esta página describe el contexto público del protocolo para usar el controlador de navegación Arusnavi Arnavi Integral 2 con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel y qué detalles de configuración y conexión son relevantes al integrar el Arnavi Integral 2 con la plataforma Plaspy para monitoreo y rastreo remoto.

El Arnavi Integral 2 es un controlador de navegación diseñado para la supervisión remota de objetos móviles. Soporta rastreo en tiempo real, geocercas y otras funciones habituales en monitoreo de activos. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del dispositivo define cómo el Arnavi Integral 2 se identifica ante un servidor, envía datos de posición y estado, y reporta eventos como cruces de geocerca. Esta página ofrece contexto público sobre el papel de ese protocolo cuando el dispositivo se usa con Plaspy, sin entrar en detalles de paquetes o firmware específicos.

- Permite que el Arnavi Integral 2 entregue actualizaciones de ubicación e informes de estado a un servidor remoto.
- Transporta telemetría esencial como coordenadas, marcas de tiempo y banderas de evento que Plaspy utiliza para mapas y alertas.
- Permite al rastreador identificarse para que la plataforma asocie los mensajes entrantes con el registro de dispositivo correcto.
- Soporta el reporte de eventos para funciones como geocercas y detección de movimiento, que Plaspy puede convertir en notificaciones.
- Proporciona un flujo de datos transportable que puede entregarse sobre sockets de red estándar al endpoint de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint y puerto compartidos y aplica detección automática de protocolo, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de la plataforma. Si el Arnavi Integral 2 está configurado para reportar al endpoint de Plaspy, la plataforma intentará reconocer el formato de reporte y procesar los datos en consecuencia.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor para reportes de dispositivo es 54.85.159.138.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando está correctamente apuntado al endpoint de Plaspy.
- Generalmente los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo envía a d.plaspy.com en el puerto configurado.

## Transporte y contexto de conexión

El contexto de conexión se enfoca en cómo el Arnavi Integral 2 alcanza el endpoint de Plaspy en lugar de los formatos internos de las tramas. En la mayoría de despliegues el dispositivo se configura para reportar a un único nombre de host o IP y a un puerto estándar, de modo que la infraestructura receptora pueda agregar muchos tipos de dispositivos en el mismo listener.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según su firmware y opciones de configuración.
- Plaspy mantiene un único puerto de escucha para dispositivos, por lo que la configuración es consistente entre modelos soportados.
- Ajustes de red en el rastreador como APN, host del servidor y selección de transporte determinan cómo se entrega el tráfico a Plaspy.
- Cortafuegos y restricciones del operador móvil deben permitir tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles o el comportamiento del transporte, lo que afecta la interoperabilidad.
- Revisiones de hardware u opcionales del Arnavi Integral 2 pueden habilitar o desactivar ciertas funciones de reporte.
- Las opciones de configuración del fabricante pueden ofrecer reporte por UDP y TCP; seleccione el transporte que mejor se ajuste a las necesidades de confiabilidad de la red.
- Confirme que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 y configurado en el puerto 8888 para asegurar que Plaspy reciba los mensajes.
- Plaspy detecta el protocolo automáticamente, pero una configuración correcta del equipo y firmware actualizado ayudan a garantizar una detección fiable.
- Siempre valide cualquier detalle de integración de la plataforma con la documentación del fabricante para el firmware específico instalado en el dispositivo.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación a nivel alto ayuda a asegurar una configuración fluida, una resolución de problemas más rápida y una mayor confiabilidad a largo plazo al usar el Arnavi Integral 2 con Plaspy. También facilita que los equipos operativos tomen decisiones informadas sobre transporte, gestión de energía y expectativas de reporte de eventos.

- Reduce el tiempo de configuración al asegurar que los ajustes de reporte del dispositivo apunten al endpoint correcto de Plaspy.
- Ayuda a diagnosticar problemas de conectividad al clarificar si el dispositivo usa UDP o TCP y qué host está configurado.
- Mejora las expectativas sobre con qué frecuencia y en qué formato aparecerán los datos de ubicación y eventos en Plaspy.
- Apoya la planificación del uso de red y batería entendiendo la frecuencia de reporte y los disparadores de eventos.
- Facilita la comunicación con el soporte del fabricante cuando el firmware o el comportamiento difieran de lo esperado.

## Ventajas de usar Plaspy con este protocolo

Usar el Arnavi Integral 2 con Plaspy ofrece una vía práctica para organizaciones que requieren visibilidad continua de activos móviles. Plaspy centraliza la telemetría entrante, mapea posiciones de dispositivos y convierte eventos en alertas y reportes accionables para que los equipos puedan gestionar flotas, monitorear equipos y responder a incidentes con mayor eficacia.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el Arnavi Integral 2, visite https://www.plaspy.com. Verifique siempre los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación con el fabricante en https://www.arusnavi.ru, ya que el soporte de dispositivos y las funciones de firmware pueden cambiar con el tiempo.
