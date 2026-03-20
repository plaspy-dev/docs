---
slug: /careu/ueco/protocol
id: ueco-protocol
sidebar_label: Protocol
title: CAREU - Ueco Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para la compatibilidad del rastreador CAREU Ueco con el servidor Plaspy y ajustes de conexión
keywords:
  - Protocolo CAREU Ueco
  - Protocolo GPS CAREU Ueco
  - Protocolo de comunicación CAREU Ueco
  - Protocolo de rastreo CAREU Ueco
  - CAREU Ueco Plaspy
  - Rastreador GPS Ueco
  - Compatibilidad rastreador CAREU
  - Rastreo de vehículos Plaspy
  - Rastreador para gestión de flotas
  - Protocolo de rastreador GPS
---

# CAREU - Protocolo Ueco

Esta página ofrece contexto público sobre el protocolo para usar el rastreador CAREU Ueco con la plataforma Plaspy. Describe cómo el dispositivo suele comunicarse con Plaspy, qué partes de la conexión son comunes entre dispositivos y qué comportamientos dependen del firmware, la configuración o la implementación del fabricante. El objetivo es ayudar a usuarios técnicos e integradores a comprender la superficie de comunicación sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. El comportamiento exacto del protocolo en Ueco puede variar según versiones de firmware, revisiones de hardware, funciones opcionales y elecciones del fabricante; por ello esta documentación se centra en hechos generales de utilidad pública y en recomendaciones prácticas para la integración.

## Resumen del protocolo

El protocolo de comunicación del Ueco es el mecanismo que el rastreador utiliza para reportar posición GPS, estado del dispositivo, alarmas y otra telemetría a un backend como Plaspy. En la práctica, el protocolo transmite actualizaciones periódicas de posición, eventos como alertas por choque o geocercas y mensajes relacionados con configuración remota o disparadores de actualización de firmware. Comprender el papel del protocolo ayuda a asegurar que el dispositivo esté configurado para alcanzar Plaspy y entregar los datos necesarios.

- Transporta telemetría como ubicación, odómetro y estado a un servidor remoto para que Plaspy pueda visualizarla y procesarla
- Informa eventos como detección de choque, conducción brusca y entradas o salidas de geocerca para habilitar alertas y reportes
- Soporta comandos de configuración remota y disparadores para FOTA u otros flujos de mantenimiento iniciados por el fabricante o la plataforma
- Identifica el dispositivo para que Plaspy asocie los datos entrantes con el activo y las vistas de tablero correctas
- Facilita mensajes periódicos de latido o keepalive que indican conectividad del dispositivo y disponibilidad celular

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y determina automáticamente el protocolo correcto para los rastreadores compatibles. En la mayoría de las implementaciones Ueco usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el rastreador esté configurado para reportar al endpoint de Plaspy y use un transporte soportado.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para referencia directa del endpoint
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint de la plataforma
- Si el Ueco está configurado para reportar al endpoint de Plaspy, la plataforma asociará los mensajes entrantes con el modelo de dispositivo y aplicará el parseo y manejo adecuados
- Normalmente solo debe asegurarse de que el rastreador apunte al endpoint correcto de Plaspy y use el transporte configurado

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el Ueco alcanza los servidores de Plaspy. Dependiendo del modelo de dispositivo y las opciones de firmware, el rastreador puede estar configurado para usar diferentes métodos de transporte. Estas elecciones afectan la configuración en el dispositivo pero no cambian que Plaspy acepte tráfico a través del endpoint compartido.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo
- Se puede apuntar a d.plaspy.com o a 54.85.159.138 al configurar el endpoint de reporte
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que hace que los despliegues sean coherentes en flotas mixtas
- La selección de transporte (UDP frente a TCP) puede configurarse en el rastreador o en el cable de instalación y debe coincidir con las necesidades de red y fiabilidad
- Asegúrese de que cualquier firewall intermedio o la configuración APN del operador permitan tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades Ueco pueden afectar los mensajes exactos y las funciones disponibles para reportes y configuración remota
- Revisiones de hardware y módulos opcionales, como voz bidireccional o soporte GNSS ampliado, pueden añadir o modificar campos reportados
- La selección de transporte y las opciones de configuración del fabricante (UDP versus TCP, DNS versus IP directa) influyen en cómo se deben configurar los dispositivos para alcanzar Plaspy
- Funciones como FOTA vía FTP, tipos de geocerca y uso de 1 Wire dependen del firmware y pueden requerir configuración adicional por parte del fabricante
- Siempre valide una unidad o lote concreto frente a las notas de la versión del fabricante al planear despliegues grandes
- En caso de duda, consulte la documentación oficial de CAREU o la herramienta de configuración del dispositivo que utilice el instalador

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del Ueco ayuda a asegurar una incorporación fiable del dispositivo, la interpretación correcta de la telemetría en Plaspy y a agilizar la resolución de problemas cuando surgen incidencias. Saber qué partes de la conexión son compartidas y cuáles dependen del firmware puede reducir tiempos de despliegue y mejorar la confiabilidad operativa.

- Asegura que el dispositivo esté configurado para reportar al endpoint y transporte correctos de Plaspy, de modo que los datos lleguen de forma consistente
- Facilita el diagnóstico de problemas de conectividad y reporte al verificar ajustes de transporte y accesibilidad del endpoint
- Mejora la precisión de alertas e informes verificando que tipos de eventos como detección de choques y geocercas estén activados y se reporten como se espera
- Apoya la planificación de actualizaciones de firmware y la activación de funciones opcionales como FOTA o GNSS ampliado
- Reduce fricción en el soporte alineando la configuración del instalador con las expectativas de Plaspy sobre endpoint y uso de puerto

## Por qué usar Plaspy con este protocolo

Usar el CAREU Ueco con Plaspy ofrece un camino directo para captar datos de posición, eventos y diagnósticos de rastreadores compactos dentro de una plataforma unificada de gestión de flotas. El enfoque de endpoint compartido y la detección automática de protocolo de Plaspy reducen la carga de configuración por dispositivo, permitiendo que los equipos se enfoquen en casos de uso operativos como seguimiento, monitoreo de comportamiento de conductores y reportes de geocercas.

Para conocer más sobre Plaspy y cómo puede recibir y procesar datos de dispositivos como el CAREU Ueco visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, comportamiento de firmware y notas de implementación, verifique la documentación en el sitio del fabricante https://www.systech-iot.com/ ya que el soporte de protocolo y las funciones de firmware pueden cambiar con el tiempo.
