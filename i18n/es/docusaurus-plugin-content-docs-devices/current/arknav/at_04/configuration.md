---
slug: /arknav/at_04/configuration
id: at_04-configuration
sidebar_label: Configuration
title: ArkNav - AT-04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el rastreador ArkNav AT-04 y ajustes de servidor Plaspy para integración fiable
keywords:
  - Configuración ArkNav AT-04
  - Instalación ArkNav AT-04
  - Configuración de servidor ArkNav AT-04
  - Configuración AT-04 para Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS ArkNav
  - Configuración software seguimiento AT-04
  - Integración ArkNav AT-04
  - Guía configuración rastreador GPS
  - rastreo de activos AT-04
---

# ArkNav - AT-04 Configuración

Esta página describe el contexto público de configuración para usar el rastreador compacto ArkNav AT-04 con Plaspy. Aquí encontrará los ajustes de servidor y los pasos de integración que normalmente aplicará para que el dispositivo reporte ubicación y datos de movimiento a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos específicos en el equipo o por parte del fabricante para el AT-04 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía para los detalles públicos orientados a Plaspy y consulte la documentación oficial de ArkNav para procedimientos específicos del dispositivo.

## Resumen de la configuración

El objetivo al configurar un AT-04 para Plaspy es apuntar el rastreador al punto de conexión compartido de Plaspy, asegurar que el dispositivo tenga conectividad activa y verificar que las actualizaciones lleguen a la plataforma. Una vez configurado, el AT-04 puede enviar informes periódicos o por eventos que Plaspy ingiere para monitoreo en tiempo real y reportes históricos.

- Configure el rastreador para enviar datos al endpoint y puerto del servidor Plaspy.
- Confirme que el dispositivo tenga una SIM activa y conectividad celular para reporteo GSM y funciones SMS.
- Valide la selección del transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Reinicie o haga reboot del dispositivo si el fabricante lo solicita para aplicar cambios.
- Verifique que los informes de posición aparezcan en Plaspy y que los reportes por movimiento o por temporizador funcionen según lo esperado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Batería del dispositivo completamente cargada o fuente de alimentación conectada para la configuración y las pruebas.
- Tarjeta SIM activa instalada con servicio celular necesario para reporteo GSM y SMS si se usan.
- Acceso al método de configuración oficial de ArkNav, como el puerto de programación USB a serial Prolific o las herramientas de configuración del proveedor.
- Cuenta en Plaspy o acceso de aprovisionamiento para validar que el dispositivo aparece en la plataforma.
- Herramientas básicas para conectar el dispositivo a una PC o a un adaptador de programación si se requiere aprovisionamiento local.
- Paciencia para verificar comportamientos dependientes del firmware, ya que los modos de reporte y los menús pueden variar según la versión de firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT-04 envía sus datos de ubicación y movimiento al endpoint y puerto compartidos de Plaspy, donde la plataforma ingiere los mensajes y los asocia con su cuenta.

- El rastreador reporta fijaciones de posición y eventos de movimiento a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy detecta el protocolo automáticamente.
- Plaspy recibe informes periódicos por temporizador o actualizaciones activadas por movimiento según el perfil de reporte del AT-04.
- Las funciones de solicitud por SMS o llamada del AT-04 pueden complementar las subidas al servidor para consultas de ubicación puntuales.
- Una vez que Plaspy recibe los reportes, la plataforma muestra la posición en vivo, el historial y las alertas de movimiento soportadas.

## Flujo de configuración común

1. Acceda al método de configuración oficial de ArkNav o al software del proveedor usando el puerto de programación del dispositivo o la herramienta admitida.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Configure el puerto del dispositivo en 8888 para que coincida con el endpoint de Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita una selección explícita.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o en el menú del dispositivo.
6. Reinicie el rastreador cuando el fabricante lo indique para asegurar que los nuevos ajustes de servidor estén activos.
7. Valide que el dispositivo esté reportando a Plaspy revisando las posiciones y la telemetría entrante en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El AT-04 puede aprovisionarse usando las herramientas de configuración de ArkNav o el puerto USB a serial. Los comandos exactos y los menús varían según la herramienta y el firmware, así que siga las instrucciones del fabricante para el modelo AT-04 que tenga. Los flujos comunes del fabricante le pedirán definir el nombre de host del servidor o la IP y el puerto con los valores de Plaspy indicados arriba.

Si utiliza una herramienta de aprovisionamiento basada en línea de comando o texto proporcionada por ArkNav o un tercero, los campos que típicamente configurará son:
- Servidor u Hostname: d.plaspy.com (o 54.85.159.138)
- Puerto: 8888
- Transporte: UDP o TCP (si el dispositivo lo requiere)

Consulte las herramientas de ArkNav para la sintaxis exacta y el orden requerido por su versión de firmware.

## Notas de configuración

- Las variaciones de firmware pueden cambiar los nombres de los menús, el orden de los campos y las opciones de transporte disponibles; confirme el flujo para su revisión de firmware específica.
- Elija TCP cuando necesite entrega orientada a conexión y UDP cuando prefiera menor sobrecarga; Plaspy aceptará cualquiera de los dos y detecta el protocolo automáticamente.
- Si depende de solicitudes de ubicación por SMS o por llamada para verificaciones puntuales, asegúrese de que la SIM tenga SMS habilitado y que las funciones telefónicas del dispositivo estén correctamente provisionadas.
- Use el puerto de programación USB a serial Prolific solo con los controladores y cables recomendados por ArkNav para evitar problemas de comunicación.
- Todos los dispositivos configurados para Plaspy deben usar el puerto 8888; este puerto se comparte entre los dispositivos compatibles para una ingesta coherente.

## Por qué usar Plaspy con esta configuración

Configurar el ArkNav AT-04 para reportar a Plaspy ofrece un camino directo para integrar rastreo compacto y de bajo consumo en flujos centralizados de monitoreo y alertas. Las organizaciones se benefician al hacer que el rastreador reporte a un único endpoint compartido de Plaspy donde los datos de ubicación y movimiento pasan a formar parte de paneles en vivo, historial y alertas automatizadas que apoyan la toma de decisiones operativas.

Learn more about Plaspy and view platform capabilities at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official provisioning tools for the ArkNav AT-04, verify current information on the manufacturer website https://www.arknavgps.com.tw/ as setup methods and firmware behavior can change over time.
