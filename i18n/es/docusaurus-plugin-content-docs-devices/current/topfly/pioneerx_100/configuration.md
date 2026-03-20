---
slug: /topfly/pioneerx_100/configuration
id: pioneerx_100-configuration
sidebar_label: Configuration
title: TopFly - PioneerX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopFly PioneerX 100 y apuntarlo a los servidores de Plaspy
keywords:
  - Configuración TopFly PioneerX 100
  - Configuración PioneerX 100
  - Configuración Plaspy PioneerX 100
  - Configuración servidor PioneerX 100
  - Configuración rastreador GPS TopFly
  - Configuración dispositivo Plaspy
  - Configuración seguimiento vehicular
  - Rastreador gestión de flotas
  - Comandos SMS PioneerX 100
  - Ajustes servidor rastreador GPS
---

# TopFly - Configuración del PioneerX 100

Esta página documenta el contexto público de configuración para usar el rastreador TopFly PioneerX 100 con Plaspy. Describe los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo y los pasos prácticos habituales para preparar el equipo y que reporte en los paneles de Plaspy. Use esta guía junto con la documentación oficial de TopFly para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor comunes entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PioneerX 100 ofrece múltiples canales de configuración, incluyendo comandos SMS y software del proveedor; los ejemplos siguientes muestran una configuración común basada en SMS que muchos instaladores utilizan.

## Resumen de la configuración

Configurar el PioneerX 100 para Plaspy prepara el rastreador para enviar posiciones GNSS y eventos a un punto final central de Plaspy, donde se muestran en mapas, alertas y herramientas de informes. El objetivo práctico es establecer los parámetros de red, el destino del servidor, el intervalo de reporte y las credenciales APN necesarias para que el equipo suba telemetría de forma fiable.

- Configure la zona horaria del dispositivo y el APN de la red para que la conexión celular funcione con la SIM instalada.
- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría se envíe a la plataforma.
- Ajuste el intervalo de reporte para controlar la frecuencia de actualizaciones y el consumo de batería o datos.
- Verifique la conectividad y confirme que el dispositivo se registra en Plaspy y sube los puntos almacenados.
- Conserve los datos de contraseña por defecto y aplique credenciales seguras cuando sea posible para evitar bloqueos accidentales.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporta transporte UDP o TCP según preferencia del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los mensajes

Tenga en cuenta que Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, y la plataforma detecta automáticamente el protocolo por lo que los rastreadores individuales no requieren asignaciones de puerto únicas.

## Requisitos típicos antes de configurar

- Una unidad PioneerX 100 alimentada e instalada con batería de respaldo cargada, si está disponible.  
- Una tarjeta SIM activa con datos habilitados y la configuración APN correcta para el operador celular.  
- Capacidad para enviar SMS desde un teléfono autorizado si utiliza la configuración por SMS.  
- Acceso al método de configuración del fabricante o al software oficial del proveedor para el PioneerX 100.  
- Conocimiento de la contraseña de configuración del dispositivo si es distinta a la predeterminada de fábrica.  
- Una cuenta Plaspy y la información de registro del dispositivo para confirmar que el rastreador aparece en su espacio de trabajo Plaspy.

## Cómo se conecta este rastreador a Plaspy

El PioneerX 100 se configura para reportar posiciones GNSS y eventos a Plaspy enviando telemetría al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo está apuntado al servidor y dispone de conectividad, los mensajes son ingeridos por Plaspy y mostrados en la plataforma para supervisión en tiempo real y reproducción histórica.

- El rastreador envía mensajes de ubicación y eventos a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- Los mensajes pueden transportarse por UDP o TCP según la configuración del dispositivo.  
- Plaspy detecta automáticamente el protocolo y analiza la telemetría entrante para mostrar el dispositivo.  
- Las posiciones en caché mientras el equipo está fuera de línea se suben a Plaspy cuando se restaura la conectividad celular.  
- El reporte de eventos como encendido, SOS y estados digitales I/O se transmite a Plaspy para alertas y flujos de trabajo.

## Flujo habitual de configuración

1. Acceda al método oficial de configuración de TopFly para el PioneerX 100, ya sea la app del proveedor, la herramienta de configuración por USB Type-C o la interfaz de comandos SMS.  
2. Ingrese el destino del servidor Plaspy como d.plaspy.com o 54.85.159.138 según la interfaz de configuración que use.  
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Seleccione el protocolo de transporte UDP o TCP si su dispositivo requiere una selección explícita.  
5. Aplique o guarde la configuración en el dispositivo o envíe los comandos SMS necesarios para actualizar los ajustes.  
6. Reinicie o haga un ciclo de energía del dispositivo si el fabricante recomienda un reinicio para aplicar cambios.  
7. Valide que el rastreador reporte a Plaspy revisando el estado del dispositivo en su cuenta Plaspy y confirmando actualizaciones en vivo o cargas de posiciones recientes.

Si prefiere la configuración por SMS, siga la sintaxis del fabricante y envíe los comandos de ejemplo que aparecen abajo en el mismo orden cuando el orden sea importante.

## Comandos de ejemplo para configuración

El PioneerX 100 puede configurarse por SMS usando la contraseña por defecto del dispositivo 0000 en estos comandos de ejemplo. Envíe cada línea como un SMS individual desde un número autorizado. Conserve los marcadores de posición donde se indiquen.

- Ajustar la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Establecer el APN del operador
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: reemplace [apn] con el nombre del APN de su operador, [apnu] con el usuario del APN si es necesario, y [apnp] con la contraseña del APN si aplica. Deje usuario o contraseña vacíos si no se usan.

- Configurar el servidor GPRS usando la IP y el puerto de Plaspy
```text
IP,0000,54.85.159.138 8888#
```
Nota: Si el dispositivo soporta nombres de dominio, puede alternativamente apuntar el servidor a d.plaspy.com mediante la herramienta del fabricante. Use el método compatible con su firmware.

- Establecer el intervalo de reporte a 60 segundos
```text
TIMER,0000,60:60:0:0#
```

Envíe estos comandos en el orden mostrado para una configuración inicial típica. Ajuste valores como la zona horaria y el temporizador según sus requisitos operativos.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar los comandos disponibles o la sintaxis; confirme siempre la sintaxis con la documentación más reciente de TopFly.  
- La configuración por SMS es común en instalaciones remotas; cuando sea posible, use la herramienta del proveedor o el puerto USB para configuraciones por lote y actualizaciones FOTA.  
- Elija UDP o TCP según la fiabilidad de la red y sus preferencias de plataforma; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Asegúrese de que los marcadores [apn], [apnu] y [apnp] estén completados con las credenciales correctas del operador o se dejen vacíos cuando no sean necesarios.  
- Anote la contraseña por defecto indicada por el fabricante y cámbiela si el dispositivo permite una alternativa más segura.

## Por qué usar Plaspy con esta configuración

Usar el PioneerX 100 con Plaspy proporciona a las organizaciones visibilidad práctica y en tiempo real de los movimientos de vehículos y activos, además de conservar trazas históricas para análisis. Los intervalos de reporte configurables del dispositivo, su caché offline y el reporte de eventos I/O encajan naturalmente con funciones de Plaspy como mapas en vivo, alertas y paneles de telemetría para operaciones de flota, flujos anti robo y monitorización basada en condiciones.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration, firmware behavior, and manufacturer instructions at https://www.topflytech.com/ to ensure your deployment uses the most current methods and supported commands.
