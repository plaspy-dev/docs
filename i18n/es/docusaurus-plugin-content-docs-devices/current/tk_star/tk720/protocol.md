---
slug: /tk_star/tk720/protocol
id: tk720-protocol
sidebar_label: Protocol
title: TK-Star - TK720 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador TK-Star TK720 con los servidores y ajustes de Plaspy
keywords:
  - protocolo TK-Star TK720
  - protocolo GPS TK720
  - protocolo de rastreo TK720
  - protocolo de rastreador GPS TK-Star
  - compatibilidad TK720 con Plaspy
  - protocolo de rastreador Plaspy
  - comunicación de rastreador GPS
  - rastreo de vehículos TK720
  - seguimiento de flotas TK-Star
  - guía del protocolo TK720
---

# TK-Star - Protocolo TK720

Esta página documenta el contexto público del protocolo para usar el rastreador GPS por relé TK-Star TK720 con la plataforma Plaspy. Explica, a grandes rasgos, cómo se comunica el dispositivo, qué puntos de conexión expone Plaspy para la ingestión y qué aspectos del reporte del rastreador son relevantes al integrar el TK720 con Plaspy para seguimiento en tiempo real y gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según el firmware, la revisión de hardware, la SKU regional y la implementación del fabricante; por eso esta página se centra en el contexto público y seguro del protocolo, no en detalles internos específicos del firmware.

## Visión general del protocolo

El TK720 emplea su GNSS integrado, posicionamiento asistido y enlace de datos celular para enviar información de ubicación, eventos y estado hacia un servidor. El protocolo del equipo define cómo se empaquetan y transmiten esos reportes y alertas para que una plataforma como Plaspy pueda interpretarlos y mostrar ubicación, telemetría e historial de eventos a los usuarios.

- Permite el envío periódico de actualizaciones de ubicación y fixes de posición al servidor de rastreo para visualización en mapas en vivo.
- Comunica telemetría de eventos y alarmas como detección de vibración, activaciones de geocerca, exceso de velocidad y alertas de movimiento para que Plaspy genere notificaciones.
- Transporta información de estado y latidos (heartbeat) para que la plataforma supervise la conectividad y la salud del dispositivo.
- Soporta flujos remotos de comando y control usados en operaciones como corte de motor por relé cuando se gestionan desde la plataforma.
- Proporciona identificadores y metadatos necesarios para la asociación del dispositivo y el almacenamiento histórico de rutas en el servidor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un punto final compartido y usa detección automática para determinar el protocolo del rastreador, por lo que los dispositivos normalmente no requieren selección de protocolo manual dentro de la plataforma. La configuración correcta del reporte del dispositivo es el requisito típico para una detección e ingestión automáticas exitosas.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador

## Transporte y contexto de conexión

Las decisiones de transporte determinan cómo el TK720 alcanza el endpoint de Plaspy. El rastreador utiliza GPRS celular para enviar sus reportes y puede configurarse para usar uno de los modos de transporte soportados al reportar a la plataforma. El contexto de conexión se refiere a alcanzar el endpoint de Plaspy de forma confiable y a asegurarse de que el equipo use el APN y la dirección del servidor correctos.

- El TK720 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y su provisión.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando DNS o el enrutamiento del operador requieren una dirección IP.
- Plaspy utiliza el mismo puerto para todos los rastreadores soportados, lo que simplifica la configuración de dispositivos y el enrutamiento en el servidor.
- Verifique el APN y la configuración de la SIM para que el equipo pueda establecer una sesión GPRS y enviar reportes salientes a la plataforma.
- Asegúrese de que los firewalls de red y las restricciones del operador permitan tráfico saliente TCP o UDP al puerto 8888 para evitar conexiones bloqueadas.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el tiempo entre mensajes, los tipos de eventos disponibles y los campos opcionales. Confirme el comportamiento del firmware si un dispositivo no actúa como se espera.
- Las revisiones de hardware o las SKU pueden incluir sensores ligeramente distintos o un cableado I/O diferente que afecte el reporte de eventos y las funciones de control remoto.
- Los menús de configuración del fabricante o los comandos SMS usados para cambiar ajustes de servidor pueden variar según la región y la versión de firmware.
- La elección de transporte entre UDP y TCP puede afectar las características de fiabilidad en redes con pérdidas elevadas; seleccione el transporte más adecuado para su entorno.
- Siempre valide el reporte del dispositivo confirmando que puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 y que es visible en la lista de dispositivos de Plaspy.
- Para funciones de comando y control como operaciones de relé, asegure que el acceso administrativo y el emparejamiento del dispositivo estén correctamente provisionados en la plataforma.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar que el equipo esté configurado correctamente, acelera la resolución de problemas y mejora la fiabilidad de las alertas y la entrega de comandos cuando se usa con Plaspy. Tener un conocimiento práctico del contexto de conexión y reporte reduce la fricción en la integración y favorece operaciones consistentes en el tiempo.

- Acelera la configuración inicial al confirmar la dirección de servidor correcta, el modo de transporte y los ajustes de APN.
- Ayuda a aislar problemas de conectividad como puertos bloqueados, fallos de DNS o restricciones del operador.
- Aclara qué telemetría y eventos esperar del dispositivo para que los tableros y reglas de alerta de Plaspy se configuren adecuadamente.
- Mejora la confianza al usar acciones remotas como el corte de motor al conocer cómo y cuándo se transmiten los comandos.
- Favorece la gestión del ciclo de vida al indicar cuándo cambios de firmware o hardware podrían alterar el comportamiento de la integración.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TK720 con Plaspy ofrece a los operadores un rastreador compacto con posicionamiento multi GNSS y reporte de eventos que se integra directamente en una plataforma unificada de gestión de flotas. Plaspy ingiere la telemetría del dispositivo y proporciona seguimiento en vivo, alertas, reproducción de rutas y flujos de incidentes que suelen ser necesarios para operaciones anti robo, monitoreo de alquileres y supervisión de flotas ligeras.

Para saber más sobre Plaspy y cómo maneja la integración de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la documentación más reciente del protocolo y del firmware específico del dispositivo en el sitio del fabricante https://www.tk-star.com/ antes de planificar despliegues a gran escala.
