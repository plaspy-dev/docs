---
slug: /xirgo/xt49/protocol
id: xt49-protocol
sidebar_label: Protocol
title: Xirgo - XT49 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Xirgo XT49 con Plaspy y rastreo remoto fiable de activos
keywords:
  - protocolo Xirgo XT49
  - protocolo GPS Xirgo XT49
  - compatibilidad XT49 Plaspy
  - comunicación del rastreador Xirgo
  - protocolo de rastreo XT49
  - integración de dispositivo Plaspy
  - soporte rastreador GPS Plaspy
  - rastreo remoto de activos XT49
  - rastreador GPS solar
  - rastreador de activos LTE XT49
---

# Xirgo - Protocolo XT49

Esta página describe el contexto público del protocolo para usar el rastreador GPS Xirgo XT49 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo con Plaspy para que gerentes de flota e integradores técnicos comprendan el papel del protocolo de reporte en una integración y operación exitosas.

El XT49 es un rastreador resistente, alimentado por energía solar y con conectividad LTE, pensado para despliegues remotos de larga duración. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como una visión práctica del protocolo y consulte la documentación de Xirgo para detalles específicos por modelo y firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el XT49 se identifica ante un backend, envía ubicación y telemetría operativa, y admite comandos del servidor o acuses de recibo cuando procede. Para dispositivos remotos y de bajo mantenimiento como el XT49, el protocolo se centra principalmente en reportes periódicos eficientes y en la entrega fiable sobre redes celulares.

- Permite al XT49 transmitir actualizaciones de ubicación y estado operativo a una plataforma backend como Plaspy.
- Transporta campos de telemetría útiles para el monitoreo de activos, como posición GPS, estado de batería y carga solar, y eventos de movimiento.
- Proporciona un método para que el dispositivo se identifique y Plaspy asocie la telemetría entrante con el registro de activo correcto.
- Soporta intervalos de reporte configurables para equilibrar resolución de rastreo y duración de batería en despliegues de largo plazo.
- Facilita mensajes basados en eventos, como detección de movimiento o alertas por manipulación, que pueden activar notificaciones dentro de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar telemetría de muchos modelos comunes de rastreadores manteniendo la configuración simple para los administradores. La plataforma escucha en un endpoint y puerto compartidos y determina automáticamente el protocolo apropiado cuando recibe datos, lo que reduce pasos de configuración manual para muchos usuarios.

- Plaspy usa un único endpoint de servidor y puerto compartidos para las conexiones de dispositivos, simplificando la configuración del lado del equipo.
- Los dispositivos apuntados al endpoint de Plaspy por lo general no requieren selección manual de protocolo dentro de la plataforma si están correctamente configurados para reportar a Plaspy.
- Plaspy inspecciona las conexiones y la telemetría entrante para mapear los datos al registro de dispositivo correcto sin intervención del usuario.
- La detección automática agiliza la incorporación en flotas heterogéneas que incluyen dispositivos como el XT49.
- Si hay problemas de conexión, verificar la configuración del dispositivo y el firmware es un primer paso práctico antes de cambiar ajustes en Plaspy.

## Contexto de transporte y conexión

El XT49 reporta a través de redes celulares y puede configurarse para usar UDP o TCP según el soporte del dispositivo y el comportamiento del operador. Plaspy acepta ambos tipos de transporte en el mismo puerto compartido, por lo que los dispositivos pueden usar el protocolo y transporte que mejor se adapten a su despliegue y perfil de consumo energético.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto TCP o UDP 8888 para reportes.
- El XT49 puede configurarse para enviar datos por UDP o TCP al endpoint de Plaspy según ajustes del dispositivo y condiciones de red.
- El uso del puerto compartido simplifica la configuración y reduce la gestión de puertos por dispositivo.
- Confirme los ajustes de transmisión y la configuración APN en el XT49 para que pueda alcanzar d.plaspy.com o la IP indicada arriba.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden agregar, eliminar o cambiar campos de telemetría y el comportamiento de reporte; verifique la versión de firmware del XT49 al validar compatibilidad.
- Revisiones de hardware y variantes regionales pueden modificar las bandas soportadas o el comportamiento de transporte; consulte los detalles del modelo del proveedor para su región.
- Algunos despliegues prefieren UDP por su menor sobrecarga, mientras que otros usan TCP por su entrega fiable; asegúrese de que la configuración de transporte del XT49 se ajuste a sus necesidades.
- Las opciones de configuración del fabricante y los comportamientos por defecto pueden variar; la configuración de fábrica puede no coincidir con las expectativas de Plaspy hasta que se ajuste.
- Siempre verifique que el dispositivo esté reportando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que el transporte elegido sea compatible con su operador.
- En caso de duda, consulte la documentación de producto de Xirgo para notas específicas del dispositivo antes de realizar cambios operativos.

## Por qué es importante entender el protocolo

Conocer los fundamentos de cómo se comunica el XT49 ayuda en la configuración, solución de problemas y mantenimiento de telemetría fiable en despliegues a largo plazo. Entender el contexto del protocolo le permite tomar decisiones informadas sobre intervalos de reporte, selección de transporte y qué telemetría esperar en Plaspy.

- Ayuda a diagnosticar problemas de conectividad confirmando endpoint del dispositivo, transporte y ajustes APN.
- Informa decisiones de gestión de energía, como la frecuencia de reporte para extender la vida de la batería en unidades dependientes de energía solar.
- Aclara qué campos de telemetría deberían aparecer en Plaspy para que alertas e informes se configuren correctamente.
- Apoya la planificación de actualizaciones de firmware y cambios previsibles en el comportamiento de la telemetría.
- Reduce el tiempo de incorporación de nuevos dispositivos al centrar las comprobaciones en la red y la configuración de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT49 con Plaspy ofrece una solución de rastreo duradera y de bajo mantenimiento para contenedores, semirremolques de larga distancia y activos remotos. La combinación de recolección de energía solar y conectividad LTE hace que el XT49 sea adecuado para despliegues de larga duración, mientras que Plaspy ingiere la telemetría para proporcionar ubicación en tiempo real, alertas e informes históricos para la supervisión operativa.

To learn more about how Plaspy can manage XT49 telemetry and support your asset tracking program visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions confirm the official information on the manufacturer website https://xirgo.com/. Protocol support and firmware behavior can change over time so verifying current documentation from the manufacturer is recommended.
