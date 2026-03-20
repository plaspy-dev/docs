---
slug: /cantrack/g02m/protocol
id: g02m-protocol
sidebar_label: Protocol
title: CanTrack - G02M Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar CanTrack G02M con el servidor Plaspy d.plaspy.com puerto 8888 para reportes por GPRS y SMS
keywords:
  - Protocolo CanTrack G02M
  - Protocolo GPS CanTrack G02M
  - Protocolo de rastreo CanTrack G02M
  - Comunicacion CanTrack G02M
  - Protocolo rastreador de mascotas CanTrack
  - Rastreador compatible con Plaspy
  - Rastreador G02M GPRS
  - Protocolo rastreador GPS Plaspy
  - Integración dispositivo CanTrack
  - Guía del protocolo G02M
---

# CanTrack - Protocolo G02M

Esta página documenta, en términos públicos y no sensibles, cómo se integra el rastreador CanTrack G02M con la plataforma Plaspy. El foco está en la comunicación y las consideraciones de integración relevantes cuando se configura un G02M para reportar ubicación a Plaspy para seguimiento en tiempo real, alertas y reproducción histórica, más que en detalles internos de bajo nivel del protocolo.

El G02M es un rastreador compacto GPS/GSM/GPRS diseñado para mascotas que puede enviar ubicaciones vía GPRS o responder por SMS con enlaces a Google Maps. Plaspy emplea ajustes de conexión compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página explica cómo suele comunicarse el G02M con Plaspy de forma general.

## Visión general del protocolo

El protocolo del rastreador define cómo el G02M entrega información de posición, estado y alertas a un servidor remoto y cómo se pueden realizar configuraciones mediante SMS. Para la integración con Plaspy, el objetivo del protocolo es permitir que el dispositivo se identifique, transmita coordenadas y telemetría útiles, y notifique eventos como salidas de geovalla o batería baja.

- Permite cargas periódicas o por eventos de ubicación para que Plaspy pueda mostrar la posición en vivo y almacenar rutas históricas.
- Transporta telemetría básica y señales de alerta, como notificaciones de geovallas y alarmas de batería baja, para que Plaspy las procese y reenvíe.
- Soporta tanto subidas a servidor por GPRS como respuestas por SMS, ofreciendo opciones flexibles para consultas puntuales o monitoreo continuo.
- Proporciona un flujo de datos consistente que Plaspy utiliza para correlacionar la identidad del dispositivo con registros de cuenta y visualizaciones en el mapa.
- Abstrae los detalles específicos del dispositivo para que Plaspy presente ubicaciones y alertas a los usuarios sin exponer internals del hardware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de rastreadores mediante un punto de conexión y puerto compartidos, y detecta automáticamente qué protocolo emplea un dispositivo entrante. Cuando un G02M está configurado para reportar a Plaspy, la plataforma normalmente reconoce el formato y registra el dispositivo sin que el usuario tenga que seleccionar el protocolo manualmente.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública es 54.85.159.138.
- El puerto estándar para conexiones de dispositivos es el 8888 y Plaspy detecta automáticamente el protocolo del rastreador.
- Normalmente usted no necesita elegir un protocolo dentro de Plaspy si el G02M está apuntando al endpoint de Plaspy.
- Plaspy agrupa todos los dispositivos en el mismo puerto y esquema de enrutamiento para procesar los reportes entrantes de forma uniforme.
- La detección se basa en la presencia y estructura de los reportes recibidos más que en configuraciones manuales cuando el dispositivo apunta al endpoint de Plaspy.

## Transporte y contexto de conexión

La elección del transporte depende mayormente del firmware y la configuración del G02M. El dispositivo soporta subidas por GPRS a un servidor de seguimiento y puede configurarse para usar UDP o TCP como protocolo de transporte al reportar a Plaspy en el puerto compartido.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las preferencias del usuario.
- Los rastreadores destinados a Plaspy deben apuntar a d.plaspy.com o directamente a 54.85.159.138 como destino de subida.
- El uso del mismo puerto para todos los dispositivos simplifica la configuración de servidor y el aprovisionamiento de equipos.
- La subida por GPRS es el transporte principal para seguimiento continuo, mientras que las respuestas por SMS facilitan consultas puntuales.
- La selección del transporte afecta las garantías de entrega pero no el modelo de reporte de alto nivel que Plaspy usa para mostrar ubicaciones y alertas.

## Notas sobre compatibilidad del protocolo

- El G02M es compatible con Plaspy si se configura para subir datos al endpoint de Plaspy por GPRS o para enviar respuestas por SMS para consultas rápidas de ubicación.
- Las versiones de firmware y las revisiones de hardware pueden modificar formatos de mensaje o funciones disponibles; verifique las notas de firmware del dispositivo antes de implementaciones masivas.
- Algunas funciones, como posicionamiento asistido por WiFi, respaldo por LBS o conjuntos de comandos por SMS, pueden variar según el firmware y las builds regionales de hardware.
- Elegir UDP frente a TCP en el puerto 8888 puede alterar la fiabilidad y el comportamiento de retransmisión según las condiciones de la red móvil.
- Las configuraciones de fábrica y las entradas de servidor predeterminadas del fabricante pueden requerir actualización para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para integrarlo con Plaspy.
- Valide comportamientos críticos como notificaciones de geovalla y reportes de batería baja en una prueba pequeña antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de comunicación del rastreador ayuda a garantizar una configuración confiable, agiliza la resolución de problemas y permite un comportamiento predecible del dispositivo cuando el G02M se usa con Plaspy. Saber cómo y dónde envía datos el dispositivo reduce errores de configuración y acelera el diagnóstico cuando el rendimiento del rastreo es crítico.

- Confirma que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que los datos lleguen de forma confiable.
- Ayuda a escoger el modo de transporte apropiado, UDP o TCP en el puerto 8888, según el entorno de red y la fiabilidad esperada.
- Orienta las pruebas de funciones dependientes del firmware, como respuestas por SMS, alertas de geovalla y notificaciones de batería baja.
- Facilita el diagnóstico de problemas de conectividad al distinguir entre fallas celulares, de transporte o de la capa de aplicación.
- Apoya decisiones operativas sobre intervalos de reporte y compensaciones de vida de batería para casos de uso en mascotas y activos pequeños.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G02M con Plaspy ofrece un camino sencillo para el monitoreo en tiempo real de mascotas y pequeños activos. El diseño compacto del G02M, su capacidad de subida por GPRS y las respuestas por SMS para consultas rápidas lo hacen práctico para uso en collares y dispositivos portátiles donde el tamaño y la duración de la batería son críticos. Al recibir Plaspy las subidas en el endpoint compartido, organizaciones y usuarios obtienen visibilidad basada en mapas, alertas configurables y rutas históricas sin configuraciones complejas por dispositivo.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el CanTrack G02M y otros rastreadores compatibles, visite https://www.plaspy.com. Para obtener los detalles específicos de protocolo más actuales, notas de firmware y recomendaciones del fabricante, verifique la información en el sitio de CanTrack https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
