---
slug: /teltonika/msp500/protocol
id: msp500-protocol
sidebar_label: Protocol
title: Teltonika - MSP500 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Teltonika MSP500 con Plaspy, explicando conexión transporte y notas de compatibilidad
keywords:
  - Protocolo Teltonika MSP500
  - Protocolo GPS Teltonika MSP500
  - Protocolo de comunicación MSP500
  - Protocolo de rastreo MSP500
  - Rastreador Teltonika Plaspy
  - Integración de dispositivos Plaspy
  - Guía de protocolo para rastreadores GPS
  - Rastreo de flotas MSP500
  - Compatibilidad Teltonika MSP500
  - Protocolo de telemetría GPS
---

# Teltonika - Protocolo MSP500

Esta página documenta el contexto público del protocolo para usar el rastreador Teltonika MSP500 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos no sensibles y explica el papel del protocolo de reporte del equipo en una integración, configuración y monitoreo exitosos. El material está dirigido a administradores e integradores que necesitan entender el comportamiento de conexión y la compatibilidad sin exponer detalles privados de implementación.

El MSP500 es una terminal de rastreo GNSS/GSM/Bluetooth con interfaz RS232, batería interna de respaldo Ni-Mh y funciones avanzadas de control y sensores, como limitación de velocidad con relé y buzzer, detección por acelerómetro y múltiples tipos de eventos. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del equipo y el estado del firmware influyen en cómo se comunica el MSP500 con Plaspy.

## Descripción general del protocolo

El protocolo de reporte del rastreador define cómo el MSP500 envía información de ubicación, estado y eventos a un servidor remoto, y cómo la plataforma puede entregar configuraciones o retroalimentación de comandos. En el contexto de Plaspy, el protocolo es el medio por el que las posiciones GNSS, lecturas de sensores y eventos de alarma se empaquetan y transmiten para su procesamiento y visualización.

- Permite la transmisión de ubicación GNSS y telemetría de movimiento a la plataforma Plaspy.
- Transporta datos de eventos y sensores, como alertas del acelerómetro, detección de encendido/desconexión y el estado del limitador de velocidad para su procesamiento operativo.
- Permite que el dispositivo se identifique y mantenga su sesión para que Plaspy pueda asociar los datos entrantes con el activo correcto.
- Soporta transporte sobre TCP o UDP para llegar al endpoint de Plaspy para su ingestión.
- Facilita canales de configuración remota y diagnóstico expuestos por el fabricante, como disparadores FOTA o configuración mediante herramientas Teltonika cuando se coordinan a través de la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint público común y determina el protocolo del dispositivo automáticamente, por lo que los usuarios normalmente no necesitan seleccionar un protocolo manualmente dentro de Plaspy. La clave para la detección y el onboarding automático es la configuración correcta del equipo para reportar al endpoint de Plaspy.

- Los dispositivos deben configurarse para enviar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados y usa ese puerto compartido para la ingestión.
- El MSP500 puede configurarse para usar UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Una vez que el rastreador transmita al endpoint de Plaspy, la plataforma reconocerá el formato entrante y asociará los datos con el dispositivo.
- La acción típica del usuario se limita a verificar el endpoint del servidor, el APN y la selección del transporte en el MSP500; Plaspy gestiona la identificación del protocolo de forma automática.

## Contexto de transporte y conexión

Las opciones de conexión en el dispositivo afectan cómo se entrega la información a Plaspy, pero no cómo la plataforma procesa los protocolos compatibles. El MSP500 soporta múltiples modos de transporte y ofrece canales de configuración flexibles; elija el transporte más adecuado según la fiabilidad de la red y las funciones que necesite.

- El MSP500 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los dispositivos pueden apuntar al host de Plaspy por nombre de dominio d.plaspy.com o por la dirección IP 54.85.159.138 según la configuración de la red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos que soporta, por lo que la configuración del puerto es uniforme entre modelos.
- UDP se usa frecuentemente cuando se requiere menor latencia y se acepta alguna pérdida de paquetes ocasional, mientras que TCP ofrece una opción orientada a conexión.
- Asegúrese de que el firewall y la configuración APN móvil permitan conexiones salientes hacia el endpoint de Plaspy para que el rastreador pueda establecer el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los paquetes y las funciones soportadas; verifique la versión de firmware del MSP500 al diagnosticar comportamientos reportados.
- Las revisiones de hardware y módulos opcionales, como dongles OBDII externos o accesorios RS232, pueden afectar los canales de datos disponibles y el reporte de sensores.
- La selección del transporte (UDP vs TCP) puede influir en las características de entrega de alertas en tiempo real frente a telemetría periódica.
- Los canales de configuración del fabricante, como SMS, comandos GPRS, USB, Bluetooth y Teltonika Configurator, pueden modificar cómo se apunta el dispositivo al endpoint de Plaspy.
- Algunos modos RS232 e interfaces externas proporcionan flujos de datos adicionales; confirme qué interfaz se está usando en una instalación concreta.
- Valide siempre funciones críticas de control, como el comportamiento del relé para limitación de velocidad, en un entorno controlado después de realizar cambios de configuración.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del MSP500 agiliza la puesta en marcha, reduce el tiempo de diagnóstico y garantiza una operación fiable a largo plazo con Plaspy. Saber qué reporta el equipo y cómo se conecta permite resolver más rápido los problemas de conectividad y datos, y ayuda a alinear las capacidades del dispositivo con los requisitos operativos.

- Agiliza la resolución de problemas cuando la ubicación o los datos de sensores no llegan como se espera, confirmando el transporte y la configuración del endpoint.
- Ayuda a planificar el APN y el comportamiento de la red adecuados para una entrega de telemetría fiable en campo.
- Asegura que funciones como limitación de velocidad, eventos de geocerca y detección de choque o remolque estén habilitadas y mapeadas correctamente en Plaspy.
- Favorece despliegues más seguros al validar compatibilidad de firmware y hardware antes de un despliegue masivo.
- Mejora el monitoreo al clarificar qué eventos y tipos de sensores proporcionará el MSP500 a la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika MSP500 con Plaspy ofrece a las organizaciones una forma consolidada de recibir posiciones GPS, alertas de sensores y telemetría basada en eventos desde un equipo que soporta GNSS/GSM/Bluetooth, interfaces RS232 y una gama de funciones de control y detección vehicular. El endpoint unificado de ingestión de Plaspy y la detección automática de protocolo simplifican la incorporación, de modo que los equipos de flotas y operaciones pueden concentrarse en los datos y los flujos de trabajo en lugar de en el análisis de bajo nivel.

Para conocer más sobre Plaspy y cómo maneja la comunicación de dispositivos visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y documentación de funciones más actuales, consulte siempre los recursos oficiales de Teltonika en https://www.teltonika-gps.com/ ya que el comportamiento del fabricante y las capacidades de firmware pueden cambiar con el tiempo.
