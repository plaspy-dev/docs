---
slug: /gotop/g20/protocol
id: g20-protocol
sidebar_label: Protocol
title: GOTOP - G20 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GOTOP G20 y cómo se comunica con Plaspy para rastreo GPS confiable
keywords:
  - protocolo GOTOP G20
  - protocolo GPS GOTOP G20
  - compatibilidad GOTOP G20 Plaspy
  - comunicación rastreador GOTOP G20
  - protocolo de rastreo GOTOP G20
  - protocolo GPS GOTOP
  - compatibilidad dispositivos Plaspy
  - guía protocolo rastreador GPS
  - protocolo rastreador de activos GOTOP
  - rastreo vehicular GOTOP G20
---

# GOTOP - Protocolo G20

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS GOTOP G20 con Plaspy. Describe, en términos generales, cómo se comunica el dispositivo, qué configuraciones de conexión espera Plaspy y qué aspectos del comportamiento del rastreador son relevantes para un reporte e integración confiables. El objetivo es ayudar a gerentes de flota y de activos a comprender la relación de comunicación entre el G20 y la plataforma Plaspy sin exponer detalles de implementación sensibles.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar entre versiones de firmware, revisiones de hardware y configuraciones del fabricante. Para detalles específicos del dispositivo y el comportamiento del firmware más reciente, consulte la documentación oficial de GOTOP y las notas de lanzamiento.

## Visión general del protocolo

El protocolo del rastreador es el conjunto de reglas que el G20 usa para enviar información de posición, estado y eventos a un servidor remoto. En términos prácticos, el protocolo permite que el equipo se identifique ante Plaspy, reporte datos de GPS y sensores auxiliares, y notifique a la plataforma sobre alarmas o cambios de configuración. Entender este contexto público ayuda a asegurar que el dispositivo esté configurado para alcanzar Plaspy y que los datos devueltos se interpreten correctamente a alto nivel.

- El protocolo determina cómo el rastreador informa posiciones, marcas de tiempo y estado básico a un servidor backend.
- Permite la identificación del dispositivo para que Plaspy asocie los reportes entrantes con el registro correcto de flota o activo.
- El protocolo transporta señales de evento como movimiento, exceso de velocidad, vibración y batería baja que Plaspy utiliza para alertas.
- La información de transporte y dirección permite al rastreador establecer sesión con Plaspy e iniciar el reporte.
- Aunque los detalles del payload varían según el firmware, la función del protocolo es entregar telemetría utilizable y fiable a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un endpoint y puerto compartidos y usa detección automática para determinar el protocolo del rastreador. Esto significa que cuando el G20 está configurado para reportar a Plaspy, la plataforma por lo general reconoce los mensajes del dispositivo sin selección manual del protocolo, siempre que el equipo envíe al endpoint correcto de Plaspy y utilice el transporte soportado.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma.
- Los dispositivos configurados para reportar al endpoint de Plaspy suelen ser reconocidos sin selección manual de protocolo en la plataforma.
- La identificación correcta del dispositivo requiere que el rastreador reporte usando un identificador consistente, como el IMEI u otro identificador del fabricante.
- Si un rastreador no aparece, verifique la dirección de reporte y la configuración de transporte en el dispositivo y en la documentación del fabricante.
- Plaspy registra las conexiones entrantes y puede ofrecer orientación para las verificaciones de configuración más comunes cuando no se produce la detección.

## Transporte y contexto de conexión

El GOTOP G20 puede configurarse para usar UDP o TCP para reportar a Plaspy, según el soporte y la configuración del dispositivo. Plaspy expone una única dirección y puerto de red compartidos para el reporte de dispositivos, de modo que los equipos compatibles puedan apuntar a ese endpoint. Usar el host y el transporte correctos es esencial para que el rastreador alcance Plaspy y para que la plataforma aplique la detección automática del protocolo.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port for reporting
- Plaspy automatically detects the tracker protocol when messages arrive at the shared endpoint

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar la sincronización de mensajes y las funciones soportadas entre revisiones del equipo.
- Variantes de hardware o accesorios opcionales pueden afectar qué sensores o alarmas están disponibles para reportar.
- Algunas unidades G20 pueden venir por defecto usando UDP mientras otras solo soportan TCP; confirme la capacidad de transporte antes del despliegue.
- La configuración del fabricante o builds regionales de firmware pueden alterar las direcciones de servidor por defecto y los intervalos de reporte.
- Siempre valide ajustes del equipo como APN, registro de la SIM y host del servidor antes de asumir incompatibilidad de protocolo.
- Para diferencias a nivel de funciones, consulte la documentación de GOTOP para verificar qué funciones están presentes en su modelo específico.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación facilita una integración fluida con Plaspy y mejora la efectividad de la resolución de problemas y la monitorización a largo plazo. Saber qué debe enviar el rastreador y cómo se conecta a Plaspy reduce el tiempo de configuración y ayuda a diagnosticar problemas comunes como reportes perdidos o mapeo incorrecto de dispositivos.

- Configurar correctamente el transporte y la dirección del servidor reduce fallas de conexión
- Reconocer comportamientos dependientes del firmware ayuda a explicar diferencias en el contenido de la telemetría
- Entender el reporte de eventos permite reglas operativas y alertas precisas en Plaspy
- Conocer los identificadores de dispositivo asegura que los reportes se asignen a los activos correctos
- La comprensión del protocolo apoya la gestión de batería al alinear los intervalos de reporte con las capacidades del equipo

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G20 con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación y eventos de rastreadores personales y de activos mediante una única plataforma gestionada. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos en flotas mixtas y ayudan a los equipos a mantener visibilidad operativa sobre vehículos y activos portátiles.

To learn more about how Plaspy supports device connectivity and fleet monitoring, visit https://www.plaspy.com. Protocol support and device firmware behavior can change over time, so verify the latest model specific protocol details and firmware information with the manufacturer at https://www.gotop.cc/.
