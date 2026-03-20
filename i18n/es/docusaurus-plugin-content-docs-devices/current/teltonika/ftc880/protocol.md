---
slug: /teltonika/ftc880/protocol
id: ftc880-protocol
sidebar_label: Protocol
title: Teltonika - FTC880 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Teltonika FTC880 con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo Teltonika FTC880
  - protocolo GPS Teltonika FTC880
  - integración FTC880 Plaspy
  - protocolo de comunicación FTC880
  - protocolo de rastreo Teltonika FTC880
  - protocolo de telemetría FTC880
  - protocolo de rastreador Teltonika
  - rastreo de vehículos FTC880
  - rastreo de flotas Teltonika
  - compatibilidad Teltonika FTC880
---

# Teltonika - Protocolo FTC880

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Teltonika FTC880 con Plaspy. Explica, a alto nivel, cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y de qué manera esa comunicación permite reportar posiciones, eventos y telemetría en la plataforma. La descripción del FTC880 en este documento se basa en su función como rastreador robusto montado en batería, con GNSS multiconstelación, conectividad celular LTE Cat 1 con retroceso a 2G, carcasa IP69K y capacidades de gestión remota y FOTA WEB de Teltonika.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a nuestro endpoint. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware, la variante regional del módulo y la implementación del fabricante. Esta página se centra en los aspectos públicos y no sensibles de cómo el FTC880 se comunica con Plaspy y en qué debe verificar al configurar el rastreador para usar la plataforma.

## Resumen del protocolo

El protocolo utilizado por el FTC880 permite que el rastreador se identifique, envíe posiciones GNSS, actualizaciones de estado y reportes de eventos a Plaspy para que la plataforma pueda mostrar la ubicación en tiempo real, alertas y telemetría. Plaspy recibe esas transmisiones y mapea los datos a paneles de seguimiento y flujos de reporte. Los siguientes puntos resumen el papel público de la comunicación sin exponer detalles de implementación.

- Transporta reportes de posición, marcas de tiempo, estado del dispositivo y notificaciones de eventos desde el rastreador hacia un endpoint servidor.
- Permite que el rastreador se identifique para que la plataforma receptora asocie los reportes entrantes con el registro de dispositivo correcto.
- Lleva telemetría e indicadores de salud como estado de batería, estado celular y eventos de entrada/salida que Plaspy usa para alertas y registros.
- Habilita flujos de configuración remota y actualizaciones de firmware cuando se combina con las herramientas de gestión de Teltonika, apoyando el mantenimiento del ciclo de vida.
- Proporciona la base para funciones de mayor nivel en Plaspy, como geocercas, reproducción histórica y reglas de alerta basadas en la telemetría entrante.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y realiza detección automática de protocolo, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de la plataforma. Si el FTC880 está configurado para enviar sus reportes a Plaspy, la plataforma determinará el comportamiento de protocolo compatible a partir de los datos entrantes y lo asociará al registro del dispositivo.

- Plaspy escucha en el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y la incorporación de equipos.
- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para las conexiones de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Cuando el rastreador apunta al endpoint de Plaspy y está correctamente configurado, normalmente no es necesaria la selección manual de protocolo dentro de Plaspy.
- La detección automática reduce errores de configuración y acelera la integración inicial en flotas mixtas con distintos modelos de rastreadores.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento son partes prácticas de la configuración del protocolo. El FTC880 puede configurarse para reportar a Plaspy usando UDP o TCP según los ajustes del dispositivo y el entorno de red. A continuación se detallan las configuraciones públicas que puede usar para dirigir el FTC880 hacia Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- El endpoint de reporte de Plaspy es d.plaspy.com y también puede dirigirse a la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el puerto 8888, lo que facilita la configuración a escala y las reglas de firewall.
- Elija UDP para reportes más simples y con menor overhead cuando las condiciones de red lo permitan, o TCP cuando se requiera entrega fiable y el dispositivo lo soporte.
- Asegúrese de que el APN celular y los ajustes de red en el FTC880 permitan conexiones salientes hacia el dominio o la IP de Plaspy en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y las opciones de configuración remota de Teltonika pueden afectar los intervalos de reporte disponibles, los transportes soportados y el comportamiento de reporte de eventos.
- Las variantes regionales del módulo y las revisiones de hardware pueden introducir diferencias sutiles en el comportamiento radioeléctrico y las bandas soportadas; verifique la variante en la etiqueta del dispositivo.
- La elección entre UDP y TCP puede influir en las características de entrega y debe coincidir con la forma en que el dispositivo está configurado para reportar a Plaspy.
- Herramientas del fabricante como Teltonika FOTA WEB pueden cambiar el firmware del dispositivo y, por lo tanto, alterar el comportamiento del protocolo con el tiempo.
- Siempre valide la identidad del dispositivo y los reportes tras la configuración inicial para confirmar que Plaspy está recibiendo la telemetría y las posiciones esperadas.
- Para funciones avanzadas o telemetría personalizada, confirme si el firmware del dispositivo soporta los campos o eventos necesarios antes del despliegue.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una incorporación confiable de dispositivos, una resolución de problemas oportuna y un comportamiento predecible en los despliegues. Saber qué envía el rastreador y cómo lo recibe Plaspy reduce la fricción en la integración y favorece la confiabilidad operativa a largo plazo para flotas mixtas.

- Resolución más rápida de problemas cuando las posiciones o actualizaciones de telemetría no aparecen en Plaspy, ya que usted podrá confirmar transporte, endpoint y configuración del dispositivo.
- Mejor duración de batería y eficiencia de reporte al alinear intervalos de envío y disparadores de eventos con las capacidades del dispositivo y los flujos de trabajo de Plaspy.
- Expectativas claras sobre qué campos de telemetría estarán disponibles en Plaspy según el firmware del dispositivo y las opciones de configuración remota.
- Menor tiempo de inactividad mediante el uso coordinado de las herramientas remotas de Teltonika y el monitoreo de Plaspy para estados anormales del dispositivo.
- Escalamiento de flota más simple porque Plaspy usa un único puerto de escucha y detección automática de protocolo entre los modelos soportados.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FTC880 con Plaspy combina hardware robusto y optimizado para batería con una plataforma diseñada para seguimiento en tiempo real, alertas y flujos de trabajo para flotas. El GNSS multiconstelación del rastreador y la conectividad LTE Cat 1 con retroceso a 2G proporcionan ubicación y telemetría confiables en despliegues exigentes, mientras que Plaspy mapea los datos entrantes a paneles operativos para monitoreo e informes.

Para saber más sobre Plaspy y cómo se integra el FTC880 con nuestra plataforma visite https://www.plaspy.com. Para detalles específicos de protocolo más recientes, comportamiento de firmware y orientación del fabricante, verifique la información en el sitio oficial de Teltonika https://www.teltonika-gps.com/ ya que la documentación del fabricante y las actualizaciones de firmware pueden cambiar el comportamiento del protocolo con el tiempo.
