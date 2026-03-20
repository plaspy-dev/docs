---
slug: /appello/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: Appello - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker Appello TK103 y cómo interactúa con Plaspy para reporte de ubicación y conexión en redes GPRS
keywords:
  - Protocolo Appello TK103
  - Protocolo GPS Appello TK103
  - Appello TK103 Plaspy
  - Protocolo de comunicación TK103
  - Protocolo de rastreo TK103
  - Protocolo tracker GPS Appello
  - Compatibilidad de dispositivo Plaspy
  - Rastreo vehicular TK103
  - Rastreo de flotas Appello TK103
  - Comunicación GPRS TK103
---

# Appello - Protocolo TK103

Esta página ofrece una visión pública y de alto nivel sobre el contexto de comunicación del Appello TK103 cuando se integra con la plataforma Plaspy. Se centra en cómo el dispositivo informa ubicación y estado a Plaspy, las configuraciones de conexión compartidas que Plaspy espera y aspectos prácticos de la integración sin exponer detalles internos de firmware o implementaciones privadas. El TK103 es un tracker GPS compacto con CPU ARM7, chip GPS New Star NS-1315, soporte multibanda GSM/GPRS y batería optimizada para tiempos de espera prolongados, lo que lo hace adecuado para rastreo de vehículos y activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al punto de enlace de Plaspy. Para el TK103 esto implica configurar el dispositivo para que envíe datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888. El dispositivo puede usar UDP o TCP en el puerto 8888 según soporte del equipo y la configuración local. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto público del protocolo y guía práctica en lugar de comandos específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación define cómo el TK103 envía posición, estado y alertas a un servidor remoto y cómo el servidor puede confirmar o responder. En términos generales, el protocolo permite que el dispositivo y Plaspy intercambien la información necesaria para un rastreo en tiempo real confiable y monitoreo operativo.

- Proporciona un mecanismo para que el TK103 envíe posición GPS y telemetría básica a Plaspy en intervalos regulares o ante eventos.
- Incluye identificadores del dispositivo y metadatos de estado para que Plaspy asocie los mensajes entrantes con el tracker correcto.
- Permite reportes de alarmas y cambios de estado como movimiento, pérdida de alimentación o manipulación en un formato interpretable por el servidor.
- Funciona sobre GPRS usando transporte IP estándar para que los mensajes lleguen al punto de enlace de Plaspy incluso en redes móviles.
- Habilita a Plaspy a recibir actualizaciones en vivo para seguimiento, geocercas y funciones de gestión de flotas sin requerir selección manual de protocolo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones y datos entrantes en un único punto de enlace compartido y usa detección automática para determinar el protocolo del tracker que reporta a ese punto. Para la mayoría de los usuarios, esto implica una configuración mínima dentro de Plaspy más allá de asegurar que el dispositivo apunte al servidor y puerto correctos.

- Plaspy escucha en la dirección compartida d.plaspy.com y en la IP pública 54.85.159.138 para datos entrantes de trackers.
- Todos los dispositivos soportados por Plaspy usan el mismo valor de puerto, que es 8888 para el reporte de dispositivos.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888; Plaspy acepta ambos tipos de transporte para conexiones de dispositivos.
- Cuando un TK103 correctamente configurado reporta al punto de enlace de Plaspy, la plataforma detecta automáticamente el protocolo del tracker, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- Si un dispositivo no aparece en Plaspy, verifique primero que esté apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 como paso inicial de solución de problemas.

## Contexto de transporte y conexión

Las opciones de conexión y transporte determinan cómo el TK103 se comunica con Plaspy a través de la red de datos móviles. El TK103 soporta redes GSM/GPRS y puede configurarse para establecer transporte IP hacia Plaspy usando cualquiera de los protocolos de transporte comunes.

- El TK103 puede configurarse para reportar a d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy acepta reportes de dispositivos en el puerto 8888; todos los dispositivos en Plaspy usan ese mismo puerto para reportar.
- El tracker puede usar UDP o TCP en el puerto 8888 según el firmware y las preferencias de configuración.
- La selección del transporte (UDP vs TCP) afectará características de entrega como retransmisiones y comportamiento de sesión; elija la opción que se adecue a la capacidad del dispositivo y a las condiciones de la red.
- Asegúrese de que la configuración APN del equipo y el plan de datos móviles permitan conexiones salientes al punto de enlace de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar cómo el TK103 formatea y envía mensajes; siempre pruebe con el dispositivo y firmware específicos que planea desplegar.
- Algunas unidades TK103 de lotes distintos pueden variar ligeramente en ajustes iniciales o en los transportes soportados; verifique la configuración activa antes de un despliegue a gran escala.
- La elección entre UDP y TCP puede estar restringida por el firmware del dispositivo; confirme qué transporte soporta su unidad y configúrela en consecuencia.
- Las condiciones de red, el comportamiento del proveedor de SIM y la configuración APN pueden afectar la capacidad de alcanzar d.plaspy.com o 54.85.159.138; valide la conectividad desde la red del dispositivo.
- La detección automática de protocolos de Plaspy facilita la integración, pero una dirección correcta del dispositivo (servidor y puerto) es esencial para que la detección funcione.
- Consulte la documentación del fabricante para comandos específicos del dispositivo, modos de sueño, manejo de energía y frecuencias de reporte recomendadas.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación y del contexto de conexión del TK103 ayuda a asegurar una configuración confiable, una solución de problemas eficiente y un comportamiento consistente del dispositivo cuando se integra con Plaspy. Conocer cómo el tracker reporta y cómo Plaspy recibe los datos reduce el tiempo de inactividad y mejora la calidad de la información.

- Garantiza la configuración correcta del servidor y del puerto para que los mensajes lleguen a Plaspy sin necesidad de seleccionar el protocolo manualmente.
- Facilita el diagnóstico cuando un dispositivo no es visible en Plaspy al verificar transporte, APN y accesibilidad a d.plaspy.com o 54.85.159.138.
- Informa las decisiones sobre intervalos de reporte y manejo de energía para equilibrar la vida útil de la batería y la frescura de la ubicación.
- Ayuda a interpretar estados y reportes de alarma para que las notificaciones y las geocercas funcionen como se espera.
- Favorece pruebas escalonadas y validación antes de un despliegue amplio para confirmar que el comportamiento del firmware coincide con las necesidades operativas.

## Por qué usar Plaspy con este protocolo

Usar el Appello TK103 con Plaspy ofrece a las organizaciones una forma directa de integrar hardware GPS compacto y preciso en una plataforma de rastreo unificada. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen los pasos de configuración necesarios para empezar a recibir datos de ubicación y estado desde dispositivos TK103, mientras que la plataforma aporta visibilidad, historial y herramientas operativas adecuadas para monitoreo de vehículos y activos.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el TK103 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre protocolo específico del dispositivo y notas de firmware en el sitio del fabricante http://www.cnjeo.com/.
