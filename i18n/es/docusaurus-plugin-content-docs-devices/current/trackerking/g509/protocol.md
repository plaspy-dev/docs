---
slug: /trackerking/g509/protocol
id: g509-protocol
sidebar_label: Protocol
title: TrackerKing - G509 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del TrackerKing G509 y cómo el dispositivo comunica posiciones y alertas a Plaspy
keywords:
  - protocolo TrackerKing G509
  - protocolo GPS TrackerKing G509
  - compatibilidad TrackerKing G509 Plaspy
  - protocolo de comunicación G509
  - protocolo de rastreo G509
  - protocolo rastreador GPS Plaspy
  - integración de dispositivos Plaspy
  - rastreo de vehículos TrackerKing
  - rastreo de flotas G509
  - protocolo rastreador GPS relé
---

# TrackerKing - Protocolo G509

Esta página describe el contexto público del protocolo para usar el rastreador GPS relé TrackerKing G509 con la plataforma Plaspy. Explica, a alto nivel, cómo se comunica el dispositivo, qué papel juega el protocolo en el reporte de posiciones y eventos, y cómo Plaspy procesa esos informes para supervisión en tiempo real y reproducción histórica.

El G509 es un rastreador compacto de tipo relé, diseñado para instalaciones discretas y flujos de trabajo anti-robo en flotas. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página se centra en el contexto del protocolo que no es sensible y que es relevante para la configuración, la conectividad y los flujos de datos esperados cuando el G509 apunta a Plaspy.

## Visión general del protocolo

El protocolo que utiliza el G509 define cómo el dispositivo se identifica ante un servidor, transmite posiciones GPS y comunica datos de eventos como movimiento, vibración, entradas/salidas de geocerca, exceso de velocidad y notificaciones de energía. En el contexto de una plataforma de rastreo como Plaspy, el protocolo posibilita la telemetría y el intercambio de comandos sin exponer los detalles internos del dispositivo.

- Transporta informes periódicos de posición GPS y marcas de tiempo para que Plaspy pueda mostrar la ubicación en vivo y las rutas históricas.
- Envía señales de evento y alarma para detección de movimiento, vibración, violaciones de geocerca, exceso de velocidad y pérdida de energía.
- Incluye identificadores y campos de estado que permiten a Plaspy asociar los mensajes con un dispositivo específico y presentar telemetría utilizable.
- Soporta intercambios de comandos o control para accionar el relé, por ejemplo corte remoto de motor o combustible cuando se usa con controles autorizados en la plataforma.
- Funciona sobre transportes de red estándar de modo que los mensajes puedan enrutarse al endpoint de Plaspy para su análisis automático y almacenamiento.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint compartido y analiza los mensajes para determinar el protocolo que presenta el rastreador. Dado que la plataforma está diseñada para reconocer muchos formatos estándar de mensajes de rastreadores, usted por lo general no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy acepta informes de dispositivos en el endpoint público d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de red, que es el 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888, según el soporte del dispositivo y la preferencia del instalador.
- Cuando un dispositivo correctamente configurado envía datos a d.plaspy.com en el puerto 8888, Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el registro de dispositivo correspondiente.
- Usted normalmente solo debe asegurarse de que el G509 esté apuntando al endpoint de Plaspy y que el enrutamiento de red permita que el tráfico saliente del dispositivo llegue a d.plaspy.com por el puerto estándar.

## Transporte y contexto de conexión

Las elecciones de conexión, como TCP o UDP, DNS frente a IP directa y la fiabilidad de la red afectan la forma en que el G509 reporta a un servidor de rastreo. Plaspy soporta opciones de transporte comunes para que los instaladores puedan elegir el método que mejor se adapte a su despliegue y a las capacidades del dispositivo.

- El G509 se puede configurar para reportar a Plaspy usando UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 según la preferencia del instalador y las restricciones de la red.
- Usar DNS con d.plaspy.com puede simplificar la configuración y permitir que Plaspy gestione el enrutamiento backend sin cambiar la configuración del dispositivo.
- TCP se suele usar donde se prefiere una entrega orientada a conexión; UDP es útil cuando se desea menor sobrecarga o implementaciones más sencillas.
- Verifique que las redes del vehículo o de la flota permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 y que la SIM o la operadora permitan el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido del mensaje, la frecuencia o campos opcionales; confirme la revisión del firmware al validar compatibilidad.
- Las revisiones de hardware o variantes de configuración de fábrica pueden exponer diferentes opciones de interfaz o habilitar distintas alarmas y comportamientos del relé.
- Algunos fabricantes mantienen ramas de firmware múltiples que alteran intervalos de reporte, umbrales de evento o comandos disponibles; revise la configuración del dispositivo antes del despliegue.
- La selección del transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y el entorno de red para un reporte fiable a Plaspy.
- El control del relé y las acciones de inmovilizador están sujetas a la configuración de la plataforma y a los flujos de trabajo autorizados en Plaspy, y requieren un cableado correcto y la instalación adecuada.
- Valide siempre el comportamiento en un vehículo de prueba controlado antes de implementaciones a gran escala para confirmar la telemetría y el flujo de eventos esperados.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores, gerentes de flota e integradores a lograr conectividad fiable e interpretación correcta de los datos del dispositivo en Plaspy. Conocer claramente qué reporta el rastreador y cómo lo reporta permite una resolución de problemas más rápida y operaciones más fluidas.

- Garantiza la configuración correcta del dispositivo para que los mensajes de posición y eventos lleguen a Plaspy de forma consistente.
- Facilita el diagnóstico de problemas de conectividad al confirmar transporte, endpoint y ajustes de DNS.
- Aclara qué eventos y alarmas reportará el G509 a Plaspy y cómo aparecen en los registros de la plataforma.
- Apoya el despliegue seguro de funciones de inmovilizador por relé alineando el cableado del dispositivo con las expectativas de control de la plataforma.
- Reduce el tiempo de inactividad al hacer más sencillas la identificación de diferencias de firmware o configuración durante la resolución de problemas.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing G509 con Plaspy ofrece a los operadores de flotas y propietarios de vehículos una vista centralizada de ubicaciones, alarmas y recorridos históricos, manteniendo el perfil de instalación compacto y discreto del dispositivo. Plaspy ingiere la telemetría del G509 en paneles y flujos de alerta para que los equipos puedan reaccionar ante eventos de seguridad, supervisar el comportamiento del conductor y analizar datos básicos de kilometraje y viajes.

Para obtener más información sobre cómo Plaspy soporta la integración de dispositivos y la supervisión de flotas, visite https://www.plaspy.com. Para los detalles más actuales del dispositivo, incluidos firmware, esquemas de conexión y notas de configuración del fabricante, verifique la información en el sitio de TrackerKing https://trackerking.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
