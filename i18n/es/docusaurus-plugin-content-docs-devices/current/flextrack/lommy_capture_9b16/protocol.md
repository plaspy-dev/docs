---
slug: /flextrack/lommy_capture_9b16/protocol
id: lommy_capture_9b16-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Capture 9B16 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Flextrack Lommy Capture 9B16 y su comunicación con Plaspy para rastreo fiable de remolques y activos remolcados
keywords:
  - Protocolo Flextrack Lommy Capture 9B16
  - Protocolo GPS Flextrack Lommy Capture
  - Compatibilidad Lommy Capture 9B16 con Plaspy
  - Protocolo de comunicación Lommy Capture
  - Protocolo de rastreo Flextrack
  - Compatibilidad de dispositivos con Plaspy
  - Protocolo de rastreo para remolques
  - Protocolo para rastreadores sin bateria
  - Protocolo para rastreo de equipos remolcados
  - Protocolo para rastreadores GNSS
---

# Flextrack - Protocolo Lommy Capture 9B16

Esta página documenta el contexto público del protocolo para usar el Flextrack Lommy Capture 9B16 con Plaspy. Se enfoca en cómo el dispositivo comunica posiciones GNSS, eventos de movimiento y telemetría a Plaspy para la supervisión en tiempo real de remolques, caravanas y otros activos remolcados, teniendo en cuenta el comportamiento definido por el fabricante y las diferencias de firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general sobre el papel de la comunicación e prácticas de integración, más que detalles internos específicos de firmware.

## Resumen del protocolo

El protocolo de reporte del Lommy Capture 9B16 regula cómo el rastreador se identifica y transmite posiciones GNSS, eventos de movimiento y telemetría acumulada a un endpoint en la nube consumido por Plaspy. Esa ruta de reporte permite a Plaspy transformar mensajes crudos del dispositivo en registros de ubicación y actividad útiles para monitoreo, alertas y análisis histórico.

- Permite que el dispositivo reporte fijaciones GNSS y eventos desencadenados por movimiento a un servidor remoto para visibilidad en tiempo real.
- Transporta campos de identificación y estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correcto.
- Soporta comportamiento de reporte adaptativo para que la frecuencia de transmisión refleje la energía disponible, el estado de movimiento y la conectividad.
- Permite el almacenamiento local de posiciones y eventos cuando la conectividad celular no está disponible, de modo que los reportes se envían cuando el dispositivo recobra acceso a la red.
- Entrega telemetría por canales de transporte comunes para que Plaspy pueda ingerir actualizaciones y generar alarmas o análisis sin requerir integraciones específicas en el dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los rastreadores en un único endpoint y puerto compartido y aplica detección automática de protocolo para encaminar los mensajes entrantes al flujo de parseo y manejo correcto. En la mayoría de los casos un dispositivo Lommy Capture configurado correctamente para reportar a Plaspy no requerirá selección manual de protocolo dentro de la plataforma.

- El dominio público del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com que los dispositivos pueden apuntar cuando se configuran.
- La IP pública de Plaspy es 54.85.159.138, que es una dirección alternativa que los dispositivos pueden usar.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y este mismo puerto se usa para todos los dispositivos soportados por Plaspy.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP para alcanzar el endpoint de Plaspy dependiendo de la configuración del equipo y el comportamiento del operador móvil.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta y comienza a reportar, por lo que la selección manual de protocolo normalmente no es necesaria para un dispositivo correctamente configurado.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el Lommy Capture 9B16 entrega telemetría a Plaspy y qué opciones de configuración suelen estar disponibles. El dispositivo soporta enlace celular y cuenta con mecanismos de respaldo y almacenamiento diseñados para despliegues en activos remolcados donde la alimentación constante no está garantizada.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy, según el firmware del dispositivo y las condiciones de la red.
- Los dispositivos pueden apuntar al dominio de reporte d.plaspy.com o a la IP del servidor 54.85.159.138 como destino.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica el aprovisionamiento y las reglas de firewall.
- SMS u otros canales de respaldo celular pueden ser usados por el dispositivo para alertas básicas o cuando el servicio de datos por paquetes no está disponible, mientras que la telemetría primaria típicamente se entrega por datos celulares.
- El almacenamiento local en flash del dispositivo retiene los reportes de posición cuando la conectividad se pierde temporalmente y reenvía los reportes almacenados una vez que se restablece la conexión.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, los intervalos de reporte y el comportamiento del transporte; confirme la revisión de firmware en los dispositivos instalados al validar compatibilidad.
- Las revisiones de hardware o variantes de fabricación pueden afectar el comportamiento de aprovechamiento de energía, la sensibilidad de los sensores o las opciones de configuración disponibles.
- Algunos despliegues pueden preferir UDP por su menor sobrecarga, mientras que otros usan TCP para confirmación de entrega según las exigencias del operador e infraestructura.
- El reporte por SMS es un canal separado y puede tener formatos de datos y límites diferentes respecto al reporte por datos de paquetes.
- Valide la integración en un entorno de pruebas antes de un despliegue amplio para confirmar que Plaspy reconoce automáticamente los mensajes del dispositivo y que las alarmas y el historial de posiciones se comportan según lo esperado.
- Consulte siempre la guía de instalación y cableado del fabricante para montaje en luminarias y conexiones eléctricas del vehículo para asegurar un aprovechamiento de energía fiable e integridad de la señal.

## Por qué es importante entender el protocolo

Tener un conocimiento claro y práctico del protocolo de reporte del rastreador ayuda a instaladores, integradores y gestores de flotas a garantizar una configuración fiable, reducir el tiempo de resolución de problemas y mantener visibilidad a largo plazo de activos remolcados en Plaspy.

- Acelera el aprovisionamiento inicial al confirmar los ajustes de transporte y los valores del endpoint objetivo antes del despliegue.
- Facilita el diagnóstico de problemas de conectividad verificando si los mensajes llegan a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y si se usa UDP o TCP.
- Aclara cómo el reporte adaptativo ligado a circuitos de iluminación y sensores de movimiento afecta la cadencia de actualización esperada y la operación sin batería.
- Orienta las expectativas sobre el comportamiento de los datos almacenados cuando el dispositivo experimenta pérdida temporal de señal.
- Permite una mejor coordinación entre las actualizaciones de firmware del dispositivo y el comportamiento de ingestión de Plaspy durante las implementaciones.

## Por qué usar Plaspy con este protocolo

Usar el Lommy Capture 9B16 con Plaspy ofrece una forma práctica de añadir rastreo discreto y de bajo mantenimiento a remolques y otros equipos remolcados. La combinación de aprovechamiento de energía, reporte optimizado por movimiento y GNSS multiconstelación brinda a los equipos de flota visibilidad de posición confiable, minimizando la necesidad de mantenimiento físico.

Plaspy centraliza los reportes entrantes y convierte automáticamente los mensajes del dispositivo en flujos de trabajo de ubicación, actividad y alertas adecuados para supervisión operativa y casos de uso antirrobo. Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos como esta, visite https://www.plaspy.com. Para la documentación más actualizada específica del dispositivo, notas de firmware y guía de instalación, verifique los detalles con el fabricante en https://flextrack.dk ya que la implementación y el comportamiento del firmware pueden cambiar con el tiempo.
