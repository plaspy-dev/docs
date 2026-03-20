---
slug: /topfly/pioneer_x100/protocol
id: pioneer_x100-protocol
sidebar_label: Protocol
title: TopFly - Pioneer X100 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo TopFly Pioneer X100 y cómo se comunica con Plaspy para seguimiento y monitoreo de flotas
keywords:
  - Protocolo TopFly Pioneer X100
  - Protocolo GPS TopFly Pioneer X100
  - Compatibilidad TopFly Pioneer X100 con Plaspy
  - Protocolo de rastreo Pioneer X100
  - Protocolo rastreador GPS TopFly
  - Rastreo vehicular Pioneer X100
  - Integración rastreador Plaspy
  - Protocolo de comunicación Pioneer X100
  - Protocolo gestión de flotas TopFly
  - Conectividad Pioneer X100
---

# TopFly - Protocolo Pioneer X100

Esta página ofrece una visión general pública del protocolo del TopFly Pioneer X100 cuando se utiliza con Plaspy. Está enfocada en el contexto de comunicación e integración que determina cómo este rastreador GNSS cableado informa ubicación, eventos y telemetría a la plataforma Plaspy. El Pioneer X100 es un rastreador compacto LTE Cat 1 con fallback a 2G, múltiples entradas y salidas digitales, soporte BLE 4.2 para sensores y funciones como detección de comportamiento del conductor y firmware con capacidad FOTA. Este documento describe los aspectos seguros y no sensibles de la comunicación del dispositivo con Plaspy y lo que debe comprobarse durante la puesta en marcha.

Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos de telemetría disponibles pueden variar según la versión de firmware, la revisión de hardware, la SIM y las condiciones de la red, así como la configuración del fabricante. Para formatos de mensajes específicos del dispositivo, comandos o comportamiento de firmware, consulte la documentación oficial de TopFly además de esta guía general.

## Resumen del protocolo

En términos generales, el protocolo de comunicación del Pioneer X100 define cómo el rastreador se identifica, reporta posiciones GNSS, envía eventos de alarma y transmite telemetría como estados de entradas digitales y lecturas de sensores BLE hacia un servidor remoto. La capa de protocolo garantiza que Plaspy reciba datos útiles y oportunos para seguimiento, alertas y análisis, mientras el dispositivo gestiona sensores locales, entradas y características de alimentación.

- Permite la entrega de reportes de posición GNSS y mensajes de eventos con marca de tiempo al servidor de Plaspy.
- Transporta telemetría de entradas y salidas, alertas de comportamiento del conductor y datos opcionales de sensores BLE utilizados por funciones de monitoreo de flota.
- Permite que el dispositivo se identifique para que Plaspy asocie los reportes con el activo y registro correctos.
- Soporta mensajes de estado y diagnóstico que ayudan a monitorear conectividad, estado de energía y resultados de actualizaciones de firmware.
- Proporciona un canal para comandos de configuración y gestión remota cuando el firmware lo soporta.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y detectar automáticamente el protocolo del dispositivo cuando este está correctamente configurado para reportar al endpoint de Plaspy. En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo específico dentro de Plaspy una vez que el dispositivo apunta a los ajustes compartidos del servidor Plaspy.

- Plaspy recibe reportes de dispositivos a través del endpoint compartido d.plaspy.com y su IP pública 54.85.159.138.
- Todos los dispositivos soportados reportan al mismo puerto de Plaspy, el 8888, y Plaspy usa ese punto de entrada unificado para los datos entrantes.
- El Pioneer X100 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y los requisitos de red.
- Cuando el dispositivo está configurado correctamente para direccionar a Plaspy, la selección de protocolo en la interfaz de Plaspy típicamente no es necesaria.
- Si un dispositivo no aparece en Plaspy, verifique la dirección del servidor, la selección del transporte, el APN y la provisión de la SIM antes de ajustar los parámetros en la plataforma.

## Contexto de transporte y conexión

Las elecciones de conexión y transporte afectan cómo el Pioneer X100 entrega los datos, pero no cambian el propósito general del protocolo. Plaspy soporta los modos de transporte comunes y espera que los dispositivos utilicen el puerto compartido para que los mensajes entrantes puedan ser enrutados y asociados automáticamente.

- El Pioneer X100 soporta el envío por TCP o UDP y debe configurarse para usar el puerto 8888 para Plaspy.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la IP pública 54.85.159.138 según las preferencias de configuración.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento y las reglas de red.
- Elija TCP cuando la fiabilidad de la sesión sea importante y UDP cuando se prefiera menor latencia o menos sobrecarga y el firmware del dispositivo lo soporte.
- Aspectos a nivel de red como ajustes APN, reglas de firewall y la provisión del plan de datos de la SIM pueden afectar el comportamiento del transporte y deben validarse durante el despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los tipos de eventos disponibles y los diagnósticos; confirme la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware o funciones opcionales como sensores BLE, variantes con protección IP67 o Wi‑Fi pueden alterar el conjunto de telemetría que el dispositivo reporta.
- El Pioneer X100 soporta múltiples opciones de transmisión; asegúrese de que el modo de transporte seleccionado (TCP o UDP) coincida con la configuración del dispositivo y la política de red.
- Los comandos de configuración del fabricante y los ajustes de servidor por defecto pueden variar según la región o el distribuidor; verifique que el dispositivo esté configurado para reportar los valores del endpoint de Plaspy.
- La integración de accesorios BLE o funciones de detección de choques puede requerir ajustes adicionales del dispositivo o soporte de firmware para exponer esos puntos de datos a Plaspy.
- Siempre valide el comportamiento de reporte del dispositivo en una prueba controlada antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a administradores e integradores a configurar correctamente los dispositivos, diagnosticar problemas de conectividad y asegurarse de que los datos entregados a Plaspy sean precisos y útiles. Conocer el contexto del protocolo agiliza la resolución de problemas y ayuda a alinear la configuración del dispositivo con los requisitos operativos.

- Acelera el aprovisionamiento inicial confirmando dirección del servidor, tipo de transporte y configuración de puerto.
- Facilita la interpretación de alarmas y mensajes de telemetría al investigar incidentes o problemas de conectividad.
- Ayuda a determinar si la falta de un dato se debe a configuración, limitaciones de firmware o problemas de red.
- Apoya la planificación de actualizaciones de firmware y características opcionales como sensores BLE o análisis de choques.
- Reduce el riesgo en el despliegue al clarificar qué reportará y qué no reportará el dispositivo a Plaspy bajo configuraciones específicas.

## Por qué usar Plaspy con este protocolo

Usar el Pioneer X100 con Plaspy proporciona a las organizaciones una plataforma consistente para visibilidad de flota, notificaciones de eventos e informes históricos. La conectividad LTE Cat 1 con fallback a 2G del rastreador, combinada con entradas, salidas, capacidad de sensores BLE y detección de comportamiento del conductor, complementa la capacidad de Plaspy para recolectar datos de ubicación y eventos para monitoreo, cumplimiento y análisis operativo. Dado que Plaspy escucha en un endpoint y puerto compartidos, agregar este rastreador a una cuenta Plaspy existente normalmente sigue el mismo flujo de trabajo que otros dispositivos compatibles.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Para obtener los últimos detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante para el Pioneer X100, verifique la documentación actual en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
