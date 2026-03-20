---
slug: /telic/sbc3_can/protocol
id: sbc3_can-protocol
sidebar_label: Protocol
title: Telic - SBC3 CAN Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Telic SBC3 CAN y cómo se comunica con Plaspy para telemática de flotas
keywords:
  - Protocolo Telic SBC3 CAN
  - Protocolo GPS Telic SBC3 CAN
  - Comunicación Telic SBC3 CAN
  - Rastreador SBC3 CAN Plaspy
  - Protocolo rastreador GPS Telic
  - Seguimiento vehicular SBC3 CAN
  - Seguimiento bus CAN Telic
  - Compatibilidad dispositivo Plaspy
  - Seguimiento de flotas Telic SBC3
  - Telemática SBC3 CAN
---

# Telic - Protocolo SBC3 CAN

Esta página describe el contexto público del protocolo para usar el rastreador Telic SBC3 CAN con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué ajustes de conexión espera Plaspy y notas prácticas que ayudan en la integración y solución de problemas, sin exponer detalles internos sensibles o propietarios del protocolo.

El Telic SBC3 CAN es un dispositivo telemático versátil con interfaces RS232, 1 wire y bus CAN; está disponible con antenas internas o externas y una batería opcional de 4 Ah para operación prolongada. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

A alto nivel, el protocolo del rastreador define cómo el SBC3 CAN informa posición, datos de la interfaz del vehículo y estado a un servidor remoto, y cómo puede aceptar comandos de configuración cuando está soportado. La visión pública del protocolo permite la transmisión fiable de datos telemáticos útiles mientras deja espacio para que el fabricante evolucione detalles de implementación en actualizaciones de firmware.

- Informa telemetría del vehículo desde GPS y de interfaces como CAN y RS232
- Incluye identidad y estado del equipo para que Plaspy pueda asociar los mensajes entrantes con un dispositivo específico
- Usa una capa de transporte para entregar datos de ubicación y sensores al endpoint de Plaspy para su procesamiento
- Permite opciones de configuración remota expuestas por el fabricante cuando el dispositivo lo soporta
- Facilita que Plaspy traduzca los reportes en información operativa y datos de monitoreo de flotas

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de dispositivos en un único endpoint y puerto compartidos y aplica detección automática para identificar el protocolo del rastreador en uso. Para la mayoría de las implementaciones SBC3 CAN, usted solo debe configurar el dispositivo para que reporte al endpoint de Plaspy; la plataforma se encarga del reconocimiento del protocolo sin necesidad de selección manual.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la IP pública del servidor 54.85.159.138
- Todos los dispositivos configurados para Plaspy reportan al mismo puerto, que es el 8888
- Plaspy soporta reportes por UDP y TCP en el puerto 8888 según la configuración del equipo
- La detección automática hace que normalmente usted no necesite elegir un protocolo dentro de Plaspy si el dispositivo apunta al endpoint de la plataforma
- Una identidad de dispositivo correcta y intervalos de reporte consistentes mejoran la detección y el éxito en el onboarding

## Transporte y contexto de conexión

Las opciones de transporte y conexión determinan cómo el SBC3 CAN envía sus reportes a Plaspy. Los elementos de configuración pública que Plaspy espera son intencionalmente simples para que una amplia gama de dispositivos pueda integrarse con un endpoint común.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita su firmware y ajustes
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y las reglas de firewall
- Elegir UDP puede reducir la sobrecarga en actualizaciones frecuentes de ubicación, mientras que TCP puede ser preferible cuando se requiere entrega fiable y el dispositivo lo soporta
- Verifique el enrutamiento de red y la configuración del firewall para permitir que el tráfico del dispositivo llegue al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato o las marcas de tiempo de la telemetría; consulte las notas de versión del firmware al diagnosticar diferencias
- Las revisiones de hardware y módulos opcionales (antenas externas, variantes de batería) pueden afectar comportamiento de radio y consumo, sin alterar el endpoint de Plaspy
- Los menús de configuración del fabricante pueden exponer opciones de transporte (UDP/TCP) y parámetros de servidor predeterminados que deben actualizarse a los ajustes de Plaspy
- En caso de duda, confirme que el equipo reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar que llegue a Plaspy
- Algunas funciones del dispositivo expuestas via CAN o RS232 pueden requerir configuración específica para incluirse en los reportes regulares
- Valide la compatibilidad con la documentación del fabricante para comandos y pasos de configuración específicos del dispositivo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una incorporación fluida, reportes confiables y una resolución de problemas más rápida cuando un equipo no se comporta como se espera. Conocer cómo se entregan los datos y qué factores influyen en los reportes permite a administradores e integradores tomar decisiones de configuración informadas.

- Acelera la configuración inicial al enfocarse en la dirección de servidor y los ajustes de transporte correctos
- Simplifica la resolución de problemas al acotar los problemas a la red, la capa de transporte o el firmware
- Permite establecer expectativas sobre la vida útil de la batería y la frecuencia de reportes al usar variantes de energía opcionales
- Mejora el diagnóstico al combinar datos de posición GPS con telemetría del bus CAN y señales del vehículo
- Ayuda a planificar actualizaciones de firmware y verificar que el comportamiento nuevo siga alineado con la ingestión de Plaspy

## Por qué usar Plaspy con este protocolo

El Telic SBC3 CAN ofrece una plataforma de hardware robusta para telemática vehicular con acceso al bus CAN y a interfaces auxiliares que muchas operaciones de flota requieren. Usar Plaspy para ingerir y procesar los reportes del SBC3 CAN brinda a las organizaciones una vista consolidada de ubicación, estado y datos de interfaz del vehículo sin que tengan que gestionar el parseo del protocolo internamente.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configuración y permiten que los equipos se concentren en casos de uso operativos como enrutamiento, alertas de mantenimiento y monitoreo de cumplimiento. Para saber más sobre Plaspy y los flujos de trabajo con dispositivos soportados visite https://www.plaspy.com. Verifique siempre los detalles específicos del protocolo y el comportamiento del firmware con el fabricante en https://www.telic.de, ya que el soporte de protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
