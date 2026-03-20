---
slug: /glonasssoft/umka310_with_cigarette_lighter/protocol
id: umka310_with_cigarette_lighter-protocol
sidebar_label: Protocol
title: GLONASSsoft - UMKa310 with cigarette lighter Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GLONASSsoft UMKa310 con encendedor y su comunicación con Plaspy para rastreo de flotas
keywords:
  - Protocolo GLONASSsoft UMKa310
  - Compatibilidad UMKa310 Plaspy
  - Comunicación rastreador UMKa310 GPS
  - Soporte EGTS Wialon Combine
  - Protocolo telemetría UMKa310
  - Rastreo vehicular UMKa310
  - Protocolo monitoreo combustible UMKa310
  - Integración dispositivos Plaspy
  - Protocolo rastreador Plaspy
  - Protocolo seguimiento UMKa310
---

# GLONASSsoft - UMKa310 with cigarette lighter — Protocolo

Esta página describe el contexto público del protocolo para usar el GLONASSsoft UMKa310 con toma de encendedor junto con Plaspy. Se centra en cómo el rastreador transmite coordenadas GNSS y telemetría a un backend en la nube, y en qué aspectos del protocolo del dispositivo son relevantes para una integración exitosa con Plaspy, sin entrar en detalles propietarios o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general basada en el conjunto de funciones del UMKa310, incluyendo soporte para EGTS y Wialon Combine, transferencia por lotes, configuración por Bluetooth, soporte opcional de sensor RS-485 y registro tipo caja negra.

## Resumen del protocolo

El UMKa310 implementa opciones abiertas de telemetría que le permiten reportar posición, movimiento y datos de sensores a backends en la nube. El dispositivo puede enviar navegación y telemetría en formatos soportados a múltiples puntos finales, y sus capacidades de transferencia por lotes y envío a varios servidores ayudan a equilibrar la frecuencia de actualización con el uso de datos.

- Permite el envío de posición GNSS y telemetría del vehículo a un backend remoto para mapeo y procesamiento de eventos.
- Soporta modos de reporte al estilo EGTS y Wialon Combine usados por muchos backends de flotas, lo que facilita transmitir campos estandarizados como coordenadas, velocidad y valores básicos de sensores.
- La transferencia por lotes reduce el tráfico GPRS agrupando registros sin sacrificar actualizaciones frecuentes de ubicación para backends como Plaspy.
- Soporta transmisión simultánea a varios servidores para redundancia o flujos de reporte divididos.
- Proporciona datos opcionales de sensores RS-485 y registros tipo caja negra que permiten recuperar telemetría histórica cuando se restablece la conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador a medida que llegan los datos. En la mayoría de los casos, solo es necesario configurar el dispositivo para que reporte al endpoint de Plaspy y no se requiere seleccionar el protocolo manualmente en la plataforma.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para datos entrantes de dispositivos y usa este mismo puerto para todos los dispositivos soportados.
- Los dispositivos configurados para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888 serán procesados por Plaspy.
- El UMKa310 puede configurarse para reportar usando formatos comunes como EGTS o Wialon Combine, que Plaspy puede reconocer.
- En configuraciones típicas, el usuario apunta el dispositivo al endpoint de Plaspy y la plataforma se encarga de la identificación automática del protocolo.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el UMKa310 llega a Plaspy, pero no cambian el papel general del protocolo en la transmisión de la telemetría a la plataforma. El UMKa310 soporta opciones de transporte flexibles que pueden ajustarse durante la configuración del dispositivo según los requisitos de red o del servidor.

- El rastreador puede configurarse para usar transporte UDP o TCP en el puerto 8888 según los ajustes del equipo y las condiciones de red.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el endpoint de reporte.
- Todos los dispositivos que se conectan a Plaspy usan el mismo número de puerto, por lo que las reglas de firewall de red y los ajustes de APN del operador se pueden estandarizar.
- La selección del transporte puede afectar características de entrega como retransmisiones y ordenamiento, pero no cambia los campos básicos de telemetría reportados.
- Al configurar la conectividad, asegúrese de que la SIM y los ajustes de APN permitan sesiones GPRS salientes hacia el endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y software en el UMKa310 pueden modificar las opciones de reporte disponibles y el mapeo de campos; compare las notas de la versión de firmware al validar el comportamiento.
- Las revisiones de hardware e interfaces opcionales como RS-485 o Bluetooth pueden cambiar los flujos de telemetría disponibles y los identificadores de sensores.
- Los modos EGTS y Wialon Combine son soportados por el dispositivo; confirme cuál está activo al mapear campos a los paneles de Plaspy.
- La elección de transporte entre UDP y TCP puede ser configurable por entrada de servidor cuando se apunta el dispositivo a múltiples endpoints.
- El reporte a múltiples servidores puede usarse para enviar los mismos datos a Plaspy y a otros backends para redundancia; confirme las entradas de servidores y sus prioridades en la configuración del dispositivo.
- Siempre valide la compatibilidad y los detalles actuales del protocolo contra la documentación del fabricante para el firmware del dispositivo que está desplegando.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del UMKa310 ayuda a garantizar un flujo de datos fiable hacia Plaspy, reduce la fricción en la configuración y facilita el diagnóstico cuando faltan datos o aparecen valores inesperados.

- Ayuda a validar que los campos de posición, velocidad y sensores estén mapeados correctamente en los paneles e informes de Plaspy.
- Orienta la elección del transporte y de los ajustes de multi servidor para alcanzar objetivos de fiabilidad y costo de datos.
- Facilita la interpretación de registros de caja negra y cargas por lotes después de interrupciones de cobertura.
- Permite tomar decisiones informadas sobre actualizaciones de firmware y cambios de configuración que afecten el comportamiento de la telemetría.
- Acelera la resolución de problemas de conectividad al comprobar endpoint, transporte y configuración de APN frente al comportamiento de protocolo esperado.

## Por qué usar Plaspy con este protocolo

Usar el UMKa310 con Plaspy ofrece a las organizaciones un rastreo compacto, plug and play, combinado con un backend en la nube flexible que acepta los modos abiertos de reporte del dispositivo. Las funciones de bajo consumo de datos del rastreador, como la transferencia por lotes y el reporte a múltiples servidores, encajan bien con casos de uso de flotas que requieren actualizaciones frecuentes, monitoreo de combustible y registro de eventos sin incurrir en altos costos de datos.

Para saber más sobre Plaspy y cómo la plataforma maneja las integraciones de dispositivos visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y las guías del fabricante, verifique la información actual en el sitio oficial de GLONASSsoft en https://glonasssoft.ru/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante ayuda a asegurar la configuración más precisa.
