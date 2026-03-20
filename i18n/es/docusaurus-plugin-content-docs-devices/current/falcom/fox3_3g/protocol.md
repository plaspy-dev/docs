---
slug: /falcom/fox3_3g/protocol
id: fox3_3g-protocol
sidebar_label: Protocol
title: Falcom - FOX3-3G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Falcom FOX3-3G y su comunicación con Plaspy
keywords:
  - Protocolo Falcom FOX3-3G
  - Protocolo GPS Falcom FOX3-3G
  - Comunicación FOX3-3G
  - Protocolo de rastreo FOX3-3G
  - Compatibilidad protocolo Falcom
  - Integración de dispositivos Plaspy
  - Protocolo de telemática vehicular
  - Telemetría GNSS FOX3-3G
  - Rastreador Falcom Plaspy
  - Conectividad FOX3-3G
---

# Falcom - Protocolo FOX3-3G

Esta página resume el contexto público del protocolo para utilizar el rastreador Falcom FOX3-3G Series con Plaspy. Se enfoca en cómo el dispositivo comunica en términos generales, qué puntos de conexión expone Plaspy para el reporte y qué comportamientos del rastreador son relevantes al integrarlo en una plataforma de gestión de flotas.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación estándar y no sensible, recomendando que los integradores verifiquen detalles específicos del dispositivo con Falcom cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador define cómo el FOX3-3G envía telemetría, estado y eventos a un servidor remoto y cómo el servidor puede entregar comandos o configuraciones. Para la integración con Plaspy, el objetivo principal del protocolo es asegurar la entrega fiable de la ubicación y los datos del vehículo para que la plataforma muestre información accionable.

- Permite reportar ubicación GNSS, hora y estado de movimiento a Plaspy para geolocalización e historial.
- Transmite el estado del dispositivo y señales I/O para que entradas, salidas y módulos auxiliares como IOBOX puedan representarse en la plataforma.
- Incluye mensajes periódicos o por eventos que permiten a Plaspy reconstruir recorridos, alertas y comportamiento.
- Proporciona identificación del dispositivo para que Plaspy asocie los flujos entrantes con la instancia correcta del rastreador.
- Puede incluir cargas útiles cifradas o funcionalidades premium según la configuración del FOX3-3G y las capacidades del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un único punto de conexión y puerto compartido para todos los rastreadores soportados y utiliza ese punto para detectar automáticamente qué protocolo está usando un dispositivo. En la práctica, esto significa que un FOX3-3G correctamente configurado reportará al endpoint de Plaspy y la plataforma identificará el protocolo sin necesidad de selección manual.

- El dominio de Plaspy para reporte de dispositivos es d.plaspy.com
- La IP del servidor Plaspy usada para reporte es 54.85.159.138
- Plaspy escucha en el puerto 8888 para conexiones entrantes de rastreadores
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el modelo y la configuración
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma realiza la detección automática del protocolo
- Si el dispositivo reporta al endpoint de Plaspy y el enrutamiento de red es correcto, normalmente no es necesario seleccionar el protocolo manualmente en Plaspy

## Transporte y contexto de conexión

Las opciones de transporte y DNS determinan cómo el FOX3-3G alcanza Plaspy, pero no cambian el rol general del protocolo. La familia FOX3-3G admite múltiples opciones de transporte y cajas accesorias que influyen en qué datos están disponibles para enviar.

- El rastreador puede configurarse para enviar datos usando UDP o TCP en el puerto 8888 según el modelo y las opciones de configuración
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para reportar
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y el enrutamiento
- La elección del transporte afecta las semánticas de entrega pero no altera que el protocolo transmite ubicación e información de estado a Plaspy
- Asegúrese de que las reglas de red y los firewalls permitan tráfico saliente hacia d.plaspy.com o 54.85.159.138 en el puerto 8888 desde la red del dispositivo

## Notas sobre compatibilidad del protocolo

- La funcionalidad del FOX3-3G y la telemetría reportada pueden variar según la versión de firmware y la revisión de hardware; confirme siempre el nivel de firmware instalado al diagnosticar problemas.
- Algunas funciones avanzadas, como cifrado de datos, modos múltiples de historial, monitoreo eco drive y detección de bloqueo de señal, forman parte del conjunto de características del dispositivo y pueden influir en lo que se reporta al servidor.
- Accesorios como IOBOX MINI, IOBOX CAN e IOBOX WLAN amplían las entradas disponibles y pueden cambiar los tipos de mensajes que envía el dispositivo sin modificar el endpoint de conexión base.
- Las interfaces de audio están disponibles únicamente en el modelo FOX3-3G-AU; otros modelos de la serie no incluyen funciones de audio.
- La selección de transporte entre UDP y TCP puede configurarse por dispositivo y puede requerir alineación con las políticas de red en campo.
- Valide el soporte del protocolo y las funciones contra la documentación del dispositivo para el modelo y firmware instalados para confirmar la compatibilidad con Plaspy.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el FOX3-3G ayuda a garantizar la entrega fiable de telemetría, agilizar la resolución de problemas y prever el comportamiento después de actualizaciones de firmware o cambios de hardware. Tener expectativas claras sobre el protocolo reduce el tiempo de integración y mejora la visibilidad operativa.

- Permite verificar que el dispositivo esté apuntando correctamente a d.plaspy.com o a la IP y puerto del servidor Plaspy para que los datos lleguen a la plataforma
- Facilita el diagnóstico de problemas de conectividad como paquetes perdidos, bloqueos por firewall o desajustes de transporte
- Orienta en la decisión de habilitar funciones opcionales como extensiones IOBOX o modos de registro premium
- Apoya la planificación de actualizaciones de firmware y la comprensión de cómo los cambios pueden alterar el reporte o las opciones de configuración
- Reduce falsos positivos en las alertas al aclarar cuándo y cómo el dispositivo reporta estado y eventos

## Por qué usar Plaspy con este protocolo

Usar la serie FOX3-3G con Plaspy ofrece a las organizaciones una forma consolidada de recopilar ubicación del vehículo, comportamiento y estado de I/O a través de un único endpoint de reporte. La combinación de la flexibilidad del hardware Falcom y la detección automática de protocolos de Plaspy simplifica el despliegue y la gestión continua en flotas mixtas.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el Falcom FOX3-3G, visite https://www.plaspy.com. Para obtener detalles específicos y actualizados sobre protocolos, notas de firmware y opciones de hardware, consulte al fabricante en https://www.falcom.de ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo y deben confirmarse con la documentación oficial de Falcom.
