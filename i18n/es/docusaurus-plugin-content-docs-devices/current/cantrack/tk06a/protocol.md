---
slug: /cantrack/tk06a/protocol
id: tk06a-protocol
sidebar_label: Protocol
title: CanTrack - TK06A Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la integración del CanTrack TK06A con la plataforma Plaspy
keywords:
  - Protocolo CanTrack TK06A
  - Protocolo GPS CanTrack TK06A
  - Protocolo CanTrack TK06A para Plaspy
  - Protocolo de comunicación CanTrack TK06A
  - Protocolo de rastreo CanTrack TK06A
  - Protocolo GPS CanTrack
  - Rastreo GPRS TK06A
  - Protocolo de rastreo de vehículos
  - Rastreo de flotas Plaspy
  - Compatibilidad de protocolo de rastreador GPS
---

# CanTrack - Protocolo TK06A

Esta página ofrece una visión pública del protocolo para usar el rastreador CanTrack TK06A con la plataforma Plaspy. Explica cómo el dispositivo suele comunicarse a través de las redes celulares y qué papel desempeña el protocolo de reporte al enviar datos de ubicación y estado a Plaspy. La información aquí está pensada para integradores de sistemas, administradores de flotas y usuarios técnicos que necesiten una descripción clara y no confidencial del comportamiento del protocolo y las expectativas de conexión al servidor.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta a la plataforma. Para Plaspy, el endpoint del servidor es d.plaspy.com y la IP del servidor es 54.85.159.138. Todos los dispositivos usan el mismo puerto y Plaspy acepta conexiones en el puerto 8888. Según el firmware y las opciones del usuario, los dispositivos pueden reportar usando UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe validarse la información específica del equipo con la documentación del fabricante.

## Resumen del protocolo

El protocolo del TK06A regula cómo el rastreador formatea y transmite información de ubicación GPS, estado y alarmas a través de la red celular para que un backend como Plaspy pueda recibir y procesar los datos. Para rastreo en tiempo real, esto suele implicar el envío periódico de reportes de posición y mensajes de evento vía GPRS a un endpoint en Internet, mientras que el SMS puede utilizarse para consultas puntuales o alertas.

- Permite que el rastreador informe coordenadas GPS y telemetría básica a un servidor remoto para mapeo e historial.
- Proporciona información de identificación para que Plaspy asocie los mensajes entrantes con la cuenta de dispositivo correcta.
- Transporta banderas de estado y eventos como ignición, alimentación, exceso de velocidad y condiciones de alarma que Plaspy puede mostrar a los usuarios.
- Soporta diferentes modos de transporte para que los dispositivos envíen datos por GPRS en tiempo real o por SMS para reportes individuales.
- Permite que el equipo reciba instrucciones de control simples o respuestas de configuración cuando el rastreador y la plataforma lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de múltiples modelos de rastreadores en un único endpoint y determinar automáticamente el protocolo del dispositivo, de modo que por lo general no es necesario seleccionar el protocolo manualmente. Cuando un CanTrack TK06A apunta al endpoint de Plaspy y reporta usando el transporte configurado, la plataforma empareja los datos entrantes con un manejador de protocolo compatible.

- Plaspy escucha en un único puerto los reportes de dispositivos y aplica detección automática de protocolo para las conexiones entrantes.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, direcciones que los dispositivos pueden usar para reportar.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto y la plataforma acepta tanto UDP como TCP en el puerto 8888.
- Si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar un protocolo dentro de Plaspy.
- La detección automática reduce pasos de configuración pero la dirección y el modo de transporte correctos siguen siendo esenciales para el reporte exitoso.

## Transporte y contexto de conexión

La selección del transporte y la dirección del servidor son fundamentales para establecer un enlace fiable entre el TK06A y Plaspy. El TK06A usa GSM GPRS para la transmisión de datos y puede enviar reportes de posición a un servidor en Internet a través de la red celular. La forma en que el equipo se configura para alcanzar Plaspy determina si el reporte es inmediato y cómo se reenvían los eventos.

- Los dispositivos pueden configurarse para apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- La plataforma Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos soportados usan este mismo puerto.
- El TK06A puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones de firmware y la preferencia del instalador.
- El reporte por GPRS se usa comúnmente para rastreo continuo, mientras que el SMS sigue siendo una opción para consultas puntuales de ubicación o alertas.
- Verifique el APN de la red y la configuración GPRS en el dispositivo para que pueda establecer una sesión de datos y alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el comportamiento de los mensajes y las funciones disponibles, por lo que siempre revise las notas de la versión del firmware para detectar cambios en el protocolo.
- Las revisiones de hardware o variantes regionales del TK06A pueden implementar comportamientos de reporte o configuraciones por defecto ligeramente distintos.
- La elección entre UDP y TCP puede afectar la fiabilidad y debe coincidir con lo configurado en el dispositivo y lo permitido por la red.
- Los comandos de configuración del fabricante y los APN por defecto están fuera del control de Plaspy y deben validarse con la documentación oficial de CanTrack.
- Usar el endpoint y el puerto 8888 de Plaspy es necesario para la detección automática y el manejo centralizado de los reportes entrantes.
- Si depende de funciones por SMS, recuerde que la entrega de SMS es independiente del reporte por GPRS y puede estar sujeta a restricciones del operador.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del rastreador facilita la configuración inicial, el diagnóstico de problemas de reporte y garantiza la fiabilidad a largo plazo de los datos del dispositivo dentro de Plaspy. Saber qué envía el equipo y cómo se conecta ayuda a alinear la configuración del dispositivo con las expectativas de Plaspy e interpretar el comportamiento del equipo cuando ocurren eventos.

- Agiliza la configuración inicial al confirmar que la dirección del servidor y el modo de transporte están correctamente establecidos en el dispositivo.
- Ayuda a aislar problemas como reportes faltantes, identificación incorrecta o conectividad intermitente.
- Facilita la elección de ajustes que equilibren la frecuencia de actualizaciones, el uso de datos y la duración de la batería.
- Mejora el manejo de alarmas y eventos al asegurar que el dispositivo envíe las señales que Plaspy espera.
- Apoya la planificación de mantenimiento al aclarar qué versiones de firmware y revisiones de hardware están en uso.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack TK06A con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación y eventos de vehículos y activos móviles, centralizando la supervisión y los reportes. El enfoque de conexión compartida de Plaspy simplifica la incorporación al exigir que los dispositivos apunten a un único endpoint y puerto, reduciendo la variabilidad de configuración en una flota mixta.

Plaspy es una opción útil para administradores de flotas y operadores que desean visibilidad consolidada, rastreo histórico, gestión de alarmas y reportes operativos desde equipos como el TK06A. Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en https://www.cantrackgps.com/.
