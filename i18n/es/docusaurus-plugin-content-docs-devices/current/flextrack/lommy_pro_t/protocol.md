---
slug: /flextrack/lommy_pro_t/protocol
id: lommy_pro_t-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Pro T Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Flextrack Lommy Pro T con Plaspy y vigilar la cadena de frío
keywords:
  - protocolo Flextrack Lommy Pro T
  - rastreador GPS Lommy Pro T
  - comunicaciones Lommy Pro T
  - compatibilidad Lommy Pro T Plaspy
  - protocolo rastreador monitoreo de temperatura
  - telemetría GPS cadena de frío
  - integración de dispositivos Plaspy
  - telemetría GPS y de temperatura
  - seguimiento de flota Lommy Pro T
  - guía de integración Lommy Pro T
---

# Flextrack - Protocolo Lommy Pro T

Esta página resume el contexto público del protocolo para usar el dispositivo Flextrack Lommy Pro T con Plaspy. Se enfoca en cómo el rastreador comunica telemetría útil y ubicación a Plaspy sin exponer detalles privados de implementación. El objetivo es ayudar a operadores de flotas y de cadena de frío a comprender el papel del protocolo del dispositivo en la integración y en las operaciones diarias.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según el firmware, la revisión de hardware y la implementación del fabricante; considere el material aquí como contexto de alto nivel que complementa la documentación oficial de Flextrack.

## Resumen del protocolo

El protocolo de reporte del Lommy Pro T es el mecanismo que el dispositivo utiliza para enviar estimaciones de ubicación por GPS y GSM, telemetría de temperatura y alarmas de eventos a un servidor remoto. En una implementación con Plaspy, el protocolo garantiza que las actualizaciones periódicas, las alarmas y el estado lleguen de forma consistente para que Plaspy las presente y archive.

- Transmite lecturas del sensor de temperatura y registros ambientales junto con los datos de ubicación para visibilidad de la cadena de frío.
- Envía alarmas basadas en eventos, como excursiones de temperatura y cambios en el estado de alimentación, a Plaspy para notificación inmediata.
- Identifica el dispositivo y su sesión de reporte para que Plaspy asigne la telemetría entrante al registro de activo correcto.
- Permite el registro histórico con marcas de tiempo para soportar evidencia regulatoria y revisiones forenses dentro de Plaspy.
- Soporta flujos de configuración remota y gestión cuando el dispositivo y el firmware del fabricante exponen esas funciones a la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un único endpoint y puerto compartidos y aplica detección automática de protocolo, de modo que la mayoría de los dispositivos no requieren selección manual de protocolo dentro de Plaspy. La condición principal para que la detección automática funcione es que el dispositivo esté correctamente configurado para apuntar al endpoint de Plaspy.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el puerto 8888 para reportes, lo que simplifica el despliegue y la configuración de firewall.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta y comienza a reportar al endpoint de Plaspy.
- En la mayoría de los casos no necesitará elegir un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy en el transporte y puerto correctos.
- Asegúrese de que el ID del dispositivo y los ajustes de intervalo de reporte en el rastreador estén configurados según las indicaciones de Flextrack para que Plaspy pueda empatar los mensajes entrantes con el activo correcto.

## Contexto de transporte y conexión

Los detalles de conexión son una parte crítica de la integración exitosa del dispositivo. Los Lommy Pro T pueden configurarse para usar UDP o TCP según el soporte del dispositivo y la configuración elegida. Plaspy admite ambos transportes en el mismo puerto para adaptarse a distintas preferencias de despliegue y entornos de red.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos compatibles con Plaspy usan ese mismo puerto.
- El Lommy Pro T puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración.
- Elegir UDP puede reducir la sobrecarga de reporte y es común para actualizaciones de telemetría pequeñas y frecuentes; TCP es recomendable cuando se prefiere entrega confiable por conexión.
- Las políticas de red y el comportamiento NAT del operador móvil pueden influir en la elección del transporte y deben considerarse durante las pruebas.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir o cambiar campos de telemetría, intervalos de reporte y comportamiento de alarmas; registre siempre el firmware usado durante la validación.
- Las revisiones de hardware pueden afectar los sensores soportados o sus rangos; confirme la revisión del Lommy Pro T contra las publicaciones de Flextrack.
- Herramientas de configuración del fabricante o servicios de configuración vía SIM pueden alterar cómo reporta el dispositivo y qué transporte se utiliza.
- La selección del transporte influye en la confiabilidad y en la capacidad de atravesar firewalls; valide el comportamiento de UDP y TCP en su red.
- La detección automática de Plaspy reduce la configuración manual pero depende de que el rastreador tenga los ajustes de destino correctos.
- Para casos críticos de cadena de frío, realice una validación por etapas y un periodo de muestreo antes del despliegue a toda la flota.
- Confirme con Flextrack cualquier capacidad de comandos remotos o configuración a distancia, ya que esas capacidades dependen del firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Lommy Pro T ayuda a los administradores a evitar errores de configuración comunes, acelerar la resolución de problemas y garantizar la integridad de los datos y el cumplimiento a largo plazo cuando usan Plaspy.

- Asegura que el rastreador esté configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir los datos.
- Facilita el diagnóstico de problemas de conectividad revisando la elección del transporte, la conectividad de la SIM y las condiciones del operador.
- Aclara qué tipos de telemetría y alarmas puede esperar para reportes regulatorios y flujos de trabajo automatizados.
- Guía las estrategias de prueba para que alarmas de temperatura, geocercas y registro se comporten según lo requerido en condiciones operativas.
- Apoya el control de cambios al actualizar firmware o desplegar revisiones de hardware en la flota.

## Por qué usar Plaspy con este protocolo

Combinar el Lommy Pro T con Plaspy brinda a los equipos de operaciones acceso centralizado tanto a telemetría precisa de temperatura como al contexto de ubicación. Esta visibilidad combinada permite actuar rápidamente ante excursiones de temperatura, mantener registros certificados para auditorías y localizar activos en tránsito o almacenamiento. La plataforma de Plaspy está diseñada para aceptar telemetría de rastreadores compatibles y mostrarla junto con mapas, historial de eventos y flujos de alarmas para apoyar a operadores de cadena de frío y gestores de flota.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles como el Flextrack Lommy Pro T visite https://www.plaspy.com. Para detalles más específicos del protocolo del dispositivo, notas de firmware y revisiones de hardware consulte la documentación del fabricante en https://flextrack.dk ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
