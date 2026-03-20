---
slug: /eelink/tk319/protocol
id: tk319-protocol
sidebar_label: Protocol
title: EElink - TK319 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el rastreador EElink TK319 con Plaspy mediante el endpoint compartido
keywords:
  - protocolo EElink TK319
  - protocolo GPS EElink TK319
  - compatibilidad EElink TK319 Plaspy
  - protocolo de rastreo EElink TK319
  - comunicación EElink TK319
  - protocolo rastreador GPS EElink
  - integración EElink TK319
  - protocolo de dispositivo Plaspy
  - rastreo de flotas EElink TK319
  - rastreador de vehículo TK319
---

# EElink - Protocolo TK319

Esta página describe el contexto público del protocolo para usar el rastreador EElink TK319 con la plataforma Plaspy. Se centra en cómo el dispositivo informa posición y estado a Plaspy usando ajustes de conexión públicos y en cómo esa comunicación encaja en flujos típicos de seguimiento de flotas y activos. El contenido está pensado para ayudar a administradores e integradores a comprender la relación de comunicación sin exponer formatos de paquetes propietarios o detalles sensibles del protocolo.

El EElink TK319 es un rastreador GPS para redes 3G que ofrece posicionamiento por GPS y LBS, asistencia AGPS, detección de ACC, control de relé, opción de medición de temperatura y opciones de configuración remota. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Por eso es importante verificar la configuración del equipo frente a la documentación vigente del fabricante.

## Resumen del protocolo

El protocolo usado por el TK319 define cómo se codifican y envían desde el rastreador al servidor remoto los datos de ubicación, estado, alarmas y E/S para que Plaspy pueda procesar y mostrar telemetría útil. Esta página no reproduce formatos privados de paquetes, pero explica el papel del protocolo en la integración de extremo a extremo entre el dispositivo y Plaspy.

- Permite que el TK319 informe ubicaciones GPS y LBS junto con telemetría de apoyo como estado de ACC, nivel de batería y lecturas de temperatura opcionales.
- Transporta actualizaciones periódicas de posición para seguimiento en tiempo real y admite informes por alarmas o eventos para casos de seguridad y protección.
- Proporciona un medio para aplicar configuraciones remotas mediante comandos de servidor o instrucciones SMS cuando el firmware del equipo lo soporta.
- Permite que el dispositivo se identifique para que Plaspy asocie los datos entrantes con el registro del activo correspondiente.
- Actúa como la carga transportable que Plaspy interpreta automáticamente una vez recibida en el endpoint compartido de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos entrantes en un único endpoint compartido y determina automáticamente qué protocolo de rastreador se está usando, por lo que los administradores rara vez necesitan seleccionar un protocolo manualmente. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para la detección y el onboarding automáticos.

- Plaspy escucha en el endpoint común d.plaspy.com y también acepta datos dirigidos a 54.85.159.138.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto de comunicación, lo que simplifica la configuración del equipo.
- El puerto común usado por Plaspy es 8888, por lo que los rastreadores deben configurarse para reportar a ese puerto.
- Plaspy soporta detección automática de protocolos, por lo que normalmente no es necesario elegir un protocolo en la interfaz de Plaspy si el rastreador reporta al endpoint de Plaspy.
- La detección y el análisis exitoso dependen de que el dispositivo envíe informes reconocibles y consistentes con la implementación del fabricante en su firmware.

## Transporte y contexto de conexión

El TK319 puede configurarse para usar UDP o TCP, según las capacidades del dispositivo y las preferencias de instalación. Para la integración con Plaspy, los objetivos de configuración importantes son el hostname y la IP compartidos, y el único puerto que Plaspy usa para todos los dispositivos.

- Los dispositivos pueden configurarse para enviar al hostname d.plaspy.com o a la IP 54.85.159.138.
- El transporte puede ser UDP o TCP, dependiendo de la configuración del dispositivo y las consideraciones de la red.
- Plaspy recibe los informes de los rastreadores en el puerto 8888 para todos los dispositivos compatibles.
- Elegir UDP o TCP afecta características de fiabilidad como retransmisión y sobrecarga de conexión, pero no cambia la información lógica que reporta el rastreador.
- Asegúrese de que la red del vehículo o ubicación permita tráfico saliente hacia el endpoint de Plaspy y al puerto 8888 para el tipo de transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos exactos o la temporización de mensajes que envía un TK319; verifique la versión de firmware si observa comportamientos inesperados.
- Las revisiones de hardware o variantes del producto pueden implementar funciones de reporte ligeramente distintas, como pines E/S adicionales o entradas de sensores.
- Las configuraciones del lado del fabricante y las opciones de configuración remota pueden modificar la frecuencia de reporte o qué eventos disparan subidas inmediatas.
- La selección de transporte entre UDP y TCP debe coincidir con lo que el dispositivo soporta y con las preferencias del entorno de red.
- Si usa sensores opcionales como la entrada de temperatura o el control de relé, confirme cómo informa su firmware esas señales.
- Siempre valide detalles críticos del despliegue con la documentación y notas de versión de EElink para la unidad TK319 específica que esté usando.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el rastreador ayuda a una configuración confiable, acelera la resolución de problemas y asegura una operación predecible a largo plazo en Plaspy. Incluso con detección automática, conocer el contexto de comunicación reduce la incertidumbre durante el onboarding y al diagnosticar problemas de conectividad o calidad de datos.

- Garantiza que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que los datos fluyan de forma confiable.
- Ayuda a diagnosticar problemas de transporte como puertos bloqueados, pérdida de paquetes UDP o fallos de sesiones TCP.
- Aclara la relación entre las configuraciones de firmware y la telemetría que Plaspy recibe para que los campos esperados aparezcan en la plataforma.
- Facilita la confirmación de soporte de funciones como detección de ACC, control de relé y reporte de temperatura para casos de uso operativos.
- Reduce el tiempo de incorporación alineando la configuración del dispositivo con las expectativas de Plaspy antes del despliegue.

## Por qué usar Plaspy con este protocolo

Usar el EElink TK319 con Plaspy ofrece a las organizaciones un camino directo hacia la ubicación en tiempo real, alertas de estado y monitoreo a nivel de flota, aprovechando la detección automática de protocolos de Plaspy y un endpoint de conexión único. La combinación del TK319 de posicionamiento GPS y LBS, entrada ACC, control de relé y sensores opcionales lo hace adecuado para muchos despliegues de seguimiento de vehículos y activos que Plaspy soporta.

Para saber más sobre Plaspy y cómo la plataforma integra dispositivos como el EElink TK319, visite https://www.plaspy.com. Para detalles de protocolo, notas de firmware e instrucciones de configuración específicos y actualizados, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
