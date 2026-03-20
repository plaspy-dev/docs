---
slug: /thingsys/ts_vb20/protocol
id: ts_vb20-protocol
sidebar_label: Protocol
title: ThingSys - TS-VB20 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ThingSys TS-VB20 y su comunicación con Plaspy para telemetría y diagnóstico vehicular
keywords:
  - protocolo ThingSys TS-VB20
  - protocolo GPS ThingSys TS-VB20
  - compatibilidad TS-VB20 Plaspy
  - protocolo rastreador OBDII TS-VB20
  - protocolo rastreador GPS ThingSys
  - protocolo de comunicación TS-VB20
  - protocolo rastreo vehicular Plaspy
  - gestión de flotas TS-VB20
  - protocolo telemetría OBDII
  - rastreadores compatibles Plaspy
---

# ThingSys - Protocolo TS-VB20

Esta página ofrece una visión pública y no sensible del contexto de comunicación del ThingSys TS-VB20 cuando se utiliza con Plaspy. Se enfoca en cómo el rastreador OBDII TS-VB20 transmite la ubicación del vehículo y la telemetría del ECU a Plaspy, cuál es el papel del protocolo en ese flujo y qué verificar al conectar los dispositivos al endpoint de Plaspy. La descripción del dispositivo aquí considerada corresponde al diseño del TS-VB20 como rastreador plug and play OBDII con posicionamiento GPS, AGPS y LBS, diagnóstico de ECU y conectividad GPRS.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El TS-VB20 puede configurarse para reportar al endpoint de Plaspy, pero el comportamiento exacto del protocolo y la frecuencia de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página explica el contexto público del protocolo para una integración confiable, y recomienda verificar los detalles específicos del dispositivo con la documentación de ThingSys.

## Resumen del protocolo

El protocolo de comunicación del TS-VB20 regula cómo el rastreador envía telemetría de posición, diagnósticos derivados del ECU e información de estado a un servidor remoto como Plaspy. A alto nivel, el protocolo define cómo el dispositivo se identifica, cómo se transmiten las actualizaciones rutinarias de ubicación y los informes de diagnóstico, y cómo se presentan ciertas señales de evento para que Plaspy pueda interpretarlas y mostrarlas.

- Permite actualizaciones regulares de ubicación usando GPS, AGPS y LBS para que Plaspy pueda mapear la posición del vehículo.
- Transporta campos de telemetría y diagnóstico derivados del ECU para que Plaspy muestre métricas básicas de salud del vehículo y consumo de combustible.
- Envía indicadores de eventos como encendido, manipulación y eventos de conducción que disparan alertas y registros en Plaspy.
- Proporciona identidad del dispositivo e información de sesión para que Plaspy asocie los datos entrantes con el activo correcto.
- Utiliza una capa de transporte para entregar la telemetría a Plaspy de forma confiable sobre redes móviles de datos.

## Cómo detecta Plaspy el protocolo

Plaspy reconoce automáticamente los protocolos de rastreadores compatibles cuando los dispositivos están configurados para reportar al endpoint compartido de Plaspy. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo apunta al servidor y puerto correctos y es compatible con la plataforma.

- Plaspy expone un endpoint común en d.plaspy.com al que se pueden configurar los dispositivos.
- El servidor de Plaspy también es accesible por IP en 54.85.159.138 para entornos que requieren direccionamiento directo.
- Plaspy escucha en un único puerto para todos los dispositivos y protocolos, lo que simplifica la configuración y el aprovisionamiento.
- Cuando un rastreador compatible como el TS-VB20 reporta al endpoint de Plaspy, la plataforma detecta el protocolo automáticamente.
- La configuración correcta del dispositivo para reportar al endpoint de Plaspy suele ser el único paso necesario para que Plaspy ingiera la telemetría del dispositivo.

## Contexto de transporte y conexión

Las opciones de transporte y conexión determinan cómo el TS-VB20 envía los mensajes del protocolo a Plaspy. El TS-VB20 soporta comunicación móvil GPRS y puede configurarse para usar distintos modos de transporte según el firmware del dispositivo y las condiciones de la red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo.
- Para la integración con Plaspy, el dispositivo puede apuntar al dominio d.plaspy.com o al servidor IP 54.85.159.138.
- Plaspy emplea el mismo puerto 8888 para todos los dispositivos soportados, lo que reduce la complejidad de configuración en toda la flota.
- La estabilidad de la conexión y la disponibilidad de la red móvil influyen en la frecuencia de entrega de la telemetría y en cómo Plaspy recibe las actualizaciones.
- Asegúrese de que el APN y la configuración celular del rastreador estén correctamente establecidos para que el TS-VB20 pueda alcanzar el endpoint de Plaspy sobre GPRS.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware entre unidades TS-VB20 pueden modificar la frecuencia de mensajes, los campos de diagnóstico disponibles y las opciones de transporte soportadas.
- Diferentes revisiones de hardware o compilaciones de firmware pueden exponer conjuntos de parámetros OBDII y lógicas de eventos de conducción ligeramente distintas.
- Restricciones de red, como la disponibilidad de 2G GPRS o limitaciones del operador, pueden afectar la confiabilidad y la latencia del reporte.
- La selección de UDP o TCP en el dispositivo puede cambiar las características de entrega, aunque ambas opciones de transporte son compatibles para reportar a Plaspy en el puerto 8888.
- Valide que el dispositivo esté configurado para apuntar a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 para asegurar una ingestión correcta por parte de Plaspy.
- Verifique siempre los detalles de compatibilidad contra la documentación de ThingSys para notas específicas del firmware del dispositivo.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del TS-VB20 y el contexto de conexión ayuda a asegurar un despliegue fluido con Plaspy y facilita la resolución de problemas cuando surgen incidencias. Saber qué envía el dispositivo, cómo se identifica y qué ajustes de transporte usar reduce el tiempo de integración y mejora la fiabilidad operativa.

- Garantiza los ajustes correctos de dominio o IP del servidor y del puerto para que los datos lleguen a Plaspy de forma confiable.
- Ayuda a interpretar los campos reportados para ubicación, diagnósticos del ECU y disparadores de eventos en Plaspy.
- Acelera la resolución de problemas al acotar incidencias a la red de transporte, la configuración del dispositivo o diferencias de firmware.
- Orienta en la elección de configuración, por ejemplo UDP versus TCP en el puerto 8888, según el comportamiento de entrega deseado.
- Facilita la planificación de despliegues en flota al destacar diferencias de firmware o revisiones de hardware que pueden afectar los datos disponibles en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TS-VB20 con Plaspy ofrece una ruta de baja fricción hacia la telemetría y monitoreo vehicular integrados. El factor de forma plug and play OBDII, combinado con posicionamiento por GPS, AGPS y LBS y diagnósticos a nivel de ECU, hace del TS-VB20 una opción práctica para flotas y vehículos particulares que requieren instalación rápida y telemetría accionable. Cuando el dispositivo está correctamente configurado para reportar a Plaspy, la plataforma consolida ubicación, eventos de conducción y métricas básicas de salud del vehículo en alertas, reportes y visualizaciones que apoyan la supervisión operativa.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que es recomendable verificar la documentación y las notas de firmware más recientes en el sitio del fabricante https://www.thingsys.com/ antes de realizar un despliegue a gran escala.
