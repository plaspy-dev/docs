---
slug: /teltonika/fmm880/protocol
id: fmm880-protocol
sidebar_label: Protocol
title: Teltonika - FMM880 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Teltonika FMM880 que explica cómo el rastreador se comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo Teltonika FMM880
  - GPS Teltonika FMM880
  - Compatibilidad FMM880 Plaspy
  - Protocolo de comunicación FMM880
  - Protocolo de rastreo FMM880
  - Protocolo de rastreador GPS Teltonika
  - Integración de dispositivos Plaspy
  - Protocolo de rastreadores Plaspy
  - Rastreo de flotas FMM880
  - Protocolo de rastreador GNSS
---

# Teltonika - Protocolo FMM880

Esta página aborda el contexto público del protocolo para usar el rastreador Teltonika FMM880 con Plaspy. Describe a alto nivel cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión utiliza la plataforma y qué expectativas tener durante la integración, sin exponer detalles internos del fabricante ni información sensible de implementación.

El FMM880 es un rastreador GNSS con batería integrada y carcasa resistente al agua, con opciones LTE Cat M1 y NB‑IoT, GNSS de doble banda L1 y L5, y soporte para sensores Bluetooth LE. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto en el equipo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre valide la configuración del dispositivo contra la documentación del fabricante cuando se requiera un comportamiento preciso.

## Descripción general del protocolo

El FMM880 comunica ubicación, telemetría de sensores y estado al cloud usando su módem celular integrado y el transporte configurado. A nivel de protocolo esto significa que el rastreador envía reportes de dispositivo a Plaspy, donde esos reportes se analizan, se atribuyen al equipo correspondiente y se ponen a disposición para seguimiento, alertas e informes.

- Permite actualizaciones de ubicación periódicas y por eventos hacia Plaspy para seguimiento en tiempo real y reconstrucción histórica de rutas.
- Envía telemetría como estado de batería, lecturas de sensores BLE y salud básica del equipo que Plaspy muestra en paneles y alertas.
- Proporciona información de identidad y estado que permite a Plaspy asociar los mensajes entrantes con una unidad FMM880 específica.
- Opera sobre transportes de red estándar, de modo que los dispositivos pueden reportar desde redes celulares de área amplia hacia Plaspy sin requisitos de red especiales.
- Admite variaciones dependientes del firmware en la cadencia de los mensajes y en las cargas útiles opcionales de sensores que pueden afectar cómo aparecen los datos en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un punto de recepción compartido en la nube y aplica lógica de detección para identificar el tipo de dispositivo entrante y mapear los datos a los campos de la plataforma. Para los usuarios, esto normalmente significa que un FMM880 configurado correctamente comenzará a enviar datos utilizables a Plaspy sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un único puerto compartido para todos los dispositivos compatibles, lo que simplifica la configuración.
- El endpoint público de Plaspy usado para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138 con el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus ajustes y la red disponible.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega tráfico al endpoint compartido, por lo que normalmente no se requiere selección manual del protocolo.
- Si un dispositivo no está reportando, verifique el APN, la selección de transporte y los ajustes de destino en el rastreador y confirme que apuntan al endpoint de Plaspy.

## Transporte y contexto de conexión

El FMM880 soporta transportes celulares de bajo consumo y puede configurarse para reportar a Plaspy mediante el transporte de red que mejor se adapte a las necesidades del despliegue. Los ajustes de conexión en Plaspy están diseñados para ser consistentes entre dispositivos y así reducir errores de configuración durante los despliegues masivos.

- Los dispositivos pueden configurarse para comunicarse con Plaspy usando UDP o TCP en el puerto 8888.
- El host de reporte de Plaspy puede establecerse en d.plaspy.com o en la IP del servidor 54.85.159.138 como destino.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que facilita los flujos de trabajo de configuración y aprovisionamiento masivo.
- Elija UDP para transmisiones más ligeras cuando el firmware del dispositivo lo soporte, o TCP para un enlace orientado a conexión si lo requiere el firmware o la red.
- Confirme el APN y el registro celular en el rastreador para que pueda alcanzar el endpoint de Plaspy a través de la red móvil.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensajes, tiempos y cargas útiles opcionales de sensores que afectan cómo Plaspy interpreta los datos.
- Las revisiones de hardware o variantes regionales pueden alterar las bandas disponibles o los fallbacks celulares, lo que influye en el rendimiento de la conectividad.
- La elección del transporte entre UDP y TCP puede afectar las características de entrega; asegúrese de que el dispositivo esté configurado con el transporte que coincida con el plan de despliegue.
- Los comandos de configuración del fabricante o los menús de ajuste determinan el host de destino y el transporte; verifique estas opciones en cada unidad antes del despliegue.
- Valide que los mapeos de sensores Bluetooth y las interfaces opcionales sean compatibles con su compilación de firmware y que Plaspy los reconozca.
- Siempre contraste la compatibilidad con la documentación más reciente del fabricante para el comportamiento específico del dispositivo.

## Por qué es importante entender el protocolo

Tener una comprensión clara y práctica del protocolo de comunicación del FMM880 ayuda a garantizar una configuración exitosa, reportes confiables y una resolución más rápida de problemas al integrar dispositivos con Plaspy.

- Acelera el aprovisionamiento inicial al alinear el destino y el transporte del dispositivo con las expectativas de Plaspy.
- Reduce tiempos de inactividad al facilitar el diagnóstico sobre si los problemas son de red, de transporte o de configuración del equipo.
- Permite establecer expectativas realistas sobre la cadencia de reporte y las compensaciones en la vida útil de la batería según la frecuencia de transmisión de telemetría.
- Mejora la planificación de la integración para sensores Bluetooth y telemetría opcional, de modo que Plaspy reciba los campos esperados.
- Apoya el mantenimiento a largo plazo al identificar cuándo cambios de firmware o hardware pueden requerir actualizaciones de configuración.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM880 con Plaspy ofrece una vía directa para recopilar posición GNSS, telemetría de sensores BLE y estado del dispositivo desde un rastreador robusto y montado con batería. El diseño del FMM880 es adecuado para instalaciones temporales, estacionales o de difícil cableado donde la implementación rápida y el funcionamiento de bajo consumo son prioritarios.

Plaspy centraliza los reportes entrantes del FMM880 en el endpoint compartido de Plaspy para que los gestores de flota y operadores puedan monitorear ubicaciones, configurar alertas por movimiento o umbrales de sensores y acceder a reportes históricos para análisis operativos. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para comportamiento preciso del protocolo, notas de firmware y detalles de implementación del dispositivo consulte la documentación del fabricante en https://www.teltonika-gps.com/ la cual puede actualizarse con el tiempo.
