---
slug: /autofon/alfa_maiak/configuration
id: alfa_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Альфа-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar AutoFon Альфа Майак con Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - Configuración AutoFon Альфа Майак
  - Configuración AvtoFon Alfa Beacon
  - Rastreador GPS AutoFon Plaspy
  - Configuración servidor Alfa Maiak
  - Configuración GPRS Alfa Beacon
  - Configuración SMS AutoFon
  - Configuración seguimiento de vehículos Plaspy
  - Guía instalación rastreador GPS
  - Integración Autofon Alfa Maiak
  - Compatibilidad Alfa Beacon Plaspy
---

# AutoFon - Альфа-Маяк: Configuración

Esta página documenta el contexto público de configuración para usar el AutoFon Альфа‑Маяк (AvtoFon Alfa Beacon) con Plaspy. Se centra en los ajustes de servidor prácticos y los pasos que necesita para apuntar el Alfa Beacon a Plaspy, de modo que el dispositivo informe ubicación y estado a través de GPRS y SMS por GSM. La guía se basa en la información pública de los servidores de Plaspy y en la descripción del Alfa Beacon.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El Alfa Beacon es compatible con Plaspy desde fábrica y puede reportar por SMS y GPRS; siga los métodos de configuración del fabricante o las herramientas de AvtoFon para actualizar el servidor destino y los parámetros de transporte cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el Alfa Beacon para enviar datos de ubicación y eventos a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma de monitoreo. El objetivo es asegurar reportes GPRS confiables y SMS opcional para que Plaspy reciba actualizaciones de posición, alertas SOS y notificaciones de estado del dispositivo.

- Apunte el dispositivo al endpoint del servidor de Plaspy para que los reportes GPRS se entreguen a la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) que soporte el dispositivo y el servidor.
- Use el mismo puerto de Plaspy empleado por todos los dispositivos compatibles para que el servidor acepte los datos entrantes.
- Valide la conectividad desde el dispositivo hacia Plaspy y confirme que el equipo aparece en Plaspy tras la configuración.
- Mantenga la capacidad del dispositivo para enviar notificaciones SMS para enlaces al mapa o alertas de emergencia cuando sea necesario.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Alfa Beacon. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo de comunicación del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos habituales antes de configurar

- Una unidad Alfa Beacon con batería interna cargada y el dispositivo encendido.
- Conectividad GSM activa. El Alfa Beacon soporta reportes por SMS y GPRS y puede incluir una SIM M2M provisionada de fábrica.
- Acceso al método oficial de configuración del fabricante, por ejemplo la Cuenta Personal AvtoFon KSA en web o la interfaz de comandos SMS del dispositivo y su documentación.
- Una cuenta en Plaspy o acceso de administrador para confirmar que el dispositivo se registra correctamente en su entorno de monitoreo.
- Conocimiento de si el firmware del dispositivo requiere selección entre TCP o UDP y la posibilidad de cambiar ese transporte si es necesario.
- Herramientas básicas para validar conectividad, como un teléfono para pruebas SMS y una forma de monitorear los reportes del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El Alfa Beacon envía mensajes de posición GNSS y estado por GSM usando GPRS como canal principal de reporte y SMS como canal alterno o por eventos. Al configurar Plaspy, el dispositivo dirige sus paquetes GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera la telemetría y la muestre en el sistema.

- Los reportes GPRS del dispositivo se envían a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy soporta transportes UDP y TCP; seleccione el transporte en los ajustes del Alfa Beacon si el equipo lo requiere.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria una selección de protocolo específica en el servidor.
- SMS puede emplearse para enlaces de ubicación puntuales o alertas SOS, mientras que GPRS entrega la telemetría rutinaria y los paquetes en búfer.
- El manejo de mensajes en búfer del Alfa Beacon permite que Plaspy reciba eventos en cola una vez que se restablece la conectividad.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de AvtoFon, como la Cuenta Personal AvtoFon KSA en web o la interfaz de configuración por SMS según el manual del Alfa Beacon.
2. En los ajustes de servidor del dispositivo, introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 para que coincida con el puerto compartido de Plaspy utilizado por todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el ajuste de transporte si el Alfa Beacon exige una selección de transporte.
5. Aplique o guarde los cambios en la herramienta de gestión AvtoFon o envíe los comandos SMS que apliquen los nuevos parámetros de servidor.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio o si los ajustes requieren reinicio para surtir efecto.
7. Valide la conectividad confirmando que el rastreador aparece en Plaspy y que está reportando ubicación y actualizaciones de estado.

## Ejemplos de comandos de configuración

El Alfa Beacon se configura habitualmente a través de la Cuenta Personal AvtoFon KSA en web o mediante cadenas de comando SMS proporcionadas por el fabricante. Los formatos exactos de los comandos y las palabras clave SMS varían según firmware y región, por lo que consulte el manual oficial del Alfa Beacon para la sintaxis precisa. Debido a que los conjuntos de comandos difieren entre versiones de firmware y compilaciones regionales, no se incluyen comandos públicos universales aquí. Use la documentación del fabricante o el soporte de AvtoFon para obtener los comandos SMS correctos o los pasos en la interfaz web para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos SMS y las opciones de transporte disponibles; verifique siempre los comandos frente al manual del dispositivo.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega en condiciones de red pobres; pruebe ambos si su instalación experimenta conectividad intermitente.
- El Alfa Beacon soporta GPRS como reporte principal y SMS como canal alterno; utilice SMS para enlaces inmediatos al mapa o reportes SOS cuando se requiera.
- El almacenamiento en búfer tipo "black box" del dispositivo ayuda a recuperar eventos perdidos después de la reconexión; confirme el comportamiento del búfer en la especificación del dispositivo.
- Use la Cuenta Personal AvtoFon KSA en web o los comandos SMS oficiales para configuración remota y actualizaciones de firmware cuando estén soportados.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon Альфа‑Маяк con Plaspy ofrece a las organizaciones una solución de rastreo compacta y de bajo mantenimiento que entrega ubicación, alertas SOS y estado del dispositivo a través de canales GSM estándar. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la integración, de modo que el Alfa Beacon puede comenzar a reportar con cambios mínimos en el servidor, lo que lo hace adecuado para seguimiento discreto de activos, monitoreo antirrobo y supervisión ligera de flotas donde la duración de batería es importante.

Para saber más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los comandos de configuración específicos más recientes del dispositivo, notas de firmware y procedimientos del fabricante, verifique los detalles en el sitio oficial de AvtoFon https://www.autofon.ru/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
