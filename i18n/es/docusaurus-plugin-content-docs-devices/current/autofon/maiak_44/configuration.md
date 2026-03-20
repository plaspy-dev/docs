---
slug: /autofon/maiak_44/configuration
id: maiak_44-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar AutoFon Маяк 4.4 en Plaspy con ajustes de servidor y notas de instalación
keywords:
- Configuración AutoFon Маяк 4.4
- Configuración rastreador GPS AutoFon
- Configuración Mayak 4.4 para Plaspy
- Configuración servidor rastreador AutoFon
- Configuración de dispositivos Plaspy
- Configuración rastreo de vehículos
- Guía configuración rastreador GPS
- Instrucciones instalación Mayak 4.4
- Rastreadores compatibles con Plaspy
- Configuración rastreo de activos
---

# AutoFon - Маяк 4.4 — Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon Маяк 4.4 con Plaspy. Reúne los valores de servidor de Plaspy y recomendaciones prácticas que aplican para integrar este modelo, de modo que la unidad pueda reportar ubicación y telemetría básica a la plataforma Plaspy mediante SMS y paquetes GPRS por intervalo, según lo soportado por el dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que provea el proveedor, por lo que debe seguir esta guía junto con la documentación oficial de AutoFon para las instrucciones más actuales y específicas del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es preparar el Mayak 4.4 para que envíe de forma fiable datos de ubicación, alarmas y señal de vida a Plaspy usando el endpoint y puerto compartidos de la plataforma. Esto incluye ajustar el equipo para que use reporte por paquetes GPRS o SMS según corresponda, verificar la conectividad y confirmar que Plaspy recibe las actualizaciones del dispositivo.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy, de modo que los paquetes de ubicación y alarma entren en su cuenta Plaspy.
- Asegúrese de que el transporte y el puerto estén establecidos para coincidir con los ajustes de Plaspy y que el dispositivo pueda alcanzar la plataforma en modo paquete GPRS.
- Verifique el estado de la batería, la SIM y la red para el envío intermitente por GPRS y el control por SMS que utiliza el Mayak 4.4.
- Valide los reportes del dispositivo comprobando señales de vida, actualizaciones periódicas de posición y mensajes de alarma dentro de Plaspy.
- Active o confirme los números de control autorizados y la protección con PIN para que los SMS de comando fluyan entre Plaspy y el rastreador cuando sea necesario.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de red públicos de Plaspy al configurar el dispositivo o al introducir información de servidor en las herramientas del fabricante:

- Dominio del servidor d.plaspy.com como nombre de host principal para la ingestión en Plaspy.
- IP del servidor 54.85.159.138 puede usarse cuando se requiera una entrada numérica del host.
- Puerto 8888 es el puerto único utilizado por Plaspy para todos los dispositivos.
- Soporte de transporte UDP o TCP según la interfaz de configuración del dispositivo; la unidad puede configurarse usando UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que la plataforma puede aceptar los mensajes del dispositivo una vez que lleguen al puerto compartido.

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que solo necesita establecer el puerto 8888 para este rastreador para alinearlo con la plataforma.

## Requisitos previos a la configuración

- Una unidad Mayak 4.4 cargada o alimentada, con la batería instalada o alimentación externa conectada.
- Una tarjeta SIM activa con voz/SMS y datos/GPRS habilitados y saldo o plan de datos suficiente para el reporte por intervalos.
- Acceso al método oficial de configuración AutoFon o al software del fabricante y al manual del dispositivo para la sintaxis de comandos y los procedimientos de configuración.
- El dispositivo configurado con los ajustes APN del operador si su proveedor móvil los requiere para la transmisión de paquetes GPRS.
- Una lista de números de teléfono autorizados y códigos PIN para habilitar el control por SMS y evitar comandos no autorizados.
- Cobertura de red en el sitio de instalación adecuada para recepción GSM y GPS para las actualizaciones periódicas de ubicación.

## Cómo se conecta este rastreador a Plaspy

