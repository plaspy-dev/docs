---
slug: /neomatica/adm100/protocol
id: adm100-protocol
sidebar_label: Protocol
title: Neomatica - ADM100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Neomatica ADM100 para conectar con Plaspy y obtener seguimiento de flotas confiable
keywords:
  - Neomatica ADM100
  - protocolo ADM100
  - rastreador GPS Neomatica
  - protocolo GPS ADM100
  - compatibilidad ADM100 Plaspy
  - protocolo seguimiento vehicular
  - protocolo GPRS
  - soporte rastreador EGTS
  - GPS gestión de flotas
  - comunicación dispositivo de rastreo
---

# Neomatica - Protocolo ADM100

Esta página describe el contexto público del protocolo para usar el rastreador Neomatica ADM100 con Plaspy. Se centra en los detalles de comunicación y conexión que importan al integrar el ADM100 en Plaspy para seguimiento en tiempo real, reporte de eventos y carga de historial de rutas, sin exponer detalles privados de implementación.

El ADM100 es un rastreador GNSS compacto con reporte por GPRS y soporte opcional de EGTS. Plaspy utiliza configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del equipo. El comportamiento exacto de paquetes y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por ello, esta guía debe entenderse como contexto general de integración y no como referencia de firmware.

## Visión general del protocolo

El protocolo de comunicación del ADM100 es el mecanismo por el cual se transmiten la posición, la telemetría y los eventos desde el dispositivo hacia un backend como Plaspy. En la práctica, el protocolo permite que el rastreador se identifique, reporte fijaciones GPS y envíe eventos de entradas/salidas y sensores para que los datos sean utilizables en los mapas, alertas e informes de Plaspy.

- Permite transmisiones periódicas y basadas en eventos de posición, velocidad y rumbo hacia el backend para seguimiento en vivo.
- Transporta datos de I/O y de sensores como entradas analógicas, contadores por pulso y eventos discretos para telemetría y alarmas.
- Soporta la carga de historial de rutas desde la memoria no volátil del dispositivo para que Plaspy muestre trazas históricas y complete lagunas.
- Puede usar modos de reporte estandarizados como EGTS o direccionamiento por nombre de dominio según lo soporte el dispositivo y el fabricante.
- Facilita la configuración remota y la actualización de firmware remota cuando el fabricante lo implementa sobre GPRS.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar datos de muchos modelos de rastreadores sin requerir selección manual de protocolo. Cuando un ADM100 está configurado para reportar a Plaspy, la plataforma identifica automáticamente el protocolo entrante y mapea los campos al modelo de datos de la plataforma para que la ubicación en vivo y los eventos se muestren correctamente.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la dirección IP del servidor Plaspy 54.85.159.138 en el puerto compartido 8888.
- Plaspy admite modos de reporte tanto UDP como TCP cuando el dispositivo y el firmware permiten cualquiera de los dos transportes en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el despliegue y la dirección del servidor en implementaciones masivas.
- Si el ADM100 está configurado para enviar datos al endpoint de Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy.
- La detección automática reduce la fricción de configuración, pero se requiere una configuración correcta del dispositivo (APN, dirección del servidor, transporte) para lograr la detección exitosa.

## Transporte y contexto de conexión

La selección del transporte y la dirección del servidor forman parte del contexto de conexión que determina cómo el ADM100 alcanza Plaspy. El dispositivo soporta reportes por GPRS y puede apuntarse por nombre de dominio o IP al endpoint de Plaspy. Elija el tipo de transporte que coincida con el firmware del dispositivo y sus requerimientos de red.

- El ADM100 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración.
- Apunte el dispositivo al dominio de Plaspy d.plaspy.com o directamente a 54.85.159.138 si la configuración del equipo lo requiere.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, por lo que se usa el mismo puerto entre tipos de equipos para mayor simplicidad.
- Asegúrese de que la APN y los ajustes de la SIM estén correctos en el ADM100 para que las sesiones GPRS se establezcan y los datos puedan entregarse al endpoint de Plaspy.
- Use el modo de transporte que su despliegue requiera, teniendo en cuenta que algunas revisiones de firmware prefieren un transporte sobre el otro por comportamiento de acuse de recibo y entrega.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los comandos soportados, los intervalos de reporte y las preferencias de transporte; verifique la versión de firmware del ADM100 antes de despliegues a gran escala.
- Las revisiones de hardware y las opciones de configuración (cableado de I/O, anexos RS‑485) pueden afectar qué campos de telemetría reporta el dispositivo.
- Las implementaciones del fabricante pueden soportar EGTS u otros modos de reporte estandarizados además de formatos específicos del proveedor; confirme qué modo está activo en sus unidades.
- La selección de transporte (UDP versus TCP) impacta las características de entrega y debe emparejarse con la configuración del dispositivo y las expectativas de Plaspy.
- Valide la dirección del servidor del dispositivo ya sea por nombre de dominio o por IP según cómo su flujo de trabajo de gestión de flota y los proveedores de SIM manejen el DNS.
- Siempre contraste las notas de compatibilidad con la documentación oficial de Neomatica y los registros de cambios de firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ADM100 ayuda a garantizar una configuración confiable, un mapeo de datos preciso en Plaspy y una resolución más rápida de problemas cuando los dispositivos no funcionan como se espera. Saber qué transporte y modo de reporte utiliza el equipo reduce las conjeturas durante el despliegue y facilita el monitoreo operativo consistente.

- Simplifica la configuración inicial para que los dispositivos reporten confiablemente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mejora la resolución de problemas al acotar los fallos a la APN, la selección de transporte o el comportamiento del firmware en lugar de a la configuración de Plaspy.
- Ayuda a garantizar que las entradas analógicas, los pulsos y las entradas RS‑485 se interpreten y mapeen correctamente a los campos de telemetría en Plaspy.
- Facilita la planificación de actualizaciones remotas de firmware y la recuperación del historial de rutas desde la memoria del dispositivo.
- Permite una escalabilidad predecible al usar el mismo puerto y endpoint de Plaspy para todos los dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el ADM100 con Plaspy ofrece una ruta práctica hacia visibilidad vehicular en tiempo real, reproducción de rutas y alertas basadas en telemetría. La sensibilidad GNSS del ADM100, su almacenamiento no volátil de rutas y su I/O flexible lo hacen adecuado para rastreo de flotas, monitoreo antirrobo y aplicaciones de telemetría donde el reporte continuo y el almacenamiento local son importantes.

La detección automática de protocolos y el modelo de endpoint unificado de Plaspy reducen la carga de configuración en despliegues que incluyen unidades ADM100. Para aprender más sobre Plaspy y cómo puede integrarse con dispositivos Neomatica visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente y específica del dispositivo en el sitio de Neomatica https://neomatica.com/ antes de un despliegue a gran escala.
