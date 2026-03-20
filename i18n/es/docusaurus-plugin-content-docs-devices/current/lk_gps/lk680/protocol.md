---
slug: /lk_gps/lk680/protocol
id: lk680-protocol
sidebar_label: Protocol
title: LK-GPS - LK680 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo LK680 para usarlo con Plaspy en monitoreo de flotas y antirrobo
keywords:
  - LK-GPS LK680
  - Protocolo LK680
  - Rastreador GPS LK680
  - Compatibilidad LK680 Plaspy
  - Protocolo GPS para e-bike
  - Protocolo para rastreadores de bicicleta
  - Seguimiento de vehículos LK680
  - Comunicación LK680
  - Protocolo de rastreadores Plaspy
  - Compatibilidad protocolo LK-GPS
---

# LK-GPS - Protocolo LK680

Esta página ofrece contexto público sobre el protocolo para usar el rastreador LK680 con Plaspy. Explica de forma general cómo se comunica el dispositivo, qué ajustes de conexión son comúnmente necesarios para reportar telemetría y qué verificar al integrar el LK680 en una implementación de Plaspy para seguimiento en tiempo real, alertas de geocerca y notificaciones de batería.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al punto de enlace de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el transporte y el contexto de integración más que en detalles internos del firmware.

## Resumen del protocolo

El LK680 envía posición GNSS, estado de movimiento, condición de batería y notificaciones de eventos a un servicio backend mediante conectividad celular. El protocolo del dispositivo define cómo el rastreador formatea y transmite esos datos de telemetría para que un servidor como Plaspy los ingiera y presente información de ubicación y alertas útiles a los operadores.

- El protocolo transporta actualizaciones periódicas de posición e informes de eventos desde el dispositivo hacia la plataforma.
- La identificación y la información de sesión permiten a la plataforma asociar los datos entrantes con un rastreador y una flota específicos.
- Los campos de telemetría suelen incluir coordenadas de ubicación, marca temporal, eventos de movimiento o vibración y nivel de batería para monitoreo operativo.
- El reporte de eventos admite entrada y salida de geocercas, notificaciones de batería baja y alertas de movimiento que disparan flujos de trabajo en la plataforma.
- El protocolo del rastreador funciona sobre un transporte IP, por lo que los dispositivos pueden usar redes celulares 2G o 4G para alcanzar el endpoint de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto compartidos las conexiones entrantes y detecta automáticamente el protocolo usado por un dispositivo cuando éste reporta al servicio. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el LK680 está configurado para reportar a la dirección y transporte correctos de Plaspy.

- Configure el dispositivo para que reporte al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Apunte el dispositivo al puerto 8888; Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y las condiciones de la red.
- Cuando la telemetría llega a Plaspy en el endpoint compartido, la plataforma reconoce automáticamente el protocolo de reporte y asocia los datos con el dispositivo correcto.
- Si un equipo no aparece en línea, verifique los ajustes de reporte, la cobertura celular y la documentación del fabricante para instrucciones específicas del firmware.

## Contexto de transporte y conexión

Los ajustes de transporte y conexión determinan cómo el LK680 alcanza los servidores de Plaspy. El LK680 soporta enlace ascendente celular y puede configurarse para usar cualquiera de los transportes IP comunes para enviar telemetría a Plaspy. Entender estas opciones de conexión ayuda a asegurar la entrega confiable de datos y la correcta ingestión en la plataforma.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Puede configurar el dispositivo para enviar datos al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los rastreadores compatibles, lo que simplifica la configuración en flotas mixtas.
- Elija UDP para menor sobrecarga y posible ahorro de batería, o TCP para una entrega más fiable según el comportamiento del dispositivo y la red.
- Confirme el APN del dispositivo y el registro celular antes de diagnosticar problemas a nivel de aplicación.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede variar entre versiones de firmware; siempre revise las notas de la versión del firmware del rastreador para detectar cambios en el protocolo.
- Las revisiones de hardware y las variantes de modelo pueden introducir diferencias en los transportes soportados o en los campos de reporte.
- Los comandos de configuración del fabricante o los ajustes pueden diferir por región o compilación de firmware, lo que afecta cómo el dispositivo apunta a un servidor.
- La elección del transporte (UDP versus TCP) puede impactar las características de entrega y el consumo de batería.
- Valide la compatibilidad en una prueba controlada antes de un despliegue masivo para confirmar que el reporte de eventos y la frecuencia de telemetría cumplen los requisitos operativos.
- En caso de duda, consulte la documentación oficial de LK-GPS para orientación específica de configuración del dispositivo.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el LK680 ayuda a lograr una configuración sin contratiempos, diagnósticos precisos y un comportamiento predecible a largo plazo al integrarlo con Plaspy. Una comprensión práctica del protocolo y del contexto de conexión reduce la fricción en la integración y apoya un monitoreo confiable para operaciones antirobo y de flota.

- La configuración adecuada de la dirección de reporte y del transporte garantiza que el dispositivo alcance Plaspy de forma confiable.
- Estar al tanto de las variaciones de firmware y hardware ayuda a explicar diferencias en campos reportados o en el comportamiento de eventos.
- Comprender cómo la frecuencia de telemetría afecta la duración de la batería permite ajustar parámetros para despliegues prolongados.
- Tener expectativas claras sobre los tipos de eventos y disparadores mejora la configuración de geocercas y alarmas en Plaspy.
- La solución de problemas de conectividad o de datos faltantes es más rápida cuando usted conoce el comportamiento esperado del dispositivo en la red.

## Por qué usar Plaspy con este protocolo

Usar el LK680 con Plaspy brinda a los operadores de flota y propietarios visibilidad práctica en tiempo real sobre ubicación, movimiento y estado de batería para e-bikes, motocicletas y flotas de micromovilidad compartida. La combinación de un dispositivo compacto y resistente a manipulaciones con una plataforma que detecta e ingiere automáticamente los reportes de los dispositivos facilita el despliegue y la gestión de muchas unidades en un área de servicio.

Para conocer más sobre cómo Plaspy funciona con rastreadores GPS como el LK680 y evaluar las funciones de la plataforma para su flota, visite https://www.plaspy.com. Para obtener los detalles específicos más recientes del protocolo del dispositivo, notas de firmware e instrucciones de configuración, consulte al fabricante en https://www.lk-gps.com ya que las implementaciones pueden cambiar con el tiempo.
