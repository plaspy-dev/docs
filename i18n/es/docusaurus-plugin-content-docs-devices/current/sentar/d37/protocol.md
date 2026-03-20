---
slug: /sentar/d37/protocol
id: d37-protocol
sidebar_label: Protocol
title: Sentar - D37 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del reloj infantil Sentar D37 y cómo se comunica con Plaspy para un rastreo confiable
keywords:
  - Protocolo Sentar D37
  - Protocolo GPS Sentar D37
  - Compatibilidad Sentar D37 Plaspy
  - Protocolo de comunicación Sentar D37
  - Protocolo de rastreo Sentar D37
  - GPS reloj inteligente Sentar D37
  - Protocolo dispositivo Plaspy
  - Compatibilidad rastreador Plaspy
  - Comunicación rastreador GPS
  - Protocolo rastreador infantil
---

# Sentar - Protocolo D37

Esta página describe el contexto público del protocolo para usar el reloj infantil Sentar D37 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en general, el papel de esa comunicación para el rastreo en tiempo real y las alertas, y notas prácticas para facilitar la configuración y la verificación. Los detalles sensibles de implementación y los formatos propietarios de paquetes se omiten intencionalmente.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que, aunque Plaspy simplifica la integración, debe esperarse pequeñas diferencias que dependan del firmware y la configuración de su D37.

## Visión general del protocolo

El D37 emplea su protocolo de reporte para enviar posiciones, telemetría y eventos desde el reloj hacia un servidor remoto, de modo que Plaspy pueda ofrecer seguimiento en vivo, historial y alertas. El rol público del protocolo es asegurar que datos oportunos, identificables y útiles lleguen a Plaspy sin describir los formatos internos de los frames.

- Permite informes periódicos y por eventos usando las fuentes de posicionamiento del reloj: GPS, AGPS, LBS y WiFi.
- Transporta telemetría del dispositivo como nivel de batería, intensidad de señal y eventos SOS para que Plaspy pueda disparar alertas y mostrar el estado del dispositivo.
- Transmite identidad del dispositivo y contexto de sesión para que Plaspy asocie los mensajes entrantes con la cuenta correcta del reloj.
- Envía eventos simples generados en el equipo, como activaciones de SOS, registros de check‑in y actualizaciones de estado básicas para mapeo e historial.
- Permite respuestas o acuses de recibo desde el servidor cuando el modo de transporte del dispositivo lo soporta, para confirmar la recepción o enviar comandos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador según los datos que envía el dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de la plataforma Plaspy si el D37 está configurado correctamente para reportar a Plaspy.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública del servidor 54.85.159.138 como endpoint principal para los reportes de dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y el enrutamiento en el servidor.
- Plaspy realiza detección automática de protocolo para que la plataforma dirija la telemetría al parser correcto sin intervención del usuario.
- Normalmente solo necesita asegurarse de que el D37 esté configurado para apuntar al endpoint de Plaspy y que use el modo de transporte correcto.
- Si un dispositivo no parece conectarse, verifique la configuración de red, la conectividad de datos SIM y que el dispositivo esté autorizado para enviar datos al endpoint de Plaspy.

## Contexto de transporte y conexión

El D37 puede configurarse para usar transporte UDP o TCP según el soporte del dispositivo y la configuración aplicada por el usuario o el fabricante. Los detalles de conexión se limitan al contexto de enrutamiento público para que instaladores y administradores puedan ajustar el dispositivo para que llegue correctamente a Plaspy.

- Los dispositivos pueden reportar al endpoint de Plaspy usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- El nombre de host d.plaspy.com o la IP del servidor 54.85.159.138 son objetivos válidos para reportar a Plaspy.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para reducir la complejidad de configuración.
- Confirme que el D37 tiene datos celulares activos y que la red permite tráfico saliente hacia el puerto 8888.
- Seleccione UDP cuando lo indique la configuración del dispositivo o use TCP si se prefiere y se soporta una entrega más fiable y comportamiento de sesión.

## Notas sobre compatibilidad de protocolo

- Las versiones de firmware del D37 pueden cambiar cómo se formatean ciertos mensajes y qué campos se incluyen en los reportes.
- Las revisiones de hardware y las variantes regionales del reloj pueden comportarse de forma diferente respecto al soporte de transporte o al reporte de eventos.
- Las opciones de configuración del servidor del fabricante pueden permitir apuntar el dispositivo a un host personalizado; para la integración con Plaspy use d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunas funciones del dispositivo, como voz bidireccional o captura de medios, son capacidades de hardware más que garantías del protocolo y pueden requerir firmware específico.
- Siempre valide la conexión de un dispositivo de muestra a Plaspy después de la configuración para confirmar la telemetría y el comportamiento de eventos esperados.
- Al solucionar problemas, revise la provisión de datos SIM, la configuración APN y cualquier restricción a nivel de operador que pueda bloquear conexiones salientes.

## Por qué es importante comprender el protocolo

Comprender de forma práctica cómo se comunica el D37 con Plaspy facilita la configuración y acelera la resolución de problemas cuando los dispositivos no aparecen en línea o faltan eventos. Conocer el comportamiento a alto nivel ayuda a administradores e integradores a garantizar reportes fiables y el correcto funcionamiento de las funciones.

- Asegura que el dispositivo esté configurado para apuntar al endpoint y modo de transporte correctos de Plaspy.
- Ayuda a acotar problemas causados por diferencias de firmware o variantes regionales de hardware.
- Guía la validación de telemetría como posiciones, eventos SOS e informes de batería una vez que el dispositivo esté conectado.
- Apoya la decisión de usar UDP o TCP según las características de la red y las capacidades del dispositivo.
- Reduce el tiempo de resolución cuando se trabaja con soporte del fabricante o con la operadora para troubleshooting.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D37 con Plaspy brinda a padres y administradores una vía clara para obtener visibilidad en tiempo real y conocimiento de incidentes. La combinación del posicionamiento multimodal del D37 y la ingestión de Plaspy ofrece rastreo de ubicación fiable, rutas históricas y alertas por SOS y otros eventos del dispositivo, sin exponer la mecánica interna del protocolo.

Plaspy simplifica la integración mediante un endpoint y puerto de servidor compartidos y detectando automáticamente el protocolo del rastreador cuando el dispositivo reporta. Si desea conocer más sobre lo que ofrece Plaspy y cómo soporta dispositivos como el D37 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo con el fabricante en http://www.sentarsmart.com/
