---
slug: /calmamp/ttu_2830/protocol
id: ttu_2830-protocol
sidebar_label: Protocol
title: CalmAmp - TTU-2830 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo CalmAmp TTU-2830 para compatibilidad con la configuración de servidor Plaspy
keywords:
  - protocolo CalmAmp TTU-2830
  - protocolo GPS CalmAmp TTU-2830
  - compatibilidad TTU-2830 Plaspy
  - protocolo rastreador CalmAmp
  - comunicación TTU-2830
  - rastreador para remolque CalmAmp
  - protocolo rastreador GPS Plaspy
  - rastreo de vehículos TTU-2830
  - CalmAmp PULS PEG
  - rastreo de flotas CalmAmp
---

# CalmAmp - Protocolo TTU-2830

Esta página describe el contexto público del protocolo para usar el rastreador de remolques CalmAmp TTU-2830 con la plataforma Plaspy. Explica cómo se comunica el dispositivo en términos generales, cómo recibe Plaspy los reportes y qué capacidades del TTU-2830 son relevantes para la integración. La descripción del dispositivo se basa en características del TTU-2830 como diseño resistente a la intemperie, antenas internas, batería recargable, capacidades de entradas y salidas (I/O), opciones de transporte celular, lógica de eventos PEG y gestión por aire PULS.

Plaspy utiliza ajustes de conexión compartidos para los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy. Los dispositivos configurados para enviar al servidor Plaspy en d.plaspy.com o a 54.85.159.138 en el puerto 8888 pueden usar UDP o TCP en ese puerto. Todos los dispositivos en Plaspy usan el mismo puerto y la detección automática del protocolo de la plataforma elimina la necesidad de elegirlo manualmente en la mayoría de las implementaciones, aunque el comportamiento real de los paquetes y la cadencia de reporte pueden variar según el firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de comunicación del TTU-2830 es el conjunto de mensajes y convenciones de transporte que permiten al dispositivo reportar posición, entradas, salidas y condiciones de alerta a un servidor remoto. En Plaspy, el protocolo aporta la información necesaria para asociar identificadores de dispositivo a cuentas, interpretar la telemetría y aplicar reglas de eventos y alertas.

- Transporta la identidad y el estado del dispositivo para que el servidor pueda asociar los mensajes a una flota y a una unidad.
- Envía telemetría como la ubicación GPS, la hora y el estado básico de sensores o I/O para el seguimiento de activos.
- Entrega reportes basados en eventos generados por el motor PEG integrado, de modo que las reglas y alertas puedan aplicarse en el servidor.
- Permite la configuración por aire y las actualizaciones de firmware cuando el dispositivo soporta sistemas del proveedor como PULS.
- Usa redes celulares para el transporte de mensajes, por lo que el comportamiento de la red y la entrega dependen del radio del dispositivo y las condiciones del operador.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes en un único endpoint compartido y realiza la detección automática del protocolo del rastreador, por lo que la mayoría de los dispositivos pueden usarse sin seleccionar el protocolo manualmente. Si un TTU-2830 está configurado para apuntar a la dirección del servidor Plaspy, el sistema enruta e interpreta los mensajes según el formato detectado.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor para reportes es 54.85.159.138.
- El puerto que Plaspy utiliza para el reporte de dispositivos es 8888 y es común para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y el transporte elegido.
- Cuando el dispositivo apunta correctamente al endpoint de Plaspy, la selección de protocolo dentro de Plaspy suele ser automática.
- Es necesario configurar correctamente la dirección del dispositivo y los ajustes APN del operador para que los mensajes lleguen al endpoint de Plaspy.

## Transporte y configuración de conexión

Los ajustes de transporte y conexión determinan cómo el TTU-2830 envía mensajes a Plaspy y cómo deben configurarse los elementos de red. El dispositivo soporta transportes celulares comunes y puede enviarse al host de Plaspy usando cualquiera de los dos en el puerto compartido.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar mensajes a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 según la preferencia de despliegue.
- Plaspy usa el puerto 8888 para todos los equipos, lo que simplifica la configuración de firewalls y redes para flotas.
- El tipo de red celular y la calidad de señal afectan la latencia de entrega y el comportamiento de reintento.
- Usar el nombre DNS d.plaspy.com puede hacer que las migraciones de servidor sean transparentes; la IP se proporciona para configuraciones directas cuando sea necesario.

## Notas sobre compatibilidad del protocolo

- El TTU-2830 es compatible con Plaspy cuando se configura para reportar al endpoint del servidor Plaspy.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la temporización de los mensajes, los campos disponibles o los parámetros de configuración.
- El comportamiento de las reglas PEG y las funciones OTA de PULS son capacidades del dispositivo que pueden afectar cuándo y cómo se generan los reportes.
- La elección del transporte TCP frente a UDP puede afectar la semántica de entrega y debe seleccionarse según las necesidades de la aplicación y el soporte del dispositivo.
- Valide siempre la configuración del dispositivo y el comportamiento de los mensajes en una unidad de prueba antes de un despliegue a gran escala.
- Consulte la documentación del fabricante para confirmar características específicas del firmware y cualquier modo de mensajería opcional.

## Por qué es importante entender el protocolo

Saber cómo opera el protocolo del rastreador le ayuda a asegurar una configuración confiable, una interpretación precisa de la telemetría y una solución de problemas eficiente cuando gestione unidades TTU-2830 con Plaspy. Entender la interacción entre las reglas de eventos del dispositivo, el transporte y el manejo en el servidor reduce el tiempo de integración y mejora la fiabilidad operativa.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte adecuado.
- Facilita la interpretación de por qué ciertos eventos o alertas esperadas no aparecen en la plataforma.
- Apoya la planificación de la vida útil de la batería y los intervalos de reporte cuando se usan unidades recargables en escenarios de energía intermitente.
- Orienta la decisión entre TCP y UDP según necesidades específicas de confiabilidad o latencia.
- Ayuda a validar configuraciones OTA o actualizaciones de firmware entregadas por los sistemas del proveedor.

## Por qué usar Plaspy con este protocolo

Usar el TTU-2830 con Plaspy proporciona visibilidad sencilla de activos para remolques y flotas de activos móviles, aprovechando la detección automática de protocolo de Plaspy y la configuración de puerto unificada. La combinación del motor de eventos PEG del TTU-2830 y las capacidades de la plataforma Plaspy permite a los operadores capturar alertas por eventos, monitorear batería y estado de I/O, y mantener telemetría histórica para informes operativos.

Para obtener más información sobre Plaspy y cómo la plataforma maneja la conectividad de dispositivos y la gestión de flotas visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo y deben verificarse contra la documentación del fabricante en http://www.calamp.com/ para obtener la información específica más reciente.
