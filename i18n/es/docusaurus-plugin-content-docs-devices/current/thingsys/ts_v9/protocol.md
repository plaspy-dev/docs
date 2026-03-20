---
slug: /thingsys/ts_v9/protocol
id: ts_v9-protocol
sidebar_label: Protocol
title: ThingSys - TS-V9 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ThingSys TS-V9 y cómo se comunica con Plaspy para rastreo en tiempo real
keywords:
  - Protocolo ThingSys TS V9
  - Protocolo GPS ThingSys TS V9
  - Protocolo ThingSys TS V9 para Plaspy
  - Protocolo de comunicación TS V9
  - Protocolo de rastreo TS V9
  - Protocolo de rastreador vehicular ThingSys
  - Compatibilidad de dispositivos Plaspy
  - Integración de protocolos de rastreadores GPS
  - Protocolo de telemática vehicular
  - Protocolo de rastreo de flotas
---

# ThingSys - Protocolo TS-V9

Esta página describe el contexto público del protocolo para usar el rastreador vehicular ThingSys TS-V9 con Plaspy. Explica cómo se comunica el dispositivo con Plaspy en términos generales, qué papel tiene el protocolo de reporte para entregar posiciones y telemetría útiles, y qué ajustes de conexión son relevantes para integrar el TS-V9 en una implementación de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint de Plaspy. El comportamiento exacto del protocolo para el TS-V9 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en información pública segura para la integración en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte del TS-V9 es el mecanismo que el equipo usa para enviar posiciones GNSS, telemetría y alarmas a un servidor remoto. Para la integración con Plaspy, el protocolo determina cómo se identifica el dispositivo, la frecuencia de los reportes y qué campos de telemetría se entregan para que Plaspy muestre ubicación en tiempo real, alertas y datos históricos.

- El protocolo transporta posición GNSS, tiempo y telemetría vehicular común como estado de ignición, kilometraje y eventos de alarma.
- Proporciona información de identidad para que Plaspy pueda asociar los mensajes entrantes con el registro correcto del dispositivo.
- El comportamiento de reporte se ve influido por la configuración del equipo, como intervalos de reporte y desencadenantes por eventos.
- El formato del protocolo permite a Plaspy analizar y almacenar posiciones y telemetría utilizables para paneles, notificaciones e informes.
- El comportamiento a nivel de protocolo puede verse afectado por la conectividad del operador celular y por la versión de firmware del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes de rastreadores en un único endpoint y puerto compartidos y detecta automáticamente el protocolo cuando llegan los datos. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el TS-V9 está configurado para reportar al endpoint de Plaspy y el dispositivo está correctamente identificado en la red.

- Apunte el TS-V9 al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como destino de reporte.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes.
- El TS-V9 puede configurarse para usar UDP o TCP para enviar datos a Plaspy según la configuración del dispositivo y las condiciones de red.
- Cuando el dispositivo reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al dispositivo correcto.
- Normalmente usted solo debe verificar que el dispositivo esté configurado para reportar al endpoint de Plaspy y que la identidad del equipo coincida con el registro en su cuenta Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el TS-V9 envía datos a Plaspy y qué opciones de direccionamiento se usan comúnmente. Para la integración con Plaspy, el TS-V9 puede usar cualquiera de los modos de transporte estándar que soporta el dispositivo y debe apuntar al endpoint compartido de Plaspy.

- El TS-V9 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del instalador.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 como destino de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota.
- Use el modo de transporte que se ajuste a su red y a las recomendaciones del firmware del dispositivo, y verifique la conectividad desde el equipo hacia el endpoint de Plaspy.
- La selección del transporte afecta las características de entrega pero no cambia que Plaspy recibirá y detectará automáticamente el protocolo del rastreador.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden modificar campos de mensaje, desencadenantes de reporte u opciones de telemetría. Verifique las notas de la versión de firmware del TS-V9 cuando los campos precisos sean importantes.
- Las revisiones de hardware o interfaces opcionales (por ejemplo sensores externos de combustible o integración CAN) pueden influir en qué telemetría está disponible para Plaspy.
- Algunas implementaciones del fabricante ofrecen tanto reportes a plataforma como opciones de control vía SMS o llamadas; asegúrese de elegir el modo de reporte previsto para la ingestión por Plaspy.
- La selección del transporte (UDP frente a TCP) puede estar limitada por el comportamiento del operador o la red regional; confirme que el transporte del dispositivo sea compatible con su plan de conectividad.
- Siempre valide la identidad del dispositivo y el objetivo de reporte después de la configuración para asegurarse de que los mensajes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Al integrar muchos dispositivos, estandarizar firmware y configuración reduce la variabilidad y mejora la confiabilidad.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TS-V9 ayuda a asegurar una configuración exitosa y una operación confiable en Plaspy, reduciendo el tiempo de diagnóstico y la fricción de integración. Saber qué envía el dispositivo y cómo se conecta le permite confirmar que posiciones, alarmas y telemetría aparecen como se espera.

- Verificar intervalos de reporte y desencadenantes de eventos disminuye falsas alarmas y asegura densidad de datos útil para rastreo e informes.
- Confirmar que los campos de telemetría requeridos estén presentes ayuda a que Plaspy muestre datos precisos de ignición, kilometraje, combustible y alarmas.
- Estar al tanto de diferencias de firmware y hardware acelera el diagnóstico cuando un equipo envía datos inesperados o incompletos.
- Entender la configuración de transporte y destino evita reportes mal dirigidos y simplifica la configuración a nivel de flota.
- Tener expectativas claras del protocolo facilita la planificación de actualizaciones OTA y el mantenimiento a largo plazo de los equipos.

## Por qué usar Plaspy con este protocolo

Combinar el TS-V9 con Plaspy ofrece una solución práctica y profesional para rastreo vehicular. La conectividad celular multigeneración del TS-V9, sus interfaces de telemetría vehicular y su diseño robusto lo hacen apto para flotas, empresas de alquiler y vehículos especializados, mientras que Plaspy ingiere posición y telemetría para que los operadores puedan monitorear ubicación en tiempo real, recibir alertas y generar informes históricos.

Para obtener más información sobre cómo Plaspy admite la integración de dispositivos y revisar las opciones de plataforma, visite https://www.plaspy.com. Para las notas de protocolo específicas del dispositivo más recientes, detalles de firmware y manuales técnicos del TS-V9, consulte al fabricante en https://www.thingsys.com/ para verificar el soporte del protocolo y el comportamiento del dispositivo a lo largo del tiempo.
