---
slug: /wp/tt_1/protocol
id: tt_1-protocol
sidebar_label: Protocol
title: WP - TT-1 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador WP TT-1 con Plaspy y rastrear remolques y activos de forma fiable
keywords:
  - protocolo WP TT-1
  - protocolo GPS WP TT-1
  - protocolo de comunicación WP TT-1
  - protocolo de rastreo WP TT-1
  - compatibilidad TT-1 Plaspy
  - protocolo de rastreador GPS TT-1
  - protocolo de dispositivo Plaspy
  - integración de rastreadores Plaspy
  - protocolo de seguimiento de remolques
  - protocolo de seguimiento de activos de flota
---

# WP - TT-1 Protocolo

Esta página resume el contexto público del protocolo para integrar el rastreador de remolques WP TT-1 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, qué esperar durante la configuración y qué ajustes de conexión utiliza Plaspy. La descripción se basa en las características del TT-1, como GPS de alta sensibilidad, conectividad GSM GPRS, múltiples modos de reporte, geocercas y gestión de energía robusta.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y la composición de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información siguiente ofrece una visión pública y general del contexto de comunicación en lugar de detalles internos específicos de firmware.

## Visión general del protocolo

El protocolo que emplea el TT-1 permite que el rastreador envíe de manera fiable datos de ubicación, estado y eventos desde el dispositivo hasta el backend de Plaspy, de modo que los administradores de flota puedan monitorear remolques y otros activos. Los puntos siguientes describen el papel general del protocolo de reporte del dispositivo cuando se usa con Plaspy.

- Permite la entrega de reportes de posición, alarmas y campos de estado desde el TT-1 hacia Plaspy para su procesamiento y visualización.
- Proporciona un mecanismo para que el rastreador se identifique y Plaspy pueda asociar los mensajes entrantes con el registro de dispositivo correcto.
- Transmite telemetría como coordenadas GPS, nivel de batería, estado de encendido o inactividad, kilometraje y eventos de geocerca en un formato transportable.
- Soporta los múltiples modos de seguimiento del TT-1, como intervalo de tiempo, intervalo de distancia, modo inteligente y seguimiento en reposo, enviando los reportes configurados al servidor.
- Permite que Plaspy reciba actualizaciones periódicas o basadas en eventos para que la visibilidad operativa y las alertas funcionen como se espera.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint y puerto compartidos e intenta identificar automáticamente el protocolo del rastreador. Cuando un TT-1 está configurado para reportar a Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.

- Plaspy escucha en un endpoint común de servidor, por lo que los dispositivos que reportan a ese endpoint son detectados por la plataforma.
- La plataforma detecta automáticamente el protocolo del rastreador cuando los reportes entrantes coinciden con un patrón de dispositivo soportado.
- En general, los usuarios solo deben configurar el dispositivo para que reporte a Plaspy; Plaspy gestiona la identificación del protocolo en el backend.
- Si un dispositivo no aparece, los pasos de validación incluyen verificar la conectividad de red, la configuración del servidor en el dispositivo y la compatibilidad de firmware.
- La identificación precisa del dispositivo depende de que el TT-1 envíe un identificador reconocible y de que use los ajustes de transporte compatibles.

## Contexto de transporte y conexión

El TT-1 puede configurarse para usar métodos de transporte IP estándar para enviar datos a Plaspy. Plaspy soporta tanto UDP como TCP en el mismo puerto de plataforma, y los dispositivos pueden apuntar al dominio de Plaspy o a la IP del servidor.

- Los dispositivos reportan al dominio del servidor Plaspy d.plaspy.com o pueden configurarse para reportar a la IP del servidor 54.85.159.138.
- La plataforma Plaspy usa el puerto 8888 para el reporte de dispositivos y este puerto es compartido entre todos los dispositivos compatibles.
- El TT-1 puede configurarse para enviar datos usando UDP o TCP en el puerto 8888, según la capacidad del dispositivo y los requerimientos de la red local.
- Utilizar el nombre de dominio d.plaspy.com permite el enrutamiento normal basado en DNS, mientras que la IP del servidor puede usarse para enrutamiento directo o para diagnóstico.
- Confirme los permisos de red del dispositivo y la configuración APN para que las conexiones salientes hacia Plaspy tengan éxito desde la SIM del rastreador.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido exacto de los mensajes y las funcionalidades disponibles; siempre verifique la versión de firmware del TT-1 al diagnosticar compatibilidad.
- Las revisiones de hardware o variantes del modelo derivadas de la familia VT10/VT200 pueden mostrar diferencias sutiles en el protocolo a pesar de tener conjuntos de funciones similares.
- La selección de transporte (UDP frente a TCP) debe coincidir con la configuración del dispositivo y el comportamiento de red esperado para asegurar una entrega confiable.
- Los comandos de configuración del fabricante y los endpoints de reporte por defecto pueden variar según la región; revise la configuración del dispositivo antes de apuntarlo a Plaspy.
- El comportamiento de geocercas, alarmas y gestión de energía puede verse influido por ajustes locales en el dispositivo así como por la forma en que Plaspy interpreta los campos reportados.
- En caso de duda, compare los reportes del dispositivo con la documentación actual del fabricante para confirmar los campos requeridos para el procesamiento en Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TT-1 con Plaspy ayuda a garantizar instalaciones exitosas, reportes confiables y una resolución de problemas más eficiente en operaciones de flota. Conocer el contexto de conexión y las variaciones reduce el tiempo de configuración y previene problemas comunes de conectividad.

- Facilita la configuración correcta del dispositivo para que el TT-1 reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y use el transporte esperado.
- Acelera la resolución de problemas cuando faltan reportes, al centrar las comprobaciones en APN, tipo de transporte, ajustes del servidor y nivel de firmware.
- Ayuda a los administradores a confirmar que modos de seguimiento como intervalo de tiempo y modo inteligente generan la cadencia de reportes esperada en Plaspy.
- Reduce la fricción de integración al aclarar que Plaspy usa un puerto compartido y detección automática de protocolo, por lo que la selección manual suele ser innecesaria.
- Contribuye al mantenimiento a largo plazo al destacar dónde las actualizaciones de firmware o las revisiones de hardware podrían afectar el comportamiento visto por Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el WP TT-1 con Plaspy brinda a las organizaciones la visibilidad necesaria para gestionar remolques y otros activos de forma eficaz. Las funciones de rastreo del TT-1 —incluyendo GPS de alta sensibilidad, múltiples modos de reporte, geocercas, control de roaming y gestión de energía— se combinan con el manejo de dispositivos de Plaspy para ofrecer datos de ubicación y eventos útiles para operaciones y flujos de trabajo de seguridad.

Si está evaluando el TT-1 para usarlo con Plaspy, apunte el dispositivo a d.plaspy.com o 54.85.159.138 y configure el rastreador para usar UDP o TCP en el puerto 8888. Plaspy detectará automáticamente el protocolo del rastreador y procesará los reportes entrantes para que usted pueda concentrarse en configurar modos de seguimiento, geocercas y alertas.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente específica del dispositivo en el sitio del fabricante en http://www.wondeproud.com/ antes de completar un despliegue a gran escala.
