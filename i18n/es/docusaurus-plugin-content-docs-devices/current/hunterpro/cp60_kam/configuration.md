---
slug: /hunterpro/cp60_kam/configuration
id: cp60_kam-configuration
sidebar_label: Configuration
title: HunterPro - CP60-KAM Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el HunterPro CP60-KAM con los ajustes compartidos de Plaspy y detección automática de protocolo
keywords:
  - Configuración HunterPro CP60-KAM
  - Instalación HunterPro CP60-KAM
  - Configuración CP60-KAM Plaspy
  - Configuración software seguimiento CP60-KAM
  - Configuración plataforma GPS HunterPro
  - Evento pánico con cámara CP60-KAM
  - Configuración rastreador Plaspy
  - Configuración plataforma seguimiento vehicular
  - Seguimiento de flotas CP60-KAM
  - Ajustes servidor rastreador GPS
---

# HunterPro - Configuración del CP60-KAM

Esta página documenta el contexto público de configuración para usar el rastreador HunterPro CP60-KAM con Plaspy. Se centra en los ajustes públicos y compartidos del servidor y en los pasos prácticos que normalmente seguirá para apuntar el equipo a Plaspy, de modo que pueda enviar datos de ubicación y eventos a la plataforma. El CP60-KAM incluye capacidad de captura de imágenes y puede registrar automáticamente una foto cuando ocurre un Evento de Pánico; aquí explicamos cómo asegurarse de que el rastreador comunique esos eventos e imágenes a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el CP60-KAM pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y la herramienta de configuración usada por el instalador o proveedor. Use la guía que encontrará aquí para aplicar los ajustes de Plaspy en la herramienta de configuración de HunterPro, y consulte la documentación de HunterPro para controles específicos del equipo como opciones de cámara y eventos de pánico.

## Resumen de la configuración

El objetivo de este proceso es preparar el CP60-KAM para que se comunique de forma confiable con Plaspy y que así la plataforma muestre ubicaciones, estados y eventos de captura de imágenes. A continuación se listan los resultados prácticos que debería obtener al seguir los pasos de configuración.

- Apuntar el CP60-KAM al servidor de Plaspy para que el dispositivo envíe telemetría y datos de eventos.
- Elegir la opción de transporte (UDP o TCP) soportada por el rastreador y Plaspy y establecer el puerto compartido.
- Verificar que el dispositivo se registre y reporte a Plaspy para que las ubicaciones y los eventos de imagen de pánico aparezcan en la cuenta.
- Asegurarse de que las opciones de cámara y Evento de Pánico en el CP60-KAM estén habilitadas si desea captura automática de imágenes.
- Validar la conectividad y el reporte correcto en la interfaz de Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

Utilice los siguientes ajustes públicos de Plaspy al configurar el CP60-KAM:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que el puerto 8888 es el valor compartido que debe aplicar cuando le soliciten el puerto de la plataforma.

## Requisitos típicos antes de la configuración

- Acceso físico al CP60-KAM o al instalador que realizará la configuración
- Acceso al método de configuración de HunterPro requerido por el dispositivo, como el software del proveedor, una herramienta web o una interfaz de hardware
- Alimentación conectada al rastreador y a cualquier periférico necesario para su funcionamiento normal, incluida la alimentación de la cámara si es independiente
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para verificar la visibilidad del dispositivo tras la configuración
- Confirmación de la versión de firmware del dispositivo y de las notas del proveedor que afecten campos de configuración
- Conectividad de red fiable según lo requiera el rastreador para alcanzar el endpoint de Plaspy

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el CP60-KAM enviará actualizaciones de ubicación, estado del equipo y notificaciones de eventos al endpoint y al puerto compartido de Plaspy. Plaspy recibe los datos entrantes, identifica automáticamente el protocolo que usa el rastreador y muestra las ubicaciones y eventos reportados en la plataforma.

- El CP60-KAM se configura para reportar al dominio o IP del servidor Plaspy y para usar el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP según la herramienta de configuración y la preferencia del instalador.
- Las capturas de imagen en eventos de Pánico (eventos de cámara) se envían como datos de evento para que las imágenes queden asociadas al evento en Plaspy cuando la alimentación de datos lo permita.
- Plaspy realiza detección automática de protocolo, por lo que la selección explícita del protocolo solo es necesaria si el firmware del equipo lo solicita.
- Un reporte exitoso hace que el rastreador sea visible en Plaspy para monitoreo y control operativo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de HunterPro para el CP60-KAM proporcionado por el proveedor o instalador.
2. Ingrese d.plaspy.com o 54.85.159.138 como destino del servidor en los ajustes de red del dispositivo.
3. Configure el puerto en 8888, que es el puerto compartido de Plaspy usado para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si la interfaz de configuración requiere elegir uno.
5. Habilite o verifique las opciones de cámara y Evento de Pánico en el CP60-KAM si desea captura automática de imágenes con alertas.
6. Aplique o guarde la configuración en la herramienta HunterPro y reinicie el equipo si la herramienta o el dispositivo requieren reinicio.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y los eventos recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El método y los comandos de configuración del CP60-KAM varían según el firmware de HunterPro y la herramienta de configuración suministrada por el proveedor. Plaspy soporta los ajustes públicos de servidor mencionados arriba, pero la sintaxis exacta de comandos o los campos del GUI dependen de HunterPro. Consulte la herramienta de configuración de HunterPro o la documentación para los comandos precisos o los menús usados para establecer el dominio del servidor, la IP, el puerto, el transporte y las opciones de eventos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los campos y el flujo exacto de configuración. Confirme la versión de firmware antes de seguir los pasos literalmente.
- Si la configuración del equipo presenta campos tanto para dominio como para IP, puede usar d.plaspy.com o 54.85.159.138; ambos apuntan al servicio de Plaspy.
- Elegir UDP o TCP puede afectar el comportamiento de entrega; Plaspy detectará el protocolo automáticamente, pero seleccione el transporte requerido por el firmware del CP60-KAM o por su diseño de red.
- Las opciones de cámara y Evento de Pánico son funciones a nivel de dispositivo; habilítelas y pruébelas en la herramienta de HunterPro para que las capturas de imagen se transmitan cuando ocurran eventos.
- Verifique siempre la conectividad consultando el estado del dispositivo en Plaspy después de guardar los ajustes y reiniciar el rastreador si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el HunterPro CP60-KAM con Plaspy ofrece un camino directo para recopilar datos de ubicación, eventos y capturas de imagen en una sola plataforma de monitoreo. Para organizaciones que necesitan visibilidad de los movimientos de vehículos y un registro visual durante eventos de pánico o alarmas, enrutar la telemetría del CP60-KAM a Plaspy centraliza incidentes y datos de seguimiento para facilitar la revisión y la respuesta operativa.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, detalles de firmware y orientación del fabricante más actualizada, verifique la información con HunterPro en http://hunterpro.com.tw/ ya que las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
