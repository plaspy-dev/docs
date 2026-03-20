---
slug: /arknav/ir_7/protocol
id: ir_7-protocol
sidebar_label: Protocol
title: ArkNav - IR-7 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador híbrido ArkNav IR-7 y su comunicación con Plaspy
keywords:
  - Protocolo ArkNav IR-7
  - Protocolo GPS ArkNav IR-7
  - ArkNav IR-7 Plaspy
  - Protocolo de rastreo IR-7
  - Protocolo de rastreador ArkNav
  - Rastreador híbrido satelital GSM
  - Rastreador con Iridium
  - Rastreo de flotas ArkNav
  - Protocolo de rastreo de vehículos
  - Compatibilidad de dispositivos Plaspy
---

# ArkNav - Protocolo IR-7

Esta página resume el contexto público del protocolo para usar el rastreador ArkNav IR-7 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué papel juega el protocolo de reporte del rastreador en la interoperabilidad y qué verificar cuando se apunta un IR-7 a la plataforma Plaspy. El contenido está dirigido a usuarios técnicos e integradores y busca aclarar las expectativas de conexión sin exponer detalles privados de implementación.

El IR-7 es un rastreador híbrido satelital-GSM diseñado para cobertura global mediante la red Iridium junto con conectividad GSM. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique siempre el comportamiento específico del dispositivo con la documentación del fabricante al planificar despliegues.

## Visión general del protocolo

El protocolo de comunicación del IR-7 regula cómo el dispositivo se identifica, reporta posición y estado, y alterna entre redes disponibles para mantener reportes continuos. El protocolo permite que Plaspy reciba telemetría que puede mapearse en actualizaciones de ubicación, alertas y estados de sensores para la gestión de flotas y activos.

- Permite la identificación del dispositivo y el establecimiento de sesiones para que Plaspy asocie mensajes a un rastreador específico.
- Transporta telemetría como ubicación GPS, marcas de tiempo, estado de alimentación y entradas de sensores para monitoreo operativo.
- Soporta comportamiento de transporte híbrido para permitir el cambio entre enlaces GSM e Iridium según la disponibilidad de señal.
- Asegura persistencia de mensajes y reenvío para que los datos lleguen al servidor pese a conectividad intermitente.
- Funciona junto con controles de configuración del dispositivo para permitir actualizaciones remotas y ajustes en la frecuencia de reporte.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy y usa los mismos ajustes de servidor para todos los dispositivos soportados. En la mayoría de instalaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el IR-7 está configurado para reportar al endpoint de la plataforma.

- Plaspy recibe los reportes de los dispositivos en el dominio de servidor compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para conexiones entrantes de dispositivos, que es el 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Cuando un IR-7 correctamente configurado reporta al endpoint de Plaspy, éste detectará el formato de reporte y procesará los datos entrantes automáticamente.
- Usted típicamente solo necesita confirmar que el dispositivo apunta al endpoint de Plaspy y que el transporte de red coincide con las capacidades del dispositivo.

## Transporte y contexto de conexión

Los detalles de conexión y transporte determinan cómo el IR-7 alcanza los servidores de Plaspy. El IR-7 soporta múltiples rutas de comunicación y puede configurarse para usar el transporte más fiable según el escenario de despliegue. Considere el contexto de conexión al aprovisionar dispositivos y validar que los mensajes lleguen a Plaspy.

- El IR-7 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o a la dirección numérica 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los rastreadores soportados para simplificar la configuración y el enrutamiento de dispositivos.
- La operación híbrida significa que el rastreador puede cambiar automáticamente de GPRS GSM a reporte por satélite Iridium cuando cambian las condiciones de señal.
- Asegúrese de que las reglas de firewall y de red permitan conexiones salientes hacia el servidor de Plaspy en el puerto 8888 para el protocolo de transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden alterar el contenido de los mensajes, los campos disponibles y el comportamiento de reporte; verifique la compatibilidad con el firmware exacto instalado en cada IR-7.
- Las revisiones de hardware y los módulos opcionales pueden cambiar los sensores, las entradas y las capacidades de transporte disponibles, lo que afecta el comportamiento del protocolo.
- Las opciones de configuración del fabricante pueden habilitar o deshabilitar modos de reporte como SMS, GPRS o satélite, lo que influye en la interacción del dispositivo con Plaspy.
- Elegir UDP o TCP altera las características de entrega; seleccione el transporte que coincida con la configuración del dispositivo y la fiabilidad de la red.
- Valide siempre que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 antes de confiar en la detección automática.
- Confirme cualquier restricción de sitio o de operador que pueda bloquear conexiones satelitales o celulares necesarias para la operación híbrida.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del IR-7 y del contexto de transporte acelera la configuración de los dispositivos, reduce el tiempo de resolución de problemas y mejora la fiabilidad a largo plazo al usar Plaspy. Saber qué envía el rastreador y cómo se conecta ayuda en el diagnóstico y la configuración durante el despliegue.

- Ayuda a asegurar que se apliquen correctamente los ajustes de servidor, transporte y red para que los dispositivos reporten con éxito a Plaspy.
- Simplifica la resolución de problemas cuando los mensajes se retrasan, faltan o muestran campos inesperados.
- Aclara cómo el cambio híbrido entre GSM e Iridium afecta la frecuencia de reporte y la latencia.
- Facilita una mejor planificación del consumo de energía, retención de mensajes y comportamiento de retransmisión en despliegues remotos.
- Ayuda a validar que las actualizaciones de firmware o cambios de configuración mantengan la compatibilidad con Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav IR-7 con Plaspy ofrece a las organizaciones una forma práctica de combinar el alcance satelital global y la eficiencia del GSM local en un único flujo de monitoreo. La detección automática de protocolos y el endpoint de conexión unificado de Plaspy reducen la complejidad de configuración para que los equipos puedan concentrarse en los conocimientos operativos en lugar de los detalles de conectividad de bajo nivel.

Para obtener más información sobre Plaspy y cómo admite rastreadores híbridos como el IR-7, visite https://www.plaspy.com. Para la orientación específica más actualizada sobre protocolos del dispositivo, notas de firmware y detalles de hardware, consulte la documentación del fabricante en https://www.arknavgps.com.tw/ ya que el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
