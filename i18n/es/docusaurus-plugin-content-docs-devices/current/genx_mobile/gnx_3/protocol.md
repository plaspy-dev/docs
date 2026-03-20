---
slug: /genx_mobile/gnx_3/protocol
id: gnx_3-protocol
sidebar_label: Protocol
title: GenX Mobile - GNX-3 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GenX Mobile GNX-3 y cómo se comunica con Plaspy para reportes confiables
keywords:
  - Protocolo GenX Mobile GNX-3
  - Protocolo GPS GenX Mobile GNX-3
  - Protocolo de rastreo GNX-3
  - Protocolo de comunicación GNX-3
  - Compatibilidad GNX-3 con Plaspy
  - Integración Plaspy GNX-3
  - Protocolo de rastreador GPS GenX Mobile
  - Rastreo vehicular GNX-3
  - Informes de acelerómetro GNX-3
  - Gestión de flotas GNX-3
---

# GenX Mobile - Protocolo GNX-3

Esta página describe el contexto público del protocolo para usar el rastreador GenX Mobile GNX-3 con Plaspy. Explica, en términos generales, cómo se comunica el GNX-3 y qué esperar al configurar el dispositivo para enviar ubicación, eventos de movimiento y telemetría a Plaspy. La información se centra en detalles de integración, no en la implementación interna del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión del firmware del GNX-3, revisiones de hardware y la configuración del fabricante. Para detalles de trama y notas específicas de firmware consulte la documentación del fabricante según sea necesario.

## Visión general del protocolo

El protocolo de comunicación del GNX-3 permite que el rastreador entregue ubicación GPS, eventos de movimiento detectados por el acelerómetro integrado y otra telemetría a un servidor remoto para que Plaspy presente la ubicación y el estado a los usuarios. A alto nivel, el protocolo regula cómo el dispositivo se identifica, cómo se envían los informes periódicos y los mensajes por eventos, y cómo el servidor interpreta esos informes para rastreo y alertas.

- Proporciona información de identificación del dispositivo para asociar los reportes con una unidad GNX-3 en Plaspy
- Envía actualizaciones periódicas de ubicación y mensajes generados por eventos como detecciones del acelerómetro
- Transporta telemetría que Plaspy utiliza para mapas, geocercas y análisis de comportamiento del conductor
- Soporta modos de configuración y reporte que el instalador puede ajustar en el dispositivo
- Permite la entrega confiable de mensajes al endpoint de Plaspy para su posterior procesamiento y visualización

## Detección del protocolo por parte de Plaspy

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del dispositivo según el tráfico recibido. En la mayoría de las instalaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el GNX-3 está configurado para reportar a la dirección y puerto del servidor Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com en la IP 54.85.159.138 usando el puerto 8888
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y el despliegue
- Cuando el GNX-3 envía sus primeros reportes al endpoint de Plaspy, la plataforma empata el tráfico entrante con un perfil de protocolo compatible
- Normalmente no se requiere selección manual de protocolo en Plaspy si el GNX-3 está correctamente apuntado al endpoint de Plaspy

## Transporte y contexto de conexión

El GNX-3 puede usar UDP o TCP para entregar reportes según la configuración del dispositivo y el soporte del firmware. Configurar el transporte correcto y la dirección del servidor en el GNX-3 es un paso esencial para asegurar que los mensajes lleguen a Plaspy de forma confiable.

- Los GNX-3 pueden configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo
- La información del servidor Plaspy para la configuración del GNX-3 es d.plaspy.com o la IP 54.85.159.138 con puerto 8888
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que facilita la gestión de reglas de red uniformes
- Verifique que el APN del dispositivo y las reglas de firewall salientes permitan conexiones al servidor Plaspy en el puerto 8888
- Elija UDP o TCP en el dispositivo conforme a la guía del fabricante y las condiciones de la red

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles o el comportamiento de eventos; verifique la versión de firmware del GNX-3 al solucionar problemas
- Revisiones de hardware o paquetes de sensores opcionales pueden alterar la telemetría disponible que el dispositivo reporta
- Las opciones de configuración del fabricante pueden afectar si el dispositivo usa UDP o TCP y qué eventos se reportan
- Siempre confirme la selección de transporte y la dirección del servidor en el GNX-3 antes de intentar registrar el dispositivo en Plaspy
- Valide la compatibilidad y cualquier nota específica de firmware con la documentación oficial de GenX Mobile
- Factores de red como NAT, configuración del APN y comportamiento del operador pueden influir en la conectividad y deben revisarse durante la puesta en marcha

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GNX-3 ayuda a los instaladores y operadores a configurar el rastreador correctamente, diagnosticar problemas de conectividad o reporte, y asegurarse de que los datos de eventos como los informes del acelerómetro estén disponibles y sean útiles en Plaspy. Tener claro cómo se comunica el dispositivo reduce el tiempo de configuración y mejora la confiabilidad a largo plazo.

- Garantiza que el GNX-3 esté apuntando al endpoint y transporte correctos de Plaspy para reportes confiables
- Ayuda a interpretar por qué ciertos tipos de eventos o telemetría aparecen o no en la plataforma
- Facilita la resolución de problemas cuando un dispositivo no puede conectar o aparece sin conexión por problemas de red o configuración
- Orienta sobre decisiones de actualización de firmware y si se esperan cambios en el comportamiento de reporte
- Mejora la precisión del análisis de comportamiento del conductor y eventos de movimiento al confirmar las configuraciones de reporte de eventos

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el GNX-3 proporciona un destino único y consolidado para los reportes y eventos del GNX-3, de modo que las organizaciones puedan monitorear vehículos, revisar el comportamiento del conductor y gestionar flotas desde una sola plataforma. El endpoint compartido de Plaspy y el uso consistente del puerto reducen la complejidad de configuración y permiten escalar despliegues con menos ajustes del lado del servidor.

Para conocer más sobre cómo Plaspy gestiona los reportes de dispositivos y explorar las funcionalidades de la plataforma visite https://www.plaspy.com. Para detalles específicos más recientes sobre protocolos de dispositivo, notas de firmware y revisiones de hardware, verifique la información directamente con el fabricante en http://www.genxmobile.com/. El soporte e implementación del protocolo pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial de GenX Mobile al planificar despliegues.
