---
slug: /tk_star/tk209b/protocol
id: tk209b-protocol
sidebar_label: Protocol
title: TK-Star - TK209B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador GPS TK-Star TK209B con Plaspy y garantizar comunicación fiable
keywords:
  - Protocolo TK-Star TK209B
  - Protocolo GPS TK209B
  - Protocolo de comunicación TK209B
  - Protocolo de rastreo TK209B
  - Compatibilidad de rastreador Plaspy
  - Integración Plaspy TK209B
  - Guía de protocolo de rastreador GPS
  - Rastreo de vehículos TK209B
  - Gestión de flotas TK209B
  - Rastreo de activos de larga duración
---

# TK-Star - Protocolo TK209B

Esta página ofrece una visión pública y no sensible sobre el contexto de comunicación al usar el rastreador GPS TK-Star TK209B con Plaspy. Explica cómo el equipo reporta ubicación y telemetría a Plaspy y qué papel juega el protocolo de reporte del dispositivo para una integración y operación continuas exitosas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, esta página se enfoca en el contexto general del protocolo en lugar de detallar paquetes específicos de firmware.

## Resumen del protocolo

El TK209B usa su enlace celular y fuentes de posicionamiento multimodo para generar ubicación y telemetría que se envían a un endpoint de servidor. El protocolo de reporte del rastreador define cómo el equipo se identifica, informa GNSS y telemetría auxiliar, y notifica eventos como movimiento o alertas de manipulación para que Plaspy pueda interpretar y mostrar esos sucesos.

- Permite la entrega de actualizaciones de ubicación, estado de batería y señal, y eventos de movimiento desde el equipo hacia Plaspy.
- Proporciona identificadores para que Plaspy asocie los datos entrantes con el rastreador y la cuenta correctos.
- Señala tipos de eventos como geocerca, exceso de velocidad o vibración para que Plaspy genere alertas y registre sucesos.
- Transporta telemetría auxiliar que Plaspy utiliza para estado, diagnóstico e informes históricos.
- Funciona sobre capas de transporte estándar para que el dispositivo pueda reportar a Plaspy usando el mismo endpoint que otros equipos compatibles.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y reconoce automáticamente el protocolo del rastreador cuando un equipo correctamente configurado se conecta. En la mayoría de despliegues el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy y usa el transporte compatible.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com, que resuelve a la IP pública 54.85.159.138.
- El puerto de escucha de Plaspy para tráfico de dispositivos es el 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Plaspy realiza detección automática de protocolo para conexiones entrantes, por lo que normalmente no se requiere selección manual.
- Los equipos pueden configurarse para reportar usando TCP o UDP según el soporte del dispositivo y la preferencia del operador.
- Los requisitos comunes para que Plaspy detecte y acepte un rastreador son el identificador correcto del dispositivo y la dirección del servidor en la configuración del equipo.

## Contexto de transporte y conexión

Los ajustes de conexión y transporte determinan cómo el TK209B alcanza Plaspy, pero no cambian el rol conceptual del protocolo del rastreador. El TK209B soporta reporte celular mediante módulos específicos por región y puede configurarse para usar UDP o TCP hacia el endpoint de Plaspy.

- Los equipos pueden configurarse para enviar reportes por UDP o TCP al puerto 8888.
- El endpoint del servidor para reportes puede establecerse como d.plaspy.com o la dirección numérica 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo número de puerto 8888, lo que simplifica la configuración entre múltiples modelos.
- La elección del transporte puede afectar características de entrega como el comportamiento de retransmisión y debe coincidir con la capacidad del rastreador y las necesidades del despliegue.
- Asegúrese de que el APN y la configuración celular del dispositivo coincidan con la SIM local y que el rastreador pueda alcanzar el endpoint de Plaspy mediante el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades TK209B pueden cambiar la cadencia de reporte, los tipos de eventos disponibles o los formatos de identificador; verifique el firmware usado cuando haga diagnóstico.
- Las revisiones de hardware y los módulos específicos por región, como variantes SIM7600, pueden afectar las bandas celulares y el comportamiento de conmutación, pero no cambian el endpoint público de reporte.
- Algunas implementaciones del fabricante exponen entradas y salidas o telemetría opcional según la variante; confirme qué entradas están presentes en su unidad.
- La selección de transporte entre UDP y TCP es una opción de configuración en muchos rastreadores y puede estar limitada por firmware o compilaciones regionales.
- Valide siempre la configuración del equipo confirmando que el rastreador apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el identificador del dispositivo esté correctamente establecido.
- Consulte la documentación oficial del fabricante para comandos específicos de firmware, funciones opcionales o menús de configuración.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una configuración confiable, alertas predecibles y datos históricos consistentes en Plaspy. Saber qué envía el rastreador y cómo Plaspy espera recibirlo reduce el tiempo de configuración y facilita la resolución de problemas de red o configuración.

- Confirma que el dispositivo está reportando los identificadores que Plaspy necesita para asociar los datos con el activo correcto.
- Facilita el diagnóstico de reportes faltantes al revisar los ajustes de transporte, el APN y si el rastreador apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Permite expectativas realistas sobre qué campos de telemetría estarán disponibles y qué extras pueden depender de variantes de firmware o hardware.
- Apoya la planificación de redundancia y cadencia de reporte para ajustar la vida útil de la batería y las necesidades operativas.
- Ayuda a mapear eventos del dispositivo como vibración o geocerca en alertas y flujos de trabajo dentro de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TK209B con Plaspy ofrece una solución práctica para organizaciones que requieren monitoreo duradero de activos y vehículos. El posicionamiento multimodo del dispositivo, su batería robusta y diseño resistente, combinados con la detección automática de protocolo de Plaspy y su endpoint centralizado, simplifican el despliegue y permiten visibilidad en tiempo real, alertas y almacenamiento histórico de rutas.

Plaspy acepta reportes enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP y detecta automáticamente el protocolo del rastreador, por lo que la configuración se centra en conectar el equipo a la red y apuntarlo al endpoint compartido de Plaspy. Para saber más sobre Plaspy y cómo se integra con el TK209B visite https://www.plaspy.com. Para comportamiento específico del protocolo por firmware, notas y detalles del fabricante, confirme la información actual en el sitio oficial de TK Star https://www.tk-star.com/
