---
slug: /trackerking/ec33b/protocol
id: ec33b-protocol
sidebar_label: Protocol
title: TrackerKing - EC33B Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar TrackerKing EC33B con Plaspy en rastreo en tiempo real y telemetría de flotas
keywords:
  - Protocolo TrackerKing EC33B
  - Protocolo GPS EC33B
  - Compatibilidad TrackerKing EC33B Plaspy
  - Protocolo de rastreo EC33B
  - Protocolo de rastreador GPS TrackerKing
  - Rastreador de vehículo EC33B Plaspy
  - Rastreadores compatibles con Plaspy
  - Rastreo de flotas EC33B
  - Protocolo de telemetría EC33B
  - Protocolo de inmovilizador remoto EC33B
---

# TrackerKing - Protocolo EC33B

Esta página describe el contexto público del protocolo para usar el TrackerKing EC33B con Plaspy. Se centra en cómo el equipo comunica en una implementación soportada, qué papel juega el protocolo de reporte del rastreador para entregar telemetría utilizable y qué ajustes de conexión de Plaspy son relevantes para la recepción e ingestión de datos. Está dirigida a gerentes de flota, integradores y personal técnico que preparan instalaciones EC33B para su ingestión en Plaspy.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página ofrece una guía general y no sensible, y recomienda verificar la documentación del fabricante TrackerKing para detalles específicos por firmware.

## Descripción general del protocolo

El EC33B utiliza su módem celular integrado para enviar telemetría periódica y por eventos a un endpoint remoto. El protocolo del rastreador es la convención del dispositivo para empaquetar ubicación, estado, alarmas y telemetría, de modo que un servidor como Plaspy pueda ingerir y mostrar esos mensajes como actualizaciones de posición, alertas y recorridos históricos.

- El protocolo permite que el rastreador se identifique y entregue coordenadas GPS, odómetro y estado de encendido, eventos de alarma y telemetría de batería al servidor.
- Los mensajes del protocolo alimentan funciones de Plaspy como mapas en tiempo real, reproducción de rutas y alertas basadas en eventos sin que usuarios deban realizar un análisis manual por dispositivo.
- Los EC33B suelen configurarse para usar variantes de protocolo comunes; el modelo reporta compatibilidad con reportes estilo GT06 en configuraciones típicas.
- El protocolo admite caché fuera de línea y reenvío, de modo que los puntos históricos capturados en zonas sin cobertura se entregan cuando se restablece la conectividad.
- El comportamiento del protocolo —intervalos de reporte, umbrales de alarma y campos de telemetría— puede ajustarse mediante la configuración del equipo y variar entre revisiones de firmware.

## Cómo Plaspy detecta el protocolo

Plaspy proporciona un único endpoint de red y puerto para los rastreadores soportados y realiza la detección de protocolo de forma automática cuando un dispositivo se conecta y comienza a reportar. En la mayoría de los casos, un EC33B correctamente configurado será ingerido sin necesidad de seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP de servidor equivalente 54.85.159.138 para los reportes entrantes de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Plaspy utiliza el endpoint y puerto configurados para recibir mensajes de los equipos y detecta automáticamente el protocolo del rastreador a medida que llegan los datos.
- Usted normalmente configura el EC33B para que apunte al endpoint de Plaspy y no necesita elegir un analizador manualmente si el equipo está enviando mensajes de protocolo reconocibles.
- Debido a que la detección depende de los bytes reales enviados por el dispositivo, las diferencias de firmware o configuraciones personalizadas pueden afectar la detección automática y deben verificarse si los mensajes no se están interpretando.

## Contexto de transporte y conexión

El EC33B puede usar UDP o TCP como capa de transporte al enviar mensajes del rastreador. Plaspy acepta reportes de dispositivos por ambos transportes en el puerto compartido para adaptarse a distintas configuraciones de equipo y entornos de red.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 según la preferencia del instalador.
- El puerto usado para el reporte de dispositivos a Plaspy es el 8888 y este mismo puerto se utiliza para todos los equipos soportados por Plaspy.
- Las unidades EC33B se pueden configurar para usar UDP o TCP en el puerto 8888, dependiendo del firmware y la configuración del instalador.
- La elección entre UDP o TCP puede basarse en la fiabilidad de la red y la documentación del dispositivo; Plaspy acepta ambos transportes en el mismo puerto para compatibilidad.
- Verifique la configuración del dispositivo después de la instalación para asegurarse de que el rastreador apunte al endpoint y transporte correctos de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué funciones o campos del protocolo envía el EC33B; confirme el comportamiento por firmware con el fabricante.
- Las revisiones de hardware u opcionales del EC33B pueden exponer canales de telemetría adicionales que afectan los datos reportados.
- El EC33B se usa comúnmente con reportes estilo GT06 en muchas implementaciones, pero las huellas reales del protocolo pueden variar según firmware y configuración.
- Seleccionar UDP frente a TCP en el equipo puede cambiar las características de entrega y el comportamiento de reenvío para retransmisiones desde zonas sin cobertura.
- Acciones de control remoto, como comandos de inmovilizador, dependen tanto del soporte de Plaspy para el comando como de la implementación del firmware del EC33B.
- Siempre valide un dispositivo representativo en su red y confirme el reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 antes de desplegar masivamente.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del EC33B ayuda a asegurar reportes confiables, telemetría precisa en Plaspy y una resolución de problemas eficaz durante la instalación y operación. Conocer los límites del protocolo y las opciones de transporte reduce retrasos en la integración y favorece un comportamiento de flota consistente.

- Permite a los instaladores confirmar que el equipo está configurado para reportar a d.plaspy.com o 54.85.159.138 y que usa el puerto 8888 requerido por Plaspy.
- Saber si el dispositivo envía mensajes estilo GT06 o variantes de campos ayuda a diagnosticar datos faltantes o telemetría desajustada.
- Entender el comportamiento de caché fuera de línea y reenvío aclara cómo se preservan y restauran los puntos históricos en Plaspy.
- Conocer las diferencias dependientes del firmware permite planificar actualizaciones y pruebas de compatibilidad antes de despliegues a gran escala.
- Una selección de transporte clara (UDP o TCP) reduce sorpresas en la entrega de paquetes y en las interacciones con las políticas de red durante los despliegues.

## Por qué usar Plaspy con este protocolo

Combinar el TrackerKing EC33B con Plaspy proporciona a los equipos de operaciones una plataforma unificada para ubicación en tiempo real, reproducción de historial de rutas, alertas y capacidades de control remoto. La conectividad resistente del EC33B, su caché fuera de línea y sus entradas y salidas orientadas a vehículos lo hacen práctico para rastreo de flotas y flujos de trabajo anti robo cuando está configurado para reportar a Plaspy.

Si usted está evaluando o desplegando dispositivos EC33B, configúrelos para reportar al endpoint de Plaspy y verifique la ingestión exitosa. Conozca más sobre Plaspy y cómo maneja el reporte de dispositivos en https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos confirmar la información más reciente sobre el protocolo y las notas de firmware con el fabricante en https://trackerking.cn/.
