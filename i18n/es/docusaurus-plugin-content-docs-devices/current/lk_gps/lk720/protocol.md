---
slug: /lk_gps/lk720/protocol
id: lk720-protocol
sidebar_label: Protocol
title: LK-GPS - LK720 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el LK GPS LK720 con el servidor Plaspy y guía de conexión
keywords:
  - LK GPS LK720
  - Protocolo LK-GPS LK720
  - Protocolo GPS LK720
  - Protocolo de comunicación LK720
  - Protocolo de rastreo LK720
  - Compatibilidad Plaspy
  - Rastreador GPS Plaspy
  - Rastreo de vehículos LK720
  - Rastreador Cat M
  - Gestión de flotas LK720
---

# LK-GPS - Protocolo LK720

Esta página ofrece el contexto público del protocolo y orientación práctica para conectar el LK-GPS LK720 con la plataforma Plaspy. Describe cómo el dispositivo reporta posición GNSS, telemetría y eventos a Plaspy, y qué debe considerar al configurar el tracker para enviar datos a la plataforma.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en aspectos públicos y consideraciones de integración, sin exponer formatos internos de paquetes.

## Resumen del protocolo

El LK720 emplea un enlace celular para transmitir informes de posición GNSS, estado y eventos a un servidor remoto. El protocolo del dispositivo define cómo se formatean esos informes, cómo se representan eventos como alarmas por choque o violación de geocerca, y cómo se entregan comandos remotos como el control del relé. Comprender el protocolo a nivel conceptual facilita una integración fiable con Plaspy sin necesidad de recurrir a detalles propietarios.

- Permite enviar datos GNSS y telemetría desde el dispositivo al servidor Plaspy para visibilidad en tiempo real.
- Transmite notificaciones de eventos como alarmas por choque o vibración, activaciones de geocerca y alertas de voltaje de entrada o manipulación.
- Habilita comandos remotos cuando el dispositivo lo soporta, por ejemplo la activación de relés para inmovilización.
- Proporciona identificación de dispositivo e informes de estado para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta métodos alternativos de localización como posicionamiento por estación base cuando el GNSS es limitado, mejorando la continuidad de los datos de ubicación.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint unificado y utiliza ese flujo de datos para determinar automáticamente el protocolo del equipo. En la mayoría de los casos, cuando el LK720 está configurado para reportar al endpoint de Plaspy, no se requiere selección manual del protocolo dentro de la plataforma. El diseño de la plataforma permite aceptar informes de muchos tipos de dispositivos manteniendo ajustes de conexión consistentes para los operadores.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden configurarse para apuntar.
- La IP del servidor Plaspy es 54.85.159.138 para configuraciones que requieren una dirección IP.
- El puerto usado para el reporte de dispositivos es 8888 y es el mismo para todos los dispositivos compatibles en Plaspy.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones del equipo.
- Cuando un LK720 correctamente configurado reporta al endpoint de Plaspy, la plataforma detecta e interpreta el protocolo entrante sin que el usuario tenga que seleccionar nada.

## Transporte y conexión

El LK720 soporta transporte celular sobre Cat M y puede configurarse para comunicarse con un servidor remoto usando UDP o TCP. Para la integración con Plaspy, los detalles de conexión importantes son el host del servidor y el puerto compartido que Plaspy utiliza para todos los dispositivos. Estas decisiones de transporte afectan principalmente la confiabilidad, el comportamiento de entrega y cómo se configura el dispositivo en el lado del fabricante.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requerimientos del sitio.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 cuando no esté disponible la resolución DNS.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall.
- La selección del transporte puede influir en retransmisiones y garantías de entrega, por lo que debe elegirse UDP o TCP conforme a las opciones del firmware.
- Asegúrese de que el firmware y la configuración del LK720 coincidan con el transporte y destino elegidos para que los reportes lleguen a Plaspy con fiabilidad.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido y comportamiento de los mensajes; confirme la revisión de firmware instalada en el LK720 al verificar compatibilidad.
- Las revisiones de hardware o distintas SKUs pueden implementar bandas celulares o funciones diferentes que afecten conectividad y telemetría disponible.
- Las opciones de configuración del fabricante, como tipo de transporte, intervalos de reporte y umbrales de evento, influyen en lo que Plaspy recibe y con qué frecuencia.
- La funcionalidad de relé e inmovilizador puede requerir flujos de comandos específicos o permisos que varían según firmware y ajustes del fabricante.
- Siempre valide los ajustes del endpoint del dispositivo contra los requisitos de conexión de Plaspy para asegurar que el equipo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- En caso de dudas, consulte la documentación de LK-GPS sobre notas de configuración del LK720 y comportamiento específico por firmware.

## Por qué es importante entender el protocolo

Conocer los aspectos públicos del protocolo de comunicación del LK720 ayuda a los equipos técnicos a configurar correctamente el tracker, resolver problemas de conectividad y mapear eventos del dispositivo a acciones en Plaspy. Entender la relación entre transporte, configuración del equipo y comportamiento del servidor reduce el tiempo de integración y mejora la confiabilidad operativa.

- Asegura la selección correcta de transporte y los ajustes de destino para que los datos lleguen a Plaspy sin interrupciones.
- Facilita la resolución de problemas al acotar si un incidente es de red, transporte o configuración del dispositivo.
- Orienta sobre qué eventos y telemetría estarán disponibles según firmware y opciones del fabricante.
- Permite una mejor planificación de reglas de firewall y red ya que Plaspy utiliza un servidor y puerto consistentes.
- Favorece la preparación operativa al desplegar funciones como control de relé o alertas de geocerca en producción.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el LK-GPS LK720 ofrece una forma práctica y consistente de recopilar posiciones GNSS, telemetría y notificaciones de eventos desde trackers Cat M compactos. Plaspy agrega esos datos en paneles, flujos de alertas e informes históricos que ayudan a gerentes de flota y propietarios de vehículos a mantener conciencia situacional y reaccionar rápidamente ante incidentes.

Si desea saber más sobre Plaspy y cómo la plataforma gestiona los reportes y datos del LK720, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e instrucciones de configuración, verifique la información vigente con el fabricante en https://www.lk-gps.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que consultar los recursos oficiales del fabricante le asegura contar con la orientación más actual.
