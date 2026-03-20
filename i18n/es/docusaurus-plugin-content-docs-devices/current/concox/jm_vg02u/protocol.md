---
slug: /concox/jm_vg02u/protocol
id: jm_vg02u-protocol
sidebar_label: Protocol
title: Concox - JM-VG02U Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Concox JM-VG02U con Plaspy para rastreo y telemetría vehicular confiables
keywords:
  - Protocolo Concox JM-VG02U
  - Protocolo GPS Concox JM-VG02U
  - Protocolo de comunicación Concox JM-VG02U
  - Protocolo de rastreo JM-VG02U
  - Compatibilidad JM-VG02U Plaspy
  - Protocolo del rastreador vehicular Concox
  - Protocolo rastreador OBDII GPS
  - Protocolo GNSS con asistencia INS
  - Protocolo Concox para seguimiento de flotas
  - Protocolo de telemática Plaspy
---

# Concox - Protocolo JM-VG02U

Esta página documenta el contexto público del protocolo para integrar el rastreador Concox JM-VG02U con la plataforma Plaspy. Se centra en cómo el dispositivo comunica información a Plaspy a alto nivel y en qué considerar al configurar el JM-VG02U para enviar GNSS, INS y telemetría del vehículo a Plaspy, sin entrar en detalles propietarios o de bajo nivel.

El JM-VG02U es un rastreador vehicular OBDII con GNSS asistido por INS, diseñado para una implementación rápida tipo plug and play y telemetría continua. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del equipo, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para campos específicos del dispositivo o comportamientos dependientes del firmware, consulte la documentación del fabricante como referencia definitiva.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del rastreador define cómo el JM-VG02U se identifica ante la plataforma, cómo informa posición y telemetría de sensores, y cómo entrega alertas de eventos a Plaspy. El protocolo permite al dispositivo enviar de manera fiable fijaciones fusionadas GNSS+INS, eventos de comportamiento de conducción y señales derivadas del OBDII al endpoint del servidor para que Plaspy pueda ingerir y presentar los datos.

- Proporciona información de identificación y registro del dispositivo para que Plaspy asocie las transmisiones entrantes con el activo correcto.
- Transporta actualizaciones periódicas de ubicación y telemetría GNSS+INS fusionada usada para mapeo, geocercas y análisis.
- Entrega mensajes orientados a eventos, como cambios de ignición, conducción brusca, desconexiones de energía y disparos de geocercas.
- Soporta almacenamiento temporal a bordo para sincronizar registros cuando se restablece la conectividad.
- Habilita campos de telemetría necesarios para el cálculo de kilometraje y segmentación de viajes que Plaspy utiliza en informes y flujos de trabajo.

## Cómo Plaspy detecta el protocolo

Plaspy centraliza las conexiones de dispositivos en un endpoint y puerto comunes y detecta automáticamente el protocolo del rastreador cuando está correctamente apuntado. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el JM-VG02U está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para enrutamiento directo y verificación.
- La plataforma escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto para reportar.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un equipo correctamente apuntado normalmente no requiere selección manual de protocolo en la plataforma.
- Confirme que el dispositivo reporta a d.plaspy.com o a la IP del servidor y que el transporte configurado coincide con la configuración del dispositivo.

## Contexto de transporte y conexión

Las opciones de conexión y transporte determinan cómo el JM-VG02U alcanza Plaspy, pero no cambian el rol general del protocolo. El rastreador puede usar datos móviles para conectarse a Plaspy y se emplea el mismo puerto de escucha de Plaspy para todos los dispositivos soportados.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la capacidad del equipo y la preferencia de red.
- Los equipos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para conectividad.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración a nivel de flota.
- Factores a nivel de red como NAT del operador, intensidad de señal y pérdidas temporales de cobertura pueden afectar la entrega y requieren almacenamiento temporal en el dispositivo.
- Al probar conectividad, asegúrese de que el dispositivo pueda abrir conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el conjunto de campos reportados, los identificadores de eventos y la telemetría opcional; siempre documente la versión de firmware al validar comportamiento.
- Revisión de hardware o variantes regionales del JM-VG02U pueden modificar los sensores disponibles o los valores de configuración por defecto.
- Los comandos de configuración del fabricante y los intervalos de reporte predeterminados pueden variar entre lotes; confirme los valores por defecto antes de un despliegue a gran escala.
- La selección del transporte (UDP frente a TCP) puede influir en el comportamiento de entrega y en las características de retransmisión; escoja el transporte que coincida con la configuración del dispositivo y sus necesidades operativas.
- La detección automática de protocolo de Plaspy reduce la necesidad de selección manual, pero el direccionamiento inicial del dispositivo hacia el endpoint de Plaspy debe ser correcto.
- Valide la compatibilidad y las limitaciones específicas por región consultando la documentación del fabricante para obtener la guía más actualizada.

## Por qué es importante entender el protocolo

Comprender cómo el JM-VG02U se comunica con Plaspy ayuda a garantizar una configuración correcta, agilizar la resolución de problemas y mantener una operación confiable a largo plazo. Familiarizarse con el contexto de comunicación reduce el tiempo hasta la primera posición válida y aumenta la confianza en las alertas y la telemetría usadas en operaciones.

- Asegura que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP del servidor y use el puerto 8888 para una ingestión exitosa.
- Ayuda a diagnosticar problemas de conectividad como incompatibilidad de transporte o tráfico saliente bloqueado en redes móviles.
- Permite validar que los eventos críticos y campos de telemetría requeridos por sus flujos de trabajo estén llegando.
- Permite planear actualizaciones de firmware y anticipar cómo pueden cambiar los campos reportados o la semántica de eventos.
- Alinea expectativas respecto al almacenamiento temporal y la resynchronización durante pérdidas de cobertura momentáneas.

## Ventajas de usar Plaspy con este protocolo

Usar el JM-VG02U con Plaspy ofrece a las organizaciones una forma simplificada de capturar datos de ubicación GNSS fusionados con INS de alta fidelidad, eventos de comportamiento de conducción y conveniencias OBDII sin cableado complejo. Para operaciones de flota, aseguradoras o programas de seguridad, la combinación de despliegue rápido vía OBDII y la ingestión centralizada de Plaspy puede acelerar implementaciones y hacer la telemetría accionable mediante geocercas, alertas e informes.

Plaspy está diseñado para aceptar reportes de dispositivos en un único endpoint compartido, por lo que puede apuntar las unidades JM-VG02U a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confiar en la detección automática de protocolo. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware e información de implementación, verifique con el fabricante en https://www.iconcox.com/ ya que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
