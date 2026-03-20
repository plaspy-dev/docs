---
slug: /arknav/rx_10/protocol
id: rx_10-protocol
sidebar_label: Protocol
title: ArkNav - RX-10 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar ArkNav RX-10 con Plaspy usando ajustes compartidos y detección automática de protocolo
keywords:
  - Protocolo ArkNav RX-10
  - Protocolo GPS ArkNav RX-10
  - Compatibilidad RX-10 Plaspy
  - Protocolo de rastreador vehicular RX-10
  - Protocolo GPS ArkNav
  - Protocolo de seguimiento RX-10
  - Protocolo de dispositivo Plaspy
  - Seguimiento de flotas RX-10
  - Telemetría vehicular RX-10
  - Guía de integración RX-10
---

# ArkNav - Protocolo RX-10

Esta página describe el contexto público del protocolo para usar el rastreador ArkNav RX-10 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y qué esperar al configurar el RX-10 para seguimiento de flotas, telemetría y flujos de trabajo antirrobo. El RX-10 es un rastreador vehicular robusto con clasificación IP67 diseñado para entornos exigentes, ofrece 4G LTE con retroceso a 3G y 2G, antenas GPS y UMTS integradas, accesorios modulares y actualizaciones por aire que facilitan despliegues de flota a escala.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se reporta al endpoint de Plaspy. Para el RX-10 esto normalmente implica apuntar el equipo al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página debe servir como guía pública y se recomienda verificar la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación del RX-10 es el mecanismo mediante el cual el rastreador se identifica, reporta ubicación y eventos, y entrega telemetría a un servidor remoto como Plaspy. En la práctica, el protocolo determina qué datos envía el dispositivo, cómo se enmarcan y direccionan esos datos, y cómo el servidor puede reconocer o responder. Plaspy recibe esa información en un endpoint compartido e interpreta los reportes entrantes para presentar ubicación, alertas y telemetría a los usuarios.

- Permite que el RX-10 entregue posición GPS, eventos de encendido y movimiento, alertas del acelerómetro y lecturas de temperatura 1 Wire a Plaspy.
- Incluye identificadores de dispositivo para que Plaspy pueda asignar los reportes entrantes a la instancia correcta del rastreador.
- Soporta actualizaciones periódicas de ubicación y reportes por evento para casos de uso en tiempo real o casi en tiempo real.
- Proporciona el canal para configuración remota y actualizaciones de firmware por aire cuando el dispositivo lo soporta.
- Funciona sobre transporte TCP o UDP según la configuración del dispositivo y las condiciones de la red.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos y detecta automáticamente el protocolo utilizado por un reporte entrante del dispositivo. Esto reduce la necesidad de que los usuarios seleccionen manualmente un protocolo dentro de la plataforma cuando el dispositivo está correctamente configurado para reportar a Plaspy. La detección automática permite que Plaspy acepte una amplia gama de rastreadores compatibles manteniendo una estrategia de conexión entrante uniforme.

- Plaspy acepta reportes de dispositivos en d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la provisión a escala de flotas.
- Plaspy soporta tanto transporte UDP como TCP en el puerto 8888 según la configuración del dispositivo.
- Cuando el RX-10 se reporta al endpoint de Plaspy, Plaspy detectará el protocolo y mapeará los datos al registro de dispositivo correspondiente.
- En la mayoría de los casos, usted solo necesita configurar el RX-10 para que apunte al endpoint de Plaspy y establecer el transporte; no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el RX-10 alcanza Plaspy y qué ajustes de transporte se usan comúnmente. El RX-10 soporta conectividad celular y puede configurarse para usar UDP o TCP para reportar a Plaspy. Al preparar el equipo, apúntele al endpoint de Plaspy y seleccione el transporte que mejor se adapte a sus requisitos de red y fiabilidad.

- Los dispositivos pueden configurarse para conectarse a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todos los rastreadores soportados.
- El RX-10 puede usar UDP o TCP en el puerto 8888 según la configuración y los compromisos deseados entre latencia y fiabilidad.
- La elección del transporte puede afectar el comportamiento de entrega en condiciones de red deficientes; TCP ofrece entrega orientada a conexión mientras que UDP puede ser más liviano.
- Asegúrese de que el APN y los ajustes de red celular en el RX-10 sean correctos para la SIM y la región utilizadas.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar las funciones disponibles y el comportamiento de los mensajes; confirme la versión de firmware del RX-10 al validar compatibilidad.
- Las revisiones de hardware o los módulos accesorios pueden añadir o modificar campos de telemetría y la forma en que se reportan eventos.
- Las configuraciones predeterminadas del fabricante pueden usar un endpoint o transporte distinto; configure el dispositivo para que reporte a Plaspy explícitamente cuando sea necesario.
- El comportamiento del operador de red y el soporte celular regional pueden afectar la conectividad y la conmutación entre 4G, 3G y 2G.
- Siempre valide que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y utilice el puerto 8888 según lo requiere Plaspy.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta correctamente al endpoint compartido, lo que reduce el esfuerzo de configuración por dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fiable, agilizar la resolución de problemas y mantener una operación predecible a largo plazo de los dispositivos RX-10 gestionados por Plaspy. Saber qué envía el dispositivo y cómo se conecta da a los instaladores y operadores de flota confianza al diagnosticar problemas de conectividad o de datos.

- Acelera la provisión inicial al clarificar el endpoint y los ajustes de transporte que el rastreador necesita para alcanzar Plaspy.
- Mejora la resolución de problemas al acotar fallas a transporte, APN, versión de firmware o configuración del dispositivo.
- Ayuda a planificar la telemetría de accesorios como identificación de conductor, control de inmovilizador y sensores de temperatura 1 Wire.
- Permite decisiones informadas sobre la selección de transporte y el comportamiento de conmutación celular en distintos escenarios de despliegue.
- Facilita la planificación de mantenimiento para actualizaciones de firmware y asegurar comportamiento consistente en la flota.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav RX-10 con Plaspy ofrece una forma práctica y escalable de convertir hardware vehicular resistente en una fuente de datos gestionada para monitoreo de flotas, protección antirrobo y logística sensible a la temperatura. El hardware RX-10 está diseñado para condiciones adversas y ofrece múltiples opciones de telemetría, mientras que Plaspy recibe y normaliza los reportes entrantes para que las organizaciones se concentren en alertas, flujos de trabajo e información operativa en lugar de analizar protocolos en crudo.

Para saber más sobre cómo Plaspy trabaja con dispositivos soportados y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la documentación técnica más reciente del fabricante, por favor verifique la información en https://www.arknavgps.com.tw/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar el sitio del fabricante le asegura tener la información de dispositivo más actual.
