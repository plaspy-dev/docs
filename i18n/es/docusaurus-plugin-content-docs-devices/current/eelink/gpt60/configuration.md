---
slug: /eelink/gpt60/configuration
id: gpt60-configuration
sidebar_label: Configuration
title: EElink - GPT60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS EElink GPT60 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración EElink GPT60
  - configuración GPT60
  - GPT60 Plaspy
  - configuración rastreador GPS EElink
  - configuración servidor GPT60
  - configuración rastreador Plaspy
  - configuración SMS rastreador GPS
  - configuración EELINK 2.1
  - rastreador personal GPT60
  - configuración plataforma GPS
---

# EElink - Configuración del GPT60

Esta página documenta el contexto público de configuración para usar el EElink GPT60 con la plataforma Plaspy. Se enfoca en los pasos prácticos y en los ajustes públicos que puede aplicar para apuntar el GPT60 a Plaspy, e incluye los comandos SMS del fabricante que se usan comúnmente para la configuración inicial y la verificación.

Plaspy utiliza ajustes de servidor compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El GPT60 puede configurarse mediante comandos SMS como los que se muestran abajo; siga las indicaciones del fabricante y los ejemplos aquí para alinear el dispositivo con los ajustes de servidor de Plaspy.

## Resumen de la configuración

El objetivo al configurar el GPT60 para Plaspy es preparar el dispositivo para que envíe de forma fiable datos de ubicación, eventos y estado al servidor de Plaspy y así se muestren en la plataforma para mapas, alertas e historial. La configuración suele incluir establecer el APN de datos móviles, registrar el endpoint y puerto del servidor Plaspy, ajustar el intervalo de reporte y validar que el dispositivo sea visible en Plaspy.

- Configure el APN del dispositivo para que el rastreador use datos móviles para la telemetría.
- Apunte el dispositivo al servidor Plaspy usando el dominio o la IP y el puerto compartido.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Establezca el intervalo de reporte acorde a sus necesidades de rastreo y batería.
- Verifique los parámetros y confirme que el dispositivo reporte correctamente a Plaspy.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (used across all devices in Plaspy)  
- Transport support for UDP or TCP where the device permits either option  
- Plaspy automáticamente detecta el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos soportados por Plaspy usan el mismo puerto y Plaspy maneja la detección del protocolo, por lo que solo necesita indicar el endpoint del servidor y elegir un transporte si el rastreador lo requiere.

## Requisitos típicos antes de la configuración

- Un GPT60 con batería cargada y la SIM instalada, con datos móviles y capacidad de SMS activos.  
- El APN correcto del operador de la SIM; algunas redes también requieren usuario y contraseña del APN.  
- Capacidad para enviar SMS al dispositivo o acceso a la herramienta de configuración del fabricante.  
- Acceso a una cuenta Plaspy o contacto con el propietario de la cuenta para confirmar que el dispositivo aparece y reporta datos.  
- Conocimiento del IMEI del dispositivo y de cualquier identificador de activación requerido por Plaspy o su administrador.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GPT60 envía posiciones GNSS, derivación por Wi‑Fi y LBS, y datos de eventos al endpoint y puerto del servidor Plaspy. Plaspy ingiere la telemetría y los eventos y los muestra en la plataforma para mapas, alertas y reproducción histórica.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- La telemetría y los eventos usan el protocolo EELINK 2.1 para formatear los datos hacia Plaspy.  
- Eventos como SOS, detección de caída o alertas por vibración y batería baja se transmiten a Plaspy para generar alertas.  
- Plaspy recibe actualizaciones de posición según el intervalo de reporte configurado para monitoreo en tiempo real e historial.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software del GPT60, por ejemplo comandos SMS o la herramienta de configuración de EELINK.  
2. Configure el APN del dispositivo con el APN correcto del operador y, si aplica, usuario y contraseña.  
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138.  
4. Establezca el puerto del servidor en 8888.  
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige.  
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta Plaspy con la telemetría y los eventos esperados.

## Comandos de configuración de ejemplo

El GPT60 soporta configuración vía SMS. Los siguientes comandos SMS públicos se proporcionan en la documentación del fabricante. Envíe cada comando como un SMS al número del dispositivo. Conserve los marcadores de posición como [apn] al sustituir valores.

- Reinicio opcional a valores de fábrica
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
```
APN,[apn]#
```
Si su operador requiere usuario y contraseña del APN, inclúyalos:
```
APN,[apn],[apnu],[apnp]#
```
(Marcadores: [apn] = APN del operador, [apnu] = usuario APN, [apnp] = contraseña APN)

- Establecer el servidor GPRS usando el dominio de Plaspy (ejemplo)
```
SERVER,1,d.plaspy.com,8888#
```
o establecer el servidor GPRS usando la IP de Plaspy (ejemplo)
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte/actualización cada 60 segundos
```
TIMER,60#
```

- Verificar los parámetros actuales
```
PARAM#
```

Estos comandos reflejan el flujo público de configuración por SMS para el GPT60. Use la opción de dominio o IP según convenga y tenga en cuenta posibles variaciones de sintaxis de comandos del fabricante según la versión de firmware.

## Notas de configuración

- El conjunto de comandos SMS mostrado arriba es un ejemplo público; la sintaxis exacta y los comandos disponibles pueden variar según la revisión de firmware y las variantes regionales del dispositivo.  
- El GPT60 puede configurarse por SMS como se indica, pero algunos instaladores prefieren el software del fabricante o un método OTA si está disponible.  
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos y detecta el protocolo automáticamente cuando el dispositivo se conecta.  
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que establezca el puerto 8888 al registrar el endpoint del servidor.  
- Siempre verifique los detalles y credenciales del APN con su operador de SIM si los datos móviles no se conectan después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el GPT60 con Plaspy proporciona a las organizaciones visibilidad centralizada para dispositivos de seguridad personal y rastreadores portátiles. Las múltiples modalidades de posicionamiento del dispositivo, el reporte de eventos y el soporte de EELINK 2.1 permiten que la ubicación, alertas SOS, detección de caídas y telemetría de actividad se envíen a Plaspy para mapas, alertas y revisión histórica.

Para saber más sobre cómo trabaja Plaspy con rastreadores como el GPT60 visite https://www.plaspy.com y revise los detalles más recientes del dispositivo en el sitio del fabricante https://www.eelink.com.cn/. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo, por lo que confirme las instrucciones de configuración más actuales con EElink antes del despliegue.
