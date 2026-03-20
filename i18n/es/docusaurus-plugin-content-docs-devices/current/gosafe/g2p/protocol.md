---
slug: /gosafe/g2p/protocol
id: g2p-protocol
sidebar_label: Protocol
title: Gosafe - G2P Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del rastreador personal Gosafe G2P y su comunicación con Plaspy para reportes GPS confiables
keywords:
  - protocolo Gosafe G2P
  - protocolo GPS Gosafe G2P
  - compatibilidad Gosafe G2P Plaspy
  - protocolo de rastreo G2P
  - comunicación rastreador personal Gosafe
  - rastreador GPS G2P Plaspy
  - protocolo de reporte de dispositivo
  - compatibilidad rastreo de flotas
  - explicación protocolo rastreador GPS
  - integración de dispositivos Plaspy
---

# Gosafe - Protocolo G2P

Esta página describe el contexto público del protocolo para usar el rastreador personal Gosafe G2P con Plaspy. Se centra en cómo se comunica el G2P en términos generales, qué esperar al integrar el dispositivo con Plaspy y los ajustes de conexión que la plataforma requiere para un reporte fiable. El G2P es un rastreador compacto pensado para monitoreo familiar y laboral; soporta comandos SMS sencillos y reportes a plataforma para actualizaciones de ubicación en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el G2P puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece un panorama público y de alto nivel en lugar de detalles internos o comportamientos específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación del Gosafe G2P define cómo el rastreador se identifica, cómo reporta datos de ubicación y estado, y cómo recibe comandos de configuración remota. En el contexto de la integración con Plaspy, la función del protocolo es entregar datos de posición y telemetría utilizables para que Plaspy muestre ubicación, alertas e historial a los usuarios finales.

- Permite al G2P reportar coordenadas GPS y estado del dispositivo para que Plaspy los ingiera
- Proporciona información de identidad del dispositivo para que Plaspy asocie los reportes con el activo correcto
- Soporta comandos remotos sencillos o mecanismos de configuración expuestos por el fabricante o el operador móvil
- Permite que el dispositivo opere sobre métodos de transporte comunes para alcanzar el endpoint de Plaspy
- Suministra la telemetría básica necesaria para seguimiento de ubicación, geocercas y alertas básicas

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y detectar automáticamente el protocolo del dispositivo una vez que este envía datos al endpoint compartido de Plaspy. Cuando un G2P se configura para enviar sus reportes a Plaspy, normalmente no es necesaria la selección manual del protocolo en la plataforma.

- Plaspy usa un endpoint de servidor compartido y el mismo puerto para todos los dispositivos soportados
- Si el G2P está configurado para reportar al endpoint de Plaspy, la plataforma identificará el protocolo automáticamente
- Usted generalmente solo necesita configurar el dispositivo para apuntar al endpoint de Plaspy para que ocurra la detección
- Una identidad de dispositivo correcta (IMEI o equivalente) en el reporte inicial ayuda a Plaspy a mapear los datos con el registro del dispositivo
- Si la detección automática no se produce, se recomienda revisar la configuración de reporte del dispositivo y la documentación del fabricante

## Transporte y contexto de conexión

El G2P puede comunicarse con la plataforma Plaspy usando los transportes de red estándar que el dispositivo y la red móvil soporten. Plaspy acepta conexiones en un puerto compartido y proporciona tanto un nombre de dominio como una dirección IP para la configuración del dispositivo o del operador.

- El dominio del servidor Plaspy es d.plaspy.com para que los dispositivos puedan configurarse por nombre DNS
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse cuando se requieren IPs estáticas
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y del operador
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos
- Elija UDP o TCP en el dispositivo de acuerdo con la confiabilidad de la red y la guía del fabricante

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades G2P pueden afectar el comportamiento del protocolo y los comandos disponibles
- Las revisiones de hardware o las variantes regionales pueden implementar funciones del fabricante de forma distinta
- La selección del transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y las restricciones del operador
- La configuración de servidores del fabricante y el comportamiento de los comandos SMS pueden variar entre versiones de firmware
- Siempre valide la dirección de reporte del dispositivo (d.plaspy.com o 54.85.159.138) y el puerto 8888 al configurar el rastreador
- Confirme cualquier opción específica del dispositivo o comandos de inicialización requeridos consultando la documentación oficial de Gosafe

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que el G2P reporte de forma confiable a Plaspy, agiliza la puesta en marcha y reduce el tiempo dedicado a resolver problemas de red o configuración. Tener claridad sobre el transporte y las expectativas de reporte mejora la confiabilidad a largo plazo del dispositivo y la visibilidad operativa.

- Garantiza que el dispositivo apunte al endpoint correcto de Plaspy para la detección automática
- Ayuda a diagnosticar problemas de conectividad relacionados con la elección entre UDP y TCP
- Facilita una identificación precisa del dispositivo para que la telemetría se asigne al activo correcto en Plaspy
- Permite detectar y adaptarse más fácilmente a cambios de firmware y del fabricante
- Aumenta la confianza en que los datos de ubicación y alertas se entregan oportunamente

## Por qué usar Plaspy con este protocolo

Usar el Gosafe G2P con Plaspy ofrece a organizaciones y cuidadores una manera práctica de centralizar información de ubicación y estado para casos de uso de rastreo personal. La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos reducen la complejidad de configuración, mientras que el hardware compacto del G2P y sus capacidades SMS funcionan como opciones de reporte flexibles.

Si desea más información sobre Plaspy y cómo maneja la conectividad y los protocolos de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y orientación del fabricante, verifique la información más reciente en el sitio oficial de Gosafe en https://gosafesystem.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
