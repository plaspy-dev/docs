---
slug: /hunterpro/cp60_kam/protocol
id: cp60_kam-protocol
sidebar_label: Protocol
title: HunterPro - CP60-KAM Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar HunterPro CP60-KAM con Plaspy y guía de conexión y compatibilidad
keywords:
  - protocolo HunterPro CP60-KAM
  - protocolo GPS HunterPro CP60-KAM
  - compatibilidad CP60-KAM Plaspy
  - protocolo de rastreo HunterPro
  - protocolo del dispositivo CP60-KAM
  - soporte de dispositivos Plaspy
  - rastreador con cámara HunterPro
  - protocolo de rastreo vehicular
  - protocolo GPS para flotas
  - comunicación de rastreador con Plaspy
---

# HunterPro - CP60-KAM Protocol

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador HunterPro CP60-KAM con Plaspy. Describe a alto nivel cómo interactúa el dispositivo con la plataforma Plaspy, qué esperar durante la integración y qué ajustes de conexión utiliza Plaspy para recibir reportes de los rastreadores soportados.

El HunterPro CP60-KAM destaca por combinar el rastreo GPS estándar con captura de imágenes a bordo, por ejemplo captura automática en un Evento de Pánico. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo es el método de comunicación desde el lado del dispositivo que permite al CP60-KAM reportar ubicación, estado y señales de eventos a un servidor remoto como Plaspy. En términos generales, el protocolo organiza cómo el rastreador se identifica, informa telemetría y señala eventos que pueden incluir disparadores de captura de imagen u otros datos de sensores.

- Permite que el rastreador envíe actualizaciones de posición y notificaciones de eventos a Plaspy para monitoreo en tiempo real.
- Transmite la identidad del dispositivo y la información de sesión para que Plaspy pueda asociar los reportes entrantes con la unidad correcta.
- Lleva señales de eventos que pueden indicar activaciones de pánico y que, en el caso del CP60-KAM, pueden relacionarse con la captura de imágenes según el firmware.
- Proporciona el mecanismo para el reconocimiento de comandos remotos y la configuración cuando el dispositivo lo soporta.
- Actúa como puente entre el hardware del rastreador y Plaspy para que los datos reportados se conviertan en telemetría y alertas utilizables.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de rastreadores en un endpoint de red compartido y determina automáticamente qué protocolo está usando el dispositivo. En la mayoría de las integraciones, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el equipo está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138 para reportes entrantes.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo y las reglas de firewall.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y detectará el protocolo usado por el rastreador de forma automática.
- La configuración típica requiere apuntar el rastreador a d.plaspy.com o a la IP indicada y usar el puerto 8888 con el transporte preferido.
- Dado que el comportamiento del protocolo puede variar según el firmware o la revisión de hardware, la detección automática reduce la necesidad de seleccionar manualmente el protocolo.

## Transporte y contexto de conexión

El transporte de la conexión y la configuración del endpoint son esenciales para establecer un flujo de datos confiable desde el CP60-KAM hacia Plaspy. El rastreador puede configurarse para usar UDP o TCP en el puerto estándar de Plaspy según las capacidades del dispositivo y la configuración elegida.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 al dirigir reportes a Plaspy.
- Plaspy acepta tanto UDP como TCP en el puerto 8888 para adaptarse a las preferencias del dispositivo y a las condiciones de red.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, por lo que la configuración de puerto es consistente entre tipos de equipos.
- Seleccione el transporte (UDP o TCP) que mejor se ajuste al firmware del rastreador y a los requisitos de confiabilidad de su red.
- Asegúrese de que los firewalls y las reglas de NAT permitan conexiones salientes hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones disponibles; verifique el firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware pueden introducir pequeñas diferencias en funciones soportadas, como los disparadores de captura de imagen o campos de evento.
- Las opciones de configuración en el lado del fabricante pueden afectar si los medios o datos extendidos de eventos se transmiten al servidor.
- La selección del transporte (UDP frente a TCP) puede influir en la fiabilidad y en cómo se manejan retransmisiones o sesiones.
- La detección automática de Plaspy ayuda en la mayoría de los casos, pero es imprescindible que el dispositivo reporte correctamente al endpoint de Plaspy para lograr la conexión.
- Siempre valide comportamientos importantes, como la captura de imagen en pánico, contra la documentación oficial de HunterPro y las notas de firmware vigentes.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del CP60-KAM ayuda a administradores e integradores a verificar la correcta configuración del equipo, solucionar problemas de conectividad y confirmar que los eventos críticos se transmiten como se espera. Tener claro el rol del protocolo reduce el tiempo de integración y favorece la confiabilidad a largo plazo.

- Garantiza que los dispositivos estén apuntando al endpoint y transporte correctos de Plaspy para que los datos lleguen a la plataforma.
- Facilita el diagnóstico cuando la telemetría o los eventos no aparecen en Plaspy mediante la revisión de la red y la configuración del dispositivo.
- Apoya la planificación de actualizaciones de firmware que puedan cambiar el comportamiento de reporte o agregar nuevos campos de evento.
- Ayuda a confirmar que los eventos de pánico y las funciones relacionadas de captura de imagen funcionan según lo previsto.
- Facilita la coordinación con la documentación del fabricante para pasos específicos de configuración del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el HunterPro CP60-KAM con Plaspy brinda a las organizaciones visibilidad consolidada de ubicaciones de vehículos, alertas de eventos y el contexto adicional de la captura de imágenes cuando está disponible. Para operadores de flotas y equipos de seguridad, la combinación de telemetría GPS y evidencia fotográfica basada en eventos puede mejorar la conciencia situacional y el análisis posterior al evento.

Plaspy facilita poner en línea dispositivos CP60-KAM usando un único endpoint y puerto (d.plaspy.com o 54.85.159.138 en el puerto 8888) y detectando automáticamente el protocolo del rastreador una vez que el dispositivo esté configurado correctamente. Para obtener más información sobre cómo Plaspy puede trabajar con sus dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo en el sitio de HunterPro en http://hunterpro.com.tw/.
