---
slug: /fortuna_impex/disha_9320/protocol
id: disha_9320-protocol
sidebar_label: Protocol
title: Fortuna Impex - Disha 9320 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el Disha 9320 de Fortuna Impex con Plaspy con guía de conexión y notas de compatibilidad
keywords:
  - Protocolo Fortuna Impex Disha 9320
  - Protocolo GPS Disha 9320
  - Disha 9320 Plaspy
  - Protocolo rastreador Fortuna
  - Protocolo de rastreo vehicular
  - Comunicación rastreador Plaspy
  - Compatibilidad rastreador GPRS
  - Rastreo de flotas Disha 9320
  - Compatibilidad Disha 9320
  - Guía de protocolo de rastreador
---

# Fortuna Impex - Disha 9320 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Fortuna Impex Disha 9320 con Plaspy. Explica, a alto nivel, cómo el equipo se comunica con Plaspy, qué ajustes de conexión son los más comunes y qué aspectos debe considerar al integrar el dispositivo sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda verificar el dispositivo con la documentación del fabricante.

## Resumen del protocolo

El Disha 9320 emplea un enfoque estándar de reporte para enviar información de ubicación, estado y eventos a través de la conexión de datos móviles hacia un servidor remoto. El protocolo de comunicación define cómo el rastreador se identifica, cómo se empaqueta la telemetría para su entrega y cómo intercambian mensajes de control o reconocimientos el servidor y el dispositivo cuando están soportados.

- Permite que el rastreador envíe coordenadas GPS, hora y estado básico a Plaspy para seguimiento en tiempo real e histórico.
- Transmite alertas y notificaciones de eventos que el equipo genera por condiciones como movimiento, geocercas o cambios en entradas.
- Incluye un paso de identificación para que Plaspy pueda asociar los datos entrantes con el vehículo o registro de dispositivo correcto.
- Soporta tanto reportes en vivo como actualizaciones periódicas históricas según la configuración y el firmware.
- Actúa como puente entre el hardware del dispositivo y Plaspy para normalizar y mostrar los datos en la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría en un endpoint compartido y usa ese flujo de datos entrante para determinar el manejo apropiado para cada dispositivo. Cuando un Disha 9320 está configurado para reportar a Plaspy, la plataforma reconocerá automáticamente el protocolo del equipo según los patrones de conexión y mensajes entrantes, de manera que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un puerto común para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para el reporte.
- Si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy, el usuario por lo general no necesita elegir un protocolo en la interfaz de Plaspy.
- La detección automática reduce pasos de configuración y simplifica la incorporación de flotas mixtas con diferentes modelos de rastreadores.
- Los usuarios deben confirmar que el dispositivo envía un identificador consistente para que Plaspy pueda mapear los datos al activo correcto.

## Transporte y contexto de conexión

El Disha 9320 puede enviar datos a través de la red móvil empleando opciones de transporte IP estándar. Dependiendo de la configuración del equipo y de las capacidades del firmware, el rastreador puede usar UDP o TCP para entregar mensajes al endpoint y puerto de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Plaspy acepta conexiones en el puerto 8888 y usa ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden apuntar al servidor Plaspy por nombre de dominio d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- Las condiciones de red, la configuración del APN y las restricciones del operador pueden afectar la fiabilidad del transporte y deben validarse durante la instalación.
- Use las herramientas de configuración proporcionadas por Fortuna Impex para establecer la dirección del servidor y el modo de transporte.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, los campos soportados o la forma en que se reportan los identificadores; siempre verifique la versión de firmware del dispositivo al resolver problemas.
- Las revisiones de hardware o las variantes regionales pueden introducir diferencias en las entradas, salidas o capacidades de reporte disponibles.
- La selección del transporte (UDP vs TCP) puede afectar las garantías de entrega y debe coincidir con la configuración del dispositivo y el manejo esperado por el servidor.
- Las configuraciones predeterminadas del fabricante pueden apuntar a un portal de otro proveedor; asegúrese de reconfigurar el dispositivo para que reporte a Plaspy.
- La detección automática de Plaspy maneja muchas variaciones, pero se recomienda validar un dispositivo de extremo a extremo antes de un despliegue masivo.
- Para cualquier comando avanzado o funciones de configuración, consulte la documentación de Fortuna Impex para confirmar el soporte según su firmware.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación usado por el Disha 9320 ayuda a garantizar reportes confiables, agilizar la resolución de problemas y predecir el comportamiento a largo plazo cuando el equipo se usa con Plaspy. Incluso cuando Plaspy realiza la detección y el parseo de forma automática, familiarizarse con los patrones de conexión y reporte facilita a los instaladores y administradores de flota resolver incidencias de forma más eficiente.

- Ayuda a verificar que los dispositivos estén apuntando al endpoint correcto de Plaspy y usando el transporte previsto.
- Acelera el diagnóstico cuando los mensajes no aparecen en Plaspy o cuando la telemetría parece incompleta.
- Permite tomar decisiones informadas sobre intervalos de reporte, umbrales de eventos y gestión de energía.
- Facilita la planificación de la escala al desplegar muchas unidades en distintas regiones u operadores.
- Reduce el tiempo de inactividad al identificar si un problema es de red, configuración del dispositivo o del firmware.

## Por qué usar Plaspy con este protocolo

Usar el Fortuna Impex Disha 9320 con Plaspy brinda a las organizaciones visibilidad consolidada de la ubicación de vehículos, eventos y movimientos históricos mediante una plataforma que acepta patrones de reporte comunes de rastreadores. El endpoint compartido de conexión de Plaspy y la detección automática de protocolos simplifican la incorporación y reducen la carga de configuración para flotas mixtas.

Para obtener más información sobre cómo Plaspy funciona con dispositivos como el Disha 9320, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del equipo pueden cambiar con el tiempo, por lo que confirme la información específica más reciente en el sitio del fabricante http://fortunaindia.com/ antes de un despliegue a gran escala.
