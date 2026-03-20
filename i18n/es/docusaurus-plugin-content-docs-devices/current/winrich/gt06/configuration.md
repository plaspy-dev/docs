---
slug: /winrich/gt06/configuration
id: gt06-configuration
sidebar_label: Configuration
title: Winrich - GT06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Winrich GT06 con Plaspy, incluyendo ajustes de servidor, comandos SMS, flujo de trabajo y pasos de verificación
keywords:
  - Configuración Winrich GT06
  - Instalación Winrich GT06
  - Configuración GT06 Plaspy
  - Configuración servidor GT06
  - Configuración rastreador GPS Winrich
  - Comandos SMS GT06
  - Configuración GPRS GT06
  - Configuración rastreador de vehículos
  - Configuración rastreador Plaspy
  - Integración rastreador GPS
---

# Winrich - Configuración GT06

Esta página documenta el contexto público de configuración para usar el Winrich GT06 con Plaspy. Resume los ajustes de servidor prácticos, el flujo de trabajo recomendado y los comandos SMS del GT06 que se usan habitualmente para apuntar el dispositivo a Plaspy. Use esta guía para preparar el rastreador para reportes en tiempo real y verificar la conectividad con la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta a la plataforma. Los pasos de configuración en el lado del fabricante para el GT06 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta página se centra en los comandos públicos de uso común y en los valores de servidor de Plaspy que debe ingresar o enviar.

## Resumen de configuración

El GT06 puede configurarse para enviar posición y telemetría a Plaspy mediante GPRS/TCP o mediante comandos SMS. El objetivo de la configuración es establecer una ruta de datos confiable desde el rastreador hasta Plaspy, confirmar que el dispositivo está en línea y habilitar visibilidad y alertas en el panel de Plaspy.

- Configure el APN y el servidor GPRS del dispositivo para que el GT06 pueda abrir una sesión TCP o UDP hacia Plaspy.
- Establezca el endpoint del servidor en Plaspy usando el dominio público o la IP y el puerto compartido.
- Valide la conectividad y los reportes usando los comandos de verificación de estado y configuración del dispositivo.
- Ajuste el intervalo de reporte para equilibrar la visibilidad en tiempo real y el consumo de datos.
- Confirme que el dispositivo aparezca en Plaspy y que se reciban eventos de ubicación y alarmas.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol after the device connects

## Requisitos previos típicos

- Una tarjeta SIM válida con datos habilitados y el APN correcto del operador móvil.  
- Alimentación aplicada al GT06 y batería interna de respaldo cargada si va a probar comportamiento ante corte de energía.  
- Acceso al método de comandos SMS del GT06 o a la herramienta de configuración del fabricante provista por Winrich.  
- Instalación básica del dispositivo completada para que el rastreador tenga recepción GSM y GPS adecuada para las pruebas.  
- Capacidad para enviar y recibir comandos SMS desde el número de administrador si utiliza la configuración por SMS.  
- Conocimiento de los ajustes APN del operador para reemplazar los marcadores cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GT06 envía ubicación y telemetría al endpoint y puerto compartidos del servidor de Plaspy, de modo que la plataforma pueda ingerir actualizaciones en tiempo real y eventos de alarma. La detección automática de protocolo de Plaspy permite que el mismo servidor y puerto funcionen para muchos modelos de rastreadores, incluido el GT06.

- El rastreador abre una sesión GPRS TCP o UDP hacia el servidor configurado (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- Las actualizaciones de ubicación y las alarmas se envían al intervalo de reporte configurado hacia Plaspy.  
- Plaspy recibe la telemetría y mapea los mensajes entrantes al protocolo del rastreador automáticamente.  
- El dispositivo también puede responder o ser consultado vía SMS para verificaciones rápidas cuando GPRS no esté disponible.  
- Una conexión exitosa hace que el rastreador sea visible en Plaspy para seguimiento en vivo e informes históricos.

## Flujo típico de configuración

1. Identifique y utilice el método de configuración oficial de Winrich para su unidad GT06, generalmente comandos SMS o el software del proveedor.  
2. Configure el APN para la SIM instalada usando el comando APN del GT06 con los valores de su operador.  
3. Ingrese d.plaspy.com o 54.85.159.138 como servidor del dispositivo según prefiera usar dominio o IP.  
4. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
5. Elija UDP o TCP en el dispositivo si el rastreador requiere selección explícita del transporte.  
6. Guarde o aplique la configuración y reinicie el dispositivo si el GT06 necesita reinicio para aplicar los ajustes de red.  
7. Valide que el rastreador reporte a Plaspy revisando el estado del dispositivo y buscando la unidad en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GT06 soporta un conjunto de comandos basado en SMS. Los siguientes comandos públicos se encuentran en la documentación del GT06 y se usan comúnmente para configurar el dispositivo para Plaspy. Conserve los marcadores como {{apn}} {{apnu}} y {{apnp}} al reemplazarlos por los valores de su operador.

- Reinicio de fábrica opcional inicial (use solo si es necesario durante la configuración):
```
940#
```

- Ajustar la zona horaria a UTC+0:
```
801#W0#
```

- Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador requiere usuario y contraseña, reemplace {{apnu}} y {{apnp}} respectivamente. Mantenga el formato de los marcadores al enviar:
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```

- Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto (esto apunta el GT06 a Plaspy). Note el hash final como en los ejemplos del fabricante:
```
803#54.85.159.138#8888#
```
Alternativamente puede usar el dominio en lugar de la IP si el dispositivo acepta dominios:
```
803#d.plaspy.com#8888#
```

- Establecer el intervalo de actualización de ubicación a 60 segundos:
```
730#60#
```

- Consultar la configuración actual (retorna la configuración del dispositivo):
```
886#
```

- Consultar el estado del dispositivo (retorna información como estado GPS y GSM):
```
902#
```

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis o el comportamiento de los comandos SMS; confirme los comandos con la documentación de firmware de su dispositivo antes de aplicarlos.  
- El GT06 soporta tanto configuración por SMS como configuración de servidor vía GPRS; elija el método que mejor se adapte a su instalación y a los requisitos de acceso.  
- Cuando tenga la opción, TCP frente a UDP puede afectar características de entrega; Plaspy soporta ambos transportes y detectará el protocolo automáticamente una vez que el dispositivo se conecte.  
- Reemplace los marcadores de APN {{apn}} {{apnu}} y {{apnp}} con los valores de su operador exactamente como se los haya proporcionado la compañía de telefonía móvil.  
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, por lo que no necesita un puerto personalizado por rastreador al integrar varias unidades.

## Por qué usar Plaspy con esta configuración

Usar el GT06 con Plaspy ofrece un rastreo de vehículos sencillo y práctico con cambios mínimos en el dispositivo. Apuntar el GT06 a Plaspy usando el dominio público o la IP y el puerto compartido permite recibir actualizaciones de ubicación en tiempo real, alarmas y telemetría en una plataforma central donde los gestores de flotas pueden monitorear actividad y recibir notificaciones de eventos.

Learn more about Plaspy and the platform features available for device integration at https://www.plaspy.com. Please verify the latest GT06 device specific commands, firmware behavior, and setup methods on the manufacturer site http://www.winrichgroup.com/en/ as hardware revisions and firmware updates can change configuration details over time.
