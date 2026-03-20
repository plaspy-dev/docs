---
slug: /trackerking/ec33/protocol
id: ec33-protocol
sidebar_label: Protocol
title: TrackerKing - EC33 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador TrackerKing EC33 y su comunicación con Plaspy para seguimiento en tiempo real
keywords:
  - protocolo TrackerKing EC33
  - protocolo GPS TrackerKing EC33
  - compatibilidad EC33 GT06
  - integración EC33 Plaspy
  - comunicación rastreador GPS EC33
  - protocolo rastreo de flotas EC33
  - compatibilidad de dispositivos Plaspy
  - guía de protocolos para rastreadores GPS
  - rastreo vehicular EC33
  - configuración EC33 para Plaspy
---

# TrackerKing - Protocolo EC33

Esta página ofrece contexto público sobre el protocolo usado por el rastreador TrackerKing EC33 cuando se integra con Plaspy. Explica el papel del protocolo de reporte del dispositivo, cómo suele comunicarse el EC33 a través de redes celulares y qué esperar al conectar el rastreador con Plaspy para mapas en vivo, alertas y reproducción del historial.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en detalles públicos y no sensibles que facilitan la configuración y la resolución de problemas.

## Descripción general del protocolo

El EC33 es un rastreador 4G puro de TrackerKing que habitualmente se configura para usar el protocolo de reporte compatible con GT06 para enviar posiciones, eventos y telemetría a servidores remotos. En términos de integración, el protocolo define cómo el rastreador se identifica, reporta ubicaciones y eventos, y cómo plataformas servidoras como Plaspy interpretan y muestran esos datos.

- Permite que el EC33 envíe posiciones GPS, marcas de tiempo y telemetría básica a Plaspy para seguimiento en tiempo real.
- Transmite notificaciones de eventos como encendido/apagado de ACC, alarmas por vibración, violaciones de geocerca y eventos de alimentación que Plaspy mapea a alertas.
- Define el comportamiento de retransmisión de historial y caché para que las posiciones almacenadas se entreguen tras la recuperación de la red, preservando la continuidad de la ruta.
- Lleva información suficiente de identidad y sesión para que Plaspy asocie los mensajes entrantes con un dispositivo registrado.
- Soporta flujos de control remoto comunes, como comandos de inmovilizador autorizados, cuando el fabricante y el firmware exponen esas acciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de rastreadores en un endpoint y puerto compartidos e incluye detección automática de protocolo para simplificar el alta de dispositivos. Cuando un EC33 apunta al endpoint de Plaspy y está correctamente configurado, Plaspy identifica el formato de reporte y procesa los eventos entrantes sin que el usuario tenga que seleccionar manualmente un protocolo en la mayoría de los casos.

- Plaspy escucha en el endpoint compartido d.plaspy.com para aceptar reportes de dispositivos.
- La IP del servidor Plaspy 54.85.159.138 es un endpoint alternativo al que se pueden configurar los dispositivos.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y ese mismo puerto se usa en toda la plataforma.
- Los dispositivos pueden configurarse para usar UDP o TCP para llegar a Plaspy en el puerto 8888, según capacidades y preferencias de configuración.
- Cuando el EC33 reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro de dispositivo correspondiente.

## Contexto de transporte y conexión

Transporte y conexión describen cómo el EC33 alcanza a Plaspy, más que el formato interno de los mensajes. El rastreador puede usar conectividad 4G moderna para establecer una sesión con Plaspy y elegir UDP o TCP según lo permita el firmware y la configuración. Entender estos detalles de conexión ayuda a garantizar que el dispositivo esté apuntando al destino correcto y que el enrutamiento de la red y los firewalls permitan el tráfico.

- El EC33 puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El servicio de Plaspy usa el puerto 8888 para la comunicación de dispositivos y todos los dispositivos soportados por Plaspy usan ese mismo puerto.
- Los dispositivos pueden reportar usando UDP o TCP en el puerto 8888 según la configuración del dispositivo y el soporte del firmware.
- Asegúrese de que la configuración APN de la red móvil y cualquier firewall intermedio permitan conexiones salientes a d.plaspy.com y al puerto 8888.
- Usar el nombre de dominio d.plaspy.com permite conmutación por error basada en DNS y se recomienda cuando el firmware del dispositivo soporta configuración por dominio.

## Notas sobre compatibilidad del protocolo

- En documentación pública, el EC33 suele asociarse con reportes compatibles con GT06, pero las cargas útiles exactas y el soporte de comandos pueden variar según la versión de firmware.
- Las revisiones de firmware, variantes de hardware y personalizaciones regionales del firmware pueden modificar los comandos soportados y el comportamiento de los eventos.
- La elección de transporte (UDP vs TCP) puede afectar el comportamiento de retransmisión y la rapidez con la que Plaspy recibe el historial en caché tras una recuperación de red.
- Las funciones de IP dual o bloqueo de IP en el EC33 pueden ser útiles para redundancia; valide cómo están configuradas si planea usar múltiples endpoints.
- Confirme siempre que el IMEI y los datos de identificación del dispositivo estén registrados correctamente en Plaspy para asegurar la asociación adecuada del dispositivo.
- Verifique la compatibilidad y disponibilidad de comandos según la documentación de TrackerKing para el EC33 y las notas de las versiones de firmware.

## Por qué es importante entender el protocolo

Saber cómo se comunica el EC33 y qué datos transmite el protocolo ayuda a reducir tiempo de configuración, facilita la resolución de problemas y asegura una operación confiable a largo plazo con Plaspy. Un entendimiento claro permite a integradores y gestores de flota alinear las capacidades del dispositivo con las necesidades operativas.

- Acelera la configuración inicial al asegurar que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte apropiado.
- Ayuda a diagnosticar problemas de conectividad relacionados con APN, reglas de firewall o discrepancias de transporte entre UDP y TCP.
- Aclara qué eventos y telemetría reportará el dispositivo para que las alertas y los informes de Plaspy se configuren correctamente.
- Orienta las expectativas sobre la retransmisión del historial desde la caché del EC33 después de periodos offline para preservar la reproducción de rutas.
- Permite un uso más seguro de controles remotos como comandos de inmovilizador al confirmar que los comandos están soportados en el firmware del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing EC33 con Plaspy combina hardware de rastreo 4G compacto con una plataforma que detecta automáticamente formatos de reporte y centraliza datos de ubicación y eventos. Esta combinación soporta visibilidad de flota, alertas, reproducción de historial y supervisión operativa sin requerir selección manual de protocolo en la mayoría de los flujos de alta.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el EC33, visite https://www.plaspy.com. Para detalles más recientes específicos del protocolo del dispositivo, notas de firmware e instrucciones del fabricante, por favor verifique la información actual en el sitio de TrackerKing https://trackerking.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
