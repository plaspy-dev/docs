---
slug: /winrich/gt02a/protocol
id: gt02a-protocol
sidebar_label: Protocol
title: Winrich - GT02A Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Winrich GT02A para integración con Plaspy, incluyendo guía de conexión y transporte
keywords:
  - Protocolo Winrich GT02A
  - Compatibilidad GT02A con Plaspy
  - Protocolo rastreador GPS Winrich
  - Protocolo de comunicación GT02A
  - Protocolo de seguimiento Winrich GT02A
  - Integración rastreador GPS con Plaspy
  - Rastreo de vehículos GT02A
  - Rastreador GPS GPRS TCP
  - Protocolo rastreador GPS GSM
  - Rastreo de flotas GT02A
---

# Winrich - Protocolo GT02A

Esta página describe el contexto público del protocolo para usar el rastreador GPS Winrich GT02A con Plaspy. Aquí se explican los roles generales de comunicación y los ajustes de conexión que usted debe emplear para enviar datos de ubicación, estado y eventos desde el dispositivo hacia la plataforma Plaspy, sin revelar detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo empieza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información que sigue tiene carácter de contexto de integración general y no pretende ser una referencia específica de firmware.

## Resumen del protocolo

El GT02A transmite información de posición y estado a un servidor remoto mediante conectividad celular. El rastreador puede enviar actualizaciones regulares de ubicación, alertas por eventos e indicadores de salud del dispositivo a Plaspy para que la plataforma provea mapas, notificaciones y reportes telemétricos.

- Permite que el dispositivo reporte coordenadas GPS y telemetría básica a Plaspy para visualización en tiempo real y almacenamiento de historial.
- Facilita que el rastreador se identifique ante el servidor, de modo que Plaspy pueda asociar los datos entrantes con el activo o vehículo correspondiente.
- Admite canales alternativos de entrega para que los datos lleguen a Plaspy incluso si el canal preferido queda temporalmente indisponible.
- Transporta notificaciones de eventos como alertas de movimiento y estados diagnósticos para ayudar a operaciones de flota y administradores a responder incidentes.
- Proporciona los datos con el formato que Plaspy utiliza para poblar paneles, reglas de geocercas y reproducción histórica de rutas.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del dispositivo cuando un rastreador correctamente configurado comienza a reportar. En la mayoría de los casos usted no necesita seleccionar un protocolo en Plaspy si el GT02A está apuntando al endpoint de Plaspy.

- Los dispositivos deben apuntar al dominio del servidor de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de rastreadores y utiliza ese mismo puerto para todos los dispositivos soportados.
- La plataforma detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y del flujo de datos, por lo que normalmente no es necesaria la selección manual del protocolo.
- La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el paso principal para la detección del protocolo.
- Si un dispositivo envía mensajes por SMS como canal de respaldo, esos mensajes también pueden ser procesados por Plaspy según la configuración de la cuenta.

## Contexto de transporte y conexión

Los dispositivos GT02A comúnmente usan datos celulares para entregar reportes de posición y pueden configurarse para usar distintas capas de transporte según los ajustes del equipo y las condiciones de la red. El siguiente resumen agrupa las opciones prácticas para enviar datos a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y la preferencia del instalador.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy acepta el transporte elegido en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos para simplificar la configuración.
- Cuando GPRS TCP está disponible, el rastreador normalmente usará ese canal para actualizaciones regulares, con SMS como respaldo para eventos importantes.
- La confiabilidad de la red y las políticas del operador pueden influir en si TCP o UDP es la mejor opción para una implementación concreta.

## Notas de compatibilidad del protocolo

- El GT02A soporta GPRS TCP para rastreo en vivo y SMS para notificaciones de eventos y reportes de respaldo.
- Revisiones de firmware y variantes de hardware pueden alterar comportamientos concretos, por lo que la compatibilidad debe validarse con las notas de firmware del dispositivo.
- Algunas unidades o variantes regionales pueden preferir TCP mientras que otras permiten UDP; confirme el transporte soportado por su unidad específica.
- Los comandos de configuración del fabricante y las funciones opcionales varían entre modelos y pueden no ser idénticos en todos los GT02A.
- Para instalaciones que requieran E/S adicional o telemetría, como detección de ignición o monitoreo de combustible, verifique si la variante GT02A elegida expone esas señales.
- Siempre contraste la compatibilidad y los pasos de configuración con la documentación del fabricante antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a asegurar una configuración confiable, a facilitar la resolución de problemas y a garantizar un funcionamiento predecible a largo plazo al integrar dispositivos GT02A con Plaspy. Entender el contexto de conexión reduce errores de configuración y acelera la solución de problemas comunes de conectividad.

- Asegura que el dispositivo esté apuntando al endpoint correcto de Plaspy para que los reportes lleguen a su cuenta.
- Ayuda a elegir la configuración de transporte apropiada, TCP o UDP, según la red y el operador.
- Aclara cuándo se usará el respaldo por SMS y cómo eso afecta la entrega de alertas y el diagnóstico.
- Apoya una solución de problemas más amplia, como la verificación de ajustes APN del operador, comportamiento de la captura GPS y reportes relacionados con la alimentación eléctrica.
- Permite visualizar el impacto de cambios de firmware para que los administradores revaliden el reporte de dispositivos tras actualizaciones.

## Por qué usar Plaspy con este protocolo

Usar el GT02A con Plaspy brinda a las organizaciones una vía práctica para obtener visibilidad en tiempo real de sus vehículos, alertas de movimiento y análisis histórico de rutas. El GT02A ofrece los canales básicos de posición y eventos que Plaspy necesita para alimentar paneles de flota, reglas de alertas e informes operativos, mientras que Plaspy gestiona la ingestión, asociación y presentación de los datos entrantes del dispositivo.

Para configurar un GT02A para Plaspy, apunte el dispositivo a d.plaspy.com o a 54.85.159.138 y establezca el transporte apropiado para su equipo en el puerto 8888. Plaspy escucha en el puerto 8888 para conexiones de rastreadores, usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que los dispositivos correctamente configurados normalmente comienzan a reportar sin necesidad de seleccionar manualmente el protocolo. Conozca más sobre Plaspy y las funciones disponibles en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo y deben verificarse con el fabricante en http://www.winrichgroup.com/en/.
