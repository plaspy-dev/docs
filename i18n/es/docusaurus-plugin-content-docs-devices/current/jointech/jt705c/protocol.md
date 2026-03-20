---
slug: /jointech/jt705c/protocol
id: jt705c-protocol
sidebar_label: Protocol
title: Jointech - JT705C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo JT705C de Jointech para integración con Plaspy, con contexto de conexión y pautas de compatibilidad
keywords:
  - protocolo Jointech JT705C
  - protocolo GPS Jointech JT705C
  - protocolo de seguimiento JT705C
  - compatibilidad JT705C Plaspy
  - protocolo de rastreador GPS Jointech
  - protocolo de comunicación JT705C
  - protocolo de rastreador GPS Plaspy
  - protocolo cerradura de video contenedor
  - protocolo rastreador GPS aduanas
  - seguimiento de flotas JT705C
---

# Jointech - Protocolo JT705C

Esta página resume el contexto público del protocolo para usar la cerradura inteligente de video y control aduanero Jointech JT705C con Plaspy. Explica, a alto nivel, cómo se comunica el equipo, qué papel juega el protocolo del rastreador en la entrega de posición, eventos y referencias de video, y qué debe considerar al configurar el dispositivo para que reporte a Plaspy. Esta guía está dirigida a usuarios técnicos, integradores y gestores de flotas que buscan una visión clara y no sensible de cómo se intercambian los datos del JT705C con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que la unidad comienza a reportar a la plataforma. El comportamiento exacto del equipo y los detalles del protocolo pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar el comportamiento específico del dispositivo con Jointech cuando sea necesario. Las secciones a continuación se centran en el contexto de conexión y consideraciones prácticas de compatibilidad en lugar de la mecánica de paquetes a bajo nivel.

## Resumen del protocolo

El protocolo de comunicación JT705C es el mecanismo mediante el cual la unidad informa posiciones GPS, eventos de alarma y referencias a evidencias de video hacia un servidor remoto como Plaspy. En la práctica, el protocolo permite que el dispositivo se identifique, transmita telemetría y metadatos de eventos, y soporte comandos de gestión remota cuando están disponibles. El resumen público que sigue describe el papel del protocolo sin exponer detalles propietarios.

- Permite que el JT705C envíe actualizaciones periódicas de ubicación y notificaciones impulsadas por eventos a un extremo remoto.
- Transporta metadatos de alarmas y estado necesarios para el manejo de incidentes, como manipulación, impactos o eventos de desbloqueo.
- Incluye referencias o identificadores que conectan la telemetría con clips de video grabados o sesiones de visualización en vivo en sistemas externos.
- Soporta transporte persistente o estilo datagrama según la configuración del equipo para llegar al endpoint en la nube.
- Proporciona la información básica de identidad y sesión que Plaspy necesita para empatar los datos entrantes con un registro de dispositivo y presentar información útil en el panel.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores usando un endpoint de red común y detectar automáticamente el protocolo del dispositivo entrante. Cuando un JT705C configurado correctamente reporta al endpoint de Plaspy, la plataforma empata los mensajes entrantes con el perfil de dispositivo correcto sin requerir la selección manual del protocolo en la mayoría de las implementaciones.

- Plaspy utiliza un endpoint y puerto de servidor compartidos para el tráfico entrante de rastreadores y realiza reconocimiento automático del protocolo.
- Generalmente no es necesario que el usuario seleccione un protocolo dentro de Plaspy si el JT705C está configurado para reportar al endpoint de Plaspy.
- Los requisitos habituales de configuración incluyen apuntar el equipo a Plaspy y asegurarse de que los valores identificadores coincidan con lo que espera el firmware del dispositivo.
- La detección automática reduce la complejidad de configuración para flotas con modelos mixtos al centralizar el manejo de protocolos en el servidor.
- Cuando surgen problemas de detección, las comprobaciones básicas incluyen confirmar el host de reporte, el tipo de transporte y que el dispositivo esté enviando telemetría activamente.

