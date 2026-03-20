---
slug: /eelink/gpt49/configuration
id: gpt49-configuration
sidebar_label: Configuration
title: EElink - GPT49 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink GPT49 y apuntarlo al servidor Plaspy además de verificar la conectividad
keywords:
  - configuración EElink GPT49
  - instalación EElink GPT49
  - configuración servidor GPT49
  - configuración GPT49 Plaspy
  - configuración rastreador GPS EElink
  - configuración SMS GPT49
  - configuración plataforma GPS Plaspy
  - guía configuración rastreador de activos
  - configuración rastreador GPS larga duración
  - configuración rastreo de activos empresarial
---

# EElink - Configuración del GPT49

Esta página describe el contexto público de configuración para usar el rastreador EElink GPT49 con la plataforma Plaspy. Reúne los ajustes de servidor esenciales y orientación práctica que puede aplicar al preparar dispositivos GPT49 para reportar ubicación y eventos a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, en esta guía incluimos los comandos SMS del GPT49 que se usan comúnmente para la configuración inicial y la verificación.

## Resumen de la configuración

El objetivo de este proceso es preparar un GPT49 para que se comunique de forma fiable con Plaspy usando el punto de conexión y puerto compartidos de Plaspy. La configuración suele establecer la zona horaria del dispositivo, el APN para datos celulares y la dirección y transporte del servidor GPRS, y luego validar el reporte mediante una consulta de parámetros y monitorización en vivo en Plaspy.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los paquetes lleguen a la plataforma.  
- Configurar el APN y parámetros celulares del dispositivo para permitir el envío de datos GPRS.  
- Seleccionar UDP o TCP si el dispositivo requiere elegir transporte y establecer el puerto compartido de Plaspy.  
- Activar un intervalo de reporte adecuado, como un temporizador periódico o modo en tiempo real para eventos de movimiento.  
- Validar los ajustes en el dispositivo con una consulta de parámetros y confirmar que el equipo aparece en Plaspy.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy  

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo envíe datos al endpoint del servidor.

## Requisitos típicos antes de la configuración

- Un dispositivo GPT49 con batería suficiente para la configuración y las pruebas.  
- Una tarjeta SIM activa con servicio de datos y capacidad de SMS instalada en el dispositivo.  
- Acceso a la documentación del fabricante EElink o a la herramienta de instalación del GPT49.  
- Un método para enviar comandos SMS al dispositivo si planea usar configuración por SMS.  
- Una cuenta en Plaspy y acceso a la plataforma para verificar que el dispositivo aparece y reporta correctamente.  
- Cobertura celular en la ubicación del dispositivo suficiente para GPRS o datos LTE.

## Cómo se conecta este rastreador a Plaspy

El GPT49 envía posiciones GNSS, estado del dispositivo y señales de eventos a través de la red celular al endpoint del servidor Plaspy. Una vez que el equipo está configurado con los ajustes de servidor Plaspy y un APN activo, Plaspy ingiere los paquetes y muestra ubicación, historial y alertas en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.  
- Los paquetes de ubicación y telemetría se envían por LTE o modos celulares de respaldo para alcanzar Plaspy.  
- Plaspy detecta automáticamente el protocolo usado por el rastreador cuando llegan los datos.  
- Los reportes de eventos como movimiento, manipulación o activación de geocercas se reenvían a Plaspy para generar alertas.  
- Plaspy muestra posiciones en tiempo real e historial de ubicaciones para monitoreo operativo e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración EElink para el GPT49, por ejemplo comandos SMS o la herramienta de configuración del fabricante.  
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración.  
5. Configure los parámetros APN del dispositivo para la SIM instalada, de modo que el rastreador pueda iniciar sesiones de datos GPRS.  
6. Guarde o aplique la configuración y reinicie el equipo si el dispositivo necesita un reinicio para aplicar cambios.  
7. Valide que el equipo reporta a Plaspy comprobando la lista de dispositivos y la posición en vivo en la plataforma.

## Ejemplos de comandos de configuración

El GPT49 admite configuración por SMS. A continuación están los comandos SMS de uso habitual extraídos de instrucciones públicas de EElink. Conserve los marcadores de posición y reemplácelos por los valores de su operador al enviar.

- Reinicio de fábrica opcional para la configuración inicial
```
FACTORY#
```

- Establecer la zona horaria en UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
```
APN,[apn],[apnu],[apnp]#
```
Explicación: reemplace [apn] con el APN de su operador móvil. Si su operador requiere usuario y contraseña incluya [apnu] y [apnp] respectivamente. Si no se requieren usuario o contraseña, puede enviar solo APN,[apn]#.

- Configurar el servidor GPRS para usar el dominio y puerto de Plaspy
```
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente configurar el servidor GPRS usando la IP y puerto de Plaspy
```
SERVER,0,54.85.159.138,8888#
```

- Establecer intervalo de reporte cada 60 segundos
```
TIMER,60#
```

- Consultar los parámetros actuales
```
PARAM#
```

Envíe cada comando SMS como un único mensaje. El orden anterior es típico para la configuración inicial; el reinicio de fábrica es opcional y solo debe usarse al partir de los valores de fábrica.

## Notas de configuración

- La configuración por SMS es un método publicado comúnmente para el GPT49, pero también pueden existir herramientas del fabricante o opciones OTA. Siga las indicaciones de EElink para su build de firmware.  
- Plaspy acepta tanto el dominio como la dirección IP para el ajuste del servidor; ambos se muestran arriba como ejemplos públicos.  
- Elija UDP o TCP según la preferencia del instalador o la capacidad del dispositivo; Plaspy detectará automáticamente el protocolo cuando lleguen los datos.  
- El mismo puerto 8888 se usa en los dispositivos soportados por Plaspy, por lo que configure 8888 en el GPT49.  
- Las revisiones de firmware y las variantes regionales del producto pueden cambiar la sintaxis de los comandos o los parámetros soportados. Siempre verifique con la documentación de EElink cuando sea posible.

## Por qué usar Plaspy con esta configuración

Usar el GPT49 con Plaspy ofrece a las organizaciones visibilidad de activos con larga duración de batería junto con reportes de ubicación y manejo de eventos de nivel empresarial. Cuando se configura para apuntar a los ajustes de servidor Plaspy, el GPT49 puede enviar actualizaciones continuas de posición, alertas por manipulación y eventos de geocerca a los paneles de Plaspy para que los equipos monitoreen activos y respondan ante incidentes.

Para obtener más información sobre Plaspy y cómo gestiona los datos de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para métodos específicos de configuración del EElink GPT49, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de EElink https://www.eelink.com.cn/ ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
