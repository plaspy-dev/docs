---
slug: /gotop/g01_4g/protocol
id: g01_4g-protocol
sidebar_label: Protocol
title: GOTOP - G01-4G Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para el rastreador GOTOP G01 4G y su conexión con Plaspy mediante ajustes de servidor compartidos
keywords:
  - protocolo GOTOP G01-4G
  - protocolo GPS GOTOP G01-4G
  - protocolo de comunicación GOTOP G01-4G
  - protocolo de rastreo GOTOP G01-4G
  - rastreador GOTOP Plaspy
  - compatibilidad G01-4G Plaspy
  - protocolo de rastreo vehicular
  - rastreo de flotas GOTOP
  - guía de protocolo de rastreador GPS
  - integración de dispositivos Plaspy
---

# GOTOP - Protocolo G01-4G

Esta página ofrece el contexto público del protocolo para usar el rastreador GOTOP G01-4G con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué papel desempeña el protocolo de reporte del rastreador en la integración y qué ajustes de conexión espera Plaspy para recibir flujos de ubicación, alarmas y telemetría. El G01-4G es un rastreador GPS 4G profesional con respaldo por SMS, diseñado para vehículos y flotas; este documento resume el contexto del protocolo relevante para la integración con Plaspy sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar entre versiones de firmware, revisiones de hardware e implementaciones del fabricante, por lo que esta página debe usarse como orientación general. Si necesita detalles de paquetes o comandos específicos del dispositivo, consulte la documentación oficial de GOTOP para el comportamiento del firmware más reciente antes de realizar cambios en producción.

## Panorama general del protocolo

El protocolo de reporte del rastreador es el puente entre el dispositivo G01-4G y el backend de Plaspy. En términos generales, el protocolo define cómo el rastreador se identifica, cómo informa posiciones GNSS y cómo envía notificaciones de eventos y telemetría que Plaspy convierte en mapas en tiempo real, alertas e informes. La información que sigue describe las responsabilidades generales del protocolo sin entrar en estructuras de paquetes propietarias.

- Transporta actualizaciones regulares de posición y marcas de tiempo para que Plaspy pueda mostrar ubicaciones en vivo e historial.
- Envía notificaciones de eventos como pulsos de SOS, cambios de ACC (encendido), alarmas por vibración o movimiento y pérdida de alimentación, que alimentan los flujos de alertas.
- Transmite telemetría del vehículo y banderas de estado para que Plaspy muestre entradas como ACC, puertas o estados de sensores y permita acciones de control remoto donde estén configuradas.
- Permite interacciones bidireccionales opcionales, como control remoto o acuses de recibo de comandos, cuando el firmware del dispositivo y la configuración del operador lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de rastreadores en un endpoint compartido y usa detección automática para determinar el protocolo correcto de cada reporte. Cuando el G01-4G está configurado para reportar a Plaspy, la plataforma empata los flujos entrantes con el parser y el mapeo apropiados, por lo que normalmente usted no necesita seleccionar un protocolo manualmente en Plaspy.

- Plaspy acepta reportes de dispositivos en un puerto único que se utiliza para todos los rastreadores compatibles.
- Los dispositivos deben configurarse para reportar al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- El puerto que Plaspy utiliza para todos los dispositivos es el 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual en la plataforma suele ser innecesaria si el dispositivo apunta correctamente al endpoint de Plaspy.
- La identificación adecuada del dispositivo depende de que el rastreador envíe los campos de identificación y tipos de eventos esperados según el firmware del fabricante.

## Transporte y contexto de conexión

Las opciones de transporte afectan cómo el G01-4G entrega datos a Plaspy, pero no cambian el papel general del protocolo. El dispositivo puede usar transporte UDP o TCP para entregar sus reportes, según la configuración y el soporte del firmware. Mantenga la selección de transporte y la dirección del servidor consistente con los ajustes de Plaspy para garantizar la entrega confiable de datos de posición y eventos.

- El G01-4G puede configurarse para usar UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 para la conectividad con el servidor.
- Plaspy emplea el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración en campo.
- La selección de transporte puede afectar las garantías de entrega y debe coincidir con lo que el firmware del dispositivo soporta y con lo que la red celular entrega de forma fiable.
- El respaldo por SMS y otros mecanismos fuera de banda a nivel de dispositivo son específicos del equipo y están fuera del manejo de transporte de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de compilación pueden cambiar qué campos, eventos y telemetría informa el dispositivo a Plaspy.
- Las revisiones de hardware y las interfaces periféricas opcionales pueden alterar las entradas disponibles, como canales adicionales de sensores o funciones de audio.
- Las utilidades de configuración del fabricante o los pasos de aprovisionamiento suelen controlar si el dispositivo reporta vía UDP o TCP y qué dirección de servidor se utiliza.
- Las variantes regionales del módulo celular pueden influir en la frecuencia y la forma en que el dispositivo se conecta, pero no cambian el rol general del protocolo.
- El comportamiento de respaldo por SMS y el soporte de comandos remotos son capacidades del dispositivo y deben validarse con la documentación GOTOP vigente para su SKU.
- Siempre valide la compatibilidad con la documentación oficial del fabricante y las notas de configuración de ejemplo antes de desplegar en volumen.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación ayuda a garantizar una configuración inicial exitosa, un manejo predecible de eventos y operaciones estables a largo plazo cuando el G01-4G se utiliza con Plaspy. Saber qué se espera que reporte el rastreador y cómo Plaspy ingiere esos reportes reduce errores de configuración y acelera la resolución de problemas.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que los datos se reciban de forma fiable.
- Facilita el mapeo de eventos del rastreador como SOS, ACC y pérdida de alimentación en las alertas e informes de Plaspy.
- Asiste en la resolución de problemas de conectividad revisando transporte, DNS y comportamiento celular en lugar de suponer detalles del parser.
- Informa decisiones sobre el uso de comandos remotos y funciones de inmovilizador según lo que soporte el firmware del dispositivo.
- Permite verificar integraciones periféricas como sensores de combustible o cámaras al comprender qué canales de telemetría expone el dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G01-4G con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación del vehículo, alarmas y telemetría para mejorar la supervisión operativa y acelerar la respuesta a incidentes. Plaspy consume las corrientes de posición y eventos del rastreador y las convierte en mapas en vivo, alertas configurables e informes históricos que los gestores de flota pueden usar para reducir robos, validar incidencias y optimizar rutas y utilización.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el G01-4G visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones del fabricante más recientes, verifique la información en el sitio oficial de GOTOP en https://www.gotop.cc/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, así que confirme siempre la documentación actual del dispositivo antes de finalizar la integración o desplegar a gran escala.
