---
slug: /teltonika/fmb640_fmb641/protocol
id: fmb640_fmb641-protocol
sidebar_label: Protocol
title: Teltonika - FMB640-FMB641 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para la conexión de Teltonika FMB640 y FMB641 con Plaspy, incluye transporte y notas de compatibilidad
keywords:
  - protocolo Teltonika FMB640
  - protocolo Teltonika FMB641
  - protocolo FMB640 FMB641
  - compatibilidad FMB640 Plaspy
  - compatibilidad FMB641 Plaspy
  - protocolo rastreador GPS Teltonika
  - protocolo seguimiento de vehículos
  - protocolo gestión de flotas
  - compatibilidad dispositivos Plaspy
  - protocolo de comunicación Teltonika
---

# Teltonika - Protocolo FMB640 y FMB641

Esta página ofrece el contexto público del protocolo para usar los rastreadores GPS Teltonika FMB640 y FMB641 con la plataforma Plaspy. Describe el papel del protocolo de comunicación del dispositivo para establecer reportes confiables a Plaspy y resume la información práctica necesaria para configurar el equipo y que envíe datos a los servidores de Plaspy. Las características técnicas de estas unidades incluyen soporte CAN y de tacógrafo, múltiples interfaces seriales, conectividad Dual SIM o eSIM y varias opciones de sensores y modos de reposo comúnmente utilizadas en entornos profesionales de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento preciso del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento real puede diferir entre unidades y con el tiempo. Las recomendaciones generales en esta página están pensadas para ayudarle a configurar y validar la conectividad sin exponer detalles internos o propietarios del protocolo.

## Resumen del protocolo

El protocolo utilizado por los Teltonika FMB640 y FMB641 es el mecanismo de reporte del dispositivo que transporta telemetría, diagnóstico e información de eventos hacia Plaspy. En la práctica, este protocolo permite que el rastreador se identifique ante un servidor, transmita posiciones GNSS, datos de sensores y CAN, y entregue alertas que habilitan la monitorización de flotas y los flujos operativos.

- Transmite posición, sello de tiempo y estado de movimiento para que Plaspy muestre ubicación y detalles de los recorridos.
- Envía datos del vehículo y de sensores como valores CAN, lecturas de combustible y entradas externas como campos de telemetría.
- Entrega notificaciones de eventos para geocerca, exceso de velocidad, remolque, detección de choque y otras alertas configuradas.
- Permite configuración remota y actualizaciones de firmware mediante las herramientas del fabricante mientras el reporte en tiempo de ejecución se envía a Plaspy.
- Facilita la integración de periféricos de terceros conectados por RS232, RS485 o 1-Wire reenviando los datos al canal de reporte.

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un único endpoint y puerto compartido para el reporte de rastreadores y aplica detección automática de protocolo cuando recibe datos. Cuando un equipo correctamente configurado reporta al endpoint de Plaspy, la plataforma compara los datos entrantes con patrones de protocolos conocidos y procesa la telemetría sin requerir la selección manual del protocolo dentro de Plaspy.

- Apunte el rastreador al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para el reporte.
- Use el puerto común de Plaspy 8888 para el envío de datos; todos los dispositivos en Plaspy usan este mismo puerto.
- Plaspy acepta conexiones tanto UDP como TCP según lo soporte el dispositivo y la red.
- La detección automática normalmente elimina la necesidad de elegir un nombre de protocolo en Plaspy si el dispositivo está configurado para reportar correctamente.
- Valide el reporte del dispositivo revisando sesiones en vivo y los mensajes iniciales tras la configuración para confirmar que el equipo fue reconocido.

## Transporte y contexto de conexión

Las decisiones de transporte y la configuración de red afectan cómo un rastreador alcanza Plaspy, pero no cambian el propósito general del protocolo. El FMB640 y el FMB641 soportan múltiples modos de transporte y comportamientos de red configurables que deben adaptarse al entorno donde operará el equipo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del equipo y la preferencia del instalador.
- Los rastreadores pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para alcanzar el endpoint de ingestión de Plaspy.
- Las configuraciones Dual SIM o eSIM en los equipos mejoran la resiliencia de conectividad cuando la cobertura celular varía.
- Asegúrese de que los firewalls y las políticas NAT permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 desde las redes donde están los dispositivos.
- Para diagnósticos remotos, confirme que los comandos SMS o la configuración por GPRS puedan llegar a la unidad para actualizar los parámetros del servidor si es necesario.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar mensajes y campos disponibles; funciones presentes en una versión pueden no existir en otra.
- Las revisiones de hardware, como mejoras en el procesador del FMB641 y terminadores CAN conmutables, pueden afectar cómo se reportan los datos CAN y de periféricos.
- La selección de transporte entre UDP y TCP puede influir en el comportamiento de entrega bajo condiciones de red adversas; elija según necesidades de fiabilidad y manejo de datos.
- Las herramientas de configuración del fabricante, comandos SMS y actualizaciones FOTA pueden cambiar parámetros de reporte y deben usarse con precaución.
- La integración de periféricos vía RS232, RS485 o 1-Wire puede requerir ajustes específicos en el dispositivo para incluir esos datos en los reportes a Plaspy.
- Siempre valide un dispositivo de muestra de extremo a extremo después de cualquier cambio de configuración para confirmar que Plaspy recibe la telemetría esperada.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador reduce el tiempo de instalación y mejora la confiabilidad a largo plazo al integrar dispositivos Teltonika FMB640 o FMB641 con Plaspy. Conocer qué transporta el protocolo y cómo el dispositivo se conecta a Plaspy ayuda en la resolución de problemas, planificación de funciones y en asegurar telemetría correcta en los flujos de trabajo de la flota.

- Acelera la configuración inicial al enfocarse en el endpoint correcto del servidor y en los ajustes de transporte.
- Ayuda a aislar problemas de conectividad frente a errores de configuración del equipo o restricciones de red.
- Aclara qué funciones del dispositivo aparecerán en Plaspy según el firmware y la configuración de periféricos.
- Permite comportamiento predecible durante actualizaciones de firmware y al desplegar equipos a escala.
- Favorece la colaboración entre equipos de instalación, TI y operaciones al diagnosticar incidencias de reporte.

## Por qué usar Plaspy con este protocolo

Usar los dispositivos Teltonika FMB640 o FMB641 con Plaspy ofrece una vía práctica para incorporar telemetría robusta en un flujo centralizado de gestión de flotas. Estos rastreadores proporcionan conjuntos de datos vehiculares completos y opciones de periféricos que Plaspy puede ingerir para entregar información de ubicación, eventos y operación para logística, construcción, agricultura y otras industrias que requieren monitoreo fiable.

Para obtener más información sobre Plaspy y cómo funciona con una amplia gama de rastreadores, visite https://www.plaspy.com. Para el comportamiento del protocolo específico del dispositivo, notas de firmware e instrucciones de configuración más actuales y detalladas, consulte la documentación del fabricante en https://www.teltonika-gps.com/ ya que el soporte del protocolo y los detalles de implementación del dispositivo pueden cambiar con el tiempo.
