---
slug: /eelink/got10/protocol
id: got10-protocol
sidebar_label: Protocol
title: EElink - GOT10 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador OBD EElink GOT10 con Plaspy usando la configuración de conexión compartida
keywords:
  - protocolo EElink GOT10
  - protocolo GPS EElink GOT10
  - protocolo de comunicación EElink GOT10
  - protocolo de rastreo EElink GOT10
  - rastreador OBD EElink GOT10
  - protocolo OBD GOT10
  - datos CAN BUS GOT10
  - compatibilidad de dispositivos Plaspy
  - configuración de rastreador GPS Plaspy
  - rastreador OBD para gestión de flotas
---

# EElink - Protocolo GOT10

Esta página documenta el contexto público del protocolo para usar el rastreador OBD EElink GOT10 con Plaspy. Explica, en términos generales y no sensibles, cómo el GOT10 informa la ubicación del vehículo y los diagnósticos del bus CAN a Plaspy, y destaca los puntos de configuración y conectividad más relevantes para la integración y solución de problemas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware del GOT10, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en roles de comunicación generales y orientación de compatibilidad, en lugar de detalles internos específicos del firmware.

## Resumen del protocolo

El GOT10 usa su conexión OBD-II para capturar tramas del bus CAN y diagnósticos OBD, luego reenvía la telemetría y los datos diagnósticos a un servidor remoto para que plataformas de gestión de flotas como Plaspy puedan mostrar ubicación, datos del motor y fallas. En este contexto, el “protocolo” se refiere al intercambio de informes y telemetría que habilita esas capacidades más que a un estándar público único.

- Permite que el GOT10 se identifique y comunique el contexto del vehículo a Plaspy para que la ubicación y la telemetría queden asociadas correctamente en la plataforma.
- Transporta actualizaciones de posición y series temporales de valores del bus CAN y diagnósticos OBD para que Plaspy muestre seguimiento en tiempo real e informes históricos.
- Transmite códigos de diagnóstico y telemetría operativa que facilitan alertas y flujos de mantenimiento en Plaspy.
- Proporciona un mecanismo de reporte transportable que puede usar UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Soporta reportes periódicos de estado o latidos (heartbeat) para indicar el estado en línea del dispositivo y ayudar a Plaspy a detectar equipos activos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de dispositivos compatibles en un único endpoint compartido y determina automáticamente el protocolo entrante del rastreador, por lo que la mayoría de usuarios no necesitan seleccionar un protocolo manualmente en la plataforma. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito común para que la detección automática funcione.

- Configure el GOT10 para enviar sus reportes al dominio del servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 para que los informes lleguen a la plataforma.
- Use el puerto 8888 para el reporte de dispositivos; Plaspy emplea el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- El dispositivo puede estar configurado para enviar datos por UDP o TCP en el puerto 8888 según el firmware y las preferencias de red.
- Cuando el GOT10 informa al endpoint de Plaspy, la plataforma utiliza los datos entrantes para determinar automáticamente el parsing y el mapeo adecuados.
- En la mayoría de los casos no se requiere selección manual de protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint y usa un transporte soportado.

## Transporte y contexto de conexión

Los detalles de conexión son parte importante de una integración exitosa. El GOT10 típicamente reenvía la telemetría del vehículo a la nube utilizando UDP o TCP según la configuración de la unidad y el entorno de red. Plaspy escucha en un único puerto bien conocido para todos los dispositivos, lo que reduce la complejidad de configuración.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- El puerto 8888 es el puerto operativo para todos los reportes de dispositivos Plaspy y debe usarse en la configuración del GOT10.
- El GOT10 puede usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y la opción de transporte seleccionada.
- Usar el nombre de dominio d.plaspy.com permite enrutamiento basado en DNS y puede ser preferible cuando cambian los entornos de red.
- Verifique que los firewalls de red y los planes de datos móviles permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 para un reporte confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué señales OBD y CAN se reportan; compare las notas de firmware del dispositivo con los campos esperados en Plaspy.
- Las revisiones de hardware o variantes opcionales del dispositivo pueden afectar la telemetría disponible, como PIDs CAN soportados o información de diagnóstico.
- La elección entre UDP y TCP puede influir en el comportamiento de entrega; seleccione el transporte que mejor se adapte a la red del vehículo y a las necesidades operativas.
- La marca y el modelo del vehículo determinan qué parámetros del bus CAN están disponibles a través del puerto OBD; no todos los vehículos exponen los mismos sensores.
- Los comandos de configuración del fabricante o los ajustes de servidor deben usarse exactamente como lo especifica EElink para asegurar que el dispositivo reporte a Plaspy correctamente.
- Valide la compatibilidad consultando la documentación oficial de EElink para instrucciones específicas del dispositivo, notas de firmware y cualquier aviso del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo el GOT10 se comunica con Plaspy ayuda a administradores de flotas e integradores a configurar los dispositivos correctamente, interpretar la telemetría entrante y solucionar problemas de conectividad o mapeo de datos. Tener claro el contexto de comunicación reduce el tiempo de configuración y aumenta la confianza en los reportes operativos.

- Asegura que el GOT10 apunte al endpoint de Plaspy y use el transporte correcto para que los datos lleguen de forma fiable.
- Permite identificar por qué pueden faltar campos específicos del bus CAN o OBD según firmware, soporte del vehículo o configuración.
- Ayuda a diagnosticar problemas de conectividad confirmando la resolución DNS a d.plaspy.com o la accesibilidad a 54.85.159.138 en el puerto 8888.
- Facilita decisiones informadas sobre la selección de transporte y la configuración de red para entornos móviles o con restricciones.
- Mejora la eficacia de las alertas e informes de Plaspy al alinear la telemetría del dispositivo con las expectativas de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el EElink GOT10 con Plaspy ofrece a los operadores de flotas una vista unificada de la ubicación del vehículo y la telemetría de diagnóstico sin cableado adicional. El factor de forma plug-and-play OBD-II simplifica el despliegue en flotas mixtas mientras permite que datos del bus CAN y diagnósticos OBD se transmitan a los mismos tableros operativos usados para seguimiento, alertas e informes.

El enfoque de endpoint único de Plaspy y la detección automática de protocolo hacen que empezar sea sencillo: apunte el GOT10 a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 por UDP o TCP según corresponda, y Plaspy se encargará de la detección del protocolo y del mapeo de datos. Para detalles adicionales del dispositivo, comportamiento del firmware y la guía más reciente del fabricante, revise la documentación oficial de EElink en https://www.eelink.com.cn/ y obtenga más información sobre Plaspy en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información actual con el fabricante.
