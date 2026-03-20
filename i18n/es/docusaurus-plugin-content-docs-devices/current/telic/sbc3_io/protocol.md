---
slug: /telic/sbc3_io/protocol
id: sbc3_io-protocol
sidebar_label: Protocol
title: Telic - SBC3 IO Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador GPS Telic SBC3 IO y su comunicación con Plaspy para seguimiento fiable en exteriores
keywords:
  - protocolo Telic SBC3 IO
  - protocolo GPS Telic SBC3 IO
  - compatibilidad SBC3 IO con Plaspy
  - protocolo rastreador GPS Telic
  - comunicación Telic SBC3 IO
  - protocolo de rastreo SBC3 IO
  - protocolo rastreador GPS para exteriores
  - compatibilidad de dispositivos Plaspy
  - gestión de flotas Telic SBC3 IO
  - seguimiento de vehículos Telic SBC3 IO
---

# Telic - Protocolo SBC3 IO

Esta página describe el contexto público del protocolo para usar el rastreador Telic SBC3 IO con Plaspy. Se enfoca en los detalles de comunicación y conexión relevantes al apuntar una unidad robusta de exteriores como la SBC3 IO a Plaspy, sin revelar implementaciones internas o detalles sensibles del fabricante. Use esto como guía a nivel de protocolo junto con la documentación del dispositivo para la configuración y verificación.

El SBC3 IO es una unidad telemática resistente al agua, con GPS de alta sensibilidad, antenas integradas, batería recargable y entradas/salidas digitales y analógicas configurables. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que verifique los detalles específicos del equipo con el fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del SBC3 IO define cómo el dispositivo informa posición, estado y eventos de entradas/salidas a un servidor como Plaspy. El contexto público descrito aquí explica el papel del protocolo en establecer reportes fiables y cómo se relaciona con el modelo de endpoint compartido de Plaspy.

- Transporta posiciones GPS y telemetría con marcas de tiempo que Plaspy procesa para mapeo e informes.
- Incluye identidad del dispositivo e información de estado que permiten a Plaspy asociar mensajes con un activo rastreado.
- Transmite eventos de entradas y salidas del SBC3 IO para que Plaspy registre cambios de estado digitales y analógicos con fines de monitoreo.
- Funciona sobre canales de transporte estándar para que los dispositivos puedan alcanzar el endpoint público de Plaspy para la recolección.
- Permite patrones de reporte tipo heartbeat o keepalive que ayudan a mantener una vista precisa de dispositivos en línea o fuera de línea.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico entrante en un endpoint público compartido y determina automáticamente el protocolo del dispositivo a partir de los datos que envía el rastreador. En la mayoría de los casos, si el SBC3 IO está configurado para reportar al endpoint de Plaspy, no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio público del servidor de Plaspy es d.plaspy.com que los dispositivos pueden usar como host de reporte.
- La IP pública del servidor de Plaspy es 54.85.159.138 para dispositivos configurados con una dirección directa.
- El puerto compartido que utiliza Plaspy para todos los dispositivos es 8888 y Plaspy detecta automáticamente el protocolo del rastreador.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP al conectarse a Plaspy en el puerto 8888, según la configuración del equipo.
- Cuando el SBC3 IO apunta al endpoint de Plaspy y envía tramas de reporte estándar, Plaspy asignará ese tráfico al manejador de protocolo correspondiente de forma automática.

## Transporte y configuración de conexión

La configuración de conexión para el SBC3 IO es principalmente una cuestión de transporte y ajustes de destino. El dispositivo puede configurarse para reportar a Plaspy usando transportes de red comunes y el mismo puerto que Plaspy usa para todos los dispositivos compatibles.

- El SBC3 IO puede configurarse para utilizar UDP o TCP para alcanzar el endpoint de Plaspy en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 como destino de reporte.
- El enfoque de puerto único de Plaspy significa que todas las familias de dispositivos soportadas se conectan por el puerto 8888, lo que simplifica la configuración de firewalls y redes.
- La confiabilidad de la red, el comportamiento del operador móvil y la configuración de red del dispositivo influyen en si UDP o TCP es más adecuado para un despliegue específico.
- Asegúrese de que el APN del dispositivo y el plan de datos de la SIM permitan conexiones salientes al endpoint y puerto de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar formatos de mensaje, campos disponibles y comportamiento; verifique la versión de firmware de su SBC3 IO al validar compatibilidad.
- Revisiones de hardware o módulos opcionales pueden alterar qué entradas y salidas están disponibles y cómo se reportan.
- Las opciones de configuración del fabricante pueden permitir alternar entre los transportes UDP y TCP; elija el transporte que se ajuste a las condiciones de red y a sus necesidades de monitoreo.
- Usar el dominio d.plaspy.com evita codificar direcciones fijas, pero valide la resolución DNS en el entorno de despliegue.
- Para despliegues críticos, pruebe un equipo representativo para confirmar la cadencia de reportes y el comportamiento ante eventos antes de una implementación masiva.
- Siempre contraste los ajustes públicos de conexión de Plaspy con la configuración del dispositivo y la documentación del fabricante para obtener la guía más actualizada.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a garantizar una correcta configuración, telemetría confiable y una resolución de problemas eficiente al integrar dispositivos SBC3 IO con Plaspy. Aunque Plaspy detecta el protocolo automáticamente en su endpoint compartido, saber cómo se comunica el dispositivo acelera el diagnóstico y reduce el tiempo de integración.

- Ayuda a confirmar que los mensajes del SBC3 IO están llegando a Plaspy y se están interpretando según lo esperado.
- Facilita la selección del transporte adecuado (UDP o TCP) y el ajuste de intervalos de reintento o heartbeat para coincidir con las condiciones de red.
- Apoya la solución de problemas de eventos de entradas y salidas al correlacionar los eventos reportados por el dispositivo con los registros de Plaspy.
- Mejora la planificación ante actualizaciones de firmware o reemplazos de dispositivos al entender qué características dependen del protocolo.
- Permite una coordinación más efectiva con el fabricante cuando surge una discrepancia en el protocolo o el comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el Telic SBC3 IO con Plaspy ofrece a las organizaciones una forma directa de recopilar datos de ubicación en exteriores, monitorear entradas digitales y analógicas, y mantener supervisión operativa desde una plataforma central. El diseño robusto del SBC3 IO y su batería integrada lo hacen adecuado para instalaciones exteriores donde la resiliencia de los reportes y las pérdidas de energía ocasionales son consideraciones importantes.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos y reducen la carga de configuración para flotas y despliegues de seguimiento de activos. Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos como el Telic SBC3 IO visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles específicos de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente del protocolo específico del dispositivo con el fabricante en https://www.telic.de.
