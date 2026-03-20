---
slug: /thinkrace/traxbean_palm/protocol
id: traxbean_palm-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean Palm Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar ThinkRace Traxbean Palm con servidores Plaspy y ajustes de conexión
keywords:
  - Protocolo ThinkRace Traxbean Palm
  - Protocolo GPS ThinkRace Traxbean Palm
  - Protocolo de comunicación Traxbean Palm
  - Rastreador Traxbean Palm Plaspy
  - Protocolo de rastreo Traxbean Palm
  - Protocolo GPS ThinkRace
  - Compatibilidad Traxbean Palm Plaspy
  - Protocolo GPS portátil ThinkRace
  - Protocolo rastreador de personal
  - Protocolo rastreador GPS Plaspy
---

# ThinkRace - Protocolo Traxbean Palm

Esta página describe el contexto público del protocolo para usar el ThinkRace Traxbean Palm con Plaspy. Se enfoca en cómo el dispositivo comunica con los servidores de Plaspy, qué tipos de telemetría y eventos ingiere la plataforma, y los ajustes de conexión más habituales para el Palm. El contenido está pensado para ser no sensible y útil para administradores e integradores que planifican el registro y la supervisión de dispositivos en Plaspy.

El Traxbean Palm es un rastreador portátil y compacto que reporta posiciones GPS, ubicaciones asistidas, eventos SOS, y datos de voz y cámara. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según firmware, revisión de hardware e implementación del fabricante, por lo que los detalles específicos del dispositivo deben confirmarse con la documentación de ThinkRace cuando sea necesario.

## Descripción general del protocolo

El protocolo de comunicación es el conjunto de reglas que el Traxbean Palm usa para reportar ubicación, eventos y telemetría a un servidor. En Plaspy, el protocolo define cómo el dispositivo se identifica, cómo se empaquetan datos de posición y ubicaciones asistidas, y cómo se entregan banderas de eventos como SOS, llamadas de voz o activaciones de cámara para su procesamiento y generación de alertas.

- Permite reportar posiciones GPS y datos de localización asistida para que Plaspy genere actualizaciones de posición en tiempo real.
- Transmite tipos de eventos y metadatos como pulsaciones de SOS, eventos de llamadas de voz bidireccionales e indicadores de captura de cámara para contexto de incidentes.
- Proporciona marcas de tiempo e identificación de dispositivo para que Plaspy pueda correlacionar la telemetría con registros de cuenta y reglas.
- Soporta telemetría periódica y mensajes bajo demanda para que Plaspy aplique geocercas, notificaciones y registro histórico.
- Permite transporte sobre sockets de red estándar para que el dispositivo entregue mensajes vía datos móviles a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe las conexiones entrantes de dispositivos en un punto de entrada y puerto compartidos y analiza los mensajes entrantes para determinar el protocolo del rastreador. Debido a que la plataforma usa un punto común, la mayoría de unidades Traxbean Palm solo necesitan apuntar al servidor Plaspy y no requieren seleccionar el protocolo manualmente dentro de Plaspy.

- El endpoint del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto común para dispositivos Plaspy es 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y la preferencia del usuario.
- Cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador.
- En la mayoría de los casos los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy si el dispositivo está enviando al endpoint y puerto correctos.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el Traxbean Palm se conecta a Plaspy a través de redes móviles. El Palm normalmente utiliza datos 4G/LTE para abrir conexiones de red y puede configurarse para apuntar a Plaspy por nombre de dominio o por dirección IP según las herramientas de aprovisionamiento o la configuración APN de la SIM.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida.
- El puerto 8888 es el puerto único que Plaspy utiliza para todos los dispositivos compatibles, lo que simplifica la configuración de firewall y NAT.
- Consideraciones de resiliencia de red como retransmisiones, persistencia de sesión y cambios entre celdas móviles se manejan en la capa del dispositivo y de la red.
- Asegúrese de que la APN y los ajustes de la SIM permitan conexiones salientes al endpoint de Plaspy para un reporte fiable.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades Traxbean Palm pueden cambiar qué eventos o funciones auxiliares se reportan y cómo se codifican.
- Revisiones de hardware o módulos opcionales (por ejemplo cámaras distintas o componentes RF para localización indoor) pueden alterar la telemetría o los tipos de eventos disponibles.
- La elección del transporte entre UDP y TCP puede afectar las características de entrega para eventos sensibles al tiempo como SOS o voz en vivo.
- Diferencias regionales entre operadores y el comportamiento en roaming pueden influir en la conectividad y requieren validación durante el despliegue.
- Valide siempre la compatibilidad y disponibilidad de funciones para una combinación concreta de hardware y firmware usando la documentación oficial de ThinkRace.
- Se recomienda probar un dispositivo de muestra con su cuenta Plaspy antes de un despliegue a gran escala para confirmar el comportamiento esperado.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Traxbean Palm ayuda a garantizar un registro de dispositivos preciso, un manejo de eventos predecible y una resolución de problemas eficiente al integrarlo con Plaspy. Un conocimiento claro del contexto de comunicación reduce la fricción en el despliegue y favorece una supervisión confiable a largo plazo.

- Ayuda a verificar que el dispositivo apunte al endpoint correcto de Plaspy y use el puerto 8888 para una ingestión exitosa.
- Facilita diagnósticos más rápidos cuando la telemetría o los eventos SOS no aparecen en Plaspy mediante la verificación del transporte y la configuración de red.
- Permite mapear correctamente los eventos del dispositivo a flujos de trabajo de Plaspy como geocercas, alertas y flujos de incidentes.
- Orienta la decisión entre UDP o TCP según las características de entrega y latencia deseadas.
- Ayuda a las integraciones que combinan datos del Palm con otras fuentes de telemetría para vistas operativas unificadas.

## Por qué usar Plaspy con este protocolo

Utilizar el Traxbean Palm con Plaspy ofrece a las organizaciones una forma práctica de transformar la telemetría de seguridad del personal en flujos de monitoreo y respuesta accionables. Plaspy ingiere ubicación, posicionamiento asistido, eventos SOS y contexto visual o de audio para que los equipos operativos reciban alertas oportunas, apliquen lógica de geocercas y visualicen recorridos históricos junto a otra telemetría de flota o dispositivos.

Si desea saber más sobre cómo Plaspy procesa datos de dispositivos y soporta integraciones, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, comportamiento de firmware y notas de implementación del fabricante, confirme la información en el sitio web de ThinkRace en https://www.thinkrace.com/ ya que la documentación del fabricante y el firmware pueden cambiar con el tiempo.
