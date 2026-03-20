---
slug: /arknav/at_5000/protocol
id: at_5000-protocol
sidebar_label: Protocol
title: ArkNav - AT-5000 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del ArkNav AT-5000 y su comunicación con Plaspy para seguimiento fiable de flotas y activos
keywords:
  - protocolo ArkNav AT-5000
  - protocolo GPS AT-5000
  - comunicación rastreador ArkNav
  - compatibilidad AT-5000 Plaspy
  - guía protocolo rastreador GPS
  - seguimiento de flotas ArkNav
  - protocolo de dispositivo Plaspy
  - seguimiento de activos AT-5000
  - documentación protocolo ArkNav
  - integración dispositivo GPS Plaspy
---

# ArkNav - Protocolo AT-5000

Esta página describe el contexto del protocolo público para usar el ArkNav AT-5000 con Plaspy. Se centra en cómo el rastreador se comunica con la plataforma Plaspy a un nivel general y qué esperar al configurar el dispositivo para reportar ubicación y estado. El objetivo es ofrecer una guía clara y no sensible sobre el protocolo para ayudar en la instalación y la resolución de problemas, siempre recomendando la verificación con los recursos del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles de configuración y los mensajes pueden diferir entre compilaciones del AT-5000.

## Resumen del protocolo

El protocolo del dispositivo define cómo el AT-5000 formatea y envía información de ubicación, estado y eventos a un servidor remoto para que Plaspy pueda ingerir, decodificar y presentar los datos. Esta documentación mantiene la discusión del protocolo en términos generales y neutral en la implementación, explicando el papel que desempeña el protocolo en la transmisión fiable hacia el servicio Plaspy.

- Permite que el AT-5000 empaquete datos de posición, movimiento y estado para su transmisión a un servidor remoto.
- Permite que el rastreador se identifique para que Plaspy asocie los datos entrantes con el registro de dispositivo correcto.
- Gestiona el reporte periódico y los mensajes disparados por eventos como movimiento, despertadores por temporizador y alertas de batería baja.
- Determina si los mensajes se envían por UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Da soporte a funciones auxiliares reportadas por el dispositivo, como fijaciones AGPS, localización basada en celda y estados de gestión de energía.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador para los dispositivos que reportan a ese endpoint. En la mayoría de los casos, un AT-5000 correctamente configurado no requerirá la selección manual del protocolo en Plaspy; la plataforma empareja los patrones de datos entrantes con el parser y la lógica de enrutamiento apropiados.

- Plaspy escucha en un único endpoint de servidor estandarizado para simplificar la configuración del dispositivo.
- Cuando un AT-5000 reporta al endpoint de Plaspy, la plataforma inspecciona los datos entrantes y los asocia con el registro del dispositivo.
- Usted normalmente configura el dispositivo para que reporten al servidor de Plaspy y permite que la detección automática se encargue del mapeo del protocolo.
- La detección automática reduce la necesidad de seleccionar manualmente el protocolo en la interfaz de Plaspy.
- Asegúrese de que los ajustes de identificación del dispositivo (IMEI o ID de dispositivo) estén correctamente configurados en el AT-5000 para que Plaspy pueda vincular los mensajes con el dispositivo correspondiente.

## Contexto de transporte y conexión

El AT-5000 puede enviar datos a través de la red usando métodos de transporte comúnmente soportados. Para la integración con Plaspy, las opciones de conexión y transporte se estandarizan para simplificar la configuración del dispositivo y soportar una amplia gama de entornos celulares.

- Los dispositivos pueden configurarse para conectarse al dominio del servidor de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy acepta conexiones tanto UDP como TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de firewalls.
- Elija UDP cuando se prefiera menor sobrecarga y un comportamiento de retransmisión más simple, o TCP cuando se requiera fiabilidad de sesión, sujeto al soporte de firmware del AT-5000.
- Confirme el APN y los ajustes de red en el AT-5000 para que pueda alcanzar el endpoint de Plaspy desde la red celular.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades AT-5000 pueden afectar las funciones disponibles y los formatos de los mensajes; verifique la versión de firmware al realizar diagnósticos.
- Las revisiones de hardware u módulos opcionales pueden introducir diferencias menores en el protocolo que afecten cómo se reportan ciertas telemetrías.
- Algunas funciones, como AGPS, solicitudes de ubicación por llamada telefónica o enlaces SMS, dependen tanto del firmware del dispositivo como del comportamiento de la red del operador.
- La selección de transporte (UDP vs TCP) es una elección de configuración del dispositivo; confirme que el transporte elegido es compatible con el firmware desplegado.
- Plaspy detecta automáticamente el protocolo del rastreador, pero una identificación precisa del dispositivo (IMEI o ID) es esencial para el mapeo correcto.
- Siempre valide las recomendaciones de compatibilidad y configuración con la documentación oficial de ArkNav para la variante exacta del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo el AT-5000 se comunica con Plaspy reduce errores de configuración y acelera la resolución de problemas cuando los dispositivos no aparecen en línea o reportan datos inesperados. Tener una comprensión práctica del flujo de comunicación también ayuda en el aprovisionamiento de red y en el mantenimiento del ciclo de vida del dispositivo.

- Ayuda a asegurar los ajustes correctos de APN y del endpoint de reporte en el AT-5000 para alcanzar d.plaspy.com o 54.85.159.138.
- Facilita la elección del modo de transporte apropiado en el dispositivo cuando se soportan tanto UDP como TCP.
- Permite confirmar con mayor facilidad que el dispositivo está enviando su identificación para que Plaspy pueda detectar y mapear el protocolo automáticamente.
- Apoya decisiones informadas sobre gestión de energía, intervalos de reporte y disparadores de eventos para ajustarse a las necesidades operativas.
- Proporciona contexto al coordinarse con el soporte de ArkNav o con los operadores celulares sobre conectividad y entrega de mensajes.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav AT-5000 con Plaspy ofrece una forma optimizada de recolectar telemetría de ubicación y activos a largo plazo desde rastreadores robustos diseñados para entornos remotos y exigentes. La detección automática de protocolos de Plaspy y su endpoint estandarizado simplifican el aprovisionamiento inicial para que los dispositivos puedan comenzar a reportar con una configuración mínima en la plataforma.

Si desea obtener más información sobre Plaspy y cómo se integra con dispositivos como el ArkNav AT-5000, visite https://www.plaspy.com. Para detalles más actuales y específicos del dispositivo sobre protocolo y firmware, verifique la información en el sitio del fabricante https://www.arknavgps.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
