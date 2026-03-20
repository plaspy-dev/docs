---
slug: /gosafe/gtu5000/configuration
id: gtu5000-configuration
sidebar_label: Configuration
title: Gosafe - GTU5000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gosafe GTU5000 con compatibilidad Plaspy y ajustes de servidor compartido
keywords:
  - Configuración Gosafe GTU5000
  - Instalación Gosafe GTU5000
  - Gosafe GTU5000 Plaspy
  - Configuración servidor GTU5000
  - Configuración rastreador GPS GTU5000
  - Configuración rastreador Gosafe
  - Configuración seguimiento vehicular
  - Configuración flota
  - Integración telemática Plaspy
  - Configuración rastreador GPS Plaspy
---

# Gosafe - Configuración del GTU5000

Esta página muestra el contexto público de configuración para usar el rastreador Gosafe GTU5000 con Plaspy. Resume los ajustes prácticos de servidor y el flujo de trabajo común que usted deberá seguir para apuntar el dispositivo a Plaspy y obtener ubicación en tiempo real, telemetría de sensores e informes de eventos, manteniendo coherencia con las capacidades públicas del fabricante para el GTU5000.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Considere la información aquí como la parte práctica de la integración con Plaspy y confirme las instrucciones específicas del dispositivo con los materiales oficiales de Gosafe cuando sea necesario.

## Resumen de la configuración

El objetivo al configurar el GTU5000 para Plaspy es preparar el equipo para que entregue de forma confiable posiciones y telemetría al endpoint compartido de Plaspy, validar la conectividad y asegurarse de que el dispositivo aparezca en la plataforma Plaspy para monitoreo e informes. El GTU5000 soporta múltiples protocolos de red, opciones de SIM dual y gestión OTA, lo que ayuda a mantener la disponibilidad en flotas.

- Apunte el GTU5000 al endpoint del servidor de Plaspy para que la telemetría llegue a los paneles y alertas de Plaspy.
- Elija el protocolo de transporte compatible con el dispositivo y el entorno de red, UDP o TCP, y configure el mismo puerto que usa Plaspy.
- Verifique la conectividad del dispositivo y que el GTU5000 esté enviando periódicamente mensajes de posición y eventos.
- Asegúrese de que el firmware del dispositivo y la provisión de la SIM sean compatibles con el transporte seleccionado y las bandas de red requeridas.
- Confirme que el dispositivo sea visible y reporte correctamente en Plaspy tras la configuración y cualquier reinicio requerido del equipo.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos de Plaspy al configurar el GTU5000 para reportar en la plataforma:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transporte: UDP o TCP en el puerto 8888 según firmware y preferencia
- detección automática de protocolo en Plaspy para que la plataforma identifique el protocolo del rastreador una vez que lleguen los datos

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo del rastreador automáticamente cuando el dispositivo empiece a enviar datos al endpoint del servidor.

## Requisitos típicos antes de la configuración

- Confirme que tiene acceso al método oficial de configuración de Gosafe para el GTU5000, como una herramienta del fabricante, comandos SMS o una interfaz web/console.
- Asegúrese de que el GTU5000 tenga alimentación y esté instalado o conectado de forma que permita el registro en la red y la recepción GNSS.
- Verifique que el dispositivo tenga una SIM válida o método de conectividad aprovisionado y que la SIM soporte las bandas móviles de datos necesarias.
- Revise la versión de firmware del equipo y las notas de la versión por si hay cambios de configuración requeridos o problemas conocidos.
- Prepare valores de APN u otros marcadores si su operador requiere configuración APN durante la puesta en marcha.
- Tenga a mano los datos de su cuenta Plaspy y las instrucciones de configuración de flota para confirmar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GTU5000 envía posición y datos de sensores al endpoint y puerto compartido de Plaspy para que los administradores de flota puedan ver telemetría en tiempo real e informes históricos. Plaspy ingiere los mensajes entrantes, aplica detección automática de protocolo y pone los datos a disposición en la plataforma.

