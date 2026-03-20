---
slug: /carscop/cc_688/protocol
id: cc_688-protocol
sidebar_label: Protocol
title: Carscop - CC-688 Protocol
sidebar_class_name: menu_item_tracker
description: Vista general pública del protocolo Carscop CC-688 para integrar el rastreador GPS con Plaspy, conectividad y telemetría
keywords:
- Protocolo Carscop CC-688
- Protocolo GPS Carscop CC-688
- Protocolo de comunicación Carscop CC-688
- Protocolo de rastreo Carscop CC-688
- Protocolo rastreador Carscop
- Compatibilidad CC-688 Plaspy
- Protocolo de rastreo vehicular
- Rastreador para gestión de flotas
- Protocolo rastreador GPS
- Telemetría CAN OBD
---

# Carscop - Protocolo CC-688

Esta página describe el contexto del protocolo público para usar la caja telemática Carscop CC-688 con Plaspy. Se centra en cómo el dispositivo envía telemetría y datos de control a la plataforma Plaspy, y detalla las configuraciones de conexión y las consideraciones operativas relevantes para flotas, alquileres y servicios de car sharing.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Los dispositivos compatibles con Plaspy, incluido el CC-688, pueden presentar diferencias en el comportamiento del protocolo según la versión de firmware, la revisión de hardware y la implementación del fabricante; esta página ofrece orientación general y recomienda validar contra las notas de firmware y la documentación del fabricante.

## Resumen del protocolo

El protocolo de reporte es el conjunto de reglas y convenciones que usa el CC-688 para enviar posición GNSS, telemetría del vehículo, estados de eventos e información de salud a un servidor remoto como Plaspy. Un comportamiento correcto del protocolo asegura que los datos provenientes de GNSS, CANBUS/OBD II, eventos BLE/NFC y entradas/salidas se traduzcan en información útil para monitoreo y control.

- Permite que el CC-688 establezca conexión de red y entregue posición GNSS y telemetría CANBUS/OBD a Plaspy para seguimiento en tiempo real y registro histórico.
- Proporciona una forma coherente para que el dispositivo se identifique y comunique sus capacidades, de modo que Plaspy pueda correlacionar datos con el vehículo y las funciones disponibles.
- Transporta mensajes basados en eventos como puerta abierta, estado de ignición, alertas por impacto y registros de acceso desde BLE o NFC para auditoría y alertas.
- Facilita interacciones de control remoto y actuadores (por ejemplo, salidas de relé para bloqueo/desbloqueo o corte de motor) entre Plaspy y el equipo cuando están soportadas y autorizadas.
- Soporta configuración remota e indicadores de actualización OTA para que los operadores de flota puedan gestionar parámetros del dispositivo de forma centralizada.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta. En la mayoría de los casos, si el CC-688 está configurado para reportar al endpoint de Plaspy y el enrutamiento de red lo permite, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un único endpoint de servidor compartido para todos los dispositivos soportados, lo que simplifica la configuración y el onboarding.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 como referencia para operadores.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador según la conexión entrante y los datos reportados.
- Cuando el CC-688 envía sus reportes al endpoint de Plaspy, Plaspy asociará la telemetría entrante con el registro de dispositivo correcto.
- Generalmente usted solo necesita configurar el dispositivo para que reporte al endpoint de Plaspy y asegurarse de que la red permita conexiones salientes hacia ese endpoint.

## Transporte y contexto de conexión

El CC-688 puede reenviar telemetría a través de datos móviles utilizando protocolos de transporte estándar. Dependiendo de la configuración del dispositivo y del entorno de la red, las conexiones a Plaspy pueden usar uno de los métodos de transporte comunes soportados por el equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o a la dirección numérica 54.85.159.138 como destino alternativo.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y las reglas de firewall.
- Las conexiones normalmente se establecen sobre la interfaz celular del dispositivo (2G/3G/4G) y usan el transporte elegido para enviar reportes periódicos o basados en eventos.
- Factores de red como NAT del operador, firewalls del carrier y la calidad de la señal pueden afectar la persistencia de la sesión y la latencia en la entrega.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la sincronización de mensajes, los campos disponibles o la presencia de elementos de telemetría opcionales; verifique la versión de firmware del dispositivo al solucionar problemas.
- Variantes de hardware o modelos regionales del CC-688 pueden exponer diferentes mapeos de CANBUS u OBD y configuraciones de E/S que afectan qué telemetría está disponible.
- Parámetros de configuración del lado del fabricante (por ejemplo funciones de control de acceso, comportamiento de emparejamiento BLE o registro de eventos NFC) pueden alterar la forma de los datos que Plaspy recibe.
- La elección del transporte (UDP frente a TCP) puede afectar las garantías de entrega y cómo el dispositivo se recupera de conectividad intermitente.
- Para funciones que dependen de datos del bus del vehículo (nivel de combustible, códigos DTC), la disponibilidad depende de la marca y modelo del vehículo y de cómo su bus expone esos valores.
- Siempre valide la compatibilidad y el comportamiento actual frente a la documentación oficial del fabricante al planificar despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el CC-688 se comunica con Plaspy ayuda a asegurar una configuración confiable, facilita la resolución de problemas y permite un comportamiento operativo predecible para flotas y escenarios de alquiler.

- Acelera el onboarding de dispositivos al garantizar que apunten al endpoint y a los ajustes de transporte correctos.
- Ayuda a diagnosticar problemas de conectividad relacionados con la selección de transporte, la configuración del APN o restricciones del carrier.
- Permite a los operadores entender qué telemetría y tipos de eventos estarán disponibles en los paneles de Plaspy para informes y automatizaciones.
- Apoya prácticas operativas seguras al clarificar cómo fluyen los comandos de control y la telemetría entre el dispositivo y el servidor.
- Mejora la planificación de mantenimiento a largo plazo al resaltar cómo las actualizaciones de firmware y los cambios de hardware pueden afectar la integración.

## Por qué usar Plaspy con este protocolo

Combinar el Carscop CC-688 con Plaspy ofrece una vía práctica para obtener visibilidad del vehículo en tiempo real, capacidades de control remoto y telemetría consolidada para servicios de flota y movilidad. La combinación de posicionamiento GNSS, telemetría CANBUS y OBD II, eventos de BLE/NFC y salidas de actuadores permite a los operadores implementar flujos de trabajo para alquiler sin supervisión, mitigación de robo y mantenimiento predictivo con gestión centralizada de dispositivos.

Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos como el CC-688 y revisar las funciones de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica y más reciente del protocolo del dispositivo con el fabricante en http://www.carscop.com/.
