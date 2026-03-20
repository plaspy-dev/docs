---
slug: /coban/bn_401d/protocol
id: bn_401d-protocol
sidebar_label: Protocol
title: Coban - BN-401D Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador Coban BN-401D para compatibilidad y configuración con Plaspy
keywords:
- protocolo Coban BN-401D
- protocolo GPS Coban BN-401D
- Coban BN-401D para Plaspy
- protocolo de comunicación Coban BN-401D
- protocolo de rastreo Coban BN-401D
- protocolo rastreador GPS Coban
- compatibilidad BN-401D Plaspy
- rastreador motocicleta BN-401D
- rastreo vehicular Coban BN-401D
- gestión de flotas Plaspy Coban
---

# Coban - Protocolo BN-401D

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GPS Coban BN-401D con Plaspy. Resume cómo se comunica el dispositivo a un alto nivel, las opciones de transporte más comunes y qué verificar al integrar el BN-401D en flujos de trabajo centralizados de rastreo y gestión de flotas en Plaspy. Está pensada para ayudar a técnicos y administradores de flota a comprender el papel comunicacional del equipo sin entrar en detalles propietarios de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento específico del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando la unidad está configurada para reportar al endpoint de Plaspy.

## Resumen del protocolo

El protocolo de comunicación del BN-401D define cómo la unidad informa ubicación, alarmas y estado del dispositivo a un servidor remoto, y cómo se entregan comandos de configuración o control remoto. En una integración con Plaspy, este protocolo permite que la plataforma reciba telemetría y eventos utilizables para visualización, alertas y flujos de trabajo automatizados.

- Permite actualizaciones de posición periódicas y basadas en eventos para que Plaspy muestre ubicación en vivo y reproduzca trayectos históricos
- Transmite eventos de alarma como SOS, impacto, exceso de velocidad y pérdida de alimentación externa para que Plaspy genere notificaciones
- Reporta estado del equipo, incluyendo estado de encendido (ignición) e información de batería para monitoreo y alertas de energía
- Soporta entrega de comandos remotos y configuración a través de las capas de transporte que el dispositivo admite
- Permite que el rastreador se identifique y asocie mensajes con un registro de dispositivo en Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador basándose en los mensajes entrantes y el contexto de la conexión. Esto significa que la mayoría de las unidades BN-401D solo necesitan apuntar al endpoint de Plaspy para ser reconocidas sin selección manual del protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden configurarse para reportar
- La IP del servidor Plaspy es 54.85.159.138 para dispositivos que requieren un destino por IP
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que típicamente no es necesario elegir el protocolo de forma explícita en la plataforma
- Si un dispositivo está reportando correctamente al endpoint de Plaspy, la plataforma asociará los datos entrantes a un perfil de dispositivo y comenzará a procesar la telemetría

## Transporte y contexto de conexión

El transporte de conexión y la configuración del servidor determinan cómo el BN-401D envía datos a Plaspy y cómo se entrega la configuración remota. El BN-401D admite múltiples opciones de transporte y puede configurarse para usar UDP o TCP para reportar a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino de Plaspy
- El puerto es 8888 para todos los dispositivos soportados por Plaspy, lo que simplifica la configuración de firewalls y redes
- Algunas instalaciones usan SMS o canales alternativos para la configuración inicial, pero la telemetría activa normalmente se envía por transporte IP
- Verifique políticas de red y ajustes de APN para asegurar que el rastreador pueda alcanzar el endpoint de Plaspy de forma confiable a través de redes celulares

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de mensajes, las alarmas disponibles y los conjuntos de comandos de configuración; confirme los detalles de firmware al hacer diagnóstico
- Revisiones de hardware o modelos variantes pueden introducir diferencias leves en los campos reportados y en las funciones remotas disponibles
- La selección de transporte TCP o UDP puede afectar el comportamiento de entrega y debe coincidir con la configuración aplicada por el instalador
- Los ajustes por defecto del fabricante pueden requerir actualización de APN y destino del servidor para apuntar a Plaspy
- Siempre valide el mapeo de identidad del dispositivo en Plaspy después de los primeros reportes para garantizar que la telemetría se asocie al activo correcto
- Consulte la documentación del fabricante para funciones que dependen de accesorios opcionales como relevadores o sensores externos

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del BN-401D a un nivel práctico ayuda a asegurar una incorporación fiable del dispositivo y su operación a largo plazo con Plaspy. Saber cómo reporta el rastreador y qué eventos envía reduce el tiempo de configuración y facilita la resolución de problemas.

- Incorporación más rápida al confirmar que APN, servidor y ajustes de transporte coinciden con los requisitos de Plaspy
- Resolución de problemas más efectiva al reconocer causas comunes de reportes faltantes, como desajustes de transporte o comportamientos de firmware
- Mejor configuración e interpretación de alarmas al saber qué eventos del dispositivo se reportarán a Plaspy
- Planificación de red y reglas de firewall más sencilla, dado que Plaspy usa un puerto conocido para todos los dispositivos
- Expectativas claras sobre funciones de control remoto que dependen del firmware y del modelo variante del dispositivo

## Por qué usar Plaspy con este protocolo

Combinar el Coban BN-401D con Plaspy ofrece una vía directa para el rastreo centralizado de motocicletas y vehículos pequeños, protección contra robo y monitoreo operativo. El BN-401D aporta reportes con detección de encendido, alarmas y funciones de inmovilización remota que se integran bien con los paneles, alertas y herramientas de reproducción de Plaspy tanto para propietarios de un solo vehículo como para operadores de flotas.

Para obtener más información sobre Plaspy y su integración con dispositivos como el BN-401D, visite https://www.plaspy.com. Para obtener detalles específicos del protocolo del dispositivo, notas de firmware y guías de implementación más actualizadas consulte la documentación del fabricante en https://www.coban.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
