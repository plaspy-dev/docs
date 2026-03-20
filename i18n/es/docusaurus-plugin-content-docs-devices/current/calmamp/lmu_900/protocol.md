---
slug: /calmamp/lmu_900/protocol
id: lmu_900-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-900 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del CalmAmp LMU-900 y su comunicación con Plaspy para rastreo de vehículos y gestión de flotas
keywords:
  - protocolo CalmAmp LMU-900
  - protocolo GPS CalmAmp LMU-900
  - protocolo LMU-900 para Plaspy
  - protocolo de comunicación CalmAmp LMU-900
  - protocolo de rastreo LMU-900
  - compatibilidad tracker CalmAmp Plaspy
  - reportes UDP SMS LMU-900
  - rastreo de vehículos LMU-900
  - gestión de flotas CalmAmp LMU-900
  - consideraciones firmware LMU-900
---

# CalmAmp - Protocolo LMU-900

Esta página presenta el contexto público del protocolo para usar el tracker CalmAmp LMU-900 con Plaspy. Describe cómo el equipo suele comunicarse con una plataforma backend, qué tipos de datos informa con más frecuencia y qué opciones de conexión son relevantes al integrar unidades LMU-900 en Plaspy para rastreo de vehículos y supervisión de flotas. El contenido se enfoca en un nivel alto y en aspectos no sensibles del protocolo, no en detalles internos de implementación.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando un equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según el firmware del LMU-900, la revisión de hardware y la implementación del fabricante. El LMU-900 puede reportar mediante SMS mejorado o mensajes tipo datagrama sobre IP, y soporta transportes celulares comunes y funciones de configuración remota que afectan su comunicación.

## Resumen del protocolo

El protocolo de un tracker como el LMU-900 define cómo la unidad empaqueta y envía información de ubicación, movimiento, entradas/salidas (I/O) y estado a un servidor para que una plataforma como Plaspy pueda procesarla. A alto nivel, la función del protocolo es transmitir telemetría desde el vehículo hacia la nube de forma fiable, a la vez que soporta alertas y controles de configuración remota.

- Permitir reportes periódicos y basados en eventos para que Plaspy muestre ubicación e historial
- Transmitir lecturas del acelerómetro y estados de I/O para detección de movimiento y reglas personalizadas
- Transportar alertas y estado diagnóstico para monitorización de la salud de la unidad y manejo de excepciones
- Soportar transportes alternativos como SMS mejorado y datagramas IP para adaptarse a la disponibilidad de red
- Permitir actualizaciones y configuraciones remotas para cambiar el comportamiento de reporte sin acceso físico al equipo

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos entrantes de los dispositivos en un único endpoint y puerto compartidos y realiza la detección automática de protocolo para modelos de trackers comunes cuando llega un mensaje con el formato esperado. Esto significa que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo en Plaspy si el tracker está configurado para reportar al endpoint de Plaspy.

- Apunte el dispositivo al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para enviar telemetría
- Use el puerto común de Plaspy 8888, que se emplea para todos los dispositivos en la plataforma
- Configure el LMU-900 para reportar usando una opción de transporte compatible para que los mensajes lleguen a Plaspy
- Plaspy detectará automáticamente el protocolo del tracker y encaminará los mensajes al pipeline de procesamiento de la plataforma
- Los usuarios normalmente verifican que el dispositivo alcance el endpoint de Plaspy y que los mensajes aparezcan en los registros en lugar de establecer manualmente una opción de protocolo

## Contexto de transporte y conexión

Las unidades LMU-900 se pueden configurar para usar UDP o TCP para enviar datagramas IP, o para recurrir a SMS en ciertos tipos de mensaje según la configuración de la unidad y la disponibilidad de la red. Al integrar con Plaspy, las elecciones de transporte y endpoint determinan cómo el dispositivo llega al endpoint de mensajes de Plaspy.

- El LMU-900 puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y su configuración
- Los equipos pueden apuntarse al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del equipo
- El reporte por SMS mejorado es una alternativa de transporte soportada por el LMU-900 y puede usarse donde la conectividad IP sea limitada
- Las opciones de red celular como GSM, GPRS, CDMA y HSPA influyen en los transportes disponibles y deben considerarse durante la configuración

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar las opciones de frecuencia de mensajes, los campos reportados y los transportes disponibles, por lo que siempre confirme la versión de firmware del dispositivo durante la integración
- Las revisiones de hardware o accesorios opcionales, como antenas distintas, pueden alterar el desempeño GPS y el comportamiento de reporte
- Las herramientas de configuración del fabricante o servicios en la nube pueden influir en cómo la unidad reporta a servidores externos y qué transportes están habilitados
- Elegir UDP frente a TCP puede afectar las características de entrega y debe coincidir con la configuración del dispositivo y sus necesidades operativas
- Las funciones de gestión por aire (OTA) como CalAmp PULS pueden cambiar la configuración de forma remota, lo que a su vez modifica el comportamiento del protocolo
- Valide que el LMU-900 esté configurado para reportar al endpoint de Plaspy y pruebe en un entorno controlado antes de desplegar masivamente

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del LMU-900 facilita la configuración y solución de problemas, y reduce el tiempo necesario para lograr una operación fiable en Plaspy. Saber qué transportes y modos de reporte utiliza el equipo ayuda a garantizar que los mensajes lleguen como se espera y que las alertas y los mapeos de I/O funcionen correctamente.

- Confirme el endpoint y puerto correctos de Plaspy para evitar telemetría mal encaminada
- Elija UDP o TCP acorde con la configuración del equipo y las condiciones de red para el perfil de entrega esperado
- Verifique las capacidades del firmware para asegurarse de que los campos que sus aplicaciones requieren estén presentes en los mensajes reportados
- Pruebe el comportamiento de fallback por SMS cuando la conectividad IP sea poco fiable para asegurar la continuidad de alertas críticas
- Aproveche las funciones de I/O y acelerómetro del LMU-900 en Plaspy confirmando cómo se codifican y reportan esas señales

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp LMU-900 junto con Plaspy ofrece a las organizaciones visibilidad práctica del vehículo, alertas configurables y supervisión centralizada de flotas. El hardware compacto del LMU-900, su detección de movimiento basada en acelerómetro y las opciones flexibles de I/O se adaptan bien a casos de uso comunes de flota cuando la unidad está configurada para reportar a Plaspy.

El enfoque de endpoint compartido y la detección automática de protocolo de Plaspy hacen que los pasos iniciales de integración sean sencillos: apunte el LMU-900 a d.plaspy.com o 54.85.159.138 usando el puerto 8888 y seleccione el transporte que se ajuste a su plan de red. Para saber más sobre Plaspy y cómo se integra con trackers CalmAmp visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; confirme la información específica más reciente y las notas de firmware en el sitio del fabricante http://www.calamp.com/.
