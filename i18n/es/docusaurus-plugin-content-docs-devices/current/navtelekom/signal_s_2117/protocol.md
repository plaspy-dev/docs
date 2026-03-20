---
slug: /navtelekom/signal_s_2117/protocol
id: signal_s_2117-protocol
sidebar_label: Protocol
title: Navtelekom - Signal S-2117 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para usar el rastreador Navtelekom Signal S 2117 con Plaspy, incluye conexión y orientación de compatibilidad
keywords:
  - Protocolo Navtelekom Signal S 2117
  - Protocolo GPS Navtelekom Signal S 2117
  - Compatibilidad Signal S 2117 Plaspy
  - Protocolo de comunicación Signal S 2117
  - Protocolo de rastreo vehicular Navtelekom
  - Integración sensor de combustible Signal S 2117
  - Soporte RS 485 1 Wire Navtelekom
  - Soporte de protocolo rastreadores Plaspy
  - Compatibilidad rastreador GPS Plaspy
  - Monitoreo vehicular GLONASS GPS
---

# Navtelekom - Signal S-2117 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Navtelekom Signal S-2117 con Plaspy. Está orientada a explicar de forma general cómo se comunica el dispositivo, qué tipos de telemetría y eventos reporta y cómo Plaspy consume esa información para monitoreo de vehículos y flujos de control remoto.

Plaspy utiliza un punto de conexión y puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos están configurados correctamente para reportar a Plaspy. El comportamiento exacto del protocolo del Signal S-2117 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza la conexión y la compatibilidad más que los detalles internos de bajo nivel.

## Resumen del protocolo

El protocolo del Signal S-2117 regula cómo el rastreador envía telemetría, eventos y confirmaciones de control desde el vehículo hacia un servidor como Plaspy. El equipo combina datos GNSS de posición, conectividad GSM y entradas de interfaces locales como RS-485 y 1-Wire para generar la telemetría que Plaspy muestra y utiliza en alarmas e informes.

- Envía actualizaciones periódicas de ubicación y estado de movimiento derivados de la recepción GLONASS y GPS.
- Transmite eventos de alarma y cambios de estado como pulsaciones del botón de pánico, accesos no autorizados y detección de impactos.
- Reporta datos de sensores y entradas auxiliares, incluyendo medidores de combustible conectados por RS-485 y sensores de temperatura o identificación por 1-Wire.
- Permite confirmaciones de control remoto para salidas como activación de sirena o comandos de inmovilizador, sujeto a firmware y configuración del dispositivo.
- Puede incluir indicadores de evento de voz o manos libres para señalar una sesión de voz activa solicitada por el centro de control o activada por el pánico.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría en un endpoint compartido y usa detección automática para identificar el protocolo del rastreador en despliegues operativos. Cuando un Signal S-2117 está configurado para enviar datos a Plaspy, la plataforma compara el patrón de reportes entrantes y mapea los campos reportados a la interfaz de Plaspy sin que, en la mayoría de los casos, sea necesario seleccionar manualmente el protocolo.

- El endpoint del servidor de Plaspy es d.plaspy.com y la IP del servidor para reporte de dispositivos es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y el mismo puerto se utiliza para todos los dispositivos soportados por la plataforma.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del rastreador y las condiciones de red.
- Cuando un equipo reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir un protocolo dentro de Plaspy.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para que la detección automática funcione.

## Transporte y contexto de conexión

Los ajustes de conexión y transporte determinan cómo el Signal S-2117 llega a Plaspy. Los hechos públicos más relevantes son el endpoint y el puerto de Plaspy, y que el rastreador puede configurarse para usar uno u otro modo de transporte según las opciones de firmware y la red.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El reporte se soporta sobre UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de servidores y cortafuegos.
- Los ajustes de la red móvil y el APN en la tarjeta SIM deben permitir conexiones salientes hacia el endpoint de Plaspy y el transporte seleccionado.
- Elementos de red como NAT del operador o cortafuegos deben permitir el tráfico al endpoint de Plaspy en el puerto 8888 para garantizar la entrega fiable.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar entre versiones de firmware; funciones como el reporte de sensores y el comportamiento de control remoto pueden cambiar con actualizaciones de firmware.
- Las revisiones de hardware de la familia Signal S-2117 pueden introducir diferencias en las entradas soportadas, por ejemplo en la cantidad de canales RS-485 o el comportamiento de 1-Wire.
- Los formatos de configuración del fabricante y los parámetros de reporte por defecto pueden variar según lotes de dispositivo o ajustes regionales.
- La elección entre UDP y TCP afecta las características de entrega y debe coincidir con lo que soporte el firmware del equipo y lo que maneje bien la red del operador.
- Verifique el comportamiento de respaldo de energía y características de emergencia en el manual del dispositivo, ya que la conducta durante cortes de energía puede afectar el reporte de eventos.
- Siempre valide el comportamiento del equipo en un entorno de prueba antes de desplegarlo a toda la flota.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el rastreador y qué reporta ayuda a asegurar una integración fluida con Plaspy, facilita el monitoreo confiable y reduce el tiempo dedicado a soporte y diagnóstico.

- Acelera la configuración inicial al aclarar qué dirección de servidor y transporte debe usar el equipo para llegar a Plaspy.
- Facilita mapear entradas del dispositivo como medidores de combustible RS-485 y sensores 1-Wire a campos útiles dentro de Plaspy para informes y alertas.
- Mejora la resolución de problemas cuando falta telemetría o no llegan alarmas, al permitir acotar si el problema está en el transporte, la configuración del dispositivo o la conectividad de red.
- Orienta decisiones sobre actualizaciones de firmware y cambios de hardware para mantener las funciones esperadas de telemetría y control remoto.
- Apoya la planificación de mantenimiento a largo plazo al resaltar dependencias entre firmware del dispositivo, decisiones del fabricante y comportamiento en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom Signal S-2117 con Plaspy aporta una forma centralizada de consumir sus datos de ubicación, sensores, alarmas y control remoto para la visibilidad de la flota y la supervisión operativa. Plaspy agrega la telemetría y la presenta con alertas e informes que ayudan a los operadores a responder incidentes, analizar patrones de combustible y tiempo de uso, y gestionar controles remotos de los dispositivos desde una sola plataforma.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, incluido el Signal S-2117, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que confirme la información más reciente específica del dispositivo con el fabricante en https://www.navtelecom.ru/ antes de tomar decisiones de despliegue.
