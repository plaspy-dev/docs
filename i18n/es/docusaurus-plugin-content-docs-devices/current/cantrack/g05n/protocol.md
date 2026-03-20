---
slug: /cantrack/g05n/protocol
id: g05n-protocol
sidebar_label: Protocol
title: CanTrack - G05N Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el CanTrack G05N con Plaspy usando ajustes compartidos y detección automática de protocolo
keywords:
  - Protocolo CanTrack G05N
  - Protocolo GPS CanTrack G05N
  - Protocolo CanTrack G05N Plaspy
  - Protocolo de comunicación G05N
  - Protocolo de rastreo G05N
  - Protocolo GPS CanTrack
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador vehicular
  - Rastreador de flota G05N
  - Protocolo de telemetría G05N
---

# CanTrack - Protocolo G05N

Esta página describe el contexto público del protocolo para usar el rastreador vehicular CanTrack G05N con la plataforma Plaspy. Resume cómo el dispositivo reporta posición, alertas y telemetría a Plaspy y explica los ajustes de conexión y el comportamiento relevantes para una integración exitosa, sin exponer detalles de implementación privados.

El G05N es un rastreador vehicular cableado que reporta mediante GSM GPRS (TCP/IP) y puede recurrir al SMS como alternativa. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto en intervalos de reporte, campos de telemetría y formatos de alarma puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece un contexto del protocolo a alto nivel para facilitar la configuración y la solución de problemas.

## Descripción general del protocolo

A grandes rasgos, el protocolo de reporte del G05N define cómo el dispositivo transmite coordenadas GNSS, banderas de evento y telemetría del vehículo a un servidor remoto para que Plaspy pueda ingerir y mostrar esas actualizaciones. El propósito del protocolo es asegurar que el rastreador se identifique, entregue datos útiles de ubicación y estado, y proporcione alarmas y puntos almacenados tras la restauración de la conectividad.

- Transmite posición y telemetría a un endpoint remoto para que Plaspy pueda mapear y procesar los datos del dispositivo.
- Informa tipos de evento como estado de ignición, exceso de velocidad, activación de geocercas, SOS, vibración y cortes de alimentación.
- Soporta almacenamiento en búfer de puntos GPS mientras está sin conexión y subida automática cuando se restablece la conexión de datos.
- Usa GPRS TCP/IP como transporte principal en línea, con SMS como ruta de respaldo para alertas críticas o configuración.
- Proporciona indicios para funciones de control remoto como comandos de inmovilizador que se pueden invocar desde la plataforma o por SMS.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de dispositivos en un endpoint de servidor compartido y determinar automáticamente el protocolo del rastreador cuando el dispositivo reporta. Para dispositivos G05N configurados correctamente para reportar al servidor de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy recibe los reportes de dispositivos en el endpoint común d.plaspy.com y en la dirección de servidor 54.85.159.138.
- Todos los dispositivos Plaspy usan el mismo puerto, por lo que la configuración del equipo puede apuntar al puerto estándar de Plaspy para el reporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía sus primeros reportes al endpoint compartido.
- Generalmente solo es necesario configurar el APN y la dirección del servidor en el rastreador para comenzar a reportar a Plaspy.
- Si un dispositivo no aparece en línea, verifique la configuración de reporte del equipo, el registro en la red y que el dispositivo esté apuntando al endpoint de Plaspy.

## Transporte y contexto de conexión

El G05N puede comunicarse por GPRS usando TCP para reportes en línea y también puede usar SMS para respaldos o comandos remotos específicos. Plaspy soporta tanto UDP como TCP en su puerto estándar, y el G05N puede configurarse para coincidir con las opciones de red y del fabricante disponibles.

- Los equipos pueden configurarse para enviar datos por UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- El rastreador puede apuntar al dominio Plaspy d.plaspy.com o al servidor Plaspy en 54.85.159.138 como destino alternativo.
- Plaspy usa el puerto 8888 para todos los dispositivos conectados, por lo que el mismo puerto aplica a distintos modelos de rastreadores.
- Al usar GPRS TCP/IP, asegúrese de que el APN del rastreador esté configurado correctamente para que el dispositivo pueda abrir la conexión con el endpoint de Plaspy.
- El SMS sigue siendo un respaldo útil para la provisión inicial, comandos remotos o alertas cuando GPRS no está disponible.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar campos de mensaje, comportamiento de reporte u opciones de telemetría; verifique siempre las notas de firmware para la unidad G05N específica.
- Las revisiones de hardware y variantes regionales pueden alterar los transportes soportados o los parámetros de reporte por defecto.
- Algunas funciones avanzadas, como comandos de inmovilizador o telemetría extendida de sensores, pueden requerir firmware o banderas de configuración específicas.
- La elección del transporte (UDP vs TCP) puede afectar las características de entrega; configure el dispositivo para que coincida con el comportamiento de la red elegido.
- Los formatos de comandos de servidor del fabricante o los conjuntos de comandos SMS pueden diferir entre versiones de firmware.
- Valide la compatibilidad y los ajustes predeterminados consultando la documentación oficial de CanTrack para la unidad G05N que usted tiene.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del G05N ayuda a asegurar una configuración confiable, una solución de problemas efectiva y un comportamiento predecible a largo plazo en Plaspy. Saber cómo reporta el dispositivo y qué transportes soporta reduce la incertidumbre cuando un equipo está fuera de línea o no aparece correctamente en la plataforma.

- Ayuda a confirmar la configuración correcta del APN y la dirección del servidor para que el rastreador alcance el endpoint de Plaspy.
- Aclara los tipos de eventos y campos de telemetría esperados para que las alertas y reglas en Plaspy se configuren adecuadamente.
- Facilita el diagnóstico de problemas de conectividad revisando la selección de transporte y los objetivos de servidor.
- Orienta la decisión sobre si se necesitan respaldos por SMS para un despliegue con cobertura de datos intermitente.
- Apoya la planificación de mantenimiento al indicar cuándo las actualizaciones de firmware o las revisiones de hardware pueden cambiar el comportamiento.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el CanTrack G05N ofrece visibilidad centralizada de la ubicación de los vehículos, alarmas y telemetría para que los gestores de flota y proveedores de servicio puedan monitorear activos, responder a incidentes y analizar rutas históricas. La combinación de reporte por GPRS, respaldo por SMS y almacenamiento en búfer local hace del G05N una opción práctica para el rastreo continuo en muchas implementaciones vehiculares.

Si desea obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos y los flujos de trabajo de flotas, visite https://www.plaspy.com. Para los detalles específicos de protocolo más actuales, notas de firmware y orientación de implementación, verifique la información con el fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
