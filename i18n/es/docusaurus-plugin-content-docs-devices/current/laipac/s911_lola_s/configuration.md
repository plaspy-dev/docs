---
slug: /laipac/s911_lola_s/configuration
id: s911_lola_s-configuration
sidebar_label: Configuration
title: Laipac - S911 LOLA S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Laipac S911 LOLA S con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - configuración Laipac S911 LOLA S
  - configuración Laipac S911 para Plaspy
  - configuración servidor S911 LOLA S
  - integración LOLA S Plaspy
  - configuración rastreador GPS Laipac
  - compatibilidad mPERS Plaspy
  - configuración rastreador personal Plaspy
  - configuración alarma SOS rastreador
  - configuración detección de caídas rastreador
  - configuración software seguimiento Laipac
---

# Laipac - Configuración S911 LOLA S

Esta página describe el contexto público de configuración para utilizar el Laipac S911 LOLA S con Plaspy. Resume los ajustes de servidor prácticos y las acciones habituales que deberá realizar en el lado del fabricante o del instalador para apuntar un dispositivo compatible Lola S a la plataforma Plaspy. El contenido se centra en los pasos públicos de configuración y en el endpoint compartido de Plaspy usado para la telemetría y la entrega de eventos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se establece la conexión. Los pasos exactos de configuración del fabricante para una Lola S pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía debe entenderse como el contexto público de configuración en el lado de Plaspy que usted aplicará mediante el método de configuración oficial de Laipac.

## Resumen de configuración

El objetivo es que la S911 LOLA S entregue de forma fiable su información GNSS, eventos SOS, detección de caídas y registros de presencia a Plaspy, de modo que el dispositivo sea visible y gestionable desde la consola de Plaspy. Usted deberá apuntar el equipo al endpoint compartido de Plaspy y al puerto común, y luego validar la entrega de telemetría y eventos.

- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a su cuenta
- Configure el transporte y el puerto en la Lola S según los requisitos de Plaspy
- Valide en Plaspy los reportes de GNSS, SOS y demás eventos tras la configuración
- Confirme que la voz bidireccional y los flujos de emergencia funcionen en su entorno operativo
- Registre la versión de firmware y los detalles de configuración para futuras auditorías y resolución de problemas

## Ajustes del servidor Plaspy

- El dominio de servidor de Plaspy d.plaspy.com se usa para el envío de datos del dispositivo
- La IP 54.85.159.138 es un endpoint público alterno que puede utilizar
- Todos los dispositivos en Plaspy usan el mismo puerto: 8888
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una S911 LOLA S encendida y funcional con batería cargada y acceso a su interfaz de configuración
- Una SIM 4G LTE activa provisionada con voz y datos si se requiere voz bidireccional y subida de GNSS
- Acceso al método oficial de configuración de Laipac o a la herramienta del proveedor para establecer servidor y transporte
- Una cuenta Plaspy o permiso administrativo para confirmar la visibilidad del dispositivo después de la configuración
- Vista despejada del cielo para la primera fijación GNSS y para validar los informes de posición
- Conocimiento de la versión de firmware actual y de cualquier nota del proveedor que afecte la sintaxis de comandos o los menús

## Cómo se conecta este rastreador a Plaspy

Cuando la Lola S se configura para Plaspy, envía sus coordenadas GNSS y los mensajes de evento al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda centralizar la telemetría y las alertas del dispositivo. Plaspy recibe los datos en el puerto común y aplica detección automática de protocolo para interpretar el formato entrante del rastreador.

- El dispositivo informa la posición GNSS y actualizaciones con sello de tiempo a d.plaspy.com en el puerto 8888
- Las pulsaciones del botón SOS y los eventos de detección de caídas se transmiten al servidor Plaspy para alertas inmediatas
- Los registros automáticos de presencia y los eventos de geocerca se envían al mismo endpoint de Plaspy para registro y notificaciones
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos en el puerto 8888
- La detección automática de protocolo de Plaspy identifica el protocolo del rastreador cuando el dispositivo se conecta al endpoint compartido

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Laipac o al software proporcionado por el fabricante o el proveedor.
2. En los ajustes de servidor del dispositivo introduzca el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione el transporte UDP o TCP si la Lola S solicita elegir el tipo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o en el menú del dispositivo.
6. Reinicie el dispositivo si el fabricante lo requiere para aplicar los ajustes de red.
7. Valide que el dispositivo informe a Plaspy comprobando la visibilidad del equipo y la telemetría entrante en su cuenta de Plaspy.
8. Pruebe el SOS y el reporte de eventos para verificar que las alarmas y los flujos de voz bidireccional funcionen de extremo a extremo.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis dependen del firmware de Laipac y de la herramienta de configuración del proveedor. Los dispositivos Laipac se configuran habitualmente mediante la herramienta web del fabricante, una utilidad de escritorio o servicios de aprovisionamiento del proveedor. Use el método oficial de Laipac para fijar el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP según el transporte deseado.

Si dispone de comandos públicos específicos o de un conjunto de comandos por SMS proporcionado por Laipac a través de su proveedor, siga el orden y la sintaxis indicados en ese material oficial y mantenga cualquier marcador de posición como [apn] o [apnu] cuando estén presentes. Conserve siempre el manual del dispositivo o la guía de aprovisionamiento para confirmar los comandos correctos según su firmware.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, por lo que no necesita múltiples puertos por modelo
- Elija UDP o TCP según la herramienta de configuración del dispositivo; Plaspy acepta ambos y detectará el protocolo automáticamente
- Las revisiones de firmware y las herramientas de aprovisionamiento del proveedor pueden cambiar la sintaxis de comandos o las etiquetas de menú; registre la versión de firmware antes de realizar cambios
- Los flujos de voz bidireccional y SOS pueden requerir aprovisionamiento adicional más allá de los ajustes del servidor de telemetría, dependiendo del operador y de las opciones de aprovisionamiento
- Consulte siempre la documentación oficial de Laipac y las notas del proveedor para pasos específicos del dispositivo y cualquier configuración de APN o del operador requerida

## Por qué usar Plaspy con esta configuración

Usar el Laipac S911 LOLA S con Plaspy permite a las organizaciones consolidar la telemetría de seguridad personal junto con otros activos rastreados, ofreciendo al personal de cuidado y a los equipos operativos una vista unificada de ubicaciones, eventos SOS y alertas por caídas. El endpoint de Plaspy acepta los datos GNSS y de eventos del dispositivo para que los equipos puedan enrutar alertas, monitorear el estado y revisar los registros históricos desde la misma plataforma utilizada para la supervisión operativa más amplia.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles específicos del dispositivo en el sitio del fabricante https://laipac.com/. Verifique siempre los métodos de configuración más recientes, el comportamiento del firmware y la documentación del fabricante en Laipac para asegurarse de que los pasos y comandos que use coincidan con la revisión actual del dispositivo.
