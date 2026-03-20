---
slug: /topshine/mt01_4g/protocol
id: mt01_4g-protocol
sidebar_label: Protocol
title: TopShine - MT01-4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TopShine MT01-4G para integrarlo con Plaspy, con contexto de conexión y compatibilidad
keywords:
  - Protocolo TopShine MT01-4G
  - Protocolo GPS TopShine MT01-4G
  - TopShine MT01-4G Plaspy
  - Protocolo de rastreo MT01-4G
  - Protocolo rastreador GPS TopShine
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreo de vehículos TopShine
  - Protocolo GPS para flotas
  - Rastreo sensor ultrasónico de combustible
  - Protocolo inmovilizador por relé
---

# TopShine - MT01-4G Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador TopShine MT01-4G con Plaspy. Resume cómo se comunica el dispositivo con los servidores de Plaspy en términos generales, qué puntos finales y transportes se emplean, y cómo esa comunicación soporta el seguimiento en tiempo real, la telemetría de combustible, la identificación de conductores y los flujos de inmovilización sin exponer detalles privados de implementación.

El TopShine MT01-4G es un rastreador compacto 4G LTE con soporte para sensor de combustible ultrasónico, identificación de conductor por iButton, control por relé para inmovilización, voz bidireccional y un amplio rango de entrada de 9 a 90 V. Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte siempre la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

El protocolo usado por el MT01-4G define cómo el rastreador se identifica, reporta posición y telemetría, y envía eventos de alarma o estado a una plataforma remota de gestión de flotas como Plaspy. Para la integración con Plaspy esto significa que el rastreador debe estar configurado para reportar al endpoint de Plaspy y enviar los elementos de telemetría estándar que la plataforma espera.

- Permite transmisiones periódicas y por eventos de posiciones GPS y datos de movimiento a Plaspy.
- Transporta telemetría del vehículo como lecturas de nivel de combustible del sensor ultrasónico, estado de ignición y alarmas de sensores hacia la plataforma.
- Permite que el dispositivo incluya información identificadora para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Soporta intercambios de comando y control donde la plataforma puede enviar solicitudes de control, como activación de relé, cuando el rastreador lo admite.
- Transporta condiciones de alarma y actualizaciones de estado para que Plaspy pueda generar alertas, registros e informes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y usa las características de esos mensajes para determinar el manejo correcto del dispositivo. En la mayoría de configuraciones usted solo necesita apuntar el rastreador hacia Plaspy; la plataforma realiza la detección de protocolo automáticamente.

- El endpoint del servidor Plaspy para reporte de dispositivos es d.plaspy.com con IP pública 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y usa el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido.
- En general usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está reportando correctamente al endpoint de Plaspy.
- La identificación correcta del dispositivo en la primera conexión garantiza que Plaspy asocie los datos con el perfil de vehículo y los mapeos de telemetría adecuados.

## Transporte y contexto de conexión

El MT01-4G puede configurarse para usar UDP o TCP como transporte, según el soporte del dispositivo y las preferencias de configuración. La conectividad exitosa requiere apuntar el dispositivo al endpoint de reporte de Plaspy y hacer coincidir el transporte y el puerto que espera el firmware del rastreador.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP 54.85.159.138.
- El rastreador puede usar UDP o TCP en el puerto 8888 según el firmware y la configuración.
- Todos los dispositivos en Plaspy usan el mismo número de puerto para reportar a la plataforma.
- Consideraciones a nivel de red como NAT del operador, reglas de firewall y ajustes de APN pueden afectar la conectividad con el endpoint de Plaspy.
- Al configurar múltiples dispositivos, asegúrese de mantener consistencia en transporte y endpoint según el método de configuración proporcionado por el fabricante.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware pueden cambiar la cadencia de mensajes, los campos de telemetría disponibles y los transportes soportados entre revisiones del equipo.
- Revisiones de hardware o módulos de sensores opcionales, como sensores ultrasónicos de combustible o lectores de iButton, pueden alterar el conjunto de elementos de telemetría reportados.
- Métodos de configuración proporcionados por el fabricante, como SMS, herramientas web del proveedor o FOTA, pueden ser necesarios para habilitar el reporte a Plaspy en algunas unidades.
- Seleccionar TCP frente a UDP puede afectar la entrega bajo condiciones de red pobres; elija el transporte que su flujo operativo y el firmware del dispositivo admitan.
- Plaspy realiza detección automática de protocolo, pero la identificación correcta del dispositivo y la configuración inicial son importantes para un onboarding fiable.
- Verifique siempre la compatibilidad y el soporte de funciones contra la documentación del dispositivo suministrada por el fabricante.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el MT01-4G ayuda en la configuración inicial, el diagnóstico de conectividad y en asegurar que la telemetría llegue de forma fiable a Plaspy. Saber las expectativas de conexión y el papel del firmware y el hardware en los campos reportados reduce el tiempo de puesta en marcha y facilita que los equipos de operaciones detecten problemas con mayor rapidez.

- Acelera el onboarding al asegurar que los dispositivos apunten al endpoint y transporte correctos de Plaspy.
- Ayuda a diagnosticar problemas de conectividad relacionados con APN, NAT del operador o puertos bloqueados.
- Aclara qué elementos de telemetría esperar en los paneles y reportes de Plaspy según el firmware y la configuración de sensores.
- Informa decisiones sobre el uso de TCP o UDP según necesidades operativas específicas.
- Apoya la planificación de actualizaciones de firmware y revisiones de hardware que puedan cambiar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el TopShine MT01-4G con Plaspy brinda a los operadores de flota visibilidad consolidada de ubicación, telemetría de combustible, identidad del conductor y controles de inmovilización dentro de una sola plataforma. La combinación de monitoreo continuo de combustible mediante sensores ultrasónicos, vinculación de conductor por iButton, control de inmovilizador por relé y diseño de alimentación robusto hace que el MT01-4G sea adecuado para flotas mixtas donde el seguimiento de combustible y las medidas anticlonación son prioritarias.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el MT01-4G visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware e información sobre revisiones de hardware, verifique la documentación actual en la web del fabricante https://www.gztopshine.com/ ya que el soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo.
