---
slug: /coban/bn_311b/protocol
id: bn_311b-protocol
sidebar_label: Protocol
title: Coban - BN-311B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Coban BN-311B y cómo conectarlo a Plaspy para rastreo en tiempo real y guía de conexión
keywords:
  - Protocolo Coban BN 311B
  - Protocolo GPS Coban BN 311B
  - Protocolo de comunicación BN 311B
  - Protocolo de rastreo BN 311B
  - Rastreador GPS Coban Plaspy
  - Protocolo GPS para motocicletas
  - Protocolo para rastreadores compactos de vehículos
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de vehículos en tiempo real
  - Protocolo de rastreo para flotas
---

# Coban - Protocolo BN-311B

Esta página describe el contexto público del protocolo para usar el rastreador Coban BN-311B con Plaspy. Se centra en cómo el dispositivo reporta ubicación y telemetría a Plaspy, qué puntos de conexión se emplean y qué deben conocer los administradores al integrar el equipo, sin entrar en detalles privados de implementación.

El BN-311B es una terminal compacta GSM GNSS para gestión de motocicletas que envía ubicación y telemetría mediante TCP, UDP o SMS a un endpoint remoto. Plaspy utiliza una configuración de conexión compartida entre los dispositivos que soporta y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página aclara los aspectos prácticos de conectividad y los puntos de detección que encontrará al integrar un BN-311B con Plaspy.

## Descripción general del protocolo

El protocolo de reporte del BN-311B define las reglas y formatos que permiten al rastreador identificarse, transmitir posiciones GNSS y telemetría, y notificar eventos de alarma a una plataforma remota. En Plaspy, el protocolo se interpreta como el canal que transforma los mensajes del dispositivo en ubicaciones en vivo, eventos y datos históricos utilizables por flotas y por procesos de antirrobo.

- Permite al BN-311B enviar posición GNSS, velocidad, estado de ignición ACC, estado de batería y alimentación, y eventos de alarma a Plaspy.
- Provee el mecanismo para asociar disparos de geocerca, alertas por exceso de velocidad, alarmas por choque o movimiento y comandos remotos de inmovilización con una identidad de dispositivo específica.
- Soporta múltiples opciones de transporte desde el dispositivo, como TCP, UDP o SMS, para que el rastreador pueda comunicarse con Plaspy en distintas condiciones de red.
- Permite que Plaspy ingiera datos transmitidos en streaming para mapeo en vivo, notificaciones y reproducción histórica de rutas sin requerir que el usuario haga parseo manual por dispositivo.
- Suministra telemetría contextual que Plaspy transforma en alertas e informes para monitoreo operativo y revisión de incidentes.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes entrantes de los rastreadores en un endpoint y puerto compartidos y realiza una detección automática para determinar el protocolo en uso. En la mayoría de los casos, un BN-311B correctamente configurado y apuntando al endpoint de Plaspy será reconocido y procesado sin que sea necesario seleccionar manualmente el protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario elegir un protocolo dentro de la plataforma si el dispositivo está apuntando al endpoint de Plaspy.
- Una identidad de dispositivo correcta y intervalos de reporte estables ayudan a que Plaspy asigne los mensajes a la cuenta y al registro de dispositivo adecuados para un procesamiento confiable.

## Transporte y configuración de conexión

Las opciones de conexión determinan cómo el BN-311B envía sus mensajes a Plaspy e influyen en la configuración del firewall y de la red. El equipo soporta reportes por TCP y UDP y también puede usar SMS como respaldo; Plaspy acepta esos reportes en un endpoint de red común.

- El BN-311B puede usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias de configuración.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, las reglas de red y firewall pueden estandarizarse en las implementaciones.
- El reporte por SMS puede emplearse para la configuración inicial o como fallback cuando GPRS no está disponible, sujeto a las capacidades de la SIM del operador y del dispositivo.
- Elija TCP cuando prefiera mayor fiabilidad de sesión y UDP cuando busque menor overhead o menor latencia, según las condiciones de red y del equipo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes, los campos soportados y las opciones de reporte; verifique la versión de firmware al resolver problemas.
- Las revisiones de hardware y los arneses opcionales pueden exponer u ocultar entradas como ACC o la detección de alimentación externa.
- Los comandos de configuración por parte del fabricante y la configuración por SMS pueden variar según la región o el firmware y afectar la forma en que el dispositivo reporta a Plaspy.
- La selección del transporte entre TCP y UDP puede alterar el comportamiento de entrega; asegúrese de configurar el rastreador para usar el transporte preferido en su red.
- Al usar reportes por SMS, espere diferencias en el formato y la entrega de los datos en comparación con los reportes por GPRS.
- Valide la compatibilidad y las funcionalidades disponibles consultando la documentación oficial de Coban para el BN-311B y las notas de la versión de firmware correspondientes.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el BN-311B ayuda a garantizar una instalación correcta, reportes confiables y una resolución de problemas más rápida al integrarlo con Plaspy. Tener claro el contexto de comunicación reduce el tiempo de configuración y favorece un comportamiento operativo predecible.

- Asegura que la dirección del servidor y la configuración de transporte en el rastreador sean las correctas para que los reportes lleguen a Plaspy de forma fiable.
- Facilita el diagnóstico de problemas de conectividad o de reporte de eventos al saber si el dispositivo utiliza TCP, UDP o SMS.
- Permite una conexión y cableado correctos de alarmas e entradas para que telemetrías como ACC o eventos de choque se reporten como se espera.
- Ayuda a los administradores a planificar reglas de firewall y de red usando el endpoint y puerto compartidos de Plaspy.
- Aumenta la confianza al actualizar firmware o cambiar configuraciones del dispositivo al anticipar efectos relacionados con el protocolo.

## Por qué usar Plaspy con este protocolo

Usar el BN-311B con Plaspy integra las capacidades de un hardware compacto en una plataforma diseñada para rastreo en vivo, alertas y análisis histórico de rutas. La combinación es adecuada para flotas de motocicletas, vehículos de alquiler y propietarios que necesitan una instalación discreta, telemetría y herramientas antirrobo como inmovilización remota y varios tipos de alarma.

Plaspy centraliza la ubicación y los eventos del BN-311B en tableros, notificaciones e informes para apoyar la supervisión operativa y la respuesta ante incidentes. Para conocer más sobre Plaspy y su funcionamiento con dispositivos compatibles visite https://www.plaspy.com. Por favor verifique los últimos detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la documentación del fabricante en https://www.coban.net/ ya que el soporte e implementación del protocolo pueden cambiar con el tiempo.
