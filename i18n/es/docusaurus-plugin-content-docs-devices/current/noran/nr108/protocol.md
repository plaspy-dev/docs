---
slug: /noran/nr108/protocol
id: nr108-protocol
sidebar_label: Protocol
title: Noran - NR108 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Noran NR108 para integrar rastreadores GPS con Plaspy, incluye ajustes de conexión y guía de compatibilidad
keywords:
  - protocolo Noran NR108
  - protocolo GPS Noran NR108
  - protocolo comunicación Noran NR108
  - protocolo seguimiento Noran NR108
  - protocolo rastreador GPS Noran
  - protocolo NR108 Plaspy
  - compatibilidad seguimiento NR108
  - protocolo monitoreo combustible Noran
  - integración GPS Noran Plaspy
  - rastreo vehicular NR108
---

# Noran - Protocolo NR108

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación para usar el rastreador GPS Noran NR108 con Plaspy. Explica cómo el NR108 reporta ubicación y telemetría, qué papel cumple el protocolo del equipo en la integración y qué ajustes de conexión emplea Plaspy para recibir datos del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los paquetes pueden variar según la versión de firmware del NR108, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información pública y práctica para una integración y resolución de problemas exitosa.

## Resumen del protocolo

El protocolo implementado por el NR108 regula cómo el dispositivo envía posición, telemetría y alarmas a un backend como Plaspy. En la práctica, eso significa que el rastreador transmite mensajes periódicos o por eventos que permiten a Plaspy mostrar la ubicación, disparar alertas y registrar telemetría para informes y reproducción histórica.

- Permite al NR108 entregar fijaciones de ubicación, estado de batería y corte de alimentación, y telemetría de combustible a Plaspy.
- Transporta señales de alarma y eventos como exceso de velocidad, geocerca, SOS y estado del inmovilizador para notificación inmediata.
- Admite modos de respaldo como SMS y LBS cuando la cobertura GPS o GPRS es limitada, garantizando continuidad del rastreo.
- Ofrece reportes compactos y de bajo consumo de datos para minimizar costos de GPRS mientras conserva la telemetría esencial para los paneles de Plaspy.
- Permite registro local opcional en el dispositivo cuando la conectividad de red no está disponible, de modo que las posiciones históricas puedan subirse más tarde.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un único endpoint compartido y está diseñado para detectar automáticamente qué protocolo de rastreador está usando un equipo cuando se conecta. En la mayoría de los casos, un NR108 correctamente configurado empezará a aparecer en Plaspy sin necesidad de seleccionar manualmente el protocolo.

- Plaspy escucha en un endpoint y puerto compartidos para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador.
- Cuando el NR108 está configurado para reportar a Plaspy, por lo general no se requiere selección manual del protocolo en la plataforma.
- La identificación del dispositivo y la telemetría periódica permiten a Plaspy asociar los mensajes entrantes con el rastreador y su cuenta.
- Plaspy soporta tanto el reporte por Internet como flujos de trabajo basados en SMS cuando aplica, habilitando estrategias de reporte híbridas.
- Si un dispositivo no aparece, confirme el destino de reporte del NR108 y la conectividad de red antes de modificar ajustes de detección.

## Transporte y contexto de conexión

El NR108 puede enviar ubicación y telemetría usando Internet celular (GPRS) o SMS, según la configuración y la cobertura. Para el reporte basado en IP, el dispositivo puede apuntar al dominio del servidor Plaspy o a su dirección IP y puede usar UDP o TCP según lo soporte la unidad.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para reporte directo.
- El puerto utilizado por Plaspy para todos los dispositivos es 8888 y los equipos pueden configurarse para usar UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y gateways.
- Elija UDP o TCP en el NR108 según el firmware del equipo y las consideraciones de confiabilidad de la red local.
- Asegúrese de que el APN del operador móvil y la conectividad de datos estén configurados para que el NR108 pueda alcanzar d.plaspy.com o la IP indicada.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el tiempo exacto de los mensajes, campos opcionales o alarmas disponibles; siempre verifique la versión de firmware del equipo cuando sea posible.
- Revisiones de hardware o variantes de fabricación pueden alterar los transportes soportados, el comportamiento de antenas o el cableado de periféricos para funciones como relé de inmovilizador y entrada SOS.
- El NR108 soporta reporte por SMS y respaldo LBS como características públicas; el comportamiento de esos modos de respaldo puede diferir según el firmware y el entorno del operador.
- Seleccionar UDP frente a TCP es una decisión de configuración en el dispositivo y puede afectar las garantías de entrega y el comportamiento de retransmisión.
- Valide las capacidades de control de inmovilizador y relé con su unidad NR108 y los permisos de su cuenta Plaspy antes de depender de flujos de trabajo de control remoto.
- Confirme siempre la compatibilidad con la documentación del fabricante para el firmware específico del NR108 que tenga instalado.

## Por qué es importante entender el protocolo

Comprender cómo el NR108 se comunica con Plaspy ayuda a los instaladores y administradores a configurar los dispositivos correctamente, solucionar problemas de conectividad más rápido y garantizar un funcionamiento fiable a largo plazo.

- Acelera la configuración inicial al confirmar que el equipo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y usa el transporte previsto.
- Ayuda a diagnosticar huecos de reporte al distinguir entre problemas relacionados con GPS, LBS, SMS y GPRS.
- Informa la decisión de elegir UDP o TCP según la confiabilidad de la red y el comportamiento esperado de los mensajes.
- Orienta la validación de alarmas y canales de telemetría como monitoreo de combustible, alertas de corte de alimentación y señales SOS.
- Apoya la planificación de actualizaciones de firmware y reemplazos de hardware al aclarar qué funciones dependen del comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el NR108 con Plaspy brinda a las organizaciones visibilidad concisa y eficiente sobre flotas de vehículos pequeños, motocicletas y activos que requieren instalación discreta y bajo consumo de datos. Plaspy aprovecha la telemetría del NR108 para ofrecer rastreo en tiempo real, alertas por exceso de velocidad y geocercas, informes de monitoreo de combustible y reproducción histórica para investigaciones y análisis operativos.

Para conocer más sobre cómo Plaspy trabaja con dispositivos como el NR108 visite https://www.plaspy.com. Para detalles específicos y actuales del protocolo del dispositivo, comportamiento de firmware y notas de implementación consulte la documentación del fabricante en http://www.norantracker.com/ para verificar la información más reciente.
