---
slug: /xexun/x03/protocol
id: x03-protocol
sidebar_label: Protocol
title: Xexun - X03 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el rastreador Xexun X03 a Plaspy con notas de transporte y compatibilidad
keywords:
  - protocolo Xexun X03
  - protocolo GPS X03
  - rastreador GPS Xexun X03
  - compatibilidad Xexun X03 Plaspy
  - protocolo de comunicación X03
  - protocolo de rastreo X03
  - integración de dispositivos Plaspy
  - guía de protocolo rastreador GPS
  - rastreo vehicular X03
  - rastreador GPS de larga espera
---

# Xexun - Protocolo X03

Esta página resume el contexto público del protocolo para integrar el rastreador Xexun X03 Long-Standby GPS/BeiDou con Plaspy. Se centra en los detalles de comunicación y conexión de alto nivel que operadores e integradores necesitan conocer al configurar dispositivos para reportar a Plaspy, sin entrar en la lógica interna del firmware ni en estructuras de paquete propietarias.

El X03 es un rastreador industrial de larga espera que reporta posicionamiento multi fuente y telemetría a través de redes celulares hacia plataformas en la nube como Plaspy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Confirme siempre los detalles específicos del dispositivo con el fabricante al planear despliegues.

## Visión general del protocolo

A alto nivel, el protocolo del rastreador define cómo el X03 se identifica, envía posiciones y telemetría de eventos, y mantiene a Plaspy informado sobre el estado del equipo. Para la integración con Plaspy, los aspectos públicos importantes son cómo el dispositivo establece la conexión con la plataforma y qué tipos de eventos e información posicional envía.

- Permite al X03 transmitir ubicaciones, eventos de movimiento y manipulación, estado de batería y telemetría diagnóstica a Plaspy.
- Proporciona identificadores que permiten a Plaspy asociar los reportes entrantes con un registro de dispositivo específico.
- Soporta comportamiento de almacenamiento y reenvío para que las posiciones en caché recopiladas durante pérdidas de conectividad se suban cuando el dispositivo se reconecte.
- Transporta informes periódicos y por evento que Plaspy utiliza para actualizaciones de mapa, alertas de geocercas e historial en la línea de tiempo.
- Funciona sobre transporte IP estándar para que los dispositivos puedan alcanzar Plaspy desde redes 2G, 3G o 4G domésticas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint compartido y determina automáticamente el protocolo del dispositivo, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy. La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el requisito habitual para que la detección automática funcione.

- Plaspy escucha en un único endpoint de servidor en d.plaspy.com y también acepta conexiones al IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, por lo que no existe una configuración de puerto por dispositivo dentro de la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint y puerto compartidos.
- Normalmente usted solo necesita configurar el X03 para que reporte al endpoint de Plaspy usando el transporte correcto y las credenciales si el dispositivo las requiere.
- Si un dispositivo no aparece en Plaspy después de la configuración, revisar los ajustes de reporte del equipo y la accesibilidad de la red es el primer paso práctico.

## Transporte y contexto de conexión

El X03 puede configurarse para alcanzar Plaspy mediante los métodos de transporte IP comunes que soportan el dispositivo y la red. La configuración de la conexión y la elección entre UDP y TCP suelen ser opciones en el equipo o determinadas por el firmware.

- El X03 puede configurarse para usar UDP o TCP para alcanzar Plaspy en el puerto 8888, según las capacidades del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o al IP del servidor 54.85.159.138 para entregar reportes a Plaspy.
- Plaspy acepta conexiones en el puerto 8888 y este mismo puerto se utiliza para todos los dispositivos soportados por la plataforma.
- La selección del transporte puede afectar la confiabilidad y la entrega oportuna de eventos en condiciones de red deficientes, por lo que utilice el modo que recomiende la documentación de su dispositivo.
- Valide el enrutamiento de red y la configuración del APN del operador para que el rastreador pueda alcanzar el endpoint de Plaspy desde la SIM y la región donde esté desplegado.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware en el X03 pueden cambiar los mensajes disponibles, campos opcionales o comportamientos de eventos que afectan cómo aparecen los datos en Plaspy.
- Revisiones de hardware o conjuntos de funciones opcionales, como módulos de voz o sensores adicionales, pueden alterar la telemetría que reporta el dispositivo.
- Variaciones por parte del fabricante en servidores de reporte por defecto o menús de configuración pueden requerir actualizar los ajustes del servidor del dispositivo para apuntar a Plaspy.
- La elección entre UDP y TCP en el puerto 8888 debe seguir la documentación del dispositivo y las limitaciones de la red local.
- La detección automática de Plaspy cubre muchas variantes comunes de reporte de Xexun, pero se recomienda validar después de la configuración inicial.
- Cuando tenga dudas, consulte las guías de configuración del dispositivo y realice reportes de prueba para confirmar el mapeo correcto en Plaspy.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el X03 ayuda a garantizar una configuración confiable, facilitar la resolución de problemas y lograr un comportamiento predecible en operaciones a largo plazo. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer el contexto de comunicación reduce el tiempo de despliegue y minimiza sorpresas operativas.

- Confirma que el dispositivo apunta al endpoint y puerto correctos antes de esperar datos en Plaspy.
- Ayuda a diagnosticar reportes faltantes revisando el transporte, la configuración del APN y restricciones de firewall o del operador.
- Explica por qué actualizaciones de firmware o cambios de hardware pueden modificar la telemetría visible en Plaspy.
- Permite planificar el comportamiento de geocercas y alertas sabiendo qué eventos puede reportar el dispositivo.
- Mejora los flujos de trabajo de mantenimiento al comprender los reportes periódicos y las notificaciones de batería baja.

## Por qué usar Plaspy con este protocolo

Usar el Xexun X03 con Plaspy brinda a las organizaciones un rastreo compacto de larga espera junto con la visibilidad de Plaspy para ubicación en tiempo real, alertas de geocerca, notificaciones de manipulación y reproducción histórica de rutas. Plaspy ingiere los reportes del X03 y los presenta dentro de flujos de trabajo de flota para que los equipos puedan actuar sobre alertas, monitorear rutas y programar mantenimiento con menos trabajo manual.

Para conocer más sobre Plaspy y cómo se integra con dispositivos como el X03 visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware e instrucciones de configuración, verifique la información actual con el fabricante en https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
