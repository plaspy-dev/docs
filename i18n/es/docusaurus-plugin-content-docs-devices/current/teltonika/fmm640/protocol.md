---
slug: /teltonika/fmm640/protocol
id: fmm640-protocol
sidebar_label: Protocol
title: Teltonika - FMM640 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMM640 y su comunicación con Plaspy para seguimiento de flotas e integración de dispositivos
keywords:
  - protocolo Teltonika FMM640
  - protocolo GPS Teltonika FMM640
  - protocolo de comunicación FMM640
  - protocolo de rastreo FMM640
  - protocolo de dispositivo Teltonika Plaspy
  - compatibilidad de protocolo de rastreador GPS
  - seguimiento vehicular Plaspy Teltonika
  - gestión de flotas FMM640
  - conexión de dispositivo Plaspy
  - resumen de protocolo de rastreador
---

# Teltonika - FMM640: Protocolo

Esta página describe el contexto público del protocolo para utilizar el rastreador Teltonika FMM640 con Plaspy. Se centra en cómo el dispositivo envía ubicaciones y telemetría a Plaspy y qué verificar al integrar el rastreador para la supervisión de flotas y la operación diaria.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El FMM640 es compatible con Plaspy y admite una amplia gama de periféricos y escenarios de reporte, por lo que entender el contexto de comunicación ayuda a garantizar una operación confiable.

## Visión general del protocolo

El protocolo del FMM640 define cómo el rastreador reporta identificación, posición, datos de sensores y eventos a servidores backend como Plaspy. Aquí mantenemos la descripción en un nivel público y práctico para asistir en la configuración y solución de problemas sin exponer detalles internos del firmware del fabricante.

- El protocolo permite la identificación del dispositivo y el establecimiento de sesión para que los datos reportados se vinculen con el activo correcto en Plaspy.
- La telemetría y las posiciones GNSS son las cargas principales que el rastreador envía al servidor para seguimiento en tiempo real y registro histórico.
- El reporte de eventos cubre movimiento, alertas del acelerómetro, activación de geocercas y entradas de periféricos para su procesamiento posterior.
- El protocolo admite tanto reportes periódicos como mensajes impulsados por eventos para equilibrar consumo de batería y conectividad.
- El firmware y la configuración determinan qué sensores y modos de reporte están activos en cada despliegue del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones en un endpoint compartido e inspecciona el tráfico entrante del dispositivo para determinar el protocolo de reporte del rastreador. Este método automático reduce la configuración manual cuando el dispositivo está correctamente apuntado al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la red y la configuración del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no es necesario seleccionar un protocolo manualmente dentro de la plataforma.
- La identificación correcta del dispositivo y el reporte del IMEI son clave para el mapeo automático a la cuenta y vehículo adecuados.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el FMM640 entrega datos a Plaspy. El FMM640 soporta modos de transporte IP estándar; la elección entre ellos depende de cobertura, latencia y la configuración de firmware específica.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 para reportar.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; el puerto es consistente para todos los dispositivos de Plaspy.
- UDP suele emplearse cuando se prioriza menor sobrecarga y entrega más rápida, mientras que TCP puede preferirse para una entrega ordenada y confiable cuando el dispositivo lo soporta.
- Ajustes de red en el rastreador, como APN y comportamiento de roaming, afectan la conectividad inicial al endpoint de Plaspy.
- Puerto y transporte son los ajustes principales necesarios para que el dispositivo alcance Plaspy antes de que comience la detección del protocolo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los conjuntos de mensajes y las funciones disponibles; confirme siempre qué firmware está instalado antes de asumir comportamientos.
- Las revisiones de hardware y los periféricos opcionales pueden habilitar funciones que afectan los campos reportados y los disparadores de eventos.
- Configuraciones del lado del fabricante o personalizaciones OEM pueden introducir diferencias entre modelos aparentemente idénticos.
- La elección entre UDP o TCP para el transporte puede influir en el comportamiento de los mensajes y la lógica de reintento que observa Plaspy.
- Valide el reporte del dispositivo comprobando que el rastreador envía su IMEI y un latido (heartbeat) inicial al endpoint de Plaspy.
- En caso de duda, compare la configuración del dispositivo con la documentación oficial de Teltonika para comandos y ajustes específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el rastreador ayuda a lograr una configuración fluida, un mapeo de datos preciso y una resolución más rápida cuando surgen problemas. Saber qué partes del protocolo son personalizables o dependen del firmware conduce a una mayor confiabilidad a largo plazo.

- Acelera el despliegue inicial aclarando qué valores de conexión se deben configurar en el rastreador.
- Ayuda a diagnosticar problemas comunes como actualizaciones de posición faltantes, telemetría desajustada o brechas en eventos.
- Informa decisiones sobre la selección de transporte y modos de ahorro de energía para cumplir con las necesidades de la flota.
- Facilita la integración de periféricos y sensores personalizados al aclarar qué espera recibir la plataforma.
- Reduce el tiempo en soporte al enfocarse en los desajustes de configuración más probables.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM640 con Plaspy ofrece a las organizaciones una forma práctica de recopilar posiciones GNSS, telemetría de sensores y datos de eventos en una plataforma centralizada de gestión de flotas. El amplio conjunto de funciones y el soporte de periféricos del FMM640 lo hacen apto para casos de uso que van desde la logística hasta el monitoreo de equipos especializados.

Plaspy simplifica la conexión de dispositivos usando un endpoint y puerto únicos para todos los rastreadores compatibles y detectando automáticamente el protocolo cuando el dispositivo envía sus reportes iniciales. Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación específica del dispositivo y las notas de firmware más recientes en https://www.teltonika-gps.com/ antes de finalizar despliegues.
