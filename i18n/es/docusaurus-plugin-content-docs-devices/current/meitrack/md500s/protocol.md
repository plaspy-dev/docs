---
slug: /meitrack/md500s/protocol
id: md500s-protocol
sidebar_label: Protocol
title: Meitrack - MD500S Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del Meitrack MD500S y cómo se comunica con Plaspy para rastreo GPS y telemática de video
keywords:
  - protocolo Meitrack MD500S
  - protocolo GPS Meitrack MD500S
  - compatibilidad MD500S Plaspy
  - protocolo de comunicación MD500S
  - protocolo de rastreo MD500S
  - protocolo rastreador GPS Meitrack
  - protocolo telemática de video MD500S
  - protocolo de dispositivo Plaspy
  - rastreo vehicular MD500S
  - rastreo de flotas Meitrack
---

# Meitrack - Protocolo MD500S

Esta página describe el contexto público del protocolo para usar el DVR móvil Meitrack MD500S con Plaspy. Se centra en cómo el MD500S intercambia datos de posicionamiento, telemetría y eventos con la plataforma Plaspy en términos generales y no sensibles, para que integradores de sistemas y administradores de flotas comprendan la relación de comunicación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento del MD500S puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento real puede diferir entre unidades y con el tiempo.

## Descripción general del protocolo

El protocolo de comunicación del MD500S coordina telemetría, fijaciones GNSS, eventos de estado y metadatos relacionados con video para que Plaspy pueda mostrar ubicación, alertas y evidencia sincronizada. El protocolo es el mecanismo que permite al dispositivo identificarse ante Plaspy, enviar actualizaciones de posición a tiempo y transmitir registros de eventos que alimentan alertas e informes.

- Permite actualizaciones de ubicación periódicas y por eventos desde el MD500S hacia la plataforma Plaspy
- Transporta telemetría como estado del encendido, cambios en entradas, datos CAN y lecturas de sensores junto con las fijaciones de posición
- Lleva información de identificación y estado del dispositivo para que Plaspy pueda asociar los datos entrantes con el activo correcto
- Soporta la entrega de metadatos y referencias para eventos de video de modo que los clips grabados y la telemetría puedan correlacionarse en Plaspy
- Opera dentro del stack de red del dispositivo, por lo que el tipo de conexión y el transporte afectan las características de entrega

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo específico que usa el dispositivo. En la mayoría de implementaciones comunes, usted no necesita seleccionar el protocolo manualmente en Plaspy si el MD500S está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el mismo puerto para todos los dispositivos soportados y selecciona el protocolo automáticamente cuando llegan datos
- Los equipos apuntados al endpoint de Plaspy y configurados correctamente serán reconocidos por la plataforma
- Los identificadores típicos del dispositivo e información de sesión incluidos en los reportes permiten a Plaspy asociar datos a dispositivos sin selección manual del protocolo
- Asegúrese de que el dispositivo esté configurado para reportar al endpoint de Plaspy para que la detección automática pueda ocurrir
- Si un dispositivo no aparece, verifique la configuración de red del equipo, la conectividad de la SIM y que el dispositivo esté apuntando al endpoint correcto de Plaspy

## Transporte y contexto de conexión

El MD500S puede usar canales de transporte comunes para enviar datos a Plaspy. Los equipos pueden configurarse para usar UDP o TCP dependiendo del firmware y las necesidades del despliegue. Plaspy acepta conexiones dirigidas a su endpoint público para que los dispositivos y administradores de red puedan encaminar la telemetría de forma fiable.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto configurado para las conexiones de dispositivos es 8888 y Plaspy utiliza el mismo puerto para todos los equipos
- El MD500S puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las políticas de la red local
- Los dispositivos pueden reportar por celular o Wi Fi según lo soporte la unidad y las condiciones de la red
- Asegúrese de que firewall y ajustes del operador permitan conexiones salientes a d.plaspy.com en el transporte y puerto configurados

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento del protocolo y los campos de telemetría disponibles entre versiones
- Las variantes de hardware regionales pueden exponer distintas bandas celulares y funciones opcionales que afectan cómo se reportan los datos
- La elección del transporte entre UDP y TCP afecta la fiabilidad de entrega y puede requerir distinta configuración de red
- La transmisión de video y el manejo sincronizado de clips suelen implementarse por separado del reporte básico de ubicación y pueden depender de funciones opcionales
- Se recomienda validar con un equipo de prueba y reportes en vivo a Plaspy antes de un despliegue a gran escala
- Confirme los pasos de configuración y las funciones soportadas con las herramientas de configuración del fabricante

## Por qué es importante entender el protocolo

Comprender cómo el MD500S se comunica con Plaspy ayuda a asegurar una configuración correcta, un flujo de datos confiable y un diagnóstico efectivo durante el despliegue y la operación. Un contexto de protocolo claro reduce el tiempo dedicado a diagnosticar problemas de conectividad y mapeo de datos y mejora la confiabilidad a largo plazo.

- Ayuda a verificar que el dispositivo esté apuntando al endpoint correcto de Plaspy y usando el transporte recomendado
- Facilita la interpretación de por qué ciertos campos de telemetría aparecen u omiten en los reportes de Plaspy
- Apoya el diagnóstico cuando los dispositivos no se registran o cuando los eventos no se muestran en la plataforma
- Orienta las decisiones sobre actualizaciones de firmware y habilitación de funciones que pueden alterar el comportamiento de reporte
- Soporta la configuración adecuada de red y firewall para permitir conexiones estables desde la flota hacia Plaspy

## Por qué usar Plaspy con este protocolo

Combinar el MD500S con Plaspy ofrece a las flotas una vista unificada de ubicación de vehículos, telemetría y analítica de video. Plaspy ingiere los reportes del MD500S para que los operadores puedan monitorear rutas, recibir alertas de seguridad del conductor y asociar clips grabados con eventos del vehículo para revisiones de incidentes y flujos de trabajo de cumplimiento.

Plaspy acepta reportes entrantes en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, permitiendo que las organizaciones se concentren en el despliegue y la operación en lugar de en la selección de protocolos. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y guías de implementación, verifique la información en el sitio del fabricante https://www.meitrack.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
