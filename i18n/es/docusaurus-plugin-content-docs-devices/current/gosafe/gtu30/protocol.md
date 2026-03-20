---
slug: /gosafe/gtu30/protocol
id: gtu30-protocol
sidebar_label: Protocol
title: Gosafe - GTU30 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Gosafe GTU30 y cómo se comunica con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - Protocolo Gosafe GTU30
  - Protocolo GPS Gosafe GTU30
  - Gosafe GTU30 en Plaspy
  - Protocolo de rastreo GTU30
  - Protocolo de rastreador Gosafe
  - Rastreo de vehículos GTU30
  - Seguimiento de flota Gosafe
  - Rastreadores compatibles con Plaspy
  - Protocolo de rastreador GPS
  - Comunicación GTU30
---

# Gosafe - Protocolo GTU30

Esta página documenta el contexto público del protocolo para usar el rastreador Gosafe GTU30 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos operativos, para que gestores de flota e integradores comprendan el comportamiento de conexión y reporte sin exponer detalles sensibles de implementación.

El GTU30 es un rastreador GPS compacto y de fácil instalación con conectividad celular LTE CAT1 y 2G, receptor GNSS de 32 canales y acelerómetro integrado. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del GTU30 regula cómo el rastreador envía posiciones GNSS, eventos del acelerómetro, actualizaciones de estado y el estado de energía a un servidor backend como Plaspy. En la práctica, permite actualizaciones de ubicación confiables, alertas basadas en eventos y la identificación básica del dispositivo necesaria para mapeo y telemetría.

- Proporciona un mecanismo consistente para que el dispositivo reporte posición GNSS, hora y estado a un servidor.
- Transmite telemetría del acelerómetro y eventos que se usan para detección de choques y reporte de comportamiento de manejo.
- Incluye campos básicos de identificación y estado del dispositivo para que la plataforma asocie los datos con la unidad correcta.
- Soporta reportes periódicos y activados por eventos para minimizar el uso de datos preservando los sucesos importantes.
- Habilita funciones de la plataforma como detección de viajes, inferencia del estado de encendido y alertas por pérdida de energía cuando se integra con Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos y está diseñado para detectar automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta. Esto significa que un GTU30 bien configurado normalmente no requiere selección manual del protocolo dentro de Plaspy.

- Plaspy acepta conexiones de rastreadores en el dominio compartido d.plaspy.com.
- El servidor de Plaspy es accesible en la dirección IP 54.85.159.138 para dispositivos que prefieren endpoints numéricos.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar, lo que simplifica la configuración y el onboarding.
- El puerto de escucha que Plaspy utiliza para rastreadores es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo informa al endpoint y puerto mencionados, reduciendo pasos de configuración manuales.

## Transporte y contexto de conexión

Los dispositivos GTU30 pueden usar distintos modos de transporte según la configuración y el soporte celular. Al integrar con Plaspy, asegúrese de que el dispositivo apunte al endpoint de Plaspy y esté configurado para el transporte deseado para que los reportes lleguen de forma confiable.

- El GTU30 puede configurarse para comunicarse por UDP o TCP en el puerto 8888 según la configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o al endpoint numérico 54.85.159.138 si no hay disponibilidad de DNS.
- Todos los dispositivos compatibles con Plaspy usan el mismo número de puerto 8888, lo cual facilita la configuración a nivel de flota.
- El GTU30 también soporta SMS como canal de respaldo en algunas implementaciones, pero TCP o UDP hacia el endpoint de Plaspy es la vía principal en tiempo real.
- La elección de transporte puede afectar latencia y confiabilidad, por lo que debe seleccionar TCP o UDP según la cobertura y las capacidades del firmware del dispositivo.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar intervalos de reporte, campos de telemetría habilitados y transportes soportados, por lo que se recomienda verificar el firmware instalado.
- Revisiónes de hardware pueden alterar sensores disponibles o la configuración por defecto; consulte el etiquetado del dispositivo y las notas de versión del firmware.
- Las opciones de configuración del lado del fabricante pueden cambiar cómo el GTU30 se autentica e identifica ante un servidor backend.
- Seleccionar TCP frente a UDP en la configuración del dispositivo afectará el comportamiento de la conexión y debe coincidir con sus requisitos operativos.
- Confirme que la dirección del servidor del dispositivo esté configurada a d.plaspy.com o 54.85.159.138 y el puerto 8888 al incorporar equipos.
- Valide de forma independiente cualquier comportamiento de respaldo por SMS, ya que el enrutamiento de SMS queda fuera de la ruta de transporte por IP de Plaspy.
- Consulte la documentación oficial de Gosafe para detalles específicos de firmware que puedan afectar la compatibilidad.

## Por qué es importante comprender el protocolo

Comprender claramente el protocolo de comunicación del GTU30 ayuda a garantizar una configuración correcta del dispositivo, una ingestión de telemetría confiable y una resolución eficiente de problemas cuando los equipos están en campo. Conocer el contexto de conexión reduce el tiempo de incorporación y evita configuraciones incorrectas comunes.

- Asegura que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda ingerir los datos.
- Ayuda a diagnosticar problemas de conectividad como selección de transporte incorrecta o problemas de resolución DNS.
- Aclara el papel del firmware y las revisiones de hardware en la telemetría disponible y los patrones de reporte.
- Orienta decisiones sobre intervalos de reporte y umbrales de eventos para balancear uso de datos y capacidad de respuesta.
- Facilita la planificación de comportamientos de respaldo como reportes por SMS o funcionamiento ante pérdida de energía.

## Por qué usar Plaspy con este protocolo

Utilizar el GTU30 con Plaspy ofrece una vía práctica para obtener visibilidad de vehículos en tiempo real, alertas por eventos y reproducción histórica sin configuraciones complejas por dispositivo. Plaspy consolida posiciones GNSS, eventos del acelerómetro y estado del dispositivo en mapas, reportes y alertas útiles para operaciones de flota, flujos de trabajo anti robo y programas de telemática para aseguradoras.

Plaspy está diseñado para aceptar datos del GTU30 cuando el dispositivo apunta al endpoint y puerto compartidos de Plaspy. Para saber más sobre cómo Plaspy puede trabajar con el GTU30 y otros rastreadores, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar los detalles específicos más recientes del dispositivo en el sitio del fabricante https://gosafesystem.com/
