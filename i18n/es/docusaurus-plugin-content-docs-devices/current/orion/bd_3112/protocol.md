---
slug: /orion/bd_3112/protocol
id: bd_3112-protocol
sidebar_label: Protocol
title: Orion - BD-3112 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para integrar el rastreador GPS Orion BD-3112 con los servidores de Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo Orion BD-3112
  - Protocolo GPS Orion BD-3112
  - Compatibilidad BD-3112 Plaspy
  - Protocolo rastreador GPS Orion
  - Protocolo de comunicación BD-3112
  - Rastreador Orion Plaspy
  - Rastreo de vehículos BD-3112
  - Rastreo de flotas Orion BD-3112
  - Protocolo rastreador GPS Plaspy
  - Integración de rastreadores Plaspy
---

# Orion - Protocolo BD-3112

Esta página ofrece contexto público sobre el protocolo para integrar el rastreador GPS Orion BD-3112 con la plataforma Plaspy. Describe cómo suele comunicarse el dispositivo con Plaspy en términos generales, qué ajustes de conexión se usan comúnmente y por qué es importante comprender el protocolo para un funcionamiento confiable. La información está pensada para ayudar a administradores de flotas, integradores y usuarios técnicos a entender la relación de comunicación entre el BD-3112 y Plaspy sin revelar detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. Los dispositivos configurados para Plaspy normalmente apuntan a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888. El BD-3112 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la configuración del equipo, y el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de comunicación del BD-3112 regula cómo el dispositivo reporta ubicación, estado y alertas a un servidor remoto como Plaspy. A alto nivel, el protocolo establece la identidad del dispositivo, entrega informes periódicos y por evento, y soporta acuses de recibo o respuestas a comandos según lo permita el firmware. El objetivo es proporcionar telemetría y alertas útiles que Plaspy pueda interpretar para seguimiento, geocercas y monitoreo de SOS.

- Permite que el rastreador se identifique y registre sesiones con el servidor para asociar informes al activo correcto.
- Transporta datos de ubicación y estado desde el dispositivo al servidor para que Plaspy muestre posición en tiempo real e historial.
- Transmite eventos como cruces de geocercas y alertas de botón SOS para notificaciones inmediatas en la plataforma.
- Soporta diferentes capas de transporte e intervalos de reporte según la configuración y el firmware del equipo.
- Permite comandos remotos o cambios de configuración cuando el firmware del dispositivo admite flujos de respuesta a comandos.

## Cómo Plaspy detecta el protocolo

Plaspy acepta informes entrantes en un endpoint y puerto compartidos y usa detección automática para identificar el protocolo del dispositivo. Cuando un BD-3112 apunta al endpoint de Plaspy y comienza a reportar, Plaspy empata las comunicaciones entrantes con la vía de procesamiento adecuada sin que el usuario tenga que seleccionar manualmente un protocolo en la mayoría de las configuraciones.

- El endpoint estándar del servidor Plaspy para el reporte de dispositivos es d.plaspy.com y también es accesible en 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y ese mismo puerto se usa para todos los equipos soportados.
- Los dispositivos pueden reportar usando UDP o TCP en el puerto 8888 según su configuración y soporte de firmware.
- En implementaciones típicas, el usuario configura el rastreador para reportar al endpoint de Plaspy y Plaspy detecta automáticamente el protocolo y enruta los datos al perfil de dispositivo correcto.
- La selección manual de protocolo en Plaspy suele ser innecesaria cuando el rastreador está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El BD-3112 puede configurarse para conectar con Plaspy mediante las opciones de transporte comunes soportadas por su hardware y firmware. El contexto de conexión determina cómo el dispositivo establece una sesión y con qué fiabilidad se entregan los mensajes bajo distintas condiciones de red.

- El dispositivo puede configurarse para usar UDP o TCP según las opciones y capacidades del firmware.
- Plaspy acepta conexiones en el puerto 8888 y ese mismo puerto se utiliza en todos los dispositivos compatibles.
- La configuración típica apunta el rastreador al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- La elección del transporte puede afectar características de entrega como retransmisiones y latencia, pero no cambia que Plaspy use un puerto compartido.
- Las condiciones de la red y del operador, junto con parámetros del dispositivo como intervalos de reporte, influyen en la conectividad y la frescura de los datos.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar cómo el BD-3112 implementa intervalos de reporte, banderas de eventos y manejo de comandos; verifique el comportamiento según la versión de firmware en uso.
- Revisiones de hardware o módulos accesorios opcionales pueden cambiar las señales disponibles o las capacidades de reporte respecto al modelo base.
- Las interfaces de configuración del fabricante y los ajustes de APN o de reporte por defecto afectan cómo se apunta el dispositivo a los endpoints de Plaspy.
- La elección entre UDP y TCP es una decisión de configuración y debe coincidir con lo que el firmware soporta para un reporte estable.
- Confirme que el plan de datos de la SIM y la configuración del APN permiten conexiones salientes hacia el dominio o la IP del endpoint de Plaspy.
- Siempre valide la compatibilidad contra la documentación oficial de Orion al planear despliegues o actualizaciones de firmware.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el BD-3112 ayuda a asegurar una configuración exitosa, comportamiento predecible y una resolución de problemas más rápida en Plaspy. Aunque Plaspy detecta automáticamente protocolos compatibles, comprender el modelo de comunicación del dispositivo mejora la confiabilidad y la respuesta frente a incidencias operativas.

- Agiliza la configuración inicial al garantizar que el rastreador apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el transporte correcto.
- Facilita el diagnóstico de problemas de conectividad al acotar la investigación a red, APN, transporte o firmware.
- Mejora la configuración de geocercas y SOS al entender cómo el dispositivo marca y reporta eventos.
- Ayuda en la planificación de capacidad respecto a frecuencia de reportes y uso de datos al monitorear muchos equipos o tasas altas de reporte.
- Reduce tiempos de inactividad durante actualizaciones de firmware o cambios de hardware al anticipar diferencias en el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el Orion BD-3112 con Plaspy ofrece una forma simple de consolidar en una sola vista la ubicación en tiempo real, eventos de geocerca y alertas SOS para administración de flotas o activos. La detección automática de protocolos de Plaspy y el endpoint de servidor compartido simplifican la integración para que los dispositivos comiencen a reportar sin configuraciones complejas por dispositivo dentro de la plataforma.

Si desea más información sobre Plaspy y cómo maneja las conexiones de dispositivos y los flujos de trabajo de tracking visite https://www.plaspy.com. Para detalles de protocolo específicos de cada dispositivo, notas de firmware y guías de configuración consulte al fabricante en http://www.oriontech.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y la documentación del fabricante es la fuente autorizada.
