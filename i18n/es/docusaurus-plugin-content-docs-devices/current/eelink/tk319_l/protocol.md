---
slug: /eelink/tk319_l/protocol
id: tk319_l-protocol
sidebar_label: Protocol
title: EElink - TK319‑L Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo EElink TK319‑L y cómo se comunica con Plaspy para rastreo de flotas fiable
keywords:
  - protocolo EElink TK319‑L
  - protocolo GPS EElink TK319‑L
  - protocolo EElink TK319‑L para Plaspy
  - protocolo de rastreo EElink
  - protocolo de comunicación TK319‑L
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - rastreador GPS TK319‑L
  - rastreo de flotas EElink TK319‑L
  - EELINK protocolo 2.0
---

# EElink - Protocolo TK319‑L

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del EElink TK319‑L cuando se utiliza con Plaspy. Describe cómo el rastreador informa posiciones, telemetría y eventos de alarma a Plaspy y qué aspectos del protocolo del dispositivo son relevantes para la integración y el funcionamiento fiable. El enfoque está en el papel del protocolo y el contexto de la conexión, no en detalles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar a la plataforma. Para Plaspy el endpoint del servidor es accesible en d.plaspy.com o 54.85.159.138 y la plataforma escucha en el puerto 8888. El TK319‑L puede configurarse para reportar usando UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar el comportamiento específico del equipo con el fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo define cómo el TK319‑L empaqueta y envía posiciones GNSS/LBS, entradas/salidas y eventos de alarma, y telemetría opcional, para que Plaspy pueda interpretar y mostrar esos datos. Para el TK319‑L, la ruta de integración documentada públicamente utiliza EELINK protocol 2.0 en el lado del dispositivo, que Plaspy reconoce y mapea a los campos de la plataforma para seguimiento e informes.

- Transporta reportes de posición desde GPS y datos de ubicación asistida para que Plaspy pueda mostrar ubicación en tiempo real e historial.
- Transmite entradas del vehículo y estados de alarma como ACC, exceso de velocidad, choque, vibración, batería baja y corte de alimentación para el procesamiento de eventos.
- Envía datos de sensores periféricos y telemetría desde dispositivos conectados por RS232 o GPIO para que esos valores estén disponibles en los informes de Plaspy.
- Permite la identificación del dispositivo en la plataforma para que los mensajes se atribuyan al activo y configuración correctos.
- Soporta flujos de control remoto o envío de comandos cuando el firmware y la configuración del dispositivo permiten que Plaspy ejecute comandos autorizados, por ejemplo acciones de inmovilizador.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido y determina automáticamente el protocolo del rastreador a partir de los datos entrantes. En la mayoría de los casos, un dispositivo configurado correctamente que reporte al endpoint de Plaspy no requiere selección manual de protocolo dentro de la plataforma.

- Plaspy expone un único endpoint de escucha en d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888 para el reporte de dispositivos.
- La plataforma realiza detección automática de protocolo, por lo que la mayoría de los usuarios no necesitan elegir un protocolo manualmente.
- Cuando el TK319‑L se configura para reportar al endpoint de Plaspy usando el transporte adecuado, Plaspy reconocerá EELINK protocol 2.0 y mapeará los campos según corresponda.
- Si un dispositivo no se registra o no reporta correctamente, verificar la accesibilidad de red a d.plaspy.com y confirmar los ajustes de puerto y transporte es un primer paso de resolución de problemas.
- Plaspy estandariza el manejo de mensajes de dispositivos para que la telemetría y las alarmas de distintos modelos aparezcan de forma consistente en el panel.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento son independientes del encapsulado del protocolo. El TK319‑L admite transportes celulares y puede configurarse para usar UDP o TCP según el firmware del dispositivo y las necesidades de despliegue. Plaspy escucha mensajes de dispositivos en un único puerto para todos los dispositivos compatibles.

- Los dispositivos pueden configurarse para apuntar al servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y todos los equipos conectados a Plaspy usan este mismo puerto.
- El TK319‑L puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del módulo y las opciones de configuración.
- Las políticas de red y el comportamiento del operador pueden influir en si UDP o TCP es más recomendable para un despliegue concreto, por lo que es importante validar los ajustes de transporte durante la instalación.
- Verifique el APN y la conectividad celular para rutas NB‑IoT, LTE Cat M1 o fallback GSM para asegurar que el dispositivo pueda alcanzar d.plaspy.com en el puerto 8888.

## Notas de compatibilidad del protocolo

- EELINK protocol 2.0 es el protocolo de integración públicamente indicado para el TK319‑L, pero el comportamiento exacto de los mensajes puede variar entre versiones de firmware.
- Las revisiones de hardware o las versiones regionales pueden incluir conjuntos de funciones o I/O opcionales distintas, lo que afecta qué campos de telemetría están presentes.
- Las diferencias de operador y de modo de red entre NB‑IoT, LTE Cat M1 y fallback GSM pueden influir en la frecuencia de reporte y en las opciones de transporte disponibles.
- Seleccionar UDP frente a TCP puede cambiar las características de entrega; elija el transporte soportado por su firmware y por las condiciones de la red.
- Verifique siempre la configuración del equipo con la documentación suministrada con el TK319‑L y confirme que los ajustes del servidor apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Al integrar periféricos como sensores de combustible, confirme que el firmware del dispositivo expone esas entradas en un formato que la plataforma reconozca.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo del rastreador ayuda a los equipos técnicos a configurar correctamente los dispositivos, detectar problemas de configuración más rápido y garantizar la fiabilidad a largo plazo de los datos de rastreo en Plaspy. Comprender el papel del protocolo facilita mejores pruebas, monitoreo y comportamiento operativo predecible.

- Simplifica la configuración inicial asegurando que el dispositivo apunte al endpoint y transporte correctos de Plaspy.
- Ayuda en la resolución de problemas cuando los mensajes no aparecen en Plaspy o cuando faltan valores de telemetría esperados.
- Orienta las decisiones sobre selección de transporte, intervalos de reporte y actualizaciones de firmware que afectan el comportamiento del dispositivo.
- Garantiza que los mapeos de alarmas e I/O en Plaspy reflejen las capacidades del dispositivo y los periféricos instalados.
- Facilita la validación ordenada de funciones de control remoto o inmovilizador cuando tanto el dispositivo como la plataforma permiten estas acciones.

## Por qué usar Plaspy con este protocolo

Usar el TK319‑L con Plaspy ofrece una vía directa hacia la visibilidad de la flota, alertas de eventos y telemetría de sensores para organizaciones que requieren monitoreo centralizado. La conectividad NB‑IoT y LTE Cat M1 del dispositivo, más el fallback GSM, combinada con EELINK protocol 2.0, lo convierten en una opción práctica para flotas mixtas donde la fiabilidad del reporte y la instalación compacta son prioritarias. Plaspy mapea posición, I/O y datos de alarma del TK319‑L en paneles e informes para que los equipos de operaciones puedan actuar sobre eventos en vivo y tendencias históricas.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current protocol details, firmware notes, and device specific documentation for the TK319‑L, consult the manufacturer at https://www.eelink.com.cn as protocol support and firmware behavior can change over time.