- El GTU5000 transmite posición GNSS y telemetría de sensores usando protocolos soportados como TCP o UDP hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los datos entrantes, por lo que normalmente no es necesario registrar el protocolo de forma explícita en la plataforma.
- Informes de eventos como cambios de encendido, activaciones de entradas y alertas se reenvían a Plaspy para mapeo, alertas e informes.
- SIM dual y protocolos de respaldo como HSPA o SMS ofrecen resiliencia para que el dispositivo continúe reportando a Plaspy en condiciones de red variables.
- Una vez conectado, la visibilidad del dispositivo, el seguimiento en vivo y las actualizaciones de estado están disponibles en Plaspy para monitoreo y toma de decisiones operativas.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Gosafe para el GTU5000, por ejemplo la herramienta web del fabricante, el conjunto de comandos SMS o la utilidad de configuración.
2. Ingrese la información del servidor Plaspy usando el server domain d.plaspy.com o la server IP 54.85.159.138 según lo requiera la herramienta.
3. Configure el puerto del dispositivo en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como protocolo de transporte si el dispositivo solicita elegir un transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o envíe/guarde los comandos SMS para persistir la configuración.
6. Reinicie el dispositivo si el procedimiento del fabricante lo requiere para activar los nuevos ajustes de red.
7. Valide que el GTU5000 reporte a Plaspy confirmando que el dispositivo aparece y se actualiza en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y el método de configuración varían según el firmware de Gosafe y las herramientas del proveedor. Algunos instaladores usan un conjunto de comandos SMS, otros emplean una utilidad USB o web, y las unidades modernas pueden aceptar configuración OTA vía una plataforma de gestión de dispositivos. Dado que los comandos del fabricante cambian según el firmware, consulte la documentación oficial de Gosafe o la herramienta de su proveedor para la sintaxis y el orden exacto de los comandos.

Si utiliza comandos SMS o un método de configuración en texto proporcionado por Gosafe, conserve cualquier marcador de posición como APN o nombre de usuario exactamente como se indica. Por ejemplo, las instrucciones del fabricante suelen mostrar marcadores como [apn] que debe reemplazar por el valor APN de su operador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y la sintaxis de comandos; verifique el firmware del dispositivo antes de aplicar ajustes.
- Elija TCP cuando necesite entrega orientada a sesión y UDP cuando prefiera menor latencia y menor sobrecarga, según el soporte del dispositivo y la fiabilidad de la red.
- La configuración vía SMS o la configuración manual mediante herramientas del proveedor es comúnmente soportada en el GTU5000 y resulta útil en instalaciones remotas o cuando aún no hay conectividad de datos.
- Las prácticas del instalador y las variantes del mercado pueden afectar los pinouts, ajustes predeterminados e interfaces disponibles, como CANBUS o RS485.
- Siempre contraste los valores públicos del servidor Plaspy d.plaspy.com y 54.85.159.138 en el puerto 8888 al solucionar conectividad para asegurarse de que el dispositivo apunte al endpoint correcto.

## Por qué usar Plaspy con esta configuración

Usar el GTU5000 con Plaspy ofrece una forma práctica de recopilar telemetría GNSS y de sensores de alta calidad desde vehículos y activos, y centralizar esos datos para monitoreo de flota, alertas e informes. Las capacidades del hardware del GTU5000, como multi GNSS, conectividad LTE Cat 1, múltiples opciones de E/S y soporte para TCP, UDP y SMS, lo convierten en una opción sólida para organizaciones que requieren telemetría robusta y compatible con Plaspy a escala.

Para obtener más información sobre Plaspy y cómo ingiere la telemetría de dispositivos visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la última configuración y la sintaxis de comandos del GTU5000 en el sitio oficial del fabricante https://gosafesystem.com/ antes del despliegue.
