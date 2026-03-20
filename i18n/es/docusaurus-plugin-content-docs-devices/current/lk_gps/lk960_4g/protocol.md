---
slug: /lk_gps/lk960_4g/protocol
id: lk960_4g-protocol
sidebar_label: Protocol
title: LK-GPS - LK960-4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el rastreador LK960-4G a los servidores de Plaspy y comprender lo básico de la comunicación
keywords:
  - protocolo LK GPS LK960 4G
  - protocolo GPS LK960 4G
  - compatibilidad LK960 4G Plaspy
  - protocolo rastreador LK GPS
  - comunicación GPS vehicular
  - protocolo seguimiento de flotas
  - integración de dispositivos Plaspy
  - telemetría LK960 4G
  - protocolo de seguimiento LK GPS
  - protocolo para Plaspy
---

# LK-GPS - Protocolo LK960-4G

Esta página ofrece contexto público sobre el protocolo para utilizar el rastreador LK-GPS LK960-4G con la plataforma Plaspy. Se concentra en cómo el dispositivo se comunica con Plaspy usando los ajustes compartidos de conexión de la plataforma, qué esperar de los reportes del equipo y consideraciones prácticas para la configuración y resolución de problemas, sin exponer detalles privados de implementación.

Plaspy emplea un único endpoint de red y puerto compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo está configurado para reportar a la plataforma. El comportamiento exacto del protocolo para el LK960-4G puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página destaca el contexto general de conexión y protocolo y recomienda verificar contra la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del LK960-4G define cómo el rastreador se identifica, reporta posición y telemetría, y envía alertas basadas en eventos a un servidor remoto. En el contexto de Plaspy, el protocolo permite actualizaciones de ubicación confiables, reenvío de alarmas y comandos iniciados por la plataforma cuando están soportados.

- Permite reportes periódicos de posición y telemetría para seguimiento en tiempo real y registros históricos.
- Transmite notificaciones de eventos como geocerca, manipulación, exceso de velocidad, pérdida de alimentación y cambios en el estado del encendido al servidor.
- Incluye información de identidad y estado del dispositivo para que Plaspy pueda correlacionar mensajes entrantes con un rastreador registrado.
- Soporta rutas de comando remoto a través de la plataforma cuando el dispositivo y el firmware incluyen manejo de comandos.
- Funciona sobre canales de transporte estándar para que el rastreador pueda alcanzar los endpoints de servidor de Plaspy para el procesamiento centralizado.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un endpoint y puerto compartidos e identifica automáticamente el protocolo del rastreador basándose en el tráfico que llega. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy con los ajustes de conexión correctos.

- Plaspy escucha en un único puerto para todos los dispositivos, lo que simplifica la configuración.
- La plataforma asocia los mensajes entrantes con los dispositivos registrados e infiere el protocolo por el patrón de tráfico.
- Cuando el LK960-4G apunta al endpoint de Plaspy, los reportes normales se vinculan automáticamente con un registro de dispositivo en Plaspy.
- Normalmente no es necesaria la selección manual del protocolo en la plataforma si el rastreador está correctamente configurado para reportar a Plaspy.
- Si no aparecen reportes, verifique primero los ajustes de red del dispositivo, la dirección del servidor y el comportamiento del firmware antes de cambiar la configuración de protocolo en la plataforma.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el LK960-4G accede a los servidores de Plaspy y qué opciones de red se usan comúnmente. El rastreador puede configurarse para usar UDP o TCP según el firmware y los requisitos de la implementación, y debe apuntar al endpoint público de Plaspy para la entrega de datos.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El rastreador soporta reportes por UDP o TCP dependiendo del firmware y la configuración elegida en la instalación.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el LK960-4G debe establecerse al puerto compartido de Plaspy según las instrucciones de aprovisionamiento.
- Usar el nombre de dominio de la plataforma puede simplificar cambios futuros de servidor, mientras que la IP del servidor ofrece una alternativa directa si ciertas configuraciones de red lo requieren.
- Confirme el transporte (UDP vs TCP) que su variante de firmware soporta para asegurar la entrega consistente de ubicaciones y mensajes de alarma.

## Notas sobre compatibilidad del protocolo

- El LK960-4G se describe como compatible con Plaspy de fábrica, pero los detalles de compatibilidad pueden depender del firmware exacto instalado en el dispositivo.
- Las revisiones de hardware del fabricante o las variantes regionales pueden implementar pequeñas diferencias en el comportamiento de reporte o en las funciones soportadas.
- La elección del transporte (UDP o TCP) puede afectar las características de entrega y debe coincidir con la configuración del dispositivo y el diseño de la red.
- El manejo de comandos por la plataforma, como el inmovilizador remoto, depende del firmware del dispositivo y de cualquier ajuste de autorización requerido.
- Las funciones de consulta por SMS y comandos locales existen en muchas variantes y pueden ser útiles para pruebas iniciales, pero la integración con la plataforma es preferible para la gestión continua de flotas.
- Siempre valide la compatibilidad y el soporte de funciones contra la documentación oficial del producto LK-GPS para su modelo y compilación de firmware.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el LK960-4G ayuda a garantizar un despliegue exitoso, flujos de datos precisos hacia Plaspy y una resolución de problemas más rápida cuando surjan incidencias. Un contexto claro del protocolo permite a los equipos de operaciones y TI alinear la configuración de los dispositivos, las políticas de red y las expectativas de la plataforma para un seguimiento de flotas confiable.

- Apuntar correctamente el dispositivo y escoger el transporte evita actualizaciones perdidas y reenvíos de eventos incompletos.
- Conocer qué eventos reporta el rastreador ayuda a mapear las alarmas del dispositivo en notificaciones y reglas de Plaspy.
- Estar al tanto de revisiones de firmware y hardware reduce sorpresas en despliegues masivos o implementaciones.
- Entender el soporte de comandos orienta las expectativas respecto a inmovilizadores remotos, cambios de configuración y control desde la plataforma.
- Un contexto de conexión claro ayuda a los equipos de red con listas blancas, enrutamiento y configuración de cortafuegos para el tráfico de los dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el LK960-4G con Plaspy proporciona a las organizaciones visibilidad centralizada de la ubicación de los vehículos, su estado y las alarmas, además de aprovechar la plataforma para alertas, reportes históricos y flujos de trabajo operativos. El diseño cableado continuo del rastreador, su recepción multi-GNSS y la conectividad 4G lo hacen adecuado para flotas, alquileres y aplicaciones de seguridad donde la disponibilidad y la telemetría precisa son clave.

El enfoque de endpoint unificado de Plaspy y la detección automática de protocolos simplifican la integración para que instaladores y gestores de flota se concentren en el despliegue y las operaciones en vez de en la selección de protocolos. Para más información sobre Plaspy y cómo funciona con rastreadores compatibles, visite https://www.plaspy.com. Para los detalles más recientes del protocolo del fabricante, notas de firmware y comportamiento específico de variantes del LK960-4G, verifique la información en el sitio oficial de LK GPS https://www.lk-gps.com ya que el soporte de dispositivos y el comportamiento del firmware pueden cambiar con el tiempo.
