---
slug: /winrich/gt06/protocol
id: gt06-protocol
sidebar_label: Protocol
title: Winrich - GT06 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Winrich GT06 con Plaspy y habilitar seguimiento GPS en tiempo real y telemetría
keywords:
  - protocolo Winrich GT06
  - protocolo GPS GT06
  - Winrich GT06 Plaspy
  - protocolo de rastreo GT06
  - protocolo de rastreador GPS Winrich
  - protocolo de comunicación GT06
  - GT06 GPRS GPS
  - rastreo de vehículos GT06
  - rastreo de flotas GT06
  - compatibilidad de dispositivos Plaspy
---

# Winrich - Protocolo GT06

Esta página describe el contexto público del protocolo para usar el rastreador Winrich GT06 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, los ajustes de conexión que debe usar para apuntar un GT06 a Plaspy y el papel que juega el protocolo del rastreador al entregar ubicación, telemetría y eventos de alarma a la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo para el GT06 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El GT06 admite reporte por GPRS/TCP además de configuración por SMS y respuestas de posición por SMS; por eso, la configuración del dispositivo y el estado del firmware determinan el comportamiento observado.

## Resumen del protocolo

El protocolo del GT06 define cómo el rastreador se identifica, informa posición y telemetría, y envía eventos de alarma a un servidor remoto. Para la integración con Plaspy, lo importante públicamente es cómo se apunta el dispositivo al endpoint de Plaspy y cómo transmite estado y alertas a través de datos móviles o SMS.

- Permite informes periódicos y por evento para que Plaspy muestre ubicación en tiempo real e historial.
- Transporta campos de telemetría como estado de ACC (encendido), SOS, alarma de vibración y estado de batería/energía.
- Transmite eventos de alarma y cambios de estado para que Plaspy pueda activar alertas, notificaciones y reglas.
- Admite comandos remotos y configuración vía SMS o GPRS cuando el firmware del dispositivo lo permite.
- Ofrece una vía de respaldo por SMS para posición o configuración cuando GPRS no está disponible.

## Cómo detecta Plaspy el protocolo

Plaspy acepta datos de dispositivos apuntados al endpoint público de Plaspy y determina automáticamente el protocolo del rastreador cuando llega un informe válido. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el GT06 está correctamente configurado para reportar al endpoint de Plaspy.

- Apunte el GT06 al dominio del servidor d.plaspy.com o a la IP del servidor 54.85.159.138 para la entrega de datos.
- Plaspy escucha en un único puerto compartido para todos los dispositivos, lo que simplifica la configuración entre modelos.
- El puerto usado por Plaspy para los reportes de dispositivos es 8888, y Plaspy detecta automáticamente el protocolo del rastreador en ese puerto.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP según el firmware y la configuración del usuario.
- Cuando un informe con el formato adecuado llega al endpoint de Plaspy, la plataforma asocia el dispositivo y empieza a parsear su telemetría automáticamente.

## Contexto de transporte y conexión

Los detalles de conexión influyen en cómo el GT06 alcanza a Plaspy y si los reportes llegan de manera fiable a través de las redes móviles. El GT06 permite configurar el servidor y el puerto por SMS o mediante su menú de configuración, y la selección del transporte de red afecta el comportamiento de entrega.

- El GT06 puede enviar datos usando UDP o TCP al puerto 8888, según el soporte del dispositivo y la configuración seleccionada.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos de Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y NAT en el lado receptor.
- Si GPRS no está disponible, el GT06 normalmente soporta reportes basados en SMS y comandos SMS para configurar servidor y APN.
- Verifique la configuración de APN y conectividad GPRS en el equipo para que pueda abrir una sesión de datos y alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos disponibles, sintaxis de comandos y comportamiento de transporte del GT06.
- Las revisiones de hardware o variantes regionales pueden alterar levemente las alarmas soportadas o las convenciones de cableado de entradas.
- Los conjuntos de comandos SMS del fabricante para configurar IP y puerto son comúnmente soportados, pero pueden variar según el firmware.
- Seleccionar UDP frente a TCP en el dispositivo puede afectar la entrega y la retransmisión en condiciones de señal débil.
- Valide la compatibilidad y las funciones disponibles con la unidad GT06 que tenga, ya que los valores por defecto del proveedor pueden ser distintos.
- En caso de duda, pruebe el reporte en un entorno controlado antes de un despliegue amplio para confirmar que Plaspy recibe la telemetría esperada.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GT06 ayuda a una configuración precisa, una resolución de problemas más rápida y un funcionamiento confiable a largo plazo cuando se usa con Plaspy. Aunque Plaspy detecta protocolos automáticamente, entender el transporte, los comandos de configuración y los modos de fallo comunes acelera la resolución y evita lagunas de datos.

- Asegura la configuración correcta de servidor y puerto para que el equipo pueda alcanzar Plaspy.
- Facilita la solución de problemas de conectividad como APN mal configurado, restricciones del operador o puertos bloqueados.
- Aclara cómo se informan y gestionan alarmas como SOS, vibración y corte de energía en la plataforma.
- Orienta el uso seguro de funciones remotas como relés, entendiendo limitaciones de velocidad y seguridad impuestas por el dispositivo.
- Ayuda en la planificación de actualizaciones de firmware y en la verificación de que el nuevo firmware conserve el comportamiento de reporte necesario.

## Por qué usar Plaspy con este protocolo

Usar el GT06 con Plaspy brinda a las organizaciones acceso sencillo a ubicación en tiempo real, enrutamiento de alarmas e informes históricos sin trabajo de integración complejo. La combinación del GT06 de transporte de datos GPRS TCP, opciones de configuración por SMS y entradas telemáticas para vehículos como ACC, SOS y sensores de vibración lo hacen práctico para muchas aplicaciones de flotas y seguridad cuando se apunta a Plaspy.

Para saber más sobre Plaspy y cómo gestiona el reporte de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación específicos pueden cambiar con el tiempo, por lo que verifique los detalles más recientes del GT06 en el sitio del fabricante http://www.winrichgroup.com/en/ antes de un despliegue amplio.
