---
slug: /autofon/dx_mayak_81/configuration
id: dx_mayak_81-configuration
sidebar_label: Configuration
title: AutoFon - DX Mayak 8.1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon DX Mayak 8.1 con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - Configuración AutoFon DX Mayak 8.1
  - Ajustes DX Mayak 8.1
  - Configuración AutoFon Plaspy
  - Configuración de servidor DX Mayak 8.1
  - Configuración rastreador GPS AutoFon
  - Integración rastreador con Plaspy
  - Configuración plataforma GPS DX Mayak 8.1
  - Configuración rastreo vehicular
  - Configuración rastreo de activos
  - Compatibilidad rastreador GPS con Plaspy
---

# AutoFon - Configuración DX Mayak 8.1

Esta página ofrece el contexto público de configuración para utilizar el AutoFon DX Mayak 8.1 con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo típico necesarios para registrar el dispositivo en la plataforma de monitoreo Plaspy. El DX Mayak 8.1 es un rastreador compacto con batería que soporta GLONASS y GPS, seguimiento de baja potencia con intervalos largos, alertas por eventos como movimiento, choque y SOS, reporte por GPRS con fallback por SMS, funciones BLE de presencia y campos de telemetría como nivel de batería, temperatura, número de satélites y señal GSM, adecuados para la integración con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker en el servidor. Los pasos concretos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor que utilice. Esta guía se centra en los ajustes públicos de Plaspy que usted debe aplicar en el rastreador y en pasos prácticos de validación; siempre consulte la documentación del fabricante para comandos específicos del dispositivo o comportamiento de la interfaz.

## Resumen de la configuración

Preparar el DX Mayak 8.1 para Plaspy consiste principalmente en configurar el rastreador para que reporte al endpoint y puerto comunes de Plaspy y en verificar que los mensajes lleguen a la plataforma. Usted utilizará el método de configuración de AutoFon que prefiera para apuntar el dispositivo a Plaspy y confirmar la entrega de telemetría y eventos.

- Configure el rastreador para enviar reportes GPRS al endpoint y puerto del servidor Plaspy para que la ubicación y la telemetría aparezcan en Plaspy.
- Asegúrese de que el modo de transporte esté establecido en UDP o TCP en el puerto de Plaspy y guarde los cambios en la herramienta del dispositivo.
- Valide que campos de telemetría como nivel de batería, número de satélites y señal GSM estén incluidos en los mensajes que recibe Plaspy.
- Pruebe la entrega de eventos como movimiento, choque y SOS para confirmar el reporte de alarmas emparejadas.
- Verifique el comportamiento de fallback por SMS o la retransmisión para garantizar que los mensajes encolados lleguen a Plaspy cuando se restablezca la conexión.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: se soporta UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos habituales antes de la configuración

- Un DX Mayak 8.1 cargado y con energía, con acceso a la interfaz de configuración del dispositivo, por ejemplo el cargador Micro USB o la herramienta oficial de configuración.
- Una tarjeta SIM válida activada para datos GPRS si va a utilizar reporte por GPRS y capacidad SMS como fallback.
- El software de configuración del fabricante o la referencia de comandos SMS de AutoFon para realizar cambios de servidor y APN.
- Cobertura de red y disponibilidad de datos GPRS en la ubicación de instalación del dispositivo para permitir el registro inicial.
- Acceso a los datos del servidor Plaspy d.plaspy.com o 54.85.159.138 y al puerto 8888 antes de configurar el dispositivo.
- Permisos para reiniciar o cortar y volver a aplicar energía al rastreador durante la configuración y las pruebas de validación.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el DX Mayak 8.1 envía mensajes estructurados por GPRS al endpoint de la plataforma y usa SMS como canal secundario de control o fallback. Plaspy recibe tanto actualizaciones de posición en tiempo real como telemetría periódica, asegurando que los dispositivos permanezcan visibles incluso durante cortes temporales de red.

- El dispositivo se apunta al endpoint compartido de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 usando el puerto 8888.
- El transporte puede elegirse entre UDP o TCP según la interfaz de configuración del equipo y la preferencia del instalador.
- La telemetría de ubicación (GLONASS y GPS) y fijaciones asistidas por AGPS se reportan a Plaspy junto con nivel de batería, temperatura, conteo de satélites y señal GSM.
- Mensajes por eventos, como movimiento, choque y SOS, se entregan a Plaspy para alertas y registro inmediato.
- El DX Mayak 8.1 retransmite mensajes almacenados al restablecer la conectividad, por lo que los eventos históricos se preservan en Plaspy.
- El fallback por SMS puede usarse para control remoto o reportes de emergencia cuando GPRS no está disponible, según las instrucciones de AutoFon.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de AutoFon, por ejemplo el cargador Micro USB, la herramienta para Windows o el conjunto de comandos SMS documentado por AutoFon.
2. En los ajustes de servidor del dispositivo, ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto de reporte del dispositivo en 8888, que es el puerto común de Plaspy usado por todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar un protocolo para reporte GPRS.
5. Guarde o aplique la configuración dentro de la herramienta del fabricante o envíe los comandos SMS equivalentes si se soporta.
6. Reinicie o realice un ciclo de alimentación del DX Mayak 8.1 si la herramienta del fabricante lo requiere para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo esté reportando a Plaspy observando la telemetría entrante y los mensajes de eventos en la plataforma Plaspy o mediante las herramientas de diagnóstico y logs de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y el método que use para establecer servidor y puerto dependen de las herramientas de AutoFon, la versión de firmware y las interfaces disponibles. Plaspy acepta reportes dirigidos a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP y detectará automáticamente el protocolo del rastreador. Consulte la referencia de comandos de AutoFon o la herramienta loader para la sintaxis específica del dispositivo al establecer estos valores.

Si dispone de plantillas de comandos SMS de AutoFon o comandos del loader proporcionados por el fabricante, incluya el servidor y el puerto exactamente como se muestran arriba. Mantenga la consistencia del dominio o IP y del puerto al configurar el equipo para que los reportes lleguen a Plaspy de forma fiable.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar las etiquetas de los menús de configuración y la sintaxis de los comandos SMS; confirme siempre con la documentación de AutoFon para la revisión exacta de su dispositivo.
- Elegir UDP o TCP afecta las características de entrega; UDP es habitual para telemetría ligera mientras que TCP ofrece una sesión conectada según el soporte del firmware del rastreador.
- El DX Mayak 8.1 soporta fallback por SMS y retransmisión encolada, por lo que debe verificar ambos comportamientos (GPRS y SMS) durante las pruebas.
- Use el loader del fabricante o el conjunto de comandos SMS para los pasos de configuración autorizados y conserve cualquier valor de marcador de posición que la herramienta requiera.
- Las utilidades de configuración por Micro USB pueden requerir drivers o un entorno OS específico; revise los requisitos de la herramienta loader antes de comenzar.

## Por qué usar Plaspy con esta configuración

Utilizar el DX Mayak 8.1 con Plaspy ofrece a las organizaciones una vía sencilla para recopilar datos de seguimiento de bajo consumo y eventos en un entorno de monitoreo centralizado. La combinación de telemetría GLONASS y GPS, reporte por GPRS, fallback por SMS y una robusta retransmisión de mensajes ayuda a mantener la visibilidad de vehículos, activos y equipos portátiles en entornos con conectividad mixta.

Para más información sobre Plaspy visite https://www.plaspy.com y para verificar los métodos de configuración específicos más actuales, el comportamiento del firmware y los detalles del fabricante, consulte el sitio de AutoFon https://www.autofon.ru/ para documentación y herramientas oficiales.