El Mayak 4.4 envía información de ubicación y estado a Plaspy usando los modos de reporte que soporta el dispositivo. En la práctica, el rastreador se configura para dirigir sus reportes GPRS o enviar mensajes SMS para que Plaspy pueda ingerir y presentar los datos en mapas y alertas.

- El rastreador envía paquetes GPRS por intervalo al endpoint del servidor Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Las alertas por SMS y los mensajes de control se usan para comandos remotos y entrega de alarmas cuando están configurados.
- Plaspy detecta automáticamente el protocolo entrante una vez que los paquetes llegan al puerto compartido y procesa la ubicación y la telemetría.
- Los mensajes de señal de vida y los estados periódicos se reenvían a Plaspy para el monitoreo de salud del dispositivo y reportes.
- Eventos de canales auxiliares y notificaciones de entradas de alarma se entregan como SMS o paquetes GPRS al endpoint Plaspy configurado.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración AutoFon o al software según la documentación del fabricante.
2. En los ajustes de red del dispositivo introduzca d.plaspy.com o 54.85.159.138 como host del servidor.
3. Configure el puerto del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP como opción de transporte si el dispositivo solicita una selección de transporte.
5. Configure los ajustes APN del operador si es necesario para que los paquetes GPRS puedan enviarse desde el rastreador.
6. Aplique o guarde la configuración usando la herramienta AutoFon o los comandos SMS que indique el manual del usuario.
7. Reinicie o corte y restaure la alimentación del dispositivo si el fabricante lo requiere para activar los nuevos ajustes de red.
8. Valide que el dispositivo reporte a Plaspy comprobando la llegada de mensajes de señal de vida y el primer paquete de posición en la interfaz de Plaspy.

## Ejemplos de comandos de configuración

Los comandos de configuración exactos y el método para enviarlos dependen de las herramientas AutoFon, la versión de firmware y de si configura por SMS o por una utilidad de PC del fabricante. Dado que los comandos de configuración del modelo los proporciona AutoFon y pueden variar, siga el manual de usuario de AutoFon para la sintaxis precisa para ajustar servidor, puerto, transporte, APN y números autorizados.

Si usa SMS para configurar el dispositivo, el manual del fabricante listará las plantillas de comandos SMS. Si usa una aplicación del proveedor, introduzca d.plaspy.com o 54.85.159.138 y el puerto 8888 en los campos de red o servidor, elija UDP o TCP donde se solicite, aplique y reinicie el dispositivo.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos SMS y el conjunto de parámetros de configuración disponibles; confirme siempre el conjunto de comandos con el manual de AutoFon correspondiente a su versión de firmware.
- El Mayak 4.4 está optimizado para reportes intermitentes para extender la vida de la batería; elija intervalos de reporte que equilibren las necesidades de rastreo con la autonomía de la batería.
- Seleccionar UDP frente a TCP puede afectar el comportamiento de entrega en condiciones de red deficientes; escoja el transporte que mejor se ajuste a sus requisitos de fiabilidad frente a sobrecarga.
- APN, restricciones del operador y ajustes de la tarjeta SIM pueden bloquear la entrega de paquetes GPRS si no se configuran correctamente; verifique el APN del operador antes de depender del reporte por GPRS.
- Mantenga una lista de números autorizados y proteja con PIN para evitar el control remoto no autorizado vía SMS.

## Por qué usar Plaspy con esta configuración

Usar AutoFon Маяк 4.4 con Plaspy ofrece un camino sencillo para monitorizar activos discretos o de bajo consumo. Los modos de reporte por SMS y paquetes GPRS por intervalo del rastreador se complementan bien con la capacidad de Plaspy para ingerir paquetes intermitentes, mostrar historial de posiciones, activar alertas y enviar SMS de comando cuando se requiere intervención, permitiendo una supervisión eficaz de activos con mantenimiento mínimo.

Para saber más sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para los comandos específicos de dispositivo, notas de firmware e instrucciones de instalación más actuales consulte la documentación oficial de AutoFon en https://www.autofon.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
