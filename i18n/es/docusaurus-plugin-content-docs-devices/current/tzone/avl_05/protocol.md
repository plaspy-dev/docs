---
slug: /tzone/avl_05/protocol
id: avl_05-protocol
sidebar_label: Protocol
title: TZone - AVL-05 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para compatibilidad del TZone AVL-05 con Plaspy, con contexto de conexión y notas de integración
keywords:
  - TZone AVL-05
  - protocolo AVL-05
  - localizador GPS TZone
  - protocolo de rastreo AVL-05
  - protocolo TZone Plaspy
  - rastreo GPS de vehículos
  - rastreo para gestión de flotas
  - protocolo de comunicación del rastreador
  - rastreador GPRS TCP UDP
  - integración de rastreo de vehículos
---

# TZone - Protocolo AVL-05

Esta página describe el contexto público del protocolo para usar el rastreador GPS vehicular TZone AVL-05 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, qué ajustes de conexión se emplean y consideraciones prácticas para la integración sin exponer detalles propietarios o sensibles de implementación.

El AVL-05 es un rastreador versátil que soporta reporte por GPRS via TCP y UDP, respaldo por SMS, alarmas y sensores opcionales. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página le ayudará a entender el papel de la comunicación y los puntos de integración al emparejar un AVL-05 con Plaspy.

## Visión general del protocolo

El protocolo de comunicación del AVL-05 regula cómo el dispositivo reporta ubicación, estado, alarmas e información diagnóstica a un servidor remoto. Para la integración con Plaspy, los aspectos públicos del protocolo determinan cómo el rastreador se identifica, cómo se transmiten las actualizaciones y qué métodos de transporte se usan para entregar telemetría útil a la plataforma.

- Permite que el rastreador envíe ubicación GPS, marca de tiempo y actualizaciones de estado a un endpoint remoto configurado por el usuario o el instalador.
- Transmite notificaciones de alarmas y eventos como exceso de velocidad, geovallas, batería baja y encendido/apagado del motor para su procesamiento oportuno por Plaspy.
- Soporta múltiples transportes comúnmente usados en rastreadores vehiculares, permitiendo reporte por GPRS usando TCP o UDP y SMS como canal secundario.
- Proporciona identidad del dispositivo y secuencia de mensajes que permiten al servidor receptor asociar los reportes con un vehículo o activo específico.
- Permite comandos remotos y configuración cuando el dispositivo y el firmware del fabricante lo soportan, habilitando acciones como control del motor o ajuste de intervalos de reporte.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint compartido y usa detección automática para reconocer el protocolo del rastreador. Cuando un AVL-05 está configurado correctamente para reportar a Plaspy, la plataforma normalmente identificará el protocolo del dispositivo sin que el usuario tenga que seleccionarlo manualmente.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos; este mismo puerto se usa en todos los dispositivos soportados por la plataforma.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y la configuración del sitio.
- Debido a la detección automática de protocolos de Plaspy, la mayoría de los usuarios no necesitan elegir manualmente una opción de protocolo dentro de Plaspy si el dispositivo está apuntando correctamente al endpoint de Plaspy.
- La identificación correcta del dispositivo y una conectividad estable son los requisitos principales para la detección automática del protocolo y una incorporación exitosa.

## Transporte y contexto de conexión

El contexto de conexión es importante para el reporte confiable y la resolución de problemas. El AVL-05 puede enviar datos por GPRS usando TCP o UDP y también puede usar SMS para funciones específicas, por lo que comprender las opciones de transporte y la configuración de endpoint que utiliza Plaspy ayuda a asegurar una entrega consistente.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy recibe el tráfico de los rastreadores en el puerto 8888, y este puerto es el mismo para todos los dispositivos que la plataforma soporta.
- El AVL-05 comúnmente soporta tanto transportes UDP como TCP; el transporte elegido afecta el comportamiento de la conexión y debe coincidir con la configuración del equipo.
- Al configurar el rastreador, establezca el host de reporte en d.plaspy.com o 54.85.159.138 y el puerto de reporte en 8888, y seleccione TCP o UDP según la capacidad del dispositivo.
- El reporte por SMS y el comportamiento ocasional en roaming pueden ofrecer caminos de respaldo o alternativos, pero el reporte primario por GPRS a Plaspy es generalmente preferido para telemetría continua.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o campos envía el dispositivo; siempre registre el nivel de firmware al validar el comportamiento.
- Las revisiones de hardware o accesorios opcionales como sensores de temperatura o combustible pueden modificar el conjunto de telemetría y alarmas disponibles.
- La elección entre TCP y UDP puede afectar la confiabilidad y el comportamiento de reconexión en redes móviles.
- Los menús de configuración del fabricante y los ajustes por defecto pueden variar según la región o el distribuidor; revise la configuración del equipo después de la instalación.
- Las funciones por SMS pueden ser útiles para rastreo básico o comandos remotos cuando GPRS no está disponible, pero las cargas útiles y formatos SMS pueden variar.
- Valide cualquier necesidad avanzada, como corte remoto de motor o audio bidireccional, consultando la documentación del fabricante y la versión de firmware que tenga instalada.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a instaladores, integradores y gestores de flota a lograr conectividad fiable, reportes precisos y una resolución de problemas eficiente al usar el AVL-05 con Plaspy.

- Asegura que el rastreador apunte al endpoint y transporte correctos de Plaspy para que los reportes lleguen de forma consistente.
- Ayuda a diagnosticar problemas comunes de conectividad confirmando si el dispositivo está usando TCP o UDP y verificando la configuración del endpoint.
- Aclara qué alarmas y datos de sensores estarán disponibles en Plaspy según la configuración del dispositivo y el soporte del firmware.
- Apoya la planificación del comportamiento en roaming, respaldos por SMS y el uso de datos al desplegar dispositivos en distintas regiones.
- Facilita actualizaciones de firmware y cambios de configuración al destacar dónde el protocolo o el comportamiento de los mensajes puede diferir entre versiones.

## Por qué usar Plaspy con este protocolo

Usar el AVL-05 con Plaspy brinda a las organizaciones una plataforma unificada para monitorear ubicación de vehículos, alarmas y métricas operativas. Plaspy recoge la telemetría que los dispositivos envían a su endpoint compartido y la presenta en paneles y alertas que soportan flujos de trabajo de seguridad, recuperación y gestión de flotas. La detección automática de protocolos de la plataforma y el uso de un solo puerto simplifican la incorporación y reducen errores de configuración durante el despliegue.

Para obtener más información sobre el uso de Plaspy con el TZone AVL-05 y otros dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo y del firmware en el sitio del fabricante http://www.tzonedigital.com/ antes de finalizar integraciones.
