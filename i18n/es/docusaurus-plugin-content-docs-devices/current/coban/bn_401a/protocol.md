---
slug: /coban/bn_401a/protocol
id: bn_401a-protocol
sidebar_label: Protocol
title: Coban - BN-401A Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Coban BN-401A que explica cómo el dispositivo comunica posición y alertas con Plaspy
keywords:
  - protocolo Coban BN 401A
  - protocolo GPS Coban BN 401A
  - protocolo de rastreo Coban BN 401A
  - compatibilidad Coban BN 401A con Plaspy
  - protocolo rastreador GPS Coban
  - protocolo BN 401A
  - BN 401A Plaspy
  - protocolo GPS para motocicletas
  - protocolo de rastreo de vehículos
  - rastreo de flotas Coban
---

# Coban - Protocolo BN-401A

Esta página explica el contexto público del protocolo para usar el Coban BN-401A con Plaspy. Se centra en la comunicación e integración a nivel alto para ayudar a gestores de flotas e integradores a comprender cómo el dispositivo informa posición, estado y alarmas a la plataforma Plaspy sin exponer detalles privados del protocolo.

El BN-401A es compatible con Plaspy de fábrica y entrega posición GNSS, telemetría de eventos y alarmas mediante métodos de transporte estándar. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte la documentación del fabricante para detalles específicos del dispositivo y del firmware.

## Visión general del protocolo

El BN-401A usa su módem celular integrado y opciones de transporte de respaldo para enviar datos de ubicación y eventos a un endpoint remoto. En la práctica, el dispositivo reporta coordenadas GNSS, estado de ACC/ignición, eventos de alarma y telemetría que Plaspy procesa para rastreo en tiempo real y alertas.

- Permite actualizaciones de ubicación en tiempo real y reporte de eventos desde el rastreador a Plaspy
- Transmite señales de estado como ignición ACC, batería baja, alertas por movimiento o choque y eventos SOS
- Admite estrategias configurables de reporte para equilibrar frecuencia de actualizaciones y consumo de datos
- Envía telemetría que Plaspy mapea para ubicación en vivo, reproducción de historial y flujos de trabajo de alarmas
- Utiliza canales de transporte estándar para asegurar entrega resiliente en condiciones de red variables

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente qué protocolo de rastreador se está utilizando. Cuando un BN-401A está configurado para reportar a Plaspy, normalmente será reconocido y procesado sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy acepta conexiones de rastreadores al dominio compartido d.plaspy.com
- La plataforma también acepta conexiones a la IP del servidor 54.85.159.138
- Plaspy escucha en el puerto 8888 y usa ese puerto para todos los dispositivos soportados
- Los dispositivos pueden usar UDP o TCP para reportar al endpoint de Plaspy según la configuración del equipo
- Si el dispositivo está correctamente apuntado al endpoint de Plaspy, por lo general no se requiere elegir el protocolo manualmente en Plaspy

## Transporte y contexto de conexión

El comportamiento de conexión del BN-401A depende de la cobertura celular, la configuración del dispositivo y el modo de transporte elegido. El equipo soporta métodos de transporte TCP, UDP y SMS, por lo que los integradores pueden seleccionar la mejor opción según cobertura y fiabilidad.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Los dispositivos también pueden apuntar directamente al dominio d.plaspy.com o a la dirección numérica del servidor 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los dispositivos para simplificar el onboarding y las reglas de firewall
- TCP ofrece entrega orientada a sesión mientras que UDP puede reducir latencia y sobrecarga según la configuración
- SMS puede usarse como respaldo o para configuración remota cuando la conectividad de datos no está disponible

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el detalle de los mensajes y las funciones disponibles; siempre confirme el nivel de firmware del dispositivo al resolver problemas
- Los comandos de configuración por parte del fabricante y las opciones de setup por SMS pueden diferir entre versiones de firmware
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe coincidir con la configuración del dispositivo
- Algunas funciones, como comportamiento de inmovilizador remoto, umbrales de alarma o intervalos de reporte, se controlan por la configuración del dispositivo más que por la plataforma
- Valide variantes regionales y bandas de red soportadas según la documentación oficial del producto para asegurar compatibilidad celular adecuada
- Ante la duda, consulte los manuales del fabricante para conjuntos de comandos y pasos de configuración específicos del dispositivo

## Por qué es importante entender el protocolo

Comprender cómo se comunica el BN-401A ayuda en la configuración inicial, en la apertura de puertos y reglas de firewall, en la resolución de problemas de conectividad y en garantizar una operación confiable a largo plazo con Plaspy. Tener familiaridad práctica con el modelo de comunicación del dispositivo reduce la incertidumbre durante el despliegue y el soporte.

- Asegura que en el dispositivo se apliquen los ajustes correctos de endpoint y transporte para la ingestión en Plaspy
- Ayuda a diagnosticar por qué un equipo no llega al servidor o por qué los eventos se retrasan
- Orienta las decisiones sobre intervalos de reporte para optimizar uso de datos manteniendo alertas críticas
- Aclara qué señales el rastreador enviará a Plaspy para mapeo, alertas e historial
- Facilita la coordinación entre técnicos de campo y operadores backend durante actualizaciones de firmware o cambios de hardware

## Por qué usar Plaspy con este protocolo

El BN-401A ofrece un rastreador compacto enfocado en motocicletas con la telemetría y señales de alarma comunes que requieren los operadores de flotas. Usarlo con Plaspy proporciona visibilidad centralizada, alertas y reproducción de historial para flotas pequeñas de vehículos, ayudando a reaccionar ante intentos de robo, eventos de ignición y comportamientos anómalos en tiempo real.

Plaspy facilita el onboarding al usar un único endpoint de escucha en d.plaspy.com y 54.85.159.138 en el puerto 8888 para todos los dispositivos y al detectar automáticamente el protocolo del rastreador cuando el dispositivo está apuntado a la plataforma. Para más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo del dispositivo, comportamiento de firmware e información de configuración del fabricante en el sitio oficial de Coban https://www.coban.net/ ya que las implementaciones de dispositivos y los firmwares pueden cambiar con el tiempo.
