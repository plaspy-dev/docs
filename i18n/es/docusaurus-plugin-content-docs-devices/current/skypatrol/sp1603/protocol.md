---
slug: /skypatrol/sp1603/protocol
id: sp1603-protocol
sidebar_label: Protocol
title: SkyPatrol - SP1603 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SkyPatrol SP1603 y cómo comunica datos con Plaspy para monitoreo e integración
keywords:
  - protocolo SkyPatrol SP1603
  - rastreador GPS SP1603
  - SkyPatrol SP1603 Plaspy
  - protocolo de comunicación SP1603
  - protocolo de seguimiento SkyPatrol
  - protocolo de rastreador GPS Plaspy
  - rastreador para monitoreo de personas bajo vigilancia
  - rastreador GPS para detención domiciliaria
  - rastreador GPS con detección de manipulación
  - rastreador GPS con doble SIM
---

# SkyPatrol - Protocolo SP1603

Esta página ofrece una descripción pública y de alto nivel del contexto del protocolo de comunicación del SkyPatrol SP1603 cuando se utiliza con Plaspy. Está dirigida a administradores, integradores y equipos técnicos para ayudarles a comprender cómo el rastreador envía ubicaciones y estados a Plaspy sin exponer detalles de implementación sensibles. El SP1603 está diseñado para casos de monitoreo de personas bajo supervisión y detención domiciliaria, y cuenta con funciones como conectividad con doble SIM, detección de manipulación mediante correa de fibra óptica y soporte opcional de balizas en el hogar.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento observado en campo puede diferir entre unidades o versiones de firmware.

## Descripción general del protocolo

El protocolo del SP1603 define cómo el rastreador se identifica, envía actualizaciones de ubicación y reporta eventos como manipulación, batería y presencia de balizas a un servidor remoto. En el contexto de Plaspy, el objetivo del protocolo es entregar telemetría consistente y legible para que la plataforma pueda normalizar los datos y aplicar reglas de cumplimiento y alertas.

- Permite la transmisión periódica y por eventos de telemetría GPS y de estado a Plaspy para mapeo y registro.
- Transmite la identidad y el estado del dispositivo para que Plaspy asocie los informes con la persona monitoreada y el registro correspondiente.
- Entrega alertas de manipulación, nivel de batería, estado de conectividad y, opcionalmente, presencia de balizas necesarias para los flujos de cumplimiento.
- Soporta redundancia y resiliencia para mantener la entrega de informes durante condiciones celulares intermitentes, ayudando a Plaspy a construir un historial continuo.
- Proporciona las señales en bruto que Plaspy usa para generar eventos accionables, como violaciones de perímetro, compromiso de correa y alertas por batería baja.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del dispositivo a partir del tráfico recibido. En la mayoría de los casos, cuando el SP1603 se configura para reportar al servidor de Plaspy, no es necesario seleccionar el protocolo manualmente en la plataforma.

- Plaspy acepta informes en el dominio de servidor compartido d.plaspy.com y en la IP del servidor 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y el enrutamiento en el servidor.
- Cuando el rastreador apunta al endpoint de Plaspy y comienza a reportar, la plataforma detecta qué protocolo soportado está usando el dispositivo y normaliza la telemetría.
- La telemetría normalizada permite a Plaspy mapear campos entrantes a eventos de plataforma como manipulación, batería y ubicación sin intervención del usuario.
- Normalmente, los usuarios solo deben asegurarse de que el dispositivo esté configurado para enviar datos al endpoint de Plaspy; el resto del proceso de detección del protocolo lo maneja Plaspy.

## Transporte y contexto de conexión

El SP1603 puede configurarse para usar opciones de transporte estándar de la industria y apunta a Plaspy mediante el endpoint compartido. La elección del transporte afecta cómo el dispositivo entrega paquetes a Plaspy, pero no cambia los eventos de alto nivel que la plataforma recibe.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según la configuración del equipo y las consideraciones de la red celular.
- Los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o directamente a la dirección IP 54.85.159.138 para reportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, reduciendo diferencias de configuración entre tipos de rastreadores.
- La selección del transporte (UDP vs TCP) normalmente se define en el lado del dispositivo y debería coincidir con las mejores prácticas de red y del operador para garantizar fiabilidad.
- Firewalls y la configuración del APN del operador deben permitir tráfico saliente al puerto 8888 para asegurar la entrega confiable a Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en los campos reportados o en el comportamiento de los eventos; verifique la versión de firmware del SP1603 al resolver problemas de compatibilidad.
- Las revisiones de hardware u opciones adicionales, como las balizas en el hogar, pueden añadir telemetría o cambiar formatos de evento; confirme qué funciones están activas en cada dispositivo.
- La preferencia de transporte (UDP vs TCP) puede afectar las características de entrega; elija el transporte que refleje sus necesidades de confiabilidad y latencia.
- La configuración del fabricante relativa a la dirección de reporte e intervalos debe apuntar al endpoint de Plaspy para que la detección automática ocurra.
- Valide siempre el comportamiento del dispositivo en un entorno de prueba antes de desplegar masivamente para asegurar que los reportes y alertas coincidan con las expectativas operativas.
- Consulte la documentación oficial de SkyPatrol y las notas de versión para detalles de firmware que puedan impactar el comportamiento del protocolo.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a los equipos técnicos a configurar correctamente los dispositivos, interpretar la telemetría que recibe Plaspy y solucionar problemas que afectan la continuidad del monitoreo y las alertas. Este conocimiento agiliza la puesta en marcha y reduce el tiempo para resolver discrepancias en los datos.

- Acelera el despliegue inicial al aclarar qué ajustes deben apuntar el rastreador a Plaspy.
- Facilita la interpretación de por qué un dispositivo puede dejar de reportar o por qué ciertos tipos de eventos no aparecen en Plaspy.
- Ayuda en la resolución de problemas de red cuando la conectividad, la configuración del APN o los firewalls interfieren con los reportes.
- Apoya decisiones informadas sobre la selección de transporte y el comportamiento de reintentos para mejorar la fiabilidad.
- Contribuye a mapear eventos del dispositivo, como manipulación o presencia de balizas, a los procedimientos de alerta y respuesta de la organización.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el SkyPatrol SP1603 permite a las organizaciones centralizar la telemetría de ubicación y eventos de dispositivos de monitoreo en tobillo en una única plataforma para visualización, alertas basadas en reglas y registro de auditoría. Plaspy ingiere la telemetría del SP1603 y ofrece a los supervisores el contexto histórico y en tiempo real necesario para gestionar el cumplimiento y responder a incidentes de manera efectiva.

Para saber más sobre cómo Plaspy trabaja con dispositivos como el SP1603, visite https://www.plaspy.com. Para obtener detalles específicos de protocolo, notas de firmware y orientación del fabricante más actualizados, verifique la información en el sitio de SkyPatrol https://www.skypatrol.com/. El soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación oficial del fabricante asegura que su despliegue se mantenga alineado con las capacidades más recientes del dispositivo.
