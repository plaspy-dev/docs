---
slug: /galileosky/galileosky_v228/protocol
id: galileosky_v2.2.8-protocol
sidebar_label: Protocol
title: GalileoSky - GALILEOSKY V2.2.8 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público GALILEOSKY V2.2.8 para compatibilidad con la plataforma Plaspy
keywords:
  - Protocolo GalileoSky
  - Protocolo GALILEOSKY V2.2.8
  - Rastreador GPS GalileoSky
  - Protocolo GPS GALILEOSKY V2.2.8
  - Protocolo de comunicación GalileoSky
  - Rastreo de vehículos GALILEOSKY
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreo Plaspy
  - Rastreador GLONASS GPS GALILEOSKY
  - Compatibilidad GALILEOSKY V2.2.8
---

# GalileoSky - Protocolo GALILEOSKY V2.2.8

Esta página describe el contexto público del protocolo para usar el rastreador GALILEOSKY V2.2.8 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y en qué debe considerarse al configurar el rastreador para reportar a Plaspy y así permitir la monitorización en tiempo real y el diagnóstico de vehículos.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto de conexión y notas prácticas de compatibilidad en lugar de detalles de implementación de bajo nivel.

## Panorama del protocolo

El protocolo usado por GALILEOSKY V2.2.8 define cómo el rastreador informa ubicación, eventos y telemetría a un servidor remoto para que plataformas como Plaspy puedan mostrar y procesar esos datos. Los puntos siguientes explican el papel del protocolo en el uso diario del dispositivo con Plaspy sin exponer detalles propietarios o de bajo nivel.

- Permite que el dispositivo establezca una sesión con el endpoint remoto de Plaspy y transmita actualizaciones de posición periódicas o activadas por eventos.
- Transporta información de identificación y estado para que Plaspy pueda asociar los reportes entrantes con el activo y el perfil de configuración adecuados.
- Entrega telemetría como coordenadas GNSS, marcas de tiempo, estado básico de IO y, opcionalmente, indicadores de medios o diagnóstico en un formato que Plaspy puede ingerir.
- Soporta tanto el reporte en tiempo real como modos de carga en búfer para archivos de respaldo cuando se restablece la conectividad.
- Permite la configuración y gestión remota del dispositivo a través de canales de transporte establecidos para ajustar parámetros de forma local o remota.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores usando un endpoint común de entrada y para identificar automáticamente el protocolo del dispositivo. Esto significa que cuando un GALILEOSKY V2.2.8 está correctamente configurado para reportar a Plaspy, normalmente no se requiere seleccionar el protocolo manualmente en la plataforma.

- Plaspy escucha en un único endpoint compartido para conexiones entrantes de rastreadores en el dominio d.plaspy.com.
- La dirección IP del servidor de Plaspy para tráfico entrante de dispositivos es 54.85.159.138 y el puerto configurado es 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que una política de puerto único simplifica el enrutamiento y la configuración de la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las características de la conexión y la carga útil entrante, por lo que los dispositivos configurados correctamente se registran sin selección manual de protocolo.
- Los usuarios deben asegurarse de que los ajustes de reporte del dispositivo (dirección del servidor, transporte y puerto) apunten al endpoint de Plaspy para que la detección automática funcione.

## Transporte y contexto de conexión

El transporte de la conexión y la dirección del servidor son fundamentales para el funcionamiento del protocolo. Los dispositivos GALILEOSKY V2.2.8 pueden configurarse para usar transportes de datos GSM comunes para alcanzar Plaspy; esta sección aclara las opciones aceptadas y las configuraciones recomendadas para un funcionamiento fiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el firmware y las opciones del dispositivo.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 si no hay resolución DNS disponible.
- Plaspy espera reportes entrantes en el puerto 8888 a través de los transportes soportados, lo que mantiene la configuración consistente para flotas heterogéneas.
- Para mejores resultados, elija el transporte que soporte su firmware y que se ajuste a sus necesidades operativas en cuanto a latencia y fiabilidad.
- Si utiliza roaming o múltiples APN, valide que el dispositivo pueda alcanzar d.plaspy.com o la IP a través de la red del operador.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de envío de mensajes, las funciones soportadas y los campos opcionales; verifique la versión de firmware al evaluar la compatibilidad.
- Revisiones de hardware u opciones accesorias como cámaras adicionales, módulos CAN bus o antenas GNSS externas pueden alterar qué campos de datos se reportan.
- Algunas funciones de GALILEOSKY, como modo sigiloso, carga de archivo offline, subida de fotos por GPRS o reporte a dos servidores, pueden requerir ajustes específicos para funcionar con Plaspy.
- La elección del transporte (UDP vs TCP) puede afectar el comportamiento de entrega para archivos en búfer y actualizaciones en tiempo real; configure según sus prioridades operativas.
- Los métodos de configuración del fabricante incluyen SMS, GPRS y USB; asegúrese de que la dirección del servidor y el puerto estén correctamente configurados a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Siempre valide el comportamiento del dispositivo después de la configuración y consulte la documentación oficial para comandos y parámetros específicos de firmware.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy ayuda a asegurar la entrega confiable de ubicación y telemetría, facilita la resolución de problemas y soporta el mantenimiento a largo plazo de los sistemas de flota.

- Permite verificar que el dispositivo reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que use el transporte previsto.
- Facilita la interpretación del comportamiento del dispositivo, como los tiempos de carga en búfer, el reporte de eventos y el manejo de archivos offline.
- Mejora la resolución de incidentes cuando los dispositivos no aparecen en Plaspy al acotar causas relacionadas con transporte, DNS o firmware.
- Apoya la planificación de actualizaciones de firmware y despliegues de funcionalidades al identificar qué comportamientos controla el firmware versus el procesamiento de la plataforma.
- Permite conversaciones informadas con el fabricante sobre soporte de funciones y opciones de configuración.

## Por qué usar Plaspy con este protocolo

Usar dispositivos GALILEOSKY V2.2.8 con Plaspy ofrece a las organizaciones una manera práctica de centralizar GNSS y telemetría de vehículos en una sola plataforma de gestión de flotas. La combinación de capacidad GLONASS/GPS, funciones integradas como monitorización en línea, subida de archivos offline, soporte de cámara y diagnóstico CAN bus puede proporcionar una visibilidad operativa amplia cuando el rastreador está configurado para reportar a Plaspy.

El enfoque de endpoint unificado de Plaspy simplifica el despliegue en flotas mixtas porque todos los dispositivos reportan al mismo puerto y la plataforma detecta automáticamente el protocolo del dispositivo. Para saber más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del protocolo y el firmware del dispositivo en el sitio del fabricante https://galileosky.com/.
