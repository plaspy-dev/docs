---
slug: /cantrack/tk200am/protocol
id: tk200am-protocol
sidebar_label: Protocol
title: CanTrack - TK200AM Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo CanTrack TK200AM y cómo se comunica con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo CanTrack TK200AM
  - protocolo GPS CanTrack TK200AM
  - compatibilidad CanTrack TK200AM Plaspy
  - protocolo de comunicación TK200AM
  - protocolo de rastreo TK200AM
  - protocolo CanTrack Plaspy
  - compatibilidad de rastreadores Plaspy
  - rastreo de activos CanTrack
  - rastreo de vehículos TK200AM
  - integración rastreador GSM GPRS
---

# CanTrack - Protocolo TK200AM

Esta página ofrece una visión pública, no sensible, del contexto de comunicación del CanTrack TK200AM cuando se integra con la plataforma Plaspy. Resume cómo el rastreador informa posición y telemetría a Plaspy, los ajustes de conexión compartidos que utiliza la plataforma y consideraciones prácticas de compatibilidad que ayudan a integradores y gestores de flotas a planificar despliegues. La información se centra en el nivel de protocolo más que en detalles internos del dispositivo o formatos propietarios de paquetes.

Plaspy recibe los reportes del TK200AM a través de un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando los dispositivos están apuntando correctamente al endpoint de Plaspy. Los ajustes públicos de conexión de Plaspy son d.plaspy.com (54.85.159.138) en el puerto 8888 y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello usted siempre debe validar los detalles del equipo con la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del TK200AM regula cómo el equipo se identifica, transmite ubicación y telemetría, y señala eventos como manipulación o movimiento a un backend. En el contexto de Plaspy, este protocolo permite la ingestión confiable de reportes periódicos de bajo consumo y actualizaciones en tiempo real de mayor frecuencia sin que los usuarios de la plataforma tengan que manejar detalles de transporte en bruto.

- Define cómo el rastreador envía telemetría básica como posiciones GPS, estado de movimiento, alertas de manipulación y nivel de batería a un servidor remoto.
- Permite alternar entre reportes de baja frecuencia para ahorro de energía y modos de mayor frecuencia para seguimiento en tiempo real.
- La información de identificación y estado de dispositivo que transporta el protocolo permite a Plaspy asociar mensajes entrantes con una unidad TK200AM específica para mapas, alertas y historial.
- Plaspy procesa la carga útil del protocolo para mostrar datos útiles en paneles, disparar alertas y almacenar rutas históricas para análisis.
- El protocolo funciona sobre transportes móviles comunes, por lo que los dispositivos pueden reportar desde áreas con cobertura GSM extendida.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de dispositivos en un endpoint y puerto compartidos y determinar automáticamente el protocolo cuando un equipo reporta a ese endpoint. Para la mayoría de usuarios, esto implica que la configuración en el equipo se limita a apuntarlo al endpoint de Plaspy y seleccionar el tipo de transporte apropiado.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración entre distintos modelos.
- El endpoint público de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 utilizando el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y las condiciones de la red.
- Cuando el TK200AM está apuntado al endpoint de Plaspy y hay conectividad de red, la detección del protocolo es automática y normalmente no se requiere la selección manual del protocolo en Plaspy.
- Una identificación correcta y intervalos de reporte consistentes desde el dispositivo ayudan a Plaspy a mapear los flujos entrantes con el registro de dispositivo adecuado.

## Transporte y configuración de conexión

Las opciones de transporte y los ajustes correctos de destino son la base de una integración exitosa. El TK200AM soporta enlace GSM/GPRS y puede configurarse para enviar datos por TCP o UDP; esas opciones afectan únicamente la capa de red, mientras Plaspy interpreta el protocolo de alto nivel una vez que llegan los mensajes.

- El equipo puede configurarse para reportar a d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy y el TK200AM usan el puerto 8888 para reportes y todos los dispositivos soportados por Plaspy comparten ese número de puerto.
- Se soportan tanto los transportes UDP como TCP en el puerto 8888, según la configuración del rastreador y las condiciones de la red.
- La confiabilidad de la red, el comportamiento del operador móvil y las reglas de firewall pueden influir en si UDP o TCP resulta más adecuado para un despliegue concreto.
- Asegúrese de que el APN y los ajustes GPRS del TK200AM estén correctos para que el dispositivo pueda establecer conexión de datos con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar campos de mensajes, desencadenantes de reporte o comportamiento de gestión de energía; verifique siempre la versión de firmware al diagnosticar diferencias.
- Variantes de hardware o ediciones regionales del TK200AM pueden presentar pequeñas diferencias en funciones soportadas o ajustes por defecto que afectan el comportamiento del protocolo.
- La elección de transporte (UDP frente a TCP) puede impactar las características de entrega de mensajes, pero no cambia el propósito general del protocolo.
- Es posible que se requieran herramientas de configuración o provisión por parte del fabricante para establecer el servidor de reporte hacia el endpoint de Plaspy.
- Valide la compatibilidad contra la documentación del fabricante para el lote específico del dispositivo y el firmware a fin de confirmar los modos de reporte soportados.
- Restricciones del operador de red, como limitaciones de APN o Carrier NAT, pueden afectar la accesibilidad del dispositivo y deben considerarse durante el despliegue.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de reporte del TK200AM y de cómo Plaspy procesa esos mensajes reduce el tiempo de configuración, facilita la resolución de problemas y mejora la confiabilidad a largo plazo de su solución de rastreo. Saber cómo encajan las piezas le ayuda a elegir perfiles de reporte que equilibren la vida de la batería y la fidelidad del rastreo.

- Ayuda a garantizar que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte adecuado.
- Facilita la interpretación de por qué un equipo puede no aparecer en Plaspy debido a diferencias en APN, transporte o firmware.
- Permite tomar decisiones informadas sobre intervalos de reporte y modos de energía para ajustar los requisitos operativos y la autonomía de batería.
- Simplifica la coordinación entre instaladores de hardware, gestores de flota y administradores de red durante los despliegues.
- Proporciona contexto sobre cuándo consultar recursos del fabricante o soporte para preguntas específicas de firmware.

## Por qué usar Plaspy con este protocolo

Integrar el TK200AM con Plaspy ofrece a las organizaciones una forma práctica de combinar rastreo de activos con larga autonomía con una plataforma operativa que provee mapas, alertas e informes históricos. Los reportes periódicos de bajo consumo del TK200AM y su modo opcional en tiempo real se complementan de forma natural con las capacidades de ingestión y los paneles de Plaspy para ofrecer visibilidad en gestión de flotas, respuesta antirrobo y monitoreo a largo plazo.

Plaspy utiliza un enfoque de conexión compartida para que los dispositivos apuntados al endpoint d.plaspy.com (54.85.159.138) en el puerto 8888 puedan ser ingeridos sin configuración de puerto por dispositivo, y Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado. Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos como el TK200AM visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos de dispositivo, comportamiento de firmware y guía del fabricante, por favor verifique la información en el sitio de CanTrack https://www.cantrackgps.com/ ya que las implementaciones del fabricante y el firmware pueden cambiar con el tiempo.
