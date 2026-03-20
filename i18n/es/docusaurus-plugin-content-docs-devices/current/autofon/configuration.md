---
slug: /autofon//configuration
id: -configuration
sidebar_label: Configuration
title: AutoFon - Термо Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el controlador de calefacción AutoFon Термо con los flujos y la telemetría de Plaspy
keywords:
  - configuración AutoFon Термо
  - instalación AutoFon Термо
  - AutoFon Термо Plaspy
  - configuración módulo calefacción AutoFon
  - guía configuración AutoFon Thermo
  - integración calefacción AutoFon
  - telemetría AutoFon Термо
  - configuración rastreador Plaspy
  - integración calefacción Plaspy
  - configuración plataforma rastreo GPS
---

# AutoFon Термо: Configuración

Esta página documenta el contexto de configuración pública para usar el controlador de calefacción AutoFon Термо con Plaspy. Explica los ajustes de servidor prácticos, los pasos preparatorios típicos y las consideraciones de flujo de trabajo que usted debe tener en cuenta cuando planee incluir eventos y controles de AutoFon Термо en la telemetría gestionada por Plaspy o cuando la unidad se utilice junto a un rastreador GPS compatible con Plaspy.

AutoFon Термо es un controlador de calefacción basado en GSM y no un rastreador GNSS autónomo. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo, aunque los pasos exactos del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Siga la guía a continuación como referencia pública de integración y verifique cualquier paso específico del dispositivo con la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo al configurar AutoFon Термо para su uso con Plaspy es asegurar que los eventos de control de calefacción y la telemetría sean visibles y accionables dentro de sus flujos de trabajo de flota. Esto incluye preparar el equipo para que se comunique con Plaspy, confirmar la conectividad y verificar que los eventos se registren en la plataforma cuando el Thermo se use directamente o en combinación con un rastreador GPS compatible con Plaspy.

- Asegúrese de que el módulo esté instalado y alimentado correctamente como parte del cableado del vehículo o del circuito del calefactor.
- Disponga de una conexión GSM funcional y de la provisión de SIM necesaria para operaciones remotas por SMS o voz.
- Configure cualquier capacidad de reporte en red (cuando exista) hacia el endpoint compartido de Plaspy para que los eventos puedan asociarse con los vehículos en Plaspy.
- Valide que eventos como arranques remotos, activaciones por temporizador y pulsaciones manuales queden registrados o reenviados a los flujos de Plaspy.
- Confirme que una cuenta o proyecto de flota en Plaspy esté listo para recibir y mapear los eventos de calefacción a los registros de vehículo correspondientes.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy cuando el dispositivo o el rastreador compañero requiera un endpoint de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept either transport

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del equipo en la plataforma.

## Requisitos típicos antes de la configuración

- Dispositivo instalado y alimentado según las instrucciones del fabricante e integrado en el circuito auxiliar de control del calefactor.
- Tarjeta SIM GSM activa con señal adecuada y los servicios SMS o de voz necesarios habilitados para control remoto y notificaciones.
- Acceso al método de configuración oficial de AutoFon, al manual de usuario o a la herramienta de instalador para la puesta a punto del equipo.
- Una cuenta de Plaspy o proyecto de flota configurado para recibir eventos del dispositivo y mapearlos a vehículos.
- Acceso físico a la unidad o al vehículo para pruebas iniciales y verificación tras la configuración.
- Conocimiento del cableado del vehículo y de cómo el Thermo se integra con su calefactor posventa (se recomienda instalador o técnico calificado).

## Cómo se conecta este equipo a Plaspy

AutoFon Термо funciona principalmente como un controlador de calefacción GSM y complementa los flujos de Plaspy proporcionando eventos de control de calefacción y datos de programación. Cuando se integra o empareja con un rastreador GPS compatible con Plaspy, los eventos del Thermo se registran junto con la posición y otra telemetría en Plaspy.

- Los comandos de encendido y apagado del calefactor enviados por SMS o menú de voz pueden registrarse en los flujos de Plaspy.
- Los temporizadores programables y los eventos de precalentamiento programados generan registros predecibles que Plaspy puede mostrar en informes.
- Las pulsaciones locales del botón de la cabina y los comandos remotos pueden coexistir; ambos tipos de eventos pueden registrarse para auditoría operativa.
- Cuando la configuración del fabricante permite reporte por red, configure el endpoint a d.plaspy.com o 54.85.159.138 en el puerto 8888 para enrutar los eventos hacia Plaspy.
- La detección automática de protocolo de Plaspy permite seleccionar UDP o TCP durante la configuración del dispositivo según lo requiera el equipo o la herramienta del instalador.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de AutoFon o al software de instalador descrito en la documentación del fabricante.
2. Introduzca el endpoint del servidor Plaspy especificando d.plaspy.com o alternativamente 54.85.159.138 en los ajustes de red/servidor del dispositivo.
3. Configure el dispositivo para usar el puerto 8888 al reportar a Plaspy.
4. Elija el protocolo de transporte UDP o TCP si el firmware del equipo o la herramienta de configuración requieren una selección explícita.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes se han escrito en la unidad.
6. Reinicie o realice un ciclo de alimentación del dispositivo si el fabricante lo recomienda para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporte en Plaspy y que los eventos aparezcan en el registro del vehículo correspondiente dentro de su proyecto Plaspy.

## Ejemplos de comandos de configuración

El método de configuración del fabricante para AutoFon Термо puede variar según el firmware o la herramienta de instalador. Dado que la sintaxis de comandos específica del modelo no se incluye aquí, los comandos exactos dependen de la interfaz de configuración de AutoFon que usted use. Los instaladores comerciales suelen utilizar una aplicación de configuración, comandos SMS o una herramienta serial/USB para programar los ajustes de red.

Si dispone de ejemplos de comandos específicos del dispositivo por parte del fabricante o de la herramienta del instalador, conserve marcadores como {{apn}} o {{apnu}} al introducir la información del APN y siga la sintaxis de la herramienta. Para verificar el reporte de eventos, utilice los pasos de verificación del fabricante o del instalador para confirmar que el dispositivo es accesible y que Plaspy recibe eventos de prueba.

## Notas sobre la configuración

- AutoFon-Термо es principalmente un controlador de calefacción GSM; confirme si su unidad específica soporta reporte directo en red a un servidor antes de intentar la configuración TCP/UDP.
- Diferencias en firmware, revisión de hardware o variantes para mercados locales pueden cambiar las opciones de configuración disponibles y los comandos soportados.
- Elija UDP o TCP según la interfaz de configuración del dispositivo y las consideraciones de fiabilidad de la red; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Dado que el equipo está descatalogado y puede no estar disponible en stock, verifique opciones de reemplazo o enfoques alternativos de integración con su instalador o con el soporte de Plaspy.
- Consulte siempre la documentación oficial de AutoFon para la sintaxis exacta de comandos y los detalles de configuración por SMS o menú de voz.

## Por qué usar Plaspy con esta configuración

Usar AutoFon Термо junto con Plaspy ofrece a flotas y operadores una vista integrada de la actividad del calefactor junto con el rastreo y la telemetría del vehículo. Esta combinación ayuda a reducir el ralenti no planificado, mejorar el confort y la disponibilidad del conductor, y generar historiales de eventos accionables para programación y planificación de mantenimiento.

Para saber más sobre cómo Plaspy puede soportar flujos de control de calefacción y telemetría de flotas, visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de AutoFon https://www.autofon.ru/.
