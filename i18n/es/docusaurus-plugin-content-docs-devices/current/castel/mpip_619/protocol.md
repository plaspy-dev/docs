---
slug: /castel/mpip_619/protocol
id: mpip_619-protocol
sidebar_label: Protocol
title: Castel - MPIP-619 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Castel MPIP-619 y su comunicación con Plaspy para monitoreo de vehículos
keywords:
  - Protocolo Castel MPIP-619
  - Protocolo GPS Castel MPIP-619
  - Protocolo Castel MPIP-619 para Plaspy
  - Protocolo de comunicación Castel MPIP-619
  - Protocolo de rastreo Castel MPIP-619
  - Protocolo de rastreador vehicular Castel
  - Compatibilidad MPIP-619 con Plaspy
  - Integración de rastreador GPS con Plaspy
  - Rastreo de vehículos Plaspy Castel
  - Resumen del protocolo del rastreador Castel
---

# Castel - Protocolo MPIP-619

Esta página explica el contexto público del protocolo para usar el rastreador Castel MPIP-619 con Plaspy. Resume cómo se comunica el dispositivo en despliegues típicos, el papel que cumple el protocolo de reporte y qué ajustes de conexión de Plaspy se emplean para la integración. El objetivo es brindar un contexto de protocolo claro y no sensible que ayude a administradores e integradores a configurar y dar soporte al MPIP-619 con Plaspy.

El Castel MPIP-619 es un rastreador compacto, cableado, diseñado para motocicletas y vehículos. Ofrece posicionamiento en tiempo real, corte remoto de motor, configuración por SMS y GPRS, alertas de SOS y exceso de velocidad, geocercas y almacenamiento de datos cuando está offline. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto de los paquetes y la disponibilidad de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del MPIP-619 define cómo el dispositivo se identifica y envía telemetría y eventos a un servidor remoto como Plaspy. El protocolo regula los tipos de mensajes que envía el rastreador, la información de identificación que incluye y cómo se reportan eventos como SOS, violaciones de geocerca o cambios de alimentación para su procesamiento en la plataforma.

- Transmite telemetría de posición y diagnósticos básicos que Plaspy usa para ubicación en tiempo real e historial
- Incluye identidad del dispositivo e información de sesión para que Plaspy asocie los mensajes entrantes con el activo correcto
- Envía notificaciones de alarmas y eventos como SOS, exceso de velocidad y activaciones de geocerca para procesamiento inmediato
- Soporta entrega sobre IP usando el canal GPRS del dispositivo y también puede convivir con configuración por SMS cuando está disponible
- Permite que Plaspy almacene datos generados mientras el dispositivo estuvo desconectado y los cargue posteriormente para que no se pierdan eventos

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un único endpoint y puerto compartido y detecta automáticamente el protocolo del rastreador para los dispositivos soportados. Cuando un MPIP-619 está configurado para reportar al endpoint de Plaspy y tiene acceso a la red, Plaspy empareja los mensajes entrantes con el manejador de protocolo correspondiente, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para los reportes de dispositivos
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y los metadatos del payload
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para la detección automática
- Si un dispositivo no puede alcanzar el endpoint o utiliza un transporte no estándar, la detección y el onboarding pueden verse afectados

## Transporte y contexto de conexión

El MPIP-619 puede configurarse para usar transporte UDP o TCP para sus reportes de datos, según los ajustes del equipo y el comportamiento de la red. Plaspy soporta ambos modos de transporte en el puerto unificado, de modo que los dispositivos pueden usar el que sea apropiado para su firmware y entorno de red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138
- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Plaspy acepta UDP y TCP en el mismo puerto para simplificar la puesta en marcha
- El uso consistente de puerto entre dispositivos reduce errores de configuración en flotas mixtas
- Para comandos remotos o configuración vía IP, confirme que el firmware del dispositivo soporte el modo de transporte deseado

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido y comportamiento de los mensajes, por lo que las funciones del protocolo pueden variar entre releases
- Revisiones de hardware o módulos accesorios conectados al MPIP-619 pueden modificar las entradas disponibles y el reporte de eventos
- Ajustes del fabricante o variantes regionales pueden producir diferencias sutiles en el protocolo incluso dentro del mismo modelo
- La elección de transporte UDP vs TCP puede afectar las características de entrega bajo determinadas condiciones de red
- La configuración por SMS o mecanismos de fallback pueden coexistir con el reporte por GPRS y emplearse durante la provisión
- Valide siempre la compatibilidad y el comportamiento con la documentación oficial de Castel para su número de serie y firmware

## Por qué es importante entender el protocolo

Comprender cómo se comunica el MPIP-619 ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y garantizar una operación predecible a largo plazo cuando se usa con Plaspy. Conocer el contexto público del protocolo permite a los administradores confirmar ajustes de servidor correctos, interpretar eventos del dispositivo y coordinar actualizaciones de firmware o configuración.

- Verifique que los reportes del dispositivo lleguen al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto compartido
- Confirme si una instancia del dispositivo usa UDP o TCP para que las reglas de red y firewalls permitan el transporte elegido
- Interprete correctamente la telemetría y las alarmas entrantes al investigar ubicaciones faltantes o eventos inesperados
- Determine si una actualización de firmware o una revisión de hardware podría cambiar el comportamiento de los mensajes antes de desplegar en la flota
- Planifique por las señales y entradas de accesorios que pueden afectar el reporte de eventos y las alertas en el panel de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Castel MPIP-619 con Plaspy ofrece visibilidad centralizada para flotas de vehículos y motocicletas al combinar las capacidades de reporte del dispositivo con el procesamiento, almacenamiento y alertas de Plaspy. Plaspy consume la telemetría y los eventos que proporciona el MPIP-619 para presentar ubicación en vivo, recorridos históricos, alarmas y diagnósticos básicos en una sola plataforma, simplificando la monitorización y las operaciones.

Para saber más sobre Plaspy y cómo gestiona el onboarding de dispositivos y los datos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y del firmware con Castel en http://www.castelecom.com/ antes de realizar despliegues a gran escala.
