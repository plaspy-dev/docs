---
slug: /concox/jm_vg01/protocol
id: jm_vg01-protocol
sidebar_label: Protocol
title: Concox - JM-VG01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Concox JM-VG01 y cómo comunica con Plaspy para rastreo vehicular confiable
keywords:
  - protocolo Concox JM-VG01
  - protocolo GPS JM-VG01
  - protocolo rastreador Concox
  - compatibilidad JM-VG01 Plaspy
  - protocolo de rastreo Concox
  - protocolo de seguimiento vehicular
  - protocolo rastreador GPS
  - compatibilidad de dispositivos Plaspy
  - rastreo Concox JM VG01
  - rastreo de flotas Concox
---

# Concox - Protocolo JM-VG01

Esta página ofrece una visión pública del protocolo de la serie de rastreadores Concox JM-VG01 y explica cómo el dispositivo se comunica con la plataforma Plaspy. El contenido se centra en conceptos de protocolo de alto nivel, no sensibles, que ayudan a administradores e integradores a entender cómo el rastreador reporta datos a Plaspy y qué verificar durante la configuración.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que esta página describe conceptos generales de comunicación y consideraciones prácticas de compatibilidad más que detalles a nivel de firmware.

## Descripción general del protocolo

El protocolo del rastreador es el conjunto de mensajes y comportamientos que el JM-VG01 utiliza para informar posición, movimiento y estado a un servidor remoto, y para recibir instrucciones de control autorizadas. En la práctica, el protocolo permite que Plaspy reciba actualizaciones de GPS y navegación inercial, alertas de comportamiento de conducción y el estado básico del dispositivo para su monitoreo y gestión.

- Proporciona reportes de posición y tiempo que permiten a Plaspy mostrar la ubicación y el desplazamiento del vehículo.
- Entrega indicadores de movimiento y comportamiento de conducción desde los sensores del dispositivo para soportar alertas y análisis.
- Transmite información de estado del equipo, como estado del encendido, batería o alimentación, y eventos de pánico.
- Soporta acciones de control remoto y reenvío de alertas cuando el firmware del rastreador implementa manejo de comandos.
- Habilita GPS asistido por INS y reportes de reserva para mantener rastreo confiable en condiciones GPS pobres.
- Transporta telemetría necesaria para cálculos de kilometraje y análisis de comportamiento, permitiendo a Plaspy presentar métricas operativas precisas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de rastreadores en un endpoint y puerto compartidos y utiliza detección automática para determinar qué protocolo usa el dispositivo. En la mayoría de los casos, un equipo correctamente configurado que reporte al endpoint de Plaspy será identificado sin necesidad de que el usuario seleccione manualmente el protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para opciones de configuración directa.
- El puerto que usa Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las necesidades de la red.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y empata los datos entrantes con sus parsers.
- Si la detección no tiene éxito, lo habitual es revisar la dirección de reporte del dispositivo, la configuración de transporte y la versión de firmware.
- Contacte al soporte de Plaspy con el modelo y los detalles de firmware si requiere asistencia para la detección automática.

## Transporte y contexto de conexión

El transporte de la conexión y la dirección del servidor son fundamentales para un reporte confiable. La familia JM-VG01 soporta modos estándar de reporte por TCP o UDP; el transporte utilizado depende de la configuración del firmware y de las características de la red donde se instala.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 para reportar datos a Plaspy.
- Los equipos pueden apuntar al servidor Plaspy mediante el dominio d.plaspy.com o la IP 54.85.159.138 según sus preferencias de configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor en flotas mixtas.
- Elementos de la red como NAT, firewalls y configuraciones del operador móvil pueden requerir ajustar la elección entre UDP o TCP para mantener conectividad confiable.
- Use TCP persistente para sesiones estables cuando el equipo y la red lo soporten, o UDP si el firmware del dispositivo y las condiciones de la red lo favorecen.
- Asegúrese de que el host de reporte y el transporte configurados en el dispositivo coincidan con los ajustes en la plataforma para evitar mensajes caídos o mal enroutados.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué funciones y tipos de mensajes envía el JM-VG01; verifique las notas de la versión del firmware para diferencias a nivel de funcionalidades.
- Las revisiones de hardware o submodelos pueden incluir conjuntos de sensores o entradas distintas que afectan la telemetría disponible.
- Las opciones de configuración proporcionadas por el fabricante pueden ofrecer múltiples formatos de reporte o interfaces de comandos; confirme cuáles están habilitadas en sus unidades.
- La elección del transporte (UDP vs TCP) afecta las características de entrega y puede influir en comportamientos como reenvío y persistencia de sesión.
- Valide siempre la compatibilidad probando un equipo de muestra con el endpoint de Plaspy antes de desplegar a gran escala.
- Para conocer la disponibilidad exacta de comandos para funciones como corte remoto, alertas de pánico o comportamiento avanzado de INS, consulte la documentación del fabricante.
- Si el comportamiento del protocolo difiere de lo esperado, verifique primero los ajustes del dispositivo sobre host de reporte, transporte y versión de firmware.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación del rastreador ayuda a asegurar una configuración correcta, datos confiables y una resolución de problemas más eficiente al integrar dispositivos JM-VG01 con Plaspy. Un conocimiento claro de lo que el equipo envía y espera le permite confirmar que la telemetría, las alertas y las acciones remotas funcionarán según lo requerido.

- Confirma que los dispositivos están correctamente apuntados a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy reciba los reportes.
- Ayuda a diagnosticar problemas relacionados con el transporte al elegir entre UDP y TCP según el entorno de red.
- Verifica que funciones como GPS asistido por INS, alertas de comportamiento de conducción, detección de encendido y eventos de pánico sean compatibles y reportadas por el firmware del dispositivo.
- Apoya la planificación adecuada de despliegues de flota asegurando reportes consistentes entre revisiones de hardware.
- Facilita la resolución cuando Plaspy no detecta automáticamente un dispositivo, revisando ajustes de reporte y versiones de firmware.
- Reduce el tiempo de inactividad al permitir aislar con mayor rapidez causas de conexión, configuración o firmware que produzcan telemetría ausente.

## Por qué usar Plaspy con este protocolo

Usar dispositivos de la familia Concox JM-VG01 junto con Plaspy brinda a las organizaciones visibilidad práctica sobre ubicación del vehículo, comportamiento de conducción y métricas operativas. Los datos de INS asistido por GPS y los sensores de movimiento del equipo complementan las capacidades de la plataforma Plaspy para ofrecer seguimiento y reporte de eventos confiables incluso en condiciones de señal adversas.

Plaspy centraliza el reporte de dispositivos diversos mediante un único puerto conocido y detección automática de protocolos, lo que simplifica la incorporación de flotas y reduce la sobrecarga de configuración. Para obtener más información sobre cómo Plaspy puede trabajar con sus dispositivos Concox visite https://www.plaspy.com. Para detalles más recientes sobre protocolos específicos y firmware del dispositivo, verifique la información con el fabricante en https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
