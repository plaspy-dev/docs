---
slug: /topshine/ca02/configuration
id: ca02-configuration
sidebar_label: Configuration
title: TopShine - CA02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar TopShine CA02 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración TopShine CA02
  - Configuración inicial TopShine CA02
  - Configuración servidor CA02
  - Configuración CA02 con Plaspy
  - Configuración rastreador GPS
  - Configuración rastreo de vehículos
  - Ajustes servidor Plaspy
  - Comandos SMS CA02
  - Configuración GPRS CA02
  - Configuración rastreador alarma de auto
---

# TopShine - CA02 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador TopShine CA02 con la plataforma Plaspy. Se centra en los pasos prácticos y los comandos públicos que puede utilizar para apuntar el CA02 a Plaspy, y explica qué verificar antes de intentar la integración. El contenido se basa en el conjunto de funciones del CA02 y en los comandos públicos de configuración por SMS/GPRS disponibles para este modelo.

Plaspy utiliza un endpoint de servidor compartido y un único puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante para el CA02 pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del vendedor; el CA02 también admite configuración por SMS y ajuste del servidor GPRS, que se muestran a continuación como ejemplos públicos.

## Resumen de configuración

El objetivo de la configuración es asegurarse de que el CA02 pueda alcanzar Plaspy a través de datos móviles y reportar posición y telemetría de alarmas de forma confiable. Para el CA02 esto normalmente implica usar la interfaz de configuración por SMS del equipo para establecer el APN del operador, la dirección y el puerto del servidor GPRS y el modo de reporte.

- Configure el APN del dispositivo para que el CA02 pueda establecer conectividad GPRS
- Apunte el dispositivo al endpoint de servidor compartido de Plaspy para que la telemetría se entregue a la plataforma
- Seleccione el modo de transporte (UDP o TCP) si el equipo requiere una selección
- Valide el IMEI y el ID del dispositivo para que Plaspy asocie la telemetría entrante al activo correspondiente
- Confirme que el dispositivo reporte actualizaciones en vivo y alarmas en Plaspy después de la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la instalación

- Una unidad CA02 alimentada y accesible para el instalador
- Una SIM 2G funcional con plan de datos activo y el APN correcto del operador
- Capacidad de enviar y recibir SMS desde un número administrador si va a usar comandos SMS para la configuración
- Acceso a la documentación del fabricante o instrucciones de instalador del CA02 para pasos específicos del equipo
- El IMEI del dispositivo disponible para registro y verificación en Plaspy

## Cómo se conecta este rastreador a Plaspy

El CA02 envía la posición GPS y la telemetría de alarmas a través de la red de datos móviles al endpoint y puerto compartido de Plaspy. Una vez que el servidor GPRS está apuntando a Plaspy y el dispositivo está en modo de reporte GPRS, Plaspy recibirá y mostrará las actualizaciones de ubicación, eventos de alarma y el estado del equipo.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy
- Los mensajes de posición y alarma se reenvían a Plaspy para monitoreo en vivo e historial
- Eventos de alarma como impactos del sensor de choque o apertura de puerta pueden reportarse a Plaspy
- Plaspy recibe datos del dispositivo independientemente de si el rastreador usa UDP o TCP, ya que la plataforma detecta automáticamente el protocolo entrante
- Una conectividad exitosa proporciona visibilidad en Plaspy para seguimiento, alertas y monitoreo operativo

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de TopShine o a la herramienta de instalador para el CA02, o prepárese para enviar comandos SMS desde un teléfono autorizado.
2. Asegúrese de que el equipo tenga una SIM funcional y configure el APN correcto del operador para datos móviles.
3. Ingrese la dirección del servidor Plaspy ya sea como d.plaspy.com o la IP 54.85.159.138 según el método de entrada que acepte el dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el CA02 solicita la selección del transporte.
5. Aplique o guarde la configuración en el dispositivo y cambie el equipo al modo de reporte GPRS cuando sea necesario.
6. Reinicie o realice un ciclo de energía en el dispositivo si las instrucciones del fabricante indican que es necesario.
7. Valide que el CA02 reporte a Plaspy y aparezca en la plataforma con el IMEI o ID de dispositivo correcto.

