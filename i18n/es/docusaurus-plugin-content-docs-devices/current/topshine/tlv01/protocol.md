---
slug: /topshine/tlv01/protocol
id: tlv01-protocol
sidebar_label: Protocol
title: TopShine - TLV01 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del TopShine TLV01 y cómo se comunica con Plaspy para rastreo y alertas en tiempo real
keywords:
  - protocolo TopShine TLV01
  - protocolo GPS TopShine TLV01
  - protocolo de comunicación TopShine TLV01
  - protocolo de rastreo TopShine TLV01
  - protocolo TLV01 Plaspy
  - protocolo rastreador GPS TopShine
  - informes GPS TLV01
  - compatibilidad rastreador TopShine
  - protocolo rastreador GPS Plaspy
  - rastreo de flotas TopShine
---

# TopShine - Protocolo TLV01

Esta página describe el contexto público del protocolo para usar el TopShine TLV01 Mini Hide GPS Tracker con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, cómo se transmite esa comunicación por datos móviles y SMS, y qué deben considerar los integradores y gestores de flotas al configurar el equipo para obtener reportes confiables y control remoto.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente cuando el dispositivo está apuntando al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del TLV01, la revisión de hardware y la implementación del fabricante, por lo que usted debe validar los ajustes del dispositivo con la documentación del fabricante y probar con la versión de firmware prevista.

## Resumen del protocolo

El TLV01 comunica posición, alarmas de eventos y telemetría a una plataforma de backend usando datos GSM GPRS y reportes por SMS, con posicionamiento híbrido GPS y LBS para mejorar la localización en zonas de señal débil. En la práctica, el protocolo del dispositivo regula cómo el rastreador se identifica, informa ubicación y eventos, y acepta solicitudes de control remoto como comandos de inmovilizador.

- Permite que el rastreador envíe actualizaciones de posición, eventos de geocerca, detección de remolque y alarmas de exceso de velocidad a Plaspy.
- Proporciona la forma en que el dispositivo se identifica y suministra telemetría útil como estado de alimentación y nivel de batería.
- Soporta reportes por internet sobre GSM GPRS y mensajes SMS como canal de respaldo.
- Incluye capacidad de comando remoto para controles autorizados, como corte de motor o de aceite, cuando el dispositivo y la instalación lo permiten.
- Facilita intervalos de reporte configurables y disparadores de eventos que determinan cómo y cuándo el dispositivo envía actualizaciones a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint público y puerto comunes y detecta automáticamente el protocolo del rastreador en función de los datos reportados a ese endpoint. Para la mayoría de despliegues del TLV01, esto significa que una vez que el dispositivo está configurado para reportar al endpoint de Plaspy, la selección del protocolo en la plataforma se gestiona de forma automática y no requiere entrada manual en Plaspy.

- El endpoint público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la plataforma también acepta conexiones a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes y los datos reportados, por lo que normalmente usted no necesita configurar el tipo de protocolo dentro de Plaspy.
- Si un dispositivo está configurado para enviar mensajes SMS en lugar de GPRS, Plaspy puede ingerir datos reenviados por SMS a través del mismo flujo de la plataforma.
- Confirme el destino de reporte y el transporte en el rastreador antes de concluir que un dispositivo no es reconocido por Plaspy.

## Transporte y conexión

El TLV01 puede enviar reportes por datos móviles (GPRS) o mediante SMS, y cuando usa reportes IP el dispositivo puede configurarse para usar UDP o TCP, según la capacidad y ajustes del equipo. Plaspy acepta ambos modos de transporte comunes y espera que los dispositivos apunten al endpoint estándar de Plaspy para su manejo automático.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones entrantes de rastreadores y todos los dispositivos usan el mismo puerto para reportes.
- El TLV01 soporta reportes por GSM GPRS para telemetría en tiempo real y SMS como canal de reserva cuando no hay conectividad de datos.
- La selección de transporte (UDP versus TCP) la determina la configuración del dispositivo y las condiciones de red; el equipo puede estar configurado para usar cualquiera de los dos en el puerto 8888.
- Asegúrese de que el APN y los ajustes de datos móviles sean correctos para la SIM usada para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el conjunto de comandos, los campos de reporte o los intervalos de reporte por defecto disponibles en el TLV01.
- Revisión de hardware y variantes regionales pueden alterar las bandas soportadas, el formato de SMS o las interfaces de accesorios.
- Algunas funciones, como el control de inmovilizador, dependen del cableado correcto de entradas y salidas y de ajustes proporcionados por el fabricante.
- El comportamiento del transporte puede variar según la configuración; confirme si un dispositivo está configurado para UDP o TCP y que apunte a Plaspy en el puerto 8888.
- El reporte por SMS puede usarse como una alternativa confiable, pero el contenido y el enrutamiento de los SMS pueden variar según el operador y el firmware.
- Siempre valide la compatibilidad y la disponibilidad de funciones con la documentación oficial del fabricante para el hardware y firmware específicos del TLV01 que usted tenga.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del TLV01 ayuda a instaladores y operadores de flotas a lograr telemetría confiable, alarmas oportunas y un comportamiento correcto del control remoto cuando el dispositivo está emparejado con Plaspy. Saber qué informa el dispositivo y cómo se conecta agiliza la configuración y resolución de problemas, y reduce el tiempo de inactividad.

- Ayuda a confirmar que el rastreador está informando correctamente a Plaspy y usando el transporte y destino esperados.
- Permite un diagnóstico más rápido cuando las actualizaciones de posición o las alarmas no aparecen en Plaspy.
- Aclara cómo operan los canales de respaldo como SMS junto con los reportes por GPRS.
- Informa decisiones sobre umbrales de reporte y gestión de energía para dispositivos con batería.
- Ayuda a configurar de forma segura las funciones de control remoto para que comandos como el inmovilizador funcionen según lo esperado.

## Por qué usar Plaspy con este protocolo

Emparejar el TopShine TLV01 con Plaspy proporciona a las organizaciones una vista consolidada de ubicación, eventos y estado del dispositivo en una flota de rastreadores de factor de forma pequeño y discretos. Plaspy ingiere los datos de posición, alarmas y telemetría del TLV01 para presentar mapas, historial y alertas que facilitan la respuesta ante robos, supervisión operativa y monitoreo de activos.

Si desea conocer más sobre cómo Plaspy maneja la comunicación de dispositivos y la telemetría de flotas, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo TLV01 y las guías de firmware en el sitio del fabricante https://www.gztopshine.com/.
