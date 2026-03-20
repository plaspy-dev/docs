---
slug: /concox/eg02/protocol
id: eg02-protocol
sidebar_label: Protocol
title: Concox - EG02 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo EG02 de Concox para integrar con Plaspy, incluidos endpoints y guía de transporte
keywords:
  - Protocolo Concox EG02
  - Protocolo GPS Concox EG02
  - Compatibilidad EG02 Plaspy
  - Comunicación Concox EG02
  - Protocolo de rastreo EG02
  - Protocolo rastreador GPS Concox
  - Rastreo vehicular EG02
  - Rastreador Concox Plaspy
  - Guía de integración EG02
  - Rastreador anti robo EG02
---

# Concox - Protocolo EG02

Esta página explica el contexto público del protocolo para usar el rastreador GPS Concox EG02 con Plaspy. Describe, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y qué aspectos del comportamiento de reporte del equipo son relevantes durante la integración. El enfoque aquí es en información pública y no sensible, útil para configuración y resolución de problemas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo comienza a reportar en la plataforma. El comportamiento exacto del protocolo en el EG02 puede variar según la versión de firmware, la revisión de hardware y cambios del fabricante. Usted debe combinar la orientación aquí con la documentación del hardware EG02 y las notas de firmware actuales del fabricante.

## Resumen del protocolo

El EG02 transmite información de ubicación, movimiento y estado a servidores remotos mediante sus capacidades de reporte incorporadas. El dispositivo envía su posición y alertas para que una plataforma de gestión de flotas o seguridad como Plaspy pueda mostrar y actuar sobre esos datos. Esta sección describe el papel del protocolo sin exponer formatos propietarios de paquetes.

- Proporciona identidad y estado del dispositivo para que Plaspy asocie los informes con el activo correcto.
- Transmite datos de ubicación por GPS y celular para seguimiento en tiempo real y reproducción histórica.
- Entrega señales de eventos como alarma por vibración, cambios de alimentación, eventos de geo-cerca y estado de bloqueo remoto.
- Permite comandos remotos y configuración cuando el dispositivo y el firmware del fabricante lo soportan.
- Asegura la entrega de mensajes a través de un transporte de red para que Plaspy pueda ingerirlos y procesarlos para monitoreo y alertas.

## Cómo detecta Plaspy el protocolo

Plaspy acepta tráfico entrante de dispositivos en un único endpoint y puerto compartidos, y usa las cargas útiles de los reportes para determinar automáticamente el protocolo del dispositivo. En la mayoría de los casos, si el EG02 está configurado para reportar al endpoint de Plaspy, la plataforma detectará y empezará a procesar los datos sin que sea necesario seleccionar manualmente el protocolo en la interfaz.

- El dominio del servidor Plaspy para reporting de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto usado por Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el EG02 reporta con éxito a la plataforma.
- Normalmente no es necesario que usted seleccione un protocolo dentro de Plaspy si el equipo está apuntando al endpoint de Plaspy.
- Asegúrese de que el identificador del dispositivo y el intervalo de reporte estén configurados según las instrucciones del fabricante para que Plaspy pueda emparejar los mensajes entrantes con el activo correcto.

## Contexto de transporte y conexión

El EG02 puede configurarse para enviar sus reportes por la red usando UDP o TCP, según el firmware y las opciones de configuración del dispositivo. Plaspy acepta ambos modos de transporte en su puerto compartido, de modo que los administradores pueden elegir el transporte que mejor se adapte a sus necesidades de conectividad y confiabilidad.

- Los dispositivos pueden configurarse para apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos; el dispositivo puede usar UDP o TCP en el puerto 8888.
- Usar TCP puede proporcionar confirmación de entrega en enlaces celulares inestables, mientras que UDP es una opción de bajo overhead cuando el firmware lo soporta.
- El uso de un mismo puerto para todos los dispositivos simplifica la configuración y el onboarding en Plaspy.
- Confirme que la configuración de transporte del EG02 y el APN coincidan con el entorno de la red móvil para asegurar reportes confiables.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, eliminar o cambiar campos de reporte y eventos disponibles; siempre verifique la versión de firmware del EG02 al confirmar compatibilidad.
- Lotes de hardware o variantes regionales pueden presentar pequeñas diferencias de protocolo que afecten funciones opcionales como bloqueo remoto o integración del buzzer.
- La elección del transporte entre UDP y TCP puede influir en la rapidez de recepción de eventos y en si la retransmisión la gestiona el propio dispositivo.
- Es posible que sea necesario cambiar los ajustes de servidor por defecto del fabricante para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Algunos comandos remotos o funciones avanzadas requieren soporte específico de firmware y pueden no estar disponibles en todas las unidades EG02.
- Valide la compatibilidad confirmando que el dispositivo reporta al endpoint de Plaspy y que Plaspy detecta automáticamente el protocolo.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a los administradores a configurar los equipos correctamente, diagnosticar problemas de conectividad y asegurarse de que el EG02 reporte datos útiles a Plaspy. Tener claro el comportamiento de transporte y reporte reduce el tiempo de incorporación y mejora la confiabilidad a largo plazo.

- Ajustes correctos de transporte y servidor previenen reportes perdidos o mal encauzados durante la puesta en marcha.
- Saber qué eventos envía el EG02 permite configurar alertas y automatizaciones dentro de Plaspy.
- La conciencia sobre variaciones de firmware y hardware acelera la resolución de problemas cuando los campos de datos difieren de lo esperado.
- Configuraciones adecuadas de APN y parámetros celulares son críticas para el reporte móvil en distintas regiones y operadores.
- Comprender los intervalos de reporte y la gestión de energía garantiza actualizaciones oportunas sin consumo de batería innecesario.

## Por qué usar Plaspy con este protocolo

Usar el Concox EG02 con Plaspy ofrece a las organizaciones visibilidad práctica en tiempo real de scooters y vehículos ligeros, combinando las capacidades del dispositivo para alertas anti robo y control remoto con el seguimiento, las alertas y la supervisión operativa de Plaspy. El EG02 está pensado para scooters y pequeños vehículos eléctricos, y cuando se configura para reportar a Plaspy puede alimentar datos de posición y eventos a una plataforma centralizada para monitoreo y respuesta.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para obtener los detalles más recientes del protocolo específico del dispositivo, notas de firmware y orientación de implementación, verifique la información en el sitio del fabricante https://www.iconcox.com/. El soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la documentación más reciente antes de realizar cambios de configuración.
