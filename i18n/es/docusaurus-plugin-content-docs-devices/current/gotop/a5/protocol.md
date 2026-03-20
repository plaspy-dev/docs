---
slug: /gotop/a5/protocol
id: a5-protocol
sidebar_label: Protocol
title: GOTOP - A5 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador GPS GOTOP A5 y su comunicación con los servidores de Plaspy
keywords:
  - protocolo GOTOP A5
  - protocolo GPS GOTOP A5
  - rastreo GOTOP A5
  - comunicación GOTOP A5
  - compatibilidad GOTOP A5
  - protocolo rastreador GPS GOTOP
  - protocolo A5 Plaspy
  - rastreo vehicular GOTOP A5
  - compatibilidad GPS Plaspy
  - rastreo en tiempo real GOTOP A5
---

# GOTOP - Protocolo A5

Esta página describe el contexto público del protocolo para usar el rastreador GPS GOTOP A5 Car Charger con Plaspy. Resuma cómo el dispositivo se comunica con los servidores de Plaspy en términos generales y señale las configuraciones y comportamientos de conexión relevantes para integrar este modelo en una flota o en un flujo de monitoreo.

Plaspy utiliza una configuración de conexión compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Todos los dispositivos en Plaspy usan el mismo puerto, y el A5 puede configurarse para reportar al endpoint de Plaspy usando UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar la configuración del dispositivo tras su despliegue.

## Descripción general del protocolo

El protocolo de comunicación del GOTOP A5 regula cómo el rastreador envía posición, estado y eventos a un servidor remoto y cómo se retransmiten comandos opcionales o funciones de monitoreo. En una implementación con Plaspy, el protocolo permite la entrega confiable de actualizaciones de seguimiento e identificadores del dispositivo para que los datos se asocien al registro correcto.

- Permite que el A5 entregue reportes de ubicación basados en GPS, LBS, WiFi y AGPS a Plaspy
- Transmite la identidad y el estado del dispositivo para que Plaspy pueda vincular los datos entrantes con el rastreador correcto
- Transporta actualizaciones periódicas de posición y notificaciones de eventos para seguimiento en tiempo real y registro histórico
- Soporta funciones adicionales reportadas por el dispositivo, como monitoreo de voz o estado de almacenamiento cuando están disponibles
- Opera sobre transportes de red estándar para que el dispositivo pueda reportar a través de redes de datos celulares hacia Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartido para todos los rastreadores compatibles e incluye identificación automática del protocolo para conexiones entrantes. Cuando un A5 está configurado para reportar a Plaspy, la plataforma compara la secuencia de datos entrante con tipos de rastreadores conocidos y mapea el identificador reportado a un registro de dispositivo.

- Plaspy acepta conexiones en su dominio público d.plaspy.com y en la IP del servidor 54.85.159.138
- El puerto común utilizado por todos los dispositivos en Plaspy es 8888, por lo que la configuración del dispositivo es consistente entre modelos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Por lo general no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está configurado para reportar correctamente
- Asegúrese de que el A5 esté configurado para enviar datos a la dirección y puerto del servidor Plaspy para permitir la detección automática

## Transporte y contexto de conexión

La configuración de la conexión es fundamental para una integración exitosa. El GOTOP A5 soporta reportes sobre datos celulares y puede configurarse para usar transporte UDP o TCP para alcanzar el endpoint de Plaspy en el puerto 8888. Los dispositivos pueden apuntar al nombre de dominio de Plaspy o a la IP pública del servidor según los requerimientos de red.

- El A5 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones del dispositivo
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto de escucha común para Plaspy es 8888 y todos los dispositivos en Plaspy usan ese mismo puerto
- Use el dominio d.plaspy.com siempre que sea posible para beneficiarse del enrutamiento y la resiliencia que aporta DNS
- Confirme la configuración de transporte y puerto en el A5 para que los datos lleguen a Plaspy de forma fiable

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de temporización de mensajes, las banderas de funciones y el conjunto de comandos soportados
- Variantes de hardware o revisiones regionales pueden alterar radios disponibles o subsistemas de posicionamiento como BDS o WiFi
- La configuración por defecto del fabricante podría apuntar el dispositivo a un servidor del proveedor, por lo que debe actualizar la dirección de reporte a Plaspy
- La elección entre UDP y TCP puede afectar las características de entrega y debe ajustarse a las capacidades del dispositivo y a las políticas de la red
- Verifique que el A5 esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar compatibilidad
- Pruebe un dispositivo de muestra antes de un despliegue masivo para confirmar el comportamiento con su firmware y red

## Por qué es importante entender el protocolo

Conocer cómo el A5 se comunica con Plaspy ayuda a garantizar un rastreo confiable, facilita la configuración y acelera la resolución de problemas cuando los dispositivos están en campo. Tener presente las opciones de transporte, las direcciones de servidor y la variación de firmware reduce la fricción en la integración y mejora el tiempo de actividad operativo.

- Confirma que la dirección del servidor y el puerto correctos estén configurados en el dispositivo para una entrega de datos exitosa
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados o selección incorrecta del transporte
- Aclara qué funciones del dispositivo estarán disponibles en Plaspy según el firmware y las configuraciones del fabricante
- Orienta las pruebas y los planes de despliegue ante actualizaciones de firmware y revisiones de hardware
- Mejora la coordinación con el soporte del proveedor cuando reporte comportamientos inesperados del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el GOTOP A5 con Plaspy ofrece un patrón de conexión simple y coherente para organizaciones que requieren visibilidad a nivel vehicular y supervisión operativa. El A5 combina la conveniencia plug and play con múltiples tecnologías de localización, y el endpoint compartido de Plaspy junto con la detección automática de protocolo reducen la complejidad de configuración durante la incorporación.

El puerto unificado de Plaspy y la detección automática de protocolo implican menos pasos manuales para que un A5 comience a reportar y sea visible en la plataforma. Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específicos del dispositivo, el comportamiento del firmware y las notas de implementación con el fabricante en https://www.gotop.cc/ ya que la documentación del proveedor y el firmware pueden cambiar con el tiempo.