## Ejemplos de comandos de configuración

El CA02 ofrece una interfaz de comandos por SMS. Los siguientes comandos públicos son la secuencia común utilizada para preparar la unidad para Plaspy. La contraseña por defecto del dispositivo mostrada en estos comandos es 000000.

1. Reinicio de fábrica inicial opcional (usar solo cuando sea necesario)
```sms
W000000,990,099###
```

2. Establecer el ID del dispositivo (el comando SMS del CA02 espera 14 dígitos derivados del IMEI)
- Reemplace {{imei14}} con los primeros 14 dígitos del IMEI del dispositivo. Tenga en cuenta que Plaspy identifica los dispositivos por el IMEI completo de 15 dígitos al emparejar datos entrantes.
```sms
W000000,010,{{imei14}}
```

3. Configurar el APN del operador
- Conserve los marcadores de posición para APN, usuario y contraseña. Reemplace [apn], [apnu] y [apnp] con los valores de su operador según sea necesario.
```sms
W000000,011,[apn],[apnu],[apnp]
```
- Si su APN no tiene usuario ni contraseña, omita los marcadores [apnu] y [apnp] según corresponda.

4. Establecer el servidor GPRS a Plaspy (IP del servidor y puerto)
```sms
W000000,012,54.85.159.138,8888
```
- Alternativamente, si su dispositivo acepta un nombre de dominio, use d.plaspy.com en lugar de la IP.

5. Cambiar el dispositivo al modo de reporte GPRS
```sms
W000000,013,2
```

6. Establecer el intervalo de actualización (ejemplo que define un intervalo de reporte)
```sms
W000000,014,6
```

7. Recuperar el IMEI del dispositivo para verificación
```sms
W000000,601
```

Notas sobre los comandos
- La contraseña por defecto en estos ejemplos es 000000. Use la contraseña del dispositivo si ha sido cambiada.
- El orden de los comandos importa para la configuración inicial: primero configure APN y servidor antes de cambiar al modo GPRS.
- El marcador {{imei14}} indica los primeros 14 dígitos del IMEI que requiere el comando de ID del CA02; Plaspy asociará el dispositivo usando el IMEI completo de 15 dígitos en su emparejamiento.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos SMS o los parámetros disponibles; siempre verifique con la documentación del firmware del CA02.
- El CA02 admite la configuración por SMS como se muestra; algunos instaladores prefieren el software o las herramientas del fabricante si están disponibles.
- Si el dispositivo requiere selección de transporte, elija UDP o TCP según las necesidades de la instalación; Plaspy soporta ambos y detecta automáticamente el protocolo entrante.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles; apunte el CA02 a d.plaspy.com o a 54.85.159.138 con puerto 8888.
- Al usar marcadores del APN, confirme las credenciales del operador con su proveedor de SIM antes de aplicar la configuración.

## Por qué usar Plaspy con esta configuración

Conectar el TopShine CA02 a Plaspy proporciona un destino único para ubicación en vivo, eventos de alarma y el estado de los dispositivos en toda su flota o instalaciones de vehículos. Las funciones de alarma integradas del CA02, las salidas de inmovilizador y la telemetría del sensor de choque se vuelven operativas mediante las capacidades de monitoreo, alertas y reproducción histórica de Plaspy, lo que brinda a los operadores visibilidad centralizada y una respuesta más rápida ante incidentes.

Learn more about Plaspy and how it handles device reporting, alerts, and fleet visibility at https://www.plaspy.com. For the latest device specific commands, firmware notes and installation guidance for the CA02, verify current information with the manufacturer at https://www.gztopshine.com/ as setup methods and firmware behavior can change over time.
