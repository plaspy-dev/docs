---
slug: /tk_star/tk905/protocol
id: tk905-protocol
sidebar_label: Protocol
title: TK-Star - TK905 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el TK-Star TK905 con servidores Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo TK Star TK905
  - Protocolo GPS TK905
  - Compatibilidad TK905 Plaspy
  - Protocolo rastreador GPS TK Star
  - Protocolo de comunicación TK905
  - Protocolo de rastreo TK905
  - Compatibilidad rastreadores Plaspy
  - Rastreo vehicular TK905
  - Rastreo de activos TK905
  - Rastreo de flotas TK Star
---

# TK-Star - Protocolo del TK905

Esta página describe el contexto público del protocolo para usar el rastreador TK-Star TK905 con la plataforma Plaspy. Explica a alto nivel cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y qué papel cumple el protocolo de reporte del rastreador al entregar datos de ubicación y eventos para la supervisión de flotas y activos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en información pública y no sensible sobre conexión y compatibilidad, sin entrar en detalles de firmware ni formatos de paquete propietarios.

## Resumen del protocolo

El protocolo de reporte del TK905 es el mecanismo por el cual el rastreador envía fijaciones GNSS, posiciones asistidas por red, banderas de estado y alertas de eventos a un servidor remoto. En la práctica, el protocolo permite al dispositivo identificarse ante el servidor, transmitir telemetría periódica o por eventos y enviar alertas que Plaspy puede presentar como ubicaciones, eventos y registros históricos.

- Permite transmitir datos de posición (GPS, BeiDou, GLONASS), posiciones asistidas por LBS y Wi‑Fi, y banderas de evento del dispositivo a un endpoint remoto.
- Incluye identificadores del dispositivo y campos de estado que permiten a Plaspy asociar los mensajes entrantes con la unidad TK905 correcta.
- Soporta reportes periódicos y mensajes por eventos como movimiento, vibración, geocerca y exceso de velocidad.
- Proporciona los datos que Plaspy necesita para generar mapas en vivo, historial de rutas y notificaciones de alerta sin exponer detalles internos del dispositivo.
- Funciona sobre canales de transporte estándar, por lo que el rastreador puede reportar a Plaspy usando opciones de red comunes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente qué protocolo compatible está usando un dispositivo. Cuando un TK905 se configura para reportar al endpoint de Plaspy, la plataforma asociará los flujos entrantes con el dispositivo correcto y parseará los datos reportados hacia la interfaz y las APIs de la plataforma.

- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para el endpoint de reporte es 54.85.159.138 y el servidor escucha en el puerto 8888.
- Los dispositivos pueden configurarse para enviar datos mediante UDP o TCP al puerto 8888 según el soporte y la configuración del equipo.
- Todos los dispositivos integrados con Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall.
- En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el TK905 está correctamente apuntado al endpoint de reporte de Plaspy.

## Transporte y contexto de conexión

La configuración de conexión para el TK905 se centra en entregar telemetría al endpoint de Plaspy mediante transportes de red estándar. La elección entre UDP y TCP afecta las garantías de entrega y el comportamiento de retransmisión, pero no cambia el hecho de que Plaspy acepta datos en el mismo puerto compartido para todos los dispositivos.

- El TK905 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888; los instaladores deben elegir el transporte que soporte el firmware del equipo y que se adapte a su entorno de red.
- El puerto 8888 es el único puerto de reporte utilizado por Plaspy para todos los dispositivos soportados, lo que simplifica la dirección del servidor en despliegues con múltiples unidades.
- Asegúrese de que los firewalls de red y los filtros del operador permitan tráfico saliente UDP o TCP hacia d.plaspy.com en el puerto 8888 para que el rastreador pueda alcanzar el servidor.
- Usar el nombre de dominio d.plaspy.com facilita la gestión de failover por DNS o cambios de servidor administrados por Plaspy; el uso directo de la IP es una alternativa para entornos con restricciones.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del TK905 pueden cambiar la cadencia de mensajes, los campos incluidos en los reportes y los tipos de eventos disponibles; siempre verifique la versión de firmware del dispositivo al diagnosticar problemas de compatibilidad.
- Las revisiones de hardware o las variantes del TK905 pueden exponer menús de configuración o capacidades distintas; pruebe una unidad de muestra cuando planifique un despliegue masivo.
- La configuración por parte del fabricante (APN, intervalo de reporte, selección de transporte) influye fuertemente en si el dispositivo puede alcanzar de forma fiable el endpoint de Plaspy.
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega de mensajes; seleccione el transporte que mejor se alinee con el soporte del dispositivo y las prioridades operativas.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a d.plaspy.com en el puerto 8888, pero es necesaria una configuración correcta del dispositivo para un parseo adecuado.
- Valide necesidades avanzadas de telemetría (detección de ignición, inmovilizadores, sensores externos) según la instalación específica del TK905 y las capacidades del firmware.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TK905 con Plaspy reduce el tiempo de configuración, mejora la eficiencia en la resolución de problemas y favorece la operación fiable y a largo plazo de la solución de rastreo.

- Ayuda a confirmar que el equipo apunta al endpoint correcto de Plaspy y utiliza el transporte y puerto esperados.
- Simplifica la resolución de problemas cuando falta telemetría, al centrar la investigación en la alcanzabilidad de la red, la selección de transporte y la configuración del firmware.
- Aclara qué tipos de eventos y telemetría suministrará el TK905 a Plaspy para que pueda diseñar reglas y alertas adecuadas.
- Facilita la planificación de las reglas de firewall y la configuración del operador necesarias para permitir que el rastreador reporte a d.plaspy.com en el puerto 8888.
- Ayuda en las decisiones sobre actualizaciones de firmware y selección de hardware al destacar dónde puede variar el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el TK905 con Plaspy ofrece a las organizaciones una forma consistente de recopilar fijaciones GNSS, posiciones asistidas por red, alertas de movimiento e historial de eventos para la gestión de flotas, alquiler de vehículos y protección de activos. La combinación de larga autonomía de batería, posicionamiento multimodal y reportes robustos permite una supervisión fiable de vehículos y equipos, mientras Plaspy centraliza los datos para mapas, alertas e informes.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona los reportes de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y el firmware del dispositivo en el sitio del fabricante https://www.tk-star.com/ antes de desplegar a gran escala.
