---
slug: /ev/ev_07b/protocol
id: ev_07b-protocol
sidebar_label: Protocol
title: EV - EV-07B Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el localizador GPS wearable EV-07B y su comunicación con Plaspy para ubicación SOS y telemetría
keywords:
  - protocolo EV EV-07B
  - rastreador GPS EV-07B
  - protocolo de comunicación EV EV-07B
  - protocolo de dispositivo Plaspy
  - protocolo GPS wearable
  - integración colgante SOS
  - protocolo rastreador personal de seguridad
  - compatibilidad EV-07B Plaspy
  - protocolo de seguimiento GPS EV
  - protocolo rastreador sensores BLE
---

# EV - Protocolo EV-07B

Esta página describe el contexto público del protocolo para usar el localizador GPS wearable Eview EV-07B con la plataforma Plaspy. Se centra en cómo el dispositivo reporta la ubicación, eventos SOS y telemetría básica a Plaspy, y qué esperar en términos de conectividad y compatibilidad. El EV-07B es un colgante SOS compacto que combina GPS, Wi‑Fi, beacon BLE, LBS y soporte para sensores BLE 5.0 para enviar ubicaciones y eventos de alarma a sistemas de monitoreo como Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y no sensible para facilitar la integración y la resolución de problemas.

## Visión general del protocolo

El protocolo de comunicación del EV-07B define cómo el rastreador informa identificadores, fuentes de localización, eventos SOS y telemetría básica a un servidor remoto como Plaspy. La descripción pública siguiente explica el propósito del protocolo sin exponer formatos privados del fabricante.

- Permite que el dispositivo se identifique ante Plaspy y entregue información de identidad y estado que Plaspy puede asociar a una unidad rastreada.
- Transporta informes de ubicación periódicos y por evento ensamblados a partir de GPS, Wi‑Fi, beacon BLE y LBS para su visualización y alertas en Plaspy.
- Lleva señales de SOS y alarmas de emergencia para que Plaspy pueda activar actualizaciones de alta frecuencia, notificaciones y flujos de respuesta.
- Reenvía telemetría básica como estado de batería, detección de caídas y alertas de no movimiento para tareas de monitoreo y mantenimiento.
- Soporta el reenvío de datos de sensores BLE cuando el dispositivo está emparejado con periféricos médicos o ambientales para enriquecer la información situacional en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones hacia un punto de conexión compartido y determina automáticamente el protocolo compatible del rastreador para los dispositivos que reportan allí. Cuando el EV-07B está configurado para enviar informes al endpoint de Plaspy, usted normalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy expone un único endpoint público para el reporte de dispositivos listado como d.plaspy.com y accesible en 54.85.159.138 en el puerto compartido 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, de modo que una sola configuración de salida en el dispositivo puede funcionar para varios modelos.
- Cuando el EV-07B envía sus paquetes de reporte al endpoint de Plaspy, Plaspy enruta los datos entrantes hacia el registro de dispositivo y la canalización de eventos correspondiente.
- En la mayoría de las implementaciones, usted solo necesita configurar el host de reporte del dispositivo a d.plaspy.com o 54.85.159.138 y usar el puerto configurado en el equipo para comenzar la detección automática.
- Si un equipo no aparece en Plaspy tras la configuración, comprobar el destino de reporte, la alcanzabilidad de la red y el protocolo de transporte suele ser el primer paso.

## Transporte y contexto de conexión

El EV-07B puede configurarse para comunicarse con Plaspy a través de transportes IP estándar. Las opciones de conexión y el comportamiento de la red forman parte de la configuración del dispositivo y pueden afectar características de entrega como la fiabilidad y la latencia.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888, según la versión de firmware y los ajustes del dispositivo.
- Los dispositivos pueden apuntar al servidor de Plaspy por nombre de host d.plaspy.com o por la IP 54.85.159.138 si restricciones de DNS o del operador requieren usar una IP.
- Todos los dispositivos en Plaspy emplean el mismo puerto 8888, lo que simplifica la configuración saliente y las reglas de firewall.
- El reporte por UDP puede ofrecer menor sobrecarga y menor latencia para actualizaciones frecuentes de ubicación, mientras que TCP puede utilizarse cuando se prefiera confirmación de entrega y fiabilidad de sesión.
- Operadores de red, comportamiento de NAT y ajustes del carrier celular pueden influir en qué transporte funciona mejor en un despliegue concreto.

## Notas de compatibilidad del protocolo

- El EV-07B se ofrece en varias variantes de hardware y radio incluyendo versiones 2G y 4G LTE; el EV-07BX-4G está certificado por AT&T para redes LTE en EE. UU. según la especificación del proveedor.
- Las versiones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y los transportes soportados; confirme la versión de firmware al validar el comportamiento.
- Las revisiones de hardware y las SKUs regionales pueden modificar bandas de radio, fuentes de localización disponibles o configuraciones de reporte por defecto que afectan la integración.
- Algunas funciones, como el reenvío de sensores BLE, la sensibilidad de detección de caídas y el reporte SOS de alta frecuencia, dependen de la configuración del equipo y de opciones de firmware.
- Elija el tipo de transporte en el dispositivo conforme a las recomendaciones del carrier y las condiciones locales de red para asegurar la entrega confiable a Plaspy.
- Valide siempre la configuración del dispositivo contra la documentación del fabricante para ajustes específicos de modelo y firmware antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Conocer el papel del protocolo de comunicación del EV-07B ayuda a garantizar una configuración fiable, un manejo predecible de alarmas y una resolución de problemas más eficiente al integrar con Plaspy. Tener claridad sobre el protocolo reduce el tiempo de puesta en marcha y mejora la fiabilidad operativa.

- Asegura la configuración correcta de destino y transporte para que el EV-07B alcance Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a interpretar por qué los eventos pueden retrasarse, faltar o duplicarse considerando las elecciones de transporte y el comportamiento del firmware.
- Facilita el mapeo correcto de tipos de eventos del dispositivo como SOS, detección de caídas y alertas de batería hacia los flujos de alarma e informes de Plaspy.
- Hace más sencillo trabajar con carriers y equipos de TI cuando reglas de firewall o ajustes de NAT bloquean las comunicaciones del dispositivo.
- Simplifica la planificación de mantenimiento al entender cómo las actualizaciones de firmware y las variantes de hardware pueden cambiar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el EV-07B con Plaspy integra los datos de seguridad personal wearable en un entorno centralizado de monitoreo y notificaciones. Las organizaciones obtienen visibilidad casi en tiempo real de eventos SOS, actualizaciones de ubicación y telemetría básica para que los respondedores y cuidadores tengan el contexto necesario para actuar con rapidez. La combinación de GPS, Wi‑Fi, beacon BLE, LBS y soporte de sensores BLE del EV-07B se complementa bien con las capacidades de enrutamiento de eventos, manejo de SOS de alta frecuencia y notificaciones de Plaspy.

Para saber más sobre Plaspy y cómo gestiona el reporte de dispositivos y alertas visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo y del firmware específico del dispositivo con el fabricante en http://www.eviewltd.com/ ya que el soporte del protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo y deben confirmarse con la documentación oficial.
