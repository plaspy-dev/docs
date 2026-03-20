---
slug: /lk_gps/lk610_b/protocol
id: lk610_b-protocol
sidebar_label: Protocol
title: LK-GPS - LK610-B Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del rastreador wearable LK610-B y cómo se comunica con Plaspy
keywords:
  - protocolo LK GPS LK610 B
  - protocolo GPS LK610 B
  - protocolo LK610 B Plaspy
  - protocolo de comunicación LK610 B
  - protocolo rastreador GPS wearable
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreo LK GPS
  - rastreador GPS de seguridad personal
  - conectividad LK610 B
  - guía protocolo de rastreador
---

# LK-GPS - LK610-B Protocolo

Esta página describe el contexto del protocolo público para usar el rastreador wearable LK-GPS LK610-B con Plaspy. Se enfoca en cómo comunica el dispositivo en términos generales, qué papel tiene el protocolo de reporte en la supervisión en tiempo real y cómo Plaspy recibe y normaliza esos datos para mapas, alertas y reproducción del historial. El LK610-B es un terminal de posicionamiento GPS compacto con ranura para SIM, vendido en algunas variantes como LK610-NB y optimizado para casos de uso de seguridad personal, por ejemplo niños, estudiantes y personal. Sus características típicas incluyen posicionamiento GPS y LBS con asistencia AGPS, alertas SOS, llamadas bidireccionales, modos de subida configurables y configuración por SMS para APN y número de administrador.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma, aunque el comportamiento exacto del protocolo puede variar según firmware, revisión de hardware e implementación del fabricante. La configuración correcta del dispositivo es importante para un reporte fiable. Esta página ofrece orientación práctica y no sensible sobre el contexto de comunicación y consideraciones de compatibilidad, y recomienda verificar los detalles específicos del firmware y del dispositivo con el fabricante.

## Visión general del protocolo

El protocolo de comunicación del LK610-B regula cómo el dispositivo se identifica ante un servidor, reporta fijaciones GNSS y basadas en red, y envía notificaciones de eventos como SOS y alertas por desplazamiento. Plaspy recibe estos reportes, los asocia al registro de dispositivo correspondiente y pone la ubicación y los datos de alarma a disposición para monitoreo e informes.

- Permite cargas periódicas y en tiempo real de datos de ubicación desde GPS y LBS con asistencia AGPS
- Transmite notificaciones de eventos como alertas SOS, activación de geocercas, batería baja y desplazamiento
- Lleva telemetría de estado útil para vigilar la salud del dispositivo y el nivel de batería
- Permite configurar el dispositivo mediante comandos SMS para APN, número administrador y modo de subida
- Soporta múltiples modos de subida de localización para equilibrar frecuencia de actualizaciones y duración de batería

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores en un punto de entrada compartido y detectar automáticamente el protocolo del dispositivo una vez que llegan los datos. En la mayoría de implementaciones no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reportan a la plataforma
- Los dispositivos envían reportes al endpoint de Plaspy y el servidor resuelve los datos entrantes a un perfil de dispositivo conocido
- Generalmente no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para enviar reportes
- Una configuración adecuada del dispositivo, como APN, número administrador y modo de subida, ayuda a que Plaspy pueda recibir e interpretar los reportes
- Plaspy centraliza los datos para mapas, ruteo de alertas y reproducción histórica una vez reconocido el protocolo

## Contexto de transporte y conexión

El LK610-B usa conectividad celular para enviar datos de posición y alarmas a un servidor remoto. Plaspy emplea un puerto compartido único para el reporte de dispositivos, y el rastreador puede configurarse para usar transporte UDP o TCP según las opciones del dispositivo y las condiciones de la red.

- El dominio del servidor Plaspy para reportes de dispositivo es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la provisión de equipos y las reglas de firewall
- Configure el APN y los ajustes de datos en la SIM del LK610-B para habilitar el reporte GPRS al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las variantes LK610-B como la LK610-NB pueden diferir en hardware radio y soporte de redes según el modelo y el mercado
- Las versiones de firmware pueden cambiar el tiempo de los paquetes, las funciones disponibles y los comandos soportados; verifique las notas de la versión del firmware cuando estén disponibles
- La selección de transporte entre UDP y TCP puede afectar la confiabilidad y el comportamiento en redes celulares; ajuste la configuración del dispositivo según las necesidades del despliegue
- Las opciones de configuración del fabricante y la configuración por SMS controlan el APN, el número administrador y el modo de subida; deben estar correctamente establecidos para el reporte a Plaspy
- Revisiones de hardware y variantes regionales pueden usar conjuntos GNSS o bandas celulares distintos que afecten la conectividad y el rendimiento de posicionamiento
- Siempre valide la compatibilidad y la configuración con la documentación oficial más reciente del fabricante

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del rastreador facilita una puesta en marcha más fluida, una resolución de problemas más rápida y una operación confiable a largo plazo en Plaspy. Entender la cadencia de reportes, los tipos de eventos y los puntos de configuración reduce el tiempo hasta la primera fijación y hace que el manejo de alarmas sea más predecible.

- Asegúrese de que el dispositivo esté configurado para reportar al endpoint y puerto correctos de Plaspy para visibilidad inmediata
- Solucione la ausencia de actualizaciones de ubicación revisando ajustes de transporte, APN, estado de datos de la SIM y modo de subida del dispositivo
- Confirme que las funciones SOS y alarmas estén habilitadas y mapeadas correctamente en Plaspy para notificaciones oportunas
- Equilibre los modos de subida de localización para prolongar la vida de la batería sin sacrificar los requisitos de monitoreo
- Valide las notas de firmware y revisión de hardware cuando el comportamiento difiera de lo esperado

## Por qué usar Plaspy con este protocolo

Usar el LK610-B con Plaspy ofrece a organizaciones y cuidadores una vista consolidada de dispositivos wearables de seguridad junto con otros activos en una única plataforma de monitoreo. Plaspy normaliza los datos de ubicación y eventos entrantes, enruta las alarmas a los contactos seleccionados y proporciona vistas de mapa y reproducción histórica útiles para seguridad personal, supervisión escolar y control de trabajadores de campo.

Si desea conocer más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y variantes de hardware del LK610-B, verifique la información en el sitio del fabricante https://www.lk-gps.com ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
