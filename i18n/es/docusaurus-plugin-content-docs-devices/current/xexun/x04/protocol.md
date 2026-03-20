---
slug: /xexun/x04/protocol
id: x04-protocol
sidebar_label: Protocol
title: Xexun - X04 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Xexun X04 y cómo se comunica con Plaspy para seguimiento en tiempo real confiable
keywords:
  - protocolo Xexun X04
  - protocolo GPS Xexun X04
  - protocolo de rastreo Xexun X04
  - compatibilidad Xexun X04 Plaspy
  - protocolo rastreador GPS Xexun
  - rastreador compatible con Plaspy
  - protocolo de comunicación rastreador GPS
  - rastreo vehicular Xexun X04
  - rastreo de activos X04
  - posicionamiento híbrido X04
---

# Xexun - X04 Protocolo

Esta página ofrece un resumen público del contexto de comunicación del Xexun X04 cuando se utiliza con Plaspy. Se centra en cómo el dispositivo informa posición y telemetría a Plaspy y en qué esperar del comportamiento del protocolo a nivel público. La información está pensada para ayudar a integradores, administradores y usuarios técnicos a comprender el rol del protocolo del rastreador sin exponer detalles sensibles o propietarios.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que esta página debe usarse como guía de alto nivel y se recomienda verificar los detalles específicos del dispositivo con el fabricante cuando sea necesario. El X04 utiliza posicionamiento híbrido que incluye GPS, Beidou, WiFi y LBS y envía telemetría a través de redes celulares a la nube para monitoreo, alertas y reproducción de historial.

## Resumen del protocolo

El protocolo del X04 define cómo el rastreador presenta identidad, posición y eventos a un endpoint en la nube para que Plaspy pueda recibir y mostrar esa información. A nivel público, la función del protocolo es garantizar la entrega confiable de datos de ubicación y telemetría útiles desde el dispositivo hasta la nube, al tiempo que soporta reportes basados en eventos para alarmas e indicadores de estado.

- Permite al X04 transmitir posiciones, marcas de tiempo y telemetría esencial a Plaspy para mapeo e historial.
- Comunica identificadores de dispositivo y marcadores de evento para que Plaspy asocie los reportes al activo o usuario correcto.
- Soporta mensajes impulsados por eventos como alarmas SOS, activaciones de geocerca y notificaciones de retransmisión por zonas sin cobertura.
- Transporta reportes periódicos programados para seguimiento rutinario y actualizaciones bajo demanda para monitoreo en vivo.
- Facilita acciones de ciclo de vida reportadas a Plaspy, como estado de batería baja y el estado de actualizaciones OTA de firmware.

## Cómo detecta Plaspy el protocolo

Plaspy centraliza los reportes de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador para la mayoría de los dispositivos soportados una vez que el rastreador apunta al servidor de Plaspy. Esto significa que, por lo general, usted no necesita seleccionar un protocolo en la plataforma siempre que el dispositivo esté configurado para enviar datos al endpoint correcto de Plaspy.

- Plaspy usa el dominio del servidor compartido d.plaspy.com y acepta conexiones de dispositivos en la IP pública 54.85.159.138.
- El endpoint de Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan ese mismo puerto para reportes.
- Plaspy acepta reportes tanto por UDP como por TCP según la configuración del rastreador, de modo que los dispositivos pueden usar el transporte que mejor se adapte a su firmware y entorno de red.
- Si el rastreador está correctamente configurado para enviar datos a Plaspy, la detección del protocolo es automática y la selección manual dentro de Plaspy normalmente no es necesaria.
- Asegurar que el dispositivo envíe su identificador y estado básico en los reportes iniciales ayuda a Plaspy a clasificar y mapear el dispositivo a la cuenta y características correctas.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el X04 alcanza la nube de Plaspy más que los detalles de bajo nivel del protocolo. El X04 envía ubicación y telemetría a través de redes celulares y puede configurarse para usar transporte UDP o TCP para llegar a Plaspy en el puerto compartido.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy escucha el tráfico entrante de dispositivos en el puerto 8888 y todos los dispositivos soportados usan este mismo puerto.
- El X04 puede usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración establecidas durante el aprovisionamiento.
- El comportamiento de la red celular, como NAT, firewalls del operador y asignación de IP, puede afectar cómo se conecta el dispositivo; usar el nombre de dominio de Plaspy o la IP son elecciones de configuración comunes.
- Al configurar los ajustes de red, confirme que el dispositivo está apuntando al endpoint de Plaspy y que el transporte coincide con lo que soporta el firmware del equipo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los formatos de reporte disponibles, las funciones habilitadas y el nombrado de eventos, por lo que el comportamiento del dispositivo puede variar entre builds.
- Las variantes de hardware o los módulos regionales pueden afectar las bandas celulares y el comportamiento de red aunque el protocolo de reporte sea el mismo.
- Algunas unidades X04 pueden venir por defecto usando UDP mientras otras prefieren TCP; verifique el modo de transporte al aprovisionar dispositivos.
- Las herramientas de configuración o aprovisionamiento del fabricante pueden modificar qué mensajes envía el dispositivo y con qué frecuencia informa.
- El almacenamiento en búfer y la retransmisión en zonas sin cobertura dependen del firmware del dispositivo y de las políticas de almacenamiento local.
- Siempre valide la compatibilidad y las funcionalidades contra la documentación oficial de Xexun para la revisión específica de su dispositivo.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación usado por el X04 ayuda a administradores e integradores a lograr una configuración confiable, una resolución efectiva de problemas y una operación predecible a largo plazo dentro de Plaspy. Tener expectativas claras sobre cómo el dispositivo reporta y cómo Plaspy recibe los datos reduce errores de configuración y acelera el despliegue.

- Asegura que los dispositivos apunten al endpoint correcto de Plaspy y usen el transporte soportado.
- Ayuda a diagnosticar problemas de conectividad comunes, como reportes iniciales faltantes o entrega inconsistente de eventos.
- Orienta decisiones sobre intervalos de reporte y compensaciones de duración de batería para actualizaciones programadas o por eventos.
- Aclara qué funciones, como SOS, alertas de geocerca y almacenamiento en búfer por zonas sin cobertura, aparecerán en Plaspy según el nivel de firmware del dispositivo.
- Apoya la planificación de implementaciones de flota donde una plantilla de aprovisionamiento consistente reduce la variación y el esfuerzo de soporte.

## Por qué usar Plaspy con este protocolo

Usar el Xexun X04 con Plaspy proporciona un camino sencillo hacia el seguimiento centralizado en tiempo real, la reproducción histórica de rutas y las alertas basadas en eventos. El posicionamiento híbrido y el factor de forma compacto del X04 lo hacen una opción práctica para rastreo de personas, flotas y activos portátiles, mientras que Plaspy agrega los reportes para visibilidad operativa y gestión de alertas.

Para conocer más sobre cómo Plaspy puede trabajar con dispositivos como el X04 y ver las capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente sobre el protocolo y el firmware del dispositivo en el sitio oficial del fabricante en https://www.xexun.com/.
