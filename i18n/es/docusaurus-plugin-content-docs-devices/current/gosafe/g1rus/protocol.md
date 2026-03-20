---
slug: /gosafe/g1rus/protocol
id: g1rus-protocol
sidebar_label: Protocol
title: Gosafe - G1RUS Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador Gosafe G1RUS y cómo comunica con Plaspy usando parámetros de conexión compartidos
keywords:
  - Protocolo Gosafe G1RUS
  - Protocolo GPS Gosafe G1RUS
  - Protocolo de comunicación Gosafe G1RUS
  - Protocolo de rastreo Gosafe G1RUS
  - G1RUS Plaspy
  - Protocolo del rastreador Gosafe
  - Rastreador GPS G1RUS
  - Protocolo de telemetría Gosafe
  - Compatibilidad G1RUS Plaspy
  - Rastreo de vehículos G1RUS
---

# Gosafe - Protocolo G1RUS

Esta página ofrece el contexto público del protocolo para utilizar el rastreador Gosafe G1RUS con Plaspy. Explica, a alto nivel, cómo el equipo informa posición y telemetría a Plaspy y qué partes del flujo de comunicación son relevantes al integrar y operar dispositivos G1RUS en la plataforma.

Plaspy emplea un modelo de conexión compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo en el G1RUS puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información siguiente debe considerarse como contexto general y no como una especificación a nivel de firmware.

## Visión general del protocolo

El G1RUS comunica telemetría y datos de posición a un servidor remoto usando los modos de reporte soportados por el fabricante. El protocolo define cómo el rastreador se identifica, transmite posiciones GNSS y eventos, y reporta entradas auxiliares como eventos del acelerómetro, E/S digitales y, opcionalmente, datos de sensores Bluetooth.

- Permite al rastreador enviar posiciones GNSS y la telemetría asociada que Plaspy utiliza para mapas e historial
- Transmite datos basados en eventos, como movimiento detectado por el acelerómetro, cambios en entradas digitales y estado de batería o alimentación
- Proporciona un mecanismo para que el rastreador se identifique y Plaspy asocie los informes entrantes con el registro de dispositivo correcto
- Soporta múltiples modos de transporte para que el equipo pueda reportar de forma fiable en distintas condiciones de red
- Permite reportes condicionales y perfiles de bajo consumo para reducir uso celular y preservar la autonomía de la batería a largo plazo

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de los dispositivos en un endpoint compartido y determina cómo interpretar esos reportes para que el dispositivo pueda usarse de inmediato en la plataforma. En la mayoría de implementaciones, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha los reportes de los rastreadores en un único endpoint de servidor conocido
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al servidor
- Normalmente los usuarios configuran el dispositivo para apuntar al servidor de Plaspy y no requieren selección manual de protocolo en la plataforma
- La configuración correcta del dispositivo y el envío constante de reportes son los factores más importantes para que la detección automática tenga éxito
- Si una variante de dispositivo soporta múltiples modos de transporte, asegúrese de que el equipo esté configurado para usar el transporte elegido hacia el endpoint de Plaspy

## Contexto de transporte y conexión

El G1RUS soporta transportes celulares comunes y puede configurarse para reportar usando el transporte que mejor coincida con el perfil de red y energía del activo. Al integrar con Plaspy, configure el rastreador para que envíe datos al endpoint de Plaspy para que la plataforma reciba y parseé la información entrante.

- El dominio del servidor Plaspy es d.plaspy.com y está disponible como host objetivo para el reporte de dispositivos
- La IP del servidor Plaspy es 54.85.159.138 para despliegues que requieren un destino numérico
- El puerto utilizado por Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y las necesidades del despliegue
- Elija UDP para menor overhead o TCP para mayor fiabilidad cuando el dispositivo y la red soporten el transporte seleccionado

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar formatos de reporte, comportamiento de eventos y funcionalidades disponibles; confirme las notas de versión del firmware para detalles específicos del dispositivo
- Las variantes de hardware y módulos opcionales como LTE, 3G o Bluetooth pueden alterar los transportes disponibles y la telemetría
- Las opciones de provisión del fabricante (APN, dirección del servidor, transporte) deben configurarse correctamente para que el dispositivo alcance Plaspy
- Los dispositivos que usan modos de reporte por SMS requieren provisión diferente y pueden no comportarse igual que con reportes TCP/UDP
- Valide la compatibilidad de funciones de las que dependa, como FOTA, reportes condicionales y reenvío de sensores BLE, contra la documentación oficial del fabricante
- Al actualizar firmware o cambiar variantes de hardware, revise nuevamente el comportamiento de reporte para asegurar que Plaspy continúe detectando y procesando el dispositivo correctamente

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar un despliegue confiable, agiliza la resolución de problemas y permite un comportamiento predecible del dispositivo durante largos periodos sin supervisión. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer las características de transporte y reporte reduce fricciones en la integración.

- Acelera la configuración inicial al asegurar que la dirección del servidor, el transporte y el modo de reporte estén correctos
- Facilita el diagnóstico de problemas de conectividad al clarificar si se trata de un problema de transporte, red o configuración del dispositivo
- Informa las decisiones sobre perfiles de energía y reporte que afectan directamente la vida útil de la batería y la cadencia de informes
- Facilita la integración de sensores y E/S externos al entender qué campos de telemetría recibirá la plataforma
- Apoya la planificación de actualizaciones de firmware, comportamiento de FOTA y estrategias de mantenimiento a largo plazo

## Por qué usar Plaspy con este protocolo

G1RUS ofrece larga duración, construcción robusta y telemetría flexible que se ajustan bien a necesidades de seguimiento de flotas y activos. Usar Plaspy con G1RUS brinda a las organizaciones un endpoint alojado que reconoce automáticamente reportes compatibles y convierte esos mensajes en mapas en vivo, alertas e informes históricos útiles para geocercas, procesos antirobo, verificación de rutas y monitoreo de telemetría.

Para conocer más sobre cómo Plaspy funciona con rastreadores como el G1RUS, visite https://www.plaspy.com. Para el comportamiento más reciente específico del dispositivo, notas de firmware y detalles de variantes de hardware, verifique la información en el sitio del fabricante https://gosafesystem.com/.
