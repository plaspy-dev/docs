---
slug: /noran/nr200/protocol
id: nr200-protocol
sidebar_label: Protocol
title: Noran - NR200 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador Noran NR200 para integración con Plaspy, con notas sobre transporte y compatibilidad
keywords:
  - protocolo Noran NR200
  - protocolo GPS Noran NR200
  - compatibilidad NR200 con Plaspy
  - protocolo de rastreo NR200
  - protocolo de rastreador Noran
  - comunicación GPS NR200
  - protocolo de dispositivo Plaspy
  - rastreo vehicular NR200
  - rastreador de activos NR200
  - guía del protocolo NR200
---

# Noran - Protocolo NR200

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS magnético inalámbrico Noran NR200 con la plataforma Plaspy. Se centra en cómo el dispositivo comunica datos a Plaspy en términos generales, qué ajustes de conexión emplea públicamente la plataforma y qué consideraciones prácticas ayudan a lograr reportes y telemetría fiables en su flujo de trabajo de gestión de flotas o activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el NR200 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece un contexto público seguro e invita a verificar con la documentación del fabricante.

## Visión general del protocolo

El NR200 envía telemetría, fijaciones de posición y eventos de alarma a servidores remotos usando métodos de transporte estándar que soporta el dispositivo. El rastreador puede reportar ubicaciones periódicas y eventos de alerta que Plaspy ingiere para ofrecer monitoreo en tiempo real, reproducción de historial y notificaciones a operadores.

- Permite al dispositivo entregar datos GPS y ubicaciones asistidas a Plaspy para seguimiento en vivo y registro histórico.
- Transmite telemetría de estado y alarmas como activaciones de geocerca, avisos de exceso de velocidad y estado de batería.
- Ofrece rutas alternativas de reporte, incluyendo TCP, UDP, HTTP y SMS cuando el dispositivo y la red lo permiten.
- Permite a Plaspy correlacionar la posición y telemetría del NR200 con otras señales de la flota cuando estén disponibles en una pila telemática.
- Soporta intervalos de reporte y modos de reposo configurables para equilibrar la autonomía de la batería y la frecuencia de actualización.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint público compartido y en el puerto correspondiente para recibir reportes de muchos modelos de rastreadores y determina automáticamente el protocolo cuando llegan los datos. Esto evita que la mayoría de los usuarios tengan que seleccionar manualmente un protocolo dentro de Plaspy siempre que el NR200 esté configurado para reportar al endpoint de la plataforma.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com, que resuelve a endpoints públicos.
- La IP del servidor Plaspy conocida públicamente para reportes es 54.85.159.138 y es accesible para pruebas de dispositivos.
- Plaspy utiliza un puerto común para las conexiones de dispositivos, que es 8888 para todos los equipos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 dependiendo de la configuración del NR200 y el comportamiento del operador móvil.
- Cuando el NR200 apunta al endpoint y puerto de Plaspy, la plataforma gestiona automáticamente la detección del protocolo y el enrutamiento de la telemetría.

## Transporte y contexto de conexión

Las opciones de conexión en el NR200 determinan cómo el rastreador alcanza Plaspy y qué tan fiable será el reporte en un entorno dado. El NR200 soporta transportes celulares comunes y puede recurrir a SMS para ciertos tipos de notificación, lo que añade flexibilidad en áreas remotas o con baja cobertura.

- El NR200 puede configurarse para enviar datos por TCP o UDP al puerto 8888 hacia el servicio de Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy mantiene el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración y el despliegue masivo.
- Según el comportamiento de la red celular y las opciones de configuración, UDP reduce el overhead mientras que TCP aporta mayor fiabilidad de conexión.
- El reporte por SMS está disponible como canal alternativo para alertas y actualizaciones limitadas donde el SMS sea preferido o necesario.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden modificar la cadencia de mensajes, los campos disponibles o los transportes soportados; confirme siempre la versión de firmware al solucionar problemas.
- Las revisiones de hardware o variaciones de producción del fabricante pueden introducir diferencias sutiles en el reporte o la gestión de energía.
- La elección entre TCP y UDP en el NR200 afecta las características de entrega y debe ajustarse a las condiciones de la red y las necesidades operativas.
- El SMS sigue siendo un respaldo útil para alertas críticas, pero no reemplaza la telemetría completa cuando se requiere seguimiento en tiempo real.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888, pero es necesaria la configuración correcta del equipo.
- Valide la compatibilidad y los ajustes específicos de firmware revisando la documentación oficial de Noran correspondiente a su lote de dispositivos.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del NR200 facilita una configuración correcta, una ingesta de datos confiable y una resolución de problemas eficiente al integrar el rastreador con Plaspy. Saber qué transportes y funciones soporta el dispositivo reduce el tiempo de implementación y ayuda a conservar la batería en despliegues a largo plazo.

- Asegura que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 para detección e ingesta automáticas.
- Ayuda a elegir el modo de transporte apropiado, TCP o UDP, según las condiciones de red y la fiabilidad requerida.
- Orienta la configuración de intervalos de reporte y modos de reposo para equilibrar la vida útil de la batería y la frecuencia de actualizaciones.
- Facilita la resolución de problemas cuando la telemetría se retrasa o falta al acotar causas relacionadas con el transporte o el firmware.
- Permite planificar mecanismos de respaldo como el SMS para alertas críticas cuando los datos móviles estén limitados.

## Por qué usar Plaspy con este protocolo

Usar el NR200 con Plaspy ofrece a las organizaciones una forma ágil de incorporar rastreadores compactos y alimentados por batería a una plataforma centralizada de monitoreo y alertas. El endpoint compartido y la detección automática de protocolos de Plaspy simplifican los despliegues, de modo que las unidades NR200 pueden añadirse sin seleccionar el protocolo por dispositivo, mientras la plataforma muestra ubicación, alertas e historial en una vista unificada.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el Noran NR200 visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo, notas de firmware y guías de implementación, consulte los recursos oficiales de Noran en http://www.norantracker.com/ ya que el comportamiento del dispositivo y la documentación del fabricante pueden cambiar con el tiempo.
