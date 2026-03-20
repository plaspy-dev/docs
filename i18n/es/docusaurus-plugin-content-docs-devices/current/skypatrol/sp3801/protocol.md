---
slug: /skypatrol/sp3801/protocol
id: sp3801-protocol
sidebar_label: Protocol
title: SkyPatrol - SP3801 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS SkyPatrol SP3801 y cómo se comunica con Plaspy para gestión de flotas
keywords:
  - protocolo SkyPatrol SP3801
  - protocolo GPS SkyPatrol SP3801
  - protocolo de rastreo SkyPatrol SP3801
  - compatibilidad SkyPatrol SP3801 Plaspy
  - protocolo rastreador GPS SkyPatrol
  - protocolo rastreador SP3801
  - comunicación SP3801
  - rastreo de flotas SP3801
  - rastreo vehicular SP3801
  - protocolo rastreador Plaspy
---

# SkyPatrol - Protocolo SP3801

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol SP3801 con Plaspy. Resume cómo se comunica el dispositivo en términos generales, cómo Plaspy procesa esa comunicación y qué pasos de configuración y validación son útiles al integrar el SP3801 para el seguimiento de flotas o vehículos particulares. El SP3801 es un rastreador ultracompacto con fiabilidad comprobada y un cable OBDII de conexión rápida opcional para instalaciones rápidas, lo que lo hace una opción práctica en muchos casos de uso de rastreo vehicular.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en el contexto de comunicación público más que en formatos de paquetes específicos de firmware o detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del SP3801 regula cómo el rastreador envía ubicación, tiempo e información relacionada con el vehículo a un servidor remoto, y cómo el servidor envía acuses de recibo o comandos cuando corresponde. En una plataforma como Plaspy, el protocolo permite identificar cada dispositivo, asociarlo a una cuenta y entregar telemetría útil para mapeo y alertas.

- Permite al SP3801 transmitir posición GPS y estado básico a un servidor remoto para su seguimiento
- Incluye información de identificación para que Plaspy relacione los reportes con el registro correcto del dispositivo
- Soporta datos relacionados con el vehículo cuando se utiliza el cable OBDII opcional y se transmiten métricas compatibles
- Permite al dispositivo reportar ubicaciones periódicas y actualizaciones por eventos, como movimiento o estado de ignición
- Proporciona la base para que Plaspy muestre ubicación, historial y estado a los usuarios sin exponer detalles internos del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador según el patrón de conexión y la carga útil recibida. En la mayoría de los casos, un SP3801 configurado correctamente para apuntar al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor de Plaspy es 54.85.159.138
- El puerto que usa Plaspy para todos los dispositivos soportados es 8888
- Los dispositivos pueden configurarse para reportar usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma gestiona la detección de protocolo automáticamente
- Generalmente, usted no necesita seleccionar un protocolo en Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy

## Transporte y contexto de conexión

Las configuraciones de transporte y conexión determinan cómo el SP3801 alcanza los servidores de Plaspy. Muchos rastreadores soportan tanto reportes por UDP como por TCP; el SP3801 puede configurarse para usar cualquiera de los dos transportes según la configuración del dispositivo o la preferencia del instalador. Estos detalles se refieren a la topología de conexión más que a la estructura específica de los paquetes.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para reportar a Plaspy
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- Plaspy utiliza el mismo puerto 8888 en todos los dispositivos soportados para simplificar la configuración
- Elija UDP para reportes con menor sobrecarga o TCP cuando se requiera entrega confiable y persistencia de sesión
- Asegúrese de que el transporte y la dirección de reporte estén permitidos por cualquier firewall intermedio o por la configuración APN del operador

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar cuándo y cómo un dispositivo reporta o qué campos opcionales incluye en cada transmisión
- Revisiones de hardware y configuraciones de fábrica pueden modificar características disponibles, como telemetría OBDII o detección de ignición
- Configuraciones y aprovisionamiento por parte del fabricante pueden introducir variaciones en el contenido o la frecuencia de los mensajes
- La elección del transporte (UDP frente a TCP) puede afectar las características de entrega y debe coincidir con lo que el dispositivo soporta
- Plaspy detecta automáticamente el protocolo en su endpoint compartido, pero la configuración del dispositivo debe apuntar a la dirección y puerto correctos de Plaspy
- Valide siempre la compatibilidad consultando la documentación más reciente del fabricante sobre el dispositivo y el firmware

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a los instaladores y administradores a configurar correctamente el SP3801, interpretar el comportamiento del dispositivo durante la incorporación y solucionar problemas de reportes intermitentes o lagunas de datos. Un entendimiento claro del contexto de comunicación reduce el tiempo de integración y mejora la confiabilidad a largo plazo.

- Asegura que la dirección del servidor y el transporte estén configurados correctamente en el dispositivo para reportes exitosos
- Facilita el diagnóstico de por qué un dispositivo puede no aparecer en Plaspy o está reportando telemetría incompleta
- Orienta las decisiones sobre transporte y configuración de red para lograr conectividad fiable
- Ayuda a validar que funciones opcionales como la telemetría OBDII estén funcionando según lo esperado
- Permite planificar actualizaciones de firmware y comprender cómo estas pueden afectar el comportamiento de reportes

## Por qué usar Plaspy con este protocolo

Usar el SkyPatrol SP3801 con Plaspy ofrece un camino eficiente para convertir hardware compacto y amigable para vehículos en una solución operativa de rastreo de flotas o personal. Plaspy se encarga de la ingestión de dispositivos, la detección automática de protocolos y proporciona paneles y alertas adecuados para la supervisión de flotas, mientras que el SP3801 aporta un factor de forma reducido y conectividad OBDII opcional que simplifica la instalación.

Para obtener más información sobre Plaspy y cómo la plataforma puede funcionar con dispositivos SkyPatrol visite https://www.plaspy.com. Verifique el soporte de protocolos actual, el comportamiento del firmware y los detalles de implementación del dispositivo en el sitio oficial del fabricante https://www.skypatrol.com/ ya que estos elementos pueden cambiar con el tiempo.
