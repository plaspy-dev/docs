---
slug: /telic/sbc_avl/protocol
id: sbc_avl-protocol
sidebar_label: Protocol
title: Telic - SBC AVL Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Telic SBC AVL y su comunicación con Plaspy para seguimiento y telemetría de flotas
keywords:
  - Telic SBC AVL
  - protocolo Telic SBC AVL
  - rastreador GPS SBC AVL
  - SBC AVL Plaspy
  - telemática Telic
  - seguimiento de vehículos Telic
  - telemática CAN bus
  - integración 1 wire
  - gestión de flotas GPS
  - comunicación de rastreador GPS
---

# Telic - Protocolo SBC AVL

Esta página describe el contexto público del protocolo usado por el rastreador Telic SBC AVL cuando se integra con Plaspy. Explica a alto nivel cómo suele comunicarse el SBC AVL con la plataforma de Plaspy y qué papel tiene el protocolo de reporte del dispositivo en el seguimiento de flotas, sin exponer detalles internos ni lógica privada de parsing.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento sirve como guía general para la configuración y resolución de problemas mientras usted verifica detalles específicos con la documentación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes que el SBC AVL envía a un servidor backend para entregar posición, telemetría y datos de interfaces. Para la integración con Plaspy, el protocolo permite que el dispositivo se identifique, transmita datos de GPS e interfaz de vehículo, y que la plataforma registre e interprete eventos para la gestión de la flota.

- Proporciona un flujo transportable de ubicación GPS, hora y actualizaciones de estado desde el dispositivo hacia la plataforma.
- Transporta datos de interfaz de vehículo como CAN bus y entradas 1 wire para que Plaspy muestre diagnósticos y eventos de detección de conductor.
- Transmite identidad del dispositivo e información de sesión para que Plaspy asocie los mensajes entrantes con el registro de vehículo correcto.
- Soporta reportes periódicos y mensajes disparados por eventos usados en flujos de trabajo de flota como geocercas, detección de movimiento y comportamiento del conductor.
- Sirve como base para comandos remotos o respuestas que el fabricante implemente, manteniendo el parseo de la plataforma lo más genérico posible.

## Detección del protocolo por parte de Plaspy

Plaspy escucha las conexiones de dispositivos en un único endpoint compartido y determina automáticamente el protocolo de los mensajes entrantes. En la mayoría de los casos, basta con que el dispositivo esté configurado para reportar a Plaspy y no se requiere seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar sus mensajes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente dirigido al endpoint de la plataforma.
- Normalmente los usuarios no necesitan elegir un protocolo en Plaspy si el rastreador está configurado para enviar al endpoint de Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el onboarding.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el SBC AVL alcanza el servidor de Plaspy sin entrar en los detalles del formato de los mensajes. El rastreador puede usar transporte UDP o TCP según la configuración del dispositivo y las capacidades del firmware, y debe apuntar al endpoint de Plaspy para que la plataforma lo procese.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 para el endpoint de Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del cliente.
- El puerto 8888 es el que usa Plaspy para todos los dispositivos, proporcionando un objetivo consistente para configurar los rastreadores.
- Elegir UDP o TCP afecta el comportamiento de reenvío y ordenamiento a nivel de transporte, pero no impide la detección automática del protocolo por parte de Plaspy.
- Verifique que las reglas de salida de la red móvil permitan tráfico hacia el endpoint y el puerto de Plaspy para garantizar reportes confiables.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden cambiar el timing de mensajes, los campos disponibles y las interfaces opcionales que expone el dispositivo.
- Revisiones de hardware u módulos opcionales pueden añadir o quitar interfaces como canales CAN bus o sensores 1 wire que afectan los datos reportados.
- Los menús de configuración del fabricante a veces permiten seleccionar el transporte, así que confirme si el dispositivo debe usar UDP o TCP para llegar a Plaspy.
- Plaspy detecta el protocolo automáticamente, pero se requiere un endpoint y puerto de red correctamente configurados para que la detección tenga éxito.
- Siempre valide que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 cuando realice pruebas de conectividad.
- Para conjuntos de comandos específicos del dispositivo, comportamiento en condiciones límite o historial de cambios de firmware, consulte la documentación del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo el SBC AVL se comunica con Plaspy mejora el éxito en la configuración y reduce el tiempo de resolución de problemas al dejar claro qué espera recibir la plataforma y cómo debe configurarse el dispositivo.

- Ayuda a confirmar que el dispositivo apunta al endpoint y a los ajustes de transporte correctos para que los mensajes lleguen de forma fiable.
- Facilita identificar si un problema es de red, de configuración o del firmware del dispositivo.
- Orienta la decisión de usar UDP o TCP según las características de la red en un despliegue concreto.
- Permite a los administradores de flota interpretar qué tipos de datos de vehículo y sensores puede suministrar el dispositivo a Plaspy.
- Apoya la planificación de actualizaciones de firmware o cambios de hardware anticipando diferencias posibles en el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el Telic SBC AVL con Plaspy ofrece una vía directa para capturar ubicación, datos CAN bus y sensores 1 wire en una sola plataforma que centraliza la visibilidad de la flota. Las antenas GSM y GPS integradas del dispositivo, junto con sus interfaces telemáticas, lo hacen adecuado para casos de uso comunes de gestión de flotas, como rastreo, detección de conductor y diagnósticos básicos.

Si desea obtener más información sobre cómo Plaspy puede trabajar con dispositivos como el Telic SBC AVL visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente en el sitio del fabricante https://www.telic.de.
