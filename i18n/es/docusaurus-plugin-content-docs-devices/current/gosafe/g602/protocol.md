---
slug: /gosafe/g602/protocol
id: g602-protocol
sidebar_label: Protocol
title: Gosafe - G602 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del Gosafe G602 y cómo se comunica con Plaspy para un rastreo de flotas confiable
keywords:
  - Protocolo Gosafe G602
  - Protocolo GPS Gosafe G602
  - Comunicación Gosafe G602
  - Protocolo de rastreo Gosafe G602
  - Compatibilidad Gosafe G602 Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreo de vehículos
  - Protocolo telemático de flotas
  - Comunicación de rastreador GPS
  - Integración de telemetría Plaspy
---

# Gosafe - Protocolo G602

Esta página describe el contexto público del protocolo para usar el rastreador Gosafe G602 con la plataforma Plaspy. Resume cómo el dispositivo normalmente reporta ubicación, eventos y datos de sensores para que integradores y equipos técnicos comprendan el rol de la comunicación sin exponer detalles privados de implementación. Utilice esto como referencia práctica para la planificación de integraciones y la resolución de problemas con Plaspy.

El G602 es compatible con Plaspy desde su configuración inicial y soporta transportes comunes como TCP, UDP y SMS. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; consulte la documentación oficial de Gosafe para detalles específicos de firmware más recientes.

## Resumen del protocolo

El protocolo de comunicación del G602 permite que el rastreador se identifique ante un backend, reporte posición y telemetría, y entregue actualizaciones de eventos o sensores que Plaspy puede ingerir. El contexto público que sigue se centra en el rol de esa comunicación más que en diseños de paquetes propietarios o detalles internos de parseo.

- Permite la identificación y el establecimiento de sesión para que los mensajes entrantes se asignen al registro de vehículo correcto en Plaspy.
- Transporta actualizaciones de posición, indicadores de calidad GNSS y telemetría como detecciones de choque y lecturas de sensores BLE al backend.
- Señala tipos de eventos que Plaspy usa para alertas y análisis, por ejemplo cambios de ignición virtual o detecciones de choque.
- Soporta múltiples transportes para que los dispositivos funcionen de manera confiable en distintas condiciones de cobertura y configuraciones de reporte.
- Facilita señales de gestión remota como disparadores de actualización de firmware y confirmaciones de configuración cuando el dispositivo lo soporta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los datos del rastreador en un endpoint compartido y utiliza las características de la conexión entrante para determinar el manejo correcto del dispositivo. Dado que Plaspy detecta automáticamente el protocolo del rastreador, la mayoría de las implementaciones no requieren la selección manual del protocolo dentro de la plataforma cuando el dispositivo está configurado para reportar a Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- El puerto de reporte utilizado por dispositivos y Plaspy es 8888 y el dispositivo puede configurarse usando UDP o TCP en ese puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos correctamente configurados por lo general no requieren selección de protocolo en la plataforma.
- Si un dispositivo soporta reporte por SMS, este puede ser un transporte alternativo para ubicaciones o alertas cuando la conectividad IP no esté disponible.

## Contexto de transporte y conexión

La configuración de conexión y las opciones de transporte forman parte del contexto público de integración. El G602 soporta reportes por TCP y UDP y puede apuntarse a Plaspy usando el dominio compartido o la IP del servidor. Conocer las opciones básicas de conexión ayuda con la configuración de firewalls y las listas de verificación en instalaciones.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte que soporte el equipo y que sea apropiado para su red.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, lo que reduce las diferencias de configuración por dispositivo.
- El tracker soporta SMS como canal alternativo de reporte, pero no reemplaza a TCP o UDP durante el reporte normal por IP.
- Asegúrese de que las reglas de red permitan tráfico saliente desde el dispositivo hacia el endpoint de Plaspy y respuestas entrantes cuando el transporte seleccionado lo requiera.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el conjunto de campos que envía un dispositivo y la cadencia de los reportes; verifique la versión de firmware en las unidades desplegadas.
- Revisiones de hardware o variantes regionales pueden alterar bandas soportadas o valores por defecto de transporte incluso cuando el modelo es el mismo.
- La elección entre TCP y UDP afecta las garantías de entrega y puede ser preferible para acuses de recibo o para sortear restricciones de firewall según las condiciones de la red.
- El reporte de sensores BLE y las capacidades FOTA pueden depender del firmware del dispositivo y de las opciones de configuración habilitadas.
- Valide siempre el comportamiento de reporte del dispositivo con una unidad de prueba antes de un despliegue masivo para confirmar que Plaspy recibe la telemetría esperada.
- La documentación del fabricante es la fuente autorizada para características específicas del dispositivo y notas de versiones de firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el G602 con Plaspy mejora el éxito del despliegue, reduce el tiempo de resolución de problemas y asegura datos precisos en paneles y alertas. Incluso con la detección automática de protocolo en Plaspy, usted como administrador se beneficia de conocer el contexto de transporte y configuración.

- Acelera la instalación al orientar la configuración correcta del endpoint, transporte y puerto en el dispositivo.
- Facilita la resolución de problemas cuando las actualizaciones de posición o los eventos no llegan como se espera, al acotar causas de red y firmware.
- Ayuda a definir reglas de firewall y de red para que los dispositivos puedan conectarse de manera confiable al endpoint de Plaspy.
- Informa la elección del transporte que mejor se ajuste a sus necesidades operativas en términos de confiabilidad y latencia.
- Apoya la planificación de actualizaciones de firmware y habilitación de funciones que pueden modificar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el G602 con Plaspy ofrece a las organizaciones una vía práctica para capturar ubicaciones de alta calidad, telemetría de choques y datos de sensores con una instalación sencilla. El G602 entrega el tipo de reportes que Plaspy consume para monitoreo en tiempo real, alertas y análisis histórico, mientras que Plaspy se encarga de la detección del protocolo y el mapeo a registros de vehículo.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el Gosafe G602, visite https://www.plaspy.com. Para las notas de firmware más recientes, guías de configuración del dispositivo y detalles del fabricante, verifique la información en el sitio oficial de Gosafe https://gosafesystem.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