## Transporte y contexto de conexión

El JT705C puede configurarse para usar transporte UDP o TCP al reportar a Plaspy, dependiendo del soporte del dispositivo y de cómo se aprovisione la unidad. Plaspy acepta públicamente conexiones de rastreadores en el mismo endpoint para todos los dispositivos soportados, por lo que las principales consideraciones de transporte son seleccionar el modo apropiado en el JT705C y asegurarse de que el enrutamiento de red permita tráfico saliente hacia Plaspy.

- El dominio del servidor Plaspy para reportes de rastreadores es d.plaspy.com.
- El endpoint IP del servidor Plaspy es 54.85.159.138.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para simplificar la configuración de red y las reglas de firewall.
- Confirme que las políticas de red y del operador permitan conexiones salientes desde el dispositivo hacia el endpoint de Plaspy y el transporte elegido.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware y hardware del JT705C pueden afectar qué características del protocolo están presentes y cómo se reportan eventos específicos.
- Los valores por defecto de configuración del fabricante pueden apuntar a endpoints distintos; asegúrese de que el dispositivo esté configurado explícitamente para reportar a d.plaspy.com o a la IP de Plaspy cuando sea necesario.
- La elección de transporte entre UDP y TCP puede cambiar las características de entrega y debe corresponder con sus necesidades operativas y las capacidades del dispositivo.
- Al habilitar referencias de video o visualización en vivo, valide que la configuración del dispositivo y las condiciones de red permitan enlazar los metadatos de video con los eventos en Plaspy.
- Las funciones de integración y comandos pueden variar según distribuidor o compilaciones de firmware personalizadas; consulte la documentación de Jointech para detalles de variantes.
- Siempre pruebe un dispositivo representativo en su entorno antes de un despliegue masivo para confirmar que la telemetría, las alarmas y el enlace con video se comporten como se espera.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación JT705C a un nivel práctico ayuda a garantizar un ingreso de dispositivos confiable, agilizar la resolución de problemas y mantener una entrega de telemetría consistente en Plaspy. Aunque Plaspy gestiona la detección del protocolo, entender cómo el equipo se conecta y reporta permite tomar mejores decisiones de configuración y generar expectativas claras sobre el manejo de eventos y referencias de video.

- Reduce el tiempo de puesta en servicio al alinear la configuración del dispositivo con las expectativas de conexión de Plaspy.
- Facilita localizar problemas de conectividad al enfocar la resolución en transporte, DNS e intervalos de reporte.
- Aclara cómo los metadatos de eventos se traducen en alertas y flujos de trabajo de incidentes dentro de Plaspy.
- Ayuda en la planificación de capacidad cuando se habilitan referencias de video o reportes frecuentes de eventos en una flota.
- Mejora la gestión de cambios al actualizar firmware del dispositivo o cambiar modos de transporte.

## Por qué usar Plaspy con este protocolo

Usar el JT705C con Plaspy combina las capacidades especializadas del dispositivo para monitoreo de carga y control aduanero con una plataforma centralizada de gestión de flota y manejo de incidentes. Plaspy ingiere ubicación, alarmas y referencias de video desde unidades JT705C compatibles para que despachadores, equipos de cumplimiento e investigadores puedan ver telemetría consolidada y evidencia en un solo lugar. Para organizaciones que requieren trazabilidad auditable, video basado en eventos y seguimiento consistente en transporte multimodal, esta combinación soporta tanto la visibilidad operativa como los flujos de cumplimiento.

Para conocer más sobre Plaspy y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para la documentación específica más reciente del protocolo del dispositivo, notas de firmware y guías de configuración del JT705C, verifique los detalles con el fabricante en https://www.jointcontrols.com/ ya que la implementación y el comportamiento del firmware pueden cambiar con el tiempo.
