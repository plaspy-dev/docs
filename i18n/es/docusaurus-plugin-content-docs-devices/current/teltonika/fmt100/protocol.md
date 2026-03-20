---
slug: /teltonika/fmt100/protocol
id: fmt100-protocol
sidebar_label: Protocol
title: Teltonika - FMT100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Teltonika FMT100 y su comunicación con Plaspy para integración y seguimiento de flotas
keywords:
  - Protocolo Teltonika FMT100
  - Protocolo GPS FMT100
  - Rastreador GPS Teltonika Plaspy
  - Comunicación FMT100
  - Protocolo de seguimiento FMT100
  - Compatibilidad protocolo rastreador GPS
  - Compatibilidad de dispositivos Plaspy
  - Seguimiento de flotas Teltonika
  - Rastreador Bluetooth LE FMT100
  - Integración protocolo FMT100
---

# Teltonika - Protocolo FMT100

Esta página ofrece una visión pública del protocolo para usar el Teltonika FMT100 con Plaspy. Se centra en el contexto de comunicación necesario para la integración del dispositivo, cómo el rastreador reporta ubicación y eventos, y los detalles prácticos que importan al conectar el FMT100 a una flota gestionada por Plaspy. El FMT100 es un rastreador GPS compacto de montaje en batería con protección IP65, acelerómetro de 3 ejes, soporte para sensores Bluetooth LE y conectividad cuatribanda 2G, comúnmente implementado para despliegues rápidos y resistentes en flotas.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. En despliegues con Plaspy, el FMT100 normalmente apunta su endpoint de reporte al servidor de Plaspy, y la plataforma usa ese endpoint y puerto compartidos para recibir e interpretar los mensajes entrantes. Antes de un despliegue masivo, verifique el firmware del dispositivo y cualquier I/O opcional incluido para asegurarse de que se produzca la telemetría y los eventos esperados.

## Descripción general del protocolo

El protocolo de comunicación del FMT100 define cómo el dispositivo se identifica, transmite datos de posición y sensores, y reporta eventos como alertas del acelerómetro y lecturas Bluetooth. Esta página evita detalles de bajo nivel sobre paquetes y, en su lugar, explica el papel práctico del protocolo al integrar el dispositivo con Plaspy.

- Permite que el FMT100 envíe actualizaciones de ubicación periódicas y basadas en eventos al endpoint de Plaspy para seguimiento en vivo y reproducción histórica.
- Transmite eventos derivados del acelerómetro y trazas de impactos para que Plaspy pueda activar alertas y almacenar datos de incidentes para revisión.
- Reenvía lecturas de sensores Bluetooth LE emparejados para que la telemetría ambiental aparezca en los paneles de Plaspy.
- Permite que el dispositivo se identifique ante el servidor para que Plaspy asocie los mensajes entrantes a un activo o registro de vehículo específico.
- Funciona sobre transportes de red estándar soportados por el dispositivo, de modo que usted puede elegir UDP o TCP según necesidades de cobertura y confiabilidad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador según las características de la conexión entrante y la carga útil. En la mayoría de los casos, si el FMT100 está configurado para reportar a la dirección y puerto de Plaspy, no se requiere selección manual de protocolo en la plataforma.

- Plaspy utiliza el dominio de servidor compartido d.plaspy.com para el reporte de dispositivos y también acepta conexiones al IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y los despliegues a gran escala.
- El puerto de escucha de Plaspy para dispositivos es 8888 y Plaspy aceptará los reportes de los dispositivos en ese puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que usted normalmente no necesita seleccionar un protocolo dentro de la interfaz de Plaspy.
- La configuración correcta del dispositivo para apuntar a d.plaspy.com o a 54.85.159.138 es el requisito principal para comenzar la detección automática y el onboarding.

## Transporte y contexto de conexión

El FMT100 puede configurarse para usar transportes comunes al enviar datos a Plaspy. La selección del transporte influye en el comportamiento de entrega y puede depender de las condiciones de la red, opciones de firmware o preferencia del instalador. Mantenga la configuración de conexión consistente en todo el despliegue para simplificar la resolución de problemas.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de reporte hacia Plaspy.
- Plaspy escucha en el puerto 8888 para los reportes entrantes; este mismo puerto se usa para todos los dispositivos soportados.
- UDP se usa con frecuencia por su menor sobrecarga y latencia, mientras que TCP puede ofrecer una entrega más fiable en algunos entornos; verifique el paquete del rastreador y el firmware para las opciones disponibles.
- El enrutamiento de red, cortafuegos y restricciones del operador móvil pueden afectar la conectividad; asegúrese de permitir el tráfico saliente del dispositivo hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre versiones del dispositivo pueden cambiar atributos de los mensajes, funciones disponibles y el comportamiento en el reporte de eventos.
- Revisiones de hardware u opciones de kit pueden añadir u omitir ciertas entradas/salidas y sensores; confirme el código de pedido o el kit específico para las funciones requeridas.
- La selección del transporte (UDP versus TCP) debe validarse según su área de cobertura y la red del operador para garantizar reportes consistentes.
- Ajustes del fabricante como intervalos de reporte, umbrales de eventos y comportamiento de emparejamiento BLE suelen ser configurables y afectan cómo aparecen los datos en Plaspy.
- Siempre valide la compatibilidad y las expectativas de funciones frente a la documentación de Teltonika y las notas de lanzamiento del FMT100.
- Al integrar muchos dispositivos, realice un piloto pequeño para confirmar el comportamiento antes de un despliegue a gran escala.

## Por qué entender el protocolo es importante

Comprender cómo se comunica el FMT100 ayuda a instaladores y operadores a obtener datos confiables en Plaspy, a resolver problemas de conectividad y a planificar mantenimiento y escalado. Un contexto claro del protocolo reduce el tiempo de incorporación y alinea la configuración del dispositivo con los requisitos operativos.

- Garantiza la configuración correcta de endpoint, transporte y puerto para que los dispositivos lleguen de manera confiable al servidor de Plaspy.
- Ayuda a diagnosticar fallas de conectividad y reportes al acotar si el problema es de red, configuración del dispositivo o firmware.
- Informa las decisiones sobre frecuencia de reporte, compensaciones de vida útil de batería y configuración de umbrales de eventos.
- Facilita la correcta interpretación de eventos del acelerómetro y la telemetría de sensores Bluetooth LE dentro de los flujos de trabajo de Plaspy.
- Reduce el tiempo de despliegue al aclarar qué revisar en el rastreador y en la red cuando no llegan mensajes.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMT100 con Plaspy ofrece una combinación práctica entre hardware de rastreo resistente montado en batería y una plataforma de flotas que centraliza ubicación, eventos y datos de sensores. El acelerómetro del FMT100 y el soporte para sensores Bluetooth LE amplían los tipos de eventos y telemetría que Plaspy puede consumir, lo que ayuda a las flotas a implementar detección de impactos, monitoreo ambiental y programas de despliegue rápido sin cableado extenso ni tiempos largos de instalación.

Para conocer más sobre Plaspy y las funciones de la plataforma para gestión de dispositivos, reportes y alertas visite https://www.plaspy.com. Para obtener los detalles más actualizados sobre el protocolo específico del dispositivo, comportamiento del firmware y cualquier orientación sobre fin de vida o reemplazos, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el firmware y los detalles de implementación pueden cambiar con el tiempo.
