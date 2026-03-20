---
slug: /topshine/mt02/protocol
id: mt02-protocol
sidebar_label: Protocol
title: TopShine - MT02 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del TopShine MT02 y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - protocolo TopShine MT02
  - protocolo GPS TopShine MT02
  - protocolo MT02 Plaspy
  - protocolo de comunicación TopShine MT02
  - protocolo de rastreo MT02
  - compatibilidad TopShine MT02
  - protocolo de rastreador TopShine
  - protocolo gestión de flotas MT02
  - protocolo de dispositivo Plaspy
  - rastreo de vehículo MT02
---

# TopShine - MT02 Protocolo

Esta página ofrece contexto público sobre el protocolo usado por el TopShine MT02 con Plaspy. Describe cómo el dispositivo suele comunicarse con la plataforma Plaspy, el papel del protocolo de reporte para entregar posición y telemetría, y los ajustes de conexión habituales en despliegues comunes. La descripción refleja el conjunto de funciones del MT02, como conectividad 4G LTE, posicionamiento GPS y A-GPS, registro a bordo, soporte para sensores de combustible y capacidades de inmovilización remota cuando se integra con Plaspy.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo comienza a reportar en la plataforma. El MT02 puede configurarse para reportar por TCP o UDP al endpoint de Plaspy y el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles de protocolo específicos del dispositivo y notas de firmware, revise la documentación del fabricante además de este resumen.

## Resumen del protocolo

El protocolo de reporte MT02 es el mecanismo que el rastreador utiliza para enviar telemetría y eventos a Plaspy y para recibir comandos remotos permitidos. Este protocolo permite a Plaspy asociar mensajes entrantes con los dispositivos correctos, mostrar ubicación y telemetría en tiempo real y guardar el historial para reportes y alertas. A continuación se destacan las funciones prácticas del protocolo.

- Permite al MT02 transmitir posición GPS, estado y telemetría de sensores a Plaspy para visualización e informes.
- Transporta notificaciones de eventos como SOS, violaciones de geocerca, alertas de manipulación, exceso de velocidad y cambios en el nivel de combustible para su gestión inmediata en Plaspy.
- Soporta la carga de registros almacenados tras la restauración de la red, de modo que los datos históricos en la memoria a bordo se preservan y sincronizan con la plataforma.
- Proporciona un canal para acciones remotas permitidas, como comandos de inmovilización por relé y actualizaciones de configuración emitidas desde Plaspy.
- Funciona junto con métodos de reporte alternativos que el MT02 pueda soportar, como SMS, reportes desde la app móvil y opciones basadas en web según la configuración del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes entrantes en un endpoint y puerto compartidos y aplica detección automática de protocolo para asociar los mensajes con el tipo de dispositivo correcto. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el MT02 está configurado para reportar al endpoint del servidor Plaspy. Esto simplifica la configuración en despliegues con dispositivos mixtos.

- Los servidores de Plaspy son accesibles mediante el dominio d.plaspy.com y la IP pública 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, que es 8888, lo que facilita las reglas de firewall y NAT.
- El MT02 puede configurarse para usar transporte UDP o TCP para reportar al endpoint de Plaspy en el puerto 8888 según la configuración del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta con éxito al endpoint de la plataforma, reduciendo pasos de selección manual.
- Si un dispositivo no aparece, confirme que esté apuntando a d.plaspy.com o a 54.85.159.138 y usando el puerto 8888 para que la plataforma pueda recibir e identificar sus mensajes.

## Transporte y configuración de conexión

Comprender el transporte y los ajustes de conexión ayuda a asegurar que el MT02 alcance a Plaspy de forma fiable desde el vehículo. El MT02 soporta múltiples canales de reporte y puede configurarse en TCP o UDP para telemetría en tiempo real, con opciones de SMS o app móvil disponibles para control o configuración alterna.

- El MT02 puede reportar a Plaspy por TCP o UDP en el puerto 8888 según la configuración y las condiciones de la red.
- Los dispositivos pueden estar configurados para enviar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 si se prefiere por enrutamiento de red.
- Usar el puerto compartido 8888 para todos los dispositivos simplifica las reglas de firewall y la configuración de gateways en flotas grandes.
- Cuando la cobertura celular es intermitente, el MT02 almacena registros localmente y sube los datos guardados a Plaspy una vez que se restablece la conectividad.
- Vías de reporte alternativas, como SMS, cargas desde la app móvil o reportes web, están disponibles en el MT02 y pueden complementar el reporte por TCP o UDP para control y configuración.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes o añadir campos, por lo que la revisión del firmware es relevante para el comportamiento exacto del protocolo y el soporte de funciones.
- Las referencias de hardware y las variantes regionales pueden afectar las bandas celulares soportadas y características opcionales como integraciones específicas de sensores.
- La selección de transporte entre TCP y UDP modifica las garantías de entrega y puede requerir un manejo de red diferente según su entorno.
- Las herramientas de configuración del fabricante, como comandos SMS, configuración por USB o ajustes OTA, determinan cómo se apunta el MT02 a Plaspy y qué transporte se utiliza.
- Plaspy detecta el protocolo automáticamente, pero el dispositivo debe estar correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para un onboarding exitoso.
- Valide la compatibilidad y cualquier comando o comportamiento específico del firmware contra la documentación oficial de TopShine antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del MT02 ayuda en la configuración inicial, en la resolución continua de problemas y a lograr una operación confiable a largo plazo con Plaspy. Conocer el papel del transporte, la configuración del endpoint y las diferencias de firmware reduce el tiempo de despliegue y mejora la estabilidad operativa.

- Asegura que los dispositivos estén apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir e identificar los reportes.
- Ayuda a solucionar problemas de conectividad confirmando la selección entre TCP o UDP y las reglas de red pertinentes.
- Aclara el comportamiento del registro a bordo durante cortes y cómo los registros almacenados se suben a Plaspy tras la reconexión.
- Orienta decisiones sobre actualizaciones de firmware y activación de funciones que pueden modificar el comportamiento del protocolo o la telemetría disponible.
- Apoya la correcta configuración de sensores y funciones de control remoto para que eventos y comandos sean procesados con precisión por Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TopShine MT02 con Plaspy brinda a las organizaciones visibilidad consolidada de sus vehículos, alertas configurables y controles operativos como inmovilización remota y monitoreo de combustible. Plaspy ingiere la telemetría del MT02 y la presenta mediante mapas, alertas e informes para ayudar a los operadores de flota a gestionar rutas, eventos de seguridad y consumo de combustible de manera más eficiente.

To learn more about Plaspy and how it integrates with devices like the TopShine MT02 visit https://www.plaspy.com. For the most current protocol descriptions, firmware notes, and device specific implementation details verify information with the manufacturer at https://www.gztopshine.com/. Protocol support and firmware behavior can change over time so checking the manufacturer documentation ensures you have the latest device specific guidance.
