---
slug: /winrich/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: Winrich - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Winrich TK103 para comunicación y compatibilidad con Plaspy en rastreo vehicular confiable
keywords:
  - protocolo Winrich TK103
  - protocolo GPS Winrich TK103
  - compatibilidad TK103 Plaspy
  - comunicación rastreador Winrich
  - protocolo de rastreo vehicular TK103
  - integración rastreador Plaspy
  - guía protocolo rastreador GPS
  - informes GPRS SMS TK103
  - rastreo de flotas Winrich TK103
  - documentación protocolo rastreador
---

# Winrich - TK103 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Winrich TK103 con Plaspy. Explica cómo el dispositivo se comunica con los servidores de Plaspy en términos generales, qué ajustes de conexión se utilizan y de qué manera esa comunicación permite monitoreo en tiempo real, alertas y reproducción histórica sin exponer detalles internos del firmware.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta correctamente al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento se centra en el transporte y en orientación práctica de compatibilidad en lugar de en detalles internos del dispositivo.

## Resumen del protocolo

El TK103 utiliza GPRS sobre la red GSM como vía principal para enviar datos y SMS como respaldo para reportar posiciones, alarmas y telemetría. El papel del protocolo es ofrecer un canal interoperable para que el rastreador se identifique, transmita ubicación y estado, y permita configuración remota cuando el dispositivo y la red lo soportan.

- Permite al rastreador enviar coordenadas GPS, marca temporal y telemetría básica a Plaspy para visualización en vivo y registro histórico.
- Transporta mensajes de alarma y estado como alertas de emergencia, estado de ignición y notificaciones de conectividad.
- Soporta comandos de configuración remota cuando el dispositivo y la instalación exponen esas capacidades.
- Proporciona rutas de respaldo, por ejemplo SMS, para alertas críticas cuando la conectividad GPRS no está disponible.
- Actúa como puente entre la instalación física del rastreador y la telemetría en Plaspy, habilitando flujos de trabajo y alertas para flotas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que usted rara vez necesita seleccionar el protocolo de forma manual. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática y la integración exitosa.

- Los dispositivos deben configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto común de Plaspy.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos a ese puerto.
- Si el rastreador está configurado correctamente para enviar datos al endpoint de Plaspy, normalmente no será necesario seleccionar un protocolo en Plaspy de forma manual.
- La detección automática de Plaspy simplifica la incorporación de unidades TK103 en flotas mixtas y reduce pasos de configuración para los administradores.
- Intervalos de reporte consistentes y campos de identificación válidos desde el dispositivo ayudan a Plaspy a identificar el modelo y comenzar a procesar los datos para su visualización y alertas.

## Contexto de transporte y conexión

El TK103 puede usar transporte IP vía GPRS o SMS, según la configuración y la disponibilidad de la red. Para transporte IP, el equipo puede estar configurado para usar UDP o TCP hacia Plaspy; los administradores deben confirmar que los ajustes del dispositivo coincidan con el tipo de transporte deseado.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando no haya resolución DNS disponible.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración de firewall y de red en flotas gestionadas.
- GPRS/Internet es el canal principal para telemetría en tiempo real, mientras que SMS funciona como respaldo de emergencia para mensajes críticos.
- Asegúrese de que el APN y las credenciales GPRS del TK103 sean correctas y de que el transporte elegido (UDP o TCP) esté soportado por el firmware del dispositivo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware y hardware del TK103 pueden cambiar las funciones disponibles y el comportamiento exacto de los reportes; verifique la versión de firmware al solucionar problemas.
- Los comandos de configuración del fabricante y los menús terminales pueden variar entre versiones regionales; consulte el manual del dispositivo para los pasos de configuración.
- La selección de transporte (UDP frente a TCP) depende del soporte del dispositivo y puede afectar la semántica de entrega; configure el rastreador para que coincida con la política de su red.
- El comportamiento de respaldo por SMS está influido por las condiciones del operador y por la prioridad configurada entre SMS y GPRS en el equipo.
- Los modos de monitoreo en grupo y reporte multi vehículo dependen de la variante del TK103 y de cómo se asignen los identificadores en la configuración del dispositivo.
- Valide siempre la compatibilidad y los ajustes según la documentación oficial de Winrich y la unidad específica que vaya a desplegar.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TK103 ayuda a los administradores a completar la instalación, diagnosticar problemas de conectividad y mantener telemetría confiable para el uso operativo en Plaspy. La comprensión práctica del protocolo reduce el tiempo de incorporación y mejora la disponibilidad a largo plazo.

- Contribuye a garantizar APN correcto, dirección del servidor y ajustes de transporte para que los datos lleguen a Plaspy de forma fiable.
- Agiliza la resolución de problemas por reportes perdidos al aclarar si el problema es de transporte, SIM o del dispositivo.
- Permite ajustar expectativas sobre qué telemetría y qué alarmas puede enviar el dispositivo a Plaspy según el firmware y la configuración.
- Ayuda a planificar reglas de firewall en la red, ya que Plaspy usa un único puerto que debe permitirse para el tráfico de los dispositivos.
- Apoya la toma de decisiones sobre usar respaldo por SMS frente a GPRS para alertas críticas en escenarios de baja cobertura.

## Por qué usar Plaspy con este protocolo

Usar el Winrich TK103 con Plaspy ofrece a las organizaciones un camino directo desde la instalación del dispositivo hasta la visibilidad operativa. La forma compacta del equipo, su capacidad de reporte en modos duales y las opciones de configuración remota lo convierten en una elección práctica para rastreo vehicular, monitoreo antirrobo y coordinación de flotas cuando se combina con los paneles y las funciones de alertas de Plaspy.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. El soporte del protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente sobre el protocolo y las notas de firmware en el sitio del fabricante http://www.winrichgroup.com/en/.
