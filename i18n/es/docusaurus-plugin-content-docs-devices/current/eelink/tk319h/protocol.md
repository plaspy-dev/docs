---
slug: /eelink/tk319h/protocol
id: tk319h-protocol
sidebar_label: Protocol
title: EElink - TK319‑H Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo para integrar el EElink TK319‑H con Plaspy usando MoveLink EELINK
keywords:
  - Protocolo EElink TK319‑H
  - Protocolo TK319‑H GPS
  - Protocolo EElink MoveLink
  - Protocolo EElink EELINK
  - Telemetría TK319‑H
  - Integración de dispositivos Plaspy
  - Rastreador EElink Plaspy
  - Protocolo de rastreo de vehículos
  - Compatibilidad seguimiento de flotas
  - Integración de rastreador GPS
---

# EElink - Protocolo TK319‑H

Esta página describe el contexto del protocolo público para usar el rastreador EElink TK319‑H con Plaspy. Explica cómo el dispositivo envía a Plaspy datos de GPS, telemetría y alarmas, y qué considerar al configurar los endpoints de red y los ajustes de transporte para garantizar una comunicación fiable.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las indicaciones aquí son de alto nivel y se basan en características públicas del dispositivo. El TK319‑H soporta reportes MoveLink/EELINK y se documenta aquí en el contexto de compatibilidad con Plaspy.

## Resumen del protocolo

El TK319‑H usa un protocolo de reporte (MoveLink / EELINK según el fabricante) para enviar posiciones, telemetría y mensajes de alarma a plataformas backend como Plaspy. El protocolo define cómo el rastreador se identifica, reporta actualizaciones de posición y comunica estados y eventos de alarma para que Plaspy pueda procesar y mostrar los datos.

- Permite que el rastreador se autentique o identifique ante el backend para que Plaspy asocie los mensajes con el activo correcto.
- Transmite informes de posición GPS y LBS además de datos AGPS asistidos para un seguimiento en vivo fiable en Plaspy.
- Incluye telemetría y eventos de alarma como estado de ignición ACC, exceso de velocidad, detección de choque y vibración, para que Plaspy pueda generar alertas y activar flujos de trabajo.
- Soporta reportes periódicos y por eventos para equilibrar la visibilidad en tiempo real y el consumo de energía en instalaciones vehiculares.
- Proporciona un patrón de mensajes consistente que Plaspy puede ingerir y mapear a campos e informes de gestión de flotas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador en función de la conexión entrante y las características del mensaje. Cuando un TK319‑H apunta al endpoint de Plaspy, normalmente la plataforma identificará el protocolo del dispositivo sin que usted tenga que seleccionar nada manualmente, siempre que el equipo esté configurado correctamente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint compartido.
- Usted normalmente no necesita elegir un protocolo en Plaspy si el TK319‑H está configurado para reportar al endpoint de Plaspy.
- Un ID de dispositivo correcto y ajustes de reporte adecuados en el rastreador garantizan que Plaspy pueda vincular los mensajes entrantes con el registro del activo correspondiente.

## Contexto de transporte y conexión

El TK319‑H se comunica mediante redes celulares y puede configurarse para enviar reportes a Plaspy tanto por UDP como por TCP, según la configuración del equipo y las necesidades de la red. Mantenga los ajustes de transporte y endpoint alineados con el firmware del dispositivo y el entorno del operador para lograr una entrega fiable a Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Los equipos pueden apuntar a d.plaspy.com o a la IP directa 54.85.159.138 según las preferencias de provisión.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la provisión y las reglas de firewall.
- Elija UDP para menor sobrecarga y telemetría típica, o TCP cuando se prefiera entrega garantizada y comportamiento de sesión y el dispositivo lo soporte.
- Asegúrese de que el APN y la conectividad SIM estén funcionando para que el rastreador pueda alcanzar el endpoint de Plaspy a través de la red celular.

## Notas sobre compatibilidad del protocolo

- El soporte del protocolo MoveLink / EELINK está indicado por el fabricante, pero el comportamiento exacto de los mensajes puede diferir entre versiones de firmware.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar las funciones disponibles o los campos de mensaje que Plaspy mapea a los datos de la plataforma.
- La selección del transporte entre UDP y TCP puede afectar las características de entrega y debe coincidir con la configuración del dispositivo.
- Los menús de configuración del fabricante y las opciones de aprovisionamiento remoto controlan cómo el rastreador apunta al endpoint de Plaspy.
- Confirme siempre las bandas soportadas y las variantes regionales del modelo con el proveedor para asegurar compatibilidad celular antes de despliegues masivos.
- Valide cualquier telemetría personalizada o el cableado de sensores de terceros con el manual del dispositivo para garantizar que Plaspy reciba los datos esperados.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador ayuda a garantizar una incorporación fluida a Plaspy, a diagnosticar más rápido problemas de conectividad y a mantener una operación fiable a largo plazo. Conocer el papel del protocolo facilita confirmar los ajustes correctos del dispositivo, interpretar su estado y coordinar actualizaciones de firmware o configuración.

- Acelera la configuración inicial al confirmar que el rastreador apunta al endpoint y puerto correctos de Plaspy.
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy debido a desajustes de transporte, APN o firmware.
- Aclara qué telemetría y alarmas puede entregar el TK319‑H a Plaspy para configurar correctamente flujos y alertas.
- Facilita la planificación de reglas de red y seguridad, dado que todos los dispositivos usan el puerto 8888 y el endpoint compartido de Plaspy.
- Apoya la gestión del ciclo de vida al indicar cuándo las actualizaciones de firmware o cambios de hardware pueden alterar el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el TK319‑H con Plaspy ofrece a las organizaciones una vía directa para capturar ubicación en tiempo real, estado de ACC y una amplia gama de alarmas para monitoreo de flotas y activos. El factor de forma compacto del rastreador, su amplio rango de voltaje de entrada y las opciones de relé e interfaces de sensores lo hacen una opción flexible para instalaciones en vehículos, mientras que el reporte MoveLink/EELINK permite a Plaspy ingerir posición y telemetría para visualización, alertas e informes.

Si desea obtener más información sobre Plaspy y cómo se integran los dispositivos TK319‑H en nuestra plataforma visite https://www.plaspy.com. Para los detalles más actuales del protocolo del dispositivo, notas de firmware y orientación oficial del fabricante, verifique la información en el sitio de EElink https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
