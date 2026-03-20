---
slug: /aoya/t128gps/protocol
id: t128gps-protocol
sidebar_label: Protocol
title: AoYa - T128GPS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador AoYa T128GPS y su comunicación con Plaspy para reportes GPS confiables e integración
keywords:
  - protocolo AoYa T128GPS
  - protocolo GPS AoYa T128GPS
  - compatibilidad AoYa T128GPS Plaspy
  - comunicación AoYa T128GPS
  - protocolo de rastreo AoYa T128GPS
  - protocolo rastreador GPS AoYa
  - integración T128GPS Plaspy
  - rastreo vehicular AoYa T128GPS
  - protocolo rastreador de activos T128GPS
  - protocolo rastreador Plaspy
---

# AoYa - Protocolo T128GPS

Esta página describe el contexto público del protocolo para integrar el rastreador AoYa T128GPS con Plaspy. Se centra en las consideraciones de comunicación y conexión que importan al enviar datos de ubicación, estado y alertas desde el dispositivo hacia Plaspy. El contenido está pensado para ayudar a administradores e integradores a entender cómo el dispositivo reporta a una plataforma de flotas sin exponer detalles internos de firmware ni implementaciones sensibles.

El AoYa T128GPS es un rastreador magnético compacto con antenas GPS y GSM integradas, seguimiento en tiempo real, geocercas, alertas SOS y batería recargable. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se debe validar el comportamiento del dispositivo frente a la documentación vigente del fabricante.

## Visión general del protocolo

A alto nivel, el protocolo de reporte define cómo el T128GPS comunica posición, estado de movimiento y eventos al servidor remoto para que una plataforma como Plaspy pueda mostrar y actuar sobre esa información. Esta sección explica el rol del protocolo en términos generales y cómo se relaciona con un reporte e integración confiables.

- Permite que el rastreador transmita fijaciones de ubicación, marcas de tiempo y telemetría básica para su visualización en Plaspy.
- Transmite identidad y estado del equipo para que Plaspy asigne correctamente los reportes al activo o usuario correspondiente.
- Entrega notificaciones de eventos como entrada/salida de geocerca y alertas SOS que pueden desencadenar acciones en la plataforma.
- Soporta modos de reporte periódicos y basados en eventos que equilibran la frecuencia de actualizaciones y la duración de la batería.
- Permite configurar parámetros (dirección del servidor, tipo de transporte, intervalos de reporte) en el dispositivo para dirigir los datos hacia Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante de rastreadores en un endpoint y puerto compartidos y selecciona automáticamente el manejo adecuado para los dispositivos soportados. Cuando un equipo se configura para reportar al endpoint de Plaspy, normalmente usted no necesita elegir manualmente un protocolo dentro de Plaspy salvo que esté implementando una integración personalizada.

- Plaspy escucha en un único puerto para todos los rastreadores soportados y utiliza detección automática para identificar el protocolo de reporte.
- Los dispositivos configurados correctamente y que envían datos al endpoint de Plaspy suelen ser reconocidos sin selección manual de protocolo.
- Los administradores deben asegurarse de que los ajustes de reporte del dispositivo coincidan con los parámetros de conexión de Plaspy para que la detección automática funcione.
- Para configuraciones de dispositivo inusuales o personalizadas, revise la documentación del equipo y las guías de configuración de Plaspy para confirmar el comportamiento correcto.
- Si un dispositivo no aparece registrado, verifique el enrutamiento de red y que el rastreador esté apuntando al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el dispositivo envía datos a Plaspy y hacia dónde se dirigen esos datos. El T128GPS puede configurarse para usar distintos tipos de transporte según la capacidad del dispositivo y las opciones elegidas.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita y configure el dispositivo.
- Plaspy acepta conexiones y reportes en el dominio d.plaspy.com y también puede alcanzarse en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y del dispositivo entre distintos modelos de rastreadores.
- Seleccione el transporte (UDP o TCP) en el rastreador de acuerdo con el manual del equipo y las necesidades operativas como latencia y fiabilidad.
- Confirme que las redes de los operadores móviles y cualquier firewall intermedio permitan tráfico saliente hacia el endpoint de Plaspy usando el transporte configurado.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden cambiar el comportamiento del dispositivo; confirme la versión de firmware del rastreador al validar compatibilidad.
- Revisiones de hardware o modelos variantes del fabricante pueden introducir diferencias en el protocolo o en las funciones disponibles.
- Los ajustes predeterminados del fabricante pueden apuntar a otro servidor; actualice el destino de reporte del dispositivo a d.plaspy.com o 54.85.159.138 según sea necesario.
- La selección de transporte entre UDP y TCP afecta las características de entrega; siga el manual del equipo para los modos soportados.
- Valide el comportamiento de geocercas, SOS e intervalos de reporte en un dispositivo de prueba antes de desplegar a gran escala.
- En caso de duda, consulte la documentación del fabricante para resolver ambigüedades sobre comandos soportados y métodos de configuración.

## Por qué es importante entender el protocolo

Conocer el protocolo del dispositivo ayuda a asegurar una integración fluida con Plaspy, reduce el tiempo de configuración y mejora la confiabilidad a largo plazo de los reportes y alertas. Tener claridad sobre cómo se comunica el rastreador facilita la resolución de problemas y optimiza los reportes en términos de batería y uso de red.

- Acelera la configuración inicial al alinear los parámetros de reporte del dispositivo con los de conexión de Plaspy.
- Reduce alertas falsas y actualizaciones perdidas al asegurar que los modos de evento y reporte estén configurados correctamente.
- Mejora la resolución de problemas al acotar si los problemas provienen de la red, del transporte o de la configuración del equipo.
- Ayuda a optimizar el equilibrio entre frecuencia de actualización y consumo de batería para casos de uso reales.
- Permite pruebas y validaciones seguras antes de un despliegue masivo.

## Por qué usar Plaspy con este protocolo

Usar el AoYa T128GPS con Plaspy ofrece una forma directa de recolectar datos de ubicación y eventos para rastreo vehicular, de activos o personal. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de configuración, permitiendo que las organizaciones se concentren en los flujos operativos en lugar de los detalles de integración de bajo nivel. El diseño magnético y la forma compacta del rastreador facilitan su colocación donde resulte más útil para la monitorización.

Si desea obtener más información sobre cómo Plaspy gestiona las integraciones de dispositivos y el conjunto de funciones disponibles para la visibilidad de flotas, visite https://www.plaspy.com. Para los detalles específicos más recientes del protocolo del dispositivo, notas de firmware e instrucciones de configuración del AoYa T128GPS, verifique la información actual en el sitio del fabricante http://www.aoyagps.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar los recursos del fabricante le garantiza que tenga la guía más precisa.
