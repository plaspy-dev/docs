---
slug: /globalsat/gtr_388c1/protocol
id: gtr_388c1-protocol
sidebar_label: Protocol
title: GlobalSat - GTR-388C1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GlobalSat GTR-388C1 para compatibilidad con Plaspy en rastreo y telemetría en tiempo real
keywords:
  - Protocolo GlobalSat GTR 388C1
  - Protocolo GPS GTR 388C1
  - Protocolo de seguimiento GlobalSat
  - Compatibilidad GTR 388C1 Plaspy
  - Comunicación rastreador GPS
  - Protocolo rastreador eBike
  - Rastreador motocicleta Plaspy
  - Protocolo gestión de flotas
  - Protocolo GPS vehículo compacto
  - Guía conectividad rastreador
---

# GlobalSat - Protocolo del GTR-388C1

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GlobalSat GTR-388C1 con la plataforma Plaspy. Resume cómo el dispositivo comunica ubicación, telemetría y eventos de E/S hacia Plaspy sin exponer lógica privada de parseo ni detalles internos de firmware. El contenido está dirigido a ingenieros de flotas, integradores y usuarios técnicos que necesiten entender el papel de la comunicación en la integración con Plaspy.

El GTR-388C1 es un rastreador compacto y resistente, optimizado para eBikes, motocicletas y vehículos pequeños, con conectividad 4G LTE Cat 1 y conmutación automática a 3G y 2G. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Para conjuntos de comandos específicos y comportamiento de firmware, consulte siempre la documentación oficial del fabricante.

## Visión general del protocolo

El protocolo de comunicación del GTR-388C1 define cómo se reportan los fixes GNSS, los eventos de E/S y la telemetría desde el dispositivo hacia una plataforma backend como Plaspy. En términos generales, el protocolo permite reportes de posición fiables, señalización de eventos y configuración remota opcional sin necesidad de conocer los formatos internos de los paquetes.

- Transmite posiciones GNSS y telemetría con marcas de tiempo, permitiendo el rastreo en vivo y la ingesta del historial de rutas en Plaspy.
- Reporta eventos digitales y analógicos de E/S, como el estado de ignición ACC, pulsaciones de botón de emergencia y lecturas de sensores analógicos para integrarlos en alarmas e informes.
- Soporta mecanismos de fallback en transporte para que los mensajes se entreguen por los enlaces celulares disponibles y se enrutuen a Plaspy para un procesamiento consistente.
- Permite la configuración remota y los disparadores de gestión de firmware a través de canales soportados por el fabricante, mientras Plaspy procesa el estado reportado.
- Facilita flujos de trabajo antirobo y control de relés al entregar comandos de E/S y actualizaciones de estado que Plaspy puede mostrar a los usuarios.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo entrante de los rastreadores soportados. Cuando usted configure un GTR-388C1 para reportar a Plaspy, la plataforma identificará el formato del dispositivo y procesará los mensajes sin que normalmente sea necesaria la selección manual del protocolo.

- Plaspy escucha en el endpoint compartido del servidor d.plaspy.com y en la dirección IP asociada 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de unidades.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los reportes entrantes, por lo que los usuarios normalmente no necesitan elegir un protocolo dentro de Plaspy si el dispositivo está configurado correctamente.
- La configuración adecuada del dispositivo para apuntar los reportes al endpoint de Plaspy es el requisito principal para la detección automática.
- Si un dispositivo está mal configurado o utiliza una variante de firmware no soportada, la detección puede no completarse y se recomienda verificar la configuración del dispositivo.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el rastreador alcanza el endpoint de Plaspy más que el contenido interno de los frames. El GTR-388C1 soporta múltiples opciones de transporte, y la elección correcta puede depender de la cobertura del operador, las capacidades de la SIM y las opciones de configuración del dispositivo.

- El GTR-388C1 puede configurarse para enviar reportes a d.plaspy.com o a la dirección IP 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP para reportes según la configuración y el comportamiento de la red; Plaspy acepta ambos transportes en el mismo puerto.
- Plaspy utiliza el puerto 8888 para reportes y gestión de dispositivos; este es el puerto común para todos los dispositivos en la plataforma.
- La familia de dispositivos soporta reporte por HTTP y SMS como canales alternativos, útiles cuando TCP o UDP no están disponibles.
- Seleccionar TCP o UDP puede afectar las garantías de entrega y la latencia; elija el transporte que mejor se adapte a su despliegue y a la confiabilidad del operador.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir o cambiar campos y características visibles en los reportes; valide la compatibilidad para la revisión de firmware que desplegará.
- Las revisiones de hardware y los accesorios pueden alterar los canales de E/S o de telemetría disponibles, así que verifique el SKU del modelo y el arnés antes del despliegue.
- Las opciones de configuración del fabricante pueden permitir reporte por TCP, UDP, HTTP o SMS. Confirme que el transporte de reporte coincide con los ajustes del endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo entrante, pero es esencial que el endpoint, puerto y transporte estén correctamente configurados en el dispositivo para que la detección tenga éxito.
- Para funciones avanzadas como control remoto de relés o calibración de sensores analógicos, confirme tanto la capacidad del dispositivo como que Plaspy tenga habilados los mapeos de telemetría correspondientes.
- Verifique siempre el comportamiento específico del dispositivo y las bandas soportadas, variantes regionales o restricciones de operador contra la documentación oficial de GlobalSat.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el GTR-388C1 ayuda a una puesta en marcha confiable, a la resolución de problemas y a la operación a largo plazo en Plaspy. Conocer las características del protocolo a alto nivel reduce el tiempo de integración y aclara las expectativas sobre la entrega de datos y el manejo de eventos.

- Acelera la provisión inicial al asegurar que los dispositivos apunten al endpoint y transporte correctos de Plaspy.
- Ayuda a diagnosticar problemas de conectividad enfocándose en transporte, SIM y ajustes del endpoint en lugar de detalles internos del parser.
- Mejora la planificación de confiabilidad al elegir el modo de transporte más apropiado para el entorno de despliegue.
- Permite el manejo correcto de eventos de E/S en los paneles y alertas de Plaspy al emparejar las señales del dispositivo con la telemetría de la plataforma.
- Apoya la gestión del ciclo de vida al indicar dónde los cambios de firmware y hardware pueden afectar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el GTR-388C1 con Plaspy proporciona a las organizaciones rastreo en tiempo real compacto y resistente, integrado con una plataforma que ingiere ubicación, E/S y telemetría para paneles, alertas e informes. El dispositivo es adecuado para eBikes, motocicletas y vehículos pequeños donde la impermeabilidad, la persistencia de batería de respaldo y la eficiencia energética son importantes.

Plaspy simplifica la incorporación de dispositivos al aceptar reportes en un único endpoint y puerto compartidos, y al detectar automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado. Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos GlobalSat visite https://www.plaspy.com. Verifique también el soporte actual del protocolo específico del dispositivo, el comportamiento del firmware y los detalles de implementación en el sitio del fabricante https://www.globalsat.com.tw/ ya que esos detalles pueden cambiar con el tiempo.
