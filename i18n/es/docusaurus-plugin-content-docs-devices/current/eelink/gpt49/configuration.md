---
slug: /eelink/gpt49/configuration
id: gpt49-configuration
sidebar_label: Configuration
title: EElink - GPT49 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink GPT49 y los ajustes de servidor Plaspy, incluyendo comandos SMS y verificación
keywords:
  - configuración EElink GPT49
  - instalación EElink GPT49
  - configuración GPT49 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración SMS GPT49
  - configuración APN GPT49
  - configuración rastreador de activos GPS
  - seguimiento de flotas GPT49
  - rastreador de activos EElink
  - ajustes de servidor rastreador GPS
---

# EElink - Configuración del GPT49

Esta página documenta el contexto público de configuración para usar el EElink GPT49 con Plaspy. Describe los ajustes prácticos del servidor, los comandos SMS de uso común publicados para el GPT49 y los pasos típicos necesarios para preparar el dispositivo para que Plaspy reciba datos de posición y eventos. Utilice esto como referencia de despliegue junto con la documentación oficial de EElink.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos que siguen reflejan comandos SMS públicos del GPT49 y los valores de servidor de Plaspy para que usted pueda configurar y verificar la conectividad antes de añadir el dispositivo a Plaspy.

## Resumen de la configuración

Aquí se describe el objetivo práctico al configurar un GPT49 para su uso con Plaspy: garantizar que el rastreador pueda conectarse al endpoint del servidor de Plaspy, autenticarse en la red móvil y enviar paquetes de posición y eventos con el intervalo esperado.

- Configure el APN del dispositivo para que pueda abrir una sesión de datos GPRS/LTE con la red del operador.
- Apunte el dispositivo a Plaspy usando el dominio o la IP proporcionados y el puerto compartido.
- Seleccione el transporte TCP o UDP según lo requiera el dispositivo o la red y guarde la configuración.
- Establezca el intervalo de reporte (por ejemplo, un intervalo TIMER) y verifíquelo con el comando PARAM del dispositivo.
- Valide que el dispositivo alcanza el endpoint de Plaspy y aparece en la plataforma Plaspy.
- Mantenga a mano la documentación del fabricante para variantes específicas de firmware.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Todos los dispositivos en Plaspy usan el mismo puerto. Puede usar la forma de dominio o la forma de IP al configurar el GPT49, según prefiera.

## Requisitos típicos antes de la configuración

- Un GPT49 con energía, batería cargada o fuente de alimentación conectada.
- Una SIM celular válida con datos habilitados y los detalles del APN del operador móvil.
- Acceso al método de configuración admitido por la unidad, como comandos SMS o la herramienta oficial de EElink.
- Conocimientos básicos del APN del operador y, opcionalmente, del nombre de usuario y contraseña del APN si el operador los requiere.
- Capacidad para enviar SMS desde un teléfono o un sistema de gestión si va a aplicar ajustes por SMS.
- Acceso a la documentación publicada por EElink para la sintaxis de comandos según la versión de firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GPT49 abre una sesión de datos por la red celular y envía posiciones GNSS, estado del dispositivo y banderas de eventos al endpoint y puerto del servidor Plaspy. Plaspy procesa estos paquetes para ofrecer mapas en tiempo real, historial y alertas.

- El rastreador reporta posiciones GNSS y telemetría del dispositivo al endpoint compartido de Plaspy.
- Banderas de eventos como movimiento, manipulación o alarmas se transmiten y son visibles en Plaspy.
- El dispositivo se configura para utilizar d.plaspy.com o 54.85.159.138 en el puerto 8888 para todos los reportes.
- El transporte puede ser UDP o TCP según la elección de configuración y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y procesa los datos entrantes.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de EElink para el GPT49 (comandos SMS o herramientas de configuración EElink) como se describe en la documentación del fabricante.
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el dispositivo requiere seleccionar un transporte.
5. Configure el APN del operador (y el usuario y la contraseña del APN si son necesarios) para que el dispositivo pueda establecer datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el rastreador reporta correctamente a Plaspy utilizando el comando PARAM del dispositivo o confirmando su visibilidad en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GPT49 puede configurarse por SMS usando comandos públicos. Mantenga el orden mostrado al seguir una configuración inicial. Reemplace los marcadores de posición por sus valores de operador cuando sea necesario.

- Comando opcional de reinicio inicial o de fábrica (úselo solo si necesita borrar la configuración del dispositivo):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0 (ejemplo):
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su operador. Si se requieren nombre de usuario y contraseña del APN, incluya [apnu] y [apnp] respectivamente:
```
APN,[apn]#
```
O incluyendo usuario y contraseña opcionales:
```
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS a Plaspy usando la forma de dominio:
```
SERVER,1,d.plaspy.com,8888#
```
O configurar el servidor GPRS usando la forma IP:
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación a cada 60 segundos:
```
TIMER,60#
```

- Verificar parámetros actuales en el dispositivo:
```
PARAM#
```

Notas sobre los marcadores de posición:
- [apn] es la cadena APN del operador requerida para datos.
- [apnu] es el nombre de usuario opcional del APN.
- [apnp] es la contraseña opcional del APN.
Reemplace estos marcadores con los valores proporcionados por su operador móvil.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar la sintaxis de los comandos SMS o los parámetros disponibles; siempre verifique la documentación de EElink correspondiente a su versión de firmware.
- El GPT49 soporta configuración por SMS según los ejemplos públicos; puede existir configuración alternativa mediante herramientas del fabricante o métodos OTA.
- La selección TCP versus UDP puede afectar la fiabilidad y el consumo de batería según las condiciones de la red; elija el transporte que mejor se adapte a su despliegue y pruebe el comportamiento con Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que lleguen paquetes al servidor.
- Si usa la forma de dominio d.plaspy.com, el dispositivo dependerá de la resolución DNS; la forma IP se proporciona como alternativa para redes donde el DNS esté restringido.

## Por qué usar Plaspy con esta configuración

Usar el GPT49 con Plaspy proporciona a las organizaciones visibilidad a largo plazo de sus activos y telemetría remota confiable. La capacidad multi-constelación GNSS y la larga duración de batería del GPT49 son prácticas para despliegues que requieren mantenimiento poco frecuente, mientras que Plaspy ofrece mapas centralizados, historial y alertas para monitoreo operativo y prevención de robos.

Aprenda más sobre Plaspy y las capacidades de la plataforma en https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación de configuración, verifique los detalles en el sitio web de EElink en https://www.eelink.com.cn/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
